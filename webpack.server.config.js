require("dotenv").load();
const path = require("path");
const config = require("./config");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const analyzer = new BundleAnalyzerPlugin({
	bundleDir: "analyze"
});

const compressionPlugin = new CompressionPlugin({
	test: /\.(ico|png|jpg|gif|woff(2)?|ttf|eot|svg|mp4|webm)$/
});

module.exports = {
	entry: {
		server: path.resolve(__dirname, "src/pages/index.jsx")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.[name].js"
	},
	plugins: [analyzer, compressionPlugin],
	devtool: "eval-source-map",
	target: "node",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: [
					{
						loader: "node-style-loader"
					},
					{
						loader: "css-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: [
					{
						loader: "node-style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[path][name]__[local]--[hash:base64:5]"
						}
					},
					{
						loader: "less-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(ico|png|jpg|gif|woff(2)?|ttf|eot|svg|mp4|webm)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[hash].[ext]",
							outputPath: "assets/",
							publicPath: config.server.dist + "/assets"
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@root": path.resolve("/"),
			"@components": path.resolve("src/components"),
			"@pages": path.resolve("src/pages"),
			"@src": path.resolve("src"),
			"@variables": path.resolve("src/variables"),
			"@utils": path.resolve("src/utils"),
			"@consts": path.resolve("src/consts"),
			"@HOC": path.resolve("src/HOC")
		}
	}
};
