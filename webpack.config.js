module.exports = {
  entry: [
    './src/index.js',
    './src/animations.scss',
    './src/modal.scss',
    './src/toast.scss',
    './src/style.scss',
    './src/busca.scss',
    './src/receita.scss'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};