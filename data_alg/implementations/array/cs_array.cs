using System;

// mcs -out:compiled/traverse_7.exe traverse_7.cs
// mono compiled/traverse_7.exe

class traverse_7
{
    static void traverse(string[] list)
    {
        for (int i = 0; i < list.Length; i++)
        {
            Console.WriteLine($"list[{i}] = {list[i]}");
        }
    }

    static void Main(string[] args)
    {
        traverse(args);
    }

}