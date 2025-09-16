import { statusCodes } from "../helpers/userHelper.js";


export const logmiddleware=(req,res,next)=>{

    const{method,url}= req
    console.log(`${method},${url}`);
    next()
}

export const handleerror=(req,res,next)=>{
     const status=statusCodes.find((item)=>item.code===404)
     res.status(status.code).json({success:false,message:`route ${req.originalUrl} ,${status.message}`})

}