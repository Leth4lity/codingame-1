<?php
    while (TRUE) {
        fscanf(STDIN, "%s",
            $enemy1 // name of enemy 1
        );
        fscanf(STDIN, "%d",
            $dist1 // distance to enemy 1
        );
        fscanf(STDIN, "%s",
            $enemy2 // name of enemy 2
        );
        fscanf(STDIN, "%d",
            $dist2 // distance to enemy 2
        );

        echo((($dist1 < $dist2) ? $enemy1 : $enemy2) . "\n");
    }
?>