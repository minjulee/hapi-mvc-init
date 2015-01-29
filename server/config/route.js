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
    /**
     * 아래부턴 image, css, js 등의 외부 파일 주소 처리
     */
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
    },
    {
        method: 'GET',
        path: '/fonts/{path*}',
        config: controller.assets.fonts
    }
];
