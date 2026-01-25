const chai ={
    name:"masala chai",
    price:20,
    isHot:true
}

// declaring object types..

let tea:{
    name:string,
    price:number,
    isHot:boolean
}

tea ={
    name:"ginger tea",
    price:25,
    isHot:true

}

//alisa object..

type Tea = {
    name :String,
    price:number,
    ingreedient:string[]
}

const adrakChai:Tea ={
    name :"adrak chai",
    price: 20,
    ingreedient:["sugar","adrak"]
}