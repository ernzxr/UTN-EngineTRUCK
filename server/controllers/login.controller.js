const db = require("../models");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const key = process.env.KEY || "ABCD";

const login = async (req, res) => {
  try {
    const excludedAttributes = ["deletedAt", "createdAt", "updatedAt"];
    let body = req.body;
    let optionsSql = [];

    if (body.user) {
      optionsSql.push({
        user: {
          [Op.eq]: `${body.user}`,
        },
      });
    }

    if (optionsSql.length > 0) {
      let filter = {
        where: {
          [Op.or]: optionsSql,
        },
        attributes: {
          exclude: excludedAttributes,
        },
      };
    }

    const user = await db.user.findOne(filter);

    if (!user) {
      return res
        .status(401)
        .json({ error: true, message: "Los datos ingresados no son validos" });
    } else {
      let verifyPassword = Bcrypt.compareSync(req.body.password, user.password);

      if (!verifyPassword) {
        return res
          .status(401)
          .json({
            error: true,
            message: "Los datos ingresados no son validos",
          });
      } else {
        let token = jwt.sign({ id: user.id }, key, { expiresIn: "1h" });
        let data = { token, user };

        res.status(200).json({ error: false, data: data });
      }
    }
  } catch (e) {
    res.status(400).json({ error: true, message: e });
  }
};

module.exports = login;
