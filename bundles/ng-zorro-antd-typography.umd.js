(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/clipboard'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/core/trans-button'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/tooltip'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/polyfill'), require('ng-zorro-antd/core/services'), require('ng-zorro-antd/core/util')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/typography', ['exports', '@angular/cdk/bidi', '@angular/cdk/clipboard', '@angular/cdk/platform', '@angular/common', '@angular/core', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/core/trans-button', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/tooltip', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/polyfill', 'ng-zorro-antd/core/services', 'ng-zorro-antd/core/util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].typography = {}), global.ng.cdk.bidi, global.ng.cdk.clipboard, global.ng.cdk.platform, global.ng.common, global.ng.core, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].core['trans-button'], global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input, global['ng-zorro-antd'].tooltip, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.polyfill, global['ng-zorro-antd'].core.services, global['ng-zorro-antd'].core.util));
}(this, (function (exports, bidi, clipboard, platform, common, core, outlet, transButton, i18n, icon, input, tooltip, rxjs, operators, config, polyfill, services, util) { 'use strict';

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

  var NzTextCopyComponent = /** @class */ (function () {
      function NzTextCopyComponent(host, cdr, clipboard, i18n) {
          this.host = host;
          this.cdr = cdr;
          this.clipboard = clipboard;
          this.i18n = i18n;
          this.copied = false;
          this.copyId = -1;
          this.nativeElement = this.host.nativeElement;
          this.copyTooltip = null;
          this.copedTooltip = null;
          this.copyIcon = 'copy';
          this.copedIcon = 'check';
          this.destroy$ = new rxjs.Subject();
          this.icons = ['copy', 'check'];
          this.textCopy = new core.EventEmitter();
      }
      NzTextCopyComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
              _this.locale = _this.i18n.getLocaleData('Text');
              _this.updateTooltips();
              _this.cdr.markForCheck();
          });
      };
      NzTextCopyComponent.prototype.ngOnChanges = function (changes) {
          var tooltips = changes.tooltips, icons = changes.icons;
          if (tooltips) {
              this.updateTooltips();
          }
          if (icons) {
              this.updateIcons();
          }
      };
      NzTextCopyComponent.prototype.ngOnDestroy = function () {
          clearTimeout(this.copyId);
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTextCopyComponent.prototype.onClick = function () {
          if (this.copied) {
              return;
          }
          this.copied = true;
          this.cdr.detectChanges();
          var text = this.text;
          this.textCopy.emit(text);
          this.clipboard.copy(text);
          this.onCopied();
      };
      NzTextCopyComponent.prototype.onCopied = function () {
          var _this = this;
          clearTimeout(this.copyId);
          this.copyId = setTimeout(function () {
              _this.copied = false;
              _this.cdr.detectChanges();
          }, 3000);
      };
      NzTextCopyComponent.prototype.updateTooltips = function () {
          var _a, _b, _c, _d;
          if (this.tooltips === null) {
              this.copedTooltip = null;
              this.copyTooltip = null;
          }
          else if (Array.isArray(this.tooltips)) {
              var _e = __read(this.tooltips, 2), copyTooltip = _e[0], copedTooltip = _e[1];
              this.copyTooltip = copyTooltip || ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.copy);
              this.copedTooltip = copedTooltip || ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.copied);
          }
          else {
              this.copyTooltip = (_c = this.locale) === null || _c === void 0 ? void 0 : _c.copy;
              this.copedTooltip = (_d = this.locale) === null || _d === void 0 ? void 0 : _d.copied;
          }
          this.cdr.markForCheck();
      };
      NzTextCopyComponent.prototype.updateIcons = function () {
          var _e = __read(this.icons, 2), copyIcon = _e[0], copedIcon = _e[1];
          this.copyIcon = copyIcon;
          this.copedIcon = copedIcon;
          this.cdr.markForCheck();
      };
      return NzTextCopyComponent;
  }());
  NzTextCopyComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-text-copy',
                  exportAs: 'nzTextCopy',
                  template: "\n    <button\n      type=\"button\"\n      nz-tooltip\n      nz-trans-button\n      [nzTooltipTitle]=\"copied ? copedTooltip : copyTooltip\"\n      class=\"ant-typography-copy\"\n      [class.ant-typography-copy-success]=\"copied\"\n      (click)=\"onClick()\"\n    >\n      <ng-container *nzStringTemplateOutlet=\"copied ? copedIcon : copyIcon; let icon\">\n        <i nz-icon [nzType]=\"icon\"></i>\n      </ng-container>\n    </button>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  preserveWhitespaces: false
              },] }
  ];
  NzTextCopyComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.ChangeDetectorRef },
      { type: clipboard.Clipboard },
      { type: i18n.NzI18nService }
  ]; };
  NzTextCopyComponent.propDecorators = {
      text: [{ type: core.Input }],
      tooltips: [{ type: core.Input }],
      icons: [{ type: core.Input }],
      textCopy: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTextEditComponent = /** @class */ (function () {
      function NzTextEditComponent(zone, host, cdr, i18n) {
          this.zone = zone;
          this.host = host;
          this.cdr = cdr;
          this.i18n = i18n;
          this.editing = false;
          this.destroy$ = new rxjs.Subject();
          this.icon = 'edit';
          this.startEditing = new core.EventEmitter();
          this.endEditing = new core.EventEmitter(true);
          this.nativeElement = this.host.nativeElement;
      }
      NzTextEditComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
              _this.locale = _this.i18n.getLocaleData('Text');
              _this.cdr.markForCheck();
          });
      };
      NzTextEditComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTextEditComponent.prototype.onClick = function () {
          this.beforeText = this.text;
          this.currentText = this.beforeText;
          this.editing = true;
          this.startEditing.emit();
          this.focusAndSetValue();
      };
      NzTextEditComponent.prototype.confirm = function () {
          this.editing = false;
          this.endEditing.emit(this.currentText);
      };
      NzTextEditComponent.prototype.onInput = function (event) {
          var target = event.target;
          this.currentText = target.value;
      };
      NzTextEditComponent.prototype.onEnter = function (event) {
          event.stopPropagation();
          event.preventDefault();
          this.confirm();
      };
      NzTextEditComponent.prototype.onCancel = function () {
          this.currentText = this.beforeText;
          this.confirm();
      };
      NzTextEditComponent.prototype.focusAndSetValue = function () {
          var _this = this;
          this.zone.onStable.pipe(operators.take(1), operators.takeUntil(this.destroy$)).subscribe(function () {
              var _a;
              if ((_a = _this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                  _this.textarea.nativeElement.focus();
                  _this.textarea.nativeElement.value = _this.currentText || '';
                  _this.autosizeDirective.resizeToFitContent();
                  _this.cdr.markForCheck();
              }
          });
      };
      return NzTextEditComponent;
  }());
  NzTextEditComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-text-edit',
                  exportAs: 'nzTextEdit',
                  template: "\n    <button\n      *ngIf=\"!editing\"\n      nz-tooltip\n      nz-trans-button\n      class=\"ant-typography-edit\"\n      [nzTooltipTitle]=\"tooltip === null ? null : tooltip || locale?.edit\"\n      (click)=\"onClick()\"\n    >\n      <ng-container *nzStringTemplateOutlet=\"icon; let icon\">\n        <i nz-icon [nzType]=\"icon\"></i>\n      </ng-container>\n    </button>\n    <ng-container *ngIf=\"editing\">\n      <textarea\n        #textarea\n        nz-input\n        nzAutosize\n        (input)=\"onInput($event)\"\n        (blur)=\"confirm()\"\n        (keydown.esc)=\"onCancel()\"\n        (keydown.enter)=\"onEnter($event)\"\n      ></textarea>\n      <button nz-trans-button class=\"ant-typography-edit-content-confirm\" (click)=\"confirm()\">\n        <i nz-icon nzType=\"enter\"></i>\n      </button>\n    </ng-container>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  preserveWhitespaces: false
              },] }
  ];
  NzTextEditComponent.ctorParameters = function () { return [
      { type: core.NgZone },
      { type: core.ElementRef },
      { type: core.ChangeDetectorRef },
      { type: i18n.NzI18nService }
  ]; };
  NzTextEditComponent.propDecorators = {
      text: [{ type: core.Input }],
      icon: [{ type: core.Input }],
      tooltip: [{ type: core.Input }],
      startEditing: [{ type: core.Output }],
      endEditing: [{ type: core.Output }],
      textarea: [{ type: core.ViewChild, args: ['textarea', { static: false },] }],
      autosizeDirective: [{ type: core.ViewChild, args: [input.NzAutosizeDirective, { static: false },] }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NZ_CONFIG_MODULE_NAME = 'typography';
  var EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';
  var NzTypographyComponent = /** @class */ (function () {
      function NzTypographyComponent(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService, directionality) {
          this.nzConfigService = nzConfigService;
          this.host = host;
          this.cdr = cdr;
          this.viewContainerRef = viewContainerRef;
          this.renderer = renderer;
          this.platform = platform;
          this.i18n = i18n;
          this.resizeService = resizeService;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzCopyable = false;
          this.nzEditable = false;
          this.nzDisabled = false;
          this.nzExpandable = false;
          this.nzEllipsis = false;
          this.nzCopyTooltips = undefined;
          this.nzCopyIcons = ['copy', 'check'];
          this.nzEditTooltip = undefined;
          this.nzEditIcon = 'edit';
          this.nzEllipsisRows = 1;
          this.nzContentChange = new core.EventEmitter();
          this.nzCopy = new core.EventEmitter();
          this.nzExpandChange = new core.EventEmitter();
          // This is not a two-way binding output with {@link nzEllipsis}
          this.nzOnEllipsis = new core.EventEmitter();
          this.expandableBtnElementCache = null;
          this.editing = false;
          this.cssEllipsis = false;
          this.isEllipsis = true;
          this.expanded = false;
          this.ellipsisStr = '...';
          this.dir = 'ltr';
          this.viewInit = false;
          this.rfaId = -1;
          this.destroy$ = new rxjs.Subject();
          this.windowResizeSubscription = rxjs.Subscription.EMPTY;
          this.document = document;
      }
      Object.defineProperty(NzTypographyComponent.prototype, "hasEllipsisObservers", {
          get: function () {
              return this.nzOnEllipsis.observers.length > 0;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTypographyComponent.prototype, "canCssEllipsis", {
          get: function () {
              return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTypographyComponent.prototype, "hasOperationsWithEllipsis", {
          get: function () {
              return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTypographyComponent.prototype, "copyText", {
          get: function () {
              return (typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent);
          },
          enumerable: false,
          configurable: true
      });
      NzTypographyComponent.prototype.onTextCopy = function (text) {
          this.nzCopy.emit(text);
      };
      NzTypographyComponent.prototype.onStartEditing = function () {
          this.editing = true;
      };
      NzTypographyComponent.prototype.onEndEditing = function (text) {
          this.editing = false;
          this.nzContentChange.emit(text);
          if (this.nzContent === text) {
              this.renderOnNextFrame();
          }
          this.cdr.markForCheck();
      };
      NzTypographyComponent.prototype.onExpand = function () {
          this.isEllipsis = false;
          this.expanded = true;
          this.nzExpandChange.emit();
          this.nzOnEllipsis.emit(false);
      };
      NzTypographyComponent.prototype.canUseCSSEllipsis = function () {
          if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
              return false;
          }
          // make sure {@link nzOnEllipsis} works, will force use JS to calculations
          if (this.hasEllipsisObservers) {
              return false;
          }
          if (this.nzEllipsisRows === 1) {
              return util.isStyleSupport('textOverflow');
          }
          else {
              return util.isStyleSupport('webkitLineClamp');
          }
      };
      NzTypographyComponent.prototype.renderOnNextFrame = function () {
          var _this = this;
          polyfill.cancelRequestAnimationFrame(this.rfaId);
          if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
              return;
          }
          this.rfaId = polyfill.reqAnimFrame(function () {
              _this.syncEllipsis();
          });
      };
      NzTypographyComponent.prototype.getOriginContentViewRef = function () {
          var _this = this;
          var viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
              content: this.nzContent
          });
          viewRef.detectChanges();
          return {
              viewRef: viewRef,
              removeView: function () {
                  _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef));
              }
          };
      };
      NzTypographyComponent.prototype.syncEllipsis = function () {
          var _this = this;
          if (this.cssEllipsis) {
              return;
          }
          var _b = this.getOriginContentViewRef(), viewRef = _b.viewRef, removeView = _b.removeView;
          var fixedNodes = [this.textCopyRef, this.textEditRef].filter(function (e) { return e && e.nativeElement; }).map(function (e) { return e.nativeElement; });
          var expandableBtnElement = this.getExpandableBtnElement();
          if (expandableBtnElement) {
              fixedNodes.push(expandableBtnElement);
          }
          var _c = util.measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix), contentNodes = _c.contentNodes, text = _c.text, ellipsis = _c.ellipsis;
          removeView();
          this.ellipsisText = text;
          if (ellipsis !== this.isEllipsis) {
              this.isEllipsis = ellipsis;
              this.nzOnEllipsis.emit(ellipsis);
          }
          var ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
          while (ellipsisContainerNativeElement.firstChild) {
              this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
          }
          contentNodes.forEach(function (n) {
              _this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
          });
          this.cdr.markForCheck();
      };
      // Need to create the element for calculation size before view init
      NzTypographyComponent.prototype.getExpandableBtnElement = function () {
          if (this.nzExpandable) {
              var expandText = this.locale ? this.locale.expand : '';
              var cache = this.expandableBtnElementCache;
              if (!cache || cache.innerText === expandText) {
                  var el = this.document.createElement('a');
                  el.className = EXPAND_ELEMENT_CLASSNAME;
                  el.innerText = expandText;
                  this.expandableBtnElementCache = el;
              }
              return this.expandableBtnElementCache;
          }
          else {
              this.expandableBtnElementCache = null;
              return null;
          }
      };
      NzTypographyComponent.prototype.renderAndSubscribeWindowResize = function () {
          var _this = this;
          if (this.platform.isBrowser) {
              this.windowResizeSubscription.unsubscribe();
              this.cssEllipsis = this.canUseCSSEllipsis();
              this.renderOnNextFrame();
              this.windowResizeSubscription = this.resizeService
                  .subscribe()
                  .pipe(operators.takeUntil(this.destroy$))
                  .subscribe(function () { return _this.renderOnNextFrame(); });
          }
      };
      NzTypographyComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
              _this.locale = _this.i18n.getLocaleData('Text');
              _this.cdr.markForCheck();
          });
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
          this.dir = this.directionality.value;
      };
      NzTypographyComponent.prototype.ngAfterViewInit = function () {
          this.viewInit = true;
          this.renderAndSubscribeWindowResize();
      };
      NzTypographyComponent.prototype.ngOnChanges = function (changes) {
          var nzCopyable = changes.nzCopyable, nzEditable = changes.nzEditable, nzExpandable = changes.nzExpandable, nzEllipsis = changes.nzEllipsis, nzContent = changes.nzContent, nzEllipsisRows = changes.nzEllipsisRows, nzSuffix = changes.nzSuffix;
          if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
              if (this.nzEllipsis) {
                  if (this.expanded) {
                      this.windowResizeSubscription.unsubscribe();
                  }
                  else {
                      this.renderAndSubscribeWindowResize();
                  }
              }
          }
      };
      NzTypographyComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
          this.expandableBtnElementCache = null;
          this.windowResizeSubscription.unsubscribe();
      };
      return NzTypographyComponent;
  }());
  NzTypographyComponent.decorators = [
      { type: core.Component, args: [{
                  selector: "\n  nz-typography,\n  [nz-typography],\n  p[nz-paragraph],\n  span[nz-text],\n  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]\n  ",
                  exportAs: 'nzTypography',
                  template: "\n    <ng-template #contentTemplate let-content=\"content\">\n      <ng-content *ngIf=\"!content\"></ng-content>\n      {{ content }}\n    </ng-template>\n    <ng-container *ngIf=\"!editing\">\n      <ng-container\n        *ngIf=\"\n          expanded ||\n            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||\n            canCssEllipsis ||\n            (nzSuffix && expanded);\n          else jsEllipsis\n        \"\n      >\n        <ng-template [ngTemplateOutlet]=\"contentTemplate\" [ngTemplateOutletContext]=\"{ content: nzContent }\"></ng-template>\n        <ng-container *ngIf=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n      </ng-container>\n      <ng-template #jsEllipsis>\n        <span #ellipsisContainer></span>\n        <ng-container *ngIf=\"isEllipsis\">{{ ellipsisStr }}</ng-container>\n        <ng-container *ngIf=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n        <a #expandable *ngIf=\"nzExpandable && isEllipsis\" class=\"ant-typography-expand\" (click)=\"onExpand()\">{{ locale?.expand }}</a>\n      </ng-template>\n    </ng-container>\n\n    <nz-text-edit\n      *ngIf=\"nzEditable\"\n      [text]=\"nzContent\"\n      [icon]=\"nzEditIcon\"\n      [tooltip]=\"nzEditTooltip\"\n      (endEditing)=\"onEndEditing($event)\"\n      (startEditing)=\"onStartEditing()\"\n    ></nz-text-edit>\n\n    <nz-text-copy\n      *ngIf=\"nzCopyable && !editing\"\n      [text]=\"copyText\"\n      [tooltips]=\"nzCopyTooltips\"\n      [icons]=\"nzCopyIcons\"\n      (textCopy)=\"onTextCopy($event)\"\n    ></nz-text-copy>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  preserveWhitespaces: false,
                  host: {
                      '[class.ant-typography]': '!editing',
                      '[class.ant-typography-rtl]': 'dir === "rtl"',
                      '[class.ant-typography-edit-content]': 'editing',
                      '[class.ant-typography-secondary]': 'nzType === "secondary"',
                      '[class.ant-typography-warning]': 'nzType === "warning"',
                      '[class.ant-typography-danger]': 'nzType === "danger"',
                      '[class.ant-typography-success]': 'nzType === "success"',
                      '[class.ant-typography-disabled]': 'nzDisabled',
                      '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                      '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                      '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                      '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                  }
              },] }
  ];
  NzTypographyComponent.ctorParameters = function () { return [
      { type: config.NzConfigService },
      { type: core.ElementRef },
      { type: core.ChangeDetectorRef },
      { type: core.ViewContainerRef },
      { type: core.Renderer2 },
      { type: platform.Platform },
      { type: i18n.NzI18nService },
      { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
      { type: services.NzResizeService },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzTypographyComponent.propDecorators = {
      nzCopyable: [{ type: core.Input }],
      nzEditable: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzExpandable: [{ type: core.Input }],
      nzEllipsis: [{ type: core.Input }],
      nzCopyTooltips: [{ type: core.Input }],
      nzCopyIcons: [{ type: core.Input }],
      nzEditTooltip: [{ type: core.Input }],
      nzEditIcon: [{ type: core.Input }],
      nzContent: [{ type: core.Input }],
      nzEllipsisRows: [{ type: core.Input }],
      nzType: [{ type: core.Input }],
      nzCopyText: [{ type: core.Input }],
      nzSuffix: [{ type: core.Input }],
      nzContentChange: [{ type: core.Output }],
      nzCopy: [{ type: core.Output }],
      nzExpandChange: [{ type: core.Output }],
      nzOnEllipsis: [{ type: core.Output }],
      textEditRef: [{ type: core.ViewChild, args: [NzTextEditComponent, { static: false },] }],
      textCopyRef: [{ type: core.ViewChild, args: [NzTextCopyComponent, { static: false },] }],
      ellipsisContainer: [{ type: core.ViewChild, args: ['ellipsisContainer', { static: false },] }],
      expandableBtn: [{ type: core.ViewChild, args: ['expandable', { static: false },] }],
      contentTemplate: [{ type: core.ViewChild, args: ['contentTemplate', { static: false },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzCopyable", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzEditable", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzExpandable", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzEllipsis", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Array)
  ], NzTypographyComponent.prototype, "nzCopyIcons", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzEditTooltip", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTypographyComponent.prototype, "nzEditIcon", void 0);
  __decorate([
      config.WithConfig(),
      util.InputNumber(),
      __metadata("design:type", Number)
  ], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTypographyModule = /** @class */ (function () {
      function NzTypographyModule() {
      }
      return NzTypographyModule;
  }());
  NzTypographyModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      icon.NzIconModule,
                      tooltip.NzToolTipModule,
                      input.NzInputModule,
                      i18n.NzI18nModule,
                      transButton.NzTransButtonModule,
                      clipboard.ClipboardModule,
                      outlet.NzOutletModule
                  ],
                  exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, platform.PlatformModule],
                  declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzTextCopyComponent = NzTextCopyComponent;
  exports.NzTextEditComponent = NzTextEditComponent;
  exports.NzTypographyComponent = NzTypographyComponent;
  exports.NzTypographyModule = NzTypographyModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-typography.umd.js.map
