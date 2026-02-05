// syntax of pick
// pick<type,key>

interface User{
    id:number;
    name:String;
    email:String;
    ceratedat:Date;
    
}

// creating a new type with only name and email propwerties from UserActivation

type UserProfile = Pick<User,'name'|'email'>;

const displayProfile = (user:UserProfile)=>{
    console.log(`Name: ${user.name}, email:{user.email}`);
};

// The Pick utility type in TypeScript allows you to create types that are subsets of existing types. It allows you to be explicit about what properties a function or component expects, leading to more maintainable and error-resistant code.