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
        },

        footerLinks: {
            zleca: env.zlecaFooterLink
        },

        contactEmail: env.contactEmail
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
