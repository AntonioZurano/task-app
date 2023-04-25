const express = require('express');
const router = express.Router();

const tasks = [
    {
        id: 1,
        task: "Preparar la clase de Nuclio",
        dueDate: "2023/04/20 18:30:00",
        status: "COMPLETED",
        createdAt: "2023/04/15 18:30:00",
        modifiedAt: null,
        deletedAt: null,
    },
    {
        id: 2,
        task: "Preparar las maletas",
        dueDate: "2023/07/20",
        status: "PENDING",
        createdAt: "2023/04/15 18:30:00",
        modifiedAt: null,
        deletedAt: null,
    },
    {
        id: 3,
        task: "Celebrar fin de año",
        dueDate: "2023/12/31",
        status: "PENDING",
        createdAt: "2023/04/15 18:30:00",
        modifiedAt: null,
        deletedAt: null,
    },
    {
        id: 4,
        task: "Celebrar la navidad",
        dueDate: "2023/12/25",
        status: "PENDING",
        createdAt: "2023/04/15 18:30:00",
        modifiedAt: "2023/04/18 11:15:00",
        deletedAt: null,
    }
    ,
    {
        id: 5,
        task: "TEST",
        dueDate: "2023/12/25",
        status: "PENDING",
        createdAt: "2023/04/15 18:30:00",
        modifiedAt: null,
        deletedAt: "2023/04/15 19:30:00",
        
    }
]

// GET /tasks/:id?
router.get('/:id', (req, res, next) => { 
    const taskId = req.params.id;
    const task = tasks.find(task => tasks.id === taskId)
    
    res.status(400).json(tasks || {text: 'not found'})

    res.status(200).send(task)
  })

// DELETE A task - /tasks/:id
router.delete('/:id', (req, res, next) => {
    const taskId = req.params.id;

    // 404 - Task no existe
    const foundTaskIndex = tasks.findIndex(task => task.id === taskId)
        if (foundTaskIndex === -1) return
    res.status(404).json({msg: 'Tarea con id ${taskId} no existe'})

    // 200 - task borrado correctamente
    tasks = tasks.filter(task => task.id !== taskId)
    res.status(200).json({ msg: 'Tarea borrada correctamente'})
})  




module.exports = router