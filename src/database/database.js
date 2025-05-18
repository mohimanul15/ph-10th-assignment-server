import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config()

const username = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASS);

const uri = `mongodb+srv://${username}:${password}@mongodbform.tyffpkj.mongodb.net/?retryWrites=true&w=majority&appName=MongodbForm`;

const client = new MongoClient(uri);

// Db Prefixer
const dbPrefixer = client.db(process.env.DB_NAME);

export default dbPrefixer;

