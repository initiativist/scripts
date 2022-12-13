<?php

class php_array implements Countable {
    private $_myArray = [];

    function __construct($array) {
        $this->_myArray = $array;
    }

    public function traverse(): void {
        for ($i = 0; $i < count($this); $i++) {
            echo "list[$i] = ".$this->_myArray[$i]."\n";
        }
    }

    public function insert($value, $index): void {
        if (!is_int($index) || $index > count($this) || $index < 0) {
            return;
        }
        
        $reverseIterator = count($this);
        while ($reverseIterator >= $index && $reverseIterator > 0) {
            $this->_myArray[$reverseIterator] = $this->_myArray[$reverseIterator-1];
            $reverseIterator -= 1;
        }
        $this->_myArray[$index] = $value;
    }

    public function count(): int {
        return count($this->_myArray);
    }
}

$myArray = new php_array(array_splice($argv, 1));
while (true) {
    $command = readline("\nlist perform: ");

    if (strlen($command) > 1) {
        echo "\n! UKNOWN COMMAND \n";
        continue;
    }

    switch ($command) {
        case ('h'):
            echo "t: traverse\ni: insert\nx: exit\n";
            continue 2;
        case ('t'):
            $myArray->traverse();
            continue 2;
        case ('i'):
            $insertArgs = readline('($element $index): ');
            $argList = explode(' ', $insertArgs);

            if (count($argList) != 2 || !is_numeric($argList[1])) {
                echo "\n! INCORRECT FORMAT \n";
                continue 2;
            }
            $index = intval($argList[1]);
            if ($index > count($myArray) || $index < 0) {
                echo "\n! UNKNOWN INDEX \n";
            }
            $value = $argList[0];
            $myArray->insert($value, $index);

            continue 2;
        case ('x'):
            break 2;
        default:
            echo "\n! UKNOWN COMMAND \n";
    }
}
echo "\n";