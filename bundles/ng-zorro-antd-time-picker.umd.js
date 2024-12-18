(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('date-fns'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/logger'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/i18n'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/polyfill')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/time-picker', ['exports', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/core', '@angular/forms', 'date-fns', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'ng-zorro-antd/i18n', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/button', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/polyfill'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['time-picker'] = {}), global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.core, global.ng.forms, global.dateFns, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.logger, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].i18n, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].button, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core.polyfill));
}(this, (function (exports, bidi, overlay, platform, core, forms, dateFns, animation, config, logger, util, i18n, rxjs, operators, common, button, outlet, overlay$1, icon, polyfill) { 'use strict';

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
  var NZ_CONFIG_MODULE_NAME = 'timePicker';
  var NzTimePickerComponent = /** @class */ (function () {
      function NzTimePickerComponent(nzConfigService, i18n, element, renderer, cdr, dateHelper, platform, elementRef, directionality) {
          this.nzConfigService = nzConfigService;
          this.i18n = i18n;
          this.element = element;
          this.renderer = renderer;
          this.cdr = cdr;
          this.dateHelper = dateHelper;
          this.platform = platform;
          this.elementRef = elementRef;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.destroy$ = new rxjs.Subject();
          this.isInit = false;
          this.focused = false;
          this.inputValue = '';
          this.value = null;
          this.preValue = null;
          this.i18nPlaceHolder$ = rxjs.of(undefined);
          this.overlayPositions = [
              {
                  originX: 'start',
                  originY: 'bottom',
                  overlayX: 'start',
                  overlayY: 'top',
                  offsetY: 3
              }
          ];
          this.dir = 'ltr';
          this.nzId = null;
          this.nzSize = null;
          this.nzHourStep = 1;
          this.nzMinuteStep = 1;
          this.nzSecondStep = 1;
          this.nzClearText = 'clear';
          this.nzNowText = '';
          this.nzOkText = '';
          this.nzPopupClassName = '';
          this.nzPlaceHolder = '';
          this.nzFormat = 'HH:mm:ss';
          this.nzOpen = false;
          this.nzUse12Hours = false;
          this.nzSuffixIcon = 'clock-circle';
          this.nzOpenChange = new core.EventEmitter();
          this.nzHideDisabledOptions = false;
          this.nzAllowEmpty = true;
          this.nzDisabled = false;
          this.nzAutoFocus = false;
          this.nzBackdrop = false;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-picker');
      }
      NzTimePickerComponent.prototype.emitValue = function (value) {
          this.setValue(value, true);
          if (this._onChange) {
              this._onChange(this.value);
          }
          if (this._onTouched) {
              this._onTouched();
          }
      };
      NzTimePickerComponent.prototype.setValue = function (value, syncPreValue) {
          if (syncPreValue === void 0) { syncPreValue = false; }
          if (syncPreValue) {
              this.preValue = dateFns.isValid(value) ? new Date(value) : null;
          }
          this.value = dateFns.isValid(value) ? new Date(value) : null;
          this.inputValue = this.dateHelper.format(value, this.nzFormat);
          this.cdr.markForCheck();
      };
      NzTimePickerComponent.prototype.open = function () {
          if (this.nzDisabled || this.nzOpen) {
              return;
          }
          this.focus();
          this.nzOpen = true;
          this.nzOpenChange.emit(this.nzOpen);
      };
      NzTimePickerComponent.prototype.close = function () {
          this.nzOpen = false;
          this.cdr.markForCheck();
          this.nzOpenChange.emit(this.nzOpen);
      };
      NzTimePickerComponent.prototype.updateAutoFocus = function () {
          if (this.isInit && !this.nzDisabled) {
              if (this.nzAutoFocus) {
                  this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
              }
              else {
                  this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
              }
          }
      };
      NzTimePickerComponent.prototype.onClickClearBtn = function (event) {
          event.stopPropagation();
          this.emitValue(null);
      };
      NzTimePickerComponent.prototype.onClickOutside = function (event) {
          if (!this.element.nativeElement.contains(event.target)) {
              this.setCurrentValueAndClose();
          }
      };
      NzTimePickerComponent.prototype.onFocus = function (value) {
          this.focused = value;
      };
      NzTimePickerComponent.prototype.focus = function () {
          if (this.inputRef.nativeElement) {
              this.inputRef.nativeElement.focus();
          }
      };
      NzTimePickerComponent.prototype.blur = function () {
          if (this.inputRef.nativeElement) {
              this.inputRef.nativeElement.blur();
          }
      };
      NzTimePickerComponent.prototype.onKeyupEsc = function () {
          this.setValue(this.preValue);
      };
      NzTimePickerComponent.prototype.onKeyupEnter = function () {
          if (this.nzOpen && dateFns.isValid(this.value)) {
              this.setCurrentValueAndClose();
          }
          else if (!this.nzOpen) {
              this.open();
          }
      };
      NzTimePickerComponent.prototype.onInputChange = function (str) {
          if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
              this.open();
              this.parseTimeString(str);
          }
      };
      NzTimePickerComponent.prototype.onPanelValueChange = function (value) {
          this.setValue(value);
          this.focus();
      };
      NzTimePickerComponent.prototype.setCurrentValueAndClose = function () {
          this.emitValue(this.value);
          this.close();
      };
      NzTimePickerComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.inputSize = Math.max(8, this.nzFormat.length) + 2;
          this.origin = new overlay.CdkOverlayOrigin(this.element);
          this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(operators.map(function (nzLocale) { return nzLocale.TimePicker.placeholder; }));
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
          });
      };
      NzTimePickerComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTimePickerComponent.prototype.ngOnChanges = function (changes) {
          var nzUse12Hours = changes.nzUse12Hours, nzFormat = changes.nzFormat, nzDisabled = changes.nzDisabled, nzAutoFocus = changes.nzAutoFocus;
          if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
              this.nzFormat = 'h:mm:ss a';
          }
          if (nzDisabled) {
              var value = nzDisabled.currentValue;
              var input = this.inputRef.nativeElement;
              if (value) {
                  this.renderer.setAttribute(input, 'disabled', '');
              }
              else {
                  this.renderer.removeAttribute(input, 'disabled');
              }
          }
          if (nzAutoFocus) {
              this.updateAutoFocus();
          }
      };
      NzTimePickerComponent.prototype.parseTimeString = function (str) {
          var value = this.dateHelper.parseTime(str, this.nzFormat) || null;
          if (dateFns.isValid(value)) {
              this.value = value;
              this.cdr.markForCheck();
          }
      };
      NzTimePickerComponent.prototype.ngAfterViewInit = function () {
          this.isInit = true;
          this.updateAutoFocus();
      };
      NzTimePickerComponent.prototype.writeValue = function (time) {
          var result;
          if (time instanceof Date) {
              result = time;
          }
          else if (util.isNil(time)) {
              result = null;
          }
          else {
              logger.warn('Non-Date type is not recommended for time-picker, use "Date" type.');
              result = new Date(time);
          }
          this.setValue(result, true);
      };
      NzTimePickerComponent.prototype.registerOnChange = function (fn) {
          this._onChange = fn;
      };
      NzTimePickerComponent.prototype.registerOnTouched = function (fn) {
          this._onTouched = fn;
      };
      NzTimePickerComponent.prototype.setDisabledState = function (isDisabled) {
          this.nzDisabled = isDisabled;
          this.cdr.markForCheck();
      };
      return NzTimePickerComponent;
  }());
  NzTimePickerComponent.decorators = [
      { type: core.Component, args: [{
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  selector: 'nz-time-picker',
                  exportAs: 'nzTimePicker',
                  template: "\n    <div class=\"ant-picker-input\">\n      <input\n        #inputElement\n        [attr.id]=\"nzId\"\n        type=\"text\"\n        [size]=\"inputSize\"\n        [placeholder]=\"nzPlaceHolder || (i18nPlaceHolder$ | async)\"\n        [(ngModel)]=\"inputValue\"\n        [disabled]=\"nzDisabled\"\n        (focus)=\"onFocus(true)\"\n        (blur)=\"onFocus(false)\"\n        (keyup.enter)=\"onKeyupEnter()\"\n        (keyup.escape)=\"onKeyupEsc()\"\n        (ngModelChange)=\"onInputChange($event)\"\n      />\n      <span class=\"ant-picker-suffix\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </span>\n      <span *ngIf=\"nzAllowEmpty && !nzDisabled && value\" class=\"ant-picker-clear\" (click)=\"onClickClearBtn($event)\">\n        <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" [attr.aria-label]=\"nzClearText\" [attr.title]=\"nzClearText\"></i>\n      </span>\n    </div>\n\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayPositions]=\"overlayPositions\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      [cdkConnectedOverlayOffsetY]=\"-2\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-picker-dropdown'\"\n      (detach)=\"close()\"\n      (overlayOutsideClick)=\"onClickOutside($event)\"\n    >\n      <div [@slideMotion]=\"'enter'\" class=\"ant-picker-dropdown\">\n        <div class=\"ant-picker-panel-container\">\n          <div tabindex=\"-1\" class=\"ant-picker-panel\">\n            <nz-time-picker-panel\n              [ngClass]=\"nzPopupClassName\"\n              [format]=\"nzFormat\"\n              [nzHourStep]=\"nzHourStep\"\n              [nzMinuteStep]=\"nzMinuteStep\"\n              [nzSecondStep]=\"nzSecondStep\"\n              [nzDisabledHours]=\"nzDisabledHours\"\n              [nzDisabledMinutes]=\"nzDisabledMinutes\"\n              [nzDisabledSeconds]=\"nzDisabledSeconds\"\n              [nzPlaceHolder]=\"nzPlaceHolder || (i18nPlaceHolder$ | async)\"\n              [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\n              [nzUse12Hours]=\"nzUse12Hours\"\n              [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\n              [nzAddOn]=\"nzAddOn\"\n              [nzClearText]=\"nzClearText\"\n              [nzNowText]=\"nzNowText\"\n              [nzOkText]=\"nzOkText\"\n              [nzAllowEmpty]=\"nzAllowEmpty\"\n              [(ngModel)]=\"value\"\n              (ngModelChange)=\"onPanelValueChange($event)\"\n              (closePanel)=\"setCurrentValueAndClose()\"\n            ></nz-time-picker-panel>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  ",
                  host: {
                      '[class.ant-picker-large]': "nzSize === 'large'",
                      '[class.ant-picker-small]': "nzSize === 'small'",
                      '[class.ant-picker-disabled]': "nzDisabled",
                      '[class.ant-picker-focused]': "focused",
                      '[class.ant-picker-rtl]': "dir === 'rtl'",
                      '(click)': 'open()'
                  },
                  animations: [animation.slideMotion],
                  providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
              },] }
  ];
  NzTimePickerComponent.ctorParameters = function () { return [
      { type: config.NzConfigService },
      { type: i18n.NzI18nService },
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: core.ChangeDetectorRef },
      { type: i18n.DateHelperService },
      { type: platform.Platform },
      { type: core.ElementRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzTimePickerComponent.propDecorators = {
      inputRef: [{ type: core.ViewChild, args: ['inputElement', { static: true },] }],
      nzId: [{ type: core.Input }],
      nzSize: [{ type: core.Input }],
      nzHourStep: [{ type: core.Input }],
      nzMinuteStep: [{ type: core.Input }],
      nzSecondStep: [{ type: core.Input }],
      nzClearText: [{ type: core.Input }],
      nzNowText: [{ type: core.Input }],
      nzOkText: [{ type: core.Input }],
      nzPopupClassName: [{ type: core.Input }],
      nzPlaceHolder: [{ type: core.Input }],
      nzAddOn: [{ type: core.Input }],
      nzDefaultOpenValue: [{ type: core.Input }],
      nzDisabledHours: [{ type: core.Input }],
      nzDisabledMinutes: [{ type: core.Input }],
      nzDisabledSeconds: [{ type: core.Input }],
      nzFormat: [{ type: core.Input }],
      nzOpen: [{ type: core.Input }],
      nzUse12Hours: [{ type: core.Input }],
      nzSuffixIcon: [{ type: core.Input }],
      nzOpenChange: [{ type: core.Output }],
      nzHideDisabledOptions: [{ type: core.Input }],
      nzAllowEmpty: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzAutoFocus: [{ type: core.Input }],
      nzBackdrop: [{ type: core.Input }]
  };
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Number)
  ], NzTimePickerComponent.prototype, "nzHourStep", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Number)
  ], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Number)
  ], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTimePickerComponent.prototype, "nzClearText", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTimePickerComponent.prototype, "nzNowText", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTimePickerComponent.prototype, "nzOkText", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTimePickerComponent.prototype, "nzFormat", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTimePickerComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTimePickerComponent.prototype, "nzBackdrop", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var TimeHolder = /** @class */ (function () {
      function TimeHolder() {
          this.selected12Hours = undefined;
          this._use12Hours = false;
          this._changes = new rxjs.Subject();
      }
      TimeHolder.prototype.setMinutes = function (value, disabled) {
          if (value !== this.minutes && !disabled) {
              this.initValue();
              this.value.setMinutes(value);
              this.update();
          }
          return this;
      };
      TimeHolder.prototype.setHours = function (value, disabled) {
          if (value !== this.hours && !disabled) {
              this.initValue();
              if (this._use12Hours) {
                  if (this.selected12Hours === 'PM' && value !== 12) {
                      this.value.setHours(value + 12);
                  }
                  else if (this.selected12Hours === 'AM' && value === 12) {
                      this.value.setHours(0);
                  }
                  else {
                      this.value.setHours(value);
                  }
              }
              else {
                  this.value.setHours(value);
              }
              this.update();
          }
          return this;
      };
      TimeHolder.prototype.setSeconds = function (value, disabled) {
          if (value !== this.seconds && !disabled) {
              this.initValue();
              this.value.setSeconds(value);
              this.update();
          }
          return this;
      };
      TimeHolder.prototype.setUse12Hours = function (value) {
          this._use12Hours = value;
          return this;
      };
      Object.defineProperty(TimeHolder.prototype, "changes", {
          get: function () {
              return this._changes.asObservable();
          },
          enumerable: false,
          configurable: true
      });
      TimeHolder.prototype.setValue = function (value, use12Hours) {
          if (util.isNotNil(use12Hours)) {
              this._use12Hours = use12Hours;
          }
          if (value !== this.value) {
              this._value = value;
              if (util.isNotNil(this.value)) {
                  if (this._use12Hours && util.isNotNil(this.hours)) {
                      this.selected12Hours = this.hours >= 12 ? 'PM' : 'AM';
                  }
              }
              else {
                  this._clear();
              }
          }
          return this;
      };
      TimeHolder.prototype.initValue = function () {
          if (util.isNil(this.value)) {
              this.setValue(new Date(), this._use12Hours);
          }
      };
      TimeHolder.prototype.clear = function () {
          this._clear();
          this.update();
      };
      Object.defineProperty(TimeHolder.prototype, "isEmpty", {
          get: function () {
              return !(util.isNotNil(this.hours) || util.isNotNil(this.minutes) || util.isNotNil(this.seconds));
          },
          enumerable: false,
          configurable: true
      });
      TimeHolder.prototype._clear = function () {
          this._value = undefined;
          this.selected12Hours = undefined;
      };
      TimeHolder.prototype.update = function () {
          if (this.isEmpty) {
              this._value = undefined;
          }
          else {
              if (util.isNotNil(this.hours)) {
                  this.value.setHours(this.hours);
              }
              if (util.isNotNil(this.minutes)) {
                  this.value.setMinutes(this.minutes);
              }
              if (util.isNotNil(this.seconds)) {
                  this.value.setSeconds(this.seconds);
              }
              if (this._use12Hours) {
                  if (this.selected12Hours === 'PM' && this.hours < 12) {
                      this.value.setHours(this.hours + 12);
                  }
                  if (this.selected12Hours === 'AM' && this.hours >= 12) {
                      this.value.setHours(this.hours - 12);
                  }
              }
          }
          this.changed();
      };
      TimeHolder.prototype.changed = function () {
          this._changes.next(this.value);
      };
      Object.defineProperty(TimeHolder.prototype, "viewHours", {
          /**
           * @description
           * UI view hours
           * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
           */
          get: function () {
              return this._use12Hours && util.isNotNil(this.hours) ? this.calculateViewHour(this.hours) : this.hours;
          },
          enumerable: false,
          configurable: true
      });
      TimeHolder.prototype.setSelected12Hours = function (value) {
          if (value.toUpperCase() !== this.selected12Hours) {
              this.selected12Hours = value.toUpperCase();
              this.update();
          }
      };
      Object.defineProperty(TimeHolder.prototype, "value", {
          get: function () {
              return this._value || this._defaultOpenValue;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(TimeHolder.prototype, "hours", {
          get: function () {
              var _a;
              return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getHours();
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(TimeHolder.prototype, "minutes", {
          get: function () {
              var _a;
              return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getMinutes();
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(TimeHolder.prototype, "seconds", {
          get: function () {
              var _a;
              return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getSeconds();
          },
          enumerable: false,
          configurable: true
      });
      TimeHolder.prototype.setDefaultOpenValue = function (value) {
          this._defaultOpenValue = value;
          return this;
      };
      TimeHolder.prototype.calculateViewHour = function (value) {
          var selected12Hours = this.selected12Hours;
          if (selected12Hours === 'PM' && value > 12) {
              return value - 12;
          }
          if (selected12Hours === 'AM' && value === 0) {
              return 12;
          }
          return value;
      };
      return TimeHolder;
  }());

  function makeRange(length, step, start) {
      if (step === void 0) { step = 1; }
      if (start === void 0) { start = 0; }
      return new Array(Math.ceil(length / step)).fill(0).map(function (_, i) { return (i + start) * step; });
  }
  var NzTimePickerPanelComponent = /** @class */ (function () {
      function NzTimePickerPanelComponent(cdr, dateHelper, elementRef) {
          this.cdr = cdr;
          this.dateHelper = dateHelper;
          this.elementRef = elementRef;
          this._nzHourStep = 1;
          this._nzMinuteStep = 1;
          this._nzSecondStep = 1;
          this.unsubscribe$ = new rxjs.Subject();
          this._format = 'HH:mm:ss';
          this._disabledHours = function () { return []; };
          this._disabledMinutes = function () { return []; };
          this._disabledSeconds = function () { return []; };
          this._allowEmpty = true;
          this.time = new TimeHolder();
          this.hourEnabled = true;
          this.minuteEnabled = true;
          this.secondEnabled = true;
          this.firstScrolled = false;
          this.enabledColumns = 3;
          this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
          this.nzHideDisabledOptions = false;
          this.nzUse12Hours = false;
          this.closePanel = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-picker-time-panel');
      }
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
          get: function () {
              return this._allowEmpty;
          },
          set: function (value) {
              if (util.isNotNil(value)) {
                  this._allowEmpty = value;
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
          get: function () {
              return this._disabledHours;
          },
          set: function (value) {
              this._disabledHours = value;
              if (!!this._disabledHours) {
                  this.buildHours();
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
          get: function () {
              return this._disabledMinutes;
          },
          set: function (value) {
              if (util.isNotNil(value)) {
                  this._disabledMinutes = value;
                  this.buildMinutes();
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
          get: function () {
              return this._disabledSeconds;
          },
          set: function (value) {
              if (util.isNotNil(value)) {
                  this._disabledSeconds = value;
                  this.buildSeconds();
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
          get: function () {
              return this._format;
          },
          set: function (value) {
              if (util.isNotNil(value)) {
                  this._format = value;
                  this.enabledColumns = 0;
                  var charSet = new Set(value);
                  this.hourEnabled = charSet.has('H') || charSet.has('h');
                  this.minuteEnabled = charSet.has('m');
                  this.secondEnabled = charSet.has('s');
                  if (this.hourEnabled) {
                      this.enabledColumns++;
                  }
                  if (this.minuteEnabled) {
                      this.enabledColumns++;
                  }
                  if (this.secondEnabled) {
                      this.enabledColumns++;
                  }
                  if (this.nzUse12Hours) {
                      this.build12Hours();
                  }
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
          get: function () {
              return this._nzHourStep;
          },
          set: function (value) {
              if (util.isNotNil(value)) {
                  this._nzHourStep = value;
                  this.buildHours();
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
          get: function () {
              return this._nzMinuteStep;
          },
          set: function (value) {
              if (util.isNotNil(value)) {
                  this._nzMinuteStep = value;
                  this.buildMinutes();
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
          get: function () {
              return this._nzSecondStep;
          },
          set: function (value) {
              if (util.isNotNil(value)) {
                  this._nzSecondStep = value;
                  this.buildSeconds();
              }
          },
          enumerable: false,
          configurable: true
      });
      NzTimePickerPanelComponent.prototype.trackByFn = function (index) {
          return index;
      };
      NzTimePickerPanelComponent.prototype.buildHours = function () {
          var _a;
          var hourRanges = 24;
          var disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
          var startIndex = 0;
          if (this.nzUse12Hours) {
              hourRanges = 12;
              if (disabledHours) {
                  if (this.time.selected12Hours === 'PM') {
                      /**
                       * Filter and transform hours which greater or equal to 12
                       * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                       */
                      disabledHours = disabledHours.filter(function (i) { return i >= 12; }).map(function (i) { return (i > 12 ? i - 12 : i); });
                  }
                  else {
                      /**
                       * Filter and transform hours which less than 12
                       * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                       */
                      disabledHours = disabledHours.filter(function (i) { return i < 12 || i === 24; }).map(function (i) { return (i === 24 || i === 0 ? 12 : i); });
                  }
              }
              startIndex = 1;
          }
          this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map(function (r) {
              return {
                  index: r,
                  disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
              };
          });
          if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
              var temp = __spread(this.hourRange);
              temp.unshift(temp[temp.length - 1]);
              temp.splice(temp.length - 1, 1);
              this.hourRange = temp;
          }
      };
      NzTimePickerPanelComponent.prototype.buildMinutes = function () {
          var _this = this;
          this.minuteRange = makeRange(60, this.nzMinuteStep).map(function (r) {
              return {
                  index: r,
                  disabled: !!_this.nzDisabledMinutes && _this.nzDisabledMinutes(_this.time.hours).indexOf(r) !== -1
              };
          });
      };
      NzTimePickerPanelComponent.prototype.buildSeconds = function () {
          var _this = this;
          this.secondRange = makeRange(60, this.nzSecondStep).map(function (r) {
              return {
                  index: r,
                  disabled: !!_this.nzDisabledSeconds && _this.nzDisabledSeconds(_this.time.hours, _this.time.minutes).indexOf(r) !== -1
              };
          });
      };
      NzTimePickerPanelComponent.prototype.build12Hours = function () {
          var isUpperFormat = this._format.includes('A');
          this.use12HoursRange = [
              {
                  index: 0,
                  value: isUpperFormat ? 'AM' : 'am'
              },
              {
                  index: 1,
                  value: isUpperFormat ? 'PM' : 'pm'
              }
          ];
      };
      NzTimePickerPanelComponent.prototype.buildTimes = function () {
          this.buildHours();
          this.buildMinutes();
          this.buildSeconds();
          this.build12Hours();
      };
      NzTimePickerPanelComponent.prototype.scrollToTime = function (delay) {
          if (delay === void 0) { delay = 0; }
          if (this.hourEnabled && this.hourListElement) {
              this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, 'hour');
          }
          if (this.minuteEnabled && this.minuteListElement) {
              this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, 'minute');
          }
          if (this.secondEnabled && this.secondListElement) {
              this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, 'second');
          }
          if (this.nzUse12Hours && this.use12HoursListElement) {
              var selectedHours = this.time.selected12Hours;
              var index = selectedHours === 'AM' ? 0 : 1;
              this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
          }
      };
      NzTimePickerPanelComponent.prototype.selectHour = function (hour) {
          this.time.setHours(hour.index, hour.disabled);
          if (!!this._disabledMinutes) {
              this.buildMinutes();
          }
          if (this._disabledSeconds || this._disabledMinutes) {
              this.buildSeconds();
          }
      };
      NzTimePickerPanelComponent.prototype.selectMinute = function (minute) {
          this.time.setMinutes(minute.index, minute.disabled);
          if (!!this._disabledSeconds) {
              this.buildSeconds();
          }
      };
      NzTimePickerPanelComponent.prototype.selectSecond = function (second) {
          this.time.setSeconds(second.index, second.disabled);
      };
      NzTimePickerPanelComponent.prototype.select12Hours = function (value) {
          this.time.setSelected12Hours(value.value);
          if (!!this._disabledHours) {
              this.buildHours();
          }
          if (!!this._disabledMinutes) {
              this.buildMinutes();
          }
          if (!!this._disabledSeconds) {
              this.buildSeconds();
          }
      };
      NzTimePickerPanelComponent.prototype.scrollToSelected = function (instance, index, duration, unit) {
          if (duration === void 0) { duration = 0; }
          if (!instance) {
              return;
          }
          var transIndex = this.translateIndex(index, unit);
          var currentOption = (instance.children[transIndex] || instance.children[0]);
          this.scrollTo(instance, currentOption.offsetTop, duration);
      };
      NzTimePickerPanelComponent.prototype.translateIndex = function (index, unit) {
          var _a, _b, _c;
          if (unit === 'hour') {
              return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map(function (item) { return item.index; }).indexOf(index));
          }
          else if (unit === 'minute') {
              return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, this.time.hours), this.minuteRange.map(function (item) { return item.index; }).indexOf(index));
          }
          else if (unit === 'second') {
              // second
              return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, this.time.hours, this.time.minutes), this.secondRange.map(function (item) { return item.index; }).indexOf(index));
          }
          else {
              // 12-hour
              return this.calcIndex([], this.use12HoursRange.map(function (item) { return item.index; }).indexOf(index));
          }
      };
      NzTimePickerPanelComponent.prototype.scrollTo = function (element, to, duration) {
          var _this = this;
          if (duration <= 0) {
              element.scrollTop = to;
              return;
          }
          var difference = to - element.scrollTop;
          var perTick = (difference / duration) * 10;
          polyfill.reqAnimFrame(function () {
              element.scrollTop = element.scrollTop + perTick;
              if (element.scrollTop === to) {
                  return;
              }
              _this.scrollTo(element, to, duration - 10);
          });
      };
      NzTimePickerPanelComponent.prototype.calcIndex = function (array, index) {
          if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
              return (index -
                  array.reduce(function (pre, value) {
                      return pre + (value < index ? 1 : 0);
                  }, 0));
          }
          else {
              return index;
          }
      };
      NzTimePickerPanelComponent.prototype.changed = function () {
          if (this.onChange) {
              this.onChange(this.time.value);
          }
      };
      NzTimePickerPanelComponent.prototype.touched = function () {
          if (this.onTouch) {
              this.onTouch();
          }
      };
      NzTimePickerPanelComponent.prototype.timeDisabled = function (value) {
          var _a, _b, _c, _d, _e, _f;
          var hour = value.getHours();
          var minute = value.getMinutes();
          var second = value.getSeconds();
          return (((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 ||
              ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 ||
              ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1);
      };
      NzTimePickerPanelComponent.prototype.onClickNow = function () {
          var now = new Date();
          if (this.timeDisabled(now)) {
              return;
          }
          this.time.setValue(now);
          this.changed();
          this.closePanel.emit();
      };
      NzTimePickerPanelComponent.prototype.onClickOk = function () {
          this.closePanel.emit();
      };
      NzTimePickerPanelComponent.prototype.isSelectedHour = function (hour) {
          return hour.index === this.time.viewHours;
      };
      NzTimePickerPanelComponent.prototype.isSelectedMinute = function (minute) {
          return minute.index === this.time.minutes;
      };
      NzTimePickerPanelComponent.prototype.isSelectedSecond = function (second) {
          return second.index === this.time.seconds;
      };
      NzTimePickerPanelComponent.prototype.isSelected12Hours = function (value) {
          return value.value.toUpperCase() === this.time.selected12Hours;
      };
      NzTimePickerPanelComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.time.changes.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
              _this.changed();
              _this.touched();
              _this.scrollToTime(120);
          });
          this.buildTimes();
          setTimeout(function () {
              _this.scrollToTime();
              _this.firstScrolled = true;
          });
      };
      NzTimePickerPanelComponent.prototype.ngOnDestroy = function () {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
      };
      NzTimePickerPanelComponent.prototype.ngOnChanges = function (changes) {
          var nzUse12Hours = changes.nzUse12Hours, nzDefaultOpenValue = changes.nzDefaultOpenValue;
          if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
              this.build12Hours();
              this.enabledColumns++;
          }
          if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
              this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
          }
      };
      NzTimePickerPanelComponent.prototype.writeValue = function (value) {
          this.time.setValue(value, this.nzUse12Hours);
          this.buildTimes();
          if (value && this.firstScrolled) {
              this.scrollToTime(120);
          }
          // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
          this.cdr.markForCheck();
      };
      NzTimePickerPanelComponent.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      NzTimePickerPanelComponent.prototype.registerOnTouched = function (fn) {
          this.onTouch = fn;
      };
      /**
       * Prevent input losing focus when click panel
       * @param event
       */
      NzTimePickerPanelComponent.prototype.onMousedown = function (event) {
          event.preventDefault();
      };
      return NzTimePickerPanelComponent;
  }());
  NzTimePickerPanelComponent.decorators = [
      { type: core.Component, args: [{
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  selector: 'nz-time-picker-panel',
                  exportAs: 'nzTimePickerPanel',
                  template: "\n    <div *ngIf=\"nzInDatePicker\" class=\"ant-picker-header\">\n      <div class=\"ant-picker-header-view\">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>\n    </div>\n    <div class=\"ant-picker-content\">\n      <ul *ngIf=\"hourEnabled\" #hourListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let hour of hourRange; trackBy: trackByFn\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectHour(hour)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedHour(hour)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"hour.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ hour.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"minuteEnabled\" #minuteListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let minute of minuteRange; trackBy: trackByFn\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectMinute(minute)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedMinute(minute)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"minute.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ minute.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"secondEnabled\" #secondListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let second of secondRange; trackBy: trackByFn\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectSecond(second)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedSecond(second)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"second.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ second.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"nzUse12Hours\" #use12HoursListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let range of use12HoursRange\">\n          <li\n            *ngIf=\"!nzHideDisabledOptions\"\n            (click)=\"select12Hours(range)\"\n            class=\"ant-picker-time-panel-cell\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelected12Hours(range)\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ range.value }}</div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n    <div *ngIf=\"!nzInDatePicker\" class=\"ant-picker-footer\">\n      <div *ngIf=\"nzAddOn\" class=\"ant-picker-footer-extra\">\n        <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\n      </div>\n      <ul class=\"ant-picker-ranges\">\n        <li class=\"ant-picker-now\">\n          <a (click)=\"onClickNow()\">\n            {{ nzNowText || ('Calendar.lang.now' | nzI18n) }}\n          </a>\n        </li>\n        <li class=\"ant-picker-ok\">\n          <button nz-button type=\"button\" nzSize=\"small\" nzType=\"primary\" (click)=\"onClickOk()\">\n            {{ nzOkText || ('Calendar.lang.ok' | nzI18n) }}\n          </button>\n        </li>\n      </ul>\n    </div>\n  ",
                  host: {
                      '[class.ant-picker-time-panel-column-0]': "enabledColumns === 0 && !nzInDatePicker",
                      '[class.ant-picker-time-panel-column-1]': "enabledColumns === 1 && !nzInDatePicker",
                      '[class.ant-picker-time-panel-column-2]': "enabledColumns === 2 && !nzInDatePicker",
                      '[class.ant-picker-time-panel-column-3]': "enabledColumns === 3 && !nzInDatePicker",
                      '[class.ant-picker-time-panel-narrow]': "enabledColumns < 3",
                      '[class.ant-picker-time-panel-placement-bottomLeft]': "!nzInDatePicker",
                      '(mousedown)': 'onMousedown($event)'
                  },
                  providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
              },] }
  ];
  NzTimePickerPanelComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: i18n.DateHelperService },
      { type: core.ElementRef }
  ]; };
  NzTimePickerPanelComponent.propDecorators = {
      hourListElement: [{ type: core.ViewChild, args: ['hourListElement', { static: false },] }],
      minuteListElement: [{ type: core.ViewChild, args: ['minuteListElement', { static: false },] }],
      secondListElement: [{ type: core.ViewChild, args: ['secondListElement', { static: false },] }],
      use12HoursListElement: [{ type: core.ViewChild, args: ['use12HoursListElement', { static: false },] }],
      nzInDatePicker: [{ type: core.Input }],
      nzAddOn: [{ type: core.Input }],
      nzHideDisabledOptions: [{ type: core.Input }],
      nzClearText: [{ type: core.Input }],
      nzNowText: [{ type: core.Input }],
      nzOkText: [{ type: core.Input }],
      nzPlaceHolder: [{ type: core.Input }],
      nzUse12Hours: [{ type: core.Input }],
      nzDefaultOpenValue: [{ type: core.Input }],
      closePanel: [{ type: core.Output }],
      nzAllowEmpty: [{ type: core.Input }],
      nzDisabledHours: [{ type: core.Input }],
      nzDisabledMinutes: [{ type: core.Input }],
      nzDisabledSeconds: [{ type: core.Input }],
      format: [{ type: core.Input }],
      nzHourStep: [{ type: core.Input }],
      nzMinuteStep: [{ type: core.Input }],
      nzSecondStep: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTimePickerModule = /** @class */ (function () {
      function NzTimePickerModule() {
      }
      return NzTimePickerModule;
  }());
  NzTimePickerModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [NzTimePickerComponent, NzTimePickerPanelComponent],
                  exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      forms.FormsModule,
                      i18n.NzI18nModule,
                      overlay.OverlayModule,
                      icon.NzIconModule,
                      overlay$1.NzOverlayModule,
                      outlet.NzOutletModule,
                      button.NzButtonModule
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

  exports.NzTimePickerComponent = NzTimePickerComponent;
  exports.NzTimePickerModule = NzTimePickerModule;
  exports.NzTimePickerPanelComponent = NzTimePickerPanelComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-time-picker.umd.js.map
