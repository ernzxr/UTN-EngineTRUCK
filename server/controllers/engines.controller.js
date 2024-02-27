const db = require("../models");
const { Op } = require("sequelize");

const getEngines = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["media", "manufacturer", "brand"];
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

    filter.include.push(
      {
        model: db.compatible_component,
        as: "compatibles_components",
        attributes: ["id"],
        include: [
          {
            model: db.component,
            as: "component",
            attributes: ["component", "description", "hidden", "available"],
          },
        ],
      },
      {
        model: db.feature_detail,
        as: "features_details",
        attributes: ["id", "feature_value", "feature_id"],
        include: [
          {
            model: db.feature,
            as: "feature",
            attributes: ["feature_name"],
          },
        ],
      }
    );

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

    const engine = await db.engine.findAll(filter);

    const transformedEnginesFormat = engine.map((engine) => {
      const compatiblesComponents = engine.compatibles_components.map(
        (compatiblesComponent) => ({
          id: compatiblesComponent.id,
          ...compatiblesComponent.component.toJSON(),
        })
      );
      const featuresDetails = engine.features_details.map((featureDetail) => ({
        id: featureDetail.id,
        value: featureDetail.feature_value,
        feature: featureDetail.feature.feature_name,
        feature_id: featureDetail.feature_id
      }));
      const manufacturer = {
        name: engine.manufacturer.manufacturer,
        id: engine.manufacturer.id,
      };
      const brand = { name: engine.brand.brand, id: engine.brand.id };
      return {
        ...engine.toJSON(),
        compatibles_components: compatiblesComponents,
        features_details: featuresDetails,
        manufacturer: manufacturer,
        brand: brand,
        manufacturer_id: undefined,
        brand_id: undefined,
      };
    });

    res.status(200).json({ error: false, data: transformedEnginesFormat });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const createEngine = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
        const associations = ["media", "manufacturer", "brand"];

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

        filter.include.push(
          {
            model: db.compatible_component,
            as: "compatibles_components",
            attributes: ["id"],
            include: [
              {
                model: db.component,
                as: "component",
                attributes: ["component", "description", "hidden", "available"],
              },
            ],
          },
          {
            model: db.feature_detail,
            as: "features_details",
            attributes: ["id", "feature_value"],
            include: [
              {
                model: db.feature,
                as: "feature",
                attributes: ["feature_name"],
              },
            ],
          }
        );

    let body = req.body;

    const engine = await db.engine.create(body);

    const createdEngine = await db.engine.findOne({
      where: { id: engine.id },
      ...filter,
    });

    const compatiblesComponents = createdEngine.compatibles_components.map(
      (compatiblesComponent) => ({
        id: compatiblesComponent.id,
        ...compatiblesComponent.component.toJSON(),
      })
    );

    const featuresDetails = createdEngine.features_details.map(
      (featureDetail) => ({
        id: featureDetail.id,
        value: featureDetail.feature_value,
        feature: featureDetail.feature.feature_name,
      })
    );

    const manufacturer = {
      name: createdEngine.manufacturer.manufacturer,
      id: createdEngine.manufacturer.id,
    };

    const brand = {
      name: createdEngine.brand.brand,
      id: createdEngine.brand.id,
    };

    transformedEngineFormat = {
      ...createdEngine.toJSON(),
      compatibles_components: compatiblesComponents,
      features_details: featuresDetails,
      manufacturer: manufacturer,
      brand: brand,
      manufacturer_id: undefined,
      brand_id: undefined,
    };
    
    res.status(200).json({ error: false, data: transformedEngineFormat });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const updateEngine = async (req, res) => {
  try {
    let id = req.params.id;
    await db.engine.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
        const associations = ["media", "manufacturer", "brand"];

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

        filter.include.push(
          {
            model: db.compatible_component,
            as: "compatibles_components",
            attributes: ["id"],
            include: [
              {
                model: db.component,
                as: "component",
                attributes: ["component", "description", "hidden", "available"],
              },
            ],
          },
          {
            model: db.feature_detail,
            as: "features_details",
            attributes: ["id", "feature_value"],
            include: [
              {
                model: db.feature,
                as: "feature",
                attributes: ["feature_name"],
              },
            ],
          }
        );

        let body = req.body;
        await db.engine.update(body, { where: { id: id } });

        const updatedEngine = await db.engine.findOne({
          where: { id: id },
          ...filter,
        });

        const compatiblesComponents = updatedEngine.compatibles_components.map(
          (compatiblesComponent) => ({
            id: compatiblesComponent.id,
            ...compatiblesComponent.component.toJSON(),
          })
        );

        const featuresDetails = updatedEngine.features_details.map(
          (featureDetail) => ({
            id: featureDetail.id,
            value: featureDetail.feature_value,
            feature: featureDetail.feature.feature_name,
          })
        );

        const manufacturer = {
          name: updatedEngine.manufacturer.manufacturer,
          id: updatedEngine.manufacturer.id,
        };

        const brand = {
          name: updatedEngine.brand.brand,
          id: updatedEngine.brand.id,
        };

        transformedEngineFormat = {
          ...updatedEngine.toJSON(),
          compatibles_components: compatiblesComponents,
          features_details: featuresDetails,
          manufacturer: manufacturer,
          brand: brand,
          manufacturer_id: undefined,
          brand_id: undefined,
        };

        res.status(200).json({
          error: false,
          data: transformedEngineFormat,
          message: `UPDATE engines.id ${id}`,
        });
      } else {
        res.status(404).json({
          error: true,
          data: null,
          message: `engines.id ${id} not found`,
        });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const deleteEngine = async (req, res) => {
  try {
    let id = req.params.id;
    await db.engine.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        await db.engine.destroy({ where: { id: id } });
        res.status(200).json({
          error: false,
          data: null,
          message: `DELETE engines.id ${id}`,
        });
      } else {
        res.status(404).json({
          error: true,
          data: null,
          message: `engines.id ${id} not found`,
        });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

module.exports = { getEngines, createEngine, updateEngine, deleteEngine };
