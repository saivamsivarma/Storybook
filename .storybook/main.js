module.exports = {
  stories: ["../src/app/components/**/*.stories.ts"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-notes",
    "@storybook/addon-knobs",
    "@storybook/addon-storysource"
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     rule: {
    //       include: [path.resolve(__dirname, '../src')], // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: false },
    //     },
    //   },
    // },
  ],
};
