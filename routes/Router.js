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

router.get('/getUser', async (req, res) => {

    const email = req.body.email;
    const user = await model.findOne({email : email});

    if(req.body.password === user.password){
        res.status(200).json(user);
    }else{
        res.status(404).json({msg : "not permitted"});
    }
});

router.get('/getAllUsers', async (req, res) => {

    await model.find({})
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {res.status(400).json({msg : `error in rendering users`})});
});

router.patch('/editUser/:password', async (req, res) => {

    const email = req.body.email;
    const password = req.params.password;

    await model.findOne({email : email})
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

router.delete('/deleteUser', async (req, res) => {

        const email = req.body.email;
        const password = req.body.password;

        await model.findOne({email : email})
        .then((user) => {

            if(password === user.password){
                model.deleteOne({email : email})
                .then(() => {res.status(200).json({msg : "eliminato"})})
                .catch((err) => {res.status(400).json(`there has been an error ${err}`)});
            }else{
                console.log(`deletion not permitted!`);
            }
        })
});

module.exports = router;