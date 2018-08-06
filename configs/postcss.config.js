var variables = require('./postcss.variables')

module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-simple-vars': {
      variables
    }
  }
}