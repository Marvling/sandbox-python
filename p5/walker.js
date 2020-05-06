//TODO: make a class for walker

var walkerPositionX;
var walkerPositionY;



function getPixelIndex (x,y){
    let redIndex = x + (y*width) * 4
    return pixels[redIndex]
}

function walk (){
    var r = floor(random(4));

    switch(r){
        case 0:
            if(walkerPositionX < width){
                walkerPositionX += 10;
                
                let pixelColor = getPixelIndex(walkerPositionX,walkerPositionY);
                
                //call the function for getting the pixel index
                //write true for the index on the dict
                //if true on the dict make it false and change color
                //OPTIMIZE: write 3-4 different vaules on the dict 
                //based on the times that index has been visited
                
                stroke(0);
            }
            break;
        case 1:
            if (walkerPositionX > 0 ){
                walkerPositionX -= 10;
            }
            break;
            
        case 2:
            if (walkerPositionY <= 0){
                break;
            }
            else{
                walkerPositionY -= 10;
            }
            break;
            
        case 3:
            if (walkerPositionY >= height){
                break;
            }
            else{
                walkerPositionY += 10;
            }
            break;
    }

}

let visitedPixels = {}
//create a dict, keys are for every pixel index
//OPTIMIZE: dict has only indexes for R value, increments of four 
//(may be map function)

function setup() {
    createCanvas(400, 600);
	
	walkerPositionX = width/2;
	walkerPositionY = height/2;
    background(80);

    loadPixels();
    for (i in pixels){
        visitedPixels = {
            i: false,
        };
    }
    updatePixels();

    console.log(pixels);
    console.log(getPixelIndex(5,6));
    console.log(visitedPixels);

    

}

function draw(){
    
    
    point(walkerPositionX, walkerPositionY);
    stroke(255);
    strokeWeight(2)

    
    
    //Change color when the point hits the same coordinte more than once
    // divide the canvas into a grid
    // when the point changes postion write the coordinates into an array
    //on the switch check if the coordinate is in the array
    // if it is chack how many instances

    //making a random map
    //run the random function a set number of times
    //stop the random funtion, draw a an outline around the dots

    loadPixels();

    walk();

    updatePixels();
}