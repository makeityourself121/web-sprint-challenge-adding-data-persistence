// build your `/api/projects` router here
const express = require('express')

const Project = require('./model.js')

const router = express.Router()

router.get('/', (req, res, next) => {
  Project.findAll()
    .then((projects) => {
      res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const addProject = req.body
  Project.insert(addProject)
    .then((project) => {
      res.status(201).json(project)
    })
    .catch(next)
})
module.exports = router
