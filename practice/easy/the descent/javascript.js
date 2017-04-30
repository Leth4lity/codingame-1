let mountainH = []

while (true) {
    for (let i = 0; i < 8; i++) {
        mountainH[i] = parseInt(readline()); // represents the height of one mountain.
    }
    
    print(mountainH.reduce((highest, element, index, arr) => element > arr[highest] ? index : highest, 0))
}