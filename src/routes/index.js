// aqu se definen las rutas del aplicativo
const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserByName, deleteUserByName, updateUser } = require('../controllers/index.controller')
//crea la ruta udsuarios y responde con los usuarios  de la db
router.get('/users', getUsers);
router.get('/users/:name', getUserByName);
router.post('/users', createUser);
router.delete('/users/:name', deleteUserByName);
router.put('/users/:id', updateUser);


module.exports = router;