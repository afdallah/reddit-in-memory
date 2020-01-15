/**
 * Dummy in memory data
 */
const data = [
  {
    title: 'Topic',
    content: 'lorem ipsum dolor sit amet',
    upVote: 0,
    downVote: 0,
    created: +new Date()
  }
]

/**
 * create new topic
 */
exports.create = (req, res) => {
  // validate body
  // make sure req.body object has required keys
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

  const created = +new Date()
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
      error: `There is not item with index of ${index}`
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
      error: `There is not item with index of ${index}`
    })
  }

  data[index].downVote += 1
  const message = `Successfully updated item at index - ${index}`
  res.json({ ...data[index], message })
}

/**
 * Display all available topic
 */
exports.show = (req, res) => {
  res.json(data)
}
