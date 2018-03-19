var express = require('express');
var app = express();

app.use(express.static('public'));

app.post('/user', function(req, res){
  res.send('POST (Create)');
});

app.use(function (req, res, next){
  console.log('Time:', Date.now());
  next();
});

app.get('/user/search', function (req, res){

  console.log('데이터 확인', req.query.name);

  var users = [{
    userId: 13579,
    name: 'Dongmin',
    email: 'gookldm@gmail.com',
    school: 'Gachon'
  }];

  res.send({result: users});
});

app.put('/user/:userId', function(req, res){

  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({extend: false}));

  app.post('/user', function(req, res){

    console.log('데이터 확인', req.body);

    res.send({state: 'OK', data: req.body});

  });

  res.send('PUT (Update)');
});

app.delete('/user/:userId', function(req, res){
  res.send('DELETE (Delete)');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
});
