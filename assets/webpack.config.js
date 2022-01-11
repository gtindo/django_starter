const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        vendors: './src/vendors.ts',
        main: './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new ESLintPlugin({
            files: "./src",
            extensions: ["ts"],
            fix: false,
            emitError: true,
            failOnError: true,
            failOnWarning: true,
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}