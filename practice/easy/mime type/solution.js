var N = +readline(); // Number of elements which make up the association table.
var Q = +readline(); // Number Q of file names to be analyzed.
var T = new Map()

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]; // MIME type.
    T.set(EXT, MT)
}

for (var i = 0; i < Q; i++) {
    var FN = readline().toLowerCase(); // One file name per line.
    
    if (FN.indexOf('.') > -1) {
        var n = FN.split('.')
        var e = n[n.length - 1]
        print((T.has(e)) ? T.get(e) : 'UNKNOWN')
    } else print('UNKNOWN')
}