
export let posts = [
    {id:1, title:'first post', content: 'Hello world'}
]


export const findPostById = (id) =>{
    return posts.find(post => post.id === id)
}

export const addPost = (post)=>{
    posts.push(post);
    return post;
}