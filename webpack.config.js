const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = () => {
  const base = {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    plugins: [new CheckerPlugin()],
    devtool: "source-map",
  };

  const commonLoaders = [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ];

  const client = {
    ...base,
    entry: "./src/client/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        ...commonLoaders,
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
        },
      ],
    },
  };

  const server = {
    ...base,
    target: "node",
    entry: [path.resolve("src/server/index.tsx")],
    output: {
      filename: "server.js",
      path: path.resolve(process.cwd(), "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        ...commonLoaders,
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "awesome-typescript-loader",
              options: {
                configFileName: "tsconfig-server.json",
              },
            },
          ],
        },
      ],
    },
  };

  return [client, server];
};
