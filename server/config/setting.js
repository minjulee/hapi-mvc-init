/**
 * Created by LMJ on 2015-01-22.
 */
var path = require('path');

// Defaults that you can access when you require this config.
// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    port: parseInt(process.env.PORT, 10) || 3000,
    host: 'localhost',
    assetsOptions :{
        development: {
            js: ['public/js/test-one.js', 'public/js/test-two.js'],
            css: ['public/css/test-one.css', 'public/css/test-two.css']
        },
        production: {
            js: ['public/js/scripts.js'],
            css: ['public/css/styles.css']
        }
    },
    dbConfig : {
        user: "pjy6211",
        password: "nibw1010235c",
        server:"pjy6211.cafe24.com",
        database:"pjy6211",
        options:{}
    }
}