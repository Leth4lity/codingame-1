/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline())
var H = parseInt(readline())
var T = readline().toUpperCase()
var N = T.length

var ASCII={
    A:[],
    B:[],
    C:[],
    D:[],
    E:[],
    F:[],
    G:[],
    H:[],
    I:[],
    J:[],
    K:[],
    L:[],
    M:[],
    N:[],
    O:[],
    P:[],
    Q:[],
    R:[],
    S:[],
    T:[],
    U:[],
    V:[],
    W:[],
    X:[],
    Y:[],
    Z:[],
    '?':[]
}

for (var i = 0; i < H; i++) {
    var ROW = readline()
    var index = 0
    
    for (var letter in ASCII) {
        ASCII[letter][i] = ROW.substr(index, L)
        index += L
    }
}

var output = ''

for (var i = 0; i < H; i++) {
    for (var letter = 0; letter < N; letter++) {
        var char = T.charAt(letter)
        
        if (char < 'A' || char > 'Z') char = '?'
        
        output += ASCII[char][i]
    }
    output += '\n'
}

print(output)