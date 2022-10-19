class typescript_array {
  _myArray: string[] = [];

  constructor(args: string[]) {
    this._myArray = args ?? [];
  }

  public traverse() {
    for (let i = 0; i < this._myArray.length; i++) {
      console.log(`list[${i}] = ${this._myArray[i]}`);
    }
  };

  public insert (value: string, index: number) {
    if (typeof index !== "number" || index % 1 !== 0 || index > this.length) {
      return;
    }

    let reverseIterator = this.length;
    this._myArray.push("");

    while (reverseIterator <= index && reverseIterator > 0) {
      this._myArray[reverseIterator] = this._myArray[reverseIterator - 1];
      reverseIterator = reverseIterator - 1;
    }

    this._myArray[index] = value;
  };

  get length() {
    return this._myArray.length;
  }
}

const main = function() {
  const promptr = require("prompt-sync")();
  const myArray = new typescript_array(process.argv.splice(2));
  while (true) {
    const command = promptr("list perform: ");
  
    if (command.length > 1 || command.length < 0) {
      console.log("\n! UKNOWN COMMAND \n");
    }
  
    switch (command) {
      case "h":
        console.log("\nt: traverse\ni: insert\nx: exit\n");
        break;
      case "t":
        myArray.traverse();
        break;
      case "i":
        const insertCommand = promptr("($element $index): ");
        const argList = insertCommand.split(" ");
  
        if (argList.length !== 2) {
          console.log("\n! INCORRECT FORMAT \n");
          break;
        }
        let index = argList[1];
        const value = argList[0];
  
        if (isNaN(index) || Number(index) > myArray.length) {
          console.log("\n! UNKNOWN INDEX \n");
          break;
        }
        index = Number(index);
        myArray.insert(value, index);
        break;
  
      case "x":
        process.exit(0);
      default:
        console.log("\n! UKNOWN COMMAND \n");
        break;
    }
  }
}

main();