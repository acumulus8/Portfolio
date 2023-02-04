module.exports = (ImageMinimizerPlugin) => {
	return new ImageMinimizerPlugin({
		minimizer: {
			// Implementation
			implementation: ImageMinimizerPlugin.imageminMinify,
			// Options
			options: {
				plugins: ["imagemin-gifsicle", "imagemin-mozjpeg", "imagemin-pngquant", "imagemin-svgo"],
			},
		},
	});
};
