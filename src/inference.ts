// TypeScript automatically figures out the type for you so you don’t have to write it every time.

let name = "kush";
 // it automatically understand the name is string format ..

 function add(a:number , b:number){
    return a+b;
 }

 //function add(a:number,b:number ):number (this autmatically detact the ts)

 let result = add(5,3);

 function isLegal(age:number){
    if(age>18){
        return true;
    }else{
        return false
    }
 }

 console.log(isLegal(2));