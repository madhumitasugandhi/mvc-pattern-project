const Product =require('../models/ProductModel');

const getProducts = async(req , res)=>{
    try{

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}