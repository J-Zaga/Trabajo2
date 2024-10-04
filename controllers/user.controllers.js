import userServices from "../services/user.services.js"


async function getUsers(req, res){
    const users = await userServices.getUsers()
    res.status(200).send(users)
}

async function postUsers(req, res){
    if(JSON.stringify(req.body) == {}){
        throw new Error("El usuario esta vacio")
    }
    const postUsers = await userServices.postUsers(req.body)
    res.status(200).send(postUsers)
}

async function patchUsers(req, res){
    const { id } = req.params
    const data = req.body
    const patchUsers = await userServices.patchUsers(id, data)
    res.status(200).send(patchUsers)
}

export default{
    getUsers,
    postUsers,
    patchUsers
}