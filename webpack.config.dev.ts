import webpack from "webpack";
import webpackBase, { generateModuleList } from "./webpack.config.base";

const config: webpack.Configuration = {
  ...webpackBase,
  devtool: "source-map",
  mode: "development",
  ...generateModuleList("tsconfig.dev.json"),
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

export default config;
