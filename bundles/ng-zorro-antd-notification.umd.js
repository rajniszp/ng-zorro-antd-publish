(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/message'), require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/services')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/notification', ['exports', '@angular/core', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/message', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/services'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].notification = {}), global.ng.core, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].message, global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core.services));
}(this, (function (exports, i0, animation, message, bidi, i2, common, outlet, icon, config, util, rxjs, operators, i1) { 'use strict';

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

  var NzNotificationComponent = /** @class */ (function (_super) {
      __extends(NzNotificationComponent, _super);
      function NzNotificationComponent(cdr) {
          var _this = _super.call(this, cdr) || this;
          _this.destroyed = new i0.EventEmitter();
          return _this;
      }
      NzNotificationComponent.prototype.ngOnDestroy = function () {
          _super.prototype.ngOnDestroy.call(this);
          this.instance.onClick.complete();
      };
      NzNotificationComponent.prototype.onClick = function (event) {
          this.instance.onClick.next(event);
      };
      NzNotificationComponent.prototype.close = function () {
          this.destroy(true);
      };
      Object.defineProperty(NzNotificationComponent.prototype, "state", {
          get: function () {
              if (this.instance.state === 'enter') {
                  if (this.placement === 'topLeft' || this.placement === 'bottomLeft') {
                      return 'enterLeft';
                  }
                  else {
                      return 'enterRight';
                  }
              }
              else {
                  return this.instance.state;
              }
          },
          enumerable: false,
          configurable: true
      });
      return NzNotificationComponent;
  }(message.NzMNComponent));
  NzNotificationComponent.decorators = [
      { type: i0.Component, args: [{
                  encapsulation: i0.ViewEncapsulation.None,
                  selector: 'nz-notification',
                  exportAs: 'nzNotification',
                  preserveWhitespaces: false,
                  animations: [animation.notificationMotion],
                  template: "\n    <div\n      class=\"ant-notification-notice ant-notification-notice-closable\"\n      [ngStyle]=\"instance.options?.nzStyle || null\"\n      [ngClass]=\"instance.options?.nzClass || ''\"\n      [@notificationMotion]=\"state\"\n      (@notificationMotion.done)=\"animationStateChanged.next($event)\"\n      (click)=\"onClick($event)\"\n      (mouseenter)=\"onEnter()\"\n      (mouseleave)=\"onLeave()\"\n    >\n      <div *ngIf=\"!instance.template\" class=\"ant-notification-notice-content\">\n        <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': instance.type !== 'blank' }\">\n          <div [class.ant-notification-notice-with-icon]=\"instance.type !== 'blank'\">\n            <ng-container [ngSwitch]=\"instance.type\">\n              <i\n                *ngSwitchCase=\"'success'\"\n                nz-icon\n                nzType=\"check-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'info'\"\n                nz-icon\n                nzType=\"info-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'warning'\"\n                nz-icon\n                nzType=\"exclamation-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'error'\"\n                nz-icon\n                nzType=\"close-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"\n              ></i>\n            </ng-container>\n            <div class=\"ant-notification-notice-message\" [innerHTML]=\"instance.title\"></div>\n            <div class=\"ant-notification-notice-description\" [innerHTML]=\"instance.content\"></div>\n          </div>\n        </div>\n      </div>\n      <ng-template\n        [ngIf]=\"instance.template\"\n        [ngTemplateOutlet]=\"instance.template!\"\n        [ngTemplateOutletContext]=\"{ $implicit: this, data: instance.options?.nzData }\"\n      ></ng-template>\n      <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\n        <span class=\"ant-notification-notice-close-x\">\n          <ng-container *ngIf=\"instance.options?.nzCloseIcon; else iconTpl\">\n            <ng-container *nzStringTemplateOutlet=\"instance.options?.nzCloseIcon; let closeIcon\">\n              <i nz-icon [nzType]=\"closeIcon\"></i>\n            </ng-container>\n          </ng-container>\n          <ng-template #iconTpl>\n            <i nz-icon nzType=\"close\" class=\"ant-notification-close-icon\"></i>\n          </ng-template>\n        </span>\n      </a>\n    </div>\n  "
              },] }
  ];
  NzNotificationComponent.ctorParameters = function () { return [
      { type: i0.ChangeDetectorRef }
  ]; };
  NzNotificationComponent.propDecorators = {
      instance: [{ type: i0.Input }],
      placement: [{ type: i0.Input }],
      index: [{ type: i0.Input }],
      destroyed: [{ type: i0.Output }]
  };

  var NZ_CONFIG_MODULE_NAME = 'notification';
  var NZ_NOTIFICATION_DEFAULT_CONFIG = {
      nzTop: '24px',
      nzBottom: '24px',
      nzPlacement: 'topRight',
      nzDuration: 4500,
      nzMaxStack: 7,
      nzPauseOnHover: true,
      nzAnimate: true,
      nzDirection: 'ltr'
  };
  var NzNotificationContainerComponent = /** @class */ (function (_super) {
      __extends(NzNotificationContainerComponent, _super);
      function NzNotificationContainerComponent(cdr, nzConfigService) {
          var _this = _super.call(this, cdr, nzConfigService) || this;
          _this.dir = 'ltr';
          _this.instances = [];
          _this.topLeftInstances = [];
          _this.topRightInstances = [];
          _this.bottomLeftInstances = [];
          _this.bottomRightInstances = [];
          var config = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
          _this.dir = (config === null || config === void 0 ? void 0 : config.nzDirection) || 'ltr';
          return _this;
      }
      NzNotificationContainerComponent.prototype.create = function (notification) {
          var noti = this.onCreate(notification);
          var key = noti.options.nzKey;
          var notificationWithSameKey = this.instances.find(function (msg) { return msg.options.nzKey === notification.options.nzKey; });
          if (key && notificationWithSameKey) {
              this.replaceNotification(notificationWithSameKey, noti);
          }
          else {
              if (this.instances.length >= this.config.nzMaxStack) {
                  this.instances = this.instances.slice(1);
              }
              this.instances = __spread(this.instances, [noti]);
          }
          this.readyInstances();
          return noti;
      };
      NzNotificationContainerComponent.prototype.onCreate = function (instance) {
          instance.options = this.mergeOptions(instance.options);
          instance.onClose = new rxjs.Subject();
          instance.onClick = new rxjs.Subject();
          return instance;
      };
      NzNotificationContainerComponent.prototype.subscribeConfigChange = function () {
          var _this = this;
          this.nzConfigService
              .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function () {
              _this.updateConfig();
              var config = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
              if (config) {
                  var nzDirection = config.nzDirection;
                  _this.dir = nzDirection || _this.dir;
              }
          });
      };
      NzNotificationContainerComponent.prototype.updateConfig = function () {
          this.config = Object.assign(Object.assign(Object.assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME));
          this.top = util.toCssPixel(this.config.nzTop);
          this.bottom = util.toCssPixel(this.config.nzBottom);
          this.cdr.markForCheck();
      };
      NzNotificationContainerComponent.prototype.replaceNotification = function (old, _new) {
          old.title = _new.title;
          old.content = _new.content;
          old.template = _new.template;
          old.type = _new.type;
          old.options = _new.options;
      };
      NzNotificationContainerComponent.prototype.readyInstances = function () {
          this.topLeftInstances = this.instances.filter(function (m) { return m.options.nzPlacement === 'topLeft'; });
          this.topRightInstances = this.instances.filter(function (m) { return m.options.nzPlacement === 'topRight' || !m.options.nzPlacement; });
          this.bottomLeftInstances = this.instances.filter(function (m) { return m.options.nzPlacement === 'bottomLeft'; });
          this.bottomRightInstances = this.instances.filter(function (m) { return m.options.nzPlacement === 'bottomRight'; });
          this.cdr.detectChanges();
      };
      NzNotificationContainerComponent.prototype.mergeOptions = function (options) {
          var _a = this.config, nzDuration = _a.nzDuration, nzAnimate = _a.nzAnimate, nzPauseOnHover = _a.nzPauseOnHover, nzPlacement = _a.nzPlacement;
          return Object.assign({ nzDuration: nzDuration, nzAnimate: nzAnimate, nzPauseOnHover: nzPauseOnHover, nzPlacement: nzPlacement }, options);
      };
      return NzNotificationContainerComponent;
  }(message.NzMNContainerComponent));
  NzNotificationContainerComponent.decorators = [
      { type: i0.Component, args: [{
                  changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  encapsulation: i0.ViewEncapsulation.None,
                  selector: 'nz-notification-container',
                  exportAs: 'nzNotificationContainer',
                  preserveWhitespaces: false,
                  template: "\n    <div\n      class=\"ant-notification ant-notification-topLeft\"\n      [class.ant-notification-rtl]=\"dir === 'rtl'\"\n      [style.top]=\"top\"\n      [style.left]=\"'0px'\"\n    >\n      <nz-notification\n        *ngFor=\"let instance of topLeftInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div\n      class=\"ant-notification ant-notification-topRight\"\n      [class.ant-notification-rtl]=\"dir === 'rtl'\"\n      [style.top]=\"top\"\n      [style.right]=\"'0px'\"\n    >\n      <nz-notification\n        *ngFor=\"let instance of topRightInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div\n      class=\"ant-notification ant-notification-bottomLeft\"\n      [class.ant-notification-rtl]=\"dir === 'rtl'\"\n      [style.bottom]=\"bottom\"\n      [style.left]=\"'0px'\"\n    >\n      <nz-notification\n        *ngFor=\"let instance of bottomLeftInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div\n      class=\"ant-notification ant-notification-bottomRight\"\n      [class.ant-notification-rtl]=\"dir === 'rtl'\"\n      [style.bottom]=\"bottom\"\n      [style.right]=\"'0px'\"\n    >\n      <nz-notification\n        *ngFor=\"let instance of bottomRightInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n  "
              },] }
  ];
  NzNotificationContainerComponent.ctorParameters = function () { return [
      { type: i0.ChangeDetectorRef },
      { type: config.NzConfigService }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzNotificationServiceModule = /** @class */ (function () {
      function NzNotificationServiceModule() {
      }
      return NzNotificationServiceModule;
  }());
  NzNotificationServiceModule.decorators = [
      { type: i0.NgModule }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzNotificationModule = /** @class */ (function () {
      function NzNotificationModule() {
      }
      return NzNotificationModule;
  }());
  NzNotificationModule.decorators = [
      { type: i0.NgModule, args: [{
                  imports: [bidi.BidiModule, common.CommonModule, i2.OverlayModule, icon.NzIconModule, outlet.NzOutletModule, NzNotificationServiceModule],
                  declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                  entryComponents: [NzNotificationContainerComponent]
              },] }
  ];

  var notificationId = 0;
  var NzNotificationService = /** @class */ (function (_super) {
      __extends(NzNotificationService, _super);
      function NzNotificationService(nzSingletonService, overlay, injector) {
          var _this = _super.call(this, nzSingletonService, overlay, injector) || this;
          _this.componentPrefix = 'notification-';
          return _this;
      }
      NzNotificationService.prototype.success = function (title, content, options) {
          return this.createInstance({ type: 'success', title: title, content: content }, options);
      };
      NzNotificationService.prototype.error = function (title, content, options) {
          return this.createInstance({ type: 'error', title: title, content: content }, options);
      };
      NzNotificationService.prototype.info = function (title, content, options) {
          return this.createInstance({ type: 'info', title: title, content: content }, options);
      };
      NzNotificationService.prototype.warning = function (title, content, options) {
          return this.createInstance({ type: 'warning', title: title, content: content }, options);
      };
      NzNotificationService.prototype.blank = function (title, content, options) {
          return this.createInstance({ type: 'blank', title: title, content: content }, options);
      };
      NzNotificationService.prototype.create = function (type, title, content, options) {
          return this.createInstance({ type: type, title: title, content: content }, options);
      };
      NzNotificationService.prototype.template = function (template, options) {
          return this.createInstance({ template: template }, options);
      };
      NzNotificationService.prototype.generateMessageId = function () {
          return this.componentPrefix + "-" + notificationId++;
      };
      NzNotificationService.prototype.createInstance = function (message, options) {
          this.container = this.withContainer(NzNotificationContainerComponent);
          return this.container.create(Object.assign(Object.assign({}, message), {
              createdAt: new Date(),
              messageId: this.generateMessageId(),
              options: options
          }));
      };
      return NzNotificationService;
  }(message.NzMNService));
  NzNotificationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR)); }, token: NzNotificationService, providedIn: NzNotificationServiceModule });
  NzNotificationService.decorators = [
      { type: i0.Injectable, args: [{
                  providedIn: NzNotificationServiceModule
              },] }
  ];
  NzNotificationService.ctorParameters = function () { return [
      { type: i1.NzSingletonService },
      { type: i2.Overlay },
      { type: i0.Injector }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzNotificationComponent = NzNotificationComponent;
  exports.NzNotificationContainerComponent = NzNotificationContainerComponent;
  exports.NzNotificationModule = NzNotificationModule;
  exports.NzNotificationService = NzNotificationService;
  exports.NzNotificationServiceModule = NzNotificationServiceModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-notification.umd.js.map
