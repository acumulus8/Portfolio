const path = require("path");

module.exports = (postCSSPlugins = [], MiniCssExtractPlugin, devMode) => {
	return [
		{
			test: /\.(html)$/,
			loader: "html-loader-srcset",
			options: {
				minimize: false,
			},
		},
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
				// devMode ? "style-loader" : MiniCssExtractPlugin.loader,
				MiniCssExtractPlugin.loader,
				"css-loader",
				"postcss-loader",
				"sass-loader",
				{ loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } },
			],
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } },
		},
		{
			test: /\.(png|svg|jpg|jpeg|pdf)$/i,
			type: "asset/resource",
		},
	];
};
