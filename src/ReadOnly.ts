// ### Understanding `Readonly`

// The `Readonly` utility type takes a type `T` and returns a type with all properties of `T` set as read-only. Here's the basic syntax:

//. Readonly<Type>


interface Config{
    endpoint:string;
    apikey:string;
}

const config:Readonly<Config>={
    endpoint:'<hhtps://api.example.com',
    apikey:'absvfv234'
};
//
// In this example, `config` is an object that cannot be modified after its initialization. Trying to reassign `config.apiKey` will result in a compile-time error, ensuring the immutability of the `config` object.

// ### Benefits of Using `Readonly`

// 1. **Immutability**: Ensures that objects are immutable after they are created, preventing accidental modifications.
// 2. **Compile-Time Checking**: The immutability is enforced at compile time, catching potential errors early in the development process.
// 3. **Clarity and Intent**: Using `Readonly` clearly communicates the intent that an object should not be modified, making the code easier to understand.

// ### Important Note

// It's crucial to remember that the `Readonly` utility type enforces immutability at the TypeScript level, which means it's a compile-time feature. JavaScript, which is the output of TypeScript compilation, does not have built-in immutability, so the `Readonly` constraint does not exist at runtime. This distinction is important for understanding the limitations of `Readonly` and recognizing that it's a tool for improving code quality and safety during development.