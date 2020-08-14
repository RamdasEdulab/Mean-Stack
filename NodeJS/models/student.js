
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentSchema = new Schema({
    name: {type:String,required: true},
    email: {type:String,required: true},
    phone: {type:Number,required: true},
    address:{type:String,required: true},
    CV: {type:String,required: true},
    uploaded: { type: Date, default: Date.now },
});

mongoose.model('Student',StudentSchema);