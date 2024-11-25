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

for (i=0; i<roundOneMatches.length; i++) {
    roundOneMatches[i].innerHTML += `${tbd}<p class="result">TBD</p>${tbd}`;
}

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