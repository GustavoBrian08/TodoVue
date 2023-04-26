const TaskModel = require('../models/task.model');

class TaskContoller {
    
    static get() {
        return TaskModel.find({});
    }

    static post(body) {
        return TaskModel.create(body);
    }

    static patch(id, body) {                       // para atualizar
        return TaskModel.findByIdAndUpdate(id, body, { new: true });
    }

    static delete(id) {
        return TaskModel.findByIdAndRemove(id);
    }
}

module.exports = TaskContoller;