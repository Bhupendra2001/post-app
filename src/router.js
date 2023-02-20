const express = require('express')
const router = express.Router()
const {createPost , getAllPost , getPost , updatePost , deletePost} = require('./controller')


router.post('/api/posts', createPost )
router.get('/api/posts', getAllPost)
router.get('/api/posts/:id', getPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id',deletePost )

module.exports = router