let url = `ws://${window.location.host}/ws/text/`
const chatSocked = new WebSocket(url)

chatSocked.onmessage = function(e){
  let data = JSON.parse(e.data);
  console.log("data" , data);
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hammaga salom men endi gapira olaman"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});




//////////////////////////////////////////////////////////
window.addEventListener("load", () => {
    const bar = document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
      bar.forEach((item, j) => {
        // Random move
        item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`; // Change the numbers for speed / ( max - min ) + min / ex. ( 0.5 - 0.1 ) + 0.1
      });
    }
  });

  

/////////////////////////////////////
// function synthesizeSpeech() {
//     const speechConfig = window.Sdk.SpeechConfig.fromSubscription("eb6501dbb8c04c9d8e938cfe237319f2", "eastus");
//     const audioConfig = window.Sdk.AudioConfig.fromDefaultSpeakerOutput();

//     const speechSynthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
//     speechSynthesizer.speakTextAsync(
//         "I'm excited to try text to speech",
//         result => {
//             if (result) {
//                 speechSynthesizer.close();
//                 return result.audioData;
//             }
//         },
//         error => {
//             console.log(error);
//             speechSynthesizer.close();
//         });
// }

// synthesizeSpeech()








