var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({message: "the source of this project ishttp:// scotch.io/@devGson/api-authentication-with-json-web-tokensjwt-and-passport"});
});