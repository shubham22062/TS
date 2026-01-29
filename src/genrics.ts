// Generics mean:

// Write code that works with ANY type, but still keeps type safety

//problem without gemrics...
function identity(value:any){
    return value;
}


let result = identity(10);
result.toUpperCase();