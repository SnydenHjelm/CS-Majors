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

qFinalOne.innerHTML += tbd + "<h3>TBD</h3>" + tbd;
qFinalTwo.innerHTML += tbd + "<h3>TBD</h3>" + tbd;
qFinalThree.innerHTML += tbd + "<h3>TBD</h3>" + tbd;
qFinalFour.innerHTML += tbd + "<h3>TBD</h3>" + tbd;

sFinalOne.innerHTML += tbd + "<h3>TBD</h3>" + tbd;
sFinalTwo.innerHTML += tbd + "<h3>TBD</h3>" + tbd;

gFinal.innerHTML += tbd + "<h3>TBD</h3>" + tbd;

champ.innerHTML += trophy + tbd + "<h3>TBD</h3>";
mvp.innerHTML += mvpMedal + tbd + `<h3>TBD "TBD" TBD</h3>`;