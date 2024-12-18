(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/portal'), require('@angular/core'), require('ng-zorro-antd/core/config'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('ng-zorro-antd/core/services'), require('ng-zorro-antd/core/util'), require('@angular/cdk/bidi'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/animation')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/message', ['exports', '@angular/cdk/portal', '@angular/core', 'ng-zorro-antd/core/config', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', 'ng-zorro-antd/core/services', 'ng-zorro-antd/core/util', '@angular/cdk/bidi', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/animation'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].message = {}), global.ng.cdk.portal, global.ng.core, global['ng-zorro-antd'].core.config, global.rxjs, global.rxjs.operators, global.ng.cdk.overlay, global['ng-zorro-antd'].core.services, global['ng-zorro-antd'].core.util, global.ng.cdk.bidi, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core.animation));
}(this, (function (exports, portal, i0, config, rxjs, operators, i2, i1, util, bidi, common, outlet, icon, animation) { 'use strict';

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

  var globalCounter = 0;
  var NzMNService = /** @class */ (function () {
      function NzMNService(nzSingletonService, overlay, injector) {
          this.nzSingletonService = nzSingletonService;
          this.overlay = overlay;
          this.injector = injector;
      }
      NzMNService.prototype.remove = function (id) {
          if (this.container) {
              if (id) {
                  this.container.remove(id);
              }
              else {
                  this.container.removeAll();
              }
          }
      };
      NzMNService.prototype.getInstanceId = function () {
          return this.componentPrefix + "-" + globalCounter++;
      };
      NzMNService.prototype.withContainer = function (ctor) {
          var containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
          if (containerInstance) {
              return containerInstance;
          }
          var overlayRef = this.overlay.create({
              hasBackdrop: false,
              scrollStrategy: this.overlay.scrollStrategies.noop(),
              positionStrategy: this.overlay.position().global()
          });
          var componentPortal = new portal.ComponentPortal(ctor, null, this.injector);
          var componentRef = overlayRef.attach(componentPortal);
          var overlayPane = overlayRef.overlayElement;
          overlayPane.style.zIndex = '1010';
          if (!containerInstance) {
              this.container = containerInstance = componentRef.instance;
              this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
          }
          return containerInstance;
      };
      return NzMNService;
  }());
  var NzMNContainerComponent = /** @class */ (function () {
      function NzMNContainerComponent(cdr, nzConfigService) {
          this.cdr = cdr;
          this.nzConfigService = nzConfigService;
          this.instances = [];
          this.destroy$ = new rxjs.Subject();
          this.updateConfig();
      }
      NzMNContainerComponent.prototype.ngOnInit = function () {
          this.subscribeConfigChange();
      };
      NzMNContainerComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzMNContainerComponent.prototype.create = function (data) {
          var instance = this.onCreate(data);
          if (this.instances.length >= this.config.nzMaxStack) {
              this.instances = this.instances.slice(1);
          }
          this.instances = __spread(this.instances, [instance]);
          this.readyInstances();
          return instance;
      };
      NzMNContainerComponent.prototype.remove = function (id, userAction) {
          var _this = this;
          if (userAction === void 0) { userAction = false; }
          this.instances.some(function (instance, index) {
              if (instance.messageId === id) {
                  _this.instances.splice(index, 1);
                  _this.instances = __spread(_this.instances);
                  _this.onRemove(instance, userAction);
                  _this.readyInstances();
                  return true;
              }
              return false;
          });
      };
      NzMNContainerComponent.prototype.removeAll = function () {
          var _this = this;
          this.instances.forEach(function (i) { return _this.onRemove(i, false); });
          this.instances = [];
          this.readyInstances();
      };
      NzMNContainerComponent.prototype.onCreate = function (instance) {
          instance.options = this.mergeOptions(instance.options);
          instance.onClose = new rxjs.Subject();
          return instance;
      };
      NzMNContainerComponent.prototype.onRemove = function (instance, userAction) {
          instance.onClose.next(userAction);
          instance.onClose.complete();
      };
      NzMNContainerComponent.prototype.readyInstances = function () {
          this.cdr.detectChanges();
      };
      NzMNContainerComponent.prototype.mergeOptions = function (options) {
          var _a = this.config, nzDuration = _a.nzDuration, nzAnimate = _a.nzAnimate, nzPauseOnHover = _a.nzPauseOnHover;
          return Object.assign({ nzDuration: nzDuration, nzAnimate: nzAnimate, nzPauseOnHover: nzPauseOnHover }, options);
      };
      return NzMNContainerComponent;
  }());
  NzMNContainerComponent.decorators = [
      { type: i0.Directive }
  ];
  NzMNContainerComponent.ctorParameters = function () { return [
      { type: i0.ChangeDetectorRef },
      { type: config.NzConfigService }
  ]; };
  var NzMNComponent = /** @class */ (function () {
      function NzMNComponent(cdr) {
          this.cdr = cdr;
          this.destroyed = new i0.EventEmitter();
          this.animationStateChanged = new rxjs.Subject();
          this.userAction = false;
          this.eraseTimer = null;
      }
      NzMNComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.options = this.instance.options;
          if (this.options.nzAnimate) {
              this.instance.state = 'enter';
              this.animationStateChanged
                  .pipe(operators.filter(function (event) { return event.phaseName === 'done' && event.toState === 'leave'; }), operators.take(1))
                  .subscribe(function () {
                  clearTimeout(_this.closeTimer);
                  _this.destroyed.next({ id: _this.instance.messageId, userAction: _this.userAction });
              });
          }
          this.autoClose = this.options.nzDuration > 0;
          if (this.autoClose) {
              this.initErase();
              this.startEraseTimeout();
          }
      };
      NzMNComponent.prototype.ngOnDestroy = function () {
          if (this.autoClose) {
              this.clearEraseTimeout();
          }
          this.animationStateChanged.complete();
      };
      NzMNComponent.prototype.onEnter = function () {
          if (this.autoClose && this.options.nzPauseOnHover) {
              this.clearEraseTimeout();
              this.updateTTL();
          }
      };
      NzMNComponent.prototype.onLeave = function () {
          if (this.autoClose && this.options.nzPauseOnHover) {
              this.startEraseTimeout();
          }
      };
      NzMNComponent.prototype.destroy = function (userAction) {
          var _this = this;
          if (userAction === void 0) { userAction = false; }
          this.userAction = userAction;
          if (this.options.nzAnimate) {
              this.instance.state = 'leave';
              this.cdr.detectChanges();
              this.closeTimer = setTimeout(function () {
                  _this.closeTimer = undefined;
                  _this.destroyed.next({ id: _this.instance.messageId, userAction: userAction });
              }, 200);
          }
          else {
              this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
          }
      };
      NzMNComponent.prototype.initErase = function () {
          this.eraseTTL = this.options.nzDuration;
          this.eraseTimingStart = Date.now();
      };
      NzMNComponent.prototype.updateTTL = function () {
          if (this.autoClose) {
              this.eraseTTL -= Date.now() - this.eraseTimingStart;
          }
      };
      NzMNComponent.prototype.startEraseTimeout = function () {
          var _this = this;
          if (this.eraseTTL > 0) {
              this.clearEraseTimeout();
              this.eraseTimer = setTimeout(function () { return _this.destroy(); }, this.eraseTTL);
              this.eraseTimingStart = Date.now();
          }
          else {
              this.destroy();
          }
      };
      NzMNComponent.prototype.clearEraseTimeout = function () {
          if (this.eraseTimer !== null) {
              clearTimeout(this.eraseTimer);
              this.eraseTimer = null;
          }
      };
      return NzMNComponent;
  }());
  NzMNComponent.decorators = [
      { type: i0.Directive }
  ];
  NzMNComponent.ctorParameters = function () { return [
      { type: i0.ChangeDetectorRef }
  ]; };

  var NZ_CONFIG_COMPONENT_NAME = 'message';
  var NZ_MESSAGE_DEFAULT_CONFIG = {
      nzAnimate: true,
      nzDuration: 3000,
      nzMaxStack: 7,
      nzPauseOnHover: true,
      nzTop: 24,
      nzDirection: 'ltr'
  };
  var NzMessageContainerComponent = /** @class */ (function (_super) {
      __extends(NzMessageContainerComponent, _super);
      function NzMessageContainerComponent(cdr, nzConfigService) {
          var _this = _super.call(this, cdr, nzConfigService) || this;
          _this.destroy$ = new rxjs.Subject();
          _this.dir = 'ltr';
          _this.instances = [];
          var config = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
          _this.dir = (config === null || config === void 0 ? void 0 : config.nzDirection) || 'ltr';
          return _this;
      }
      NzMessageContainerComponent.prototype.subscribeConfigChange = function () {
          var _this = this;
          this.nzConfigService
              .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function () {
              _this.updateConfig();
              var config = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
              if (config) {
                  var nzDirection = config.nzDirection;
                  _this.dir = nzDirection || _this.dir;
              }
          });
      };
      NzMessageContainerComponent.prototype.updateConfig = function () {
          this.config = Object.assign(Object.assign(Object.assign({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
          this.top = util.toCssPixel(this.config.nzTop);
          this.cdr.markForCheck();
      };
      return NzMessageContainerComponent;
  }(NzMNContainerComponent));
  NzMessageContainerComponent.decorators = [
      { type: i0.Component, args: [{
                  changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  encapsulation: i0.ViewEncapsulation.None,
                  selector: 'nz-message-container',
                  exportAs: 'nzMessageContainer',
                  preserveWhitespaces: false,
                  template: "\n    <div class=\"ant-message\" [class.ant-message-rtl]=\"dir === 'rtl'\" [style.top]=\"top\">\n      <nz-message *ngFor=\"let instance of instances\" [instance]=\"instance\" (destroyed)=\"remove($event.id, $event.userAction)\"></nz-message>\n    </div>\n  "
              },] }
  ];
  NzMessageContainerComponent.ctorParameters = function () { return [
      { type: i0.ChangeDetectorRef },
      { type: config.NzConfigService }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzMessageServiceModule = /** @class */ (function () {
      function NzMessageServiceModule() {
      }
      return NzMessageServiceModule;
  }());
  NzMessageServiceModule.decorators = [
      { type: i0.NgModule }
  ];

  var NzMessageService = /** @class */ (function (_super) {
      __extends(NzMessageService, _super);
      function NzMessageService(nzSingletonService, overlay, injector) {
          var _this = _super.call(this, nzSingletonService, overlay, injector) || this;
          _this.componentPrefix = 'message-';
          return _this;
      }
      NzMessageService.prototype.success = function (content, options) {
          return this.createInstance({ type: 'success', content: content }, options);
      };
      NzMessageService.prototype.error = function (content, options) {
          return this.createInstance({ type: 'error', content: content }, options);
      };
      NzMessageService.prototype.info = function (content, options) {
          return this.createInstance({ type: 'info', content: content }, options);
      };
      NzMessageService.prototype.warning = function (content, options) {
          return this.createInstance({ type: 'warning', content: content }, options);
      };
      NzMessageService.prototype.loading = function (content, options) {
          return this.createInstance({ type: 'loading', content: content }, options);
      };
      NzMessageService.prototype.create = function (type, content, options) {
          return this.createInstance({ type: type, content: content }, options);
      };
      NzMessageService.prototype.createInstance = function (message, options) {
          this.container = this.withContainer(NzMessageContainerComponent);
          return this.container.create(Object.assign(Object.assign({}, message), {
              createdAt: new Date(),
              messageId: this.getInstanceId(),
              options: options
          }));
      };
      return NzMessageService;
  }(NzMNService));
  NzMessageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR)); }, token: NzMessageService, providedIn: NzMessageServiceModule });
  NzMessageService.decorators = [
      { type: i0.Injectable, args: [{
                  providedIn: NzMessageServiceModule
              },] }
  ];
  NzMessageService.ctorParameters = function () { return [
      { type: i1.NzSingletonService },
      { type: i2.Overlay },
      { type: i0.Injector }
  ]; };

  var NzMessageComponent = /** @class */ (function (_super) {
      __extends(NzMessageComponent, _super);
      function NzMessageComponent(cdr) {
          var _this = _super.call(this, cdr) || this;
          _this.destroyed = new i0.EventEmitter();
          return _this;
      }
      return NzMessageComponent;
  }(NzMNComponent));
  NzMessageComponent.decorators = [
      { type: i0.Component, args: [{
                  changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  encapsulation: i0.ViewEncapsulation.None,
                  selector: 'nz-message',
                  exportAs: 'nzMessage',
                  preserveWhitespaces: false,
                  animations: [animation.moveUpMotion],
                  template: "\n    <div\n      class=\"ant-message-notice\"\n      [@moveUpMotion]=\"instance.state\"\n      (@moveUpMotion.done)=\"animationStateChanged.next($event)\"\n      (mouseenter)=\"onEnter()\"\n      (mouseleave)=\"onLeave()\"\n    >\n      <div class=\"ant-message-notice-content\">\n        <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + instance.type\">\n          <ng-container [ngSwitch]=\"instance.type\">\n            <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\"></i>\n            <i *ngSwitchCase=\"'info'\" nz-icon nzType=\"info-circle\"></i>\n            <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\"></i>\n            <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\"></i>\n            <i *ngSwitchCase=\"'loading'\" nz-icon nzType=\"loading\"></i>\n          </ng-container>\n          <ng-container *nzStringTemplateOutlet=\"instance.content\">\n            <span [innerHTML]=\"instance.content\"></span>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  "
              },] }
  ];
  NzMessageComponent.ctorParameters = function () { return [
      { type: i0.ChangeDetectorRef }
  ]; };
  NzMessageComponent.propDecorators = {
      instance: [{ type: i0.Input }],
      destroyed: [{ type: i0.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzMessageModule = /** @class */ (function () {
      function NzMessageModule() {
      }
      return NzMessageModule;
  }());
  NzMessageModule.decorators = [
      { type: i0.NgModule, args: [{
                  imports: [bidi.BidiModule, common.CommonModule, i2.OverlayModule, icon.NzIconModule, outlet.NzOutletModule, NzMessageServiceModule],
                  declarations: [NzMessageContainerComponent, NzMessageComponent],
                  entryComponents: [NzMessageContainerComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzMNComponent = NzMNComponent;
  exports.NzMNContainerComponent = NzMNContainerComponent;
  exports.NzMNService = NzMNService;
  exports.NzMessageComponent = NzMessageComponent;
  exports.NzMessageContainerComponent = NzMessageContainerComponent;
  exports.NzMessageModule = NzMessageModule;
  exports.NzMessageService = NzMessageService;
  exports.NzMessageServiceModule = NzMessageServiceModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-message.umd.js.map
