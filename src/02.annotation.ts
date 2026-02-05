let cups = Math.random()>0.5?10:5;
console.log(cups);
cups = 6;
cups=0;
 //You explicitly tell TypeScript the type instead of letting it guess (infer).

 let name :string= "kish";

 let age :number = 22;

 const isadmin:boolean=false;



 function greet(name:string, age:number){
    console.log(`Hello ${name}, your are ${age}`);
 }