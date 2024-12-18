(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip'), require('@angular/forms'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/i18n'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/config')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/form', ['exports', '@angular/cdk/bidi', '@angular/cdk/layout', '@angular/cdk/platform', '@angular/common', '@angular/core', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip', '@angular/forms', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/util', 'ng-zorro-antd/i18n', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/config'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].form = {}), global.ng.cdk.bidi, global.ng.cdk.layout, global.ng.cdk.platform, global.ng.common, global.ng.core, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].tooltip, global.ng.forms, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].i18n, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core.config));
}(this, (function (exports, bidi, layout, platform, common, core, outlet, grid, icon, tooltip, forms, animation, util, i18n, rxjs, operators, config) { 'use strict';

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
  var NZ_CONFIG_MODULE_NAME = 'form';
  var DefaultTooltipIcon = {
      type: 'question-circle',
      theme: 'outline'
  };
  var NzFormDirective = /** @class */ (function () {
      function NzFormDirective(nzConfigService, elementRef, renderer, directionality) {
          var _this = this;
          var _a;
          this.nzConfigService = nzConfigService;
          this.renderer = renderer;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzLayout = 'horizontal';
          this.nzNoColon = false;
          this.nzAutoTips = {};
          this.nzDisableAutoTips = false;
          this.nzTooltipIcon = DefaultTooltipIcon;
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
          this.inputChanges$ = new rxjs.Subject();
          this.renderer.addClass(elementRef.nativeElement, 'ant-form');
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
          });
      }
      NzFormDirective.prototype.getInputObservable = function (changeType) {
          return this.inputChanges$.pipe(operators.filter(function (changes) { return changeType in changes; }), operators.map(function (value) { return value[changeType]; }));
      };
      NzFormDirective.prototype.ngOnChanges = function (changes) {
          this.inputChanges$.next(changes);
      };
      NzFormDirective.prototype.ngOnDestroy = function () {
          this.inputChanges$.complete();
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzFormDirective;
  }());
  NzFormDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-form]',
                  exportAs: 'nzForm',
                  host: {
                      '[class.ant-form-horizontal]': "nzLayout === 'horizontal'",
                      '[class.ant-form-vertical]': "nzLayout === 'vertical'",
                      '[class.ant-form-inline]': "nzLayout === 'inline'",
                      '[class.ant-form-rtl]': "dir === 'rtl'"
                  }
              },] }
  ];
  NzFormDirective.ctorParameters = function () { return [
      { type: config.NzConfigService },
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzFormDirective.propDecorators = {
      nzLayout: [{ type: core.Input }],
      nzNoColon: [{ type: core.Input }],
      nzAutoTips: [{ type: core.Input }],
      nzDisableAutoTips: [{ type: core.Input }],
      nzTooltipIcon: [{ type: core.Input }]
  };
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzFormDirective.prototype, "nzNoColon", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzFormDirective.prototype, "nzAutoTips", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzFormDirective.prototype, "nzDisableAutoTips", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzFormDirective.prototype, "nzTooltipIcon", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  /** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
  var NzFormItemComponent = /** @class */ (function () {
      function NzFormItemComponent(elementRef, renderer, cdr) {
          this.cdr = cdr;
          this.status = null;
          this.hasFeedback = false;
          this.withHelpClass = false;
          this.destroy$ = new rxjs.Subject();
          renderer.addClass(elementRef.nativeElement, 'ant-form-item');
      }
      NzFormItemComponent.prototype.setWithHelpViaTips = function (value) {
          this.withHelpClass = value;
          this.cdr.markForCheck();
      };
      NzFormItemComponent.prototype.setStatus = function (status) {
          this.status = status;
          this.cdr.markForCheck();
      };
      NzFormItemComponent.prototype.setHasFeedback = function (hasFeedback) {
          this.hasFeedback = hasFeedback;
          this.cdr.markForCheck();
      };
      NzFormItemComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzFormItemComponent;
  }());
  NzFormItemComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-form-item',
                  exportAs: 'nzFormItem',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  host: {
                      '[class.ant-form-item-has-success]': 'status === "success"',
                      '[class.ant-form-item-has-warning]': 'status === "warning"',
                      '[class.ant-form-item-has-error]': 'status === "error"',
                      '[class.ant-form-item-is-validating]': 'status === "validating"',
                      '[class.ant-form-item-has-feedback]': 'hasFeedback && status',
                      '[class.ant-form-item-with-help]': 'withHelpClass'
                  },
                  template: "\n    <ng-content></ng-content>\n  "
              },] }
  ];
  NzFormItemComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: core.ChangeDetectorRef }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var iconTypeMap = {
      error: 'close-circle-fill',
      validating: 'loading',
      success: 'check-circle-fill',
      warning: 'exclamation-circle-fill'
  };
  var NzFormControlComponent = /** @class */ (function () {
      function NzFormControlComponent(elementRef, nzFormItemComponent, cdr, renderer, i18n, nzFormDirective) {
          var _this = this;
          var _a, _b;
          this.nzFormItemComponent = nzFormItemComponent;
          this.cdr = cdr;
          this.nzFormDirective = nzFormDirective;
          this._hasFeedback = false;
          this.validateChanges = rxjs.Subscription.EMPTY;
          this.validateString = null;
          this.destroyed$ = new rxjs.Subject();
          this.status = null;
          this.validateControl = null;
          this.iconType = null;
          this.innerTip = null;
          this.nzAutoTips = {};
          this.nzDisableAutoTips = 'default';
          renderer.addClass(elementRef.nativeElement, 'ant-form-item-control');
          this.subscribeAutoTips(i18n.localeChange.pipe(operators.tap(function (locale) { return (_this.localeId = locale.locale); })));
          this.subscribeAutoTips((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.getInputObservable('nzAutoTips'));
          this.subscribeAutoTips((_b = this.nzFormDirective) === null || _b === void 0 ? void 0 : _b.getInputObservable('nzDisableAutoTips').pipe(operators.filter(function () { return _this.nzDisableAutoTips === 'default'; })));
      }
      Object.defineProperty(NzFormControlComponent.prototype, "disableAutoTips", {
          get: function () {
              var _a;
              return this.nzDisableAutoTips !== 'default' ? util.toBoolean(this.nzDisableAutoTips) : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzDisableAutoTips;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
          get: function () {
              return this._hasFeedback;
          },
          set: function (value) {
              this._hasFeedback = util.toBoolean(value);
              if (this.nzFormItemComponent) {
                  this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
          set: function (value) {
              if (value instanceof forms.AbstractControl || value instanceof forms.NgModel) {
                  this.validateControl = value;
                  this.validateString = null;
                  this.watchControl();
              }
              else if (value instanceof forms.FormControlName) {
                  this.validateControl = value.control;
                  this.validateString = null;
                  this.watchControl();
              }
              else {
                  this.validateString = value;
                  this.validateControl = null;
                  this.setStatus();
              }
          },
          enumerable: false,
          configurable: true
      });
      NzFormControlComponent.prototype.watchControl = function () {
          var _this = this;
          this.validateChanges.unsubscribe();
          /** miss detect https://github.com/angular/angular/issues/10887 **/
          if (this.validateControl && this.validateControl.statusChanges) {
              this.validateChanges = this.validateControl.statusChanges.pipe(operators.startWith(null), operators.takeUntil(this.destroyed$)).subscribe(function (_) {
                  if (!_this.disableAutoTips) {
                      _this.updateAutoErrorTip();
                  }
                  _this.setStatus();
                  _this.cdr.markForCheck();
              });
          }
      };
      NzFormControlComponent.prototype.setStatus = function () {
          this.status = this.getControlStatus(this.validateString);
          this.iconType = this.status ? iconTypeMap[this.status] : null;
          this.innerTip = this.getInnerTip(this.status);
          if (this.nzFormItemComponent) {
              this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
              this.nzFormItemComponent.setStatus(this.status);
          }
      };
      NzFormControlComponent.prototype.getControlStatus = function (validateString) {
          var status;
          if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
              status = 'warning';
          }
          else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
              status = 'error';
          }
          else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
              status = 'validating';
          }
          else if (validateString === 'success' || this.validateControlStatus('VALID')) {
              status = 'success';
          }
          else {
              status = null;
          }
          return status;
      };
      NzFormControlComponent.prototype.validateControlStatus = function (validStatus, statusType) {
          if (!this.validateControl) {
              return false;
          }
          else {
              var _p = this.validateControl, dirty = _p.dirty, touched = _p.touched, status = _p.status;
              return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
          }
      };
      NzFormControlComponent.prototype.getInnerTip = function (status) {
          switch (status) {
              case 'error':
                  return (!this.disableAutoTips && this.autoErrorTip) || this.nzErrorTip || null;
              case 'validating':
                  return this.nzValidatingTip || null;
              case 'success':
                  return this.nzSuccessTip || null;
              case 'warning':
                  return this.nzWarningTip || null;
              default:
                  return null;
          }
      };
      NzFormControlComponent.prototype.updateAutoErrorTip = function () {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
          if (this.validateControl) {
              var errors = this.validateControl.errors || {};
              var autoErrorTip = '';
              for (var key in errors) {
                  if (errors.hasOwnProperty(key)) {
                      autoErrorTip = (_l = (_g = (_e = (_b = (_a = errors[key]) === null || _a === void 0 ? void 0 : _a[this.localeId]) !== null && _b !== void 0 ? _b : (_d = (_c = this.nzAutoTips) === null || _c === void 0 ? void 0 : _c[this.localeId]) === null || _d === void 0 ? void 0 : _d[key]) !== null && _e !== void 0 ? _e : (_f = this.nzAutoTips.default) === null || _f === void 0 ? void 0 : _f[key]) !== null && _g !== void 0 ? _g : (_k = (_j = (_h = this.nzFormDirective) === null || _h === void 0 ? void 0 : _h.nzAutoTips) === null || _j === void 0 ? void 0 : _j[this.localeId]) === null || _k === void 0 ? void 0 : _k[key]) !== null && _l !== void 0 ? _l : (_o = (_m = this.nzFormDirective) === null || _m === void 0 ? void 0 : _m.nzAutoTips.default) === null || _o === void 0 ? void 0 : _o[key];
                  }
                  if (!!autoErrorTip) {
                      break;
                  }
              }
              this.autoErrorTip = autoErrorTip;
          }
      };
      NzFormControlComponent.prototype.subscribeAutoTips = function (observable) {
          var _this = this;
          observable === null || observable === void 0 ? void 0 : observable.pipe(operators.takeUntil(this.destroyed$)).subscribe(function () {
              if (!_this.disableAutoTips) {
                  _this.updateAutoErrorTip();
                  _this.setStatus();
                  _this.cdr.markForCheck();
              }
          });
      };
      NzFormControlComponent.prototype.ngOnChanges = function (changes) {
          var nzDisableAutoTips = changes.nzDisableAutoTips, nzAutoTips = changes.nzAutoTips, nzSuccessTip = changes.nzSuccessTip, nzWarningTip = changes.nzWarningTip, nzErrorTip = changes.nzErrorTip, nzValidatingTip = changes.nzValidatingTip;
          if (nzDisableAutoTips || nzAutoTips) {
              this.updateAutoErrorTip();
              this.setStatus();
          }
          else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
              this.setStatus();
          }
      };
      NzFormControlComponent.prototype.ngOnInit = function () {
          this.setStatus();
      };
      NzFormControlComponent.prototype.ngOnDestroy = function () {
          this.destroyed$.next();
          this.destroyed$.complete();
      };
      NzFormControlComponent.prototype.ngAfterContentInit = function () {
          if (!this.validateControl && !this.validateString) {
              if (this.defaultValidateControl instanceof forms.FormControlDirective) {
                  this.nzValidateStatus = this.defaultValidateControl.control;
              }
              else {
                  this.nzValidateStatus = this.defaultValidateControl;
              }
          }
      };
      return NzFormControlComponent;
  }());
  NzFormControlComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-form-control',
                  exportAs: 'nzFormControl',
                  preserveWhitespaces: false,
                  animations: [animation.helpMotion],
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n      <span class=\"ant-form-item-children-icon\">\n        <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\n      </span>\n    </div>\n    <div [ngClass]=\"['ant-form-item-explain', 'ant-form-item-explain-' + status]\" *ngIf=\"innerTip\">\n      <div @helpMotion>\n        <ng-container *nzStringTemplateOutlet=\"innerTip; context: { $implicit: validateControl }\">{{ innerTip }}</ng-container>\n      </div>\n    </div>\n    <div class=\"ant-form-item-extra\" *ngIf=\"nzExtra\">\n      <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n    </div>\n  "
              },] }
  ];
  NzFormControlComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: NzFormItemComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
      { type: core.ChangeDetectorRef },
      { type: core.Renderer2 },
      { type: i18n.NzI18nService },
      { type: NzFormDirective, decorators: [{ type: core.Optional }] }
  ]; };
  NzFormControlComponent.propDecorators = {
      defaultValidateControl: [{ type: core.ContentChild, args: [forms.NgControl, { static: false },] }],
      nzSuccessTip: [{ type: core.Input }],
      nzWarningTip: [{ type: core.Input }],
      nzErrorTip: [{ type: core.Input }],
      nzValidatingTip: [{ type: core.Input }],
      nzExtra: [{ type: core.Input }],
      nzAutoTips: [{ type: core.Input }],
      nzDisableAutoTips: [{ type: core.Input }],
      nzHasFeedback: [{ type: core.Input }],
      nzValidateStatus: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  function toTooltipIcon(value) {
      var icon = typeof value === 'string' ? { type: value } : value;
      return Object.assign(Object.assign({}, DefaultTooltipIcon), icon);
  }
  var NzFormLabelComponent = /** @class */ (function () {
      function NzFormLabelComponent(elementRef, renderer, cdr, nzFormDirective) {
          var _this = this;
          this.cdr = cdr;
          this.nzFormDirective = nzFormDirective;
          this.nzRequired = false;
          this.noColon = 'default';
          this._tooltipIcon = 'default';
          this.destroy$ = new rxjs.Subject();
          renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
          if (this.nzFormDirective) {
              this.nzFormDirective
                  .getInputObservable('nzNoColon')
                  .pipe(operators.filter(function () { return _this.noColon === 'default'; }), operators.takeUntil(this.destroy$))
                  .subscribe(function () { return _this.cdr.markForCheck(); });
              this.nzFormDirective
                  .getInputObservable('nzTooltipIcon')
                  .pipe(operators.filter(function () { return _this._tooltipIcon === 'default'; }), operators.takeUntil(this.destroy$))
                  .subscribe(function () { return _this.cdr.markForCheck(); });
          }
      }
      Object.defineProperty(NzFormLabelComponent.prototype, "nzNoColon", {
          get: function () {
              var _a;
              return this.noColon !== 'default' ? this.noColon : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzNoColon;
          },
          set: function (value) {
              this.noColon = util.toBoolean(value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzFormLabelComponent.prototype, "nzTooltipIcon", {
          set: function (value) {
              this._tooltipIcon = toTooltipIcon(value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzFormLabelComponent.prototype, "tooltipIcon", {
          // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`
          get: function () {
              var _a;
              return this._tooltipIcon !== 'default' ? this._tooltipIcon : toTooltipIcon(((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzTooltipIcon) || DefaultTooltipIcon);
          },
          enumerable: false,
          configurable: true
      });
      NzFormLabelComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzFormLabelComponent;
  }());
  NzFormLabelComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-form-label',
                  exportAs: 'nzFormLabel',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <label [attr.for]=\"nzFor\" [class.ant-form-item-no-colon]=\"nzNoColon\" [class.ant-form-item-required]=\"nzRequired\">\n      <ng-content></ng-content>\n      <span *ngIf=\"nzTooltipTitle\" class=\"ant-form-item-tooltip\" nz-tooltip [nzTooltipTitle]=\"nzTooltipTitle\">\n        <ng-container *nzStringTemplateOutlet=\"tooltipIcon.type; let tooltipIconType\">\n          <i nz-icon [nzType]=\"tooltipIconType\" [nzTheme]=\"tooltipIcon.theme\"></i>\n        </ng-container>\n      </span>\n    </label>\n  "
              },] }
  ];
  NzFormLabelComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: core.ChangeDetectorRef },
      { type: NzFormDirective, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
  ]; };
  NzFormLabelComponent.propDecorators = {
      nzFor: [{ type: core.Input }],
      nzRequired: [{ type: core.Input }],
      nzNoColon: [{ type: core.Input }],
      nzTooltipTitle: [{ type: core.Input }],
      nzTooltipIcon: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzFormLabelComponent.prototype, "nzRequired", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzFormSplitComponent = /** @class */ (function () {
      function NzFormSplitComponent(elementRef, renderer) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
      }
      return NzFormSplitComponent;
  }());
  NzFormSplitComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-form-split',
                  exportAs: 'nzFormSplit',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: " <ng-content></ng-content> "
              },] }
  ];
  NzFormSplitComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzFormTextComponent = /** @class */ (function () {
      function NzFormTextComponent(elementRef, renderer) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
      }
      return NzFormTextComponent;
  }());
  NzFormTextComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-form-text',
                  exportAs: 'nzFormText',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: " <ng-content></ng-content> "
              },] }
  ];
  NzFormTextComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzFormModule = /** @class */ (function () {
      function NzFormModule() {
      }
      return NzFormModule;
  }());
  NzFormModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [
                      NzFormDirective,
                      NzFormItemComponent,
                      NzFormLabelComponent,
                      NzFormControlComponent,
                      NzFormTextComponent,
                      NzFormSplitComponent
                  ],
                  exports: [
                      grid.NzGridModule,
                      NzFormDirective,
                      NzFormItemComponent,
                      NzFormLabelComponent,
                      NzFormControlComponent,
                      NzFormTextComponent,
                      NzFormSplitComponent
                  ],
                  imports: [bidi.BidiModule, common.CommonModule, grid.NzGridModule, icon.NzIconModule, tooltip.NzToolTipModule, layout.LayoutModule, platform.PlatformModule, outlet.NzOutletModule]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DefaultTooltipIcon = DefaultTooltipIcon;
  exports.NzFormControlComponent = NzFormControlComponent;
  exports.NzFormDirective = NzFormDirective;
  exports.NzFormItemComponent = NzFormItemComponent;
  exports.NzFormLabelComponent = NzFormLabelComponent;
  exports.NzFormModule = NzFormModule;
  exports.NzFormSplitComponent = NzFormSplitComponent;
  exports.NzFormTextComponent = NzFormTextComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-form.umd.js.map
