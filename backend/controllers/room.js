const jwt = require("jsonwebtoken");

const RoomModel = require('../models/room');
const MessageModel = require('../models/message');
const AccountModel = require('../models/user');

const loadMessages = async(roomId) => {
    let listMessages = [];
    let restrictedFields ={
        _id : false
    }
    const room = await RoomModel.findOne({
        roomId : roomId
    });
    await Promise.all(room.messages.map(async(message)=>{
        // console.log(message.msg);
        let msg = await MessageModel.findOne({
                    _id : message.msg
                },restrictedFields);
        // console.log(msg);
        let userSent = await AccountModel.findById(msg.from);
        // console.log(userSent)
        listMessages.push({msg : msg.content , userSent : userSent.username});
        console.log(listMessages);
    }));
    console.log(listMessages)
    return listMessages;
}

module.exports = {
    loadMessages
}