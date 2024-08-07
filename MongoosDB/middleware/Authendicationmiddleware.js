const jwt = require('jsonwebtoken');
exports.verifyToken = (req,res,next)=>{
    const token = req.header('Autherization');
    if(!token)
        return res.status(404).json({error:"ACCESS Denied"});
    try{
        const decoded = jwt.verify(token,'this is a random key');
        req.userId = decoded.userId;
        next();
    }
    catch(error){
        res.status(401).json({error:"Invalid"});
}
}