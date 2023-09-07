const path = require("path");

module.exports =  {
    entry: {
        main: "./src/app.tsx",
    },
    output: {
        path: path.resolve(__dirname, './www/dist'),
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