import userControllers from "../controllers/user.controllers.js"
import express from "express"


const router = express.Router()
router.get("/users", userControllers.getUsers)
router.post("/post/users", userControllers.postUsers)
router.patch("/patch/:id", userControllers.patchUsers)

export default router