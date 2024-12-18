(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/input'), require('ng-zorro-antd/core/util'), require('@angular/cdk/keycodes'), require('@angular/cdk/portal'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/animation')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/auto-complete', ['exports', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/input', 'ng-zorro-antd/core/util', '@angular/cdk/keycodes', '@angular/cdk/portal', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/animation'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['auto-complete'] = {}), global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].input, global['ng-zorro-antd'].core.util, global.ng.cdk.keycodes, global.ng.cdk.portal, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core.animation));
}(this, (function (exports, bidi, overlay, common, core, forms, noAnimation, outlet, input, util, keycodes, portal, rxjs, operators, animation) { 'use strict';

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzAutocompleteOptgroupComponent = /** @class */ (function () {
      function NzAutocompleteOptgroupComponent() {
      }
      return NzAutocompleteOptgroupComponent;
  }());
  NzAutocompleteOptgroupComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-auto-optgroup',
                  exportAs: 'nzAutoOptgroup',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <div class=\"ant-select-item ant-select-item-group\">\n      <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{ nzLabel }}</ng-container>\n    </div>\n    <ng-content select=\"nz-auto-option\"></ng-content>\n  "
              },] }
  ];
  NzAutocompleteOptgroupComponent.ctorParameters = function () { return []; };
  NzAutocompleteOptgroupComponent.propDecorators = {
      nzLabel: [{ type: core.Input }]
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
  var NzOptionSelectionChange = /** @class */ (function () {
      function NzOptionSelectionChange(source, isUserInput) {
          if (isUserInput === void 0) { isUserInput = false; }
          this.source = source;
          this.isUserInput = isUserInput;
      }
      return NzOptionSelectionChange;
  }());
  var NzAutocompleteOptionComponent = /** @class */ (function () {
      function NzAutocompleteOptionComponent(changeDetectorRef, element, nzAutocompleteOptgroupComponent) {
          this.changeDetectorRef = changeDetectorRef;
          this.element = element;
          this.nzAutocompleteOptgroupComponent = nzAutocompleteOptgroupComponent;
          this.nzDisabled = false;
          this.selectionChange = new core.EventEmitter();
          this.mouseEntered = new core.EventEmitter();
          this.active = false;
          this.selected = false;
      }
      NzAutocompleteOptionComponent.prototype.select = function (emit) {
          if (emit === void 0) { emit = true; }
          this.selected = true;
          this.changeDetectorRef.markForCheck();
          if (emit) {
              this.emitSelectionChangeEvent();
          }
      };
      NzAutocompleteOptionComponent.prototype.onMouseEnter = function () {
          this.mouseEntered.emit(this);
      };
      NzAutocompleteOptionComponent.prototype.deselect = function () {
          this.selected = false;
          this.changeDetectorRef.markForCheck();
          this.emitSelectionChangeEvent();
      };
      /** Git display label */
      NzAutocompleteOptionComponent.prototype.getLabel = function () {
          return this.nzLabel || this.nzValue.toString();
      };
      /** Set active (only styles) */
      NzAutocompleteOptionComponent.prototype.setActiveStyles = function () {
          if (!this.active) {
              this.active = true;
              this.changeDetectorRef.markForCheck();
          }
      };
      /** Unset active (only styles) */
      NzAutocompleteOptionComponent.prototype.setInactiveStyles = function () {
          if (this.active) {
              this.active = false;
              this.changeDetectorRef.markForCheck();
          }
      };
      NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = function () {
          util.scrollIntoView(this.element.nativeElement);
      };
      NzAutocompleteOptionComponent.prototype.selectViaInteraction = function () {
          if (!this.nzDisabled) {
              this.selected = !this.selected;
              if (this.selected) {
                  this.setActiveStyles();
              }
              else {
                  this.setInactiveStyles();
              }
              this.emitSelectionChangeEvent(true);
              this.changeDetectorRef.markForCheck();
          }
      };
      NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = function (isUserInput) {
          if (isUserInput === void 0) { isUserInput = false; }
          this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
      };
      return NzAutocompleteOptionComponent;
  }());
  NzAutocompleteOptionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-auto-option',
                  exportAs: 'nzAutoOption',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <div class=\"ant-select-item-option-content\">\n      <ng-content></ng-content>\n    </div>\n  ",
                  host: {
                      role: 'menuitem',
                      class: 'ant-select-item ant-select-item-option',
                      '[class.ant-select-item-option-grouped]': 'nzAutocompleteOptgroupComponent',
                      '[class.ant-select-item-option-selected]': 'selected',
                      '[class.ant-select-item-option-active]': 'active',
                      '[class.ant-select-item-option-disabled]': 'nzDisabled',
                      '[attr.aria-selected]': 'selected.toString()',
                      '[attr.aria-disabled]': 'nzDisabled.toString()',
                      '(click)': 'selectViaInteraction()',
                      '(mouseenter)': 'onMouseEnter()',
                      '(mousedown)': '$event.preventDefault()'
                  }
              },] }
  ];
  NzAutocompleteOptionComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef },
      { type: NzAutocompleteOptgroupComponent, decorators: [{ type: core.Optional }] }
  ]; };
  NzAutocompleteOptionComponent.propDecorators = {
      nzValue: [{ type: core.Input }],
      nzLabel: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      selectionChange: [{ type: core.Output }],
      mouseEntered: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: forms.NG_VALUE_ACCESSOR,
      useExisting: core.forwardRef(function () { return NzAutocompleteTriggerDirective; }),
      multi: true
  };
  function getNzAutocompleteMissingPanelError() {
      return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
          'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
          "you're attempting to open it after the ngAfterContentInit hook.");
  }
  var NzAutocompleteTriggerDirective = /** @class */ (function () {
      function NzAutocompleteTriggerDirective(elementRef, overlay, viewContainerRef, nzInputGroupWhitSuffixOrPrefixDirective, document) {
          this.elementRef = elementRef;
          this.overlay = overlay;
          this.viewContainerRef = viewContainerRef;
          this.nzInputGroupWhitSuffixOrPrefixDirective = nzInputGroupWhitSuffixOrPrefixDirective;
          this.document = document;
          this.onChange = function () { };
          this.onTouched = function () { };
          this.panelOpen = false;
          this.destroy$ = new rxjs.Subject();
          this.overlayRef = null;
          this.portal = null;
          this.previousValue = null;
      }
      Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
          /** Current active option */
          get: function () {
              if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                  return this.nzAutocomplete.activeItem;
              }
              else {
                  return null;
              }
          },
          enumerable: false,
          configurable: true
      });
      NzAutocompleteTriggerDirective.prototype.ngAfterViewInit = function () {
          var _this = this;
          if (this.nzAutocomplete) {
              this.nzAutocomplete.animationStateChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function (event) {
                  if (event.toState === 'void') {
                      if (_this.overlayRef) {
                          _this.overlayRef.dispose();
                          _this.overlayRef = null;
                      }
                  }
              });
          }
      };
      NzAutocompleteTriggerDirective.prototype.ngOnDestroy = function () {
          this.destroyPanel();
      };
      NzAutocompleteTriggerDirective.prototype.writeValue = function (value) {
          var _this = this;
          Promise.resolve(null).then(function () { return _this.setTriggerValue(value); });
      };
      NzAutocompleteTriggerDirective.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      NzAutocompleteTriggerDirective.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      NzAutocompleteTriggerDirective.prototype.setDisabledState = function (isDisabled) {
          var element = this.elementRef.nativeElement;
          element.disabled = isDisabled;
          this.closePanel();
      };
      NzAutocompleteTriggerDirective.prototype.openPanel = function () {
          this.previousValue = this.elementRef.nativeElement.value;
          this.attachOverlay();
          this.updateStatus();
      };
      NzAutocompleteTriggerDirective.prototype.closePanel = function () {
          if (this.panelOpen) {
              this.nzAutocomplete.isOpen = this.panelOpen = false;
              if (this.overlayRef && this.overlayRef.hasAttached()) {
                  this.overlayRef.detach();
                  this.selectionChangeSubscription.unsubscribe();
                  this.overlayOutsideClickSubscription.unsubscribe();
                  this.optionsChangeSubscription.unsubscribe();
                  this.portal = null;
              }
          }
      };
      NzAutocompleteTriggerDirective.prototype.handleKeydown = function (event) {
          var keyCode = event.keyCode;
          var isArrowKey = keyCode === keycodes.UP_ARROW || keyCode === keycodes.DOWN_ARROW;
          if (keyCode === keycodes.ESCAPE) {
              event.preventDefault();
          }
          if (this.panelOpen && (keyCode === keycodes.ESCAPE || keyCode === keycodes.TAB)) {
              // Reset value when tab / ESC close
              if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                  this.setTriggerValue(this.previousValue);
              }
              this.closePanel();
          }
          else if (this.panelOpen && keyCode === keycodes.ENTER) {
              if (this.nzAutocomplete.showPanel) {
                  event.preventDefault();
                  if (this.activeOption) {
                      this.activeOption.selectViaInteraction();
                  }
                  else {
                      this.closePanel();
                  }
              }
          }
          else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
              event.stopPropagation();
              event.preventDefault();
              if (keyCode === keycodes.UP_ARROW) {
                  this.nzAutocomplete.setPreviousItemActive();
              }
              else {
                  this.nzAutocomplete.setNextItemActive();
              }
              if (this.activeOption) {
                  this.activeOption.scrollIntoViewIfNeeded();
              }
              this.doBackfill();
          }
      };
      NzAutocompleteTriggerDirective.prototype.handleInput = function (event) {
          var target = event.target;
          var document = this.document;
          var value = target.value;
          if (target.type === 'number') {
              value = value === '' ? null : parseFloat(value);
          }
          if (this.previousValue !== value) {
              this.previousValue = value;
              this.onChange(value);
              if (this.canOpen() && document.activeElement === event.target) {
                  this.openPanel();
              }
          }
      };
      NzAutocompleteTriggerDirective.prototype.handleFocus = function () {
          if (this.canOpen()) {
              this.openPanel();
          }
      };
      NzAutocompleteTriggerDirective.prototype.handleBlur = function () {
          this.onTouched();
      };
      /**
       * Subscription data source changes event
       */
      NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = function () {
          var _this = this;
          var optionChanges = this.nzAutocomplete.options.changes.pipe(operators.tap(function () { return _this.positionStrategy.reapplyLastPosition(); }), operators.delay(0));
          return optionChanges.subscribe(function () {
              _this.resetActiveItem();
              if (_this.panelOpen) {
                  _this.overlayRef.updatePosition();
              }
          });
      };
      /**
       * Subscription option changes event and set the value
       */
      NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = function () {
          var _this = this;
          return this.nzAutocomplete.selectionChange.subscribe(function (option) {
              _this.setValueAndClose(option);
          });
      };
      NzAutocompleteTriggerDirective.prototype.subscribeOverlayOutsideClick = function () {
          var _this = this;
          return this.overlayRef.outsidePointerEvents()
              .pipe(operators.filter(function (e) { return !_this.elementRef.nativeElement.contains(e.target); }))
              .subscribe(function () {
              _this.closePanel();
          });
      };
      NzAutocompleteTriggerDirective.prototype.attachOverlay = function () {
          var _this = this;
          if (!this.nzAutocomplete) {
              throw getNzAutocompleteMissingPanelError();
          }
          if (!this.portal && this.nzAutocomplete.template) {
              this.portal = new portal.TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
          }
          if (!this.overlayRef) {
              this.overlayRef = this.overlay.create(this.getOverlayConfig());
          }
          if (this.overlayRef && !this.overlayRef.hasAttached()) {
              this.overlayRef.attach(this.portal);
              this.selectionChangeSubscription = this.subscribeSelectionChange();
              this.optionsChangeSubscription = this.subscribeOptionsChange();
              this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
              this.overlayRef
                  .detachments()
                  .pipe(operators.takeUntil(this.destroy$))
                  .subscribe(function () {
                  _this.closePanel();
              });
          }
          this.nzAutocomplete.isOpen = this.panelOpen = true;
      };
      NzAutocompleteTriggerDirective.prototype.updateStatus = function () {
          if (this.overlayRef) {
              this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
          }
          this.nzAutocomplete.setVisibility();
          this.resetActiveItem();
          if (this.activeOption) {
              this.activeOption.scrollIntoViewIfNeeded();
          }
      };
      NzAutocompleteTriggerDirective.prototype.destroyPanel = function () {
          if (this.overlayRef) {
              this.closePanel();
          }
      };
      NzAutocompleteTriggerDirective.prototype.getOverlayConfig = function () {
          return new overlay.OverlayConfig({
              positionStrategy: this.getOverlayPosition(),
              disposeOnNavigation: true,
              scrollStrategy: this.overlay.scrollStrategies.reposition(),
              // default host element width
              width: this.nzAutocomplete.nzWidth || this.getHostWidth()
          });
      };
      NzAutocompleteTriggerDirective.prototype.getConnectedElement = function () {
          return this.nzInputGroupWhitSuffixOrPrefixDirective ? this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef : this.elementRef;
      };
      NzAutocompleteTriggerDirective.prototype.getHostWidth = function () {
          return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
      };
      NzAutocompleteTriggerDirective.prototype.getOverlayPosition = function () {
          var positions = [
              new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
              new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
          ];
          this.positionStrategy = this.overlay
              .position()
              .flexibleConnectedTo(this.getConnectedElement())
              .withFlexibleDimensions(false)
              .withPush(false)
              .withPositions(positions)
              .withTransformOriginOn('.ant-select-dropdown');
          return this.positionStrategy;
      };
      NzAutocompleteTriggerDirective.prototype.resetActiveItem = function () {
          var index = this.nzAutocomplete.getOptionIndex(this.previousValue);
          this.nzAutocomplete.clearSelectedOptions(null, true);
          if (index !== -1) {
              this.nzAutocomplete.setActiveItem(index);
              this.nzAutocomplete.activeItem.select(false);
          }
          else {
              this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
          }
      };
      NzAutocompleteTriggerDirective.prototype.setValueAndClose = function (option) {
          var value = option.nzValue;
          this.setTriggerValue(option.getLabel());
          this.onChange(value);
          this.elementRef.nativeElement.focus();
          this.closePanel();
      };
      NzAutocompleteTriggerDirective.prototype.setTriggerValue = function (value) {
          var option = this.nzAutocomplete.getOption(value);
          var displayValue = option ? option.getLabel() : value;
          this.elementRef.nativeElement.value = displayValue != null ? displayValue : '';
          if (!this.nzAutocomplete.nzBackfill) {
              this.previousValue = displayValue;
          }
      };
      NzAutocompleteTriggerDirective.prototype.doBackfill = function () {
          if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
              this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
          }
      };
      NzAutocompleteTriggerDirective.prototype.canOpen = function () {
          var element = this.elementRef.nativeElement;
          return !element.readOnly && !element.disabled;
      };
      return NzAutocompleteTriggerDirective;
  }());
  NzAutocompleteTriggerDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
                  exportAs: 'nzAutocompleteTrigger',
                  providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                  host: {
                      autocomplete: 'off',
                      'aria-autocomplete': 'list',
                      '(focusin)': 'handleFocus()',
                      '(blur)': 'handleBlur()',
                      '(input)': 'handleInput($event)',
                      '(keydown)': 'handleKeydown($event)'
                  }
              },] }
  ];
  NzAutocompleteTriggerDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: overlay.Overlay },
      { type: core.ViewContainerRef },
      { type: input.NzInputGroupWhitSuffixOrPrefixDirective, decorators: [{ type: core.Optional }] },
      { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
  ]; };
  NzAutocompleteTriggerDirective.propDecorators = {
      nzAutocomplete: [{ type: core.Input }]
  };

  var NzAutocompleteComponent = /** @class */ (function () {
      function NzAutocompleteComponent(changeDetectorRef, ngZone, directionality, noAnimation) {
          var _this = this;
          this.changeDetectorRef = changeDetectorRef;
          this.ngZone = ngZone;
          this.directionality = directionality;
          this.noAnimation = noAnimation;
          this.nzOverlayClassName = '';
          this.nzOverlayStyle = {};
          this.nzDefaultActiveFirstOption = true;
          this.nzBackfill = false;
          this.compareWith = function (o1, o2) { return o1 === o2; };
          this.selectionChange = new core.EventEmitter();
          this.showPanel = true;
          this.isOpen = false;
          this.activeItem = null;
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
          this.animationStateChange = new core.EventEmitter();
          this.activeItemIndex = -1;
          this.selectionChangeSubscription = rxjs.Subscription.EMPTY;
          this.optionMouseEnterSubscription = rxjs.Subscription.EMPTY;
          this.dataSourceChangeSubscription = rxjs.Subscription.EMPTY;
          /** Options changes listener */
          this.optionSelectionChanges = rxjs.defer(function () {
              if (_this.options) {
                  return rxjs.merge.apply(void 0, __spread(_this.options.map(function (option) { return option.selectionChange; })));
              }
              return _this.ngZone.onStable.asObservable().pipe(operators.take(1), operators.switchMap(function () { return _this.optionSelectionChanges; }));
          });
          this.optionMouseEnter = rxjs.defer(function () {
              if (_this.options) {
                  return rxjs.merge.apply(void 0, __spread(_this.options.map(function (option) { return option.mouseEntered; })));
              }
              return _this.ngZone.onStable.asObservable().pipe(operators.take(1), operators.switchMap(function () { return _this.optionMouseEnter; }));
          });
      }
      Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
          /**
           * Options accessor, its source may be content or dataSource
           */
          get: function () {
              // first dataSource
              if (this.nzDataSource) {
                  return this.fromDataSourceOptions;
              }
              else {
                  return this.fromContentOptions;
              }
          },
          enumerable: false,
          configurable: true
      });
      NzAutocompleteComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.changeDetectorRef.detectChanges();
          });
          this.dir = this.directionality.value;
      };
      NzAutocompleteComponent.prototype.onAnimationEvent = function (event) {
          this.animationStateChange.emit(event);
      };
      NzAutocompleteComponent.prototype.ngAfterContentInit = function () {
          if (!this.nzDataSource) {
              this.optionsInit();
          }
      };
      NzAutocompleteComponent.prototype.ngAfterViewInit = function () {
          if (this.nzDataSource) {
              this.optionsInit();
          }
      };
      NzAutocompleteComponent.prototype.ngOnDestroy = function () {
          this.dataSourceChangeSubscription.unsubscribe();
          this.selectionChangeSubscription.unsubscribe();
          this.optionMouseEnterSubscription.unsubscribe();
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzAutocompleteComponent.prototype.setVisibility = function () {
          this.showPanel = !!this.options.length;
          this.changeDetectorRef.markForCheck();
      };
      NzAutocompleteComponent.prototype.setActiveItem = function (index) {
          var activeItem = this.options.get(index);
          if (activeItem && !activeItem.active) {
              this.activeItem = activeItem;
              this.activeItemIndex = index;
              this.clearSelectedOptions(this.activeItem);
              this.activeItem.setActiveStyles();
          }
          else {
              this.activeItem = null;
              this.activeItemIndex = -1;
              this.clearSelectedOptions();
          }
          this.changeDetectorRef.markForCheck();
      };
      NzAutocompleteComponent.prototype.setNextItemActive = function () {
          var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
          this.setActiveItem(nextIndex);
      };
      NzAutocompleteComponent.prototype.setPreviousItemActive = function () {
          var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
          this.setActiveItem(previousIndex);
      };
      NzAutocompleteComponent.prototype.getOptionIndex = function (value) {
          var _this = this;
          return this.options.reduce(function (result, current, index) {
              return result === -1 ? (_this.compareWith(value, current.nzValue) ? index : -1) : result;
          }, -1);
      };
      NzAutocompleteComponent.prototype.getOption = function (value) {
          var _this = this;
          return this.options.find(function (item) { return _this.compareWith(value, item.nzValue); }) || null;
      };
      NzAutocompleteComponent.prototype.optionsInit = function () {
          var _this = this;
          this.setVisibility();
          this.subscribeOptionChanges();
          var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
          // async
          this.dataSourceChangeSubscription = changes.subscribe(function (e) {
              if (!e.dirty && _this.isOpen) {
                  setTimeout(function () { return _this.setVisibility(); });
              }
              _this.subscribeOptionChanges();
          });
      };
      /**
       * Clear the status of options
       */
      NzAutocompleteComponent.prototype.clearSelectedOptions = function (skip, deselect) {
          if (deselect === void 0) { deselect = false; }
          this.options.forEach(function (option) {
              if (option !== skip) {
                  if (deselect) {
                      option.deselect();
                  }
                  option.setInactiveStyles();
              }
          });
      };
      NzAutocompleteComponent.prototype.subscribeOptionChanges = function () {
          var _this = this;
          this.selectionChangeSubscription.unsubscribe();
          this.selectionChangeSubscription = this.optionSelectionChanges
              .pipe(operators.filter(function (event) { return event.isUserInput; }))
              .subscribe(function (event) {
              event.source.select();
              event.source.setActiveStyles();
              _this.activeItem = event.source;
              _this.activeItemIndex = _this.getOptionIndex(_this.activeItem.nzValue);
              _this.clearSelectedOptions(event.source, true);
              _this.selectionChange.emit(event.source);
          });
          this.optionMouseEnterSubscription.unsubscribe();
          this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe(function (event) {
              event.setActiveStyles();
              _this.activeItem = event;
              _this.activeItemIndex = _this.getOptionIndex(_this.activeItem.nzValue);
              _this.clearSelectedOptions(event);
          });
      };
      return NzAutocompleteComponent;
  }());
  NzAutocompleteComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-autocomplete',
                  exportAs: 'nzAutocomplete',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <ng-template>\n      <div\n        #panel\n        class=\"ant-select-dropdown ant-select-dropdown-placement-bottomLeft\"\n        [class.ant-select-dropdown-hidden]=\"!showPanel\"\n        [class.ant-select-dropdown-rtl]=\"dir === 'rtl'\"\n        [ngClass]=\"nzOverlayClassName\"\n        [ngStyle]=\"nzOverlayStyle\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        @slideMotion\n        (@slideMotion.done)=\"onAnimationEvent($event)\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      >\n        <div style=\"max-height: 256px; overflow-y: auto; overflow-anchor: none;\">\n          <div style=\"display: flex; flex-direction: column;\">\n            <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\n          </div>\n        </div>\n      </div>\n      <ng-template #contentTemplate>\n        <ng-content></ng-content>\n      </ng-template>\n      <ng-template #optionsTemplate>\n        <nz-auto-option\n          *ngFor=\"let option of nzDataSource!\"\n          [nzValue]=\"option\"\n          [nzLabel]=\"option && $any(option).label ? $any(option).label : $any(option)\"\n        >\n          {{ option && $any(option).label ? $any(option).label : $any(option) }}\n        </nz-auto-option>\n      </ng-template>\n    </ng-template>\n  ",
                  animations: [animation.slideMotion]
              },] }
  ];
  NzAutocompleteComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: core.NgZone },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };
  NzAutocompleteComponent.propDecorators = {
      nzWidth: [{ type: core.Input }],
      nzOverlayClassName: [{ type: core.Input }],
      nzOverlayStyle: [{ type: core.Input }],
      nzDefaultActiveFirstOption: [{ type: core.Input }],
      nzBackfill: [{ type: core.Input }],
      compareWith: [{ type: core.Input }],
      nzDataSource: [{ type: core.Input }],
      selectionChange: [{ type: core.Output }],
      fromContentOptions: [{ type: core.ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
      fromDataSourceOptions: [{ type: core.ViewChildren, args: [NzAutocompleteOptionComponent,] }],
      template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: false },] }],
      panel: [{ type: core.ViewChild, args: ['panel', { static: false },] }],
      content: [{ type: core.ViewChild, args: ['content', { static: false },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzAutocompleteModule = /** @class */ (function () {
      function NzAutocompleteModule() {
      }
      return NzAutocompleteModule;
  }());
  NzAutocompleteModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                  exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                  imports: [bidi.BidiModule, common.CommonModule, overlay.OverlayModule, forms.FormsModule, outlet.NzOutletModule, noAnimation.NzNoAnimationModule, input.NzInputModule]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NZ_AUTOCOMPLETE_VALUE_ACCESSOR = NZ_AUTOCOMPLETE_VALUE_ACCESSOR;
  exports.NzAutocompleteComponent = NzAutocompleteComponent;
  exports.NzAutocompleteModule = NzAutocompleteModule;
  exports.NzAutocompleteOptgroupComponent = NzAutocompleteOptgroupComponent;
  exports.NzAutocompleteOptionComponent = NzAutocompleteOptionComponent;
  exports.NzAutocompleteTriggerDirective = NzAutocompleteTriggerDirective;
  exports.NzOptionSelectionChange = NzOptionSelectionChange;
  exports.getNzAutocompleteMissingPanelError = getNzAutocompleteMissingPanelError;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-auto-complete.umd.js.map
