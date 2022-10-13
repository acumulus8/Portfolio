const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const postCSSPlugins = [require.resolve("postcss-simple-vars"), require.resolve("postcss-nested"), require.resolve("autoprefixer")];
const sourceMapDevToolOptions = {
	filename: "[file].js.map",
	exclude: ["Vendor.js"],
};

module.exports = (env) => {
	const mode = env.mode; // 'development' or 'production' from script
	let config = {
		entry: {
			App: "./app/assets/scripts/App.js",
			Lightbox: "./app/assets/scripts/Lightbox.js",
			Vendor: "./app/assets/scripts/Vendor.js",
		},
		devtool: false,
		module: {
			rules: [
				{
					test: /\.s[ca]ss$/i,
					use: ["style-loader", "css-loader?url=false", "sass-loader"],
				},
				{
					test: /\.sss@/i,
					loader: "postcss-loader",
					options: {
						postcssOptions: { plugins: postCSSPlugins },
					},
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name].[ext]",
								path: path.resolve(__dirname, "./app/assets/images"),
								outputPath: "./assets/images/",
							},
						},
					],
				},
			],
		},
		plugins: [
			new webpack.SourceMapDevToolPlugin(sourceMapDevToolOptions),
			new HtmlWebpackPlugin({
				title: "Tim Wilburn: Developer",
				path: path.resolve(__dirname, "app"),
				filename: "index.html",
				template: "./app/index.html",
			}),
			new HtmlWebpackPlugin({
				title: "Tim Wilburn: Developer",
				path: path.resolve(__dirname, "app"),
				filename: "about.html",
				template: "./app/about.html",
			}),
			new HtmlWebpackPlugin({
				title: "Tim Wilburn: Developer",
				path: path.resolve(__dirname, "app"),
				filename: "contact.html",
				template: "./app/contact.html",
			}),
			new HtmlWebpackPlugin({
				title: "Tim Wilburn: Developer",
				path: path.resolve(__dirname, "app"),
				filename: "portfolio.html",
				template: "./app/portfolio.html",
			}),
		],
	};
	if (mode === "development") {
		console.log("!@#!@!@!@!@! DEV MODE !@!@!@!@");
		config.output = {
			filename: "[name].js",
			path: path.resolve(__dirname, "app"),
		};
		config.devServer = {
			before: function (_, server) {
				server._watch("./app/*.html");
			},
			contentBase: path.join(__dirname, "app/"),
			hot: true,
			port: 3000,
		};
		config.mode = mode;
	}
	if (mode === "production") {
		console.log("!@#!@!@!@!@! PRODUCTION MODE !@!@!@!@");
		config.plugins.push(new CleanWebpackPlugin({ path: path.resolve(__dirname, "dist") }));
		config.output = {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist/"),
		};
		config.mode = mode;
	}
	return config;
};

// module.exports = (env) => getConfig(env)
