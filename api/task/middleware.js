const validateTask = (req, res, next) => {
  const { task_description } = req.body
  if (
    task_description === undefined ||
    task_description === '' ||
    typeof task_description !== 'string'
  ) {
    res.status(400).json({ message: 'invalid resouce_name' })
  } else {
    next()
  }
}

module.exports = {
  validateTask,
}
