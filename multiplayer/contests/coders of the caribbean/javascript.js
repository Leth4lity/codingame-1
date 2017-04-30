function sort(array) {
    return array.sort((a, b) => {
        let x = a['ID']
        let y = b['ID']
        
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
}
 
// Calculate combined distance
function distance(point) {
    return Math.pow(point.X, 2) + Math.pow(point.Y, 2)
}

// Find closest barrel to ship
function closest(array) {
    array = sort(array)
    
    array.forEach(point => {
            // printErr(`ID: ${point.ID}\nX: ${point.X}\nY: ${point.Y}\n`)
            printErr(point.ID)
        })
        
    return array.slice(1).reduce((min, p) => {
        if (distance(p) < min.d) min.point = p
        return min
    }, { point: array[0], d:distance(array[0]) }).point
}


// Game loop
while (true) {
    const myShipCount = parseInt(readline()); // the number of remaining ships
    const entityCount = parseInt(readline()); // the number of entities (e.g. ships, mines or cannonballs)
    
    let ENTITY = []
    let POINTS = []
    
    for (var i = 0; i < entityCount; i++) {
        let store = readline().split(' ')
        
        ENTITY.push({ 
            ID: store[0],
            Type: store[1], // SHIP, BARREL
            X: store[2],
            Y: store[3],
            Rotation: store[4], // 0 to 5
            Speed: store[5], // 0 to 2
            Rum: store[6], // Remaining
            Player: store[7] // 1 if me, 0 otherwise
        })
        
        if (store[1] === 'BARREL') {
            POINTS.push({
                ID: store[0],
                X: store[2],
                Y: store[3]
            })
        }
        
        // printErr(JSON.stringify(ENTITY[i]))
    }
    
    // printErr(JSON.stringify(POINTS))
    
    for (var i = 0; i < myShipCount; i++) {
        
        let ship = ENTITY[i]
        
        // Add current ship position to POINTS as origin
        let shipPoints = [{
            ID: ship.ID,
            X: ship.X,
            Y: ship.Y
        }].concat(POINTS)
        
        // printErr(shipPoints.length)
        
        // printErr(JSON.stringify(ship))
        // printErr(JSON.stringify(shipPoints))
        
        // Don't waste rum
        if (ship.Rum <= 85) {
            let pos = closest(shipPoints)
            print(`MOVE ${pos.X} ${pos.Y}`)
        } else {
            // Get close to a barrel
            let pos = closest(shipPoints)
            if (pos.X <= 12) pos.X++
            if (pos.X > 12) pos.X--
            if (pos.Y <= 12) pos.Y++
            if (pos.Y > 12) pos.Y--
            
            // if (ship.Speed > 1) print('SLOWER')
            // else print(`MOVE ${pos.X} ${pos.Y}`)
            print(`MOVE ${pos.X} ${pos.Y}`)
        }
    }
}