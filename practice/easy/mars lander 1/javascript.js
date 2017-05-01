// throw out unneeded data
readline()
readline()

while (true) {
    const speed = readline().split` `[3]
    
    // use least amount of fuel
    if (speed <= -26) print('0 4')
    else print('0 0')
}