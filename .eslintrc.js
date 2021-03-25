module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        indent: [ 'error', 2 ],
        semi: [ 'error', 'always' ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "computed-property-spacing": [ "error", "always" ],
        "comma-spacing": [ "error", { "before": false, "after": true } ],
        "array-bracket-spacing": [ "error", "always" ],
        "object-curly-spacing": [ "error", "always" ],
        "space-in-parens": [ "error", "always" ],
        "arrow-spacing": [ "error", { "before": true, "after": true } ],
        "key-spacing": [ "error", { "mode": "strict" } ],
        "space-before-function-paren": [ "error", { "anonymous": "always", "named": "never", "asyncArrow": "always" } ],
        "eqeqeq": [ "error", "always" ],
        "space-infix-ops": "error"
    }
}
