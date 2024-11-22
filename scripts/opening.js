const roundOneGames = document.querySelector("#round1-games");
const roundOneGame1 = document.querySelector("#round1-game1"); 
const roundOneGame2 = document.querySelector("#round1-game2"); 
const roundOneGame3 = document.querySelector("#round1-game3"); 
const roundOneGame4 = document.querySelector("#round1-game4"); 
const roundOneGame5 = document.querySelector("#round1-game5"); 
const roundOneGame6 = document.querySelector("#round1-game6"); 
const roundOneGame7 = document.querySelector("#round1-game7"); 
const roundOneGame8 = document.querySelector("#round1-game8"); 

const roundTwoGame1 = document.querySelector("#round2-game1"); 
const roundTwoGame2 = document.querySelector("#round2-game2"); 
const roundTwoGame3 = document.querySelector("#round2-game3"); 
const roundTwoGame4 = document.querySelector("#round2-game4"); 
const roundTwoGame5 = document.querySelector("#round2-game5"); 
const roundTwoGame6 = document.querySelector("#round2-game6"); 
const roundTwoGame7 = document.querySelector("#round2-game7"); 
const roundTwoGame8 = document.querySelector("#round2-game8"); 

const roundThreeGame1 = document.querySelector("#round3-game1");
const roundThreeGame2 = document.querySelector("#round3-game2");
const roundThreeGame3 = document.querySelector("#round3-game3");
const roundThreeGame4 = document.querySelector("#round3-game4");
const roundThreeGame5 = document.querySelector("#round3-game5");
const roundThreeGame6 = document.querySelector("#round3-game6");
const roundThreeGame7 = document.querySelector("#round3-game7");
const roundThreeGame8 = document.querySelector("#round3-game8");

const roundFourGame1 = document.querySelector("#round4-game1");
const roundFourGame2 = document.querySelector("#round4-game2");
const roundFourGame3 = document.querySelector("#round4-game3");
const roundFourGame4 = document.querySelector("#round4-game4");
const roundFourGame5 = document.querySelector("#round4-game5");
const roundFourGame6 = document.querySelector("#round4-game6");

const roundFiveGame1 = document.querySelector("#round5-game1");
const roundFiveGame2 = document.querySelector("#round5-game2");
const roundFiveGame3 = document.querySelector("#round5-game3");

const roundOneArray = [roundOneGame1, roundOneGame2, roundOneGame3, roundOneGame4, roundOneGame5, roundOneGame6, roundOneGame7, roundOneGame8];
const roundTwoArray = [roundTwoGame1, roundTwoGame2, roundTwoGame3, roundTwoGame4, roundTwoGame5, roundTwoGame6, roundTwoGame7, roundTwoGame8];
const roundThreeArray = [roundThreeGame1, roundThreeGame2, roundThreeGame3, roundThreeGame4, roundThreeGame5, roundThreeGame6, roundThreeGame7, roundThreeGame8];
const roundFourArray = [roundFourGame1, roundFourGame2, roundFourGame3, roundFourGame4, roundFourGame5, roundFourGame6];
const roundFiveArray = [roundFiveGame1, roundFiveGame2, roundFiveGame3];

const tbd = `<img title="To be determined" src="images/question.png">`;
const rareAtom = `<img title="Rare Atom" src="images/rare-atom.png">`;
const theMongolz = `<img title="The MongolZ" src="images/mongolz.png">`;
const flyQuest = `<img title="FlyQuest" src="images/flyq.png">`;
const wildcard = `<img title="Wildcard" src="images/wildcard.png">`;
const mibr = `<img title="MIBR" src="images/mibr.png">`;
const pain = `<img title="paiN Gaming" src="images/pain.png">`;
const complexity = `<img title="Complexity" src="images/Complexity.png">`;
const liquid = `<img title="Team Liquid" src="images/liquid.png">`;
const imperial = `<img title="Imperial" src="images/imperial.png">`;
const furia = `<img title="FURIA" src="images/Furia.png">`;
const mouz = `<img title="MOUZ" src="images/mouz.png">`;
const vitality = `<img title="Vitality" src="images/vitality.png">`;
const navi = `<img title="Natus Vincere" src="images/natus.png">`;
const cloud9 = `<img title="Cloud9" src="images/cloud9.png">`;
const faze = `<img title="FaZe Clan" src="images/faze.png">`;
const fnatic = `<img title="fnatic" src="images/fnaticNew.png">`;
const gamerLegion = `<img title="GamerLegion" src="images/GamerLegion.png">`;

for (i=0; i<roundOneArray.length; i++) {
    roundOneArray[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundTwoArray.length; i++) {
    roundTwoArray[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundThreeArray.length; i++) {
    roundThreeArray[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundFourArray.length; i++) {
    roundFourArray[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundFiveArray.length; i++) {
    roundFiveArray[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}