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

func (myArray MyArray) insert(value string, index int) {
	if index > myArray.length() || index < 0 {
		return
	}

	reverseIterator := myArray.length()
	myArray.vals = append(myArray.vals, "")
	for reverseIterator >= index && reverseIterator > 0 {
		myArray.vals[reverseIterator] = myArray.vals[reverseIterator-1]
		reverseIterator = reverseIterator - 1
	}

	myArray.vals[index] = value
}

func (myArray MyArray) length() int {
	return len(myArray.vals)
}

func split_string_on_character(value string, splitStr string) []string {
	result := make([]string, 1, 2)
	if len(value) <= 1 {
		return result
	}
	if len(splitStr) > 1 {
		panic("splitStr must be a single character")
	}

	for i := 0; i < len(value); i++ {
		if value[i] == splitStr[0] {
			reallocatedResult := make([]string, len(result), cap(result)+1)
			copy(reallocatedResult, result)
			reallocatedResult = reallocatedResult[0 : len(result)+1]
			result = reallocatedResult
			continue
		}
		result[len(result)-1] = result[len(result)-1] + string(value[i])
	}
	return result
}

func main() {
	myArray := MyArray{os.Args[1:]}
	myArray.traverse()
	fmt.Print(len(split_string_on_character("1 1", " ")))

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
			var insertCommand string
			fmt.Scan(&insertCommand)
			argList := split_string_on_character(insertCommand, " ")

			if len(argList) != 2 {
				fmt.Print("\n! INCORRECT FORMAT\n ")
			}

			indexStr := argList[1]
			value := argList[0]

			index, err := strconv.Atoi(indexStr)
			if err != nil || index > myArray.length() {
				fmt.Print("\n! UNKNOWN INDEX \n")
			}

			myArray.insert(value, index)
			break

		case "x":
			return
		default:
			fmt.Print("\n! UNKNOWN COMMAND \n")
			break
		}
	}
}
