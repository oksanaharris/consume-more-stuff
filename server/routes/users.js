const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;



route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated:',(value ? 'Yes Baseem' : 'No Baseem'),'the current REQ.USER:',req.user);
  console.log('users route has been requested: GET ');
  user.findAll({raw:true})
  .then((DataCollection) => {
    //console.log('users route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

//LOGIN ROUTE
route.get('/login',(req,res)=>{
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  console.log("REQ.USER***********************",req.user);
  res.json("Welcome to the LOGIN PAGE!");
});

route.post('/login', passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/'
  }));

route.get('/logout', (req,res) =>{
  req.logout();
  res.sendStatus(200);
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  console.log('users ID route has been requested: GET ');
  let id = req.params.id;
  console.log('users.get/:id :', id);
  user.findById(id)
  .then((data) => {
    // console.log('users ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/new', ( req, res ) => {
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  console.log('users route has been requested: POST ');
  user.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    // console.log('users route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  console.log('users ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('users.put/:id :', id);
  let data = req.body;
  return user.update({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    userstatus: req.body.userstatus
  }, {where: {id:id}
  }).then((user) => {
    res.json('User updated');
  });
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  console.log('users ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('users.delete/:id :', id);
  let data = req.body;
  console.log('users.delete/:id data :', data);
  user.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('users ID route has been updated:, result: ', data);
      return res.json({id:id});
  })
});


function isAuthenticated(req, res, next){
  console.log("REQ.USER.ID***********************",req.user.id,"***********************");
  let id = parseInt(req.params.id);
  let userId = parseInt(req.user.id);
  //console.log(id === userId);
  if(id === req.user.id){
    console.log("They Match - TRUE access GRANTED******************")
    req.isAuthenticated();
    next();
  }
  else{
    res.redirect('/');
    console.log('denied');}
}


module.exports = route;