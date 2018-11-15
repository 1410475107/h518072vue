const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin 	= require('extract-text-webpack-plugin');
module.exports = {
    entry: [__dirname + "/src/my.js"],
    output: {
        //打包后的文件存放的绝对路径
        path: __dirname + "/dist",
        //打包后输出文件的文件名
        filename: "./js/[hash].js"
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     // loader:'style-loader!css-loader'
            //     loader: [
            //         'style-loader',
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 // 指定启用css modules
            //                 modules: true,
            //                 // 设置命名格式
            //                 localIdentName: '[path][name]-[hash:5]'
            //             }
            //         }
            //     ]
            // },
            {
                //单独导出css并开启压缩模式
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true //css压缩
                        }
                    }]
                })
                //单独导出css的简单配置模式
                //use: ExtractTextPlugin.extract({use: 'css-loader'})
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['latest'] //按照最新的ES6语法规则去转换
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'my.html',
            inject: true,
            minify: {
                removeComments: true, //是否清除HTML注释  
                collapseWhitespace: false, //是否压缩HTML  
                removeScriptTypeAttributes: true, //是否删除< script>的type="text/javascript"  
                removeStyleLinkTypeAttributes: true, //是否删除< style>和< link>的type="text/css"  
                minifyJS: true, //是否压缩页面JS  
                minifyCSS: true //是否压缩页面CSS  
            }
        }),
        new ExtractTextPlugin('./css/my.css'),
        //清除插件用的
        new cleanWebpackPlugin(['dist/js']),
        //开启对js的压缩
        // new webpack.optimize.UglifyJsPlugin(),
        // 启动热更新插件
        new webpack.HotModuleReplacementPlugin()

    ],
    //热更新配置
    devServer: {
        contentBase: __dirname + './dist',
        host: 'localhost',
        compress: true,
        inline: true,
        port: 8080,
        open: true,
        hot: true

    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }

}