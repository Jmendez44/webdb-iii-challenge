const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const morgan = require('morgan');
const knex = require('knex');
const cohorts = require('./routes/cohorts');
const students = require('./routes/students');
const server = express();

const knexConfig = require('./knexfile');
const db = knex(knexConfig);

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
// server.use('/api/students', students);
// server.use('/api/cohorts', cohorts);

server.get('/', (req, res, next) => {
    res.send(`
        <h2> test </h2>
    `)
});

module.exports = server;