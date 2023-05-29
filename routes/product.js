const express = require('express');
const productController = require('../controller/product');
// server.CRUD is in top level which is not preferable so we have to create router use it and router.CRUD
const router = express.Router();

router
    .post('/', productController.createProduct)
    .get('/' , productController.getAllProducts)
    .get('/:id' , productController.getProductById)
    .put('/:id' , productController.replaceProduct)
    .patch('/:id' , productController.updateProduct )
    .delete('/:id' , productController.deleteProduct)

exports.routes = router;