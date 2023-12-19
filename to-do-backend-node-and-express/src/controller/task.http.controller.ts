import {Router} from "express";
import  {Request,Response} from "express";
import mysql from 'mysql2/promise'
import {TaskTO} from "../to/task.to.js";
import {ResultSetHeader} from "mysql2";

const controller =Router()

controller.get('/',getAllTasks)
controller.post('/',saveTask)
controller.patch('/:id',updateTasks)
controller.delete('/:id',deleteTasks);
export {controller as TaskHttpController}

const  pool = mysql.createPool({
    database:process.env.DB_NAME,
    port:+process.env.DB_PORT!,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    connectionLimit:+process.env.DB_CONNECTION_LIMIT!
});

async function getAllTasks(req:Request,res:Response){
    res.send("<h1>Task Controller: Get</h1>");
}
async function saveTask(req:Request,res:Response){
    const task=<TaskTO> req.body;
    const connection =await pool.getConnection();
    const [{insertId}]=await connection.execute<ResultSetHeader>('INSERT INTO task (description, status, email) VALUES (?,false,?)',
        [task.description,task.email]);
    task.id=insertId;
    task.status=false;
    res.status(201).json(task);
    pool.releaseConnection(connection);

}
async function updateTasks(req:Request,res:Response) {

}
async function deleteTasks(req:Request,res:Response){

}