const express = require('express');
const router = express.Router();

const { user }  = require('../../controllers');

router.get('/', (request, response) => {
    response.render('login');
});

router.post('/', user.create);

module.exports = router;
