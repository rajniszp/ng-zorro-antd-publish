import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, Injectable, ChangeDetectorRef, forwardRef, Renderer2, ElementRef, Inject, Optional, Host, ViewChild, ViewChildren, Directive, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { CandyDate, normalizeRangeValue, cloneDate, wrongSortOrder } from 'ng-zorro-antd/core/time';
import { isTemplateRef, isNonEmptyString, toBoolean, valueFunctionProp, InputBoolean } from 'ng-zorro-antd/core/util';
import { DateHelperService, NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { __decorate, __metadata } from 'tslib';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { ReplaySubject, Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const PREFIX_CLASS = 'ant-picker';
const defaultDisabledTime = {
    nzDisabledHours() {
        return [];
    },
    nzDisabledMinutes() {
        return [];
    },
    nzDisabledSeconds() {
        return [];
    }
};
function getTimeConfig(value, disabledTime) {
    let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
    disabledTimeConfig = Object.assign(Object.assign({}, defaultDisabledTime), disabledTimeConfig);
    return disabledTimeConfig;
}
function isTimeValidByConfig(value, disabledTimeConfig) {
    let invalidTime = false;
    if (value) {
        const hour = value.getHours();
        const minutes = value.getMinutes();
        const seconds = value.getSeconds();
        const disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
function isTimeValid(value, disabledTime) {
    const disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
function isAllowedDate(value, disabledDate, disabledTime) {
    if (!value) {
        return false;
    }
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Compatible translate the moment-like format pattern to angular's pattern
 * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
 *
 * TODO: compare and complete all format patterns
 * Each format docs as below:
 * @link https://momentjs.com/docs/#/displaying/format/
 * @link https://angular.io/api/common/DatePipe#description
 * @param format input format pattern
 */
function transCompatFormat(format) {
    return (format &&
        format
            .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
            .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class CalendarFooterComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.showToday = false;
        this.showNow = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.okDisabled = false;
        this.rangeQuickSelector = null;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = PREFIX_CLASS;
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
        this.isTodayDisabled = false;
        this.todayTitle = '';
    }
    ngOnChanges(changes) {
        const now = new Date();
        if (changes.disabledDate) {
            this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(now));
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            const dateFormat = transCompatFormat(this.locale.dateFormat);
            this.todayTitle = this.dateHelper.format(now, dateFormat);
        }
    }
    onClickToday() {
        const now = new CandyDate();
        this.clickToday.emit(now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
CalendarFooterComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                template: `
    <div class="{{ prefixCls }}-footer">
      <div *ngIf="extraFooter" class="{{ prefixCls }}-footer-extra">
        <ng-container [ngSwitch]="true">
          <ng-container *ngSwitchCase="isTemplateRef(extraFooter)">
            <ng-container *ngTemplateOutlet="$any(extraFooter)"></ng-container>
          </ng-container>
          <ng-container *ngSwitchCase="isNonEmptyString(extraFooter)">
            <span [innerHTML]="extraFooter"></span>
          </ng-container>
        </ng-container>
      </div>
      <a
        *ngIf="showToday"
        class="{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}"
        role="button"
        (click)="isTodayDisabled ? null : onClickToday()"
        title="{{ todayTitle }}"
      >
        {{ locale.today }}
      </a>
      <ul *ngIf="hasTimePicker || rangeQuickSelector" class="{{ prefixCls }}-ranges">
        <ng-container *ngTemplateOutlet="rangeQuickSelector"></ng-container>
        <li *ngIf="showNow" class="{{ prefixCls }}-now">
          <a class="{{ prefixCls }}-now-btn" (click)="isTodayDisabled ? null : onClickToday()">
            {{ locale.now }}
          </a>
        </li>
        <li *ngIf="hasTimePicker" class="{{ prefixCls }}-ok">
          <button
            nz-button
            type="button"
            nzType="primary"
            nzSize="small"
            [disabled]="okDisabled"
            (click)="okDisabled ? null : clickOk.emit()"
          >
            {{ locale.ok }}
          </button>
        </li>
      </ul>
    </div>
  `
            },] }
];
CalendarFooterComponent.ctorParameters = () => [
    { type: DateHelperService }
];
CalendarFooterComponent.propDecorators = {
    locale: [{ type: Input }],
    showToday: [{ type: Input }],
    showNow: [{ type: Input }],
    hasTimePicker: [{ type: Input }],
    isRange: [{ type: Input }],
    okDisabled: [{ type: Input }],
    disabledDate: [{ type: Input }],
    extraFooter: [{ type: Input }],
    rangeQuickSelector: [{ type: Input }],
    clickOk: [{ type: Output }],
    clickToday: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DatePickerService {
    constructor() {
        this.activeInput = 'left';
        this.arrowLeft = 0;
        this.isRange = false;
        this.valueChange$ = new ReplaySubject(1);
        this.emitValue$ = new Subject();
        this.inputPartChange$ = new Subject();
    }
    initValue(reset = false) {
        if (reset) {
            this.initialValue = this.isRange ? [] : null;
        }
        this.setValue(this.initialValue);
    }
    hasValue(value = this.value) {
        if (Array.isArray(value)) {
            return !!value[0] || !!value[1];
        }
        else {
            return !!value;
        }
    }
    makeValue(value) {
        if (this.isRange) {
            return value ? value.map(val => new CandyDate(val)) : [];
        }
        else {
            return value ? new CandyDate(value) : null;
        }
    }
    setActiveDate(value, hasTimePicker = false, mode = 'month') {
        const parentPanels = {
            date: 'month',
            month: 'year',
            year: 'decade'
        };
        if (this.isRange) {
            this.activeDate = normalizeRangeValue(value, hasTimePicker, parentPanels[mode], this.activeInput);
        }
        else {
            this.activeDate = cloneDate(value);
        }
    }
    setValue(value) {
        this.value = value;
        this.valueChange$.next(this.value);
    }
    getActiveIndex(part = this.activeInput) {
        return { left: 0, right: 1 }[part];
    }
    ngOnDestroy() {
        this.valueChange$.complete();
        this.emitValue$.complete();
        this.inputPartChange$.complete();
    }
}
DatePickerService.decorators = [
    { type: Injectable }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DateRangePopupComponent {
    constructor(datePickerService, cdr) {
        this.datePickerService = datePickerService;
        this.cdr = cdr;
        this.inline = false;
        this.dir = 'ltr';
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.prefixCls = PREFIX_CLASS;
        this.endPanelMode = 'date';
        this.timeOptions = null;
        this.hoverValue = []; // Range ONLY
        this.checkedPartArr = [false, false];
        this.destroy$ = new Subject();
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    get hasTimePicker() {
        return !!this.showTime;
    }
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    ngOnInit() {
        merge(this.datePickerService.valueChange$, this.datePickerService.inputPartChange$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateActiveDate();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        // Parse showTime options
        if (changes.showTime || changes.disabledTime) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        if (changes.panelMode) {
            this.endPanelMode = this.panelMode;
        }
        if (changes.defaultPickerValue) {
            this.updateActiveDate();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateActiveDate() {
        const activeDate = this.datePickerService.hasValue()
            ? this.datePickerService.value
            : this.datePickerService.makeValue(this.defaultPickerValue);
        this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
    }
    /**
     * Prevent input losing focus when click panel
     * @param event
     */
    onMousedown(event) {
        event.preventDefault();
    }
    onClickOk() {
        const inputIndex = { left: 0, right: 1 }[this.datePickerService.activeInput];
        const value = this.isRange
            ? this.datePickerService.value[inputIndex]
            : this.datePickerService.value;
        this.changeValueFromSelect(value);
        this.resultOk.emit();
    }
    onClickToday(value) {
        this.changeValueFromSelect(value, !this.showTime);
    }
    onCellHover(value) {
        if (!this.isRange) {
            return;
        }
        const otherInputIndex = { left: 1, right: 0 }[this.datePickerService.activeInput];
        const base = this.datePickerService.value[otherInputIndex];
        if (base) {
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            const index = this.datePickerService.getActiveIndex(partType);
            if (index === 0) {
                this.panelMode = [mode, this.panelMode[1]];
            }
            else {
                this.panelMode = [this.panelMode[0], mode];
            }
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    onActiveDateChange(value, partType) {
        if (this.isRange) {
            const activeDate = [];
            activeDate[this.datePickerService.getActiveIndex(partType)] = value;
            this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
        }
        else {
            this.datePickerService.setActiveDate(value);
        }
    }
    onSelectTime(value, partType) {
        if (this.isRange) {
            const newValue = cloneDate(this.datePickerService.value);
            const index = this.datePickerService.getActiveIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.datePickerService.setValue(newValue);
        }
        else {
            const newValue = this.overrideHms(value, this.datePickerService.value);
            this.datePickerService.setValue(newValue); // If not select a date currently, use today
        }
        this.datePickerService.inputPartChange$.next();
        this.buildTimeOptions();
    }
    changeValueFromSelect(value, emitValue = true) {
        if (this.isRange) {
            const selectedValue = cloneDate(this.datePickerService.value);
            const checkedPart = this.datePickerService.activeInput;
            let nextPart = checkedPart;
            selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
            this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
            this.hoverValue = selectedValue;
            if (emitValue) {
                if (this.inline) {
                    // For UE, Should always be reversed, and clear vaue when next part is right
                    nextPart = this.reversedPart(checkedPart);
                    if (nextPart === 'right') {
                        selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                        this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                    }
                    this.datePickerService.setValue(selectedValue);
                    this.calendarChange.emit(selectedValue);
                    if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
                        this.clearHoverValue();
                        this.datePickerService.emitValue$.next();
                    }
                }
                else {
                    /**
                     * if sort order is wrong, clear the other part's value
                     */
                    if (wrongSortOrder(selectedValue)) {
                        nextPart = this.reversedPart(checkedPart);
                        selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                        this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                    }
                    this.datePickerService.setValue(selectedValue);
                    /**
                     * range date usually selected paired,
                     * so we emit the date value only both date is allowed and both part are checked
                     */
                    if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
                        this.calendarChange.emit(selectedValue);
                        this.clearHoverValue();
                        this.datePickerService.emitValue$.next();
                    }
                    else if (this.isAllowed(selectedValue)) {
                        nextPart = this.reversedPart(checkedPart);
                        this.calendarChange.emit([value.clone()]);
                    }
                }
            }
            else {
                this.datePickerService.setValue(selectedValue);
            }
            this.datePickerService.inputPartChange$.next(nextPart);
        }
        else {
            this.datePickerService.setValue(value);
            this.datePickerService.inputPartChange$.next();
            if (emitValue && this.isAllowed(value)) {
                this.datePickerService.emitValue$.next();
            }
        }
    }
    reversedPart(part) {
        return part === 'left' ? 'right' : 'left';
    }
    getPanelMode(panelMode, partType) {
        if (this.isRange) {
            return panelMode[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return panelMode;
        }
    }
    // Get single value or part value of a range
    getValue(partType) {
        if (this.isRange) {
            return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.value;
        }
    }
    getActiveDate(partType) {
        if (this.isRange) {
            return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.activeDate;
        }
    }
    isOneAllowed(selectedValue) {
        const index = this.datePickerService.getActiveIndex();
        const disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
        return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
    }
    isBothAllowed(selectedValue) {
        return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
            isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
    }
    isAllowed(value, isBoth = false) {
        if (this.isRange) {
            return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
        }
        else {
            return isAllowedDate(value, this.disabledDate, this.disabledTime);
        }
    }
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    onClickPresetRange(val) {
        const value = typeof val === 'function' ? val() : val;
        if (value) {
            this.datePickerService.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.datePickerService.emitValue$.next();
        }
    }
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    }
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    show(partType) {
        const hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
        return !hide;
    }
    clearHoverValue() {
        this.hoverValue = [];
    }
    buildTimeOptions() {
        if (this.showTime) {
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                const value = this.datePickerService.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    overrideTimeOptions(origin, value, partial) {
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
    }
    overrideHms(newValue, oldValue) {
        // tslint:disable-next-line:no-parameter-reassignment
        newValue = newValue || new CandyDate();
        // tslint:disable-next-line:no-parameter-reassignment
        oldValue = oldValue || new CandyDate();
        return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
    }
}
DateRangePopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: `
    <ng-container *ngIf="isRange; else singlePanel">
      <div class="{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper">
        <div class="{{ prefixCls }}-range-arrow" [style.left.px]="datePickerService?.arrowLeft"></div>
        <div class="{{ prefixCls }}-panel-container">
          <div class="{{ prefixCls }}-panels">
            <ng-container *ngIf="hasTimePicker; else noTimePicker">
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: datePickerService.activeInput }"></ng-container>
            </ng-container>
            <ng-template #noTimePicker>
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'left' }"></ng-container>
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'right' }"></ng-container>
            </ng-template>
          </div>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-container>
    <ng-template #singlePanel>
      <div
        class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{
          hasTimePicker ? prefixCls + '-time' : ''
        }} {{ isRange ? prefixCls + '-range' : '' }}"
      >
        <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'" tabindex="-1">
          <!-- Single ONLY -->
          <ng-container *ngTemplateOutlet="tplInnerPopup"></ng-container>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-template>

    <ng-template #tplInnerPopup let-partType="partType">
      <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'">
        <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->
        <inner-popup
          [showWeek]="showWeek"
          [endPanelMode]="getPanelMode(endPanelMode, partType)"
          [partType]="partType"
          [locale]="locale!"
          [showTimePicker]="hasTimePicker"
          [timeOptions]="getTimeOptions(partType)"
          [panelMode]="getPanelMode(panelMode, partType)"
          (panelModeChange)="onPanelModeChange($event, partType)"
          [activeDate]="getActiveDate(partType)"
          [value]="getValue(partType)"
          [disabledDate]="disabledDate"
          [dateRender]="dateRender"
          [selectedValue]="$any(datePickerService?.value)"
          [hoverValue]="$any(hoverValue)"
          (cellHover)="onCellHover($event)"
          (selectDate)="changeValueFromSelect($event, !showTime)"
          (selectTime)="onSelectTime($event, partType)"
          (headerChange)="onActiveDateChange($event, partType)"
        ></inner-popup>
      </div>
    </ng-template>

    <ng-template #tplFooter>
      <calendar-footer
        *ngIf="hasFooter"
        [locale]="locale!"
        [isRange]="isRange"
        [showToday]="showToday"
        [showNow]="showNow"
        [hasTimePicker]="hasTimePicker"
        [okDisabled]="!isAllowed($any(datePickerService?.value))"
        [extraFooter]="extraFooter"
        [rangeQuickSelector]="ranges ? tplRangeQuickSelector : null"
        (clickOk)="onClickOk()"
        (clickToday)="onClickToday($event)"
      ></calendar-footer>
    </ng-template>

    <!-- Range ONLY: Range Quick Selector -->
    <ng-template #tplRangeQuickSelector>
      <li
        *ngFor="let name of getObjectKeys(ranges)"
        class="{{ prefixCls }}-preset"
        (click)="onClickPresetRange(ranges![name])"
        (mouseenter)="onHoverPresetRange(ranges![name])"
        (mouseleave)="onPresetRangeMouseLeave()"
      >
        <span class="ant-tag ant-tag-blue">{{ name }}</span>
      </li>
    </ng-template>
  `,
                host: {
                    '(mousedown)': 'onMousedown($event)'
                }
            },] }
];
DateRangePopupComponent.ctorParameters = () => [
    { type: DatePickerService },
    { type: ChangeDetectorRef }
];
DateRangePopupComponent.propDecorators = {
    isRange: [{ type: Input }],
    inline: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    disabledDate: [{ type: Input }],
    disabledTime: [{ type: Input }],
    showToday: [{ type: Input }],
    showNow: [{ type: Input }],
    showTime: [{ type: Input }],
    extraFooter: [{ type: Input }],
    ranges: [{ type: Input }],
    dateRender: [{ type: Input }],
    panelMode: [{ type: Input }],
    defaultPickerValue: [{ type: Input }],
    dir: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    calendarChange: [{ type: Output }],
    resultOk: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working because the overlay can't get the height/width of it's content)
const NZ_CONFIG_MODULE_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */
class NzDatePickerComponent {
    // ------------------------------------------------------------------------
    // Input API End
    // ------------------------------------------------------------------------
    constructor(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, nzResizeObserver, platform, doc, directionality, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.datePickerService = datePickerService;
        this.i18n = i18n;
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.nzResizeObserver = nzResizeObserver;
        this.platform = platform;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.isRange = false; // Indicate whether the value is a range value
        this.dir = 'ltr';
        this.panelMode = 'date';
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        this.isCustomFormat = false;
        this.showTime = false;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzBorderless = false;
        this.nzInputReadOnly = false;
        this.nzInline = false;
        this.nzPlaceHolder = '';
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzSize = 'default';
        this.nzShowToday = true;
        this.nzMode = 'date';
        this.nzShowNow = true;
        this.nzDefaultPickerValue = null;
        this.nzSeparator = undefined;
        this.nzSuffixIcon = 'calendar';
        this.nzBackdrop = false;
        this.nzId = null;
        // TODO(@wenqi73) The PanelMode need named for each pickers and export
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnCalendarChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        this.nzOnOpenChange = new EventEmitter();
        this.inputSize = 12;
        this.destroy$ = new Subject();
        this.prefixCls = PREFIX_CLASS;
        this.activeBarStyle = {};
        this.overlayOpen = false; // Available when "nzOpen" = undefined
        this.overlayPositions = [
            {
                offsetY: 2,
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                offsetY: -2,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                offsetY: 2,
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                offsetY: -2,
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ];
        this.currentPositionX = 'start';
        this.currentPositionY = 'bottom';
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
        this.document = doc;
        this.origin = new CdkOverlayOrigin(this.elementRef);
    }
    get nzShowTime() {
        return this.showTime;
    }
    set nzShowTime(value) {
        this.showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? !!this.nzOpen : this.overlayOpen;
    }
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
        if (this.isRange && this.platform.isBrowser) {
            this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.updateInputWidthAndArrowLeft();
            });
        }
        this.datePickerService.inputPartChange$.pipe(takeUntil(this.destroy$)).subscribe(partType => {
            if (partType) {
                this.datePickerService.activeInput = partType;
            }
            this.focus();
            this.updateInputWidthAndArrowLeft();
        });
    }
    updateInputWidthAndArrowLeft() {
        var _a, _b, _c;
        this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
        const baseStyle = { position: 'absolute', width: `${this.inputWidth}px` };
        this.datePickerService.arrowLeft =
            this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;
        if (this.dir === 'rtl') {
            this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { right: `${this.datePickerService.arrowLeft}px` });
        }
        else {
            this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { left: `${this.datePickerService.arrowLeft}px` });
        }
        this.cdr.markForCheck();
    }
    getInput(partType) {
        var _a, _b;
        if (this.nzInline) {
            return undefined;
        }
        return this.isRange
            ? partType === 'left'
                ? (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first.nativeElement : (_b = this.rangePickerInputs) === null || _b === void 0 ? void 0 : _b.last.nativeElement
            : this.pickerInput.nativeElement;
    }
    focus() {
        const activeInputElement = this.getInput(this.datePickerService.activeInput);
        if (this.document.activeElement !== activeInputElement) {
            activeInputElement === null || activeInputElement === void 0 ? void 0 : activeInputElement.focus();
        }
    }
    onFocus(event, partType) {
        event.preventDefault();
        if (partType) {
            this.datePickerService.inputPartChange$.next(partType);
        }
        this.renderClass(true);
    }
    // blur event has not the relatedTarget in IE11, use focusout instead.
    onFocusout(event) {
        event.preventDefault();
        if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
            this.checkAndClose();
        }
        this.renderClass(false);
    }
    // Show overlay content
    open() {
        if (this.nzInline) {
            return;
        }
        if (!this.realOpenState && !this.nzDisabled) {
            this.updateInputWidthAndArrowLeft();
            this.overlayOpen = true;
            this.nzOnOpenChange.emit(true);
            this.cdr.markForCheck();
        }
    }
    close() {
        if (this.nzInline) {
            return;
        }
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.nzOnOpenChange.emit(false);
        }
    }
    showClear() {
        return !this.nzDisabled && !this.isEmptyValue(this.datePickerService.value) && this.nzAllowClear;
    }
    checkAndClose() {
        if (!this.realOpenState) {
            return;
        }
        if (this.panel.isAllowed(this.datePickerService.value, true)) {
            if (Array.isArray(this.datePickerService.value) && wrongSortOrder(this.datePickerService.value)) {
                const index = this.datePickerService.getActiveIndex();
                const value = this.datePickerService.value[index];
                this.panel.changeValueFromSelect(value, true);
                return;
            }
            this.updateInputValue();
            this.datePickerService.emitValue$.next();
        }
        else {
            this.datePickerService.setValue(this.datePickerService.initialValue);
            this.close();
        }
    }
    onClickInputBox(event) {
        event.stopPropagation();
        this.focus();
        if (!this.isOpenHandledByUser()) {
            this.open();
        }
    }
    onOverlayKeydown(event) {
        if (event.keyCode === ESCAPE) {
            this.datePickerService.initValue();
        }
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    onPositionChange(position) {
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.cdr.detectChanges(); // Take side-effects to position styles
    }
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.datePickerService.initValue(true);
        this.datePickerService.emitValue$.next();
    }
    updateInputValue() {
        const newValue = this.datePickerService.value;
        if (this.isRange) {
            this.inputValue = newValue ? newValue.map(v => this.formatValue(v)) : ['', ''];
        }
        else {
            this.inputValue = this.formatValue(newValue);
        }
        this.cdr.markForCheck();
    }
    formatValue(value) {
        return this.dateHelper.format(value && value.nativeDate, this.nzFormat);
    }
    onInputChange(value, isEnter = false) {
        /**
         * in IE11 focus/blur will trigger ngModelChange if placeholder changes,
         * so we forbidden IE11 to open panel through input change
         */
        if (!this.platform.TRIDENT &&
            this.document.activeElement === this.getInput(this.datePickerService.activeInput) &&
            !this.realOpenState) {
            this.open();
            return;
        }
        const date = this.checkValidDate(value);
        // Can only change date when it's open
        if (date && this.realOpenState) {
            this.panel.changeValueFromSelect(date, isEnter);
        }
    }
    onKeyupEnter(event) {
        this.onInputChange(event.target.value, true);
    }
    checkValidDate(value) {
        const date = new CandyDate(this.dateHelper.parseDate(value, this.nzFormat));
        if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.nzFormat)) {
            return null;
        }
        return date;
    }
    getPlaceholder(partType) {
        return this.isRange ? this.nzPlaceHolder[this.datePickerService.getActiveIndex(partType)] : this.nzPlaceHolder;
    }
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(val => !val);
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    isOpenHandledByUser() {
        return this.nzOpen !== undefined;
    }
    ngOnInit() {
        var _a;
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe(() => this.setLocale());
        }
        // Default value
        this.datePickerService.isRange = this.isRange;
        this.datePickerService.initValue(true);
        this.datePickerService.emitValue$.pipe(takeUntil(this.destroyed$)).subscribe(_ => {
            var _a, _b, _c, _d;
            const value = this.datePickerService.value;
            this.datePickerService.initialValue = cloneDate(value);
            if (this.isRange) {
                const vAsRange = value;
                if (vAsRange.length) {
                    this.onChangeFn([(_b = (_a = vAsRange[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) !== null && _b !== void 0 ? _b : null, (_d = (_c = vAsRange[1]) === null || _c === void 0 ? void 0 : _c.nativeDate) !== null && _d !== void 0 ? _d : null]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (value) {
                    this.onChangeFn(value.nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
            // When value emitted, overlay will be closed
            this.close();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroyed$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.inputValue = this.isRange ? ['', ''] : '';
        this.setModeAndFormat();
        this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateInputValue();
        });
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if ((_a = changes.nzPlaceHolder) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.isCustomPlaceHolder = true;
        }
        if ((_b = changes.nzFormat) === null || _b === void 0 ? void 0 : _b.currentValue) {
            this.isCustomFormat = true;
        }
        if (changes.nzLocale) {
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzMode) {
            this.setDefaultPlaceHolder();
            this.setModeAndFormat();
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    setModeAndFormat() {
        const inputFormats = {
            year: 'yyyy',
            month: 'yyyy-MM',
            week: this.i18n.getDateLocale() ? 'RRRR-II' : 'yyyy-ww',
            date: this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'
        };
        if (!this.nzMode) {
            this.nzMode = 'date';
        }
        this.panelMode = this.isRange ? [this.nzMode, this.nzMode] : this.nzMode;
        // Default format when it's empty
        if (!this.isCustomFormat) {
            this.nzFormat = inputFormats[this.nzMode];
        }
        this.inputSize = Math.max(10, this.nzFormat.length) + 2;
        this.updateInputValue();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    setLocale() {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            const defaultPlaceholder = {
                year: this.getPropertyOfLocale('yearPlaceholder'),
                month: this.getPropertyOfLocale('monthPlaceholder'),
                week: this.getPropertyOfLocale('weekPlaceholder'),
                date: this.getPropertyOfLocale('placeholder')
            };
            const defaultRangePlaceholder = {
                year: this.getPropertyOfLocale('rangeYearPlaceholder'),
                month: this.getPropertyOfLocale('rangeMonthPlaceholder'),
                week: this.getPropertyOfLocale('rangeWeekPlaceholder'),
                date: this.getPropertyOfLocale('rangePlaceholder')
            };
            this.nzPlaceHolder = this.isRange
                ? defaultRangePlaceholder[this.nzMode]
                : defaultPlaceholder[this.nzMode];
        }
    }
    getPropertyOfLocale(type) {
        return this.nzLocale.lang[type] || this.i18n.getLocaleData(`DatePicker.lang.${type}`);
    }
    // Safe way of setting value with default
    setValue(value) {
        const newValue = this.datePickerService.makeValue(value);
        this.datePickerService.setValue(newValue);
        this.datePickerService.initialValue = newValue;
    }
    renderClass(value) {
        // TODO: avoid autoFocus cause change after checked error
        if (value) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
    }
    onPanelModeChange(panelMode) {
        this.nzOnPanelChange.emit(panelMode);
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    onCalendarChange(value) {
        if (this.isRange && Array.isArray(value)) {
            const rangeValue = value.filter(x => x instanceof CandyDate).map(x => x.nativeDate);
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    onResultOk() {
        var _a, _b;
        if (this.isRange) {
            const value = this.datePickerService.value;
            if (value.length) {
                this.nzOnOk.emit([((_a = value[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) || null, ((_b = value[1]) === null || _b === void 0 ? void 0 : _b.nativeDate) || null]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.datePickerService.value) {
                this.nzOnOk.emit(this.datePickerService.value.nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
    }
}
NzDatePickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker',
                exportAs: 'nzDatePicker',
                template: `
    <ng-container *ngIf="!nzInline; else inlineMode">
      <!-- Content of single picker -->
      <div *ngIf="!isRange" class="{{ prefixCls }}-input">
        <input
          #pickerInput
          [attr.id]="nzId"
          [class.ant-input-disabled]="nzDisabled"
          [disabled]="nzDisabled"
          [readOnly]="nzInputReadOnly"
          [(ngModel)]="inputValue"
          placeholder="{{ getPlaceholder() }}"
          [size]="inputSize"
          (focus)="onFocus($event)"
          (focusout)="onFocusout($event)"
          (ngModelChange)="onInputChange($event)"
          (keyup.enter)="onKeyupEnter($event)"
        />
        <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
      </div>

      <!-- Content of range picker -->
      <ng-container *ngIf="isRange">
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'left' }"></ng-container>
        </div>
        <div #separatorElement class="{{ prefixCls }}-range-separator">
          <span class="{{ prefixCls }}-separator">
            <ng-container *ngIf="nzSeparator; else defaultSeparator">{{ nzSeparator }}</ng-container>
          </span>
          <ng-template #defaultSeparator>
            <i nz-icon nzType="swap-right" nzTheme="outline"></i>
          </ng-template>
        </div>
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'right' }"></ng-container>
        </div>
        <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
      </ng-container>
    </ng-container>
    <!-- Input for Range ONLY -->
    <ng-template #tplRangeInput let-partType="partType">
      <input
        #rangePickerInput
        [disabled]="nzDisabled"
        [readOnly]="nzInputReadOnly"
        [size]="inputSize"
        (click)="onClickInputBox($event)"
        (focusout)="onFocusout($event)"
        (focus)="onFocus($event, partType)"
        (keyup.enter)="onKeyupEnter($event)"
        [(ngModel)]="inputValue[datePickerService.getActiveIndex(partType)]"
        (ngModelChange)="onInputChange($event)"
        placeholder="{{ getPlaceholder(partType) }}"
      />
    </ng-template>

    <!-- Right operator icons -->
    <ng-template #tplRightRest>
      <div class="{{ prefixCls }}-active-bar" [ngStyle]="activeBarStyle"></div>
      <span *ngIf="showClear()" class="{{ prefixCls }}-clear" (click)="onClickClear($event)">
        <i nz-icon nzType="close-circle" nzTheme="fill"></i>
      </span>
      <span class="{{ prefixCls }}-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </span>
    </ng-template>

    <ng-template #inlineMode>
      <div class="ant-picker-wrapper" [nzNoAnimation]="!!noAnimation?.nzNoAnimation" [@slideMotion]="'enter'" style="position: relative;">
        <div
          class="{{ prefixCls }}-dropdown {{ nzDropdownClassName }}"
          [class.ant-picker-dropdown-rtl]="dir === 'rtl'"
          [class.ant-picker-dropdown-placement-bottomLeft]="currentPositionY === 'bottom' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-topLeft]="currentPositionY === 'top' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-bottomRight]="currentPositionY === 'bottom' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-placement-topRight]="currentPositionY === 'top' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-range]="isRange"
          [class.ant-picker-active-left]="datePickerService.activeInput === 'left'"
          [class.ant-picker-active-right]="datePickerService.activeInput === 'right'"
          [ngStyle]="nzPopupStyle"
        >
          <date-range-popup
            [isRange]="isRange"
            [inline]="nzInline"
            [defaultPickerValue]="nzDefaultPickerValue"
            [showWeek]="nzMode === 'week'"
            [panelMode]="panelMode"
            (panelModeChange)="onPanelModeChange($event)"
            (calendarChange)="onCalendarChange($event)"
            [locale]="nzLocale?.lang!"
            [showToday]="nzMode === 'date' && nzShowToday && !isRange && !nzShowTime"
            [showNow]="nzMode === 'date' && nzShowNow && !isRange && !!nzShowTime"
            [showTime]="nzShowTime"
            [dateRender]="nzDateRender"
            [disabledDate]="nzDisabledDate"
            [disabledTime]="nzDisabledTime"
            [extraFooter]="extraFooter"
            [ranges]="nzRanges"
            [dir]="dir"
            (resultOk)="onResultOk()"
          ></date-range-popup>
        </div>
      </div>
    </ng-template>

    <!-- Overlay -->
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="realOpenState"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-wrapper'"
      (positionChange)="onPositionChange($event)"
      (detach)="close()"
      (overlayKeydown)="onOverlayKeydown($event)"
    >
      <ng-container *ngTemplateOutlet="inlineMode"></ng-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker]': `true`,
                    '[class.ant-picker-range]': `isRange`,
                    '[class.ant-picker-large]': `nzSize === 'large'`,
                    '[class.ant-picker-small]': `nzSize === 'small'`,
                    '[class.ant-picker-disabled]': `nzDisabled`,
                    '[class.ant-picker-rtl]': `dir === 'rtl'`,
                    '[class.ant-picker-borderless]': `nzBorderless`,
                    '[class.ant-picker-inline]': `nzInline`,
                    '(click)': 'onClickInputBox($event)'
                },
                providers: [
                    DatePickerService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => NzDatePickerComponent)
                    }
                ],
                animations: [slideMotion]
            },] }
];
NzDatePickerComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: DatePickerService },
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: DateHelperService },
    { type: NzResizeObserver },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDatePickerComponent.propDecorators = {
    nzAllowClear: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzBorderless: [{ type: Input }],
    nzInputReadOnly: [{ type: Input }],
    nzInline: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzDisabledDate: [{ type: Input }],
    nzLocale: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzPopupStyle: [{ type: Input }],
    nzDropdownClassName: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzDateRender: [{ type: Input }],
    nzDisabledTime: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzShowToday: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzShowNow: [{ type: Input }],
    nzRanges: [{ type: Input }],
    nzDefaultPickerValue: [{ type: Input }],
    nzSeparator: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzBackdrop: [{ type: Input }],
    nzId: [{ type: Input }],
    nzOnPanelChange: [{ type: Output }],
    nzOnCalendarChange: [{ type: Output }],
    nzOnOk: [{ type: Output }],
    nzOnOpenChange: [{ type: Output }],
    nzShowTime: [{ type: Input }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
    panel: [{ type: ViewChild, args: [DateRangePopupComponent, { static: false },] }],
    separatorElement: [{ type: ViewChild, args: ['separatorElement', { static: false },] }],
    pickerInput: [{ type: ViewChild, args: ['pickerInput', { static: false },] }],
    rangePickerInputs: [{ type: ViewChildren, args: ['rangePickerInput',] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzAllowClear", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzBorderless", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzInline", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzOpen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzShowToday", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzShowNow", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzDatePickerComponent.prototype, "nzSeparator", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzDatePickerComponent.prototype, "nzBackdrop", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        // TODO: name is not proper
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.cellHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = PREFIX_CLASS;
    }
    /**
     * Hide "next" arrow in left panel,
     * hide "prev" arrow in right panel
     * @param direction
     * @param panelMode
     */
    enablePrevNext(direction, panelMode) {
        if (!this.showTimePicker &&
            panelMode === this.endPanelMode &&
            ((this.partType === 'left' && direction === 'next') || (this.partType === 'right' && direction === 'prev'))) {
            return false;
        }
        return true;
    }
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    onSelectDate(date) {
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
        // Display timeValue when value is null
        if (!this.value && timeValue) {
            value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
        }
        this.selectDate.emit(value);
    }
    onChooseMonth(value) {
        this.activeDate = this.activeDate.setMonth(value.getMonth());
        if (this.endPanelMode === 'month') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseYear(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'year') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseDecade(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'decade') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit('year');
        }
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
        // New Antd vesion has merged 'date' ant 'time' to one panel,
        // So there is not 'time' panel
        if (changes.panelMode && changes.panelMode.currentValue === 'time') {
            this.panelMode = 'date';
        }
    }
}
InnerPopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: `
    <div [class.ant-picker-datetime-panel]="showTimePicker">
      <div class="{{ prefixCls }}-{{ panelMode }}-panel">
        <ng-container [ngSwitch]="panelMode">
          <ng-container *ngSwitchCase="'decade'">
            <decade-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'decade')"
              [showSuperNextBtn]="enablePrevNext('next', 'decade')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></decade-header>
            <div class="{{ prefixCls }}-body">
              <decade-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                (valueChange)="onChooseDecade($event)"
                [disabledDate]="disabledDate"
              ></decade-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'year'">
            <year-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'year')"
              [showSuperNextBtn]="enablePrevNext('next', 'year')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></year-header>
            <div class="{{ prefixCls }}-body">
              <year-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseYear($event)"
                (cellHover)="cellHover.emit($event)"
              ></year-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'month'">
            <month-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'month')"
              [showSuperNextBtn]="enablePrevNext('next', 'month')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></month-header>
            <div class="{{ prefixCls }}-body">
              <month-table
                [value]="value"
                [activeDate]="activeDate"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseMonth($event)"
                (cellHover)="cellHover.emit($event)"
              ></month-table>
            </div>
          </ng-container>

          <ng-container *ngSwitchDefault>
            <date-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showSuperNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              [showPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></date-header>
            <div class="{{ prefixCls }}-body">
              <date-table
                [locale]="locale"
                [showWeek]="showWeek"
                [value]="value"
                [activeDate]="activeDate"
                [disabledDate]="disabledDate"
                [cellRender]="dateRender"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onSelectDate($event)"
                (cellHover)="cellHover.emit($event)"
              ></date-table>
            </div>
          </ng-container>
        </ng-container>
      </div>
      <ng-container *ngIf="showTimePicker && timeOptions">
        <nz-time-picker-panel
          [nzInDatePicker]="true"
          [ngModel]="value?.nativeDate"
          (ngModelChange)="onSelectTime($event)"
          [format]="$any(timeOptions.nzFormat)"
          [nzHourStep]="$any(timeOptions.nzHourStep)"
          [nzMinuteStep]="$any(timeOptions.nzMinuteStep)"
          [nzSecondStep]="$any(timeOptions.nzSecondStep)"
          [nzDisabledHours]="$any(timeOptions.nzDisabledHours)"
          [nzDisabledMinutes]="$any(timeOptions.nzDisabledMinutes)"
          [nzDisabledSeconds]="$any(timeOptions.nzDisabledSeconds)"
          [nzHideDisabledOptions]="!!timeOptions.nzHideDisabledOptions"
          [nzDefaultOpenValue]="$any(timeOptions.nzDefaultOpenValue)"
          [nzUse12Hours]="!!timeOptions.nzUse12Hours"
          [nzAddOn]="$any(timeOptions.nzAddOn)"
        ></nz-time-picker-panel>
        <!-- use [opened] to trigger time panel \`initPosition()\` -->
      </ng-container>
    </div>
  `
            },] }
];
InnerPopupComponent.propDecorators = {
    activeDate: [{ type: Input }],
    endPanelMode: [{ type: Input }],
    panelMode: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    timeOptions: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    value: [{ type: Input }],
    partType: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    headerChange: [{ type: Output }],
    selectDate: [{ type: Output }],
    selectTime: [{ type: Output }],
    cellHover: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class AbstractPanelHeader {
    constructor() {
        this.prefixCls = `ant-picker-header`;
        this.selectors = [];
        this.showSuperPreBtn = true;
        this.showSuperNextBtn = true;
        this.showPreBtn = true;
        this.showNextBtn = true;
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    superPreviousTitle() {
        return this.locale.previousYear;
    }
    previousTitle() {
        return this.locale.previousMonth;
    }
    superNextTitle() {
        return this.locale.nextYear;
    }
    nextTitle() {
        return this.locale.nextMonth;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-1));
    }
    superNext() {
        this.changeValue(this.value.addYears(1));
    }
    previous() {
        this.changeValue(this.value.addMonths(-1));
    }
    next() {
        this.changeValue(this.value.addMonths(1));
    }
    changeValue(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    changeMode(mode) {
        this.panelModeChange.emit(mode);
    }
    render() {
        if (this.value) {
            this.selectors = this.getSelectors();
        }
    }
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.selectors = this.getSelectors();
    }
    ngOnChanges(changes) {
        if (changes.value || changes.locale) {
            this.render();
        }
    }
}
AbstractPanelHeader.decorators = [
    { type: Directive }
];
AbstractPanelHeader.propDecorators = {
    value: [{ type: Input }],
    locale: [{ type: Input }],
    showSuperPreBtn: [{ type: Input }],
    showSuperNextBtn: [{ type: Input }],
    showPreBtn: [{ type: Input }],
    showNextBtn: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    valueChange: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DateHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-year-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            },
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.monthSelect,
                onClick: () => this.changeMode('month'),
                label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
            }
        ];
    }
}
DateHeaderComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'date-header',
                exportAs: 'dateHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            },] }
];
DateHeaderComponent.ctorParameters = () => [
    { type: DateHelperService }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class AbstractTable {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
        this.headRow = [];
        this.bodyRows = [];
        this.MAX_ROW = 6;
        this.MAX_COL = 7;
        this.prefixCls = 'ant-picker';
        this.activeDate = new CandyDate();
        this.showWeek = false;
        this.selectedValue = []; // Range ONLY
        this.hoverValue = []; // Range ONLY
        this.valueChange = new EventEmitter();
        this.cellHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
    }
    render() {
        if (this.activeDate) {
            this.headRow = this.makeHeadRow();
            this.bodyRows = this.makeBodyRows();
        }
    }
    trackByBodyRow(_index, item) {
        return item.trackByIndex;
    }
    trackByBodyColumn(_index, item) {
        return item.trackByIndex;
    }
    hasRangeValue() {
        var _a, _b;
        return ((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.hoverValue) === null || _b === void 0 ? void 0 : _b.length) > 0;
    }
    getClassMap(cell) {
        return {
            [`ant-picker-cell`]: true,
            [`ant-picker-cell-in-view`]: true,
            [`ant-picker-cell-selected`]: cell.isSelected,
            [`ant-picker-cell-disabled`]: cell.isDisabled,
            [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
            [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
            [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
            [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
            [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
            [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
            [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
            [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
            [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
            [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
            [`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
            [`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
        };
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
        if (changes.disabledDate ||
            changes.locale ||
            changes.showWeek ||
            this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    isDateRealChange(change) {
        if (change) {
            const previousValue = change.previousValue;
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => {
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue, currentValue);
            }
        }
        return false;
    }
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
}
AbstractTable.decorators = [
    { type: Directive }
];
AbstractTable.propDecorators = {
    prefixCls: [{ type: Input }],
    value: [{ type: Input }],
    locale: [{ type: Input }],
    activeDate: [{ type: Input }],
    showWeek: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    disabledDate: [{ type: Input }],
    cellRender: [{ type: Input }],
    fullCellRender: [{ type: Input }],
    valueChange: [{ type: Output }],
    cellHover: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DateTableComponent extends AbstractTable {
    constructor(i18n, dateHelper) {
        super();
        this.i18n = i18n;
        this.dateHelper = dateHelper;
    }
    changeValueFromInside(value) {
        // Only change date not change time
        this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
        this.valueChange.emit(this.activeDate);
        if (!this.activeDate.isSameMonth(this.value)) {
            this.render();
        }
    }
    makeHeadRow() {
        const weekDays = [];
        const start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
            const day = start.addDays(colIndex);
            weekDays.push({
                trackByIndex: null,
                value: day.nativeDate,
                title: this.dateHelper.format(day.nativeDate, 'E'),
                content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
                isSelected: false,
                isDisabled: false,
                onClick() { },
                onMouseEnter() { }
            });
        }
        return weekDays;
    }
    getVeryShortWeekFormat() {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }
    makeBodyRows() {
        const weekRows = [];
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let week = 0; week < this.MAX_ROW; week++) {
            const weekStart = firstDayOfMonth.addDays(week * 7);
            const row = {
                isActive: false,
                dateCells: [],
                trackByIndex: week
            };
            for (let day = 0; day < 7; day++) {
                const date = weekStart.addDays(day);
                const dateFormat = transCompatFormat(this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                const label = this.dateHelper.format(date.nativeDate, 'dd');
                const cell = {
                    trackByIndex: day,
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    cellRender: valueFunctionProp(this.cellRender, date),
                    fullCellRender: valueFunctionProp(this.fullCellRender, date),
                    content: `${date.getDate()}`,
                    onClick: () => this.changeValueFromInside(date),
                    onMouseEnter: () => this.cellHover.emit(date)
                };
                this.addCellProperty(cell, date);
                if (this.showWeek && !row.weekNum) {
                    row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isSameDay(this.value)) {
                    row.isActive = date.isSameDay(this.value);
                }
                row.dateCells.push(cell);
            }
            row.classMap = {
                [`ant-picker-week-panel-row`]: this.showWeek,
                [`ant-picker-week-panel-row-selected`]: this.showWeek && row.isActive
            };
            weekRows.push(row);
        }
        return weekRows;
    }
    addCellProperty(cell, date) {
        var _a;
        if (this.hasRangeValue() && !this.showWeek) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameDay(date)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameDay(date)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameDay(date);
                cell.isHoverEnd = endHover.isSameDay(date);
                cell.isLastCellInPanel = date.isLastDayOfMonth();
                cell.isFirstCellInPanel = date.isFirstDayOfMonth();
                cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeDay(date)) && date.isBeforeDay(endSelected);
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        cell.isToday = date.isToday();
        cell.isSelected = date.isSameDay(this.value);
        cell.isDisabled = !!((_a = this.disabledDate) === null || _a === void 0 ? void 0 : _a.call(this, date.nativeDate));
        cell.classMap = this.getClassMap(cell);
    }
    getClassMap(cell) {
        const date = new CandyDate(cell.value);
        return Object.assign(Object.assign({}, super.getClassMap(cell)), { [`ant-picker-cell-today`]: !!cell.isToday, [`ant-picker-cell-in-view`]: date.isSameMonth(this.activeDate) });
    }
}
DateTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                exportAs: 'dateTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            },] }
];
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: DateHelperService }
];
DateTableComponent.propDecorators = {
    locale: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DecadeHeaderComponent extends AbstractPanelHeader {
    previous() { }
    next() { }
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-100));
    }
    superNext() {
        this.changeValue(this.value.addYears(100));
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-decade-btn`,
                title: '',
                onClick: () => {
                    // noop
                },
                label: `${this.startYear}-${this.endYear}`
            }
        ];
    }
}
DecadeHeaderComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'decade-header',
                exportAs: 'decadeHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const MAX_ROW = 4;
const MAX_COL = 3;
class DecadeTableComponent extends AbstractTable {
    get startYear() {
        return parseInt(`${this.activeDate.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const decades = [];
        const currentYear = this.value && this.value.getYear();
        const startYear = this.startYear;
        const endYear = this.endYear;
        const previousYear = startYear - 10;
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: rowIndex
            };
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const start = previousYear + index * 10;
                const end = previousYear + index * 10 + 9;
                const content = `${start}-${end}`;
                const cell = {
                    trackByIndex: colIndex,
                    value: this.activeDate.setYear(start).nativeDate,
                    content,
                    title: content,
                    isDisabled: false,
                    isSelected: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: {},
                    onClick() { },
                    onMouseEnter() { }
                };
                cell.classMap = this.getClassMap(cell);
                cell.onClick = () => this.chooseDecade(start);
                index++;
                row.dateCells.push(cell);
            }
            decades.push(row);
        }
        return decades;
    }
    getClassMap(cell) {
        return {
            [`${this.prefixCls}-cell`]: true,
            [`${this.prefixCls}-cell-in-view`]: !cell.isBiggerThanEnd && !cell.isLowerThanStart,
            [`${this.prefixCls}-cell-selected`]: cell.isSelected,
            [`${this.prefixCls}-cell-disabled`]: cell.isDisabled
        };
    }
    chooseDecade(year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
    }
}
DecadeTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-table',
                exportAs: 'decadeTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class MonthHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            }
        ];
    }
}
MonthHeaderComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'month-header',
                exportAs: 'monthHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            },] }
];
MonthHeaderComponent.ctorParameters = () => [
    { type: DateHelperService }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class MonthTableComponent extends AbstractTable {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
        this.MAX_ROW = 4;
        this.MAX_COL = 3;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const months = [];
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: rowIndex
            };
            for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                const month = this.activeDate.setMonth(monthValue);
                const isDisabled = this.isDisabledMonth(month);
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                const cell = {
                    trackByIndex: colIndex,
                    value: month.nativeDate,
                    isDisabled,
                    isSelected: month.isSameMonth(this.value),
                    content,
                    title: content,
                    classMap: {},
                    cellRender: valueFunctionProp(this.cellRender, month),
                    fullCellRender: valueFunctionProp(this.fullCellRender, month),
                    onClick: () => this.chooseMonth(cell.value.getMonth()),
                    onMouseEnter: () => this.cellHover.emit(month)
                };
                this.addCellProperty(cell, month);
                row.dateCells.push(cell);
                monthValue++;
            }
            months.push(row);
        }
        return months;
    }
    isDisabledMonth(month) {
        if (!this.disabledDate) {
            return false;
        }
        const firstOfMonth = month.setDate(1);
        for (let date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
            if (!this.disabledDate(date.nativeDate)) {
                return false;
            }
        }
        return true;
    }
    addCellProperty(cell, month) {
        if (this.hasRangeValue()) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameMonth(month)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameMonth(month)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameMonth(month);
                cell.isHoverEnd = endHover.isSameMonth(month);
                cell.isLastCellInPanel = month.getMonth() === 11;
                cell.isFirstCellInPanel = month.getMonth() === 0;
                cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeMonth(month)) && (month === null || month === void 0 ? void 0 : month.isBeforeMonth(endSelected));
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        else if (month.isSameMonth(this.value)) {
            cell.isSelected = true;
        }
        cell.classMap = this.getClassMap(cell);
    }
    chooseMonth(month) {
        this.value = this.activeDate.setMonth(month);
        this.valueChange.emit(this.value);
    }
}
MonthTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            },] }
];
MonthTableComponent.ctorParameters = () => [
    { type: DateHelperService }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class YearHeaderComponent extends AbstractPanelHeader {
    get startYear() {
        return parseInt(`${this.value.getYear() / 10}`, 10) * 10;
    }
    get endYear() {
        return this.startYear + 9;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-10));
    }
    superNext() {
        this.changeValue(this.value.addYears(10));
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-year-btn`,
                title: '',
                onClick: () => this.changeMode('decade'),
                label: `${this.startYear}-${this.endYear}`
            }
        ];
    }
}
YearHeaderComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'year-header',
                exportAs: 'yearHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class YearTableComponent extends AbstractTable {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
        this.MAX_ROW = 4;
        this.MAX_COL = 3;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const currentYear = this.activeDate && this.activeDate.getYear();
        const startYear = parseInt(`${currentYear / 10}`, 10) * 10;
        const endYear = startYear + 9;
        const previousYear = startYear - 1;
        const years = [];
        let yearValue = 0;
        for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: rowIndex
            };
            for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                const yearNum = previousYear + yearValue;
                const year = this.activeDate.setYear(yearNum);
                const content = this.dateHelper.format(year.nativeDate, 'yyyy');
                const isDisabled = this.isDisabledYear(year);
                const cell = {
                    trackByIndex: colIndex,
                    value: year.nativeDate,
                    isDisabled,
                    isSameDecade: yearNum >= startYear && yearNum <= endYear,
                    isSelected: yearNum === (this.value && this.value.getYear()),
                    content,
                    title: content,
                    classMap: {},
                    isLastCellInPanel: year.getYear() === endYear,
                    isFirstCellInPanel: year.getYear() === startYear,
                    cellRender: valueFunctionProp(this.cellRender, year),
                    fullCellRender: valueFunctionProp(this.fullCellRender, year),
                    onClick: () => this.chooseYear(cell.value.getFullYear()),
                    onMouseEnter: () => this.cellHover.emit(year)
                };
                this.addCellProperty(cell, year);
                row.dateCells.push(cell);
                yearValue++;
            }
            years.push(row);
        }
        return years;
    }
    getClassMap(cell) {
        return Object.assign(Object.assign({}, super.getClassMap(cell)), { [`ant-picker-cell-in-view`]: !!cell.isSameDecade });
    }
    isDisabledYear(year) {
        if (!this.disabledDate) {
            return false;
        }
        const firstOfMonth = year.setMonth(0).setDate(1);
        for (let date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
            if (!this.disabledDate(date.nativeDate)) {
                return false;
            }
        }
        return true;
    }
    addCellProperty(cell, year) {
        if (this.hasRangeValue()) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameYear(year)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameYear(year)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameYear(year);
                cell.isHoverEnd = endHover.isSameYear(year);
                cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeYear(year)) && (year === null || year === void 0 ? void 0 : year.isBeforeYear(endSelected));
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        else if (year.isSameYear(this.value)) {
            cell.isSelected = true;
        }
        cell.classMap = this.getClassMap(cell);
    }
    chooseYear(year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
}
YearTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-table',
                exportAs: 'yearTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            },] }
];
YearTableComponent.ctorParameters = () => [
    { type: DateHelperService }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class LibPackerModule {
}
LibPackerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule],
                exports: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ],
                declarations: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzMonthPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'month';
    }
}
NzMonthPickerComponent.decorators = [
    { type: Directive, args: [{
                selector: 'nz-month-picker',
                exportAs: 'nzMonthPicker'
            },] }
];
NzMonthPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzRangePickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.isRange = true;
    }
}
NzRangePickerComponent.decorators = [
    { type: Directive, args: [{
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker'
            },] }
];
NzRangePickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzWeekPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'week';
    }
}
NzWeekPickerComponent.decorators = [
    { type: Directive, args: [{
                selector: 'nz-week-picker',
                exportAs: 'nzWeekPicker'
            },] }
];
NzWeekPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzYearPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'year';
    }
}
NzYearPickerComponent.decorators = [
    { type: Directive, args: [{
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker'
            },] }
];
NzYearPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDatePickerModule {
}
NzDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BidiModule,
                    CommonModule,
                    FormsModule,
                    OverlayModule,
                    LibPackerModule,
                    NzIconModule,
                    NzOverlayModule,
                    NzNoAnimationModule,
                    NzOutletModule,
                    NzTimePickerModule,
                    NzButtonModule,
                    LibPackerModule
                ],
                exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
                declarations: [
                    NzDatePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent,
                    NzRangePickerComponent,
                    CalendarFooterComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibPackerModule, NzDatePickerComponent, NzDatePickerModule, NzMonthPickerComponent, NzRangePickerComponent, NzWeekPickerComponent, NzYearPickerComponent, PREFIX_CLASS, getTimeConfig, isAllowedDate, isTimeValid, isTimeValidByConfig, transCompatFormat, AbstractPanelHeader as ɵAbstractPanelHeader, AbstractTable as ɵAbstractTable, CalendarFooterComponent as ɵCalendarFooterComponent, DateHeaderComponent as ɵDateHeaderComponent, DatePickerService as ɵDatePickerService, DateRangePopupComponent as ɵDateRangePopupComponent, DateTableComponent as ɵDateTableComponent, DecadeHeaderComponent as ɵDecadeHeaderComponent, DecadeTableComponent as ɵDecadeTableComponent, InnerPopupComponent as ɵInnerPopupComponent, MonthHeaderComponent as ɵMonthHeaderComponent, MonthTableComponent as ɵMonthTableComponent, YearHeaderComponent as ɵYearHeaderComponent, YearTableComponent as ɵYearTableComponent };
//# sourceMappingURL=ng-zorro-antd-date-picker.js.map
