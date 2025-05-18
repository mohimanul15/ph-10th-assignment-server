import { GetAllVisaData } from "../data/data.js";

const indexRoute = (req,res) => {
    res.send('server index is working');
}

const userDetail = (req,res) => {
    res.send('this is user routes');
}

const visaData = async (req,res) => {
    const data = await GetAllVisaData();
    res.send(data);
}

const routeFunc = {
    indexRoute,
    userDetail,
    visaData
}


export default routeFunc;