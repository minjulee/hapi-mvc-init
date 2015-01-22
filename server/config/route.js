/**
 * Dependencies.
 */
var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
var controller = requireDirectory(module, '../controller');

module.exports = [
    {
      method : "GET",
        path: "/email",
        config:controller.email.index
    },
    {
        method : "GET",
        path: "/email/send",
        config:controller.email.send
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.email.missing
    },
    {
        method: 'GET',
        path: '/partials/{path*}',
        config: controller.assets.partials
    },
    {
        method: 'GET',
        path: '/images/{path*}',
        config: controller.assets.images
    },
    {
        method: 'GET',
        path: '/css/{path*}',
        config: controller.assets.css
    },
    {
        method: 'GET',
        path: '/js/{path*}',
        config: controller.assets.js
    }
];
