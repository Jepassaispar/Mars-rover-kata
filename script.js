// Rover Object Goes Here
// ======================

let rover = {
    direction : "S",
    direction : "E",
    direction : "W",
    direction : "N",
    x : 0,
    y : 0,
}

// Turn Left Function
// ======================
function turnLeft(rover){
    switch(rover.direction) {
        case 'N':
            rover.direction= "W";
        break;
        case 'S':
            rover.direction= "E";
        break;
        case 'E':
            rover.direction= "N";
        break;
        case 'W':
            rover.direction= "S";
    }
    console.log("Rover is facing : "+ rover.direction)
}

// Turn Right Function
// ======================
function turnRight(rover){
    switch(rover.direction) {
    case 'N':
        rover.direction= "E";
    break;
    case 'S':
        rover.direction= "W";
    break;
    case 'E':
        rover.direction= "S";
    break;
    case 'W':
        rover.direction= "N";
    }  
    console.log("Rover is facing : "+ rover.direction)
}

// Move Forward Function
// ======================
function moveForward(rover){
    switch(rover.direction) {
        case 'N' :
            if (rover.y<5) {
                rover.y=rover.y+1;
            }
            else {
                console.log("Map limit reached")
            }
        break;
        case 'S' :
            if (rover.y>-5) {
                rover.y=rover.y-1
            }
            else {
                console.log("Map limit reached")
            }
        break;
        case 'E':
            if (rover.x<5) {
                rover.x=rover.x+1
            }
            else {
                console.log("Map limit reached")
            }
        break;
        case 'W':
            if (rover.x>-5) {
                rover.x=rover.x-1
            }
            else {
                console.log("Map limit reached")
            }
        }
    console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
    travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
    }

// Move Backward Function
// ======================
function moveBackward(rover){
    switch(rover.direction) {
        case 'N' :
            if (rover.y>-5) {
                rover.y=rover.y-1;
            }
            else {
                console.log("Map limit reached")
            }
        break;
        case 'S' :
            if (rover.y<5) {
                rover.y=rover.y+1
            }
            else {
                console.log("Map limit reached")
            }
        break;
        case 'E':
            if (rover.x>-5) {
                rover.x=rover.x-1
            }
            else {
                console.log("Map limit reached")
            }
        break;
        case 'W':
            if (rover.x<5) {
                rover.x=rover.x+1
            }
            else {
                console.log("Map limit reached")
            }
    }
    console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
    travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
}
    
// Command Function
// ======================
function command (expr) {
    for(var i=0 ; i<expr.length; i++){
        var command = expr.charAt(i);
        if (command == "f") {
            moveForward(rover);
        }
        else if (command == "r") {
            turnRight(rover);
        }
        else if (command == "l") {
            turnLeft(rover)
        }
        else if (command == "b") {
            moveBackward(rover)
        }
        else {
            console.log("command " + command + " is not valid")
        }
}}

let travelLog = []
