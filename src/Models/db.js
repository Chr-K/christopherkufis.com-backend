require('dotenv').config();

import { createConnection } from 'mysql';

function createConnection(){
    const connection = msql.createConnection({
        host:'localhost',
        user:'un',
        password:'pw',
        database:'BLOG',

    })
}

module.exports = {
    createConnection,
};