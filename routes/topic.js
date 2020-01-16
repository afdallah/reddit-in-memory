const express = require('express')
const router = express.Router()

const topicControllers = require('../controllers/topic')

/* Routes
 * create   => post
 * upvote   => put
 * downVote => put
 * topics     => get
 */

router.get('/', topicControllers.topics)
router.get('/topics', topicControllers.topics)
router.get('/topics/:index', topicControllers.topic)
router.delete('/topics/:index', topicControllers.removeById)
router.post('/create', topicControllers.create)
router.put('/upvote/:index', topicControllers.upVote)
router.put('/downvote/:index', topicControllers.downVote)

module.exports = { router }
