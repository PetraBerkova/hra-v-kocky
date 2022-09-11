// zakladné premené
var totalScore, roundScore, activPlayer, dice,play;

newStart();

function newStart(){
totalScore=[0,0];
roundScore =0;
activPlayer =0;
play=true

// vynulovanie
document.getElementById("SC0").textContent=0;
document.getElementById("SC1").textContent=0;
document.getElementById("TSplayer0").textContent=0;
document.getElementById("TSplayer0").textContent=0;
document.getElementById("TSplayer1").textContent=0;
//skryt kocku
document.querySelector(".diceImage").style.display = "none";
//text do pôvodneho stavu
document.querySelector("#name0").textContent = "Skóre 1.hráča";
document.querySelector("#name1").textContent = "Skóre 2.hráča";

document.querySelector(".totalScore0").classList.add("active");
document.querySelector(".totalScore1").classList.remove("active");


}

document.querySelector(".rollDice").addEventListener("click", function(){
 if(play){   
//generujeme nahodne čislo
 dice = Math.ceil(Math.random()*6);

 //zobrazit obrazok
 var diceElement = document.querySelector(".diceImage");
 diceElement.src = "img/"+ dice + ".jpg";
 diceElement.style.display="block";

 //načitať
 if (dice !== 1){
 roundScore = roundScore + dice;
 document.getElementById("SC"+activPlayer).textContent = roundScore
 } else {
      nextPlayer()
 }}


})
// zmena hračov
function nextPlayer (){
    if (activPlayer === 0){
        activPlayer = 1;
    }else { activPlayer = 0}

    roundScore = 0;
    document.getElementById("SC0").textContent=0;
    document.getElementById("SC1").textContent=0;

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");
}

document.querySelector(".holdScore").addEventListener("click",function(){
    //pričitanie do total skore
    if(play){
    totalScore[activPlayer] = totalScore[activPlayer]+roundScore;
    document.querySelector("#TSplayer"+activPlayer).textContent = totalScore[activPlayer];

    if (totalScore[activPlayer] >=50){
        document.querySelector("#name"+activPlayer).textContent = "VÍŤAZ, gratulujeme!";
        play=false
    } else {
        nextPlayer();
    }}
})
// nova hra
document.querySelector(".newGame").addEventListener("click",newStart)
