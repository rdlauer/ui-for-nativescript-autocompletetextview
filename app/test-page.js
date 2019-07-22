var frameModule = require('ui/frame');

exports.onNavBtnTap = function() {
  var topmost = frameModule.topmost();
  topmost.goBack();
};
