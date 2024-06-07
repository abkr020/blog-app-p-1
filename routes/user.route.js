const { Router } = require('express')
const router = Router();
const UserModel = require("../models/user.module")

router.get('/signin', (req, res) => {
    res.render('signin')
})
router.get('/signup', (req, res) => {
    res.render('signup')
})
router.post('/signup', async (req, res) => {
    let { fullname, password, email } = req.body;
    let checkuser = await UserModel.findOne({ email });
    if (checkuser) return res.status(500).send("user already exist");

    let user = await UserModel.create({
        fullname,
        email,
        password,
    })
    res.redirect('/')


})
router.post('/signin', async (req, res) => {
    let {  password, email } = req.body;
   


    const user = await UserModel.matchpass(email, password);

    console.log(user)


    res.redirect('/')


})


module.exports = router;