const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports =  {
    entry: {
        main: "./src/app.tsx",
    },
    output: {
        path: path.resolve(__dirname, './www/dist/compile-js'),
        filename: "app.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
      new CopyPlugin({
          patterns: [
              {
                  from: 'third-party-licenses.txt',
                  to: path.resolve(__dirname, "www/third-party-licenses.txt")
              }
          ]}
      )
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },

            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
