const express = require('express');
const router = require('express-promise-router')();
//const passport = require('passport');
//const passportConf = require('../passport');

const {validateBody, activitySchema} = require('../helpers/routeHelpers');
const activityController = require('../controllers/activities')

 router.route('/activities')
   .get(validateBody(activitySchema.authSchema),activityController.activities);

  module.exports = router;
