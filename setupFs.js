'use strict';

const fs = require('fs-extra');

module.exports = function() {
  const rootPath = __dirname;
  const rootNodeModulesPath = `${rootPath}/node_modules`;
  const projectPath = process.cwd();
  const projectNodeModulesPath = `${projectPath}/node_modules`;

  const whitelist = [
    'babel-core',
    'babel-preset-react',
    'babel-preset-stage-3',
    'react',
    'react-dom',
    'babelify',
    'browserify',
  ];

  fs.mkdirpSync(projectNodeModulesPath);
  whitelist.forEach((module) => {
    let source = `${rootNodeModulesPath}/${module}`;
    let destination = `${projectNodeModulesPath}/${module}`;

    if (!fs.existsSync(destination)) {
      try {
        fs.copySync(source, destination);
      } catch (err) {
        console.log(err.message);
      }
    };
  });


  const projectBuildPath = `${projectPath}/.build`;
  fs.removeSync(projectBuildPath);
  fs.mkdirpSync(projectBuildPath);

  const indexTemplateSource = `${rootPath}/.build/index.html`;
  const indexTemplateDestination = `${projectPath}/.build/index.html`;
  try {
    fs.copySync(indexTemplateSource, indexTemplateDestination);
  } catch(err) {
    console.log(err.message);
  }
}
