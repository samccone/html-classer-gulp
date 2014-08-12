var through     = require('through2');
var gutil       = require('gulp-util');
var classer     = require('html-classer');
var PluginError = gutil.PluginError;

module.exports = function(opts) {
  // creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, cb) {
    if (file.isBuffer()) {
      file.contents = new Buffer(
        classer(file.contents.toString(enc), opts), enc
      )
    }

    this.push(file);

    return cb();
  });

  return stream;
};
