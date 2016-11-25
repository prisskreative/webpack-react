var webpack = require ('webpack');
//var path = require ('path');
//var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
	// with codesplitting
	// entry: './src/main.js',
	// //entry: './main.coffee',
	// output: {
	// 	path: 'build',
	// 	filename: 'bundle.js'
	// },
		// entry: {
		// 	about: './dist/about',
		// 	contact: './dist/contact',
		// 	vendor: ['react', 'react-dom'] // jquery - 3d
		// },
		// output: {
		// 	path: path.join(__dirname, 'build'),
		// 	filename: '[name].bundle.js'
		// },
	entry: './dist/app.js',
	output: {
		path:'build',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './build',
		port: 3000
	},
	module: {
		loaders:[
		    {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                	presets: ['es2015', 'react']
                }
		    },
		    {
		    	test: /\.(png|jpg)$/,
		    	loader: 'url-loader'
		    	//loader: 'url-loader?limit=20000'
		    },
		    {
		    	test: /\.scss$/,
		    	loader: 'style-loader!css-loader!sass-loader'
		    }
		    // {
		    // 	test: /\.css$/,
		    // 	loader: 'style-loader!css-loader'
		    // }
		    // {
      //           test: /\.coffee$/,
      //           exclude: /(node_modules)/,
      //           loader: 'coffee'
		    // }

		]
	}
	// plugins: [
	//     //new CommonsChunkPlugin('commons','commons.bundle.js')
	//     new CommonsChunkPlugin('vendor','vendor.bundle.js')
	// ]
};













