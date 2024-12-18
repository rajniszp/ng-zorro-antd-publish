(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/bidi'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/i18n'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/button'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/transfer', ['exports', '@angular/core', '@angular/cdk/bidi', 'ng-zorro-antd/core/util', 'ng-zorro-antd/i18n', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/forms', 'ng-zorro-antd/button', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon', 'ng-zorro-antd/input'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].transfer = {}), global.ng.core, global.ng.cdk.bidi, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].i18n, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.forms, global['ng-zorro-antd'].button, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input));
}(this, (function (exports, core, bidi, util, i18n, rxjs, operators, common, forms, button, checkbox, empty, icon, input) { 'use strict';

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTransferListComponent = /** @class */ (function () {
      // #endregion
      function NzTransferListComponent(cdr, elementRef) {
          var _this = this;
          this.cdr = cdr;
          this.elementRef = elementRef;
          // #region fields
          this.direction = 'left';
          this.titleText = '';
          this.showSelectAll = true;
          this.dataSource = [];
          this.itemUnit = '';
          this.itemsUnit = '';
          this.filter = '';
          this.disabled = false;
          this.renderList = null;
          this.render = null;
          this.footer = null;
          // events
          this.handleSelectAll = new core.EventEmitter();
          this.handleSelect = new core.EventEmitter();
          this.filterChange = new core.EventEmitter();
          this.stat = {
              checkAll: false,
              checkHalf: false,
              checkCount: 0,
              shownCount: 0
          };
          this.onItemSelect = function (item) {
              if (_this.disabled || item.disabled) {
                  return;
              }
              item.checked = !item.checked;
              _this.updateCheckStatus();
              _this.handleSelect.emit(item);
          };
          this.onItemSelectAll = function (status) {
              _this.dataSource.forEach(function (item) {
                  if (!item.disabled && !item.hide) {
                      item.checked = status;
                  }
              });
              _this.updateCheckStatus();
              _this.handleSelectAll.emit(status);
          };
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-transfer-list');
      }
      Object.defineProperty(NzTransferListComponent.prototype, "validData", {
          get: function () {
              return this.dataSource.filter(function (w) { return !w.hide; });
          },
          enumerable: false,
          configurable: true
      });
      NzTransferListComponent.prototype.updateCheckStatus = function () {
          var validCount = this.dataSource.filter(function (w) { return !w.disabled; }).length;
          this.stat.checkCount = this.dataSource.filter(function (w) { return w.checked && !w.disabled; }).length;
          this.stat.shownCount = this.validData.length;
          this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
          this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
      };
      // #endregion
      // #region search
      NzTransferListComponent.prototype.handleFilter = function (value) {
          var _this = this;
          this.filter = value;
          this.dataSource.forEach(function (item) {
              item.hide = value.length > 0 && !_this.matchFilter(value, item);
          });
          this.stat.shownCount = this.validData.length;
          this.filterChange.emit({ direction: this.direction, value: value });
      };
      NzTransferListComponent.prototype.handleClear = function () {
          this.handleFilter('');
      };
      NzTransferListComponent.prototype.matchFilter = function (text, item) {
          if (this.filterOption) {
              return this.filterOption(text, item);
          }
          return item.title.includes(text);
      };
      NzTransferListComponent.prototype.markForCheck = function () {
          this.updateCheckStatus();
          this.cdr.markForCheck();
      };
      return NzTransferListComponent;
  }());
  NzTransferListComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-transfer-list',
                  exportAs: 'nzTransferList',
                  preserveWhitespaces: false,
                  template: "\n    <ng-template #defaultRenderList>\n      <ul *ngIf=\"stat.shownCount > 0\" class=\"ant-transfer-list-content\">\n        <li\n          *ngFor=\"let item of validData\"\n          (click)=\"onItemSelect(item)\"\n          class=\"ant-transfer-list-content-item\"\n          [ngClass]=\"{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }\"\n        >\n          <label\n            nz-checkbox\n            [nzChecked]=\"item.checked\"\n            (nzCheckedChange)=\"onItemSelect(item)\"\n            (click)=\"$event.stopPropagation()\"\n            [nzDisabled]=\"disabled || item.disabled\"\n          >\n            <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n            <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </label>\n        </li>\n      </ul>\n      <div *ngIf=\"stat.shownCount === 0\" class=\"ant-transfer-list-body-not-found\">\n        <nz-embed-empty [nzComponentName]=\"'transfer'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n      </div>\n    </ng-template>\n    <div class=\"ant-transfer-list-header\">\n      <label\n        *ngIf=\"showSelectAll\"\n        nz-checkbox\n        [nzChecked]=\"stat.checkAll\"\n        (nzCheckedChange)=\"onItemSelectAll($event)\"\n        [nzIndeterminate]=\"stat.checkHalf\"\n        [nzDisabled]=\"stat.shownCount == 0 || disabled\"\n      ></label>\n      <span class=\"ant-transfer-list-header-selected\">\n        <span>\n          {{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ validData.length > 1 ? itemsUnit : itemUnit }}\n        </span>\n        <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n      </span>\n    </div>\n    <div\n      class=\"{{ showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body' }}\"\n      [ngClass]=\"{ 'ant-transfer__nodata': stat.shownCount === 0 }\"\n    >\n      <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n        <div\n          nz-transfer-search\n          (valueChanged)=\"handleFilter($event)\"\n          (valueClear)=\"handleClear()\"\n          [placeholder]=\"searchPlaceholder\"\n          [disabled]=\"disabled\"\n          [value]=\"filter\"\n        ></div>\n      </div>\n      <ng-container *ngIf=\"renderList; else defaultRenderList\">\n        <div class=\"ant-transfer-list-body-customize-wrapper\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              renderList;\n              context: {\n                $implicit: validData,\n                direction: direction,\n                disabled: disabled,\n                onItemSelectAll: onItemSelectAll,\n                onItemSelect: onItemSelect,\n                stat: stat\n              }\n            \"\n          ></ng-container>\n        </div>\n      </ng-container>\n    </div>\n    <div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n      <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n    </div>\n  ",
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  host: {
                      '[class.ant-transfer-list-with-footer]': '!!footer'
                  }
              },] }
  ];
  NzTransferListComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef }
  ]; };
  NzTransferListComponent.propDecorators = {
      direction: [{ type: core.Input }],
      titleText: [{ type: core.Input }],
      showSelectAll: [{ type: core.Input }],
      dataSource: [{ type: core.Input }],
      itemUnit: [{ type: core.Input }],
      itemsUnit: [{ type: core.Input }],
      filter: [{ type: core.Input }],
      disabled: [{ type: core.Input }],
      showSearch: [{ type: core.Input }],
      searchPlaceholder: [{ type: core.Input }],
      notFoundContent: [{ type: core.Input }],
      filterOption: [{ type: core.Input }],
      renderList: [{ type: core.Input }],
      render: [{ type: core.Input }],
      footer: [{ type: core.Input }],
      handleSelectAll: [{ type: core.Output }],
      handleSelect: [{ type: core.Output }],
      filterChange: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTransferSearchComponent = /** @class */ (function () {
      // endregion
      function NzTransferSearchComponent(cdr) {
          this.cdr = cdr;
          this.disabled = false;
          this.valueChanged = new core.EventEmitter();
          this.valueClear = new core.EventEmitter();
      }
      NzTransferSearchComponent.prototype._handle = function () {
          this.valueChanged.emit(this.value);
      };
      NzTransferSearchComponent.prototype._clear = function () {
          if (this.disabled) {
              return;
          }
          this.value = '';
          this.valueClear.emit();
      };
      NzTransferSearchComponent.prototype.ngOnChanges = function () {
          this.cdr.detectChanges();
      };
      return NzTransferSearchComponent;
  }());
  NzTransferSearchComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-transfer-search]',
                  exportAs: 'nzTransferSearch',
                  preserveWhitespaces: false,
                  template: "\n    <input\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"_handle()\"\n      [disabled]=\"disabled\"\n      [placeholder]=\"placeholder\"\n      class=\"ant-input ant-transfer-list-search\"\n      [ngClass]=\"{ 'ant-input-disabled': disabled }\"\n    />\n    <a *ngIf=\"value && value.length > 0; else def\" class=\"ant-transfer-list-search-action\" (click)=\"_clear()\">\n      <i nz-icon nzType=\"close-circle\"></i>\n    </a>\n    <ng-template #def>\n      <span class=\"ant-transfer-list-search-action\"><i nz-icon nzType=\"search\"></i></span>\n    </ng-template>\n  ",
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NzTransferSearchComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef }
  ]; };
  NzTransferSearchComponent.propDecorators = {
      placeholder: [{ type: core.Input }],
      value: [{ type: core.Input }],
      disabled: [{ type: core.Input }],
      valueChanged: [{ type: core.Output }],
      valueClear: [{ type: core.Output }]
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

  var NzTransferComponent = /** @class */ (function () {
      // #endregion
      function NzTransferComponent(cdr, i18n, elementRef, directionality) {
          var _this = this;
          this.cdr = cdr;
          this.i18n = i18n;
          this.elementRef = elementRef;
          this.directionality = directionality;
          this.unsubscribe$ = new rxjs.Subject();
          this.leftFilter = '';
          this.rightFilter = '';
          this.dir = 'ltr';
          // #region fields
          this.nzDisabled = false;
          this.nzDataSource = [];
          this.nzTitles = ['', ''];
          this.nzOperations = [];
          this.nzListStyle = {};
          this.nzShowSelectAll = true;
          this.nzCanMove = function (arg) { return rxjs.of(arg.list); };
          this.nzRenderList = null;
          this.nzRender = null;
          this.nzFooter = null;
          this.nzShowSearch = false;
          this.nzTargetKeys = [];
          this.nzSelectedKeys = [];
          // events
          this.nzChange = new core.EventEmitter();
          this.nzSearchChange = new core.EventEmitter();
          this.nzSelectChange = new core.EventEmitter();
          // #endregion
          // #region process data
          // left
          this.leftDataSource = [];
          // right
          this.rightDataSource = [];
          this.handleLeftSelectAll = function (checked) { return _this.handleSelect('left', checked); };
          this.handleRightSelectAll = function (checked) { return _this.handleSelect('right', checked); };
          this.handleLeftSelect = function (item) { return _this.handleSelect('left', !!item.checked, item); };
          this.handleRightSelect = function (item) { return _this.handleSelect('right', !!item.checked, item); };
          // #endregion
          // #region operation
          this.leftActive = false;
          this.rightActive = false;
          this.moveToLeft = function () { return _this.moveTo('left'); };
          this.moveToRight = function () { return _this.moveTo('right'); };
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-transfer');
      }
      NzTransferComponent.prototype.splitDataSource = function () {
          var _this = this;
          this.leftDataSource = [];
          this.rightDataSource = [];
          this.nzDataSource.forEach(function (record) {
              if (record.direction === 'right') {
                  record.direction = 'right';
                  _this.rightDataSource.push(record);
              }
              else {
                  record.direction = 'left';
                  _this.leftDataSource.push(record);
              }
          });
      };
      NzTransferComponent.prototype.getCheckedData = function (direction) {
          return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(function (w) { return w.checked; });
      };
      NzTransferComponent.prototype.handleSelect = function (direction, checked, item) {
          var list = this.getCheckedData(direction);
          this.updateOperationStatus(direction, list.length);
          this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
      };
      NzTransferComponent.prototype.handleFilterChange = function (ret) {
          this.nzSearchChange.emit(ret);
      };
      NzTransferComponent.prototype.updateOperationStatus = function (direction, count) {
          this[direction === 'right' ? 'leftActive' : 'rightActive'] =
              (typeof count === 'undefined' ? this.getCheckedData(direction).filter(function (w) { return !w.disabled; }).length : count) > 0;
      };
      NzTransferComponent.prototype.moveTo = function (direction) {
          var _this = this;
          var oppositeDirection = direction === 'left' ? 'right' : 'left';
          this.updateOperationStatus(oppositeDirection, 0);
          var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
          var moveList = datasource.filter(function (item) { return item.checked === true && !item.disabled; });
          this.nzCanMove({ direction: direction, list: moveList }).subscribe(function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter(function (i) { return !!i; })); }, function () { return moveList.forEach(function (i) { return (i.checked = false); }); });
      };
      NzTransferComponent.prototype.truthMoveTo = function (direction, list) {
          var e_1, _b;
          var oppositeDirection = direction === 'left' ? 'right' : 'left';
          var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
          var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
          try {
              for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                  var item = list_1_1.value;
                  item.checked = false;
                  item.hide = false;
                  item.direction = direction;
                  datasource.splice(datasource.indexOf(item), 1);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (list_1_1 && !list_1_1.done && (_b = list_1.return)) _b.call(list_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          targetDatasource.splice.apply(targetDatasource, __spread([0, 0], list));
          this.updateOperationStatus(oppositeDirection);
          this.nzChange.emit({
              from: oppositeDirection,
              to: direction,
              list: list
          });
          this.markForCheckAllList();
      };
      NzTransferComponent.prototype.markForCheckAllList = function () {
          if (!this.lists) {
              return;
          }
          this.lists.forEach(function (i) { return i.markForCheck(); });
      };
      NzTransferComponent.prototype.handleNzTargetKeys = function () {
          var keys = util.toArray(this.nzTargetKeys);
          var hasOwnKey = function (e) { return e.hasOwnProperty('key'); };
          this.leftDataSource.forEach(function (e) {
              if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
                  e.checked = true;
              }
          });
          this.moveToRight();
      };
      NzTransferComponent.prototype.handleNzSelectedKeys = function () {
          var keys = util.toArray(this.nzSelectedKeys);
          this.nzDataSource.forEach(function (e) {
              if (keys.indexOf(e.key) !== -1) {
                  e.checked = true;
              }
          });
          var term = function (ld) { return ld.disabled === false && ld.checked === true; };
          this.rightActive = this.leftDataSource.some(term);
          this.leftActive = this.rightDataSource.some(term);
      };
      NzTransferComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.i18n.localeChange.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
              _this.locale = _this.i18n.getLocaleData('Transfer');
              _this.markForCheckAllList();
          });
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
      };
      NzTransferComponent.prototype.ngOnChanges = function (changes) {
          if (changes.nzDataSource) {
              this.splitDataSource();
              this.updateOperationStatus('left');
              this.updateOperationStatus('right');
              this.cdr.detectChanges();
              this.markForCheckAllList();
          }
          if (changes.nzTargetKeys) {
              this.handleNzTargetKeys();
          }
          if (changes.nzSelectedKeys) {
              this.handleNzSelectedKeys();
          }
      };
      NzTransferComponent.prototype.ngOnDestroy = function () {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
      };
      return NzTransferComponent;
  }());
  NzTransferComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-transfer',
                  exportAs: 'nzTransfer',
                  preserveWhitespaces: false,
                  template: "\n    <nz-transfer-list\n      class=\"ant-transfer-list\"\n      [ngStyle]=\"nzListStyle\"\n      data-direction=\"left\"\n      direction=\"left\"\n      [titleText]=\"nzTitles[0]\"\n      [showSelectAll]=\"nzShowSelectAll\"\n      [dataSource]=\"leftDataSource\"\n      [filter]=\"leftFilter\"\n      [filterOption]=\"nzFilterOption\"\n      (filterChange)=\"handleFilterChange($event)\"\n      [renderList]=\"nzRenderList && nzRenderList[0]\"\n      [render]=\"nzRender\"\n      [disabled]=\"nzDisabled\"\n      [showSearch]=\"nzShowSearch\"\n      [searchPlaceholder]=\"nzSearchPlaceholder || locale?.searchPlaceholder\"\n      [notFoundContent]=\"nzNotFoundContent\"\n      [itemUnit]=\"nzItemUnit || locale?.itemUnit\"\n      [itemsUnit]=\"nzItemsUnit || locale?.itemsUnit\"\n      [footer]=\"nzFooter\"\n      (handleSelect)=\"handleLeftSelect($event)\"\n      (handleSelectAll)=\"handleLeftSelectAll($event)\"\n    ></nz-transfer-list>\n    <div *ngIf=\"dir !== 'rtl'\" class=\"ant-transfer-operation\">\n      <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"left\"></i>\n        <span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n      </button>\n      <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"right\"></i>\n        <span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n      </button>\n    </div>\n    <div *ngIf=\"dir === 'rtl'\" class=\"ant-transfer-operation\">\n      <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"left\"></i>\n        <span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n      </button>\n      <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"right\"></i>\n        <span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n      </button>\n    </div>\n    <nz-transfer-list\n      class=\"ant-transfer-list\"\n      [ngStyle]=\"nzListStyle\"\n      data-direction=\"right\"\n      direction=\"right\"\n      [titleText]=\"nzTitles[1]\"\n      [showSelectAll]=\"nzShowSelectAll\"\n      [dataSource]=\"rightDataSource\"\n      [filter]=\"rightFilter\"\n      [filterOption]=\"nzFilterOption\"\n      (filterChange)=\"handleFilterChange($event)\"\n      [renderList]=\"nzRenderList && nzRenderList[1]\"\n      [render]=\"nzRender\"\n      [disabled]=\"nzDisabled\"\n      [showSearch]=\"nzShowSearch\"\n      [searchPlaceholder]=\"nzSearchPlaceholder || locale?.searchPlaceholder\"\n      [notFoundContent]=\"nzNotFoundContent\"\n      [itemUnit]=\"nzItemUnit || locale?.itemUnit\"\n      [itemsUnit]=\"nzItemsUnit || locale?.itemsUnit\"\n      [footer]=\"nzFooter\"\n      (handleSelect)=\"handleRightSelect($event)\"\n      (handleSelectAll)=\"handleRightSelectAll($event)\"\n    ></nz-transfer-list>\n  ",
                  host: {
                      '[class.ant-transfer-rtl]': "dir === 'rtl'",
                      '[class.ant-transfer-disabled]': "nzDisabled",
                      '[class.ant-transfer-customize-list]': "nzRenderList"
                  },
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NzTransferComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: i18n.NzI18nService },
      { type: core.ElementRef },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzTransferComponent.propDecorators = {
      lists: [{ type: core.ViewChildren, args: [NzTransferListComponent,] }],
      nzDisabled: [{ type: core.Input }],
      nzDataSource: [{ type: core.Input }],
      nzTitles: [{ type: core.Input }],
      nzOperations: [{ type: core.Input }],
      nzListStyle: [{ type: core.Input }],
      nzShowSelectAll: [{ type: core.Input }],
      nzItemUnit: [{ type: core.Input }],
      nzItemsUnit: [{ type: core.Input }],
      nzCanMove: [{ type: core.Input }],
      nzRenderList: [{ type: core.Input }],
      nzRender: [{ type: core.Input }],
      nzFooter: [{ type: core.Input }],
      nzShowSearch: [{ type: core.Input }],
      nzFilterOption: [{ type: core.Input }],
      nzSearchPlaceholder: [{ type: core.Input }],
      nzNotFoundContent: [{ type: core.Input }],
      nzTargetKeys: [{ type: core.Input }],
      nzSelectedKeys: [{ type: core.Input }],
      nzChange: [{ type: core.Output }],
      nzSearchChange: [{ type: core.Output }],
      nzSelectChange: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTransferComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTransferComponent.prototype, "nzShowSearch", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTransferModule = /** @class */ (function () {
      function NzTransferModule() {
      }
      return NzTransferModule;
  }());
  NzTransferModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      forms.FormsModule,
                      checkbox.NzCheckboxModule,
                      button.NzButtonModule,
                      input.NzInputModule,
                      i18n.NzI18nModule,
                      icon.NzIconModule,
                      empty.NzEmptyModule
                  ],
                  declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                  exports: [NzTransferComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzTransferComponent = NzTransferComponent;
  exports.NzTransferListComponent = NzTransferListComponent;
  exports.NzTransferModule = NzTransferModule;
  exports.NzTransferSearchComponent = NzTransferSearchComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-transfer.umd.js.map
