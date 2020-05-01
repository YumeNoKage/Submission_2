const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
       ]
   },
   plugins: [
        new HtmlWebpackPlugin({
            template: "./publik/surah.html",
            filename: "surah.html"
        }),
        new HtmlWebpackPlugin({
            template: "./publik/juz.html",
            filename: "juz.html"
        }),
        new HtmlWebpackPlugin({
            template: "./publik/keterangan.html",
            filename: "keterangan.html"
        })
   ]
}