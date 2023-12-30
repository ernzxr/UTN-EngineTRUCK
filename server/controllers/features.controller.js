const db = require("../models");
const { Op } = require("sequelize");

const getFeatures = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["features_details"];
    let query = req.query;
    let optionsSql = [];
    let filter = {
      attributes: {
        exclude: excludedAttributes,
      },
    };

    filter.include = associations.map((association) => ({
      model: db[association],
      as: association,
      attributes: {
        exclude: excludedAttributes,
      },
    }));

    if (query.feature_name) {
      optionsSql.push({
        feature_name: {
          [Op.like]: `%${query.feature_name}%`,
        },
      });
    }

    if (optionsSql.length > 0) {
      filter.where = {
        [Op.or]: optionsSql,
      };
    }

    const feature = await db.feature.findAll(filter);

    res.status(200).json({ error: false, data: feature });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const createFeature = async (req, res) => {
  try {
    let body = req.body;
    const feature = await db.feature.create(body);
    res.status(200).json({ error: false, data: feature });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const updateFeature = async (req, res) => {
  try {
    let id = req.params.id;
    await db.feature.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        let body = req.body;
        await db.feature.update(body, { where: { id: id } });
        res
          .status(200)
          .json({
            error: false,
            data: null,
            message: `UPDATE features.id ${id}`,
          });
      } else {
        res
          .status(404)
          .json({
            error: true,
            data: null,
            message: `features.id ${id} not found`,
          });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const deleteFeature = async (req, res) => {
  try {
    let id = req.params.id;
    await db.feature.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        await db.feature.destroy({ where: { id: id } });
        res
          .status(200)
          .json({
            error: false,
            data: null,
            message: `DELETE features.id ${id}`,
          });
      } else {
        res
          .status(404)
          .json({
            error: true,
            data: null,
            message: `features.id ${id} not found`,
          });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

module.exports = { getFeatures, createFeature, updateFeature, deleteFeature };
