'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackEvent = exports.trackUser = exports.trackPage = exports.initAnalytics = exports.default = undefined;

var _withAnalytics = require('./withAnalytics');

var _withAnalytics2 = _interopRequireDefault(_withAnalytics);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withAnalytics2.default;
exports.initAnalytics = _utils.initAnalytics;
exports.trackPage = _utils.trackPage;
exports.trackUser = _utils.trackUser;
exports.trackEvent = _utils.trackEvent;