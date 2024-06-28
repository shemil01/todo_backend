const express = require('express')
const routes = express.Router()
const controller = require('../controller/task')


routes.post('/add-task',controller.addTask)
routes.get('/view-task',controller.viewTask)
routes.put('/edit-task/:id',controller.editTask)
routes.delete('/delete-task/:id',controller.deleteTask)
module.exports = routes