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

router.get('/:id?', (req, res) => {
    res.send(tasks)
  })

  

module.exports = router