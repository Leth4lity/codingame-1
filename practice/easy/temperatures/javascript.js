// the number of temperatures to analyse
const numberOfTemps = parseInt(readline())
// string with N temperatures from -273 to 5526
const temperatures = readline().split` `

const sorted = temperatures.sort((a, b) => {
    if (a === 0) return 1
    if (Math.abs(a) === Math.abs(b) && a < 0) return 1
    return Math.abs(a) > Math.abs(b) ? 1 : -1
})

// Print the closest temperature to 0
// or print 0 if none provided
print(sorted[0] || 0)