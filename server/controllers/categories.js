'use strict';

var Category = require('../models/category');

exports.create = function(req, res){
  Category.create(req.user._id, req.body, function(){
    res.status(200).end();
  });
};
