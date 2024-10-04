import userServices from "../services/user.services.js"


async function getUsers(req, res){
    const users = await userServices.getUsers()
    res.status(200).send(users)
}


export default{
    getUsers,
}