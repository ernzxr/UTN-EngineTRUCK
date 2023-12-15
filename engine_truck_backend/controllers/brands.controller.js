const db = require("../models");
const { Op } = require("sequelize");

const getBrands = async (req, res) => {
    try {
        const excludedAttributes = ['deletedAt'];
        const associations = ['engines'];
        let query = req.query;
        let optionsSql = [];
        let filter = {
            attributes:{
                exclude:excludedAttributes
            },
            include:associations
        };

        if(query.brand) {
            optionsSql.push({
                brand:{
                    [Op.like]:`%${query.brand}%`
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

        const brand = await db.brand.findAll(filter);
         
        res.status(200).json({'error':false, data:brand});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const createBrand = async (req, res) => {
    try {
        let body = req.body;
        const brand = await db.brand.create(body);
        res.status(200).json({'error':false, data:brand});
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const updateBrand = async (req, res) => {
    try {
        let id = req.params.id;
        await db.brand.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                let body = req.body;
                await db.brand.update(body, {where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`UPDATE brands.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`brands.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

const deleteBrand = async (req, res) => {
    try {
        let id = req.params.id;
        await db.brand.findAll({where:{id:id}}).then(async (result) => {
            if(result.length) {
                await db.brand.destroy({where:{id:id}});
                res.status(200).json({'error':false, data:null, message:`DELETE brands.id ${id}`});
            }
            else {
                res.status(404).json({'error':true, data:null, message:`brands.id ${id} not found`});
            }
        })
    }
    catch(e) {
        res.status(400).json({'error':true, message:e});
    }
};

module.exports = {getBrands, createBrand, updateBrand, deleteBrand};