const users = [
    {id: 0,nombre: "Juan Pérez",edad: 25,nota: 85},
    {id: 1,nombre: "María López",edad: 30,nota: 92},
    {id: 2,nombre: "Carlos García",edad: 22,nota: 78},
    {id: 3,nombre: "Ana Torres",edad: 28,nota: 90}
]


async function getUsers() {
    return users
} 

async function postUsers(user){
    users.push(user)
    return user
}

async function patchUsers(id, data){
    const index = users.findIndex((e) => id == e.id)
    const modifiedUser = {...users[index], ...data}
    users.splice(index, 1, modifiedUser)
    return "Actualizacion parcial completa"
}

export default{
    getUsers,
    postUsers,
    patchUsers
}