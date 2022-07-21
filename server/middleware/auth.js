 const jwt=require('jsonwebtoken')
 const userDbModel =require('../model/UserDb')
 
 const authenticate=async(req,res,next)=>{
     try{
         const token=req.cookies.jwtoken
         const verifyToken=jwt.verify(token,'screte')
        const rootUser=userDbModel.findOne({Role:verifyToken.role,"tokens.token":token})
        if(!rootUser){
            res.json({error:"not found"})
        }
        req.token=token
        req.rootUser=rootUser
        // req.rootUserid=rootUser._id
        console.log(req.token)
        console.log(req.rootUser)
        next()
     }catch(err){
         console.log(err)
     }
    // return (req,res,next)=>{
    //     const userRole=req.body.role
    //     console.log(userRole)
    //     if(permission.includes(userRole)){
    //         next()
    //     }
    //     else{
    //         res.json({error:"dan,t have access"})
    //     }
    // }

}
module.exports=authenticate