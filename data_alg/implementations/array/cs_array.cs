using System;

// mcs -out:compiled/cs_array.exe cs_array.cs
// mono compiled/cs_array.exe

class traverse_7
{

    static void Main(string[] args)
    {
        MyArray myArray = new MyArray(args);
        
        while (true) {
            var command = Console.ReadLine();
            if (command.Length != 1) {
                Console.WriteLine("\n! UNKNOWN COMMAND\n");
            }

            switch (command)
            {
                case "h":
                    Console.WriteLine("\nt: traverse\nx: exit\ni: insert\n");
                    break;
                case "t":
                    myArray.traverse();
                    break;
                case "x":
                    return;
                default:
                    Console.WriteLine("\n! UNKNOWN COMMAND\n");
                    break;
            }
        }
    }

}

class MyArray {
    private string[] _myArray;

    public MyArray(string[] userArray) {
        this._myArray = userArray;
    }

    public void traverse()
    {
        for (int i = 0; i < this._myArray.Length; i++)
        {
            Console.WriteLine($"list[{i}] = {this._myArray[i]}");
        }
    }

    public void insert(int index, string value) {
        if (index > this.length() || index < 0) {
            return;
        }

        var reverseIterator = this.length();
        var newArray = this._myArray;
        this._myArray;
    }

    public int length()
    {
        return this._myArray.Length;
    }
}