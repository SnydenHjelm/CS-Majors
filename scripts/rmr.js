const rmrDiv = document.querySelectorAll(".rmr-div");
const asiaRMR = document.querySelector("#asia-inner");
const nasaRMR = document.querySelector("#nasa-inner");
const euaRMR = document.querySelector("#eua-inner");
const eubRMR = document.querySelector("#eub-inner");

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
const fnatic = `<img title="fnatic" src="images/fnaticNew.png">`;
const gamerLegion = `<img title="GamerLegion" src="images/GamerLegion.png">`;
const big = `<img title="BIG Clan" src="images/bigclan.png">`;
const threedmax = `<img title="3DMAX" src="images/3dmax.png">`;

asiaRMR.style.display = "grid";
asiaRMR.style.gridTemplateColumns = "repeat(3, 1fr)";
const asiaTeams = [theMongolz, rareAtom, flyQuest];
for (let teams of asiaTeams) {
    asiaRMR.innerHTML += teams;
}

nasaRMR.style.display = "grid";
nasaRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
const nasaTeams = [wildcard, mibr, pain, complexity, liquid, imperial, furia];
for (let teams of nasaTeams) {
    nasaRMR.innerHTML += teams;
}


euaRMR.style.display = "grid";
euaRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
const euaTeams = [mouz, vitality, navi, faze, cloud9, fnatic, gamerLegion];
for (let teams of euaTeams) {
    euaRMR.innerHTML += teams;
}

eubRMR.style.display = "grid";
eubRMR.style.gridTemplateColumns = "repeat(7, 1fr)";
const eubTeams = [big, threedmax, tbd, tbd, tbd, tbd, tbd];
for (let teams of eubTeams) {
    eubRMR.innerHTML += teams;
}
