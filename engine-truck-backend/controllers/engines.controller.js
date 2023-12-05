const db = require("../models");
const { Op } = require("sequelize");

const getEngines = async (req, res) => {
    try {
        const excludedAttributes = ['deletedAt'];
        const associations = [
            'features_details',
            'compatibles_components',
            'media',
            'manufacturer',
            'brand'
            ];
        let query = req.query;
        let optionsSql = [];
        let filter = {
            attributes:{
                exclude:excludedAttributes
            },
            include:associations
        };

        if(query.model) {
            optionsSql.push({
                model:{
                    [Op.like]:`%${query.model}%`
                }
            });
        }

        if(optionsSql.length>0) {
            filter = {
                where:{
                    [Op.or]: optionsSql
                },
                attributes:{
                    exclude:excludedAttributes
                },
                include:associations
            };
        }

        const engine = await db.engine.findAll(filter);
         
        res.status(200).json({'error':false, data:engine});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const createEngine = async (req, res) => {
    try {
        let body = req.body;
        const engine = await db.engine.create(body);
        res.status(200).json({'error':false, data:engine});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const updateEngine = async (req, res) => {
    try {
        let id = req.params.id;
        await db.engine.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                let body = req.body;
                await db.engine.update(body, {where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`UPDATE engines.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`engines.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const deleteEngine = async (req, res) => {
    try {
        let id = req.params.id;
        await db.engine.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                await db.engine.destroy({where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`DELETE engines.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`engines.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

module.exports = {getEngines, createEngine, updateEngine, deleteEngine};