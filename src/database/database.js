import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config()

const username = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASS);

const uri = `mongodb+srv://${username}:${password}@mongodbform.tyffpkj.mongodb.net/?retryWrites=true&w=majority&appName=MongodbForm`;

const client = new MongoClient(uri);

async function run() {
    try {
        client.connect();
        const database = client.db(process.env.DB_NAME).collection('user');
        // console.log(database);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (error) {
        console.dir
    }
}

export default run;

