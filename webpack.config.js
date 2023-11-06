const htmlWebpackPlugins = require("./configs/html-webpack-plugins");
const getLoaders = require("./configs/loaders");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getImageMinizerPluginConfig = require("./configs/image-minimizer-plugin-config");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const postCSSLoaders = [require.resolve("postcss-simple-vars"), require.resolve("postcss-nested"), require.resolve("autoprefixer")];
const loaders = getLoaders(postCSSLoaders, MiniCssExtractPlugin);

module.exports = (env) => {
	const isProduction = env.mode === "production";
	const imageMinimizerPlugin = getImageMinizerPluginConfig(ImageMinimizerPlugin, isProduction);
	const imagesPath = "assets/images";

	let config = {
		entry: {
			App: "./app/assets/scripts/App.js",
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist"),
			assetModuleFilename: `${imagesPath}/[name][ext]`,
		},
		module: {
			rules: [...loaders],
		},
		plugins: [
			...htmlWebpackPlugins,
			imageMinimizerPlugin,
			new MiniCssExtractPlugin(),
			new CopyPlugin({
				patterns: [{ from: `app/${imagesPath}/resume-tim-wilburn.pdf`, to: imagesPath }],
			}),
		],
		// optimization: { minimizer: [imageMinimizerPlugin] },
	};

	if (isProduction) {
		console.log("!@#!@!@!@!@! PRODUCTION MODE !@!@!@!@");
		config.mode = "production";
		config.plugins.push(new CleanWebpackPlugin({ path: path.resolve(__dirname, "./dist") }));
	} else {
		console.log("!@#!@!@!@!@! DEV MODE !@!@!@!@");
		config.mode = "development";
		config.devServer = {
			hot: true,
			port: 3000,
		};
	}

	return config;
};
