'use strict';

function Category(userId, category){
  this.userId = userId;
  this.name = category.name;
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.create = function(id, o, cb){
  var c = new Category(id, o);
  Category.collection.save(c, cb);
};

module.exports = Category;
