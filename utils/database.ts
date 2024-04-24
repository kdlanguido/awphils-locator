import mongoose, { ConnectOptions } from 'mongoose';

export const connectToDB = async () => {
    try {
        const MONGODB_URI: string = "mongodb+srv://alyastubigman:TbLeKHoIGIpDVMtc@cluster0.o3rhzpp.mongodb.net/";
        const MONGODB_NAME: string = 'titanarms_dev';

        await mongoose.connect(MONGODB_URI, {
            dbName: MONGODB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions);

        if (mongoose.connection.readyState === 1) {
            console.log('MongoDB is already connected');
        }

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};