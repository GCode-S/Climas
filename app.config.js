export default () => ({
  expo: {
    name: "Climas",
    slug: "Climas",
    version: "1.0.0",
    experiments: {
      newArchEnabled: true,
    },
    extra: {
      API_KEY: process.env.API_KEY,
    },
  },
});
