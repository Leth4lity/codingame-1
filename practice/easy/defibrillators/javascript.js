const LON = parseFloat(readline().replace(',', '.'))
const LAT = parseFloat(readline().replace(',', '.'))
const N = parseInt(readline())

let MIN = Number.MAX_SAFE_INTEGER
let LOCATION = ''

for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(';')

    const location = DEFIB[1]
    const longitude = parseFloat(DEFIB[DEFIB.length - 2].replace(',', '.'))
    const latitude = parseFloat(DEFIB[DEFIB.length - 1].replace(',', '.'))

    const x = (longitude - LON) * Math.cos((LAT - latitude)/2)
    const y = (latitude - LAT)
    const distance = Math.sqrt(x*x + y*y) * 6371

    if (distance < MIN)
    {
        MIN = distance
        LOCATION = location
    }
}

print(LOCATION)