import { ProductModel } from "../models/ProductModel.js";

//metodos para el CRUD

//Mostrar todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Mostrar un producto por id
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await ProductModel.findById(id)
        if (!product) {
            return res.status(404).json(`Product with ID: ${id} not found`)
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Crear un producto
export const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ message: 'An error has ocurred.' })
    }
};

//Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await ProductModel.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        )
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await ProductModel.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json(`Product with ID: ${id} not found`)
        }
        res.status(200).json("Product successfully deleted")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};