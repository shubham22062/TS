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