(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('@angular/common'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/spin')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/list', ['exports', '@angular/core', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/bidi', '@angular/common', 'ng-zorro-antd/avatar', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/empty', 'ng-zorro-antd/grid', 'ng-zorro-antd/spin'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].list = {}), global.ng.core, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.bidi, global.ng.common, global['ng-zorro-antd'].avatar, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].spin));
}(this, (function (exports, core, util, rxjs, operators, bidi, common, avatar, outlet, empty, grid, spin) { 'use strict';

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzListItemMetaTitleComponent = /** @class */ (function () {
      function NzListItemMetaTitleComponent() {
      }
      return NzListItemMetaTitleComponent;
  }());
  NzListItemMetaTitleComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-item-meta-title',
                  exportAs: 'nzListItemMetaTitle',
                  template: "\n    <h4 class=\"ant-list-item-meta-title\">\n      <ng-content></ng-content>\n    </h4>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  var NzListItemMetaDescriptionComponent = /** @class */ (function () {
      function NzListItemMetaDescriptionComponent() {
      }
      return NzListItemMetaDescriptionComponent;
  }());
  NzListItemMetaDescriptionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-item-meta-description',
                  exportAs: 'nzListItemMetaDescription',
                  template: "\n    <div class=\"ant-list-item-meta-description\">\n      <ng-content></ng-content>\n    </div>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  var NzListItemMetaAvatarComponent = /** @class */ (function () {
      function NzListItemMetaAvatarComponent() {
      }
      return NzListItemMetaAvatarComponent;
  }());
  NzListItemMetaAvatarComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-item-meta-avatar',
                  exportAs: 'nzListItemMetaAvatar',
                  template: "\n    <div class=\"ant-list-item-meta-avatar\">\n      <nz-avatar *ngIf=\"nzSrc\" [nzSrc]=\"nzSrc\"></nz-avatar>\n      <ng-content *ngIf=\"!nzSrc\"></ng-content>\n    </div>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NzListItemMetaAvatarComponent.propDecorators = {
      nzSrc: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzListItemMetaComponent = /** @class */ (function () {
      function NzListItemMetaComponent(elementRef, renderer) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.avatarStr = '';
          this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
      }
      Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
          set: function (value) {
              if (value instanceof core.TemplateRef) {
                  this.avatarStr = '';
                  this.avatarTpl = value;
              }
              else {
                  this.avatarStr = value;
              }
          },
          enumerable: false,
          configurable: true
      });
      return NzListItemMetaComponent;
  }());
  NzListItemMetaComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-item-meta, [nz-list-item-meta]',
                  exportAs: 'nzListItemMeta',
                  template: "\n    <!--Old API Start-->\n    <nz-list-item-meta-avatar *ngIf=\"avatarStr\" [nzSrc]=\"avatarStr\"></nz-list-item-meta-avatar>\n    <nz-list-item-meta-avatar *ngIf=\"avatarTpl\">\n      <ng-container [ngTemplateOutlet]=\"avatarTpl\"></ng-container>\n    </nz-list-item-meta-avatar>\n    <!--Old API End-->\n\n    <ng-content select=\"nz-list-item-meta-avatar\"></ng-content>\n\n    <div *ngIf=\"nzTitle || nzDescription || descriptionComponent || titleComponent\" class=\"ant-list-item-meta-content\">\n      <!--Old API Start-->\n      <nz-list-item-meta-title *ngIf=\"nzTitle && !titleComponent\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </nz-list-item-meta-title>\n      <nz-list-item-meta-description *ngIf=\"nzDescription && !descriptionComponent\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </nz-list-item-meta-description>\n      <!--Old API End-->\n\n      <ng-content select=\"nz-list-item-meta-title\"></ng-content>\n      <ng-content select=\"nz-list-item-meta-description\"></ng-content>\n    </div>\n  ",
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None
              },] }
  ];
  NzListItemMetaComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 }
  ]; };
  NzListItemMetaComponent.propDecorators = {
      nzAvatar: [{ type: core.Input }],
      nzTitle: [{ type: core.Input }],
      nzDescription: [{ type: core.Input }],
      descriptionComponent: [{ type: core.ContentChild, args: [NzListItemMetaDescriptionComponent,] }],
      titleComponent: [{ type: core.ContentChild, args: [NzListItemMetaTitleComponent,] }]
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
  var NzListItemExtraComponent = /** @class */ (function () {
      function NzListItemExtraComponent() {
      }
      return NzListItemExtraComponent;
  }());
  NzListItemExtraComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-item-extra, [nz-list-item-extra]',
                  exportAs: 'nzListItemExtra',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: " <ng-content></ng-content> ",
                  host: {
                      class: 'ant-list-item-extra'
                  }
              },] }
  ];
  NzListItemExtraComponent.ctorParameters = function () { return []; };
  var NzListItemActionComponent = /** @class */ (function () {
      function NzListItemActionComponent() {
      }
      return NzListItemActionComponent;
  }());
  NzListItemActionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-item-action',
                  exportAs: 'nzListItemAction',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: " <ng-template><ng-content></ng-content></ng-template> "
              },] }
  ];
  NzListItemActionComponent.ctorParameters = function () { return []; };
  NzListItemActionComponent.propDecorators = {
      templateRef: [{ type: core.ViewChild, args: [core.TemplateRef,] }]
  };
  var NzListItemActionsComponent = /** @class */ (function () {
      function NzListItemActionsComponent(ngZone, cdr) {
          var _this = this;
          this.ngZone = ngZone;
          this.cdr = cdr;
          this.nzActions = [];
          this.actions = [];
          this.destroy$ = new rxjs.Subject();
          this.inputActionChanges$ = new rxjs.Subject();
          this.contentChildrenChanges$ = rxjs.defer(function () {
              if (_this.nzListItemActions) {
                  return rxjs.of(null);
              }
              return _this.ngZone.onStable.asObservable().pipe(operators.take(1), operators.switchMap(function () { return _this.contentChildrenChanges$; }));
          });
          rxjs.merge(this.contentChildrenChanges$, this.inputActionChanges$)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function () {
              if (_this.nzActions.length) {
                  _this.actions = _this.nzActions;
              }
              else {
                  _this.actions = _this.nzListItemActions.map(function (action) { return action.templateRef; });
              }
              _this.cdr.detectChanges();
          });
      }
      NzListItemActionsComponent.prototype.ngOnChanges = function () {
          this.inputActionChanges$.next(null);
      };
      NzListItemActionsComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzListItemActionsComponent;
  }());
  NzListItemActionsComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'ul[nz-list-item-actions]',
                  exportAs: 'nzListItemActions',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <li *ngFor=\"let i of actions; let last = last\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  ",
                  host: {
                      class: 'ant-list-item-action'
                  }
              },] }
  ];
  NzListItemActionsComponent.ctorParameters = function () { return [
      { type: core.NgZone },
      { type: core.ChangeDetectorRef }
  ]; };
  NzListItemActionsComponent.propDecorators = {
      nzActions: [{ type: core.Input }],
      nzListItemActions: [{ type: core.ContentChildren, args: [NzListItemActionComponent,] }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzListEmptyComponent = /** @class */ (function () {
      function NzListEmptyComponent() {
      }
      return NzListEmptyComponent;
  }());
  NzListEmptyComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-empty',
                  exportAs: 'nzListHeader',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: " <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty> ",
                  host: {
                      class: 'ant-list-empty-text'
                  }
              },] }
  ];
  NzListEmptyComponent.propDecorators = {
      nzNoResult: [{ type: core.Input }]
  };
  var NzListHeaderComponent = /** @class */ (function () {
      function NzListHeaderComponent() {
      }
      return NzListHeaderComponent;
  }());
  NzListHeaderComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-header',
                  exportAs: 'nzListHeader',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: " <ng-content></ng-content> ",
                  host: {
                      class: 'ant-list-header'
                  }
              },] }
  ];
  var NzListFooterComponent = /** @class */ (function () {
      function NzListFooterComponent() {
      }
      return NzListFooterComponent;
  }());
  NzListFooterComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-footer',
                  exportAs: 'nzListFooter',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: " <ng-content></ng-content> ",
                  host: {
                      class: 'ant-list-footer'
                  }
              },] }
  ];
  var NzListPaginationComponent = /** @class */ (function () {
      function NzListPaginationComponent() {
      }
      return NzListPaginationComponent;
  }());
  NzListPaginationComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-pagination',
                  exportAs: 'nzListPagination',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: " <ng-content></ng-content> ",
                  host: {
                      class: 'ant-list-pagination'
                  }
              },] }
  ];
  var NzListLoadMoreDirective = /** @class */ (function () {
      function NzListLoadMoreDirective() {
      }
      return NzListLoadMoreDirective;
  }());
  NzListLoadMoreDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-list-load-more',
                  exportAs: 'nzListLoadMoreDirective'
              },] }
  ];
  var NzListGridDirective = /** @class */ (function () {
      function NzListGridDirective() {
      }
      return NzListGridDirective;
  }());
  NzListGridDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-list[nzGrid]',
                  host: {
                      class: 'ant-list-grid'
                  }
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzListComponent = /** @class */ (function () {
      function NzListComponent(elementRef, directionality) {
          this.elementRef = elementRef;
          this.directionality = directionality;
          this.nzBordered = false;
          this.nzGrid = '';
          this.nzItemLayout = 'horizontal';
          this.nzRenderItem = null;
          this.nzLoading = false;
          this.nzLoadMore = null;
          this.nzSize = 'default';
          this.nzSplit = true;
          this.hasSomethingAfterLastItem = false;
          this.dir = 'ltr';
          this.itemLayoutNotifySource = new rxjs.BehaviorSubject(this.nzItemLayout);
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-list');
      }
      Object.defineProperty(NzListComponent.prototype, "itemLayoutNotify$", {
          get: function () {
              return this.itemLayoutNotifySource.asObservable();
          },
          enumerable: false,
          configurable: true
      });
      NzListComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
          });
      };
      NzListComponent.prototype.getSomethingAfterLastItem = function () {
          return !!(this.nzLoadMore ||
              this.nzPagination ||
              this.nzFooter ||
              this.nzListFooterComponent ||
              this.nzListPaginationComponent ||
              this.nzListLoadMoreDirective);
      };
      NzListComponent.prototype.ngOnChanges = function (changes) {
          if (changes.nzItemLayout) {
              this.itemLayoutNotifySource.next(this.nzItemLayout);
          }
      };
      NzListComponent.prototype.ngOnDestroy = function () {
          this.itemLayoutNotifySource.unsubscribe();
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzListComponent.prototype.ngAfterContentInit = function () {
          this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
      };
      return NzListComponent;
  }());
  NzListComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list, [nz-list]',
                  exportAs: 'nzList',
                  template: "\n    <ng-template #itemsTpl>\n      <div class=\"ant-list-items\">\n        <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\n          <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n        </ng-container>\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n\n    <nz-list-header *ngIf=\"nzHeader\">\n      <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\n    </nz-list-header>\n    <ng-content select=\"nz-list-header\"></ng-content>\n\n    <nz-spin [nzSpinning]=\"nzLoading\">\n      <ng-container>\n        <div *ngIf=\"nzLoading && nzDataSource && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\n        <div *ngIf=\"nzGrid && nzDataSource; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter || null\">\n          <div\n            nz-col\n            [nzSpan]=\"nzGrid.span || null\"\n            [nzXs]=\"nzGrid.xs || null\"\n            [nzSm]=\"nzGrid.sm || null\"\n            [nzMd]=\"nzGrid.md || null\"\n            [nzLg]=\"nzGrid.lg || null\"\n            [nzXl]=\"nzGrid.xl || null\"\n            [nzXXl]=\"nzGrid.xxl || null\"\n            *ngFor=\"let item of nzDataSource; let index = index\"\n          >\n            <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n          </div>\n        </div>\n        <nz-list-empty *ngIf=\"!nzLoading && nzDataSource && nzDataSource.length === 0\" [nzNoResult]=\"nzNoResult\"></nz-list-empty>\n      </ng-container>\n    </nz-spin>\n\n    <nz-list-footer *ngIf=\"nzFooter\">\n      <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\n    </nz-list-footer>\n    <ng-content select=\"nz-list-footer, [nz-list-footer]\"></ng-content>\n\n    <ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\n    <ng-content select=\"nz-list-load-more, [nz-list-load-more]\"></ng-content>\n\n    <nz-list-pagination *ngIf=\"nzPagination\">\n      <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\n    </nz-list-pagination>\n    <ng-content select=\"nz-list-pagination, [nz-list-pagination]\"></ng-content>\n  ",
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  host: {
                      '[class.ant-list-rtl]': "dir === 'rtl'",
                      '[class.ant-list-vertical]': 'nzItemLayout === "vertical"',
                      '[class.ant-list-lg]': 'nzSize === "large"',
                      '[class.ant-list-sm]': 'nzSize === "small"',
                      '[class.ant-list-split]': 'nzSplit',
                      '[class.ant-list-bordered]': 'nzBordered',
                      '[class.ant-list-loading]': 'nzLoading',
                      '[class.ant-list-something-after-last-item]': 'hasSomethingAfterLastItem'
                  }
              },] }
  ];
  NzListComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzListComponent.propDecorators = {
      nzDataSource: [{ type: core.Input }],
      nzBordered: [{ type: core.Input }],
      nzGrid: [{ type: core.Input }],
      nzHeader: [{ type: core.Input }],
      nzFooter: [{ type: core.Input }],
      nzItemLayout: [{ type: core.Input }],
      nzRenderItem: [{ type: core.Input }],
      nzLoading: [{ type: core.Input }],
      nzLoadMore: [{ type: core.Input }],
      nzPagination: [{ type: core.Input }],
      nzSize: [{ type: core.Input }],
      nzSplit: [{ type: core.Input }],
      nzNoResult: [{ type: core.Input }],
      nzListFooterComponent: [{ type: core.ContentChild, args: [NzListFooterComponent,] }],
      nzListPaginationComponent: [{ type: core.ContentChild, args: [NzListPaginationComponent,] }],
      nzListLoadMoreDirective: [{ type: core.ContentChild, args: [NzListLoadMoreDirective,] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzListComponent.prototype, "nzBordered", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzListComponent.prototype, "nzLoading", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzListComponent.prototype, "nzSplit", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzListItemComponent = /** @class */ (function () {
      function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
          this.parentComp = parentComp;
          this.cdr = cdr;
          this.nzActions = [];
          this.nzExtra = null;
          this.nzNoFlex = false;
          renderer.addClass(elementRef.nativeElement, 'ant-list-item');
      }
      Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
          get: function () {
              return this.itemLayout === 'vertical' && (!!this.listItemExtraDirective || !!this.nzExtra);
          },
          enumerable: false,
          configurable: true
      });
      NzListItemComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(function (val) {
              _this.itemLayout = val;
              _this.cdr.detectChanges();
          });
      };
      NzListItemComponent.prototype.ngOnDestroy = function () {
          if (this.itemLayout$) {
              this.itemLayout$.unsubscribe();
          }
      };
      return NzListItemComponent;
  }());
  NzListItemComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-list-item, [nz-list-item]',
                  exportAs: 'nzListItem',
                  template: "\n    <ng-template #actionsTpl>\n      <ul nz-list-item-actions *ngIf=\"nzActions && nzActions.length > 0\" [nzActions]=\"nzActions\"></ul>\n      <ng-content select=\"nz-list-item-actions, [nz-list-item-actions]\"></ng-content>\n    </ng-template>\n    <ng-template #contentTpl>\n      <ng-content select=\"nz-list-item-meta, [nz-list-item-meta]\"></ng-content>\n      <ng-content></ng-content>\n      <ng-container *ngIf=\"nzContent\">\n        <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n      </ng-container>\n    </ng-template>\n    <ng-template #extraTpl>\n      <ng-content select=\"nz-list-item-extra, [nz-list-item-extra]\"></ng-content>\n    </ng-template>\n    <ng-template #simpleTpl>\n      <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"extraTpl\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n    </ng-template>\n\n    <ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n      <div class=\"ant-list-item-main\">\n        <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n      </div>\n      <nz-list-item-extra *ngIf=\"nzExtra\">\n        <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n      </nz-list-item-extra>\n      <ng-template [ngTemplateOutlet]=\"extraTpl\"></ng-template>\n    </ng-container>\n  ",
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NzListItemComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: NzListComponent },
      { type: core.ChangeDetectorRef }
  ]; };
  NzListItemComponent.propDecorators = {
      nzActions: [{ type: core.Input }],
      nzContent: [{ type: core.Input }],
      nzExtra: [{ type: core.Input }],
      nzNoFlex: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ant-list-item-no-flex',] }],
      listItemExtraDirective: [{ type: core.ContentChild, args: [NzListItemExtraComponent,] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzListItemComponent.prototype, "nzNoFlex", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var DIRECTIVES = [
      NzListComponent,
      NzListHeaderComponent,
      NzListFooterComponent,
      NzListPaginationComponent,
      NzListEmptyComponent,
      NzListItemComponent,
      NzListItemMetaComponent,
      NzListItemMetaTitleComponent,
      NzListItemMetaDescriptionComponent,
      NzListItemMetaAvatarComponent,
      NzListItemActionsComponent,
      NzListItemActionComponent,
      NzListItemExtraComponent,
      NzListLoadMoreDirective,
      NzListGridDirective
  ];
  var NzListModule = /** @class */ (function () {
      function NzListModule() {
      }
      return NzListModule;
  }());
  NzListModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [bidi.BidiModule, common.CommonModule, spin.NzSpinModule, grid.NzGridModule, avatar.NzAvatarModule, outlet.NzOutletModule, empty.NzEmptyModule],
                  declarations: [DIRECTIVES],
                  exports: [DIRECTIVES]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzListComponent = NzListComponent;
  exports.NzListEmptyComponent = NzListEmptyComponent;
  exports.NzListFooterComponent = NzListFooterComponent;
  exports.NzListGridDirective = NzListGridDirective;
  exports.NzListHeaderComponent = NzListHeaderComponent;
  exports.NzListItemActionComponent = NzListItemActionComponent;
  exports.NzListItemActionsComponent = NzListItemActionsComponent;
  exports.NzListItemComponent = NzListItemComponent;
  exports.NzListItemExtraComponent = NzListItemExtraComponent;
  exports.NzListItemMetaAvatarComponent = NzListItemMetaAvatarComponent;
  exports.NzListItemMetaComponent = NzListItemMetaComponent;
  exports.NzListItemMetaDescriptionComponent = NzListItemMetaDescriptionComponent;
  exports.NzListItemMetaTitleComponent = NzListItemMetaTitleComponent;
  exports.NzListLoadMoreDirective = NzListLoadMoreDirective;
  exports.NzListModule = NzListModule;
  exports.NzListPaginationComponent = NzListPaginationComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-list.umd.js.map
