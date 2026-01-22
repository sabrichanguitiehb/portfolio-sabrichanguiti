let part1 = [
    "Electric", "Neon", "Crimson", "Midnight", "Golden", "Astral", "Feral", "Broken", "Silent", "Endless",
    "Phantom", "Frozen", "Velvet", "Hollow", "Solar", "Cosmic", "Doomed", "Fading", "Fuzzy", "Molten",
    "Violet", "Rusty", "Emerald", "Starlit", "Enchanted", "Reckless", "Burning", "Iron", "Sacred",
    "Wandering", "Synthetic", "Shadow", "Thunder", "Eternal", "Radiant", "Obsidian", "Wicked", "Urban",
    "Wild", "Haunted", "Secret", "Lunar", "Glowing", "Stranded", "Infinite", "Wired", "Ghostly", "Brutal",
    "Savage", "Blackened", "Infernal", "Abyssal", "Grim", "Raging", "Toxic", "Gutter", "Anarchic",
    "Chaotic", "Vintage", "Retro", "Turbo", "Chrome", "Analog", "Pastel", "Digital", "Quantum", "Hyper",
    "Solarized", "Arcade", "Vapor", "Mystic", "Runic", "Rustic", "Worn", "Timber", "Autumn", "Forest",
    "Woven", "Folkloric", "Echoing", "Bass-Driven", "Kinetic", "Pulsing", "Fractal", "Synth-Laced",
    "Holographic", "Laser-Burned", "Boom-Bap", "Golden-Era", "Flowing", "Rhythmic", "Cipher", "Concrete",
    "Skyline", "Streetlight", "Echo-Chamber", "Afterglow", "Chromatic", "Fire-Forged", "Spellbound"
];

let part2 = [
    "Tigers", "Orbits", "Echoes", "Canyons", "Rituals", "Engineers", "Crows", "Pirates", "Giants", "Mirrors",
    "Vipers", "Wolves", "Signals", "Dreamers", "Cascades", "Monoliths", "Circuits", "Runaways", "Voyagers",
    "Vultures", "Horizons", "Golems", "Skeletons", "Nomads", "Comets", "Rebels", "Banshees", "Prophets",
    "Drifters", "Tempests", "Phantoms", "Machines", "Storms", "Sirens", "Cacti", "Ghosts", "Dragons",
    "Dynamos", "Statues", "Knives", "Pilgrims", "Idols", "Guardians", "Ravens", "Serpents", "Juggernauts",
    "Demons", "Warlords", "Gravewalkers", "Mourners", "Executioners", "Cultists", "Gargoyles", "Panthers",
    "Hydras", "Thrones", "Dungeons", "Crusaders", "Outlaws", "Saboteurs", "Sabers", "Vandals", "Scorpions",
    "Bruisers", "Dropouts", "Rejects", "Decay", "Rioters", "Misfits", "Retrogrades", "Arcaders", "Lasers",
    "Synths", "Daydreamers", "Nightdrivers", "Lightchasers", "Specters", "Runecarvers", "Balladeers",
    "Minstrels", "Wanderers", "Treetops", "Riverfolk", "Drumlords", "Basslines", "Waveforms", "Shadows",
    "Subwoofers", "Beatmakers", "Rhymecasters", "Street Poets", "Cipher Kids", "Turntablists",
    "Storytellers", "Dreamweavers", "Timekeepers", "Gridrunners"
];

let part3 = [
    "Collective", "Syndicate", "Division", "Assembly", "Uprising", "Network", "Choir", "Alliance",
    "Empire", "Project", "Conspiracy", "Coalition", "Movement", "Brotherhood", "Rebellion", "Legion",
    "Society", "Unit", "Machine", "Protocol", "Council", "Company", "Dynasty", "Agenda", "Experiment",
    "Frontier", "Order", "Manifesto", "Program", "Union", "Circuit", "Crew", "Cult", "Chapter",
    "Engine", "Brigade", "Authority", "Faction", "Mob", "Sect", "Regiment", "Guild", "Horde", "Pact",
    "Covenant", "Ritual", "Forge", "Circle", "Crusade", "Revue", "Revival", "Ramblers", "Roamers",
    "Assembly", "Tribe", "Ensemble", "Campfire", "Brotherhood", "Beat Unit", "Cipher Crew",
    "Bass Syndicate", "808 Order", "Vinyl Guild", "Groove Collective", "Wavefront", "Order",
    "Retro Society", "Synth Division", "Pulse Network", "Drift Project", "Midnight Union",
    "Thrash Battalion", "Punk Chapter", "Folk Brigade"
];


let p1, p2, p3;
let x1, x2, x3;
let y1, y2, y3;

function setup() {
    frameRate(25);
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(100);

    p1 = random(part1);
    p2 = random(part2);
    p3 = random(part3);
}

function mouseClicked() {
    p1 = random(part1);
    p2 = random(part2);
    p3 = random(part3);
}

function draw() {
    background(20);
    fill(255);

    fill(255, 0, 0);
    text(p1, width / 2 + random(-5, 5), height / 4 + random(-5, 5));
    fill(255, 255, 0);
    text(p2, width / 2 + random(-5, 5), height / 2 + random(-5, 5));
    fill(0, 0, 255);
    text(p3, width / 2 + random(-5, 5), height / 4 * 3 + random(-5, 5));
}

