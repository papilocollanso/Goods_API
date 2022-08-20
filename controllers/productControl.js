const db = require('../models');

//create main Model

const Product = db.products
const Review = db.reviews 

// main work

//1 create product

const addProduct = async (req, res) =>{

   console.log(req.body.title);
   let  info = { 
    
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published
   }
 
   const product = await Product.create(info);
   res.status(200).send(product);


}
 
//2 get all products
 
const getAllProdcts = async (req,res) =>{

     let products = await Product.findAll({});


    res.status(200).send(products);
}



//3 get Single products

const getOneProdct = async (req,res) =>{


    let id = req.params.id

     let product = await Product.findOne({where:{id:id}});


    res.status(200).send(product);
}



//4    update Product

const updateProdct = async (req,res) =>{

    let id = req.params.id;

    const product = await Product.update(req.body,{where:{id:id}});

    res.status(200).send(product);
}


// 5 delete product
   const deleteProduct = async (req,res) => {
     let id = req.params.id;

     const product = await Product.destroy( { where: { id:id } });

     res.status(200).send('product is deleted');
   }; 


   
// 6 get published product

   const getPublishedProduct = async (req, res) => {
   
     const products = await Product.findAll({ where: { published:true } });

     res.status(200).send(products);
   }; 



   module.exports = {
     addProduct,
     getAllProdcts,
     getOneProdct,
     updateProdct,
     deleteProduct,
     getPublishedProduct,
   };