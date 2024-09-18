// module.exports = {
//   presets: [
//     '@babel/preset-env',
//     "@babel/preset-react"
//   ],
// };

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['> 1%', 'last 2 versions', 'not dead']
      }
    }],
    ["@babel/preset-react", {
      runtime: 'automatic'
    }]
  ]
};