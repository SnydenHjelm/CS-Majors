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

asiaRMR.style.display = "grid";
asiaRMR.style.gridTemplateColumns = "repeat(3, 1fr)";
asiaRMR.innerHTML += theMongolz;
asiaRMR.innerHTML += rareAtom;
asiaRMR.innerHTML += flyQuest;

nasaRMR.style.display = "grid";
nasaRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
nasaRMR.innerHTML += wildcard;
nasaRMR.innerHTML += mibr;
nasaRMR.innerHTML += pain;
nasaRMR.innerHTML += complexity;
nasaRMR.innerHTML += liquid;
nasaRMR.innerHTML += imperial;
nasaRMR.innerHTML += furia;


euaRMR.style.display = "grid";
euaRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
euaRMR.innerHTML += mouz;
euaRMR.innerHTML += vitality;
euaRMR.innerHTML += navi;
euaRMR.innerHTML += faze;
euaRMR.innerHTML += cloud9;
for (i=0; i<euaTeams -5; i++) {
    euaRMR.innerHTML += tbd;
}

eubRMR.style.display = "grid";
eubRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
for (i=0; i<eubTeams; i++) {
    eubRMR.innerHTML += tbd;
}
