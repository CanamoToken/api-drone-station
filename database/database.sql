//CONSULTAS POSTGRESQL
CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('joan','joaseb90877@gmail.com'),
    ('john','john.doe@gmail.com');