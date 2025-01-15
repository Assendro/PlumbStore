const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Вставляет CSS в DOM
                    'css-loader',   // Преобразует CSS в CommonJS
                    'sass-loader'   // Компилирует Sass в CSS
                ],
            },
            {
                test: /\.(js|jsx)$/, // Обрабатываем файлы .js и .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }

        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Позволяет импортировать файлы без указания расширения
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    mode: 'development',
};
