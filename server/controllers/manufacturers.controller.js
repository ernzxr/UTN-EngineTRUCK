const db = require("../models");
const { Op } = require("sequelize");

const getManufacturers = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["engines"];
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

    if (query.manufacturer) {
      optionsSql.push({
        manufacturer: {
          [Op.like]: `%${query.manufacturer}%`,
        },
      });
    }

    if (optionsSql.length > 0) {
      filter.where = {
        [Op.or]: optionsSql,
      };
    }

    const manufacturer = await db.manufacturer.findAll(filter);

    res.status(200).json({ error: false, data: manufacturer });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const createManufacturer = async (req, res) => {
  try {
    let body = req.body;
    const manufacturer = await db.manufacturer.create(body);
    res.status(200).json({ error: false, data: manufacturer });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const updateManufacturer = async (req, res) => {
  try {
    let id = req.params.id;
    await db.manufacturer
      .findAll({ where: { id: id } })
      .then(async (result) => {
        if (result.length) {
          let body = req.body;
          await db.manufacturer.update(body, { where: { id: id } });
          res
            .status(200)
            .json({
              error: false,
              data: null,
              message: `UPDATE manufacturers.id ${id}`,
            });
        } else {
          res
            .status(404)
            .json({
              error: true,
              data: null,
              message: `manufacturers.id ${id} not found`,
            });
        }
      });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const deleteManufacturer = async (req, res) => {
  try {
    let id = req.params.id;
    await db.manufacturer
      .findAll({ where: { id: id } })
      .then(async (result) => {
        if (result.length) {
          await db.manufacturer.destroy({ where: { id: id } });
          res
            .status(200)
            .json({
              error: false,
              data: null,
              message: `DELETE manufacturers.id ${id}`,
            });
        } else {
          res
            .status(404)
            .json({
              error: true,
              data: null,
              message: `manufacturers.id ${id} not found`,
            });
        }
      });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

module.exports = {
  getManufacturers,
  createManufacturer,
  updateManufacturer,
  deleteManufacturer,
};
