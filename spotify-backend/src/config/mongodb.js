import mongoose from "mongoose";

const connectDB = async () =>{

    mongoose.connection.on('connected',()=>{
        console.log("done");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}MUSIC_APP`);
}

export default connectDB;