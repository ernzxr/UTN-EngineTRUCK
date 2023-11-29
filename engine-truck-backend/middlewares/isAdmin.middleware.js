const isAdmin = (req, res, next) => {
    if(req.headers.isadmin == '1'){
        next();
    }
    else{
        res.status(401).send('Error, acceso denegado.');
    }
};

module.exports = isAdmin;