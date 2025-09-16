import { model, Schema } from "mongoose";


export const itemSchema= Schema({
    name:{type:String,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true}
},{timestamp:true})


export const Item=model('Item',itemSchema)