#!/usr/bin/env node
'use strict';

const argv = require('yargs').argv;
const surge = require('./surge');

if (argv.list) {
  surge.list();
} else {
  // Copy node_modules over, this sucks but babel doesn't support multiple
  // sourceRoots right now :(
  require('./setupFs')();

  const main = 'index.js';
  const processFile = require('./processFile');
  const fs = require('fs-extra');
  const buildPath = `${process.cwd()}/.build`;

  try {
    fs.statSync(main);
  } catch (err) {
    console.error(`Missing ${main} -- create it and have it export your root React component`);
    process.exit(1);
  }

  processFile('./.build/__app.js', `${buildPath}/${main}`).then((result) => {
    let pathParts = process.cwd().split('/');
    let domain = 'resurge-' + pathParts[pathParts.length - 1] + '.surge.sh';

    surge.publish({
      project: buildPath,
      domain: domain,
    });
  });
}
