import Routes from "../routes/routes.js";

const indexRoute = (req,res) => {
    res.send('server index is working');
}

const userDetail = (req,res) => {
    res.send('this is user routes');
}

const routeFunc = {
    indexRoute,
    userDetail
}


export default routeFunc;