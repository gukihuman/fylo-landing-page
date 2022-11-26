# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/final%20result.png)

### Links

- Solution URL: [click here](https://github.com/ivan-f-sokolov/fylo-landing-page)
- Live Site URL: [click here](https://ivan-f-sokolov.github.io/fylo-landing-page/)

## My process

### Built with

- JavaScript
- Webpack
- SASS
- Pug

### What I learned

How to make a component on the example of a custom form validation. You can select a form with an input field and configure the settings. A confirmation message will appear under the input.

<img src="./design/validation-example.png" alt="drawing" style="width:280px;"/>

```js
import { CustomValidation } from "./modules/custom-validation.mjs";

const form = document.querySelector("form");

class customForm extends CustomValidation {
  constructor(form) {
    super(form);
    this.text = "Submitted successfully!";
    this.color = "white";
    this.textError = "Please check your email";
    this.colorError = "red";
  }
}

let formValidation = new customForm(form);

formValidation.render();
```

\
I also learned how to set up the Webpack with Pug and Sass. Both the development with HMR and the clean production with fully compiled .css and .html files. I used separate Webpack configuration files:

```
webpack.common.js
webpack.prod.js
webpack.dev.js
```

\
webpack.common.js

```js
const path = require("path");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./style.css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      inject: "body",
    }),
    new HtmlWebpackPugPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
```

\
webpack.prod.js

```js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/script.js",
});
```

\
For HMR to work with Pug during development, the .pug file must be included in the additional entry .js file (dev.js in my case).

\
dev.js

```js
const index = require("./index.pug");
```

\
webpack.dev.js

```js
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  entry: ["./src/script.js", "./src/dev.js"],
  devServer: {
    port: "8080",
    static: path.resolve(__dirname, "public"),
    hot: true,
  },
});
```

\
Here is the plugins that I used:

```json
  "devDependencies": {
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "html-webpack-pug-plugin": "^4.0.0",
    "mini-css-extract-plugin": "^2.6.0",
    "pug": "^2.0.4",
    "pug-loader": "^2.4.0",
    "sass": "^1.50.1",
    "sass-loader": "^12.6.0",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.8.1"
  }
```

### Continued development

I would like to speed up the pace of work by using frameworks like Vue.js.
\
It would also be nice to train the grid layout in the future.

### Useful resources

- [css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) flexbox guide
- [MDN Web Docs](https://developer.mozilla.org/en-US/) has a lot of detailed info

## Author

- GitHub - [Ivan F. Sokolov](https://github.com/ivan-f-sokolov)

## Acknowledgments

Thanks to the youtube channel FlorinPop, I used [this video guide](https://www.youtube.com/watch?v=a9-Ro9rc7E4) for the challenge.
