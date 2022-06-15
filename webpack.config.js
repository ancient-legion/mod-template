module.exports = {
    entry: {
        entry: './src/entry.ts'
    },
    output: {
        filename: '[name].js',
        path: require('path').resolve(__dirname, './dist')
    },
    externals: {
        'api': 'commonjs2 api',
        'UnityEngine': 'commonjs2 UnityEngine',
        'System': 'commonjs2 System',
        'QuickJS.IO': 'commonjs2 QuickJS.IO',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8183,
        hot: true
    },
    mode: 'development'
}