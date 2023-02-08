import mongoose from "mongoose";

export default async function handler(req, res) {
    await mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to DB')
    })
}