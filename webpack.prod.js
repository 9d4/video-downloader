const webpack = require("webpack");

const common = require('./webpack.common')
const merger = require('webpack-merge')

module.exports = merger.merge(common, {
    mode: 'production'
})