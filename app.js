const btn = document.querySelector(".talk");
const content = document.querySelector(".content")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart =function (){
    console.log("Voice activated , you can speak on the microphone");

};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript= event.results[current][0].transcript;
    content.textContent = transcript;
    readOutloud(transcript)

};


btn.addEventListener('click', () =>{
    recognition.start();

}); 

function readOutloud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume=1,
    speech.rate=1,
    speech.pitch=1,
    speech.text= message,
    window.speechSynthesis.speak(speech)


};