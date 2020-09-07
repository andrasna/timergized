module.exports = {
  plugins: [
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
          'custom-media-queries': true,
          'nesting-rules': true,
          'custom-properties': false,
        },
      },
    ],
  ],
}