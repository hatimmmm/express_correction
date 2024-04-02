
import express from "express"
import router from "./routers/router.js"
import dotenv from "dotenv"
import methodOverride from "method-override"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(router)
app.set("view engine","ejs")
app.set("views","views")
app.use(methodOverride("_method"))



app.listen(PORT, ()=> console.log(`Listening in port ${PORT}`))
