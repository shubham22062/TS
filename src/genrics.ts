// Generics mean:

// Write code that works with ANY type, but still keeps type safety

//problem without gemrics...
function identity(value:any){
    return value;
}


let result = identity(10);
result.toUpperCase();


function identitiy1<t>(value:t):t{
    return value;
}

// usage

identitiy1<number>(10);
identitiy1<string>("shubham")


// Generics with inferance very important

let num = identitiy1(10);
let str = identitiy1("Awasthi")



// genrice with Array 


function getArr<T>(arr:T[]): T|undefined{
    return arr[0];
}

getArr([1,2,4]);


// genrics with multiple types


function pair<T, U>(a:T, b:U){
    return{a,b};
}

const resul = pair(1, "hello");