(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/color'), require('ng-zorro-antd/core/no-animation'), require('@angular/cdk/bidi'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/common'), require('ng-zorro-antd/core/outlet')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/tooltip', ['exports', '@angular/core', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/color', 'ng-zorro-antd/core/no-animation', '@angular/cdk/bidi', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', '@angular/common', 'ng-zorro-antd/core/outlet'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tooltip = {}), global.ng.core, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.color, global['ng-zorro-antd'].core['no-animation'], global.ng.cdk.bidi, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.overlay, global.ng.common, global['ng-zorro-antd'].core.outlet));
}(this, (function (exports, core, animation, color, noAnimation, bidi, config, overlay, util, rxjs, operators, overlay$1, common, outlet) { 'use strict';

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

  var NzTooltipBaseDirective = /** @class */ (function () {
      function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
          this.elementRef = elementRef;
          this.hostView = hostView;
          this.resolver = resolver;
          this.renderer = renderer;
          this.noAnimation = noAnimation;
          this.nzConfigService = nzConfigService;
          this.visibleChange = new core.EventEmitter();
          this.internalVisible = false;
          this.destroy$ = new rxjs.Subject();
          this.triggerDisposables = [];
      }
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_title", {
          /**
           * This true title that would be used in other parts on this component.
           */
          get: function () {
              return this.title || this.directiveTitle || null;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_content", {
          get: function () {
              return this.content || this.directiveContent || null;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_trigger", {
          get: function () {
              return typeof this.trigger !== 'undefined' ? this.trigger : 'hover';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_placement", {
          get: function () {
              var p = this.placement;
              return Array.isArray(p) && p.length > 0 ? p : typeof p === 'string' && p ? [p] : ['top'];
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_visible", {
          get: function () {
              return (typeof this.visible !== 'undefined' ? this.visible : this.internalVisible) || false;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_mouseEnterDelay", {
          get: function () {
              return this.mouseEnterDelay || 0.15;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_mouseLeaveDelay", {
          get: function () {
              return this.mouseLeaveDelay || 0.1;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_overlayClassName", {
          get: function () {
              return this.overlayClassName || null;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseDirective.prototype, "_overlayStyle", {
          get: function () {
              return this.overlayStyle || null;
          },
          enumerable: false,
          configurable: true
      });
      NzTooltipBaseDirective.prototype.getProxyPropertyMap = function () {
          var _this = this;
          return {
              noAnimation: ['noAnimation', function () { return _this.noAnimation; }]
          };
      };
      NzTooltipBaseDirective.prototype.ngOnChanges = function (changes) {
          var trigger = changes.trigger;
          if (trigger && !trigger.isFirstChange()) {
              this.registerTriggers();
          }
          if (this.component) {
              this.updatePropertiesByChanges(changes);
          }
      };
      NzTooltipBaseDirective.prototype.ngAfterViewInit = function () {
          this.createComponent();
          this.registerTriggers();
      };
      NzTooltipBaseDirective.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
          // Clear toggling timer. Issue #3875 #4317 #4386
          this.clearTogglingTimer();
          this.removeTriggerListeners();
      };
      NzTooltipBaseDirective.prototype.show = function () {
          var _a;
          (_a = this.component) === null || _a === void 0 ? void 0 : _a.show();
      };
      NzTooltipBaseDirective.prototype.hide = function () {
          var _a;
          (_a = this.component) === null || _a === void 0 ? void 0 : _a.hide();
      };
      /**
       * Force the component to update its position.
       */
      NzTooltipBaseDirective.prototype.updatePosition = function () {
          if (this.component) {
              this.component.updatePosition();
          }
      };
      /**
       * Create a dynamic tooltip component. This method can be override.
       */
      NzTooltipBaseDirective.prototype.createComponent = function () {
          var _this = this;
          var componentRef = this.hostView.createComponent(this.componentFactory);
          this.component = componentRef.instance;
          // Remove the component's DOM because it should be in the overlay container.
          this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
          this.component.setOverlayOrigin({ elementRef: this.origin || this.elementRef });
          this.initProperties();
          this.component.nzVisibleChange.pipe(operators.distinctUntilChanged(), operators.takeUntil(this.destroy$)).subscribe(function (visible) {
              _this.internalVisible = visible;
              _this.visibleChange.emit(visible);
          });
      };
      NzTooltipBaseDirective.prototype.registerTriggers = function () {
          var _this = this;
          // When the method gets invoked, all properties has been synced to the dynamic component.
          // After removing the old API, we can just check the directive's own `nzTrigger`.
          var el = this.elementRef.nativeElement;
          var trigger = this.trigger;
          this.removeTriggerListeners();
          if (trigger === 'hover') {
              var overlayElement_1;
              this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', function () {
                  _this.delayEnterLeave(true, true, _this._mouseEnterDelay);
              }));
              this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', function () {
                  var _a;
                  _this.delayEnterLeave(true, false, _this._mouseLeaveDelay);
                  if (((_a = _this.component) === null || _a === void 0 ? void 0 : _a.overlay.overlayRef) && !overlayElement_1) {
                      overlayElement_1 = _this.component.overlay.overlayRef.overlayElement;
                      _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseenter', function () {
                          _this.delayEnterLeave(false, true, _this._mouseEnterDelay);
                      }));
                      _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseleave', function () {
                          _this.delayEnterLeave(false, false, _this._mouseLeaveDelay);
                      }));
                  }
              }));
          }
          else if (trigger === 'focus') {
              this.triggerDisposables.push(this.renderer.listen(el, 'focus', function () { return _this.show(); }));
              this.triggerDisposables.push(this.renderer.listen(el, 'blur', function () { return _this.hide(); }));
          }
          else if (trigger === 'click') {
              this.triggerDisposables.push(this.renderer.listen(el, 'click', function (e) {
                  e.preventDefault();
                  _this.show();
              }));
          }
          // Else do nothing because user wants to control the visibility programmatically.
      };
      NzTooltipBaseDirective.prototype.updatePropertiesByChanges = function (changes) {
          this.updatePropertiesByKeys(Object.keys(changes));
      };
      NzTooltipBaseDirective.prototype.updatePropertiesByKeys = function (keys) {
          var _this = this;
          var _a;
          var mappingProperties = Object.assign({
              // common mappings
              title: ['nzTitle', function () { return _this._title; }], directiveTitle: ['nzTitle', function () { return _this._title; }], content: ['nzContent', function () { return _this._content; }], directiveContent: ['nzContent', function () { return _this._content; }], trigger: ['nzTrigger', function () { return _this._trigger; }], placement: ['nzPlacement', function () { return _this._placement; }], visible: ['nzVisible', function () { return _this._visible; }], mouseEnterDelay: ['nzMouseEnterDelay', function () { return _this._mouseEnterDelay; }], mouseLeaveDelay: ['nzMouseLeaveDelay', function () { return _this._mouseLeaveDelay; }], overlayClassName: ['nzOverlayClassName', function () { return _this._overlayClassName; }], overlayStyle: ['nzOverlayStyle', function () { return _this._overlayStyle; }]
          }, this.getProxyPropertyMap());
          (keys || Object.keys(mappingProperties).filter(function (key) { return !key.startsWith('directive'); })).forEach(function (property) {
              if (mappingProperties[property]) {
                  var _b = __read(mappingProperties[property], 2), name = _b[0], valueFn = _b[1];
                  _this.updateComponentValue(name, valueFn());
              }
          });
          (_a = this.component) === null || _a === void 0 ? void 0 : _a.updateByDirective();
      };
      NzTooltipBaseDirective.prototype.initProperties = function () {
          this.updatePropertiesByKeys();
      };
      NzTooltipBaseDirective.prototype.updateComponentValue = function (key, value) {
          if (typeof value !== 'undefined') {
              // @ts-ignore
              this.component[key] = value;
          }
      };
      NzTooltipBaseDirective.prototype.delayEnterLeave = function (isOrigin, isEnter, delay) {
          var _this = this;
          if (delay === void 0) { delay = -1; }
          if (this.delayTimer) {
              this.clearTogglingTimer();
          }
          else if (delay > 0) {
              this.delayTimer = setTimeout(function () {
                  _this.delayTimer = undefined;
                  isEnter ? _this.show() : _this.hide();
              }, delay * 1000);
          }
          else {
              // `isOrigin` is used due to the tooltip will not hide immediately
              // (may caused by the fade-out animation).
              isEnter && isOrigin ? this.show() : this.hide();
          }
      };
      NzTooltipBaseDirective.prototype.removeTriggerListeners = function () {
          this.triggerDisposables.forEach(function (dispose) { return dispose(); });
          this.triggerDisposables.length = 0;
      };
      NzTooltipBaseDirective.prototype.clearTogglingTimer = function () {
          if (this.delayTimer) {
              clearTimeout(this.delayTimer);
              this.delayTimer = undefined;
          }
      };
      return NzTooltipBaseDirective;
  }());
  NzTooltipBaseDirective.decorators = [
      { type: core.Directive }
  ];
  NzTooltipBaseDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.ViewContainerRef },
      { type: core.ComponentFactoryResolver },
      { type: core.Renderer2 },
      { type: noAnimation.NzNoAnimationDirective },
      { type: config.NzConfigService }
  ]; };
  // tslint:disable-next-line:directive-class-suffix
  var NzTooltipBaseComponent = /** @class */ (function () {
      function NzTooltipBaseComponent(cdr, directionality, noAnimation) {
          this.cdr = cdr;
          this.directionality = directionality;
          this.noAnimation = noAnimation;
          this.nzTitle = null;
          this.nzContent = null;
          this.nzOverlayStyle = {};
          this.nzBackdrop = false;
          this.nzVisibleChange = new rxjs.Subject();
          this._visible = false;
          this._trigger = 'hover';
          this.preferredPlacement = 'top';
          this.dir = 'ltr';
          this._classMap = {};
          this._prefix = 'ant-tooltip';
          this._positions = __spread(overlay.DEFAULT_TOOLTIP_POSITIONS);
          this.destroy$ = new rxjs.Subject();
      }
      Object.defineProperty(NzTooltipBaseComponent.prototype, "nzVisible", {
          get: function () {
              return this._visible;
          },
          set: function (value) {
              var visible = util.toBoolean(value);
              if (this._visible !== visible) {
                  this._visible = visible;
                  this.nzVisibleChange.next(visible);
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseComponent.prototype, "nzTrigger", {
          get: function () {
              return this._trigger;
          },
          set: function (value) {
              this._trigger = value;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTooltipBaseComponent.prototype, "nzPlacement", {
          set: function (value) {
              var preferredPosition = value.map(function (placement) { return overlay.POSITION_MAP[placement]; });
              this._positions = __spread(preferredPosition, overlay.DEFAULT_TOOLTIP_POSITIONS);
          },
          enumerable: false,
          configurable: true
      });
      NzTooltipBaseComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
          this.dir = this.directionality.value;
      };
      NzTooltipBaseComponent.prototype.ngOnDestroy = function () {
          this.nzVisibleChange.complete();
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTooltipBaseComponent.prototype.show = function () {
          if (this.nzVisible) {
              return;
          }
          if (!this.isEmpty()) {
              this.nzVisible = true;
              this.nzVisibleChange.next(true);
              this.cdr.detectChanges();
          }
          // for ltr for overlay to display tooltip in correct placement in rtl direction.
          if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === 'rtl') {
              this.overlay.overlayRef.setDirection('ltr');
          }
      };
      NzTooltipBaseComponent.prototype.hide = function () {
          if (!this.nzVisible) {
              return;
          }
          this.nzVisible = false;
          this.nzVisibleChange.next(false);
          this.cdr.detectChanges();
      };
      NzTooltipBaseComponent.prototype.updateByDirective = function () {
          var _this = this;
          this.updateStyles();
          this.cdr.detectChanges();
          Promise.resolve().then(function () {
              _this.updatePosition();
              _this.updateVisibilityByTitle();
          });
      };
      /**
       * Force the component to update its position.
       */
      NzTooltipBaseComponent.prototype.updatePosition = function () {
          if (this.origin && this.overlay && this.overlay.overlayRef) {
              this.overlay.overlayRef.updatePosition();
          }
      };
      NzTooltipBaseComponent.prototype.onPositionChange = function (position) {
          this.preferredPlacement = overlay.getPlacementName(position);
          this.updateStyles();
          // We have to trigger immediate change detection or the element would blink.
          this.cdr.detectChanges();
      };
      NzTooltipBaseComponent.prototype.updateStyles = function () {
          var _b;
          this._classMap = (_b = {},
              _b[this.nzOverlayClassName] = true,
              _b[this._prefix + "-placement-" + this.preferredPlacement] = true,
              _b);
      };
      NzTooltipBaseComponent.prototype.setOverlayOrigin = function (origin) {
          this.origin = origin;
          this.cdr.markForCheck();
      };
      NzTooltipBaseComponent.prototype.onClickOutside = function (event) {
          if (!this.origin.elementRef.nativeElement.contains(event.target) && this.nzTrigger !== null) {
              this.hide();
          }
      };
      /**
       * Hide the component while the content is empty.
       */
      NzTooltipBaseComponent.prototype.updateVisibilityByTitle = function () {
          if (this.isEmpty()) {
              this.hide();
          }
      };
      return NzTooltipBaseComponent;
  }());
  NzTooltipBaseComponent.decorators = [
      { type: core.Directive }
  ];
  NzTooltipBaseComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: noAnimation.NzNoAnimationDirective }
  ]; };
  NzTooltipBaseComponent.propDecorators = {
      overlay: [{ type: core.ViewChild, args: ['overlay', { static: false },] }]
  };
  function isTooltipEmpty(value) {
      return value instanceof core.TemplateRef ? false : value === '' || !util.isNotNil(value);
  }

  var NzTooltipDirective = /** @class */ (function (_super) {
      __extends(NzTooltipDirective, _super);
      function NzTooltipDirective(elementRef, hostView, resolver, renderer, noAnimation) {
          var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
          _this.trigger = 'hover';
          _this.placement = 'top';
          // tslint:disable-next-line:no-output-rename
          _this.visibleChange = new core.EventEmitter();
          _this.componentFactory = _this.resolver.resolveComponentFactory(NzToolTipComponent);
          return _this;
      }
      NzTooltipDirective.prototype.getProxyPropertyMap = function () {
          var _this = this;
          return {
              nzTooltipColor: ['nzColor', function () { return _this.nzTooltipColor; }]
          };
      };
      return NzTooltipDirective;
  }(NzTooltipBaseDirective));
  NzTooltipDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-tooltip]',
                  exportAs: 'nzTooltip',
                  host: {
                      '[class.ant-tooltip-open]': 'visible'
                  }
              },] }
  ];
  NzTooltipDirective.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.ViewContainerRef },
      { type: core.ComponentFactoryResolver },
      { type: core.Renderer2 },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };
  NzTooltipDirective.propDecorators = {
      title: [{ type: core.Input, args: ['nzTooltipTitle',] }],
      directiveTitle: [{ type: core.Input, args: ['nz-tooltip',] }],
      trigger: [{ type: core.Input, args: ['nzTooltipTrigger',] }],
      placement: [{ type: core.Input, args: ['nzTooltipPlacement',] }],
      origin: [{ type: core.Input, args: ['nzTooltipOrigin',] }],
      visible: [{ type: core.Input, args: ['nzTooltipVisible',] }],
      mouseEnterDelay: [{ type: core.Input, args: ['nzTooltipMouseEnterDelay',] }],
      mouseLeaveDelay: [{ type: core.Input, args: ['nzTooltipMouseLeaveDelay',] }],
      overlayClassName: [{ type: core.Input, args: ['nzTooltipOverlayClassName',] }],
      overlayStyle: [{ type: core.Input, args: ['nzTooltipOverlayStyle',] }],
      nzTooltipColor: [{ type: core.Input }],
      visibleChange: [{ type: core.Output, args: ['nzTooltipVisibleChange',] }]
  };
  var NzToolTipComponent = /** @class */ (function (_super) {
      __extends(NzToolTipComponent, _super);
      function NzToolTipComponent(cdr, directionality, noAnimation) {
          var _this = _super.call(this, cdr, directionality, noAnimation) || this;
          _this.noAnimation = noAnimation;
          _this.nzTitle = null;
          _this._contentStyleMap = {};
          return _this;
      }
      NzToolTipComponent.prototype.isEmpty = function () {
          return isTooltipEmpty(this.nzTitle);
      };
      NzToolTipComponent.prototype.updateStyles = function () {
          var _a;
          var isColorPreset = this.nzColor && color.isPresetColor(this.nzColor);
          this._classMap = (_a = {},
              _a[this.nzOverlayClassName] = true,
              _a[this._prefix + "-placement-" + this.preferredPlacement] = true,
              _a[this._prefix + "-" + this.nzColor] = isColorPreset,
              _a);
          this._contentStyleMap = {
              backgroundColor: !!this.nzColor && !isColorPreset ? this.nzColor : null
          };
      };
      return NzToolTipComponent;
  }(NzTooltipBaseComponent));
  NzToolTipComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tooltip',
                  exportAs: 'nzTooltipComponent',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  animations: [animation.zoomBigMotion],
                  template: "\n    <ng-template\n      #overlay=\"cdkConnectedOverlay\"\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayOpen]=\"_visible\"\n      [cdkConnectedOverlayPositions]=\"_positions\"\n      [cdkConnectedOverlayPush]=\"true\"\n      (overlayOutsideClick)=\"onClickOutside($event)\"\n      (detach)=\"hide()\"\n      (positionChange)=\"onPositionChange($event)\"\n    >\n      <div\n        class=\"ant-tooltip\"\n        [class.ant-tooltip-rtl]=\"dir === 'rtl'\"\n        [ngClass]=\"_classMap\"\n        [ngStyle]=\"nzOverlayStyle\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [@zoomBigMotion]=\"'active'\"\n      >\n        <div class=\"ant-tooltip-content\">\n          <div class=\"ant-tooltip-arrow\">\n            <span class=\"ant-tooltip-arrow-content\" [ngStyle]=\"_contentStyleMap\"></span>\n          </div>\n          <div class=\"ant-tooltip-inner\" [ngStyle]=\"_contentStyleMap\">\n            <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  ",
                  preserveWhitespaces: false
              },] }
  ];
  NzToolTipComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzToolTipModule = /** @class */ (function () {
      function NzToolTipModule() {
      }
      return NzToolTipModule;
  }());
  NzToolTipModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [NzToolTipComponent, NzTooltipDirective],
                  exports: [NzToolTipComponent, NzTooltipDirective],
                  entryComponents: [NzToolTipComponent],
                  imports: [bidi.BidiModule, common.CommonModule, overlay$1.OverlayModule, outlet.NzOutletModule, overlay.NzOverlayModule, noAnimation.NzNoAnimationModule]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzToolTipComponent = NzToolTipComponent;
  exports.NzToolTipModule = NzToolTipModule;
  exports.NzTooltipBaseComponent = NzTooltipBaseComponent;
  exports.NzTooltipBaseDirective = NzTooltipBaseDirective;
  exports.NzTooltipDirective = NzTooltipDirective;
  exports.isTooltipEmpty = isTooltipEmpty;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tooltip.umd.js.map
