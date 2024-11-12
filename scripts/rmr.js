const rmrDiv = document.querySelectorAll(".rmr-div");
const asiaRMR = document.querySelector("#asia-inner");
const nasaRMR = document.querySelector("#nasa-inner");
const euaRMR = document.querySelector("#eua-inner");
const eubRMR = document.querySelector("#eub-inner");

const asiaTeams = 3;
const nasaTeams = 7;
const euaTeams = 7;
const eubTeams = 7;

//Teams
const tbd = `<img title="To be determined" src="images/question.png">`;
const rareAtom = `<img title="Rare Atom" src="images/rare-atom.png">`;
const theMongolz = `<img title="The MongolZ" src="images/mongolz.png">`

asiaRMR.style.display = "grid";
asiaRMR.style.gridTemplateColumns = "repeat(3, 1fr)";
asiaRMR.innerHTML += theMongolz;
asiaRMR.innerHTML += rareAtom;
asiaRMR.innerHTML += tbd;

nasaRMR.style.display = "grid";
nasaRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
for (i=0; i<nasaTeams; i++) {
    nasaRMR.innerHTML += tbd;
}

euaRMR.style.display = "grid";
euaRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
for (i=0; i<euaTeams; i++) {
    euaRMR.innerHTML += tbd;
}

eubRMR.style.display = "grid";
eubRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
for (i=0; i<eubTeams; i++) {
    eubRMR.innerHTML += tbd;
}
