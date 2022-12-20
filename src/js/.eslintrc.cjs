module.exports = {
    "extends": "standard",
    "parserOptions": {
        "ecmaVersion": 2022,
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