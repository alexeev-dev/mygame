// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'js/app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'css/app.css'}
};

exports.plugins = {
  babel: {
    presets: ['env', 'react'],
    plugins: ['transform-object-rest-spread']
  },
  brunchTypescript: {
    'typeRoots': [
      'node_modules/@types'
    ]
  },
  sass: {mode: 'native'}
};

exports.watcher = {
  awaitWriteFinish: true,
  //usePolling: true //less perfomance & speed effective, but more reliable way
};