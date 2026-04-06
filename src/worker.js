export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle intern application API
    if (url.pathname === '/api/intern-apply' && request.method === 'POST') {
      return handleInternApply(request, env);
    }

    // Handle intern applications list (admin)
    if (url.pathname === '/api/intern-applications' && request.method === 'GET') {
      return handleGetApplications(request, env);
    }

    // Handle intern application status update (admin)
    if (url.pathname === '/api/intern-application-status' && request.method === 'POST') {
      return handleUpdateStatus(request, env);
    }

    // Handle letter submission
    if (url.pathname === '/api/letter-submit' && request.method === 'POST') {
      return handleLetterSubmit(request, env);
    }

    // Handle letter submissions list (admin)
    if (url.pathname === '/api/letter-submissions' && request.method === 'GET') {
      return handleGetLetters(request, env);
    }

    // Handle letter status update (admin)
    if (url.pathname === '/api/letter-status' && request.method === 'POST') {
      return handleLetterStatus(request, env);
    }

    // Handle POTW nomination
    if (url.pathname === '/api/potw-nominate' && request.method === 'POST') {
      return handlePotwNominate(request, env);
    }

    // Handle POTW nominations list (admin)
    if (url.pathname === '/api/potw-nominations' && request.method === 'GET') {
      return handleGetPotwNominations(request, env);
    }

    // Handle POTW nomination status update (admin)
    if (url.pathname === '/api/potw-status' && request.method === 'POST') {
      return handlePotwStatus(request, env);
    }

    // Redirect /stories to /letter
    if (url.pathname === '/stories') {
      return Response.redirect(url.origin + '/letter', 301);
    }

    // Everything else: serve static assets
    return env.ASSETS.fetch(request);
  }
};

async function handleInternApply(request, env) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.first_name || !data.last_name || !data.email || !data.resume_link) {
      return json({ success: false, error: 'Missing required fields' }, 400);
    }

    // Basic email validation
    if (!data.email.includes('@') || !data.email.includes('.')) {
      return json({ success: false, error: 'Invalid email address' }, 400);
    }

    // Check for duplicate email
    const existing = await env.DB.prepare(
      'SELECT id FROM intern_applications WHERE email = ?'
    ).bind(data.email).first();

    if (existing) {
      return json({ success: false, error: 'An application with this email already exists' }, 400);
    }

    // Insert application
    await env.DB.prepare(
      `INSERT INTO intern_applications (first_name, last_name, email, phone, instagram, tiktok, resume_link)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      data.first_name,
      data.last_name,
      data.email,
      data.phone || '',
      data.instagram || '',
      data.tiktok || '',
      data.resume_link
    ).run();

    return json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    return json({ success: false, error: 'Failed to submit application. Please try again.' }, 500);
  }
}

async function handleGetApplications(request, env) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get('status');

    let query = 'SELECT * FROM intern_applications';
    let params = [];

    if (status && status !== 'all') {
      query += ' WHERE status = ?';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC';

    const stmt = params.length > 0
      ? env.DB.prepare(query).bind(...params)
      : env.DB.prepare(query);

    const result = await stmt.all();
    return json({ success: true, applications: result.results });
  } catch (err) {
    return json({ success: false, error: 'Failed to fetch applications' }, 500);
  }
}

async function handleUpdateStatus(request, env) {
  try {
    const data = await request.json();
    if (!data.id || !data.status) {
      return json({ success: false, error: 'Missing id or status' }, 400);
    }

    await env.DB.prepare(
      `UPDATE intern_applications SET status = ?, notes = ?, updated_at = datetime('now') WHERE id = ?`
    ).bind(data.status, data.notes || '', data.id).run();

    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: 'Failed to update application' }, 500);
  }
}

// ===== LETTER SUBMISSIONS =====

async function handleLetterSubmit(request, env) {
  try {
    const data = await request.json();

    if (!data.athlete_first || !data.athlete_last || !data.email || !data.letter_to || !data.story) {
      return json({ success: false, error: 'Missing required fields' }, 400);
    }

    if (!data.email.includes('@') || !data.email.includes('.')) {
      return json({ success: false, error: 'Invalid email address' }, 400);
    }

    await env.DB.prepare(
      `INSERT INTO letter_submissions (athlete_first, athlete_last, athlete_age, sport, city, email, phone, letter_to, relationship, story, video_link, submitter)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      data.athlete_first,
      data.athlete_last,
      data.athlete_age || null,
      data.sport || '',
      data.city || '',
      data.email,
      data.phone || '',
      data.letter_to,
      data.relationship || '',
      data.story,
      data.video_link || '',
      data.submitter || ''
    ).run();

    return json({ success: true, message: 'Story submitted successfully' });
  } catch (err) {
    return json({ success: false, error: 'Failed to submit story. Please try again.' }, 500);
  }
}

