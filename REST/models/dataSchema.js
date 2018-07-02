var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    name: {type:String},
    roll: {type:String},
    sex: {type:String},
    age: {type:String},
    class: {type:String}

});

module.exports = mongoose.model('student',studentSchema);