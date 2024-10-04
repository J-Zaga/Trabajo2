import userControllers from "../controllers/user.controllers.js"
import express from "express"


const router = express.Router()
router.get("/users", userControllers.getUsers)

export default router
