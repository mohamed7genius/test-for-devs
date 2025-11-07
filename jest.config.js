module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/node_modules/react-native/jest/setup.js"],
  transformIgnorePatterns: [
    // Allow transformation of ALL files in react-native/jest
    "node_modules/(?!(react-native|react-native-.+|@react-native.+|react-native/jest)/)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
