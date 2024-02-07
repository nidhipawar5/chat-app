import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body
        const {id: receiverId} = req.params
        const senderId = req.user._id

        let conversation= await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        })

        if (!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message ({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        //SOCKET IO FUNCTIONALITY FOR REAL TIME

        // await conversation.save()
        // await newMessage.save()

        //this is an optimised way of doing the above, poth processes will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in message controller", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}