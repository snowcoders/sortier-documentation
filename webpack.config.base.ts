import webpack from "webpack";

const config: webpack.Configuration = {
  entry: {
    main: "./src/index.tsx",
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "highlight.js": "hljs",
    react: "React",
    "react-dom": "ReactDOM",
  },
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "/dist/",
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".html", ".js.mem"],
  },
};

export const generateModuleList = (tsConfigFileName: string) => {
  let moduleList: Partial<webpack.Configuration> = {
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: tsConfigFileName,
            },
          },
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", loader: "source-map-loader", test: /\.js$/ },

        // All scss files
        {
          test: /\.s?css$/,
          use: [
            {
              loader: "style-loader", // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
            },
          ],
        },
      ],
    },
  };
  return moduleList;
};

export default config;
