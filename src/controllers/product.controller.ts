import { Request, Response } from 'express'
import { Product } from '../models/product.model'

// //Get all students
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to get all products' })
  }
}

// Get student by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to get student by id' })
  }
}

//Add new student
const addProduct = async (req:Request,res:Response) => {
  try{
    const { productName, productPrice } = req.body
    const newProduct = await Product.create(req.body)
  }catch(err){
    console.error(err)
    res.status(500).json({ error:'Unable to add student'})
  }
}

// Update student by id
const updateProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true // returns the updated data
    })
    if (!product) {
      res.status(404).json({ error: 'Student does not exist' })
      return
    }
    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to update student' })
  }
}

// Delete student by id
const deleteProductById = async (req: Request<{ id: string}>, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Unable to delete student' })
  }
}

export default{
  getAllProduct,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById
}