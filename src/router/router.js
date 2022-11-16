const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/crud-page", services.crudPages);

/**
 *  @description for update user
 *  @method GET /update-user
 */

// API
route.post("/api/items", controller.create);
route.get("/api/items", controller.find);
// url parameter in express
route.delete("/api/items/:id", controller.delete);

module.exports = route;
