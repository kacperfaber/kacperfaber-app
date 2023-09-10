const {merge} = require("webpack-merge");
const baseCfg = require("./webpack.config");
const webpack = require("webpack");

module.exports = (env) => {
    const config = {
        links: {
            github: env.github,
            stackoverflow: env.stackoverflow,
            emailTo: env.emailTo,
            twitter: env.twitter
        }
    }

    return merge(baseCfg, {
        mode: 'production',

        plugins: [
            new webpack.DefinePlugin({
                "process.env.APPCONFIG": JSON.stringify(config)
            })
        ]
    });
}