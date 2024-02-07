import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js"

const app = express()
const PORT = process.env.PORT || 5001

dotenv.config()

app.use(express.json()) //to parse incoming requests with JSON payloads
app.use(cookieParser())

// app.get("/",(req,res) => {
//     //root route https://localhost:5001/
//     res.send("Hello world!!")
// })

//instead of app.get routes like used above, we use app.use to avoid routing everything separately

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})