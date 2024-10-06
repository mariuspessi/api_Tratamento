import mysql from "mysql";

// Criar o pool de conexões
export const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'root',
    database: 'tratamento'
});




