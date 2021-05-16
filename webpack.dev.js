const path = require("path");

const client = {
  mode: "development",
  devServer: {
    open: true,
    port: 3000,
    contentBase: path.join(__dirname, "dev"),
    historyApiFallback: true,
    host: "0.0.0.0",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  devtool: "source-map",
  target: "web",
  entry: path.resolve(__dirname, "src/client/index.tsx"),
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dev"),
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

module.exports = client;
