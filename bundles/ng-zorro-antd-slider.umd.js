(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/tooltip'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/slider', ['exports', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/platform', '@angular/core', '@angular/forms', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/tooltip', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].slider = {}), global.ng.cdk.bidi, global.ng.cdk.keycodes, global.ng.cdk.platform, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].tooltip, global.ng.common));
}(this, (function (exports, bidi, keycodes, platform, core, forms, util, rxjs, operators, tooltip, common) { 'use strict';

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
  var NzSliderService = /** @class */ (function () {
      function NzSliderService() {
          this.isDragging = false;
      }
      return NzSliderService;
  }());
  NzSliderService.decorators = [
      { type: core.Injectable }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSliderHandleComponent = /** @class */ (function () {
      function NzSliderHandleComponent(sliderService, cdr) {
          var _this = this;
          this.sliderService = sliderService;
          this.cdr = cdr;
          this.tooltipVisible = 'default';
          this.active = false;
          this.dir = 'ltr';
          this.style = {};
          this.enterHandle = function () {
              if (!_this.sliderService.isDragging) {
                  _this.toggleTooltip(true);
                  _this.updateTooltipPosition();
                  _this.cdr.detectChanges();
              }
          };
          this.leaveHandle = function () {
              if (!_this.sliderService.isDragging) {
                  _this.toggleTooltip(false);
                  _this.cdr.detectChanges();
              }
          };
      }
      NzSliderHandleComponent.prototype.ngOnChanges = function (changes) {
          var _this = this;
          var offset = changes.offset, value = changes.value, active = changes.active, tooltipVisible = changes.tooltipVisible, reverse = changes.reverse, dir = changes.dir;
          if (offset || reverse || dir) {
              this.updateStyle();
          }
          if (value) {
              this.updateTooltipTitle();
              this.updateTooltipPosition();
          }
          if (active) {
              if (active.currentValue) {
                  this.toggleTooltip(true);
              }
              else {
                  this.toggleTooltip(false);
              }
          }
          if ((tooltipVisible === null || tooltipVisible === void 0 ? void 0 : tooltipVisible.currentValue) === 'always') {
              Promise.resolve().then(function () { return _this.toggleTooltip(true, true); });
          }
      };
      NzSliderHandleComponent.prototype.focus = function () {
          var _a;
          (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
      };
      NzSliderHandleComponent.prototype.toggleTooltip = function (show, force) {
          if (force === void 0) { force = false; }
          var _a, _b;
          if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
              return;
          }
          if (show) {
              (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.show();
          }
          else {
              (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hide();
          }
      };
      NzSliderHandleComponent.prototype.updateTooltipTitle = function () {
          this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : "" + this.value;
      };
      NzSliderHandleComponent.prototype.updateTooltipPosition = function () {
          var _this = this;
          if (this.tooltip) {
              Promise.resolve().then(function () { var _a; return (_a = _this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); });
          }
      };
      NzSliderHandleComponent.prototype.updateStyle = function () {
          var _c;
          var vertical = this.vertical;
          var reverse = this.reverse;
          var offset = this.offset;
          var positionStyle = vertical
              ? (_c = {},
                  _c[reverse ? 'top' : 'bottom'] = offset + "%",
                  _c[reverse ? 'bottom' : 'top'] = 'auto',
                  _c.transform = reverse ? null : "translateY(+50%)",
                  _c) : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { transform: "translateX(" + (reverse ? (this.dir === 'rtl' ? '-' : '+') : this.dir === 'rtl' ? '+' : '-') + "50%)" });
          this.style = positionStyle;
          this.cdr.markForCheck();
      };
      NzSliderHandleComponent.prototype.getHorizontalStylePosition = function () {
          var left = this.reverse ? 'auto' : this.offset + "%";
          var right = this.reverse ? this.offset + "%" : 'auto';
          if (this.dir === 'rtl') {
              var tmp = left;
              left = right;
              right = tmp;
          }
          return { left: left, right: right };
      };
      return NzSliderHandleComponent;
  }());
  NzSliderHandleComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  selector: 'nz-slider-handle',
                  exportAs: 'nzSliderHandle',
                  preserveWhitespaces: false,
                  template: "\n    <div\n      #handle\n      class=\"ant-slider-handle\"\n      tabindex=\"0\"\n      nz-tooltip\n      [ngStyle]=\"style\"\n      [nzTooltipTitle]=\"tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle\"\n      [nzTooltipTrigger]=\"null\"\n      [nzTooltipPlacement]=\"tooltipPlacement\"\n    ></div>\n  ",
                  host: {
                      '(mouseenter)': 'enterHandle()',
                      '(mouseleave)': 'leaveHandle()'
                  }
              },] }
  ];
  NzSliderHandleComponent.ctorParameters = function () { return [
      { type: NzSliderService },
      { type: core.ChangeDetectorRef }
  ]; };
  NzSliderHandleComponent.propDecorators = {
      handleEl: [{ type: core.ViewChild, args: ['handle', { static: false },] }],
      tooltip: [{ type: core.ViewChild, args: [tooltip.NzTooltipDirective, { static: false },] }],
      vertical: [{ type: core.Input }],
      reverse: [{ type: core.Input }],
      offset: [{ type: core.Input }],
      value: [{ type: core.Input }],
      tooltipVisible: [{ type: core.Input }],
      tooltipPlacement: [{ type: core.Input }],
      tooltipFormatter: [{ type: core.Input }],
      active: [{ type: core.Input }],
      dir: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderHandleComponent.prototype, "active", void 0);

  var NzSliderComponent = /** @class */ (function () {
      function NzSliderComponent(sliderService, cdr, platform, directionality) {
          this.sliderService = sliderService;
          this.cdr = cdr;
          this.platform = platform;
          this.directionality = directionality;
          this.nzDisabled = false;
          this.nzDots = false;
          this.nzIncluded = true;
          this.nzRange = false;
          this.nzVertical = false;
          this.nzReverse = false;
          this.nzMarks = null;
          this.nzMax = 100;
          this.nzMin = 0;
          this.nzStep = 1;
          this.nzTooltipVisible = 'default';
          this.nzTooltipPlacement = 'top';
          this.nzOnAfterChange = new core.EventEmitter();
          this.value = null;
          this.cacheSliderStart = null;
          this.cacheSliderLength = null;
          this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
          this.track = { offset: null, length: null }; // Track's offset and length
          this.handles = []; // Handles' offset
          this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
          this.bounds = { lower: null, upper: null }; // now for nz-slider-step
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
      }
      NzSliderComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
              _this.updateTrackAndHandles();
              _this.onValueChange(_this.getValue(true));
          });
          this.handles = generateHandlers(this.nzRange ? 2 : 1);
          this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
          this.bindDraggingHandlers();
          this.toggleDragDisabled(this.nzDisabled);
          if (this.getValue() === null) {
              this.setValue(this.formatValue(null));
          }
      };
      NzSliderComponent.prototype.ngOnChanges = function (changes) {
          var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
          if (nzDisabled && !nzDisabled.firstChange) {
              this.toggleDragDisabled(nzDisabled.currentValue);
          }
          else if (nzMarks && !nzMarks.firstChange) {
              this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
          }
          else if (nzRange && !nzRange.firstChange) {
              this.handles = generateHandlers(nzRange.currentValue ? 2 : 1);
              this.setValue(this.formatValue(null));
          }
      };
      NzSliderComponent.prototype.ngOnDestroy = function () {
          this.unsubscribeDrag();
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzSliderComponent.prototype.writeValue = function (val) {
          this.setValue(val, true);
      };
      NzSliderComponent.prototype.onValueChange = function (_value) { };
      NzSliderComponent.prototype.onTouched = function () { };
      NzSliderComponent.prototype.registerOnChange = function (fn) {
          this.onValueChange = fn;
      };
      NzSliderComponent.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      NzSliderComponent.prototype.setDisabledState = function (isDisabled) {
          this.nzDisabled = isDisabled;
          this.toggleDragDisabled(isDisabled);
      };
      /**
       * Event handler is only triggered when a slider handler is focused.
       */
      NzSliderComponent.prototype.onKeyDown = function (e) {
          if (this.nzDisabled) {
              return;
          }
          var code = e.keyCode;
          var isIncrease = code === keycodes.RIGHT_ARROW || code === keycodes.UP_ARROW;
          var isDecrease = code === keycodes.LEFT_ARROW || code === keycodes.DOWN_ARROW;
          if (!(isIncrease || isDecrease)) {
              return;
          }
          e.preventDefault();
          var step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1);
          step = this.dir === 'rtl' ? step * -1 : step;
          var newVal = this.nzRange ? this.value[this.activeValueIndex] + step : this.value + step;
          this.setActiveValue(util.ensureNumberInRange(newVal, this.nzMin, this.nzMax));
      };
      NzSliderComponent.prototype.onHandleFocusIn = function (index) {
          this.activeValueIndex = index;
      };
      NzSliderComponent.prototype.setValue = function (value, isWriteValue) {
          if (isWriteValue === void 0) { isWriteValue = false; }
          if (isWriteValue) {
              this.value = this.formatValue(value);
              this.updateTrackAndHandles();
          }
          else if (!valuesEqual(this.value, value)) {
              this.value = value;
              this.updateTrackAndHandles();
              this.onValueChange(this.getValue(true));
          }
      };
      NzSliderComponent.prototype.getValue = function (cloneAndSort) {
          if (cloneAndSort === void 0) { cloneAndSort = false; }
          if (cloneAndSort && this.value && isValueRange(this.value)) {
              return __spread(this.value).sort(function (a, b) { return a - b; });
          }
          return this.value;
      };
      /**
       * Clone & sort current value and convert them to offsets, then return the new one.
       */
      NzSliderComponent.prototype.getValueToOffset = function (value) {
          var _this = this;
          var normalizedValue = value;
          if (typeof normalizedValue === 'undefined') {
              normalizedValue = this.getValue(true);
          }
          return isValueRange(normalizedValue) ? normalizedValue.map(function (val) { return _this.valueToOffset(val); }) : this.valueToOffset(normalizedValue);
      };
      /**
       * Find the closest value to be activated.
       */
      NzSliderComponent.prototype.setActiveValueIndex = function (pointerValue) {
          var value = this.getValue();
          if (isValueRange(value)) {
              var minimal_1 = null;
              var gap_1;
              var activeIndex_1 = -1;
              value.forEach(function (val, index) {
                  gap_1 = Math.abs(pointerValue - val);
                  if (minimal_1 === null || gap_1 < minimal_1) {
                      minimal_1 = gap_1;
                      activeIndex_1 = index;
                  }
              });
              this.activeValueIndex = activeIndex_1;
              this.handlerComponents.toArray()[activeIndex_1].focus();
          }
          else {
              this.handlerComponents.toArray()[0].focus();
          }
      };
      NzSliderComponent.prototype.setActiveValue = function (pointerValue) {
          if (isValueRange(this.value)) {
              var newValue = __spread(this.value);
              newValue[this.activeValueIndex] = pointerValue;
              this.setValue(newValue);
          }
          else {
              this.setValue(pointerValue);
          }
      };
      /**
       * Update track and handles' position and length.
       */
      NzSliderComponent.prototype.updateTrackAndHandles = function () {
          var _b, _c;
          var value = this.getValue();
          var offset = this.getValueToOffset(value);
          var valueSorted = this.getValue(true);
          var offsetSorted = this.getValueToOffset(valueSorted);
          var boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
          var trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
          this.handles.forEach(function (handle, index) {
              handle.offset = isValueRange(offset) ? offset[index] : offset;
              handle.value = isValueRange(value) ? value[index] : value || 0;
          });
          _b = __read(boundParts, 2), this.bounds.lower = _b[0], this.bounds.upper = _b[1];
          _c = __read(trackParts, 2), this.track.offset = _c[0], this.track.length = _c[1];
          this.cdr.markForCheck();
      };
      NzSliderComponent.prototype.onDragStart = function (value) {
          this.toggleDragMoving(true);
          this.cacheSliderProperty();
          this.setActiveValueIndex(this.getLogicalValue(value));
          this.setActiveValue(this.getLogicalValue(value));
          this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
      };
      NzSliderComponent.prototype.onDragMove = function (value) {
          this.setActiveValue(this.getLogicalValue(value));
          this.cdr.markForCheck();
      };
      NzSliderComponent.prototype.getLogicalValue = function (value) {
          if (this.nzReverse) {
              if (!this.nzVertical && this.dir === 'rtl') {
                  return value;
              }
              return this.nzMax - value + this.nzMin;
          }
          if (!this.nzVertical && this.dir === 'rtl') {
              return this.nzMax - value + this.nzMin;
          }
          return value;
      };
      NzSliderComponent.prototype.onDragEnd = function () {
          this.nzOnAfterChange.emit(this.getValue(true));
          this.toggleDragMoving(false);
          this.cacheSliderProperty(true);
          this.hideAllHandleTooltip();
          this.cdr.markForCheck();
      };
      /**
       * Create user interactions handles.
       */
      NzSliderComponent.prototype.bindDraggingHandlers = function () {
          var _this = this;
          if (!this.platform.isBrowser) {
              return;
          }
          var sliderDOM = this.slider.nativeElement;
          var orientField = this.nzVertical ? 'pageY' : 'pageX';
          var mouse = {
              start: 'mousedown',
              move: 'mousemove',
              end: 'mouseup',
              pluckKey: [orientField]
          };
          var touch = {
              start: 'touchstart',
              move: 'touchmove',
              end: 'touchend',
              pluckKey: ['touches', '0', orientField],
              filter: function (e) { return e instanceof TouchEvent; }
          };
          [mouse, touch].forEach(function (source) {
              var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _b = source.filter, filterFunc = _b === void 0 ? function () { return true; } : _b;
              source.startPlucked$ = rxjs.fromEvent(sliderDOM, start).pipe(operators.filter(filterFunc), operators.tap(util.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.map(function (position) { return _this.findClosestValue(position); }));
              source.end$ = rxjs.fromEvent(document, end);
              source.moveResolved$ = rxjs.fromEvent(document, move).pipe(operators.filter(filterFunc), operators.tap(util.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.distinctUntilChanged(), operators.map(function (position) { return _this.findClosestValue(position); }), operators.distinctUntilChanged(), operators.takeUntil(source.end$));
          });
          this.dragStart$ = rxjs.merge(mouse.startPlucked$, touch.startPlucked$);
          this.dragMove$ = rxjs.merge(mouse.moveResolved$, touch.moveResolved$);
          this.dragEnd$ = rxjs.merge(mouse.end$, touch.end$);
      };
      NzSliderComponent.prototype.subscribeDrag = function (periods) {
          if (periods === void 0) { periods = ['start', 'move', 'end']; }
          if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
              this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
          }
          if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
              this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
          }
          if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
              this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
          }
      };
      NzSliderComponent.prototype.unsubscribeDrag = function (periods) {
          if (periods === void 0) { periods = ['start', 'move', 'end']; }
          if (periods.indexOf('start') !== -1 && this.dragStart_) {
              this.dragStart_.unsubscribe();
              this.dragStart_ = null;
          }
          if (periods.indexOf('move') !== -1 && this.dragMove_) {
              this.dragMove_.unsubscribe();
              this.dragMove_ = null;
          }
          if (periods.indexOf('end') !== -1 && this.dragEnd_) {
              this.dragEnd_.unsubscribe();
              this.dragEnd_ = null;
          }
      };
      NzSliderComponent.prototype.toggleDragMoving = function (movable) {
          var periods = ['move', 'end'];
          if (movable) {
              this.sliderService.isDragging = true;
              this.subscribeDrag(periods);
          }
          else {
              this.sliderService.isDragging = false;
              this.unsubscribeDrag(periods);
          }
      };
      NzSliderComponent.prototype.toggleDragDisabled = function (disabled) {
          if (disabled) {
              this.unsubscribeDrag();
          }
          else {
              this.subscribeDrag(['start']);
          }
      };
      NzSliderComponent.prototype.findClosestValue = function (position) {
          var sliderStart = this.getSliderStartPosition();
          var sliderLength = this.getSliderLength();
          var ratio = util.ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
          var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
          var points = this.nzMarks === null
              ? []
              : Object.keys(this.nzMarks)
                  .map(parseFloat)
                  .sort(function (a, b) { return a - b; });
          if (this.nzStep !== 0 && !this.nzDots) {
              var closestOne = Math.round(val / this.nzStep) * this.nzStep;
              points.push(closestOne);
          }
          var gaps = points.map(function (point) { return Math.abs(val - point); });
          var closest = points[gaps.indexOf(Math.min.apply(Math, __spread(gaps)))];
          // return parseFloat(closest.toFixed(getPrecision(this.nzStep)));
          return this.nzStep === 0 ? closest : parseFloat(closest.toFixed(util.getPrecision(this.nzStep)));
      };
      NzSliderComponent.prototype.valueToOffset = function (value) {
          return util.getPercent(this.nzMin, this.nzMax, value);
      };
      NzSliderComponent.prototype.getSliderStartPosition = function () {
          if (this.cacheSliderStart !== null) {
              return this.cacheSliderStart;
          }
          var offset = util.getElementOffset(this.slider.nativeElement);
          return this.nzVertical ? offset.top : offset.left;
      };
      NzSliderComponent.prototype.getSliderLength = function () {
          if (this.cacheSliderLength !== null) {
              return this.cacheSliderLength;
          }
          var sliderDOM = this.slider.nativeElement;
          return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
      };
      /**
       * Cache DOM layout/reflow operations for performance (may not necessary?)
       */
      NzSliderComponent.prototype.cacheSliderProperty = function (remove) {
          if (remove === void 0) { remove = false; }
          this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
          this.cacheSliderLength = remove ? null : this.getSliderLength();
      };
      NzSliderComponent.prototype.formatValue = function (value) {
          var _this = this;
          if (util.isNil(value)) {
              return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
          }
          else if (assertValueValid(value, this.nzRange)) {
              return isValueRange(value)
                  ? value.map(function (val) { return util.ensureNumberInRange(val, _this.nzMin, _this.nzMax); })
                  : util.ensureNumberInRange(value, this.nzMin, this.nzMax);
          }
          else {
              return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
          }
      };
      /**
       * Show one handle's tooltip and hide others'.
       */
      NzSliderComponent.prototype.showHandleTooltip = function (handleIndex) {
          if (handleIndex === void 0) { handleIndex = 0; }
          this.handles.forEach(function (handle, index) {
              handle.active = index === handleIndex;
          });
      };
      NzSliderComponent.prototype.hideAllHandleTooltip = function () {
          this.handles.forEach(function (handle) { return (handle.active = false); });
      };
      NzSliderComponent.prototype.generateMarkItems = function (marks) {
          var marksArray = [];
          for (var key in marks) {
              if (marks.hasOwnProperty(key)) {
                  var mark = marks[key];
                  var val = typeof key === 'number' ? key : parseFloat(key);
                  if (val >= this.nzMin && val <= this.nzMax) {
                      marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
                  }
              }
          }
          return marksArray.length ? marksArray : null;
      };
      return NzSliderComponent;
  }());
  NzSliderComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  selector: 'nz-slider',
                  exportAs: 'nzSlider',
                  preserveWhitespaces: false,
                  providers: [
                      {
                          provide: forms.NG_VALUE_ACCESSOR,
                          useExisting: core.forwardRef(function () { return NzSliderComponent; }),
                          multi: true
                      },
                      NzSliderService
                  ],
                  host: {
                      '(keydown)': 'onKeyDown($event)'
                  },
                  template: "\n    <div\n      #slider\n      class=\"ant-slider\"\n      [class.ant-slider-rtl]=\"dir === 'rtl'\"\n      [class.ant-slider-disabled]=\"nzDisabled\"\n      [class.ant-slider-vertical]=\"nzVertical\"\n      [class.ant-slider-with-marks]=\"marksArray\"\n    >\n      <div class=\"ant-slider-rail\"></div>\n      <nz-slider-track\n        [vertical]=\"nzVertical\"\n        [included]=\"nzIncluded\"\n        [offset]=\"track.offset!\"\n        [length]=\"track.length!\"\n        [reverse]=\"nzReverse\"\n        [dir]=\"dir\"\n      ></nz-slider-track>\n      <nz-slider-step\n        *ngIf=\"marksArray\"\n        [vertical]=\"nzVertical\"\n        [min]=\"nzMin\"\n        [max]=\"nzMax\"\n        [lowerBound]=\"$any(bounds.lower)\"\n        [upperBound]=\"$any(bounds.upper)\"\n        [marksArray]=\"marksArray\"\n        [included]=\"nzIncluded\"\n        [reverse]=\"nzReverse\"\n      ></nz-slider-step>\n      <nz-slider-handle\n        *ngFor=\"let handle of handles; index as handleIndex\"\n        [vertical]=\"nzVertical\"\n        [reverse]=\"nzReverse\"\n        [offset]=\"handle.offset!\"\n        [value]=\"handle.value!\"\n        [active]=\"handle.active\"\n        [tooltipFormatter]=\"nzTipFormatter\"\n        [tooltipVisible]=\"nzTooltipVisible\"\n        [tooltipPlacement]=\"nzTooltipPlacement\"\n        [dir]=\"dir\"\n        (focusin)=\"onHandleFocusIn(handleIndex)\"\n      ></nz-slider-handle>\n      <nz-slider-marks\n        *ngIf=\"marksArray\"\n        [vertical]=\"nzVertical\"\n        [min]=\"nzMin\"\n        [max]=\"nzMax\"\n        [lowerBound]=\"$any(bounds.lower)\"\n        [upperBound]=\"$any(bounds.upper)\"\n        [marksArray]=\"marksArray\"\n        [included]=\"nzIncluded\"\n        [reverse]=\"nzReverse\"\n      ></nz-slider-marks>\n    </div>\n  "
              },] }
  ];
  NzSliderComponent.ctorParameters = function () { return [
      { type: NzSliderService },
      { type: core.ChangeDetectorRef },
      { type: platform.Platform },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzSliderComponent.propDecorators = {
      slider: [{ type: core.ViewChild, args: ['slider', { static: true },] }],
      handlerComponents: [{ type: core.ViewChildren, args: [NzSliderHandleComponent,] }],
      nzDisabled: [{ type: core.Input }],
      nzDots: [{ type: core.Input }],
      nzIncluded: [{ type: core.Input }],
      nzRange: [{ type: core.Input }],
      nzVertical: [{ type: core.Input }],
      nzReverse: [{ type: core.Input }],
      nzDefaultValue: [{ type: core.Input }],
      nzMarks: [{ type: core.Input }],
      nzMax: [{ type: core.Input }],
      nzMin: [{ type: core.Input }],
      nzStep: [{ type: core.Input }],
      nzTooltipVisible: [{ type: core.Input }],
      nzTooltipPlacement: [{ type: core.Input }],
      nzTipFormatter: [{ type: core.Input }],
      nzOnAfterChange: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzSliderComponent.prototype, "nzDots", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzSliderComponent.prototype, "nzIncluded", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzSliderComponent.prototype, "nzRange", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzSliderComponent.prototype, "nzVertical", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzSliderComponent.prototype, "nzReverse", void 0);
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Object)
  ], NzSliderComponent.prototype, "nzMax", void 0);
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Object)
  ], NzSliderComponent.prototype, "nzMin", void 0);
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Object)
  ], NzSliderComponent.prototype, "nzStep", void 0);
  function getValueTypeNotMatchError() {
      return new Error("The \"nzRange\" can't match the \"ngModel\"'s type, please check these properties: \"nzRange\", \"ngModel\", \"nzDefaultValue\".");
  }
  function isValueRange(value) {
      if (value instanceof Array) {
          return value.length === 2;
      }
      else {
          return false;
      }
  }
  function generateHandlers(amount) {
      return Array(amount)
          .fill(0)
          .map(function () { return ({ offset: null, value: null, active: false }); });
  }
  /**
   * Check if value is valid and throw error if value-type/range not match.
   */
  function assertValueValid(value, isRange) {
      if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some(function (v) { return isNaN(v); }))) {
          return false;
      }
      return assertValueTypeMatch(value, isRange);
  }
  /**
   * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
   */
  function assertValueTypeMatch(value, isRange) {
      if (isRange === void 0) { isRange = false; }
      if (isValueRange(value) !== isRange) {
          throw getValueTypeNotMatchError();
      }
      return true;
  }
  function valuesEqual(valA, valB) {
      if (typeof valA !== typeof valB) {
          return false;
      }
      return isValueRange(valA) && isValueRange(valB) ? util.arraysEqual(valA, valB) : valA === valB;
  }

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSliderMarksComponent = /** @class */ (function () {
      function NzSliderMarksComponent() {
          this.lowerBound = null;
          this.upperBound = null;
          this.marksArray = [];
          this.vertical = false;
          this.included = false;
          this.marks = [];
      }
      NzSliderMarksComponent.prototype.ngOnChanges = function (changes) {
          var marksArray = changes.marksArray, lowerBound = changes.lowerBound, upperBound = changes.upperBound, reverse = changes.reverse;
          if (marksArray || reverse) {
              this.buildMarks();
          }
          if (marksArray || lowerBound || upperBound || reverse) {
              this.togglePointActive();
          }
      };
      NzSliderMarksComponent.prototype.trackById = function (_index, mark) {
          return mark.value;
      };
      NzSliderMarksComponent.prototype.buildMarks = function () {
          var _this = this;
          var range = this.max - this.min;
          this.marks = this.marksArray.map(function (mark) {
              var value = mark.value, offset = mark.offset, config = mark.config;
              var style = _this.getMarkStyles(value, range, config);
              var label = isConfigObject(config) ? config.label : config;
              return {
                  label: label,
                  offset: offset,
                  style: style,
                  value: value,
                  config: config,
                  active: false
              };
          });
      };
      NzSliderMarksComponent.prototype.getMarkStyles = function (value, range, config) {
          var style;
          var markValue = this.reverse ? this.max + this.min - value : value;
          if (this.vertical) {
              style = {
                  marginBottom: '-50%',
                  bottom: ((markValue - this.min) / range) * 100 + "%"
              };
          }
          else {
              style = {
                  transform: "translate3d(-50%, 0, 0)",
                  left: ((markValue - this.min) / range) * 100 + "%"
              };
          }
          if (isConfigObject(config) && config.style) {
              style = Object.assign(Object.assign({}, style), config.style);
          }
          return style;
      };
      NzSliderMarksComponent.prototype.togglePointActive = function () {
          var _this = this;
          if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
              this.marks.forEach(function (mark) {
                  var value = mark.value;
                  var isActive = (!_this.included && value === _this.upperBound) || (_this.included && value <= _this.upperBound && value >= _this.lowerBound);
                  mark.active = isActive;
              });
          }
      };
      return NzSliderMarksComponent;
  }());
  NzSliderMarksComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  preserveWhitespaces: false,
                  selector: 'nz-slider-marks',
                  exportAs: 'nzSliderMarks',
                  template: "\n    <div class=\"ant-slider-mark\">\n      <span\n        class=\"ant-slider-mark-text\"\n        *ngFor=\"let attr of marks; trackBy: trackById\"\n        [class.ant-slider-mark-active]=\"attr.active\"\n        [ngStyle]=\"attr.style!\"\n        [innerHTML]=\"attr.label\"\n      ></span>\n    </div>\n  "
              },] }
  ];
  NzSliderMarksComponent.propDecorators = {
      lowerBound: [{ type: core.Input }],
      upperBound: [{ type: core.Input }],
      marksArray: [{ type: core.Input }],
      min: [{ type: core.Input }],
      max: [{ type: core.Input }],
      vertical: [{ type: core.Input }],
      included: [{ type: core.Input }],
      reverse: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderMarksComponent.prototype, "vertical", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderMarksComponent.prototype, "included", void 0);
  function isConfigObject(config) {
      return typeof config !== 'string';
  }

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSliderStepComponent = /** @class */ (function () {
      function NzSliderStepComponent() {
          this.lowerBound = null;
          this.upperBound = null;
          this.marksArray = [];
          this.vertical = false;
          this.included = false;
          this.steps = [];
      }
      NzSliderStepComponent.prototype.ngOnChanges = function (changes) {
          var marksArray = changes.marksArray, lowerBound = changes.lowerBound, upperBound = changes.upperBound, reverse = changes.reverse;
          if (marksArray || reverse) {
              this.buildSteps();
          }
          if (marksArray || lowerBound || upperBound || reverse) {
              this.togglePointActive();
          }
      };
      NzSliderStepComponent.prototype.trackById = function (_index, step) {
          return step.value;
      };
      NzSliderStepComponent.prototype.buildSteps = function () {
          var _this = this;
          var orient = this.vertical ? 'bottom' : 'left';
          this.steps = this.marksArray.map(function (mark) {
              var _a;
              var value = mark.value, config = mark.config;
              var offset = mark.offset;
              var range = _this.max - _this.min;
              if (_this.reverse) {
                  offset = ((_this.max - value) / range) * 100;
              }
              return {
                  value: value,
                  offset: offset,
                  config: config,
                  active: false,
                  style: (_a = {},
                      _a[orient] = offset + "%",
                      _a)
              };
          });
      };
      NzSliderStepComponent.prototype.togglePointActive = function () {
          var _this = this;
          if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
              this.steps.forEach(function (step) {
                  var value = step.value;
                  var isActive = (!_this.included && value === _this.upperBound) || (_this.included && value <= _this.upperBound && value >= _this.lowerBound);
                  step.active = isActive;
              });
          }
      };
      return NzSliderStepComponent;
  }());
  NzSliderStepComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  selector: 'nz-slider-step',
                  exportAs: 'nzSliderStep',
                  preserveWhitespaces: false,
                  template: "\n    <div class=\"ant-slider-step\">\n      <span\n        class=\"ant-slider-dot\"\n        *ngFor=\"let mark of steps; trackBy: trackById\"\n        [class.ant-slider-dot-active]=\"mark.active\"\n        [ngStyle]=\"mark.style!\"\n      ></span>\n    </div>\n  "
              },] }
  ];
  NzSliderStepComponent.propDecorators = {
      lowerBound: [{ type: core.Input }],
      upperBound: [{ type: core.Input }],
      marksArray: [{ type: core.Input }],
      min: [{ type: core.Input }],
      max: [{ type: core.Input }],
      vertical: [{ type: core.Input }],
      included: [{ type: core.Input }],
      reverse: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderStepComponent.prototype, "vertical", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderStepComponent.prototype, "included", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSliderTrackComponent = /** @class */ (function () {
      function NzSliderTrackComponent() {
          this.offset = 0;
          this.reverse = false;
          this.dir = 'ltr';
          this.length = 0;
          this.vertical = false;
          this.included = false;
          this.style = {};
      }
      NzSliderTrackComponent.prototype.ngOnChanges = function () {
          var _a;
          var vertical = this.vertical;
          var reverse = this.reverse;
          var visibility = this.included ? 'visible' : 'hidden';
          var offset = this.offset;
          var length = this.length;
          var positonStyle = vertical
              ? (_a = {},
                  _a[reverse ? 'top' : 'bottom'] = offset + "%",
                  _a[reverse ? 'bottom' : 'top'] = 'auto',
                  _a.height = length + "%",
                  _a.visibility = visibility,
                  _a) : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { width: length + "%", visibility: visibility });
          this.style = positonStyle;
      };
      NzSliderTrackComponent.prototype.getHorizontalStylePosition = function () {
          var left = this.reverse ? 'auto' : this.offset + "%";
          var right = this.reverse ? this.offset + "%" : 'auto';
          if (this.dir === 'rtl') {
              var tmp = left;
              left = right;
              right = tmp;
          }
          return { left: left, right: right };
      };
      return NzSliderTrackComponent;
  }());
  NzSliderTrackComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  selector: 'nz-slider-track',
                  exportAs: 'nzSliderTrack',
                  preserveWhitespaces: false,
                  template: "\n    <div class=\"ant-slider-track\" [ngStyle]=\"style\"></div>\n  "
              },] }
  ];
  NzSliderTrackComponent.propDecorators = {
      offset: [{ type: core.Input }],
      reverse: [{ type: core.Input }],
      dir: [{ type: core.Input }],
      length: [{ type: core.Input }],
      vertical: [{ type: core.Input }],
      included: [{ type: core.Input }]
  };
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Number)
  ], NzSliderTrackComponent.prototype, "offset", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzSliderTrackComponent.prototype, "reverse", void 0);
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Number)
  ], NzSliderTrackComponent.prototype, "length", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderTrackComponent.prototype, "vertical", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSliderTrackComponent.prototype, "included", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSliderModule = /** @class */ (function () {
      function NzSliderModule() {
      }
      return NzSliderModule;
  }());
  NzSliderModule.decorators = [
      { type: core.NgModule, args: [{
                  exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                  declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                  imports: [bidi.BidiModule, common.CommonModule, platform.PlatformModule, tooltip.NzToolTipModule]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzMarks = /** @class */ (function () {
      function NzMarks() {
      }
      return NzMarks;
  }());

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzMarks = NzMarks;
  exports.NzSliderComponent = NzSliderComponent;
  exports.NzSliderModule = NzSliderModule;
  exports.ɵNzSliderHandleComponent = NzSliderHandleComponent;
  exports.ɵNzSliderMarksComponent = NzSliderMarksComponent;
  exports.ɵNzSliderService = NzSliderService;
  exports.ɵNzSliderStepComponent = NzSliderStepComponent;
  exports.ɵNzSliderTrackComponent = NzSliderTrackComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-slider.umd.js.map
