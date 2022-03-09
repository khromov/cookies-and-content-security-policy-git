const path = require('path');

module.exports = {
  entry: [
    './js/cookies-and-content-security-policy.js',
    './scss/cookies-and-content-security-policy.scss',
    './scss/cookies-and-content-security-policy-admin.scss'
  ],
  output: {
    filename: './js/cookies-and-content-security-policy.min.js',
    path: path.resolve(__dirname),
  },
  target: ['web', 'es5'],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [],
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'file-loader',
                    options: { outputPath: 'css/', name: '[name].min.css' }
                },
                'sass-loader'
            ]
        }
    ]
  }
};