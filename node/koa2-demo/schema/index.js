const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	title : {type: String, require:true},
	finishTime : {type:Number, defaults:0},
	createData : { type:Date }
});

module.exports = mongoose.model('todo',TodoSchema);