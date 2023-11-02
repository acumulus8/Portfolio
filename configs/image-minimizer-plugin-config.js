module.exports = (ImageMinimizerPlugin, isProduction) => {
	return new ImageMinimizerPlugin({
		minimizer: {
			// Implementation
			implementation: ImageMinimizerPlugin.imageminMinify,
			// Options
			options: {
				// plugins: ["imagemin-gifsicle", "imagemin-mozjpeg", "imagemin-pngquant", "imagemin-svgo"],
				plugins: [
					["imagemin-pngquant", { quality: [0.65, 0.9] }],
					["imagemin-mozjpeg", { quality: 65, progressive: true }],
					["imagemin-svgo"],
					["imagemin-gifsicle"],
				],
			},
		},
	});
};
