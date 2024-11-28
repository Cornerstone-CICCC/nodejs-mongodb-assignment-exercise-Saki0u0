"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product.model");
// //Get all students
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.find();
        res.status(200).json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to get all products' });
    }
});
// Get student by id
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to get student by id' });
    }
});
//Add new student
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, productPrice } = req.body;
        const newProduct = yield product_model_1.Product.create(req.body);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to add student' });
    }
});
// Update student by id
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true // returns the updated data
        });
        if (!product) {
            res.status(404).json({ error: 'Student does not exist' });
            return;
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to update student' });
    }
});
// Delete student by id
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findByIdAndDelete(req.params.id);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to delete student' });
    }
});
exports.default = {
    getAllProduct,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById
};
