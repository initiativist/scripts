use std::env;

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
    //let run_process: bool = true;
    //println!("{:?}", args);

    //while run_process {
        //let command: String;
        
        //io::stdin().read_line(buf: &mut command).expect("Failed to read input");
    //}
}