(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/platform'), require('@angular/cdk/scrolling'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/button'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/core/resize-observers'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/services'), require('ng-zorro-antd/core/config')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/table', ['exports', '@angular/cdk/bidi', '@angular/cdk/platform', '@angular/cdk/scrolling', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/button', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/core/resize-observers', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/empty', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/pagination', 'ng-zorro-antd/radio', 'ng-zorro-antd/spin', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/services', 'ng-zorro-antd/core/config'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].table = {}), global.ng.cdk.bidi, global.ng.cdk.platform, global.ng.cdk.scrolling, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].button, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].core['resize-observers'], global['ng-zorro-antd'].dropdown, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].menu, global['ng-zorro-antd'].pagination, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].spin, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core.services, global['ng-zorro-antd'].core.config));
}(this, (function (exports, bidi, platform, scrolling, common, core, forms, button, checkbox, outlet, resizeObservers, dropdown, empty, i18n, icon, menu, pagination, radio, spin, util, rxjs, operators, services, config) { 'use strict';

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzFilterTriggerComponent = /** @class */ (function () {
      function NzFilterTriggerComponent(cdr, elementRef) {
          this.cdr = cdr;
          this.elementRef = elementRef;
          this.nzActive = false;
          this.nzVisible = false;
          this.nzHasBackdrop = false;
          this.nzVisibleChange = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-filter-trigger-container');
      }
      NzFilterTriggerComponent.prototype.onVisibleChange = function (visible) {
          this.nzVisible = visible;
          this.nzVisibleChange.next(visible);
      };
      NzFilterTriggerComponent.prototype.onFilterClick = function ($event) {
          $event.stopPropagation();
      };
      NzFilterTriggerComponent.prototype.hide = function () {
          this.nzVisible = false;
          this.cdr.markForCheck();
      };
      NzFilterTriggerComponent.prototype.show = function () {
          this.nzVisible = true;
          this.cdr.markForCheck();
      };
      return NzFilterTriggerComponent;
  }());
  NzFilterTriggerComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-filter-trigger',
                  exportAs: "nzFilterTrigger",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <span\n      nz-dropdown\n      class=\"ant-table-filter-trigger\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      [nzHasBackdrop]=\"nzHasBackdrop\"\n      [nzClickHide]=\"false\"\n      [nzDropdownMenu]=\"nzDropdownMenu\"\n      [class.active]=\"nzActive\"\n      [class.ant-table-filter-open]=\"nzVisible\"\n      [nzVisible]=\"nzVisible\"\n      (nzVisibleChange)=\"onVisibleChange($event)\"\n      (click)=\"onFilterClick($event)\"\n    >\n      <ng-content></ng-content>\n    </span>\n  ",
                  host: {
                      '[class.ant-table-filter-trigger-container-open]': 'nzVisible'
                  }
              },] }
  ];
  NzFilterTriggerComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: core.ElementRef }
  ]; };
  NzFilterTriggerComponent.propDecorators = {
      nzActive: [{ type: core.Input }],
      nzDropdownMenu: [{ type: core.Input }],
      nzVisible: [{ type: core.Input }],
      nzHasBackdrop: [{ type: core.Input }],
      nzVisibleChange: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableFilterComponent = /** @class */ (function () {
      function NzTableFilterComponent(cdr, i18n, elementRef) {
          this.cdr = cdr;
          this.i18n = i18n;
          this.elementRef = elementRef;
          this.contentTemplate = null;
          this.customFilter = false;
          this.extraTemplate = null;
          this.filterMultiple = true;
          this.listOfFilter = [];
          this.filterChange = new core.EventEmitter();
          this.destroy$ = new rxjs.Subject();
          this.isChecked = false;
          this.isVisible = false;
          this.listOfParsedFilter = [];
          this.listOfChecked = [];
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-filter-column');
      }
      NzTableFilterComponent.prototype.trackByValue = function (_, item) {
          return item.value;
      };
      NzTableFilterComponent.prototype.check = function (filter) {
          if (this.filterMultiple) {
              this.listOfParsedFilter = this.listOfParsedFilter.map(function (item) {
                  if (item === filter) {
                      return Object.assign(Object.assign({}, item), { checked: !filter.checked });
                  }
                  else {
                      return item;
                  }
              });
              filter.checked = !filter.checked;
          }
          else {
              this.listOfParsedFilter = this.listOfParsedFilter.map(function (item) {
                  return Object.assign(Object.assign({}, item), { checked: item === filter });
              });
          }
          this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
      };
      NzTableFilterComponent.prototype.confirm = function () {
          this.isVisible = false;
          this.emitFilterData();
      };
      NzTableFilterComponent.prototype.reset = function () {
          this.isVisible = false;
          this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
          this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
          this.emitFilterData();
      };
      NzTableFilterComponent.prototype.onVisibleChange = function (value) {
          this.isVisible = value;
          if (!value) {
              this.emitFilterData();
          }
          else {
              this.listOfChecked = this.listOfParsedFilter.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
          }
      };
      NzTableFilterComponent.prototype.emitFilterData = function () {
          var listOfChecked = this.listOfParsedFilter.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
          if (!util.arraysEqual(this.listOfChecked, listOfChecked)) {
              if (this.filterMultiple) {
                  this.filterChange.emit(listOfChecked);
              }
              else {
                  this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
              }
          }
      };
      NzTableFilterComponent.prototype.parseListOfFilter = function (listOfFilter, reset) {
          return listOfFilter.map(function (item) {
              var checked = reset ? false : !!item.byDefault;
              return { text: item.text, value: item.value, checked: checked };
          });
      };
      NzTableFilterComponent.prototype.getCheckedStatus = function (listOfParsedFilter) {
          return listOfParsedFilter.some(function (item) { return item.checked; });
      };
      NzTableFilterComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
              _this.locale = _this.i18n.getLocaleData('Table');
              _this.cdr.markForCheck();
          });
      };
      NzTableFilterComponent.prototype.ngOnChanges = function (changes) {
          var listOfFilter = changes.listOfFilter;
          if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
              this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
              this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
          }
      };
      NzTableFilterComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTableFilterComponent;
  }());
  NzTableFilterComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-table-filter',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <span class=\"ant-table-filter-column-title\">\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    </span>\n    <ng-container *ngIf=\"!customFilter; else extraTemplate\">\n      <nz-filter-trigger\n        [nzVisible]=\"isVisible\"\n        [nzActive]=\"isChecked\"\n        [nzDropdownMenu]=\"filterMenu\"\n        (nzVisibleChange)=\"onVisibleChange($event)\"\n      >\n        <i nz-icon nzType=\"filter\" nzTheme=\"fill\"></i>\n      </nz-filter-trigger>\n      <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n        <div class=\"ant-table-filter-dropdown\">\n          <ul nz-menu>\n            <li nz-menu-item [nzSelected]=\"f.checked\" *ngFor=\"let f of listOfParsedFilter; trackBy: trackByValue\" (click)=\"check(f)\">\n              <label nz-radio *ngIf=\"!filterMultiple\" [ngModel]=\"f.checked\" (ngModelChange)=\"check(f)\"></label>\n              <label nz-checkbox *ngIf=\"filterMultiple\" [ngModel]=\"f.checked\" (ngModelChange)=\"check(f)\"></label>\n              <span>{{ f.text }}</span>\n            </li>\n          </ul>\n          <div class=\"ant-table-filter-dropdown-btns\">\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"reset()\" [disabled]=\"!isChecked\">{{ locale.filterReset }}</button>\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"confirm()\">{{ locale.filterConfirm }}</button>\n          </div>\n        </div>\n      </nz-dropdown-menu>\n    </ng-container>\n  "
              },] }
  ];
  NzTableFilterComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: i18n.NzI18nService },
      { type: core.ElementRef }
  ]; };
  NzTableFilterComponent.propDecorators = {
      contentTemplate: [{ type: core.Input }],
      customFilter: [{ type: core.Input }],
      extraTemplate: [{ type: core.Input }],
      filterMultiple: [{ type: core.Input }],
      listOfFilter: [{ type: core.Input }],
      filterChange: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzRowExpandButtonDirective = /** @class */ (function () {
      function NzRowExpandButtonDirective(elementRef) {
          this.elementRef = elementRef;
          this.expand = false;
          this.spaceMode = false;
          this.expandChange = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-row-expand-icon');
      }
      NzRowExpandButtonDirective.prototype.onHostClick = function () {
          if (!this.spaceMode) {
              this.expand = !this.expand;
              this.expandChange.next(this.expand);
          }
      };
      return NzRowExpandButtonDirective;
  }());
  NzRowExpandButtonDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'button[nz-row-expand-button]',
                  host: {
                      '[type]': "'button'",
                      '[class.ant-table-row-expand-icon-expanded]': "!spaceMode && expand === true",
                      '[class.ant-table-row-expand-icon-collapsed]': "!spaceMode && expand === false",
                      '[class.ant-table-row-expand-icon-spaced]': 'spaceMode',
                      '(click)': 'onHostClick()'
                  }
              },] }
  ];
  NzRowExpandButtonDirective.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzRowExpandButtonDirective.propDecorators = {
      expand: [{ type: core.Input }],
      spaceMode: [{ type: core.Input }],
      expandChange: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzRowIndentDirective = /** @class */ (function () {
      function NzRowIndentDirective(elementRef) {
          this.elementRef = elementRef;
          this.indentSize = 0;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-row-indent');
      }
      return NzRowIndentDirective;
  }());
  NzRowIndentDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'nz-row-indent',
                  host: {
                      '[style.padding-left.px]': 'indentSize'
                  }
              },] }
  ];
  NzRowIndentDirective.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzRowIndentDirective.propDecorators = {
      indentSize: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableSelectionComponent = /** @class */ (function () {
      function NzTableSelectionComponent(elementRef) {
          this.elementRef = elementRef;
          this.listOfSelections = [];
          this.checked = false;
          this.disabled = false;
          this.indeterminate = false;
          this.showCheckbox = false;
          this.showRowSelection = false;
          this.checkedChange = new core.EventEmitter();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-selection');
      }
      NzTableSelectionComponent.prototype.onCheckedChange = function (checked) {
          this.checked = checked;
          this.checkedChange.emit(checked);
      };
      return NzTableSelectionComponent;
  }());
  NzTableSelectionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-table-selection',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <label\n      *ngIf=\"showCheckbox\"\n      nz-checkbox\n      [class.ant-table-selection-select-all-custom]=\"showRowSelection\"\n      [ngModel]=\"checked\"\n      [nzDisabled]=\"disabled\"\n      [nzIndeterminate]=\"indeterminate\"\n      (ngModelChange)=\"onCheckedChange($event)\"\n    ></label>\n    <div class=\"ant-table-selection-extra\" *ngIf=\"showRowSelection\">\n      <span nz-dropdown class=\"ant-table-selection-down\" nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\">\n        <i nz-icon nzType=\"down\"></i>\n      </span>\n      <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n        <ul nz-menu class=\"ant-table-selection-menu\">\n          <li nz-menu-item *ngFor=\"let selection of listOfSelections\" (click)=\"selection.onSelect()\">\n            {{ selection.text }}\n          </li>\n        </ul>\n      </nz-dropdown-menu>\n    </div>\n  "
              },] }
  ];
  NzTableSelectionComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzTableSelectionComponent.propDecorators = {
      listOfSelections: [{ type: core.Input }],
      checked: [{ type: core.Input }],
      disabled: [{ type: core.Input }],
      indeterminate: [{ type: core.Input }],
      showCheckbox: [{ type: core.Input }],
      showRowSelection: [{ type: core.Input }],
      checkedChange: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableSortersComponent = /** @class */ (function () {
      function NzTableSortersComponent(elementRef) {
          this.elementRef = elementRef;
          this.sortDirections = ['ascend', 'descend', null];
          this.sortOrder = null;
          this.contentTemplate = null;
          this.isUp = false;
          this.isDown = false;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-column-sorters');
      }
      NzTableSortersComponent.prototype.ngOnChanges = function (changes) {
          var sortDirections = changes.sortDirections;
          if (sortDirections) {
              this.isUp = this.sortDirections.indexOf('ascend') !== -1;
              this.isDown = this.sortDirections.indexOf('descend') !== -1;
          }
      };
      return NzTableSortersComponent;
  }());
  NzTableSortersComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-table-sorters',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <span><ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template></span>\n    <span class=\"ant-table-column-sorter\" [class.ant-table-column-sorter-full]=\"isDown && isUp\">\n      <span class=\"ant-table-column-sorter-inner\">\n        <i nz-icon nzType=\"caret-up\" *ngIf=\"isUp\" class=\"ant-table-column-sorter-up\" [class.active]=\"sortOrder == 'ascend'\"></i>\n        <i nz-icon nzType=\"caret-down\" *ngIf=\"isDown\" class=\"ant-table-column-sorter-down\" [class.active]=\"sortOrder == 'descend'\"></i>\n      </span>\n    </span>\n  "
              },] }
  ];
  NzTableSortersComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzTableSortersComponent.propDecorators = {
      sortDirections: [{ type: core.Input }],
      sortOrder: [{ type: core.Input }],
      contentTemplate: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzCellFixedDirective = /** @class */ (function () {
      function NzCellFixedDirective(renderer, elementRef) {
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.nzRight = false;
          this.nzLeft = false;
          this.colspan = null;
          this.colSpan = null;
          this.changes$ = new rxjs.Subject();
          this.isAutoLeft = false;
          this.isAutoRight = false;
          this.isFixedLeft = false;
          this.isFixedRight = false;
          this.isFixed = false;
      }
      NzCellFixedDirective.prototype.setAutoLeftWidth = function (autoLeft) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
      };
      NzCellFixedDirective.prototype.setAutoRightWidth = function (autoRight) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
      };
      NzCellFixedDirective.prototype.setIsFirstRight = function (isFirstRight) {
          this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
      };
      NzCellFixedDirective.prototype.setIsLastLeft = function (isLastLeft) {
          this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
      };
      NzCellFixedDirective.prototype.setFixClass = function (flag, className) {
          // the setFixClass function may call many times, so remove it first.
          this.renderer.removeClass(this.elementRef.nativeElement, className);
          if (flag) {
              this.renderer.addClass(this.elementRef.nativeElement, className);
          }
      };
      NzCellFixedDirective.prototype.ngOnChanges = function () {
          this.setIsFirstRight(false);
          this.setIsLastLeft(false);
          this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
          this.isAutoRight = this.nzRight === '' || this.nzRight === true;
          this.isFixedLeft = this.nzLeft !== false;
          this.isFixedRight = this.nzRight !== false;
          this.isFixed = this.isFixedLeft || this.isFixedRight;
          var validatePx = function (value) {
              if (typeof value === 'string' && value !== '') {
                  return value;
              }
              else {
                  return null;
              }
          };
          this.setAutoLeftWidth(validatePx(this.nzLeft));
          this.setAutoRightWidth(validatePx(this.nzRight));
          this.changes$.next();
      };
      return NzCellFixedDirective;
  }());
  NzCellFixedDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
                  host: {
                      '[class.ant-table-cell-fix-right]': "isFixedRight",
                      '[class.ant-table-cell-fix-left]': "isFixedLeft",
                      '[style.position]': "isFixed? 'sticky' : null"
                  }
              },] }
  ];
  NzCellFixedDirective.ctorParameters = function () { return [
      { type: core.Renderer2 },
      { type: core.ElementRef }
  ]; };
  NzCellFixedDirective.propDecorators = {
      nzRight: [{ type: core.Input }],
      nzLeft: [{ type: core.Input }],
      colspan: [{ type: core.Input }],
      colSpan: [{ type: core.Input }]
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

  var NzTableStyleService = /** @class */ (function () {
      function NzTableStyleService() {
          this.theadTemplate$ = new rxjs.ReplaySubject(1);
          this.hasFixLeft$ = new rxjs.ReplaySubject(1);
          this.hasFixRight$ = new rxjs.ReplaySubject(1);
          this.hostWidth$ = new rxjs.ReplaySubject(1);
          this.columnCount$ = new rxjs.ReplaySubject(1);
          this.showEmpty$ = new rxjs.ReplaySubject(1);
          this.noResult$ = new rxjs.ReplaySubject(1);
          this.listOfThWidthConfigPx$ = new rxjs.BehaviorSubject([]);
          this.tableWidthConfigPx$ = new rxjs.BehaviorSubject([]);
          this.manualWidthConfigPx$ = rxjs.combineLatest([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(operators.map(function (_a) {
              var _b = __read(_a, 2), widthConfig = _b[0], listOfWidth = _b[1];
              return (widthConfig.length ? widthConfig : listOfWidth);
          }));
          this.listOfAutoWidthPx$ = new rxjs.ReplaySubject(1);
          this.listOfListOfThWidthPx$ = rxjs.merge(
          /** init with manual width **/
          this.manualWidthConfigPx$, rxjs.combineLatest([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(operators.map(function (_a) {
              var _b = __read(_a, 2), autoWidth = _b[0], manualWidth = _b[1];
              /** use autoWidth until column length match **/
              if (autoWidth.length === manualWidth.length) {
                  return autoWidth.map(function (width, index) {
                      if (width === '0px') {
                          return manualWidth[index] || null;
                      }
                      else {
                          return manualWidth[index] || width;
                      }
                  });
              }
              else {
                  return manualWidth;
              }
          })));
          this.listOfMeasureColumn$ = new rxjs.ReplaySubject(1);
          this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(operators.map(function (list) { return list.map(function (width) { return parseInt(width, 10); }); }));
          this.enableAutoMeasure$ = new rxjs.ReplaySubject(1);
      }
      NzTableStyleService.prototype.setTheadTemplate = function (template) {
          this.theadTemplate$.next(template);
      };
      NzTableStyleService.prototype.setHasFixLeft = function (hasFixLeft) {
          this.hasFixLeft$.next(hasFixLeft);
      };
      NzTableStyleService.prototype.setHasFixRight = function (hasFixRight) {
          this.hasFixRight$.next(hasFixRight);
      };
      NzTableStyleService.prototype.setTableWidthConfig = function (widthConfig) {
          this.tableWidthConfigPx$.next(widthConfig);
      };
      NzTableStyleService.prototype.setListOfTh = function (listOfTh) {
          var columnCount = 0;
          listOfTh.forEach(function (th) {
              columnCount += (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
          });
          var listOfThPx = listOfTh.map(function (item) { return item.nzWidth; });
          this.columnCount$.next(columnCount);
          this.listOfThWidthConfigPx$.next(listOfThPx);
      };
      NzTableStyleService.prototype.setListOfMeasureColumn = function (listOfTh) {
          var listOfKeys = [];
          listOfTh.forEach(function (th) {
              var length = (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
              for (var i = 0; i < length; i++) {
                  listOfKeys.push("measure_key_" + i);
              }
          });
          this.listOfMeasureColumn$.next(listOfKeys);
      };
      NzTableStyleService.prototype.setListOfAutoWidth = function (listOfAutoWidth) {
          this.listOfAutoWidthPx$.next(listOfAutoWidth.map(function (width) { return width + "px"; }));
      };
      NzTableStyleService.prototype.setShowEmpty = function (showEmpty) {
          this.showEmpty$.next(showEmpty);
      };
      NzTableStyleService.prototype.setNoResult = function (noResult) {
          this.noResult$.next(noResult);
      };
      NzTableStyleService.prototype.setScroll = function (scrollX, scrollY) {
          var enableAutoMeasure = !!(scrollX || scrollY);
          if (!enableAutoMeasure) {
              this.setListOfAutoWidth([]);
          }
          this.enableAutoMeasure$.next(enableAutoMeasure);
      };
      return NzTableStyleService;
  }());
  NzTableStyleService.decorators = [
      { type: core.Injectable }
  ];
  NzTableStyleService.ctorParameters = function () { return []; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableCellDirective = /** @class */ (function () {
      function NzTableCellDirective(nzTableStyleService) {
          this.isInsideTable = false;
          this.isInsideTable = !!nzTableStyleService;
      }
      return NzTableCellDirective;
  }());
  NzTableCellDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])',
                  host: {
                      '[class.ant-table-cell]': 'isInsideTable'
                  }
              },] }
  ];
  NzTableCellDirective.ctorParameters = function () { return [
      { type: NzTableStyleService, decorators: [{ type: core.Optional }] }
  ]; };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTdAddOnComponent = /** @class */ (function () {
      function NzTdAddOnComponent() {
          this.nzChecked = false;
          this.nzDisabled = false;
          this.nzIndeterminate = false;
          this.nzIndentSize = 0;
          this.nzShowExpand = false;
          this.nzShowCheckbox = false;
          this.nzExpand = false;
          this.nzCheckedChange = new core.EventEmitter();
          this.nzExpandChange = new core.EventEmitter();
          this.isNzShowExpandChanged = false;
          this.isNzShowCheckboxChanged = false;
      }
      NzTdAddOnComponent.prototype.onCheckedChange = function (checked) {
          this.nzChecked = checked;
          this.nzCheckedChange.emit(checked);
      };
      NzTdAddOnComponent.prototype.onExpandChange = function (expand) {
          this.nzExpand = expand;
          this.nzExpandChange.emit(expand);
      };
      NzTdAddOnComponent.prototype.ngOnChanges = function (changes) {
          var isFirstChange = function (value) { return value && value.firstChange && value.currentValue !== undefined; };
          var nzExpand = changes.nzExpand, nzChecked = changes.nzChecked, nzShowExpand = changes.nzShowExpand, nzShowCheckbox = changes.nzShowCheckbox;
          if (nzShowExpand) {
              this.isNzShowExpandChanged = true;
          }
          if (nzShowCheckbox) {
              this.isNzShowCheckboxChanged = true;
          }
          if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
              this.nzShowExpand = true;
          }
          if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
              this.nzShowCheckbox = true;
          }
      };
      return NzTdAddOnComponent;
  }());
  NzTdAddOnComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <ng-container *ngIf=\"nzShowExpand || nzIndentSize > 0\">\n      <nz-row-indent [indentSize]=\"nzIndentSize\"></nz-row-indent>\n      <button nz-row-expand-button [expand]=\"nzExpand\" (expandChange)=\"onExpandChange($event)\" [spaceMode]=\"!nzShowExpand\"></button>\n    </ng-container>\n    <label\n      nz-checkbox\n      *ngIf=\"nzShowCheckbox\"\n      [nzDisabled]=\"nzDisabled\"\n      [ngModel]=\"nzChecked\"\n      [nzIndeterminate]=\"nzIndeterminate\"\n      (ngModelChange)=\"onCheckedChange($event)\"\n    >\n    </label>\n    <ng-content></ng-content>\n  ",
                  host: {
                      '[class.ant-table-cell-with-append]': "nzShowExpand || nzIndentSize > 0",
                      '[class.ant-table-selection-column]': "nzShowCheckbox"
                  }
              },] }
  ];
  NzTdAddOnComponent.propDecorators = {
      nzChecked: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzIndeterminate: [{ type: core.Input }],
      nzIndentSize: [{ type: core.Input }],
      nzShowExpand: [{ type: core.Input }],
      nzShowCheckbox: [{ type: core.Input }],
      nzExpand: [{ type: core.Input }],
      nzCheckedChange: [{ type: core.Output }],
      nzExpandChange: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTdAddOnComponent.prototype, "nzExpand", void 0);

  var NzThAddOnComponent = /** @class */ (function () {
      function NzThAddOnComponent(cdr) {
          this.cdr = cdr;
          this.manualClickOrder$ = new rxjs.Subject();
          this.calcOperatorChange$ = new rxjs.Subject();
          this.nzFilterValue = null;
          this.sortOrder = null;
          this.sortDirections = ['ascend', 'descend', null];
          this.sortOrderChange$ = new rxjs.Subject();
          this.destroy$ = new rxjs.Subject();
          this.isNzShowSortChanged = false;
          this.isNzShowFilterChanged = false;
          this.nzFilterMultiple = true;
          this.nzSortOrder = null;
          this.nzSortPriority = false;
          this.nzSortDirections = ['ascend', 'descend', null];
          this.nzFilters = [];
          this.nzSortFn = null;
          this.nzFilterFn = null;
          this.nzShowSort = false;
          this.nzShowFilter = false;
          this.nzCustomFilter = false;
          this.nzCheckedChange = new core.EventEmitter();
          this.nzSortOrderChange = new core.EventEmitter();
          this.nzFilterChange = new core.EventEmitter();
      }
      NzThAddOnComponent.prototype.getNextSortDirection = function (sortDirections, current) {
          var index = sortDirections.indexOf(current);
          if (index === sortDirections.length - 1) {
              return sortDirections[0];
          }
          else {
              return sortDirections[index + 1];
          }
      };
      NzThAddOnComponent.prototype.emitNextSortValue = function () {
          if (this.nzShowSort) {
              var nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
              this.setSortOrder(nextOrder);
              this.manualClickOrder$.next(this);
          }
      };
      NzThAddOnComponent.prototype.setSortOrder = function (order) {
          this.sortOrderChange$.next(order);
      };
      NzThAddOnComponent.prototype.clearSortOrder = function () {
          if (this.sortOrder !== null) {
              this.setSortOrder(null);
          }
      };
      NzThAddOnComponent.prototype.onFilterValueChange = function (value) {
          this.nzFilterChange.emit(value);
          this.nzFilterValue = value;
          this.updateCalcOperator();
      };
      NzThAddOnComponent.prototype.updateCalcOperator = function () {
          this.calcOperatorChange$.next();
      };
      NzThAddOnComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.sortOrderChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (order) {
              if (_this.sortOrder !== order) {
                  _this.sortOrder = order;
                  _this.nzSortOrderChange.emit(order);
              }
              _this.updateCalcOperator();
              _this.cdr.markForCheck();
          });
      };
      NzThAddOnComponent.prototype.ngOnChanges = function (changes) {
          var nzSortDirections = changes.nzSortDirections, nzFilters = changes.nzFilters, nzSortOrder = changes.nzSortOrder, nzSortFn = changes.nzSortFn, nzFilterFn = changes.nzFilterFn, nzSortPriority = changes.nzSortPriority, nzFilterMultiple = changes.nzFilterMultiple, nzShowSort = changes.nzShowSort, nzShowFilter = changes.nzShowFilter;
          if (nzSortDirections) {
              if (this.nzSortDirections && this.nzSortDirections.length) {
                  this.sortDirections = this.nzSortDirections;
              }
          }
          if (nzSortOrder) {
              this.sortOrder = this.nzSortOrder;
              this.setSortOrder(this.nzSortOrder);
          }
          if (nzShowSort) {
              this.isNzShowSortChanged = true;
          }
          if (nzShowFilter) {
              this.isNzShowFilterChanged = true;
          }
          var isFirstChange = function (value) { return value && value.firstChange && value.currentValue !== undefined; };
          if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
              this.nzShowSort = true;
          }
          if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
              this.nzShowFilter = true;
          }
          if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
              var listOfValue = this.nzFilters.filter(function (item) { return item.byDefault; }).map(function (item) { return item.value; });
              this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
          }
          if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
              this.updateCalcOperator();
          }
      };
      NzThAddOnComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzThAddOnComponent;
  }());
  NzThAddOnComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <nz-table-filter\n      *ngIf=\"nzShowFilter || nzCustomFilter; else notFilterTemplate\"\n      [contentTemplate]=\"notFilterTemplate\"\n      [extraTemplate]=\"extraTemplate\"\n      [customFilter]=\"nzCustomFilter\"\n      [filterMultiple]=\"nzFilterMultiple\"\n      [listOfFilter]=\"nzFilters\"\n      (filterChange)=\"onFilterValueChange($event)\"\n    ></nz-table-filter>\n    <ng-template #notFilterTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzShowSort ? sortTemplate : contentTemplate\"></ng-template>\n    </ng-template>\n    <ng-template #extraTemplate>\n      <ng-content select=\"[nz-th-extra]\"></ng-content>\n      <ng-content select=\"nz-filter-trigger\"></ng-content>\n    </ng-template>\n    <ng-template #sortTemplate>\n      <nz-table-sorters [sortOrder]=\"sortOrder\" [sortDirections]=\"sortDirections\" [contentTemplate]=\"contentTemplate\"></nz-table-sorters>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                  host: {
                      '[class.ant-table-column-has-sorters]': 'nzShowSort',
                      '[class.ant-table-column-sort]': "sortOrder === 'descend' || sortOrder === 'ascend'",
                      '(click)': 'emitNextSortValue()'
                  }
              },] }
  ];
  NzThAddOnComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef }
  ]; };
  NzThAddOnComponent.propDecorators = {
      nzColumnKey: [{ type: core.Input }],
      nzFilterMultiple: [{ type: core.Input }],
      nzSortOrder: [{ type: core.Input }],
      nzSortPriority: [{ type: core.Input }],
      nzSortDirections: [{ type: core.Input }],
      nzFilters: [{ type: core.Input }],
      nzSortFn: [{ type: core.Input }],
      nzFilterFn: [{ type: core.Input }],
      nzShowSort: [{ type: core.Input }],
      nzShowFilter: [{ type: core.Input }],
      nzCustomFilter: [{ type: core.Input }],
      nzCheckedChange: [{ type: core.Output }],
      nzSortOrderChange: [{ type: core.Output }],
      nzFilterChange: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzThAddOnComponent.prototype, "nzShowSort", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzThMeasureDirective = /** @class */ (function () {
      function NzThMeasureDirective(renderer, elementRef) {
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.changes$ = new rxjs.Subject();
          this.nzWidth = null;
          this.colspan = null;
          this.colSpan = null;
          this.rowspan = null;
          this.rowSpan = null;
      }
      NzThMeasureDirective.prototype.ngOnChanges = function (changes) {
          var nzWidth = changes.nzWidth, colspan = changes.colspan, rowspan = changes.rowspan, colSpan = changes.colSpan, rowSpan = changes.rowSpan;
          if (colspan || colSpan) {
              var col = this.colspan || this.colSpan;
              if (!util.isNil(col)) {
                  this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', "" + col);
              }
              else {
                  this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
              }
          }
          if (rowspan || rowSpan) {
              var row = this.rowspan || this.rowSpan;
              if (!util.isNil(row)) {
                  this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', "" + row);
              }
              else {
                  this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
              }
          }
          if (nzWidth || colspan) {
              this.changes$.next();
          }
      };
      return NzThMeasureDirective;
  }());
  NzThMeasureDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'th'
              },] }
  ];
  NzThMeasureDirective.ctorParameters = function () { return [
      { type: core.Renderer2 },
      { type: core.ElementRef }
  ]; };
  NzThMeasureDirective.propDecorators = {
      nzWidth: [{ type: core.Input }],
      colspan: [{ type: core.Input }],
      colSpan: [{ type: core.Input }],
      rowspan: [{ type: core.Input }],
      rowSpan: [{ type: core.Input }]
  };

  var NzThSelectionComponent = /** @class */ (function () {
      function NzThSelectionComponent(elementRef) {
          this.elementRef = elementRef;
          this.nzSelections = [];
          this.nzChecked = false;
          this.nzDisabled = false;
          this.nzIndeterminate = false;
          this.nzShowCheckbox = false;
          this.nzShowRowSelection = false;
          this.nzCheckedChange = new core.EventEmitter();
          this.isNzShowExpandChanged = false;
          this.isNzShowCheckboxChanged = false;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-selection-column');
      }
      NzThSelectionComponent.prototype.onCheckedChange = function (checked) {
          this.nzChecked = checked;
          this.nzCheckedChange.emit(checked);
      };
      NzThSelectionComponent.prototype.ngOnChanges = function (changes) {
          var isFirstChange = function (value) { return value && value.firstChange && value.currentValue !== undefined; };
          var nzChecked = changes.nzChecked, nzSelections = changes.nzSelections, nzShowExpand = changes.nzShowExpand, nzShowCheckbox = changes.nzShowCheckbox;
          if (nzShowExpand) {
              this.isNzShowExpandChanged = true;
          }
          if (nzShowCheckbox) {
              this.isNzShowCheckboxChanged = true;
          }
          if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
              this.nzShowRowSelection = true;
          }
          if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
              this.nzShowCheckbox = true;
          }
      };
      return NzThSelectionComponent;
  }());
  NzThSelectionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]',
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <nz-table-selection\n      [checked]=\"nzChecked\"\n      [disabled]=\"nzDisabled\"\n      [indeterminate]=\"nzIndeterminate\"\n      [listOfSelections]=\"nzSelections\"\n      [showCheckbox]=\"nzShowCheckbox\"\n      [showRowSelection]=\"nzShowRowSelection\"\n      (checkedChange)=\"onCheckedChange($event)\"\n    ></nz-table-selection>\n    <ng-content></ng-content>\n  "
              },] }
  ];
  NzThSelectionComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzThSelectionComponent.propDecorators = {
      nzSelections: [{ type: core.Input }],
      nzChecked: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzIndeterminate: [{ type: core.Input }],
      nzShowCheckbox: [{ type: core.Input }],
      nzShowRowSelection: [{ type: core.Input }],
      nzCheckedChange: [{ type: core.Output }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzCellAlignDirective = /** @class */ (function () {
      function NzCellAlignDirective() {
          this.nzAlign = null;
      }
      return NzCellAlignDirective;
  }());
  NzCellAlignDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'th[nzAlign],td[nzAlign]',
                  host: {
                      '[style.text-align]': 'nzAlign'
                  }
              },] }
  ];
  NzCellAlignDirective.propDecorators = {
      nzAlign: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzCellEllipsisDirective = /** @class */ (function () {
      function NzCellEllipsisDirective() {
          this.nzEllipsis = true;
      }
      return NzCellEllipsisDirective;
  }());
  NzCellEllipsisDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'th[nzEllipsis],td[nzEllipsis]',
                  host: {
                      '[class.ant-table-cell-ellipsis]': 'nzEllipsis'
                  }
              },] }
  ];
  NzCellEllipsisDirective.propDecorators = {
      nzEllipsis: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzCellBreakWordDirective = /** @class */ (function () {
      function NzCellBreakWordDirective() {
          this.nzBreakWord = true;
      }
      return NzCellBreakWordDirective;
  }());
  NzCellBreakWordDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'th[nzBreakWord],td[nzBreakWord]',
                  host: {
                      '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                  }
              },] }
  ];
  NzCellBreakWordDirective.propDecorators = {
      nzBreakWord: [{ type: core.Input }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableContentComponent = /** @class */ (function () {
      function NzTableContentComponent() {
          this.tableLayout = 'auto';
          this.theadTemplate = null;
          this.contentTemplate = null;
          this.listOfColWidth = [];
          this.scrollX = null;
      }
      return NzTableContentComponent;
  }());
  NzTableContentComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'table[nz-table-content]',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of listOfColWidth\" />\n    <thead class=\"ant-table-thead\" *ngIf=\"theadTemplate\">\n      <ng-template [ngTemplateOutlet]=\"theadTemplate\"></ng-template>\n    </thead>\n    <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    <ng-content></ng-content>\n  ",
                  host: {
                      '[style.table-layout]': 'tableLayout',
                      '[class.ant-table-fixed]': 'scrollX',
                      '[style.width]': 'scrollX',
                      '[style.min-width]': "scrollX ? '100%': null"
                  }
              },] }
  ];
  NzTableContentComponent.propDecorators = {
      tableLayout: [{ type: core.Input }],
      theadTemplate: [{ type: core.Input }],
      contentTemplate: [{ type: core.Input }],
      listOfColWidth: [{ type: core.Input }],
      scrollX: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableFixedRowComponent = /** @class */ (function () {
      function NzTableFixedRowComponent(nzTableStyleService, renderer) {
          this.nzTableStyleService = nzTableStyleService;
          this.renderer = renderer;
          this.hostWidth$ = new rxjs.BehaviorSubject(null);
          this.enableAutoMeasure$ = new rxjs.BehaviorSubject(false);
          this.destroy$ = new rxjs.Subject();
      }
      NzTableFixedRowComponent.prototype.ngOnInit = function () {
          if (this.nzTableStyleService) {
              var _a = this.nzTableStyleService, enableAutoMeasure$ = _a.enableAutoMeasure$, hostWidth$ = _a.hostWidth$;
              enableAutoMeasure$.pipe(operators.takeUntil(this.destroy$)).subscribe(this.enableAutoMeasure$);
              hostWidth$.subscribe(this.hostWidth$);
          }
      };
      NzTableFixedRowComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          this.nzTableStyleService.columnCount$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (count) {
              _this.renderer.setAttribute(_this.tdElement.nativeElement, 'colspan', "" + count);
          });
      };
      NzTableFixedRowComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTableFixedRowComponent;
  }());
  NzTableFixedRowComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'tr[nz-table-fixed-row], tr[nzExpand]',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <td class=\"nz-disable-td ant-table-cell\" #tdElement>\n      <div\n        class=\"ant-table-expanded-row-fixed\"\n        *ngIf=\"enableAutoMeasure$ | async; else contentTemplate\"\n        style=\"position: sticky; left: 0px; overflow: hidden;\"\n        [style.width.px]=\"hostWidth$ | async\"\n      >\n        <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n      </div>\n    </td>\n    <ng-template #contentTemplate><ng-content></ng-content></ng-template>\n  "
              },] }
  ];
  NzTableFixedRowComponent.ctorParameters = function () { return [
      { type: NzTableStyleService },
      { type: core.Renderer2 }
  ]; };
  NzTableFixedRowComponent.propDecorators = {
      tdElement: [{ type: core.ViewChild, args: ['tdElement',] }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableInnerDefaultComponent = /** @class */ (function () {
      function NzTableInnerDefaultComponent(elementRef) {
          this.elementRef = elementRef;
          this.tableLayout = 'auto';
          this.listOfColWidth = [];
          this.theadTemplate = null;
          this.contentTemplate = null;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-container');
      }
      return NzTableInnerDefaultComponent;
  }());
  NzTableInnerDefaultComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-table-inner-default',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <div class=\"ant-table-content\">\n      <table\n        nz-table-content\n        [contentTemplate]=\"contentTemplate\"\n        [tableLayout]=\"tableLayout\"\n        [listOfColWidth]=\"listOfColWidth\"\n        [theadTemplate]=\"theadTemplate\"\n      ></table>\n    </div>\n  "
              },] }
  ];
  NzTableInnerDefaultComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzTableInnerDefaultComponent.propDecorators = {
      tableLayout: [{ type: core.Input }],
      listOfColWidth: [{ type: core.Input }],
      theadTemplate: [{ type: core.Input }],
      contentTemplate: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableInnerScrollComponent = /** @class */ (function () {
      function NzTableInnerScrollComponent(renderer, ngZone, platform, resizeService, elementRef) {
          this.renderer = renderer;
          this.ngZone = ngZone;
          this.platform = platform;
          this.resizeService = resizeService;
          this.elementRef = elementRef;
          this.data = [];
          this.scrollX = null;
          this.scrollY = null;
          this.contentTemplate = null;
          this.widthConfig = [];
          this.listOfColWidth = [];
          this.theadTemplate = null;
          this.virtualTemplate = null;
          this.virtualItemSize = 0;
          this.virtualMaxBufferPx = 200;
          this.virtualMinBufferPx = 100;
          this.virtualForTrackBy = function (index) { return index; };
          this.headerStyleMap = {};
          this.bodyStyleMap = {};
          this.verticalScrollBarWidth = 0;
          this.noDateVirtualHeight = '182px';
          this.data$ = new rxjs.Subject();
          this.scroll$ = new rxjs.Subject();
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-container');
      }
      NzTableInnerScrollComponent.prototype.setScrollPositionClassName = function (clear) {
          if (clear === void 0) { clear = false; }
          var _a = this.tableBodyElement.nativeElement, scrollWidth = _a.scrollWidth, scrollLeft = _a.scrollLeft, clientWidth = _a.clientWidth;
          var leftClassName = 'ant-table-ping-left';
          var rightClassName = 'ant-table-ping-right';
          if ((scrollWidth === clientWidth && scrollWidth !== 0) || clear) {
              this.renderer.removeClass(this.tableMainElement, leftClassName);
              this.renderer.removeClass(this.tableMainElement, rightClassName);
          }
          else if (scrollLeft === 0) {
              this.renderer.removeClass(this.tableMainElement, leftClassName);
              this.renderer.addClass(this.tableMainElement, rightClassName);
          }
          else if (scrollWidth === scrollLeft + clientWidth) {
              this.renderer.removeClass(this.tableMainElement, rightClassName);
              this.renderer.addClass(this.tableMainElement, leftClassName);
          }
          else {
              this.renderer.addClass(this.tableMainElement, leftClassName);
              this.renderer.addClass(this.tableMainElement, rightClassName);
          }
      };
      NzTableInnerScrollComponent.prototype.ngOnChanges = function (changes) {
          var scrollX = changes.scrollX, scrollY = changes.scrollY, data = changes.data;
          if (scrollX || scrollY) {
              var hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
              this.headerStyleMap = {
                  overflowX: 'hidden',
                  overflowY: this.scrollY && hasVerticalScrollBar ? 'scroll' : 'hidden'
              };
              this.bodyStyleMap = {
                  overflowY: this.scrollY ? 'scroll' : 'hidden',
                  overflowX: this.scrollX ? 'auto' : null,
                  maxHeight: this.scrollY
              };
              this.scroll$.next();
          }
          if (data) {
              this.data$.next();
          }
      };
      NzTableInnerScrollComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          if (this.platform.isBrowser) {
              this.ngZone.runOutsideAngular(function () {
                  var scrollEvent$ = _this.scroll$.pipe(operators.startWith(null), operators.delay(0), operators.switchMap(function () { return rxjs.fromEvent(_this.tableBodyElement.nativeElement, 'scroll').pipe(operators.startWith(true)); }), operators.takeUntil(_this.destroy$));
                  var resize$ = _this.resizeService.subscribe().pipe(operators.takeUntil(_this.destroy$));
                  var data$ = _this.data$.pipe(operators.takeUntil(_this.destroy$));
                  var setClassName$ = rxjs.merge(scrollEvent$, resize$, data$, _this.scroll$).pipe(operators.startWith(true), operators.delay(0), operators.takeUntil(_this.destroy$));
                  setClassName$.subscribe(function () { return _this.setScrollPositionClassName(); });
                  scrollEvent$
                      .pipe(operators.filter(function () { return !!_this.scrollY; }))
                      .subscribe(function () { return (_this.tableHeaderElement.nativeElement.scrollLeft = _this.tableBodyElement.nativeElement.scrollLeft); });
              });
          }
      };
      NzTableInnerScrollComponent.prototype.ngOnDestroy = function () {
          this.setScrollPositionClassName(true);
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTableInnerScrollComponent;
  }());
  NzTableInnerScrollComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-table-inner-scroll',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <ng-container *ngIf=\"scrollY\">\n      <div #tableHeaderElement [ngStyle]=\"headerStyleMap\" class=\"ant-table-header nz-table-hide-scrollbar\">\n        <table\n          nz-table-content\n          tableLayout=\"fixed\"\n          [scrollX]=\"scrollX\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n        ></table>\n      </div>\n      <div #tableBodyElement *ngIf=\"!virtualTemplate\" class=\"ant-table-body\" [ngStyle]=\"bodyStyleMap\">\n        <table\n          nz-table-content\n          tableLayout=\"fixed\"\n          [scrollX]=\"scrollX\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [contentTemplate]=\"contentTemplate\"\n        ></table>\n      </div>\n      <cdk-virtual-scroll-viewport\n        #tableBodyElement\n        *ngIf=\"virtualTemplate\"\n        [itemSize]=\"virtualItemSize\"\n        [maxBufferPx]=\"virtualMaxBufferPx\"\n        [minBufferPx]=\"virtualMinBufferPx\"\n        [style.height]=\"data.length ? scrollY : noDateVirtualHeight\"\n      >\n        <table nz-table-content tableLayout=\"fixed\" [scrollX]=\"scrollX\" [listOfColWidth]=\"listOfColWidth\">\n          <tbody>\n            <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy: virtualForTrackBy\">\n              <ng-template [ngTemplateOutlet]=\"virtualTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item, index: i }\"></ng-template>\n            </ng-container>\n          </tbody>\n        </table>\n      </cdk-virtual-scroll-viewport>\n    </ng-container>\n    <div class=\"ant-table-content\" #tableBodyElement *ngIf=\"!scrollY\" [ngStyle]=\"bodyStyleMap\">\n      <table\n        nz-table-content\n        tableLayout=\"fixed\"\n        [scrollX]=\"scrollX\"\n        [listOfColWidth]=\"listOfColWidth\"\n        [theadTemplate]=\"theadTemplate\"\n        [contentTemplate]=\"contentTemplate\"\n      ></table>\n    </div>\n  "
              },] }
  ];
  NzTableInnerScrollComponent.ctorParameters = function () { return [
      { type: core.Renderer2 },
      { type: core.NgZone },
      { type: platform.Platform },
      { type: services.NzResizeService },
      { type: core.ElementRef }
  ]; };
  NzTableInnerScrollComponent.propDecorators = {
      data: [{ type: core.Input }],
      scrollX: [{ type: core.Input }],
      scrollY: [{ type: core.Input }],
      contentTemplate: [{ type: core.Input }],
      widthConfig: [{ type: core.Input }],
      listOfColWidth: [{ type: core.Input }],
      theadTemplate: [{ type: core.Input }],
      virtualTemplate: [{ type: core.Input }],
      virtualItemSize: [{ type: core.Input }],
      virtualMaxBufferPx: [{ type: core.Input }],
      virtualMinBufferPx: [{ type: core.Input }],
      tableMainElement: [{ type: core.Input }],
      virtualForTrackBy: [{ type: core.Input }],
      tableHeaderElement: [{ type: core.ViewChild, args: ['tableHeaderElement', { read: core.ElementRef },] }],
      tableBodyElement: [{ type: core.ViewChild, args: ['tableBodyElement', { read: core.ElementRef },] }],
      cdkVirtualScrollViewport: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { read: scrolling.CdkVirtualScrollViewport },] }],
      verticalScrollBarWidth: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableVirtualScrollDirective = /** @class */ (function () {
      function NzTableVirtualScrollDirective(templateRef) {
          this.templateRef = templateRef;
      }
      return NzTableVirtualScrollDirective;
  }());
  NzTableVirtualScrollDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: '[nz-virtual-scroll]',
                  exportAs: 'nzVirtualScroll'
              },] }
  ];
  NzTableVirtualScrollDirective.ctorParameters = function () { return [
      { type: core.TemplateRef }
  ]; };

  var NzTableDataService = /** @class */ (function () {
      function NzTableDataService() {
          var _this = this;
          this.destroy$ = new rxjs.Subject();
          this.pageIndex$ = new rxjs.BehaviorSubject(1);
          this.frontPagination$ = new rxjs.BehaviorSubject(true);
          this.pageSize$ = new rxjs.BehaviorSubject(10);
          this.listOfData$ = new rxjs.BehaviorSubject([]);
          this.pageIndexDistinct$ = this.pageIndex$.pipe(operators.distinctUntilChanged());
          this.pageSizeDistinct$ = this.pageSize$.pipe(operators.distinctUntilChanged());
          this.listOfCalcOperator$ = new rxjs.BehaviorSubject([]);
          this.queryParams$ = rxjs.combineLatest([
              this.pageIndexDistinct$,
              this.pageSizeDistinct$,
              this.listOfCalcOperator$
          ]).pipe(operators.debounceTime(0), operators.skip(1), operators.map(function (_a) {
              var _b = __read(_a, 3), pageIndex = _b[0], pageSize = _b[1], listOfCalc = _b[2];
              return {
                  pageIndex: pageIndex,
                  pageSize: pageSize,
                  sort: listOfCalc
                      .filter(function (item) { return item.sortFn; })
                      .map(function (item) {
                      return {
                          key: item.key,
                          value: item.sortOrder
                      };
                  }),
                  filter: listOfCalc
                      .filter(function (item) { return item.filterFn; })
                      .map(function (item) {
                      return {
                          key: item.key,
                          value: item.filterValue
                      };
                  })
              };
          }));
          this.listOfDataAfterCalc$ = rxjs.combineLatest([this.listOfData$, this.listOfCalcOperator$]).pipe(operators.map(function (_a) {
              var e_1, _b;
              var _c = __read(_a, 2), listOfData = _c[0], listOfCalcOperator = _c[1];
              var listOfDataAfterCalc = __spread(listOfData);
              var listOfFilterOperator = listOfCalcOperator.filter(function (item) {
                  var filterValue = item.filterValue, filterFn = item.filterFn;
                  var isReset = filterValue === null || filterValue === undefined || (Array.isArray(filterValue) && filterValue.length === 0);
                  return !isReset && typeof filterFn === 'function';
              });
              var _loop_1 = function (item) {
                  var filterFn = item.filterFn, filterValue = item.filterValue;
                  listOfDataAfterCalc = listOfDataAfterCalc.filter(function (data) { return filterFn(filterValue, data); });
              };
              try {
                  for (var listOfFilterOperator_1 = __values(listOfFilterOperator), listOfFilterOperator_1_1 = listOfFilterOperator_1.next(); !listOfFilterOperator_1_1.done; listOfFilterOperator_1_1 = listOfFilterOperator_1.next()) {
                      var item = listOfFilterOperator_1_1.value;
                      _loop_1(item);
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (listOfFilterOperator_1_1 && !listOfFilterOperator_1_1.done && (_b = listOfFilterOperator_1.return)) _b.call(listOfFilterOperator_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              var listOfSortOperator = listOfCalcOperator
                  .filter(function (item) { return item.sortOrder !== null && typeof item.sortFn === 'function'; })
                  .sort(function (a, b) { return +b.sortPriority - +a.sortPriority; });
              if (listOfCalcOperator.length) {
                  listOfDataAfterCalc.sort(function (record1, record2) {
                      var e_2, _a;
                      try {
                          for (var listOfSortOperator_1 = __values(listOfSortOperator), listOfSortOperator_1_1 = listOfSortOperator_1.next(); !listOfSortOperator_1_1.done; listOfSortOperator_1_1 = listOfSortOperator_1.next()) {
                              var item = listOfSortOperator_1_1.value;
                              var sortFn = item.sortFn, sortOrder = item.sortOrder;
                              if (sortFn && sortOrder) {
                                  var compareResult = sortFn(record1, record2, sortOrder);
                                  if (compareResult !== 0) {
                                      return sortOrder === 'ascend' ? compareResult : -compareResult;
                                  }
                              }
                          }
                      }
                      catch (e_2_1) { e_2 = { error: e_2_1 }; }
                      finally {
                          try {
                              if (listOfSortOperator_1_1 && !listOfSortOperator_1_1.done && (_a = listOfSortOperator_1.return)) _a.call(listOfSortOperator_1);
                          }
                          finally { if (e_2) throw e_2.error; }
                      }
                      return 0;
                  });
              }
              return listOfDataAfterCalc;
          }));
          this.listOfFrontEndCurrentPageData$ = rxjs.combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(operators.takeUntil(this.destroy$), operators.filter(function (value) {
              var _a = __read(value, 3), pageIndex = _a[0], pageSize = _a[1], listOfData = _a[2];
              var maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
              return pageIndex <= maxPageIndex;
          }), operators.map(function (_a) {
              var _b = __read(_a, 3), pageIndex = _b[0], pageSize = _b[1], listOfData = _b[2];
              return listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
          }));
          this.listOfCurrentPageData$ = this.frontPagination$.pipe(operators.switchMap(function (pagination) { return (pagination ? _this.listOfFrontEndCurrentPageData$ : _this.listOfDataAfterCalc$); }));
          this.total$ = this.frontPagination$.pipe(operators.switchMap(function (pagination) { return (pagination ? _this.listOfDataAfterCalc$ : _this.listOfData$); }), operators.map(function (list) { return list.length; }), operators.distinctUntilChanged());
      }
      NzTableDataService.prototype.updatePageSize = function (size) {
          this.pageSize$.next(size);
      };
      NzTableDataService.prototype.updateFrontPagination = function (pagination) {
          this.frontPagination$.next(pagination);
      };
      NzTableDataService.prototype.updatePageIndex = function (index) {
          this.pageIndex$.next(index);
      };
      NzTableDataService.prototype.updateListOfData = function (list) {
          this.listOfData$.next(list);
      };
      NzTableDataService.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTableDataService;
  }());
  NzTableDataService.decorators = [
      { type: core.Injectable }
  ];
  NzTableDataService.ctorParameters = function () { return []; };

  var NZ_CONFIG_MODULE_NAME = 'table';
  var NzTableComponent = /** @class */ (function () {
      function NzTableComponent(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService, directionality) {
          var _this = this;
          this.elementRef = elementRef;
          this.nzResizeObserver = nzResizeObserver;
          this.nzConfigService = nzConfigService;
          this.cdr = cdr;
          this.nzTableStyleService = nzTableStyleService;
          this.nzTableDataService = nzTableDataService;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzTableLayout = 'auto';
          this.nzShowTotal = null;
          this.nzItemRender = null;
          this.nzTitle = null;
          this.nzFooter = null;
          this.nzNoResult = undefined;
          this.nzPageSizeOptions = [10, 20, 30, 40, 50];
          this.nzVirtualItemSize = 0;
          this.nzVirtualMaxBufferPx = 200;
          this.nzVirtualMinBufferPx = 100;
          this.nzVirtualForTrackBy = function (index) { return index; };
          this.nzLoadingDelay = 0;
          this.nzPageIndex = 1;
          this.nzPageSize = 10;
          this.nzTotal = 0;
          this.nzWidthConfig = [];
          this.nzData = [];
          this.nzPaginationPosition = 'bottom';
          this.nzScroll = { x: null, y: null };
          this.nzPaginationType = 'default';
          this.nzFrontPagination = true;
          this.nzTemplateMode = false;
          this.nzShowPagination = true;
          this.nzLoading = false;
          this.nzOuterBordered = false;
          this.nzLoadingIndicator = null;
          this.nzBordered = false;
          this.nzSize = 'default';
          this.nzShowSizeChanger = false;
          this.nzHideOnSinglePage = false;
          this.nzShowQuickJumper = false;
          this.nzSimple = false;
          this.nzPageSizeChange = new core.EventEmitter();
          this.nzPageIndexChange = new core.EventEmitter();
          this.nzQueryParams = new core.EventEmitter();
          this.nzCurrentPageDataChange = new core.EventEmitter();
          /** public data for ngFor tr */
          this.data = [];
          this.scrollX = null;
          this.scrollY = null;
          this.theadTemplate = null;
          this.listOfAutoColWidth = [];
          this.listOfManualColWidth = [];
          this.hasFixLeft = false;
          this.hasFixRight = false;
          this.showPagination = true;
          this.destroy$ = new rxjs.Subject();
          this.loading$ = new rxjs.BehaviorSubject(false);
          this.templateMode$ = new rxjs.BehaviorSubject(false);
          this.dir = 'ltr';
          this.verticalScrollBarWidth = 0;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-wrapper');
          this.nzConfigService
              .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
              .pipe(operators.takeUntil(this.destroy$))
              .subscribe(function () {
              _this.cdr.markForCheck();
          });
      }
      NzTableComponent.prototype.onPageSizeChange = function (size) {
          this.nzTableDataService.updatePageSize(size);
      };
      NzTableComponent.prototype.onPageIndexChange = function (index) {
          this.nzTableDataService.updatePageIndex(index);
      };
      NzTableComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          var _b = this.nzTableDataService, pageIndexDistinct$ = _b.pageIndexDistinct$, pageSizeDistinct$ = _b.pageSizeDistinct$, listOfCurrentPageData$ = _b.listOfCurrentPageData$, total$ = _b.total$, queryParams$ = _b.queryParams$;
          var _c = this.nzTableStyleService, theadTemplate$ = _c.theadTemplate$, hasFixLeft$ = _c.hasFixLeft$, hasFixRight$ = _c.hasFixRight$;
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.cdr.detectChanges();
          });
          queryParams$.pipe(operators.takeUntil(this.destroy$)).subscribe(this.nzQueryParams);
          pageIndexDistinct$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (pageIndex) {
              if (pageIndex !== _this.nzPageIndex) {
                  _this.nzPageIndex = pageIndex;
                  _this.nzPageIndexChange.next(pageIndex);
              }
          });
          pageSizeDistinct$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (pageSize) {
              if (pageSize !== _this.nzPageSize) {
                  _this.nzPageSize = pageSize;
                  _this.nzPageSizeChange.next(pageSize);
              }
          });
          total$
              .pipe(operators.takeUntil(this.destroy$), operators.filter(function () { return _this.nzFrontPagination; }))
              .subscribe(function (total) {
              if (total !== _this.nzTotal) {
                  _this.nzTotal = total;
                  _this.cdr.markForCheck();
              }
          });
          listOfCurrentPageData$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
              _this.data = data;
              _this.nzCurrentPageDataChange.next(data);
              _this.cdr.markForCheck();
          });
          theadTemplate$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (theadTemplate) {
              _this.theadTemplate = theadTemplate;
              _this.cdr.markForCheck();
          });
          hasFixLeft$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (hasFixLeft) {
              _this.hasFixLeft = hasFixLeft;
              _this.cdr.markForCheck();
          });
          hasFixRight$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (hasFixRight) {
              _this.hasFixRight = hasFixRight;
              _this.cdr.markForCheck();
          });
          rxjs.combineLatest([total$, this.loading$, this.templateMode$])
              .pipe(operators.map(function (_b) {
              var _c = __read(_b, 3), total = _c[0], loading = _c[1], templateMode = _c[2];
              return total === 0 && !loading && !templateMode;
          }), operators.takeUntil(this.destroy$))
              .subscribe(function (empty) {
              _this.nzTableStyleService.setShowEmpty(empty);
          });
          this.verticalScrollBarWidth = util.measureScrollbar('vertical');
          this.nzTableStyleService.listOfListOfThWidthPx$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (listOfWidth) {
              _this.listOfAutoColWidth = listOfWidth;
              _this.cdr.markForCheck();
          });
          this.nzTableStyleService.manualWidthConfigPx$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (listOfWidth) {
              _this.listOfManualColWidth = listOfWidth;
              _this.cdr.markForCheck();
          });
      };
      NzTableComponent.prototype.ngOnChanges = function (changes) {
          var nzScroll = changes.nzScroll, nzPageIndex = changes.nzPageIndex, nzPageSize = changes.nzPageSize, nzFrontPagination = changes.nzFrontPagination, nzData = changes.nzData, nzWidthConfig = changes.nzWidthConfig, nzNoResult = changes.nzNoResult, nzLoading = changes.nzLoading, nzTemplateMode = changes.nzTemplateMode;
          if (nzPageIndex) {
              this.nzTableDataService.updatePageIndex(this.nzPageIndex);
          }
          if (nzPageSize) {
              this.nzTableDataService.updatePageSize(this.nzPageSize);
          }
          if (nzData) {
              this.nzData = this.nzData || [];
              this.nzTableDataService.updateListOfData(this.nzData);
          }
          if (nzFrontPagination) {
              this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
          }
          if (nzScroll) {
              this.setScrollOnChanges();
          }
          if (nzWidthConfig) {
              this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
          }
          if (nzLoading) {
              this.loading$.next(this.nzLoading);
          }
          if (nzTemplateMode) {
              this.templateMode$.next(this.nzTemplateMode);
          }
          if (nzNoResult) {
              this.nzTableStyleService.setNoResult(this.nzNoResult);
          }
          this.updateShowPagination();
      };
      NzTableComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          this.nzResizeObserver
              .observe(this.elementRef)
              .pipe(operators.map(function (_b) {
              var _c = __read(_b, 1), entry = _c[0];
              var width = entry.target.getBoundingClientRect().width;
              var scrollBarWidth = _this.scrollY ? _this.verticalScrollBarWidth : 0;
              return Math.floor(width - scrollBarWidth);
          }), operators.takeUntil(this.destroy$))
              .subscribe(this.nzTableStyleService.hostWidth$);
          if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
              this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
          }
      };
      NzTableComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzTableComponent.prototype.setScrollOnChanges = function () {
          this.scrollX = (this.nzScroll && this.nzScroll.x) || null;
          this.scrollY = (this.nzScroll && this.nzScroll.y) || null;
          this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
      };
      NzTableComponent.prototype.updateShowPagination = function () {
          this.showPagination =
              (this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize) ||
                  (this.nzData.length > 0 && !this.nzHideOnSinglePage) ||
                  (!this.nzFrontPagination && this.nzTotal > this.nzPageSize);
      };
      return NzTableComponent;
  }());
  NzTableComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-table',
                  exportAs: 'nzTable',
                  providers: [NzTableStyleService, NzTableDataService],
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n      <div\n        #tableMainElement\n        class=\"ant-table\"\n        [class.ant-table-rtl]=\"dir === 'rtl'\"\n        [class.ant-table-fixed-header]=\"nzData.length && scrollY\"\n        [class.ant-table-fixed-column]=\"scrollX\"\n        [class.ant-table-has-fix-left]=\"hasFixLeft\"\n        [class.ant-table-has-fix-right]=\"hasFixRight\"\n        [class.ant-table-bordered]=\"nzBordered\"\n        [class.nz-table-out-bordered]=\"nzOuterBordered && !nzBordered\"\n        [class.ant-table-middle]=\"nzSize === 'middle'\"\n        [class.ant-table-small]=\"nzSize === 'small'\"\n      >\n        <nz-table-title-footer [title]=\"nzTitle\" *ngIf=\"nzTitle\"></nz-table-title-footer>\n        <nz-table-inner-scroll\n          *ngIf=\"scrollY || scrollX; else defaultTemplate\"\n          [data]=\"data\"\n          [scrollX]=\"scrollX\"\n          [scrollY]=\"scrollY\"\n          [contentTemplate]=\"contentTemplate\"\n          [listOfColWidth]=\"listOfAutoColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n          [verticalScrollBarWidth]=\"verticalScrollBarWidth\"\n          [virtualTemplate]=\"nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null\"\n          [virtualItemSize]=\"nzVirtualItemSize\"\n          [virtualMaxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [virtualMinBufferPx]=\"nzVirtualMinBufferPx\"\n          [tableMainElement]=\"tableMainElement\"\n          [virtualForTrackBy]=\"nzVirtualForTrackBy\"\n        ></nz-table-inner-scroll>\n        <ng-template #defaultTemplate>\n          <nz-table-inner-default\n            [tableLayout]=\"nzTableLayout\"\n            [listOfColWidth]=\"listOfManualColWidth\"\n            [theadTemplate]=\"theadTemplate\"\n            [contentTemplate]=\"contentTemplate\"\n          ></nz-table-inner-default>\n        </ng-template>\n        <nz-table-title-footer [footer]=\"nzFooter\" *ngIf=\"nzFooter\"></nz-table-title-footer>\n      </div>\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n    </nz-spin>\n    <ng-template #paginationTemplate>\n      <nz-pagination\n        *ngIf=\"nzShowPagination && data.length\"\n        [hidden]=\"!showPagination\"\n        class=\"ant-table-pagination ant-table-pagination-right\"\n        [nzShowSizeChanger]=\"nzShowSizeChanger\"\n        [nzPageSizeOptions]=\"nzPageSizeOptions\"\n        [nzItemRender]=\"nzItemRender!\"\n        [nzShowQuickJumper]=\"nzShowQuickJumper\"\n        [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n        [nzShowTotal]=\"nzShowTotal\"\n        [nzSize]=\"nzPaginationType === 'small' ? 'small' : nzSize === 'default' ? 'default' : 'small'\"\n        [nzPageSize]=\"nzPageSize\"\n        [nzTotal]=\"nzTotal\"\n        [nzSimple]=\"nzSimple\"\n        [nzPageIndex]=\"nzPageIndex\"\n        (nzPageSizeChange)=\"onPageSizeChange($event)\"\n        (nzPageIndexChange)=\"onPageIndexChange($event)\"\n      ></nz-pagination>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                  host: {
                      '[class.ant-table-wrapper-rtl]': 'dir === "rtl"'
                  }
              },] }
  ];
  NzTableComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: resizeObservers.NzResizeObserver },
      { type: config.NzConfigService },
      { type: core.ChangeDetectorRef },
      { type: NzTableStyleService },
      { type: NzTableDataService },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzTableComponent.propDecorators = {
      nzTableLayout: [{ type: core.Input }],
      nzShowTotal: [{ type: core.Input }],
      nzItemRender: [{ type: core.Input }],
      nzTitle: [{ type: core.Input }],
      nzFooter: [{ type: core.Input }],
      nzNoResult: [{ type: core.Input }],
      nzPageSizeOptions: [{ type: core.Input }],
      nzVirtualItemSize: [{ type: core.Input }],
      nzVirtualMaxBufferPx: [{ type: core.Input }],
      nzVirtualMinBufferPx: [{ type: core.Input }],
      nzVirtualForTrackBy: [{ type: core.Input }],
      nzLoadingDelay: [{ type: core.Input }],
      nzPageIndex: [{ type: core.Input }],
      nzPageSize: [{ type: core.Input }],
      nzTotal: [{ type: core.Input }],
      nzWidthConfig: [{ type: core.Input }],
      nzData: [{ type: core.Input }],
      nzPaginationPosition: [{ type: core.Input }],
      nzScroll: [{ type: core.Input }],
      nzPaginationType: [{ type: core.Input }],
      nzFrontPagination: [{ type: core.Input }],
      nzTemplateMode: [{ type: core.Input }],
      nzShowPagination: [{ type: core.Input }],
      nzLoading: [{ type: core.Input }],
      nzOuterBordered: [{ type: core.Input }],
      nzLoadingIndicator: [{ type: core.Input }],
      nzBordered: [{ type: core.Input }],
      nzSize: [{ type: core.Input }],
      nzShowSizeChanger: [{ type: core.Input }],
      nzHideOnSinglePage: [{ type: core.Input }],
      nzShowQuickJumper: [{ type: core.Input }],
      nzSimple: [{ type: core.Input }],
      nzPageSizeChange: [{ type: core.Output }],
      nzPageIndexChange: [{ type: core.Output }],
      nzQueryParams: [{ type: core.Output }],
      nzCurrentPageDataChange: [{ type: core.Output }],
      nzVirtualScrollDirective: [{ type: core.ContentChild, args: [NzTableVirtualScrollDirective, { static: false },] }],
      nzTableInnerScrollComponent: [{ type: core.ViewChild, args: [NzTableInnerScrollComponent,] }]
  };
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTableComponent.prototype, "nzFrontPagination", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTableComponent.prototype, "nzTemplateMode", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTableComponent.prototype, "nzShowPagination", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTableComponent.prototype, "nzLoading", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzTableComponent.prototype, "nzOuterBordered", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", Object)
  ], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTableComponent.prototype, "nzBordered", void 0);
  __decorate([
      config.WithConfig(),
      __metadata("design:type", String)
  ], NzTableComponent.prototype, "nzSize", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
  __decorate([
      config.WithConfig(),
      util.InputBoolean(),
      __metadata("design:type", Boolean)
  ], NzTableComponent.prototype, "nzSimple", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTbodyComponent = /** @class */ (function () {
      function NzTbodyComponent(nzTableStyleService) {
          this.nzTableStyleService = nzTableStyleService;
          this.isInsideTable = false;
          this.showEmpty$ = new rxjs.BehaviorSubject(false);
          this.noResult$ = new rxjs.BehaviorSubject(undefined);
          this.listOfMeasureColumn$ = new rxjs.BehaviorSubject([]);
          this.destroy$ = new rxjs.Subject();
          this.isInsideTable = !!this.nzTableStyleService;
          if (this.nzTableStyleService) {
              var _a = this.nzTableStyleService, showEmpty$ = _a.showEmpty$, noResult$ = _a.noResult$, listOfMeasureColumn$ = _a.listOfMeasureColumn$;
              noResult$.pipe(operators.takeUntil(this.destroy$)).subscribe(this.noResult$);
              listOfMeasureColumn$.pipe(operators.takeUntil(this.destroy$)).subscribe(this.listOfMeasureColumn$);
              showEmpty$.pipe(operators.takeUntil(this.destroy$)).subscribe(this.showEmpty$);
          }
      }
      NzTbodyComponent.prototype.onListOfAutoWidthChange = function (listOfAutoWidth) {
          this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
      };
      NzTbodyComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTbodyComponent;
  }());
  NzTbodyComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'tbody',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <ng-container *ngIf=\"listOfMeasureColumn$ | async as listOfMeasureColumn\">\n      <tr\n        nz-table-measure-row\n        *ngIf=\"isInsideTable && listOfMeasureColumn.length\"\n        [listOfMeasureColumn]=\"listOfMeasureColumn\"\n        (listOfAutoWidth)=\"onListOfAutoWidthChange($event)\"\n      ></tr>\n    </ng-container>\n    <ng-content></ng-content>\n    <tr class=\"ant-table-placeholder\" nz-table-fixed-row *ngIf=\"showEmpty$ | async\">\n      <nz-embed-empty nzComponentName=\"table\" [specificContent]=\"(noResult$ | async)!\"></nz-embed-empty>\n    </tr>\n  ",
                  host: {
                      '[class.ant-table-tbody]': 'isInsideTable'
                  }
              },] }
  ];
  NzTbodyComponent.ctorParameters = function () { return [
      { type: NzTableStyleService, decorators: [{ type: core.Optional }] }
  ]; };

  var NzTrDirective = /** @class */ (function () {
      function NzTrDirective(nzTableStyleService) {
          var _this = this;
          this.nzTableStyleService = nzTableStyleService;
          this.destroy$ = new rxjs.Subject();
          this.listOfFixedColumns$ = new rxjs.ReplaySubject(1);
          this.listOfColumns$ = new rxjs.ReplaySubject(1);
          this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(operators.switchMap(function (list) { return rxjs.merge.apply(void 0, __spread([_this.listOfFixedColumns$], list.map(function (c) { return c.changes$; }))).pipe(operators.mergeMap(function () { return _this.listOfFixedColumns$; })); }), operators.takeUntil(this.destroy$));
          this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(operators.map(function (list) { return list.filter(function (item) { return item.nzLeft !== false; }); }));
          this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(operators.map(function (list) { return list.filter(function (item) { return item.nzRight !== false; }); }));
          this.listOfColumnsChanges$ = this.listOfColumns$.pipe(operators.switchMap(function (list) { return rxjs.merge.apply(void 0, __spread([_this.listOfColumns$], list.map(function (c) { return c.changes$; }))).pipe(operators.mergeMap(function () { return _this.listOfColumns$; })); }), operators.takeUntil(this.destroy$));
          this.isInsideTable = false;
          this.isInsideTable = !!nzTableStyleService;
      }
      NzTrDirective.prototype.ngAfterContentInit = function () {
          if (this.nzTableStyleService) {
              this.listOfCellFixedDirective.changes
                  .pipe(operators.startWith(this.listOfCellFixedDirective), operators.takeUntil(this.destroy$))
                  .subscribe(this.listOfFixedColumns$);
              this.listOfNzThDirective.changes.pipe(operators.startWith(this.listOfNzThDirective), operators.takeUntil(this.destroy$)).subscribe(this.listOfColumns$);
              /** set last left and first right **/
              this.listOfFixedLeftColumnChanges$.subscribe(function (listOfFixedLeft) {
                  listOfFixedLeft.forEach(function (cell) { return cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]); });
              });
              this.listOfFixedRightColumnChanges$.subscribe(function (listOfFixedRight) {
                  listOfFixedRight.forEach(function (cell) { return cell.setIsFirstRight(cell === listOfFixedRight[0]); });
              });
              /** calculate fixed nzLeft and nzRight **/
              rxjs.combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$])
                  .pipe(operators.takeUntil(this.destroy$))
                  .subscribe(function (_a) {
                  var _b = __read(_a, 2), listOfAutoWidth = _b[0], listOfLeftCell = _b[1];
                  listOfLeftCell.forEach(function (cell, index) {
                      if (cell.isAutoLeft) {
                          var currentArray = listOfLeftCell.slice(0, index);
                          var count = currentArray.reduce(function (pre, cur) { return pre + (cur.colspan || cur.colSpan || 1); }, 0);
                          var width = listOfAutoWidth.slice(0, count).reduce(function (pre, cur) { return pre + cur; }, 0);
                          cell.setAutoLeftWidth(width + "px");
                      }
                  });
              });
              rxjs.combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$])
                  .pipe(operators.takeUntil(this.destroy$))
                  .subscribe(function (_a) {
                  var _b = __read(_a, 2), listOfAutoWidth = _b[0], listOfRightCell = _b[1];
                  listOfRightCell.forEach(function (_, index) {
                      var cell = listOfRightCell[listOfRightCell.length - index - 1];
                      if (cell.isAutoRight) {
                          var currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
                          var count = currentArray.reduce(function (pre, cur) { return pre + (cur.colspan || cur.colSpan || 1); }, 0);
                          var width = listOfAutoWidth
                              .slice(listOfAutoWidth.length - count, listOfAutoWidth.length)
                              .reduce(function (pre, cur) { return pre + cur; }, 0);
                          cell.setAutoRightWidth(width + "px");
                      }
                  });
              });
          }
      };
      NzTrDirective.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTrDirective;
  }());
  NzTrDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])',
                  host: {
                      '[class.ant-table-row]': 'isInsideTable'
                  }
              },] }
  ];
  NzTrDirective.ctorParameters = function () { return [
      { type: NzTableStyleService, decorators: [{ type: core.Optional }] }
  ]; };
  NzTrDirective.propDecorators = {
      listOfNzThDirective: [{ type: core.ContentChildren, args: [NzThMeasureDirective,] }],
      listOfCellFixedDirective: [{ type: core.ContentChildren, args: [NzCellFixedDirective,] }]
  };

  var NzTheadComponent = /** @class */ (function () {
      function NzTheadComponent(elementRef, renderer, nzTableStyleService, nzTableDataService) {
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.nzTableStyleService = nzTableStyleService;
          this.nzTableDataService = nzTableDataService;
          this.destroy$ = new rxjs.Subject();
          this.isInsideTable = false;
          this.nzSortOrderChange = new core.EventEmitter();
          this.isInsideTable = !!this.nzTableStyleService;
      }
      NzTheadComponent.prototype.ngOnInit = function () {
          if (this.nzTableStyleService) {
              this.nzTableStyleService.setTheadTemplate(this.templateRef);
          }
      };
      NzTheadComponent.prototype.ngAfterContentInit = function () {
          var _this = this;
          if (this.nzTableStyleService) {
              var firstTableRow$ = this.listOfNzTrDirective.changes.pipe(operators.startWith(this.listOfNzTrDirective), operators.map(function (item) { return item && item.first; }));
              var listOfColumnsChanges$_1 = firstTableRow$.pipe(operators.switchMap(function (firstTableRow) { return (firstTableRow ? firstTableRow.listOfColumnsChanges$ : rxjs.EMPTY); }), operators.takeUntil(this.destroy$));
              listOfColumnsChanges$_1.subscribe(function (data) { return _this.nzTableStyleService.setListOfTh(data); });
              /** TODO: need reset the measure row when scrollX change **/
              this.nzTableStyleService.enableAutoMeasure$
                  .pipe(operators.switchMap(function (enable) { return (enable ? listOfColumnsChanges$_1 : rxjs.of([])); }))
                  .pipe(operators.takeUntil(this.destroy$))
                  .subscribe(function (data) { return _this.nzTableStyleService.setListOfMeasureColumn(data); });
              var listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(operators.switchMap(function (firstTr) { return (firstTr ? firstTr.listOfFixedLeftColumnChanges$ : rxjs.EMPTY); }), operators.takeUntil(this.destroy$));
              var listOfFixedRightColumnChanges$ = firstTableRow$.pipe(operators.switchMap(function (firstTr) { return (firstTr ? firstTr.listOfFixedRightColumnChanges$ : rxjs.EMPTY); }), operators.takeUntil(this.destroy$));
              listOfFixedLeftColumnChanges$.subscribe(function (listOfFixedLeftColumn) {
                  _this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
              });
              listOfFixedRightColumnChanges$.subscribe(function (listOfFixedRightColumn) {
                  _this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
              });
          }
          if (this.nzTableDataService) {
              var listOfColumn$_1 = this.listOfNzThAddOnComponent.changes.pipe(operators.startWith(this.listOfNzThAddOnComponent));
              var manualSort$ = listOfColumn$_1.pipe(operators.switchMap(function () { return rxjs.merge.apply(void 0, __spread(_this.listOfNzThAddOnComponent.map(function (th) { return th.manualClickOrder$; }))); }), operators.takeUntil(this.destroy$));
              manualSort$.subscribe(function (data) {
                  var emitValue = { key: data.nzColumnKey, value: data.sortOrder };
                  _this.nzSortOrderChange.emit(emitValue);
                  if (data.nzSortFn && data.nzSortPriority === false) {
                      _this.listOfNzThAddOnComponent.filter(function (th) { return th !== data; }).forEach(function (th) { return th.clearSortOrder(); });
                  }
              });
              var listOfCalcOperator$ = listOfColumn$_1.pipe(operators.switchMap(function (list) { return rxjs.merge.apply(void 0, __spread([listOfColumn$_1], list.map(function (c) { return c.calcOperatorChange$; }))).pipe(operators.mergeMap(function () { return listOfColumn$_1; })); }), operators.map(function (list) { return list
                  .filter(function (item) { return !!item.nzSortFn || !!item.nzFilterFn; })
                  .map(function (item) {
                  var nzSortFn = item.nzSortFn, sortOrder = item.sortOrder, nzFilterFn = item.nzFilterFn, nzFilterValue = item.nzFilterValue, nzSortPriority = item.nzSortPriority, nzColumnKey = item.nzColumnKey;
                  return {
                      key: nzColumnKey,
                      sortFn: nzSortFn,
                      sortPriority: nzSortPriority,
                      sortOrder: sortOrder,
                      filterFn: nzFilterFn,
                      filterValue: nzFilterValue
                  };
              }); }), 
              // TODO: after checked error here
              operators.delay(0), operators.takeUntil(this.destroy$));
              listOfCalcOperator$.subscribe(function (list) {
                  _this.nzTableDataService.listOfCalcOperator$.next(list);
              });
          }
      };
      NzTheadComponent.prototype.ngAfterViewInit = function () {
          if (this.nzTableStyleService) {
              this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
          }
      };
      NzTheadComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTheadComponent;
  }());
  NzTheadComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'thead:not(.ant-table-thead)',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n    <ng-container *ngIf=\"!isInsideTable\">\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    </ng-container>\n  "
              },] }
  ];
  NzTheadComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core.Renderer2 },
      { type: NzTableStyleService, decorators: [{ type: core.Optional }] },
      { type: NzTableDataService, decorators: [{ type: core.Optional }] }
  ]; };
  NzTheadComponent.propDecorators = {
      templateRef: [{ type: core.ViewChild, args: ['contentTemplate', { static: true },] }],
      listOfNzTrDirective: [{ type: core.ContentChildren, args: [NzTrDirective, { descendants: true },] }],
      listOfNzThAddOnComponent: [{ type: core.ContentChildren, args: [NzThAddOnComponent, { descendants: true },] }],
      nzSortOrderChange: [{ type: core.Output }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableTitleFooterComponent = /** @class */ (function () {
      function NzTableTitleFooterComponent() {
          this.title = null;
          this.footer = null;
      }
      return NzTableTitleFooterComponent;
  }());
  NzTableTitleFooterComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-table-title-footer',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n    <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n  ",
                  host: {
                      '[class.ant-table-title]': "title !== null",
                      '[class.ant-table-footer]': "footer !== null"
                  }
              },] }
  ];
  NzTableTitleFooterComponent.propDecorators = {
      title: [{ type: core.Input }],
      footer: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTrExpandDirective = /** @class */ (function () {
      function NzTrExpandDirective(elementRef) {
          this.elementRef = elementRef;
          this.nzExpand = true;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-expanded-row');
      }
      return NzTrExpandDirective;
  }());
  NzTrExpandDirective.decorators = [
      { type: core.Directive, args: [{
                  selector: 'tr[nzExpand]',
                  host: {
                      '[hidden]': "!nzExpand"
                  }
              },] }
  ];
  NzTrExpandDirective.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  NzTrExpandDirective.propDecorators = {
      nzExpand: [{ type: core.Input }]
  };

  var NzTrMeasureComponent = /** @class */ (function () {
      function NzTrMeasureComponent(nzResizeObserver, ngZone, elementRef) {
          this.nzResizeObserver = nzResizeObserver;
          this.ngZone = ngZone;
          this.elementRef = elementRef;
          this.listOfMeasureColumn = [];
          this.listOfAutoWidth = new core.EventEmitter();
          this.destroy$ = new rxjs.Subject();
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-table-measure-now');
      }
      NzTrMeasureComponent.prototype.trackByFunc = function (_, key) {
          return key;
      };
      NzTrMeasureComponent.prototype.ngAfterViewInit = function () {
          var _this = this;
          this.listOfTdElement.changes
              .pipe(operators.startWith(this.listOfTdElement))
              .pipe(operators.switchMap(function (list) {
              return rxjs.combineLatest(list.toArray().map(function (item) {
                  return _this.nzResizeObserver.observe(item).pipe(operators.map(function (_a) {
                      var _b = __read(_a, 1), entry = _b[0];
                      var width = entry.target.getBoundingClientRect().width;
                      return Math.floor(width);
                  }));
              }));
          }), operators.debounceTime(16), operators.takeUntil(this.destroy$))
              .subscribe(function (data) {
              _this.ngZone.run(function () {
                  _this.listOfAutoWidth.next(data);
              });
          });
      };
      NzTrMeasureComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzTrMeasureComponent;
  }());
  NzTrMeasureComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'tr[nz-table-measure-row]',
                  preserveWhitespaces: false,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "\n    <td\n      #tdElement\n      class=\"nz-disable-td\"\n      style=\"padding: 0px; border: 0px; height: 0px;\"\n      *ngFor=\"let th of listOfMeasureColumn; trackBy: trackByFunc\"\n    ></td>\n  "
              },] }
  ];
  NzTrMeasureComponent.ctorParameters = function () { return [
      { type: resizeObservers.NzResizeObserver },
      { type: core.NgZone },
      { type: core.ElementRef }
  ]; };
  NzTrMeasureComponent.propDecorators = {
      listOfMeasureColumn: [{ type: core.Input }],
      listOfAutoWidth: [{ type: core.Output }],
      listOfTdElement: [{ type: core.ViewChildren, args: ['tdElement',] }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzTableModule = /** @class */ (function () {
      function NzTableModule() {
      }
      return NzTableModule;
  }());
  NzTableModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [
                      NzTableComponent,
                      NzThAddOnComponent,
                      NzTableCellDirective,
                      NzThMeasureDirective,
                      NzTdAddOnComponent,
                      NzTheadComponent,
                      NzTbodyComponent,
                      NzTrDirective,
                      NzTrExpandDirective,
                      NzTableVirtualScrollDirective,
                      NzCellFixedDirective,
                      NzTableContentComponent,
                      NzTableTitleFooterComponent,
                      NzTableInnerDefaultComponent,
                      NzTableInnerScrollComponent,
                      NzTrMeasureComponent,
                      NzRowIndentDirective,
                      NzRowExpandButtonDirective,
                      NzCellBreakWordDirective,
                      NzCellAlignDirective,
                      NzTableSortersComponent,
                      NzTableFilterComponent,
                      NzTableSelectionComponent,
                      NzCellEllipsisDirective,
                      NzFilterTriggerComponent,
                      NzTableFixedRowComponent,
                      NzThSelectionComponent
                  ],
                  exports: [
                      NzTableComponent,
                      NzThAddOnComponent,
                      NzTableCellDirective,
                      NzThMeasureDirective,
                      NzTdAddOnComponent,
                      NzTheadComponent,
                      NzTbodyComponent,
                      NzTrDirective,
                      NzTableVirtualScrollDirective,
                      NzCellFixedDirective,
                      NzFilterTriggerComponent,
                      NzTrExpandDirective,
                      NzCellBreakWordDirective,
                      NzCellAlignDirective,
                      NzCellEllipsisDirective,
                      NzTableFixedRowComponent,
                      NzThSelectionComponent
                  ],
                  imports: [
                      bidi.BidiModule,
                      menu.NzMenuModule,
                      forms.FormsModule,
                      outlet.NzOutletModule,
                      radio.NzRadioModule,
                      checkbox.NzCheckboxModule,
                      dropdown.NzDropDownModule,
                      button.NzButtonModule,
                      common.CommonModule,
                      platform.PlatformModule,
                      pagination.NzPaginationModule,
                      resizeObservers.NzResizeObserversModule,
                      spin.NzSpinModule,
                      i18n.NzI18nModule,
                      icon.NzIconModule,
                      empty.NzEmptyModule,
                      scrolling.ScrollingModule
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

  exports.NzCellAlignDirective = NzCellAlignDirective;
  exports.NzCellBreakWordDirective = NzCellBreakWordDirective;
  exports.NzCellEllipsisDirective = NzCellEllipsisDirective;
  exports.NzCellFixedDirective = NzCellFixedDirective;
  exports.NzFilterTriggerComponent = NzFilterTriggerComponent;
  exports.NzRowExpandButtonDirective = NzRowExpandButtonDirective;
  exports.NzRowIndentDirective = NzRowIndentDirective;
  exports.NzTableCellDirective = NzTableCellDirective;
  exports.NzTableComponent = NzTableComponent;
  exports.NzTableContentComponent = NzTableContentComponent;
  exports.NzTableDataService = NzTableDataService;
  exports.NzTableFilterComponent = NzTableFilterComponent;
  exports.NzTableFixedRowComponent = NzTableFixedRowComponent;
  exports.NzTableInnerDefaultComponent = NzTableInnerDefaultComponent;
  exports.NzTableInnerScrollComponent = NzTableInnerScrollComponent;
  exports.NzTableModule = NzTableModule;
  exports.NzTableSelectionComponent = NzTableSelectionComponent;
  exports.NzTableSortersComponent = NzTableSortersComponent;
  exports.NzTableStyleService = NzTableStyleService;
  exports.NzTableTitleFooterComponent = NzTableTitleFooterComponent;
  exports.NzTableVirtualScrollDirective = NzTableVirtualScrollDirective;
  exports.NzTbodyComponent = NzTbodyComponent;
  exports.NzTdAddOnComponent = NzTdAddOnComponent;
  exports.NzThAddOnComponent = NzThAddOnComponent;
  exports.NzThMeasureDirective = NzThMeasureDirective;
  exports.NzThSelectionComponent = NzThSelectionComponent;
  exports.NzTheadComponent = NzTheadComponent;
  exports.NzTrDirective = NzTrDirective;
  exports.NzTrExpandDirective = NzTrExpandDirective;
  exports.NzTrMeasureComponent = NzTrMeasureComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-table.umd.js.map
