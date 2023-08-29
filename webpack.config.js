const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        generator: {
          filename: "img/[hash][ext][query]",
        },
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.join("icons", "[name].[contenthash][ext]"),
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
};
