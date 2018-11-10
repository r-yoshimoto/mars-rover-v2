  // Rover Object Goes Here
  // ======================

  var rover = {
    direction: "N",
    position: [0,0],
    travelLog: ["[0,0]"]
  };


  // ======================

  function turnLeft(rover){
    switch (rover.direction){
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
    }
    console.log("Rover is now facing " + rover.direction);
  }

  function turnRight(rover){
    switch (rover.direction){
      case "N":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
    }
    console.log("Rover is now facing " + rover.direction);
  }

  function moveForward(rover){
    if (rover.position[0] >= -9 && rover.position[0] <= 9){
        switch (rover.direction){
          case "N":
          rover.position[0]++;
          rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
          break;
          case "S":
          rover.position[0]--;
          rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
          break;
          }
      } else if (rover.position[0] == 10){
        switch (rover.direction){
            case "S":
            rover.position[0]--;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
            case "N":
            console.log("Limit reached in the " + rover.direction + " direction, must move backwards.")}
      } else if (rover.position[0] == -10){
        switch (rover.direction){
            case "N":
            rover.position[0]++;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");  
            case "S":
            console.log("Limit reached in the " + rover.direction + " direction, must move backwards.")}
          } else {
          console.log("SIGNAL WILL END IF ROVER PASS THIS POINT! ACTION DENIED!!");
        };
    if (rover.position[1] >= -9 && rover.position[1] <= 9){
        switch (rover.direction){
          case "E":
            rover.position[1]++;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
            break;
          case "W":
            rover.position[1]--;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
            break;}
          } else if (rover.position[1] == 10){
            switch (rover.direction){
              case "W":
              rover.position[1]--;
              rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
              case "E":
              console.log("Limit reached in the " + rover.direction + " direction, must move backwards.")}
              } else if (rover.position[1] == -10){
            switch (rover.direction){
              case "E":
              rover.position[1]++;
              rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]"); 
              case "W":
              console.log("Limit reached in the " + rover.direction + " direction, must move backwards.")}
              } else {      
          console.log("SIGNAL WILL END IF ROVER PASS THIS POINT! ACTION DENIED!!");
        };
    console.log("The position of the rover is now [" + rover.position[0] + ", " + rover.position[1] + "]");
  }

  function moveBackwards(rover){
    if (rover.position[0] >= -9 && rover.position[0] <= 9){
        switch (rover.direction){
          case "N":
          rover.position[0]--;
          rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
          break;
          case "S":
          rover.position[0]++;
          rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
          break;
          }
      } else if (rover.position[0] == -10){
        switch (rover.direction){
            case "S":
            rover.position[0]++;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
            case "N":
            console.log("Limit reached in the " + rover.direction + " direction, must move forward.")}
      } else if (rover.position[0] == 10){
        switch (rover.direction){
            case "N":
            rover.position[0]--;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");  
            case "S":
            console.log("Limit reached in the " + rover.direction + " direction, must move forward.")}
          } else {
          console.log("SIGNAL WILL END IF ROVER PASS THIS POINT! ACTION DENIED!!");
        };
    if (rover.position[1] >= -9 && rover.position[1] <= 9){
        switch (rover.direction){
          case "E":
            rover.position[1]--;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
            break;
          case "W":
            rover.position[1]++;
            rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
            break;}
          } else if (rover.position[1] == -10){
            switch (rover.direction){
              case "W":
              rover.position[0]++;
              rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]");
              case "E":
              console.log("Limit reached in the " + rover.direction + " direction, must move forward.")}
              } else if (rover.position[1] == 10){
            switch (rover.direction){
              case "E":
              rover.position[1]--;
              rover.travelLog.push("[" + rover.position[0] + "," + rover.position[1] + "]"); 
              case "W":
              console.log("Limit reached in the " + rover.direction + " direction, must move forward.")}
              } else {      
          console.log("SIGNAL WILL END IF ROVER PASS THIS POINT! ACTION DENIED!!");
        };
    console.log("The position of the rover is now [" + rover.position[0] + ", " + rover.position[1] + "]");
  }

  function command(commands){
    var instructions = commands.split("");

    for (var i = 0; i < instructions.length; i++){
    switch(instructions[i]) {
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      default:
        console.log("Command doesn't exist. Input either 'l' for Turn Left or 'r' for Turn Right or 'f' to Move Forward or 'b' to Move Backward.");
        break;
      }
    }
    console.log(rover.travelLog);
  }