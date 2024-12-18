(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/logger'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/drawer', ['exports', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].drawer = {}), global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.logger, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon));
}(this, (function (exports, a11y, bidi, keycodes, i1, portal, common, i0, rxjs, operators, config, logger, util, noAnimation, outlet, icon) { 'use strict';

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
  var NzDrawerContentDirective = /** @class */ (function () {
      function NzDrawerContentDirective(templateRef) {
          this.templateRef = templateRef;
      }
      return NzDrawerContentDirective;
  }());
  NzDrawerContentDirective.decorators = [
      { type: i0.Directive, args: [{
                  selector: '[nzDrawerContent]',
                  exportAs: 'nzDrawerContent'
              },] }
  ];
  NzDrawerContentDirective.ctorParameters = function () { return [
      { type: i0.TemplateRef }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzDrawerRef = /** @class */ (function () {
      function NzDrawerRef() {
      }
      return NzDrawerRef;
  }());

  var DRAWER_ANIMATE_DURATION = 300;
  var NZ_CONFIG_MODULE_NAME = 'drawer';
  var NzDrawerComponent = /** @class */ (function (_super) {
      __extends(NzDrawerComponent, _super);
      function NzDrawerComponent(cdr, 
      // tslint:disable-next-line:no-any
      document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher, directionality) {
          var _this = _super.call(this) || this;
          _this.cdr = cdr;
          _this.document = document;
          _this.nzConfigService = nzConfigService;
          _this.renderer = renderer;
          _this.overlay = overlay;
          _this.injector = injector;
          _this.changeDetectorRef = changeDetectorRef;
          _this.focusTrapFactory = focusTrapFactory;
          _this.viewContainerRef = viewContainerRef;
          _this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
          _this.directionality = directionality;
          _this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          _this.nzCloseIcon = 'close';
          _this.nzClosable = true;
          _this.nzMaskClosable = true;
          _this.nzMask = true;
          _this.nzCloseOnNavigation = true;
          _this.nzNoAnimation = false;
          _this.nzKeyboard = true;
          _this.nzPlacement = 'right';
          _this.nzMaskStyle = {};
          _this.nzBodyStyle = {};
          _this.nzWidth = 256;
          _this.nzHeight = 256;
          _this.nzZIndex = 1000;
          _this.nzOffsetX = 0;
          _this.nzOffsetY = 0;
          _this.componentInstance = null;
          _this.nzOnViewInit = new i0.EventEmitter();
          _this.nzOnClose = new i0.EventEmitter();
          _this.nzVisibleChange = new i0.EventEmitter();
          _this.destroy$ = new rxjs.Subject();
          _this.placementChanging = false;
          _this.placementChangeTimeoutId = -1;
          _this.isOpen = false;
          _this.inAnimation = false;
          _this.templateContext = {
              $implicit: undefined,
              drawerRef: _this
          };
          _this.nzAfterOpen = new rxjs.Subject();
          _this.nzAfterClose = new rxjs.Subject();
          // from service config
          _this.nzDirection = undefined;
          _this.dir = 'ltr';
          return _this;
      }
      Object.defineProperty(NzDrawerComponent.prototype, "nzVisible", {
          get: function () {
              return this.isOpen;
          },
          set: function (value) {
              this.isOpen = value;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzDrawerComponent.prototype, "offsetTransform", {
          get: function () {
              if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
                  return null;
              }
              switch (this.nzPlacement) {
                  case 'left':
                      return "translateX(" + this.nzOffsetX + "px)";
                  case 'right':
                      return "translateX(-" + this.nzOffsetX + "px)";
                  case 'top':
                      return "translateY(" + this.nzOffsetY + "px)";
                  case 'bottom':
                      return "translateY(-" + this.nzOffsetY + "px)";
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzDrawerComponent.prototype, "transform", {
          get: function () {
              if (this.isOpen) {
                  return null;
              }
              switch (this.nzPlacement) {
                  case 'left':
                      return "translateX(-100%)";
                  case 'right':
                      return "translateX(100%)";
                  case 'top':
                      return "translateY(-100%)";
                  case 'bottom':
                      return "translateY(100%)";
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzDrawerComponent.prototype, "width", {
          get: function () {
              return this.isLeftOrRight ? util.toCssPixel(this.nzWidth) : null;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzDrawerComponent.prototype, "height", {
          get: function () {
              return !this.isLeftOrRight ? util.toCssPixel(this.nzHeight) : null;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzDrawerComponent.prototype, "isLeftOrRight", {
          get: function () {
              return this.nzPlacement === 'left' || this.nzPlacement === 'right';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzDrawerComponent.prototype, "afterOpen", {
          get: function () {
              return this.nzAfterOpen.asObservable();
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzDrawerComponent.prototype, "afterClose", {
          get: function () {
              return this.nzAfterClose.asObservable();
          },
          enumerable: false,
          configurable: true
      });
      NzDrawerComponent.prototype.isTemplateRef = function (value) {
          return value instanceof i0.TemplateRef;
      };
      NzDrawerComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
          this.dir = this.nzDirection || this.directionality.value;
          this.attachOverlay();
          this.updateOverlayStyle();
          this.updateBodyOverflow();
          this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
          this.changeDetectorRef.detectChanges();
      };
      NzDrawerComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          this.attachBodyContent();
          setTimeout(function () {
              _this.nzOnViewInit.emit();
          });
      };
      NzDrawerComponent.prototype.ngAfterContentInit = function () {
          if (!(this.contentFromContentChild || this.nzContent)) {
              logger.warnDeprecation('Usage `<ng-content></ng-content>` is deprecated, which will be removed in 12.0.0. Please instead use `<ng-template nzDrawerContent></ng-template>` to declare the content of the drawer.');
          }
      };
      NzDrawerComponent.prototype.ngOnChanges = function (changes) {
          var nzPlacement = changes.nzPlacement, nzVisible = changes.nzVisible;
          if (nzVisible) {
              var value = changes.nzVisible.currentValue;
              if (value) {
                  this.open();
              }
              else {
                  this.close();
              }
          }
          if (nzPlacement && !nzPlacement.isFirstChange()) {
              this.triggerPlacementChangeCycleOnce();
          }
      };
      NzDrawerComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
          clearTimeout(this.placementChangeTimeoutId);
          this.disposeOverlay();
      };
      NzDrawerComponent.prototype.getAnimationDuration = function () {
          return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
      };
      // Disable the transition animation temporarily when the placement changing
      NzDrawerComponent.prototype.triggerPlacementChangeCycleOnce = function () {
          var _this = this;
          if (!this.nzNoAnimation) {
              this.placementChanging = true;
              this.changeDetectorRef.markForCheck();
              clearTimeout(this.placementChangeTimeoutId);
              this.placementChangeTimeoutId = setTimeout(function () {
                  _this.placementChanging = false;
                  _this.changeDetectorRef.markForCheck();
              }, this.getAnimationDuration());
          }
      };
      NzDrawerComponent.prototype.close = function (result) {
          var _this = this;
          this.isOpen = false;
          this.inAnimation = true;
          this.nzVisibleChange.emit(false);
          this.updateOverlayStyle();
          this.overlayKeyboardDispatcher.remove(this.overlayRef);
          this.changeDetectorRef.detectChanges();
          setTimeout(function () {
              _this.updateBodyOverflow();
              _this.restoreFocus();
              _this.inAnimation = false;
              _this.nzAfterClose.next(result);
              _this.nzAfterClose.complete();
              _this.componentInstance = null;
          }, this.getAnimationDuration());
      };
      NzDrawerComponent.prototype.open = function () {
          var _this = this;
          this.attachOverlay();
          this.isOpen = true;
          this.inAnimation = true;
          this.nzVisibleChange.emit(true);
          this.overlayKeyboardDispatcher.add(this.overlayRef);
          this.updateOverlayStyle();
          this.updateBodyOverflow();
          this.savePreviouslyFocusedElement();
          this.trapFocus();
          this.changeDetectorRef.detectChanges();
          setTimeout(function () {
              _this.inAnimation = false;
              _this.changeDetectorRef.detectChanges();
              _this.nzAfterOpen.next();
          }, this.getAnimationDuration());
      };
      NzDrawerComponent.prototype.getContentComponent = function () {
          return this.componentInstance;
      };
      NzDrawerComponent.prototype.closeClick = function () {
          this.nzOnClose.emit();
      };
      NzDrawerComponent.prototype.maskClick = function () {
          if (this.nzMaskClosable && this.nzMask) {
              this.nzOnClose.emit();
          }
      };
      NzDrawerComponent.prototype.attachBodyContent = function () {
          this.bodyPortalOutlet.dispose();
          if (this.nzContent instanceof i0.Type) {
              var childInjector = i0.Injector.create({
                  parent: this.injector,
                  providers: [{ provide: NzDrawerRef, useValue: this }]
              });
              var componentPortal = new portal.ComponentPortal(this.nzContent, null, childInjector);
              var componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
              this.componentInstance = componentRef.instance;
              Object.assign(componentRef.instance, this.nzContentParams);
              componentRef.changeDetectorRef.detectChanges();
          }
      };
      NzDrawerComponent.prototype.attachOverlay = function () {
          var _this = this;
          if (!this.overlayRef) {
              this.portal = new portal.TemplatePortal(this.drawerTemplate, this.viewContainerRef);
              this.overlayRef = this.overlay.create(this.getOverlayConfig());
          }
          if (this.overlayRef && !this.overlayRef.hasAttached()) {
              this.overlayRef.attach(this.portal);
              this.overlayRef.keydownEvents()
                  .pipe(operators.takeUntil(this.destroy$))
                  .subscribe(function (event) {
                  if (event.keyCode === keycodes.ESCAPE && _this.isOpen && _this.nzKeyboard) {
                      _this.nzOnClose.emit();
                  }
              });
              this.overlayRef
                  .detachments()
                  .pipe(operators.takeUntil(this.destroy$))
                  .subscribe(function () {
                  _this.disposeOverlay();
              });
          }
      };
      NzDrawerComponent.prototype.disposeOverlay = function () {
          var _a;
          (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.dispose();
          this.overlayRef = null;
      };
      NzDrawerComponent.prototype.getOverlayConfig = function () {
          return new i1.OverlayConfig({
              disposeOnNavigation: this.nzCloseOnNavigation,
              positionStrategy: this.overlay.position().global(),
              scrollStrategy: this.overlay.scrollStrategies.block()
          });
      };
      NzDrawerComponent.prototype.updateOverlayStyle = function () {
          if (this.overlayRef && this.overlayRef.overlayElement) {
              this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
          }
      };
      NzDrawerComponent.prototype.updateBodyOverflow = function () {
          if (this.overlayRef) {
              if (this.isOpen) {
                  this.overlayRef.getConfig().scrollStrategy.enable();
              }
              else {
                  this.overlayRef.getConfig().scrollStrategy.disable();
              }
          }
      };
      NzDrawerComponent.prototype.savePreviouslyFocusedElement = function () {
          if (this.document && !this.previouslyFocusedElement) {
              this.previouslyFocusedElement = this.document.activeElement;
              // We need the extra check, because IE's svg element has no blur method.
              if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                  this.previouslyFocusedElement.blur();
              }
          }
      };
      NzDrawerComponent.prototype.trapFocus = function () {
          if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
              this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
              this.focusTrap.focusInitialElement();
          }
      };
      NzDrawerComponent.prototype.restoreFocus = function () {
          // We need the extra check, because IE can set the `activeElement` to null in some cases.
          if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
              this.previouslyFocusedElement.focus();
          }
          if (this.focusTrap) {
              this.focusTrap.destroy();
          }
      };
      return NzDrawerComponent;
  }(NzDrawerRef));
  NzDrawerComponent.decorators = [
      { type: i0.Component, args: [{
                  selector: 'nz-drawer',
                  exportAs: 'nzDrawer',
                  template: "\n    <ng-template #drawerTemplate>\n      <div\n        class=\"ant-drawer\"\n        [nzNoAnimation]=\"nzNoAnimation\"\n        [class.ant-drawer-rtl]=\"dir === 'rtl'\"\n        [class.ant-drawer-open]=\"isOpen\"\n        [class.no-mask]=\"!nzMask\"\n        [class.ant-drawer-top]=\"nzPlacement === 'top'\"\n        [class.ant-drawer-bottom]=\"nzPlacement === 'bottom'\"\n        [class.ant-drawer-right]=\"nzPlacement === 'right'\"\n        [class.ant-drawer-left]=\"nzPlacement === 'left'\"\n        [style.transform]=\"offsetTransform\"\n        [style.transition]=\"placementChanging ? 'none' : null\"\n        [style.zIndex]=\"nzZIndex\"\n      >\n        <div class=\"ant-drawer-mask\" (click)=\"maskClick()\" *ngIf=\"nzMask\" [ngStyle]=\"nzMaskStyle\"></div>\n        <div\n          class=\"ant-drawer-content-wrapper {{ nzWrapClassName }}\"\n          [style.width]=\"width\"\n          [style.height]=\"height\"\n          [style.transform]=\"transform\"\n          [style.transition]=\"placementChanging ? 'none' : null\"\n        >\n          <div class=\"ant-drawer-content\">\n            <div class=\"ant-drawer-wrapper-body\" [style.height]=\"isLeftOrRight ? '100%' : null\">\n              <div *ngIf=\"nzTitle || nzClosable\" [class.ant-drawer-header]=\"!!nzTitle\" [class.ant-drawer-header-no-title]=\"!nzTitle\">\n                <div *ngIf=\"nzTitle\" class=\"ant-drawer-title\">\n                  <ng-container *nzStringTemplateOutlet=\"nzTitle\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\n                </div>\n                <button *ngIf=\"nzClosable\" (click)=\"closeClick()\" aria-label=\"Close\" class=\"ant-drawer-close\" style=\"--scroll-bar: 0px;\">\n                  <ng-container *nzStringTemplateOutlet=\"nzCloseIcon; let closeIcon\">\n                    <i nz-icon [nzType]=\"closeIcon\"></i>\n                  </ng-container>\n                </button>\n              </div>\n              <div class=\"ant-drawer-body\" [ngStyle]=\"nzBodyStyle\">\n                <ng-template cdkPortalOutlet></ng-template>\n                <ng-container *ngIf=\"nzContent; else contentElseTemp\">\n                  <ng-container *ngIf=\"isTemplateRef(nzContent)\">\n                    <ng-container *ngTemplateOutlet=\"$any(nzContent); context: templateContext\"></ng-container>\n                  </ng-container>\n                </ng-container>\n                <ng-template #contentElseTemp>\n                  <ng-container *ngIf=\"contentFromContentChild && (isOpen || inAnimation)\">\n                    <ng-template [ngTemplateOutlet]=\"contentFromContentChild\"></ng-template>\n                  </ng-container>\n                </ng-template>\n                <ng-content *ngIf=\"!(nzContent || contentFromContentChild)\"></ng-content>\n              </div>\n              <div *ngIf=\"nzFooter\" class=\"ant-drawer-footer\">\n                <ng-container *nzStringTemplateOutlet=\"nzFooter\"><div [innerHTML]=\"nzFooter\"></div></ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  ",
                  preserveWhitespaces: false,
                  changeDetection: i0.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NzDrawerComponent.ctorParameters = function () { return [
      { type: i0.ChangeDetectorRef },
      { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [common.DOCUMENT,] }] },
      { type: config.NzConfigService },
      { type: i0.Renderer2 },
      { type: i1.Overlay },
      { type: i0.Injector },
      { type: i0.ChangeDetectorRef },
      { type: a11y.FocusTrapFactory },
      { type: i0.ViewContainerRef },
      { type: i1.OverlayKeyboardDispatcher },
      { type: bidi.Directionality, decorators: [{ type: i0.Optional }] }
  ]; };
  NzDrawerComponent.propDecorators = {
      nzContent: [{ type: i0.Input }],
      nzCloseIcon: [{ type: i0.Input }],
      nzClosable: [{ type: i0.Input }],
      nzMaskClosable: [{ type: i0.Input }],
      nzMask: [{ type: i0.Input }],
      nzCloseOnNavigation: [{ type: i0.Input }],
      nzNoAnimation: [{ type: i0.Input }],
      nzKeyboard: [{ type: i0.Input }],
      nzTitle: [{ type: i0.Input }],
      nzFooter: [{ type: i0.Input }],
      nzPlacement: [{ type: i0.Input }],
      nzMaskStyle: [{ type: i0.Input }],
      nzBodyStyle: [{ type: i0.Input }],
      nzWrapClassName: [{ type: i0.Input }],
      nzWidth: [{ type: i0.Input }],
      nzHeight: [{ type: i0.Input }],
      nzZIndex: [{ type: i0.Input }],
      nzOffsetX: [{ type: i0.Input }],
      nzOffsetY: [{ type: i0.Input }],
      nzVisible: [{ type: i0.Input }],
      nzOnViewInit: [{ type: i0.Output }],
      nzOnClose: [{ type: i0.Output }],
      nzVisibleChange: [{ type: i0.Output }],
      drawerTemplate: [{ type: i0.ViewChild, args: ['drawerTemplate', { static: true },] }],
      bodyPortalOutlet: [{ type: i0.ViewChild, args: [portal.CdkPortalOutlet, { static: false },] }],
      contentFromContentChild: [{ type: i0.ContentChild, args: [NzDrawerContentDirective, { static: true, read: i0.TemplateRef },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzDrawerComponent.prototype, "nzClosable", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzDrawerComponent.prototype, "nzMask", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzDrawerComponent.prototype, "nzCloseOnNavigation", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzDrawerComponent.prototype, "nzKeyboard", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzDrawerComponent.prototype, "nzDirection", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzDrawerServiceModule = /** @class */ (function () {
      function NzDrawerServiceModule() {
      }
      return NzDrawerServiceModule;
  }());
  NzDrawerServiceModule.decorators = [
      { type: i0.NgModule }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzDrawerModule = /** @class */ (function () {
      function NzDrawerModule() {
      }
      return NzDrawerModule;
  }());
  NzDrawerModule.decorators = [
      { type: i0.NgModule, args: [{
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      i1.OverlayModule,
                      portal.PortalModule,
                      icon.NzIconModule,
                      outlet.NzOutletModule,
                      noAnimation.NzNoAnimationModule,
                      NzDrawerServiceModule
                  ],
                  exports: [NzDrawerComponent, NzDrawerContentDirective],
                  declarations: [NzDrawerComponent, NzDrawerContentDirective],
                  entryComponents: [NzDrawerComponent]
              },] }
  ];

  var DrawerBuilderForService = /** @class */ (function () {
      function DrawerBuilderForService(overlay, options) {
          var _this = this;
          this.overlay = overlay;
          this.options = options;
          this.unsubscribe$ = new rxjs.Subject();
          /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
          var _a = this.options, nzOnCancel = _a.nzOnCancel, componentOption = __rest(_a, ["nzOnCancel"]);
          this.overlayRef = this.overlay.create();
          this.drawerRef = this.overlayRef.attach(new portal.ComponentPortal(NzDrawerComponent)).instance;
          this.updateOptions(componentOption);
          // Prevent repeatedly open drawer when tap focus element.
          this.drawerRef.savePreviouslyFocusedElement();
          this.drawerRef.nzOnViewInit.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
              _this.drawerRef.open();
          });
          this.drawerRef.nzOnClose.subscribe(function () {
              if (nzOnCancel) {
                  nzOnCancel().then(function (canClose) {
                      if (canClose !== false) {
                          _this.drawerRef.close();
                      }
                  });
              }
              else {
                  _this.drawerRef.close();
              }
          });
          this.drawerRef.afterClose.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
              _this.overlayRef.dispose();
              _this.drawerRef = null;
              _this.unsubscribe$.next();
              _this.unsubscribe$.complete();
          });
      }
      DrawerBuilderForService.prototype.getInstance = function () {
          return this.drawerRef;
      };
      DrawerBuilderForService.prototype.updateOptions = function (options) {
          Object.assign(this.drawerRef, options);
      };
      return DrawerBuilderForService;
  }());
  var NzDrawerService = /** @class */ (function () {
      function NzDrawerService(overlay) {
          this.overlay = overlay;
      }
      NzDrawerService.prototype.create = function (options) {
          return new DrawerBuilderForService(this.overlay, options).getInstance();
      };
      return NzDrawerService;
  }());
  NzDrawerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(i0.ɵɵinject(i1.Overlay)); }, token: NzDrawerService, providedIn: NzDrawerServiceModule });
  NzDrawerService.decorators = [
      { type: i0.Injectable, args: [{ providedIn: NzDrawerServiceModule },] }
  ];
  NzDrawerService.ctorParameters = function () { return [
      { type: i1.Overlay }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DRAWER_ANIMATE_DURATION = DRAWER_ANIMATE_DURATION;
  exports.DrawerBuilderForService = DrawerBuilderForService;
  exports.NzDrawerComponent = NzDrawerComponent;
  exports.NzDrawerContentDirective = NzDrawerContentDirective;
  exports.NzDrawerModule = NzDrawerModule;
  exports.NzDrawerRef = NzDrawerRef;
  exports.NzDrawerService = NzDrawerService;
  exports.NzDrawerServiceModule = NzDrawerServiceModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-drawer.umd.js.map
