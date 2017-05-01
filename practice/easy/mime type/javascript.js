const amount = readline()
const fileNames = readline()

const types = new Map()

for (let i = 0; i < amount; i++) {
    const [extension, mime] = readline().split` `
    types.set(extension.toLowerCase(), mime)
}

for (let i = 0; i < fileNames; i++) {
    let fileName = readline().toLowerCase()
    if (fileName.indexOf`.` > -1) {
        const e = fileName.split`.`
        const t = e[e.length - 1]
        print(types.has(t) ? types.get(t) : `UNKNOWN`)
    } else print`UNKNOWN`
}