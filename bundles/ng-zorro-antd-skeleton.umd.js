(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core/util'), require('@angular/cdk/bidi'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/skeleton', ['exports', '@angular/core', 'ng-zorro-antd/core/util', '@angular/cdk/bidi', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].skeleton = {}), global.ng.core, global['ng-zorro-antd'].core.util, global.ng.cdk.bidi, global.ng.common));
}(this, (function (exports, core, util, bidi, common) { 'use strict';

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

  var NzSkeletonComponent = /** @class */ (function () {
      function NzSkeletonComponent(cdr, renderer, elementRef) {
          this.cdr = cdr;
          this.nzActive = false;
          this.nzLoading = true;
          this.nzRound = false;
          this.nzTitle = true;
          this.nzAvatar = false;
          this.nzParagraph = true;
          this.rowsList = [];
          this.widthList = [];
          renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
      }
      NzSkeletonComponent.prototype.toCSSUnit = function (value) {
          if (value === void 0) { value = ''; }
          return util.toCssPixel(value);
      };
      NzSkeletonComponent.prototype.getTitleProps = function () {
          var hasAvatar = !!this.nzAvatar;
          var hasParagraph = !!this.nzParagraph;
          var width = '';
          if (!hasAvatar && hasParagraph) {
              width = '38%';
          }
          else if (hasAvatar && hasParagraph) {
              width = '50%';
          }
          return Object.assign({ width: width }, this.getProps(this.nzTitle));
      };
      NzSkeletonComponent.prototype.getAvatarProps = function () {
          var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
          var size = 'large';
          return Object.assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
      };
      NzSkeletonComponent.prototype.getParagraphProps = function () {
          var hasAvatar = !!this.nzAvatar;
          var hasTitle = !!this.nzTitle;
          var basicProps = {};
          // Width
          if (!hasAvatar || !hasTitle) {
              basicProps.width = '61%';
          }
          // Rows
          if (!hasAvatar && hasTitle) {
              basicProps.rows = 3;
          }
          else {
              basicProps.rows = 2;
          }
          return Object.assign(Object.assign({}, basicProps), this.getProps(this.nzParagraph));
      };
      NzSkeletonComponent.prototype.getProps = function (prop) {
          return prop && typeof prop === 'object' ? prop : {};
      };
      NzSkeletonComponent.prototype.getWidthList = function () {
          var _a = this.paragraph, width = _a.width, rows = _a.rows;
          var widthList = [];
          if (width && Array.isArray(width)) {
              widthList = width;
          }
          else if (width && !Array.isArray(width)) {
              widthList = [];
              widthList[rows - 1] = width;
          }
          return widthList;
      };
      NzSkeletonComponent.prototype.updateProps = function () {
          this.title = this.getTitleProps();
          this.avatar = this.getAvatarProps();
          this.paragraph = this.getParagraphProps();
          this.rowsList = __spread(Array(this.paragraph.rows));
          this.widthList = this.getWidthList();
          this.cdr.markForCheck();
      };
      NzSkeletonComponent.prototype.ngOnInit = function () {
          this.updateProps();
      };
      NzSkeletonComponent.prototype.ngOnChanges = function (changes) {
          if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
              this.updateProps();
          }
      };
      return NzSkeletonComponent;
  }());
  NzSkeletonComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  selector: 'nz-skeleton',
                  exportAs: 'nzSkeleton',
                  host: {
                      '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                      '[class.ant-skeleton-active]': 'nzActive',
                      '[class.ant-skeleton-round]': '!!nzRound'
                  },
                  template: "\n    <ng-container *ngIf=\"nzLoading\">\n      <div class=\"ant-skeleton-header\" *ngIf=\"!!nzAvatar\">\n        <nz-skeleton-element nzType=\"avatar\" [nzSize]=\"avatar.size || 'default'\" [nzShape]=\"avatar.shape || 'circle'\"></nz-skeleton-element>\n      </div>\n      <div class=\"ant-skeleton-content\">\n        <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n        <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\n          <li *ngFor=\"let row of rowsList; let i = index\" [style.width]=\"toCSSUnit(widthList[i])\"></li>\n        </ul>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"!nzLoading\">\n      <ng-content></ng-content>\n    </ng-container>\n  "
              },] }
  ];
  NzSkeletonComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: core.Renderer2 },
      { type: core.ElementRef }
  ]; };
  NzSkeletonComponent.propDecorators = {
      nzActive: [{ type: core.Input }],
      nzLoading: [{ type: core.Input }],
      nzRound: [{ type: core.Input }],
      nzTitle: [{ type: core.Input }],
      nzAvatar: [{ type: core.Input }],
      nzParagraph: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSkeletonElementDirective = /** @class */ (function () {
      function NzSkeletonElementDirective(elementRef) {
          this.elementRef = elementRef;
          this.nzActive = false;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-skeleton', 'ant-skeleton-element');
      }
      return NzSkeletonElementDirective;
  }());
  NzSkeletonElementDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-skeleton-element',
                  host: {
                      '[class.ant-skeleton-active]': 'nzActive'
                  }
              },] }
  ];
  NzSkeletonElementDirective.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzSkeletonElementDirective.propDecorators = {
      nzActive: [{ type: core.Input }],
      nzType: [{ type: core.Input }]
  };
  var NzSkeletonElementButtonComponent = /** @class */ (function () {
      function NzSkeletonElementButtonComponent() {
          this.nzShape = 'default';
          this.nzSize = 'default';
      }
      return NzSkeletonElementButtonComponent;
  }());
  NzSkeletonElementButtonComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  selector: 'nz-skeleton-element[nzType="button"]',
                  template: "\n    <span\n      class=\"ant-skeleton-button\"\n      [class.ant-skeleton-button-round]=\"nzShape === 'round'\"\n      [class.ant-skeleton-button-circle]=\"nzShape === 'circle'\"\n      [class.ant-skeleton-button-lg]=\"nzSize === 'large'\"\n      [class.ant-skeleton-button-sm]=\"nzSize === 'small'\"\n    ></span>\n  "
              },] }
  ];
  NzSkeletonElementButtonComponent.propDecorators = {
      nzShape: [{ type: core.Input }],
      nzSize: [{ type: core.Input }]
  };
  var NzSkeletonElementAvatarComponent = /** @class */ (function () {
      function NzSkeletonElementAvatarComponent() {
          this.nzShape = 'circle';
          this.nzSize = 'default';
          this.styleMap = {};
      }
      NzSkeletonElementAvatarComponent.prototype.ngOnChanges = function (changes) {
          if (changes.nzSize && typeof this.nzSize === 'number') {
              var sideLength = this.nzSize + "px";
              this.styleMap = { width: sideLength, height: sideLength, 'line-height': sideLength };
          }
          else {
              this.styleMap = {};
          }
      };
      return NzSkeletonElementAvatarComponent;
  }());
  NzSkeletonElementAvatarComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  selector: 'nz-skeleton-element[nzType="avatar"]',
                  template: "\n    <span\n      class=\"ant-skeleton-avatar\"\n      [class.ant-skeleton-avatar-square]=\"nzShape === 'square'\"\n      [class.ant-skeleton-avatar-circle]=\"nzShape === 'circle'\"\n      [class.ant-skeleton-avatar-lg]=\"nzSize === 'large'\"\n      [class.ant-skeleton-avatar-sm]=\"nzSize === 'small'\"\n      [ngStyle]=\"styleMap\"\n    ></span>\n  "
              },] }
  ];
  NzSkeletonElementAvatarComponent.propDecorators = {
      nzShape: [{ type: core.Input }],
      nzSize: [{ type: core.Input }]
  };
  var NzSkeletonElementInputComponent = /** @class */ (function () {
      function NzSkeletonElementInputComponent() {
          this.nzSize = 'default';
      }
      return NzSkeletonElementInputComponent;
  }());
  NzSkeletonElementInputComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  selector: 'nz-skeleton-element[nzType="input"]',
                  template: "\n    <span\n      class=\"ant-skeleton-input\"\n      [class.ant-skeleton-input-lg]=\"nzSize === 'large'\"\n      [class.ant-skeleton-input-sm]=\"nzSize === 'small'\"\n    ></span>\n  "
              },] }
  ];
  NzSkeletonElementInputComponent.propDecorators = {
      nzSize: [{ type: core.Input }]
  };
  var NzSkeletonElementImageComponent = /** @class */ (function () {
      function NzSkeletonElementImageComponent() {
      }
      return NzSkeletonElementImageComponent;
  }());
  NzSkeletonElementImageComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  selector: 'nz-skeleton-element[nzType="image"]',
                  template: "\n    <span class=\"ant-skeleton-image\">\n      <svg class=\"ant-skeleton-image-svg\" viewBox=\"0 0 1098 1024\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z\"\n          class=\"ant-skeleton-image-path\"\n        />\n      </svg>\n    </span>\n  "
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSkeletonModule = /** @class */ (function () {
      function NzSkeletonModule() {
      }
      return NzSkeletonModule;
  }());
  NzSkeletonModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [
                      NzSkeletonComponent,
                      NzSkeletonElementDirective,
                      NzSkeletonElementButtonComponent,
                      NzSkeletonElementAvatarComponent,
                      NzSkeletonElementImageComponent,
                      NzSkeletonElementInputComponent
                  ],
                  imports: [bidi.BidiModule, common.CommonModule],
                  exports: [
                      NzSkeletonComponent,
                      NzSkeletonElementDirective,
                      NzSkeletonElementButtonComponent,
                      NzSkeletonElementAvatarComponent,
                      NzSkeletonElementImageComponent,
                      NzSkeletonElementInputComponent
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

  exports.NzSkeletonComponent = NzSkeletonComponent;
  exports.NzSkeletonElementAvatarComponent = NzSkeletonElementAvatarComponent;
  exports.NzSkeletonElementButtonComponent = NzSkeletonElementButtonComponent;
  exports.NzSkeletonElementDirective = NzSkeletonElementDirective;
  exports.NzSkeletonElementImageComponent = NzSkeletonElementImageComponent;
  exports.NzSkeletonElementInputComponent = NzSkeletonElementInputComponent;
  exports.NzSkeletonModule = NzSkeletonModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-skeleton.umd.js.map
