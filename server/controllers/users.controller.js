const db = require("../models");
const Bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const getUsers = async (req, res) => {
  try {
    const excludedAttributes = [
      "deletedAt",
      "createdAt",
      "updatedAt",
      "password",
    ];
    let query = req.query;
    let optionsSql = [];
    let filter = {
      attributes: {
        exclude: excludedAttributes,
      },
    };

    if (query.email) {
      optionsSql.push({
        email: {
          [Op.like]: `%${query.email}%`,
        },
      });
    }

    if (optionsSql.length > 0) {
      filter.where = {
        [Op.or]: optionsSql,
      };
    }

    const user = await db.user.findAll(filter);

    res.status(200).json({ error: false, data: user });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const createUser = async (req, res) => {
  try {
    let body = req.body;
    body.password = Bcrypt.hashSync(body.password, 10);
    const user = await db.user.create(body);
    res.status(200).json({ error: false, data: user });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    await db.user.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        let body = req.body;
        if (body.password) {
          body.password = Bcrypt.hashSync(body.password, 10);
        }
        await db.user.update(body, { where: { id: id } });
        res
          .status(200)
          .json({ error: false, data: null, message: `UPDATE users.id ${id}` });
      } else {
        res
          .status(404)
          .json({
            error: true,
            data: null,
            message: `users.id ${id} not found`,
          });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    await db.user.findAll({ where: { id: id } }).then(async (result) => {
      if (result.length) {
        await db.user.destroy({ where: { id: id } });
        res
          .status(200)
          .json({ error: false, data: null, message: `DELETE users.id ${id}` });
      } else {
        res
          .status(404)
          .json({
            error: true,
            data: null,
            message: `users.id ${id} not found`,
          });
      }
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
