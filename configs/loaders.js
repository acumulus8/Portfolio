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
			// use: ["style-loader", "css-loader?url=false", "sass-loader"],
		},
		// {
		// 	test: /\.css$/,
		// 	use: ["style-loader", "css-loader", { loader: "postcss-loader", options: { plugins: postCSSPlugins } }],
		// },
		{
			test: /\.(jpe?g|png|gif|pdf|svg)$/i,
			type: "asset/resource",
			use: [
				{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						path: path.resolve(__dirname, "assets/images"),
						outputPath: "assets/images",
					},
				},
			],
		},
	];
};
