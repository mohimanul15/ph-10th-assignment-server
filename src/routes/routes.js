import express from 'express'
import routeFunc from '../routeFunc/routeFunc.js';

const {
        indexRoute,
        userDetail
    } = routeFunc;

const Routes = express.Router();

Routes.get('/', indexRoute);
Routes.get('/user',userDetail);


export default Routes;