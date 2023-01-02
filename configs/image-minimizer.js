const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = [
	new ImageMinimizerPlugin({
		minimizer: {
			implementation: ImageMinimizerPlugin.imageminMinify,
			options: {
				plugins: [
					["gifsicle", { interlaced: true }],
					["jpegtran", { progressive: true }],
					["optipng", { optimizationLevel: 5 }],
					[
						"svgo",
						{
							plugins: [
								{
									name: "preset-default",
									params: {
										overrides: {
											removeViewBox: false,
											addAttributesToSVGElement: {
												params: {
													attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
												},
											},
										},
									},
								},
							],
						},
					],
				],
			},
		},
	}),
];
