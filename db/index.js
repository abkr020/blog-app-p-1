const mongoose = require('mongoose')
// import {DATA_BASE_NAME} from "../constants.js"

const connect_db = async() => {
    try {
        // mongoose.connect("mongodb://127.0.0.1:27017/miniproject")

        const connection_info = await mongoose.connect(`${process.env.DATABASE_URL}/blog-app-p-1`);

        // const connection_info = await mongoose.connect("mongodb://127.0.0.1:27017/blogappp-1");
        // const connection_info = await mongoose.connect(`${process.env.MONGO_DATABASE_URI}/${DATA_BASE_NAME}`);

        console.log(`mongo db connected successfully`);
        // console.log(`mongo db connected successfully host : ${connection_info.connection.host}`);
    } catch (error) {
        console.log("mongo db connection failed error",error);
        process.exit(1);
        
    }
}
// export default connect_db
module.exports = connect_db;