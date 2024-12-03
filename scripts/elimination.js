const roundOneMatches = document.querySelectorAll(".round-one-matches");
const roundTwoMatches = document.querySelectorAll(".round-two-matches");
const roundThreeMatches = document.querySelectorAll(".round-three-matches");
const roundFourMatches = document.querySelectorAll(".round-four-matches");
const roundFiveMatches = document.querySelectorAll(".round-five-matches");

const tbd = `<img title="To be determined" src="images/question.png">`;
const mouz = `<img title="MOUZ" src="images/mouz.png">`;
const vitality = `<img title="Vitality" src="images/vitality.png">`;
const navi = `<img title="Natus Vincere" src="images/natus.png">`;
const faze = `<img title="FaZe Clan" src="images/faze.png">`;
const threedmax = `<img title="3DMAX" src="images/3dmax.png">`;
const heroic = `<img title="HEROIC" src="images/heroicNew.png">`;
const g2 = `<img title="G2 Esports" src="images/g2.png">`;
const spirit = `<img title="Team Spirit" src="images/spirit.png">`;
const theMongolz = `<img title="The MongolZ" src="images/mongolz.png">`;
const mibr = `<img title="MIBR" src="images/mibr.png">`;
const pain = `<img title="paiN Gaming" src="images/pain.png">`;
const liquid = `<img title="Team Liquid" src="images/liquid.png">`;
const gamerLegion = `<img title="GamerLegion" src="images/GamerLegion.png">`;
const big = `<img title="BIG Clan" src="images/bigclan.png">`;
const wildcard = `<img title="Wildcard" src="images/wildcard.png">`;
const furia = `<img title="FURIA" src="images/Furia.png">`;

roundOneMatches[0].innerHTML += `${g2}<p class="result">TBD</p>${theMongolz}`; 
roundOneMatches[1].innerHTML += `${navi}<p class="result">TBD</p>${liquid}`; 
roundOneMatches[2].innerHTML += `${vitality}<p class="result">TBD</p>${gamerLegion}`; 
roundOneMatches[3].innerHTML += `${spirit}<p class="result">TBD</p>${furia}`; 
roundOneMatches[4].innerHTML += `${mouz}<p class="result">TBD</p>${pain}`; 
roundOneMatches[5].innerHTML += `${faze}<p class="result">TBD</p>${wildcard}`; 
roundOneMatches[6].innerHTML += `${heroic}<p class="result">TBD</p>${big}`; 
roundOneMatches[7].innerHTML += `${threedmax}<p class="result">TBD</p>${mibr}`; 

for (i=0; i<roundTwoMatches.length; i++) {
    roundTwoMatches[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundThreeMatches.length; i++) {
    roundThreeMatches[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundFourMatches.length; i++) {
    roundFourMatches[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

for (i=0; i<roundFiveMatches.length; i++) {
    roundFiveMatches[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}