//kotlinc ./kotlin_array.kt -include-runtime -d compiled/kotlin_array.jar

fun main(args : Array<String>) {
    val myArray = MyArray(args);

    mainProcess@ while (true) {
        print("list perform: ");
        val command = readLine();
        when (command) {
            "h" -> println("x: exit\nt: traverse\ni: insert\n");
            "t" -> myArray.traverse();
            "x" -> break@mainProcess
        }
    }
}

class MyArray (private val _myArray: Array<String>) {
    constructor() : this(arrayOf<String>());

    fun traverse() {
        for ((index, value) in this.`_myArray`.withIndex()) {
            println("list[$index] = $value");
        }
    }
}