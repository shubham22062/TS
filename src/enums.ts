// Enums in TypeScript are just a way to give names to fixed values.
// Think of them like a menu of options where only those options are allowed.

// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.




enum Direction{
    Up,
    Down,
    Left,
    Right
}

// enum Direction{
//     Up=1,
//     Down,//becomes 2
//     Left, (becomes 3)
//     Right,(becomens 4)
// }


// can also be String 
// enum Direction{ 
//     Up = "UP",
//     Down= "DOWN",
//     Left= "LEFT",
//     Right="RIGHT"
// }


function doSomething(keypreesd:Direction){
    //do Something
}


doSomething(Direction.Up)


// The final value stored at runtime is still a number (0, 1, 2, 3). 

// common useCase in express

enum ResponseStatus{
    Sucess = 200,
    NotFound = 404,
    Error = 500
}


// app.get("/", (req,res))=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus.Error).json({})
//     }
//     //and so on...
//     res.status(ResponseStatus.Sucess).json({})
// }