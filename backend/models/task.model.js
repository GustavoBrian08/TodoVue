const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    }
});

const TaskModel = model('Task', taskSchema);

module.exports = TaskModel;