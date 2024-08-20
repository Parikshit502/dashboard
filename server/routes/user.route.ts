import { Request, Response } from "express"; 
import prisma from "../models/db.config";
export const createUser = async(req:Request,res:Response) => { 
    const {name,email,password} =req.body 

    const findUser = await prisma.user.findUnique({ 
        where:{ 
            email:email
        }
    }) 
    if(findUser){ 
        return res.json({status:400,message:"Email Already Taken. Please Use another email"})
    } 
    
}