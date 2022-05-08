const NotFoundError = (req,res)=> res.status(404).json({message: "Not found"})

module.exports = NotFoundError;