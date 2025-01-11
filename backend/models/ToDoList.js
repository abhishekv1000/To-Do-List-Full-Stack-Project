const mongoose = require('mongoose');
const {Schema} = mongoose;


// ToDo Schema with title, description, isCompleted, completedOn, and createdBy fields
const toDoSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    isCompleted:{type:Boolean,required:true},
    completedOn:String,
    createdBy:{
        ref:"User",
        type:Schema.ObjectId
    }
},
{
    timestamps:true
});


const ToDo = mongoose.model("ToDo",toDoSchema);

module.exports = ToDo;