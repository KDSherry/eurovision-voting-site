
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vote = new Schema(
    {
        voter: {type: String, required: true},
		Albania: {type: Number, required:true},
		Armenia: {type: Number, required:true},
		Austria: {type: Number, required:true},
		Bulgaria: {type: Number, required:true},
		Estonia: {type: Number, required:true},
		France: {type: Number, required:true},
		Georgia: {type: Number, required:true},
		Germany: {type: Number, required:true},
		Italy: {type: Number, required:true},
		Montenegro: {type: Number, required:true},
		Slovenia: {type: Number, required:true},
		Sweden: {type: Number, required:true},
		Switzerland: {type: Number, required:true},
		Ukraine: {type: Number, required:true},
		UnitedKingdom: {type: Number, required:true},
    },
    { timestamps: true },

)

module.exports = mongoose.model('votes', Vote)