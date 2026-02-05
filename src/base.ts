interface User{
    name:String
    age:number
}

function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age;
}

const result = sumOfAge({
    name :"shuham",
    age:21
},{
    name:"kuldep",
    age:20
});

console.log(result);