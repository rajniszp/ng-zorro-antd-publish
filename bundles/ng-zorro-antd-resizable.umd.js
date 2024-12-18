(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/cdk/platform'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/resizable', ['exports', '@angular/common', '@angular/core', '@angular/cdk/platform', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].resizable = {}), global.ng.common, global.ng.core, global.ng.cdk.platform, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators));
}(this, (function (exports, common, core, platform, util, rxjs, operators) { 'use strict';

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
  function getEventWithPoint(event) {
      return util.isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
  }

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzResizableService = /** @class */ (function () {
      function NzResizableService(ngZone, document) {
          this.ngZone = ngZone;
          this.listeners = new Map();
          this.handleMouseDown$ = new rxjs.Subject();
          this.documentMouseUp$ = new rxjs.Subject();
          this.documentMouseMove$ = new rxjs.Subject();
          this.mouseEntered$ = new rxjs.Subject();
          this.document = document;
      }
      NzResizableService.prototype.startResizing = function (event) {
          var _this = this;
          var _isTouchEvent = util.isTouchEvent(event);
          this.clearListeners();
          var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
          var upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
          var moveEventHandler = function (e) {
              _this.documentMouseMove$.next(e);
          };
          var upEventHandler = function (e) {
              _this.documentMouseUp$.next(e);
              _this.clearListeners();
          };
          this.listeners.set(moveEvent, moveEventHandler);
          this.listeners.set(upEvent, upEventHandler);
          this.ngZone.runOutsideAngular(function () {
              _this.listeners.forEach(function (handler, name) {
                  _this.document.addEventListener(name, handler);
              });
          });
      };
      NzResizableService.prototype.clearListeners = function () {
          var _this = this;
          this.listeners.forEach(function (handler, name) {
              _this.document.removeEventListener(name, handler);
          });
          this.listeners.clear();
      };
      NzResizableService.prototype.ngOnDestroy = function () {
          this.handleMouseDown$.complete();
          this.documentMouseUp$.complete();
          this.documentMouseMove$.complete();
          this.mouseEntered$.complete();
          this.clearListeners();
      };
      return NzResizableService;
  }());
  NzResizableService.decorators = [
      { type: core.Injectable }
  ];
  NzResizableService.ctorParameters = function () { return [
      { type: core.NgZone },
      { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzResizableDirective = /** @class */ (function () {
      function NzResizableDirective(elementRef, renderer, nzResizableService, platform, ngZone) {
          var _this = this;
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.nzResizableService = nzResizableService;
          this.platform = platform;
          this.ngZone = ngZone;
          this.nzBounds = 'parent';
          this.nzMinHeight = 40;
          this.nzMinWidth = 40;
          this.nzGridColumnCount = -1;
          this.nzMaxColumn = -1;
          this.nzMinColumn = -1;
          this.nzLockAspectRatio = false;
          this.nzPreview = false;
          this.nzDisabled = false;
          this.nzResize = new core.EventEmitter();
          this.nzResizeEnd = new core.EventEmitter();
          this.nzResizeStart = new core.EventEmitter();
          this.resizing = false;
          this.currentHandleEvent = null;
          this.ghostElement = null;
          this.sizeCache = null;
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('nz-resizable');
          this.nzResizableService.handleMouseDown$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (event) {
              if (_this.nzDisabled) {
                  return;
              }
              _this.resizing = true;
              _this.nzResizableService.startResizing(event.mouseEvent);
              _this.currentHandleEvent = event;
              _this.setCursor();
              _this.nzResizeStart.emit({
                  mouseEvent: event.mouseEvent
              });
              _this.elRect = _this.el.getBoundingClientRect();
          });
          this.nzResizableService.documentMouseUp$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (event) {
              if (_this.resizing) {
                  _this.resizing = false;
                  _this.nzResizableService.documentMouseUp$.next();
                  _this.endResize(event);
              }
          });
          this.nzResizableService.documentMouseMove$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (event) {
              if (_this.resizing) {
                  _this.resize(event);
              }
          });
      }
      NzResizableDirective.prototype.onMouseenter = function () {
          this.nzResizableService.mouseEntered$.next(true);
      };
      NzResizableDirective.prototype.onMouseleave = function () {
          this.nzResizableService.mouseEntered$.next(false);
      };
      NzResizableDirective.prototype.setPosition = function () {
          var position = getComputedStyle(this.el).position;
          if (position === 'static' || !position) {
              this.renderer.setStyle(this.el, 'position', 'relative');
          }
      };
      NzResizableDirective.prototype.calcSize = function (width, height, ratio) {
          var newWidth;
          var newHeight;
          var maxWidth;
          var maxHeight;
          var col = 0;
          var spanWidth = 0;
          var minWidth = this.nzMinWidth;
          var boundWidth = Infinity;
          var boundHeight = Infinity;
          if (this.nzBounds === 'parent') {
              var parent = this.renderer.parentNode(this.el);
              if (parent instanceof HTMLElement) {
                  var parentRect = parent.getBoundingClientRect();
                  boundWidth = parentRect.width;
                  boundHeight = parentRect.height;
              }
          }
          else if (this.nzBounds === 'window') {
              if (typeof window !== 'undefined') {
                  boundWidth = window.innerWidth;
                  boundHeight = window.innerHeight;
              }
          }
          else if (this.nzBounds && this.nzBounds.nativeElement && this.nzBounds.nativeElement instanceof HTMLElement) {
              var boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
              boundWidth = boundsRect.width;
              boundHeight = boundsRect.height;
          }
          maxWidth = util.ensureInBounds(this.nzMaxWidth, boundWidth);
          maxHeight = util.ensureInBounds(this.nzMaxHeight, boundHeight);
          if (this.nzGridColumnCount !== -1) {
              spanWidth = maxWidth / this.nzGridColumnCount;
              minWidth = this.nzMinColumn !== -1 ? spanWidth * this.nzMinColumn : minWidth;
              maxWidth = this.nzMaxColumn !== -1 ? spanWidth * this.nzMaxColumn : maxWidth;
          }
          if (ratio !== -1) {
              if (/(left|right)/i.test(this.currentHandleEvent.direction)) {
                  newWidth = Math.min(Math.max(width, minWidth), maxWidth);
                  newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                  if (newHeight >= maxHeight || newHeight <= this.nzMinHeight) {
                      newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                  }
              }
              else {
                  newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
                  newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                  if (newWidth >= maxWidth || newWidth <= minWidth) {
                      newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                  }
              }
          }
          else {
              newWidth = Math.min(Math.max(width, minWidth), maxWidth);
              newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
          }
          if (this.nzGridColumnCount !== -1) {
              col = Math.round(newWidth / spanWidth);
              newWidth = col * spanWidth;
          }
          return {
              col: col,
              width: newWidth,
              height: newHeight
          };
      };
      NzResizableDirective.prototype.setCursor = function () {
          switch (this.currentHandleEvent.direction) {
              case 'left':
              case 'right':
                  this.renderer.setStyle(document.body, 'cursor', 'ew-resize');
                  break;
              case 'top':
              case 'bottom':
                  this.renderer.setStyle(document.body, 'cursor', 'ns-resize');
                  break;
              case 'topLeft':
              case 'bottomRight':
                  this.renderer.setStyle(document.body, 'cursor', 'nwse-resize');
                  break;
              case 'topRight':
              case 'bottomLeft':
                  this.renderer.setStyle(document.body, 'cursor', 'nesw-resize');
                  break;
          }
          this.renderer.setStyle(document.body, 'user-select', 'none');
      };
      NzResizableDirective.prototype.resize = function (event) {
          var _this = this;
          var elRect = this.elRect;
          var resizeEvent = getEventWithPoint(event);
          var handleEvent = getEventWithPoint(this.currentHandleEvent.mouseEvent);
          var width = elRect.width;
          var height = elRect.height;
          var ratio = this.nzLockAspectRatio ? width / height : -1;
          switch (this.currentHandleEvent.direction) {
              case 'bottomRight':
                  width = resizeEvent.clientX - elRect.left;
                  height = resizeEvent.clientY - elRect.top;
                  break;
              case 'bottomLeft':
                  width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                  height = resizeEvent.clientY - elRect.top;
                  break;
              case 'topRight':
                  width = resizeEvent.clientX - elRect.left;
                  height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                  break;
              case 'topLeft':
                  width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                  height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                  break;
              case 'top':
                  height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                  break;
              case 'right':
                  width = resizeEvent.clientX - elRect.left;
                  break;
              case 'bottom':
                  height = resizeEvent.clientY - elRect.top;
                  break;
              case 'left':
                  width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
          }
          var size = this.calcSize(width, height, ratio);
          this.sizeCache = Object.assign({}, size);
          this.ngZone.run(function () {
              _this.nzResize.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
          });
          if (this.nzPreview) {
              this.previewResize(size);
          }
      };
      NzResizableDirective.prototype.endResize = function (event) {
          var _this = this;
          this.renderer.setStyle(document.body, 'cursor', '');
          this.renderer.setStyle(document.body, 'user-select', '');
          this.removeGhostElement();
          var size = this.sizeCache
              ? Object.assign({}, this.sizeCache) : {
              width: this.elRect.width,
              height: this.elRect.height
          };
          this.ngZone.run(function () {
              _this.nzResizeEnd.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
          });
          this.sizeCache = null;
          this.currentHandleEvent = null;
      };
      NzResizableDirective.prototype.previewResize = function (_a) {
          var width = _a.width, height = _a.height;
          this.createGhostElement();
          this.renderer.setStyle(this.ghostElement, 'width', width + "px");
          this.renderer.setStyle(this.ghostElement, 'height', height + "px");
      };
      NzResizableDirective.prototype.createGhostElement = function () {
          if (!this.ghostElement) {
              this.ghostElement = this.renderer.createElement('div');
              this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
          }
          this.renderer.appendChild(this.el, this.ghostElement);
      };
      NzResizableDirective.prototype.removeGhostElement = function () {
          if (this.ghostElement) {
              this.renderer.removeChild(this.el, this.ghostElement);
          }
      };
      NzResizableDirective.prototype.ngAfterViewInit = function () {
          if (this.platform.isBrowser) {
              this.el = this.elementRef.nativeElement;
              this.setPosition();
          }
      };
      NzResizableDirective.prototype.ngOnDestroy = function () {
          this.ghostElement = null;
          this.sizeCache = null;
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzResizableDirective;
  }());
  NzResizableDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-resizable]',
                  exportAs: 'nzResizable',
                  providers: [NzResizableService],
                  host: {
                      '[class.nz-resizable-resizing]': 'resizing',
                      '[class.nz-resizable-disabled]': 'nzDisabled',
                      '(mouseenter)': 'onMouseenter()',
                      '(mouseleave)': 'onMouseleave()'
                  }
              },] }
  ];
  NzResizableDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: NzResizableService },
      { type: platform.Platform },
      { type: core.NgZone }
  ]; };
  NzResizableDirective.propDecorators = {
      nzBounds: [{ type: core.Input }],
      nzMaxHeight: [{ type: core.Input }],
      nzMaxWidth: [{ type: core.Input }],
      nzMinHeight: [{ type: core.Input }],
      nzMinWidth: [{ type: core.Input }],
      nzGridColumnCount: [{ type: core.Input }],
      nzMaxColumn: [{ type: core.Input }],
      nzMinColumn: [{ type: core.Input }],
      nzLockAspectRatio: [{ type: core.Input }],
      nzPreview: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzResize: [{ type: core.Output }],
      nzResizeEnd: [{ type: core.Output }],
      nzResizeStart: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzResizableDirective.prototype, "nzPreview", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzResizableDirective.prototype, "nzDisabled", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzResizeHandleMouseDownEvent = /** @class */ (function () {
      function NzResizeHandleMouseDownEvent(direction, mouseEvent) {
          this.direction = direction;
          this.mouseEvent = mouseEvent;
      }
      return NzResizeHandleMouseDownEvent;
  }());
  var NzResizeHandleComponent = /** @class */ (function () {
      function NzResizeHandleComponent(nzResizableService, cdr, elementRef) {
          this.nzResizableService = nzResizableService;
          this.cdr = cdr;
          this.elementRef = elementRef;
          this.nzDirection = 'bottomRight';
          this.nzMouseDown = new core.EventEmitter();
          this.entered = false;
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('nz-resizable-handle');
      }
      NzResizeHandleComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.nzResizableService.mouseEntered$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (entered) {
              _this.entered = entered;
              _this.cdr.markForCheck();
          });
      };
      NzResizeHandleComponent.prototype.onMousedown = function (event) {
          this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
      };
      NzResizeHandleComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzResizeHandleComponent;
  }());
  NzResizeHandleComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-resize-handle, [nz-resize-handle]',
                  exportAs: 'nzResizeHandle',
                  template: "\n    <ng-content></ng-content>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  host: {
                      '[class.nz-resizable-handle-top]': "nzDirection === 'top'",
                      '[class.nz-resizable-handle-right]': "nzDirection === 'right'",
                      '[class.nz-resizable-handle-bottom]': "nzDirection === 'bottom'",
                      '[class.nz-resizable-handle-left]': "nzDirection === 'left'",
                      '[class.nz-resizable-handle-topRight]': "nzDirection === 'topRight'",
                      '[class.nz-resizable-handle-bottomRight]': "nzDirection === 'bottomRight'",
                      '[class.nz-resizable-handle-bottomLeft]': "nzDirection === 'bottomLeft'",
                      '[class.nz-resizable-handle-topLeft]': "nzDirection === 'topLeft'",
                      '[class.nz-resizable-handle-box-hover]': 'entered',
                      '(mousedown)': 'onMousedown($event)',
                      '(touchstart)': 'onMousedown($event)'
                  }
              },] }
  ];
  NzResizeHandleComponent.ctorParameters = function () { return [
      { type: NzResizableService },
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef }
  ]; };
  NzResizeHandleComponent.propDecorators = {
      nzDirection: [{ type: core.Input }],
      nzMouseDown: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var DEFAULT_RESIZE_DIRECTION = [
      'bottomRight',
      'topRight',
      'bottomLeft',
      'topLeft',
      'bottom',
      'right',
      'top',
      'left'
  ];
  var NzResizeHandlesComponent = /** @class */ (function () {
      function NzResizeHandlesComponent() {
          this.nzDirections = DEFAULT_RESIZE_DIRECTION;
          this.directions = new Set(this.nzDirections);
      }
      NzResizeHandlesComponent.prototype.ngOnChanges = function (changes) {
          if (changes.nzDirections) {
              this.directions = new Set(changes.nzDirections.currentValue);
          }
      };
      return NzResizeHandlesComponent;
  }());
  NzResizeHandlesComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-resize-handles',
                  exportAs: 'nzResizeHandles',
                  template: " <nz-resize-handle *ngFor=\"let dir of directions\" [nzDirection]=\"dir\"></nz-resize-handle> ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NzResizeHandlesComponent.ctorParameters = function () { return []; };
  NzResizeHandlesComponent.propDecorators = {
      nzDirections: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzResizableModule = /** @class */ (function () {
      function NzResizableModule() {
      }
      return NzResizableModule;
  }());
  NzResizableModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
                  exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DEFAULT_RESIZE_DIRECTION = DEFAULT_RESIZE_DIRECTION;
  exports.NzResizableDirective = NzResizableDirective;
  exports.NzResizableModule = NzResizableModule;
  exports.NzResizableService = NzResizableService;
  exports.NzResizeHandleComponent = NzResizeHandleComponent;
  exports.NzResizeHandleMouseDownEvent = NzResizeHandleMouseDownEvent;
  exports.NzResizeHandlesComponent = NzResizeHandlesComponent;
  exports.getEventWithPoint = getEventWithPoint;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-resizable.umd.js.map
