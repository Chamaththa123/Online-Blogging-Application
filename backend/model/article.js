const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    autherName:{
        type:String,
        required: true
    },
    header:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('article', articleSchema);