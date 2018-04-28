const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

  // Todo.remove({}).then((result) => {
  //   console.log(result);
  // });

  // Todo.findOneAndRemove
  // Todo.findByIdandRemove

  // Todo.findOneAndRemove({_id: '5ae4b5bb5fe8406a6080d909'}).then((todo) => {
  //
  // });

  Todo.findByIdAndRemove('5ae4b5bb5fe8406a6080d909').then((todo) => {
    console.log(todo);
  });
