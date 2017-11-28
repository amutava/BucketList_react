# BucketList_react

###Steps

Initialize a node application.
Install react and react-dom.
Install webpack and webpack dev server.It bundle the code to a single js file. The webpack dev server helps run development server this gives us the benefits of live reload and hmr.
Install babel which will help converting es6 code to  es5 for browser to understand it.
configure babel in the package.json to transpile our code.
import webpack and define a entry point to the application.
add some loaders that will be used to bundle source files.
setup babel-loader for loading js/jsx files and used less-loader for loading less files.
to use less-loader we  install style-loader and css-loader which will directly append CSS to our index.html
we need to  tell webpack config where to output bundle.js.
To end our webpack configuration will be providing the options for our dev server.

###clarify on this
We also installed a babel plugin which can understand the new rest/spread operator syntax
