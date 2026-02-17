
import { posts, findPostById, addPost }  from '../Models/postModel.js';

export const getPosts =(req, res) =>{
    res.json(posts);
}


export const getSinglePost = (req, res)=>{
    const post = findPostById(parseInt(req.params.id))



if (!posts){
    return res.status(404).json({message: 'Post not found'})

    res.json(posts);
}

}
export const  createPost = (req, res) =>{
    const newPost = {
        id: posts.length + 1, 
        ... req.body
    };

    addPost(newPost);
    res.status(201).json(newPost)
}