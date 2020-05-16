
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vote = new Schema(
    {
        identifier: {type: String, required: true},
        1: {type: String, required: true},
        2: {type: String, required: true},
        3: {type: String, required: true},
        4: {type: String, required: true},
        5: {type: String, required: true},
        6: {type: String, required: true},
        7: {type: String, required: true},
        8: {type: String, required: true},
        10: {type: String, required: true},
        12: {type: String, required: true},
    },
    { timestamps: true },

)

module.exports = mongoose.model('votes', Vote)