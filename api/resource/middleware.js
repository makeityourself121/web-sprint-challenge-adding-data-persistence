const validateResource = (req, res, next) => {
  const { resource_name } = req.body
  if (
    resource_name === undefined ||
    resource_name === '' ||
    typeof resource_name !== 'string'
  ) {
    res.status(400).json({ message: 'invalid resouce_name' })
  } else {
    next()
  }
}

module.exports = {
  validateResource,
}
