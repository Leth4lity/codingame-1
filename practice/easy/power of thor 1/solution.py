lightX,lightY,thorX,thorY = [int(i) for i in raw_input().split()]

while True:
    remainingTurns = input()
    distance = ''

    if thorY > lightY:
        distance = "N"
        thorY -= 1
    elif thorY < lightY:
        distance = "S"
        thorY += 1

    if thorX > lightX:
        distance += "W"
        thorX -= 1
    elif thorX < lightX:
        distance += "E"
        thorX += 1

    print distance