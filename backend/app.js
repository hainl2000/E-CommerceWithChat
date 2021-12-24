var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var cookie = require('cookie')

var app = express();

var http = require('http')
const server = app.listen(8000, () => console.log(`Running on port 8000`))
var socket = require('socket.io');

const io = socket(server)

// io.listen(server)
const AccountModel = require('./models/user');
const jwt = require("jsonwebtoken");
const roomController = require('./controllers/room');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var roomRouter = require('./routes/room');
var authorizationMiddleware = require('./validate/authorizationAccount');

const mongo = require('./mongo');
mongo();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.engine('html', require('jade').renderFile);
// app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//CORS
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

//
app.use('/', indexRouter);
// app.use('/chat',roomRouter);
app.use('/user', authorizationMiddleware.authorizeUser,userRouter);
app.use('/admin', authorizationMiddleware.authorizeAdmin,adminRouter);
// app.use('/supporter');



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

io.on("connection", function(socket){
    console.log(socket.handshake.headers.cookie)
    var cookies = cookie.parse(socket.handshake.headers.cookie);
    let userId = jwt.verify(cookies.userId,process.env.JWT_KEY);
    console.log(userId)
    // var userId = cookies.userId;
    // let user = AccountModel.findOne({
    //     _id : userId
    // });
    
    // AccountModel.findOne({_id: userId.userId}).then(response => {
    //     if(response)
    //     {
    //         io.engine.generateId = function (req) {
    //             // generate a new custom id here
    //             return 1
    //         }
    //         socket.emit('connected')
    //     }
    // })

    io.engine.generateId = userId.userId

    console.log(socket.id)

    // // io.engine.generateId = function (req) {
    // // // generate a new custom id here
    // // return 1
    // // }

    socket.on('join', (data) => {
        console.log(data.message)
    })
    // socket.on('loadMsg',async (data) => {
    //     const {Msgs, error} = await roomController.loadMessages(data.roomId);
    //     !error ? socket.emit('messagesLoaded', { Msgs }) : socket.emit('noChatFound')
    //     // if(user.role == 1){
            
    //     // }
        
    // })

    // socket.on('sendNewMsg', async ({ data }) =>
    // {
    //   const { newMsg, error } = await sendMsg(data.userId, data.roomId , data.msg)
    // //   const receiverSocket = findConnectedUser(msgSendToUserId)
  
    // //   if(receiverSocket)
    // //   {
    // //     io.to(receiverSocket.socketId).emit('newMsgReceived', { newMsg })
    // //   }
    // //   else
    // //   {
    // //     await setMsgToUnread(msgSendToUserId)
    // //   }
    //     io.to(data.userId).emit("newMsgReceived",{newMsg});
    //   !error && socket.emit('msgSent', { newMsg });
    // })
});

module.exports = app;