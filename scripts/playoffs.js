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

qFinalOne.innerHTML += theMongolz + "<h3>TBD</h3>" + mouz;
qFinalTwo.innerHTML += spirit + "<h3>TBD</h3>" + liquid;
qFinalThree.innerHTML += g2 + "<h3>TBD</h3>" + heroic;
qFinalFour.innerHTML += faze + "<h3>TBD</h3>" + vitality;

sFinalOne.innerHTML += tbd + "<h3>TBD</h3>" + tbd;
sFinalTwo.innerHTML += tbd + "<h3>TBD</h3>" + tbd;

gFinal.innerHTML += tbd + "<h3>TBD</h3>" + tbd;

champ.innerHTML += trophy + tbd + "<h3>TBD</h3>";
mvp.innerHTML += mvpMedal + tbd + `<h3>TBD "TBD" TBD</h3>`;