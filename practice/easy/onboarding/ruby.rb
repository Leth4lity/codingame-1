STDOUT.sync = true

loop do
    enemy_1 = gets.chomp
    dist_1 = gets.to_i
    enemy_2 = gets.chomp
    dist_2 = gets.to_i

    puts dist_1 < dist_2 ? enemy_1 : enemy_2
end
