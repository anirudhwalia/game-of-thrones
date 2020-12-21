const mongoose = require('mongoose');
const db = "mongodb+srv://admin:admin@cluster0.zgiux.mongodb.net/battle?retryWrites=true&w=majority";

const connectDB=async ()=>{
    try{
        
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("mongodb connected")
    }catch(err){
        console.log("mongo db connection failed with ",err.message)
        process.exit(1);
    }
    
}


module.exports=connectDB