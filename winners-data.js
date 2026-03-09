// ============================================================
// USSSA PLAYER OF THE WEEK — WINNERS DATA
// ============================================================
// To add a new winner, copy a block below and fill it in.
// id: must be unique, URL-safe (letters, numbers, hyphens only)
// sport: "baseball" | "fastpitch" | "slowpitch"
// criteria: array of "role-model" | "unique" | "teammate" | "community"
// postUrl: link to the social media post (or "" if none yet)
// photo: URL to player photo (Unsplash, your CDN, etc.)
// ============================================================

const WINNERS = [
  {
    id: "marcus-thompson-2025-w01",
    name: "Marcus Thompson",
    age: 14,
    position: "Shortstop",
    team: "FL Marlins Gold",
    state: "Florida",
    sport: "baseball",
    week: 1,
    year: 2025,
    weekLabel: "Week 1 · 2025",
    photo: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&h=600&fit=crop&crop=faces,top",
    shortBio: "Marcus organized a food drive from the dugout before his team's biggest tournament of the year — collecting over 200 cans for a local food bank.",
    fullBio: "Marcus Thompson isn't just one of the best shortstops in Florida's 14U division — he's the kind of teammate and community leader that makes everyone around him better. This past month, Marcus organized a food drive from his team's dugout, personally reaching out to opposing teams, parents, and tournament directors to collect over 200 cans of food for a local food bank. He did all of this in the week before his team's biggest tournament of the season, and still went out and hit .450 with 3 stolen bases. His coaches describe him as the first one to encourage a struggling teammate and the last one to leave the field. Marcus exemplifies everything the USSSA Player of the Week award stands for.",
    criteria: ["community", "teammate", "role-model"],
    postUrl: "https://instagram.com/usssa",
    nominatedBy: "Coach David Hart",
    relationship: "Head Coach"
  },
  {
    id: "jordan-reyes-2025-w02",
    name: "Jordan Reyes",
    age: 12,
    position: "Pitcher / 1B",
    team: "Georgia Thunder 12U",
    state: "Georgia",
    sport: "baseball",
    week: 2,
    year: 2025,
    weekLabel: "Week 2 · 2025",
    photo: "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=600&h=600&fit=crop&crop=faces,top",
    shortBio: "Jordan stayed after every game this season to help coaches break down the field — and spent his off-weekends running free pitching clinics for 8U players.",
    fullBio: "At 12 years old, Jordan Reyes already understands something most adults take years to learn: the game gives back what you put in. Jordan has spent every Saturday this fall running free pitching clinics for 8U players at his local park. He builds the curriculum himself, shows up early to set up, and stays late to answer questions. His own coaches say they've never had to ask him to do anything twice. Jordan's teammates voted him team captain this season — not because he throws the hardest, but because he cares the most.",
    criteria: ["community", "unique", "role-model"],
    postUrl: "https://instagram.com/usssa",
    nominatedBy: "Sarah Reyes",
    relationship: "Parent"
  },
  {
    id: "alyssa-chen-2025-w01",
    name: "Alyssa Chen",
    age: 15,
    position: "Catcher",
    team: "Texas Firehawks 14U",
    state: "Texas",
    sport: "fastpitch",
    week: 1,
    year: 2025,
    weekLabel: "Week 1 · 2025",
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop&crop=faces,center",
    shortBio: "Alyssa visited three children's hospitals after her team's regional championship run, bringing gear, smiles, and an unbeatable attitude to kids who needed it most.",
    fullBio: "Alyssa Chen led the Texas Firehawks to their best finish in program history this summer — but what happened after the final out is what made her a Player of the Week. Alyssa organized a post-tournament hospital visit to three children's hospitals in the Dallas area, bringing signed gear, rally towels, and her entire team. She coordinated everything herself, including reaching out to hospital staff for scheduling. The kids she visited lit up — and so did her teammates. Alyssa leads from behind the plate in the most literal sense: she sees everything, communicates constantly, and makes every pitcher on her staff better.",
    criteria: ["community", "role-model", "teammate"],
    postUrl: "https://instagram.com/usssa",
    nominatedBy: "Coach Michelle Park",
    relationship: "Head Coach"
  },
  {
    id: "carlos-mendez-2025-w03",
    name: "Carlos Mendez",
    age: 16,
    position: "Center Field",
    team: "Houston Prospects 16U",
    state: "Texas",
    sport: "baseball",
    week: 3,
    year: 2025,
    weekLabel: "Week 3 · 2025",
    photo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop&crop=top",
    shortBio: "Carlos built a free baseball clinic in his Houston neighborhood from scratch — no sponsors, no budget, just passion and a borrowed set of batting tees.",
    fullBio: "Carlos Mendez grew up watching kids in his Houston neighborhood with no access to organized baseball. So he decided to fix it. With no outside funding and no organizational support, Carlos put together a free Saturday baseball clinic for 20 kids aged 6–10 in his community. He recruited two teammates to help coach, borrowed equipment from his high school, and ran it for six consecutive weeks. Fourteen of those 20 kids signed up for a recreational league the following spring. Carlos was their biggest cheerleader at every game. On the field, Carlos hit .480 with 5 outfield assists this summer. Off it, he's changing lives.",
    criteria: ["community", "unique", "role-model"],
    postUrl: "https://instagram.com/usssa",
    nominatedBy: "Marco Mendez",
    relationship: "Parent"
  },
  {
    id: "brittany-walker-2025-w02",
    name: "Brittany Walker",
    age: 13,
    position: "Shortstop / Pitcher",
    team: "Carolina Storm 12U",
    state: "North Carolina",
    sport: "fastpitch",
    week: 2,
    year: 2025,
    weekLabel: "Week 2 · 2025",
    photo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=600&fit=crop&crop=top",
    shortBio: "When a teammate's family lost their home to a fire mid-season, Brittany rallied the entire league to raise over $3,000 in relief funds within 48 hours.",
    fullBio: "When Brittany Walker found out her teammate's family had lost their home to a fire two days before a major tournament, she didn't hesitate. Within 48 hours, Brittany had organized a fundraiser, reached out to every team in the league, and raised over $3,000 in relief funds — all while preparing for the biggest weekend of her team's season. Her team went on to win the tournament. After the final game, Brittany handed the fundraiser envelope to her teammate on the field in front of both teams. It was the biggest moment of the weekend — and it had nothing to do with softball.",
    criteria: ["community", "teammate", "unique"],
    postUrl: "https://instagram.com/usssa",
    nominatedBy: "Coach Diane Simmons",
    relationship: "Head Coach"
  },
  {
    id: "ray-johnson-2025-w01",
    name: "Ray Johnson",
    age: 38,
    position: "First Base",
    team: "Gulf Coast Legends",
    state: "Florida",
    sport: "slowpitch",
    week: 1,
    year: 2025,
    weekLabel: "Week 1 · 2025",
    photo: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=600&h=600&fit=crop&crop=center",
    shortBio: "Ray turned a USSSA slowpitch tournament into a full community fundraiser for a local youth baseball program — raising $8,500 in one weekend.",
    fullBio: "Ray Johnson has been playing USSSA slowpitch for 14 years, but this past season he did something that had nothing to do with box scores. Ray partnered with tournament directors at the Gulf Coast Classic to transform the event into a community fundraiser for a local youth baseball program that had lost its field. He secured sponsorships from 11 local businesses, set up a raffle, and coordinated a jersey auction — raising $8,500 in a single weekend. The program used the funds to resurface their infield and purchase new equipment for 45 kids. Ray's team finished second in the tournament. He didn't care.",
    criteria: ["community", "role-model", "unique"],
    postUrl: "https://instagram.com/usssa",
    nominatedBy: "Tournament Director Mike Ross",
    relationship: "Tournament Director"
  }
];

// ============================================================
// HELPER FUNCTIONS (used by both hall-of-fame.html and winner.html)
// ============================================================

const CRITERIA_LABELS = {
  "role-model": { emoji: "🏅", label: "Role Model" },
  "unique":     { emoji: "⭐", label: "Unique & Interesting" },
  "teammate":   { emoji: "🤝", label: "Great Teammate" },
  "community":  { emoji: "🌍", label: "Community Impact" }
};

const SPORT_CONFIG = {
  baseball:   { label: "Baseball",   color: "#002B5C", emoji: "⚾" },
  fastpitch:  { label: "Fastpitch",  color: "#7B1FA2", emoji: "🥎" },
  slowpitch:  { label: "Slowpitch",  color: "#1B5E20", emoji: "🏌️" }
};

function getWinnerById(id) {
  return WINNERS.find(w => w.id === id) || null;
}

function getWinnersBySport(sport) {
  if (sport === 'all') return WINNERS;
  return WINNERS.filter(w => w.sport === sport);
}
