const path = require("path");

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