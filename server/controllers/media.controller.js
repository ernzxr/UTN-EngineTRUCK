const db = require("../models");
const fs = require("fs");
const { Op } = require("sequelize");
const filesRoot = "uploads/";

const getMedia = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["engine", "component"];
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

    if (query.engine_id) {
      optionsSql.push({
        engine_id: {
          [Op.like]: `%${query.engine_id}%`,
        },
      });
    }

    if (query.component_id) {
      optionsSql.push({
        component_id: {
          [Op.like]: `%${query.component_id}%`,
        },
      });
    }

    if (query.type) {
      optionsSql.push({
        type: {
          [Op.like]: `%${query.type}%`,
        },
      });
    }

    if (optionsSql.length > 0) {
      filter.where = {
        [Op.or]: optionsSql,
      };
    }

    const media = await db.media.findAll(filter);

    res.status(200).json({ error: false, data: media });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const createMedia = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    const associations = ["engine", "component"];

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

    let body = req.body;
    if (req.uploadError) {
      return res.status(400).json({ error: true, message: req.uploadError });
    } else if (req.file) {
      const fileExtension = req.file.originalname
        .split(".")
        .pop()
        .toLowerCase();

      if (["png", "jpg", "jpeg", "webp"].includes(fileExtension)) {
        body.file = `images/${req.file.filename}`;
      } else if (["mp4", "avi", "mkv"].includes(fileExtension)) {
        body.file = `videos/${req.file.filename}`;
      } else {
        return res
          .status(400)
          .json({ error: true, message: "Invalid file extension" });
      }
    }
    const media = await db.media.create(body);
    const createdMedia = await db.media.findOne({
      where: { id: media.id },
      ...filter,
    });

    res.status(200).json({ error: false, data: createdMedia });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const updateMedia = async (req, res) => {
  try {
    let id = req.params.id;
    let media = await db.media.findByPk(id);
    if (media) {
      let body = req.body;
      if (req.file) {
        const fileExtension = req.file.originalname
          .split(".")
          .pop()
          .toLowerCase();

        if (["png", "jpg", "jpeg", "webp"].includes(fileExtension)) {
          body.file = `images/${req.file.filename}`;
        } else if (["mp4", "avi", "mkv"].includes(fileExtension)) {
          body.file = `videos/${req.file.filename}`;
        } else {
          return res
            .status(400)
            .json({ error: true, message: "Invalid file extension" });
        }

        if (media.file != null) {
          if (media.media_type == 1) {
            fs.unlinkSync(`${filesRoot}${media.file}`);
          } else {
            fs.unlinkSync(`${filesRoot}${media.file}`);
          }
        }
      }
      await db.media.update(body, { where: { id: id } });
      res
        .status(200)
        .json({ error: false, data: null, message: `UPDATE media.id ${id}` });
    } else {
      res
        .status(404)
        .json({ error: true, data: null, message: `media.id ${id} not found` });
    }
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const deleteMedia = async (req, res) => {
  try {
    let id = req.params.id;
    await db.media.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        let media = result[0];
        if (media["file"] != null) {
          if (media["media_type"] == 1) {
            fs.unlinkSync(`${filesRoot}${media["file"]}`);
          } else {
            fs.unlinkSync(`${filesRoot}${media["file"]}`);
          }
        }
        await db.media.destroy({ where: { id: id } });
        res
          .status(200)
          .json({ error: false, data: null, message: `DELETE media.id ${id}` });
      } else {
        res.status(404).json({
          error: true,
          data: null,
          message: `media.id ${id} not found`,
        });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

module.exports = { getMedia, createMedia, updateMedia, deleteMedia };
