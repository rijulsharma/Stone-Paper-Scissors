
var userScore = parseInt(localStorage.getItem('userScore')) || 0;
var compScore = parseInt(localStorage.getItem('compScore')) || 0;


document.getElementById('userScore').innerText = userScore;
document.getElementById('compScore').innerText = compScore;
function showRules() {
    document.getElementById('rules').style.display = 'block';
}

function closeRules() {
    document.getElementById('rules').style.display = 'none';
}
function playAgain() {
    var userScore = localStorage.getItem('userScore') || 0;
    var computerScore = localStorage.getItem('computerScore') || 0;
    window.location.href = 'index.html';
}
function generateRandomNumber(choice){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    closeChoice();
    computeResult(choice, randomNumber);
    console.log(randomNumber);
}

function closeChoice(){
    document.getElementById('user-choice').style.display = 'none';
    document.getElementById('mega').style.display = 'flex';

}


function computeResult(userchoice,compChoice){
    if(userchoice === 'paper-choice'){
        console.log("user chose paper");
     document.getElementById('user-chosen').style.display = 'block';
     document.getElementById('paper-chosen-image').style.display = 'block';
        
        if(compChoice === 1){
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-rock-chosen-image').style.display = 'block';

            document.getElementById('result-won').style.display = 'block';
            document.getElementById('stone-choice').style.display = 'block';
            incrementScore('userScore');
            
        }
        else if(compChoice === 2){
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-paper-chosen-image').style.display = 'block';

            document.getElementById('result-tie').style.display = 'block';
            document.getElementById('paper-choice-image').style.display = 'block';
        }
        else{
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-scissors-chosen-image').style.display = 'block';

            document.getElementById('result-lost').style.display = 'block';
            document.getElementById('scissors-choice').style.display = 'block';
            incrementScore('compScore');
        }
    }
    else if(userchoice === 'stone-choice'){
        document.getElementById('user-chosen').style.display = 'block';
     document.getElementById('rock-chosen-image').style.display = 'block';
        document.getElementById('stone-choice').style.display = 'block';
       
        if(compChoice === 1){
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-rock-chosen-image').style.display = 'block';

            document.getElementById('result-tie').style.display = 'block';
            document.getElementById('stone-choice').style.display = 'block';
        }
       else if(compChoice === 2){
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-paper-chosen-image').style.display = 'block';

            document.getElementById('result-lost').style.display = 'block';
            document.getElementById('paper-choice').style.display = 'block';
            incrementScore('compScore');
        }
        else{
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-scissors-chosen-image').style.display = 'block';
            
            document.getElementById('result-won').style.display = 'block';
            document.getElementById('scissors-choice').style.display = 'block';
            incrementScore('userScore');
        }
    }
    else {
        document.getElementById('user-chosen').style.display = 'block';
        document.getElementById('scissors-chosen-image').style.display = 'block';
        
        if(compChoice === 1){
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-rock-chosen-image').style.display = 'block';

            document.getElementById('result-lost').style.display = 'block';
            document.getElementById('stone-choice').style.display = 'block';
            
            incrementScore('compScore');
        }
        else if(compChoice === 2){
            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-paper-chosen-image').style.display = 'block';

            document.getElementById('result-won').style.display = 'block';
            document.getElementById('paper-choice').style.display = 'block';
            incrementScore('userScore');
        }
        else{

            document.getElementById('comp-chosen').style.display = 'block';
            document.getElementById('comp-scissors-chosen-image').style.display = 'block';

            document.getElementById('result-tie').style.display = 'block';
            document.getElementById('scissors-choice').style.display = 'block';
        }
    }
}


function incrementScore(score) {
   
    var scoreElement = document.getElementById(score);
    var currentScore = parseInt(localStorage.getItem(score)) || 0;
    scoreElement.innerText = currentScore + 1;
    localStorage.setItem(score, currentScore + 1);
}

function openHurray(){
    window.location.href = 'hurray.html';
}
