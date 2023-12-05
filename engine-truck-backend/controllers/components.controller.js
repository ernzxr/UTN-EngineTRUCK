const db = require("../models");
const { Op } = require("sequelize");

const getComponents = async (req, res) => {
    try {
        const excludedAttributes = ['deletedAt'];
        const associations = ['media','compatibles_components']
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
                }
            };
        }

        const component = await db.component.findAll(filter);
         
        res.status(200).json({'error':false, data:component});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const createComponent = async (req, res) => {
    try {
        let body = req.body;
        const component = await db.component.create(body);
        res.status(200).json({'error':false, data:component});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const updateComponent = async (req, res) => {
    try {
        let id = req.params.id;
        await db.component.findAll({where:{id:id}}).then(async (result) => {
            if(result.lenght) {
                let body = req.body;
                await db.component.update(body, {where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`UPDATE components.id ${id}`});
            }
            else {
                res.status(200).json({'error':false, data:null, message:`DELETE components.id ${id}`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const deleteComponent = async (req, res) => {
    try {
        let id = req.params.id;
        await db.component.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                await db.component.destroy({where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`DELETE components.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`components.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

module.exports = {getComponents, createComponent, updateComponent, deleteComponent};