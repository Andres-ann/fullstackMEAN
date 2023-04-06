import express from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/ProductController.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.put('/:id', updateProduct);
productRouter.post('/', createProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;