(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/core'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/observers'), require('@angular/common'), require('ng-zorro-antd/core/outlet')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/badge', ['exports', '@angular/cdk/bidi', '@angular/core', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/observers', '@angular/common', 'ng-zorro-antd/core/outlet'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].badge = {}), global.ng.cdk.bidi, global.ng.core, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.observers, global.ng.common, global['ng-zorro-antd'].core.outlet));
}(this, (function (exports, bidi, core, animation, config, noAnimation, util, rxjs, operators, observers, common, outlet) { 'use strict';

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
  var badgePresetColors = [
      'pink',
      'red',
      'yellow',
      'orange',
      'cyan',
      'green',
      'blue',
      'purple',
      'geekblue',
      'magenta',
      'volcano',
      'gold',
      'lime'
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NZ_CONFIG_MODULE_NAME = 'badge';
  var NzBadgeComponent = /** @class */ (function () {
      function NzBadgeComponent(nzConfigService, renderer, cdr, elementRef, directionality, noAnimation) {
          this.nzConfigService = nzConfigService;
          this.renderer = renderer;
          this.cdr = cdr;
          this.elementRef = elementRef;
          this.directionality = directionality;
          this.noAnimation = noAnimation;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.showSup = false;
          this.presetColor = null;
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
          this.nzShowZero = false;
          this.nzShowDot = true;
          this.nzStandalone = false;
          this.nzDot = false;
          this.nzOverflowCount = 99;
          this.nzColor = undefined;
          this.nzStyle = null;
          this.nzText = null;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-badge');
      }
      NzBadgeComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.prepareBadgeForRtl();
              _this.cdr.detectChanges();
          });
          this.dir = this.directionality.value;
          this.prepareBadgeForRtl();
      };
      NzBadgeComponent.prototype.ngOnChanges = function (changes) {
          var nzColor = changes.nzColor, nzShowDot = changes.nzShowDot, nzDot = changes.nzDot, nzCount = changes.nzCount, nzShowZero = changes.nzShowZero;
          if (nzColor) {
              this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
          }
          if (nzShowDot || nzDot || nzCount || nzShowZero) {
              this.showSup = (this.nzShowDot && this.nzDot) || this.nzCount > 0 || (this.nzCount <= 0 && this.nzShowZero);
          }
      };
      NzBadgeComponent.prototype.prepareBadgeForRtl = function () {
          if (this.isRtlLayout) {
              this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-rtl');
          }
          else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-rtl');
          }
      };
      Object.defineProperty(NzBadgeComponent.prototype, "isRtlLayout", {
          get: function () {
              return this.dir === 'rtl';
          },
          enumerable: false,
          configurable: true
      });
      NzBadgeComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzBadgeComponent;
  }());
  NzBadgeComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-badge',
                  exportAs: 'nzBadge',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  animations: [animation.zoomBadgeMotion],
                  template: "\n    <ng-container *ngIf=\"nzStatus || nzColor\">\n      <span\n        class=\"ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}\"\n        [style.background]=\"!presetColor && nzColor\"\n        [ngStyle]=\"nzStyle\"\n      ></span>\n      <span class=\"ant-badge-status-text\">\n        <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\n      </span>\n    </ng-container>\n    <ng-content></ng-content>\n    <ng-container *nzStringTemplateOutlet=\"nzCount\">\n      <nz-badge-sup\n        *ngIf=\"showSup\"\n        [nzOffset]=\"nzOffset\"\n        [nzTitle]=\"nzTitle\"\n        [nzStyle]=\"nzStyle\"\n        [nzDot]=\"nzDot\"\n        [nzOverflowCount]=\"nzOverflowCount\"\n        [disableAnimation]=\"!!(nzStandalone || nzStatus || nzColor || noAnimation?.nzNoAnimation)\"\n        [nzCount]=\"nzCount\"\n        [noAnimation]=\"!!noAnimation?.nzNoAnimation\"\n      ></nz-badge-sup>\n    </ng-container>\n  ",
                  host: {
                      '[class.ant-badge-status]': 'nzStatus',
                      '[class.ant-badge-not-a-wrapper]': '!!(nzStandalone || nzStatus || nzColor)'
                  }
              },] }
  ];
  NzBadgeComponent.ctorParameters = function () { return [
      { type: config.NzConfigService },
      { type: core.Renderer2 },
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };
  NzBadgeComponent.propDecorators = {
      nzShowZero: [{ type: core.Input }],
      nzShowDot: [{ type: core.Input }],
      nzStandalone: [{ type: core.Input }],
      nzDot: [{ type: core.Input }],
      nzOverflowCount: [{ type: core.Input }],
      nzColor: [{ type: core.Input }],
      nzStyle: [{ type: core.Input }],
      nzText: [{ type: core.Input }],
      nzTitle: [{ type: core.Input }],
      nzStatus: [{ type: core.Input }],
      nzCount: [{ type: core.Input }],
      nzOffset: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzBadgeComponent.prototype, "nzShowZero", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzBadgeComponent.prototype, "nzShowDot", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzBadgeComponent.prototype, "nzStandalone", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzBadgeComponent.prototype, "nzDot", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Number)
  ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzBadgeComponent.prototype, "nzColor", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzBadgeSupComponent = /** @class */ (function () {
      function NzBadgeSupComponent(elementRef) {
          this.elementRef = elementRef;
          this.nzStyle = null;
          this.nzDot = false;
          this.nzOverflowCount = 99;
          this.disableAnimation = false;
          this.noAnimation = false;
          this.maxNumberArray = [];
          this.countArray = [];
          this.count = 0;
          this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-scroll-number');
      }
      NzBadgeSupComponent.prototype.generateMaxNumberArray = function () {
          this.maxNumberArray = this.nzOverflowCount.toString().split('');
      };
      NzBadgeSupComponent.prototype.ngOnInit = function () {
          this.generateMaxNumberArray();
      };
      NzBadgeSupComponent.prototype.ngOnChanges = function (changes) {
          var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount;
          if (nzCount && typeof nzCount.currentValue === 'number') {
              this.count = Math.max(0, nzCount.currentValue);
              this.countArray = this.count
                  .toString()
                  .split('')
                  .map(function (item) { return +item; });
          }
          if (nzOverflowCount) {
              this.generateMaxNumberArray();
          }
      };
      return NzBadgeSupComponent;
  }());
  NzBadgeSupComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-badge-sup',
                  exportAs: 'nzBadgeSup',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  animations: [animation.zoomBadgeMotion],
                  template: "\n    <ng-container *ngIf=\"count <= nzOverflowCount; else overflowTemplate\">\n      <span\n        [nzNoAnimation]=\"noAnimation\"\n        *ngFor=\"let n of maxNumberArray; let i = index\"\n        class=\"ant-scroll-number-only\"\n        [style.transform]=\"'translateY(' + -countArray[i] * 100 + '%)'\"\n      >\n        <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\n          <p *ngFor=\"let p of countSingleArray\" class=\"ant-scroll-number-only-unit\" [class.current]=\"p === countArray[i]\">\n            {{ p }}\n          </p>\n        </ng-container>\n      </span>\n    </ng-container>\n    <ng-template #overflowTemplate>{{ nzOverflowCount }}+</ng-template>\n  ",
                  host: {
                      '[@.disabled]': "disableAnimation",
                      '[@zoomBadgeMotion]': '',
                      '[attr.title]': "nzTitle === null ? '' : nzTitle || nzCount",
                      '[style]': "nzStyle",
                      '[style.right.px]': "nzOffset && nzOffset[0] ? -nzOffset[0] : null",
                      '[style.margin-top.px]': "nzOffset && nzOffset[1] ? nzOffset[1] : null",
                      '[class.ant-badge-count]': "!nzDot",
                      '[class.ant-badge-dot]': "nzDot",
                      '[class.ant-badge-multiple-words]': "countArray.length >= 2"
                  }
              },] }
  ];
  NzBadgeSupComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzBadgeSupComponent.propDecorators = {
      nzOffset: [{ type: core.Input }],
      nzTitle: [{ type: core.Input }],
      nzStyle: [{ type: core.Input }],
      nzDot: [{ type: core.Input }],
      nzOverflowCount: [{ type: core.Input }],
      disableAnimation: [{ type: core.Input }],
      nzCount: [{ type: core.Input }],
      noAnimation: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzRibbonComponent = /** @class */ (function () {
      function NzRibbonComponent(elementRef) {
          this.elementRef = elementRef;
          this.nzPlacement = 'end';
          this.nzText = null;
          this.presetColor = null;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-ribbon-wrapper');
      }
      NzRibbonComponent.prototype.ngOnChanges = function (changes) {
          var nzColor = changes.nzColor;
          if (nzColor) {
              this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
          }
      };
      return NzRibbonComponent;
  }());
  NzRibbonComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-ribbon',
                  exportAs: 'nzRibbon',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-content></ng-content>\n    <div\n      class=\"ant-ribbon\"\n      [class]=\"presetColor && 'ant-ribbon-color-' + presetColor\"\n      [class.ant-ribbon-placement-end]=\"nzPlacement === 'end'\"\n      [class.ant-ribbon-placement-start]=\"nzPlacement === 'start'\"\n      [style.background-color]=\"!presetColor && nzColor\"\n    >\n      <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\n      <div class=\"ant-ribbon-corner\" [style.color]=\"!presetColor && nzColor\"></div>\n    </div>\n  "
              },] }
  ];
  NzRibbonComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzRibbonComponent.propDecorators = {
      nzColor: [{ type: core.Input }],
      nzPlacement: [{ type: core.Input }],
      nzText: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzBadgeModule = /** @class */ (function () {
      function NzBadgeModule() {
      }
      return NzBadgeModule;
  }());
  NzBadgeModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent],
                  exports: [NzBadgeComponent, NzRibbonComponent],
                  imports: [bidi.BidiModule, common.CommonModule, observers.ObserversModule, outlet.NzOutletModule, noAnimation.NzNoAnimationModule]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzBadgeComponent = NzBadgeComponent;
  exports.NzBadgeModule = NzBadgeModule;
  exports.ɵa = NzBadgeSupComponent;
  exports.ɵb = NzRibbonComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-badge.umd.js.map
