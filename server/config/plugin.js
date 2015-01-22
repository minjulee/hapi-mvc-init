/**
 * Created by LMJ on 2015-01-22.
 */
// Options to pass into the 'Good' plugin
var goodOptions = {
    opsInterval: 5000,
    reporters: [{
        reporter: require('good-console'),
        args:[{ ops: '*', request: '*', log: '*', response: '*', 'error': '*' }]
    }]
};
/*
 rootpath Module example
 ex) Before : var myLib = require('../myLibrary');
 var myUtils = require('../../utils/myUtils');
 var myTest = require('../../test/myTest');
 After  : var myLib = require('lib/myLibrary');
 var myUtils = require('utils/myUtils');
 var myTest = require('test/myTest');
 */
var server = reqlib("server");

var assetOptions = settings.assetsOptions;

// load multiple plugins
server.register([
    {
        register: require("good"),
        options: goodOptions
    },
    {
        register: require("hapi-assets"),
        options: assetOptions
    },
    {
        register: require("hapi-named-routes")
    },
    {
        register: require("hapi-cache-buster")
    }
], function (err) {
    if (err) {
        console.error('Failed to load a plugin:', err);
        throw err;
    }
});