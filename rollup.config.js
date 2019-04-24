import babel from "rollup-plugin-babel";
import includePaths from "rollup-plugin-includepaths";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import liveServer from "./liveserver-plugin";

const isWatchMode = process.env.ROLLUP_WATCH;

import { config } from "./package.json";

export default {
  input: config.mainBundleEntry,
  output: {
    file: `${config.outputFolder}/${config.mainBundleOutputFile}`,
    format: "iife",
    sourcemap: true,
  },
  context: "window",
  watch: {
    clearScreen: false,
    chokidar: true,
  },
  plugins: [
    resolve({ browser: true }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    includePaths({
      paths: ["src"],
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["src/**"],
      namedExports: {
        "node_modules/react/index.js": [
          "useState",
          "useReducer",
          "useContext",
          "createContext",
          "useCallback",
          "useEffect"
        ],
      },
    }),
    postcss({
      modules: true,
      extract: `${config.outputFolder}/main.css`,
      use: [],
      extensions: [".css", ".scss"],
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    isWatchMode &&
    liveServer({
      host: "localhost",
      root: config.outputFolder,
      port: 1337,
      noCssInject: true,
    }),
  ],
};
