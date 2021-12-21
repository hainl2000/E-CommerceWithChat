const jwt = require("jsonwebtoken");

const RoomModel = require('../models/room');
const MessageModel = require('../models/message');
const AccountModel = require('../models/user');

const sendMessage = async(req,res) => {
    try{
        const user = await AccountModel.findById(req.body.userId);
        const room = await RoomModel.findOne({
            roomId : req.body.roomId
        });
        const newMsg = new MessageModel({
            content: req.body.content,
            from : req.body.userId,
            sendAt : Date.now()
        });
        await newMsg.save((function (err) {
            if (err) {
                console.log(err);
                return err;
            }
            // saved!
        }));
        room.messages.push({
            msg : newMsg._id
        });
        room.last_message = newMsg.content;
        await room.save((function (err) {
            if (err) {
                console.log(err);
                return err;
            }
            // saved!
        }));
        const newMsgReceived = {
            content : newMsg.content,
            from : user.username,
            sendAt : newMsg.sendAt
        };
        // console.log(room);
        return newMsgReceived;
    }catch(err) {
        // throw err;
        return err;
    }
}

module.exports = {
    sendMessage
}