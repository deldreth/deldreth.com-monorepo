import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  srcDir: "lib",
  namespace: "components",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      includePaths: ["node_modules"],
      injectGlobalPaths: [
        "node_modules/bulma/sass/utilities/_all.sass",
        "node_modules/bulma/sass/base/_all.sass"
      ]
    })
  ]
};
