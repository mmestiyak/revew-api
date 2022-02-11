const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    reviewStar: {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Reviews', ReviewSchema)