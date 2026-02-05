// syntax of partial
    // Partial<Type>


    interface User{
        id:number;
        name:String;
        age:String;
        email:String;
        password:String;
    }

    type updateProps = Pick<User,'name'|'age'|'email'>

    type updatePropsOptional = Partial<updateProps>


    function updateUser(UpdateProps:updatePropsOptional){
        //hit the database to update the user


    }

    updateUser({name:'Alicd'});

    updateUser({age:'22'});
    updateUser({email:'shubha@gmail.com'})

//     In this example, `UpdatePropsOptional` is a new type where the `name`, `age`, and `email` properties are all optional, thanks to `Partial`. The `updateUser` function can then accept an object with any combination of these properties, including an empty object.

// ### Benefits of Using `Partial`

// 1. **Flexibility in Updates**: `Partial` is ideal for update operations where you may only want to modify a few properties of an object.
// 2. **Type Safety**: Even though the properties are optional, you still get the benefits of type checking for the properties that are provided.
// 3. **Code Simplicity**: Using `Partial` can simplify function signatures by not requiring clients to pass an entire object when only a part of it is needed.

// > The **`Partial`** utility type in TypeScript is useful where you need to work with objects that might only have a subset of their properties defined. It allows you to create types that are more flexible for update operations while still maintaining type safety.
// >