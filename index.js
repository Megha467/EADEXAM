const express = require('express')
const app = express();
const middleware = require('./middleware/index')
const UserController = require('./controllers/UserController')
const path=require('path')
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'ejs')

//  app.use(express.static("/style", "/public/css"))
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
app.use(fileUpload())
mongoose.connect("mongodb://127.0.0.1:27017/mid")

app.get("/",  middleware, UserController.registrationPage)

app.post("/user/create", middleware, UserController.createUser)

app.get("/userlist", middleware, UserController.displayUser)

app.listen(3000, function(req, res){
    console.log('Server is running on localHost 3000')
})