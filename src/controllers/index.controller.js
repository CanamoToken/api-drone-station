const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'firstapi',
    port: '5432',
    idleTimeoutMillis: 20000
});

const getUsers = async (req, res) => {
    //res.send('users'); //envía el mensaje users
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);//lo que ve el servidor
    res.status(200).json(response.rows); //lo que ve el usuario

};

const getUserByName = async (req, res) => {
    //res.send('User name ' + req.params.name);
    const name = req.params.name;
    const response = await pool.query('SELECT * FROM users WHERE name = $1', [name]);
    res.status(200).json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    //res.send('usuario creado');
    res.json({
        message: 'Usuario aniadido satisfactoriamente',
        body:{
            user: {name, email}
        }
    })
};

const deleteUserByName = async (req, res) =>{

    //res.send('Usuario eliminado:'  + req.params.name);
    const name = req.params.name;
    const response = await pool.query('DELETE FROM users WHERE name = $1', [name]);
    console.log(response);
    res.json(`Usuario ${name} eliminado satisfactoriamente`);
};

const updateUser = async (req, res ) =>{
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id]);
    console.log(response);
    res.send('Usuario Actualizado!');
};


module.exports = {
    getUsers,
    getUserByName,
    createUser,
    deleteUserByName,
    updateUser
};