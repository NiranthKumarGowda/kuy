var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function Start(){
    document.getElementById("textbox").innerHTML=""
    recognition.Start()
}