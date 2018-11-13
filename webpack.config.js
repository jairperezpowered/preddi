module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/out',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './out'
    }
  };