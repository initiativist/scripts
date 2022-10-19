public class java_array {
    private String[] _myArray;

    public java_array(String[] userArray) {
        this._myArray = userArray;
    }

    public void traverse() {
        for (int i = 0; i < this.getLength(); i++) {
            System.out.println(String.format("list[%s] = %s", i, this._myArray[i]));
        }
    }

    public void insert(String value, int index) {
        if (index > this.getLength() || index < 0) {
            return;
        }

        int reverseIterator = this.getLength();

        String[] newArray = new String[this.getLength() + 1];
        System.arraycopy(this._myArray, 0, newArray, 0, this.getLength());

        while (reverseIterator >= index && reverseIterator > 0) {
            newArray[reverseIterator] = this._myArray[reverseIterator - 1];
            reverseIterator -= 1;
        }

        newArray[index] = value;
        this._myArray = newArray;
    }

    public int getLength() {
        return this._myArray.length;
    }

    public static void main(String[] args) {

        java_array myArray = new java_array(args);
        while (true) {
            String command = System.console().readLine("\nlist perform: ");
            if (command.length() > 1) {
                System.out.println("\n! UNKNOWN COMMAND \n");
                continue;
            }

            switch (command) {
                case "h":
                    System.out.println("t: traverse\ni: insert\nx: exit");
                    break;

                case "t":
                    myArray.traverse();
                    break;

                case "i":
                    String insertCommand = System.console().readLine("($element $value): ");
                    String[] argList = insertCommand.split(" ");

                    if (argList.length != 2) {
                        System.out.print("\n! INCORRECT FORMAT \n");
                        break;
                    }
                    String indexStr = argList[1];
                    String value = argList[0];
                    int index;

                    try {
                        index = Integer.parseInt(indexStr);
                    } catch (Exception e) {
                        System.out.print("\n! UNKNOWN INDEX \n");
                        break;
                    }

                    if (index > myArray.getLength() || index < 0) {
                        System.out.print("\n! UNKNOWN INDEX \n");
                        break;
                    }

                    myArray.insert(value, index);
                    break;

                case "x":
                    return;

                default:
                    System.out.println("\n! UNKNOWN COMMAND \n");
                    break;
            }
        }
    }
}