const width = readline()
const height = readline()
const text = readline().split``

let output = ''

for (let i = 0; i < height; i++) {
    const row = readline()
    
    text.forEach(character => {
        // 1. Convert character into a base36 number (see Base36) & subtract 9
        //    e.g E becomes 14 - 9
        // 2. Replace non a-zA-Z with '27'
        // 3. Subtract 1 & times by character width
        // 4. Use above as the start location and character width as number of
        //    characters to extract from row
        // 5. Merge with previous character
        output += row.substr(((parseInt(character, 36) - 9 || 27) - 1) * width, width)
    })
    
    // Begin next row
    output += '\n'
}

print(output)