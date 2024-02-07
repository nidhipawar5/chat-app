import { sendMessage, getMessages } from "../controllers/message.controller.js"
import protectRoute  from "../middleware/protectRoute.js"
import express from "express"

const router = express.Router()

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)

export default router