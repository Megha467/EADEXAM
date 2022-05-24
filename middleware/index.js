const validateMiddleware = (req, res) => {

const {fullname, state, city} = req.body;
if(!fullname || !state || !city){
    res.redirect("/")
}
}

module.exports = validateMiddleware;