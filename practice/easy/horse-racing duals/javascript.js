const sort = (a, b) => a - b

const horses = [...Array(~~readline())]
.map(() => readline())
.sort(sort)
.map((element, index, array) => array[index + 1] - element)
.sort(sort)

print(horses[1])