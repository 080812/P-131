status=""
confidence=0
label=""
height=0
width=0
X=0
Y=0
function btn1bowl(){
    window.location="bowl.html"
}
function btn2bed(){
    window.location="Bedroom.html"
}
function btn3living(){
    window.location="livingroom.html"
}
function btn4kit(){
    window.location="kitchen.html"
}

function preload(){
pic=loadImage('dog_cat.jpg')
}

function setup(){
canvas=createCanvas(500,450)
canvas.center()
objectdetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Status: Detecting Objects"
}

function draw(){
image(pic,0,0,500,450)

fill("red")
text("Dog",45,75)
noFill()
stroke("red")
rect(30,60,250,300)

fill("red")
text("Cat",250,110)
noFill()
stroke("red")
rect(150,90,280,300)
}

function modelLoaded(){
    console.log("Model is loaded")
    status=true
    objectdetector.detect(pic,gotresult)
}

function gotresult(error,results){
if(error){
    console.log(error)
}
else{
console.log(results)
}
}