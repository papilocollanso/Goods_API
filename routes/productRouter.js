const productController = require('../controllers/productControl.js');

const router = require('express').Router();

router.post('/addProduct', productController.addProduct);
router.get("/allProducts", productController.getAllProdcts);
router.get("/published", productController.getPublishedProduct);



router.get("/:id", productController.getOneProdct);

router.put("/:id", productController.updateProdct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;

