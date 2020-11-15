import webpack from "webpack";
import webpackBase, { generateModuleList } from "./webpack.config.base";

const config: webpack.Configuration = {
  ...webpackBase,
  devtool: false,
  mode: "production",
  ...generateModuleList("tsconfig.prod.json"),
};

export default config;
