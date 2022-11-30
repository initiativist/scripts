func main() -> Void {
	let myArray = MyArray(fromArray: Array(CommandLine.arguments[1...]))
	
	process: while true {
		print("list perform: ", terminator: "")
		let command = readLine(strippingNewline: true)

		if command?.count != 1 {
			print("\n! Unknown Command! \n")
			continue
		}

		switch command {
			case "h":
				print("\nx: exit\nt: traverse\ni: insert")
			case "x":
				break process
			case "t":
				myArray.traverse()
			default:
				print("\n! UNKNOWN COMMAND! \n")
		}
	}
}

struct MyArray {
	var _myArray: [String]
	init(fromArray arrayVals: [String]) {
		self._myArray = arrayVals
	}

	func traverse() {
		for (i, item) in self._myArray.enumerated() {
			print("list[\(i)] = \(item)")
		}
	}
}

main()