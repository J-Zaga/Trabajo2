import express from "express"
import userRoutes from "./routes/user.routes.js"

const PORT = 8080
const app = express()

//Middlewares que necesito para intercambiar datos ya sea url o body con mi api
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", userRoutes)

app.listen(PORT, () => {console.log("Server running")})
app.on("Error", (err) => {console.log("Ha ocurrido un error en el servidor: ", err)})