/** @type {import('next').NextConfig} */
const nextConfig = {};

const withImages = require("next-images");

module.exports = nextConfig;

module.exports = withImages({
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(mp3|wav)$/,
			use: [
				{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "static/media",
						publicPath: "_next/static/media",
					},
				},
			],
		});

		return config;
	},
});
