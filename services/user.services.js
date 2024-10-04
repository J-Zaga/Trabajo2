import userModels from "../models/user.models.js"

async function getUsers(){
    return userModels.getUsers
}

export default{
    getUsers,
}