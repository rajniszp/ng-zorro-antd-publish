(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/cdk/keycodes'), require('ng-zorro-antd/core/animation'), require('@angular/cdk/drag-drop'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/pipes')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/image', ['exports', '@angular/cdk/bidi', '@angular/common', '@angular/core', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/cdk/keycodes', 'ng-zorro-antd/core/animation', '@angular/cdk/drag-drop', 'ng-zorro-antd/icon', 'ng-zorro-antd/pipes'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].image = {}), global.ng.cdk.bidi, global.ng.common, global.ng.core, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.cdk.keycodes, global['ng-zorro-antd'].core.animation, global.ng.cdk.dragDrop, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].pipes));
}(this, (function (exports, bidi, common, core, config, util, rxjs, operators, overlay, portal, keycodes, animation, dragDrop, icon, pipes) { 'use strict';

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
  var NzImageGroupComponent = /** @class */ (function () {
      function NzImageGroupComponent() {
          this.images = [];
      }
      NzImageGroupComponent.prototype.addImage = function (image) {
          this.images.push(image);
      };
      return NzImageGroupComponent;
  }());
  NzImageGroupComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-image-group',
                  exportAs: 'nzImageGroup',
                  template: '<ng-content></ng-content>',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None
              },] }
  ];

  var FADE_CLASS_NAME_MAP = {
      enter: 'ant-fade-enter',
      enterActive: 'ant-fade-enter-active',
      leave: 'ant-fade-leave',
      leaveActive: 'ant-fade-leave-active'
  };
  var IMAGE_PREVIEW_MASK_CLASS_NAME = 'ant-image-preview-mask';
  var NZ_CONFIG_MODULE_NAME = 'image';

  var NzImagePreviewOptions = /** @class */ (function () {
      function NzImagePreviewOptions() {
          this.nzKeyboard = true;
          this.nzNoAnimation = false;
          this.nzMaskClosable = true;
          this.nzCloseOnNavigation = true;
      }
      return NzImagePreviewOptions;
  }());

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzImagePreviewRef = /** @class */ (function () {
      function NzImagePreviewRef(previewInstance, config, overlayRef) {
          var _this = this;
          this.previewInstance = previewInstance;
          this.config = config;
          this.overlayRef = overlayRef;
          overlayRef
              .keydownEvents()
              .pipe(operators.filter(function (event) {
              return _this.config.nzKeyboard && event.keyCode === keycodes.ESCAPE && !keycodes.hasModifierKey(event);
          }))
              .subscribe(function (event) {
              event.preventDefault();
              _this.close();
          });
          overlayRef.detachments().subscribe(function () {
              _this.overlayRef.dispose();
          });
          previewInstance.containerClick.pipe(operators.take(1)).subscribe(function () {
              _this.close();
          });
          previewInstance.closeClick.pipe(operators.take(1)).subscribe(function () {
              _this.close();
          });
          previewInstance.animationStateChanged
              .pipe(operators.filter(function (event) { return event.phaseName === 'done' && event.toState === 'leave'; }), operators.take(1))
              .subscribe(function () {
              _this.dispose();
          });
      }
      NzImagePreviewRef.prototype.switchTo = function (index) {
          this.previewInstance.switchTo(index);
      };
      NzImagePreviewRef.prototype.next = function () {
          this.previewInstance.next();
      };
      NzImagePreviewRef.prototype.prev = function () {
          this.previewInstance.prev();
      };
      NzImagePreviewRef.prototype.close = function () {
          this.previewInstance.startLeaveAnimation();
      };
      NzImagePreviewRef.prototype.dispose = function () {
          this.overlayRef.dispose();
      };
      return NzImagePreviewRef;
  }());

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  /**
   * fit content details: https://github.com/NG-ZORRO/ng-zorro-antd/pull/6154#issuecomment-745025554
   *
   * calc position x,y point
   *
   * CASE (width <= clientWidth && height <= clientHeight):
   *
   * ------------- clientWidth -------------
   * |                                     |
   * |        ------ width ------          |
   * |        |                 |          |
   * |        |                 |          |
   * client   height            |          |
   * Height   |                 |          |
   * |        |                 |          |
   * |        -------------------          |
   * |                                     |
   * |                                     |
   * ---------------------------------------
   * fixedPosition = { x: 0, y: 0 }
   *
   *
   *
   * CASE (width > clientWidth || height > clientHeight):
   *
   * ------------- clientWidth -------------
   * |        |                            |
   * |        top                          |
   * |        |                            |
   * |--left--|--------------- width -----------------
   * |        |                                      |
   * client   |                                      |
   * Height   |                                      |
   * |        |                                      |
   * |        |                                      |
   * |        height                                 |
   * |        |                                      |
   * ---------|                                      |
   *          |                                      |
   *          |                                      |
   *          |                                      |
   *          ----------------------------------------
   *
   *
   * - left || top > 0
   *   left -> 0 || top -> 0
   *
   * - (left + width) < clientWidth || (top + height) < clientHeight
   * - left | top + width | height < clientWidth | clientHeight -> Back left | top + width | height === clientWidth | clientHeight
   *
   * DEFAULT:
   * - hold position
   *
   */
  function getFitContentPosition(params) {
      var fixPos = {};
      if (params.width <= params.clientWidth && params.height <= params.clientHeight) {
          fixPos = {
              x: 0,
              y: 0
          };
      }
      if (params.width > params.clientWidth || params.height > params.clientHeight) {
          fixPos = {
              x: fitPoint(params.left, params.width, params.clientWidth),
              y: fitPoint(params.top, params.height, params.clientHeight)
          };
      }
      return fixPos;
  }
  function getOffset(node) {
      var box = node.getBoundingClientRect();
      var docElem = document.documentElement;
      // use docElem.scrollLeft to support IE
      return {
          left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
          top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
      };
  }
  function getClientSize() {
      var width = document.documentElement.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight;
      return {
          width: width,
          height: height
      };
  }
  function fitPoint(start, size, clientSize) {
      var startAddSize = start + size;
      var offsetStart = (size - clientSize) / 2;
      var distance = null;
      if (size > clientSize) {
          if (start > 0) {
              distance = offsetStart;
          }
          if (start < 0 && startAddSize < clientSize) {
              distance = -offsetStart;
          }
      }
      else {
          if (start < 0 || startAddSize > clientSize) {
              distance = start < 0 ? offsetStart : -offsetStart;
          }
      }
      return distance;
  }

  var initialPosition = {
      x: 0,
      y: 0
  };
  var NzImagePreviewComponent = /** @class */ (function () {
      function NzImagePreviewComponent(cdr, nzConfigService, config, overlayRef) {
          var _this = this;
          var _a, _b;
          this.cdr = cdr;
          this.nzConfigService = nzConfigService;
          this.config = config;
          this.overlayRef = overlayRef;
          this.images = [];
          this.index = 0;
          this.isDragging = false;
          this.visible = true;
          this.animationState = 'enter';
          this.animationStateChanged = new core.EventEmitter();
          this.previewImageTransform = '';
          this.previewImageWrapperTransform = '';
          this.operations = [
              {
                  icon: 'close',
                  onClick: function () {
                      _this.onClose();
                  },
                  type: 'close'
              },
              {
                  icon: 'zoom-in',
                  onClick: function () {
                      _this.onZoomIn();
                  },
                  type: 'zoomIn'
              },
              {
                  icon: 'zoom-out',
                  onClick: function () {
                      _this.onZoomOut();
                  },
                  type: 'zoomOut'
              },
              {
                  icon: 'rotate-right',
                  onClick: function () {
                      _this.onRotateRight();
                  },
                  type: 'rotateRight'
              },
              {
                  icon: 'rotate-left',
                  onClick: function () {
                      _this.onRotateLeft();
                  },
                  type: 'rotateLeft'
              }
          ];
          this.zoomOutDisabled = false;
          this.position = Object.assign({}, initialPosition);
          this.containerClick = new core.EventEmitter();
          this.closeClick = new core.EventEmitter();
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.zoom = (_a = this.config.nzZoom) !== null && _a !== void 0 ? _a : 1;
          this.rotate = (_b = this.config.nzRotate) !== null && _b !== void 0 ? _b : 0;
          this.updateZoomOutDisabled();
          this.updatePreviewImageTransform();
          this.updatePreviewImageWrapperTransform();
      }
      Object.defineProperty(NzImagePreviewComponent.prototype, "animationDisabled", {
          get: function () {
              var _a;
              return (_a = this.config.nzNoAnimation) !== null && _a !== void 0 ? _a : false;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzImagePreviewComponent.prototype, "maskClosable", {
          get: function () {
              var _a, _b;
              var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
              return (_b = (_a = this.config.nzMaskClosable) !== null && _a !== void 0 ? _a : defaultConfig.nzMaskClosable) !== null && _b !== void 0 ? _b : true;
          },
          enumerable: false,
          configurable: true
      });
      NzImagePreviewComponent.prototype.setImages = function (images) {
          this.images = images;
          this.cdr.markForCheck();
      };
      NzImagePreviewComponent.prototype.switchTo = function (index) {
          this.index = index;
          this.cdr.markForCheck();
      };
      NzImagePreviewComponent.prototype.next = function () {
          if (this.index < this.images.length - 1) {
              this.reset();
              this.index++;
              this.updatePreviewImageTransform();
              this.updatePreviewImageWrapperTransform();
              this.updateZoomOutDisabled();
              this.cdr.markForCheck();
          }
      };
      NzImagePreviewComponent.prototype.prev = function () {
          if (this.index > 0) {
              this.reset();
              this.index--;
              this.updatePreviewImageTransform();
              this.updatePreviewImageWrapperTransform();
              this.updateZoomOutDisabled();
              this.cdr.markForCheck();
          }
      };
      NzImagePreviewComponent.prototype.markForCheck = function () {
          this.cdr.markForCheck();
      };
      NzImagePreviewComponent.prototype.onClose = function () {
          this.closeClick.emit();
      };
      NzImagePreviewComponent.prototype.onZoomIn = function () {
          this.zoom += 1;
          this.updatePreviewImageTransform();
          this.updateZoomOutDisabled();
          this.position = Object.assign({}, initialPosition);
      };
      NzImagePreviewComponent.prototype.onZoomOut = function () {
          if (this.zoom > 1) {
              this.zoom -= 1;
              this.updatePreviewImageTransform();
              this.updateZoomOutDisabled();
              this.position = Object.assign({}, initialPosition);
          }
      };
      NzImagePreviewComponent.prototype.onRotateRight = function () {
          this.rotate += 90;
          this.updatePreviewImageTransform();
      };
      NzImagePreviewComponent.prototype.onRotateLeft = function () {
          this.rotate -= 90;
          this.updatePreviewImageTransform();
      };
      NzImagePreviewComponent.prototype.onSwitchLeft = function (event) {
          event.preventDefault();
          event.stopPropagation();
          this.prev();
      };
      NzImagePreviewComponent.prototype.onSwitchRight = function (event) {
          event.preventDefault();
          event.stopPropagation();
          this.next();
      };
      NzImagePreviewComponent.prototype.onContainerClick = function (e) {
          if (e.target === e.currentTarget && this.maskClosable) {
              this.containerClick.emit();
          }
      };
      NzImagePreviewComponent.prototype.onAnimationStart = function (event) {
          if (event.toState === 'enter') {
              this.setEnterAnimationClass();
          }
          else if (event.toState === 'leave') {
              this.setLeaveAnimationClass();
          }
          this.animationStateChanged.emit(event);
      };
      NzImagePreviewComponent.prototype.onAnimationDone = function (event) {
          if (event.toState === 'enter') {
              this.setEnterAnimationClass();
          }
          else if (event.toState === 'leave') {
              this.setLeaveAnimationClass();
          }
          this.animationStateChanged.emit(event);
      };
      NzImagePreviewComponent.prototype.startLeaveAnimation = function () {
          this.animationState = 'leave';
          this.cdr.markForCheck();
      };
      NzImagePreviewComponent.prototype.onDragStarted = function () {
          this.isDragging = true;
      };
      NzImagePreviewComponent.prototype.onDragReleased = function () {
          this.isDragging = false;
          var width = this.imageRef.nativeElement.offsetWidth * this.zoom;
          var height = this.imageRef.nativeElement.offsetHeight * this.zoom;
          var _c = getOffset(this.imageRef.nativeElement), left = _c.left, top = _c.top;
          var _d = getClientSize(), clientWidth = _d.width, clientHeight = _d.height;
          var isRotate = this.rotate % 180 !== 0;
          var fitContentParams = {
              width: isRotate ? height : width,
              height: isRotate ? width : height,
              left: left,
              top: top,
              clientWidth: clientWidth,
              clientHeight: clientHeight
          };
          var fitContentPos = getFitContentPosition(fitContentParams);
          if (util.isNotNil(fitContentPos.x) || util.isNotNil(fitContentPos.y)) {
              this.position = Object.assign(Object.assign({}, this.position), fitContentPos);
          }
      };
      NzImagePreviewComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzImagePreviewComponent.prototype.updatePreviewImageTransform = function () {
          this.previewImageTransform = "scale3d(" + this.zoom + ", " + this.zoom + ", 1) rotate(" + this.rotate + "deg)";
      };
      NzImagePreviewComponent.prototype.updatePreviewImageWrapperTransform = function () {
          this.previewImageWrapperTransform = "translate3d(" + this.position.x + "px, " + this.position.y + "px, 0)";
      };
      NzImagePreviewComponent.prototype.updateZoomOutDisabled = function () {
          this.zoomOutDisabled = this.zoom <= 1;
      };
      NzImagePreviewComponent.prototype.setEnterAnimationClass = function () {
          if (this.animationDisabled) {
              return;
          }
          var backdropElement = this.overlayRef.backdropElement;
          if (backdropElement) {
              backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
              backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
          }
      };
      NzImagePreviewComponent.prototype.setLeaveAnimationClass = function () {
          if (this.animationDisabled) {
              return;
          }
          var backdropElement = this.overlayRef.backdropElement;
          if (backdropElement) {
              backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
              backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
          }
      };
      NzImagePreviewComponent.prototype.reset = function () {
          this.zoom = 1;
          this.rotate = 0;
          this.position = Object.assign({}, initialPosition);
      };
      return NzImagePreviewComponent;
  }());
  NzImagePreviewComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-image-preview',
                  exportAs: 'nzImagePreview',
                  animations: [animation.fadeMotion],
                  template: "\n    <div class=\"ant-image-preview\">\n      <div tabindex=\"0\" aria-hidden=\"true\" style=\"width: 0; height: 0; overflow: hidden; outline: none;\"></div>\n      <div class=\"ant-image-preview-content\">\n        <div class=\"ant-image-preview-body\">\n          <ul class=\"ant-image-preview-operations\">\n            <li\n              class=\"ant-image-preview-operations-operation\"\n              [class.ant-image-preview-operations-operation-disabled]=\"zoomOutDisabled && option.type === 'zoomOut'\"\n              (click)=\"option.onClick()\"\n              *ngFor=\"let option of operations\"\n            >\n              <span class=\"ant-image-preview-operations-icon\" nz-icon [nzType]=\"option.icon\" nzTheme=\"outline\"></span>\n            </li>\n          </ul>\n          <div\n            class=\"ant-image-preview-img-wrapper\"\n            cdkDrag\n            [style.transform]=\"previewImageWrapperTransform\"\n            [cdkDragFreeDragPosition]=\"position\"\n            (mousedown)=\"onDragStarted()\"\n            (cdkDragReleased)=\"onDragReleased()\"\n          >\n            <ng-container *ngFor=\"let image of images; index as imageIndex\">\n              <img\n                cdkDragHandle\n                class=\"ant-image-preview-img\"\n                #imgRef\n                *ngIf=\"index === imageIndex\"\n                [attr.src]=\"image.src\"\n                [attr.alt]=\"image.alt\"\n                [style.width]=\"image.width\"\n                [style.height]=\"image.height\"\n                [style.transform]=\"previewImageTransform\"\n              />\n            </ng-container>\n          </div>\n          <ng-container *ngIf=\"images.length > 1\">\n            <div\n              class=\"ant-image-preview-switch-left\"\n              [class.ant-image-preview-switch-left-disabled]=\"index <= 0\"\n              (click)=\"onSwitchLeft($event)\"\n            >\n              <span nz-icon nzType=\"left\" nzTheme=\"outline\"></span>\n            </div>\n            <div\n              class=\"ant-image-preview-switch-right\"\n              [class.ant-image-preview-switch-right-disabled]=\"index >= images.length - 1\"\n              (click)=\"onSwitchRight($event)\"\n            >\n              <span nz-icon nzType=\"right\" nzTheme=\"outline\"></span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <div tabindex=\"0\" aria-hidden=\"true\" style=\"width: 0; height: 0; overflow: hidden; outline: none;\"></div>\n    </div>\n  ",
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  host: {
                      '[class.ant-image-preview-moving]': 'isDragging',
                      '[style.zIndex]': 'config.nzZIndex',
                      '[class.ant-image-preview-wrap]': 'true',
                      '[@.disabled]': 'config.nzNoAnimation',
                      '[@fadeMotion]': 'animationState',
                      '(@fadeMotion.start)': 'onAnimationStart($event)',
                      '(@fadeMotion.done)': 'onAnimationDone($event)',
                      '(click)': 'onContainerClick($event)',
                      tabindex: '-1',
                      role: 'document'
                  }
              },] }
  ];
  NzImagePreviewComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: config.NzConfigService },
      { type: NzImagePreviewOptions },
      { type: overlay.OverlayRef }
  ]; };
  NzImagePreviewComponent.propDecorators = {
      imageRef: [{ type: core.ViewChild, args: ['imgRef',] }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzImageService = /** @class */ (function () {
      function NzImageService(overlay, injector, nzConfigService, directionality) {
          this.overlay = overlay;
          this.injector = injector;
          this.nzConfigService = nzConfigService;
          this.directionality = directionality;
      }
      NzImageService.prototype.preview = function (images, options) {
          return this.display(images, options);
      };
      NzImageService.prototype.display = function (images, config) {
          var configMerged = Object.assign(Object.assign({}, new NzImagePreviewOptions()), (config !== null && config !== void 0 ? config : {}));
          var overlayRef = this.createOverlay(configMerged);
          var previewComponent = this.attachPreviewComponent(overlayRef, configMerged);
          previewComponent.setImages(images);
          var previewRef = new NzImagePreviewRef(previewComponent, configMerged, overlayRef);
          previewComponent.previewRef = previewRef;
          return previewRef;
      };
      NzImageService.prototype.attachPreviewComponent = function (overlayRef, config) {
          var injector = core.Injector.create({
              parent: this.injector,
              providers: [
                  { provide: overlay.OverlayRef, useValue: overlayRef },
                  { provide: NzImagePreviewOptions, useValue: config }
              ]
          });
          var containerPortal = new portal.ComponentPortal(NzImagePreviewComponent, null, injector);
          var containerRef = overlayRef.attach(containerPortal);
          return containerRef.instance;
      };
      NzImageService.prototype.createOverlay = function (config) {
          var _a, _b;
          var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
          var overLayConfig = new overlay.OverlayConfig({
              hasBackdrop: true,
              scrollStrategy: this.overlay.scrollStrategies.block(),
              positionStrategy: this.overlay.position().global(),
              disposeOnNavigation: (_b = (_a = config.nzCloseOnNavigation) !== null && _a !== void 0 ? _a : globalConfig.nzCloseOnNavigation) !== null && _b !== void 0 ? _b : true,
              backdropClass: IMAGE_PREVIEW_MASK_CLASS_NAME,
              direction: config.nzDirection || globalConfig.nzDirection || this.directionality.value
          });
          return this.overlay.create(overLayConfig);
      };
      return NzImageService;
  }());
  NzImageService.decorators = [
      { type: core.Injectable }
  ];
  NzImageService.ctorParameters = function () { return [
      { type: overlay.Overlay },
      { type: core.Injector },
      { type: config.NzConfigService },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };

  var NZ_CONFIG_MODULE_NAME$1 = 'image';
  var NzImageDirective = /** @class */ (function () {
      function NzImageDirective(document, nzConfigService, elementRef, nzImageService, cdr, parentGroup, directionality) {
          this.document = document;
          this.nzConfigService = nzConfigService;
          this.elementRef = elementRef;
          this.nzImageService = nzImageService;
          this.cdr = cdr;
          this.parentGroup = parentGroup;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
          this.nzSrc = '';
          this.nzDisablePreview = false;
          this.nzFallback = null;
          this.nzPlaceholder = null;
          this.status = 'normal';
          this.destroy$ = new rxjs.Subject();
      }
      Object.defineProperty(NzImageDirective.prototype, "previewable", {
          get: function () {
              return !this.nzDisablePreview && this.status !== 'error';
          },
          enumerable: false,
          configurable: true
      });
      NzImageDirective.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.backLoad();
          if (this.parentGroup) {
              this.parentGroup.addImage(this);
          }
          if (this.directionality) {
              (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                  _this.dir = direction;
                  _this.cdr.detectChanges();
              });
              this.dir = this.directionality.value;
          }
      };
      NzImageDirective.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzImageDirective.prototype.onPreview = function () {
          var _this = this;
          if (!this.previewable) {
              return;
          }
          if (this.parentGroup) {
              // preview inside image group
              var previewAbleImages = this.parentGroup.images.filter(function (e) { return e.previewable; });
              var previewImages = previewAbleImages.map(function (e) { return ({ src: e.nzSrc }); });
              var previewIndex = previewAbleImages.findIndex(function (el) { return _this === el; });
              var previewRef = this.nzImageService.preview(previewImages, { nzDirection: this.dir });
              previewRef.switchTo(previewIndex);
          }
          else {
              // preview not inside image group
              var previewImages = [{ src: this.nzSrc }];
              this.nzImageService.preview(previewImages, { nzDirection: this.dir });
          }
      };
      NzImageDirective.prototype.getElement = function () {
          return this.elementRef;
      };
      NzImageDirective.prototype.ngOnChanges = function (changes) {
          var nzSrc = changes.nzSrc;
          if (nzSrc) {
              this.getElement().nativeElement.src = nzSrc.currentValue;
              this.backLoad();
          }
      };
      /**
       * use internal Image object handle fallback & placeholder
       * @private
       */
      NzImageDirective.prototype.backLoad = function () {
          var _this = this;
          this.backLoadImage = this.document.createElement('img');
          this.backLoadImage.src = this.nzSrc;
          this.status = 'loading';
          if (this.backLoadImage.complete) {
              this.status = 'normal';
              this.getElement().nativeElement.src = this.nzSrc;
          }
          else {
              if (this.nzPlaceholder) {
                  this.getElement().nativeElement.src = this.nzPlaceholder;
              }
              else {
                  this.getElement().nativeElement.src = this.nzSrc;
              }
              this.backLoadImage.onload = function () {
                  _this.status = 'normal';
                  _this.getElement().nativeElement.src = _this.nzSrc;
              };
              this.backLoadImage.onerror = function () {
                  _this.status = 'error';
                  if (_this.nzFallback) {
                      _this.getElement().nativeElement.src = _this.nzFallback;
                  }
              };
          }
      };
      return NzImageDirective;
  }());
  NzImageDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'img[nz-image]',
                  exportAs: 'nzImage',
                  host: {
                      '(click)': 'onPreview()'
                  }
              },] }
  ];
  NzImageDirective.ctorParameters = function () { return [
      { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
      { type: config.NzConfigService },
      { type: core.ElementRef },
      { type: NzImageService },
      { type: core.ChangeDetectorRef },
      { type: NzImageGroupComponent, decorators: [{ type: core.Optional }] },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzImageDirective.propDecorators = {
      nzSrc: [{ type: core.Input }],
      nzDisablePreview: [{ type: core.Input }],
      nzFallback: [{ type: core.Input }],
      nzPlaceholder: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      config.WithConfig(),
      __metadata("design:type", Boolean)
  ], NzImageDirective.prototype, "nzDisablePreview", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzImageDirective.prototype, "nzFallback", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzImageDirective.prototype, "nzPlaceholder", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzImageModule = /** @class */ (function () {
      function NzImageModule() {
      }
      return NzImageModule;
  }());
  NzImageModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [bidi.BidiModule, overlay.OverlayModule, portal.PortalModule, dragDrop.DragDropModule, common.CommonModule, icon.NzIconModule, pipes.NzPipesModule],
                  exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
                  providers: [NzImageService],
                  entryComponents: [NzImagePreviewComponent],
                  declarations: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.FADE_CLASS_NAME_MAP = FADE_CLASS_NAME_MAP;
  exports.IMAGE_PREVIEW_MASK_CLASS_NAME = IMAGE_PREVIEW_MASK_CLASS_NAME;
  exports.NZ_CONFIG_MODULE_NAME = NZ_CONFIG_MODULE_NAME;
  exports.NzImageDirective = NzImageDirective;
  exports.NzImageGroupComponent = NzImageGroupComponent;
  exports.NzImageModule = NzImageModule;
  exports.NzImagePreviewComponent = NzImagePreviewComponent;
  exports.NzImagePreviewOptions = NzImagePreviewOptions;
  exports.NzImagePreviewRef = NzImagePreviewRef;
  exports.NzImageService = NzImageService;
  exports.getClientSize = getClientSize;
  exports.getFitContentPosition = getFitContentPosition;
  exports.getOffset = getOffset;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-image.umd.js.map
