const express = require('express')

const VoteRouter = require('./vote-ctrl')

const router = express.Router()

router.post('/vote', VoteRouter.createVote)
router.get('/vote/:id', VoteRouter.getVoteByIdentifier)
router.get('/votes', VoteRouter.getVotes)

module.exports = router