const path = require("path");

module.exports = (postCSSPlugins = []) => {
	return [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } },
		},
		{
			test: /\.(html)$/,
			loader: "html-loader-srcset",
			options: {
				minimize: false,
			},
		},
		{
			test: /\.s[ac]ss$/,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader",
				{ loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } },
			],
		},
		{
			test: /\.(png|svg|jpg|jpeg)$/i,
			type: "asset/resource",
		},
	];
};
