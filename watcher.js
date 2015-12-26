#!/usr/bin/env node
'use strict';

var chokidar = require('chokidar');

var log = console.log.bind(console);

module.exports = function() {
  let watcher = chokidar.watch('./**/*', {
    persistent: true,

    ignored: './build/**/*',
    ignoreInitial: false,
    followSymlinks: true,
    cwd: '.',

    usePolling: true,
    interval: 100,
    binaryInterval: 300,
    depth: 50,
    awaitWriteFinish: {
      stabilityThreshold: 1000,
      pollInterval: 100
    },

    ignorePermissionErrors: false,
    atomic: true
  });


  // Stop watching.
  process.on('SIGINT', () => {
    console.log('');
    console.log('Shutting down resurge');
    watcher.close();
    process.exit(0);
  });

  return watcher;
}
