import express, { Request, Response } from 'express';
import { connectDB } from './db/mongoDb';
import { port } from './config/config';
import { routes } from './route';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors());


app.use(express.json());

app.use('/api/v1/task', routes)
app.get('/', (req: Request, res: Response) => {
    res.send('Taskly')
})

const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`server running on port ${port}`)
        })
    } catch (error) {
        console.error('failed to connect to mongodb')
        process.exit(1)
    }
}

startServer()