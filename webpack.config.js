/**
 * Created by tingting on 2017/5/3.
 */
module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname,//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//添加对样式表的处理
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=819200'
      }
    ]
  },
}