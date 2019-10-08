// Functions
// ======================
function displayDire() {
    console.log("Rover is facing : "+ rover.direction)
}
function mapLimit() {
    console.log("Map limit reached")
}
function displayCoor() {
    console.log("coordinates are x : " + rover.x + " and y : " + rover.y)
}
function travelLogPush() {
    travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
}
function commandNotValid() {
    console.log("command " + command + " is not valid")
}
function obstacleInTheWay() {
    console.log("Obstacle in the way")
}
function goUp(){
    rover.y++
}
function goDown(){
    rover.y--
}
function goRight(){
    rover.x++
}
function goLeft(){
    rover.x--
}

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
    displayDire()
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
    displayDire()
}

// Move Forward Function
// ======================
function moveForward(rover){
    switch(rover.direction) {
        case 'N' :
            if (obstacleUp() == true) {
                obstacleInTheWay()
            }
            else if (rover.y<5){
                goUp();
            }
            else {
                return mapLimit
            }
        break;
        case 'S' :
            if (obstacleDown() == true) {
                obstacleInTheWay()
            }
            else if (rover.y>-5){
                goDown();
            }
            else {
                return mapLimit
            }
        break;
        case 'E':
            if (obstacleRight() == true) {
                obstacleInTheWay()
            }
            else if (rover.x<5){
                goRight();
            }
            else {
                return mapLimit
            }
        break;
        case 'W':
            if (obstacleLeft() == true) {
                obstacleInTheWay()
            }
            else if (rover.x>-5){
                goLeft();
            }
            else {
                return mapLimit
            }
            travelLogPush()
    }
    displayCoor()
}

// Move Backward Function
// ======================
function moveBackward(rover){
    switch(rover.direction) {
        case 'N' :
            if (rover.y>-5){
                goDown();
            }
            else {
                return mapLimit
            }
        break;
        case 'S' :
            if (rover.y<5) {
                goUp();
            }
            else {
                return mapLimit
            }
        break;
        case 'E':
            if (rover.x>-5) {
                goLeft();
            }
            else {
                return mapLimit
            }
        break;
        case 'W':
            if (rover.x<5) {
                goRight();
            }
            else {
                return mapLimit
            }
            travelLogPush()
    }
    displayCoor()
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
        commandNotValid()
        }
}}

let travelLog = []

// 2D Grid
// ======================
var gfg = new Array(10);

for (var i = 0; i < gfg.length; i++) {
    gfg[i] = new Array(10);
}
var h = 0;

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        gfg[i][j] = h++;
    }
}

// Obstacle Function
// ======================
function obstacle (i, j) {
    i = rover.y+5;
    j = rover.x+5;
    if (gfg[i][j] == 66){
        return true;
    }
    else {
        return false
    }
}

function obstacleUp() {
    if (obstacle(goUp()) == true) {
        goDown();
        return true
    }
    else {
        goDown();
        return false
    }
}

function obstacleDown () {
    if (obstacle(goDown()) == true) {
        goUp();
        return true
    }
    else {
        goUp();
        return false
    }
}
function obstacleRight () {
    if (obstacle(goRight()) == true) {
        goLeft();
        return true
    }
    else {
        goLeft();
        return false
    }
}
function obstacleLeft () {
    if (obstacle(goLeft()) == true) {
        goRight();
        return true
    }
    else {
        goRight();
        return false
    }
}
let Up = rover.y++;
let Down = rover.y--;
let Right = rover.x++;
let Left = rover.x--;