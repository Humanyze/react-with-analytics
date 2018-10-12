'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackEvent = exports.trackUser = exports.trackPage = exports.initAnalytics = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initAnalytics = exports.initAnalytics = function initAnalytics(trackingId) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _reactGa2.default.initialize(trackingId, opts);
};

var trackPage = exports.trackPage = function trackPage(page) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var trackerNames = arguments[2];
  var title = arguments[3];

  _reactGa2.default.set(_extends({ page: page }, opts));
  _reactGa2.default.pageview(page, trackerNames, title);
};

var trackUser = exports.trackUser = function trackUser(userId) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _reactGa2.default.set(_extends({ userId: userId }, opts));
};

var trackEvent = exports.trackEvent = function trackEvent(category, action, label) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return _reactGa2.default.event(_extends({ category: category, action: action, label: label }, opts));
};