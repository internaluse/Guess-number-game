'use strict';
const ele=document.querySelector('.message');

const guessNumber=document.querySelector('.number');

const currentScore=document.querySelector('.score');

const restart=document.querySelector('.again');

const hScore=document.querySelector('.highscore');

let num=Math.floor(Math.random() * 20) +1;
let score=20;

let highest=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess= document.querySelector('.guess').value;
    if(!guess)
        console.log("Please enter a number !!!");
    else if(guess==num){
        ele.textContent="🥳 Congratulations You guessed the correct number";
        document.querySelector('body').style.backgroundColor='#60b347';
        guessNumber.textContent=num;
        const highest=Number(hScore.textContent);
       if(score>highest){
        highest=score;
        hScore.textContent=highest;
    }
    }
    else if(guess > num){
        if(score>1){
            ele.textContent="Too High!!";
            score--;
            currentScore.textContent=score;
        }
        else{
            ele.textContent="You lost the game :)";
            currentScore.textContent=0;
        }
    }
    else if(guess<num){
        if(score>1){
            ele.textContent="Too Low!!";
            score--;
            currentScore.textContent=score;
        }
        else{
            ele.textContent="You lost the game :)";
            currentScore.textContent=0;
        }
    }
    
})

restart.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor='#222';
    guessNumber.textContent="?";
    num=Math.floor(Math.random() * 20) +1;
    ele.textContent="Start guessing...";
    score=20;
    currentScore.textContent=score;
    document.querySelector('.guess').value='';
})