var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var thorX = initialTX
var thorY = initialTY
var direction

while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    
    direction = ''

    if (thorY > lightY) {
        direction += 'N'
        thorY--
    } else if (thorY < lightY) {
        direction += 'S'
        thorY++
    }
    
    if (thorX > lightX) {
        direction += 'W'
        thorX--
    } else if (thorX < lightX) {
        direction += 'E'
        thorX++
    }
    
    print(direction)
}