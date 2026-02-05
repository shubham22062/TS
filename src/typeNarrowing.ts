// Type Narrowing in TypeScript means reducing a broad (union) type into a more specific type so that TypeScript knows exactly what you’re working with at runtime.

// 👉 In simple words: TypeScript starts with “this could be many types” and narrows it down to one type using checks.


function makingOfChai(order:string|number){
    if(order==='string'){
        return `your order isd ${order}`
    }else{
        return `your order number is ${order}`
    }
}

console.log(makingOfChai(54));


//Truthinness

function serveChai(msg?:string){
    if(msg){
        return `your msg id ${msg}`
    }else{
        return `your chai is being serverd`
    }
}


console.log(serveChai());


//exhautive checks
// kind of a switch case..

function orderChai(order:'small'|'medium'|'large'){
    if(order==='large')return `your order is large`
    if(order==='small') return `your order is small`
    return `your order is ${order}`;
}


console.log(orderChai('small'));

function printValue(value:string|number){
    if(typeof value ==="string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    }
}


// talking about classes..(instance of..)

class kulhadd{
    serve(){
        return `serving kulhadd chai`
    }
}

class cutting{
    server(){
        return `serving cutting chai`
    }
}

function serve(chai:kulhadd|cutting){
    if(chai instanceof kulhadd) return chai.serve();

}



type chaiOrder ={
    type :string
    sugar:number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj==="object" &&
        obj!== null &&
        typeof obj.type ==='string' &&
        typeof obj.sugar=='number'
    )
}


// how to use this validation function isChaiOrder

function serveOrder(item: chaiOrder|string){
    if(isChaiOrder(item)){
        return `your order is ${item.type}and with sugar ${item.sugar}spoon`;

    }
    else return `the input is string`
}
//first make object 


const order1:chaiOrder={
        type:"masala chai",
        sugar:34
}

//console.log(serverOrder(order1));

// Reducing board type into a more specofic types using checks...

// norrowing using typeof(most common)..

function printValue1(value:string|number){
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    }
}

function findAge(age:string|number){
    if (typeof age === "string"){
        console.log("adult")
    }else {
        console.log(`there age is ${age}`)
    }
}


// Narrowing using if check (truthy / falsy)


function greeet(name?:string){
    if(name){
        console.log("hello "+name.toUpperCase())
    }else{
        console.log("hello gusets")
    }
}


// Narrowing using in operator (Objects)

type admin = {
    role:"adminn";
    permission:string[];
}

type user = {
    role:user;
}


type person = admin|user;

// function checkrole(Person:person){
//     if("permission" in person){
//         console.log(personalbar.permismisomn)
//     }
// }