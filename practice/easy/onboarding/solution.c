#include <stdlib.h>
#include <stdio.h>
#include <string.h>

/**
 * CodinGame planet is being attacked by slimy insectoid aliens.
 * <---
 * Hint:To protect the planet, you can implement the pseudo-code provided in the statement, below the player.
 **/
int main()
{

    // game loop
    while (1) {
        char enemy1[257]; // name of enemy 1
        scanf("%s", enemy1);
        int dist1; // distance to enemy 1
        scanf("%d", &dist1);
        char enemy2[257]; // name of enemy 2
        scanf("%s", enemy2);
        int dist2; // distance to enemy 2
        scanf("%d", &dist2);

        // Write an action using printf(). DON'T FORGET THE TRAILING \n
        // To debug: fprintf(stderr, "Debug messages...\n");


        // You have to output a correct ship name to shoot ("Buzz", enemy1, enemy2, ...)
        printf("%s\n", dist1 < dist2 ? enemy1 : enemy2);
    }

    return 0;
}