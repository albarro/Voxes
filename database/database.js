
let usuarios = [
    {
    id: 0,
    email: "Dummy@gmail.com",
    username: "Dummy123",
    password: "123Dummy321"
    }
];


export function findUserByName(username){
    console.log(usuarios);
    return usuarios.find(user => user.username == username);
}

export function saveUser(email, username, password){
    let user ={
        id: usuarios.length,
        email: email,
        username: username,
        password: password,
    }

    usuarios.push(user);
    console.log(usuarios);
}