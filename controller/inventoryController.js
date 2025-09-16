import { statusCodes } from "../helpers/userHelper.js";
import { Item } from "../models/item.js";





export const inventoryStatus= (req,res)=>{
     res.json({ message: "Inventory API is Running" });

    
}

export const serverStatus=(req,res)=>{
      res.json({ status: "Server is healthy"});
}

export const addNewItem=async(req,res)=>{

      try {
      const { name,quantity,price}=req.body;
      if(!name||quantity==null|| price==null){
            const status=statusCodes.find((item)=>item.code===400)
            return res.status(status.code).json({success:false,message:"Name,quantity and price are required"})


      }
       const newItem = new Item({ name, quantity, price });
       await newItem.save();

       const status=statusCodes.find((item)=>item.code===201)
       res.status(status.code).json({success:true,message:"item added successfully",data:newItem})

      


            
      } catch (error) {
           const status=statusCodes.find((item)=>item.code===500)
       res.status(status.code).json({success:false,message:status.message})
       console.log(error);

      }

}

export const listAllItems=async (req,res)=>{
      try {   
             const items= await Item.find();

       if(!items|| items.length===0){
        {
       const status=statusCodes.find((item)=>item.code===404);
       return  res.status(status.code).json({success:false,message:`No item found:${status.message}`})
        }
    }
    const status=statusCodes.find((item)=>item.code===200);
    res.status(status.code).json({success:true,message:"Product fetched successfully:",data:items})


}

    catch(error)
    {

        console.log(error);
        const status= statusCodes.find((item)=>item.code===500);
        res.status(status.code).json({success:false,message:`listAllItems:${status.message}`})
    }
    
}