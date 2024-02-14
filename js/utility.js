function forHideElement (elementId){
     const hideSection = document.getElementById(elementId);
     hideSection.classList.add('hidden');
}
function forShowElement (elementId){
    const showSection =  document.getElementById(elementId);
    showSection.classList.remove('hidden');
}

//set background color in keyboard
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-600');
}
//Remove Background Color
function removeBackColor (elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-amber-600');
}
//score raw input
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
//set that updated score
function setTextElementValueById (elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);

    //get a random index 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    //console.log(index,alphabet);
    return alphabet;
}


//for text 
function getElementTextById (elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}