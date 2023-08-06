import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3000,
        client: {
            logging: "none",
        },
    },
};

export default config;
