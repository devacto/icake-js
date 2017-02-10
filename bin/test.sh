#!/bin/bash

# JSCS
./node_modules/jscs/bin/jscs 1-text2obj/index.js

# JSHint
./node_modules/jshint/bin/jshint 1-text2obj/index.js

# Unit test
echo 'Running unit tests'
./node_modules/mocha/bin/mocha 3-mocha/currying.js --compilers js:babel-register