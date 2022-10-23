package main

// go build -o compiled/traverse_9 traverse_9.go

import (
	"fmt"
	"os"
	"strconv"
)

type go_array interface {
	traverse()
	insert()
	length()
}

type MyArray struct {
	vals []string
}

func (myArray MyArray) traverse() {
	for i := 0; i < len(myArray.vals); i++ {
		fmt.Println(fmt.Sprintf("list[%v] = %s", i, myArray.vals[i]))
	}
}

func add_custom_array_space(smallerArray []string, amount int) []string {
	largerArray := make([]string, len(smallerArray), cap(smallerArray)+amount)
	copy(largerArray, smallerArray)
	largerArray = largerArray[0 : len(smallerArray)+amount]
	smallerArray = largerArray
	return smallerArray
}

func (myArray MyArray) insert(value string, index int) MyArray {
	if index > myArray.length() || index < 0 {
		panic("Index must be appropriate for array")
	}

	reverseIterator := myArray.length()
	myArray.vals = add_custom_array_space(myArray.vals, 1)
	for reverseIterator >= index && reverseIterator > 0 {
		myArray.vals[reverseIterator] = myArray.vals[reverseIterator-1]
		reverseIterator = reverseIterator - 1
	}

	myArray.vals[index] = value
	return myArray
}

func (myArray MyArray) length() int {
	return len(myArray.vals)
}

func main() {
	myArray := MyArray{os.Args[1:]}

	for {
		fmt.Print("\nlist perform: ")
		var command string
		fmt.Scan(&command)

		if len(command) > 1 {
			fmt.Print("\n! UNKNOWN COMMAND \n")
		}

		switch command {
		case "h":
			fmt.Println("t: traverse\ni: insert\nx: exit")
			break
		case "t":
			myArray.traverse()
			break
		case "i":
			fmt.Print("\n($element $array): ")
			var insertValue string
			var insertIndex string

			var _, scanErr = fmt.Scan(&insertValue, &insertIndex)
			if scanErr != nil {
				fmt.Print("\n! INCORRECT FORMAT\n ")
			}

			index, err := strconv.Atoi(insertIndex)
			if err != nil || index > myArray.length() {
				fmt.Print("\n! UNKNOWN INDEX \n")
			}

			myArray = myArray.insert(insertValue, index)
			break

		case "x":
			return
		default:
			fmt.Print("\n! UNKNOWN COMMAND \n")
			break
		}
	}
}
