'use strict';

const fs = require('fs');
const browserify = require('browserify');

const config = {
  "presets": ["stage-3", "react"],
};

function processFile(file, dest) {
  let result = fs.createWriteStream(dest);

  return new Promise((resolve, reject) => {
    browserify(file)
      .transform('babelify', config)
      .bundle()
      .on('error', (error) => { console.log(error.message) })
      .on('data', (data) => { result.write(data) })
      .on('end', () => { resolve('hiiiiii'); });
  });
}

module.exports = processFile;
