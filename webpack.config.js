const path = require("path");

const commons = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  devtool: "source-map"
};

const commonLoaders = [
  {
    test: /\.tsx?$/,
    loader: "ts-loader"
  }
];

const client = {
  ...commons,
  target: "web",
  entry: path.resolve(__dirname, "src/client/index.tsx"),
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM"
  },
  module: {
    rules: [
      ...commonLoaders,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};

const server = {
  ...commons,
  target: "node",
  entry: path.resolve(__dirname, "src/server/index.tsx"),
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      ...commonLoaders,
      {
        test: /\.css$/i,
        use: ["ignore-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["ignore-loader"]
      },
      {
        test: /\.pdf$/i,
        use: ["ignore-loader"]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};

module.exports = [client, server];
