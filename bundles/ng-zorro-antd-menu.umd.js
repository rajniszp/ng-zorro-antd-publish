(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/core'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/core/animation'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/menu', ['exports', '@angular/cdk/bidi', '@angular/core', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/router', '@angular/cdk/overlay', '@angular/cdk/platform', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/animation', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].menu = {}), global.ng.cdk.bidi, global.ng.core, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.router, global.ng.cdk.overlay, global.ng.cdk.platform, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].core.animation, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon));
}(this, (function (exports, bidi, core, util, rxjs, operators, router, overlay$1, platform, noAnimation, overlay, animation, common, outlet, icon) { 'use strict';

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
  var MenuService = /** @class */ (function () {
      function MenuService() {
          /** all descendant menu click **/
          this.descendantMenuItemClick$ = new rxjs.Subject();
          /** child menu item click **/
          this.childMenuItemClick$ = new rxjs.Subject();
          this.theme$ = new rxjs.BehaviorSubject('light');
          this.mode$ = new rxjs.BehaviorSubject('vertical');
          this.inlineIndent$ = new rxjs.BehaviorSubject(24);
          this.isChildSubMenuOpen$ = new rxjs.BehaviorSubject(false);
      }
      MenuService.prototype.onDescendantMenuItemClick = function (menu) {
          this.descendantMenuItemClick$.next(menu);
      };
      MenuService.prototype.onChildMenuItemClick = function (menu) {
          this.childMenuItemClick$.next(menu);
      };
      MenuService.prototype.setMode = function (mode) {
          this.mode$.next(mode);
      };
      MenuService.prototype.setTheme = function (theme) {
          this.theme$.next(theme);
      };
      MenuService.prototype.setInlineIndent = function (indent) {
          this.inlineIndent$.next(indent);
      };
      return MenuService;
  }());
  MenuService.decorators = [
      { type: core.Injectable }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzIsMenuInsideDropDownToken = new core.InjectionToken('NzIsInDropDownMenuToken');
  var NzMenuServiceLocalToken = new core.InjectionToken('NzMenuServiceLocalToken');

  var NzSubmenuService = /** @class */ (function () {
      function NzSubmenuService(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
          var _this = this;
          this.nzHostSubmenuService = nzHostSubmenuService;
          this.nzMenuService = nzMenuService;
          this.isMenuInsideDropDown = isMenuInsideDropDown;
          this.mode$ = this.nzMenuService.mode$.pipe(operators.map(function (mode) {
              if (mode === 'inline') {
                  return 'inline';
                  /** if inside another submenu, set the mode to vertical **/
              }
              else if (mode === 'vertical' || _this.nzHostSubmenuService) {
                  return 'vertical';
              }
              else {
                  return 'horizontal';
              }
          }));
          this.level = 1;
          this.isCurrentSubMenuOpen$ = new rxjs.BehaviorSubject(false);
          this.isChildSubMenuOpen$ = new rxjs.BehaviorSubject(false);
          /** submenu title & overlay mouse enter status **/
          this.isMouseEnterTitleOrOverlay$ = new rxjs.Subject();
          this.childMenuItemClick$ = new rxjs.Subject();
          this.destroy$ = new rxjs.Subject();
          if (this.nzHostSubmenuService) {
              this.level = this.nzHostSubmenuService.level + 1;
          }
          /** close if menu item clicked **/
          var isClosedByMenuItemClick = this.childMenuItemClick$.pipe(operators.mergeMap(function () { return _this.mode$; }), operators.filter(function (mode) { return mode !== 'inline' || _this.isMenuInsideDropDown; }), operators.mapTo(false));
          var isCurrentSubmenuOpen$ = rxjs.merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
          /** combine the child submenu status with current submenu status to calculate host submenu open **/
          var isSubMenuOpenWithDebounce$ = rxjs.combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(operators.map(function (_a) {
              var _b = __read(_a, 2), isChildSubMenuOpen = _b[0], isCurrentSubmenuOpen = _b[1];
              return isChildSubMenuOpen || isCurrentSubmenuOpen;
          }), operators.auditTime(150), operators.distinctUntilChanged(), operators.takeUntil(this.destroy$));
          isSubMenuOpenWithDebounce$.pipe(operators.distinctUntilChanged()).subscribe(function (data) {
              _this.setOpenStateWithoutDebounce(data);
              if (_this.nzHostSubmenuService) {
                  /** set parent submenu's child submenu open status **/
                  _this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
              }
              else {
                  _this.nzMenuService.isChildSubMenuOpen$.next(data);
              }
          });
      }
      /**
       * menu item inside submenu clicked
       * @param menu
       */
      NzSubmenuService.prototype.onChildMenuItemClick = function (menu) {
          this.childMenuItemClick$.next(menu);
      };
      NzSubmenuService.prototype.setOpenStateWithoutDebounce = function (value) {
          this.isCurrentSubMenuOpen$.next(value);
      };
      NzSubmenuService.prototype.setMouseEnterTitleOrOverlayState = function (value) {
          this.isMouseEnterTitleOrOverlay$.next(value);
      };
      NzSubmenuService.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzSubmenuService;
  }());
  NzSubmenuService.decorators = [
      { type: core.Injectable }
  ];
  NzSubmenuService.ctorParameters = function () { return [
      { type: NzSubmenuService, decorators: [{ type: core.SkipSelf }, { type: core.Optional }] },
      { type: MenuService },
      { type: Boolean, decorators: [{ type: core.Inject, args: [NzIsMenuInsideDropDownToken,] }] }
  ]; };

  var NzMenuItemDirective = /** @class */ (function () {
      function NzMenuItemDirective(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, directionality, routerLink, routerLinkWithHref, router$1) {
          var _this = this;
          this.nzMenuService = nzMenuService;
          this.cdr = cdr;
          this.nzSubmenuService = nzSubmenuService;
          this.isMenuInsideDropDown = isMenuInsideDropDown;
          this.directionality = directionality;
          this.routerLink = routerLink;
          this.routerLinkWithHref = routerLinkWithHref;
          this.router = router$1;
          this.destroy$ = new rxjs.Subject();
          this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
          this.selected$ = new rxjs.Subject();
          this.inlinePaddingLeft = null;
          this.dir = 'ltr';
          this.nzDisabled = false;
          this.nzSelected = false;
          this.nzDanger = false;
          this.nzMatchRouterExact = false;
          this.nzMatchRouter = false;
          if (router$1) {
              this.router.events.pipe(operators.takeUntil(this.destroy$), operators.filter(function (e) { return e instanceof router.NavigationEnd; })).subscribe(function () {
                  _this.updateRouterActive();
              });
          }
      }
      /** clear all item selected status except this */
      NzMenuItemDirective.prototype.clickMenuItem = function (e) {
          if (this.nzDisabled) {
              e.preventDefault();
              e.stopPropagation();
          }
          else {
              this.nzMenuService.onDescendantMenuItemClick(this);
              if (this.nzSubmenuService) {
                  /** menu item inside the submenu **/
                  this.nzSubmenuService.onChildMenuItemClick(this);
              }
              else {
                  /** menu item inside the root menu **/
                  this.nzMenuService.onChildMenuItemClick(this);
              }
          }
      };
      NzMenuItemDirective.prototype.setSelectedState = function (value) {
          this.nzSelected = value;
          this.selected$.next(value);
      };
      NzMenuItemDirective.prototype.updateRouterActive = function () {
          var _this = this;
          if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
              return;
          }
          Promise.resolve().then(function () {
              var hasActiveLinks = _this.hasActiveLinks();
              if (_this.nzSelected !== hasActiveLinks) {
                  _this.nzSelected = hasActiveLinks;
                  _this.setSelectedState(_this.nzSelected);
                  _this.cdr.markForCheck();
              }
          });
      };
      NzMenuItemDirective.prototype.hasActiveLinks = function () {
          var isActiveCheckFn = this.isLinkActive(this.router);
          return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
              (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
              this.listOfRouterLink.some(isActiveCheckFn) ||
              this.listOfRouterLinkWithHref.some(isActiveCheckFn));
      };
      NzMenuItemDirective.prototype.isLinkActive = function (router) {
          var _this = this;
          return function (link) { return router.isActive(link.urlTree, _this.nzMatchRouterExact); };
      };
      NzMenuItemDirective.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          /** store origin padding in padding */
          rxjs.combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function (_b) {
              var _c = __read(_b, 2), mode = _c[0], inlineIndent = _c[1];
              _this.inlinePaddingLeft = mode === 'inline' ? _this.level * inlineIndent : null;
          });
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
          });
      };
      NzMenuItemDirective.prototype.ngAfterContentInit = function () {
          var _this = this;
          this.listOfRouterLink.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
          this.listOfRouterLinkWithHref.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
          this.updateRouterActive();
      };
      NzMenuItemDirective.prototype.ngOnChanges = function (changes) {
          if (changes.nzSelected) {
              this.setSelectedState(this.nzSelected);
          }
      };
      NzMenuItemDirective.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzMenuItemDirective;
  }());
  NzMenuItemDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-menu-item]',
                  exportAs: 'nzMenuItem',
                  host: {
                      '[class.ant-dropdown-menu-item]': "isMenuInsideDropDown",
                      '[class.ant-dropdown-menu-item-selected]': "isMenuInsideDropDown && nzSelected",
                      '[class.ant-dropdown-menu-item-danger]': "isMenuInsideDropDown && nzDanger",
                      '[class.ant-dropdown-menu-item-disabled]': "isMenuInsideDropDown && nzDisabled",
                      '[class.ant-menu-item]': "!isMenuInsideDropDown",
                      '[class.ant-menu-item-selected]': "!isMenuInsideDropDown && nzSelected",
                      '[class.ant-menu-item-danger]': "!isMenuInsideDropDown && nzDanger",
                      '[class.ant-menu-item-disabled]': "!isMenuInsideDropDown && nzDisabled",
                      '[style.paddingLeft.px]': "dir === 'rtl' ? null : nzPaddingLeft || inlinePaddingLeft",
                      '[style.paddingRight.px]': "dir === 'rtl' ? nzPaddingLeft || inlinePaddingLeft : null",
                      '(click)': 'clickMenuItem($event)'
                  }
              },] }
  ];
  NzMenuItemDirective.ctorParameters = function () { return [
      { type: MenuService },
      { type: core.ChangeDetectorRef },
      { type: NzSubmenuService, decorators: [{ type: core.Optional }] },
      { type: Boolean, decorators: [{ type: core.Inject, args: [NzIsMenuInsideDropDownToken,] }] },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: router.RouterLink, decorators: [{ type: core.Optional }] },
      { type: router.RouterLinkWithHref, decorators: [{ type: core.Optional }] },
      { type: router.Router, decorators: [{ type: core.Optional }] }
  ]; };
  NzMenuItemDirective.propDecorators = {
      nzPaddingLeft: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzSelected: [{ type: core.Input }],
      nzDanger: [{ type: core.Input }],
      nzMatchRouterExact: [{ type: core.Input }],
      nzMatchRouter: [{ type: core.Input }],
      listOfRouterLink: [{ type: core.ContentChildren, args: [router.RouterLink, { descendants: true },] }],
      listOfRouterLinkWithHref: [{ type: core.ContentChildren, args: [router.RouterLinkWithHref, { descendants: true },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMenuItemDirective.prototype, "nzSelected", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMenuItemDirective.prototype, "nzDanger", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);

  var listOfVerticalPositions = [
      overlay.POSITION_MAP.rightTop,
      overlay.POSITION_MAP.right,
      overlay.POSITION_MAP.rightBottom,
      overlay.POSITION_MAP.leftTop,
      overlay.POSITION_MAP.left,
      overlay.POSITION_MAP.leftBottom
  ];
  var listOfHorizontalPositions = [overlay.POSITION_MAP.bottomLeft];
  var NzSubMenuComponent = /** @class */ (function () {
      function NzSubMenuComponent(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
          this.nzMenuService = nzMenuService;
          this.cdr = cdr;
          this.nzSubmenuService = nzSubmenuService;
          this.platform = platform;
          this.isMenuInsideDropDown = isMenuInsideDropDown;
          this.directionality = directionality;
          this.noAnimation = noAnimation;
          this.nzMenuClassName = '';
          this.nzPaddingLeft = null;
          this.nzTitle = null;
          this.nzIcon = null;
          this.nzOpen = false;
          this.nzDisabled = false;
          this.nzOpenChange = new core.EventEmitter();
          this.cdkOverlayOrigin = null;
          this.listOfNzSubMenuComponent = null;
          this.listOfNzMenuItemDirective = null;
          this.level = this.nzSubmenuService.level;
          this.destroy$ = new rxjs.Subject();
          this.position = 'right';
          this.triggerWidth = null;
          this.theme = 'light';
          this.mode = 'vertical';
          this.inlinePaddingLeft = null;
          this.overlayPositions = listOfVerticalPositions;
          this.isSelected = false;
          this.isActive = false;
          this.dir = 'ltr';
      }
      /** set the submenu host open status directly **/
      NzSubMenuComponent.prototype.setOpenStateWithoutDebounce = function (open) {
          this.nzSubmenuService.setOpenStateWithoutDebounce(open);
      };
      NzSubMenuComponent.prototype.toggleSubMenu = function () {
          this.setOpenStateWithoutDebounce(!this.nzOpen);
      };
      NzSubMenuComponent.prototype.setMouseEnterState = function (value) {
          this.isActive = value;
          if (this.mode !== 'inline') {
              this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
          }
      };
      NzSubMenuComponent.prototype.setTriggerWidth = function () {
          if (this.mode === 'horizontal' && this.platform.isBrowser && this.cdkOverlayOrigin) {
              /** TODO: fast dom **/
              this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
          }
      };
      NzSubMenuComponent.prototype.onPositionChange = function (position) {
          var placement = overlay.getPlacementName(position);
          if (placement === 'rightTop' || placement === 'rightBottom' || placement === 'right') {
              this.position = 'right';
          }
          else if (placement === 'leftTop' || placement === 'leftBottom' || placement === 'left') {
              this.position = 'left';
          }
          this.cdr.markForCheck();
      };
      NzSubMenuComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          /** submenu theme update **/
          this.nzMenuService.theme$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (theme) {
              _this.theme = theme;
              _this.cdr.markForCheck();
          });
          /** submenu mode update **/
          this.nzSubmenuService.mode$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (mode) {
              _this.mode = mode;
              if (mode === 'horizontal') {
                  _this.overlayPositions = listOfHorizontalPositions;
              }
              else if (mode === 'vertical') {
                  _this.overlayPositions = listOfVerticalPositions;
              }
              _this.cdr.markForCheck();
          });
          /** inlineIndent update **/
          rxjs.combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function (_b) {
              var _c = __read(_b, 2), mode = _c[0], inlineIndent = _c[1];
              _this.inlinePaddingLeft = mode === 'inline' ? _this.level * inlineIndent : null;
              _this.cdr.markForCheck();
          });
          /** current submenu open status **/
          this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (open) {
              _this.isActive = open;
              if (open !== _this.nzOpen) {
                  _this.setTriggerWidth();
                  _this.nzOpen = open;
                  _this.nzOpenChange.emit(_this.nzOpen);
                  _this.cdr.markForCheck();
              }
          });
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.markForCheck();
          });
      };
      NzSubMenuComponent.prototype.ngAfterContentInit = function () {
          var _this = this;
          this.setTriggerWidth();
          var listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
          var changes = listOfNzMenuItemDirective.changes;
          var mergedObservable = rxjs.merge.apply(void 0, __spread([changes], listOfNzMenuItemDirective.map(function (menu) { return menu.selected$; })));
          changes
              .pipe(operators.startWith(listOfNzMenuItemDirective), operators.switchMap(function () { return mergedObservable; }), operators.startWith(true), operators.map(function () { return listOfNzMenuItemDirective.some(function (e) { return e.nzSelected; }); }), operators.takeUntil(this.destroy$))
              .subscribe(function (selected) {
              _this.isSelected = selected;
              _this.cdr.markForCheck();
          });
      };
      NzSubMenuComponent.prototype.ngOnChanges = function (changes) {
          var nzOpen = changes.nzOpen;
          if (nzOpen) {
              this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
              this.setTriggerWidth();
          }
      };
      NzSubMenuComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzSubMenuComponent;
  }());
  NzSubMenuComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-submenu]',
                  exportAs: 'nzSubmenu',
                  providers: [NzSubmenuService],
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  preserveWhitespaces: false,
                  template: "\n    <div\n      nz-submenu-title\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      [nzIcon]=\"nzIcon\"\n      [nzTitle]=\"nzTitle\"\n      [mode]=\"mode\"\n      [nzDisabled]=\"nzDisabled\"\n      [isMenuInsideDropDown]=\"isMenuInsideDropDown\"\n      [paddingLeft]=\"nzPaddingLeft || inlinePaddingLeft\"\n      (subMenuMouseState)=\"setMouseEnterState($event)\"\n      (toggleSubMenu)=\"toggleSubMenu()\"\n    >\n      <ng-content select=\"[title]\" *ngIf=\"!nzTitle\"></ng-content>\n    </div>\n    <div\n      *ngIf=\"mode === 'inline'; else nonInlineTemplate\"\n      nz-submenu-inline-child\n      [mode]=\"mode\"\n      [nzOpen]=\"nzOpen\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      [menuClass]=\"nzMenuClassName\"\n      [templateOutlet]=\"subMenuTemplate\"\n    ></div>\n    <ng-template #nonInlineTemplate>\n      <ng-template\n        cdkConnectedOverlay\n        (positionChange)=\"onPositionChange($event)\"\n        [cdkConnectedOverlayPositions]=\"overlayPositions\"\n        [cdkConnectedOverlayOrigin]=\"origin\"\n        [cdkConnectedOverlayWidth]=\"triggerWidth!\"\n        [cdkConnectedOverlayOpen]=\"nzOpen\"\n        [cdkConnectedOverlayTransformOriginOn]=\"'.ant-menu-submenu'\"\n      >\n        <div\n          nz-submenu-none-inline-child\n          [theme]=\"theme\"\n          [mode]=\"mode\"\n          [nzOpen]=\"nzOpen\"\n          [position]=\"position\"\n          [nzDisabled]=\"nzDisabled\"\n          [isMenuInsideDropDown]=\"isMenuInsideDropDown\"\n          [templateOutlet]=\"subMenuTemplate\"\n          [menuClass]=\"nzMenuClassName\"\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          (subMenuMouseState)=\"setMouseEnterState($event)\"\n        ></div>\n      </ng-template>\n    </ng-template>\n\n    <ng-template #subMenuTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                  host: {
                      '[class.ant-dropdown-menu-submenu]': "isMenuInsideDropDown",
                      '[class.ant-dropdown-menu-submenu-disabled]': "isMenuInsideDropDown && nzDisabled",
                      '[class.ant-dropdown-menu-submenu-open]': "isMenuInsideDropDown && nzOpen",
                      '[class.ant-dropdown-menu-submenu-selected]': "isMenuInsideDropDown && isSelected",
                      '[class.ant-dropdown-menu-submenu-vertical]': "isMenuInsideDropDown && mode === 'vertical'",
                      '[class.ant-dropdown-menu-submenu-horizontal]': "isMenuInsideDropDown && mode === 'horizontal'",
                      '[class.ant-dropdown-menu-submenu-inline]': "isMenuInsideDropDown && mode === 'inline'",
                      '[class.ant-dropdown-menu-submenu-active]': "isMenuInsideDropDown && isActive",
                      '[class.ant-menu-submenu]': "!isMenuInsideDropDown",
                      '[class.ant-menu-submenu-disabled]': "!isMenuInsideDropDown && nzDisabled",
                      '[class.ant-menu-submenu-open]': "!isMenuInsideDropDown && nzOpen",
                      '[class.ant-menu-submenu-selected]': "!isMenuInsideDropDown && isSelected",
                      '[class.ant-menu-submenu-vertical]': "!isMenuInsideDropDown && mode === 'vertical'",
                      '[class.ant-menu-submenu-horizontal]': "!isMenuInsideDropDown && mode === 'horizontal'",
                      '[class.ant-menu-submenu-inline]': "!isMenuInsideDropDown && mode === 'inline'",
                      '[class.ant-menu-submenu-active]': "!isMenuInsideDropDown && isActive",
                      '[class.ant-menu-submenu-rtl]': "dir === 'rtl'"
                  }
              },] }
  ];
  NzSubMenuComponent.ctorParameters = function () { return [
      { type: MenuService },
      { type: core.ChangeDetectorRef },
      { type: NzSubmenuService },
      { type: platform.Platform },
      { type: Boolean, decorators: [{ type: core.Inject, args: [NzIsMenuInsideDropDownToken,] }] },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };
  NzSubMenuComponent.propDecorators = {
      nzMenuClassName: [{ type: core.Input }],
      nzPaddingLeft: [{ type: core.Input }],
      nzTitle: [{ type: core.Input }],
      nzIcon: [{ type: core.Input }],
      nzOpen: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzOpenChange: [{ type: core.Output }],
      cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay$1.CdkOverlayOrigin, { static: true, read: core.ElementRef },] }],
      listOfNzSubMenuComponent: [{ type: core.ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
      listOfNzMenuItemDirective: [{ type: core.ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSubMenuComponent.prototype, "nzOpen", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSubMenuComponent.prototype, "nzDisabled", void 0);

  function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
      return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
  }
  function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
      return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
  }
  var NzMenuDirective = /** @class */ (function () {
      function NzMenuDirective(nzMenuService, isMenuInsideDropDown, cdr, directionality) {
          this.nzMenuService = nzMenuService;
          this.isMenuInsideDropDown = isMenuInsideDropDown;
          this.cdr = cdr;
          this.directionality = directionality;
          this.nzInlineIndent = 24;
          this.nzTheme = 'light';
          this.nzMode = 'vertical';
          this.nzInlineCollapsed = false;
          this.nzSelectable = !this.isMenuInsideDropDown;
          this.nzClick = new core.EventEmitter();
          this.actualMode = 'vertical';
          this.dir = 'ltr';
          this.inlineCollapsed$ = new rxjs.BehaviorSubject(this.nzInlineCollapsed);
          this.mode$ = new rxjs.BehaviorSubject(this.nzMode);
          this.destroy$ = new rxjs.Subject();
          this.listOfOpenedNzSubMenuComponent = [];
      }
      NzMenuDirective.prototype.setInlineCollapsed = function (inlineCollapsed) {
          this.nzInlineCollapsed = inlineCollapsed;
          this.inlineCollapsed$.next(inlineCollapsed);
      };
      NzMenuDirective.prototype.updateInlineCollapse = function () {
          if (this.listOfNzMenuItemDirective) {
              if (this.nzInlineCollapsed) {
                  this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(function (submenu) { return submenu.nzOpen; });
                  this.listOfNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenStateWithoutDebounce(false); });
              }
              else {
                  this.listOfOpenedNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenStateWithoutDebounce(true); });
                  this.listOfOpenedNzSubMenuComponent = [];
              }
          }
      };
      NzMenuDirective.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          rxjs.combineLatest([this.inlineCollapsed$, this.mode$])
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function (_b) {
              var _c = __read(_b, 2), inlineCollapsed = _c[0], mode = _c[1];
              _this.actualMode = inlineCollapsed ? 'vertical' : mode;
              _this.nzMenuService.setMode(_this.actualMode);
              _this.cdr.markForCheck();
          });
          this.nzMenuService.descendantMenuItemClick$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (menu) {
              _this.nzClick.emit(menu);
              if (_this.nzSelectable && !menu.nzMatchRouter) {
                  _this.listOfNzMenuItemDirective.forEach(function (item) { return item.setSelectedState(item === menu); });
              }
          });
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.nzMenuService.setMode(_this.actualMode);
              _this.cdr.markForCheck();
          });
      };
      NzMenuDirective.prototype.ngAfterContentInit = function () {
          var _this = this;
          this.inlineCollapsed$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
              _this.updateInlineCollapse();
              _this.cdr.markForCheck();
          });
      };
      NzMenuDirective.prototype.ngOnChanges = function (changes) {
          var nzInlineCollapsed = changes.nzInlineCollapsed, nzInlineIndent = changes.nzInlineIndent, nzTheme = changes.nzTheme, nzMode = changes.nzMode;
          if (nzInlineCollapsed) {
              this.inlineCollapsed$.next(this.nzInlineCollapsed);
          }
          if (nzInlineIndent) {
              this.nzMenuService.setInlineIndent(this.nzInlineIndent);
          }
          if (nzTheme) {
              this.nzMenuService.setTheme(this.nzTheme);
          }
          if (nzMode) {
              this.mode$.next(this.nzMode);
              if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                  this.listOfNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenStateWithoutDebounce(false); });
              }
          }
      };
      NzMenuDirective.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzMenuDirective;
  }());
  NzMenuDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-menu]',
                  exportAs: 'nzMenu',
                  providers: [
                      {
                          provide: NzMenuServiceLocalToken,
                          useClass: MenuService
                      },
                      /** use the top level service **/
                      {
                          provide: MenuService,
                          useFactory: MenuServiceFactory,
                          deps: [[new core.SkipSelf(), new core.Optional(), MenuService], NzMenuServiceLocalToken]
                      },
                      /** check if menu inside dropdown-menu component **/
                      {
                          provide: NzIsMenuInsideDropDownToken,
                          useFactory: MenuDropDownTokenFactory,
                          deps: [[new core.SkipSelf(), new core.Optional(), NzIsMenuInsideDropDownToken]]
                      }
                  ],
                  host: {
                      '[class.ant-dropdown-menu]': "isMenuInsideDropDown",
                      '[class.ant-dropdown-menu-root]': "isMenuInsideDropDown",
                      '[class.ant-dropdown-menu-light]': "isMenuInsideDropDown && nzTheme === 'light'",
                      '[class.ant-dropdown-menu-dark]': "isMenuInsideDropDown && nzTheme === 'dark'",
                      '[class.ant-dropdown-menu-vertical]': "isMenuInsideDropDown && actualMode === 'vertical'",
                      '[class.ant-dropdown-menu-horizontal]': "isMenuInsideDropDown && actualMode === 'horizontal'",
                      '[class.ant-dropdown-menu-inline]': "isMenuInsideDropDown && actualMode === 'inline'",
                      '[class.ant-dropdown-menu-inline-collapsed]': "isMenuInsideDropDown && nzInlineCollapsed",
                      '[class.ant-menu]': "!isMenuInsideDropDown",
                      '[class.ant-menu-root]': "!isMenuInsideDropDown",
                      '[class.ant-menu-light]': "!isMenuInsideDropDown && nzTheme === 'light'",
                      '[class.ant-menu-dark]': "!isMenuInsideDropDown && nzTheme === 'dark'",
                      '[class.ant-menu-vertical]': "!isMenuInsideDropDown && actualMode === 'vertical'",
                      '[class.ant-menu-horizontal]': "!isMenuInsideDropDown && actualMode === 'horizontal'",
                      '[class.ant-menu-inline]': "!isMenuInsideDropDown && actualMode === 'inline'",
                      '[class.ant-menu-inline-collapsed]': "!isMenuInsideDropDown && nzInlineCollapsed",
                      '[class.ant-menu-rtl]': "dir === 'rtl'"
                  }
              },] }
  ];
  NzMenuDirective.ctorParameters = function () { return [
      { type: MenuService },
      { type: Boolean, decorators: [{ type: core.Inject, args: [NzIsMenuInsideDropDownToken,] }] },
      { type: core.ChangeDetectorRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzMenuDirective.propDecorators = {
      listOfNzMenuItemDirective: [{ type: core.ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
      listOfNzSubMenuComponent: [{ type: core.ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
      nzInlineIndent: [{ type: core.Input }],
      nzTheme: [{ type: core.Input }],
      nzMode: [{ type: core.Input }],
      nzInlineCollapsed: [{ type: core.Input }],
      nzSelectable: [{ type: core.Input }],
      nzClick: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzMenuDirective.prototype, "nzSelectable", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  function MenuGroupFactory(isMenuInsideDropDownToken) {
      return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
  }
  var NzMenuGroupComponent = /** @class */ (function () {
      function NzMenuGroupComponent(elementRef, renderer, isMenuInsideDropDown) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.isMenuInsideDropDown = isMenuInsideDropDown;
          var className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
          this.renderer.addClass(elementRef.nativeElement, className);
      }
      NzMenuGroupComponent.prototype.ngAfterViewInit = function () {
          var ulElement = this.titleElement.nativeElement.nextElementSibling;
          if (ulElement) {
              /** add classname to ul **/
              var className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
              this.renderer.addClass(ulElement, className);
          }
      };
      return NzMenuGroupComponent;
  }());
  NzMenuGroupComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-menu-group]',
                  exportAs: 'nzMenuGroup',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  providers: [
                      /** check if menu inside dropdown-menu component **/
                      {
                          provide: NzIsMenuInsideDropDownToken,
                          useFactory: MenuGroupFactory,
                          deps: [[new core.SkipSelf(), new core.Optional(), NzIsMenuInsideDropDownToken]]
                      }
                  ],
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <div\n      [class.ant-menu-item-group-title]=\"!isMenuInsideDropDown\"\n      [class.ant-dropdown-menu-item-group-title]=\"isMenuInsideDropDown\"\n      #titleElement\n    >\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      <ng-content select=\"[title]\" *ngIf=\"!nzTitle\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n  ",
                  preserveWhitespaces: false
              },] }
  ];
  NzMenuGroupComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: Boolean, decorators: [{ type: core.Inject, args: [NzIsMenuInsideDropDownToken,] }] }
  ]; };
  NzMenuGroupComponent.propDecorators = {
      nzTitle: [{ type: core.Input }],
      titleElement: [{ type: core.ViewChild, args: ['titleElement',] }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzMenuDividerDirective = /** @class */ (function () {
      function NzMenuDividerDirective(elementRef, renderer) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
      }
      return NzMenuDividerDirective;
  }());
  NzMenuDividerDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-menu-divider]',
                  exportAs: 'nzMenuDivider'
              },] }
  ];
  NzMenuDividerDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSubMenuTitleComponent = /** @class */ (function () {
      function NzSubMenuTitleComponent(cdr, directionality) {
          this.cdr = cdr;
          this.directionality = directionality;
          this.nzIcon = null;
          this.nzTitle = null;
          this.isMenuInsideDropDown = false;
          this.nzDisabled = false;
          this.paddingLeft = null;
          this.mode = 'vertical';
          this.toggleSubMenu = new core.EventEmitter();
          this.subMenuMouseState = new core.EventEmitter();
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
      }
      NzSubMenuTitleComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
      };
      NzSubMenuTitleComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzSubMenuTitleComponent.prototype.setMouseState = function (state) {
          if (!this.nzDisabled) {
              this.subMenuMouseState.next(state);
          }
      };
      NzSubMenuTitleComponent.prototype.clickTitle = function () {
          if (this.mode === 'inline' && !this.nzDisabled) {
              this.toggleSubMenu.emit();
          }
      };
      return NzSubMenuTitleComponent;
  }());
  NzSubMenuTitleComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-submenu-title]',
                  exportAs: 'nzSubmenuTitle',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <i nz-icon [nzType]=\"nzIcon\" *ngIf=\"nzIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">\n      <span>{{ nzTitle }}</span>\n    </ng-container>\n    <ng-content></ng-content>\n    <span [ngSwitch]=\"dir\" *ngIf=\"isMenuInsideDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-expand-icon\">\n      <i *ngSwitchCase=\"'rtl'\" nz-icon nzType=\"left\" class=\"ant-dropdown-menu-submenu-arrow-icon\"></i>\n      <i *ngSwitchDefault nz-icon nzType=\"right\" class=\"ant-dropdown-menu-submenu-arrow-icon\"></i>\n    </span>\n    <ng-template #notDropdownTpl>\n      <i class=\"ant-menu-submenu-arrow\"></i>\n    </ng-template>\n  ",
                  host: {
                      '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                      '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                      '[style.paddingLeft.px]': "dir === 'rtl' ? null : paddingLeft ",
                      '[style.paddingRight.px]': "dir === 'rtl' ? paddingLeft : null",
                      '(click)': 'clickTitle()',
                      '(mouseenter)': 'setMouseState(true)',
                      '(mouseleave)': 'setMouseState(false)'
                  }
              },] }
  ];
  NzSubMenuTitleComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzSubMenuTitleComponent.propDecorators = {
      nzIcon: [{ type: core.Input }],
      nzTitle: [{ type: core.Input }],
      isMenuInsideDropDown: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      paddingLeft: [{ type: core.Input }],
      mode: [{ type: core.Input }],
      toggleSubMenu: [{ type: core.Output }],
      subMenuMouseState: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSubmenuInlineChildComponent = /** @class */ (function () {
      function NzSubmenuInlineChildComponent(elementRef, renderer, directionality) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.directionality = directionality;
          this.templateOutlet = null;
          this.menuClass = '';
          this.mode = 'vertical';
          this.nzOpen = false;
          this.listOfCacheClassName = [];
          this.expandState = 'collapsed';
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-menu', 'ant-menu-inline', 'ant-menu-sub');
      }
      NzSubmenuInlineChildComponent.prototype.calcMotionState = function () {
          if (this.nzOpen) {
              this.expandState = 'expanded';
          }
          else {
              this.expandState = 'collapsed';
          }
      };
      NzSubmenuInlineChildComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.calcMotionState();
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
          });
      };
      NzSubmenuInlineChildComponent.prototype.ngOnChanges = function (changes) {
          var _this = this;
          var mode = changes.mode, nzOpen = changes.nzOpen, menuClass = changes.menuClass;
          if (mode || nzOpen) {
              this.calcMotionState();
          }
          if (menuClass) {
              if (this.listOfCacheClassName.length) {
                  this.listOfCacheClassName
                      .filter(function (item) { return !!item; })
                      .forEach(function (className) {
                      _this.renderer.removeClass(_this.elementRef.nativeElement, className);
                  });
              }
              if (this.menuClass) {
                  this.listOfCacheClassName = this.menuClass.split(' ');
                  this.listOfCacheClassName
                      .filter(function (item) { return !!item; })
                      .forEach(function (className) {
                      _this.renderer.addClass(_this.elementRef.nativeElement, className);
                  });
              }
          }
      };
      NzSubmenuInlineChildComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzSubmenuInlineChildComponent;
  }());
  NzSubmenuInlineChildComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-submenu-inline-child]',
                  animations: [animation.collapseMotion],
                  exportAs: 'nzSubmenuInlineChild',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-template [ngTemplateOutlet]=\"templateOutlet\"></ng-template>\n  ",
                  host: {
                      '[class.ant-menu-rtl]': "dir === 'rtl'",
                      '[@collapseMotion]': 'expandState'
                  }
              },] }
  ];
  NzSubmenuInlineChildComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzSubmenuInlineChildComponent.propDecorators = {
      templateOutlet: [{ type: core.Input }],
      menuClass: [{ type: core.Input }],
      mode: [{ type: core.Input }],
      nzOpen: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSubmenuNoneInlineChildComponent = /** @class */ (function () {
      function NzSubmenuNoneInlineChildComponent(elementRef, directionality) {
          this.elementRef = elementRef;
          this.directionality = directionality;
          this.menuClass = '';
          this.theme = 'light';
          this.templateOutlet = null;
          this.isMenuInsideDropDown = false;
          this.mode = 'vertical';
          this.position = 'right';
          this.nzDisabled = false;
          this.nzOpen = false;
          this.subMenuMouseState = new core.EventEmitter();
          this.expandState = 'collapsed';
          this.dir = 'ltr';
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-menu-submenu', 'ant-menu-submenu-popup');
      }
      NzSubmenuNoneInlineChildComponent.prototype.setMouseState = function (state) {
          if (!this.nzDisabled) {
              this.subMenuMouseState.next(state);
          }
      };
      NzSubmenuNoneInlineChildComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzSubmenuNoneInlineChildComponent.prototype.calcMotionState = function () {
          if (this.nzOpen) {
              if (this.mode === 'horizontal') {
                  this.expandState = 'bottom';
              }
              else if (this.mode === 'vertical') {
                  this.expandState = 'active';
              }
          }
          else {
              this.expandState = 'collapsed';
          }
      };
      NzSubmenuNoneInlineChildComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.calcMotionState();
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
          });
      };
      NzSubmenuNoneInlineChildComponent.prototype.ngOnChanges = function (changes) {
          var mode = changes.mode, nzOpen = changes.nzOpen;
          if (mode || nzOpen) {
              this.calcMotionState();
          }
      };
      return NzSubmenuNoneInlineChildComponent;
  }());
  NzSubmenuNoneInlineChildComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-submenu-none-inline-child]',
                  exportAs: 'nzSubmenuNoneInlineChild',
                  encapsulation: core.ViewEncapsulation.None,
                  animations: [animation.zoomBigMotion, animation.slideMotion],
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div\n      [class.ant-dropdown-menu]=\"isMenuInsideDropDown\"\n      [class.ant-menu]=\"!isMenuInsideDropDown\"\n      [class.ant-dropdown-menu-vertical]=\"isMenuInsideDropDown\"\n      [class.ant-menu-vertical]=\"!isMenuInsideDropDown\"\n      [class.ant-dropdown-menu-sub]=\"isMenuInsideDropDown\"\n      [class.ant-menu-sub]=\"!isMenuInsideDropDown\"\n      [class.ant-menu-rtl]=\"dir === 'rtl'\"\n      [ngClass]=\"menuClass\"\n    >\n      <ng-template [ngTemplateOutlet]=\"templateOutlet\"></ng-template>\n    </div>\n  ",
                  host: {
                      '[class.ant-menu-light]': "theme === 'light'",
                      '[class.ant-menu-dark]': "theme === 'dark'",
                      '[class.ant-menu-submenu-placement-bottom]': "mode === 'horizontal'",
                      '[class.ant-menu-submenu-placement-right]': "mode === 'vertical' && position === 'right'",
                      '[class.ant-menu-submenu-placement-left]': "mode === 'vertical' && position === 'left'",
                      '[class.ant-menu-submenu-rtl]': 'dir ==="rtl"',
                      '[@slideMotion]': 'expandState',
                      '[@zoomBigMotion]': 'expandState',
                      '(mouseenter)': 'setMouseState(true)',
                      '(mouseleave)': 'setMouseState(false)'
                  }
              },] }
  ];
  NzSubmenuNoneInlineChildComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzSubmenuNoneInlineChildComponent.propDecorators = {
      menuClass: [{ type: core.Input }],
      theme: [{ type: core.Input }],
      templateOutlet: [{ type: core.Input }],
      isMenuInsideDropDown: [{ type: core.Input }],
      mode: [{ type: core.Input }],
      position: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzOpen: [{ type: core.Input }],
      subMenuMouseState: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzMenuModule = /** @class */ (function () {
      function NzMenuModule() {
      }
      return NzMenuModule;
  }());
  NzMenuModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [bidi.BidiModule, common.CommonModule, platform.PlatformModule, overlay$1.OverlayModule, icon.NzIconModule, noAnimation.NzNoAnimationModule, outlet.NzOutletModule],
                  declarations: [
                      NzMenuDirective,
                      NzMenuItemDirective,
                      NzSubMenuComponent,
                      NzMenuDividerDirective,
                      NzMenuGroupComponent,
                      NzSubMenuTitleComponent,
                      NzSubmenuInlineChildComponent,
                      NzSubmenuNoneInlineChildComponent
                  ],
                  exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.MenuDropDownTokenFactory = MenuDropDownTokenFactory;
  exports.MenuGroupFactory = MenuGroupFactory;
  exports.MenuService = MenuService;
  exports.MenuServiceFactory = MenuServiceFactory;
  exports.NzIsMenuInsideDropDownToken = NzIsMenuInsideDropDownToken;
  exports.NzMenuDirective = NzMenuDirective;
  exports.NzMenuDividerDirective = NzMenuDividerDirective;
  exports.NzMenuGroupComponent = NzMenuGroupComponent;
  exports.NzMenuItemDirective = NzMenuItemDirective;
  exports.NzMenuModule = NzMenuModule;
  exports.NzMenuServiceLocalToken = NzMenuServiceLocalToken;
  exports.NzSubMenuComponent = NzSubMenuComponent;
  exports.NzSubMenuTitleComponent = NzSubMenuTitleComponent;
  exports.NzSubmenuInlineChildComponent = NzSubmenuInlineChildComponent;
  exports.NzSubmenuNoneInlineChildComponent = NzSubmenuNoneInlineChildComponent;
  exports.NzSubmenuService = NzSubmenuService;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-menu.umd.js.map
