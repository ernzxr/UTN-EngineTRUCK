const jwt = require('jsonwebtoken');
const db = require("../models");

const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if(!token) {
        return res.status(403).json({'error':true, message:'Token error'});
    }
    else {
        jwt.verify(token, 'ABCD', async (error, decode) => {
            if(error) {
                return res.status(403).json({'error':true, message:'Token error'});
            }
            else {
                let user = await db.user.findByPk(decode.id);
                
                if(user.type_user != 1) {

                }
                else {
                    req.UserId = decode.indexOf;
                    next();
                }
            }
        });
    }
};

module.exports = verifyToken;