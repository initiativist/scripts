void traverse(List list) {
  for (var i = 0; i < list.length; i++) {
    print("list[$i] = ${list[i]}");
  }
}

void main(List<String> args) {
  traverse(args);
}
