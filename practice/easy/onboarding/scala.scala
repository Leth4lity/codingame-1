import math._
import scala.util._

object Player extends App {
    while(true) {
        val enemy1 = readLine
        val dist1 = readInt
        val enemy2 = readLine
        val dist2 = readInt

        if (dist1 < dist2) println(enemy1)
        else println(enemy2)
    }
}
