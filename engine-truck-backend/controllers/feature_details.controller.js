const db = require("../models");
const { Op } = require("sequelize");

const getFeatureDetails = async (req, res) => {
    try {
        const excludedAttributes = ['deletedAt'];
        const associations = ['engine','feature']
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

        const feature_detail = await db.feature_detail.findAll(filter);
         
        res.status(200).json({'error':false, data:feature_detail});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const createFeatureDetail = async (req, res) => {
    try {
        let body = req.body;
        const feature_detail = await db.feature_detail.create(body);
        res.status(200).json({'error':false, data:feature_detail});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const updateFeatureDetail = async (req, res) => {
    try {
        let id = req.params.id;
        await db.feature_detail.findAll({where:{id:id}}).then(async (result) => {
            if(result.lenght) {
                let body = req.body;
                await db.feature_detail.update(body, {where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`UPDATE feature_details.id ${id}`});
            }
            else {
                res.status(200).json({'error':false, data:null, message:`DELETE feature_details.id ${id}`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const deleteFeatureDetail = async (req, res) => {
    try {
        let id = req.params.id;
        await db.feature_detail.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                await db.feature_detail.destroy({where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`DELETE feature_details.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`feature_details.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

module.exports = {getFeatureDetails, createFeatureDetail, updateFeatureDetail, deleteFeatureDetail};