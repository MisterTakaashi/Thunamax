
var __cov_t5djzbxMt1f40oTknGN7ZQ = (Function('return this'))();
if (!__cov_t5djzbxMt1f40oTknGN7ZQ.__coverage__) { __cov_t5djzbxMt1f40oTknGN7ZQ.__coverage__ = {}; }
__cov_t5djzbxMt1f40oTknGN7ZQ = __cov_t5djzbxMt1f40oTknGN7ZQ.__coverage__;
if (!(__cov_t5djzbxMt1f40oTknGN7ZQ['backend\\models\\user.js'])) {
   __cov_t5djzbxMt1f40oTknGN7ZQ['backend\\models\\user.js'] = {"path":"backend\\models\\user.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":35}},"2":{"start":{"line":3,"column":0},"end":{"line":8,"column":3}},"3":{"start":{"line":10,"column":0},"end":{"line":10,"column":53}}},"branchMap":{}};
}
__cov_t5djzbxMt1f40oTknGN7ZQ = __cov_t5djzbxMt1f40oTknGN7ZQ['backend\\models\\user.js'];
__cov_t5djzbxMt1f40oTknGN7ZQ.s['1']++;var mongoose=require('mongoose');__cov_t5djzbxMt1f40oTknGN7ZQ.s['2']++;var userSchema=mongoose.Schema({lastname:String,firstname:String,wallet:Number,waiting_wallet:Number});__cov_t5djzbxMt1f40oTknGN7ZQ.s['3']++;module.exports=mongoose.model('Users',userSchema);
