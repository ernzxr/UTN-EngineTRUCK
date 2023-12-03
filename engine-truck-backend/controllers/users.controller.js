const db = require("../models");

/*
    ENVIAR PARAMETROS
    DYNAMIC ROUTER req.params
    QUERY PARAMS req.query
    BODY PARAMS req.body
    PARAM HEADER req.headers
*/

const getUsers = async (req, res) => {
    try {
        const user = await db.user.findAll();
        res.status(200).json({'error':false, data:user});
    }
    catch(e) {
        console.log(e);
        res.status(400).json({'error':true, message:e});
    }
};

const createUser = async (req, res) => {
    try {
        const user = await db.user.create(req.body);
        res.status(200).json({'error':false, data:user});
    }
    catch(e) {
        console.log(e);
        res.status(400).json({'error':true, message:e});
    }
};

const updateUser = (req, res) => {
    res.json({message:'user UPDATE'});
};

const deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        await db.user.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                await db.user.destroy({where:{id:id}});
                res.status(200).json({'error':false, data:null, message:"DELETE users.id "+id});
            }
            else {
                res.status(404).json({'error':true, data:null, message:'users.id '+id+' not found'});
            }
        })
    }
    catch(e) {
        console.log(e);
        res.status(400).json({'error':true, message:e});
    }
};

const filterUser = (req, res) => {
    console.log(req.params);
    res.json({message:"Dynamic Router"});
};

module.exports = {getUsers, createUser, updateUser, deleteUser, filterUser};

/* REDUX */