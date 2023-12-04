const db = require("../models");
const { Op } = require("sequelize");

const getCompatibleComponents = async (req, res) => {
    try {
        const excludedAttributes = ['deletedAt'];
        let query = req.query;
        let optionsSql = [];
        let filter = {
            attributes:{
                exclude:excludedAttributes
            }
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
                }
            };
        }

        const compatible_component = await db.compatible_component.findAll(filter);
         
        res.status(200).json({'error':false, data:compatible_component});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const createCompatibleComponent = async (req, res) => {
    try {
        let body = req.body;
        const compatible_component = await db.compatible_component.create(body);
        res.status(200).json({'error':false, data:compatible_component});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const updateCompatibleComponent = async (req, res) => {
    try {
        let id = req.params.id;
        await db.compatible_component.findAll({where:{id:id}}).then(async (result) => {
            if(result.lenght) {
                let body = req.body;
                await db.compatible_component.update(body, {where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`UPDATE compatible_components.id ${id}`});
            }
            else {
                res.status(200).json({'error':false, data:null, message:`DELETE compatible_components.id ${id}`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const deleteCompatibleComponent = async (req, res) => {
    try {
        let id = req.params.id;
        await db.compatible_component.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                await db.compatible_component.destroy({where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`DELETE compatible_components.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`compatible_components.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

module.exports = {getCompatibleComponents, createCompatibleComponent, updateCompatibleComponent, deleteCompatibleComponent};