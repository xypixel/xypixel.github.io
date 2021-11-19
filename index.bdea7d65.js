// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2HtCd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _console = require("../examples/console");

},{"../examples/console":"grIHO"}],"grIHO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _buttons = require("~src/Buttons");
var _buttonsDefault = parcelHelpers.interopDefault(_buttons);
var _console = require("../src/Console");
var _consoleDefault = parcelHelpers.interopDefault(_console);
var _screen = require("../src/Screen");
var _screenDefault = parcelHelpers.interopDefault(_screen);
const buttons = new _buttonsDefault.default();
const screen = new _screenDefault.default();
new _consoleDefault.default({
    buttons,
    screen
});

},{"../src/Console":"g5VmO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","~src/Buttons":"iI12F","../src/Screen":"bhXCB"}],"g5VmO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Console
);
class Console {
    constructor(params){
        this.calculatedScreenDimensions = 256;
        this.screen = params.screen;
        this.buttons = params.buttons;
        this.leftConElement = document.querySelector('#leftCon');
        this.rightConElement = document.querySelector('#rightCon');
        document.addEventListener('contextmenu', (e)=>e.preventDefault()
        );
        this.calculatePositionAndScale();
        window.addEventListener('resize', ()=>{
            this.calculatePositionAndScale();
        }, false);
        window.addEventListener('deviceorientation', ()=>{
            this.calculatePositionAndScale();
        }, false);
    }
    calculatePositionAndScale() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const viewportIsLandscape = viewportWidth > viewportHeight;
        this.calculatedScreenDimensions = Math.floor(viewportIsLandscape ? viewportWidth / viewportHeight < 2 ? viewportWidth / 2 : viewportHeight : viewportHeight / viewportWidth < 2 ? viewportHeight / 2 : viewportWidth);
        this.screen.setPixelScale(this.calculatedScreenDimensions);
        if (this.calculatedScreenDimensions / this.screen.dimensions > this.screen.pixelScale) this.calculatedScreenDimensions = this.screen.dimensions * this.screen.pixelScale;
        this.screen.element.width = this.calculatedScreenDimensions;
        this.screen.element.height = this.calculatedScreenDimensions;
        this.positionAndScaleElements(viewportWidth, viewportHeight, viewportIsLandscape);
    }
    positionAndScaleElements(viewportWidth, viewportHeight, viewportIsLandscape) {
        const screenLeft = viewportWidth / 2 - this.calculatedScreenDimensions / 2;
        const screenTop = viewportHeight / 2 - (viewportIsLandscape ? this.calculatedScreenDimensions / 2 : this.calculatedScreenDimensions);
        const leftConLeft = viewportIsLandscape ? screenLeft - this.calculatedScreenDimensions / 2 : screenLeft;
        const leftConTop = viewportIsLandscape ? screenTop : screenTop + this.calculatedScreenDimensions;
        const rightConLeft = viewportIsLandscape ? screenLeft + this.calculatedScreenDimensions : screenLeft + this.calculatedScreenDimensions / 2;
        const rightConTop = viewportIsLandscape ? screenTop : screenTop + this.calculatedScreenDimensions;
        const conWidth = this.calculatedScreenDimensions / 2;
        const conHeight = this.calculatedScreenDimensions;
        const dPadDimensions = conWidth / 1.5;
        const dPadIndividualButtonDimensions = dPadDimensions / 3;
        const dPadLeft = leftConLeft + conWidth / 2 - dPadDimensions / 2;
        const dPadTop = leftConTop + conHeight / 2 - dPadDimensions / 2;
        (()=>{
            let x = 0;
            let y = 0;
            this.buttons.dPadButtons.forEach((item)=>{
                item.element.style.left = `${x * dPadIndividualButtonDimensions}px`;
                item.element.style.top = `${y * dPadIndividualButtonDimensions}px`;
                item.element.style.width = `${dPadIndividualButtonDimensions}px`;
                item.element.style.height = `${dPadIndividualButtonDimensions}px`;
                y = x === 2 ? y + 1 : y;
                x = x !== 2 ? x + 1 : 0;
            });
        })();
        const actionBtnsWidth = conWidth / 1.5;
        const actionBtnsHeight = actionBtnsWidth / 1.2;
        const actionBtnDimensions = conWidth / 3.5;
        const actionBtnCenterX = rightConLeft + conWidth / 2;
        const actionBtnCenterY = rightConTop + conHeight / 2;
        this.screen.element.style.left = `${screenLeft}px`;
        this.screen.element.style.top = `${screenTop}px`;
        this.buttons.dPadElement.style.left = `${dPadLeft}px`;
        this.buttons.dPadElement.style.top = `${dPadTop}px`;
        this.buttons.dPadElement.style.width = `${dPadDimensions}px`;
        this.buttons.dPadElement.style.height = `${dPadDimensions}px`;
        this.buttons.dPadElement.style.left = `${dPadLeft}px`;
        this.buttons.dPadElement.style.top = `${dPadTop}px`;
        this.buttons.dPadElement.style.width = `${dPadDimensions}px`;
        this.buttons.dPadElement.style.height = `${dPadDimensions}px`;
        this.buttons.actionBtnsElement.style.left = `${actionBtnCenterX - actionBtnsWidth / 2}px`;
        this.buttons.actionBtnsElement.style.top = `${actionBtnCenterY - actionBtnsHeight / 2}px`;
        this.buttons.actionBtnsElement.style.width = `${actionBtnsWidth}px`;
        this.buttons.actionBtnsElement.style.height = `${actionBtnsHeight}px`;
        this.buttons.actionBtnIElement.style.left = `0`;
        this.buttons.actionBtnIElement.style.top = `${actionBtnsHeight - actionBtnDimensions}px`;
        this.buttons.actionBtnIElement.style.width = `${actionBtnDimensions}px`;
        this.buttons.actionBtnIElement.style.height = `${actionBtnDimensions}px`;
        this.buttons.actionBtnIIElement.style.left = `${actionBtnsWidth - actionBtnDimensions}px`;
        this.buttons.actionBtnIIElement.style.top = `0`;
        this.buttons.actionBtnIIElement.style.width = `${actionBtnDimensions}px`;
        this.buttons.actionBtnIIElement.style.height = `${actionBtnDimensions}px`;
        this.leftConElement.style.left = `${leftConLeft}px`;
        this.leftConElement.style.top = `${leftConTop}px`;
        this.leftConElement.style.width = `${conWidth}px`;
        this.leftConElement.style.height = `${conHeight}px`;
        this.rightConElement.style.left = `${rightConLeft}px`;
        this.rightConElement.style.top = `${rightConTop}px`;
        this.rightConElement.style.width = `${conWidth}px`;
        this.rightConElement.style.height = `${conHeight}px`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iI12F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Buttons
);
var _collision = require("./collision");
var _geometry = require("./geometry");
var DPadButtons1;
(function(DPadButtons) {
    DPadButtons["Up"] = "Up";
    DPadButtons["Lt"] = "Lt";
    DPadButtons["Dn"] = "Dn";
    DPadButtons["Rt"] = "Rt";
    DPadButtons["Center"] = "Center";
    DPadButtons["LtUp"] = "LtUp";
    DPadButtons["LtDn"] = "LtDn";
    DPadButtons["RtUp"] = "RtUp";
    DPadButtons["RtDn"] = "RtDn";
})(DPadButtons1 || (DPadButtons1 = {
}));
class Buttons {
    constructor(){
        this.dPadButtons = [
            {
                name: DPadButtons1.LtUp,
                element: null
            },
            {
                name: DPadButtons1.Up,
                element: null
            },
            {
                name: DPadButtons1.RtUp,
                element: null
            },
            {
                name: DPadButtons1.Lt,
                element: null
            },
            {
                name: DPadButtons1.Center,
                element: null
            },
            {
                name: DPadButtons1.Rt,
                element: null
            },
            {
                name: DPadButtons1.LtDn,
                element: null
            },
            {
                name: DPadButtons1.Dn,
                element: null
            },
            {
                name: DPadButtons1.RtDn,
                element: null
            }
        ];
        this.isLtUpPressed = false;
        this.isUpPressed = false;
        this.isRtUpPressed = false;
        this.isLtPressed = false;
        this.isRtPressed = false;
        this.isLtDnPressed = false;
        this.isDnPressed = false;
        this.isRtDnPressed = false;
        this.dPadElement = document.querySelector('#dPad');
        this.dPadButtons.forEach((item)=>{
            item.element = document.querySelector(`#${item.name}`);
        });
        this.actionBtnsElement = document.querySelector('#actionBtns');
        this.actionBtnIElement = document.querySelector('#actionBtnI');
        this.actionBtnIIElement = document.querySelector('#actionBtnII');
        this.dPadElement.addEventListener('touchstart', (event)=>{
            this.setActiveDPadElements(this.dPadButtons.find((item)=>item.name === event.target.id
            ));
        }, false);
        this.dPadElement.addEventListener('touchmove', (event)=>{
            event.preventDefault();
            this.dPadButtons.forEach((item)=>{
                item.element?.classList.remove('active');
            });
            const firstTouch = event.touches[0];
            this.dPadButtons.forEach((item)=>{
                if (_collision.hitCheckPointRect(new _geometry.Point(firstTouch.pageX, firstTouch.pageY), item.element.getBoundingClientRect())) this.setActiveDPadElements(item);
            });
        }, false);
        this.dPadElement.addEventListener('touchend', (event)=>{
            this.dPadButtons.forEach((item)=>{
                item.element?.classList.remove('active');
            });
        }, false);
        this.actionBtnsElement.addEventListener('touchstart', (event)=>{
            event.target.classList.add('active');
        }, false);
        this.actionBtnsElement.addEventListener('touchmove', (event)=>{
            event.preventDefault();
            const firstTouch = event.touches[0];
            this.actionBtnIElement.classList.remove('active');
            this.actionBtnIIElement.classList.remove('active');
            if (_collision.hitCheckPointRect(new _geometry.Point(firstTouch.pageX, firstTouch.pageY), this.actionBtnIElement.getBoundingClientRect())) this.actionBtnIElement.classList.add('active');
            else if (_collision.hitCheckPointRect(new _geometry.Point(firstTouch.pageX, firstTouch.pageY), this.actionBtnIIElement.getBoundingClientRect())) this.actionBtnIIElement.classList.add('active');
        }, false);
        this.actionBtnsElement.addEventListener('touchend', (event)=>{
            event.target.classList.remove('active');
        }, false);
    }
    setActiveDPadElements(item1) {
        if (item1.name === DPadButtons1.LtUp) {
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Lt
            )?.element?.classList.add('active');
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Up
            )?.element?.classList.add('active');
        } else if (item1.name === DPadButtons1.RtUp) {
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Rt
            )?.element?.classList.add('active');
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Up
            )?.element?.classList.add('active');
        } else if (item1.name === DPadButtons1.LtDn) {
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Lt
            )?.element?.classList.add('active');
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Dn
            )?.element?.classList.add('active');
        } else if (item1.name === DPadButtons1.RtDn) {
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Rt
            )?.element?.classList.add('active');
            this.dPadButtons.find((item)=>item.name === DPadButtons1.Dn
            )?.element?.classList.add('active');
        } else item1.element?.classList.add('active');
    }
}

},{"./collision":"kGheF","./geometry":"jj3iP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kGheF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hitCheckPointRect", ()=>hitCheckPointRect
);
function hitCheckPointRect(point, rect) {
    return point.x > rect.x && point.x < rect.right && point.y > rect.y && point.y < rect.bottom;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jj3iP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point", ()=>Point
);
parcelHelpers.export(exports, "Rect", ()=>Rect
);
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
class Rect {
    constructor(x1, y1, width, height){
        this.x = x1;
        this.y = y1;
        this.width = width;
        this.height = height;
    }
    get bottom() {
        return this.y + this.height;
    }
    get left() {
        return this.x;
    }
    get right() {
        return this.x + this.width;
    }
    get top() {
        return this.y;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bhXCB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Screen
);
class Screen {
    constructor(){
        this.dimensions = 256;
        this.pixelScale = 1;
        this.antiAliasingScaleThreshold = 4;
        this.element = document.querySelector('#screen');
        this.context = this.element.getContext('2d');
        this.context.imageSmoothingEnabled = false;
        this.context.imageSmoothingQuality = 'low';
    }
    setPixelScale(calculatedScreenDimensions) {
        const scale = calculatedScreenDimensions / this.dimensions;
        this.pixelScale = scale > this.antiAliasingScaleThreshold ? Math.floor(scale) : scale;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequire4f57")

//# sourceMappingURL=index.bdea7d65.js.map
