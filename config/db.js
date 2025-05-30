const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Optional: Debug log
console.log("MongoDB URL:", process.env.MONGODB_URI);

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDb;
