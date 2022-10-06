const express = require('express')
const router = express.Router()
const {addComment} = require('../controllers/commentController')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

// router.get('/all', getAllBlogs)
router.post('/add', addComment)

module.exports = router