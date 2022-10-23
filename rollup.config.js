import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel"

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      babel({ 
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react']
      }),
      commonjs(),
      postcss(),
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {})
    ],
  },
];