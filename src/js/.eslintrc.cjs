module.exports = {
    "extends": "standard",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "overrides": [
        {
            "files": ["**/*.test.js"],
            "env": {
                "jest": true
            }
        }
    ]
}