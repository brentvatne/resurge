#!/usr/bin/env node
'use strict';

// Copy node_modules over, this sucks but babel doesn't support multiple
// sourceRoots right now :(
require('./setupFs')();

const processFile = require('./processFile');
const fs = require('fs');
const buildPath = `${process.cwd()}/.build`;

processFile('index.js', `${buildPath}/index.js`).then((result) => {
  const surge = require('./surge');
  let pathParts = process.cwd().split('/');
  let domain = 'resurge-' + pathParts[pathParts.length - 1] + '.surge.sh';

  surge({
    project: buildPath,
    domain: domain,
  });
});


