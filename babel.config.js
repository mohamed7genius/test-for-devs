module.exports = (api) => {
  api.cache(true);
  const presets = ["babel-preset-expo"];

  const aliases = {
    "@": "./",
  };

  return {
    presets,
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: aliases,
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
          ],
        },
      ],
    ],
  };
};
