const message = readline().split``
let output = ``

message.map((current, index, array) => {
    const binary = current.charCodeAt().toString(2)
    const unary = binary.length < 7 ? `0`.repeat(7 - binary.length) : ``
    return unary + binary
})
.join``
.match(/([01])\1*/g)
.forEach(character => {
    if (character.trim().length <= 0) return
    output += ` 0${character.indexOf(`0`) !== -1 ? `0 ` : ` `}${`0`.repeat(character.length)}`
})

print(output.trim())