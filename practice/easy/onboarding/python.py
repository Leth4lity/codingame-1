import sys
import math

while True:
    enemy_1 = raw_input()
    dist_1 = int(raw_input())
    enemy_2 = raw_input()
    dist_2 = int(raw_input())

    if dist_1 < dist_2:
        print enemy_1
    else:
        print enemy_2
