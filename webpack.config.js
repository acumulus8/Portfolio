const path = require("path");

const postCSSPlugins = [require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer")];

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Lightbox: "./app/assets/scripts/Lightbox.js",
		Vendor: "./app/assets/scripts/Vendor.js",
	},
	output: {
		// path: path.resolve(__dirname, "./app/temp/scripts"),
		path: path.resolve(__dirname, "./app"),
		filename: "[name].js",
		// filename: "bundled.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "app"),
		hot: true,
		port: 3000,
		host: "0.0.0.0",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.s[ca]ss$/i,
				use: [
					"style-loader",
					"css-loader?url=false",
					"sass-loader",
					// line was original from course.
					// { loader: "postcss-loader", options: { plugins: postCSSPlugins } }
					{ loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } },
				],
				// loader: "babel-loader",
				// query: {
				//   presets: ["es2015"]
				// },
				// test: /\.js$/,
				// exclude: /node_modules/
			},
		],
	},
};
