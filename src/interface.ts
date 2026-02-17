function makaChai(order:{type:string; sugar:number; strong:boolean}){
    console.log(order)
}

function serveChai(order:{type:string; sugar:number; strong:boolean}){
    console.log(order);
}

type chaiOrder ={
    type:string;
    sugar: number;
    strong: boolean;
}


function makeChai2(order: chaiOrder){
    console.log(order);
}

function serveChai2(order:chaiOrder){
    console.log(order);
}


type teaRecipe = {
    water:number;
    milk:number
}

class MasalaChai implements teaRecipe{
    water = 100;
    milk = 50;
}

type cupzie = "small"|"large";

interface chaiOrder2{
    type:string;
    sugar:number;
    strong:boolean;
}


interface cupsize2{
    size: "small"|"medium"|"large";
}


interface User{
    firstName:string;
    lastName:string;
    email:string;
    age: number
}

function isLegal(us:User){
    if(us.age>18){
        return true
    }else{
        return false;
    }
}

//implement interface as a class..

interface Person{
    name:string;
    age:number;
    greet(pharse:string):void;
}

class Employee implements Person{
    name :string;
    age:number;

    constructor(n:string, a:number){
        this.name=n;
        this.age= a;
    }

    greet(pharse:string){
        console.log(`${pharse}${this.name}`)
    }
}
interface User{
    id:number;
    name:String;
    emaill:String;
    ceratedat:Date;
    
}

// creating a new type with only name and email propwerties from UserActivation

type UserProfile = Pick<User,'name'|'email'>;

const displayProfile = (user:UserProfile)=>{
    console.log(`Name: ${user.name}, email:{user.email}`);
};

// The Pick utility type in TypeScript allows you to create types that are subsets of existing types. It allows you to be explicit about what properties a function or component expects, leading to more maintainable and error-resistant code.