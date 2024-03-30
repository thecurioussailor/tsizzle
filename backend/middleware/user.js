const { User } = require('../db');
const {JWT_SECRET} = require('../config')

function userMiddleware(req, res, next) {

    const token = req.headers.authorization;

    const words = token.split(" ");
    const jwtToken = words[1];
    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.username){
            next();
        } else {
            res.status(403).json({
                message: "You are not authenticated!"
            })
        }
      } catch(e) {
            res.status(403).json({
              msg: "You are not authenticated!"
             });
        }
    
}

module.exports = userMiddleware;