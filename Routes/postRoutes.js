
import express from 'express'
import { getSinglePost, getPosts, createPost } from '../Controllers/postControllers.js'

const router = express.Router();

router.get('/', getPosts)
router.get('/:id', getSinglePost);
router.post('/', createPost)


export default router