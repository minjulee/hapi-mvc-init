// This is the assets controller. Goal is to serve css, js, partials, images, or bower packages.
module.exports = {
    images: {
        handler: {
            directory: { path: 'public/images' }
        },
        id: 'images'
    },
    css: {
        handler: {
            directory: { path: 'public/css' }
        },
        id: 'css'
    },
    js: {
        handler: {
            directory: { path: 'public/js' }
        },
        id: 'js'
    },
    fonts: {
        handler: {
            directory: { path: 'public/fonts' }
        },
        id: 'fonts'
    }
}