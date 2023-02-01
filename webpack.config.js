const htmlWebpackPlugins = require("./configs/html-webpack-plugins");
const imageMinimizer = require("./configs/image-minimizer");
const getLoaders = require("./configs/loaders");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const postCSSLoaders = [require.resolve("postcss-simple-vars"), require.resolve("postcss-nested"), require.resolve("autoprefixer")];

const loaders = getLoaders(postCSSLoaders);

const sourceMapDevToolOptions = {
	filename: "[file].js.map",
	exclude: ["Vendor.js"],
};

module.exports = (env) => {
	const mode = env.mode;

	let config = {
		entry: {
			App: "./app/assets/scripts/App.js",
			Lightbox: "./app/assets/scripts/Lightbox.js",
			Vendor: "./app/assets/scripts/Vendor.js",
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist"),
			assetModuleFilename: "assets/images/[name][ext]",
		},
		module: {
			rules: [...loaders],
		},
		plugins: [...htmlWebpackPlugins],
		// plugins: [new webpack.SourceMapDevToolPlugin(sourceMapDevToolOptions), ...htmlWebpackPlugins],
		optimization: {
			minimize: true,
			minimizer: [...imageMinimizer],
		},
	};

	if (mode === "development") {
		console.log("!@#!@!@!@!@! DEV MODE !@!@!@!@");
		config.devServer = {
			compress: true,
			hot: true,
			port: 3000,
		};
		config.mode = mode;
	}
	if (mode === "production") {
		console.log("!@#!@!@!@!@! PRODUCTION MODE !@!@!@!@");
		config.plugins.push(new CleanWebpackPlugin({ path: path.resolve(__dirname, "./dist") }));
		config.mode = mode;
	}
	return config;
};
