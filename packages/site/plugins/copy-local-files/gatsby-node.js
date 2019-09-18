const path = require('path');
const fsExtra = require('fs-extra');

exports.onPostBootstrap = (_, pluginOptions) => {
  const { source, destination } = pluginOptions;

  const sourceNormalized = path.normalize(source);
  const newPath = path.join(process.cwd(), 'public', destination);

  fsExtra.copy(sourceNormalized, newPath, err => {
    if (err) {
      console.error('Error copying file', err);
    }
  });
};
