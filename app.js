const cards = [
  {
    team: "Atlanta Hawks",
    initials: "ATL",
    colors: ["#E03A3E", "#26282A"],
    difficulty: "easy",
    clue: "This team can swoop through the sky like a bird looking for lunch.",
    explanation: "A hawk is a fast bird with sharp eyes."
  },
  {
    team: "Atlanta Hawks",
    initials: "ATL",
    colors: ["#E03A3E", "#26282A"],
    difficulty: "medium",
    clue: "This team has wings, talons, and a great view from above.",
    explanation: "Hawks fly high and use talons to grab things."
  },
  {
    team: "Atlanta Hawks",
    initials: "ATL",
    colors: ["#E03A3E", "#26282A"],
    difficulty: "hard",
    clue: "This team might spot you from way up high during hide-and-seek.",
    explanation: "Hawks are known for amazing eyesight."
  },
  {
    team: "Boston Celtics",
    initials: "BOS",
    colors: ["#007A33", "#BA9653"],
    difficulty: "easy",
    clue: "This team has a lucky shamrock kind of feeling.",
    explanation: "The Celtics are linked with Irish symbols like shamrocks."
  },
  {
    team: "Boston Celtics",
    initials: "BOS",
    colors: ["#007A33", "#BA9653"],
    difficulty: "medium",
    clue: "This team is green, lucky, and from Boston.",
    explanation: "Green and Irish-inspired luck point to the Celtics."
  },
  {
    team: "Boston Celtics",
    initials: "BOS",
    colors: ["#007A33", "#BA9653"],
    difficulty: "hard",
    clue: "This team sounds like old stories from Ireland, Scotland, and Wales.",
    explanation: "Celtic culture is connected to those places."
  },
  {
    team: "Brooklyn Nets",
    initials: "BKN",
    colors: ["#000000", "#777777"],
    difficulty: "easy",
    clue: "This team is what the ball goes through when you make a basket.",
    explanation: "A basketball hoop has a net."
  },
  {
    team: "Brooklyn Nets",
    initials: "BKN",
    colors: ["#000000", "#777777"],
    difficulty: "medium",
    clue: "This team can catch fish, but this one hangs under a hoop.",
    explanation: "A net can catch fish, and basketball hoops have nets."
  },
  {
    team: "Brooklyn Nets",
    initials: "BKN",
    colors: ["#000000", "#777777"],
    difficulty: "hard",
    clue: "This team is something every swish gets to visit.",
    explanation: "A swish goes cleanly through the net."
  },
  {
    team: "Charlotte Hornets",
    initials: "CHA",
    colors: ["#1D1160", "#00788C"],
    difficulty: "easy",
    clue: "This team is a buzzing insect that can sting you.",
    explanation: "A hornet is a stinging insect."
  },
  {
    team: "Charlotte Hornets",
    initials: "CHA",
    colors: ["#1D1160", "#00788C"],
    difficulty: "medium",
    clue: "This team is a tiny flyer that might make you wave your arms and run away.",
    explanation: "People often back away from hornets because they can sting."
  },
  {
    team: "Charlotte Hornets",
    initials: "CHA",
    colors: ["#1D1160", "#00788C"],
    difficulty: "hard",
    clue: "This team lives in a nest, but it is not a bird.",
    explanation: "Hornets build nests even though they are insects."
  },
  {
    team: "Chicago Bulls",
    initials: "CHI",
    colors: ["#CE1141", "#000000"],
    difficulty: "easy",
    clue: "This team is a strong farm animal with horns.",
    explanation: "A bull is a powerful animal with horns."
  },
  {
    team: "Chicago Bulls",
    initials: "CHI",
    colors: ["#CE1141", "#000000"],
    difficulty: "medium",
    clue: "This team might charge if it gets really annoyed.",
    explanation: "Bulls are often pictured charging forward."
  },
  {
    team: "Chicago Bulls",
    initials: "CHI",
    colors: ["#CE1141", "#000000"],
    difficulty: "hard",
    clue: "This team might be ready to rumble if it saw a red cape.",
    explanation: "Bullfighting stories often include a bull and a cape."
  },
  {
    team: "Cleveland Cavaliers",
    initials: "CLE",
    colors: ["#860038", "#FDBB30"],
    difficulty: "easy",
    clue: "This team sounds like a brave person with a sword.",
    explanation: "A cavalier can mean a daring or knight-like person."
  },
  {
    team: "Cleveland Cavaliers",
    initials: "CLE",
    colors: ["#860038", "#FDBB30"],
    difficulty: "medium",
    clue: "This team name feels like adventure, capes, and old-time battles.",
    explanation: "Cavaliers have an old-fashioned, brave-adventurer feeling."
  },
  {
    team: "Cleveland Cavaliers",
    initials: "CLE",
    colors: ["#860038", "#FDBB30"],
    difficulty: "hard",
    clue: "This team might tip a feathered hat before a daring quest.",
    explanation: "Cavaliers are often imagined as stylish, bold adventurers."
  },
  {
    team: "Dallas Mavericks",
    initials: "DAL",
    colors: ["#00538C", "#B8C4CA"],
    difficulty: "easy",
    clue: "This team name sounds like someone who does things their own way.",
    explanation: "A maverick is an independent person."
  },
  {
    team: "Dallas Mavericks",
    initials: "DAL",
    colors: ["#00538C", "#B8C4CA"],
    difficulty: "medium",
    clue: "This team might ride across Texas and make its own rules.",
    explanation: "Mavericks have a Western, independent spirit."
  },
  {
    team: "Dallas Mavericks",
    initials: "DAL",
    colors: ["#00538C", "#B8C4CA"],
    difficulty: "hard",
    clue: "This team points to a free thinker, not just a horse on a ranch.",
    explanation: "Maverick can mean independent, and the team also uses horse imagery."
  },
  {
    team: "Denver Nuggets",
    initials: "DEN",
    colors: ["#0E2240", "#FEC524"],
    difficulty: "easy",
    clue: "This team can be a little piece of gold.",
    explanation: "A nugget can be a small lump of gold."
  },
  {
    team: "Denver Nuggets",
    initials: "DEN",
    colors: ["#0E2240", "#FEC524"],
    difficulty: "medium",
    clue: "This team is a shiny prize you might dig for in the mountains.",
    explanation: "Gold nuggets are connected to mining and mountains."
  },
  {
    team: "Denver Nuggets",
    initials: "DEN",
    colors: ["#0E2240", "#FEC524"],
    difficulty: "hard",
    clue: "This team could be treasure from Colorado's mining days.",
    explanation: "Denver's name connects to gold nuggets and Western mining history."
  },
  {
    team: "Detroit Pistons",
    initials: "DET",
    colors: ["#C8102E", "#1D42BA"],
    difficulty: "easy",
    clue: "This team is part of an engine.",
    explanation: "A piston moves inside an engine."
  },
  {
    team: "Detroit Pistons",
    initials: "DET",
    colors: ["#C8102E", "#1D42BA"],
    difficulty: "medium",
    clue: "This team belongs in a car, going up and down to help it move.",
    explanation: "Pistons move inside engines to help power cars."
  },
  {
    team: "Detroit Pistons",
    initials: "DET",
    colors: ["#C8102E", "#1D42BA"],
    difficulty: "hard",
    clue: "This team name fits a city famous for making automobiles.",
    explanation: "Detroit is famous for cars, and pistons are engine parts."
  },
  {
    team: "Golden State Warriors",
    initials: "GSW",
    colors: ["#1D428A", "#FFC72C"],
    difficulty: "easy",
    clue: "This team is another word for a fighter.",
    explanation: "A warrior is a brave fighter."
  },
  {
    team: "Golden State Warriors",
    initials: "GSW",
    colors: ["#1D428A", "#FFC72C"],
    difficulty: "medium",
    clue: "This team name sounds ready for a brave battle.",
    explanation: "Warriors are known for courage in battle."
  },
  {
    team: "Golden State Warriors",
    initials: "GSW",
    colors: ["#1D428A", "#FFC72C"],
    difficulty: "hard",
    clue: "This team could carry a shield, but today it carries a basketball.",
    explanation: "A warrior might carry a shield in stories."
  },
  {
    team: "Houston Rockets",
    initials: "HOU",
    colors: ["#CE1141", "#000000"],
    difficulty: "easy",
    clue: "This team can blast off into space.",
    explanation: "Rockets launch into space."
  },
  {
    team: "Houston Rockets",
    initials: "HOU",
    colors: ["#CE1141", "#000000"],
    difficulty: "medium",
    clue: "This team is ready to fly after a countdown from ten.",
    explanation: "Rocket launches often begin with a countdown."
  },
  {
    team: "Houston Rockets",
    initials: "HOU",
    colors: ["#CE1141", "#000000"],
    difficulty: "hard",
    clue: "This team fits a city known for mission control.",
    explanation: "Houston is famous for its connection to space missions."
  },
  {
    team: "Indiana Pacers",
    initials: "IND",
    colors: ["#002D62", "#FDBB30"],
    difficulty: "easy",
    clue: "This team name sounds like someone setting the speed.",
    explanation: "A pacer helps set a pace."
  },
  {
    team: "Indiana Pacers",
    initials: "IND",
    colors: ["#002D62", "#FDBB30"],
    difficulty: "medium",
    clue: "This team might lead the pack so everyone knows how fast to go.",
    explanation: "Pacers set the speed for others."
  },
  {
    team: "Indiana Pacers",
    initials: "IND",
    colors: ["#002D62", "#FDBB30"],
    difficulty: "hard",
    clue: "This team also nods to a state famous for racing laps.",
    explanation: "Indiana is known for auto racing, and pace cars help races."
  },
  {
    team: "LA Clippers",
    initials: "LAC",
    colors: ["#C8102E", "#1D428A"],
    difficulty: "easy",
    clue: "This team can be a fast sailing ship.",
    explanation: "A clipper is a type of quick sailing ship."
  },
  {
    team: "LA Clippers",
    initials: "LAC",
    colors: ["#C8102E", "#1D428A"],
    difficulty: "medium",
    clue: "This team name belongs on the ocean with tall sails.",
    explanation: "Clipper ships had big sails and traveled over water."
  },
  {
    team: "LA Clippers",
    initials: "LAC",
    colors: ["#C8102E", "#1D428A"],
    difficulty: "hard",
    clue: "This team used to race across the sea before airplanes existed.",
    explanation: "Clipper ships were known for speed on long sea trips."
  },
  {
    team: "Los Angeles Lakers",
    initials: "LAL",
    colors: ["#552583", "#FDB927"],
    difficulty: "easy",
    clue: "This team name makes you think of big water you can swim in.",
    explanation: "A lake is a large body of water."
  },
  {
    team: "Los Angeles Lakers",
    initials: "LAL",
    colors: ["#552583", "#FDB927"],
    difficulty: "medium",
    clue: "This team could be found near boats, docks, and fishing poles.",
    explanation: "Lakes often have boats, docks, and fishing."
  },
  {
    team: "Los Angeles Lakers",
    initials: "LAL",
    colors: ["#552583", "#FDB927"],
    difficulty: "hard",
    clue: "This team has a Los Angeles name that sounds more Minnesota than beach town.",
    explanation: "The Lakers name came from Minnesota, the land of many lakes."
  },
  {
    team: "Memphis Grizzlies",
    initials: "MEM",
    colors: ["#5D76A9", "#12173F"],
    difficulty: "easy",
    clue: "This team is a big bear that might love catching salmon.",
    explanation: "A grizzly is a large bear."
  },
  {
    team: "Memphis Grizzlies",
    initials: "MEM",
    colors: ["#5D76A9", "#12173F"],
    difficulty: "medium",
    clue: "This team has paws, fur, and a very loud growl.",
    explanation: "Grizzly bears are large, furry, and powerful."
  },
  {
    team: "Memphis Grizzlies",
    initials: "MEM",
    colors: ["#5D76A9", "#12173F"],
    difficulty: "hard",
    clue: "This team could be taller than your dad if it stood up.",
    explanation: "Grizzly bears can be very tall when standing."
  },
  {
    team: "Miami Heat",
    initials: "MIA",
    colors: ["#98002E", "#F9A01B"],
    difficulty: "easy",
    clue: "This team can make you sweat on a summer day.",
    explanation: "Heat is warmth that can make people sweat."
  },
  {
    team: "Miami Heat",
    initials: "MIA",
    colors: ["#98002E", "#F9A01B"],
    difficulty: "medium",
    clue: "This team might come from the sun, a stove, or a spicy pepper.",
    explanation: "Heat can come from hot weather, cooking, or spicy food."
  },
  {
    team: "Miami Heat",
    initials: "MIA",
    colors: ["#98002E", "#F9A01B"],
    difficulty: "hard",
    clue: "This team feels right for a sunny city where ice cream melts fast.",
    explanation: "Miami is warm, and heat melts ice cream."
  },
  {
    team: "Milwaukee Bucks",
    initials: "MIL",
    colors: ["#00471B", "#EEE1C6"],
    difficulty: "easy",
    clue: "This team is a male deer with antlers.",
    explanation: "A buck is a male deer."
  },
  {
    team: "Milwaukee Bucks",
    initials: "MIL",
    colors: ["#00471B", "#EEE1C6"],
    difficulty: "medium",
    clue: "This team could leap through the woods with antlers on its head.",
    explanation: "Bucks are deer that move through forests."
  },
  {
    team: "Milwaukee Bucks",
    initials: "MIL",
    colors: ["#00471B", "#EEE1C6"],
    difficulty: "hard",
    clue: "This team might leave hoofprints in fresh snow.",
    explanation: "Deer have hooves and live in places with snow."
  },
  {
    team: "Minnesota Timberwolves",
    initials: "MIN",
    colors: ["#0C2340", "#78BE20"],
    difficulty: "easy",
    clue: "This team is a wild dog that might howl at the moon.",
    explanation: "Wolves are known for howling."
  },
  {
    team: "Minnesota Timberwolves",
    initials: "MIN",
    colors: ["#0C2340", "#78BE20"],
    difficulty: "medium",
    clue: "This team runs in a pack through forests.",
    explanation: "Timberwolves are wolves that live and hunt in packs."
  },
  {
    team: "Minnesota Timberwolves",
    initials: "MIN",
    colors: ["#0C2340", "#78BE20"],
    difficulty: "hard",
    clue: "This team points to a forest hunter with a snowy northern vibe.",
    explanation: "Timberwolves are associated with forests and northern places."
  },
  {
    team: "New Orleans Pelicans",
    initials: "NOP",
    colors: ["#0C2340", "#C8102E"],
    difficulty: "easy",
    clue: "This team is a bird with a big pouch under its beak.",
    explanation: "Pelicans have large throat pouches."
  },
  {
    team: "New Orleans Pelicans",
    initials: "NOP",
    colors: ["#0C2340", "#C8102E"],
    difficulty: "medium",
    clue: "This team can scoop up fish like it brought a built-in bucket.",
    explanation: "A pelican uses its pouch to scoop fish."
  },
  {
    team: "New Orleans Pelicans",
    initials: "NOP",
    colors: ["#0C2340", "#C8102E"],
    difficulty: "hard",
    clue: "This team is a coastal bird that could glide over the Gulf before dinner.",
    explanation: "Pelicans live near coasts, including the Gulf Coast."
  },
  {
    team: "New York Knicks",
    initials: "NYK",
    colors: ["#006BB6", "#F58426"],
    difficulty: "easy",
    clue: "This team has a full old name that sounds like very baggy pants.",
    explanation: "Knicks is short for Knickerbockers, an old word for knee-length pants."
  },
  {
    team: "New York Knicks",
    initials: "NYK",
    colors: ["#006BB6", "#F58426"],
    difficulty: "medium",
    clue: "This team has a New York nickname for an old-fashioned outfit.",
    explanation: "Knicks comes from Knickerbockers."
  },
  {
    team: "New York Knicks",
    initials: "NYK",
    colors: ["#006BB6", "#F58426"],
    difficulty: "hard",
    clue: "This team is about pants that stop near the knee, not a creature.",
    explanation: "Knickerbockers were knee-length trousers."
  },
  {
    team: "Oklahoma City Thunder",
    initials: "OKC",
    colors: ["#007AC1", "#EF3B24"],
    difficulty: "easy",
    clue: "This team is a loud boom you hear during a storm.",
    explanation: "Thunder is the sound that comes with lightning storms."
  },
  {
    team: "Oklahoma City Thunder",
    initials: "OKC",
    colors: ["#007AC1", "#EF3B24"],
    difficulty: "medium",
    clue: "This team usually arrives after a flash of lightning.",
    explanation: "Thunder often follows lightning."
  },
  {
    team: "Oklahoma City Thunder",
    initials: "OKC",
    colors: ["#007AC1", "#EF3B24"],
    difficulty: "hard",
    clue: "This team is not something you see, but you might feel it rumble.",
    explanation: "Thunder is a sound and vibration, not a visible thing."
  },
  {
    team: "Orlando Magic",
    initials: "ORL",
    colors: ["#0077C0", "#C4CED4"],
    difficulty: "easy",
    clue: "This team might come from a wand.",
    explanation: "Magic is often shown with wands in stories."
  },
  {
    team: "Orlando Magic",
    initials: "ORL",
    colors: ["#0077C0", "#C4CED4"],
    difficulty: "medium",
    clue: "This team name sounds like rabbits in hats and disappearing tricks.",
    explanation: "Magicians do tricks that people call magic."
  },
  {
    team: "Orlando Magic",
    initials: "ORL",
    colors: ["#0077C0", "#C4CED4"],
    difficulty: "hard",
    clue: "This team fits a city famous for make-believe worlds and wonder.",
    explanation: "Orlando is known for theme parks and fantasy."
  },
  {
    team: "Philadelphia 76ers",
    initials: "PHI",
    colors: ["#006BB6", "#ED174C"],
    difficulty: "easy",
    clue: "This team name has the number after 75.",
    explanation: "76 comes right after 75."
  },
  {
    team: "Philadelphia 76ers",
    initials: "PHI",
    colors: ["#006BB6", "#ED174C"],
    difficulty: "medium",
    clue: "This team points to a very important year in American history.",
    explanation: "1776 is the year the United States declared independence."
  },
  {
    team: "Philadelphia 76ers",
    initials: "PHI",
    colors: ["#006BB6", "#ED174C"],
    difficulty: "hard",
    clue: "This team belongs in Philadelphia with bells, flags, and 1776.",
    explanation: "Philadelphia is tied to the Liberty Bell and 1776."
  },
  {
    team: "Phoenix Suns",
    initials: "PHX",
    colors: ["#1D1160", "#E56020"],
    difficulty: "easy",
    clue: "This team is a bright thing that can warm your face.",
    explanation: "The sun gives Earth light and warmth."
  },
  {
    team: "Phoenix Suns",
    initials: "PHX",
    colors: ["#1D1160", "#E56020"],
    difficulty: "medium",
    clue: "This team rises in the morning and sets at night.",
    explanation: "The sun appears to rise and set each day."
  },
  {
    team: "Phoenix Suns",
    initials: "PHX",
    colors: ["#1D1160", "#E56020"],
    difficulty: "hard",
    clue: "This team fits a desert city where shade can feel like treasure.",
    explanation: "Phoenix is in the desert, and the sun can be intense there."
  },
  {
    team: "Portland Trail Blazers",
    initials: "POR",
    colors: ["#E03A3E", "#000000"],
    difficulty: "easy",
    clue: "This team sounds like someone making a new path.",
    explanation: "A trail blazer is a person who creates or leads a new path."
  },
  {
    team: "Portland Trail Blazers",
    initials: "POR",
    colors: ["#E03A3E", "#000000"],
    difficulty: "medium",
    clue: "This team name could be an explorer walking where no trail exists yet.",
    explanation: "Trail blazers lead the way into new places."
  },
  {
    team: "Portland Trail Blazers",
    initials: "POR",
    colors: ["#E03A3E", "#000000"],
    difficulty: "hard",
    clue: "This team is about leading the way, not setting a forest on fire.",
    explanation: "Trail blazer means pioneer or path-maker."
  },
  {
    team: "Sacramento Kings",
    initials: "SAC",
    colors: ["#5A2D81", "#63727A"],
    difficulty: "easy",
    clue: "This team is a royal person who wears a crown.",
    explanation: "A king is a royal ruler who often wears a crown."
  },
  {
    team: "Sacramento Kings",
    initials: "SAC",
    colors: ["#5A2D81", "#63727A"],
    difficulty: "medium",
    clue: "This team might live in a castle and sit on a throne.",
    explanation: "Kings are often shown in castles on thrones."
  },
  {
    team: "Sacramento Kings",
    initials: "SAC",
    colors: ["#5A2D81", "#63727A"],
    difficulty: "hard",
    clue: "This team is the chess piece you have to protect.",
    explanation: "The king is the most important chess piece."
  },
  {
    team: "San Antonio Spurs",
    initials: "SAS",
    colors: ["#000000", "#C4CED4"],
    difficulty: "easy",
    clue: "This team is something cowboys wear on their boots.",
    explanation: "Spurs are small metal tools worn on riding boots."
  },
  {
    team: "San Antonio Spurs",
    initials: "SAS",
    colors: ["#000000", "#C4CED4"],
    difficulty: "medium",
    clue: "This team jingles near a rider's heel.",
    explanation: "Spurs attach near the heel of a boot."
  },
  {
    team: "San Antonio Spurs",
    initials: "SAS",
    colors: ["#000000", "#C4CED4"],
    difficulty: "hard",
    clue: "This team name has a cowboy feel, but it is not the hat.",
    explanation: "Spurs are part of cowboy riding gear."
  },
  {
    team: "Toronto Raptors",
    initials: "TOR",
    colors: ["#CE1141", "#000000"],
    difficulty: "easy",
    clue: "This team is a dinosaur that might roar and chase you in a movie.",
    explanation: "A raptor is a type of dinosaur in many stories and movies."
  },
  {
    team: "Toronto Raptors",
    initials: "TOR",
    colors: ["#CE1141", "#000000"],
    difficulty: "medium",
    clue: "This team has claws, teeth, and a prehistoric vibe.",
    explanation: "Raptors are often pictured as fast, clawed dinosaurs."
  },
  {
    team: "Toronto Raptors",
    initials: "TOR",
    colors: ["#CE1141", "#000000"],
    difficulty: "hard",
    clue: "This team could also mean a bird of prey, but basketball fans think dinosaur.",
    explanation: "Raptor can mean a hunting bird or a dinosaur-like creature."
  },
  {
    team: "Utah Jazz",
    initials: "UTA",
    colors: ["#002B5C", "#F9A01B"],
    difficulty: "easy",
    clue: "This team is music you might hear with trumpets and saxophones.",
    explanation: "Jazz is a type of music."
  },
  {
    team: "Utah Jazz",
    initials: "UTA",
    colors: ["#002B5C", "#F9A01B"],
    difficulty: "medium",
    clue: "This team name has rhythm, improvising, and swinging notes.",
    explanation: "Jazz music often includes rhythm and improvisation."
  },
  {
    team: "Utah Jazz",
    initials: "UTA",
    colors: ["#002B5C", "#F9A01B"],
    difficulty: "hard",
    clue: "This team started with a city famous for music before moving to Utah.",
    explanation: "The Jazz name came from the team's New Orleans history."
  },
  {
    team: "Washington Wizards",
    initials: "WAS",
    colors: ["#002B5C", "#E31837"],
    difficulty: "easy",
    clue: "This team is a magical person who might wear a pointy hat.",
    explanation: "Wizards are magical characters in stories."
  },
  {
    team: "Washington Wizards",
    initials: "WAS",
    colors: ["#002B5C", "#E31837"],
    difficulty: "medium",
    clue: "This team might read a spellbook and wave a staff.",
    explanation: "Wizards are often shown using spellbooks and staffs."
  },
  {
    team: "Washington Wizards",
    initials: "WAS",
    colors: ["#002B5C", "#E31837"],
    difficulty: "hard",
    clue: "This team points to magic, robes, and maybe a very long beard.",
    explanation: "Storybook wizards are often shown in robes with beards."
  }
];

