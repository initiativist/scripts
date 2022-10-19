import sys

class python_array:
    _myArray: list

    def __init__(self, userArray):
        self._myArray = list(userArray)

    def traverse(self):
        for i in range(len(self._myArray)):
            print("array[% s] = % s" % (i, self._myArray[i]))

    def insert(self, item, insertionIndex: int):
        if (insertionIndex > len(self) or insertionIndex < 0):
            return

        reverseIterator = len(self._myArray)
        self._myArray.append("")

        while (reverseIterator >= insertionIndex and reverseIterator > 0):
            self._myArray[reverseIterator] = self._myArray[reverseIterator-1]
            reverseIterator -= 1
        # end

        self._myArray[insertionIndex] = item

    def __len__(self):
        return len(self._myArray)


myArray = python_array(sys.argv[1:])
while (True):
    command = input("list perform: ")

    if (len(command) > 1):
        print("\n! UNKNOWN COMMAND\n")

    elif (command == "h"):
        print("t: traverse\ni: insert\nx: exit")

    elif (command == "t"):
        myArray.traverse()

    elif (command == "i"):
        args = input("($element $index): ")
        arglist = args.split(' ')

        if (len(arglist) != 2):
            print('\n! INCORRECT FORMAT \n')
            continue

        if (not (arglist[1].isnumeric() and int(arglist[1]) <= len(myArray))):
            print('\n! UNACCEPTABLE INDEX \n')
            continue

        myArray.insert(arglist[0], int(arglist[1]))

    elif (command == "x"):
        break

    else:
        print("\n! UNKNOWN COMMAND\n")
