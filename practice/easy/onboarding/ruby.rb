STDOUT.sync = true # DO NOT REMOVE

loop do
    enemy_1 = gets.chomp # name of enemy 1
    dist_1 = gets.to_i # distance to enemy 1
    enemy_2 = gets.chomp # name of enemy 2
    dist_2 = gets.to_i # distance to enemy 2
    
    puts dist_1 < dist_2 ? enemy_1 : enemy_2
end