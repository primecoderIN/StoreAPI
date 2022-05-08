const {CustomError} = require("../errors/CustomError")
const CustomErrorHandler = (err,req,res,next)=> {

    if(err instanceof CustomError ){
        return res.status(err.statusCode).json({message: err.message})
    }

    res.status(500).json({message: "Something went wrong please try again later."})
   
}

module.exports = CustomErrorHandler;