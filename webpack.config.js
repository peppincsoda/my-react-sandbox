const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
    //   {
    //     test: /\.css$/,
    //     use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
    //   },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'react-sandbox',
    }),
  ],

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'ag-grid-react': 'AgGridReact',
  },
};
