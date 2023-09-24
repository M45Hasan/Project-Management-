const express = require("express");
const _ = express.Router();
const apiRoute = require("./api");
const api = process.env.BASE_URL;

_.use(api, apiRoute);

_.use(api, (req, res) => {
  const method = req.method;
  const endpoint = req.originalUrl;

  res.send(
    `API not found.
    Method: ${method}, 
    Host: ${process.env.SERVER_URL}, 
    Base: ${process.env.BASE_URL}, 
    Endpoint: /${endpoint.split("/")[endpoint.split("/").length-1]},
   `
  );
});

module.exports = _;
