const roundOneMatches = document.querySelectorAll(".round-one-matches");
const roundTwoMatches = document.querySelectorAll(".round-two-matches");
const roundThreeMatches = document.querySelectorAll(".round-three-matches");
const roundFourMatches = document.querySelectorAll(".round-four-matches");
const roundFiveMatches = document.querySelectorAll(".round-five-matches");
const qualied = document.querySelector("#qualied");

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

roundOneMatches[0].innerHTML += `${g2}<p class="result">10-13</p>${theMongolz}`; 
roundOneMatches[1].innerHTML += `${navi}<p class="result">13-10</p>${liquid}`; 
roundOneMatches[2].innerHTML += `${vitality}<p class="result">13-7</p>${gamerLegion}`; 
roundOneMatches[3].innerHTML += `${spirit}<p class="result">6-13</p>${furia}`; 
roundOneMatches[4].innerHTML += `${mouz}<p class="result">13-6</p>${pain}`; 
roundOneMatches[5].innerHTML += `${faze}<p class="result">13-10</p>${wildcard}`; 
roundOneMatches[6].innerHTML += `${heroic}<p class="result">13-7</p>${big}`; 
roundOneMatches[7].innerHTML += `${threedmax}<p class="result">11-13</p>${mibr}`; 

roundTwoMatches[0].innerHTML += `${liquid}<p class="result">13-10</p>${gamerLegion}`; 
roundTwoMatches[1].innerHTML += `${vitality}<p class="result">16-13</p>${furia}`; 
roundTwoMatches[2].innerHTML += `${spirit}<p class="result">13-6</p>${wildcard}`; 
roundTwoMatches[3].innerHTML += `${mouz}<p class="result">13-16</p>${theMongolz}`; 
roundTwoMatches[4].innerHTML += `${g2}<p class="result">13-5</p>${big}`; 
roundTwoMatches[5].innerHTML += `${navi}<p class="result">11-13</p>${mibr}`; 
roundTwoMatches[6].innerHTML += `${threedmax}<p class="result">13-11</p>${pain}`; 
roundTwoMatches[7].innerHTML += `${faze}<p class="result">8-13</p>${heroic}`; 

roundThreeMatches[0].innerHTML += `${navi}<p class="result">2-13</p>${spirit}`; 
roundThreeMatches[1].innerHTML += `${furia}<p class="result">9-13</p>${liquid}`; 
roundThreeMatches[2].innerHTML += `${g2}<p class="result">13-8</p>${threedmax}`; 
roundThreeMatches[3].innerHTML += `${mouz}<p class="result">10-13</p>${faze}`; 
roundThreeMatches[4].innerHTML += `${gamerLegion}<p class="result">2-1</p>${wildcard}`; 
roundThreeMatches[5].innerHTML += `${vitality}<p class="result">2-0</p>${mibr}`; 
roundThreeMatches[6].innerHTML += `${theMongolz}<p class="result">2-1</p>${heroic}`; 
roundThreeMatches[7].innerHTML += `${big}<p class="result">1-2</p>${pain}`; 

roundFourMatches[0].innerHTML += `${mouz}<p class="result">2-0</p>${threedmax}`; 
roundFourMatches[1].innerHTML += `${g2}<p class="result">2-0</p>${faze}`; 
roundFourMatches[2].innerHTML += `${mibr}<p class="result">1-2</p>${liquid}`; 
roundFourMatches[3].innerHTML += `${navi}<p class="result">2-0</p>${gamerLegion}`; 
roundFourMatches[4].innerHTML += `${spirit}<p class="result">2-1</p>${heroic}`; 
roundFourMatches[5].innerHTML += `${furia}<p class="result">2-1</p>${pain}`; 

roundFiveMatches[0].innerHTML += `${mibr}<p class="result">0-2</p>${mouz}`; 
roundFiveMatches[1].innerHTML += `${heroic}<p class="result">2-1</p>${navi}`; 
roundFiveMatches[2].innerHTML += `${faze}<p class="result">2-1</p>${furia}`; 

qualied.innerHTML += vitality;
qualied.innerHTML += theMongolz;
qualied.innerHTML += g2;
qualied.innerHTML += liquid;
qualied.innerHTML += spirit;
qualied.innerHTML += mouz;
qualied.innerHTML += heroic;
qualied.innerHTML += faze;