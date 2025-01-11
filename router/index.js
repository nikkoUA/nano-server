const express = require('express');

exports.createRouter = function () {
  const router = express.Router({
    mergeParams: true
  });

  // TODO: add routes from config

  return router;
};
