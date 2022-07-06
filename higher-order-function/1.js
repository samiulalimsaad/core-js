function name() {
    console.log("hello");
}

name();

name.name = "Javascript";

console.log(name.name);

console.dir(name);
