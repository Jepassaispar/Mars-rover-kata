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

// ======================
function turnLeft(rover){
    switch(rover.direction) {
        case 'N':
            rover.direction= "W";
            console.log("Rover is facing : "+ rover.direction)
        break;
        case 'S':
            rover.direction= "E";
            console.log("Rover is facing : "+ rover.direction)
        break;
        case 'E':
            rover.direction= "N";
            console.log("Rover is facing : "+ rover.direction)
        break;
        case 'W':
            rover.direction= "S";
            console.log("Rover is facing : "+ rover.direction)
    }
}
  
  function turnRight(rover){
    switch(rover.direction) {
        case 'N':
            rover.direction= "E";
            console.log("Rover is facing : "+ rover.direction)
        break;
        case 'S':
            rover.direction= "W";
            console.log("Rover is facing : "+ rover.direction)
        break;
        case 'E':
            rover.direction= "S";
            console.log("Rover is facing : "+ rover.direction)
        break;
        case 'W':
            rover.direction= "N";
            console.log("Rover is facing : "+ rover.direction)
    }  
}
  
  function moveForward(rover){
    if ((rover.y<5) && (rover.y>-5) && (rover.x<5) && (rover.x>-5)) {
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.y = 5) && (rover.x<5) && (rover.x>-5)){
        switch(rover.direction) {
            case 'N':
                console.log("You have reached the north limit of the map, you can't go further");
            break;
            case 'S':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.y = -5) && (rover.x<5) && (rover.x>-5)){
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                    console.log("You have reached the west limit of the map, you can't go further");
            break;
            case 'E':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.x = 5) && (rover.y<5) && (rover.y>-5)){
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                console.log("You have reached the east limit of the map, you can't go further");
            break;
            case 'W':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.x = -5) && (rover.y<5) && (rover.y>-5)){
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                console.log("You have reached the west limit of the map, you can't go further");
        }
    }
    else if ((rover.x = 5) && (rover.y = -5)) {
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                console.log("You are in a corner, change the direction or go backward in order to move")
            break;
            case 'E':
                console.log("You are in a corner, change the direction or go backward in order to move")
            break;
            case 'W':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.x = 5) && (rover.y = 5)) {
        switch(rover.direction) {
            case 'N':
                console.log("You are in a corner, change the direction or go backward in order to move")
            break;
            case 'S':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                console.log("You are in a corner, change the direction or go backward in order to move")
            break;
            case 'W':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.x = -5) && (rover.y = 5)) {
        switch(rover.direction) {
            case 'N':
                console.log("You are in a corner, change the direction or go backward in order to move")
            break;
            case 'S':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                console.log("You are in a corner, change the direction or go backward in order to move")
        }
    }
    else if ((rover.x = -5) && (rover.y = -5)) {
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                console.log("You are in a corner, change the direction or go backward in order to move")
            break;
            case 'E':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                console.log("You are in a corner, change the direction or go backward in order to move")
        }
    }
}

function moveBackwards(rover){
    if ((rover.y<5) && (rover.y>-5) && (rover.x<5) && (rover.x>-5)) {
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.y = 5) && (rover.x<5) && (rover.x>-5)){
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)            
            break;
            case 'S':
                console.log("You have reached the west limit of the map, you can't go further");
            break;
            case 'E':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.y = -5) && (rover.x<5) && (rover.x>-5)){
        switch(rover.direction) {
            case 'N':
                console.log("You have reached the south limit of the map, you can't go further");
            break;
            case 'S':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.x = 5) && (rover.y<5) && (rover.y>-5)){
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                console.log("You have reached the east limit of the map, you can't go further");
        }
    }
    else if ((rover.x = -5) && (rover.y<5) && (rover.y>-5)){
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                console.log("You have reached the west limit of the map, you can't go further");
            break;
            case 'W':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.x = 5) && (rover.y = -5)) {
        switch(rover.direction) {
            case 'N':
                console.log("You are in a corner, change the direction or go forward in order to move")
            break;
            case 'S':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                console.log("You are in a corner, change the direction or go forward in order to move")
        }
    }
    else if ((rover.x = 5) && (rover.y = 5)) {
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                console.log("You are in a corner, change the direction or go forward in order to move")
            break;
            case 'E':
                rover.x=rover.x -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'W':
                console.log("You are in a corner, change the direction or go forward in order to move")
        }
    }
    else if ((rover.x = -5) && (rover.y = 5)) {
        switch(rover.direction) {
            case 'N':
                rover.y=rover.y -1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'S':
                console.log("You are in a corner, change the direction or go forward in order to move")
            break;
            case 'E':
                console.log("You are in a corner, change the direction or go forward in order to move")
            break;
            case 'W':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
    else if ((rover.x = -5) && (rover.y = -5)) {
        switch(rover.direction) {
            case 'N':
                console.log("You are in a corner, change the direction or go forward in order to move")
            break;
            case 'S':
                rover.y=rover.y +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
            break;
            case 'E':
                console.log("You are in a corner, change the direction or go forward in order to move")
            break;
            case 'W':
                rover.x=rover.x +1;
                console.log("coordinates are x : " + rover.x + " and y : " + rover.y);
                travelLog.push("coordinates are x : " + rover.x + " and y : " + rover.y)
        }
    }
}


function commands (expr) {
    for(var i=0 ; i<expr.length; i++){
        var a = expr.charAt(i);
        if (a == "f") {
            moveForward(rover);
        }
        else if (a == "r") {
            turnRight(rover);
        }
        else if (a == "l") {
            turnLeft(rover)
        }
        else if (a == "b") {
            moveBackwards(rover)
        }
        else {
            console.log("command " + a + " is not valid")
        }
}}

let travelLog = []
