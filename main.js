x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;
drawApple = "";
speakData = "";
toNumber = "";
apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start()
} 

function preload(){
  apple = loadImage(apple.png)
}

recognition.onresult = function(event) {

 console.log(event); 
 toNumber = Number(content)
 content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
 if(Number.isInteger(toNumber)){
  document.getElementById("status").innerHTML = "A maçã começou a ser desenhada"; 
  drawCircle = "set"
 }else{
  document.getElementById("status").innerHTML = "O número não foi reconhecido."; 
 }


}

function setup() {
  screenWidth = window.innerWidth();
  screenHeight = window.innerHeight();
  canvas = createCanvas(screenWidth, screenHeight-150)
  canvas.position(0, 150)
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
  for(var i = 1; 1 <= toNumber; i++)
  { 
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