async function handleGetLetters(request, env) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get('status');

    let query = 'SELECT * FROM letter_submissions';
    let params = [];

    if (status && status !== 'all') {
      query += ' WHERE status = ?';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC';

    const stmt = params.length > 0
      ? env.DB.prepare(query).bind(...params)
      : env.DB.prepare(query);

    const result = await stmt.all();
    return json({ success: true, submissions: result.results });
  } catch (err) {
    return json({ success: false, error: 'Failed to fetch submissions' }, 500);
  }
}

async function handleLetterStatus(request, env) {
  try {
    const data = await request.json();
    if (!data.id || !data.status) {
      return json({ success: false, error: 'Missing id or status' }, 400);
    }

    await env.DB.prepare(
      `UPDATE letter_submissions SET status = ?, notes = ?, rating = ?, updated_at = datetime('now') WHERE id = ?`
    ).bind(data.status, data.notes || '', data.rating || 0, data.id).run();

    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: 'Failed to update submission' }, 500);
  }
}

// ===== POTW NOMINATIONS =====

async function handlePotwNominate(request, env) {
  try {
    const data = await request.json();

    if (!data.player_first || !data.player_last || !data.reason || !data.nominator_name || !data.nominator_email) {
      return json({ success: false, error: 'Missing required fields' }, 400);
    }

    if (!data.nominator_email.includes('@') || !data.nominator_email.includes('.')) {
      return json({ success: false, error: 'Invalid email address' }, 400);
    }

    await env.DB.prepare(
      `INSERT INTO potw_nominations (player_first, player_last, age_division, team_name, state, position, reason, criteria, nominator_name, relationship, nominator_email, media_link)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      data.player_first,
      data.player_last,
      data.age_division || '',
      data.team_name || '',
      data.state || '',
      data.position || '',
      data.reason,
      data.criteria || '',
      data.nominator_name,
      data.relationship || '',
      data.nominator_email,
      data.media_link || ''
    ).run();

    return json({ success: true, message: 'Nomination submitted successfully' });
  } catch (err) {
    return json({ success: false, error: 'Failed to submit nomination. Please try again.' }, 500);
  }
}

async function handleGetPotwNominations(request, env) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get('status');

    let query = 'SELECT * FROM potw_nominations';
    let params = [];

    if (status && status !== 'all') {
      query += ' WHERE status = ?';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC';

    const stmt = params.length > 0
      ? env.DB.prepare(query).bind(...params)
      : env.DB.prepare(query);

    const result = await stmt.all();
    return json({ success: true, nominations: result.results });
  } catch (err) {
    return json({ success: false, error: 'Failed to fetch nominations' }, 500);
  }
}

async function handlePotwStatus(request, env) {
  try {
    const data = await request.json();
    if (!data.id || !data.status) {
      return json({ success: false, error: 'Missing id or status' }, 400);
    }

    await env.DB.prepare(
      `UPDATE potw_nominations SET status = ?, notes = ?, updated_at = datetime('now') WHERE id = ?`
    ).bind(data.status, data.notes || '', data.id).run();

    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: 'Failed to update nomination' }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
