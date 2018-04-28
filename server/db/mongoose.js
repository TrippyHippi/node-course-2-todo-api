var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://<cody>:<bhbf2423>@ds123556.mlab.com:23556/todoapp102'
};
mongoose.connect(db.mlab || db.localhost);

module.exports = {mongoose};
