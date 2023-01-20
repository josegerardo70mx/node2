const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models')



const users = [
            {username: 'gerardo', email: 'gerardo@gmail.com', password: '3210'},
            {username: 'marian', email: 'marian@gmail.com', password: '3210'},
            {username: 'steven', email: 'steven@gmail.com', password: '3210'},
];

const todos = [
            {title: 'tarea 1', description: 'loremipsum1', userId: 1},
            {title: 'tarea 2', description: 'loremipsum2', userId: 1},
            {title: 'tarea imposible', userId: 2},
            {title: 'dormir', description: 'loremipsum4', userId: 3},
];

const categories = [];

const todosCategories = [];

db.sync({force: true})
.then(() => {
  console.log('start seeding data...');
  users.forEach((user) => Users.create(user));

  setTimeout(() => {
  todos.forEach((todo) => Todos.create(todo));
  }, 100);

})
.catch((error) => console.log(error));
