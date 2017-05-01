let mountain = []

while (true) {
    for (let i = 0; i < 8; i++) {
        // get height of each mountain
        mountain[i] = readline()
    }
    
    // 1. sort heights from highest to lowest
    // 2. print index of highest value
    print(mountain.reduce((highest, element, index, arr) => element > arr[highest] ? index : highest, 0))
}