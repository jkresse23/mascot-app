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

function makeHardClues(team, initials, colors, clues) {
  return clues.map(([clue, explanation]) => ({
    team,
    initials,
    colors,
    difficulty: "hard",
    clue,
    explanation
  }));
}

cards.push(
  ...makeHardClues("Atlanta Hawks", "ATL", ["#E03A3E", "#26282A"], [
    ["This team could be named after a hunter with feathers instead of shoes.", "Hawks are birds of prey that hunt from the sky."],
    ["This team might perch on a tall branch before diving down fast.", "Hawks often perch high before swooping after food."],
    ["This team has a name that belongs to a sky scout with super-sharp eyes.", "Hawks are famous for spotting tiny things from far away."]
  ]),
  ...makeHardClues("Boston Celtics", "BOS", ["#007A33", "#BA9653"], [
    ["This team sounds like a group whose name starts with a silent-looking C.", "Celtics starts with C but is pronounced with a K sound."],
    ["This team could make you think of green, gold, and old legends from across the ocean.", "The Celtics connect to Irish-inspired colors and Celtic history."],
    ["This team name belongs more to ancient people than to an animal mascot.", "Celtic refers to historic cultures, not a creature."]
  ]),
  ...makeHardClues("Brooklyn Nets", "BKN", ["#000000", "#777777"], [
    ["This team is the only answer you want the ball to touch after a perfect shot.", "A perfect basketball shot drops through the net."],
    ["This team can be tied in knots but still helps count a basket.", "Basketball nets are made from knotted cord."],
    ["This team hangs below the rim and wiggles when the shot is clean.", "The net moves when a made shot passes through it."]
  ]),
  ...makeHardClues("Charlotte Hornets", "CHA", ["#1D1160", "#00788C"], [
    ["This team might warn you with a buzz before using its pointy defense.", "Hornets buzz and can sting to defend themselves."],
    ["This team is tiny compared with a player, but nobody wants it in their jersey.", "A hornet is small, but its sting can hurt."],
    ["This team sounds like a flying insect that brings its own striped uniform.", "Hornets often have striped bodies."]
  ]),
  ...makeHardClues("Chicago Bulls", "CHI", ["#CE1141", "#000000"], [
    ["This team could leave hoofprints after storming across a field.", "Bulls have hooves and are powerful runners."],
    ["This team is not a cow, but it belongs in the same barnyard family.", "A bull is a male cattle animal."],
    ["This team might lower its head before charging forward.", "Bulls are often shown charging with their horns down."]
  ]),
  ...makeHardClues("Cleveland Cavaliers", "CLE", ["#860038", "#FDBB30"], [
    ["This team sounds like someone from an old adventure who is bold almost to a fault.", "Cavalier can mean daring or bold."],
    ["This team might look ready for a duel in a storybook courtyard.", "Cavaliers are often imagined as old-fashioned sword-carrying figures."],
    ["This team name feels fancy, brave, and a little bit royal.", "Cavaliers have a noble, old-world feeling."]
  ]),
  ...makeHardClues("Dallas Mavericks", "DAL", ["#00538C", "#B8C4CA"], [
    ["This team is the one that refuses to follow the herd.", "A maverick is independent and does things differently."],
    ["This team could be a lone rider choosing its own trail.", "Maverick has a Western, independent meaning."],
    ["This team is not just a horse clue; it is a clue about independence.", "Maverick means someone who thinks or acts independently."]
  ]),
  ...makeHardClues("Denver Nuggets", "DEN", ["#0E2240", "#FEC524"], [
    ["This team might be found in a miner's pan after a lucky shake.", "Gold nuggets can be found during mining or panning."],
    ["This team is a small treasure that does not need a treasure chest.", "A nugget can be a small piece of valuable gold."],
    ["This team sounds like mountain treasure small enough to hold in your hand.", "Gold nuggets are small pieces of gold tied to mining regions."]
  ]),
  ...makeHardClues("Detroit Pistons", "DET", ["#C8102E", "#1D42BA"], [
    ["This team moves up and down but helps something move forward.", "Pistons move inside engines to create power."],
    ["This team is hidden under the hood, not sitting in the driver's seat.", "Pistons are engine parts inside cars."],
    ["This team turns engine power into a name that fits Motor City.", "Detroit is known as Motor City, and pistons are engine parts."]
  ]),
  ...makeHardClues("Golden State Warriors", "GSW", ["#1D428A", "#FFC72C"], [
    ["This team sounds like someone brave enough to guard a castle gate.", "Warriors are brave fighters in stories and history."],
    ["This team could trade a sword for a jump shot.", "A warrior is a fighter, while this team plays basketball."],
    ["This team name is about courage before it is about any one animal.", "Warrior describes a brave fighter."]
  ]),
  ...makeHardClues("Houston Rockets", "HOU", ["#CE1141", "#000000"], [
    ["This team could leave Earth before the defense even turns around.", "Rockets launch upward into space very quickly."],
    ["This team needs fuel, fire, and a very serious countdown.", "Rockets use fuel and launch after countdowns."],
    ["This team points upward from a city that says, Houston, we have a mission.", "Houston is closely linked with space missions."]
  ]),
  ...makeHardClues("Indiana Pacers", "IND", ["#002D62", "#FDBB30"], [
    ["This team might not win the race, but it helps everyone know the speed.", "A pacer sets the pace for others."],
    ["This team could be connected to the car that leads the first lap.", "A pace car leads race cars at controlled speed."],
    ["This team name is about rhythm and speed, not an animal or weather.", "Pacers are tied to setting pace."]
  ]),
  ...makeHardClues("LA Clippers", "LAC", ["#C8102E", "#1D428A"], [
    ["This team has a name that once meant speed before engines ruled travel.", "Clipper ships were fast sailing ships."],
    ["This team could cross the ocean with canvas wings.", "Clipper ships used large sails to move quickly."],
    ["This team belongs to sea history, even though it plays in Los Angeles.", "The Clippers name refers to sailing ships."]
  ]),
  ...makeHardClues("Los Angeles Lakers", "LAL", ["#552583", "#FDB927"], [
    ["This team has a watery name in a city famous for sunshine and movies.", "The Lakers play in Los Angeles, but the name points to lakes."],
    ["This team name makes more sense if you travel back to Minnesota.", "The Lakers originally came from Minnesota."],
    ["This team sounds like it should live near canoes more than palm trees.", "Lakes are associated with boats and canoes, unlike Los Angeles beaches."]
  ]),
  ...makeHardClues("Memphis Grizzlies", "MEM", ["#5D76A9", "#12173F"], [
    ["This team might scratch a tree just to say, I was here.", "Bears can mark trees with claws."],
    ["This team could nap through winter and still wake up hungry.", "Bears are known for winter hibernation."],
    ["This team is a heavyweight forest clue with claws instead of sneakers.", "Grizzlies are large bears with strong claws."]
  ]),
  ...makeHardClues("Miami Heat", "MIA", ["#98002E", "#F9A01B"], [
    ["This team is invisible, but you can feel it rising from pavement.", "Heat can shimmer above hot pavement even though you cannot grab it."],
    ["This team can turn a sidewalk into a no-bare-feet zone.", "Very hot pavement can hurt bare feet."],
    ["This team is what makes shade feel like a prize in South Florida.", "Miami's warm climate makes shade feel valuable."]
  ]),
  ...makeHardClues("Milwaukee Bucks", "MIL", ["#00471B", "#EEE1C6"], [
    ["This team could quietly step through the woods wearing a crown made of antlers.", "A buck is a male deer with antlers."],
    ["This team might freeze in place if headlights surprised it at night.", "Deer are known for stopping when caught in headlights."],
    ["This team grows its pointy headgear instead of buying it.", "Bucks grow antlers naturally."]
  ]),
  ...makeHardClues("Minnesota Timberwolves", "MIN", ["#0C2340", "#78BE20"], [
    ["This team could answer a full moon with a chorus.", "Wolves often howl, and packs can howl together."],
    ["This team hunts with teammates before basketball even starts.", "Timberwolves live and hunt in packs."],
    ["This team sounds like the forest version of a nighttime howl.", "Timberwolves are wolves associated with wooded areas."]
  ]),
  ...makeHardClues("New Orleans Pelicans", "NOP", ["#0C2340", "#C8102E"], [
    ["This team brings a fishing net right under its beak.", "Pelicans use a pouch under the beak to scoop fish."],
    ["This team could dive toward the water and come up with dinner.", "Pelicans catch fish from the water."],
    ["This team has a bird clue with a beak that works like a grocery bag.", "A pelican's pouch can hold fish."]
  ]),
  ...makeHardClues("New York Knicks", "NYK", ["#006BB6", "#F58426"], [
    ["This team is hiding an old clothing word inside a short nickname.", "Knicks is short for Knickerbockers, an old clothing term."],
    ["This team sounds like New York history stitched into a pair of pants.", "Knickerbockers are old-fashioned pants tied to New York history."],
    ["This team is one of the trickiest because the clue is fashion, not a mascot.", "The Knicks name comes from Knickerbockers, not an animal."]
  ]),
  ...makeHardClues("Oklahoma City Thunder", "OKC", ["#007AC1", "#EF3B24"], [
    ["This team can shake windows without ever touching them.", "Thunder is a loud sound that can rumble through windows."],
    ["This team is the sky's drumroll after lightning flashes.", "Thunder often follows lightning like a booming sound."],
    ["This team arrives with a boom, but you cannot put it in your hand.", "Thunder is sound, not a physical object."]
  ]),
  ...makeHardClues("Orlando Magic", "ORL", ["#0077C0", "#C4CED4"], [
    ["This team could make a coin vanish before halftime.", "Magic tricks often make objects seem to disappear."],
    ["This team belongs to a city where make-believe is part of the map.", "Orlando is known for theme parks and fantasy experiences."],
    ["This team might say a spell instead of calling a play.", "Wizards and magicians use spells in stories."]
  ]),
  ...makeHardClues("Philadelphia 76ers", "PHI", ["#006BB6", "#ED174C"], [
    ["This team is a number clue wearing red, white, and blue history.", "The 76ers name points to 1776 and American history."],
    ["This team points to the last two digits of America's big birthday year.", "The United States declared independence in 1776."],
    ["This team is a history quiz hiding inside a basketball name.", "The 76ers name is based on a historic year, not a mascot."]
  ]),
  ...makeHardClues("Phoenix Suns", "PHX", ["#1D1160", "#E56020"], [
    ["This team can make a car seat feel too hot before practice.", "The sun can heat surfaces like car seats."],
    ["This team is about the star that makes desert afternoons extra bright.", "The sun is a star, and Phoenix has a desert climate."],
    ["This team can paint the sky orange before it disappears for the night.", "The sun can make colorful sunsets."]
  ]),
  ...makeHardClues("Portland Trail Blazers", "POR", ["#E03A3E", "#000000"], [
    ["This team might be first through the woods so everyone else can follow.", "Trail blazers create paths for others."],
    ["This team is about making a route, not just walking on one.", "A trail blazer leads or creates a new path."],
    ["This team sounds like a pioneer with sneakers.", "A trail blazer is a pioneer or leader."]
  ]),
  ...makeHardClues("Sacramento Kings", "SAC", ["#5A2D81", "#63727A"], [
    ["This team could be checked but hopes never to be checkmated.", "The king is the main piece in chess."],
    ["This team might make a royal decree before tipoff.", "Kings are rulers who can issue decrees in stories."],
    ["This team wears the crown in both castles and card decks.", "Kings appear in royalty stories and playing cards."]
  ]),
  ...makeHardClues("San Antonio Spurs", "SAS", ["#000000", "#C4CED4"], [
    ["This team is the star-shaped piece near a cowboy boot heel.", "Spurs often have a small rowel near the heel."],
    ["This team has a Western clue that spins but is not a wagon wheel.", "Some spurs have a little spinning wheel shape."],
    ["This team belongs with saddles, boots, and a Texas trail.", "Spurs are associated with riding gear and cowboy imagery."]
  ]),
  ...makeHardClues("Toronto Raptors", "TOR", ["#CE1141", "#000000"], [
    ["This team has a name that can mean ancient claws or modern wings.", "Raptor can refer to dinosaurs or birds of prey."],
    ["This team might leave three-toed footprints in a movie jungle.", "Dinosaur raptors are often shown with clawed feet."],
    ["This team is a prehistoric clue that got popular with movie fans.", "Raptors became famous in dinosaur movies."]
  ]),
  ...makeHardClues("Utah Jazz", "UTA", ["#002B5C", "#F9A01B"], [
    ["This team might make up the next notes as it plays them.", "Jazz often includes improvisation."],
    ["This team is a music clue that moved away from its original city.", "The Jazz name came from New Orleans before the team moved to Utah."],
    ["This team could be guessed from a saxophone solo with no sheet music.", "Jazz music often features improvised solos."]
  ]),
  ...makeHardClues("Washington Wizards", "WAS", ["#002B5C", "#E31837"], [
    ["This team might turn a basketball into a pumpkin if the spell goes sideways.", "Wizards are magical story characters who cast spells."],
    ["This team could keep its best plays in a spellbook.", "Storybook wizards often use spellbooks."],
    ["This team is a magic clue with robes, staffs, and secret words.", "Wizards are often shown with robes, staffs, and spells."]
  ])
);

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
