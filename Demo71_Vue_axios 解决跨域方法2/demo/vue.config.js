module.exports = {
    devServer: {
        proxy: {
            '^/a': {
                target: 'http://localhost:5000',
                pathRewrite: { "^/a": "" }
            },
            '^/b': {
                target: 'http://localhost:5001',
                pathRewrite: { "^/b": "" }
            },
        }
    }
}