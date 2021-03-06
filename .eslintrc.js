module.exports = {
    env: {
        browser: true,
        commonjs: true,
    },
    plugins: ["es5"],
    extends: ["plugin:es5/no-es2016", "plugin:es5/no-es2015"],
    extends: [],
    parserOptions: {
        ecmaVersion: 5,
    },
    rules: {
        "es5/no-es6-methods": "error",
        "es5/no-es6-static-methods": "error",
        "es5/no-arrow-functions": "error",
        "es5/no-binary-and-octal-literals": "error",
        "es5/no-block-scoping": "error",
        "es5/no-classes": "error",
        "es5/no-computed-properties": "error",
        "es5/no-default-parameters": "error",
        "es5/no-destructuring": "error",
        "es5/no-exponentiation-operator": "error",
        "es5/no-for-of": "error",
        "es5/no-generators": "error",
        "es5/no-modules": "error",
        "es5/no-object-super": "error",
        "es5/no-rest-parameters": "error",
        "es5/no-shorthand-properties": "error",
        "es5/no-spread": "error",
        "es5/no-template-literals": "error",
        "es5/no-typeof-symbol": "error",
        "es5/no-unicode-code-point-escape": "error",
        "es5/no-unicode-regex": "error",
    },
};
