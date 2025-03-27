import { connect, connection } from 'mongoose';

connect(
  // process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-luxecavallo',
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mern-luxecavallo'
  }
)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(`MongoDB connection error: ${err.message}`));;


export default connection;