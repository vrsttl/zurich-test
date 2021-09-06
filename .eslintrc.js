module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  ignorePatterns: ["src/react-app-env.d.ts"],
  rules: {
    "import/no-named-as-default": 0,
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/semi": ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    curly: ["error", "multi-line"],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": [1],
    "no-trailing-spaces": "error",
    "no-var": "error",
    "no-case-declarations": [0],
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    radix: "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
      },
    ],
    "spaced-comment": "error",
    "prettier/prettier": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "_", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/class-name-casing": [0],
    "@typescript-eslint/adjacent-overload-signatures": ["error"],
    "@typescript-eslint/ban-ts-ignore": [0],
    "@typescript-eslint/ban-types": ["error"],
    "@typescript-eslint/camelcase": [0],
    "@typescript-eslint/consistent-type-assertions": ["error"],
    "@typescript-eslint/interface-name-prefix": [0],
    "@typescript-eslint/no-array-constructor": ["error"],
    "@typescript-eslint/no-empty-function": ["error"],
    "@typescript-eslint/no-empty-interface": ["error"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/no-inferrable-types": ["error"],
    "@typescript-eslint/no-misused-new": ["error"],
    "@typescript-eslint/no-namespace": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-var-requires": ["error"],
    "@typescript-eslint/prefer-namespace-keyword": ["error"],
    "@typescript-eslint/triple-slash-reference": ["error"],
    "@typescript-eslint/explicit-function-return-type": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "react/jsx-key": [2],
    "react/jsx-no-comment-textnodes": [2],
    "react/jsx-no-duplicate-props": [2],
    "react/jsx-no-target-blank": [2],
    "react/jsx-uses-vars": [2],
    "react/no-children-prop": [2],
    "react/no-danger-with-children": [2],
    "react/no-deprecated": [2],
    "react/no-direct-mutation-state": [2],
    "react/no-string-refs": [2],
    "react/no-unescaped-entities": [2],
    "react/no-unknown-property": [2],
    "react/no-unused-prop-types": [1],
    "react/prop-types": [0],
    "react/react-in-jsx-scope": [2],
    "react/require-render-return": [2],
    "react/display-name": [0],
    "react/jsx-no-bind": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "array-callback-return": "warn",
    "no-sequences": "warn",
    "no-duplicate-case": "warn",
    "no-loop-func": "warn",
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "@*/**",
            group: "internal",
          },
        ],
        "newlines-between": "always-and-inside-groups",
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
      },
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
