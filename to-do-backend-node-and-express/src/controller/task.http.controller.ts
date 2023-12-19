import {Router} from "express";
import {Request,Response} from "express";

const controller =Router()

controller.get('/',getAllTasks)
controller.post('/',saveTask)
controller.patch('/:id',updateTasks)
controller.delete('/:id',deleteTasks);
export {controller as TaskHttpController}

async function getAllTasks(req:Request,res:Response){
    res.send("<h1>Task Controller: Get</h1>");
}
async function saveTask(req:Request,res:Response){

}
async function updateTasks(req:Request,res:Response) {

}
async function deleteTasks(req:Request,res:Response){

}