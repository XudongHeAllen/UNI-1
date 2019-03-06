const express = require('express');
const router = require('express-promise-router')();

const {validateBody, schemas} = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users')


router.route('/signup')
//validate makes sure the data is valid 
//if not it sends a response without calling the usersController
  .post(validateBody(schemas.authSchema),UsersController.signUp);

router.route('/signin')
  .post(UsersController.signIn);

router.route('/secret')
  .get(UsersController.secret);


  module.exports = router;
