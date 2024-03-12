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

module.exports = router;