const path = require("path");

module.exports =  {
    entry: {
        main: "./src/app.ts",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "app.js"
    },
    resolve: {
        extensions: [".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
}