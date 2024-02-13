// function push(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     console.log(homeScreen.classList);

//     //for show other section
//     const playGround = document.getElementById('game');
//     playGround.classList.remove('hidden');
//     console.log(playGround.classList);
// }

function continueGame(){
   const alphabet = getRandomAlphabet();
   console.log('Your Random alphabet = ',alphabet);
   //randomly generated alphabet is
   const currentAlphabet = document.getElementById('current-alphavet');
   currentAlphabet.innerText = alphabet;

   //
   setBackgroundColor(alphabet)
}
//call a function
function push(){
    forHideElement('home-screen');
    forShowElement('game');
    continueGame()
}