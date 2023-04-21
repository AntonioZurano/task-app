const express = require('express')
const router = express.Router();
const app = express()
const port = 4001

const tasksRouter = require('./routes/tasks')

app.use('/tasks',tasksRouter)

app.get('/', (req, res) => {
  res.status(200).send("Hello app")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})