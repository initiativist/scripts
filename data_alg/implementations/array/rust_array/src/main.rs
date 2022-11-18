use std::{env, io};

struct MyArray {
    _my_array: Vec<String>
}

impl MyArray {
    fn traverse(&self) {
        for (i, value) in self._my_array.iter().enumerate() {
            println!("list[{}] = {:?}", i, value)
        }
    }

    fn _length(&self) -> usize {
        return self._my_array.len();
    }
    
}


fn main() {
    let my_array = MyArray { _my_array: env::args().collect::<Vec<String>>()[1..].to_vec() };
    my_array.traverse();
    let mut run_process: bool = true;

    while run_process {
        let mut command = String::new();
        
        match io::stdin().read_line(&mut command) {
            Ok(_i) => {

                if command.is_empty() || command.len() != 1 {
                    println!("\n! UNKNOWN COMMAND \n");
                }
                
                match command.as_str() {
                    "x" => {
                        run_process = false;
                        continue;
                    },
                    "t" => {
                        my_array.traverse();
                    },
                    "h" => {
                        println!("\nt: traverse\nx: exit\ni: insert")
                    },
                    &_ => {
                        println!("\n! UNKNOWN COMMAND \n")
                    }
                }
            }
            Err(_error) => {
                println!("\n! UNKNOWN COMMAND \n")
            }
        }

    }
}