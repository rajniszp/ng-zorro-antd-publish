(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/polyfill'), require('ng-zorro-antd/core/tree'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/select'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tree')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree-select', ['exports', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/polyfill', 'ng-zorro-antd/core/tree', 'ng-zorro-antd/core/util', 'ng-zorro-antd/select', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon', 'ng-zorro-antd/tree'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['tree-select'] = {}), global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.polyfill, global['ng-zorro-antd'].core.tree, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].select, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].tree));
}(this, (function (exports, a11y, bidi, keycodes, overlay, core, forms, animation, config, noAnimation, polyfill, tree, util, select, rxjs, operators, common, overlay$1, empty, icon, tree$1) { 'use strict';

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

  var NzTreeSelectService = /** @class */ (function (_super) {
      __extends(NzTreeSelectService, _super);
      function NzTreeSelectService() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return NzTreeSelectService;
  }(tree.NzTreeBaseService));
  NzTreeSelectService.decorators = [
      { type: core.Injectable }
  ];

  function higherOrderServiceFactory(injector) {
      return injector.get(NzTreeSelectService);
  }
  var NZ_CONFIG_MODULE_NAME = 'treeSelect';
  var TREE_SELECT_DEFAULT_CLASS = 'ant-select-dropdown ant-select-tree-dropdown';
  var NzTreeSelectComponent = /** @class */ (function (_super) {
      __extends(NzTreeSelectComponent, _super);
      function NzTreeSelectComponent(nzTreeService, nzConfigService, renderer, cdr, elementRef, directionality, focusMonitor, noAnimation) {
          var _this = _super.call(this, nzTreeService) || this;
          _this.nzConfigService = nzConfigService;
          _this.renderer = renderer;
          _this.cdr = cdr;
          _this.elementRef = elementRef;
          _this.directionality = directionality;
          _this.focusMonitor = focusMonitor;
          _this.noAnimation = noAnimation;
          _this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          _this.nzId = null;
          _this.nzAllowClear = true;
          _this.nzShowExpand = true;
          _this.nzShowLine = false;
          _this.nzDropdownMatchSelectWidth = true;
          _this.nzCheckable = false;
          _this.nzHideUnMatched = false;
          _this.nzShowIcon = false;
          _this.nzShowSearch = false;
          _this.nzDisabled = false;
          _this.nzAsyncData = false;
          _this.nzMultiple = false;
          _this.nzDefaultExpandAll = false;
          _this.nzCheckStrictly = false;
          _this.nzVirtualItemSize = 28;
          _this.nzVirtualMaxBufferPx = 500;
          _this.nzVirtualMinBufferPx = 28;
          _this.nzVirtualHeight = null;
          _this.nzNodes = [];
          _this.nzOpen = false;
          _this.nzSize = 'default';
          _this.nzPlaceHolder = '';
          _this.nzDropdownStyle = null;
          _this.nzBackdrop = false;
          _this.nzDisplayWith = function (node) { return node.title; };
          _this.nzMaxTagPlaceholder = null;
          _this.nzOpenChange = new core.EventEmitter();
          _this.nzCleared = new core.EventEmitter();
          _this.nzRemoved = new core.EventEmitter();
          _this.nzExpandChange = new core.EventEmitter();
          _this.nzTreeClick = new core.EventEmitter();
          _this.nzTreeCheckBoxChange = new core.EventEmitter();
          _this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
          _this.isComposing = false;
          _this.isDestroy = true;
          _this.isNotFound = false;
          _this.focused = false;
          _this.inputValue = '';
          _this.dropDownPosition = 'bottom';
          _this.selectedNodes = [];
          _this.expandedKeys = [];
          _this.value = [];
          _this.dir = 'ltr';
          _this.destroy$ = new rxjs.Subject();
          _this.onChange = function (_value) { };
          _this.onTouched = function () { };
          // TODO: move to host after View Engine deprecation
          _this.elementRef.nativeElement.classList.add('ant-select');
          _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
          _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-tree-select');
          return _this;
      }
      Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
          get: function () {
              return this.expandedKeys;
          },
          set: function (value) {
              this.expandedKeys = value;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
          get: function () {
              return this.nzTreeTemplate || this.nzTreeTemplateChild;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
          get: function () {
              return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
          get: function () {
              return this.nzMultiple || this.nzCheckable;
          },
          enumerable: false,
          configurable: true
      });
      NzTreeSelectComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.isDestroy = false;
          this.subscribeSelectionChange();
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
          this.dir = this.directionality.value;
          this.focusMonitor
              .monitor(this.elementRef, true)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function (focusOrigin) {
              if (!focusOrigin) {
                  _this.focused = false;
                  _this.cdr.markForCheck();
                  Promise.resolve().then(function () {
                      _this.onTouched();
                  });
              }
              else {
                  _this.focused = true;
                  _this.cdr.markForCheck();
              }
          });
      };
      NzTreeSelectComponent.prototype.ngOnDestroy = function () {
          this.isDestroy = true;
          this.closeDropDown();
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTreeSelectComponent.prototype.isComposingChange = function (isComposing) {
          this.isComposing = isComposing;
      };
      NzTreeSelectComponent.prototype.setDisabledState = function (isDisabled) {
          this.nzDisabled = isDisabled;
          this.closeDropDown();
      };
      NzTreeSelectComponent.prototype.ngOnChanges = function (changes) {
          var nzNodes = changes.nzNodes, nzDropdownClassName = changes.nzDropdownClassName;
          if (nzNodes) {
              this.updateSelectedNodes(true);
          }
          if (nzDropdownClassName) {
              var className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
              this.dropdownClassName = className ? TREE_SELECT_DEFAULT_CLASS + " " + className : TREE_SELECT_DEFAULT_CLASS;
          }
      };
      NzTreeSelectComponent.prototype.writeValue = function (value) {
          var _this = this;
          if (util.isNotNil(value)) {
              if (this.isMultiple && Array.isArray(value)) {
                  this.value = value;
              }
              else {
                  this.value = [value];
              }
              this.updateSelectedNodes(true);
          }
          else {
              this.value = [];
              this.selectedNodes.forEach(function (node) {
                  _this.removeSelected(node, false);
              });
              this.selectedNodes = [];
          }
          this.cdr.markForCheck();
      };
      NzTreeSelectComponent.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      NzTreeSelectComponent.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      NzTreeSelectComponent.prototype.onKeydown = function (event) {
          if (this.nzDisabled) {
              return;
          }
          switch (event.keyCode) {
              case keycodes.ESCAPE:
                  /**
                   * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                   */
                  break;
              case keycodes.TAB:
                  this.closeDropDown();
                  break;
              default:
                  if (!this.nzOpen) {
                      this.openDropdown();
                  }
          }
      };
      NzTreeSelectComponent.prototype.trigger = function () {
          if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
              this.closeDropDown();
          }
          else {
              this.openDropdown();
          }
      };
      NzTreeSelectComponent.prototype.openDropdown = function () {
          if (!this.nzDisabled) {
              this.nzOpen = true;
              this.nzOpenChange.emit(this.nzOpen);
              this.updateCdkConnectedOverlayStatus();
              if (this.nzShowSearch || this.isMultiple) {
                  this.focusOnInput();
              }
          }
      };
      NzTreeSelectComponent.prototype.closeDropDown = function () {
          this.onTouched();
          this.nzOpen = false;
          this.inputValue = '';
          this.isNotFound = false;
          this.nzOpenChange.emit(this.nzOpen);
          this.cdr.markForCheck();
      };
      NzTreeSelectComponent.prototype.onKeyDownInput = function (e) {
          var keyCode = e.keyCode;
          var eventTarget = e.target;
          if (this.isMultiple && !eventTarget.value && keyCode === keycodes.BACKSPACE) {
              e.preventDefault();
              if (this.selectedNodes.length) {
                  var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                  this.removeSelected(removeNode);
              }
          }
      };
      NzTreeSelectComponent.prototype.onExpandedKeysChange = function (value) {
          this.nzExpandChange.emit(value);
          this.expandedKeys = __spread(value.keys);
      };
      NzTreeSelectComponent.prototype.setInputValue = function (value) {
          this.inputValue = value;
          this.updatePosition();
      };
      NzTreeSelectComponent.prototype.removeSelected = function (node, emit) {
          if (emit === void 0) { emit = true; }
          node.isSelected = false;
          node.isChecked = false;
          if (this.nzCheckable) {
              this.nzTreeService.conduct(node, this.nzCheckStrictly);
          }
          else {
              this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
          }
          if (emit) {
              this.nzRemoved.emit(node);
          }
      };
      NzTreeSelectComponent.prototype.focusOnInput = function () {
          if (this.nzSelectSearchComponent) {
              this.nzSelectSearchComponent.focus();
          }
      };
      NzTreeSelectComponent.prototype.subscribeSelectionChange = function () {
          var _this = this;
          rxjs.merge(this.nzTreeClick.pipe(operators.tap(function (event) {
              var node = event.node;
              if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                  node.isChecked = !node.isChecked;
                  node.isHalfChecked = false;
                  if (!_this.nzCheckStrictly) {
                      _this.nzTreeService.conduct(node);
                  }
              }
              if (_this.nzCheckable) {
                  node.isSelected = false;
              }
          }), operators.filter(function (event) {
              var node = event.node;
              return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
          })), this.nzCheckable ? this.nzTreeCheckBoxChange : rxjs.of(), this.nzCleared, this.nzRemoved)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function () {
              _this.updateSelectedNodes();
              var value = _this.selectedNodes.map(function (node) { return node.key; });
              _this.value = __spread(value);
              if (_this.nzShowSearch || _this.isMultiple) {
                  _this.inputValue = '';
                  _this.isNotFound = false;
              }
              if (_this.isMultiple) {
                  _this.onChange(value);
                  _this.focusOnInput();
                  _this.updatePosition();
              }
              else {
                  _this.closeDropDown();
                  _this.onChange(value.length ? value[0] : null);
              }
          });
      };
      NzTreeSelectComponent.prototype.updateSelectedNodes = function (init) {
          if (init === void 0) { init = false; }
          if (init) {
              var nodes = this.coerceTreeNodes(this.nzNodes);
              this.nzTreeService.isMultiple = this.isMultiple;
              this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
              this.nzTreeService.initTree(nodes);
              if (this.nzCheckable) {
                  this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
              }
              else {
                  this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
              }
          }
          this.selectedNodes = __spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
      };
      NzTreeSelectComponent.prototype.updatePosition = function () {
          var _this = this;
          polyfill.reqAnimFrame(function () {
              var _a, _b;
              (_b = (_a = _this.cdkConnectedOverlay) === null || _a === void 0 ? void 0 : _a.overlayRef) === null || _b === void 0 ? void 0 : _b.updatePosition();
          });
      };
      NzTreeSelectComponent.prototype.onPositionChange = function (position) {
          this.dropDownPosition = position.connectionPair.originY;
      };
      NzTreeSelectComponent.prototype.onClearSelection = function () {
          var _this = this;
          this.selectedNodes.forEach(function (node) {
              _this.removeSelected(node, false);
          });
          this.nzCleared.emit();
      };
      NzTreeSelectComponent.prototype.onClickOutside = function (event) {
          if (!this.elementRef.nativeElement.contains(event.target)) {
              this.closeDropDown();
          }
      };
      NzTreeSelectComponent.prototype.setSearchValues = function ($event) {
          var _this = this;
          Promise.resolve().then(function () {
              _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && $event.matchedKeys.length === 0;
          });
      };
      NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
          this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
      };
      NzTreeSelectComponent.prototype.trackValue = function (_index, option) {
          return option.key;
      };
      return NzTreeSelectComponent;
  }(tree.NzTreeBase));
  NzTreeSelectComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tree-select',
                  exportAs: 'nzTreeSelect',
                  animations: [animation.slideMotion],
                  template: "\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-select-tree-dropdown'\"\n      [cdkConnectedOverlayMinWidth]=\"$any(nzDropdownMatchSelectWidth ? null : triggerWidth)\"\n      [cdkConnectedOverlayWidth]=\"$any(nzDropdownMatchSelectWidth ? triggerWidth : null)\"\n      (overlayOutsideClick)=\"onClickOutside($event)\"\n      (detach)=\"closeDropDown()\"\n      (positionChange)=\"onPositionChange($event)\"\n    >\n      <div\n        [@slideMotion]=\"'enter'\"\n        [ngClass]=\"dropdownClassName\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n        [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n        [class.ant-tree-select-dropdown-rtl]=\"dir === 'rtl'\"\n        [dir]=\"dir\"\n        [ngStyle]=\"nzDropdownStyle\"\n      >\n        <nz-tree\n          #treeRef\n          [hidden]=\"isNotFound\"\n          nzNoAnimation\n          nzSelectMode\n          nzBlockNode\n          [nzData]=\"nzNodes\"\n          [nzMultiple]=\"nzMultiple\"\n          [nzSearchValue]=\"inputValue\"\n          [nzHideUnMatched]=\"nzHideUnMatched\"\n          [nzShowIcon]=\"nzShowIcon\"\n          [nzCheckable]=\"nzCheckable\"\n          [nzAsyncData]=\"nzAsyncData\"\n          [nzShowExpand]=\"nzShowExpand\"\n          [nzShowLine]=\"nzShowLine\"\n          [nzExpandedIcon]=\"nzExpandedIcon\"\n          [nzExpandAll]=\"nzDefaultExpandAll\"\n          [nzExpandedKeys]=\"expandedKeys\"\n          [nzCheckedKeys]=\"nzCheckable ? value : []\"\n          [nzSelectedKeys]=\"!nzCheckable ? value : []\"\n          [nzTreeTemplate]=\"treeTemplate\"\n          [nzCheckStrictly]=\"nzCheckStrictly\"\n          [nzVirtualItemSize]=\"nzVirtualItemSize\"\n          [nzVirtualMaxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [nzVirtualMinBufferPx]=\"nzVirtualMinBufferPx\"\n          [nzVirtualHeight]=\"nzVirtualHeight\"\n          (nzExpandChange)=\"onExpandedKeysChange($event)\"\n          (nzClick)=\"nzTreeClick.emit($event)\"\n          (nzCheckedKeysChange)=\"updateSelectedNodes()\"\n          (nzSelectedKeysChange)=\"updateSelectedNodes()\"\n          (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\"\n          (nzSearchValueChange)=\"setSearchValues($event)\"\n        ></nz-tree>\n        <span *ngIf=\"nzNodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\n          <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n        </span>\n      </div>\n    </ng-template>\n\n    <div cdkOverlayOrigin class=\"ant-select-selector\">\n      <ng-container *ngIf=\"isMultiple\">\n        <nz-select-item\n          *ngFor=\"let node of selectedNodes | slice: 0:nzMaxTagCount; trackBy: trackValue\"\n          [deletable]=\"true\"\n          [disabled]=\"node.isDisabled || nzDisabled\"\n          [label]=\"nzDisplayWith(node)\"\n          (delete)=\"removeSelected(node, true)\"\n        ></nz-select-item>\n\n        <nz-select-item\n          *ngIf=\"selectedNodes.length > nzMaxTagCount\"\n          [contentTemplateOutlet]=\"nzMaxTagPlaceholder\"\n          [contentTemplateOutletContext]=\"selectedNodes | slice: nzMaxTagCount\"\n          [deletable]=\"false\"\n          [disabled]=\"false\"\n          [label]=\"'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'\"\n        ></nz-select-item>\n      </ng-container>\n\n      <nz-select-search\n        [nzId]=\"nzId\"\n        [showInput]=\"nzShowSearch\"\n        (keydown)=\"onKeyDownInput($event)\"\n        (isComposingChange)=\"isComposing = $event\"\n        (valueChange)=\"setInputValue($event)\"\n        [value]=\"inputValue\"\n        [mirrorSync]=\"isMultiple\"\n        [disabled]=\"nzDisabled\"\n        [focusTrigger]=\"nzOpen\"\n      ></nz-select-search>\n\n      <nz-select-placeholder\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [placeholder]=\"nzPlaceHolder\"\n        [style.display]=\"placeHolderDisplay\"\n      ></nz-select-placeholder>\n\n      <nz-select-item\n        *ngIf=\"!isMultiple && selectedNodes.length === 1 && !isComposing && inputValue === ''\"\n        [deletable]=\"false\"\n        [disabled]=\"false\"\n        [label]=\"nzDisplayWith(selectedNodes[0])\"\n      ></nz-select-item>\n\n      <nz-select-arrow *ngIf=\"!isMultiple\"></nz-select-arrow>\n\n      <nz-select-clear *ngIf=\"nzAllowClear && !nzDisabled && selectedNodes.length\" (clear)=\"onClearSelection()\"></nz-select-clear>\n    </div>\n  ",
                  providers: [
                      NzTreeSelectService,
                      {
                          provide: tree.NzTreeHigherOrderServiceToken,
                          useFactory: higherOrderServiceFactory,
                          deps: [[new core.Self(), core.Injector]]
                      },
                      {
                          provide: forms.NG_VALUE_ACCESSOR,
                          useExisting: core.forwardRef(function () { return NzTreeSelectComponent; }),
                          multi: true
                      }
                  ],
                  host: {
                      '[class.ant-select-lg]': 'nzSize==="large"',
                      '[class.ant-select-rtl]': 'dir==="rtl"',
                      '[class.ant-select-sm]': 'nzSize==="small"',
                      '[class.ant-select-disabled]': 'nzDisabled',
                      '[class.ant-select-single]': '!isMultiple',
                      '[class.ant-select-show-arrow]': '!isMultiple',
                      '[class.ant-select-show-search]': '!isMultiple',
                      '[class.ant-select-multiple]': 'isMultiple',
                      '[class.ant-select-allow-clear]': 'nzAllowClear',
                      '[class.ant-select-open]': 'nzOpen',
                      '[class.ant-select-focused]': 'nzOpen || focused',
                      '(click)': 'trigger()',
                      '(keydown)': 'onKeydown($event)'
                  }
              },] }
  ];
  NzTreeSelectComponent.ctorParameters = function () { return [
      { type: NzTreeSelectService },
      { type: config.NzConfigService },
      { type: core.Renderer2 },
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: a11y.FocusMonitor },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };
  NzTreeSelectComponent.propDecorators = {
      nzId: [{ type: core.Input }],
      nzAllowClear: [{ type: core.Input }],
      nzShowExpand: [{ type: core.Input }],
      nzShowLine: [{ type: core.Input }],
      nzDropdownMatchSelectWidth: [{ type: core.Input }],
      nzCheckable: [{ type: core.Input }],
      nzHideUnMatched: [{ type: core.Input }],
      nzShowIcon: [{ type: core.Input }],
      nzShowSearch: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzAsyncData: [{ type: core.Input }],
      nzMultiple: [{ type: core.Input }],
      nzDefaultExpandAll: [{ type: core.Input }],
      nzCheckStrictly: [{ type: core.Input }],
      nzVirtualItemSize: [{ type: core.Input }],
      nzVirtualMaxBufferPx: [{ type: core.Input }],
      nzVirtualMinBufferPx: [{ type: core.Input }],
      nzVirtualHeight: [{ type: core.Input }],
      nzExpandedIcon: [{ type: core.Input }],
      nzNotFoundContent: [{ type: core.Input }],
      nzNodes: [{ type: core.Input }],
      nzOpen: [{ type: core.Input }],
      nzSize: [{ type: core.Input }],
      nzPlaceHolder: [{ type: core.Input }],
      nzDropdownStyle: [{ type: core.Input }],
      nzDropdownClassName: [{ type: core.Input }],
      nzBackdrop: [{ type: core.Input }],
      nzExpandedKeys: [{ type: core.Input }],
      nzDisplayWith: [{ type: core.Input }],
      nzMaxTagCount: [{ type: core.Input }],
      nzMaxTagPlaceholder: [{ type: core.Input }],
      nzOpenChange: [{ type: core.Output }],
      nzCleared: [{ type: core.Output }],
      nzRemoved: [{ type: core.Output }],
      nzExpandChange: [{ type: core.Output }],
      nzTreeClick: [{ type: core.Output }],
      nzTreeCheckBoxChange: [{ type: core.Output }],
      nzSelectSearchComponent: [{ type: core.ViewChild, args: [select.NzSelectSearchComponent, { static: false },] }],
      treeRef: [{ type: core.ViewChild, args: ['treeRef', { static: false },] }],
      cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: true },] }],
      cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
      nzTreeTemplate: [{ type: core.Input }],
      nzTreeTemplateChild: [{ type: core.ContentChild, args: ['nzTreeTemplate', { static: true },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
  __decorate([
      util.InputBoolean(),
      config.WithConfig(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
  __decorate([
      util.InputBoolean(),
      config.WithConfig(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
  __decorate([
      util.InputBoolean(),
      config.WithConfig(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTreeSelectComponent.prototype, "nzSize", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTreeSelectComponent.prototype, "nzBackdrop", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTreeSelectModule = /** @class */ (function () {
      function NzTreeSelectModule() {
      }
      return NzTreeSelectModule;
  }());
  NzTreeSelectModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      overlay.OverlayModule,
                      forms.FormsModule,
                      select.NzSelectModule,
                      tree$1.NzTreeModule,
                      icon.NzIconModule,
                      empty.NzEmptyModule,
                      overlay$1.NzOverlayModule,
                      noAnimation.NzNoAnimationModule
                  ],
                  declarations: [NzTreeSelectComponent],
                  exports: [NzTreeSelectComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzTreeSelectComponent = NzTreeSelectComponent;
  exports.NzTreeSelectModule = NzTreeSelectModule;
  exports.NzTreeSelectService = NzTreeSelectService;
  exports.higherOrderServiceFactory = higherOrderServiceFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tree-select.umd.js.map
