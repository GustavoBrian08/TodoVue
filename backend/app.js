const express = require('express');
const cors = require('cors');
const dbConection = require('./db/db_connection');
const routes = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(express.json());

dbConection();
routes(app);

const port = 3000;
app.listen(port, () => console.log(`\nServidor Iniciado: - http://localhost:${port}\n`));