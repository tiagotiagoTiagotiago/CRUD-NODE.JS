var express = require('express');
var router = express.Router();
const db = require("../db");
const { createUser } = require("./create");
const { deleteUser } = require("./delete");
const { authenticateUser } = require("./authenticate");
const { updatePassword } = require("./update");
const { revokeToken } = require("./revokeToken");

/* GET home page. */
router.get('/', async(req, res, next) => {
  const result = await db.find();
  res.render('index', { title: 'Express', result });
});

router.post("/save", async (req, res) => {
  const { username, password } = req.body;
  const result = await createUser(username, password);
  console.log(result);
  res.json(result);
});

router.post("/delete", async (req, res) => {
  const customerId = req.body.id;
  const result = await deleteUser(customerId);
  console.log(result);
  res.json(result);
});

router.get("/edit", async (req, res) => {
  const id = req.query.id;
  const user = await db.findOne(id);
  res.render("edit", { title: "Edit User", user });
});

router.post("/update", async (req, res) => {
  const customerId = req.body.id;
  const newPassword = req.body.password;
  const result = await updatePassword(customerId, newPassword);
  console.log(result);
  res.json(result);
});

router.post("/logout", async (req, res) => {
  const id = req.headers.id;
  const token = req.headers.token;
  const result = await revokeToken(id, token);
  console.log(result);
  res.json(result);
});

module.exports = router;
