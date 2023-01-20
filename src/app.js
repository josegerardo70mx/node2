const express = require('express'); 
const db = require('./utils/database');
const initModels = require('./models/initmodels');
const Users = require('./models/users.model');


const app = express()
app.use(express.json())

const PORT = 8000;


//test db connection//
db.authenticate()
.then(() => console.log('Authentication succes!'))
.catch((error) => console.log(error));
//creando la tabla//
initModels();

db.sync({
      alter: false,
})
.then( () => console.log('Base de datos sincronizada...'))
.catch((error) => console.log(error))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Bienvenido al servidor'})
})

//definir rutas de endpoints//
//localhost:8000/users ------------------> ruta para usuarios
//localhost:8000/todos ------------------> ruta para tareas


//users - GET get all users***

app.get('/users', async (req, res) => {
try {
  const result = await Users.findAll()
  res.status(200).json(result);
  
} catch (error) {
  console.log(error);
}


})

// get user by id***
app.get('/users/id/:id', async (req, res) => {
try {
const { id } = req.params;
const result = await Users.findByPk(id);
res.status(200).json(result);
} catch (error) {
  console.log(error);
}

})

//get user by username***
app.get('/users/username/:username', async (req, res) => {
try {
const { username } = req.params;
result = await Users.findOne({where:{username}});
res.status(200).json(result);
} catch (error) {
  console.log(error);
}



})

//post create a user***
app.post('/users', async (req, res) => {
try {
  const user = req.body;
  const result = await Users.create(user);
  res.status(201).json(result);
  
} catch (error) {
  console.log(error);
}

})

//update actualizar usuario -password-***
app.put('/users/:id', async (req, res) => {
  try {
  const { id } = req.params;
  const field =  req.body
  result = Users.update(field, {where:{id}});
  res.status(400).json(error.message)
  } catch (error) {
    console.log(error);
  }
})

//eliminar un usuario --> id***
app.delete('/users/:id', async (req, res) => {
try {
const { id } = req.params;
const result = Users.destroy({where:{id}});
res.status(400).json(error.message);
} catch (error) {
  res.status(400).json(error.message);
  
}



})


  app.listen(PORT, () => {
    console.log(`servidor en el puerto ${PORT}`)
  })