const state = {
  filter: "all",
  deck: [],
  index: 0,
  revealed: false,
  lastTeam: ""
};

const cardElement = document.querySelector("#card");
const cardLabel = document.querySelector("#cardLabel");
const clueText = document.querySelector("#clueText");
const answerText = document.querySelector("#answerText");
const explanationText = document.querySelector("#explanationText");
const difficultyText = document.querySelector("#difficultyText");
const progressText = document.querySelector("#progressText");
const revealButton = document.querySelector("#revealButton");
const nextButton = document.querySelector("#nextButton");
const shuffleButton = document.querySelector("#shuffleButton");
const teamBadge = document.querySelector("#teamBadge");
const filterButtons = document.querySelectorAll(".filter-button");

function shuffle(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function buildDeck() {
  const filteredCards =
    state.filter === "all"
      ? cards
      : cards.filter((card) => card.difficulty === state.filter);

  state.deck = shuffle(filteredCards);
  state.index = 0;

  if (state.deck[0]?.team === state.lastTeam && state.deck.length > 1) {
    [state.deck[0], state.deck[1]] = [state.deck[1], state.deck[0]];
  }

  state.revealed = false;
  render();
}

function currentCard() {
  return state.deck[state.index];
}

function render() {
  const activeCard = currentCard();

  if (!activeCard) {
    return;
  }

  document.documentElement.style.setProperty("--team-primary", activeCard.colors[0]);
  document.documentElement.style.setProperty("--team-secondary", activeCard.colors[1]);
  cardElement.classList.toggle("revealed", state.revealed);
  cardLabel.textContent = state.revealed ? "Answer" : "Clue";
  clueText.textContent = activeCard.clue;
  answerText.textContent = activeCard.team;
  explanationText.textContent = activeCard.explanation;
  difficultyText.textContent =
    activeCard.difficulty.charAt(0).toUpperCase() + activeCard.difficulty.slice(1);
  progressText.textContent = `${state.index + 1} of ${state.deck.length}`;
  teamBadge.textContent = state.revealed ? activeCard.initials : "?";
  revealButton.textContent = state.revealed ? "Hide" : "Reveal";
}

function revealCard() {
  state.revealed = !state.revealed;
  render();
}

function nextCard() {
  const previousTeam = currentCard().team;
  state.index += 1;

  if (state.index >= state.deck.length) {
    state.lastTeam = previousTeam;
    buildDeck();
    return;
  }

  if (currentCard().team === previousTeam && state.index < state.deck.length - 1) {
    [state.deck[state.index], state.deck[state.index + 1]] = [
      state.deck[state.index + 1],
      state.deck[state.index]
    ];
  }

  state.lastTeam = previousTeam;
  state.revealed = false;
  render();
}

cardElement.addEventListener("click", revealCard);
revealButton.addEventListener("click", revealCard);
nextButton.addEventListener("click", nextCard);
shuffleButton.addEventListener("click", buildDeck);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((filterButton) => filterButton.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    buildDeck();
  });
});

buildDeck();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
