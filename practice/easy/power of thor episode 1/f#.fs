open System

(* lightX: the X position of the light of power *)
(* lightY: the Y position of the light of power *)
(* thorX: Thor's starting X position *)
(* thorY: Thor's starting Y position *)
let token = (Console.In.ReadLine()).Split [|' '|]
let lightX = int(token.[0])
let lightY = int(token.[1])
let mutable thorX = int(token.[2])
let mutable thorY = int(token.[3])
let subtract x y = x - y

(* game loop *)
while true do
    (* The remaining amount of turns Thor can move. Do not remove this line. *)
    Console.In.ReadLine()

    let distanceY = subtract thorY lightY
    let distanceX = subtract thorX lightX
    let mutable direction = ""

    if distanceY > 0 then
        direction <- "N"
        thorY <- thorY - 1
    else
        if distanceY < 0 then
            direction <- "S"
            thorY <- thorY + 1

    if distanceX > 0 then
        direction <- direction + "W"
        thorX <- thorX - 1
    else
        if distanceX < 0 then
            direction <- direction + "E"
            thorX <- thorX + 1

    (* A single line providing the move to be made: N NE E SE S SW W or NW *)
    printfn "%s" direction
