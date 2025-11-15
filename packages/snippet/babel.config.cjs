module.exports = {
  targets: { chrome: 58 },

  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: '3',
    }]
  ],
}
