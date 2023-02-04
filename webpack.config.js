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
const imageMinimizerPlugin = getImageMinizerPluginConfig(ImageMinimizerPlugin);

const sourceMapDevToolOptions = {
	filename: "[file].js.map",
	exclude: ["Vendor.js"],
};

module.exports = (env) => {
	const mode = env.mode;

	let config = {
		entry: {
			App: "./app/assets/scripts/App.js",
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist"),
			assetModuleFilename: "assets/images/[name][ext]",
		},
		module: {
			rules: [...loaders],
		},
		plugins: [
			new MiniCssExtractPlugin(),
			new CopyPlugin({
				patterns: [{ from: "app/assets/images/resume-tim-wilburn.pdf", to: "assets/images" }],
			}),
			...htmlWebpackPlugins,
		],
		optimization: { minimizer: [imageMinimizerPlugin] },
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
