(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/scrolling'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/tree'), require('@angular/cdk/coercion'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/logger'), require('@angular/cdk/collections')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree-view', ['exports', '@angular/cdk/bidi', '@angular/cdk/scrolling', '@angular/common', '@angular/core', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/tree', '@angular/cdk/coercion', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/logger', '@angular/cdk/collections'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['tree-view'] = {}), global.ng.cdk.bidi, global.ng.cdk.scrolling, global.ng.common, global.ng.core, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.tree, global.ng.cdk.coercion, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.logger, global.ng.cdk.collections));
}(this, (function (exports, bidi, scrolling, common, core, noAnimation, util, rxjs, operators, tree, coercion, animation, logger, collections) { 'use strict';

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
  var NzTreeNodeCheckboxComponent = /** @class */ (function () {
      function NzTreeNodeCheckboxComponent() {
          this.nzClick = new core.EventEmitter();
      }
      NzTreeNodeCheckboxComponent.prototype.onClick = function (e) {
          if (!this.nzDisabled) {
              this.nzClick.emit(e);
          }
      };
      return NzTreeNodeCheckboxComponent;
  }());
  NzTreeNodeCheckboxComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tree-node-checkbox:not([builtin])',
                  template: "\n    <span class=\"ant-tree-checkbox-inner\"></span>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  preserveWhitespaces: false,
                  host: {
                      class: 'ant-tree-checkbox',
                      '[class.ant-tree-checkbox-checked]': "nzChecked",
                      '[class.ant-tree-checkbox-indeterminate]': "nzIndeterminate",
                      '[class.ant-tree-checkbox-disabled]': "nzDisabled",
                      '(click)': 'onClick($event)'
                  }
              },] }
  ];
  NzTreeNodeCheckboxComponent.propDecorators = {
      nzChecked: [{ type: core.Input }],
      nzIndeterminate: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzClick: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTreeNodeCheckboxComponent.prototype, "nzDisabled", void 0);

  // tslint:disable-next-line: component-class-suffix
  var NzTreeView = /** @class */ (function (_super) {
      __extends(NzTreeView, _super);
      function NzTreeView(differs, changeDetectorRef, noAnimation, directionality) {
          var _this = _super.call(this, differs, changeDetectorRef) || this;
          _this.differs = differs;
          _this.changeDetectorRef = changeDetectorRef;
          _this.noAnimation = noAnimation;
          _this.directionality = directionality;
          _this.destroy$ = new rxjs.Subject();
          _this.dir = 'ltr';
          _this._dataSourceChanged = new rxjs.Subject();
          _this.nzDirectoryTree = false;
          _this.nzBlockNode = false;
          return _this;
      }
      Object.defineProperty(NzTreeView.prototype, "dataSource", {
          get: function () {
              return _super.prototype.dataSource;
          },
          set: function (dataSource) {
              _super.prototype.dataSource = dataSource;
          },
          enumerable: false,
          configurable: true
      });
      NzTreeView.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          _super.prototype.ngOnInit.call(this);
          if (this.directionality) {
              this.dir = this.directionality.value;
              (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                  _this.dir = direction;
                  _this.changeDetectorRef.detectChanges();
              });
          }
      };
      NzTreeView.prototype.ngOnDestroy = function () {
          _super.prototype.ngOnDestroy.call(this);
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTreeView.prototype.renderNodeChanges = function (data, dataDiffer, viewContainer, parentData) {
          _super.prototype.renderNodeChanges.call(this, data, dataDiffer, viewContainer, parentData);
          this._dataSourceChanged.next();
      };
      return NzTreeView;
  }(tree.CdkTree));
  NzTreeView.decorators = [
      { type: core.Component, args: [{ template: '' },] }
  ];
  NzTreeView.ctorParameters = function () { return [
      { type: core.IterableDiffers },
      { type: core.ChangeDetectorRef },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzTreeView.propDecorators = {
      treeControl: [{ type: core.Input, args: ['nzTreeControl',] }],
      dataSource: [{ type: core.Input, args: ['nzDataSource',] }],
      nzDirectoryTree: [{ type: core.Input }],
      nzBlockNode: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeView.prototype, "nzDirectoryTree", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeView.prototype, "nzBlockNode", void 0);

  var NzTreeNodeComponent = /** @class */ (function (_super) {
      __extends(NzTreeNodeComponent, _super);
      function NzTreeNodeComponent(elementRef, tree, renderer, cdr) {
          var _this = _super.call(this, elementRef, tree) || this;
          _this.elementRef = elementRef;
          _this.tree = tree;
          _this.renderer = renderer;
          _this.cdr = cdr;
          _this.indents = [];
          _this.disabled = false;
          _this.selected = false;
          _this.isLeaf = false;
          _this._elementRef.nativeElement.classList.add('ant-tree-treenode');
          return _this;
      }
      NzTreeNodeComponent.prototype.ngOnInit = function () {
          this.isLeaf = !this.tree.treeControl.isExpandable(this.data);
      };
      NzTreeNodeComponent.prototype.disable = function () {
          this.disabled = true;
          this.updateDisabledClass();
      };
      NzTreeNodeComponent.prototype.enable = function () {
          this.disabled = false;
          this.updateDisabledClass();
      };
      NzTreeNodeComponent.prototype.select = function () {
          this.selected = true;
          this.updateSelectedClass();
      };
      NzTreeNodeComponent.prototype.deselect = function () {
          this.selected = false;
          this.updateSelectedClass();
      };
      NzTreeNodeComponent.prototype.setIndents = function (indents) {
          this.indents = indents;
          this.cdr.markForCheck();
      };
      NzTreeNodeComponent.prototype.updateSelectedClass = function () {
          if (this.selected) {
              this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
          }
          else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
          }
      };
      NzTreeNodeComponent.prototype.updateDisabledClass = function () {
          if (this.disabled) {
              this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
          }
          else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
          }
      };
      return NzTreeNodeComponent;
  }(tree.CdkTreeNode));
  NzTreeNodeComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tree-node:not([builtin])',
                  exportAs: 'nzTreeNode',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  providers: [{ provide: tree.CdkTreeNode, useExisting: NzTreeNodeComponent }],
                  template: "\n    <nz-tree-node-indents [indents]=\"indents\" *ngIf=\"indents.length\"></nz-tree-node-indents>\n    <ng-content select=\"nz-tree-node-toggle, [nz-tree-node-toggle]\"></ng-content>\n    <nz-tree-node-toggle class=\"nz-tree-leaf-line-icon\" *ngIf=\"indents.length && isLeaf\" nzTreeNodeNoopToggle>\n      <span class=\"ant-tree-switcher-leaf-line\"></span>\n    </nz-tree-node-toggle>\n    <ng-content select=\"nz-tree-node-checkbox\"></ng-content>\n    <ng-content select=\"nz-tree-node-option\"></ng-content>\n    <ng-content></ng-content>\n  ",
                  host: {
                      '[class.ant-tree-treenode-switcher-open]': 'isExpanded',
                      '[class.ant-tree-treenode-switcher-close]': '!isExpanded'
                  }
              },] }
  ];
  NzTreeNodeComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: NzTreeView },
      { type: core.Renderer2 },
      { type: core.ChangeDetectorRef }
  ]; };
  var NzTreeNodeDefDirective = /** @class */ (function (_super) {
      __extends(NzTreeNodeDefDirective, _super);
      function NzTreeNodeDefDirective() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return NzTreeNodeDefDirective;
  }(tree.CdkTreeNodeDef));
  NzTreeNodeDefDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nzTreeNodeDef]',
                  providers: [{ provide: tree.CdkTreeNodeDef, useExisting: NzTreeNodeDefDirective }]
              },] }
  ];
  NzTreeNodeDefDirective.propDecorators = {
      when: [{ type: core.Input, args: ['nzTreeNodeDefWhen',] }]
  };
  var NzTreeVirtualScrollNodeOutletDirective = /** @class */ (function () {
      function NzTreeVirtualScrollNodeOutletDirective(_viewContainerRef) {
          this._viewContainerRef = _viewContainerRef;
          this._viewRef = null;
      }
      NzTreeVirtualScrollNodeOutletDirective.prototype.ngOnChanges = function (changes) {
          var recreateView = this.shouldRecreateView(changes);
          if (recreateView) {
              var viewContainerRef = this._viewContainerRef;
              if (this._viewRef) {
                  viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
              }
              this._viewRef = this.data ? viewContainerRef.createEmbeddedView(this.data.nodeDef.template, this.data.context) : null;
              if (tree.CdkTreeNode.mostRecentTreeNode && this._viewRef) {
                  tree.CdkTreeNode.mostRecentTreeNode.data = this.data.data;
              }
          }
          else if (this._viewRef && this.data.context) {
              this.updateExistingContext(this.data.context);
          }
      };
      NzTreeVirtualScrollNodeOutletDirective.prototype.shouldRecreateView = function (changes) {
          var ctxChange = changes.data;
          return !!changes.data || (ctxChange && this.hasContextShapeChanged(ctxChange));
      };
      NzTreeVirtualScrollNodeOutletDirective.prototype.hasContextShapeChanged = function (ctxChange) {
          var e_1, _a;
          var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
          var currCtxKeys = Object.keys(ctxChange.currentValue || {});
          if (prevCtxKeys.length === currCtxKeys.length) {
              try {
                  for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                      var propName = currCtxKeys_1_1.value;
                      if (prevCtxKeys.indexOf(propName) === -1) {
                          return true;
                      }
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              return false;
          }
          return true;
      };
      NzTreeVirtualScrollNodeOutletDirective.prototype.updateExistingContext = function (ctx) {
          var e_2, _a;
          try {
              for (var _b = __values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var propName = _c.value;
                  this._viewRef.context[propName] = this.data.context[propName];
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_2) throw e_2.error; }
          }
      };
      return NzTreeVirtualScrollNodeOutletDirective;
  }());
  NzTreeVirtualScrollNodeOutletDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nzTreeVirtualScrollNodeOutlet]'
              },] }
  ];
  NzTreeVirtualScrollNodeOutletDirective.ctorParameters = function () { return [
      { type: core.ViewContainerRef }
  ]; };
  NzTreeVirtualScrollNodeOutletDirective.propDecorators = {
      data: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  function getParent(nodes, node, getLevel) {
      var index = nodes.indexOf(node);
      if (index < 0) {
          return null;
      }
      var level = getLevel(node);
      for (index--; index >= 0; index--) {
          var preLevel = getLevel(nodes[index]);
          if (preLevel + 1 === level) {
              return nodes[index];
          }
          if (preLevel + 1 < level) {
              return null;
          }
      }
      return null;
  }
  function getNextSibling(nodes, node, getLevel, _index) {
      var index = typeof _index !== 'undefined' ? _index : nodes.indexOf(node);
      if (index < 0) {
          return null;
      }
      var level = getLevel(node);
      for (index++; index < nodes.length; index++) {
          var nextLevel = getLevel(nodes[index]);
          if (nextLevel < level) {
              return null;
          }
          if (nextLevel === level) {
              return nodes[index];
          }
      }
      return null;
  }

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  /**
   * [true, false, false, true] => 1001
   */
  function booleanArrayToString(arr) {
      return arr.map(function (i) { return (i ? 1 : 0); }).join('');
  }
  var BUILD_INDENTS_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs.animationFrameScheduler : rxjs.asapScheduler;
  var NzTreeNodeIndentsComponent = /** @class */ (function () {
      function NzTreeNodeIndentsComponent() {
          this.indents = [];
      }
      return NzTreeNodeIndentsComponent;
  }());
  NzTreeNodeIndentsComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tree-node-indents',
                  template: "\n    <span class=\"ant-tree-indent-unit\" [class.ant-tree-indent-unit-end]=\"!isEnd\" *ngFor=\"let isEnd of indents\"></span>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  host: {
                      class: 'ant-tree-indent'
                  }
              },] }
  ];
  NzTreeNodeIndentsComponent.propDecorators = {
      indents: [{ type: core.Input }]
  };
  var NzTreeNodeIndentLineDirective = /** @class */ (function () {
      function NzTreeNodeIndentLineDirective(treeNode, tree, cdr) {
          var _this = this;
          this.treeNode = treeNode;
          this.tree = tree;
          this.cdr = cdr;
          this.isLast = 'unset';
          this.isLeaf = false;
          this.preNodeRef = null;
          this.nextNodeRef = null;
          this.currentIndents = '';
          this.buildIndents();
          this.checkLast();
          /**
           * The dependent data (TreeControl.dataNodes) can be set after node instantiation,
           * and setting the indents can cause frame rate loss if it is set too often.
           */
          this.changeSubscription = rxjs.merge(this.treeNode._dataChanges, tree._dataSourceChanged)
              .pipe(operators.auditTime(0, BUILD_INDENTS_SCHEDULER))
              .subscribe(function () {
              _this.buildIndents();
              _this.checkAdjacent();
              _this.cdr.markForCheck();
          });
      }
      NzTreeNodeIndentLineDirective.prototype.getIndents = function () {
          var indents = [];
          var nodes = this.tree.treeControl.dataNodes;
          var getLevel = this.tree.treeControl.getLevel;
          var parent = getParent(nodes, this.treeNode.data, getLevel);
          while (parent) {
              var parentNextSibling = getNextSibling(nodes, parent, getLevel);
              if (parentNextSibling) {
                  indents.unshift(true);
              }
              else {
                  indents.unshift(false);
              }
              parent = getParent(nodes, parent, getLevel);
          }
          return indents;
      };
      NzTreeNodeIndentLineDirective.prototype.buildIndents = function () {
          if (this.treeNode.data) {
              var indents = this.getIndents();
              var diffString = booleanArrayToString(indents);
              if (diffString !== this.currentIndents) {
                  this.treeNode.setIndents(this.getIndents());
                  this.currentIndents = diffString;
              }
          }
      };
      /**
       * We need to add an class name for the last child node,
       * this result can also be affected when the adjacent nodes are changed.
       */
      NzTreeNodeIndentLineDirective.prototype.checkAdjacent = function () {
          var nodes = this.tree.treeControl.dataNodes;
          var index = nodes.indexOf(this.treeNode.data);
          var preNode = nodes[index - 1] || null;
          var nextNode = nodes[index + 1] || null;
          if (this.nextNodeRef !== nextNode || this.preNodeRef !== preNode) {
              this.checkLast(index);
          }
          this.preNodeRef = preNode;
          this.nextNodeRef = nextNode;
      };
      NzTreeNodeIndentLineDirective.prototype.checkLast = function (index) {
          var nodes = this.tree.treeControl.dataNodes;
          this.isLeaf = this.treeNode.isLeaf;
          this.isLast = !getNextSibling(nodes, this.treeNode.data, this.tree.treeControl.getLevel, index);
      };
      NzTreeNodeIndentLineDirective.prototype.ngOnDestroy = function () {
          this.preNodeRef = null;
          this.nextNodeRef = null;
          this.changeSubscription.unsubscribe();
      };
      return NzTreeNodeIndentLineDirective;
  }());
  NzTreeNodeIndentLineDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-tree-node[nzTreeNodeIndentLine]',
                  host: {
                      class: 'ant-tree-show-line',
                      '[class.ant-tree-treenode-leaf-last]': 'isLast && isLeaf'
                  }
              },] }
  ];
  NzTreeNodeIndentLineDirective.ctorParameters = function () { return [
      { type: NzTreeNodeComponent },
      { type: NzTreeView },
      { type: core.ChangeDetectorRef }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTreeNodeOptionComponent = /** @class */ (function () {
      function NzTreeNodeOptionComponent(treeNode) {
          this.treeNode = treeNode;
          this.nzSelected = false;
          this.nzDisabled = false;
          this.nzClick = new core.EventEmitter();
      }
      Object.defineProperty(NzTreeNodeOptionComponent.prototype, "isExpanded", {
          get: function () {
              return this.treeNode.isExpanded;
          },
          enumerable: false,
          configurable: true
      });
      NzTreeNodeOptionComponent.prototype.onClick = function (e) {
          if (!this.nzDisabled) {
              this.nzClick.emit(e);
          }
      };
      NzTreeNodeOptionComponent.prototype.ngOnChanges = function (changes) {
          var nzDisabled = changes.nzDisabled, nzSelected = changes.nzSelected;
          if (nzDisabled) {
              if (nzDisabled.currentValue) {
                  this.treeNode.disable();
              }
              else {
                  this.treeNode.enable();
              }
          }
          if (nzSelected) {
              if (nzSelected.currentValue) {
                  this.treeNode.select();
              }
              else {
                  this.treeNode.deselect();
              }
          }
      };
      return NzTreeNodeOptionComponent;
  }());
  NzTreeNodeOptionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tree-node-option',
                  template: "\n    <span class=\"ant-tree-title\"><ng-content></ng-content></span>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  host: {
                      class: 'ant-tree-node-content-wrapper',
                      '[class.ant-tree-node-content-wrapper-open]': 'isExpanded',
                      '[class.ant-tree-node-selected]': 'nzSelected',
                      '(click)': 'onClick($event)'
                  }
              },] }
  ];
  NzTreeNodeOptionComponent.ctorParameters = function () { return [
      { type: NzTreeNodeComponent }
  ]; };
  NzTreeNodeOptionComponent.propDecorators = {
      nzSelected: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzClick: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeNodeOptionComponent.prototype, "nzSelected", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTreeNodeOptionComponent.prototype, "nzDisabled", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTreeNodeOutletDirective = /** @class */ (function () {
      function NzTreeNodeOutletDirective(viewContainer, _node) {
          this.viewContainer = viewContainer;
          this._node = _node;
      }
      return NzTreeNodeOutletDirective;
  }());
  NzTreeNodeOutletDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nzTreeNodeOutlet]',
                  providers: [
                      {
                          provide: tree.CdkTreeNodeOutlet,
                          useExisting: NzTreeNodeOutletDirective
                      }
                  ]
              },] }
  ];
  NzTreeNodeOutletDirective.ctorParameters = function () { return [
      { type: core.ViewContainerRef },
      { type: undefined, decorators: [{ type: core.Inject, args: [tree.CDK_TREE_NODE_OUTLET_NODE,] }, { type: core.Optional }] }
  ]; };

  var NzTreeNodePaddingDirective = /** @class */ (function (_super) {
      __extends(NzTreeNodePaddingDirective, _super);
      function NzTreeNodePaddingDirective() {
          var _this = _super.apply(this, __spread(arguments)) || this;
          _this._indent = 24;
          return _this;
      }
      Object.defineProperty(NzTreeNodePaddingDirective.prototype, "level", {
          get: function () {
              return this._level;
          },
          set: function (value) {
              this._setLevelInput(value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTreeNodePaddingDirective.prototype, "indent", {
          get: function () {
              return this._indent;
          },
          set: function (indent) {
              this._setIndentInput(indent);
          },
          enumerable: false,
          configurable: true
      });
      return NzTreeNodePaddingDirective;
  }(tree.CdkTreeNodePadding));
  NzTreeNodePaddingDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nzTreeNodePadding]',
                  providers: [{ provide: tree.CdkTreeNodePadding, useExisting: NzTreeNodePaddingDirective }]
              },] }
  ];
  NzTreeNodePaddingDirective.propDecorators = {
      level: [{ type: core.Input, args: ['nzTreeNodePadding',] }],
      indent: [{ type: core.Input, args: ['nzTreeNodePaddingIndent',] }]
  };

  var NzTreeNodeNoopToggleDirective = /** @class */ (function () {
      function NzTreeNodeNoopToggleDirective() {
      }
      return NzTreeNodeNoopToggleDirective;
  }());
  NzTreeNodeNoopToggleDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-tree-node-toggle[nzTreeNodeNoopToggle], [nzTreeNodeNoopToggle]',
                  host: {
                      class: 'ant-tree-switcher ant-tree-switcher-noop'
                  }
              },] }
  ];
  var NzTreeNodeToggleDirective = /** @class */ (function (_super) {
      __extends(NzTreeNodeToggleDirective, _super);
      function NzTreeNodeToggleDirective() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(NzTreeNodeToggleDirective.prototype, "recursive", {
          get: function () {
              return this._recursive;
          },
          set: function (value) {
              this._recursive = coercion.coerceBooleanProperty(value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzTreeNodeToggleDirective.prototype, "isExpanded", {
          get: function () {
              return this._treeNode.isExpanded;
          },
          enumerable: false,
          configurable: true
      });
      return NzTreeNodeToggleDirective;
  }(tree.CdkTreeNodeToggle));
  NzTreeNodeToggleDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-tree-node-toggle:not([nzTreeNodeNoopToggle]), [nzTreeNodeToggle]',
                  providers: [{ provide: tree.CdkTreeNodeToggle, useExisting: NzTreeNodeToggleDirective }],
                  host: {
                      class: 'ant-tree-switcher',
                      '[class.ant-tree-switcher_open]': 'isExpanded',
                      '[class.ant-tree-switcher_close]': '!isExpanded'
                  }
              },] }
  ];
  NzTreeNodeToggleDirective.propDecorators = {
      recursive: [{ type: core.Input, args: ['nzTreeNodeToggleRecursive',] }]
  };
  var NzTreeNodeToggleRotateIconDirective = /** @class */ (function () {
      function NzTreeNodeToggleRotateIconDirective() {
      }
      return NzTreeNodeToggleRotateIconDirective;
  }());
  NzTreeNodeToggleRotateIconDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-icon][nzTreeNodeToggleRotateIcon]',
                  host: {
                      class: 'ant-tree-switcher-icon'
                  }
              },] }
  ];
  var NzTreeNodeToggleActiveIconDirective = /** @class */ (function () {
      function NzTreeNodeToggleActiveIconDirective() {
      }
      return NzTreeNodeToggleActiveIconDirective;
  }());
  NzTreeNodeToggleActiveIconDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-icon][nzTreeNodeToggleActiveIcon]',
                  host: {
                      class: 'ant-tree-switcher-loading-icon'
                  }
              },] }
  ];

  var NzTreeViewComponent = /** @class */ (function (_super) {
      __extends(NzTreeViewComponent, _super);
      function NzTreeViewComponent() {
          var _this = _super.apply(this, __spread(arguments)) || this;
          _this._afterViewInit = false;
          return _this;
      }
      NzTreeViewComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          Promise.resolve().then(function () {
              _this._afterViewInit = true;
              _this.changeDetectorRef.markForCheck();
          });
      };
      return NzTreeViewComponent;
  }(NzTreeView));
  NzTreeViewComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tree-view',
                  exportAs: 'nzTreeView',
                  template: "\n    <div class=\"ant-tree-list-holder\">\n      <div\n        [@.disabled]=\"!_afterViewInit || noAnimation?.nzNoAnimation\"\n        [@treeCollapseMotion]=\"_nodeOutlet.viewContainer.length\"\n        class=\"ant-tree-list-holder-inner\"\n      >\n        <ng-container nzTreeNodeOutlet></ng-container>\n      </div>\n    </div>\n  ",
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  providers: [
                      { provide: tree.CdkTree, useExisting: NzTreeViewComponent },
                      { provide: NzTreeView, useExisting: NzTreeViewComponent }
                  ],
                  host: {
                      class: 'ant-tree',
                      '[class.ant-tree-block-node]': 'nzDirectoryTree || nzBlockNode',
                      '[class.ant-tree-directory]': 'nzDirectoryTree',
                      '[class.ant-tree-rtl]': "dir === 'rtl'"
                  },
                  animations: [animation.treeCollapseMotion]
              },] }
  ];
  NzTreeViewComponent.propDecorators = {
      nodeOutlet: [{ type: core.ViewChild, args: [NzTreeNodeOutletDirective, { static: true },] }]
  };

  var DEFAULT_SIZE = 28;
  var NzTreeVirtualScrollViewComponent = /** @class */ (function (_super) {
      __extends(NzTreeVirtualScrollViewComponent, _super);
      function NzTreeVirtualScrollViewComponent() {
          var _this = _super.apply(this, __spread(arguments)) || this;
          _this.itemSize = DEFAULT_SIZE;
          /**
           * @deprecated use `nzItemSize` instead
           * @breaking-change 12.0.0
           */
          _this.nzNodeWidth = DEFAULT_SIZE;
          _this.nzItemSize = DEFAULT_SIZE;
          _this.nzMinBufferPx = DEFAULT_SIZE * 5;
          _this.nzMaxBufferPx = DEFAULT_SIZE * 10;
          _this.nodes = [];
          return _this;
      }
      NzTreeVirtualScrollViewComponent.prototype.renderNodeChanges = function (data) {
          var _this = this;
          this.nodes = new (Array.bind.apply(Array, __spread([void 0], data)))().map(function (n, i) { return _this.createNode(n, i); });
      };
      NzTreeVirtualScrollViewComponent.prototype.createNode = function (nodeData, index) {
          var node = this._getNodeDef(nodeData, index);
          var context = new tree.CdkTreeNodeOutletContext(nodeData);
          if (this.treeControl.getLevel) {
              context.level = this.treeControl.getLevel(nodeData);
          }
          else {
              context.level = 0;
          }
          return {
              data: nodeData,
              context: context,
              nodeDef: node
          };
      };
      NzTreeVirtualScrollViewComponent.prototype.ngOnChanges = function (changes) {
          var nzNodeWidth = changes.nzNodeWidth, nzItemSize = changes.nzItemSize;
          if (nzNodeWidth) {
              logger.warnDeprecation('`nzNodeWidth` in nz-tree-virtual-scroll-view will be removed in 12.0.0, please use `nzItemSize` instead.');
              this.itemSize = nzNodeWidth.currentValue;
          }
          if (nzItemSize) {
              this.itemSize = nzItemSize.currentValue;
          }
      };
      return NzTreeVirtualScrollViewComponent;
  }(NzTreeView));
  NzTreeVirtualScrollViewComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-tree-virtual-scroll-view',
                  exportAs: 'nzTreeVirtualScrollView',
                  template: "\n    <div class=\"ant-tree-list\">\n      <cdk-virtual-scroll-viewport\n        class=\"ant-tree-list-holder\"\n        [itemSize]=\"itemSize\"\n        [minBufferPx]=\"nzMinBufferPx\"\n        [maxBufferPx]=\"nzMaxBufferPx\"\n      >\n        <ng-container *cdkVirtualFor=\"let item of nodes; let i = index\">\n          <ng-template nzTreeVirtualScrollNodeOutlet [data]=\"item\"></ng-template>\n        </ng-container>\n      </cdk-virtual-scroll-viewport>\n    </div>\n    <ng-container nzTreeNodeOutlet></ng-container>\n  ",
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  providers: [
                      { provide: NzTreeView, useExisting: NzTreeVirtualScrollViewComponent },
                      { provide: tree.CdkTree, useExisting: NzTreeVirtualScrollViewComponent }
                  ],
                  host: {
                      class: 'ant-tree',
                      '[class.ant-tree-block-node]': 'nzDirectoryTree || nzBlockNode',
                      '[class.ant-tree-directory]': 'nzDirectoryTree',
                      '[class.ant-tree-rtl]': "dir === 'rtl'"
                  }
              },] }
  ];
  NzTreeVirtualScrollViewComponent.propDecorators = {
      nodeOutlet: [{ type: core.ViewChild, args: [NzTreeNodeOutletDirective, { static: true },] }],
      virtualScrollViewport: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { static: true },] }],
      nzNodeWidth: [{ type: core.Input }],
      nzItemSize: [{ type: core.Input }],
      nzMinBufferPx: [{ type: core.Input }],
      nzMaxBufferPx: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var treeWithControlComponents = [
      NzTreeView,
      NzTreeNodeOutletDirective,
      NzTreeViewComponent,
      NzTreeNodeDefDirective,
      NzTreeNodeComponent,
      NzTreeNodeToggleDirective,
      NzTreeNodePaddingDirective,
      NzTreeNodeToggleRotateIconDirective,
      NzTreeNodeToggleActiveIconDirective,
      NzTreeNodeOptionComponent,
      NzTreeNodeNoopToggleDirective,
      NzTreeNodeCheckboxComponent,
      NzTreeNodeIndentsComponent,
      NzTreeVirtualScrollViewComponent,
      NzTreeVirtualScrollNodeOutletDirective,
      NzTreeNodeIndentLineDirective
  ];
  var NzTreeViewModule = /** @class */ (function () {
      function NzTreeViewModule() {
      }
      return NzTreeViewModule;
  }());
  NzTreeViewModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [bidi.BidiModule, common.CommonModule, noAnimation.NzNoAnimationModule, scrolling.ScrollingModule],
                  declarations: [treeWithControlComponents],
                  exports: [treeWithControlComponents]
              },] }
  ];

  var NzTreeFlattener = /** @class */ (function () {
      function NzTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
          this.transformFunction = transformFunction;
          this.getLevel = getLevel;
          this.isExpandable = isExpandable;
          this.getChildren = getChildren;
      }
      NzTreeFlattener.prototype.flattenNode = function (node, level, resultNodes, parentMap) {
          var _this = this;
          var flatNode = this.transformFunction(node, level);
          resultNodes.push(flatNode);
          if (this.isExpandable(flatNode)) {
              var childrenNodes = this.getChildren(node);
              if (childrenNodes) {
                  if (Array.isArray(childrenNodes)) {
                      this.flattenChildren(childrenNodes, level, resultNodes, parentMap);
                  }
                  else {
                      childrenNodes.pipe(operators.take(1)).subscribe(function (children) {
                          _this.flattenChildren(children, level, resultNodes, parentMap);
                      });
                  }
              }
          }
          return resultNodes;
      };
      NzTreeFlattener.prototype.flattenChildren = function (children, level, resultNodes, parentMap) {
          var _this = this;
          children.forEach(function (child, index) {
              var childParentMap = parentMap.slice();
              childParentMap.push(index !== children.length - 1);
              _this.flattenNode(child, level + 1, resultNodes, childParentMap);
          });
      };
      /**
       * Flatten a list of node type T to flattened version of node F.
       * Please note that type T may be nested, and the length of `structuredData` may be different
       * from that of returned list `F[]`.
       */
      NzTreeFlattener.prototype.flattenNodes = function (structuredData) {
          var _this = this;
          var resultNodes = [];
          structuredData.forEach(function (node) { return _this.flattenNode(node, 0, resultNodes, []); });
          return resultNodes;
      };
      /**
       * Expand flattened node with current expansion status.
       * The returned list may have different length.
       */
      NzTreeFlattener.prototype.expandFlattenedNodes = function (nodes, treeControl) {
          var _this = this;
          var results = [];
          var currentExpand = [];
          currentExpand[0] = true;
          nodes.forEach(function (node) {
              var expand = true;
              for (var i = 0; i <= _this.getLevel(node); i++) {
                  expand = expand && currentExpand[i];
              }
              if (expand) {
                  results.push(node);
              }
              if (_this.isExpandable(node)) {
                  currentExpand[_this.getLevel(node) + 1] = treeControl.isExpanded(node);
              }
          });
          return results;
      };
      return NzTreeFlattener;
  }());
  var NzTreeFlatDataSource = /** @class */ (function (_super) {
      __extends(NzTreeFlatDataSource, _super);
      function NzTreeFlatDataSource(_treeControl, _treeFlattener, initialData) {
          if (initialData === void 0) { initialData = []; }
          var _this = _super.call(this) || this;
          _this._treeControl = _treeControl;
          _this._treeFlattener = _treeFlattener;
          _this._flattenedData = new rxjs.BehaviorSubject([]);
          _this._expandedData = new rxjs.BehaviorSubject([]);
          _this._data = new rxjs.BehaviorSubject(initialData);
          _this.flatNodes();
          return _this;
      }
      NzTreeFlatDataSource.prototype.setData = function (value) {
          this._data.next(value);
          this.flatNodes();
      };
      NzTreeFlatDataSource.prototype.getData = function () {
          return this._data.getValue();
      };
      NzTreeFlatDataSource.prototype.connect = function (collectionViewer) {
          var _this = this;
          var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
          return rxjs.merge.apply(void 0, __spread(changes)).pipe(operators.map(function () {
              _this._expandedData.next(_this._treeFlattener.expandFlattenedNodes(_this._flattenedData.value, _this._treeControl));
              return _this._expandedData.value;
          }));
      };
      NzTreeFlatDataSource.prototype.disconnect = function () {
          // no op
      };
      NzTreeFlatDataSource.prototype.flatNodes = function () {
          this._flattenedData.next(this._treeFlattener.flattenNodes(this.getData()));
          this._treeControl.dataNodes = this._flattenedData.value;
      };
      return NzTreeFlatDataSource;
  }(collections.DataSource));

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzTreeFlatDataSource = NzTreeFlatDataSource;
  exports.NzTreeFlattener = NzTreeFlattener;
  exports.NzTreeNodeCheckboxComponent = NzTreeNodeCheckboxComponent;
  exports.NzTreeNodeComponent = NzTreeNodeComponent;
  exports.NzTreeNodeDefDirective = NzTreeNodeDefDirective;
  exports.NzTreeNodeIndentLineDirective = NzTreeNodeIndentLineDirective;
  exports.NzTreeNodeIndentsComponent = NzTreeNodeIndentsComponent;
  exports.NzTreeNodeNoopToggleDirective = NzTreeNodeNoopToggleDirective;
  exports.NzTreeNodeOptionComponent = NzTreeNodeOptionComponent;
  exports.NzTreeNodeOutletDirective = NzTreeNodeOutletDirective;
  exports.NzTreeNodePaddingDirective = NzTreeNodePaddingDirective;
  exports.NzTreeNodeToggleActiveIconDirective = NzTreeNodeToggleActiveIconDirective;
  exports.NzTreeNodeToggleDirective = NzTreeNodeToggleDirective;
  exports.NzTreeNodeToggleRotateIconDirective = NzTreeNodeToggleRotateIconDirective;
  exports.NzTreeViewComponent = NzTreeViewComponent;
  exports.NzTreeViewModule = NzTreeViewModule;
  exports.NzTreeVirtualScrollNodeOutletDirective = NzTreeVirtualScrollNodeOutletDirective;
  exports.NzTreeVirtualScrollViewComponent = NzTreeVirtualScrollViewComponent;
  exports.getNextSibling = getNextSibling;
  exports.getParent = getParent;
  exports.ɵa = NzTreeView;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tree-view.umd.js.map
