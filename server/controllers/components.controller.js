const db = require("../models");
const { Op } = require("sequelize");

const getComponents = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["media"];
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

    filter.include.push({
      model: db.compatible_component,
      as: "compatibles_components",
      attributes: ["engine_id"],
      include: [
        {
          model: db.engine,
          as: "engine",
          attributes: ["id", "model", "hidden", "available"],
        },
      ],
    });

    if (query.model) {
      optionsSql.push({
        model: {
          [Op.like]: `%${query.model}%`,
        },
      });
    }

    if (optionsSql.length > 0) {
      filter.where = {
        [Op.or]: optionsSql,
      };
    }

    const component = await db.component.findAll(filter);

    const transformedComponents = component.map((component) => {
      const compatiblesEngines = component.compatibles_components.map(
        (compatiblesComponent) => ({
          id: compatiblesComponent.id,
          ...compatiblesComponent.engine.toJSON(),
        })
      );
      return {
        ...component.toJSON(),
        compatibles_engines: compatiblesEngines,
        compatibles_components: undefined,
      };
    });

    res.status(200).json({ error: false, data: transformedComponents });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const createComponent = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["media", "compatibles_components"];

    let filter = {
      attributes: {
        exclude: excludedAttributes,
      },
      include: associations,
    };

    let body = req.body;
    const component = await db.component.create(body);
    const createdComponent = await db.component.findOne({
      where: { id: component.id },
      ...filter,
    });

    res.status(200).json({ error: false, data: createdComponent });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const updateComponent = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["media", "compatibles_components"];

    let filter = {
      attributes: {
        exclude: excludedAttributes,
      },
      include: associations,
    };

    let id = req.params.id;
    await db.component.findByPk(id).then(async (component) => {
      if (component) {
        let body = req.body;
        await db.component.update(body, { where: { id: id } });
        const updatedComponent = await db.component.findOne({
          where: { id: id },
          ...filter,
        });
        res.status(200).json({
          error: false,
          data: updatedComponent,
          message: `UPDATE component.id ${id}`,
        });
      } else {
        res.status(404).json({
          error: true,
          data: null,
          message: `component.id ${id} not found`,
        });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const deleteComponent = async (req, res) => {
  try {
    let id = req.params.id;
    await db.component.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        await db.component.destroy({ where: { id: id } });
        res.status(200).json({
          error: false,
          data: null,
          message: `DELETE components.id ${id}`,
        });
      } else {
        res.status(404).json({
          error: true,
          data: null,
          message: `components.id ${id} not found`,
        });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

module.exports = {
  getComponents,
  createComponent,
  updateComponent,
  deleteComponent,
};
