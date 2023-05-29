const fs = require('fs');
const model = require('../model/product');
const { default: mongoose } = require('mongoose');
const Product = model.Product;

exports.createProduct = async (req,res) => {
    try{
        const product = new Product(req.body);
        const doc = await product.save();
        res.status(201).json(doc)

    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Internal server error', error });
    }
}

exports.getAllProducts = async (req,res)=> {
    console.log(req.body)
    try{
        if(req.body.discountPercentage){
            const products = await Product.find({discountPercentage: req.body.discountPercentage});
            res.json(products)
        }else{
            const products = await Product.find();
            res.json(products)
        }

    }catch(err){
        res.json(err)
    }
}

exports.getProductById = async (req,res)=> {
    const id = req.params.id;
    try{
        const product = await Product.findById(id);
        res.json(product)
    }catch(err){
        res.json(err)
    }
}


exports.replaceProduct = async (req,res)=> {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true}); 
        res.status(201).json(doc)
    }catch(err){
        res.status(400).json(err)
    }
}

exports.updateProduct = async (req,res)=> {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true}); 
        res.status(201).json(doc)
    }catch(err){
        res.status(400).json(err)
    }
}

exports.deleteProduct = async (req,res)=> {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id}); 
        res.status(201).json(doc)
    }catch(err){
        res.status(400).json(err)
    }
}
