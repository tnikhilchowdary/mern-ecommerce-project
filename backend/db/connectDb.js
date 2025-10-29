import mongoose from "mongoose";


const connectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://ecommerce:ecommerce%401234@cluster0.ffshtpi.mongodb.net/mern-ecommerce?appName=Cluster0")
        console.log("MongoDb is connected");
    }
    catch(error){
        console.log(error, "MongoDb Connection Error");
        process.exit(1);

    }
}

export default connectDb;