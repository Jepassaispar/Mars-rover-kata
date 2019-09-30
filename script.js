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
        break;
        case 'S':
            rover.direction= "E";
        break;
        case 'E':
            rover.direction= "N";
        break;
        case 'W':
            rover.direction= "S";
        break;
    }
  }
  
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
        break;
    }  }
  
  function moveForward(rover){
    switch(rover.x) {
        case 'N':
            console.log(rover.x)
        break;
        case 'W' :
            console.log(rover.x)
    }
}