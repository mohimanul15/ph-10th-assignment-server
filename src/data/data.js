// Db operations
import dbPrefixer from "../database/database.js";


// Insert one to visa Database
const InsertOneVisaData = async (data) => {
    const readyCLient = dbPrefixer.collection('visa');

    const results = await readyCLient.insertOne(data);

    return results;
}

const GetAllVisaData = () => {

    const readyCLient = dbPrefixer.collection('visa');

    const results = readyCLient.find().toArray();

    return results;

}


export {InsertOneVisaData,
        GetAllVisaData
};