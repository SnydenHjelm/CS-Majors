const roundOneMatches = document.querySelectorAll(".round-one-matches");
const roundTwoMatches = document.querySelectorAll(".round-two-matches");
const roundThreeMatches = document.querySelectorAll(".round-three-matches");
const roundFourMatches = document.querySelectorAll(".round-four-matches");
const roundFiveMatches = document.querySelectorAll(".round-five-matches");

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
const cloud9 = `<img title="Cloud9" src="images/cloud9.png">`;
const fnatic = `<img title="fnatic" src="images/fnaticNew.png">`;
const gamerLegion = `<img title="GamerLegion" src="images/GamerLegion.png">`;
const big = `<img title="BIG Clan" src="images/bigclan.png">`;
const virtusPro = `<img title="Virtus.pro" src="images/vp.png">`;
const passionUA = `<img title="Passion UA" src="images/passion.png">`;

roundOneMatches[0].innerHTML += `${furia}<p class="result">8-13</p>${gamerLegion}`;
roundOneMatches[1].innerHTML += `${virtusPro}<p class="result">7-13</p>${mibr}`;
roundOneMatches[2].innerHTML += `${liquid}<p class="result">13-10</p>${cloud9}`;
roundOneMatches[3].innerHTML += `${complexity}<p class="result">6-13</p>${flyQuest}`;
roundOneMatches[4].innerHTML += `${big}<p class="result">13-9</p>${passionUA}`;
roundOneMatches[5].innerHTML += `${fnatic}<p class="result">11-13</p>${wildcard}`;
roundOneMatches[6].innerHTML += `${theMongolz}<p class="result">13-2</p>${rareAtom}`;
roundOneMatches[7].innerHTML += `${pain}<p class="result">13-5</p>${imperial}`;

roundTwoMatches[0].innerHTML += `${fnatic}<p class="result">5-13</p>${cloud9}`;
roundTwoMatches[1].innerHTML += `${big}<p class="result">5-13</p>${flyQuest}`;
roundTwoMatches[2].innerHTML += `${theMongolz}<p class="result">13-6</p>${mibr}`;
roundTwoMatches[3].innerHTML += `${complexity}<p class="result">9-13</p>${passionUA}`;
roundTwoMatches[4].innerHTML += `${virtusPro}<p class="result">13-4</p>${rareAtom}`;
roundTwoMatches[5].innerHTML += `${liquid}<p class="result">13-10</p>${wildcard}`;
roundTwoMatches[6].innerHTML += `${imperial}<p class="result">11-13</p>${furia}`;
roundTwoMatches[7].innerHTML += `${pain}<p class="result">10-13</p>${gamerLegion}`;

roundThreeMatches[0].innerHTML += `${big}<p class="result">TBD</p>${virtusPro}`;
roundThreeMatches[1].innerHTML += `${mibr}<p class="result">TBD</p>${passionUA}`;
roundThreeMatches[2].innerHTML += `${furia}<p class="result">TBD</p>${wildcard}`;
roundThreeMatches[3].innerHTML += `${pain}<p class="result">TBD</p>${cloud9}`;
roundThreeMatches[4].innerHTML += `${rareAtom}<p class="result">TBD</p>${fnatic}`;
roundThreeMatches[5].innerHTML += `${liquid}<p class="result">TBD</p>${flyQuest}`;
roundThreeMatches[6].innerHTML += `${theMongolz}<p class="result">TBD</p>${gamerLegion}`;
roundThreeMatches[7].innerHTML += `${complexity}<p class="result">TBD</p>${imperial}`;

for (i=0; i<roundFourMatches.length; i++) {
    roundFourMatches[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundFiveMatches.length; i++) {
    roundFiveMatches[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}