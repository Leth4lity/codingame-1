function sortHorses(a, b) {
    return a - b
}

const N = readline()

if (N < 2) print(readline())
else {
    let horses = []
    
    for (var i = 0; i < N; i++) {
        horses.push(parseInt(readline()))
    }
    
    horses.sort(sortHorses)
    
    let smallestDiff = horses[1] - horses[0]
    
    for (var i = 2; i < N; i++) {
        let newDiff = horses[i] - horses[i - 1]
        if (newDiff < smallestDiff) smallestDiff = newDiff
    }
    
    print(smallestDiff)
}