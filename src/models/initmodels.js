const Users = require('./users.model');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories.models');

const initModels = () => {

Users;
Todos;
Categories;
TodosCategories;
//crear las relaciones//

Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});
//many to many

TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todo_id'});
Todos.hasMany(TodosCategories, {as: 'category', foreignKey: 'todo_id'});

TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'category_id'});


}

   module.exports = initModels;