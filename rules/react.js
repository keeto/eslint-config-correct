module.exports = {
  'plugins': [
    'react'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    // Prevent missing displayName in a React component definition
    'react/display-name': "off",
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': "error",
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': "off",
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': "off",
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': "error",
    // Enforce quote style for JSX attributes
    'react/jsx-quotes': "off",
    // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-prop-types': "off",
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': "off",
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': "error",
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': "error",
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': "error",
    // Prevent usage of dangerous JSX properties
    'react/no-danger': "off",
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': ["error"],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': "error",
    // Prevent multiple component definition per file
    'react/no-multi-comp': ["error", { 'ignoreStateless': true }],
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': "error",
    // Prevent missing props validation in a React component definition
    'react/prop-types': "error",
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': "error",
    // Restrict file extensions that may be required
    'react/require-extension': "off",
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': "error",
    // Enforce component methods order
    'react/sort-comp': ["error", {
      'order': [
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }]
  }
};
