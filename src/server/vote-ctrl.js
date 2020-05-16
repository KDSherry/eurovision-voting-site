const Vote = require('./models/vote')

createVote = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No vote provided',
        })
    }

    const vote = new Vote(body)
   
    if (!vote) {
        return res.status(400).json({ success: false, error: err })
    }

    vote
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: vote._id,
                message: 'Vote Registered!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Error with vote registration',
            })
        })
}

getVoteByIdentifier = async (req, res) => {
    await Vote.findOne({ identifier: req.params.identifier }, (err, vote) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!vote) {
            return res
                .status(404)
                .json({ success: false, error: `Vote not found` })
        }
        return res.status(200).json({ success: true, data: vote })
    }).catch(err => console.log(err))
}

getVotes = async (req, res) => {
    await Vote.find({}, (err, votes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!votes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Vote not found` })
        }
        return res.status(200).json({ success: true, data: votes })
    }).catch(err => console.log(err))
}

module.exports = {
    createVote,
    getVoteByIdentifier,
    getVotes,
}