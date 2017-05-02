nextPos = string.gmatch(io.read(), "%w+")
lightX = tonumber(nextPos()) -- Light pos
lightY = tonumber(nextPos()) -- Light pos
thorX = tonumber(nextPos()) -- Thor pos
thorY = tonumber(nextPos()) -- Thor pos

while true do
    remainingTurns = io.read() -- The level of Thor's remaining energy, representing the number of moves he can still make.
    distance = ''
    
    if thorY > lightY then
        distance = 'N'
        thorY = thorY - 1
    elseif thorY < lightY then
        distance = 'S'
        thorY = thorY + 1
    end
    if thorX > lightX then
        distance = distance..'W'
        thorX = thorX - 1
    elseif thorX < lightX then
        distance = distance..'E'
        thorX = thorX + 1
    end
    print(distance)
end