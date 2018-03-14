/*
* @Author: Yineng
* @Date:   2018-03-13 12:15:50
* @Last Modified by:   Yineng
* @Last Modified time: 2018-03-14 15:33:49
*/
var webpack             = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');


//dev/ online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

console.log(WEBPACK_ENV)
// grt html-webpack-pligin
var getHtmlConfig = function(name ){
    return {
        template    : './src/view/' + name + '.html',
        filename    : 'view/' + name + '.html',
        inject      : true,
        hash        : true,
        chunks      : ['common', name]
    };
};

// webpack config
var config = {
	entry: {
		'common'            : ['./src/page/common/index.js'],
        'index'             : ['./src/page/index/index.js'],
        'login'             : ['./src/page/login/index.js'],
	},
  	output: {
  		path : './dist',
        publicPath : '/dist',
    	filename: 'js/[name].js',
	},
	externals : {
		'jquery' : 'window.jQuery'

	},

	module : {
		loaders : [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader")},
			{ test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]'}

		]
	},

	plugins: [

	//independent module
		new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
		// css webpack
        new ExtractTextPlugin("css/[name].css"),
        //html module
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),


	]
};



if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;