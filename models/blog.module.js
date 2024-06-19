const mongoose = require('mongoose')



const blogSchema = mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    body: {
        type: String,
        // required: true,

    },

    coverImageURL: {
        type: String,
        // default: '/public/images/0d64989794b1a4c9d89bff571d3d5842.jpg',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }


}, { timestamps: true })




const BlogModel = mongoose.model('blogs', blogSchema)

module.exports = BlogModel;