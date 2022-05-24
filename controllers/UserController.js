const User = require('../model/userModel');
const registrationPage = function(req, res){
res.render("registrationForm", {name: 'Megha'})
}

const createUser = async function(req, res) {
    // const {name} = req.body;
    User.create(req.body, async function(err, user){
        console.log(user)
        const users = await User.find();
        res.render("userlist", {users})
    })
 
} 

const displayUser = async function(req, res){
const users = await User.find();
res.render("userList", users);
}


const updateUser = async function(req, res){
    const id = req.params.id;
    const user = User.findByIdAndUpdate({id: _id}, {$set: {fullname: req.body.fullname, 
        state: req.body.state, city: req.body.city,
        email: req.body.email,
        image: req.body.image,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        zipcode: req.body.zipcode
    }})
}

const deleteUser = async function(req, res){
    const id = req.params.id;
    const user = User.findByIdAndDelete(id);
    res.redirect("userList")
}
module.exports = {registrationPage, createUser, displayUser, deleteUser, updateUser}