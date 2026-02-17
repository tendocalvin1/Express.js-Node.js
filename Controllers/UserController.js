
import {users, addUser} from '../Models/userModel.js';

export const getUsers =(req, res)=>{
    res.json(users)
}

export const createUser = (req, res)=>{
    const newUser = {
        id: users.length + 1,
        ... req.body
    }

    addUser(newUser);
    res.status(201).json(newUser)
}