// hide scrollbar when scrolling up
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});


// typewriter effect

const words = ["print('Hello, World!')", "print('Hola, Mundo!')", "print('Hola, Mundo!')"]
const typingSpeed = 150
const erasingSpeed = 100
const delayBetweenWords = 1000

let wordIndex = 0
let charIndex = 0
const textElement = document.getElementById("animated-text")

function typewriterEffect(){
    if(charIndex < words[wordIndex].length){
        // add the next character
        textElement.textContent += words[wordIndex].charAt(charIndex)
        charIndex ++;
        setTimeout(typewriterEffect, typingSpeed)
    }else{
        // erase the word after a delay
        setTimeout(eraseEffect, delayBetweenWords)
    }
}

function eraseEffect(){
    if(charIndex > 0){
        // remove the last character
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex --;
        setTimeout(eraseEffect, erasingSpeed)
    }else{
        wordIndex = (wordIndex + 1) % words.length // loop through words
        setTimeout(typewriterEffect, delayBetweenWords)
    }
}
typewriterEffect()