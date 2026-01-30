const msg : String = "hello TypeScript";
console.log(msg);

function greet(name:string):string{
    return `hello ${name}`
}

let name :string = "shubham";
let yoyo:string = greet(name);

console.log(greet(name));


function greet1(name:string):void{
    console.log(`hello ${name}`)
}

greet1("shubham Awasthi")


let messaeh:String = "hello gentlemen"


function sum(a:number , b:number ): number{
    return a+b;
}


sum (7,10);


function runOneSec(fn:()=>void){
    setTimeout(fn,1000)
}

runOneSec(function(){
    console.log("hi there")
})