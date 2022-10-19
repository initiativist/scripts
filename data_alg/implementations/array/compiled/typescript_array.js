var typescript_array = /** @class */ (function () {
    function typescript_array(args) {
        this._myArray = [];
        this._myArray = args !== null && args !== void 0 ? args : [];
    }
    typescript_array.prototype.traverse = function () {
        for (var i = 0; i < this._myArray.length; i++) {
            console.log("list[".concat(i, "] = ").concat(this._myArray[i]));
        }
    };
    ;
    typescript_array.prototype.insert = function (value, index) {
        if (typeof index !== "number" || index % 1 !== 0 || index > this.length) {
            return;
        }
        var reverseIterator = this.length;
        this._myArray.push("");
        while (reverseIterator <= index && reverseIterator > 0) {
            this._myArray[reverseIterator] = this._myArray[reverseIterator - 1];
            reverseIterator = reverseIterator - 1;
        }
        this._myArray[index] = value;
    };
    ;
    Object.defineProperty(typescript_array.prototype, "length", {
        get: function () {
            return this._myArray.length;
        },
        enumerable: false,
        configurable: true
    });
    return typescript_array;
}());
var main = function () {
    var promptr = require("prompt-sync")();
    var myArray = new typescript_array(process.argv.splice(2));
    while (true) {
        var command = promptr("list perform: ");
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
                var insertCommand = promptr("($element $index): ");
                var argList = insertCommand.split(" ");
                if (argList.length !== 2) {
                    console.log("\n! INCORRECT FORMAT \n");
                    break;
                }
                var index = argList[1];
                var value = argList[0];
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
};
main();
