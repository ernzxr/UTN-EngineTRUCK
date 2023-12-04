const db = require("../models");
const { Op } = require("sequelize");

const getMedia = async (req, res) => {
    try {
        const excludedAttributes = ['deletedAt'];
        let query = req.query;
        let optionsSql = [];
        let filter = {
            attributes:{
                exclude:excludedAttributes
            }
        };

        if(query.engine_id) {
            optionsSql.push({
                engine_id:{
                    [Op.like]:`%${query.engine_id}%`
                }
            });
        }

        if(query.component_id) {
            optionsSql.push({
                component_id:{
                    [Op.like]:`%${query.component_id}%`
                }
            });
        }

        if(query.type) {
            optionsSql.push({
                type:{
                    [Op.like]:`%${query.type}%`
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

        const media = await db.media.findAll(filter);
         
        res.status(200).json({'error':false, data:media});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const createMedia = async (req, res) => {
    try {
        let body = req.body;
        const media = await db.media.create(body);
        res.status(200).json({'error':false, data:media});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const updateMedia = async (req, res) => {
    try {
        let id = req.params.id;
        await db.media.findAll({where:{id:id}}).then(async (result) => {
            if(result.lenght) {
                let body = req.body;
                await db.media.update(body, {where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`UPDATE media.id ${id}`});
            }
            else {
                res.status(200).json({'error':false, data:null, message:`DELETE media.id ${id}`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const deleteMedia = async (req, res) => {
    try {
        let id = req.params.id;
        await db.media.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                await db.media.destroy({where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`DELETE media.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`media.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

module.exports = {getMedia, createMedia, updateMedia, deleteMedia};