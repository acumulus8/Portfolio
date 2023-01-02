const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
	// new HtmlWebpackPlugin({}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: true,
		path: path.resolve(__dirname, "./app"),
		filename: "index.html",
		template: "./app/index.html",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: true,
		path: path.resolve(__dirname, "./app"),
		filename: "about.html",
		template: "./app/about.html",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: true,
		path: path.resolve(__dirname, "./app"),
		filename: "contact.html",
		template: "./app/contact.html",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: true,
		path: path.resolve(__dirname, "./app"),
		filename: "portfolio.html",
		template: "./app/portfolio.html",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: true,
		path: path.resolve(__dirname, "./app"),
		filename: "thankyou.html",
		template: "./app/thankyou.html",
	}),
];
