const { injectBabelPlugin } = require('react-app-rewired');

function rewireImport(config, env, importBabelOptions = {}, name=undefined) {
  if (name) {
    config = injectBabelPlugin(['import', importBabelOptions, name], config);
  } else {
    config = injectBabelPlugin(['import', importBabelOptions], config);
  }

  return config;
}

module.exports = rewireImport;
