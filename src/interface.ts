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

