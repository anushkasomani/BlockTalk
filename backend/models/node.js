const mongoose=require('mongoose');


const Schema=mongoose.Schema;
const blockSchema= new Schema({
    profile: {
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    }
}, {timestamps:true})

const Block=mongoose.model('Block', blockSchema);

module.exports=Block;