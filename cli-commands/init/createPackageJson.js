const {writeFile} = require('../../util');
const path = require('path');

module.exports = async function (name, filePath) {
  const template = `
    {
        "name": "${name}",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "types": "global.d.ts",
        "scripts": {
          "test": "echo \\"Error: no test specified\\" && exit 1",
          "build": "webpack --config webpack.prod.js",
          "dev": "webpack-dev-server --open --config webpack.dev.js",
          "fix": "npx eslint ./ --fix --ext .js,.jsx,.ts,.tsx",
          "format": "npx prettier --write ."
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
          "@babel/core": "^7.11.4",
          "@babel/plugin-proposal-class-properties": "^7.10.4",
          "@babel/preset-env": "^7.11.0",
          "@babel/preset-react": "^7.10.4",
          "@hot-loader/react-dom": "^16.13.0",
          "@types/react": "^16.9.46",
          "@types/react-dom": "^16.9.8",
          "@typescript-eslint/eslint-plugin": "^3.9.1",
          "@typescript-eslint/parser": "^3.9.1",
          "autoprefixer": "^9.8.6",
          "babel-loader": "^8.1.0",
          "clean-webpack-plugin": "^3.0.0",
          "css-loader": "^3.6.0",
          "eslint": "^6.8.0",
          "eslint-config-prettier": "^6.11.0",
          "eslint-import-resolver-webpack": "^0.12.2",
          "eslint-plugin-import": "^2.22.0",
          "eslint-plugin-jsx-a11y": "^6.3.1",
          "eslint-plugin-prettier": "^3.1.4",
          "eslint-plugin-react": "^7.20.6",
          "eslint-plugin-react-hooks": "^1.7.0",
          "file-loader": "^4.3.0",
          "html-loader": "^0.5.5",
          "html-webpack-plugin": "^3.2.0",
          "less-loader": "^6.2.0",
          "mini-css-extract-plugin": "^0.8.2",
          "postcss-loader": "^3.0.0",
          "prettier": "2.0.5",
          "prettier-eslint": "^11.0.0",
          "prop-types": "^15.7.2",
          "react-hot-loader": "^4.12.21",
          "source-map-loader": "^1.0.2",
          "style-loader": "^0.23.1",
          "ts-loader": "^7.0.5",
          "typescript": "^3.9.7",
          "url-loader": "^2.3.0",
          "webpack": "^4.44.1",
          "webpack-cli": "^3.3.12",
          "webpack-dev-server": "^3.11.0",
          "webpack-merge": "^4.2.2"
        },
        "dependencies": {
          "core-js": "^3.6.5",
          "react": "^16.13.1",
          "react-dom": "^16.13.1",
          "regenerator-runtime": "^0.13.7"
        },
        "browserslist": [
          "defaults"
        ]
      }      
    `;

    const res = await writeFile(path.join(filePath, 'package.json'), template);

    return res;
}