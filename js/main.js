let elBotScore = document.querySelector(".bot-score");
let elPlayerScore = document.querySelector(".player-score");
let elBtns = document.querySelector(".btns");
let elInfo = document.querySelector(".info");
let arrBtns = [
  `<button class="btn btn-1" onclick="userChose(1)"></button>`,
  `<button class="btn btn-2" onclick="userChose(2)"></button>`,
  `<button class="btn btn-3" onclick="userChose(3)"></button>`
];
let arrBtnsDis = [
  `<button class="btn btn-1" onclick="userChose(1)" disabled></button>`,
  `<button class="btn btn-2" onclick="userChose(2)" disabled></button>`,
  `<button class="btn btn-3" onclick="userChose(3)" disabled></button>`
];
let humanScore = 0;
let botScore = 0;
btnCr();
function userChose(num){

  let computerChoice = Math.round(Math.random()*3); 
 
  if (num == '1'){
    if (computerChoice == 1){
      survive(0,0);
      elInfo.textContent = "Draw";
    }
    else if(computerChoice == 2){
      humanScore++;
      survive(0,1);
      elInfo.textContent = "You Win !";
    }
    else{
      botScore++;
      survive(0,2);
      elInfo.textContent = "You Lose !";
    }
  }
  else if (num == '2'){
    if (computerChoice == 2){
      survive(1,1);
      elInfo.textContent = "Draw";
    }
    else if(computerChoice == 1){
      humanScore++;
      survive(1,2);
      elInfo.textContent = "You Win !";
    }
    else{
      botScore++;
      survive(1,0);
      elInfo.textContent = "You Lose !";
    }
  }
  else if(num == '3'){
    if(computerChoice == 3){
      survive(2,2);
      elInfo.textContent = "Draw";
    }
    else if(computerChoice == 1){
      humanScore++;
      survive(2,0);
      elInfo.textContent = "You Win !";
    }
    else{
      botScore++;
      survive(2,1);
      elInfo.textContent = "You Lose !";
    }
  }
  elBotScore.textContent = botScore;
  elPlayerScore.textContent = humanScore;
  setTimeout(function(){
    elBtns.innerHTML = '';
    btnCr();
    elInfo.textContent = "Play !";
  },2000);
}
function btnCr(){
  for(let item of arrBtns){
    elBtns.innerHTML += item;
  }
}
function survive(num1,num2){
  elBtns.innerHTML = '';
  elBtns.innerHTML += arrBtnsDis[num1];
  elBtns.innerHTML += arrBtnsDis[num2];
}