const lonA = readline().replace(`,`, `.`)
const latA = readline().replace(`,`, `.`)
const amount = readline()

let closest = Number.MAX_SAFE_INTEGER
let closestName = ''

for (let i = 0; i < amount ; i++) {
    let [,name,,,lonB,latB] = readline().split`;`
    
    lonB = lonB.replace(`,`, `.`)
    latB = latB.replace(`,`, `.`)
    
    const x = (lonB - lonA) * Math.cos((latA - latB) / 2)
    const y = (latB - latA)
    const d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371
    
    if (d < closest) {
        closest = d
        closestName = name
    }
}

print(closestName)