use std::env;

struct myArray;


fn main() {
    let args: Vec<String> = env::args().collect();
    println!("{:?}", args);
}