const getUsers = (req, res) => {
    res.json({message:'users GET'});
};

const createUser = (req, res) => {
    console.log(req.body)
    res.json({message:'user CREATE'});
};

const updateUser = (req, res) => {
    res.json({message:'user UPDATE'});
};

const deleteUser = (req, res) => {
    res.json({message:'user DELETE'});
};

/*
    ENVIAR PARAMETROS
    DYNAMIC ROUTER req.params
    QUERY PARAMS req.query
    BODY PARAMS req.body
    PARAM HEADER req.headers
*/

const filterUser = (req, res) => {
    console.log(req.params);
    res.json({message:"Dynamic Router"});
};

module.exports = {getUsers, createUser, updateUser, deleteUser, filterUser};

/* REDUX */