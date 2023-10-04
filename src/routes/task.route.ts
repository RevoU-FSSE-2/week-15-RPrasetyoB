import express from 'express'
import { getAllTask, getOneTask, createTask, updateTask, deleteTask } from '../controllers/task.controller'

const taskRoutes = express.Router()
taskRoutes.get('/v1/tasks', getAllTask)
taskRoutes.get('/v1/tasks/:id', getOneTask)
taskRoutes.post('/v1/tasks', createTask)
taskRoutes.patch('/v1/tasks/:id', updateTask)
taskRoutes.delete('/v1/tasks/:id', deleteTask)

export default taskRoutes