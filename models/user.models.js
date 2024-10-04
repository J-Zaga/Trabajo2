const users = [
    {nombre: "Juan Pérez",edad: 25,nota: 85},
    {nombre: "María López",edad: 30,nota: 92},
    {nombre: "Carlos García",edad: 22,nota: 78},
    {nombre: "Ana Torres",edad: 28,nota: 90}
]


async function getUsers() {
    return users
} 

export default{
    getUsers,
}