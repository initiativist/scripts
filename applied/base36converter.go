package main

// go build -o compiled/traverse_9 traverse_9.go

import (
	"fmt"
)

func main() {
	for {
		fmt.Print("\nb: b62-dec\nd: dec-b62: ")
		var command string
		fmt.Scan(&command)

		if len(command) != 1 {
			fmt.Print("\n! UNKNOWN COMMAND")
		}

	}
}
