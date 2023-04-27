const express = require("express");
const router = express.Router();

const controller = require("./user.controller");

router.get("/", controller.allUsers);
router.get("/:id", controller.userById);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
