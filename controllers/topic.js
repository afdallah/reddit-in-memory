/**
 * Dummy in memory data
 */
const data = [
  {
    title: 'Topic',
    content: 'lorem ipsum dolor sit amet',
    upVote: 0,
    downVote: 0,
    created: Date.now()
  }
]

/**
 * create new topic
 */
exports.create = (req, res) => {
  // validate body
  // make sure request body has required keys
  const keys = ['title', 'content']
  const invalidKeys = []

  for (const key in req.body) {
    if (!keys.includes(key)) {
      invalidKeys.push(key)
    }
  }

  if (invalidKeys.length > 0) {
    return res.json({
      error: `[${invalidKeys.join(', ')}] is not allowed. Allowed keys: title, content`
    })
  }

  const created = Date.now()
  data.push(Object.assign({}, req.body, { upVote: 0, downVote: 0, created }))
  res.json(data)
}

/**
 * Upvote topic
 */
exports.upVote = (req, res) => {
  // check if index exists
  const index = req.params.index
  if (!data[index]) {
    return res.json({
      error: `There is no item with index of ${index}`
    })
  }

  data[index].upVote += 1
  const message = `Successfully updated item at index - ${index}`
  res.json({ ...data[index], message })
}

/**
 * Downvote topic
 */
exports.downVote = (req, res) => {
  // check if index exists
  const index = req.params.index
  if (!data[index]) {
    return res.json({
      error: `There is no item with index of ${index}`
    })
  }

  data[index].downVote += 1
  const message = `Successfully updated item at index - ${index}`
  res.json({ ...data[index], message })
}

/**
 * Display all available topic
 */
exports.topics = (req, res) => {
  res.json(data)
}

/**
 * Get a single item by index
 */
exports.topic = (req, res) => {
  const index = req.params.index
  // if (typeof index !== 'number') {
  //   return res.json({
  //     error: 'Index must be type of number'
  //   })
  // }

  if (!data[index]) {
    return res.json({
      error: '404 There is no item with index of ' + index
    })
  }

  return res.json(data[index])
}

/**
 * Remove item by index
 */
exports.removeById = (req, res) => {
  // Add simple validation
  if (data.length === 1) {
    return res.json({
      error: 'Last item can not be deleted'
    })
  }

  const index = req.params.index
  const isExist = data.indexOf(index) >= 0
  if (isExist) {
    return res.json({
      error: '404 There is no item with index of ' + index
    })
  }

  data.splice(index, 1)
  res.json(data)
}
