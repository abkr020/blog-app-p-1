const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: '/public/images/0d64989794b1a4c9d89bff571d3d5842.jpg',
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },

}, { timestamps: true })

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(5, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.salt = salt;
            user.password = hash;
            next();
        });
    });
});

userSchema.static("matchpass", async function (email, password) {
    // console.log(this)
    const user = await this.findOne({ email })
    if (!user) throw new Error("no user founfd - user.module.js")
    const salt = user.salt;
    const hashpassword = user.password;

    bcrypt.hash(password, salt, function (err, hash) {
        // if (err) return false;
        password = hash;

        if (hashpassword !== password) throw new Error("password not match - user.module.js")
        // return (...user,password: undefined)
        // console.log(user);
        // console.log("here");
    });
    // console.log("here last");

    // return {...user , password:undefined , salt:undefined};

    return { password:undefined, salt:undefined, ...user };

})
const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;