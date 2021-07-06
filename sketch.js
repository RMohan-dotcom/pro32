const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     getBackgroundImg( ) 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
        //change the data in JSON format
         var responseJSON1 = await response.json();
          var datetime1 = responseJSON1.datetime; 
         // write code slice the datetime 
         hour1 = datetime1.slice(11,13); 
     if(hour1=00){
         text("TIME:12am",200,200)
     }
    else{
        if(hour1=00){
            text("TIME:12am",200,200)
        }
       else{}
       if(hour1=00){
        text("TIME:12am",200,200)
    }
   else{}
   if(hour1=00){
    text("TIME:12am",200,200)
}
else{}
if(hour1=01){
    text("TIME:1am",200,200)
}
else{}
if(hour1=02){
    text("TIME:2am",200,200)
}
else{}
if(hour1=03){
    text("TIME:3am",200,200)
}
else{}
if(hour1=04){
    text("TIME:4am",200,200)
}
else{}
if(hour1=05){
    text("TIME:5am",200,200)
}
else{}
if(hour1=06){
    text("TIME:6am",200,200)
}
else{}
if(hour1=07){
    text("TIME:7am",200,200)
}
else{}
if(hour1=08){
    text("TIME:8am",200,200)
}
else{}
if(hour1=09){
    text("TIME:9am",200,200)
}
else{}
if(hour1=10){
    text("TIME:10am",200,200)
}
else{}
if(hour1=11){
    text("TIME:11am",200,200)
}
else{}
if(hour1=12){
    text("TIME:12pm",200,200)
}
else{}
if(hour1=13){
    text("TIME:1pm",200,200)
}
else{}
if(hour1=14){
    text("TIME:2pm",200,200)
}
else{}
if(hour1=15){
    text("TIME:3pm",200,200)
}
else{}
if(hour1=16){
    text("TIME:4pm",200,200)
}
else{}
if(hour1=17){
    text("TIME:5pm",200,200)
}
else{
    if(hour1=18){
    text("TIME:6pm",200,200)
}
else{if(hour1=19){
    text("TIME:7pm",200,200)
}
else{}
if(hour1=20){
    text("TIME:8pm",200,200)
}
else{}
if(hour1=21){
    text("TIME:9pm",200,200)
}
else{}
if(hour1=22){
    text("TIME:10pm",200,200)
}
else{}
if(hour1=23){
    text("TIME:11pm",200,200)
}

}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    async function getBackgroundImg(){ 
        // write code to fetch time from API 
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
        //change the data in JSON format
         var responseJSON = await response.json(); var datetime = responseJSON.datetime; 
         // write code slice the datetime 
         hour = datetime.slice(11,13); 
         // add conditions to change the background images from sunrise to sunset 
         if(hour>=04 && hour<=06 ){
              debugger; bg = "sunrise1.png"; 
            }else
             if(hour>=06 && hour<=08 ){ 
                 debugger; bg = "sunrise2.png";
                 }
             else if(hour>=08 && hour<=11 ){
                 debugger; bg = "sunrise3.png";
             }
             else if(hour>=11 && hour<=13){
                  debugger; bg = "sunrise4.png";
                 }
             else if(hour>=13 && hour<=15){
                  debugger; bg = "sunrise5.png";
                 }
             else if(hour>=15 && hour<=17 ){ 
                 debugger; bg = "sunrise6.png";
             }
             else if(hour>=17 && hour<=18 ){ 
                 debugger; bg = "sunset7.png";
                 }
             else if(hour>=18 && hour<=20 ){
                  debugger; bg = "sunset8.png";
                 }
             else if(hour>=20 && hour<=23 ){
                  debugger; bg = "sunset9.png"; 
                }
             else if(hour>=23 && hour==0){
                  debugger; bg = "sunset10.png";
                 }
             else if(hour==0 && hour<=03){
                  debugger; bg = "sunset11.png";
                 }
             else{
                  debugger; bg = "sunset12.png";
                 } 
             //load the image in backgroundImg variable here
              backgroundImg = loadImage(bg);}
