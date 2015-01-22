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
            js: ['js/test-one.js', 'js/test-two.js'],
            css: ['css/test-one.css', 'css/test-two.css']
        },
        production: {
            js: ['js/scripts.js'],
            css: ['css/styles.css']
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