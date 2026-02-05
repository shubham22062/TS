// Type Assertion in TypeScript means:
// 👉 “Trust me TypeScript, I know the type of this value better than you do.”

// It does NOT change the value, it only tells TypeScript how to treat it.

// Simple definition (easy words)

// Type assertion is used when TypeScript is confused about a type, but you are sure what the type is.

// Think of it like:

// “Hey TS, assume this value is of this type.”


let promise:any = '42';
let thing:number = (promise as string).length;
console.log(thing);


//define an type...
type book={
    name:string
}


let b1:book={name:"maths"};
let b2:book={name:"shubham"}