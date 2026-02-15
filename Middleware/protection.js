

const protection = (req, res, next)=>{
    if(req.headers.authorization !== '12345'){
        return res.status(401).send('Unauthorized')
    }

    next()
}


export default protection