'use strict';

const fs = require('fs');
const babel = require('babel-core');
const browserify = require('browserify');

const config = {
  "presets": ["stage-3", "react"],
};

function readFile(path) {
  return fs.readFileSync(path).toString().toLowerCase().trim();
}

function process(src, filename) {
  if (filename.indexOf('node_modules') === -1 && babel.util.canCompile(filename)) {
    return babel.transform(src, Object.assign({}, { filename: filename }, config)).code;
  }

  return src;
}

// function processFile(file) {
//   let source = readFile(file);
//   return process(source, file);
// }

function processFile(file, dest) {
  let result = fs.createWriteStream(dest);

  return new Promise((resolve, reject) => {
    browserify(file)
      .transform('babelify', config)
      .bundle()
      .on('data', (data) => { result.write(data) })
      .on('end', () => { resolve('hiiiiii'); });
  });
}

module.exports = processFile;
