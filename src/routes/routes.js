import express from 'express'
import routeFunc from '../routeFunc/routeFunc.js';

const {
        indexRoute,
        userDetail,
        visaData
    } = routeFunc;

const Routes = express.Router();

Routes.get('/', indexRoute);
Routes.get('/user',userDetail);
Routes.get('/visas',visaData);


export default Routes;