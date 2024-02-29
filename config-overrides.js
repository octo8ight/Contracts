const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: false,
        fs: false,
        assert: false,
        crypto: require.resolve("crypto-browserify"),
        http: false,
        https: false,
        os: false,
        buffer: false,
        stream: false,
        zlib: require.resolve("browserify-zlib"),
        path: require.resolve("path-browserify"),
        constants: require.resolve("constants-browserify"),
        child_process: false,
        worker_threads: false,
        "uglify-js": false,
        "@swc/core": false,
        esbuild: false,
        querystring: require.resolve("querystring-es3"),
        vm: require.resolve("vm-browserify")
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}