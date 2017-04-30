using System;
using System.Linq;

class Thor
{
    static void Main()
    {
        int [] inputs = Console.ReadLine().Split(' ').Select(n => Convert.ToInt32(n)).ToArray();
        int x = inputs[0]; // Light pos
        int y = inputs[1]; // Light pos
        int X = inputs[2]; // Thor pos
        int Y = inputs[3]; // Thor pos
        
        while (true)
        {
            string d = "";
            if (Y > y)
            {
                d = "N";
                Y--;
            }
            else if (Y < y)
            {
                d = "S";
                Y++;
            }
            
            if (X > x)
            {
                d += "W";
                X--;
            }
            else if (X < x)
            {
                d += "E";
                X++;
            }
            
            Console.WriteLine(d);
        }
    }
}