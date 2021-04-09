# reactSamples

## install yarn, just another package manager like npm
npm i -g yarn

## install everything in packages.json
yarn install

## now use the scripts defined in packages.json to run webpack dev server which monitors for changes in files
## and automatically changes the served content 
yarn run dev-server

## Check package.json for all the packages includes

## Check webpack.config.js for the entry, output and rules for building our final js file with all modules

## Also because we include babel-loader in the webpack.config.js rules, we added a .bablerc file which specifies
## that babel should add the env and react presets (like babel bundles) to allow it to compile ES6 and react into
## ES5 js

## Also note that we've included a 'devtool' entry in webpack.configs.js, this provides a source map that help the
## browser figure out where the error was in the source file rather than just the compiled javascript file

## Also note we've included configuration for the devServer in webpack.configs.js, this doesn't create the bundle.js file on disk, it creates it and updates it in memory while serving. To create the bundle.js file on disk run ...
yarn run build
