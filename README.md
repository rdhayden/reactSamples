# reactSamples

# if you need live-server
npm i -g live-server
# to run in, assuming you're in a folder which has a public folder with the files you want to server
live-server public
# install babel to compile react to javascript
npm i -g babel-cli
# install yarn, just another package manager like npm
npm i -g yarn
# in the project directory initialise the project, which creates package.json which captures all dependencies
yarn init
# yarn or npm will also install dependencies of anything installed in a node_modules directory
# yarn install, will install all dependencies in the local package.json and everything in node_modules

# add presets to babel which install all the extra bits babel need to work with react and to use newer features of js
yarn add babel-present-react babel-preset-env
# to compile src to vanilla javascript using the react and env presets and keep watching and automatically
# compile when changes are saved (with the --watch argument)...
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

