const TaskContoller = require('../controllers/taskController');

const getRouter = (app) => {
    app.get('/', async (req, res) => {
        try {
            
            const task = await TaskContoller.get();
            res.status(200).send(task);
            
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
}

const postRouter = (app) => {
    app.post('/', async (req, res) => {
        try{

            const task = await TaskContoller.post(req.body);
            res.status(201).json(task);

        } catch (error) {
            res.status(500).send(error.message);
        }
    });
}

const patchRouter = (app) => {
    app.patch('/:id', async (req, res) => {
        try {

            const id = req.params.id;
            const task = await TaskContoller.patch(id, req.body);
            res.status(200).json(task);

        } catch (error) {
            res.status(500).send(error.message);
        }
    });
} 

const deleteRouter = (app) => {
    app.delete('/:id', async (req, res) => {
        try {
            
            const id = req.params.id;
            const task = await TaskContoller.delete(id);
            res.status(200).json(task);
            
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
}

const Routes = (app) => {
     getRouter(app);
     postRouter(app);
     patchRouter(app);
     deleteRouter(app);
}


module.exports = Routes;