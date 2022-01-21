status=""
objects=[]
text=""

function preload(){
img=loadImage("livingroom.jpg")
}

function setup(){
canvas=createCanvas(400,400)
canvas.center()
objectdetector=ml5.objectDetector('COCOSSD',modelLoaded)
}

function draw(){
image(img,0,0,400,400)

if(status!=""){
    objectdetector.detect(img,gotresult)

    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status:Object Detected"

        fill("pink")
        percentage=objects[i].confidence
        confidence=percentage.toFixed(2)
        text(objects[i].label+" "+confidence+"%",objects[i].x,objects[i].y)
        noFill()
        stroke("black")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
}
}




function modelLoaded(){
console.log("model is loaded")
document.getElementById("status").innerHTML="Status:Detecting Objects"
status=true
}

function gotresult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects=results
    }
}

function back(){
    window.location="index.html"
}