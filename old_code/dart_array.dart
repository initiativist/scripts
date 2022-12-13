import 'dart:io';

class MyArray {
  List<String> _myArray;

  MyArray(this._myArray);

  void traverse() {
    for (var i = 0; i < this._myArray.length; i++) {
      print("list[$i] = ${this._myArray[i]}");
    }
  }

  void insert(int index, String value) {
    if (index > this.length() || index < 0) {
      return;
    }

    var reverseIterator = this.length();
    var newArray = new List.filled(this.length() + 1, "");
    List.copyRange(newArray, 0, this._myArray);
    this._myArray = newArray;
    while (reverseIterator >= index && reverseIterator > 0) {
      this._myArray[reverseIterator] = this._myArray[reverseIterator - 1];
      reverseIterator -= 1;
    }

    this._myArray[index] = value;
  }

  int length() {
    return this._myArray.length;
  }
}

void main(List<String> args) {
  var myArray = new MyArray(args);

  while (true) {
    stdout.write("\nlist perform: ");
    var userCommand = stdin.readLineSync();
    userCommand ??= "";

    if (userCommand.length != 1) {
      stdout.write("\n! UNKNOWN COMMAND \n");
      continue;
    }

    switch (userCommand) {
      case 't':
        myArray.traverse();
        break;
      case 'x':
        return;
      case 'i':
        stdout.write("(\$index \$value): ");
        var insertCommand = stdin.readLineSync();
        insertCommand ??= "";

        if (!insertCommand.contains(" ")) {
          stdout.write("\n! INCORRECT FORMAT\n");
          continue;
        }
        var insertArgs = insertCommand.split(" ");
        if (insertArgs.length != 2) {
          stdout.write("\n! INCORRECT FORMAT \n");
          continue;
        }

        var index = int.tryParse(insertArgs[0]);
        var value = insertArgs[1];
        if (index == null || index > myArray.length() || index < 0) {
          stdout.write("\n! UNKOWN INDEX \n");
          continue;
        }

        myArray.insert(index, value);
        break;
      case 'h':
        stdout.write("\nt: traverse\nx: exit\ni: insert\n");
        break;
      default:
        stdout.write("\n! UNKNOWN COMMAND \n");
    }
  }
}
