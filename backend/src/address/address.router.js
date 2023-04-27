const express = require("express");
const router = express.Router();
const controller = require("./address.controller");

router.get("/", controller.allAddress);
router.get("/:id", controller.addressId);
router.post("/", controller.createAddress);
router.put("/:id", controller.updateAddress);
router.delete("/:id", controller.deleteAddress);

module.exports = router;