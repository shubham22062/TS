const msg : String = "hello TypeScript";
console.log(msg);

function greet(name:string):string{
    return `hello ${name}`
}

let name :string = "shubham";
let yoyo:string = greet(name);

console.log(greet(name));
