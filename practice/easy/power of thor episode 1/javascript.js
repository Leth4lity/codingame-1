let [lightX, lightY, thorX, thorY] = readline().split` `


while (true) {
    readline()
    let direction = ''
    
    if (thorY > +lightY) {
        direction = 'N'
        thorY--
    } else if (thorY < +lightY) {
        direction = 'S'
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