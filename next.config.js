module.exports = {
    // assetPrefix: 'https://covid-action-working-group.github.io/win-frontend/',
    // future: { webpack5: true }
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
      }
}