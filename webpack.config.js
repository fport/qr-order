const serverConfig = {
    name: 'server',
    context: path.join(__dirname, 'src'),
    entry: { serverEntry: ['./server-entry.js'] },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'server.js',
        publicPath: 'public/',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            /*...*/
        ]
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')]
    },
    resolve: {
        modules: [path.join(__dirname, 'node_modules')]
    }
}
