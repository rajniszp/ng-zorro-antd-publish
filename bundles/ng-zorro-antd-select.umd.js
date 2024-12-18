(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/cdk/scrolling'), require('ng-zorro-antd/core/util'), require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/forms'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/polyfill'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/select', ['exports', '@angular/core', 'rxjs', '@angular/cdk/scrolling', 'ng-zorro-antd/core/util', 'rxjs/operators', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/forms', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/polyfill', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/empty', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].select = {}), global.ng.core, global.rxjs, global.ng.cdk.scrolling, global['ng-zorro-antd'].core.util, global.rxjs.operators, global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.forms, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.polyfill, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].core['transition-patch'], global['ng-zorro-antd'].empty, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, rxjs, scrolling, util, operators, a11y, bidi, keycodes, overlay, platform, forms, animation, config, noAnimation, polyfill, common, outlet, overlay$1, transitionPatch, empty, i18n, icon) { 'use strict';

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzOptionGroupComponent = /** @class */ (function () {
      function NzOptionGroupComponent() {
          this.nzLabel = null;
          this.changes = new rxjs.Subject();
      }
      NzOptionGroupComponent.prototype.ngOnChanges = function () {
          this.changes.next();
      };
      return NzOptionGroupComponent;
  }());
  NzOptionGroupComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-option-group',
                  exportAs: 'nzOptionGroup',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-content></ng-content>\n  "
              },] }
  ];
  NzOptionGroupComponent.propDecorators = {
      nzLabel: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzOptionContainerComponent = /** @class */ (function () {
      function NzOptionContainerComponent(elementRef) {
          this.elementRef = elementRef;
          this.notFoundContent = undefined;
          this.menuItemSelectedIcon = null;
          this.dropdownRender = null;
          this.activatedValue = null;
          this.listOfSelectedValue = [];
          this.mode = 'default';
          this.matchWidth = true;
          this.itemSize = 32;
          this.maxItemLength = 8;
          this.listOfContainerItem = [];
          this.itemClick = new core.EventEmitter();
          this.scrollToBottom = new core.EventEmitter();
          this.scrolledIndex = 0;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-dropdown');
      }
      NzOptionContainerComponent.prototype.onItemClick = function (value) {
          this.itemClick.emit(value);
      };
      NzOptionContainerComponent.prototype.onItemHover = function (value) {
          // TODO: keydown.enter won't activate this value
          this.activatedValue = value;
      };
      NzOptionContainerComponent.prototype.trackValue = function (_index, option) {
          return option.key;
      };
      NzOptionContainerComponent.prototype.onScrolledIndexChange = function (index) {
          this.scrolledIndex = index;
          if (index === this.listOfContainerItem.length - this.maxItemLength) {
              this.scrollToBottom.emit();
          }
      };
      NzOptionContainerComponent.prototype.scrollToActivatedValue = function () {
          var _this = this;
          var index = this.listOfContainerItem.findIndex(function (item) { return _this.compareWith(item.key, _this.activatedValue); });
          if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
              this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
          }
      };
      NzOptionContainerComponent.prototype.ngOnChanges = function (changes) {
          var listOfContainerItem = changes.listOfContainerItem, activatedValue = changes.activatedValue;
          if (listOfContainerItem || activatedValue) {
              this.scrollToActivatedValue();
          }
      };
      NzOptionContainerComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          setTimeout(function () { return _this.scrollToActivatedValue(); });
      };
      return NzOptionContainerComponent;
  }());
  NzOptionContainerComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-option-container',
                  exportAs: 'nzOptionContainer',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  preserveWhitespaces: false,
                  template: "\n    <div>\n      <div *ngIf=\"listOfContainerItem.length === 0\" class=\"ant-select-item-empty\">\n        <nz-embed-empty nzComponentName=\"select\" [specificContent]=\"notFoundContent!\"></nz-embed-empty>\n      </div>\n      <cdk-virtual-scroll-viewport\n        [class.full-width]=\"!matchWidth\"\n        [itemSize]=\"itemSize\"\n        [maxBufferPx]=\"itemSize * maxItemLength\"\n        [minBufferPx]=\"itemSize * maxItemLength\"\n        (scrolledIndexChange)=\"onScrolledIndexChange($event)\"\n        [style.height.px]=\"listOfContainerItem.length * itemSize\"\n        [style.max-height.px]=\"itemSize * maxItemLength\"\n      >\n        <ng-template\n          cdkVirtualFor\n          [cdkVirtualForOf]=\"listOfContainerItem\"\n          [cdkVirtualForTrackBy]=\"trackValue\"\n          [cdkVirtualForTemplateCacheSize]=\"0\"\n          let-item\n        >\n          <ng-container [ngSwitch]=\"item.type\">\n            <nz-option-item-group *ngSwitchCase=\"'group'\" [nzLabel]=\"item.groupLabel\"></nz-option-item-group>\n            <nz-option-item\n              *ngSwitchCase=\"'item'\"\n              [icon]=\"menuItemSelectedIcon\"\n              [customContent]=\"item.nzCustomContent\"\n              [template]=\"item.template\"\n              [grouped]=\"!!item.groupLabel\"\n              [disabled]=\"item.nzDisabled\"\n              [showState]=\"mode === 'tags' || mode === 'multiple'\"\n              [label]=\"item.nzLabel\"\n              [compareWith]=\"compareWith\"\n              [activatedValue]=\"activatedValue\"\n              [listOfSelectedValue]=\"listOfSelectedValue\"\n              [value]=\"item.nzValue\"\n              (itemHover)=\"onItemHover($event)\"\n              (itemClick)=\"onItemClick($event)\"\n            ></nz-option-item>\n          </ng-container>\n        </ng-template>\n      </cdk-virtual-scroll-viewport>\n      <ng-template [ngTemplateOutlet]=\"dropdownRender\"></ng-template>\n    </div>\n  "
              },] }
  ];
  NzOptionContainerComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzOptionContainerComponent.propDecorators = {
      notFoundContent: [{ type: core.Input }],
      menuItemSelectedIcon: [{ type: core.Input }],
      dropdownRender: [{ type: core.Input }],
      activatedValue: [{ type: core.Input }],
      listOfSelectedValue: [{ type: core.Input }],
      compareWith: [{ type: core.Input }],
      mode: [{ type: core.Input }],
      matchWidth: [{ type: core.Input }],
      itemSize: [{ type: core.Input }],
      maxItemLength: [{ type: core.Input }],
      listOfContainerItem: [{ type: core.Input }],
      itemClick: [{ type: core.Output }],
      scrollToBottom: [{ type: core.Output }],
      cdkVirtualScrollViewport: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { static: true },] }]
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
  var NzOptionComponent = /** @class */ (function () {
      function NzOptionComponent(nzOptionGroupComponent) {
          this.nzOptionGroupComponent = nzOptionGroupComponent;
          this.destroy$ = new rxjs.Subject();
          this.changes = new rxjs.Subject();
          this.groupLabel = null;
          this.nzLabel = null;
          this.nzValue = null;
          this.nzDisabled = false;
          this.nzHide = false;
          this.nzCustomContent = false;
      }
      NzOptionComponent.prototype.ngOnInit = function () {
          var _this = this;
          if (this.nzOptionGroupComponent) {
              this.nzOptionGroupComponent.changes.pipe(operators.startWith(true), operators.takeUntil(this.destroy$)).subscribe(function () {
                  _this.groupLabel = _this.nzOptionGroupComponent.nzLabel;
              });
          }
      };
      NzOptionComponent.prototype.ngOnChanges = function () {
          this.changes.next();
      };
      NzOptionComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzOptionComponent;
  }());
  NzOptionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-option',
                  exportAs: 'nzOption',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
              },] }
  ];
  NzOptionComponent.ctorParameters = function () { return [
      { type: NzOptionGroupComponent, decorators: [{ type: core.Optional }] }
  ]; };
  NzOptionComponent.propDecorators = {
      template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
      nzLabel: [{ type: core.Input }],
      nzValue: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzHide: [{ type: core.Input }],
      nzCustomContent: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzOptionComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzOptionComponent.prototype, "nzHide", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzOptionComponent.prototype, "nzCustomContent", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSelectSearchComponent = /** @class */ (function () {
      function NzSelectSearchComponent(elementRef, renderer, focusMonitor) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.focusMonitor = focusMonitor;
          this.nzId = null;
          this.disabled = false;
          this.mirrorSync = false;
          this.showInput = true;
          this.focusTrigger = false;
          this.value = '';
          this.autofocus = false;
          this.valueChange = new core.EventEmitter();
          this.isComposingChange = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-selection-search');
      }
      NzSelectSearchComponent.prototype.setCompositionState = function (isComposing) {
          this.isComposingChange.next(isComposing);
      };
      NzSelectSearchComponent.prototype.onValueChange = function (value) {
          this.value = value;
          this.valueChange.next(value);
          if (this.mirrorSync) {
              this.syncMirrorWidth();
          }
      };
      NzSelectSearchComponent.prototype.clearInputValue = function () {
          var inputDOM = this.inputElement.nativeElement;
          inputDOM.value = '';
          this.onValueChange('');
      };
      NzSelectSearchComponent.prototype.syncMirrorWidth = function () {
          var mirrorDOM = this.mirrorElement.nativeElement;
          var hostDOM = this.elementRef.nativeElement;
          var inputDOM = this.inputElement.nativeElement;
          this.renderer.removeStyle(hostDOM, 'width');
          mirrorDOM.innerHTML = this.renderer.createText(inputDOM.value + "&nbsp;");
          this.renderer.setStyle(hostDOM, 'width', mirrorDOM.scrollWidth + "px");
      };
      NzSelectSearchComponent.prototype.focus = function () {
          this.focusMonitor.focusVia(this.inputElement, 'keyboard');
      };
      NzSelectSearchComponent.prototype.blur = function () {
          this.inputElement.nativeElement.blur();
      };
      NzSelectSearchComponent.prototype.ngOnChanges = function (changes) {
          var inputDOM = this.inputElement.nativeElement;
          var focusTrigger = changes.focusTrigger, showInput = changes.showInput;
          if (showInput) {
              if (this.showInput) {
                  this.renderer.removeAttribute(inputDOM, 'readonly');
              }
              else {
                  this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
              }
          }
          // IE11 cannot input value if focused before removing readonly
          if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
              inputDOM.focus();
          }
      };
      NzSelectSearchComponent.prototype.ngAfterViewInit = function () {
          if (this.mirrorSync) {
              this.syncMirrorWidth();
          }
          if (this.autofocus) {
              this.focus();
          }
      };
      return NzSelectSearchComponent;
  }());
  NzSelectSearchComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-select-search',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <input\n      #inputElement\n      [attr.id]=\"nzId\"\n      autocomplete=\"off\"\n      class=\"ant-select-selection-search-input\"\n      [ngModel]=\"value\"\n      [attr.autofocus]=\"autofocus ? 'autofocus' : null\"\n      [disabled]=\"disabled\"\n      [style.opacity]=\"showInput ? null : 0\"\n      (ngModelChange)=\"onValueChange($event)\"\n      (compositionstart)=\"setCompositionState(true)\"\n      (compositionend)=\"setCompositionState(false)\"\n    />\n    <span #mirrorElement *ngIf=\"mirrorSync\" class=\"ant-select-selection-search-mirror\"></span>\n  ",
                  providers: [{ provide: forms.COMPOSITION_BUFFER_MODE, useValue: false }]
              },] }
  ];
  NzSelectSearchComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: a11y.FocusMonitor }
  ]; };
  NzSelectSearchComponent.propDecorators = {
      nzId: [{ type: core.Input }],
      disabled: [{ type: core.Input }],
      mirrorSync: [{ type: core.Input }],
      showInput: [{ type: core.Input }],
      focusTrigger: [{ type: core.Input }],
      value: [{ type: core.Input }],
      autofocus: [{ type: core.Input }],
      valueChange: [{ type: core.Output }],
      isComposingChange: [{ type: core.Output }],
      inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: true },] }],
      mirrorElement: [{ type: core.ViewChild, args: ['mirrorElement', { static: false },] }]
  };

  var NzSelectTopControlComponent = /** @class */ (function () {
      function NzSelectTopControlComponent(elementRef, noAnimation) {
          this.elementRef = elementRef;
          this.noAnimation = noAnimation;
          this.nzId = null;
          this.showSearch = false;
          this.placeHolder = null;
          this.open = false;
          this.maxTagCount = Infinity;
          this.autofocus = false;
          this.disabled = false;
          this.mode = 'default';
          this.customTemplate = null;
          this.maxTagPlaceholder = null;
          this.removeIcon = null;
          this.listOfTopItem = [];
          this.tokenSeparators = [];
          this.tokenize = new core.EventEmitter();
          this.inputValueChange = new core.EventEmitter();
          this.deleteItem = new core.EventEmitter();
          this.listOfSlicedItem = [];
          this.isShowPlaceholder = true;
          this.isShowSingleLabel = false;
          this.isComposing = false;
          this.inputValue = null;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-selector');
      }
      NzSelectTopControlComponent.prototype.onHostKeydown = function (e) {
          var inputValue = e.target.value;
          if (e.keyCode === keycodes.BACKSPACE && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
              e.preventDefault();
              this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
          }
      };
      NzSelectTopControlComponent.prototype.updateTemplateVariable = function () {
          var isSelectedValueEmpty = this.listOfTopItem.length === 0;
          this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
          this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
      };
      NzSelectTopControlComponent.prototype.isComposingChange = function (isComposing) {
          this.isComposing = isComposing;
          this.updateTemplateVariable();
      };
      NzSelectTopControlComponent.prototype.onInputValueChange = function (value) {
          if (value !== this.inputValue) {
              this.inputValue = value;
              this.updateTemplateVariable();
              this.inputValueChange.emit(value);
              this.tokenSeparate(value, this.tokenSeparators);
          }
      };
      NzSelectTopControlComponent.prototype.tokenSeparate = function (inputValue, tokenSeparators) {
          var includesSeparators = function (str, separators) {
              // tslint:disable-next-line:prefer-for-of
              for (var i = 0; i < separators.length; ++i) {
                  if (str.lastIndexOf(separators[i]) > 0) {
                      return true;
                  }
              }
              return false;
          };
          var splitBySeparators = function (str, separators) {
              var reg = new RegExp("[" + separators.join() + "]");
              var array = str.split(reg).filter(function (token) { return token; });
              return __spread(new Set(array));
          };
          if (inputValue &&
              inputValue.length &&
              tokenSeparators.length &&
              this.mode !== 'default' &&
              includesSeparators(inputValue, tokenSeparators)) {
              var listOfLabel = splitBySeparators(inputValue, tokenSeparators);
              this.tokenize.next(listOfLabel);
          }
      };
      NzSelectTopControlComponent.prototype.clearInputValue = function () {
          if (this.nzSelectSearchComponent) {
              this.nzSelectSearchComponent.clearInputValue();
          }
      };
      NzSelectTopControlComponent.prototype.focus = function () {
          if (this.nzSelectSearchComponent) {
              this.nzSelectSearchComponent.focus();
          }
      };
      NzSelectTopControlComponent.prototype.blur = function () {
          if (this.nzSelectSearchComponent) {
              this.nzSelectSearchComponent.blur();
          }
      };
      NzSelectTopControlComponent.prototype.trackValue = function (_index, option) {
          return option.nzValue;
      };
      NzSelectTopControlComponent.prototype.onDeleteItem = function (item) {
          if (!this.disabled && !item.nzDisabled) {
              this.deleteItem.next(item);
          }
      };
      NzSelectTopControlComponent.prototype.ngOnChanges = function (changes) {
          var _this = this;
          var listOfTopItem = changes.listOfTopItem, maxTagCount = changes.maxTagCount, customTemplate = changes.customTemplate, maxTagPlaceholder = changes.maxTagPlaceholder;
          if (listOfTopItem) {
              this.updateTemplateVariable();
          }
          if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
              var listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(function (o) {
                  return {
                      nzLabel: o.nzLabel,
                      nzValue: o.nzValue,
                      nzDisabled: o.nzDisabled,
                      contentTemplateOutlet: _this.customTemplate,
                      contentTemplateOutletContext: o
                  };
              });
              if (this.listOfTopItem.length > this.maxTagCount) {
                  var exceededLabel = "+ " + (this.listOfTopItem.length - this.maxTagCount) + " ...";
                  var listOfSelectedValue = this.listOfTopItem.map(function (item) { return item.nzValue; });
                  var exceededItem = {
                      nzLabel: exceededLabel,
                      nzValue: '$$__nz_exceeded_item',
                      nzDisabled: true,
                      contentTemplateOutlet: this.maxTagPlaceholder,
                      contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                  };
                  listOfSlicedItem.push(exceededItem);
              }
              this.listOfSlicedItem = listOfSlicedItem;
          }
      };
      return NzSelectTopControlComponent;
  }());
  NzSelectTopControlComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-select-top-control',
                  exportAs: 'nzSelectTopControl',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <!--single mode-->\n    <ng-container [ngSwitch]=\"mode\">\n      <ng-container *ngSwitchCase=\"'default'\">\n        <nz-select-search\n          [nzId]=\"nzId\"\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [showInput]=\"showSearch\"\n          [mirrorSync]=\"false\"\n          [autofocus]=\"autofocus\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n        <nz-select-item\n          *ngIf=\"isShowSingleLabel\"\n          [deletable]=\"false\"\n          [disabled]=\"false\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"listOfTopItem[0].nzLabel\"\n          [contentTemplateOutlet]=\"customTemplate\"\n          [contentTemplateOutletContext]=\"listOfTopItem[0]\"\n        ></nz-select-item>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <!--multiple or tags mode-->\n        <nz-select-item\n          *ngFor=\"let item of listOfSlicedItem; trackBy: trackValue\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"item.nzLabel\"\n          [disabled]=\"item.nzDisabled || disabled\"\n          [contentTemplateOutlet]=\"item.contentTemplateOutlet\"\n          [deletable]=\"true\"\n          [contentTemplateOutletContext]=\"item.contentTemplateOutletContext\"\n          (delete)=\"onDeleteItem(item.contentTemplateOutletContext)\"\n        ></nz-select-item>\n        <nz-select-search\n          [nzId]=\"nzId\"\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [autofocus]=\"autofocus\"\n          [showInput]=\"true\"\n          [mirrorSync]=\"true\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n      </ng-container>\n    </ng-container>\n    <nz-select-placeholder *ngIf=\"isShowPlaceholder\" [placeholder]=\"placeHolder\"></nz-select-placeholder>\n  ",
                  host: {
                      '(keydown)': 'onHostKeydown($event)'
                  }
              },] }
  ];
  NzSelectTopControlComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };
  NzSelectTopControlComponent.propDecorators = {
      nzId: [{ type: core.Input }],
      showSearch: [{ type: core.Input }],
      placeHolder: [{ type: core.Input }],
      open: [{ type: core.Input }],
      maxTagCount: [{ type: core.Input }],
      autofocus: [{ type: core.Input }],
      disabled: [{ type: core.Input }],
      mode: [{ type: core.Input }],
      customTemplate: [{ type: core.Input }],
      maxTagPlaceholder: [{ type: core.Input }],
      removeIcon: [{ type: core.Input }],
      listOfTopItem: [{ type: core.Input }],
      tokenSeparators: [{ type: core.Input }],
      tokenize: [{ type: core.Output }],
      inputValueChange: [{ type: core.Output }],
      deleteItem: [{ type: core.Output }],
      nzSelectSearchComponent: [{ type: core.ViewChild, args: [NzSelectSearchComponent,] }]
  };

  var defaultFilterOption = function (searchValue, item) {
      if (item && item.nzLabel) {
          return item.nzLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      }
      else {
          return false;
      }
  };
  var ɵ0 = defaultFilterOption;
  var NZ_CONFIG_MODULE_NAME = 'select';
  var NzSelectComponent = /** @class */ (function () {
      function NzSelectComponent(nzConfigService, cdr, elementRef, platform, focusMonitor, directionality, noAnimation) {
          this.nzConfigService = nzConfigService;
          this.cdr = cdr;
          this.elementRef = elementRef;
          this.platform = platform;
          this.focusMonitor = focusMonitor;
          this.directionality = directionality;
          this.noAnimation = noAnimation;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzId = null;
          this.nzSize = 'default';
          this.nzOptionHeightPx = 32;
          this.nzOptionOverflowSize = 8;
          this.nzDropdownClassName = null;
          this.nzDropdownMatchSelectWidth = true;
          this.nzDropdownStyle = null;
          this.nzNotFoundContent = undefined;
          this.nzPlaceHolder = null;
          this.nzMaxTagCount = Infinity;
          this.nzDropdownRender = null;
          this.nzCustomTemplate = null;
          this.nzSuffixIcon = null;
          this.nzClearIcon = null;
          this.nzRemoveIcon = null;
          this.nzMenuItemSelectedIcon = null;
          this.nzTokenSeparators = [];
          this.nzMaxTagPlaceholder = null;
          this.nzMaxMultipleCount = Infinity;
          this.nzMode = 'default';
          this.nzFilterOption = defaultFilterOption;
          this.compareWith = function (o1, o2) { return o1 === o2; };
          this.nzAllowClear = false;
          this.nzBorderless = false;
          this.nzShowSearch = false;
          this.nzLoading = false;
          this.nzAutoFocus = false;
          this.nzAutoClearSearchValue = true;
          this.nzServerSearch = false;
          this.nzDisabled = false;
          this.nzOpen = false;
          this.nzBackdrop = false;
          this.nzOptions = [];
          this.nzOnSearch = new core.EventEmitter();
          this.nzScrollToBottom = new core.EventEmitter();
          this.nzOpenChange = new core.EventEmitter();
          this.nzBlur = new core.EventEmitter();
          this.nzFocus = new core.EventEmitter();
          this.listOfValue$ = new rxjs.BehaviorSubject([]);
          this.listOfTemplateItem$ = new rxjs.BehaviorSubject([]);
          this.listOfTagAndTemplateItem = [];
          this.searchValue = '';
          this.isReactiveDriven = false;
          this.destroy$ = new rxjs.Subject();
          this.onChange = function () { };
          this.onTouched = function () { };
          this.dropDownPosition = 'bottom';
          this.triggerWidth = null;
          this.listOfContainerItem = [];
          this.listOfTopItem = [];
          this.activatedValue = null;
          this.listOfValue = [];
          this.focused = false;
          this.dir = 'ltr';
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select');
      }
      Object.defineProperty(NzSelectComponent.prototype, "nzShowArrow", {
          get: function () {
              return this._nzShowArrow === undefined ? this.nzMode === 'default' : this._nzShowArrow;
          },
          set: function (value) {
              this._nzShowArrow = value;
          },
          enumerable: false,
          configurable: true
      });
      NzSelectComponent.prototype.generateTagItem = function (value) {
          return {
              nzValue: value,
              nzLabel: value,
              type: 'item'
          };
      };
      NzSelectComponent.prototype.onItemClick = function (value) {
          var _this = this;
          this.activatedValue = value;
          if (this.nzMode === 'default') {
              if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                  this.updateListOfValue([value]);
              }
              this.setOpenState(false);
          }
          else {
              var targetIndex_1 = this.listOfValue.findIndex(function (o) { return _this.compareWith(o, value); });
              if (targetIndex_1 !== -1) {
                  var listOfValueAfterRemoved = this.listOfValue.filter(function (_, i) { return i !== targetIndex_1; });
                  this.updateListOfValue(listOfValueAfterRemoved);
              }
              else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                  var listOfValueAfterAdded = __spread(this.listOfValue, [value]);
                  this.updateListOfValue(listOfValueAfterAdded);
              }
              this.focus();
              if (this.nzAutoClearSearchValue) {
                  this.clearInput();
              }
          }
      };
      NzSelectComponent.prototype.onItemDelete = function (item) {
          var _this = this;
          var listOfSelectedValue = this.listOfValue.filter(function (v) { return !_this.compareWith(v, item.nzValue); });
          this.updateListOfValue(listOfSelectedValue);
          this.clearInput();
      };
      NzSelectComponent.prototype.onHostClick = function () {
          if ((this.nzOpen && this.nzShowSearch) || this.nzDisabled) {
              return;
          }
          this.setOpenState(!this.nzOpen);
      };
      NzSelectComponent.prototype.updateListOfContainerItem = function () {
          var _this = this;
          var listOfContainerItem = this.listOfTagAndTemplateItem
              .filter(function (item) { return !item.nzHide; })
              .filter(function (item) {
              if (!_this.nzServerSearch && _this.searchValue) {
                  return _this.nzFilterOption(_this.searchValue, item);
              }
              else {
                  return true;
              }
          });
          if (this.nzMode === 'tags' && this.searchValue) {
              var matchedItem = this.listOfTagAndTemplateItem.find(function (item) { return item.nzLabel === _this.searchValue; });
              if (!matchedItem) {
                  var tagItem = this.generateTagItem(this.searchValue);
                  listOfContainerItem = __spread([tagItem], listOfContainerItem);
                  this.activatedValue = tagItem.nzValue;
              }
              else {
                  this.activatedValue = matchedItem.nzValue;
              }
          }
          var activatedItem = listOfContainerItem.find(function (item) { return _this.compareWith(item.nzValue, _this.listOfValue[0]); }) || listOfContainerItem[0];
          this.activatedValue = (activatedItem && activatedItem.nzValue) || null;
          var listOfGroupLabel = [];
          if (this.isReactiveDriven) {
              listOfGroupLabel = __spread(new Set(this.nzOptions.filter(function (o) { return o.groupLabel; }).map(function (o) { return o.groupLabel; })));
          }
          else {
              if (this.listOfNzOptionGroupComponent) {
                  listOfGroupLabel = this.listOfNzOptionGroupComponent.map(function (o) { return o.nzLabel; });
              }
          }
          /** insert group item **/
          listOfGroupLabel.forEach(function (label) {
              var index = listOfContainerItem.findIndex(function (item) { return label === item.groupLabel; });
              if (index > -1) {
                  var groupItem = { groupLabel: label, type: 'group', key: label };
                  listOfContainerItem.splice(index, 0, groupItem);
              }
          });
          this.listOfContainerItem = __spread(listOfContainerItem);
          this.updateCdkConnectedOverlayPositions();
      };
      NzSelectComponent.prototype.clearInput = function () {
          this.nzSelectTopControlComponent.clearInputValue();
      };
      NzSelectComponent.prototype.updateListOfValue = function (listOfValue) {
          var covertListToModel = function (list, mode) {
              if (mode === 'default') {
                  if (list.length > 0) {
                      return list[0];
                  }
                  else {
                      return null;
                  }
              }
              else {
                  return list;
              }
          };
          var model = covertListToModel(listOfValue, this.nzMode);
          if (this.value !== model) {
              this.listOfValue = listOfValue;
              this.listOfValue$.next(listOfValue);
              this.value = model;
              this.onChange(this.value);
          }
      };
      NzSelectComponent.prototype.onTokenSeparate = function (listOfLabel) {
          var _this = this;
          var listOfMatchedValue = this.listOfTagAndTemplateItem
              .filter(function (item) { return listOfLabel.findIndex(function (label) { return label === item.nzLabel; }) !== -1; })
              .map(function (item) { return item.nzValue; })
              .filter(function (item) { return _this.listOfValue.findIndex(function (v) { return _this.compareWith(v, item); }) === -1; });
          if (this.nzMode === 'multiple') {
              this.updateListOfValue(__spread(this.listOfValue, listOfMatchedValue));
          }
          else if (this.nzMode === 'tags') {
              var listOfUnMatchedLabel = listOfLabel.filter(function (label) { return _this.listOfTagAndTemplateItem.findIndex(function (item) { return item.nzLabel === label; }) === -1; });
              this.updateListOfValue(__spread(this.listOfValue, listOfMatchedValue, listOfUnMatchedLabel));
          }
          this.clearInput();
      };
      NzSelectComponent.prototype.onOverlayKeyDown = function (e) {
          if (e.keyCode === keycodes.ESCAPE) {
              this.setOpenState(false);
          }
      };
      NzSelectComponent.prototype.onKeyDown = function (e) {
          var _this = this;
          if (this.nzDisabled) {
              return;
          }
          var listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter(function (item) { return item.type === 'item'; }).filter(function (item) { return !item.nzDisabled; });
          var activatedIndex = listOfFilteredOptionNotDisabled.findIndex(function (item) { return _this.compareWith(item.nzValue, _this.activatedValue); });
          switch (e.keyCode) {
              case keycodes.UP_ARROW:
                  e.preventDefault();
                  if (this.nzOpen) {
                      var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                      this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
                  }
                  break;
              case keycodes.DOWN_ARROW:
                  e.preventDefault();
                  if (this.nzOpen) {
                      var nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                      this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
                  }
                  else {
                      this.setOpenState(true);
                  }
                  break;
              case keycodes.ENTER:
                  e.preventDefault();
                  if (this.nzOpen) {
                      if (util.isNotNil(this.activatedValue)) {
                          this.onItemClick(this.activatedValue);
                      }
                  }
                  else {
                      this.setOpenState(true);
                  }
                  break;
              case keycodes.SPACE:
                  if (!this.nzOpen) {
                      this.setOpenState(true);
                      e.preventDefault();
                  }
                  break;
              case keycodes.TAB:
                  this.setOpenState(false);
                  break;
              case keycodes.ESCAPE:
                  /**
                   * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                   */
                  break;
              default:
                  if (!this.nzOpen) {
                      this.setOpenState(true);
                  }
          }
      };
      NzSelectComponent.prototype.setOpenState = function (value) {
          if (this.nzOpen !== value) {
              this.nzOpen = value;
              this.nzOpenChange.emit(value);
              this.onOpenChange();
              this.cdr.markForCheck();
          }
      };
      NzSelectComponent.prototype.onOpenChange = function () {
          this.updateCdkConnectedOverlayStatus();
          this.clearInput();
      };
      NzSelectComponent.prototype.onInputValueChange = function (value) {
          this.searchValue = value;
          this.updateListOfContainerItem();
          this.nzOnSearch.emit(value);
          this.updateCdkConnectedOverlayPositions();
      };
      NzSelectComponent.prototype.onClearSelection = function () {
          this.updateListOfValue([]);
      };
      NzSelectComponent.prototype.onClickOutside = function (event) {
          if (!this.elementRef.nativeElement.contains(event.target)) {
              this.setOpenState(false);
          }
      };
      NzSelectComponent.prototype.focus = function () {
          this.nzSelectTopControlComponent.focus();
      };
      NzSelectComponent.prototype.blur = function () {
          this.nzSelectTopControlComponent.blur();
      };
      NzSelectComponent.prototype.onPositionChange = function (position) {
          this.dropDownPosition = position.connectionPair.originY;
      };
      NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
          var _this = this;
          if (this.platform.isBrowser && this.originElement.nativeElement) {
              polyfill.reqAnimFrame(function () {
                  _this.triggerWidth = _this.originElement.nativeElement.getBoundingClientRect().width;
                  _this.cdr.markForCheck();
              });
          }
      };
      NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = function () {
          var _this = this;
          polyfill.reqAnimFrame(function () {
              var _a, _b;
              (_b = (_a = _this.cdkConnectedOverlay) === null || _a === void 0 ? void 0 : _a.overlayRef) === null || _b === void 0 ? void 0 : _b.updatePosition();
          });
      };
      NzSelectComponent.prototype.writeValue = function (modelValue) {
          /** https://github.com/angular/angular/issues/14988 **/
          if (this.value !== modelValue) {
              this.value = modelValue;
              var covertModelToList = function (model, mode) {
                  if (model === null || model === undefined) {
                      return [];
                  }
                  else if (mode === 'default') {
                      return [model];
                  }
                  else {
                      return model;
                  }
              };
              var listOfValue = covertModelToList(modelValue, this.nzMode);
              this.listOfValue = listOfValue;
              this.listOfValue$.next(listOfValue);
              this.cdr.markForCheck();
          }
      };
      NzSelectComponent.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      NzSelectComponent.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      NzSelectComponent.prototype.setDisabledState = function (disabled) {
          this.nzDisabled = disabled;
          if (disabled) {
              this.setOpenState(false);
          }
          this.cdr.markForCheck();
      };
      NzSelectComponent.prototype.ngOnChanges = function (changes) {
          var nzOpen = changes.nzOpen, nzDisabled = changes.nzDisabled, nzOptions = changes.nzOptions;
          if (nzOpen) {
              this.onOpenChange();
          }
          if (nzDisabled && this.nzDisabled) {
              this.setOpenState(false);
          }
          if (nzOptions) {
              this.isReactiveDriven = true;
              var listOfOptions = this.nzOptions || [];
              var listOfTransformedItem = listOfOptions.map(function (item) {
                  return {
                      template: item.label instanceof core.TemplateRef ? item.label : null,
                      nzLabel: typeof item.label === 'string' || typeof item.label === 'number' ? item.label : null,
                      nzValue: item.value,
                      nzDisabled: item.disabled || false,
                      nzHide: item.hide || false,
                      nzCustomContent: item.label instanceof core.TemplateRef,
                      groupLabel: item.groupLabel || null,
                      type: 'item',
                      key: item.value
                  };
              });
              this.listOfTemplateItem$.next(listOfTransformedItem);
          }
      };
      NzSelectComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.focusMonitor
              .monitor(this.elementRef, true)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function (focusOrigin) {
              if (!focusOrigin) {
                  _this.focused = false;
                  _this.cdr.markForCheck();
                  _this.nzBlur.emit();
                  Promise.resolve().then(function () {
                      _this.onTouched();
                  });
              }
              else {
                  _this.focused = true;
                  _this.cdr.markForCheck();
                  _this.nzFocus.emit();
              }
          });
          rxjs.combineLatest([this.listOfValue$, this.listOfTemplateItem$])
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function (_c) {
              var _d = __read(_c, 2), listOfSelectedValue = _d[0], listOfTemplateItem = _d[1];
              var listOfTagItem = listOfSelectedValue
                  .filter(function () { return _this.nzMode === 'tags'; })
                  .filter(function (value) { return listOfTemplateItem.findIndex(function (o) { return _this.compareWith(o.nzValue, value); }) === -1; })
                  .map(function (value) { return _this.listOfTopItem.find(function (o) { return _this.compareWith(o.nzValue, value); }) || _this.generateTagItem(value); });
              _this.listOfTagAndTemplateItem = __spread(listOfTemplateItem, listOfTagItem);
              _this.listOfTopItem = _this.listOfValue
                  .map(function (v) { return __spread(_this.listOfTagAndTemplateItem, _this.listOfTopItem).find(function (item) { return _this.compareWith(v, item.nzValue); }); })
                  .filter(function (item) { return !!item; });
              _this.updateListOfContainerItem();
          });
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
          this.nzConfigService
              .getConfigChangeEventForComponent('select')
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function () {
              _this.cdr.markForCheck();
          });
          this.dir = this.directionality.value;
      };
      NzSelectComponent.prototype.ngAfterContentInit = function () {
          var _this = this;
          if (!this.isReactiveDriven) {
              rxjs.merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                  .pipe(operators.startWith(true), operators.switchMap(function () { return rxjs.merge.apply(void 0, __spread([
                  _this.listOfNzOptionComponent.changes,
                  _this.listOfNzOptionGroupComponent.changes
              ], _this.listOfNzOptionComponent.map(function (option) { return option.changes; }), _this.listOfNzOptionGroupComponent.map(function (option) { return option.changes; }))).pipe(operators.startWith(true)); }), operators.takeUntil(this.destroy$))
                  .subscribe(function () {
                  var listOfOptionInterface = _this.listOfNzOptionComponent.toArray().map(function (item) {
                      var template = item.template, nzLabel = item.nzLabel, nzValue = item.nzValue, nzDisabled = item.nzDisabled, nzHide = item.nzHide, nzCustomContent = item.nzCustomContent, groupLabel = item.groupLabel;
                      return { template: template, nzLabel: nzLabel, nzValue: nzValue, nzDisabled: nzDisabled, nzHide: nzHide, nzCustomContent: nzCustomContent, groupLabel: groupLabel, type: 'item', key: nzValue };
                  });
                  _this.listOfTemplateItem$.next(listOfOptionInterface);
                  _this.cdr.markForCheck();
              });
          }
      };
      NzSelectComponent.prototype.ngOnDestroy = function () {
          this.focusMonitor.stopMonitoring(this.elementRef);
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzSelectComponent;
  }());
  NzSelectComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-select',
                  exportAs: 'nzSelect',
                  preserveWhitespaces: false,
                  providers: [
                      {
                          provide: forms.NG_VALUE_ACCESSOR,
                          useExisting: core.forwardRef(function () { return NzSelectComponent; }),
                          multi: true
                      }
                  ],
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  animations: [animation.slideMotion],
                  template: "\n    <nz-select-top-control\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      [nzId]=\"nzId\"\n      [open]=\"nzOpen\"\n      [disabled]=\"nzDisabled\"\n      [mode]=\"nzMode\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      [maxTagPlaceholder]=\"nzMaxTagPlaceholder\"\n      [removeIcon]=\"nzRemoveIcon\"\n      [placeHolder]=\"nzPlaceHolder\"\n      [maxTagCount]=\"nzMaxTagCount\"\n      [customTemplate]=\"nzCustomTemplate\"\n      [tokenSeparators]=\"nzTokenSeparators\"\n      [showSearch]=\"nzShowSearch\"\n      [autofocus]=\"nzAutoFocus\"\n      [listOfTopItem]=\"listOfTopItem\"\n      (inputValueChange)=\"onInputValueChange($event)\"\n      (tokenize)=\"onTokenSeparate($event)\"\n      (deleteItem)=\"onItemDelete($event)\"\n      (keydown)=\"onKeyDown($event)\"\n    ></nz-select-top-control>\n    <nz-select-arrow\n      *ngIf=\"nzShowArrow\"\n      [loading]=\"nzLoading\"\n      [search]=\"nzOpen && nzShowSearch\"\n      [suffixIcon]=\"nzSuffixIcon\"\n    ></nz-select-arrow>\n    <nz-select-clear\n      *ngIf=\"nzAllowClear && !nzDisabled && listOfValue.length\"\n      [clearIcon]=\"nzClearIcon\"\n      (clear)=\"onClearSelection()\"\n    ></nz-select-clear>\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayMinWidth]=\"$any(nzDropdownMatchSelectWidth ? null : triggerWidth)\"\n      [cdkConnectedOverlayWidth]=\"$any(nzDropdownMatchSelectWidth ? triggerWidth : null)\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-select-dropdown'\"\n      [cdkConnectedOverlayPanelClass]=\"nzDropdownClassName!\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      (overlayKeydown)=\"onOverlayKeyDown($event)\"\n      (overlayOutsideClick)=\"onClickOutside($event)\"\n      (detach)=\"setOpenState(false)\"\n      (positionChange)=\"onPositionChange($event)\"\n    >\n      <nz-option-container\n        [ngStyle]=\"nzDropdownStyle\"\n        [itemSize]=\"nzOptionHeightPx\"\n        [maxItemLength]=\"nzOptionOverflowSize\"\n        [matchWidth]=\"nzDropdownMatchSelectWidth\"\n        [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n        [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n        [@slideMotion]=\"'enter'\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [listOfContainerItem]=\"listOfContainerItem\"\n        [menuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n        [notFoundContent]=\"nzNotFoundContent\"\n        [activatedValue]=\"activatedValue\"\n        [listOfSelectedValue]=\"listOfValue\"\n        [dropdownRender]=\"nzDropdownRender\"\n        [compareWith]=\"compareWith\"\n        [mode]=\"nzMode\"\n        (keydown)=\"onKeyDown($event)\"\n        (itemClick)=\"onItemClick($event)\"\n        (scrollToBottom)=\"nzScrollToBottom.emit()\"\n      ></nz-option-container>\n    </ng-template>\n  ",
                  host: {
                      '[class.ant-select-lg]': 'nzSize === "large"',
                      '[class.ant-select-sm]': 'nzSize === "small"',
                      '[class.ant-select-show-arrow]': "nzShowArrow",
                      '[class.ant-select-disabled]': 'nzDisabled',
                      '[class.ant-select-show-search]': "(nzShowSearch || nzMode !== 'default') && !nzDisabled",
                      '[class.ant-select-allow-clear]': 'nzAllowClear',
                      '[class.ant-select-borderless]': 'nzBorderless',
                      '[class.ant-select-open]': 'nzOpen',
                      '[class.ant-select-focused]': 'nzOpen || focused',
                      '[class.ant-select-single]': "nzMode === 'default'",
                      '[class.ant-select-multiple]': "nzMode !== 'default'",
                      '[class.ant-select-rtl]': "dir === 'rtl'",
                      '(click)': 'onHostClick()'
                  }
              },] }
  ];
  NzSelectComponent.ctorParameters = function () { return [
      { type: config.NzConfigService },
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef },
      { type: platform.Platform },
      { type: a11y.FocusMonitor },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
      { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
  ]; };
  NzSelectComponent.propDecorators = {
      nzId: [{ type: core.Input }],
      nzSize: [{ type: core.Input }],
      nzOptionHeightPx: [{ type: core.Input }],
      nzOptionOverflowSize: [{ type: core.Input }],
      nzDropdownClassName: [{ type: core.Input }],
      nzDropdownMatchSelectWidth: [{ type: core.Input }],
      nzDropdownStyle: [{ type: core.Input }],
      nzNotFoundContent: [{ type: core.Input }],
      nzPlaceHolder: [{ type: core.Input }],
      nzMaxTagCount: [{ type: core.Input }],
      nzDropdownRender: [{ type: core.Input }],
      nzCustomTemplate: [{ type: core.Input }],
      nzSuffixIcon: [{ type: core.Input }],
      nzClearIcon: [{ type: core.Input }],
      nzRemoveIcon: [{ type: core.Input }],
      nzMenuItemSelectedIcon: [{ type: core.Input }],
      nzTokenSeparators: [{ type: core.Input }],
      nzMaxTagPlaceholder: [{ type: core.Input }],
      nzMaxMultipleCount: [{ type: core.Input }],
      nzMode: [{ type: core.Input }],
      nzFilterOption: [{ type: core.Input }],
      compareWith: [{ type: core.Input }],
      nzAllowClear: [{ type: core.Input }],
      nzBorderless: [{ type: core.Input }],
      nzShowSearch: [{ type: core.Input }],
      nzLoading: [{ type: core.Input }],
      nzAutoFocus: [{ type: core.Input }],
      nzAutoClearSearchValue: [{ type: core.Input }],
      nzServerSearch: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzOpen: [{ type: core.Input }],
      nzBackdrop: [{ type: core.Input }],
      nzOptions: [{ type: core.Input }],
      nzShowArrow: [{ type: core.Input }],
      nzOnSearch: [{ type: core.Output }],
      nzScrollToBottom: [{ type: core.Output }],
      nzOpenChange: [{ type: core.Output }],
      nzBlur: [{ type: core.Output }],
      nzFocus: [{ type: core.Output }],
      originElement: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: true, read: core.ElementRef },] }],
      cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: true },] }],
      nzSelectTopControlComponent: [{ type: core.ViewChild, args: [NzSelectTopControlComponent, { static: true },] }],
      listOfNzOptionComponent: [{ type: core.ContentChildren, args: [NzOptionComponent, { descendants: true },] }],
      listOfNzOptionGroupComponent: [{ type: core.ContentChildren, args: [NzOptionGroupComponent, { descendants: true },] }],
      nzOptionGroupComponentElement: [{ type: core.ViewChild, args: [NzOptionGroupComponent, { static: true, read: core.ElementRef },] }],
      nzSelectTopControlComponentElement: [{ type: core.ViewChild, args: [NzSelectTopControlComponent, { static: true, read: core.ElementRef },] }]
  };
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzAllowClear", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzBorderless", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzShowSearch", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzLoading", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzAutoFocus", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzServerSearch", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzOpen", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzSelectComponent.prototype, "nzBackdrop", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzOptionItemGroupComponent = /** @class */ (function () {
      function NzOptionItemGroupComponent(elementRef) {
          this.elementRef = elementRef;
          this.nzLabel = null;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-item', 'ant-select-item-group');
      }
      return NzOptionItemGroupComponent;
  }());
  NzOptionItemGroupComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-option-item-group',
                  template: "\n    <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{ nzLabel }}</ng-container>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None
              },] }
  ];
  NzOptionItemGroupComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzOptionItemGroupComponent.propDecorators = {
      nzLabel: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzOptionItemComponent = /** @class */ (function () {
      function NzOptionItemComponent(elementRef) {
          this.elementRef = elementRef;
          this.selected = false;
          this.activated = false;
          this.grouped = false;
          this.customContent = false;
          this.template = null;
          this.disabled = false;
          this.showState = false;
          this.label = null;
          this.value = null;
          this.activatedValue = null;
          this.listOfSelectedValue = [];
          this.icon = null;
          this.itemClick = new core.EventEmitter();
          this.itemHover = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-item', 'ant-select-item-option');
      }
      NzOptionItemComponent.prototype.onHostMouseEnter = function () {
          if (!this.disabled) {
              this.itemHover.next(this.value);
          }
      };
      NzOptionItemComponent.prototype.onHostClick = function () {
          if (!this.disabled) {
              this.itemClick.next(this.value);
          }
      };
      NzOptionItemComponent.prototype.ngOnChanges = function (changes) {
          var _this = this;
          var value = changes.value, activatedValue = changes.activatedValue, listOfSelectedValue = changes.listOfSelectedValue;
          if (value || listOfSelectedValue) {
              this.selected = this.listOfSelectedValue.some(function (v) { return _this.compareWith(v, _this.value); });
          }
          if (value || activatedValue) {
              this.activated = this.compareWith(this.activatedValue, this.value);
          }
      };
      return NzOptionItemComponent;
  }());
  NzOptionItemComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-option-item',
                  template: "\n    <div class=\"ant-select-item-option-content\">\n      <ng-container *ngIf=\"!customContent\">{{ label }}</ng-container>\n      <ng-container *ngIf=\"customContent\">\n        <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n      </ng-container>\n    </div>\n    <div *ngIf=\"showState && selected\" class=\"ant-select-item-option-state\" style=\"user-select: none\" unselectable=\"on\">\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!icon; else icon\"></i>\n    </div>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  host: {
                      '[attr.title]': 'label',
                      '[class.ant-select-item-option-grouped]': 'grouped',
                      '[class.ant-select-item-option-selected]': 'selected && !disabled',
                      '[class.ant-select-item-option-disabled]': 'disabled',
                      '[class.ant-select-item-option-active]': 'activated && !disabled',
                      '(mouseenter)': 'onHostMouseEnter()',
                      '(click)': 'onHostClick()'
                  }
              },] }
  ];
  NzOptionItemComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzOptionItemComponent.propDecorators = {
      grouped: [{ type: core.Input }],
      customContent: [{ type: core.Input }],
      template: [{ type: core.Input }],
      disabled: [{ type: core.Input }],
      showState: [{ type: core.Input }],
      label: [{ type: core.Input }],
      value: [{ type: core.Input }],
      activatedValue: [{ type: core.Input }],
      listOfSelectedValue: [{ type: core.Input }],
      icon: [{ type: core.Input }],
      compareWith: [{ type: core.Input }],
      itemClick: [{ type: core.Output }],
      itemHover: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSelectArrowComponent = /** @class */ (function () {
      function NzSelectArrowComponent(elementRef) {
          this.elementRef = elementRef;
          this.loading = false;
          this.search = false;
          this.suffixIcon = null;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-arrow');
      }
      return NzSelectArrowComponent;
  }());
  NzSelectArrowComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-select-arrow',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <i nz-icon nzType=\"loading\" *ngIf=\"loading; else defaultArrow\"></i>\n    <ng-template #defaultArrow>\n      <ng-container *ngIf=\"!suffixIcon; else suffixTemplate\">\n        <i nz-icon nzType=\"down\" *ngIf=\"!search\"></i>\n        <i nz-icon nzType=\"search\" *ngIf=\"search\"></i>\n      </ng-container>\n      <ng-template #suffixTemplate>\n        <ng-container *nzStringTemplateOutlet=\"suffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </ng-template>\n    </ng-template>\n  ",
                  host: {
                      '[class.ant-select-arrow-loading]': 'loading'
                  }
              },] }
  ];
  NzSelectArrowComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzSelectArrowComponent.propDecorators = {
      loading: [{ type: core.Input }],
      search: [{ type: core.Input }],
      suffixIcon: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSelectClearComponent = /** @class */ (function () {
      function NzSelectClearComponent(elementRef) {
          this.elementRef = elementRef;
          this.clearIcon = null;
          this.clear = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-clear');
      }
      NzSelectClearComponent.prototype.onClick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          this.clear.emit(e);
      };
      return NzSelectClearComponent;
  }());
  NzSelectClearComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-select-clear',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!clearIcon; else clearIcon\" class=\"ant-select-close-icon\"></i>\n  ",
                  host: {
                      '(click)': 'onClick($event)'
                  }
              },] }
  ];
  NzSelectClearComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzSelectClearComponent.propDecorators = {
      clearIcon: [{ type: core.Input }],
      clear: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSelectItemComponent = /** @class */ (function () {
      function NzSelectItemComponent(elementRef) {
          this.elementRef = elementRef;
          this.disabled = false;
          this.label = null;
          this.deletable = false;
          this.removeIcon = null;
          this.contentTemplateOutletContext = null;
          this.contentTemplateOutlet = null;
          this.delete = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-selection-item');
      }
      NzSelectItemComponent.prototype.onDelete = function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (!this.disabled) {
              this.delete.next(e);
          }
      };
      return NzSelectItemComponent;
  }());
  NzSelectItemComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-select-item',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-container *nzStringTemplateOutlet=\"contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }\">\n      <div class=\"ant-select-selection-item-content\" *ngIf=\"deletable; else labelTemplate\">{{ label }}</div>\n      <ng-template #labelTemplate>{{ label }}</ng-template>\n    </ng-container>\n    <span *ngIf=\"deletable && !disabled\" class=\"ant-select-selection-item-remove\" (click)=\"onDelete($event)\">\n      <i nz-icon nzType=\"close\" *ngIf=\"!removeIcon; else removeIcon\"></i>\n    </span>\n  ",
                  host: {
                      '[attr.title]': 'label',
                      '[class.ant-select-selection-item-disabled]': 'disabled'
                  }
              },] }
  ];
  NzSelectItemComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzSelectItemComponent.propDecorators = {
      disabled: [{ type: core.Input }],
      label: [{ type: core.Input }],
      deletable: [{ type: core.Input }],
      removeIcon: [{ type: core.Input }],
      contentTemplateOutletContext: [{ type: core.Input }],
      contentTemplateOutlet: [{ type: core.Input }],
      delete: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSelectPlaceholderComponent = /** @class */ (function () {
      function NzSelectPlaceholderComponent(elementRef) {
          this.elementRef = elementRef;
          this.placeholder = null;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-select-selection-placeholder');
      }
      return NzSelectPlaceholderComponent;
  }());
  NzSelectPlaceholderComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-select-placeholder',
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-container *nzStringTemplateOutlet=\"placeholder\">\n      {{ placeholder }}\n    </ng-container>\n  "
              },] }
  ];
  NzSelectPlaceholderComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzSelectPlaceholderComponent.propDecorators = {
      placeholder: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzSelectModule = /** @class */ (function () {
      function NzSelectModule() {
      }
      return NzSelectModule;
  }());
  NzSelectModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      i18n.NzI18nModule,
                      forms.FormsModule,
                      platform.PlatformModule,
                      overlay.OverlayModule,
                      icon.NzIconModule,
                      outlet.NzOutletModule,
                      empty.NzEmptyModule,
                      overlay$1.NzOverlayModule,
                      noAnimation.NzNoAnimationModule,
                      transitionPatch.ɵNzTransitionPatchModule,
                      scrolling.ScrollingModule,
                      a11y.A11yModule
                  ],
                  declarations: [
                      NzOptionComponent,
                      NzSelectComponent,
                      NzOptionContainerComponent,
                      NzOptionGroupComponent,
                      NzOptionItemComponent,
                      NzSelectTopControlComponent,
                      NzSelectSearchComponent,
                      NzSelectItemComponent,
                      NzSelectClearComponent,
                      NzSelectArrowComponent,
                      NzSelectPlaceholderComponent,
                      NzOptionItemGroupComponent
                  ],
                  exports: [
                      NzOptionComponent,
                      NzSelectComponent,
                      NzOptionGroupComponent,
                      NzSelectArrowComponent,
                      NzSelectClearComponent,
                      NzSelectItemComponent,
                      NzSelectPlaceholderComponent,
                      NzSelectSearchComponent
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

  exports.NzOptionComponent = NzOptionComponent;
  exports.NzOptionContainerComponent = NzOptionContainerComponent;
  exports.NzOptionGroupComponent = NzOptionGroupComponent;
  exports.NzOptionItemComponent = NzOptionItemComponent;
  exports.NzOptionItemGroupComponent = NzOptionItemGroupComponent;
  exports.NzSelectArrowComponent = NzSelectArrowComponent;
  exports.NzSelectClearComponent = NzSelectClearComponent;
  exports.NzSelectComponent = NzSelectComponent;
  exports.NzSelectItemComponent = NzSelectItemComponent;
  exports.NzSelectModule = NzSelectModule;
  exports.NzSelectPlaceholderComponent = NzSelectPlaceholderComponent;
  exports.NzSelectSearchComponent = NzSelectSearchComponent;
  exports.NzSelectTopControlComponent = NzSelectTopControlComponent;
  exports.ɵ0 = ɵ0;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-select.umd.js.map
