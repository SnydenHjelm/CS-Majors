const qFinalOne = document.querySelector("#q-final-one");
const qFinalTwo = document.querySelector("#q-final-two");
const qFinalThree = document.querySelector("#q-final-three");
const qFinalFour = document.querySelector("#q-final-four");

const sFinalOne = document.querySelector("#s-final-one");
const sFinalTwo = document.querySelector("#s-final-two");

const gFinal = document.querySelector("#g-final");

const mvp = document.querySelector("#mvp");
const champ = document.querySelector("#champ");

const mvpMedal = `<img title="HLTV MVP Medal" src="images/mvp.png">`;
const trophy = `<img title="Trophy" src="images/trophy.png">`;
const tbd = `<img title="To be determined" src="images/question.png">`;
const mouz = `<img title="MOUZ" src="images/mouz.png">`;
const vitality = `<img title="Vitality" src="images/vitBlack.png">`;
const faze = `<img title="FaZe Clan" src="images/faze.png">`;
const heroic = `<img title="HEROIC" src="images/heroicNew.png">`;
const g2 = `<img title="G2 Esports" src="images/g2.png">`;
const spirit = `<img title="Team Spirit" src="images/spirit.png">`;
const theMongolz = `<img title="The MongolZ" src="images/mongolz.png">`;
const liquid = `<img title="Team Liquid" src="images/liquid.png">`;
const donk = `<img title="donk" src="images/donkhead.png">`;

qFinalOne.innerHTML += theMongolz + "<h3>0-2</h3>" + mouz;
qFinalTwo.innerHTML += spirit + "<h3>2-0</h3>" + liquid;
qFinalThree.innerHTML += g2 + "<h3>2-1</h3>" + heroic;
qFinalFour.innerHTML += faze + "<h3>2-1</h3>" + vitality;

sFinalOne.innerHTML += mouz + "<h3>1-2</h3>" + spirit;
sFinalTwo.innerHTML += g2 + "<h3>0-2</h3>" + faze;

gFinal.innerHTML += spirit + "<h3>2-1</h3>" + faze;

champ.innerHTML += trophy + spirit + "<h3>Team Spirit</h3>";
mvp.innerHTML += mvpMedal + donk + `<h3>Danil "donk" Kryshkovets</h3>`;