var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = [{
    'name':'tabshir',
    'email':'abc@gmail.com'
  },{
    'name':'Ram',
    'email':'ram@gmail.com'
  },{
    'name':'Shyam',
    'email':'shyam@gmail.com'
  }];
  res.send(users);
});

module.exports = router;
