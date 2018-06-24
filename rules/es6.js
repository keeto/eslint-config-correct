module.exports = {
  'env': {
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    // require parens in arrow function arguments
    'arrow-parens': 'warn',
    // require space before/after arrow function's arrow
    'arrow-spacing': 'off',
    // verify super() callings in constructors
    'constructor-super': 'error',
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 'off',
    // disallow modifying variables of class declarations
    'no-class-assign': 'off',
    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // disallow empty patterns
    'no-empty-pattern': 'error',
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',
    // disallow unnecessary await in returns
    'no-return-await': 'error',
    // require let or const instead of var
    'no-var': 'error',
    // require method and property shorthand syntax for object literals
    'object-shorthand': 'off',
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 'error',
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'off',
    // suggest using Reflect methods where applicable
    'prefer-reflect': 'off',
    // suggest using template strings instead of concatenation or joining
    'prefer-template': 'error',
    // disallow generator functions that do not have yield
    'require-yield': 'error',
    // disallow async functions which have no await expression
    'require-await': 'error'
    // disallow trailing commas in object literals
    //'comma-dangle': ['error', 'always-multiline']
  }
};
