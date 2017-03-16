
var __cov_dLZxNgC6yQPxIyBYIkCFMQ = (Function('return this'))();
if (!__cov_dLZxNgC6yQPxIyBYIkCFMQ.__coverage__) { __cov_dLZxNgC6yQPxIyBYIkCFMQ.__coverage__ = {}; }
__cov_dLZxNgC6yQPxIyBYIkCFMQ = __cov_dLZxNgC6yQPxIyBYIkCFMQ.__coverage__;
if (!(__cov_dLZxNgC6yQPxIyBYIkCFMQ['backend\\user.js'])) {
   __cov_dLZxNgC6yQPxIyBYIkCFMQ['backend\\user.js'] = {"path":"backend\\user.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":25},"end":{"line":3,"column":56}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":39}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":4,"column":2},"end":{"line":4,"column":73}}},"branchMap":{}};
}
__cov_dLZxNgC6yQPxIyBYIkCFMQ = __cov_dLZxNgC6yQPxIyBYIkCFMQ['backend\\user.js'];
__cov_dLZxNgC6yQPxIyBYIkCFMQ.s['1']++;var User=require('./models/user.js');__cov_dLZxNgC6yQPxIyBYIkCFMQ.s['2']++;module.exports.getUser=function(firstname,lastname){__cov_dLZxNgC6yQPxIyBYIkCFMQ.f['1']++;__cov_dLZxNgC6yQPxIyBYIkCFMQ.s['3']++;return User.findOne({lastname:lastname,firstname:firstname}).exec();};
