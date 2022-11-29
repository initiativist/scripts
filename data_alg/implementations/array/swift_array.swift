func main() -> Void {
	let myArray = MyArray(fromArray: Array(CommandLine.arguments[1...]))
	myArray.traverse()
	
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