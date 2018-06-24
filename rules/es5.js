module.exports = {
  'env': {
    'browser': true,
    'node': true,
  },
  'rules': {
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 'off',
    // Ensure array method callbacks return a value.
    'array-callback-return': 'error',
    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': ['off', 11],
    // require return statements to either always or never specify values
    'consistent-return': 'error',
    // specify curly brace conventions for all control statements
    'curly': ['error', 'multi-line'],
    // require default case in switch statements
    'default-case': 'error',
    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { 'allowKeywords': true}],
    // enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],
    // require the use of === and !==
    'eqeqeq': 'error',
    // ensure for-loop conditions are sane
    'for-direction': 'error',
    // ensure getters have a return value
    'getter-return': 'error',
    // make sure for-in loops have an if statement
    'guard-for-in': 'error',
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',
    // disallow else after a return in an if
    'no-else-return': 'error',
    // disallow use of labels for anything other then loops and switches
    'no-labels': 'error',
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',
    // disallow use of eval()
    'no-eval': 'error',
    // disallow adding to native types
    'no-extend-native': 'error',
    // disallow unnecessary function binding
    'no-extra-bind': 'error',
    // disallow fallthrough of case statements
    'no-fallthrough': 'error',
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 'off',
    // disallow use of eval()-like methods
    'no-implied-eval': 'error',
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    // disallow usage of __iterator__ property
    'no-iterator': 'error',
    // disallow use of labeled statements
    'no-labels': 'error',
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',
    // disallow creation of functions within loops
    'no-loop-func': 'error',
    // disallow use of multiple spaces
    'no-multi-spaces': 'error',
    // disallow use of multiline strings
    'no-multi-str': 'error',
    // disallow reassignments of native objects
    'no-native-reassign': 'error',
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',
    // disallow use of new operator for Function object
    'no-new-func': 'error',
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 'error',
    // disallow use of (old style) octal literals
    'no-octal': 'error',
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \'error'51';
    'no-octal-escape': 'error',
    // disallow reassignment of function parameters
    'no-param-reassign': 'error',
    // disallow use of process.env
    'no-process-env': 'off',
    // disallow usage of __proto__ property
    'no-proto': 'error',
    // disallow declaring the same variable more then once
    'no-redeclare': 'error',
    // disallow use of assignment in return statement
    'no-return-assign': 'error',
    // disallow use of `javascript:` urls.
    'no-script-url': 'error',
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',
    // disallow use of comma operator
    'no-sequences': 'error',
    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'error',
    // disallow usage of expressions in statement position
    'no-unused-expressions': 'error',
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',
    // disallow use of void operator
    'no-void': 'off',
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['off', { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
    // disallow use of the with statement
    'no-with': 'error',
    // require use of the second argument for parseInt()
    'radix': 'error',
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'off',
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': ['error', 'any'],
    // require or disallow Yoda conditions
    'yoda': 'error',
    // disallow trailing commas in object literals
    'comma-dangle': ['error', 'never'],
    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],
    // disallow use of console
    'no-console': 'warn',
    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',
    // disallow control characters in regular expressions
    'no-control-regex': 'error',
    // disallow use of debugger
    'no-debugger': 'warn',
    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',
    // disallow a duplicate case label.
    'no-duplicate-case': 'error',
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // disallow empty statements
    'no-empty': 'error',
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'off',
    // disallow unnecessary parentheses
    'no-extra-parens': ['error', 'functions'],
    // disallow unnecessary semicolons
    'no-extra-semi': 'error',
    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',
    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 'error',
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',
    // disallow sparse arrays
    'no-sparse-arrays': 'error',
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',
    // ensure negations are correct
    'no-unsafe-negation': 'error',
    // disallow comparisons with the value NaN
    'use-isnan': 'error',
    // ensure JSDoc comments are valid
    'valid-jsdoc': ['error', {
      // Consistent tagging
      'prefer': {
        'arg': 'param',
        'argument': 'param',
        'constant': 'const',
        'returns': 'return'
      },

      // Primitives lowercase, Objects uppercase
      'preferType': {
        'object': 'Object',
        'array': 'Array',
        'String': 'string',
        'Boolean': 'boolean',
        'Number': 'number'
      },

      // Various flags
      'requireReturn': false,
      'requireReturnType': true,
      'requireParamDescription': false,
      'requireReturnDescription': false
    }],
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': 'error',
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 'off',
    // Ensure promises reject with errors.
    'prefer-promise-reject-errors': 'error',
    // enforce return after a callback
    'callback-return': 'off',
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],
    // disallow use of new operator with the require function
    'no-new-require': 'off',
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'off',
    // disallow process.exit()
    'no-process-exit': 'off',
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',
    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',
    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],
    // specify the maximum length of a line in your program
    'max-len': ['error', 80, 4],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],
    // disallow use of bitwise operators
    'no-bitwise': 'off',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',
     // controls location of Use Strict Directives
    'strict': ['error', 'safe'],
    // enforce spacing inside array brackets
    'array-bracket-spacing': 'off',
    // enforce one true brace style
    'brace-style': ['error', '1tbs', {'allowSingleLine': true }],
    // require camel case names
    'camelcase': ['error', {'properties': 'never'}],
    // enforce spacing before and after comma
    'comma-spacing': ['error', {'before': false, 'after': true}],
    // enforce one true comma style
    'comma-style': ['error', 'last'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': 'off',
    // enforces consistent naming when capturing the current execution context
    'consistent-this': ['error', '_this'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'error',
    // require function expressions to have a name
    'func-names': 'off',
    // enforces use of function declarations or expressions
    'func-style': 'off',
    // enforce consistent line breaks inside function parentheses 
    'function-paren-newline': ['error', 'multiline'],
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 'off',
    // this option sets a specific tab width for your code
    'indent': ['error', 2, {'SwitchCase': 1}],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 'error',
    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
    // enforces empty lines around comments
    'lines-around-comment': 'off',
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 'off',
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',
    // enforce or disallow newlines between operands of ternary expressions
    'multiline-ternary': ['error', 'always-multiline'],
    // require a capital letter for constructors
    'new-cap': ['error', {'newIsCap': true}],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',
    // disallow use of the Array constructor
    'no-array-constructor': 'off',
    // disallow use of the continue statement
    'no-continue': 'off',
    // disallow comments inline after code
    'no-inline-comments': 'off',
    // disallow if as the only statement in an else block
    'no-lonely-if': 'error',
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', {'max': 2, 'maxEOF': 1}],
    // disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // disallow use of the Object constructor
    'no-new-object': 'error',
    // disallow space between function identifier and application
    'no-spaced-func': 'error',
    // disallow the use of ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 'off',
    // require or disallow padding inside curly braces
    'object-curly-spacing': 'off',
    // allow just one var statement per function
    'one-var': ['error', 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 'off',
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',
    // enforce padding within blocks
    'padded-blocks': ['error', {'blocks': 'never', 'switches': 'never', 'classes': 'always'}],
    // require quotes around object literal property names
    'quote-props': ['error', 'consistent'],
    // specify whether double or single quotes should be used
    'quotes': ['error', 'single', 'avoid-escape'],
    // require identifiers to match the provided regular expression
    'id-match': 'off',
    // enforce spacing before and after semicolons
    'semi-spacing': ['error', {'before': false, 'after': true}],
    // require or disallow use of semicolons instead of ASI
    'semi': ['error', 'always'],
    // sort variables within the same declaration block
    'sort-vars': 'off',
    // require a space before and after certain keywords
    'keyword-spacing': ['error', {'before': true, 'after': true, 'overrides': {}}],
    // require or disallow space before blocks
    'space-before-blocks': 'error',
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': 'off',
    // require spaces around operators
    'space-infix-ops': 'error',
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 'off',
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']           // space here to support sprockets directives
    }],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',
    // disallow lexical declarations (let, const, function and class) in case/default clauses
    'no-case-declarations': 'error',
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',
    // disallow deletion of variables
    'no-delete-var': 'error',
    // disallow labels that share a name with a variable
    'no-label-var': 'off',
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',
    // disallow use of undefined when initializing variables
    'no-undef-init': 'off',
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',
    // disallow use of undefined variable
    'no-undefined': 'off',
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', {'vars': 'local', 'args': 'after-used'}],
    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { 'functions': false }],
  }
};
