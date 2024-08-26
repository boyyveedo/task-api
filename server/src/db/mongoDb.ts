import mongoose from "mongoose";
import { MongoURI } from "../config/config";

export async function connectDB(): Promise<void> {
    try {
        if (!MongoURI) {
            throw new Error('MongoUri not defined')
        }

        await mongoose.connect(MongoURI)
        console.log('Mongodb connected sucessfully')

    } catch (error) {
        console.log('Mongodb failed to connect', error)
    }

}