// ==UserScript==
// @name         Bypass-Shortlink
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  https://github.com/ngocbaby3001
// @author       Thidz
// @match        https://yeumoney.com/*
// @run-at       document-end
// ==/UserScript==
var a0_0x5af1cb = function () {
  var _0x5671d1 = true;
  return function (_0x4f9fd1, _0x4564f2) {
    var _0x1a8678 = _0x5671d1 ? function () {
      if (_0x4564f2) {
        var _0x26f430 = _0x4564f2.apply(_0x4f9fd1, arguments);
        _0x4564f2 = null;
        return _0x26f430;
      }
    } : function () {};
    _0x5671d1 = false;
    return _0x1a8678;
  };
}();
var a0_0x10df95 = a0_0x5af1cb(this, function () {
  var _0x13d6c3 = function () {
    var _0x373b0f;
    try {
      _0x373b0f = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x419dc4) {
      _0x373b0f = window;
    }
    return _0x373b0f;
  };
  var _0x135d42 = _0x13d6c3();
  var _0x498edd = _0x135d42.console = _0x135d42.console || {};
  var _0x52448f = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (var _0x5033f9 = 0; _0x5033f9 < _0x52448f.length; _0x5033f9++) {
    var _0x1e3a8e = a0_0x5af1cb.constructor.prototype.bind(a0_0x5af1cb);
    var _0x1a6333 = _0x52448f[_0x5033f9];
    var _0x46dda9 = _0x498edd[_0x1a6333] || _0x1e3a8e;
    _0x1e3a8e.__proto__ = a0_0x5af1cb.bind(a0_0x5af1cb);
    _0x1e3a8e.toString = _0x46dda9.toString.bind(_0x46dda9);
    _0x498edd[_0x1a6333] = _0x1e3a8e;
  }
});
(function () {
  var _0x658e38 = function () {
    var _0x139bec;
    try {
      _0x139bec = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1b16c9) {
      _0x139bec = window;
    }
    return _0x139bec;
  };
  var _0x5a64b1 = _0x658e38();
  _0x5a64b1.setInterval(a0_0x2c3d6b, 2000);
})();
a0_0x10df95();
(() => {
  'use strict';

  var _0xbf8368 = {
    0x38: (_0x373f22, _0x51562c, _0x5318a3) => {
      _0x373f22.exports = function (_0x7ea9c3) {
        var _0x37fded = _0x5318a3.nc;
        if (_0x37fded) {
          _0x7ea9c3.setAttribute("nonce", _0x37fded);
        }
      };
    },
    0x48: _0x4a4c76 => {
      var _0x98a42d = [];
      function _0x399e4e(_0x84f3e) {
        var _0x532577 = -1;
        for (var _0x20518d = 0; _0x20518d < _0x98a42d.length; _0x20518d++) {
          if (_0x98a42d[_0x20518d].identifier === _0x84f3e) {
            _0x532577 = _0x20518d;
            break;
          }
        }
        return _0x532577;
      }
      function _0x50aec2(_0x8fc210, _0x104af8) {
        var _0x5e6d14 = {};
        var _0x172e12 = [];
        for (var _0x450c6c = 0; _0x450c6c < _0x8fc210.length; _0x450c6c++) {
          var _0x381055 = _0x8fc210[_0x450c6c];
          var _0x1f35a6 = _0x104af8.base ? _0x381055[0] + _0x104af8.base : _0x381055[0];
          var _0xf5d3f = _0x5e6d14[_0x1f35a6] || 0;
          var _0x322a32 = ''.concat(_0x1f35a6, " ").concat(_0xf5d3f);
          _0x5e6d14[_0x1f35a6] = _0xf5d3f + 1;
          var _0x288d68 = {
            "css": _0x381055[1],
            "media": _0x381055[2],
            sourceMap: _0x381055[3],
            supports: _0x381055[4],
            "layer": _0x381055[5]
          };
          var _0x1968db = _0x399e4e(_0x322a32);
          var _0x314d4a = _0x288d68;
          if (-1 !== _0x1968db) {
            _0x98a42d[_0x1968db].references++;
            _0x98a42d[_0x1968db].updater(_0x314d4a);
          } else {
            var _0x7e6ade = _0x3d4190(_0x314d4a, _0x104af8);
            var _0x1b148b = {
              identifier: _0x322a32,
              updater: _0x7e6ade,
              references: 0x1
            };
            _0x104af8.byIndex = _0x450c6c;
            _0x98a42d.splice(_0x450c6c, 0, _0x1b148b);
          }
          _0x172e12.push(_0x322a32);
        }
        return _0x172e12;
      }
      function _0x3d4190(_0x5b1d98, _0x3b4168) {
        var _0x5159d7 = _0x3b4168.domAPI(_0x3b4168);
        _0x5159d7.update(_0x5b1d98);
        return function (_0x5a335f) {
          if (_0x5a335f) {
            if (_0x5a335f.css === _0x5b1d98.css && _0x5a335f.media === _0x5b1d98.media && _0x5a335f.sourceMap === _0x5b1d98.sourceMap && _0x5a335f.supports === _0x5b1d98.supports && _0x5a335f.layer === _0x5b1d98.layer) {
              return;
            }
            _0x5159d7.update(_0x5b1d98 = _0x5a335f);
          } else {
            _0x5159d7.remove();
          }
        };
      }
      _0x4a4c76.exports = function (_0x65368e, _0x34a206) {
        var _0x66acbf = _0x50aec2(_0x65368e = _0x65368e || [], _0x34a206 = _0x34a206 || {});
        return function (_0x532537) {
          _0x532537 = _0x532537 || [];
          for (var _0x30e767 = 0; _0x30e767 < _0x66acbf.length; _0x30e767++) {
            var _0x5a6815 = _0x399e4e(_0x66acbf[_0x30e767]);
            _0x98a42d[_0x5a6815].references--;
          }
          var _0x45a3cb = _0x50aec2(_0x532537, _0x34a206);
          for (var _0x4cd706 = 0; _0x4cd706 < _0x66acbf.length; _0x4cd706++) {
            var _0x2ec454 = _0x399e4e(_0x66acbf[_0x4cd706]);
            if (0 === _0x98a42d[_0x2ec454].references) {
              _0x98a42d[_0x2ec454].updater();
              _0x98a42d.splice(_0x2ec454, 1);
            }
          }
          _0x66acbf = _0x45a3cb;
        };
      };
    },
    0x71: _0x478861 => {
      _0x478861.exports = function (_0x123ffd, _0x3b0968) {
        if (_0x3b0968.styleSheet) {
          _0x3b0968.styleSheet.cssText = _0x123ffd;
        } else {
          for (; _0x3b0968.firstChild;) {
            _0x3b0968.removeChild(_0x3b0968.firstChild);
          }
          _0x3b0968.appendChild(document.createTextNode(_0x123ffd));
        }
      };
    },
    0x9c: (_0x4ef134, _0xc4dc34, _0x18bf99) => {
      var _0x386b0b = {
        A: () => _0x10c5ab
      };
      _0x18bf99.d(_0xc4dc34, _0x386b0b);
      var _0x1da533 = _0x18bf99(601);
      var _0xfdec9f = _0x18bf99.n(_0x1da533);
      var _0x40a6d1 = _0x18bf99(314);
      var _0x10c5ab = _0x18bf99.n(_0x40a6d1)()(_0xfdec9f());
      _0x10c5ab.push([_0x4ef134.id, ":root {\n    --yma-primary-color: #4CAF50;\n    --yma-primary-light: #81C784;\n    --yma-primary-dark: #388E3C;\n    --yma-background: rgba(255, 255, 255, 0.98);\n    --yma-text-color: #2c3e50;\n    --yma-border-radius: 16px;\n    --yma-shadow: 0 8px 32px rgba(76, 175, 80, 0.15);\n    --yma-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.yma-floating-card {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 380px;\n    background: var(--yma-background);\n    border-radius: var(--yma-border-radius);\n    box-shadow: var(--yma-shadow);\n    padding: 24px;\n    font-family: 'Roboto', sans-serif;\n    transform: translateY(0);\n    transition: var(--yma-transition);\n    backdrop-filter: blur(10px);\n    border: 1px solid rgba(76, 175, 80, 0.1);\n    z-index: 999999;\n}\n\n.yma-floating-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 15px 40px rgba(76, 175, 80, 0.2);\n}\n\n.yma-card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n}\n\n.yma-header-left {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n}\n\n.yma-header-left i {\n    color: var(--yma-primary-color);\n    font-size: 22px;\n}\n\n.yma-card-title {\n    font-size: 18px;\n    font-weight: 600;\n    color: var(--yma-text-color);\n    letter-spacing: 0.5px;\n}\n\n.yma-minimize-btn {\n    background: rgba(76, 175, 80, 0.1);\n    border: none;\n    cursor: pointer;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: var(--yma-transition);\n    color: var(--yma-primary-color);\n}\n\n.yma-minimize-btn:hover {\n    background: rgba(76, 175, 80, 0.2);\n    transform: scale(1.05);\n}\n\n.yma-input-group {\n    position: relative;\n    margin-bottom: 24px;\n}\n\n.yma-input-group i {\n    position: absolute;\n    left: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: var(--yma-primary-color);\n    font-size: 16px;\n}\n\n.yma-url-input {\n    width: 100%;\n    padding: 14px 16px 14px 48px;\n    border: 2px solid rgba(76, 175, 80, 0.2);\n    border-radius: 12px;\n    font-size: 15px;\n    transition: var(--yma-transition);\n    background: rgba(255, 255, 255, 0.9);\n}\n\n.yma-url-input:focus {\n    border-color: var(--yma-primary-color);\n    outline: none;\n    box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.1);\n}\n\n.yma-checkbox-group {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin: 24px 0;\n}\n\n.yma-checkbox-wrapper {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n    padding: 10px;\n    border-radius: 10px;\n    transition: var(--yma-transition);\n    background: rgba(76, 175, 80, 0.05);\n}\n\n.yma-checkbox-wrapper:hover {\n    background: rgba(76, 175, 80, 0.1);\n    transform: translateX(4px);\n}\n\n.yma-checkbox-wrapper i {\n    color: var(--yma-primary-color);\n    font-size: 16px;\n}\n\n.yma-custom-checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    accent-color: var(--yma-primary-color);\n}\n\n.yma-button-group {\n    display: flex;\n    gap: 16px;\n}\n\n.yma-btn {\n    flex: 1;\n    padding: 14px 24px;\n    border: none;\n    border-radius: 12px;\n    font-weight: 500;\n    font-size: 15px;\n    cursor: pointer;\n    transition: var(--yma-transition);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    letter-spacing: 0.5px;\n    white-space: nowrap;\n}\n\n.yma-btn i {\n    font-size: 16px;\n}\n\n.yma-btn-primary {\n    background: var(--yma-primary-color);\n    color: white;\n}\n\n.yma-btn-primary:hover {\n    background: var(--yma-primary-dark);\n}\n\n.yma-btn-secondary {\n    background: rgba(76, 175, 80, 0.1);\n    color: var(--yma-primary-color);\n}\n\n.yma-btn-secondary:hover {\n    background: rgba(76, 175, 80, 0.2);\n}\n\n.yma-btn:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);\n}\n\n.yma-btn:active {\n    transform: translateY(0);\n}\n\n.yma-minimized {\n    width: 60px;\n    height: 60px;\n    border-radius: 30px;\n    padding: 0;\n    background: var(--yma-background);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.yma-minimized .yma-card-content,\n.yma-minimized .yma-card-title,\n.yma-minimized .yma-notification,\n.yma-minimized .yma-header-left {\n    display: none;\n}\n\n.yma-minimized .yma-card-header {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.yma-minimized .yma-minimize-btn {\n    background: transparent;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 30px;\n}\n\n.yma-minimized .yma-minimize-btn i {\n    font-size: 20px;\n}\n\n.yma-minimized .yma-minimize-btn:hover {\n    background: transparent;\n    transform: scale(1.1);\n}\n\n.yma-notification {\n    display: none;\n    background: rgba(76, 175, 80, 0.1);\n    border-left: 4px solid var(--yma-primary-color);\n    padding: 14px 16px;\n    border-radius: 10px;\n    margin-bottom: 20px;\n    align-items: center;\n    gap: 12px;\n    font-size: 14px;\n    color: var(--yma-text-color);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: var(--yma-transition);\n}\n\n.yma-notification.show {\n    display: flex;\n    opacity: 1;\n    transform: translateY(0);\n}\n\n.yma-notification i {\n    color: var(--yma-primary-color);\n    font-size: 18px;\n}\n\n.yma-notification-message {\n    flex: 1;\n    line-height: 1.5;\n}\n\n.yma-copyright {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    margin-top: 20px;\n    padding-top: 15px;\n    border-top: 1px solid rgba(76, 175, 80, 0.1);\n    font-size: 13px;\n    color: #888;\n    transition: var(--yma-transition);\n    background: linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(76, 175, 80, 0.1));\n    padding: 10px;\n    border-radius: 8px;\n}\n\n.yma-copyright i {\n    color: var(--yma-primary-color);\n    font-size: 16px;\n    animation: pulse 2s infinite;\n}\n\n.yma-copyright-name {\n    background: linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 600;\n    letter-spacing: 0.5px;\n    position: relative;\n}\n\n.yma-copyright-name::after {\n    content: '';\n    position: absolute;\n    bottom: -2px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background: linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0);\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 0.3s ease;\n}\n\n.yma-copyright:hover .yma-copyright-name::after {\n    transform: scaleX(1);\n}\n\n.yma-copyright:hover {\n    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.15);\n    transform: translateY(-2px);\n}\n\n@keyframes pulse {\n    0% {\n        transform: scale(1);\n    }\n\n    50% {\n        transform: scale(1.1);\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n\n.yma-minimized .yma-copyright {\n    display: none;\n}\n\n@media screen and (max-width: 768px) {\n    .yma-floating-card {\n        padding: 15px;\n    }\n\n    .yma-card-title {\n        font-size: 16px;\n    }\n\n    .yma-btn {\n        padding: 10px 15px;\n        font-size: 14px;\n    }\n\n    .yma-checkbox-wrapper {\n        font-size: 14px;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .yma-floating-card {\n        width: calc(100% - 40px);\n        bottom: 10px;\n        right: 20px;\n        left: 20px;\n    }\n\n    .yma-button-group {\n        flex-direction: column;\n        gap: 8px;\n    }\n\n    .yma-btn {\n        width: 100%;\n    }\n\n    .yma-checkbox-group {\n        gap: 10px;\n    }\n\n    .yma-url-input {\n        font-size: 14px;\n        padding: 10px 15px 10px 40px;\n    }\n\n    .yma-input-group i {\n        font-size: 14px;\n    }\n}\n\n@media screen and (max-width: 360px) {\n    .yma-floating-card {\n        padding: 12px;\n    }\n\n    .yma-card-header {\n        margin-bottom: 15px;\n    }\n\n    .yma-minimized {\n        width: 50px;\n        height: 50px;\n        border-radius: 25px;\n        padding: 12px;\n    }\n}\n\n@media screen and (max-height: 600px) {\n    .yma-floating-card {\n        bottom: 10px;\n    }\n\n    .yma-checkbox-group {\n        margin: 10px 0;\n    }\n\n    .yma-input-group {\n        margin-bottom: 10px;\n    }\n}", '']);
    },
    0x13a: _0x30532d => {
      _0x30532d.exports = function (_0x255116) {
        var _0x5569fe = [];
        _0x5569fe.toString = function () {
          return this.map(function (_0x569d41) {
            var _0x36245b = '';
            var _0x2f6316 = undefined !== _0x569d41[5];
            if (_0x569d41[4]) {
              _0x36245b += "@supports (".concat(_0x569d41[4], ") {");
            }
            if (_0x569d41[2]) {
              _0x36245b += "@media ".concat(_0x569d41[2], " {");
            }
            if (_0x2f6316) {
              _0x36245b += "@layer".concat(_0x569d41[5].length > 0 ? " ".concat(_0x569d41[5]) : '', " {");
            }
            _0x36245b += _0x255116(_0x569d41);
            if (_0x2f6316) {
              _0x36245b += '}';
            }
            if (_0x569d41[2]) {
              _0x36245b += '}';
            }
            if (_0x569d41[4]) {
              _0x36245b += '}';
            }
            return _0x36245b;
          }).join('');
        };
        _0x5569fe.i = function (_0x4ce027, _0x1e40bf, _0x578920, _0x1c5880, _0x2c3488) {
          if ("string" == typeof _0x4ce027) {
            _0x4ce027 = [[null, _0x4ce027, undefined]];
          }
          var _0x2f1ac1 = {};
          if (_0x578920) {
            for (var _0x423eb7 = 0; _0x423eb7 < this.length; _0x423eb7++) {
              var _0x101d85 = this[_0x423eb7][0];
              if (null != _0x101d85) {
                _0x2f1ac1[_0x101d85] = true;
              }
            }
          }
          for (var _0x2c6001 = 0; _0x2c6001 < _0x4ce027.length; _0x2c6001++) {
            var _0x2605eb = [].concat(_0x4ce027[_0x2c6001]);
            if (!(_0x578920 && _0x2f1ac1[_0x2605eb[0]])) {
              if (undefined !== _0x2c3488) {
                if (!(undefined === _0x2605eb[5])) {
                  _0x2605eb[1] = "@layer".concat(_0x2605eb[5].length > 0 ? " ".concat(_0x2605eb[5]) : '', " {").concat(_0x2605eb[1], '}');
                }
                _0x2605eb[5] = _0x2c3488;
              }
              if (_0x1e40bf) {
                if (_0x2605eb[2]) {
                  _0x2605eb[1] = "@media ".concat(_0x2605eb[2], " {").concat(_0x2605eb[1], '}');
                  _0x2605eb[2] = _0x1e40bf;
                } else {
                  _0x2605eb[2] = _0x1e40bf;
                }
              }
              if (_0x1c5880) {
                if (_0x2605eb[4]) {
                  _0x2605eb[1] = "@supports (".concat(_0x2605eb[4], ") {").concat(_0x2605eb[1], '}');
                  _0x2605eb[4] = _0x1c5880;
                } else {
                  _0x2605eb[4] = ''.concat(_0x1c5880);
                }
              }
              _0x5569fe.push(_0x2605eb);
            }
          }
        };
        return _0x5569fe;
      };
    },
    0x21c: _0x38486a => {
      _0x38486a.exports = function (_0x2da1a8) {
        var _0x383d80 = document.createElement('style');
        _0x2da1a8.setAttributes(_0x383d80, _0x2da1a8.attributes);
        _0x2da1a8.insert(_0x383d80, _0x2da1a8.options);
        return _0x383d80;
      };
    },
    0x259: _0x3fdc55 => {
      _0x3fdc55.exports = function (_0x260e1a) {
        return _0x260e1a[1];
      };
    },
    0x293: _0xa341ea => {
      var _0x432513 = {};
      _0xa341ea.exports = function (_0x42d44b, _0x356f4e) {
        var _0x2c2922 = function (_0x490d3e) {
          if (undefined === _0x432513[_0x490d3e]) {
            var _0x4e42fd = document.querySelector(_0x490d3e);
            if (window.HTMLIFrameElement && _0x4e42fd instanceof window.HTMLIFrameElement) {
              try {
                _0x4e42fd = _0x4e42fd.contentDocument.head;
              } catch (_0x23852e) {
                _0x4e42fd = null;
              }
            }
            _0x432513[_0x490d3e] = _0x4e42fd;
          }
          return _0x432513[_0x490d3e];
        }(_0x42d44b);
        if (!_0x2c2922) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        _0x2c2922.appendChild(_0x356f4e);
      };
    },
    0x339: _0xf8553d => {
      _0xf8553d.exports = function (_0xdfa408) {
        var _0x37e367 = {
          update: function () {},
          remove: function () {}
        };
        if ("undefined" == typeof document) {
          return _0x37e367;
        }
        var _0xc4eca8 = _0xdfa408.insertStyleElement(_0xdfa408);
        return {
          'update': function (_0x48a58d) {
            !function (_0x5b7054, _0x3becae, _0x2338ad) {
              var _0x3a85c9 = '';
              if (_0x2338ad.supports) {
                _0x3a85c9 += "@supports (".concat(_0x2338ad.supports, ") {");
              }
              if (_0x2338ad.media) {
                _0x3a85c9 += "@media ".concat(_0x2338ad.media, " {");
              }
              var _0x20903a = undefined !== _0x2338ad.layer;
              if (_0x20903a) {
                _0x3a85c9 += "@layer".concat(_0x2338ad.layer.length > 0 ? " ".concat(_0x2338ad.layer) : '', " {");
              }
              _0x3a85c9 += _0x2338ad.css;
              if (_0x20903a) {
                _0x3a85c9 += '}';
              }
              if (_0x2338ad.media) {
                _0x3a85c9 += '}';
              }
              if (_0x2338ad.supports) {
                _0x3a85c9 += '}';
              }
              var _0x3ade32 = _0x2338ad.sourceMap;
              if (_0x3ade32 && "undefined" != typeof btoa) {
                _0x3a85c9 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(_0x3ade32)))), " */");
              }
              _0x3becae.styleTagTransform(_0x3a85c9, _0x5b7054, _0x3becae.options);
            }(_0xc4eca8, _0xdfa408, _0x48a58d);
          },
          'remove': function () {
            !function (_0x599b10) {
              if (null === _0x599b10.parentNode) {
                return false;
              }
              _0x599b10.parentNode.removeChild(_0x599b10);
            }(_0xc4eca8);
          }
        };
      };
    }
  };
  var _0x36bf2a = {};
  function _0x366077(_0x27adcb) {
    var _0x3be300 = _0x36bf2a[_0x27adcb];
    if (undefined !== _0x3be300) {
      return _0x3be300.exports;
    }
    var _0x4c7abd = _0x36bf2a[_0x27adcb] = {
      'id': _0x27adcb,
      'exports': {}
    };
    _0xbf8368[_0x27adcb](_0x4c7abd, _0x4c7abd.exports, _0x366077);
    return _0x4c7abd.exports;
  }
  _0x366077.n = _0x10730c => {
    var _0x2aa5a6 = _0x10730c && _0x10730c.__esModule ? () => _0x10730c["default"] : () => _0x10730c;
    _0x366077.d(_0x2aa5a6, {
      'a': _0x2aa5a6
    });
    return _0x2aa5a6;
  };
  _0x366077.d = (_0x1c1ad0, _0x186154) => {
    for (var _0x21439c in _0x186154) if (_0x366077.o(_0x186154, _0x21439c) && !_0x366077.o(_0x1c1ad0, _0x21439c)) {
      Object.defineProperty(_0x1c1ad0, _0x21439c, {
        'enumerable': true,
        'get': _0x186154[_0x21439c]
      });
    }
  };
  _0x366077.o = (_0x56f518, _0x217a22) => Object.prototype.hasOwnProperty.call(_0x56f518, _0x217a22);
  _0x366077.nc = undefined;
  var _0x242f00 = {
    '188bet': "https://165.22.63.250",
    'w88': "https://188.166.185.213",
    'm88': "https://bet88en.com/",
    'fb88': "https://fb88fo.com/",
    'bk8': "https://188.166.189.40/",
    'v9bet': "https://v9betpp.com/",
    'vn88': "https://139.59.238.116/"
  };
  function _0x1cb08d(_0x2a2bea) {
    _0x1cb08d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x1a01ee) {
      return typeof _0x1a01ee;
    } : function (_0x41059c) {
      return _0x41059c && "function" == typeof Symbol && _0x41059c.constructor === Symbol && _0x41059c !== Symbol.prototype ? "symbol" : typeof _0x41059c;
    };
    return _0x1cb08d(_0x2a2bea);
  }
  function _0xcf93f0() {
    _0xcf93f0 = function () {
      return _0x450d01;
    };
    var _0x119abe;
    var _0x450d01 = {};
    var _0x57bbcc = Object.prototype;
    var _0x56a00b = _0x57bbcc.hasOwnProperty;
    var _0x5ce773 = Object.defineProperty || function (_0x39e565, _0x4e75d5, _0x374552) {
      _0x39e565[_0x4e75d5] = _0x374552.value;
    };
    var _0x591db5 = "function" == typeof Symbol ? Symbol : {};
    var _0xd2ecbc = _0x591db5.iterator || "@@iterator";
    var _0x406289 = _0x591db5.asyncIterator || "@@asyncIterator";
    var _0x352ade = _0x591db5.toStringTag || "@@toStringTag";
    function _0x502062(_0x568114, _0x5aa626, _0x5796f2) {
      var _0x44942a = {
        "value": _0x5796f2,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x568114, _0x5aa626, _0x44942a);
      return _0x568114[_0x5aa626];
    }
    try {
      _0x502062({}, '');
    } catch (_0x216454) {
      _0x502062 = function (_0xe00a91, _0x3f40a2, _0x450345) {
        return _0xe00a91[_0x3f40a2] = _0x450345;
      };
    }
    function _0x12e513(_0x12934d, _0x5c2466, _0x2e0f67, _0x57d996) {
      var _0x3fd314 = _0x5c2466 && _0x5c2466.prototype instanceof _0x272ea8 ? _0x5c2466 : _0x272ea8;
      var _0x1335c7 = Object.create(_0x3fd314.prototype);
      var _0x7b69b5 = new _0x1263c1(_0x57d996 || []);
      _0x5ce773(_0x1335c7, "_invoke", {
        'value': _0x23e1b3(_0x12934d, _0x2e0f67, _0x7b69b5)
      });
      return _0x1335c7;
    }
    function _0x5b3374(_0x3a8224, _0x2767be, _0x39b05a) {
      try {
        return {
          'type': "normal",
          'arg': _0x3a8224.call(_0x2767be, _0x39b05a)
        };
      } catch (_0x5e7615) {
        var _0x7bae36 = {
          "type": "throw",
          "arg": _0x5e7615
        };
        return _0x7bae36;
      }
    }
    _0x450d01.wrap = _0x12e513;
    var _0x95c0f0 = {};
    function _0x272ea8() {}
    function _0x38e7c6() {}
    function _0x2bd95c() {}
    var _0xdfc2a3 = {};
    _0x502062(_0xdfc2a3, _0xd2ecbc, function () {
      return this;
    });
    var _0x2d0b77 = Object.getPrototypeOf;
    var _0x197e31 = _0x2d0b77 && _0x2d0b77(_0x2d0b77(_0xa92b11([])));
    if (_0x197e31 && _0x197e31 !== _0x57bbcc && _0x56a00b.call(_0x197e31, _0xd2ecbc)) {
      _0xdfc2a3 = _0x197e31;
    }
    var _0x3a3eb9 = _0x2bd95c.prototype = _0x272ea8.prototype = Object.create(_0xdfc2a3);
    function _0x1beea0(_0x11519b) {
      ["next", "throw", "return"].forEach(function (_0x4f4ac5) {
        _0x502062(_0x11519b, _0x4f4ac5, function (_0x1e248b) {
          return this._invoke(_0x4f4ac5, _0x1e248b);
        });
      });
    }
    function _0x1562ee(_0x54425f, _0x8cc19c) {
      function _0x5ba9d8(_0x29d9bf, _0x59e288, _0x391857, _0x391abd) {
        var _0x550805 = _0x5b3374(_0x54425f[_0x29d9bf], _0x54425f, _0x59e288);
        if ("throw" !== _0x550805.type) {
          var _0x448e7f = _0x550805.arg;
          var _0xf91626 = _0x448e7f.value;
          return _0xf91626 && "object" == _0x1cb08d(_0xf91626) && _0x56a00b.call(_0xf91626, "__await") ? _0x8cc19c.resolve(_0xf91626.__await).then(function (_0x513c20) {
            _0x5ba9d8('next', _0x513c20, _0x391857, _0x391abd);
          }, function (_0x5a5c6b) {
            _0x5ba9d8('throw', _0x5a5c6b, _0x391857, _0x391abd);
          }) : _0x8cc19c.resolve(_0xf91626).then(function (_0x2a4c84) {
            _0x448e7f.value = _0x2a4c84;
            _0x391857(_0x448e7f);
          }, function (_0x308089) {
            return _0x5ba9d8('throw', _0x308089, _0x391857, _0x391abd);
          });
        }
        _0x391abd(_0x550805.arg);
      }
      var _0x116091;
      _0x5ce773(this, "_invoke", {
        'value': function (_0x327ebb, _0x4ea537) {
          function _0x177b64() {
            return new _0x8cc19c(function (_0x372f89, _0x500d8f) {
              _0x5ba9d8(_0x327ebb, _0x4ea537, _0x372f89, _0x500d8f);
            });
          }
          return _0x116091 = _0x116091 ? _0x116091.then(_0x177b64, _0x177b64) : _0x177b64();
        }
      });
    }
    function _0x23e1b3(_0x2ea7ea, _0x57390, _0x36a387) {
      var _0x2a6b62 = "suspendedStart";
      return function (_0x2b4074, _0x490725) {
        if (_0x2a6b62 === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x2a6b62 === "completed") {
          if ("throw" === _0x2b4074) {
            throw _0x490725;
          }
          var _0x20bc08 = {
            "value": _0x119abe,
            "done": true
          };
          return _0x20bc08;
        }
        _0x36a387.method = _0x2b4074;
        for (_0x36a387.arg = _0x490725;;) {
          var _0x5b6513 = _0x36a387.delegate;
          if (_0x5b6513) {
            var _0x3e9106 = _0x4854ae(_0x5b6513, _0x36a387);
            if (_0x3e9106) {
              if (_0x3e9106 === _0x95c0f0) {
                continue;
              }
              return _0x3e9106;
            }
          }
          if ("next" === _0x36a387.method) {
            _0x36a387.sent = _0x36a387._sent = _0x36a387.arg;
          } else {
            if ("throw" === _0x36a387.method) {
              if (_0x2a6b62 === "suspendedStart") {
                _0x2a6b62 = "completed";
                throw _0x36a387.arg;
              }
              _0x36a387.dispatchException(_0x36a387.arg);
            } else if ("return" === _0x36a387.method) {
              _0x36a387.abrupt("return", _0x36a387.arg);
            }
          }
          _0x2a6b62 = "executing";
          var _0x556678 = _0x5b3374(_0x2ea7ea, _0x57390, _0x36a387);
          if ("normal" === _0x556678.type) {
            _0x2a6b62 = _0x36a387.done ? "completed" : "suspendedYield";
            if (_0x556678.arg === _0x95c0f0) {
              continue;
            }
            var _0x136359 = {
              "value": _0x556678.arg,
              done: _0x36a387.done
            };
            return _0x136359;
          }
          if ("throw" === _0x556678.type) {
            _0x2a6b62 = "completed";
            _0x36a387.method = "throw";
            _0x36a387.arg = _0x556678.arg;
          }
        }
      };
    }
    function _0x4854ae(_0x18370d, _0x311fc1) {
      var _0x31f6fb = _0x311fc1.method;
      var _0x45c865 = _0x18370d.iterator[_0x31f6fb];
      if (_0x45c865 === _0x119abe) {
        _0x311fc1.delegate = null;
        if (!("throw" === _0x31f6fb && _0x18370d.iterator["return"] && (_0x311fc1.method = "return", _0x311fc1.arg = _0x119abe, _0x4854ae(_0x18370d, _0x311fc1), "throw" === _0x311fc1.method))) {
          if ("return" !== _0x31f6fb) {
            _0x311fc1.method = "throw";
            _0x311fc1.arg = new TypeError("The iterator does not provide a '" + _0x31f6fb + "' method");
          }
        }
        return _0x95c0f0;
      }
      var _0x47120b = _0x5b3374(_0x45c865, _0x18370d.iterator, _0x311fc1.arg);
      if ("throw" === _0x47120b.type) {
        _0x311fc1.method = "throw";
        _0x311fc1.arg = _0x47120b.arg;
        _0x311fc1.delegate = null;
        return _0x95c0f0;
      }
      var _0x2b2b01 = _0x47120b.arg;
      return _0x2b2b01 ? _0x2b2b01.done ? (_0x311fc1[_0x18370d.resultName] = _0x2b2b01.value, _0x311fc1.next = _0x18370d.nextLoc, "return" !== _0x311fc1.method && (_0x311fc1.method = "next", _0x311fc1.arg = _0x119abe), _0x311fc1.delegate = null, _0x95c0f0) : _0x2b2b01 : (_0x311fc1.method = "throw", _0x311fc1.arg = new TypeError("iterator result is not an object"), _0x311fc1.delegate = null, _0x95c0f0);
    }
    function _0x802fa8(_0x462edd) {
      var _0x22938e = {
        tryLoc: _0x462edd[0]
      };
      if (1 in _0x462edd) {
        _0x22938e.catchLoc = _0x462edd[1];
      }
      if (2 in _0x462edd) {
        _0x22938e.finallyLoc = _0x462edd[2];
        _0x22938e.afterLoc = _0x462edd[3];
      }
      this.tryEntries.push(_0x22938e);
    }
    function _0x424944(_0x173de8) {
      var _0x138d14 = _0x173de8.completion || {};
      _0x138d14.type = "normal";
      delete _0x138d14.arg;
      _0x173de8.completion = _0x138d14;
    }
    function _0x1263c1(_0xf8b9f4) {
      var _0x24a967 = {
        tryLoc: "root"
      };
      this.tryEntries = [_0x24a967];
      _0xf8b9f4.forEach(_0x802fa8, this);
      this.reset(true);
    }
    function _0xa92b11(_0x4517cc) {
      if (_0x4517cc || '' === _0x4517cc) {
        var _0x357e1b = _0x4517cc[_0xd2ecbc];
        if (_0x357e1b) {
          return _0x357e1b.call(_0x4517cc);
        }
        if ("function" == typeof _0x4517cc.next) {
          return _0x4517cc;
        }
        if (!isNaN(_0x4517cc.length)) {
          var _0x1fd6f9 = -1;
          var _0x26fa9f = function _0x367b92() {
            for (; ++_0x1fd6f9 < _0x4517cc.length;) {
              if (_0x56a00b.call(_0x4517cc, _0x1fd6f9)) {
                _0x367b92.value = _0x4517cc[_0x1fd6f9];
                _0x367b92.done = false;
                return _0x367b92;
              }
            }
            _0x367b92.value = _0x119abe;
            _0x367b92.done = true;
            return _0x367b92;
          };
          return _0x26fa9f.next = _0x26fa9f;
        }
      }
      throw new TypeError(_0x1cb08d(_0x4517cc) + " is not iterable");
    }
    _0x38e7c6.prototype = _0x2bd95c;
    _0x5ce773(_0x3a3eb9, "constructor", {
      'value': _0x2bd95c,
      'configurable': true
    });
    _0x5ce773(_0x2bd95c, "constructor", {
      'value': _0x38e7c6,
      'configurable': true
    });
    _0x38e7c6.displayName = _0x502062(_0x2bd95c, _0x352ade, "GeneratorFunction");
    _0x450d01.isGeneratorFunction = function (_0x267c17) {
      var _0x511e8c = "function" == typeof _0x267c17 && _0x267c17.constructor;
      return !!_0x511e8c && (_0x511e8c === _0x38e7c6 || "GeneratorFunction" === (_0x511e8c.displayName || _0x511e8c.name));
    };
    _0x450d01.mark = function (_0x478f3c) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x478f3c, _0x2bd95c);
      } else {
        _0x478f3c.__proto__ = _0x2bd95c;
        _0x502062(_0x478f3c, _0x352ade, "GeneratorFunction");
      }
      _0x478f3c.prototype = Object.create(_0x3a3eb9);
      return _0x478f3c;
    };
    _0x450d01.awrap = function (_0x5de394) {
      var _0x431d4c = {
        __await: _0x5de394
      };
      return _0x431d4c;
    };
    _0x1beea0(_0x1562ee.prototype);
    _0x502062(_0x1562ee.prototype, _0x406289, function () {
      return this;
    });
    _0x450d01.AsyncIterator = _0x1562ee;
    _0x450d01.async = function (_0x3ce0ef, _0x30abae, _0x2b1f90, _0xd9f8b4, _0x504f72) {
      if (undefined === _0x504f72) {
        _0x504f72 = Promise;
      }
      var _0x3d2d75 = new _0x1562ee(_0x12e513(_0x3ce0ef, _0x30abae, _0x2b1f90, _0xd9f8b4), _0x504f72);
      return _0x450d01.isGeneratorFunction(_0x30abae) ? _0x3d2d75 : _0x3d2d75.next().then(function (_0x2b0138) {
        return _0x2b0138.done ? _0x2b0138.value : _0x3d2d75.next();
      });
    };
    _0x1beea0(_0x3a3eb9);
    _0x502062(_0x3a3eb9, _0x352ade, "Generator");
    _0x502062(_0x3a3eb9, _0xd2ecbc, function () {
      return this;
    });
    _0x502062(_0x3a3eb9, "toString", function () {
      return "[object Generator]";
    });
    _0x450d01.keys = function (_0x337065) {
      var _0x19855f = Object(_0x337065);
      var _0x477b35 = [];
      for (var _0x3c4df2 in _0x19855f) _0x477b35.push(_0x3c4df2);
      _0x477b35.reverse();
      return function _0x357a87() {
        for (; _0x477b35.length;) {
          var _0xf6cf00 = _0x477b35.pop();
          if (_0xf6cf00 in _0x19855f) {
            _0x357a87.value = _0xf6cf00;
            _0x357a87.done = false;
            return _0x357a87;
          }
        }
        _0x357a87.done = true;
        return _0x357a87;
      };
    };
    _0x450d01.values = _0xa92b11;
    _0x1263c1.prototype = {
      'constructor': _0x1263c1,
      'reset': function (_0x361b90) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x119abe;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x119abe;
        this.tryEntries.forEach(_0x424944);
        if (!_0x361b90) {
          for (var _0x592933 in this) if ('t' === _0x592933.charAt(0) && _0x56a00b.call(this, _0x592933) && !isNaN(+_0x592933.slice(1))) {
            this[_0x592933] = _0x119abe;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x47be07 = this.tryEntries[0].completion;
        if ("throw" === _0x47be07.type) {
          throw _0x47be07.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0x50123e) {
        if (this.done) {
          throw _0x50123e;
        }
        var _0x1b96cf = this;
        function _0x49788d(_0x22e760, _0x2b32b9) {
          _0x10fa58.type = "throw";
          _0x10fa58.arg = _0x50123e;
          _0x1b96cf.next = _0x22e760;
          if (_0x2b32b9) {
            _0x1b96cf.method = "next";
            _0x1b96cf.arg = _0x119abe;
          }
          return !!_0x2b32b9;
        }
        for (var _0x1b69fc = this.tryEntries.length - 1; _0x1b69fc >= 0; --_0x1b69fc) {
          var _0x486271 = this.tryEntries[_0x1b69fc];
          var _0x10fa58 = _0x486271.completion;
          if ("root" === _0x486271.tryLoc) {
            return _0x49788d("end");
          }
          if (_0x486271.tryLoc <= this.prev) {
            var _0x1c9672 = _0x56a00b.call(_0x486271, "catchLoc");
            var _0x49cfc2 = _0x56a00b.call(_0x486271, "finallyLoc");
            if (_0x1c9672 && _0x49cfc2) {
              if (this.prev < _0x486271.catchLoc) {
                return _0x49788d(_0x486271.catchLoc, true);
              }
              if (this.prev < _0x486271.finallyLoc) {
                return _0x49788d(_0x486271.finallyLoc);
              }
            } else {
              if (_0x1c9672) {
                if (this.prev < _0x486271.catchLoc) {
                  return _0x49788d(_0x486271.catchLoc, true);
                }
              } else {
                if (!_0x49cfc2) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x486271.finallyLoc) {
                  return _0x49788d(_0x486271.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0x6f788d, _0x3a45c3) {
        for (var _0x16c0cf = this.tryEntries.length - 1; _0x16c0cf >= 0; --_0x16c0cf) {
          var _0x5d506d = this.tryEntries[_0x16c0cf];
          if (_0x5d506d.tryLoc <= this.prev && _0x56a00b.call(_0x5d506d, "finallyLoc") && this.prev < _0x5d506d.finallyLoc) {
            var _0x43aa55 = _0x5d506d;
            break;
          }
        }
        if (_0x43aa55 && ('break' === _0x6f788d || "continue" === _0x6f788d) && _0x43aa55.tryLoc <= _0x3a45c3 && _0x3a45c3 <= _0x43aa55.finallyLoc) {
          _0x43aa55 = null;
        }
        var _0x66439b = _0x43aa55 ? _0x43aa55.completion : {};
        _0x66439b.type = _0x6f788d;
        _0x66439b.arg = _0x3a45c3;
        return _0x43aa55 ? (this.method = "next", this.next = _0x43aa55.finallyLoc, _0x95c0f0) : this.complete(_0x66439b);
      },
      'complete': function (_0x263716, _0x48271a) {
        if ("throw" === _0x263716.type) {
          throw _0x263716.arg;
        }
        if ("break" === _0x263716.type || "continue" === _0x263716.type) {
          this.next = _0x263716.arg;
        } else if ("return" === _0x263716.type) {
          this.rval = this.arg = _0x263716.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x263716.type && _0x48271a) {
          this.next = _0x48271a;
        }
        return _0x95c0f0;
      },
      'finish': function (_0x249f6d) {
        for (var _0x3a4af9 = this.tryEntries.length - 1; _0x3a4af9 >= 0; --_0x3a4af9) {
          var _0x87a448 = this.tryEntries[_0x3a4af9];
          if (_0x87a448.finallyLoc === _0x249f6d) {
            this.complete(_0x87a448.completion, _0x87a448.afterLoc);
            _0x424944(_0x87a448);
            return _0x95c0f0;
          }
        }
      },
      'catch': function (_0x4a2931) {
        for (var _0x5e32cf = this.tryEntries.length - 1; _0x5e32cf >= 0; --_0x5e32cf) {
          var _0xc9082d = this.tryEntries[_0x5e32cf];
          if (_0xc9082d.tryLoc === _0x4a2931) {
            var _0x1c019e = _0xc9082d.completion;
            if ("throw" === _0x1c019e.type) {
              var _0x39e413 = _0x1c019e.arg;
              _0x424944(_0xc9082d);
            }
            return _0x39e413;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0x5e3a19, _0x54d89b, _0x492503) {
        this.delegate = {
          'iterator': _0xa92b11(_0x5e3a19),
          'resultName': _0x54d89b,
          'nextLoc': _0x492503
        };
        if ('next' === this.method) {
          this.arg = _0x119abe;
        }
        return _0x95c0f0;
      }
    };
    return _0x450d01;
  }
  function _0x2a21c0(_0x6c08d6, _0x48ce08, _0x174830, _0x19303e, _0x4eea5d, _0x3ebdb5, _0x5c641a) {
    try {
      var _0x30c4b4 = _0x6c08d6[_0x3ebdb5](_0x5c641a);
      var _0x542ed0 = _0x30c4b4.value;
    } catch (_0x255115) {
      return void _0x174830(_0x255115);
    }
    if (_0x30c4b4.done) {
      _0x48ce08(_0x542ed0);
    } else {
      Promise.resolve(_0x542ed0).then(_0x19303e, _0x4eea5d);
    }
  }
  var _0x30c002 = function (_0x54af7a) {
    var _0x2b4f04 = new Date().toLocaleTimeString("vi-VN");
    console.log("[Script Log ".concat(_0x2b4f04, "]: ").concat(_0x54af7a));
  };
  var _0x39211b = function (_0x3b04ea) {
    var _0x488a4c = new Date().toLocaleTimeString("vi-VN");
    console.log("[Script Log Data ".concat(_0x488a4c, "]: "), _0x3b04ea);
  };
  var _0x2b1fad = function (_0x4b984a) {
    _0x2ff148 = _0xcf93f0().mark(function _0x42bbeb() {
      return _0xcf93f0().wrap(function (_0x45850e) {
        for (;;) {
          switch (_0x45850e.prev = _0x45850e.next) {
            case 0:
              _0x45850e.next = 2;
              return new Promise(function (_0x4151c8) {
                return setTimeout(_0x4151c8, _0x4b984a);
              });
            case 2:
              return _0x45850e.abrupt("return", _0x45850e.sent);
            case 3:
            case "end":
              return _0x45850e.stop();
          }
        }
      }, _0x42bbeb);
    });
    return function () {
      var _0x4723a1 = this;
      return new Promise(function (_0x631c62, _0x27f309) {
        var _0x3fb362 = _0x2ff148.apply(_0x4723a1, arguments);
        function _0x2d9c2c(_0x32ab9c) {
          _0x2a21c0(_0x3fb362, _0x631c62, _0x27f309, _0x2d9c2c, _0x4f1257, 'next', _0x32ab9c);
        }
        function _0x4f1257(_0x1ba719) {
          _0x2a21c0(_0x3fb362, _0x631c62, _0x27f309, _0x2d9c2c, _0x4f1257, "throw", _0x1ba719);
        }
        _0x2d9c2c(undefined);
      });
    }();
    var _0x2ff148;
  };
  var _0x39a2fe = function (_0x466572) {
    window.localStorage.setItem("codexn", _0x466572);
  };
  var _0x25fc9a = function (_0x282ce0, _0xc26332) {
    var _0x52f33f = new DOMParser().parseFromString(_0x282ce0, "text/html");
    var _0x5bb057 = _0xc26332 ? _0x52f33f.querySelector("#layma_me_tfudirect") : _0x52f33f.querySelector("#layma_me_vuatraffic");
    return _0x5bb057 ? _0x5bb057.textContent.trim() : null;
  };
  var _0x5eebc1 = function (_0x3a5dbc) {
    document.getElementById("urlInput").value = _0x3a5dbc;
  };
  var _0x307965 = function (_0x45cdb8) {
    var _0x3f82e7 = new DOMParser().parseFromString(_0x45cdb8, "text/html");
    return {
      'TOP_NUT': _0x3f82e7.getElementById("top_nut_tfudirect").value,
      'LEFT_NUT': _0x3f82e7.getElementById("lef_nut_tfudirect").value,
      'NO_NUT': _0x3f82e7.getElementById("lef_nut_tfudirect").name
    };
  };
  var _0x1e0389 = function (_0x487474) {
    window.localStorage.setItem("codexnd", _0x487474);
  };
  var _0x3e8eb5 = function (_0x1b9586) {
    var _0x1e7781 = _0x1b9586.match(/sessionStorage\.setItem\("tfudclk",\s*(\d+)\)/);
    return _0x1e7781 ? _0x1e7781[1] : null;
  };
  var _0x5d3190 = {
    'timer': null,
    'start': function (_0x55d529, _0x23508a, _0x4c3cbd) {
      var _0x11fd44 = this;
      if (this.timer) {
        this.stop();
      }
      var _0x50c9fb = _0x55d529;
      if (_0x23508a) {
        _0x23508a(_0x50c9fb);
      }
      this.timer = setInterval(function () {
        _0x50c9fb--;
        if (_0x23508a) {
          _0x23508a(_0x50c9fb);
        }
        if (_0x50c9fb <= 0) {
          _0x11fd44.stop();
          if (_0x4c3cbd) {
            _0x4c3cbd();
          }
        }
      }, 1000);
    },
    'stop': function () {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  };
  function _0x1de004(_0x175972) {
    _0x1de004 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0xe173ce) {
      return typeof _0xe173ce;
    } : function (_0x11dbce) {
      return _0x11dbce && "function" == typeof Symbol && _0x11dbce.constructor === Symbol && _0x11dbce !== Symbol.prototype ? "symbol" : typeof _0x11dbce;
    };
    return _0x1de004(_0x175972);
  }
  function _0x152451() {
    _0x152451 = function () {
      return _0x292e94;
    };
    var _0x45d96f;
    var _0x292e94 = {};
    var _0x49228e = Object.prototype;
    var _0x3105dc = _0x49228e.hasOwnProperty;
    var _0x34e38b = Object.defineProperty || function (_0x218afc, _0x553d0e, _0x49c26d) {
      _0x218afc[_0x553d0e] = _0x49c26d.value;
    };
    var _0x5f2496 = "function" == typeof Symbol ? Symbol : {};
    var _0x7f1267 = _0x5f2496.iterator || "@@iterator";
    var _0x6d13d0 = _0x5f2496.asyncIterator || "@@asyncIterator";
    var _0x222fa8 = _0x5f2496.toStringTag || "@@toStringTag";
    function _0x250800(_0x33eb3f, _0x42038c, _0x1bcab0) {
      var _0x29a1db = {
        value: _0x1bcab0,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x33eb3f, _0x42038c, _0x29a1db);
      return _0x33eb3f[_0x42038c];
    }
    try {
      _0x250800({}, '');
    } catch (_0x202ea7) {
      _0x250800 = function (_0x371a6d, _0x2a7d3b, _0x1202c2) {
        return _0x371a6d[_0x2a7d3b] = _0x1202c2;
      };
    }
    function _0x1d822f(_0x127a2c, _0xda461c, _0x40fd37, _0x11c6f7) {
      var _0x59900c = _0xda461c && _0xda461c.prototype instanceof _0x5cd77b ? _0xda461c : _0x5cd77b;
      var _0x45897f = Object.create(_0x59900c.prototype);
      var _0x466069 = new _0x5db539(_0x11c6f7 || []);
      _0x34e38b(_0x45897f, "_invoke", {
        'value': _0x297a74(_0x127a2c, _0x40fd37, _0x466069)
      });
      return _0x45897f;
    }
    function _0x9e4c85(_0x2d30ec, _0x10f448, _0x43b248) {
      try {
        return {
          'type': "normal",
          'arg': _0x2d30ec.call(_0x10f448, _0x43b248)
        };
      } catch (_0x1fd782) {
        var _0x51b467 = {
          "type": "throw",
          "arg": _0x1fd782
        };
        return _0x51b467;
      }
    }
    _0x292e94.wrap = _0x1d822f;
    var _0x10ee27 = {};
    function _0x5cd77b() {}
    function _0x19f0da() {}
    function _0x3a49eb() {}
    var _0x4a1295 = {};
    _0x250800(_0x4a1295, _0x7f1267, function () {
      return this;
    });
    var _0x2169c3 = Object.getPrototypeOf;
    var _0x41be41 = _0x2169c3 && _0x2169c3(_0x2169c3(_0x107fbb([])));
    if (_0x41be41 && _0x41be41 !== _0x49228e && _0x3105dc.call(_0x41be41, _0x7f1267)) {
      _0x4a1295 = _0x41be41;
    }
    var _0x1b26d = _0x3a49eb.prototype = _0x5cd77b.prototype = Object.create(_0x4a1295);
    function _0x207a90(_0x4772bb) {
      ["next", "throw", "return"].forEach(function (_0x1ff54e) {
        _0x250800(_0x4772bb, _0x1ff54e, function (_0x488c66) {
          return this._invoke(_0x1ff54e, _0x488c66);
        });
      });
    }
    function _0x4caf94(_0x260a9a, _0x29808e) {
      function _0xfc5080(_0x22c349, _0x19ee18, _0x6b1b39, _0x43fbb2) {
        var _0x4aaab1 = _0x9e4c85(_0x260a9a[_0x22c349], _0x260a9a, _0x19ee18);
        if ("throw" !== _0x4aaab1.type) {
          var _0x23eabb = _0x4aaab1.arg;
          var _0x2935bc = _0x23eabb.value;
          return _0x2935bc && "object" == _0x1de004(_0x2935bc) && _0x3105dc.call(_0x2935bc, "__await") ? _0x29808e.resolve(_0x2935bc.__await).then(function (_0x5057cb) {
            _0xfc5080("next", _0x5057cb, _0x6b1b39, _0x43fbb2);
          }, function (_0xfab827) {
            _0xfc5080('throw', _0xfab827, _0x6b1b39, _0x43fbb2);
          }) : _0x29808e.resolve(_0x2935bc).then(function (_0x3a92b7) {
            _0x23eabb.value = _0x3a92b7;
            _0x6b1b39(_0x23eabb);
          }, function (_0x158596) {
            return _0xfc5080('throw', _0x158596, _0x6b1b39, _0x43fbb2);
          });
        }
        _0x43fbb2(_0x4aaab1.arg);
      }
      var _0x41f972;
      _0x34e38b(this, "_invoke", {
        'value': function (_0x4e9baa, _0xf8c02f) {
          function _0x1cbca3() {
            return new _0x29808e(function (_0x251ff9, _0x12044c) {
              _0xfc5080(_0x4e9baa, _0xf8c02f, _0x251ff9, _0x12044c);
            });
          }
          return _0x41f972 = _0x41f972 ? _0x41f972.then(_0x1cbca3, _0x1cbca3) : _0x1cbca3();
        }
      });
    }
    function _0x297a74(_0xf5872b, _0x5039a5, _0x85b002) {
      var _0x33b69e = "suspendedStart";
      return function (_0xbe8672, _0x4d7841) {
        if (_0x33b69e === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x33b69e === "completed") {
          if ("throw" === _0xbe8672) {
            throw _0x4d7841;
          }
          var _0x502a99 = {
            "value": _0x45d96f,
            "done": true
          };
          return _0x502a99;
        }
        _0x85b002.method = _0xbe8672;
        for (_0x85b002.arg = _0x4d7841;;) {
          var _0xbaa542 = _0x85b002.delegate;
          if (_0xbaa542) {
            var _0x593c88 = _0x29686b(_0xbaa542, _0x85b002);
            if (_0x593c88) {
              if (_0x593c88 === _0x10ee27) {
                continue;
              }
              return _0x593c88;
            }
          }
          if ("next" === _0x85b002.method) {
            _0x85b002.sent = _0x85b002._sent = _0x85b002.arg;
          } else {
            if ("throw" === _0x85b002.method) {
              if (_0x33b69e === "suspendedStart") {
                _0x33b69e = "completed";
                throw _0x85b002.arg;
              }
              _0x85b002.dispatchException(_0x85b002.arg);
            } else if ("return" === _0x85b002.method) {
              _0x85b002.abrupt("return", _0x85b002.arg);
            }
          }
          _0x33b69e = "executing";
          var _0x3d3a25 = _0x9e4c85(_0xf5872b, _0x5039a5, _0x85b002);
          if ("normal" === _0x3d3a25.type) {
            _0x33b69e = _0x85b002.done ? "completed" : "suspendedYield";
            if (_0x3d3a25.arg === _0x10ee27) {
              continue;
            }
            var _0x331b17 = {
              "value": _0x3d3a25.arg,
              "done": _0x85b002.done
            };
            return _0x331b17;
          }
          if ('throw' === _0x3d3a25.type) {
            _0x33b69e = "completed";
            _0x85b002.method = "throw";
            _0x85b002.arg = _0x3d3a25.arg;
          }
        }
      };
    }
    function _0x29686b(_0x348dd8, _0x15283f) {
      var _0x3f9dfb = _0x15283f.method;
      var _0x5a39ba = _0x348dd8.iterator[_0x3f9dfb];
      if (_0x5a39ba === _0x45d96f) {
        _0x15283f.delegate = null;
        if (!("throw" === _0x3f9dfb && _0x348dd8.iterator["return"] && (_0x15283f.method = "return", _0x15283f.arg = _0x45d96f, _0x29686b(_0x348dd8, _0x15283f), "throw" === _0x15283f.method))) {
          if ("return" !== _0x3f9dfb) {
            _0x15283f.method = "throw";
            _0x15283f.arg = new TypeError("The iterator does not provide a '" + _0x3f9dfb + "' method");
          }
        }
        return _0x10ee27;
      }
      var _0x3240b8 = _0x9e4c85(_0x5a39ba, _0x348dd8.iterator, _0x15283f.arg);
      if ("throw" === _0x3240b8.type) {
        _0x15283f.method = "throw";
        _0x15283f.arg = _0x3240b8.arg;
        _0x15283f.delegate = null;
        return _0x10ee27;
      }
      var _0x1b6131 = _0x3240b8.arg;
      return _0x1b6131 ? _0x1b6131.done ? (_0x15283f[_0x348dd8.resultName] = _0x1b6131.value, _0x15283f.next = _0x348dd8.nextLoc, "return" !== _0x15283f.method && (_0x15283f.method = "next", _0x15283f.arg = _0x45d96f), _0x15283f.delegate = null, _0x10ee27) : _0x1b6131 : (_0x15283f.method = "throw", _0x15283f.arg = new TypeError("iterator result is not an object"), _0x15283f.delegate = null, _0x10ee27);
    }
    function _0x23c5b1(_0x4fb375) {
      var _0x4e6849 = {
        tryLoc: _0x4fb375[0]
      };
      if (1 in _0x4fb375) {
        _0x4e6849.catchLoc = _0x4fb375[1];
      }
      if (2 in _0x4fb375) {
        _0x4e6849.finallyLoc = _0x4fb375[2];
        _0x4e6849.afterLoc = _0x4fb375[3];
      }
      this.tryEntries.push(_0x4e6849);
    }
    function _0x19955b(_0x385af7) {
      var _0x16a21c = _0x385af7.completion || {};
      _0x16a21c.type = "normal";
      delete _0x16a21c.arg;
      _0x385af7.completion = _0x16a21c;
    }
    function _0x5db539(_0x230472) {
      var _0x1899df = {
        tryLoc: "root"
      };
      this.tryEntries = [_0x1899df];
      _0x230472.forEach(_0x23c5b1, this);
      this.reset(true);
    }
    function _0x107fbb(_0x6cefc6) {
      if (_0x6cefc6 || '' === _0x6cefc6) {
        var _0x703c97 = _0x6cefc6[_0x7f1267];
        if (_0x703c97) {
          return _0x703c97.call(_0x6cefc6);
        }
        if ("function" == typeof _0x6cefc6.next) {
          return _0x6cefc6;
        }
        if (!isNaN(_0x6cefc6.length)) {
          var _0x3683f0 = -1;
          var _0x5ffa0 = function _0x56a3a3() {
            for (; ++_0x3683f0 < _0x6cefc6.length;) {
              if (_0x3105dc.call(_0x6cefc6, _0x3683f0)) {
                _0x56a3a3.value = _0x6cefc6[_0x3683f0];
                _0x56a3a3.done = false;
                return _0x56a3a3;
              }
            }
            _0x56a3a3.value = _0x45d96f;
            _0x56a3a3.done = true;
            return _0x56a3a3;
          };
          return _0x5ffa0.next = _0x5ffa0;
        }
      }
      throw new TypeError(_0x1de004(_0x6cefc6) + " is not iterable");
    }
    _0x19f0da.prototype = _0x3a49eb;
    _0x34e38b(_0x1b26d, "constructor", {
      'value': _0x3a49eb,
      'configurable': true
    });
    _0x34e38b(_0x3a49eb, "constructor", {
      'value': _0x19f0da,
      'configurable': true
    });
    _0x19f0da.displayName = _0x250800(_0x3a49eb, _0x222fa8, "GeneratorFunction");
    _0x292e94.isGeneratorFunction = function (_0x18e54f) {
      var _0x24ce87 = "function" == typeof _0x18e54f && _0x18e54f.constructor;
      return !!_0x24ce87 && (_0x24ce87 === _0x19f0da || "GeneratorFunction" === (_0x24ce87.displayName || _0x24ce87.name));
    };
    _0x292e94.mark = function (_0x448e5b) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x448e5b, _0x3a49eb);
      } else {
        _0x448e5b.__proto__ = _0x3a49eb;
        _0x250800(_0x448e5b, _0x222fa8, "GeneratorFunction");
      }
      _0x448e5b.prototype = Object.create(_0x1b26d);
      return _0x448e5b;
    };
    _0x292e94.awrap = function (_0x281c95) {
      var _0x418e49 = {
        __await: _0x281c95
      };
      return _0x418e49;
    };
    _0x207a90(_0x4caf94.prototype);
    _0x250800(_0x4caf94.prototype, _0x6d13d0, function () {
      return this;
    });
    _0x292e94.AsyncIterator = _0x4caf94;
    _0x292e94.async = function (_0x2a1f6e, _0x23f0be, _0x414d09, _0x1c4bae, _0xb0ac49) {
      if (undefined === _0xb0ac49) {
        _0xb0ac49 = Promise;
      }
      var _0x3e7ba6 = new _0x4caf94(_0x1d822f(_0x2a1f6e, _0x23f0be, _0x414d09, _0x1c4bae), _0xb0ac49);
      return _0x292e94.isGeneratorFunction(_0x23f0be) ? _0x3e7ba6 : _0x3e7ba6.next().then(function (_0x747843) {
        return _0x747843.done ? _0x747843.value : _0x3e7ba6.next();
      });
    };
    _0x207a90(_0x1b26d);
    _0x250800(_0x1b26d, _0x222fa8, "Generator");
    _0x250800(_0x1b26d, _0x7f1267, function () {
      return this;
    });
    _0x250800(_0x1b26d, "toString", function () {
      return "[object Generator]";
    });
    _0x292e94.keys = function (_0x356124) {
      var _0x2fd65c = Object(_0x356124);
      var _0x59bad9 = [];
      for (var _0x58ddf0 in _0x2fd65c) _0x59bad9.push(_0x58ddf0);
      _0x59bad9.reverse();
      return function _0x4c9f15() {
        for (; _0x59bad9.length;) {
          var _0x442f65 = _0x59bad9.pop();
          if (_0x442f65 in _0x2fd65c) {
            _0x4c9f15.value = _0x442f65;
            _0x4c9f15.done = false;
            return _0x4c9f15;
          }
        }
        _0x4c9f15.done = true;
        return _0x4c9f15;
      };
    };
    _0x292e94.values = _0x107fbb;
    _0x5db539.prototype = {
      'constructor': _0x5db539,
      'reset': function (_0x2f2cf9) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x45d96f;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x45d96f;
        this.tryEntries.forEach(_0x19955b);
        if (!_0x2f2cf9) {
          for (var _0x1ebfcf in this) if ('t' === _0x1ebfcf.charAt(0) && _0x3105dc.call(this, _0x1ebfcf) && !isNaN(+_0x1ebfcf.slice(1))) {
            this[_0x1ebfcf] = _0x45d96f;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x2297cf = this.tryEntries[0].completion;
        if ("throw" === _0x2297cf.type) {
          throw _0x2297cf.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0x45dfb9) {
        if (this.done) {
          throw _0x45dfb9;
        }
        var _0x509dab = this;
        function _0x566f28(_0x4450fb, _0x3b1c39) {
          _0x372a22.type = "throw";
          _0x372a22.arg = _0x45dfb9;
          _0x509dab.next = _0x4450fb;
          if (_0x3b1c39) {
            _0x509dab.method = "next";
            _0x509dab.arg = _0x45d96f;
          }
          return !!_0x3b1c39;
        }
        for (var _0x3843dc = this.tryEntries.length - 1; _0x3843dc >= 0; --_0x3843dc) {
          var _0x396d56 = this.tryEntries[_0x3843dc];
          var _0x372a22 = _0x396d56.completion;
          if ("root" === _0x396d56.tryLoc) {
            return _0x566f28("end");
          }
          if (_0x396d56.tryLoc <= this.prev) {
            var _0x459fd0 = _0x3105dc.call(_0x396d56, "catchLoc");
            var _0xc988b = _0x3105dc.call(_0x396d56, "finallyLoc");
            if (_0x459fd0 && _0xc988b) {
              if (this.prev < _0x396d56.catchLoc) {
                return _0x566f28(_0x396d56.catchLoc, true);
              }
              if (this.prev < _0x396d56.finallyLoc) {
                return _0x566f28(_0x396d56.finallyLoc);
              }
            } else {
              if (_0x459fd0) {
                if (this.prev < _0x396d56.catchLoc) {
                  return _0x566f28(_0x396d56.catchLoc, true);
                }
              } else {
                if (!_0xc988b) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x396d56.finallyLoc) {
                  return _0x566f28(_0x396d56.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0x42af0e, _0x14155d) {
        for (var _0xf60de = this.tryEntries.length - 1; _0xf60de >= 0; --_0xf60de) {
          var _0x1b0b02 = this.tryEntries[_0xf60de];
          if (_0x1b0b02.tryLoc <= this.prev && _0x3105dc.call(_0x1b0b02, "finallyLoc") && this.prev < _0x1b0b02.finallyLoc) {
            var _0x3d5d81 = _0x1b0b02;
            break;
          }
        }
        if (_0x3d5d81 && ("break" === _0x42af0e || "continue" === _0x42af0e) && _0x3d5d81.tryLoc <= _0x14155d && _0x14155d <= _0x3d5d81.finallyLoc) {
          _0x3d5d81 = null;
        }
        var _0x497e0d = _0x3d5d81 ? _0x3d5d81.completion : {};
        _0x497e0d.type = _0x42af0e;
        _0x497e0d.arg = _0x14155d;
        return _0x3d5d81 ? (this.method = 'next', this.next = _0x3d5d81.finallyLoc, _0x10ee27) : this.complete(_0x497e0d);
      },
      'complete': function (_0x39364e, _0x2c923c) {
        if ("throw" === _0x39364e.type) {
          throw _0x39364e.arg;
        }
        if ("break" === _0x39364e.type || "continue" === _0x39364e.type) {
          this.next = _0x39364e.arg;
        } else if ("return" === _0x39364e.type) {
          this.rval = this.arg = _0x39364e.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x39364e.type && _0x2c923c) {
          this.next = _0x2c923c;
        }
        return _0x10ee27;
      },
      'finish': function (_0xa0ad83) {
        for (var _0x25935b = this.tryEntries.length - 1; _0x25935b >= 0; --_0x25935b) {
          var _0x24fd16 = this.tryEntries[_0x25935b];
          if (_0x24fd16.finallyLoc === _0xa0ad83) {
            this.complete(_0x24fd16.completion, _0x24fd16.afterLoc);
            _0x19955b(_0x24fd16);
            return _0x10ee27;
          }
        }
      },
      'catch': function (_0x2d3a1e) {
        for (var _0x37b789 = this.tryEntries.length - 1; _0x37b789 >= 0; --_0x37b789) {
          var _0x5bf322 = this.tryEntries[_0x37b789];
          if (_0x5bf322.tryLoc === _0x2d3a1e) {
            var _0x26da79 = _0x5bf322.completion;
            if ("throw" === _0x26da79.type) {
              var _0x4afc59 = _0x26da79.arg;
              _0x19955b(_0x5bf322);
            }
            return _0x4afc59;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0xe25ac2, _0x585ffb, _0x3a15bb) {
        this.delegate = {
          'iterator': _0x107fbb(_0xe25ac2),
          'resultName': _0x585ffb,
          'nextLoc': _0x3a15bb
        };
        if ('next' === this.method) {
          this.arg = _0x45d96f;
        }
        return _0x10ee27;
      }
    };
    return _0x292e94;
  }
  function _0x446aa0(_0x59815a, _0xdc01ce, _0x4bc86b, _0x1472db, _0x4f6f24, _0x121b8a, _0x55251d) {
    try {
      var _0x2c846b = _0x59815a[_0x121b8a](_0x55251d);
      var _0x547380 = _0x2c846b.value;
    } catch (_0x39a2dd) {
      return void _0x4bc86b(_0x39a2dd);
    }
    if (_0x2c846b.done) {
      _0xdc01ce(_0x547380);
    } else {
      Promise.resolve(_0x547380).then(_0x1472db, _0x4f6f24);
    }
  }
  function _0x1f6f90(_0x566b37) {
    return function () {
      var _0x56afbe = this;
      return new Promise(function (_0x54ddb8, _0x2bc971) {
        var _0x311630 = _0x566b37.apply(_0x56afbe, arguments);
        function _0x25e7f0(_0x46a8e4) {
          _0x446aa0(_0x311630, _0x54ddb8, _0x2bc971, _0x25e7f0, _0x59f94a, "next", _0x46a8e4);
        }
        function _0x59f94a(_0x57f62c) {
          _0x446aa0(_0x311630, _0x54ddb8, _0x2bc971, _0x25e7f0, _0x59f94a, "throw", _0x57f62c);
        }
        _0x25e7f0(undefined);
      });
    };
  }
  var _0x515cab;
  var _0x110968;
  var _0x40bbbd;
  _0x515cab = {
    'getOrc': function (_0x5f13ae, _0xd4155) {
      return _0x1f6f90(_0x152451().mark(function _0x54f61e() {
        var _0x3f57bd;
        var _0x3c7481;
        return _0x152451().wrap(function (_0x590cb1) {
          for (;;) {
            switch (_0x590cb1.prev = _0x590cb1.next) {
              case 0:
                _0x590cb1.next = 2;
                return fetch("https://api.ocr.space/parse/imageurl?apikey=".concat(_0x5f13ae, "&isOverlayRequired=true&OCREngine=2&url=").concat(_0xd4155));
              case 2:
                if ((_0x3f57bd = _0x590cb1.sent).ok) {
                  _0x590cb1.next = 6;
                  break;
                }
                _0x30c002("Error: ".concat(_0x3f57bd.statusText));
                return _0x590cb1.abrupt("return", null);
              case 6:
                _0x590cb1.next = 8;
                return _0x3f57bd.json();
              case 8:
                _0x3c7481 = _0x590cb1.sent;
                return _0x590cb1.abrupt("return", _0x3c7481);
              case 10:
              case "end":
                return _0x590cb1.stop();
            }
          }
        }, _0x54f61e);
      }))();
    },
    'getVuaTraffic': function (_0x30bb00, _0x5da2a7) {
      var _0x4b965f = this;
      return _0x1f6f90(_0x152451().mark(function _0x199905() {
        var _0x37b7ee;
        return _0x152451().wrap(function (_0x11aee1) {
          for (;;) {
            switch (_0x11aee1.prev = _0x11aee1.next) {
              case 0:
                _0x37b7ee = ''.concat("https://traffic-user.net", "/GET_VUATRAFFIC.php?data=").concat(_0x30bb00, ",https://www.google.com/,undefined,IOS900,hidden,null&clk=").concat(_0x5da2a7);
                return _0x11aee1.abrupt("return", _0x4b965f.postReturnText(_0x37b7ee));
              case 2:
              case "end":
                return _0x11aee1.stop();
            }
          }
        }, _0x199905);
      }))();
    },
    'getMa': function (_0x22c5bf, _0x368463, _0x30abb9) {
      var _0x255a63 = this;
      return _0x1f6f90(_0x152451().mark(function _0x37ead8() {
        var _0x1c8b91;
        return _0x152451().wrap(function (_0x49475f) {
          for (;;) {
            switch (_0x49475f.prev = _0x49475f.next) {
              case 0:
                _0x1c8b91 = ''.concat("https://traffic-user.net", "/GET_MA.php?codexn=").concat(_0x22c5bf, "&url=").concat(_0x368463, "&loai_traffic=https://www.google.com/&clk=").concat(_0x30abb9);
                return _0x49475f.abrupt("return", _0x255a63.postReturnText(_0x1c8b91));
              case 2:
              case "end":
                return _0x49475f.stop();
            }
          }
        }, _0x37ead8);
      }))();
    },
    'getDirectData': function (_0x47e87c, _0x157ec1, _0x54caec, _0x4c2550) {
      var _0x238efb = this;
      return _0x1f6f90(_0x152451().mark(function _0x4fd9d4() {
        var _0xe75b5e;
        var _0x365150;
        return _0x152451().wrap(function (_0x3dadbb) {
          for (;;) {
            switch (_0x3dadbb.prev = _0x3dadbb.next) {
              case 0:
                _0xe75b5e = ''.concat("https://traffic-user.net", "/GET_DIRECT.php?data=").concat(_0x47e87c, ',').concat(_0x157ec1, ',').concat(_0x54caec, ",IOS900,hidden,null&clk=").concat(_0x4c2550);
                (_0x365150 = new FormData()).append('NO', '');
                return _0x3dadbb.abrupt("return", _0x238efb.postReturnText(_0xe75b5e, _0x365150));
              case 4:
              case "end":
                return _0x3dadbb.stop();
            }
          }
        }, _0x4fd9d4);
      }))();
    },
    'getDirectToken': function (_0x10c217, _0xe9db8f, _0x306aa4, _0x544975, _0x5be3f5) {
      var _0x2ecd8b = this;
      return _0x1f6f90(_0x152451().mark(function _0x221ed9() {
        var _0x4464b4;
        var _0x2c6be2;
        return _0x152451().wrap(function (_0x4a55c1) {
          for (;;) {
            switch (_0x4a55c1.prev = _0x4a55c1.next) {
              case 0:
                _0x4464b4 = ''.concat("https://traffic-user.net", "/GET_DIRECT.php?token=").concat(_0x10c217, ',').concat(_0xe9db8f, ',').concat(_0x306aa4, ",IOS900,hidden,nullNO&clk=").concat(_0x544975);
                (_0x2c6be2 = new FormData()).append("url_order", _0xe9db8f);
                _0x2c6be2.append("ref", _0x5be3f5.ref);
                _0x2c6be2.append("TOP_NUT", _0x5be3f5.TOP_NUT);
                _0x2c6be2.append("LEFT_NUT", _0x5be3f5.LEFT_NUT);
                _0x2c6be2.append("NO_NUT", _0x5be3f5.NO_NUT);
                return _0x4a55c1.abrupt("return", _0x2ecd8b.postReturnText(_0x4464b4, _0x2c6be2));
              case 8:
              case "end":
                return _0x4a55c1.stop();
            }
          }
        }, _0x221ed9);
      }))();
    },
    'getMd': function (_0x4bf594, _0x56008a, _0x4ba774, _0x25c1b4) {
      var _0x4adf76 = this;
      return _0x1f6f90(_0x152451().mark(function _0x57c3ff() {
        var _0x3ede81;
        return _0x152451().wrap(function (_0x1c8cb4) {
          for (;;) {
            switch (_0x1c8cb4.prev = _0x1c8cb4.next) {
              case 0:
                _0x3ede81 = ''.concat("https://traffic-user.net", "/GET_MD.php?codexnd=").concat(_0x4bf594, "&url=").concat(_0x56008a, "&loai_traffic=").concat(_0x4ba774, '&clk=').concat(_0x25c1b4);
                return _0x1c8cb4.abrupt("return", _0x4adf76.postReturnText(_0x3ede81));
              case 2:
              case "end":
                return _0x1c8cb4.stop();
            }
          }
        }, _0x57c3ff);
      }))();
    },
    'postReturnText': function (_0x14d9df) {
      return _0x1f6f90(_0x152451().mark(function _0x103c2d() {
        var _0x1b85ef;
        return _0x152451().wrap(function (_0x1b2b63) {
          for (;;) {
            switch (_0x1b2b63.prev = _0x1b2b63.next) {
              case 0:
                var _0x3db2d = {
                  method: 'POST'
                };
                _0x1b2b63.next = 2;
                return fetch(_0x14d9df, _0x3db2d);
              case 2:
                if ((_0x1b85ef = _0x1b2b63.sent).ok) {
                  _0x1b2b63.next = 6;
                  break;
                }
                _0x30c002("Error: ".concat(_0x1b85ef.statusText));
                return _0x1b2b63.abrupt("return", null);
              case 6:
                return _0x1b2b63.abrupt("return", _0x1b85ef.text());
              case 7:
              case "end":
                return _0x1b2b63.stop();
            }
          }
        }, _0x103c2d);
      }))();
    }
  };
  _0x40bbbd = function (_0x2cfae3, _0x293570) {
    return _0x1f6f90(_0x152451().mark(function _0x105f11() {
      var _0x29f6c1;
      return _0x152451().wrap(function (_0x2877ce) {
        for (;;) {
          switch (_0x2877ce.prev = _0x2877ce.next) {
            case 0:
              _0x2877ce.next = 2;
              return fetch(_0x2cfae3, {
                'method': "POST",
                'body': _0x293570
              });
            case 2:
              if ((_0x29f6c1 = _0x2877ce.sent).ok) {
                _0x2877ce.next = 6;
                break;
              }
              _0x30c002("Error: ".concat(_0x29f6c1.statusText));
              return _0x2877ce.abrupt("return", null);
            case 6:
              return _0x2877ce.abrupt("return", _0x29f6c1.text());
            case 7:
            case "end":
              return _0x2877ce.stop();
          }
        }
      }, _0x105f11);
    }))();
  };
  if ((_0x110968 = function (_0x4ee38e) {
    var _0x444a0b = function (_0x1c7569) {
      if ("object" != _0x1de004(_0x1c7569) || !_0x1c7569) {
        return _0x1c7569;
      }
      var _0x23b78f = _0x1c7569[Symbol.toPrimitive];
      if (undefined !== _0x23b78f) {
        var _0x281040 = _0x23b78f.call(_0x1c7569, "string");
        if ("object" != _0x1de004(_0x281040)) {
          return _0x281040;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(_0x1c7569);
    }(_0x4ee38e);
    return "symbol" == _0x1de004(_0x444a0b) ? _0x444a0b : _0x444a0b + '';
  }(_0x110968 = "postReturnText")) in _0x515cab) {
    Object.defineProperty(_0x515cab, _0x110968, {
      'value': _0x40bbbd,
      'enumerable': true,
      'configurable': true,
      'writable': true
    });
  } else {
    _0x515cab[_0x110968] = _0x40bbbd;
  }
  var _0x38fa4e = _0x366077(72);
  var _0x214fce = _0x366077.n(_0x38fa4e);
  var _0x5e99cd = _0x366077(825);
  var _0x521d13 = _0x366077.n(_0x5e99cd);
  var _0x16fbd7 = _0x366077(659);
  var _0x2753bd = _0x366077.n(_0x16fbd7);
  var _0x47cb26 = _0x366077(56);
  var _0x3dfa69 = _0x366077.n(_0x47cb26);
  var _0x503a57 = _0x366077(540);
  var _0x520032 = _0x366077.n(_0x503a57);
  var _0x9514f8 = _0x366077(113);
  var _0x5153bd = _0x366077.n(_0x9514f8);
  var _0x3f58ad = _0x366077(156);
  var _0x47f58c = {};
  function _0x3aa182(_0x55d2ac) {
    _0x3aa182 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x1fcd9d) {
      return typeof _0x1fcd9d;
    } : function (_0x11cb60) {
      return _0x11cb60 && "function" == typeof Symbol && _0x11cb60.constructor === Symbol && _0x11cb60 !== Symbol.prototype ? "symbol" : typeof _0x11cb60;
    };
    return _0x3aa182(_0x55d2ac);
  }
  function _0x326b7a(_0x680ff9, _0x412218, _0x122da6) {
    if ((_0x412218 = function (_0x128ff0) {
      var _0xf723e4 = function (_0x32699f) {
        if ("object" != _0x3aa182(_0x32699f) || !_0x32699f) {
          return _0x32699f;
        }
        var _0x381990 = _0x32699f[Symbol.toPrimitive];
        if (undefined !== _0x381990) {
          var _0x375bee = _0x381990.call(_0x32699f, "string");
          if ("object" != _0x3aa182(_0x375bee)) {
            return _0x375bee;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(_0x32699f);
      }(_0x128ff0);
      return "symbol" == _0x3aa182(_0xf723e4) ? _0xf723e4 : _0xf723e4 + '';
    }(_0x412218)) in _0x680ff9) {
      Object.defineProperty(_0x680ff9, _0x412218, {
        'value': _0x122da6,
        'enumerable': true,
        'configurable': true,
        'writable': true
      });
    } else {
      _0x680ff9[_0x412218] = _0x122da6;
    }
    return _0x680ff9;
  }
  function _0x1c81d2() {
    _0x1c81d2 = function () {
      return _0x180b52;
    };
    var _0x223d07;
    var _0x180b52 = {};
    var _0x390f96 = Object.prototype;
    var _0x3cabb0 = _0x390f96.hasOwnProperty;
    var _0x3c50a1 = Object.defineProperty || function (_0x7df6fe, _0x432490, _0x105a75) {
      _0x7df6fe[_0x432490] = _0x105a75.value;
    };
    var _0x46f2a8 = "function" == typeof Symbol ? Symbol : {};
    var _0x49c519 = _0x46f2a8.iterator || "@@iterator";
    var _0x35acb1 = _0x46f2a8.asyncIterator || "@@asyncIterator";
    var _0x41df47 = _0x46f2a8.toStringTag || "@@toStringTag";
    function _0x11c44e(_0x3cb653, _0x3d4925, _0x1552d7) {
      var _0x24746b = {
        value: _0x1552d7,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x3cb653, _0x3d4925, _0x24746b);
      return _0x3cb653[_0x3d4925];
    }
    try {
      _0x11c44e({}, '');
    } catch (_0x39676d) {
      _0x11c44e = function (_0x349a25, _0x2f326f, _0x5b7a77) {
        return _0x349a25[_0x2f326f] = _0x5b7a77;
      };
    }
    function _0x9c4bde(_0x802038, _0x4e52d9, _0x54f8d7, _0x16091f) {
      var _0x69c333 = _0x4e52d9 && _0x4e52d9.prototype instanceof _0x2bbf15 ? _0x4e52d9 : _0x2bbf15;
      var _0x5720d6 = Object.create(_0x69c333.prototype);
      var _0x441503 = new _0x5aa415(_0x16091f || []);
      _0x3c50a1(_0x5720d6, "_invoke", {
        'value': _0x383503(_0x802038, _0x54f8d7, _0x441503)
      });
      return _0x5720d6;
    }
    function _0x373958(_0x35db31, _0x33ba3b, _0x2976b3) {
      try {
        return {
          'type': "normal",
          'arg': _0x35db31.call(_0x33ba3b, _0x2976b3)
        };
      } catch (_0x50b356) {
        var _0x4805fa = {
          "type": "throw",
          "arg": _0x50b356
        };
        return _0x4805fa;
      }
    }
    _0x180b52.wrap = _0x9c4bde;
    var _0x2febac = {};
    function _0x2bbf15() {}
    function _0x96435b() {}
    function _0xce258a() {}
    var _0x4db534 = {};
    _0x11c44e(_0x4db534, _0x49c519, function () {
      return this;
    });
    var _0x3397a5 = Object.getPrototypeOf;
    var _0x2f8031 = _0x3397a5 && _0x3397a5(_0x3397a5(_0x36c350([])));
    if (_0x2f8031 && _0x2f8031 !== _0x390f96 && _0x3cabb0.call(_0x2f8031, _0x49c519)) {
      _0x4db534 = _0x2f8031;
    }
    var _0xc46172 = _0xce258a.prototype = _0x2bbf15.prototype = Object.create(_0x4db534);
    function _0x14f46d(_0x3afa6a) {
      ['next', "throw", "return"].forEach(function (_0x24a8a0) {
        _0x11c44e(_0x3afa6a, _0x24a8a0, function (_0x2b37e6) {
          return this._invoke(_0x24a8a0, _0x2b37e6);
        });
      });
    }
    function _0x2ae800(_0x5be8b2, _0x285389) {
      function _0x445c02(_0x71fc75, _0x373307, _0x2e4f93, _0x329b7b) {
        var _0x17e3b1 = _0x373958(_0x5be8b2[_0x71fc75], _0x5be8b2, _0x373307);
        if ("throw" !== _0x17e3b1.type) {
          var _0x8a4585 = _0x17e3b1.arg;
          var _0x502f35 = _0x8a4585.value;
          return _0x502f35 && "object" == _0x3aa182(_0x502f35) && _0x3cabb0.call(_0x502f35, "__await") ? _0x285389.resolve(_0x502f35.__await).then(function (_0x44e0c0) {
            _0x445c02("next", _0x44e0c0, _0x2e4f93, _0x329b7b);
          }, function (_0x3951e5) {
            _0x445c02("throw", _0x3951e5, _0x2e4f93, _0x329b7b);
          }) : _0x285389.resolve(_0x502f35).then(function (_0xa3b2a0) {
            _0x8a4585.value = _0xa3b2a0;
            _0x2e4f93(_0x8a4585);
          }, function (_0x514fa7) {
            return _0x445c02("throw", _0x514fa7, _0x2e4f93, _0x329b7b);
          });
        }
        _0x329b7b(_0x17e3b1.arg);
      }
      var _0x352dfd;
      _0x3c50a1(this, "_invoke", {
        'value': function (_0x29c8de, _0x132486) {
          function _0x40ff2b() {
            return new _0x285389(function (_0x233bd8, _0x31e702) {
              _0x445c02(_0x29c8de, _0x132486, _0x233bd8, _0x31e702);
            });
          }
          return _0x352dfd = _0x352dfd ? _0x352dfd.then(_0x40ff2b, _0x40ff2b) : _0x40ff2b();
        }
      });
    }
    function _0x383503(_0x8cb025, _0x3157f0, _0xf30eaf) {
      var _0x6ea269 = "suspendedStart";
      return function (_0x1998e0, _0xbdca04) {
        if (_0x6ea269 === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x6ea269 === "completed") {
          if ("throw" === _0x1998e0) {
            throw _0xbdca04;
          }
          var _0x3aedf6 = {
            "value": _0x223d07,
            done: true
          };
          return _0x3aedf6;
        }
        _0xf30eaf.method = _0x1998e0;
        for (_0xf30eaf.arg = _0xbdca04;;) {
          var _0x9d5957 = _0xf30eaf.delegate;
          if (_0x9d5957) {
            var _0x5dd700 = _0xf743b4(_0x9d5957, _0xf30eaf);
            if (_0x5dd700) {
              if (_0x5dd700 === _0x2febac) {
                continue;
              }
              return _0x5dd700;
            }
          }
          if ("next" === _0xf30eaf.method) {
            _0xf30eaf.sent = _0xf30eaf._sent = _0xf30eaf.arg;
          } else {
            if ("throw" === _0xf30eaf.method) {
              if (_0x6ea269 === "suspendedStart") {
                _0x6ea269 = "completed";
                throw _0xf30eaf.arg;
              }
              _0xf30eaf.dispatchException(_0xf30eaf.arg);
            } else if ("return" === _0xf30eaf.method) {
              _0xf30eaf.abrupt("return", _0xf30eaf.arg);
            }
          }
          _0x6ea269 = "executing";
          var _0x38044b = _0x373958(_0x8cb025, _0x3157f0, _0xf30eaf);
          if ("normal" === _0x38044b.type) {
            _0x6ea269 = _0xf30eaf.done ? "completed" : "suspendedYield";
            if (_0x38044b.arg === _0x2febac) {
              continue;
            }
            var _0x48c2e9 = {
              value: _0x38044b.arg,
              done: _0xf30eaf.done
            };
            return _0x48c2e9;
          }
          if ("throw" === _0x38044b.type) {
            _0x6ea269 = "completed";
            _0xf30eaf.method = "throw";
            _0xf30eaf.arg = _0x38044b.arg;
          }
        }
      };
    }
    function _0xf743b4(_0x174ba2, _0x42c49f) {
      var _0x13e50a = _0x42c49f.method;
      var _0x3c52e2 = _0x174ba2.iterator[_0x13e50a];
      if (_0x3c52e2 === _0x223d07) {
        _0x42c49f.delegate = null;
        if (!("throw" === _0x13e50a && _0x174ba2.iterator["return"] && (_0x42c49f.method = "return", _0x42c49f.arg = _0x223d07, _0xf743b4(_0x174ba2, _0x42c49f), "throw" === _0x42c49f.method))) {
          if ("return" !== _0x13e50a) {
            _0x42c49f.method = "throw";
            _0x42c49f.arg = new TypeError("The iterator does not provide a '" + _0x13e50a + "' method");
          }
        }
        return _0x2febac;
      }
      var _0x3a7019 = _0x373958(_0x3c52e2, _0x174ba2.iterator, _0x42c49f.arg);
      if ("throw" === _0x3a7019.type) {
        _0x42c49f.method = "throw";
        _0x42c49f.arg = _0x3a7019.arg;
        _0x42c49f.delegate = null;
        return _0x2febac;
      }
      var _0x3de5a7 = _0x3a7019.arg;
      return _0x3de5a7 ? _0x3de5a7.done ? (_0x42c49f[_0x174ba2.resultName] = _0x3de5a7.value, _0x42c49f.next = _0x174ba2.nextLoc, "return" !== _0x42c49f.method && (_0x42c49f.method = 'next', _0x42c49f.arg = _0x223d07), _0x42c49f.delegate = null, _0x2febac) : _0x3de5a7 : (_0x42c49f.method = "throw", _0x42c49f.arg = new TypeError("iterator result is not an object"), _0x42c49f.delegate = null, _0x2febac);
    }
    function _0x351bb7(_0x55881c) {
      var _0x237d76 = {
        tryLoc: _0x55881c[0]
      };
      if (1 in _0x55881c) {
        _0x237d76.catchLoc = _0x55881c[1];
      }
      if (2 in _0x55881c) {
        _0x237d76.finallyLoc = _0x55881c[2];
        _0x237d76.afterLoc = _0x55881c[3];
      }
      this.tryEntries.push(_0x237d76);
    }
    function _0xcb134a(_0x2e9797) {
      var _0xa1dd5e = _0x2e9797.completion || {};
      _0xa1dd5e.type = "normal";
      delete _0xa1dd5e.arg;
      _0x2e9797.completion = _0xa1dd5e;
    }
    function _0x5aa415(_0x45d901) {
      var _0x2564e7 = {
        tryLoc: "root"
      };
      this.tryEntries = [_0x2564e7];
      _0x45d901.forEach(_0x351bb7, this);
      this.reset(true);
    }
    function _0x36c350(_0x6c1882) {
      if (_0x6c1882 || '' === _0x6c1882) {
        var _0x192918 = _0x6c1882[_0x49c519];
        if (_0x192918) {
          return _0x192918.call(_0x6c1882);
        }
        if ("function" == typeof _0x6c1882.next) {
          return _0x6c1882;
        }
        if (!isNaN(_0x6c1882.length)) {
          var _0x206d51 = -1;
          var _0x1719c7 = function _0x5bd156() {
            for (; ++_0x206d51 < _0x6c1882.length;) {
              if (_0x3cabb0.call(_0x6c1882, _0x206d51)) {
                _0x5bd156.value = _0x6c1882[_0x206d51];
                _0x5bd156.done = false;
                return _0x5bd156;
              }
            }
            _0x5bd156.value = _0x223d07;
            _0x5bd156.done = true;
            return _0x5bd156;
          };
          return _0x1719c7.next = _0x1719c7;
        }
      }
      throw new TypeError(_0x3aa182(_0x6c1882) + " is not iterable");
    }
    _0x96435b.prototype = _0xce258a;
    _0x3c50a1(_0xc46172, "constructor", {
      'value': _0xce258a,
      'configurable': true
    });
    _0x3c50a1(_0xce258a, "constructor", {
      'value': _0x96435b,
      'configurable': true
    });
    _0x96435b.displayName = _0x11c44e(_0xce258a, _0x41df47, "GeneratorFunction");
    _0x180b52.isGeneratorFunction = function (_0x397a0e) {
      var _0x38a973 = "function" == typeof _0x397a0e && _0x397a0e.constructor;
      return !!_0x38a973 && (_0x38a973 === _0x96435b || "GeneratorFunction" === (_0x38a973.displayName || _0x38a973.name));
    };
    _0x180b52.mark = function (_0x1500a) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x1500a, _0xce258a);
      } else {
        _0x1500a.__proto__ = _0xce258a;
        _0x11c44e(_0x1500a, _0x41df47, "GeneratorFunction");
      }
      _0x1500a.prototype = Object.create(_0xc46172);
      return _0x1500a;
    };
    _0x180b52.awrap = function (_0x4abca6) {
      var _0xe7e43f = {
        __await: _0x4abca6
      };
      return _0xe7e43f;
    };
    _0x14f46d(_0x2ae800.prototype);
    _0x11c44e(_0x2ae800.prototype, _0x35acb1, function () {
      return this;
    });
    _0x180b52.AsyncIterator = _0x2ae800;
    _0x180b52.async = function (_0x50f0b7, _0x2c042d, _0x30132d, _0x899d32, _0x18d4b4) {
      if (undefined === _0x18d4b4) {
        _0x18d4b4 = Promise;
      }
      var _0x778d64 = new _0x2ae800(_0x9c4bde(_0x50f0b7, _0x2c042d, _0x30132d, _0x899d32), _0x18d4b4);
      return _0x180b52.isGeneratorFunction(_0x2c042d) ? _0x778d64 : _0x778d64.next().then(function (_0x198de4) {
        return _0x198de4.done ? _0x198de4.value : _0x778d64.next();
      });
    };
    _0x14f46d(_0xc46172);
    _0x11c44e(_0xc46172, _0x41df47, "Generator");
    _0x11c44e(_0xc46172, _0x49c519, function () {
      return this;
    });
    _0x11c44e(_0xc46172, "toString", function () {
      return "[object Generator]";
    });
    _0x180b52.keys = function (_0x3d87b4) {
      var _0x1a416e = Object(_0x3d87b4);
      var _0x1dc418 = [];
      for (var _0x36be29 in _0x1a416e) _0x1dc418.push(_0x36be29);
      _0x1dc418.reverse();
      return function _0xec86d3() {
        for (; _0x1dc418.length;) {
          var _0x15fefd = _0x1dc418.pop();
          if (_0x15fefd in _0x1a416e) {
            _0xec86d3.value = _0x15fefd;
            _0xec86d3.done = false;
            return _0xec86d3;
          }
        }
        _0xec86d3.done = true;
        return _0xec86d3;
      };
    };
    _0x180b52.values = _0x36c350;
    _0x5aa415.prototype = {
      'constructor': _0x5aa415,
      'reset': function (_0x169597) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x223d07;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x223d07;
        this.tryEntries.forEach(_0xcb134a);
        if (!_0x169597) {
          for (var _0x211112 in this) if ('t' === _0x211112.charAt(0) && _0x3cabb0.call(this, _0x211112) && !isNaN(+_0x211112.slice(1))) {
            this[_0x211112] = _0x223d07;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x192b3c = this.tryEntries[0].completion;
        if ("throw" === _0x192b3c.type) {
          throw _0x192b3c.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0x544b25) {
        if (this.done) {
          throw _0x544b25;
        }
        var _0x5bdf38 = this;
        function _0x3bea0c(_0x35b8ec, _0x2482af) {
          _0x3a8ae4.type = "throw";
          _0x3a8ae4.arg = _0x544b25;
          _0x5bdf38.next = _0x35b8ec;
          if (_0x2482af) {
            _0x5bdf38.method = "next";
            _0x5bdf38.arg = _0x223d07;
          }
          return !!_0x2482af;
        }
        for (var _0x55ce5a = this.tryEntries.length - 1; _0x55ce5a >= 0; --_0x55ce5a) {
          var _0x52d45b = this.tryEntries[_0x55ce5a];
          var _0x3a8ae4 = _0x52d45b.completion;
          if ("root" === _0x52d45b.tryLoc) {
            return _0x3bea0c('end');
          }
          if (_0x52d45b.tryLoc <= this.prev) {
            var _0xe16dc9 = _0x3cabb0.call(_0x52d45b, "catchLoc");
            var _0x2abb8d = _0x3cabb0.call(_0x52d45b, "finallyLoc");
            if (_0xe16dc9 && _0x2abb8d) {
              if (this.prev < _0x52d45b.catchLoc) {
                return _0x3bea0c(_0x52d45b.catchLoc, true);
              }
              if (this.prev < _0x52d45b.finallyLoc) {
                return _0x3bea0c(_0x52d45b.finallyLoc);
              }
            } else {
              if (_0xe16dc9) {
                if (this.prev < _0x52d45b.catchLoc) {
                  return _0x3bea0c(_0x52d45b.catchLoc, true);
                }
              } else {
                if (!_0x2abb8d) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x52d45b.finallyLoc) {
                  return _0x3bea0c(_0x52d45b.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0x49724e, _0x152011) {
        for (var _0x6ce1f6 = this.tryEntries.length - 1; _0x6ce1f6 >= 0; --_0x6ce1f6) {
          var _0x440dd8 = this.tryEntries[_0x6ce1f6];
          if (_0x440dd8.tryLoc <= this.prev && _0x3cabb0.call(_0x440dd8, "finallyLoc") && this.prev < _0x440dd8.finallyLoc) {
            var _0x30679a = _0x440dd8;
            break;
          }
        }
        if (_0x30679a && ("break" === _0x49724e || "continue" === _0x49724e) && _0x30679a.tryLoc <= _0x152011 && _0x152011 <= _0x30679a.finallyLoc) {
          _0x30679a = null;
        }
        var _0x2a676c = _0x30679a ? _0x30679a.completion : {};
        _0x2a676c.type = _0x49724e;
        _0x2a676c.arg = _0x152011;
        return _0x30679a ? (this.method = 'next', this.next = _0x30679a.finallyLoc, _0x2febac) : this.complete(_0x2a676c);
      },
      'complete': function (_0x52c38e, _0x3d4fa5) {
        if ("throw" === _0x52c38e.type) {
          throw _0x52c38e.arg;
        }
        if ("break" === _0x52c38e.type || "continue" === _0x52c38e.type) {
          this.next = _0x52c38e.arg;
        } else if ("return" === _0x52c38e.type) {
          this.rval = this.arg = _0x52c38e.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x52c38e.type && _0x3d4fa5) {
          this.next = _0x3d4fa5;
        }
        return _0x2febac;
      },
      'finish': function (_0x25a928) {
        for (var _0xa24bc8 = this.tryEntries.length - 1; _0xa24bc8 >= 0; --_0xa24bc8) {
          var _0x5cfec5 = this.tryEntries[_0xa24bc8];
          if (_0x5cfec5.finallyLoc === _0x25a928) {
            this.complete(_0x5cfec5.completion, _0x5cfec5.afterLoc);
            _0xcb134a(_0x5cfec5);
            return _0x2febac;
          }
        }
      },
      'catch': function (_0x4834e0) {
        for (var _0x31f83a = this.tryEntries.length - 1; _0x31f83a >= 0; --_0x31f83a) {
          var _0x19a794 = this.tryEntries[_0x31f83a];
          if (_0x19a794.tryLoc === _0x4834e0) {
            var _0x2d1e37 = _0x19a794.completion;
            if ("throw" === _0x2d1e37.type) {
              var _0x4f66cb = _0x2d1e37.arg;
              _0xcb134a(_0x19a794);
            }
            return _0x4f66cb;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0x47e254, _0x8f85a1, _0x2e87cf) {
        this.delegate = {
          'iterator': _0x36c350(_0x47e254),
          'resultName': _0x8f85a1,
          'nextLoc': _0x2e87cf
        };
        if ("next" === this.method) {
          this.arg = _0x223d07;
        }
        return _0x2febac;
      }
    };
    return _0x180b52;
  }
  function _0xde2063(_0x49a37c, _0x3160bf, _0x517b84, _0x26742d, _0x1c06cc, _0x24e29a, _0x8a6121) {
    try {
      var _0x54629c = _0x49a37c[_0x24e29a](_0x8a6121);
      var _0xf9829f = _0x54629c.value;
    } catch (_0x2e7563) {
      return void _0x517b84(_0x2e7563);
    }
    if (_0x54629c.done) {
      _0x3160bf(_0xf9829f);
    } else {
      Promise.resolve(_0xf9829f).then(_0x26742d, _0x1c06cc);
    }
  }
  function _0x37157e(_0x29843e) {
    return function () {
      var _0x585a2c = this;
      return new Promise(function (_0x4be44c, _0x3f87a8) {
        var _0x120b71 = _0x29843e.apply(_0x585a2c, arguments);
        function _0x10cdc6(_0x116a17) {
          _0xde2063(_0x120b71, _0x4be44c, _0x3f87a8, _0x10cdc6, _0x1d61bb, "next", _0x116a17);
        }
        function _0x1d61bb(_0x548b19) {
          _0xde2063(_0x120b71, _0x4be44c, _0x3f87a8, _0x10cdc6, _0x1d61bb, "throw", _0x548b19);
        }
        _0x10cdc6(undefined);
      });
    };
  }
  _0x47f58c.styleTagTransform = _0x5153bd();
  _0x47f58c.setAttributes = _0x3dfa69();
  _0x47f58c.insert = _0x2753bd().bind(null, 'head');
  _0x47f58c.domAPI = _0x521d13();
  _0x47f58c.insertStyleElement = _0x520032();
  _0x214fce()(_0x3f58ad.A, _0x47f58c);
  if (_0x3f58ad.A && _0x3f58ad.A.locals) {
    _0x3f58ad.A.locals;
  }
  var _0x2c4bb2 = _0x326b7a(_0x326b7a(_0x326b7a(_0x326b7a({
    'createCard': function () {
      var _0x2e6dc5 = document.createElement('link');
      _0x2e6dc5.rel = "stylesheet";
      _0x2e6dc5.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap";
      document.head.appendChild(_0x2e6dc5);
      var _0x344c41 = document.createElement('link');
      _0x344c41.rel = "stylesheet";
      _0x344c41.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
      document.head.appendChild(_0x344c41);
      var _0x3dd174 = document.createElement("meta");
      _0x3dd174.name = "viewport";
      _0x3dd174.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
      document.head.appendChild(_0x3dd174);
      var _0x45269a = document.createElement("div");
      _0x45269a.innerHTML = "\n            <div class=\"yma-floating-card\" id=\"toolCard\">\n                <div class=\"yma-card-header\">\n                    <div class=\"yma-header-left\">\n                        <i class=\"fas fa-tools\"></i>\n                        <span class=\"yma-card-title\">Công cụ hỗ trợ</span>\n                    </div>\n                    <button class=\"yma-minimize-btn\" id=\"minimizeBtn\">\n                        <i class=\"fas fa-minus\"></i>\n                    </button>\n                </div>\n                <div class=\"yma-notification\" id=\"notification\">\n                    <i class=\"fas fa-info-circle\"></i>\n                    <span class=\"yma-notification-message\">Thông báo sẽ hiển thị ở đây</span>\n                </div>\n                <div class=\"yma-card-content\">\n                    <div class=\"yma-input-group\">\n                        <i class=\"fas fa-link\"></i>\n                        <input type=\"text\" class=\"yma-url-input\" placeholder=\"Nhập URL...\" id=\"urlInput\">\n                    </div>\n                    <div class=\"yma-checkbox-group\">\n                        <label class=\"yma-checkbox-wrapper\">\n                            <input type=\"checkbox\" class=\"yma-custom-checkbox\" checked id=\"autoNavigateCheck\">\n                            <i class=\"fas fa-random\"></i>\n                            <span>Tự động chuyển trang</span>\n                        </label>\n                        <label class=\"yma-checkbox-wrapper\">\n                            <input type=\"checkbox\" class=\"yma-custom-checkbox\" checked id=\"autoBypassCheck\">\n                            <i class=\"fas fa-shield-alt\"></i>\n                            <span>Tự động bypass</span>\n                        </label>\n                    </div>\n                    <div class=\"yma-button-group\">\n                        <button class=\"yma-btn yma-btn-primary\" id=\"bypassBtn\">\n                            <i class=\"fas fa-rocket\"></i>\n                            Bypass\n                        </button>\n                        <button class=\"yma-btn yma-btn-secondary\" id=\"changeQuestBtn\">\n                            <i class=\"fas fa-sync-alt\"></i>\n                            Đổi nhiệm vụ\n                        </button>\n                    </div>\n                </div>\n            </div>\n        ";
      document.body.appendChild(_0x45269a);
      this.initializeEvents();
    },
    'initializeEvents': function () {
      var _0x426737 = this;
      return _0x37157e(_0x1c81d2().mark(function _0x2a4cc7() {
        var _0x49b50c;
        var _0x1f4117;
        var _0x2960a7;
        var _0x312888;
        var _0x1e86bb;
        var _0x599b00;
        var _0x4e6ff4;
        var _0xf47894;
        var _0x494cbc;
        return _0x1c81d2().wrap(function (_0x2d718a) {
          for (;;) {
            switch (_0x2d718a.prev = _0x2d718a.next) {
              case 0:
                _0x49b50c = document.getElementById("minimizeBtn");
                _0x1f4117 = document.getElementById("toolCard");
                _0x2960a7 = document.getElementById("notification");
                _0x312888 = false;
                _0x49b50c.addEventListener("click", function () {
                  if (_0x312888 = !_0x312888) {
                    _0x1f4117.classList.add("yma-minimized");
                    _0x49b50c.innerHTML = "<i class=\"fas fa-plus\"></i>";
                    _0x1f4117.querySelector(".yma-card-content").style.display = 'none';
                    _0x1f4117.querySelector(".yma-header-left").style.display = 'none';
                    _0x2960a7.dataset.wasShowing = _0x2960a7.classList.contains("show") ? 'true' : "false";
                    _0x2960a7.classList.remove("show");
                    _0x2960a7.style.display = 'none';
                  } else {
                    _0x1f4117.classList.remove("yma-minimized");
                    _0x49b50c.innerHTML = "<i class=\"fas fa-minus\"></i>";
                    _0x1f4117.querySelector(".yma-card-content").style.display = "block";
                    _0x1f4117.querySelector(".yma-header-left").style.display = "flex";
                    if ('true' === _0x2960a7.dataset.wasShowing) {
                      _0x2960a7.classList.add("show");
                      _0x2960a7.style.display = "flex";
                    }
                  }
                });
                _0x1e86bb = document.getElementById("bypassBtn");
                _0x599b00 = document.getElementById("changeQuestBtn");
                _0x4e6ff4 = document.getElementById("autoNavigateCheck");
                _0xf47894 = document.getElementById("autoBypassCheck");
                _0x494cbc = document.getElementById("urlInput");
                _0x1e86bb.addEventListener("click", function () {
                  if (_0xf47894.checked) {
                    _0x426737.autoBypass(_0x4e6ff4.checked);
                  } else {
                    if (!_0x494cbc.value) {
                      return void _0x426737.showNotification("Vui lòng nhập URL", 3000);
                    }
                    if (document.querySelector(".box-step-getCode > span > img").getAttribute("src").includes("/theme_v2/assets/img/img-get-code-dr.webp")) {
                      _0x426737.handleBypassUsingUrlV2(_0x494cbc.value, _0x4e6ff4.checked);
                    } else {
                      _0x426737.handleBypassUsingUrlV1(_0x494cbc.value, _0x4e6ff4.checked);
                    }
                  }
                });
                _0x599b00.addEventListener("click", function () {
                  _0x426737.handleChangeQuest();
                });
                _0x2d718a.next = 14;
                return _0x2b1fad(1000);
              case 14:
                _0x1e86bb.click();
              case 15:
              case "end":
                return _0x2d718a.stop();
            }
          }
        }, _0x2a4cc7);
      }))();
    },
    'handleChangeQuest': function () {
      return _0x37157e(_0x1c81d2().mark(function _0x4d6310() {
        return _0x1c81d2().wrap(function (_0x4e2a0b) {
          for (;;) {
            switch (_0x4e2a0b.prev = _0x4e2a0b.next) {
              case 0:
                document.getElementById("btn-baoloi").click();
                _0x4e2a0b.next = 4;
                return _0x2b1fad(200);
              case 4:
                document.querySelector("a[onclick=\"lydo_doima()\"]").click();
                _0x4e2a0b.next = 8;
                return _0x2b1fad(200);
              case 8:
                document.querySelector("input[type=\"radio\"][value=\"khac\"]").parentElement.click();
                _0x4e2a0b.next = 13;
                return _0x2b1fad(200);
              case 13:
                document.getElementById("dongy_doima").querySelector('a').click();
              case 16:
              case "end":
                return _0x4e2a0b.stop();
            }
          }
        }, _0x4d6310);
      }))();
    },
    'handleBypassUsingUrlV1': function (_0x107d62, _0x50d20e) {
      var _0x123830 = this;
      return _0x37157e(_0x1c81d2().mark(function _0x367b1f() {
        var _0x355abb;
        var _0x1f2a42;
        var _0x1a5ac8;
        var _0x565eb4;
        var _0x13b26e;
        var _0xae144f;
        var _0x4db81d;
        var _0x43d9b7;
        return _0x1c81d2().wrap(function (_0x13d293) {
          for (;;) {
            switch (_0x13d293.prev = _0x13d293.next) {
              case 0:
                _0x355abb = new Date().getTime();
                _0x13d293.next = 3;
                return _0x515cab.getVuaTraffic(_0x355abb, null);
              case 3:
                if (_0x1f2a42 = _0x13d293.sent) {
                  _0x13d293.next = 6;
                  break;
                }
                return _0x13d293.abrupt("return");
              case 6:
                _0x1a5ac8 = _0x1f2a42.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexn = '([^']+)';/)[1];
                _0x39a2fe(_0x1a5ac8);
                _0x13d293.next = 10;
                return _0x515cab.getMa(_0x1a5ac8, _0x107d62, null);
              case 10:
                _0x565eb4 = _0x13d293.sent;
                _0x13b26e = _0x25fc9a(_0x565eb4, false);
                _0x30c002(_0x13b26e);
                if (_0x13b26e) {
                  _0x13d293.next = 15;
                  break;
                }
                return _0x13d293.abrupt("return");
              case 15:
                window.localStorage.removeItem("codexn");
                _0xae144f = new Date().getTime();
                _0x13d293.next = 19;
                return _0x515cab.getVuaTraffic(_0xae144f, _0x355abb);
              case 19:
                if (_0x4db81d = _0x13d293.sent) {
                  _0x13d293.next = 22;
                  break;
                }
                return _0x13d293.abrupt("return");
              case 22:
                _0x1a5ac8 = _0x4db81d.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexn = '([^']+)';/)[1];
                _0x39a2fe(_0x1a5ac8);
                _0x13d293.next = 26;
                return _0x515cab.getMa(_0x1a5ac8, _0x107d62, _0x355abb);
              case 26:
                _0x43d9b7 = _0x13d293.sent;
                if (_0x13b26e = _0x25fc9a(_0x43d9b7)) {
                  _0x13d293.next = 30;
                  break;
                }
                return _0x13d293.abrupt("return");
              case 30:
                _0x5d3190.start(80, function (_0x1aaa9c) {
                  _0x123830.showNotification("Vui lòng chờ ".concat(_0x1aaa9c, " giây..."));
                }, function () {
                  _0x123830.showNotification("Đã hết thời gian chờ. Code của bạn là: ".concat(_0x13b26e));
                  if (_0x50d20e) {
                    _0x123830.autoNavigate(_0x13b26e);
                  }
                });
              case 31:
              case "end":
                return _0x13d293.stop();
            }
          }
        }, _0x367b1f);
      }))();
    },
    'handleBypassUsingUrlV2': function (_0x50b8d9, _0x1dd9a9) {
      var _0x38bcc5 = this;
      return _0x37157e(_0x1c81d2().mark(function _0x4045c1() {
        var _0x51c4c6;
        var _0x6bb8bc;
        var _0x18c467;
        var _0x3d63f1;
        var _0x43d11d;
        var _0x18dfe4;
        var _0x217d58;
        var _0x4fa1b8;
        var _0x16d0f6;
        var _0x36c04e;
        var _0x50c636;
        var _0x4edf65;
        return _0x1c81d2().wrap(function (_0x385167) {
          for (;;) {
            switch (_0x385167.prev = _0x385167.next) {
              case 0:
                _0x51c4c6 = new Date().getTime();
                _0x385167.next = 3;
                return _0x515cab.getDirectData(_0x51c4c6, _0x50b8d9, '', null);
              case 3:
                if (_0x6bb8bc = _0x385167.sent) {
                  _0x385167.next = 6;
                  break;
                }
                return _0x385167.abrupt("return");
              case 6:
                (_0x18c467 = _0x307965(_0x6bb8bc)).ref = '';
                _0x385167.next = 10;
                return _0x515cab.getDirectToken(_0x51c4c6, _0x50b8d9, '', null, _0x18c467);
              case 10:
                if (_0x3d63f1 = _0x385167.sent) {
                  _0x385167.next = 13;
                  break;
                }
                return _0x385167.abrupt("return");
              case 13:
                _0x43d11d = _0x3d63f1.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexnd = '([^']+)';/)[1];
                _0x1e0389(_0x43d11d);
                _0x385167.next = 17;
                return _0x515cab.getMd(_0x43d11d, _0x50b8d9, '', null);
              case 17:
                if (_0x18dfe4 = _0x385167.sent) {
                  _0x385167.next = 20;
                  break;
                }
                return _0x385167.abrupt("return");
              case 20:
                if (_0x217d58 = _0x25fc9a(_0x18dfe4, true)) {
                  _0x385167.next = 23;
                  break;
                }
                return _0x385167.abrupt("return");
              case 23:
                _0x4fa1b8 = _0x3e8eb5(_0x18dfe4);
                _0x385167.next = 26;
                return _0x515cab.getDirectData(new Date().getTime(), _0x50b8d9, _0x50b8d9, _0x4fa1b8);
              case 26:
                if (_0x16d0f6 = _0x385167.sent) {
                  _0x385167.next = 29;
                  break;
                }
                return _0x385167.abrupt("return");
              case 29:
                (_0x18c467 = _0x307965(_0x16d0f6)).ref = _0x50b8d9;
                _0x385167.next = 33;
                return _0x515cab.getDirectToken(_0x4fa1b8, _0x50b8d9, _0x50b8d9, _0x4fa1b8, _0x18c467);
              case 33:
                if (_0x36c04e = _0x385167.sent) {
                  _0x385167.next = 36;
                  break;
                }
                return _0x385167.abrupt("return");
              case 36:
                _0x50c636 = _0x36c04e.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexnd = '([^']+)';/)[1];
                _0x1e0389(_0x50c636);
                _0x385167.next = 40;
                return _0x515cab.getMd(_0x50c636, _0x50b8d9, _0x50b8d9, _0x4fa1b8);
              case 40:
                if (_0x4edf65 = _0x385167.sent) {
                  _0x385167.next = 43;
                  break;
                }
                return _0x385167.abrupt("return");
              case 43:
                if (_0x217d58 = _0x25fc9a(_0x4edf65, true)) {
                  _0x385167.next = 46;
                  break;
                }
                return _0x385167.abrupt("return");
              case 46:
                _0x5d3190.start(80, function (_0x53b1ce) {
                  _0x38bcc5.showNotification("Vui lòng chờ ".concat(_0x53b1ce, " giây..."));
                }, function () {
                  _0x38bcc5.showNotification("Đã hết thời gian chờ. Code của bạn là: ".concat(_0x217d58));
                  if (_0x1dd9a9) {
                    _0x38bcc5.autoNavigate(_0x217d58);
                  }
                });
              case 47:
              case "end":
                return _0x385167.stop();
            }
          }
        }, _0x4045c1);
      }))();
    },
    'showNotification': function (_0x5b3340, _0x599154) {
      var _0x5b0c0f = document.getElementById("notification");
      _0x5b0c0f.querySelector(".yma-notification-message").textContent = _0x5b3340;
      _0x5b0c0f.classList.add("show");
      setTimeout(function () {
        _0x5b0c0f.classList.remove("show");
      }, _0x599154);
    }
  }, "showNotification", function (_0x58c004) {
    var _0x43cb8e = document.getElementById("notification");
    _0x43cb8e.querySelector(".yma-notification-message").textContent = _0x58c004;
    _0x43cb8e.classList.add('show');
  }), "handleOrc", function () {
    return _0x37157e(_0x1c81d2().mark(function _0xf4fcf6() {
      var _0x41400c;
      var _0x3c1f2c;
      var _0x336e74;
      return _0x1c81d2().wrap(function (_0x170cd3) {
        for (;;) {
          switch (_0x170cd3.prev = _0x170cd3.next) {
            case 0:
              _0x41400c = "K81664733488957";
              if (_0x3c1f2c = document.getElementById("hinh_nv") ? document.getElementById("hinh_nv").getAttribute("src") : null) {
                _0x170cd3.next = 4;
                break;
              }
              return _0x170cd3.abrupt("return");
            case 4:
              _0x170cd3.next = 6;
              return _0x515cab.getOrc(_0x41400c, _0x3c1f2c);
            case 6:
              if (_0x336e74 = _0x170cd3.sent) {
                _0x170cd3.next = 9;
                break;
              }
              return _0x170cd3.abrupt("return");
            case 9:
              _0x39211b(_0x336e74);
            case 10:
            case "end":
              return _0x170cd3.stop();
          }
        }
      }, _0xf4fcf6);
    }))();
  }), "autoBypass", function (_0x100392) {
    var _0x2e8a28 = this;
    return _0x37157e(_0x1c81d2().mark(function _0x469fa2() {
      var _0x2b8e2a;
      var _0x1afed8;
      return _0x1c81d2().wrap(function (_0x3ea28d) {
        for (;;) {
          switch (_0x3ea28d.prev = _0x3ea28d.next) {
            case 0:
              if (_0x2b8e2a = document.getElementById('TK1') ? document.getElementById('TK1').textContent : null) {
                _0x3ea28d.next = 3;
                break;
              }
              return _0x3ea28d.abrupt("return");
            case 3:
              if (!document.querySelector(".box-step-getCode > span > img").getAttribute("src").includes("/theme_v2/assets/img/img-get-code-dr.webp")) {
                _0x3ea28d.next = 8;
                break;
              }
              _0x5eebc1(_0x2b8e2a);
              _0x3ea28d.next = 7;
              return _0x2e8a28.handleBypassUsingUrlV2(_0x2b8e2a, _0x100392);
            case 7:
              return _0x3ea28d.abrupt("return");
            case 8:
              if (_0x1afed8 = _0x242f00[_0x2b8e2a]) {
                _0x3ea28d.next = 12;
                break;
              }
              _0x2e8a28.showNotification("Không tìm thấy URL phù hợp", 3000);
              return _0x3ea28d.abrupt("return");
            case 12:
              _0x5eebc1(_0x1afed8);
              _0x3ea28d.next = 15;
              return _0x2e8a28.handleBypassUsingUrlV1(_0x1afed8, _0x100392);
            case 15:
            case "end":
              return _0x3ea28d.stop();
          }
        }
      }, _0x469fa2);
    }))();
  }), "autoNavigate", function (_0xdb83d4) {
    var _0x3abad6 = document.querySelector("input[name=\"code\"][placeholder=\"Nhập mã vào đây\"]");
    if (_0x3abad6) {
      _0x3abad6.value = _0xdb83d4;
      document.getElementById("btn-xac-nhan").click();
    }
  });
  function _0x286300() {
    var _0x686fb2 = document.getElementById("toolCard");
    if (_0x686fb2) {
      var _0x3c916e = _0x686fb2.querySelector(".yma-card-content");
      if (_0x3c916e && !_0x3c916e.querySelector(".yma-copyright")) {
        var _0x122d86 = document.createElement("div");
        _0x122d86.className = "yma-copyright";
        _0x122d86.style.display = "flex";
        _0x122d86.style.alignItems = "center";
        _0x122d86.style.justifyContent = "center";
        _0x122d86.style.gap = "8px";
        _0x122d86.style.marginTop = "20px";
        _0x122d86.style.paddingTop = "15px";
        _0x122d86.style.borderTop = "1px solid rgba(76, 175, 80, 0.1)";
        _0x122d86.style.fontSize = "13px";
        _0x122d86.style.color = "#888";
        _0x122d86.style.transition = "all 0.3s ease";
        _0x122d86.style.background = "linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(76, 175, 80, 0.1))";
        _0x122d86.style.padding = '10px';
        _0x122d86.style.borderRadius = "8px";
        var _0x5ef3d8 = document.createElement('i');
        _0x5ef3d8.className = "fas fa-code";
        _0x5ef3d8.style.color = "var(--yma-primary-color)";
        _0x5ef3d8.style.fontSize = "16px";
        _0x5ef3d8.style.animation = "pulse 2s infinite";
        var _0x4e98eb = document.createElement("span");
        _0x4e98eb.textContent = "Developed by ";
        var _0x35a7e2 = document.createElement("span");
        _0x35a7e2.className = "yma-copyright-name";
        _0x35a7e2.textContent = "@thjvjpxz";
        _0x35a7e2.style.background = "linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0)";
        _0x35a7e2.style.webkitBackgroundClip = 'text';
        _0x35a7e2.style.backgroundClip = "text";
        _0x35a7e2.style.webkitTextFillColor = "transparent";
        _0x35a7e2.style.fontWeight = "600";
        _0x35a7e2.style.letterSpacing = '0.5px';
        _0x35a7e2.style.position = "relative";
        var _0x468bdc = document.createElement('style');
        _0x468bdc.textContent = "\n            @keyframes pulse {\n                0% { transform: scale(1); }\n                50% { transform: scale(1.1); }\n                100% { transform: scale(1); }\n            }\n            \n            .yma-copyright:hover {\n                box-shadow: 0 4px 12px rgba(76, 175, 80, 0.15);\n                transform: translateY(-2px);\n            }\n            \n            .yma-copyright-name-after {\n                content: '';\n                position: absolute;\n                bottom: -2px;\n                left: 0;\n                width: 100%;\n                height: 1px;\n                background: linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0);\n                transform: scaleX(0);\n                transform-origin: left;\n                transition: transform 0.3s ease;\n            }\n            \n            .yma-copyright:hover .yma-copyright-name-after {\n                transform: scaleX(1);\n            }\n        ";
        document.head.appendChild(_0x468bdc);
        var _0x3eec06 = document.createElement("span");
        var _0x238152 = {
          childList: true,
          subtree: true
        };
        _0x3eec06.className = "yma-copyright-name-after";
        _0x3eec06.style.position = "absolute";
        _0x3eec06.style.bottom = "-2px";
        _0x3eec06.style.left = '0';
        _0x3eec06.style.width = '100%';
        _0x3eec06.style.height = "1px";
        _0x3eec06.style.background = "linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0)";
        _0x3eec06.style.transform = "scaleX(0)";
        _0x3eec06.style.transformOrigin = 'left';
        _0x3eec06.style.transition = "transform 0.3s ease";
        _0x35a7e2.appendChild(_0x3eec06);
        _0x122d86.addEventListener("mouseenter", function () {
          _0x122d86.style.boxShadow = "0 4px 12px rgba(76, 175, 80, 0.15)";
          _0x122d86.style.transform = "translateY(-2px)";
          _0x3eec06.style.transform = "scaleX(1)";
        });
        _0x122d86.addEventListener("mouseleave", function () {
          _0x122d86.style.boxShadow = "none";
          _0x122d86.style.transform = "translateY(0)";
          _0x3eec06.style.transform = "scaleX(0)";
        });
        _0x4e98eb.appendChild(_0x35a7e2);
        _0x122d86.appendChild(_0x5ef3d8);
        _0x122d86.appendChild(_0x4e98eb);
        _0x3c916e.appendChild(_0x122d86);
        new MutationObserver(function (_0x29fd16) {
          _0x29fd16.forEach(function (_0xc7ebbf) {
            if (_0xc7ebbf.removedNodes) {
              _0xc7ebbf.removedNodes.forEach(function (_0x3c37ef) {
                if (_0x3c37ef === _0x122d86 || _0x3c37ef.classList && _0x3c37ef.classList.contains("yma-copyright")) {
                  setTimeout(function () {
                    if (!_0x3c916e.querySelector(".yma-copyright")) {
                      _0x3c916e.appendChild(_0x122d86);
                    }
                  }, 100);
                }
              });
            }
          });
        }).observe(_0x3c916e, _0x238152);
      }
    }
  }
  function _0x59a033(_0x3f83b7) {
    _0x59a033 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x893eda) {
      return typeof _0x893eda;
    } : function (_0x42c9d7) {
      return _0x42c9d7 && "function" == typeof Symbol && _0x42c9d7.constructor === Symbol && _0x42c9d7 !== Symbol.prototype ? "symbol" : typeof _0x42c9d7;
    };
    return _0x59a033(_0x3f83b7);
  }
  function _0x59fee6() {
    _0x59fee6 = function () {
      return _0x552c55;
    };
    var _0x732c22;
    var _0x552c55 = {};
    var _0x8d5661 = Object.prototype;
    var _0x5463b1 = _0x8d5661.hasOwnProperty;
    var _0x46f2ee = Object.defineProperty || function (_0x3c7fdf, _0x4431a5, _0x252724) {
      _0x3c7fdf[_0x4431a5] = _0x252724.value;
    };
    var _0x3d7797 = "function" == typeof Symbol ? Symbol : {};
    var _0xf1e08 = _0x3d7797.iterator || "@@iterator";
    var _0x5ee35c = _0x3d7797.asyncIterator || "@@asyncIterator";
    var _0xa0302e = _0x3d7797.toStringTag || "@@toStringTag";
    function _0x159e09(_0x4d4808, _0x41dadd, _0x15988b) {
      var _0x5d501f = {
        "value": _0x15988b,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x4d4808, _0x41dadd, _0x5d501f);
      return _0x4d4808[_0x41dadd];
    }
    try {
      _0x159e09({}, '');
    } catch (_0x695721) {
      _0x159e09 = function (_0x77b3f6, _0xab5159, _0x263078) {
        return _0x77b3f6[_0xab5159] = _0x263078;
      };
    }
    function _0x53f6fe(_0x4b9083, _0x32d104, _0x3f959b, _0x3c030b) {
      var _0x1d735b = _0x32d104 && _0x32d104.prototype instanceof _0x3af941 ? _0x32d104 : _0x3af941;
      var _0x4bdcd8 = Object.create(_0x1d735b.prototype);
      var _0x43e984 = new _0xe48a07(_0x3c030b || []);
      _0x46f2ee(_0x4bdcd8, "_invoke", {
        'value': _0x531676(_0x4b9083, _0x3f959b, _0x43e984)
      });
      return _0x4bdcd8;
    }
    function _0x21c000(_0x2ca89e, _0x28deb4, _0x5ca9f8) {
      try {
        return {
          'type': "normal",
          'arg': _0x2ca89e.call(_0x28deb4, _0x5ca9f8)
        };
      } catch (_0x4e5573) {
        var _0x527913 = {
          "type": "throw",
          arg: _0x4e5573
        };
        return _0x527913;
      }
    }
    _0x552c55.wrap = _0x53f6fe;
    var _0x2332c9 = {};
    function _0x3af941() {}
    function _0x1b0c4f() {}
    function _0x51ac0a() {}
    var _0x52a10e = {};
    _0x159e09(_0x52a10e, _0xf1e08, function () {
      return this;
    });
    var _0x4cb5bd = Object.getPrototypeOf;
    var _0x51ebb9 = _0x4cb5bd && _0x4cb5bd(_0x4cb5bd(_0x2d17dd([])));
    if (_0x51ebb9 && _0x51ebb9 !== _0x8d5661 && _0x5463b1.call(_0x51ebb9, _0xf1e08)) {
      _0x52a10e = _0x51ebb9;
    }
    var _0x5da7cf = _0x51ac0a.prototype = _0x3af941.prototype = Object.create(_0x52a10e);
    function _0x196fe7(_0x560958) {
      ["next", "throw", "return"].forEach(function (_0x10c4ca) {
        _0x159e09(_0x560958, _0x10c4ca, function (_0x3ba5f5) {
          return this._invoke(_0x10c4ca, _0x3ba5f5);
        });
      });
    }
    function _0xf499d5(_0x55509d, _0xd015d5) {
      function _0x41c03c(_0x5a2fe4, _0x11e67f, _0x2f2912, _0x459a94) {
        var _0x2b116f = _0x21c000(_0x55509d[_0x5a2fe4], _0x55509d, _0x11e67f);
        if ("throw" !== _0x2b116f.type) {
          var _0x320db3 = _0x2b116f.arg;
          var _0x391297 = _0x320db3.value;
          return _0x391297 && "object" == _0x59a033(_0x391297) && _0x5463b1.call(_0x391297, "__await") ? _0xd015d5.resolve(_0x391297.__await).then(function (_0x5903c1) {
            _0x41c03c('next', _0x5903c1, _0x2f2912, _0x459a94);
          }, function (_0x797a5a) {
            _0x41c03c("throw", _0x797a5a, _0x2f2912, _0x459a94);
          }) : _0xd015d5.resolve(_0x391297).then(function (_0x33fc0a) {
            _0x320db3.value = _0x33fc0a;
            _0x2f2912(_0x320db3);
          }, function (_0x3b2bc7) {
            return _0x41c03c("throw", _0x3b2bc7, _0x2f2912, _0x459a94);
          });
        }
        _0x459a94(_0x2b116f.arg);
      }
      var _0x269173;
      _0x46f2ee(this, "_invoke", {
        'value': function (_0x7fa00d, _0x90b3bd) {
          function _0x31c60a() {
            return new _0xd015d5(function (_0x1f35c9, _0x53681e) {
              _0x41c03c(_0x7fa00d, _0x90b3bd, _0x1f35c9, _0x53681e);
            });
          }
          return _0x269173 = _0x269173 ? _0x269173.then(_0x31c60a, _0x31c60a) : _0x31c60a();
        }
      });
    }
    function _0x531676(_0x165dea, _0x484a9c, _0x291775) {
      var _0x1dd8d9 = "suspendedStart";
      return function (_0x213818, _0x466204) {
        if (_0x1dd8d9 === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x1dd8d9 === "completed") {
          if ("throw" === _0x213818) {
            throw _0x466204;
          }
          var _0x240f97 = {
            value: _0x732c22,
            "done": true
          };
          return _0x240f97;
        }
        _0x291775.method = _0x213818;
        for (_0x291775.arg = _0x466204;;) {
          var _0x3eb78c = _0x291775.delegate;
          if (_0x3eb78c) {
            var _0x32a9c9 = _0xde28a5(_0x3eb78c, _0x291775);
            if (_0x32a9c9) {
              if (_0x32a9c9 === _0x2332c9) {
                continue;
              }
              return _0x32a9c9;
            }
          }
          if ('next' === _0x291775.method) {
            _0x291775.sent = _0x291775._sent = _0x291775.arg;
          } else {
            if ("throw" === _0x291775.method) {
              if (_0x1dd8d9 === "suspendedStart") {
                _0x1dd8d9 = "completed";
                throw _0x291775.arg;
              }
              _0x291775.dispatchException(_0x291775.arg);
            } else if ("return" === _0x291775.method) {
              _0x291775.abrupt("return", _0x291775.arg);
            }
          }
          _0x1dd8d9 = "executing";
          var _0x777b33 = _0x21c000(_0x165dea, _0x484a9c, _0x291775);
          if ("normal" === _0x777b33.type) {
            _0x1dd8d9 = _0x291775.done ? "completed" : "suspendedYield";
            if (_0x777b33.arg === _0x2332c9) {
              continue;
            }
            var _0xede030 = {
              "value": _0x777b33.arg,
              "done": _0x291775.done
            };
            return _0xede030;
          }
          if ('throw' === _0x777b33.type) {
            _0x1dd8d9 = "completed";
            _0x291775.method = "throw";
            _0x291775.arg = _0x777b33.arg;
          }
        }
      };
    }
    function _0xde28a5(_0x3c297b, _0x4a208f) {
      var _0x2526b3 = _0x4a208f.method;
      var _0x351f86 = _0x3c297b.iterator[_0x2526b3];
      if (_0x351f86 === _0x732c22) {
        _0x4a208f.delegate = null;
        if (!("throw" === _0x2526b3 && _0x3c297b.iterator["return"] && (_0x4a208f.method = "return", _0x4a208f.arg = _0x732c22, _0xde28a5(_0x3c297b, _0x4a208f), "throw" === _0x4a208f.method))) {
          if ("return" !== _0x2526b3) {
            _0x4a208f.method = "throw";
            _0x4a208f.arg = new TypeError("The iterator does not provide a '" + _0x2526b3 + "' method");
          }
        }
        return _0x2332c9;
      }
      var _0x15a55d = _0x21c000(_0x351f86, _0x3c297b.iterator, _0x4a208f.arg);
      if ("throw" === _0x15a55d.type) {
        _0x4a208f.method = "throw";
        _0x4a208f.arg = _0x15a55d.arg;
        _0x4a208f.delegate = null;
        return _0x2332c9;
      }
      var _0x59165d = _0x15a55d.arg;
      return _0x59165d ? _0x59165d.done ? (_0x4a208f[_0x3c297b.resultName] = _0x59165d.value, _0x4a208f.next = _0x3c297b.nextLoc, "return" !== _0x4a208f.method && (_0x4a208f.method = 'next', _0x4a208f.arg = _0x732c22), _0x4a208f.delegate = null, _0x2332c9) : _0x59165d : (_0x4a208f.method = "throw", _0x4a208f.arg = new TypeError("iterator result is not an object"), _0x4a208f.delegate = null, _0x2332c9);
    }
    function _0xd47417(_0x441aea) {
      var _0x3c8487 = {
        tryLoc: _0x441aea[0]
      };
      if (1 in _0x441aea) {
        _0x3c8487.catchLoc = _0x441aea[1];
      }
      if (2 in _0x441aea) {
        _0x3c8487.finallyLoc = _0x441aea[2];
        _0x3c8487.afterLoc = _0x441aea[3];
      }
      this.tryEntries.push(_0x3c8487);
    }
    function _0x5dce67(_0x1fe3e9) {
      var _0x300dc4 = _0x1fe3e9.completion || {};
      _0x300dc4.type = "normal";
      delete _0x300dc4.arg;
      _0x1fe3e9.completion = _0x300dc4;
    }
    function _0xe48a07(_0x33f446) {
      var _0x19defa = {
        tryLoc: 'root'
      };
      this.tryEntries = [_0x19defa];
      _0x33f446.forEach(_0xd47417, this);
      this.reset(true);
    }
    function _0x2d17dd(_0x5d799c) {
      if (_0x5d799c || '' === _0x5d799c) {
        var _0x24de9c = _0x5d799c[_0xf1e08];
        if (_0x24de9c) {
          return _0x24de9c.call(_0x5d799c);
        }
        if ("function" == typeof _0x5d799c.next) {
          return _0x5d799c;
        }
        if (!isNaN(_0x5d799c.length)) {
          var _0x11d411 = -1;
          var _0x3f9b14 = function _0x4bee51() {
            for (; ++_0x11d411 < _0x5d799c.length;) {
              if (_0x5463b1.call(_0x5d799c, _0x11d411)) {
                _0x4bee51.value = _0x5d799c[_0x11d411];
                _0x4bee51.done = false;
                return _0x4bee51;
              }
            }
            _0x4bee51.value = _0x732c22;
            _0x4bee51.done = true;
            return _0x4bee51;
          };
          return _0x3f9b14.next = _0x3f9b14;
        }
      }
      throw new TypeError(_0x59a033(_0x5d799c) + " is not iterable");
    }
    _0x1b0c4f.prototype = _0x51ac0a;
    _0x46f2ee(_0x5da7cf, "constructor", {
      'value': _0x51ac0a,
      'configurable': true
    });
    _0x46f2ee(_0x51ac0a, "constructor", {
      'value': _0x1b0c4f,
      'configurable': true
    });
    _0x1b0c4f.displayName = _0x159e09(_0x51ac0a, _0xa0302e, "GeneratorFunction");
    _0x552c55.isGeneratorFunction = function (_0x3422fc) {
      var _0x445edd = "function" == typeof _0x3422fc && _0x3422fc.constructor;
      return !!_0x445edd && (_0x445edd === _0x1b0c4f || "GeneratorFunction" === (_0x445edd.displayName || _0x445edd.name));
    };
    _0x552c55.mark = function (_0x56bc61) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x56bc61, _0x51ac0a);
      } else {
        _0x56bc61.__proto__ = _0x51ac0a;
        _0x159e09(_0x56bc61, _0xa0302e, "GeneratorFunction");
      }
      _0x56bc61.prototype = Object.create(_0x5da7cf);
      return _0x56bc61;
    };
    _0x552c55.awrap = function (_0x55f1ca) {
      var _0x535a5a = {
        __await: _0x55f1ca
      };
      return _0x535a5a;
    };
    _0x196fe7(_0xf499d5.prototype);
    _0x159e09(_0xf499d5.prototype, _0x5ee35c, function () {
      return this;
    });
    _0x552c55.AsyncIterator = _0xf499d5;
    _0x552c55.async = function (_0x11dda7, _0x48118b, _0x4b4660, _0x101c2a, _0x17d7ec) {
      if (undefined === _0x17d7ec) {
        _0x17d7ec = Promise;
      }
      var _0x118e48 = new _0xf499d5(_0x53f6fe(_0x11dda7, _0x48118b, _0x4b4660, _0x101c2a), _0x17d7ec);
      return _0x552c55.isGeneratorFunction(_0x48118b) ? _0x118e48 : _0x118e48.next().then(function (_0x1eae31) {
        return _0x1eae31.done ? _0x1eae31.value : _0x118e48.next();
      });
    };
    _0x196fe7(_0x5da7cf);
    _0x159e09(_0x5da7cf, _0xa0302e, "Generator");
    _0x159e09(_0x5da7cf, _0xf1e08, function () {
      return this;
    });
    _0x159e09(_0x5da7cf, "toString", function () {
      return "[object Generator]";
    });
    _0x552c55.keys = function (_0x1676ee) {
      var _0x512c95 = Object(_0x1676ee);
      var _0x2e49b3 = [];
      for (var _0x1d4807 in _0x512c95) _0x2e49b3.push(_0x1d4807);
      _0x2e49b3.reverse();
      return function _0x55191a() {
        for (; _0x2e49b3.length;) {
          var _0x10dfdd = _0x2e49b3.pop();
          if (_0x10dfdd in _0x512c95) {
            _0x55191a.value = _0x10dfdd;
            _0x55191a.done = false;
            return _0x55191a;
          }
        }
        _0x55191a.done = true;
        return _0x55191a;
      };
    };
    _0x552c55.values = _0x2d17dd;
    _0xe48a07.prototype = {
      'constructor': _0xe48a07,
      'reset': function (_0x2a0570) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x732c22;
        this.done = false;
        this.delegate = null;
        this.method = 'next';
        this.arg = _0x732c22;
        this.tryEntries.forEach(_0x5dce67);
        if (!_0x2a0570) {
          for (var _0x58c39f in this) if ('t' === _0x58c39f.charAt(0) && _0x5463b1.call(this, _0x58c39f) && !isNaN(+_0x58c39f.slice(1))) {
            this[_0x58c39f] = _0x732c22;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x3f5326 = this.tryEntries[0].completion;
        if ("throw" === _0x3f5326.type) {
          throw _0x3f5326.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0x2e5fff) {
        if (this.done) {
          throw _0x2e5fff;
        }
        var _0x426c32 = this;
        function _0x111545(_0x15b0c5, _0xa3181c) {
          _0x193b3f.type = 'throw';
          _0x193b3f.arg = _0x2e5fff;
          _0x426c32.next = _0x15b0c5;
          if (_0xa3181c) {
            _0x426c32.method = 'next';
            _0x426c32.arg = _0x732c22;
          }
          return !!_0xa3181c;
        }
        for (var _0x4cbe97 = this.tryEntries.length - 1; _0x4cbe97 >= 0; --_0x4cbe97) {
          var _0x20ea70 = this.tryEntries[_0x4cbe97];
          var _0x193b3f = _0x20ea70.completion;
          if ("root" === _0x20ea70.tryLoc) {
            return _0x111545('end');
          }
          if (_0x20ea70.tryLoc <= this.prev) {
            var _0x5a9ed3 = _0x5463b1.call(_0x20ea70, "catchLoc");
            var _0x1ae5a5 = _0x5463b1.call(_0x20ea70, "finallyLoc");
            if (_0x5a9ed3 && _0x1ae5a5) {
              if (this.prev < _0x20ea70.catchLoc) {
                return _0x111545(_0x20ea70.catchLoc, true);
              }
              if (this.prev < _0x20ea70.finallyLoc) {
                return _0x111545(_0x20ea70.finallyLoc);
              }
            } else {
              if (_0x5a9ed3) {
                if (this.prev < _0x20ea70.catchLoc) {
                  return _0x111545(_0x20ea70.catchLoc, true);
                }
              } else {
                if (!_0x1ae5a5) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x20ea70.finallyLoc) {
                  return _0x111545(_0x20ea70.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0x2ba1a8, _0x94b890) {
        for (var _0x4d16b0 = this.tryEntries.length - 1; _0x4d16b0 >= 0; --_0x4d16b0) {
          var _0x78095a = this.tryEntries[_0x4d16b0];
          if (_0x78095a.tryLoc <= this.prev && _0x5463b1.call(_0x78095a, "finallyLoc") && this.prev < _0x78095a.finallyLoc) {
            var _0x47abdc = _0x78095a;
            break;
          }
        }
        if (_0x47abdc && ("break" === _0x2ba1a8 || "continue" === _0x2ba1a8) && _0x47abdc.tryLoc <= _0x94b890 && _0x94b890 <= _0x47abdc.finallyLoc) {
          _0x47abdc = null;
        }
        var _0x4c9d56 = _0x47abdc ? _0x47abdc.completion : {};
        _0x4c9d56.type = _0x2ba1a8;
        _0x4c9d56.arg = _0x94b890;
        return _0x47abdc ? (this.method = 'next', this.next = _0x47abdc.finallyLoc, _0x2332c9) : this.complete(_0x4c9d56);
      },
      'complete': function (_0x359719, _0x30118c) {
        if ("throw" === _0x359719.type) {
          throw _0x359719.arg;
        }
        if ("break" === _0x359719.type || "continue" === _0x359719.type) {
          this.next = _0x359719.arg;
        } else if ("return" === _0x359719.type) {
          this.rval = this.arg = _0x359719.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x359719.type && _0x30118c) {
          this.next = _0x30118c;
        }
        return _0x2332c9;
      },
      'finish': function (_0x55e0b4) {
        for (var _0x55c805 = this.tryEntries.length - 1; _0x55c805 >= 0; --_0x55c805) {
          var _0x5e057e = this.tryEntries[_0x55c805];
          if (_0x5e057e.finallyLoc === _0x55e0b4) {
            this.complete(_0x5e057e.completion, _0x5e057e.afterLoc);
            _0x5dce67(_0x5e057e);
            return _0x2332c9;
          }
        }
      },
      'catch': function (_0x25e2a5) {
        for (var _0x49d20a = this.tryEntries.length - 1; _0x49d20a >= 0; --_0x49d20a) {
          var _0x489ea0 = this.tryEntries[_0x49d20a];
          if (_0x489ea0.tryLoc === _0x25e2a5) {
            var _0x570e15 = _0x489ea0.completion;
            if ("throw" === _0x570e15.type) {
              var _0xcc802e = _0x570e15.arg;
              _0x5dce67(_0x489ea0);
            }
            return _0xcc802e;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0x1e7daf, _0x362216, _0x1c07e9) {
        this.delegate = {
          'iterator': _0x2d17dd(_0x1e7daf),
          'resultName': _0x362216,
          'nextLoc': _0x1c07e9
        };
        if ("next" === this.method) {
          this.arg = _0x732c22;
        }
        return _0x2332c9;
      }
    };
    return _0x552c55;
  }
  function _0x506707(_0x5c093f, _0x1b5c9f, _0x2e8e3b, _0x4bc40e, _0x507634, _0x3ca73f, _0x3d5c30) {
    try {
      var _0x257f72 = _0x5c093f[_0x3ca73f](_0x3d5c30);
      var _0x438645 = _0x257f72.value;
    } catch (_0x3178e1) {
      return void _0x2e8e3b(_0x3178e1);
    }
    if (_0x257f72.done) {
      _0x1b5c9f(_0x438645);
    } else {
      Promise.resolve(_0x438645).then(_0x4bc40e, _0x507634);
    }
  }
  function _0x5a0110(_0x4e866c) {
    return function () {
      var _0x219e40 = this;
      return new Promise(function (_0x2c5c34, _0x301298) {
        var _0x220b72 = _0x4e866c.apply(_0x219e40, arguments);
        function _0x11fcb1(_0x5893c7) {
          _0x506707(_0x220b72, _0x2c5c34, _0x301298, _0x11fcb1, _0x363bd3, "next", _0x5893c7);
        }
        function _0x363bd3(_0x33061f) {
          _0x506707(_0x220b72, _0x2c5c34, _0x301298, _0x11fcb1, _0x363bd3, "throw", _0x33061f);
        }
        _0x11fcb1(undefined);
      });
    };
  }
  _0x5a0110(_0x59fee6().mark(function _0x516f8f() {
    var _0x263f7e;
    return _0x59fee6().wrap(function (_0x28ca0b) {
      for (;;) {
        switch (_0x28ca0b.prev = _0x28ca0b.next) {
          case 0:
            _0x263f7e = function () {
              if (!document.getElementById("toolCard")) {
                _0x2c4bb2.createCard();
                setTimeout(function () {
                  _0x286300();
                  setInterval(function () {
                    var _0x291c20 = document.querySelector(".yma-copyright");
                    if (_0x291c20) {
                      if (!_0x291c20.innerHTML.trim().includes("@thjvjpxz")) {
                        var _0x2e382d = _0x291c20.className;
                        var _0x375b9b = _0x291c20.getAttribute('style') || '';
                        _0x291c20.innerHTML = "<i class=\"fas fa-code\"></i><span>Developed by <span class=\"yma-copyright-name\">@thjvjpxz</span></span>";
                        _0x291c20.className = _0x2e382d;
                        if (_0x375b9b) {
                          _0x291c20.setAttribute('style', _0x375b9b);
                        }
                        var _0x276c94 = _0x291c20.querySelector('i');
                        if (_0x276c94) {
                          _0x276c94.className = "fas fa-code";
                          _0x276c94.style.color = "var(--yma-primary-color)";
                          _0x276c94.style.fontSize = '16px';
                          _0x276c94.style.animation = "pulse 2s infinite";
                        }
                        var _0x3e2f71 = _0x291c20.querySelector(".yma-copyright-name");
                        var _0x267d8a = {
                          "get": function () {
                            return "<i class=\"fas fa-code\"></i><span>Developed by <span class=\"yma-copyright-name\">@thjvjpxz</span></span>";
                          },
                          "set": function () {
                            return "<i class=\"fas fa-code\"></i><span>Developed by <span class=\"yma-copyright-name\">@thjvjpxz</span></span>";
                          }
                        };
                        if (_0x3e2f71) {
                          _0x3e2f71.className = "yma-copyright-name";
                          _0x3e2f71.style.background = "linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0)";
                          _0x3e2f71.style.webkitBackgroundClip = "text";
                          _0x3e2f71.style.backgroundClip = "text";
                          _0x3e2f71.style.webkitTextFillColor = "transparent";
                          _0x3e2f71.style.fontWeight = "600";
                          _0x3e2f71.style.letterSpacing = "0.5px";
                          _0x3e2f71.style.position = "relative";
                        }
                        Object.defineProperty(_0x291c20, "innerHTML", _0x267d8a);
                      }
                    } else {
                      _0x286300();
                    }
                  }, 1000);
                }, 1000);
              }
            };
            ["load", "DOMContentLoaded"].forEach(function (_0x1928a9) {
              window.addEventListener(_0x1928a9, _0x5a0110(_0x59fee6().mark(function _0x5f170e() {
                return _0x59fee6().wrap(function (_0x1bc2ec) {
                  for (;;) {
                    switch (_0x1bc2ec.prev = _0x1bc2ec.next) {
                      case 0:
                        _0x1bc2ec.prev = 0;
                        _0x1bc2ec.next = 3;
                        return _0x2b1fad(1000);
                      case 3:
                        _0x263f7e();
                        _0x1bc2ec.next = 9;
                        break;
                      case 6:
                        _0x1bc2ec.prev = 6;
                        _0x1bc2ec.t0 = _0x1bc2ec["catch"](0);
                        console.error("Lỗi khởi tạo:", _0x1bc2ec.t0);
                      case 9:
                      case "end":
                        return _0x1bc2ec.stop();
                    }
                  }
                }, _0x5f170e, null, [[0, 6]]);
              })));
            });
            setTimeout(_0x263f7e, 5000);
          case 3:
          case "end":
            return _0x28ca0b.stop();
        }
      }
    }, _0x516f8f);
  }))();
})();
