const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const config = require('../knexfile')
const knex = require('knex');
const argv = require('yargs')
	.usage('Usage: $0 [options]')
	.alias('e', 'env')
	.describe('env', 'Config environment to use [local|dev|test|indiadev|indiatest|demo|prod]')
	.help('h')
	.alias('h', 'help')
	.argv;

const environment = argv.env || 'development';
const db = knex(config[environment])


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/v1/todos', (req, res, next) => {
  const data = {text: req.body.text, complete: req.body.complete};
  db('todos')
  .returning('id')
  .insert(data)
  .then(result => {
  	res.json(result);
  	next();
  })
  .catch(err => next(err));
});

router.get('/api/v1/todos', (req, res, next) => {
  db.select('*')
  .from('todos')
  .then(result => {
  	res.json(result);
  	next();
  })
  .catch(err => next(err));

});

router.put('/api/v1/todos/:todo_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.todo_id;
  // Grab data from http request
  const data = {text: req.body.text, complete: req.body.complete};
  db.table('todos')
	.where({id: id})
	.update(data)
	.then(result => {
  	res.json(result);
  	next();
  })
  .catch(err => next(err));
});


module.exports = router;
