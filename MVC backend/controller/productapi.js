const Product = require ("../model/product")

//api to add
const createProduct =async (req,res)=> {
    try{
        await Product(req.body).save()
        res.send({message:"data added"})
       
    }catch (error){
        console.log(error);

    }


}
const ViewProduct =async (req,res)=> {
    try{
       const product = await Product.find()
        res.send({product})
    }catch (error){
        console.log(error);

    }


}
const deleteproduct =async (req,res)=> {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
       
    }catch (error){
        console.log(error);

    }


}
const updateproduct =async (req,res)=> {
    try{
        await Product.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"data updated"})
       
    }catch (error){
        console.log(error);

    }


}


module.exports={createProduct,ViewProduct,deleteproduct,updateproduct}