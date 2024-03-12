const router = require('express').Router();
model = require('../model/Model')

router.post('/createUser', async (req, res) => {

    const newUser = await model.create({
        firstName : req.body.firstName,
        secondName : req.body.secondName,
        email : req.body.email,
        password : req.body.password,
    })
    res.status(200).json(newUser);
});

router.get('/register', async (req, res) => {

    const email = req.body.email;
    const user = await model.findOne({email : email});

    if(req.body.password === user.password){
        res.status(200).json(user);
    }else{
        res.status(404).json({msg : "not permitted"});
    }
});

router.patch('/editUser/:password', async (req, res) => {

    const email = req.body.email;
    const password = req.params.password
    const user = await model.findOne({email : email})
    .then((user) => {

        if(req.body.password === user.password){
            user.password = password;
            user.save();
            res.status(200).json({msg : "the user password has been changed"});
        }else{
            res.status(404).json({msg : "not permitted"});
        }
    })
    .catch((err) => {res.status(404).json(err)});
});

module.exports = router;