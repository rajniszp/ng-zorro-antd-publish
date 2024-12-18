(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('rxjs'), require('@angular/cdk/keycodes'), require('@angular/cdk/portal'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/core/util')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/mention', ['exports', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/icon', 'rxjs', '@angular/cdk/keycodes', '@angular/cdk/portal', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].mention = {}), global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].icon, global.rxjs, global.ng.cdk.keycodes, global.ng.cdk.portal, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].core.util));
}(this, (function (exports, bidi, overlay$1, common, core, forms, icon, rxjs, keycodes, portal, overlay, util) { 'use strict';

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
  var NzMentionSuggestionDirective = /** @class */ (function () {
      function NzMentionSuggestionDirective() {
      }
      return NzMentionSuggestionDirective;
  }());
  NzMentionSuggestionDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nzMentionSuggestion]',
                  exportAs: 'nzMentionSuggestion'
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NZ_MENTION_CONFIG = {
      split: ' '
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzMentionService = /** @class */ (function () {
      function NzMentionService() {
          this.triggerChange$ = new rxjs.Subject();
      }
      NzMentionService.prototype.triggerChanged = function () {
          return this.triggerChange$.asObservable();
      };
      NzMentionService.prototype.registerTrigger = function (trigger) {
          if (this.trigger !== trigger) {
              this.trigger = trigger;
              this.triggerChange$.next(trigger);
          }
      };
      NzMentionService.prototype.ngOnDestroy = function () {
          this.triggerChange$.complete();
      };
      return NzMentionService;
  }());
  NzMentionService.decorators = [
      { type: core.Injectable }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NZ_MENTION_TRIGGER_ACCESSOR = {
      provide: forms.NG_VALUE_ACCESSOR,
      useExisting: core.forwardRef(function () { return NzMentionTriggerDirective; }),
      multi: true
  };
  var NzMentionTriggerDirective = /** @class */ (function () {
      function NzMentionTriggerDirective(el, nzMentionService) {
          this.el = el;
          this.nzMentionService = nzMentionService;
          this.onChange = function () { };
          this.onTouched = function () { };
          this.onFocusin = new core.EventEmitter();
          this.onBlur = new core.EventEmitter();
          this.onInput = new core.EventEmitter();
          this.onKeydown = new core.EventEmitter();
          this.onClick = new core.EventEmitter();
      }
      NzMentionTriggerDirective.prototype.completeEvents = function () {
          this.onFocusin.complete();
          this.onBlur.complete();
          this.onInput.complete();
          this.onKeydown.complete();
          this.onClick.complete();
      };
      NzMentionTriggerDirective.prototype.focus = function (caretPos) {
          this.el.nativeElement.focus();
          this.el.nativeElement.setSelectionRange(caretPos, caretPos);
      };
      NzMentionTriggerDirective.prototype.insertMention = function (mention) {
          var value = this.el.nativeElement.value;
          var insertValue = "" + mention.mention + NZ_MENTION_CONFIG.split;
          var newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
          this.el.nativeElement.value = newValue;
          this.focus(mention.startPos + insertValue.length + 1);
          this.onChange(newValue);
          this.value = newValue;
      };
      NzMentionTriggerDirective.prototype.writeValue = function (value) {
          this.value = value;
          if (typeof value === 'string') {
              this.el.nativeElement.value = value;
          }
          else {
              this.el.nativeElement.value = '';
          }
      };
      NzMentionTriggerDirective.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      NzMentionTriggerDirective.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      NzMentionTriggerDirective.prototype.ngAfterViewInit = function () {
          this.nzMentionService.registerTrigger(this);
      };
      NzMentionTriggerDirective.prototype.ngOnDestroy = function () {
          this.completeEvents();
      };
      return NzMentionTriggerDirective;
  }());
  NzMentionTriggerDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                  exportAs: 'nzMentionTrigger',
                  providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                  host: {
                      autocomplete: 'off',
                      '(focusin)': 'onFocusin.emit()',
                      '(blur)': 'onBlur.emit()',
                      '(input)': 'onInput.emit($event)',
                      '(keydown)': 'onKeydown.emit($event)',
                      '(click)': 'onClick.emit($event)'
                  }
              },] }
  ];
  NzMentionTriggerDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: NzMentionService }
  ]; };

  var NzMentionComponent = /** @class */ (function () {
      function NzMentionComponent(ngDocument, cdr, overlay, viewContainerRef, nzMentionService) {
          this.ngDocument = ngDocument;
          this.cdr = cdr;
          this.overlay = overlay;
          this.viewContainerRef = viewContainerRef;
          this.nzMentionService = nzMentionService;
          this.nzValueWith = function (value) { return value; };
          this.nzPrefix = '@';
          this.nzLoading = false;
          this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
          this.nzPlacement = 'bottom';
          this.nzSuggestions = [];
          this.nzOnSelect = new core.EventEmitter();
          this.nzOnSearchChange = new core.EventEmitter();
          this.isOpen = false;
          this.filteredSuggestions = [];
          this.suggestionTemplate = null;
          this.activeIndex = -1;
          this.previousValue = null;
          this.cursorMention = null;
          this.overlayRef = null;
      }
      Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
          set: function (value) {
              if (value) {
                  this.suggestionTemplate = value;
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
          get: function () {
              return this.trigger.el.nativeElement;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzMentionComponent.prototype, "focusItemElement", {
          get: function () {
              var _a;
              var itemArr = (_a = this.items) === null || _a === void 0 ? void 0 : _a.toArray();
              if (itemArr && itemArr[this.activeIndex]) {
                  return itemArr[this.activeIndex].nativeElement;
              }
              return null;
          },
          enumerable: false,
          configurable: true
      });
      NzMentionComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.nzMentionService.triggerChanged().subscribe(function (trigger) {
              _this.trigger = trigger;
              _this.bindTriggerEvents();
              _this.closeDropdown();
              _this.overlayRef = null;
          });
      };
      NzMentionComponent.prototype.ngOnChanges = function (changes) {
          if (changes.hasOwnProperty('nzSuggestions')) {
              if (this.isOpen) {
                  this.previousValue = null;
                  this.activeIndex = -1;
                  this.resetDropdown(false);
              }
          }
      };
      NzMentionComponent.prototype.ngOnDestroy = function () {
          this.closeDropdown();
      };
      NzMentionComponent.prototype.closeDropdown = function () {
          if (this.overlayRef && this.overlayRef.hasAttached()) {
              this.overlayRef.detach();
              this.overlayOutsideClickSubscription.unsubscribe();
              this.isOpen = false;
              this.cdr.markForCheck();
          }
      };
      NzMentionComponent.prototype.openDropdown = function () {
          this.attachOverlay();
          this.isOpen = true;
          this.cdr.markForCheck();
      };
      NzMentionComponent.prototype.getMentions = function () {
          return this.trigger ? util.getMentions(this.trigger.value, this.nzPrefix) : [];
      };
      NzMentionComponent.prototype.selectSuggestion = function (suggestion) {
          var value = this.nzValueWith(suggestion);
          this.trigger.insertMention({
              mention: value,
              startPos: this.cursorMentionStart,
              endPos: this.cursorMentionEnd
          });
          this.nzOnSelect.emit(suggestion);
          this.closeDropdown();
          this.activeIndex = -1;
      };
      NzMentionComponent.prototype.handleInput = function (event) {
          var target = event.target;
          this.trigger.onChange(target.value);
          this.trigger.value = target.value;
          this.resetDropdown();
      };
      NzMentionComponent.prototype.handleKeydown = function (event) {
          var keyCode = event.keyCode;
          if (this.isOpen && keyCode === keycodes.ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
              this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
              event.preventDefault();
          }
          else if (keyCode === keycodes.LEFT_ARROW || keyCode === keycodes.RIGHT_ARROW) {
              this.resetDropdown();
              event.stopPropagation();
          }
          else {
              if (this.isOpen && (keyCode === keycodes.TAB || keyCode === keycodes.ESCAPE)) {
                  this.closeDropdown();
                  return;
              }
              if (this.isOpen && keyCode === keycodes.UP_ARROW) {
                  this.setPreviousItemActive();
                  event.preventDefault();
                  event.stopPropagation();
              }
              if (this.isOpen && keyCode === keycodes.DOWN_ARROW) {
                  this.setNextItemActive();
                  event.preventDefault();
                  event.stopPropagation();
              }
          }
      };
      NzMentionComponent.prototype.handleClick = function () {
          this.resetDropdown();
      };
      NzMentionComponent.prototype.bindTriggerEvents = function () {
          var _this = this;
          this.trigger.onInput.subscribe(function (e) { return _this.handleInput(e); });
          this.trigger.onKeydown.subscribe(function (e) { return _this.handleKeydown(e); });
          this.trigger.onClick.subscribe(function () { return _this.handleClick(); });
      };
      NzMentionComponent.prototype.suggestionsFilter = function (value, emit) {
          var _this = this;
          var suggestions = value.substring(1);
          /**
           * Should always emit (nzOnSearchChange) when value empty
           *
           * @[something]... @[empty]... @[empty]
           *     ^             ^           ^
           * preValue        preValue  (should emit)
           */
          if (this.previousValue === value && value !== this.cursorMention[0]) {
              return;
          }
          this.previousValue = value;
          if (emit) {
              this.nzOnSearchChange.emit({
                  value: this.cursorMention.substring(1),
                  prefix: this.cursorMention[0]
              });
          }
          var searchValue = suggestions.toLowerCase();
          this.filteredSuggestions = this.nzSuggestions.filter(function (suggestion) { return _this.nzValueWith(suggestion).toLowerCase().includes(searchValue); });
      };
      NzMentionComponent.prototype.resetDropdown = function (emit) {
          if (emit === void 0) { emit = true; }
          this.resetCursorMention();
          if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
              this.closeDropdown();
              return;
          }
          this.suggestionsFilter(this.cursorMention, emit);
          var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
          this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
          this.openDropdown();
      };
      NzMentionComponent.prototype.setNextItemActive = function () {
          this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
          this.cdr.markForCheck();
          this.scrollToFocusItem();
      };
      NzMentionComponent.prototype.setPreviousItemActive = function () {
          this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
          this.cdr.markForCheck();
          this.scrollToFocusItem();
      };
      NzMentionComponent.prototype.scrollToFocusItem = function () {
          if (this.focusItemElement) {
              this.focusItemElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          }
      };
      NzMentionComponent.prototype.canOpen = function () {
          var element = this.triggerNativeElement;
          return !element.readOnly && !element.disabled;
      };
      NzMentionComponent.prototype.resetCursorMention = function () {
          var value = this.triggerNativeElement.value.replace(/[\r\n]/g, NZ_MENTION_CONFIG.split) || '';
          var selectionStart = this.triggerNativeElement.selectionStart;
          var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
          var i = prefix.length;
          while (i >= 0) {
              var startPos = value.lastIndexOf(prefix[i], selectionStart);
              var endPos = value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) > -1 ? value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) : value.length;
              var mention = value.substring(startPos, endPos);
              if ((startPos > 0 && value[startPos - 1] !== NZ_MENTION_CONFIG.split) ||
                  startPos < 0 ||
                  mention.includes(prefix[i], 1) ||
                  mention.includes(NZ_MENTION_CONFIG.split)) {
                  this.cursorMention = null;
                  this.cursorMentionStart = -1;
                  this.cursorMentionEnd = -1;
              }
              else {
                  this.cursorMention = mention;
                  this.cursorMentionStart = startPos;
                  this.cursorMentionEnd = endPos;
                  return;
              }
              i--;
          }
      };
      NzMentionComponent.prototype.updatePositions = function () {
          var coordinates = util.getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
          var top = coordinates.top -
              this.triggerNativeElement.getBoundingClientRect().height -
              this.triggerNativeElement.scrollTop +
              (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
          var left = coordinates.left - this.triggerNativeElement.scrollLeft;
          this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
          if (this.nzPlacement === 'bottom') {
              this.positionStrategy.withPositions(__spread(overlay.DEFAULT_MENTION_BOTTOM_POSITIONS));
          }
          if (this.nzPlacement === 'top') {
              this.positionStrategy.withPositions(__spread(overlay.DEFAULT_MENTION_TOP_POSITIONS));
          }
          this.positionStrategy.apply();
      };
      NzMentionComponent.prototype.subscribeOverlayOutsideClick = function () {
          var _this = this;
          return rxjs.merge(this.overlayRef.outsidePointerEvents(), rxjs.fromEvent(this.ngDocument, 'touchend')).subscribe(function (event) {
              var _a;
              var clickTarget = event.target;
              if (_this.isOpen && clickTarget !== _this.trigger.el.nativeElement && !((_a = _this.overlayRef) === null || _a === void 0 ? void 0 : _a.overlayElement.contains(clickTarget))) {
                  _this.closeDropdown();
              }
          });
      };
      NzMentionComponent.prototype.attachOverlay = function () {
          if (!this.overlayRef) {
              this.portal = new portal.TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
              this.overlayRef = this.overlay.create(this.getOverlayConfig());
          }
          if (this.overlayRef && !this.overlayRef.hasAttached()) {
              this.overlayRef.attach(this.portal);
              this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
          }
          this.updatePositions();
      };
      NzMentionComponent.prototype.getOverlayConfig = function () {
          return new overlay$1.OverlayConfig({
              positionStrategy: this.getOverlayPosition(),
              scrollStrategy: this.overlay.scrollStrategies.reposition(),
              disposeOnNavigation: true
          });
      };
      NzMentionComponent.prototype.getOverlayPosition = function () {
          var positions = [
              new overlay$1.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
              new overlay$1.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
          ];
          this.positionStrategy = this.overlay
              .position()
              .flexibleConnectedTo(this.trigger.el)
              .withPositions(positions)
              .withFlexibleDimensions(false)
              .withPush(false);
          return this.positionStrategy;
      };
      return NzMentionComponent;
  }());
  NzMentionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-mention',
                  exportAs: 'nzMention',
                  template: "\n    <ng-content></ng-content>\n    <ng-template #suggestions>\n      <ul class=\"ant-mention-dropdown\">\n        <li\n          #items\n          class=\"ant-mention-dropdown-item\"\n          *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\n          [class.focus]=\"i === activeIndex\"\n          (mousedown)=\"$event.preventDefault()\"\n          (click)=\"selectSuggestion(suggestion)\"\n        >\n          <ng-container *ngIf=\"suggestionTemplate; else defaultSuggestion\">\n            <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: { $implicit: suggestion }\"></ng-container>\n          </ng-container>\n          <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\n        </li>\n        <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\" *ngIf=\"filteredSuggestions.length === 0\">\n          <span *ngIf=\"nzLoading\"><i nz-icon nzType=\"loading\"></i></span>\n          <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\n        </li>\n      </ul>\n    </ng-template>\n  ",
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  providers: [NzMentionService]
              },] }
  ];
  NzMentionComponent.ctorParameters = function () { return [
      { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
      { type: core.ChangeDetectorRef },
      { type: overlay$1.Overlay },
      { type: core.ViewContainerRef },
      { type: NzMentionService }
  ]; };
  NzMentionComponent.propDecorators = {
      nzValueWith: [{ type: core.Input }],
      nzPrefix: [{ type: core.Input }],
      nzLoading: [{ type: core.Input }],
      nzNotFoundContent: [{ type: core.Input }],
      nzPlacement: [{ type: core.Input }],
      nzSuggestions: [{ type: core.Input }],
      nzOnSelect: [{ type: core.Output }],
      nzOnSearchChange: [{ type: core.Output }],
      suggestionsTemp: [{ type: core.ViewChild, args: [core.TemplateRef, { static: false },] }],
      items: [{ type: core.ViewChildren, args: ['items', { read: core.ElementRef },] }],
      suggestionChild: [{ type: core.ContentChild, args: [NzMentionSuggestionDirective, { static: false, read: core.TemplateRef },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMentionComponent.prototype, "nzLoading", void 0);

  var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
  var NzMentionModule = /** @class */ (function () {
      function NzMentionModule() {
      }
      return NzMentionModule;
  }());
  NzMentionModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [bidi.BidiModule, common.CommonModule, forms.FormsModule, overlay$1.OverlayModule, icon.NzIconModule],
                  declarations: __spread(COMPONENTS),
                  exports: __spread(COMPONENTS)
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NZ_MENTION_TRIGGER_ACCESSOR = NZ_MENTION_TRIGGER_ACCESSOR;
  exports.NzMentionComponent = NzMentionComponent;
  exports.NzMentionModule = NzMentionModule;
  exports.NzMentionService = NzMentionService;
  exports.NzMentionSuggestionDirective = NzMentionSuggestionDirective;
  exports.NzMentionTriggerDirective = NzMentionTriggerDirective;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-mention.umd.js.map
