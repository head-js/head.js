export default {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', {
      "targets": { "node": "current" },
      useBuiltIns: 'usage',
      corejs: '3',
    }],
  ],
}
