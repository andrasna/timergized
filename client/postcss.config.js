module.exports = {
  plugins: [
    'postcss-pow',
    'postcss-baseline-grid-overlay',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
          'nesting-rules': true,
        },
      },
    ],
  ],
}