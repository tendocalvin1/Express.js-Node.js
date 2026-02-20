
export const users = [
    {id:1, name: 'Tendo Calvin', country: 'Uganda'},
    {id:2, name: 'Myron Gaines', country: 'United States of America'}
]

export const addUser = (user)=>{
    users.push(user);
    return user;
}