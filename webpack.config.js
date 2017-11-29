var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    // entry: {
    //     bundle: 'app',
    //     vendor:['react','react-dom','react-router'],
    //
    // },

    entry: [
        path.resolve(__dirname, './entrys/insurance/index.js')

    ],



    output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        devServer: {
            contentBase: "./build",
            stats:{colors: true},
            historyApiFallback: true,
            inline: true,
            port:3000,
            hot:true,

            proxy:{
                '/wxshg/*':{
                    target: 'http://localhost:8080/',
                    secure: false,
                    changeOrigin: true
                }
            }
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
            new webpack.DefinePlugin({
                "process.env": {
                    'NODE_ENV': JSON.stringify("development")
                }
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     mangle: {
            //         except: ['$super', '$', 'exports', 'require']
            //         //���ϱ�����$super��, ��$��, ��exports�� or ��require�������ᱻ����
            //     },
            //     compress: {
            //         warnings: false
            //     },
            //     output: {
            //         comments: false,  // remove all comments
            //     },
            // }),


        ],

        module: {
        loaders: [

            { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude:/node_modules/,loader: 'babel-loader' },

            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'jsx-loader?harmony'
            },
            { test: /\.css$/, loader: "style!css" },
            {test:/\.json$/,loader:"json"},
            {
                test: /\.jsx?$/,
                loader:'babel',
                exclude:'/node_modules/',
                query: {
                    presets: ['es2015','react']
                }
            },
            {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
            {test: /\.gif$/, loader: "url-loader?mimetype=image/gif"},
            {test: /\.jpg$/, loader: "url-loader?mimetype=image/jpeg"}
        ]
    }
};