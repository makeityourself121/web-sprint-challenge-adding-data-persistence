// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll()
    res.status(200).json(tasks)
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  const newTask = req.body
  Task.insert(newTask)
    .then((task) => {
      res.status(201).json(task)
    })
    .catch(next)
})

module.exports = router
