(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser/animations'), require('ng-zorro-antd/core/polyfill'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/resize-observers'), require('ng-zorro-antd/core/util'), require('@angular/router'), require('@angular/cdk/observers'), require('@angular/cdk/platform'), require('@angular/cdk/scrolling'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/logger')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/tabs', ['exports', '@angular/core', '@angular/platform-browser/animations', 'ng-zorro-antd/core/polyfill', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/keycodes', '@angular/cdk/overlay', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/resize-observers', 'ng-zorro-antd/core/util', '@angular/router', '@angular/cdk/observers', '@angular/cdk/platform', '@angular/cdk/scrolling', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/logger'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tabs = {}), global.ng.core, global.ng.platformBrowser.animations, global['ng-zorro-antd'].core.polyfill, global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.coercion, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core['resize-observers'], global['ng-zorro-antd'].core.util, global.ng.router, global.ng.cdk.observers, global.ng.cdk.platform, global.ng.cdk.scrolling, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].dropdown, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.logger));
}(this, (function (exports, core, animations, polyfill, a11y, bidi, coercion, keycodes, overlay, rxjs, operators, resizeObservers, util, router, observers, platform, scrolling, common, outlet, dropdown, icon, config, logger) { 'use strict';

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTabAddButtonComponent = /** @class */ (function () {
      function NzTabAddButtonComponent(elementRef) {
          this.elementRef = elementRef;
          this.addIcon = 'plus';
          this.element = this.elementRef.nativeElement;
      }
      NzTabAddButtonComponent.prototype.getElementWidth = function () {
          var _a;
          return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
      };
      NzTabAddButtonComponent.prototype.getElementHeight = function () {
          var _a;
          return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
      };
      return NzTabAddButtonComponent;
  }());
  NzTabAddButtonComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tab-add-button, button[nz-tab-add-button]',
                  template: "\n    <ng-container *nzStringTemplateOutlet=\"addIcon; let icon\">\n      <i nz-icon [nzType]=\"icon\" nzTheme=\"outline\"></i>\n    </ng-container>\n  ",
                  host: {
                      class: 'ant-tabs-nav-add',
                      'aria-label': 'Add tab',
                      type: 'button'
                  }
              },] }
  ];
  NzTabAddButtonComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzTabAddButtonComponent.propDecorators = {
      addIcon: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTabsInkBarDirective = /** @class */ (function () {
      function NzTabsInkBarDirective(elementRef, ngZone, animationMode) {
          this.elementRef = elementRef;
          this.ngZone = ngZone;
          this.animationMode = animationMode;
          this.position = 'horizontal';
          this.animated = true;
      }
      Object.defineProperty(NzTabsInkBarDirective.prototype, "_animated", {
          get: function () {
              return this.animationMode !== 'NoopAnimations' && this.animated;
          },
          enumerable: false,
          configurable: true
      });
      NzTabsInkBarDirective.prototype.alignToElement = function (element) {
          var _this = this;
          this.ngZone.runOutsideAngular(function () {
              polyfill.reqAnimFrame(function () { return _this.setStyles(element); });
          });
      };
      NzTabsInkBarDirective.prototype.setStyles = function (element) {
          var inkBar = this.elementRef.nativeElement;
          if (this.position === 'horizontal') {
              inkBar.style.top = '';
              inkBar.style.height = '';
              inkBar.style.left = this.getLeftPosition(element);
              inkBar.style.width = this.getElementWidth(element);
          }
          else {
              inkBar.style.left = '';
              inkBar.style.width = '';
              inkBar.style.top = this.getTopPosition(element);
              inkBar.style.height = this.getElementHeight(element);
          }
      };
      NzTabsInkBarDirective.prototype.getLeftPosition = function (element) {
          return element ? (element.offsetLeft || 0) + 'px' : '0';
      };
      NzTabsInkBarDirective.prototype.getElementWidth = function (element) {
          return element ? (element.offsetWidth || 0) + 'px' : '0';
      };
      NzTabsInkBarDirective.prototype.getTopPosition = function (element) {
          return element ? (element.offsetTop || 0) + 'px' : '0';
      };
      NzTabsInkBarDirective.prototype.getElementHeight = function (element) {
          return element ? (element.offsetHeight || 0) + 'px' : '0';
      };
      return NzTabsInkBarDirective;
  }());
  NzTabsInkBarDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-tabs-ink-bar, [nz-tabs-ink-bar]',
                  host: {
                      class: 'ant-tabs-ink-bar',
                      '[class.ant-tabs-ink-bar-animated]': '_animated'
                  }
              },] }
  ];
  NzTabsInkBarDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.NgZone },
      { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
  ]; };
  NzTabsInkBarDirective.propDecorators = {
      position: [{ type: core.Input }],
      animated: [{ type: core.Input }]
  };

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p))
                  d[p] = b[p]; };
      return extendStatics(d, b);
  };
  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function () {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
      var t = {};
      for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }
  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
      else
          for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                  r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
      return function (target, key) { decorator(target, key, paramIndex); };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) { if (f !== void 0 && typeof f !== "function")
          throw new TypeError("Function expected"); return f; }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
          var context = {};
          for (var p in contextIn)
              context[p] = p === "access" ? {} : contextIn[p];
          for (var p in contextIn.access)
              context.access[p] = contextIn.access[p];
          context.addInitializer = function (f) { if (done)
              throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
          var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
          if (kind === "accessor") {
              if (result === void 0)
                  continue;
              if (result === null || typeof result !== "object")
                  throw new TypeError("Object expected");
              if (_ = accept(result.get))
                  descriptor.get = _;
              if (_ = accept(result.set))
                  descriptor.set = _;
              if (_ = accept(result.init))
                  initializers.unshift(_);
          }
          else if (_ = accept(result)) {
              if (kind === "field")
                  initializers.unshift(_);
              else
                  descriptor[key] = _;
          }
      }
      if (target)
          Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
  }
  ;
  function __runInitializers(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
          value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
  }
  ;
  function __propKey(x) {
      return typeof x === "symbol" ? x : "".concat(x);
  }
  ;
  function __setFunctionName(f, name, prefix) {
      if (typeof name === "symbol")
          name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  ;
  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try {
              step(generator.next(value));
          }
          catch (e) {
              reject(e);
          } }
          function rejected(value) { try {
              step(generator["throw"](value));
          }
          catch (e) {
              reject(e);
          } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }
  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function () { if (t[0] & 1)
              throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f)
              throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
              try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                      return t;
                  if (y = 0, t)
                      op = [op[0] & 2, t.value];
                  switch (op[0]) {
                      case 0:
                      case 1:
                          t = op;
                          break;
                      case 4:
                          _.label++;
                          return { value: op[1], done: false };
                      case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                      case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                      default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                              _ = 0;
                              continue;
                          }
                          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                              _.label = op[1];
                              break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                              _.label = t[1];
                              t = op;
                              break;
                          }
                          if (t && _.label < t[2]) {
                              _.label = t[2];
                              _.ops.push(op);
                              break;
                          }
                          if (t[2])
                              _.ops.pop();
                          _.trys.pop();
                          continue;
                  }
                  op = body.call(thisArg, _);
              }
              catch (e) {
                  op = [6, e];
                  y = 0;
              }
              finally {
                  f = t = 0;
              }
          if (op[0] & 5)
              throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
      }
  }
  var __createBinding = Object.create ? (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function () { return m[k]; } };
      }
      Object.defineProperty(o, k2, desc);
  }) : (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      o[k2] = m[k];
  });
  function __exportStar(m, o) {
      for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
  }
  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
          return m.call(o);
      if (o && typeof o.length === "number")
          return {
              next: function () {
                  if (o && i >= o.length)
                      o = void 0;
                  return { value: o && o[i++], done: !o };
              }
          };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
          return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
      }
      catch (error) {
          e = { error: error };
      }
      finally {
          try {
              if (r && !r.done && (m = i["return"]))
                  m.call(i);
          }
          finally {
              if (e)
                  throw e.error;
          }
      }
      return ar;
  }
  /** @deprecated */
  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }
  /** @deprecated */
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }
  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                  if (!ar)
                      ar = Array.prototype.slice.call(from, 0, i);
                  ar[i] = from[i];
              }
          }
      return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
      function verb(n) { if (g[n])
          i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
      function resume(n, v) { try {
          step(g[n](v));
      }
      catch (e) {
          settle(q[0][3], e);
      } }
      function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
      function fulfill(value) { resume("next", value); }
      function reject(value) { resume("throw", value); }
      function settle(f, v) { if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]); }
  }
  function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
      function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
  }
  function __asyncValues(o) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
      function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
      function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
  }
  function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
      }
      else {
          cooked.raw = raw;
      }
      return cooked;
  }
  ;
  var __setModuleDefault = Object.create ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function (o, v) {
      o["default"] = v;
  };
  function __importStar(mod) {
      if (mod && mod.__esModule)
          return mod;
      var result = {};
      if (mod != null)
          for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                  __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
  }
  function __importDefault(mod) {
      return (mod && mod.__esModule) ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m")
          throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  }
  function __classPrivateFieldIn(state, receiver) {
      if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
          throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
      if (value !== null && value !== void 0) {
          if (typeof value !== "object" && typeof value !== "function")
              throw new TypeError("Object expected.");
          var dispose;
          if (async) {
              if (!Symbol.asyncDispose)
                  throw new TypeError("Symbol.asyncDispose is not defined.");
              dispose = value[Symbol.asyncDispose];
          }
          if (dispose === void 0) {
              if (!Symbol.dispose)
                  throw new TypeError("Symbol.dispose is not defined.");
              dispose = value[Symbol.dispose];
          }
          if (typeof dispose !== "function")
              throw new TypeError("Object not disposable.");
          env.stack.push({ value: value, dispose: dispose, async: async });
      }
      else if (async) {
          env.stack.push({ async: true });
      }
      return value;
  }
  var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  function __disposeResources(env) {
      function fail(e) {
          env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
          env.hasError = true;
      }
      function next() {
          while (env.stack.length) {
              var rec = env.stack.pop();
              try {
                  var result = rec.dispose && rec.dispose.call(rec.value);
                  if (rec.async)
                      return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
              }
              catch (e) {
                  fail(e);
              }
          }
          if (env.hasError)
              throw env.error;
      }
      return next();
  }
  var tslib_es6 = {
      __extends: __extends,
      __assign: __assign,
      __rest: __rest,
      __decorate: __decorate,
      __param: __param,
      __metadata: __metadata,
      __awaiter: __awaiter,
      __generator: __generator,
      __createBinding: __createBinding,
      __exportStar: __exportStar,
      __values: __values,
      __read: __read,
      __spread: __spread,
      __spreadArrays: __spreadArrays,
      __spreadArray: __spreadArray,
      __await: __await,
      __asyncGenerator: __asyncGenerator,
      __asyncDelegator: __asyncDelegator,
      __asyncValues: __asyncValues,
      __makeTemplateObject: __makeTemplateObject,
      __importStar: __importStar,
      __importDefault: __importDefault,
      __classPrivateFieldGet: __classPrivateFieldGet,
      __classPrivateFieldSet: __classPrivateFieldSet,
      __classPrivateFieldIn: __classPrivateFieldIn,
      __addDisposableResource: __addDisposableResource,
      __disposeResources: __disposeResources,
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTabNavItemDirective = /** @class */ (function () {
      function NzTabNavItemDirective(elementRef) {
          this.elementRef = elementRef;
          this.disabled = false;
          this.active = false;
          this.el = elementRef.nativeElement;
          this.parentElement = this.el.parentElement;
      }
      NzTabNavItemDirective.prototype.focus = function () {
          this.el.focus();
      };
      Object.defineProperty(NzTabNavItemDirective.prototype, "width", {
          get: function () {
              return this.parentElement.offsetWidth;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabNavItemDirective.prototype, "height", {
          get: function () {
              return this.parentElement.offsetHeight;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabNavItemDirective.prototype, "left", {
          get: function () {
              return this.parentElement.offsetLeft;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabNavItemDirective.prototype, "top", {
          get: function () {
              return this.parentElement.offsetTop;
          },
          enumerable: false,
          configurable: true
      });
      return NzTabNavItemDirective;
  }());
  NzTabNavItemDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nzTabNavItem]'
              },] }
  ];
  NzTabNavItemDirective.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzTabNavItemDirective.propDecorators = {
      disabled: [{ type: core.Input }],
      tab: [{ type: core.Input }],
      active: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTabNavOperationComponent = /** @class */ (function () {
      function NzTabNavOperationComponent(cdr, elementRef) {
          this.cdr = cdr;
          this.elementRef = elementRef;
          this.items = [];
          this.addable = false;
          this.addIcon = 'plus';
          this.addClicked = new core.EventEmitter();
          this.selected = new core.EventEmitter();
          this.closeAnimationWaitTimeoutId = -1;
          this.menuOpened = false;
          this.element = this.elementRef.nativeElement;
      }
      NzTabNavOperationComponent.prototype.onSelect = function (item) {
          if (!item.disabled) {
              // ignore nzCanDeactivate
              item.tab.nzClick.emit();
              this.selected.emit(item);
          }
      };
      NzTabNavOperationComponent.prototype.onContextmenu = function (item, e) {
          if (!item.disabled) {
              item.tab.nzContextmenu.emit(e);
          }
      };
      NzTabNavOperationComponent.prototype.showItems = function () {
          clearTimeout(this.closeAnimationWaitTimeoutId);
          this.menuOpened = true;
          this.cdr.markForCheck();
      };
      NzTabNavOperationComponent.prototype.menuVisChange = function (visible) {
          var _this = this;
          if (!visible) {
              this.closeAnimationWaitTimeoutId = setTimeout(function () {
                  _this.menuOpened = false;
                  _this.cdr.markForCheck();
              }, 150);
          }
      };
      NzTabNavOperationComponent.prototype.getElementWidth = function () {
          var _a;
          return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
      };
      NzTabNavOperationComponent.prototype.getElementHeight = function () {
          var _a;
          return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
      };
      NzTabNavOperationComponent.prototype.ngOnDestroy = function () {
          clearTimeout(this.closeAnimationWaitTimeoutId);
      };
      return NzTabNavOperationComponent;
  }());
  NzTabNavOperationComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tab-nav-operation',
                  exportAs: 'nzTabNavOperation',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <button\n      nz-dropdown\n      class=\"ant-tabs-nav-more\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-hidden=\"true\"\n      nzOverlayClassName=\"nz-tabs-dropdown\"\n      #dropdownTrigger=\"nzDropdown\"\n      [nzDropdownMenu]=\"menu\"\n      [nzOverlayStyle]=\"{ minWidth: '46px' }\"\n      [nzMatchWidthElement]=\"null\"\n      (nzVisibleChange)=\"menuVisChange($event)\"\n      (mouseenter)=\"showItems()\"\n    >\n      <i nz-icon nzType=\"ellipsis\"></i>\n    </button>\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n      <ul nz-menu *ngIf=\"menuOpened\">\n        <li\n          nz-menu-item\n          *ngFor=\"let item of items\"\n          class=\"ant-tabs-dropdown-menu-item\"\n          [class.ant-tabs-dropdown-menu-item-disabled]=\"item.disabled\"\n          [nzSelected]=\"item.active\"\n          [nzDisabled]=\"item.disabled\"\n          (click)=\"onSelect(item)\"\n          (contextmenu)=\"onContextmenu(item, $event)\"\n        >\n          <ng-container *nzStringTemplateOutlet=\"item.tab.label; context: { visible: false }\">{{ item.tab.label }}</ng-container>\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n    <button *ngIf=\"addable\" nz-tab-add-button [addIcon]=\"addIcon\" (click)=\"addClicked.emit()\"></button>\n  ",
                  host: {
                      class: 'ant-tabs-nav-operations',
                      '[class.ant-tabs-nav-operations-hidden]': 'items.length === 0'
                  }
              },] }
  ];
  NzTabNavOperationComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef }
  ]; };
  NzTabNavOperationComponent.propDecorators = {
      items: [{ type: core.Input }],
      addable: [{ type: core.Input }],
      addIcon: [{ type: core.Input }],
      addClicked: [{ type: core.Output }],
      selected: [{ type: core.Output }]
  };

  var RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs.animationFrameScheduler : rxjs.asapScheduler;
  var CSS_TRANSFORM_TIME = 150;
  var NzTabNavBarComponent = /** @class */ (function () {
      function NzTabNavBarComponent(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
          this.cdr = cdr;
          this.ngZone = ngZone;
          this.viewportRuler = viewportRuler;
          this.nzResizeObserver = nzResizeObserver;
          this.dir = dir;
          this.indexFocused = new core.EventEmitter();
          this.selectFocusedIndex = new core.EventEmitter();
          this.addClicked = new core.EventEmitter();
          this.tabScroll = new core.EventEmitter();
          this.position = 'horizontal';
          this.addable = false;
          this.hideBar = false;
          this.addIcon = 'plus';
          this.inkBarAnimated = true;
          this.translate = null;
          this.transformX = 0;
          this.transformY = 0;
          this.pingLeft = false;
          this.pingRight = false;
          this.pingTop = false;
          this.pingBottom = false;
          this.hiddenItems = [];
          this.destroy$ = new rxjs.Subject();
          this._selectedIndex = 0;
          this.wrapperWidth = 0;
          this.wrapperHeight = 0;
          this.scrollListWidth = 0;
          this.scrollListHeight = 0;
          this.operationWidth = 0;
          this.operationHeight = 0;
          this.addButtonWidth = 0;
          this.addButtonHeight = 0;
          this.selectedIndexChanged = false;
          this.lockAnimationTimeoutId = -1;
          this.cssTransformTimeWaitingId = -1;
      }
      Object.defineProperty(NzTabNavBarComponent.prototype, "selectedIndex", {
          get: function () {
              return this._selectedIndex;
          },
          set: function (value) {
              var newValue = coercion.coerceNumberProperty(value);
              if (this._selectedIndex !== newValue) {
                  this._selectedIndex = value;
                  this.selectedIndexChanged = true;
                  if (this.keyManager) {
                      this.keyManager.updateActiveItem(value);
                  }
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabNavBarComponent.prototype, "focusIndex", {
          /** Tracks which element has focus; used for keyboard navigation */
          get: function () {
              return this.keyManager ? this.keyManager.activeItemIndex : 0;
          },
          /** When the focus index is set, we must manually send focus to the correct label */
          set: function (value) {
              if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
                  return;
              }
              this.keyManager.setActiveItem(value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabNavBarComponent.prototype, "showAddButton", {
          get: function () {
              return this.hiddenItems.length === 0 && this.addable;
          },
          enumerable: false,
          configurable: true
      });
      NzTabNavBarComponent.prototype.ngOnInit = function () { };
      NzTabNavBarComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          var dirChange = this.dir ? this.dir.change : rxjs.of(null);
          var resize = this.viewportRuler.change(150);
          var realign = function () {
              _this.updateScrollListPosition();
              _this.alignInkBarToSelectedTab();
          };
          this.keyManager = new a11y.FocusKeyManager(this.items)
              .withHorizontalOrientation(this.getLayoutDirection())
              .withWrap();
          this.keyManager.updateActiveItem(this.selectedIndex);
          polyfill.reqAnimFrame(realign);
          rxjs.merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
              .pipe(operators.takeUntil(this.destroy$), operators.auditTime(16, RESIZE_SCHEDULER))
              .subscribe(function () {
              realign();
          });
          rxjs.merge(dirChange, resize, this.items.changes)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function () {
              Promise.resolve().then(realign);
              _this.keyManager.withHorizontalOrientation(_this.getLayoutDirection());
          });
          this.keyManager.change.pipe(operators.takeUntil(this.destroy$)).subscribe(function (newFocusIndex) {
              _this.indexFocused.emit(newFocusIndex);
              _this.setTabFocus(newFocusIndex);
              _this.scrollToTab(_this.keyManager.activeItem);
          });
      };
      NzTabNavBarComponent.prototype.ngAfterContentChecked = function () {
          if (this.selectedIndexChanged) {
              this.updateScrollListPosition();
              this.alignInkBarToSelectedTab();
              this.selectedIndexChanged = false;
              this.cdr.markForCheck();
          }
      };
      NzTabNavBarComponent.prototype.ngOnDestroy = function () {
          clearTimeout(this.lockAnimationTimeoutId);
          clearTimeout(this.cssTransformTimeWaitingId);
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTabNavBarComponent.prototype.onSelectedFromMenu = function (tab) {
          var tabIndex = this.items.toArray().findIndex(function (e) { return e === tab; });
          if (tabIndex !== -1) {
              this.keyManager.updateActiveItem(tabIndex);
              if (this.focusIndex !== this.selectedIndex) {
                  this.selectFocusedIndex.emit(this.focusIndex);
                  this.scrollToTab(tab);
              }
          }
      };
      NzTabNavBarComponent.prototype.onOffsetChange = function (e) {
          if (this.position === 'horizontal') {
              if (this.lockAnimationTimeoutId === -1) {
                  if (this.transformX >= 0 && e.x > 0) {
                      return;
                  }
                  if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                      return;
                  }
              }
              e.event.preventDefault();
              this.transformX = this.clampTransformX(this.transformX + e.x);
              this.setTransform(this.transformX, 0);
          }
          else {
              if (this.lockAnimationTimeoutId === -1) {
                  if (this.transformY >= 0 && e.y > 0) {
                      return;
                  }
                  if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                      return;
                  }
              }
              e.event.preventDefault();
              this.transformY = this.clampTransformY(this.transformY + e.y);
              this.setTransform(0, this.transformY);
          }
          this.lockAnimation();
          this.setVisibleRange();
          this.setPingStatus();
      };
      NzTabNavBarComponent.prototype.handleKeydown = function (event) {
          var inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
          if (keycodes.hasModifierKey(event) || !inNavigationList) {
              return;
          }
          switch (event.keyCode) {
              case keycodes.LEFT_ARROW:
              case keycodes.UP_ARROW:
              case keycodes.RIGHT_ARROW:
              case keycodes.DOWN_ARROW:
                  this.lockAnimation();
                  this.keyManager.onKeydown(event);
                  break;
              case keycodes.ENTER:
              case keycodes.SPACE:
                  if (this.focusIndex !== this.selectedIndex) {
                      this.selectFocusedIndex.emit(this.focusIndex);
                  }
                  break;
              default:
                  this.keyManager.onKeydown(event);
          }
      };
      NzTabNavBarComponent.prototype.isValidIndex = function (index) {
          if (!this.items) {
              return true;
          }
          var tab = this.items ? this.items.toArray()[index] : null;
          return !!tab && !tab.disabled;
      };
      NzTabNavBarComponent.prototype.scrollToTab = function (tab) {
          var _this = this;
          if (!this.items.find(function (e) { return e === tab; })) {
              return;
          }
          var tabs = this.items.toArray();
          if (this.position === 'horizontal') {
              var newTransform = this.transformX;
              if (this.getLayoutDirection() === 'rtl') {
                  var right = tabs[0].left + tabs[0].width - tab.left - tab.width;
                  if (right < this.transformX) {
                      newTransform = right;
                  }
                  else if (right + tab.width > this.transformX + this.wrapperWidth) {
                      newTransform = right + tab.width - this.wrapperWidth;
                  }
              }
              else if (tab.left < -this.transformX) {
                  newTransform = -tab.left;
              }
              else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                  newTransform = -(tab.left + tab.width - this.wrapperWidth);
              }
              this.transformX = newTransform;
              this.transformY = 0;
              this.setTransform(newTransform, 0);
          }
          else {
              var newTransform = this.transformY;
              if (tab.top < -this.transformY) {
                  newTransform = -tab.top;
              }
              else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                  newTransform = -(tab.top + tab.height - this.wrapperHeight);
              }
              this.transformY = newTransform;
              this.transformX = 0;
              this.setTransform(0, newTransform);
          }
          clearTimeout(this.cssTransformTimeWaitingId);
          this.cssTransformTimeWaitingId = setTimeout(function () {
              _this.setVisibleRange();
          }, CSS_TRANSFORM_TIME);
      };
      NzTabNavBarComponent.prototype.lockAnimation = function () {
          var _this = this;
          if (this.lockAnimationTimeoutId === -1) {
              this.ngZone.runOutsideAngular(function () {
                  _this.navListRef.nativeElement.style.transition = 'none';
                  _this.lockAnimationTimeoutId = setTimeout(function () {
                      _this.navListRef.nativeElement.style.transition = '';
                      _this.lockAnimationTimeoutId = -1;
                  }, CSS_TRANSFORM_TIME);
              });
          }
      };
      NzTabNavBarComponent.prototype.setTransform = function (x, y) {
          this.navListRef.nativeElement.style.transform = "translate(" + x + "px, " + y + "px)";
      };
      NzTabNavBarComponent.prototype.clampTransformX = function (transform) {
          var scrollWidth = this.wrapperWidth - this.scrollListWidth;
          if (this.getLayoutDirection() === 'rtl') {
              return Math.max(Math.min(scrollWidth, transform), 0);
          }
          else {
              return Math.min(Math.max(scrollWidth, transform), 0);
          }
      };
      NzTabNavBarComponent.prototype.clampTransformY = function (transform) {
          return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
      };
      NzTabNavBarComponent.prototype.updateScrollListPosition = function () {
          this.resetSizes();
          this.transformX = this.clampTransformX(this.transformX);
          this.transformY = this.clampTransformY(this.transformY);
          this.setVisibleRange();
          this.setPingStatus();
          if (this.keyManager) {
              this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
              if (this.keyManager.activeItem) {
                  this.scrollToTab(this.keyManager.activeItem);
              }
          }
      };
      NzTabNavBarComponent.prototype.resetSizes = function () {
          this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
          this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
          this.operationWidth = this.operationRef.getElementWidth();
          this.operationHeight = this.operationRef.getElementHeight();
          this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
          this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
          this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
          this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
      };
      NzTabNavBarComponent.prototype.alignInkBarToSelectedTab = function () {
          var selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
          var selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
          if (selectedItemElement) {
              /**
               * .ant-tabs-nav-list - Target offset parent element
               *   └──.ant-tabs-tab
               *        └──.ant-tabs-tab-btn - Currently focused element
               */
              this.inkBar.alignToElement(selectedItemElement.parentElement);
          }
      };
      NzTabNavBarComponent.prototype.setPingStatus = function () {
          var ping = {
              top: false,
              right: false,
              bottom: false,
              left: false
          };
          var navWarp = this.navWarpRef.nativeElement;
          if (this.position === 'horizontal') {
              if (this.getLayoutDirection() === 'rtl') {
                  ping.right = this.transformX > 0;
                  ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
              }
              else {
                  ping.left = this.transformX < 0;
                  ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
              }
          }
          else {
              ping.top = this.transformY < 0;
              ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
          }
          Object.keys(ping).forEach(function (pos) {
              var className = "ant-tabs-nav-wrap-ping-" + pos;
              if (ping[pos]) {
                  navWarp.classList.add(className);
              }
              else {
                  navWarp.classList.remove(className);
              }
          });
      };
      NzTabNavBarComponent.prototype.setVisibleRange = function () {
          var unit;
          var position;
          var transformSize;
          var basicSize;
          var tabContentSize;
          var addSize;
          var tabs = this.items.toArray();
          var DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
          var getOffset = function (index) {
              var offset;
              var size = tabs[index] || DEFAULT_SIZE;
              if (position === 'right') {
                  offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
              }
              else {
                  offset = size[position];
              }
              return offset;
          };
          if (this.position === 'horizontal') {
              unit = 'width';
              basicSize = this.wrapperWidth;
              tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
              addSize = this.addButtonWidth;
              transformSize = Math.abs(this.transformX);
              if (this.getLayoutDirection() === 'rtl') {
                  position = 'right';
                  this.pingRight = this.transformX > 0;
                  this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
              }
              else {
                  this.pingLeft = this.transformX < 0;
                  this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                  position = 'left';
              }
          }
          else {
              unit = 'height';
              basicSize = this.wrapperHeight;
              tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
              addSize = this.addButtonHeight;
              position = 'top';
              transformSize = -this.transformY;
              this.pingTop = this.transformY < 0;
              this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
          }
          var mergedBasicSize = basicSize;
          if (tabContentSize + addSize > basicSize) {
              mergedBasicSize = basicSize - addSize;
          }
          if (!tabs.length) {
              this.hiddenItems = [];
              this.cdr.markForCheck();
              return;
          }
          var len = tabs.length;
          var endIndex = len;
          for (var i = 0; i < len; i += 1) {
              var offset = getOffset(i);
              var size = tabs[i] || DEFAULT_SIZE;
              if (offset + size[unit] > transformSize + mergedBasicSize) {
                  endIndex = i - 1;
                  break;
              }
          }
          var startIndex = 0;
          for (var i = len - 1; i >= 0; i -= 1) {
              var offset = getOffset(i);
              if (offset < transformSize) {
                  startIndex = i + 1;
                  break;
              }
          }
          var startHiddenTabs = tabs.slice(0, startIndex);
          var endHiddenTabs = tabs.slice(endIndex + 1);
          this.hiddenItems = __spread(startHiddenTabs, endHiddenTabs);
          this.cdr.markForCheck();
      };
      NzTabNavBarComponent.prototype.getLayoutDirection = function () {
          return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
      };
      NzTabNavBarComponent.prototype.setTabFocus = function (_tabIndex) { };
      NzTabNavBarComponent.prototype.ngOnChanges = function (changes) {
          var position = changes.position;
          // The first will be aligning in ngAfterViewInit
          if (position && !position.isFirstChange()) {
              this.alignInkBarToSelectedTab();
              this.lockAnimation();
              this.updateScrollListPosition();
          }
      };
      return NzTabNavBarComponent;
  }());
  NzTabNavBarComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tabs-nav',
                  exportAs: 'nzTabsNav',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <div\n      class=\"ant-tabs-nav-wrap\"\n      [class.ant-tabs-nav-wrap-ping-left]=\"pingLeft\"\n      [class.ant-tabs-nav-wrap-ping-right]=\"pingRight\"\n      [class.ant-tabs-nav-wrap-ping-top]=\"pingTop\"\n      [class.ant-tabs-nav-wrap-ping-bottom]=\"pingBottom\"\n      #navWarp\n    >\n      <div class=\"ant-tabs-nav-list\" #navList nzTabScrollList (offsetChange)=\"onOffsetChange($event)\" (tabScroll)=\"tabScroll.emit($event)\">\n        <ng-content></ng-content>\n        <button *ngIf=\"showAddButton\" nz-tab-add-button [addIcon]=\"addIcon\" (click)=\"addClicked.emit()\"></button>\n        <div nz-tabs-ink-bar [hidden]=\"hideBar\" [position]=\"position\" [animated]=\"inkBarAnimated\"></div>\n      </div>\n    </div>\n    <nz-tab-nav-operation\n      (addClicked)=\"addClicked.emit()\"\n      (selected)=\"onSelectedFromMenu($event)\"\n      [addIcon]=\"addIcon\"\n      [addable]=\"addable\"\n      [items]=\"hiddenItems\"\n    ></nz-tab-nav-operation>\n    <div class=\"ant-tabs-extra-content\" *ngIf=\"extraTemplate\">\n      <ng-template [ngTemplateOutlet]=\"extraTemplate\"></ng-template>\n    </div>\n  ",
                  host: {
                      role: 'tablist',
                      class: 'ant-tabs-nav',
                      '(keydown)': 'handleKeydown($event)'
                  }
              },] }
  ];
  NzTabNavBarComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: core.NgZone },
      { type: overlay.ViewportRuler },
      { type: resizeObservers.NzResizeObserver },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzTabNavBarComponent.propDecorators = {
      indexFocused: [{ type: core.Output }],
      selectFocusedIndex: [{ type: core.Output }],
      addClicked: [{ type: core.Output }],
      tabScroll: [{ type: core.Output }],
      position: [{ type: core.Input }],
      addable: [{ type: core.Input }],
      hideBar: [{ type: core.Input }],
      addIcon: [{ type: core.Input }],
      inkBarAnimated: [{ type: core.Input }],
      extraTemplate: [{ type: core.Input }],
      selectedIndex: [{ type: core.Input }],
      navWarpRef: [{ type: core.ViewChild, args: ['navWarp', { static: true },] }],
      navListRef: [{ type: core.ViewChild, args: ['navList', { static: true },] }],
      operationRef: [{ type: core.ViewChild, args: [NzTabNavOperationComponent, { static: true },] }],
      addBtnRef: [{ type: core.ViewChild, args: [NzTabAddButtonComponent, { static: false },] }],
      inkBar: [{ type: core.ViewChild, args: [NzTabsInkBarDirective, { static: true },] }],
      items: [{ type: core.ContentChildren, args: [NzTabNavItemDirective, { descendants: true },] }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTabBodyComponent = /** @class */ (function () {
      function NzTabBodyComponent() {
          this.content = null;
          this.active = false;
          this.tabPaneAnimated = true;
          this.forceRender = false;
      }
      return NzTabBodyComponent;
  }());
  NzTabBodyComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-tab-body]',
                  exportAs: 'nzTabBody',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-container *ngIf=\"active || forceRender\">\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n    </ng-container>\n  ",
                  host: {
                      class: 'ant-tabs-tabpane',
                      '[class.ant-tabs-tabpane-active]': 'active',
                      '[attr.tabindex]': 'active ? 0 : -1',
                      '[attr.aria-hidden]': '!active',
                      '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
                      '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
                      '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
                      '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
                  }
              },] }
  ];
  NzTabBodyComponent.propDecorators = {
      content: [{ type: core.Input }],
      active: [{ type: core.Input }],
      tabPaneAnimated: [{ type: core.Input }],
      forceRender: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var MIN_SWIPE_DISTANCE = 0.1;
  var STOP_SWIPE_DISTANCE = 0.01;
  var REFRESH_INTERVAL = 20;
  var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
  var NzTabScrollListDirective = /** @class */ (function () {
      function NzTabScrollListDirective(ngZone, elementRef) {
          var _this = this;
          this.ngZone = ngZone;
          this.elementRef = elementRef;
          this.lastWheelDirection = null;
          this.lastWheelTimestamp = 0;
          this.lastTimestamp = 0;
          this.lastTimeDiff = 0;
          this.lastMixedWheel = 0;
          this.lastWheelPrevent = false;
          this.touchPosition = null;
          this.lastOffset = null;
          this.motion = -1;
          this.unsubscribe = function () { return void 0; };
          this.offsetChange = new core.EventEmitter();
          this.tabScroll = new core.EventEmitter();
          this.onTouchEnd = function (e) {
              if (!_this.touchPosition) {
                  return;
              }
              var lastOffset = _this.lastOffset;
              var lastTimeDiff = _this.lastTimeDiff;
              _this.lastOffset = _this.touchPosition = null;
              if (lastOffset) {
                  var distanceX = lastOffset.x / lastTimeDiff;
                  var distanceY = lastOffset.y / lastTimeDiff;
                  var absX = Math.abs(distanceX);
                  var absY = Math.abs(distanceY);
                  // Skip swipe if low distance
                  if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
                      return;
                  }
                  var currentX_1 = distanceX;
                  var currentY_1 = distanceY;
                  _this.motion = window.setInterval(function () {
                      if (Math.abs(currentX_1) < STOP_SWIPE_DISTANCE && Math.abs(currentY_1) < STOP_SWIPE_DISTANCE) {
                          window.clearInterval(_this.motion);
                          return;
                      }
                      currentX_1 *= SPEED_OFF_MULTIPLE;
                      currentY_1 *= SPEED_OFF_MULTIPLE;
                      _this.onOffset(currentX_1 * REFRESH_INTERVAL, currentY_1 * REFRESH_INTERVAL, e);
                  }, REFRESH_INTERVAL);
              }
          };
          this.onTouchMove = function (e) {
              if (!_this.touchPosition) {
                  return;
              }
              e.preventDefault();
              var _a = e.touches[0], screenX = _a.screenX, screenY = _a.screenY;
              var offsetX = screenX - _this.touchPosition.x;
              var offsetY = screenY - _this.touchPosition.y;
              _this.onOffset(offsetX, offsetY, e);
              var now = Date.now();
              _this.lastTimeDiff = now - _this.lastTimestamp;
              _this.lastTimestamp = now;
              _this.lastOffset = { x: offsetX, y: offsetY };
              _this.touchPosition = { x: screenX, y: screenY };
          };
          this.onTouchStart = function (e) {
              var _a = e.touches[0], screenX = _a.screenX, screenY = _a.screenY;
              _this.touchPosition = { x: screenX, y: screenY };
              window.clearInterval(_this.motion);
          };
          this.onWheel = function (e) {
              var deltaX = e.deltaX, deltaY = e.deltaY;
              var mixed;
              var absX = Math.abs(deltaX);
              var absY = Math.abs(deltaY);
              if (absX === absY) {
                  mixed = _this.lastWheelDirection === 'x' ? deltaX : deltaY;
              }
              else if (absX > absY) {
                  mixed = deltaX;
                  _this.lastWheelDirection = 'x';
              }
              else {
                  mixed = deltaY;
                  _this.lastWheelDirection = 'y';
              }
              // Optimize mac touch scroll
              var now = Date.now();
              var absMixed = Math.abs(mixed);
              if (now - _this.lastWheelTimestamp > 100 || absMixed - _this.lastMixedWheel > 10) {
                  _this.lastWheelPrevent = false;
              }
              _this.onOffset(-mixed, -mixed, e);
              if (e.defaultPrevented || _this.lastWheelPrevent) {
                  _this.lastWheelPrevent = true;
              }
              _this.lastWheelTimestamp = now;
              _this.lastMixedWheel = absMixed;
          };
      }
      NzTabScrollListDirective.prototype.ngOnInit = function () {
          var _this = this;
          this.unsubscribe = this.ngZone.runOutsideAngular(function () {
              var el = _this.elementRef.nativeElement;
              var wheel$ = rxjs.fromEvent(el, 'wheel');
              var touchstart$ = rxjs.fromEvent(el, 'touchstart');
              var touchmove$ = rxjs.fromEvent(el, 'touchmove');
              var touchend$ = rxjs.fromEvent(el, 'touchend');
              var subscription = new rxjs.Subscription();
              subscription.add(_this.subscribeWrap('wheel', wheel$, _this.onWheel));
              subscription.add(_this.subscribeWrap('touchstart', touchstart$, _this.onTouchStart));
              subscription.add(_this.subscribeWrap('touchmove', touchmove$, _this.onTouchMove));
              subscription.add(_this.subscribeWrap('touchend', touchend$, _this.onTouchEnd));
              return function () {
                  subscription.unsubscribe();
              };
          });
      };
      NzTabScrollListDirective.prototype.subscribeWrap = function (type, observable, handler) {
          var _this = this;
          return observable.subscribe(function (event) {
              _this.tabScroll.emit({
                  type: type,
                  event: event
              });
              if (!event.defaultPrevented) {
                  handler(event);
              }
          });
      };
      NzTabScrollListDirective.prototype.onOffset = function (x, y, event) {
          var _this = this;
          this.ngZone.run(function () {
              _this.offsetChange.emit({
                  x: x,
                  y: y,
                  event: event
              });
          });
      };
      NzTabScrollListDirective.prototype.ngOnDestroy = function () {
          this.unsubscribe();
      };
      return NzTabScrollListDirective;
  }());
  NzTabScrollListDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nzTabScrollList]'
              },] }
  ];
  NzTabScrollListDirective.ctorParameters = function () { return [
      { type: core.NgZone },
      { type: core.ElementRef }
  ]; };
  NzTabScrollListDirective.propDecorators = {
      offsetChange: [{ type: core.Output }],
      tabScroll: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTabCloseButtonComponent = /** @class */ (function () {
      function NzTabCloseButtonComponent() {
          this.closeIcon = 'close';
      }
      return NzTabCloseButtonComponent;
  }());
  NzTabCloseButtonComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tab-close-button, button[nz-tab-close-button]',
                  template: "\n    <ng-container *nzStringTemplateOutlet=\"closeIcon; let icon\">\n      <i nz-icon [nzType]=\"icon\" nzTheme=\"outline\"></i>\n    </ng-container>\n  ",
                  host: {
                      class: 'ant-tabs-tab-remove',
                      'aria-label': 'Close tab',
                      type: 'button'
                  }
              },] }
  ];
  NzTabCloseButtonComponent.ctorParameters = function () { return []; };
  NzTabCloseButtonComponent.propDecorators = {
      closeIcon: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  /**
   * Fix https://github.com/angular/angular/issues/8563
   */
  var NzTabLinkTemplateDirective = /** @class */ (function () {
      function NzTabLinkTemplateDirective(templateRef) {
          this.templateRef = templateRef;
      }
      return NzTabLinkTemplateDirective;
  }());
  NzTabLinkTemplateDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'ng-template[nzTabLink]',
                  exportAs: 'nzTabLinkTemplate'
              },] }
  ];
  NzTabLinkTemplateDirective.ctorParameters = function () { return [
      { type: core.TemplateRef, decorators: [{ type: core.Host }] }
  ]; };
  /**
   * This component is for catching `routerLink` directive.
   */
  var NzTabLinkDirective = /** @class */ (function () {
      function NzTabLinkDirective(elementRef, routerLink, routerLinkWithHref) {
          this.elementRef = elementRef;
          this.routerLink = routerLink;
          this.routerLinkWithHref = routerLinkWithHref;
      }
      return NzTabLinkDirective;
  }());
  NzTabLinkDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'a[nz-tab-link]',
                  exportAs: 'nzTabLink'
              },] }
  ];
  NzTabLinkDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: router.RouterLink, decorators: [{ type: core.Optional }, { type: core.Self }] },
      { type: router.RouterLinkWithHref, decorators: [{ type: core.Optional }, { type: core.Self }] }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  /** Decorates the `ng-template` tags and reads out the template from it. */
  var NzTabDirective = /** @class */ (function () {
      function NzTabDirective() {
      }
      return NzTabDirective;
  }());
  NzTabDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-tab]',
                  exportAs: 'nzTab'
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  /**
   * Used to provide a tab set to a tab without causing a circular dependency.
   */
  var NZ_TAB_SET = new core.InjectionToken('NZ_TAB_SET');
  var NzTabComponent = /** @class */ (function () {
      function NzTabComponent(closestTabSet) {
          this.closestTabSet = closestTabSet;
          this.nzTitle = '';
          this.nzClosable = false;
          this.nzCloseIcon = 'close';
          this.nzDisabled = false;
          this.nzForceRender = false;
          this.nzSelect = new core.EventEmitter();
          this.nzDeselect = new core.EventEmitter();
          this.nzClick = new core.EventEmitter();
          this.nzContextmenu = new core.EventEmitter();
          this.template = null;
          this.isActive = false;
          this.position = null;
          this.origin = null;
          this.stateChanges = new rxjs.Subject();
      }
      Object.defineProperty(NzTabComponent.prototype, "content", {
          get: function () {
              return this.template || this.contentTemplate;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabComponent.prototype, "label", {
          get: function () {
              var _a;
              return this.nzTitle || ((_a = this.nzTabLinkTemplateDirective) === null || _a === void 0 ? void 0 : _a.templateRef);
          },
          enumerable: false,
          configurable: true
      });
      NzTabComponent.prototype.ngOnChanges = function (changes) {
          var nzTitle = changes.nzTitle, nzDisabled = changes.nzDisabled, nzForceRender = changes.nzForceRender;
          if (nzTitle || nzDisabled || nzForceRender) {
              this.stateChanges.next();
          }
      };
      NzTabComponent.prototype.ngOnDestroy = function () {
          this.stateChanges.complete();
      };
      return NzTabComponent;
  }());
  NzTabComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tab',
                  exportAs: 'nzTab',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-template #tabLinkTemplate>\n      <ng-content select=\"[nz-tab-link]\"></ng-content>\n    </ng-template>\n    <ng-template #contentTemplate><ng-content></ng-content></ng-template>\n  "
              },] }
  ];
  NzTabComponent.ctorParameters = function () { return [
      { type: undefined, decorators: [{ type: core.Inject, args: [NZ_TAB_SET,] }] }
  ]; };
  NzTabComponent.propDecorators = {
      nzTitle: [{ type: core.Input }],
      nzClosable: [{ type: core.Input }],
      nzCloseIcon: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzForceRender: [{ type: core.Input }],
      nzSelect: [{ type: core.Output }],
      nzDeselect: [{ type: core.Output }],
      nzClick: [{ type: core.Output }],
      nzContextmenu: [{ type: core.Output }],
      nzTabLinkTemplateDirective: [{ type: core.ContentChild, args: [NzTabLinkTemplateDirective, { static: false },] }],
      template: [{ type: core.ContentChild, args: [NzTabDirective, { static: false, read: core.TemplateRef },] }],
      linkDirective: [{ type: core.ContentChild, args: [NzTabLinkDirective, { static: false },] }],
      contentTemplate: [{ type: core.ViewChild, args: ['contentTemplate', { static: true },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTabComponent.prototype, "nzClosable", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTabComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTabComponent.prototype, "nzForceRender", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTabChangeEvent = /** @class */ (function () {
      function NzTabChangeEvent() {
      }
      return NzTabChangeEvent;
  }());

  var NZ_CONFIG_MODULE_NAME = 'tabs';
  var nextId = 0;
  var NzTabSetComponent = /** @class */ (function () {
      function NzTabSetComponent(nzConfigService, cdr, directionality, router) {
          this.nzConfigService = nzConfigService;
          this.cdr = cdr;
          this.directionality = directionality;
          this.router = router;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzTabPosition = 'top';
          this.nzCanDeactivate = null;
          this.nzAddIcon = 'plus';
          this.nzTabBarStyle = null;
          this.nzType = 'line';
          this.nzSize = 'default';
          this.nzAnimated = true;
          this.nzTabBarGutter = undefined;
          this.nzHideAdd = false;
          this.nzCentered = false;
          this.nzHideAll = false;
          this.nzLinkRouter = false;
          this.nzLinkExact = true;
          this.nzSelectChange = new core.EventEmitter(true);
          this.nzSelectedIndexChange = new core.EventEmitter();
          this.nzTabListScroll = new core.EventEmitter();
          this.nzClose = new core.EventEmitter();
          this.nzAdd = new core.EventEmitter();
          // Pick up only direct descendants under ivy rendering engine
          // We filter out only the tabs that belong to this tab set in `tabs`.
          this.allTabs = new core.QueryList();
          // All the direct tabs for this tab set
          this.tabs = new core.QueryList();
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
          this.indexToSelect = 0;
          this.selectedIndex = null;
          this.tabLabelSubscription = rxjs.Subscription.EMPTY;
          this.tabsSubscription = rxjs.Subscription.EMPTY;
          this.canDeactivateSubscription = rxjs.Subscription.EMPTY;
          this.tabSetId = nextId++;
      }
      Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
          get: function () {
              return this.selectedIndex;
          },
          set: function (value) {
              this.indexToSelect = coercion.coerceNumberProperty(value, null);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabSetComponent.prototype, "position", {
          get: function () {
              return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabSetComponent.prototype, "addable", {
          get: function () {
              return this.nzType === 'editable-card' && !this.nzHideAdd;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabSetComponent.prototype, "closable", {
          get: function () {
              return this.nzType === 'editable-card';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabSetComponent.prototype, "line", {
          get: function () {
              return this.nzType === 'line';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabSetComponent.prototype, "inkBarAnimated", {
          get: function () {
              return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTabSetComponent.prototype, "tabPaneAnimated", {
          get: function () {
              return (this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane));
          },
          enumerable: false,
          configurable: true
      });
      NzTabSetComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
      };
      NzTabSetComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
          this.tabs.destroy();
          this.tabLabelSubscription.unsubscribe();
          this.tabsSubscription.unsubscribe();
          this.canDeactivateSubscription.unsubscribe();
      };
      NzTabSetComponent.prototype.ngAfterContentInit = function () {
          var _this = this;
          Promise.resolve().then(function () {
              _this.setUpRouter();
          });
          this.subscribeToTabLabels();
          this.subscribeToAllTabChanges();
          // Subscribe to changes in the amount of tabs, in order to be
          // able to re-render the content as new tabs are added or removed.
          this.tabsSubscription = this.tabs.changes.subscribe(function () {
              var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
              // Maintain the previously-selected tab if a new tab is added or removed and there is no
              // explicit change that selects a different tab.
              if (indexToSelect === _this.selectedIndex) {
                  var tabs = _this.tabs.toArray();
                  for (var i = 0; i < tabs.length; i++) {
                      if (tabs[i].isActive) {
                          // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                          // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                          // adding a tab within the `nzSelectedIndexChange` event.
                          _this.indexToSelect = _this.selectedIndex = i;
                          break;
                      }
                  }
              }
              _this.subscribeToTabLabels();
              _this.cdr.markForCheck();
          });
      };
      NzTabSetComponent.prototype.ngAfterContentChecked = function () {
          var _this = this;
          // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
          // the amount of tabs changes before the actual change detection runs.
          var indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
          // If there is a change in selected index, emit a change event. Should not trigger if
          // the selected index has not yet been initialized.
          if (this.selectedIndex !== indexToSelect) {
              var isFirstRun_1 = this.selectedIndex == null;
              if (!isFirstRun_1) {
                  this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
              }
              // Changing these values after change detection has run
              // since the checked content may contain references to them.
              Promise.resolve().then(function () {
                  _this.tabs.forEach(function (tab, index) { return (tab.isActive = index === indexToSelect); });
                  if (!isFirstRun_1) {
                      _this.nzSelectedIndexChange.emit(indexToSelect);
                  }
              });
          }
          // Setup the position for each tab and optionally setup an origin on the next selected tab.
          this.tabs.forEach(function (tab, index) {
              tab.position = index - indexToSelect;
              // If there is already a selected tab, then set up an origin for the next selected tab
              // if it doesn't have one already.
              if (_this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                  tab.origin = indexToSelect - _this.selectedIndex;
              }
          });
          if (this.selectedIndex !== indexToSelect) {
              this.selectedIndex = indexToSelect;
              this.cdr.markForCheck();
          }
      };
      NzTabSetComponent.prototype.onClose = function (index, e) {
          e.preventDefault();
          e.stopPropagation();
          this.nzClose.emit({ index: index });
      };
      NzTabSetComponent.prototype.onAdd = function () {
          this.nzAdd.emit();
      };
      NzTabSetComponent.prototype.clampTabIndex = function (index) {
          return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
      };
      NzTabSetComponent.prototype.createChangeEvent = function (index) {
          var event = new NzTabChangeEvent();
          event.index = index;
          if (this.tabs && this.tabs.length) {
              event.tab = this.tabs.toArray()[index];
              this.tabs.forEach(function (tab, i) {
                  if (i !== index) {
                      tab.nzDeselect.emit();
                  }
              });
              event.tab.nzSelect.emit();
          }
          return event;
      };
      NzTabSetComponent.prototype.subscribeToTabLabels = function () {
          var _this = this;
          if (this.tabLabelSubscription) {
              this.tabLabelSubscription.unsubscribe();
          }
          this.tabLabelSubscription = rxjs.merge.apply(void 0, __spread(this.tabs.map(function (tab) { return tab.stateChanges; }))).subscribe(function () { return _this.cdr.markForCheck(); });
      };
      NzTabSetComponent.prototype.subscribeToAllTabChanges = function () {
          var _this = this;
          this.allTabs.changes.pipe(operators.startWith(this.allTabs)).subscribe(function (tabs) {
              _this.tabs.reset(tabs.filter(function (tab) { return tab.closestTabSet === _this; }));
              _this.tabs.notifyOnChanges();
          });
      };
      NzTabSetComponent.prototype.canDeactivateFun = function (pre, next) {
          if (typeof this.nzCanDeactivate === 'function') {
              var observable = util.wrapIntoObservable(this.nzCanDeactivate(pre, next));
              return observable.pipe(operators.first(), operators.takeUntil(this.destroy$));
          }
          else {
              return rxjs.of(true);
          }
      };
      NzTabSetComponent.prototype.clickNavItem = function (tab, index, e) {
          if (!tab.nzDisabled) {
              // ignore nzCanDeactivate
              tab.nzClick.emit();
              if (!this.isRouterLinkClickEvent(index, e)) {
                  this.setSelectedIndex(index);
              }
          }
      };
      NzTabSetComponent.prototype.isRouterLinkClickEvent = function (index, event) {
          var _a, _b;
          var target = event.target;
          if (this.nzLinkRouter) {
              return !!((_b = (_a = this.tabs.toArray()[index]) === null || _a === void 0 ? void 0 : _a.linkDirective) === null || _b === void 0 ? void 0 : _b.elementRef.nativeElement.contains(target));
          }
          else {
              return false;
          }
      };
      NzTabSetComponent.prototype.contextmenuNavItem = function (tab, e) {
          if (!tab.nzDisabled) {
              // ignore nzCanDeactivate
              tab.nzContextmenu.emit(e);
          }
      };
      NzTabSetComponent.prototype.setSelectedIndex = function (index) {
          var _this = this;
          this.canDeactivateSubscription.unsubscribe();
          this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(function (can) {
              if (can) {
                  _this.nzSelectedIndex = index;
                  _this.tabNavBarRef.focusIndex = index;
                  _this.cdr.markForCheck();
              }
          });
      };
      NzTabSetComponent.prototype.getTabIndex = function (tab, index) {
          if (tab.nzDisabled) {
              return null;
          }
          return this.selectedIndex === index ? 0 : -1;
      };
      NzTabSetComponent.prototype.getTabContentId = function (i) {
          return "nz-tabs-" + this.tabSetId + "-tab-" + i;
      };
      NzTabSetComponent.prototype.setUpRouter = function () {
          var _this = this;
          if (this.nzLinkRouter) {
              if (!this.router) {
                  throw new Error(logger.PREFIX + " you should import 'RouterModule' if you want to use 'nzLinkRouter'!");
              }
              this.router.events
                  .pipe(operators.takeUntil(this.destroy$), operators.filter(function (e) { return e instanceof router.NavigationEnd; }), operators.startWith(true), operators.delay(0))
                  .subscribe(function () {
                  _this.updateRouterActive();
                  _this.cdr.markForCheck();
              });
          }
      };
      NzTabSetComponent.prototype.updateRouterActive = function () {
          if (this.router.navigated) {
              var index = this.findShouldActiveTabIndex();
              if (index !== this.selectedIndex) {
                  this.setSelectedIndex(index);
              }
              this.nzHideAll = index === -1;
          }
      };
      NzTabSetComponent.prototype.findShouldActiveTabIndex = function () {
          var tabs = this.tabs.toArray();
          var isActive = this.isLinkActive(this.router);
          return tabs.findIndex(function (tab) {
              var c = tab.linkDirective;
              return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
          });
      };
      NzTabSetComponent.prototype.isLinkActive = function (router) {
          var _this = this;
          return function (link) { return (link ? router.isActive(link.urlTree, _this.nzLinkExact) : false); };
      };
      NzTabSetComponent.prototype.getTabContentMarginValue = function () {
          return -(this.nzSelectedIndex || 0) * 100;
      };
      NzTabSetComponent.prototype.getTabContentMarginLeft = function () {
          if (this.tabPaneAnimated) {
              if (this.dir !== 'rtl') {
                  return this.getTabContentMarginValue() + '%';
              }
          }
          return '';
      };
      NzTabSetComponent.prototype.getTabContentMarginRight = function () {
          if (this.tabPaneAnimated) {
              if (this.dir === 'rtl') {
                  return this.getTabContentMarginValue() + '%';
              }
          }
          return '';
      };
      return NzTabSetComponent;
  }());
  NzTabSetComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tabset',
                  exportAs: 'nzTabset',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.Default,
                  providers: [
                      {
                          provide: NZ_TAB_SET,
                          useExisting: NzTabSetComponent
                      }
                  ],
                  template: "\n    <nz-tabs-nav\n      *ngIf=\"tabs.length\"\n      [ngStyle]=\"nzTabBarStyle\"\n      [selectedIndex]=\"nzSelectedIndex || 0\"\n      [inkBarAnimated]=\"inkBarAnimated\"\n      [addable]=\"addable\"\n      [addIcon]=\"nzAddIcon\"\n      [hideBar]=\"nzHideAll\"\n      [position]=\"position\"\n      [extraTemplate]=\"nzTabBarExtraContent\"\n      (tabScroll)=\"nzTabListScroll.emit($event)\"\n      (selectFocusedIndex)=\"setSelectedIndex($event)\"\n      (addClicked)=\"onAdd()\"\n    >\n      <div\n        class=\"ant-tabs-tab\"\n        [style.margin-right.px]=\"position === 'horizontal' ? nzTabBarGutter : null\"\n        [style.margin-bottom.px]=\"position === 'vertical' ? nzTabBarGutter : null\"\n        [class.ant-tabs-tab-active]=\"nzSelectedIndex === i\"\n        [class.ant-tabs-tab-disabled]=\"tab.nzDisabled\"\n        (click)=\"clickNavItem(tab, i, $event)\"\n        (contextmenu)=\"contextmenuNavItem(tab, $event)\"\n        *ngFor=\"let tab of tabs; let i = index\"\n      >\n        <div\n          role=\"tab\"\n          [attr.tabIndex]=\"getTabIndex(tab, i)\"\n          [attr.aria-disabled]=\"tab.nzDisabled\"\n          [attr.aria-selected]=\"nzSelectedIndex === i && !nzHideAll\"\n          [attr.aria-controls]=\"getTabContentId(i)\"\n          [disabled]=\"tab.nzDisabled\"\n          [tab]=\"tab\"\n          [active]=\"nzSelectedIndex === i\"\n          class=\"ant-tabs-tab-btn\"\n          nzTabNavItem\n          cdkMonitorElementFocus\n        >\n          <ng-container *nzStringTemplateOutlet=\"tab.label; context: { visible: true }\">{{ tab.label }}</ng-container>\n          <button\n            nz-tab-close-button\n            *ngIf=\"tab.nzClosable && closable && !tab.nzDisabled\"\n            [closeIcon]=\"tab.nzCloseIcon\"\n            (click)=\"onClose(i, $event)\"\n          ></button>\n        </div>\n      </div>\n    </nz-tabs-nav>\n    <div class=\"ant-tabs-content-holder\">\n      <div\n        class=\"ant-tabs-content\"\n        [class.ant-tabs-content-top]=\"nzTabPosition === 'top'\"\n        [class.ant-tabs-content-bottom]=\"nzTabPosition === 'bottom'\"\n        [class.ant-tabs-content-left]=\"nzTabPosition === 'left'\"\n        [class.ant-tabs-content-right]=\"nzTabPosition === 'right'\"\n        [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n        [style.margin-left]=\"getTabContentMarginLeft()\"\n        [style.margin-right]=\"getTabContentMarginRight()\"\n      >\n        <div\n          nz-tab-body\n          *ngFor=\"let tab of tabs; let i = index\"\n          [active]=\"nzSelectedIndex == i && !nzHideAll\"\n          [content]=\"tab.content\"\n          [forceRender]=\"tab.nzForceRender\"\n          [tabPaneAnimated]=\"tabPaneAnimated\"\n        ></div>\n      </div>\n    </div>\n  ",
                  host: {
                      class: 'ant-tabs',
                      '[class.ant-tabs-card]': "nzType === 'card' || nzType === 'editable-card'",
                      '[class.ant-tabs-editable]': "nzType === 'editable-card'",
                      '[class.ant-tabs-editable-card]': "nzType === 'editable-card'",
                      '[class.ant-tabs-centered]': "nzCentered",
                      '[class.ant-tabs-rtl]': "dir === 'rtl'",
                      '[class.ant-tabs-top]': "nzTabPosition === 'top'",
                      '[class.ant-tabs-bottom]': "nzTabPosition === 'bottom'",
                      '[class.ant-tabs-left]': "nzTabPosition === 'left'",
                      '[class.ant-tabs-right]': "nzTabPosition === 'right'",
                      '[class.ant-tabs-default]': "nzSize === 'default'",
                      '[class.ant-tabs-small]': "nzSize === 'small'",
                      '[class.ant-tabs-large]': "nzSize === 'large'"
                  }
              },] }
  ];
  NzTabSetComponent.ctorParameters = function () { return [
      { type: config.NzConfigService },
      { type: core.ChangeDetectorRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: router.Router, decorators: [{ type: core.Optional }] }
  ]; };
  NzTabSetComponent.propDecorators = {
      nzSelectedIndex: [{ type: core.Input }],
      nzTabPosition: [{ type: core.Input }],
      nzTabBarExtraContent: [{ type: core.Input }],
      nzCanDeactivate: [{ type: core.Input }],
      nzAddIcon: [{ type: core.Input }],
      nzTabBarStyle: [{ type: core.Input }],
      nzType: [{ type: core.Input }],
      nzSize: [{ type: core.Input }],
      nzAnimated: [{ type: core.Input }],
      nzTabBarGutter: [{ type: core.Input }],
      nzHideAdd: [{ type: core.Input }],
      nzCentered: [{ type: core.Input }],
      nzHideAll: [{ type: core.Input }],
      nzLinkRouter: [{ type: core.Input }],
      nzLinkExact: [{ type: core.Input }],
      nzSelectChange: [{ type: core.Output }],
      nzSelectedIndexChange: [{ type: core.Output }],
      nzTabListScroll: [{ type: core.Output }],
      nzClose: [{ type: core.Output }],
      nzAdd: [{ type: core.Output }],
      allTabs: [{ type: core.ContentChildren, args: [NzTabComponent, { descendants: true },] }],
      tabNavBarRef: [{ type: core.ViewChild, args: [NzTabNavBarComponent, { static: false },] }]
  };
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTabSetComponent.prototype, "nzType", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTabSetComponent.prototype, "nzSize", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTabSetComponent.prototype, "nzAnimated", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Number)
  ], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTabSetComponent.prototype, "nzHideAdd", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTabSetComponent.prototype, "nzCentered", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTabSetComponent.prototype, "nzHideAll", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTabSetComponent.prototype, "nzLinkExact", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var DIRECTIVES = [
      NzTabSetComponent,
      NzTabComponent,
      NzTabNavBarComponent,
      NzTabNavItemDirective,
      NzTabsInkBarDirective,
      NzTabScrollListDirective,
      NzTabNavOperationComponent,
      NzTabAddButtonComponent,
      NzTabCloseButtonComponent,
      NzTabDirective,
      NzTabBodyComponent,
      NzTabLinkDirective,
      NzTabLinkTemplateDirective
  ];
  var NzTabsModule = /** @class */ (function () {
      function NzTabsModule() {
      }
      return NzTabsModule;
  }());
  NzTabsModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DIRECTIVES],
                  exports: [DIRECTIVES],
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      observers.ObserversModule,
                      icon.NzIconModule,
                      outlet.NzOutletModule,
                      platform.PlatformModule,
                      a11y.A11yModule,
                      scrolling.CdkScrollableModule,
                      dropdown.NzDropDownModule
                  ]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NZ_TAB_SET = NZ_TAB_SET;
  exports.NzTabChangeEvent = NzTabChangeEvent;
  exports.NzTabComponent = NzTabComponent;
  exports.NzTabDirective = NzTabDirective;
  exports.NzTabLinkDirective = NzTabLinkDirective;
  exports.NzTabLinkTemplateDirective = NzTabLinkTemplateDirective;
  exports.NzTabSetComponent = NzTabSetComponent;
  exports.NzTabsModule = NzTabsModule;
  exports.ɵNzTabAddButtonComponent = NzTabAddButtonComponent;
  exports.ɵNzTabBodyComponent = NzTabBodyComponent;
  exports.ɵNzTabCloseButtonComponent = NzTabCloseButtonComponent;
  exports.ɵNzTabNavBarComponent = NzTabNavBarComponent;
  exports.ɵNzTabNavItemDirective = NzTabNavItemDirective;
  exports.ɵNzTabNavOperationComponent = NzTabNavOperationComponent;
  exports.ɵNzTabScrollListDirective = NzTabScrollListDirective;
  exports.ɵNzTabsInkBarDirective = NzTabsInkBarDirective;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tabs.umd.js.map
