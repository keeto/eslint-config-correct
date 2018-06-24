module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true
  },
  'rules': {
    // Disable max length, as tests usually get long
    'max-len': 0,
    // Padded blocks make the tests look a little less clumped
    'padded-blocks': 0
  }
};
