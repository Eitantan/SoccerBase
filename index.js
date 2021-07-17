const Database = require("replpersist");
let soccerbasedb = new Database("soccerbasedb");
class POSITIONS {}
POSITIONS.STRIKER = "striker";
const capitalizeFirstLetter = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
soccerbasedb.add = (winning, losing, date, score, times, location, lineupwinning, lineuplosing)=>{
	soccerbasedb.data[`${capitalizeFirstLetter(winning)} vs ${capitalizeFirstLetter(losing)} ${date}`] = {
		"winningteam": winning,
		"losingteam": losing,
		"date": date,
		"score": score,
		"timestampAtGoals": times,
		"location": location,
		"winninglineup": lineupwinning,
		"losinglineup": lineuplosing
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
			league: "AC Milan"
		}
	} 
} ], "Luzhniki Stadium in Moscow", ["FRANCELINEUP"], ["CROATIALINEUP"]);
console.log(soccerbasedb.data)