const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-react",
                                "@babel/preset-env",
                            ]
                        }

                    }

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
    ]
};