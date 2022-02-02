const jwt = require("jsonwebtoken");

const RoomModel = require('../models/room');
const MessageModel = require('../models/message');
const AccountModel = require('../models/user');

const loadMessages = async(roomId) => {
    try{
        let listMessages = [];

        let restrictedFields ={
            _id : false
        }
        const room = await RoomModel.findOne({
            roomId : roomId
        });
        await Promise.all(room.messages.map(async(message)=>{
            try{
                let msg = await MessageModel.findOne({
                            _id : message.msg
                        },restrictedFields);
                let userSent = await AccountModel.findById(msg.from);
                listMessages.push({msg : msg.content , userSent : userSent.username});
                return ;
            }catch(err){
                console.log('error 1');
            }
        }));
        console.log(listMessages);
        return listMessages;
    }catch(err){
        console.log('error 2');
    }
}

// const loadMessages = async(req,res) => {
//     let roomId = req.body.roomId;
//     let listMessages = [];
//     let restrictedFields ={
//         _id : false
//     }
//     const room = await RoomModel.findOne({
//         roomId : roomId
//     });
//     // room.messages.map(async(message) => {

//     // })
//     await Promise.all(room.messages.map(async(message)=>{
//         // console.log(message.msg);
//         try{
//             let msg = await MessageModel.findOne({
//                         _id : message.msg
//                     },restrictedFields);
//             let userSent = await AccountModel.findById(msg.from);
//             listMessages.push({msg : msg.content , userSent : userSent.username});
//             return ;
//         }catch(err){
//             console.log(err);
//         }
//     }));
//     console.log(listMessages);
//     // return listMessages;
//     return res.status(200).json({
//         listMessages: listMessages
//     })
// }

module.exports = {
    loadMessages
}