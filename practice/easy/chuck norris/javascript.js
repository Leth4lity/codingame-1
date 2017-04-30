// Convert string to binary
const strToBin = str => {
    // Output
    let out = ''
    
    for (let i = 0; i < str.length; i++) {
        let bin = str.charCodeAt(i).toString(2)
        
        if (bin.length < 7) bin = `0${bin}`
        
        out += bin
    }
    
    return out
}

// Norris encoding
const unary = {
    '0': '00',
    '1': '0'
}

// Get converted binary
const bin = strToBin(readline())

// Current bit
let cur = bin[0]

// Output
let out = `${unary[cur]} 0`

for (let i = 1; i < bin.length; i++) {
    // Next bit
    let nxt = bin[i]
    
    // Check if next bit doesn't equal current bit
    out += nxt !== cur
        ? ` ${unary[nxt]} 0`
        : '0'
    
    // Set current bit to next bit
    cur = nxt
}

// Finish
print(out)