import userModels from "../models/user.models.js"

async function getUsers(){
    return userModels.getUsers()
}

async function postUsers(users){
    return userModels.postUsers(users)
}

async function patchUsers(id, data){
    return userModels.patchUsers(id, data)
}

export default{
    getUsers,
    postUsers,
    patchUsers
}