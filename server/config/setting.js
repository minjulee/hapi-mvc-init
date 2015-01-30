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
            js: ['js/demo-skin-changer.js','js/jquery.js' ,'js/bootstrap.js' , 'js/jquery.nanoscroller.min.js','js/scripts.js','js/pace.min.js'],
            css: ['css/bootstrap/bootstrap.min.css', 'css/libs/font-awesome.css' , 'css/libs/nanoscroller.css' , 'css/compiled/theme_styles.css']
        },
        production: {
            js: ['js/scripts.js'],
            css: ['css/styles.css']
        }
    },
    dbConfig : {
        user: "hapi",
        password: "Elio1225",
        server:"nozc2einho.database.windows.net,1433",
        database:"hapi",
        options:{}
    }
}