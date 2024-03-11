const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Main entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output filename
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // File types to process
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel for transpiling
        },
      },
      {
        test: /\.css$/i, // For CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use your HTML template
    }),
  ],
  devServer: {
    static: "./dist", // Serve files from the 'dist' folder
    port: 3000, // Development server port
  },
};
