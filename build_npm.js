import { build, emptyDir } from "jsr:@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.js"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "@marmooo/readlines-sync",
    version: Deno.args[0],
    description: "Read large text files line by line synchronously.",
    license: "MIT",
    main: "mod.js",
    repository: {
      type: "git",
      url: "git+https://github.com/marmooo/readlines-sync.git",
    },
    bugs: {
      url: "https://github.com/marmooo/readlines-sync/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
    Deno.copyFileSync("LICENSE", "npm/esm/LICENSE");
    Deno.copyFileSync("LICENSE", "npm/script/LICENSE");
  },
});
