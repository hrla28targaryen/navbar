const router = require('express').Router();
const controller = require('./controller');

router
    .route('/:productId')
    .get(controller.get)

router
    .route('/:productName')
    .get(controller.get)