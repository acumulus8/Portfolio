const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
	// new HtmlWebpackPlugin({}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: "body",
		path: path.resolve(__dirname, "./app"),
		filename: "index.html",
		template: "./app/index.html",
		scriptLoading: "module",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: "body",
		path: path.resolve(__dirname, "./app"),
		filename: "about.html",
		template: "./app/about.html",
		scriptLoading: "module",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: "body",
		path: path.resolve(__dirname, "./app"),
		filename: "contact.html",
		template: "./app/contact.html",
		scriptLoading: "module",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: "body",
		path: path.resolve(__dirname, "./app"),
		filename: "portfolio.html",
		template: "./app/portfolio.html",
		scriptLoading: "module",
	}),
	new HtmlWebpackPlugin({
		title: "Tim Wilburn: Developer",
		inject: "body",
		path: path.resolve(__dirname, "./app"),
		filename: "thankyou.html",
		template: "./app/thankyou.html",
		scriptLoading: "module",
	}),
];
