#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main()
{
    while (1) {
        char enemy1[257];
        scanf("%s", enemy1);

        int dist1;
        scanf("%d", &dist1);

        char enemy2[257];
        scanf("%s", enemy2);

        int dist2;
        scanf("%d", &dist2);

        printf("%s\n", dist1 < dist2 ? enemy1 : enemy2);
    }

    return 0;
}
