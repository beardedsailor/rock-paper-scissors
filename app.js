let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector(".results > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s"); 

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}

function convertToWord(letter){
if(letter==="r"){return "Rock";}
if(letter==="p"){return "Paper";}
if(letter==="s"){return "Scissors";}
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            word1=convertToWord(userChoice);
            word2=convertToWord(computerChoice);
            win(word1,word2);
            break;
        case "sr":
        case "rp":
        case "ps":
            word1=convertToWord(userChoice);
            word2=convertToWord(computerChoice);
            lose(word1,word2);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice);
            break;        
  }


}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML= user+" beats "+ computer +" You win!.";
    user1=user.slice(0,1);
    user1=user1.toLowerCase();
    document.getElementById(user1).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(user1).classList.remove('green-glow')},300);
    
}

function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML= computer+" beats "+ user +" You lose!.";
    user1=user.slice(0,1);
    user1=user1.toLowerCase();
    document.getElementById(user1).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(user1).classList.remove('red-glow')},300);
}

function draw(user,computer){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML= "Game Draw! Try again";
    user1=user.slice(0,1);
    user1=user1.toLowerCase();
    document.getElementById(user1).classList.add('gray-glow');
    setTimeout(function(){
        document.getElementById(user1).classList.remove('gray-glow')},300);

}
function getComputerChoice(){
    const choices=['r','s','p'];
    const random_No=Math.floor(Math.random()*3);
    
    return choices[random_No];
}

main();
