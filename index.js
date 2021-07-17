const Database = require("replpersist");
let soccerbasedb = new Database("soccerbasedb");
class POSITIONS {}
POSITIONS.STRIKER = "ST";
POSITIONS.LEFT_WING = "LW";
POSITIONS.LEFT_WING_BACK = "LWB";
POSITIONS.DEFENSIVE_LEFT_MID = "DLM";
POSITIONS.DEFENSIVE_RIGHT_MID = "DRM";
POSITIONS.CENTER_FORWARD = "CF";
POSITIONS.RIGHT_WING = "RW";
const capitalizeFirstLetter = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
soccerbasedb.add = (winning, losing, date, score, times, location)=>{
	soccerbasedb.data[`${capitalizeFirstLetter(winning)} vs ${capitalizeFirstLetter(losing)} ${date}`] = {
		"winningteam": winning,
		"losingteam": losing,
		"date": date,
		"score": score,
		"timestampAtGoals": times,
		"location": location
	}
}
soccerbasedb.add("france", "croatia", "July 2018", "5 - 3", [
	{time: 17.56,
	team: "france",
	type:"og", 
	player: {name: "Mario Mandzukic", 
	 	position: POSITIONS.STRIKER, 
		number: 17, 
		team: {national: "croatia", 
			leagueTeam: "AC Milan"
		}
	} 
},
{time: 27.53,
	team: "croatia",
	type:"regular", 
	player: {name: "Ivan Perisic", 
	 	position: POSITIONS.LEFT_WING, 
		number: 4, 
		team: {national: "croatia", 
			leagueTeam: "Inter Milan"
		}
	} 
},
{time: 37.56,
	team: "france",
	type:"pk", 
	player: {name: "Antoine Griezmann", 
	 	position: POSITIONS.CENTER_FORWARD, 
		number: 4, 
		team: {national: "france", 
			leagueTeam: "Barcelona"
		}
	} 
},
{time: 58.33,
	team: "france",
	type:"regular", 
	player: {name: "Paul Pogba", 
	 	position: POSITIONS.DEFENSIVE_RIGHT_MID, 
		number: 6, 
		team: {national: "france", 
			leagueTeam: "Manchester United"
		}
	} 
},
{time: 64.36,
	team: "france",
	type:"regular", 
	player: {name: "Kylian Mbappe", 
	 	position: POSITIONS.RIGHT_WING, 
		number: 10, 
		team: {national: "france", 
			leagueTeam: "Paris Saint-Germain"
		}
	} 
},
{time: 68.07,
	team: "croatia",
	type:"regular", 
	player: {name: "Kylian Mbappe", 
	 	position: POSITIONS.RIGHT_WING, 
		number: 10, 
		team: {national: "france", 
			leagueTeam: "Paris Saint-Germain"
		}
	} 
},
{time: 69.00,
	team: "croatia",
	type:"regular", 
	player: {name: "Mario Mandzukic", 
	 	position: POSITIONS.STRIKER, 
		number: 17, 
		team: {national: "croatia", 
			leagueTeam: "AC Milan"
		}
	} 
} ], "Luzhniki Stadium in Moscow");
console.log(soccerbasedb.data)



















// {"Mandzukic":{
// 		name: "Mario Mandzukic", 
// 	 	position: POSITIONS.STRIKER, 
// 		number: 17, 
// 		team: {national: "croatia", 
// 			league: "AC Milan"
// 		}
// 	},
// 	{"Perisic":{
// 		name: "Ivan Perisic", 
// 	 	position: [POSITIONS.LEFT_WING, POSITIONS.LEFT_WING_BACK], 
// 		number: 4, 
// 		team: {national: "croatia", 
// 			league: "Inter Milan"
// 		}
// 	},
// 	"Brozovic":{
// 		name: "Marcelo Brozovic", 
// 	 	position: [POSITIONS.DEFENSIVE_LEFT_MID], 
// 		number: 11, 
// 		team: {national: "croatia", 
// 			league: "Inter Milan"
// 		}
// 	}