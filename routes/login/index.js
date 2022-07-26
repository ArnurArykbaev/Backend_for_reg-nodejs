const express = require('express');
const router = express.Router();

const { login }  = require('../../controllers');

router.get('/', (request, response) => {
    response.render('register');
});

router.post('/', login.compare);

module.exports = router;
