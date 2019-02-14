var canvas;
var classifier;
var img;
var capture;
function modelReady(){
	console.log("Model Loaded");
}
function setup(){
	canvas=createCanvas(400,400);
	background(100);
	capture = createCapture(VIDEO);
	capture.hide();
	classifier=ml5.imageClassifier("MobileNet",capture,modelReady);
}
function result(err,output){
	if(err){
		console.log(err);
	}
	else{
		// console.log(output);
		document.getElementById("output").innerHTML=""+output[0].className;
	}
}
function draw(){
	image(capture,0,0,width,height);
	predict();
}
function predict(){
	classifier.predict(1,result);
}