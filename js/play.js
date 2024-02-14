// function push(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     console.log(homeScreen.classList);

//     //for show other section
//     const playGround = document.getElementById('game');
//     playGround.classList.remove('hidden');
//     console.log(playGround.classList);
// }
function keyboardButtonPress (event){
    const playerPressKey = event.key;
    //Exit Game 
    if(playerPressKey === 'Escape')
    {
        gameOver();
    }
  //random number which is given by system 
    const randNumber = document.getElementById('current-alphavet');
    const randAlphabet = randNumber.innerText;

    //compare
    if(playerPressKey === randAlphabet){
        console.log("You got a point");
        const currentScore = getTextElementValueById('current-score'); 
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score',updateScore)
        console.log(updateScore);

        // //update score
        //  const currentScore = document.getElementById('current-score');
        //  const currentScoreText = currentScore.innerText;
        //  const currentScoreint = parseInt(currentScoreText);
        //  //final score
        //  const updateScore = currentScoreint + 1;
        //  //show new score
        //  currentScore.innerText = updateScore;

        //continue Game
        continueGame();
        removeBackColor(randAlphabet);

    }else{
        console.log("you miss a point");
        const currentLife = getTextElementValueById('current-life');
        const decriesLife = currentLife - 1;
        setTextElementValueById('current-life',decriesLife);
        // //life
        // const currentlife = document.getElementById('current-life');
        // const currentlifeText = currentlife.innerText;
        // const currentLifeInt = parseInt(currentlifeText);
        // //update life
        // const updateLife = currentLifeInt - 1;
        // //show updated life 
        // currentlife.innerText = updateLife;
        
        if(decriesLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup',keyboardButtonPress);

function continueGame(){
   const alphabet = getRandomAlphabet();
  // console.log('Your Random alphabet = ',alphabet);
   //randomly generated alphabet is
   const currentAlphabet = document.getElementById('current-alphavet');
   currentAlphabet.innerText = alphabet;

   //
   setBackgroundColor(alphabet)
}
//call a function
function push(){
    //hide everything show only the game
    forHideElement('home-screen');
    forHideElement('score');
    forShowElement('game');
// reset your life and score
    setTextElementValueById('current-score',0);
    setTextElementValueById('current-life',5);
    continueGame()
}

function gameOver(){
    forHideElement('game');
    forShowElement('score');

    // set final score
    const finalScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score', finalScore);

    //clear last game highlight
    const currentHighlight = getElementTextById('current-alphavet');
    removeBackColor(currentHighlight);
}