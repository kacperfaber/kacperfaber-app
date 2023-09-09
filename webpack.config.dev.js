const {merge} = require("webpack-merge");
const baseCfg = require("./webpack.config");
const webpack = require("webpack");

const config = {
    links: {
        github: "https://www.github.com/kacperfaber",
        stackoverflow: "https://stackoverflow.com/users/8106461/kacperfaber",
        emailTo: "mailto:kacperf1234@gmail.com"
    }
}

module.exports = merge(baseCfg, {
    mode: 'development',
    devtool: 'inline-source-map',

    plugins: [
        new webpack.DefinePlugin({
            "process.env.APPCONFIG": JSON.stringify(config)
        })
    ]
});