import { Component, ElementRef, Input, Directive, NgZone, Optional, Inject, TemplateRef, Host, Self, InjectionToken, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, Output, ContentChild, ViewChild, ChangeDetectorRef, ContentChildren, QueryList, NgModule } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { FocusKeyManager, A11yModule } from '@angular/cdk/a11y';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { hasModifierKey, SPACE, ENTER, DOWN_ARROW, RIGHT_ARROW, UP_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/overlay';
import { Subject, animationFrameScheduler, asapScheduler, of, merge, fromEvent, Subscription } from 'rxjs';
import { takeUntil, auditTime, startWith, first, filter, delay } from 'rxjs/operators';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean, wrapIntoObservable } from 'ng-zorro-antd/core/util';
import { RouterLink, RouterLinkWithHref, NavigationEnd, Router } from '@angular/router';
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { PREFIX } from 'ng-zorro-antd/core/logger';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabAddButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.addIcon = 'plus';
        this.element = this.elementRef.nativeElement;
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
}
NzTabAddButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tab-add-button, button[nz-tab-add-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="addIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-nav-add',
                    'aria-label': 'Add tab',
                    type: 'button'
                }
            },] }
];
NzTabAddButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzTabAddButtonComponent.propDecorators = {
    addIcon: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabsInkBarDirective {
    constructor(elementRef, ngZone, animationMode) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.animationMode = animationMode;
        this.position = 'horizontal';
        this.animated = true;
    }
    get _animated() {
        return this.animationMode !== 'NoopAnimations' && this.animated;
    }
    alignToElement(element) {
        this.ngZone.runOutsideAngular(() => {
            reqAnimFrame(() => this.setStyles(element));
        });
    }
    setStyles(element) {
        const inkBar = this.elementRef.nativeElement;
        if (this.position === 'horizontal') {
            inkBar.style.top = '';
            inkBar.style.height = '';
            inkBar.style.left = this.getLeftPosition(element);
            inkBar.style.width = this.getElementWidth(element);
        }
        else {
            inkBar.style.left = '';
            inkBar.style.width = '';
            inkBar.style.top = this.getTopPosition(element);
            inkBar.style.height = this.getElementHeight(element);
        }
    }
    getLeftPosition(element) {
        return element ? (element.offsetLeft || 0) + 'px' : '0';
    }
    getElementWidth(element) {
        return element ? (element.offsetWidth || 0) + 'px' : '0';
    }
    getTopPosition(element) {
        return element ? (element.offsetTop || 0) + 'px' : '0';
    }
    getElementHeight(element) {
        return element ? (element.offsetHeight || 0) + 'px' : '0';
    }
}
NzTabsInkBarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-tabs-ink-bar, [nz-tabs-ink-bar]',
                host: {
                    class: 'ant-tabs-ink-bar',
                    '[class.ant-tabs-ink-bar-animated]': '_animated'
                }
            },] }
];
NzTabsInkBarDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzTabsInkBarDirective.propDecorators = {
    position: [{ type: Input }],
    animated: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
class NzTabLinkTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzTabLinkTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[nzTabLink]',
                exportAs: 'nzTabLinkTemplate'
            },] }
];
NzTabLinkTemplateDirective.ctorParameters = () => [
    { type: TemplateRef, decorators: [{ type: Host }] }
];
/**
 * This component is for catching `routerLink` directive.
 */
class NzTabLinkDirective {
    constructor(elementRef, routerLink, routerLinkWithHref) {
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
NzTabLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            },] }
];
NzTabLinkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: RouterLink, decorators: [{ type: Optional }, { type: Self }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }, { type: Self }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** Decorates the `ng-template` tags and reads out the template from it. */
class NzTabDirective {
}
NzTabDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tab]',
                exportAs: 'nzTab'
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
const NZ_TAB_SET = new InjectionToken('NZ_TAB_SET');
class NzTabComponent {
    constructor(closestTabSet) {
        this.closestTabSet = closestTabSet;
        this.nzTitle = '';
        this.nzClosable = false;
        this.nzCloseIcon = 'close';
        this.nzDisabled = false;
        this.nzForceRender = false;
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzContextmenu = new EventEmitter();
        this.template = null;
        this.isActive = false;
        this.position = null;
        this.origin = null;
        this.stateChanges = new Subject();
    }
    get content() {
        return this.template || this.contentTemplate;
    }
    get label() {
        var _a;
        return this.nzTitle || ((_a = this.nzTabLinkTemplateDirective) === null || _a === void 0 ? void 0 : _a.templateRef);
    }
    ngOnChanges(changes) {
        const { nzTitle, nzDisabled, nzForceRender } = changes;
        if (nzTitle || nzDisabled || nzForceRender) {
            this.stateChanges.next();
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
}
NzTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tab',
                exportAs: 'nzTab',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[nz-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
            },] }
];
NzTabComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NZ_TAB_SET,] }] }
];
NzTabComponent.propDecorators = {
    nzTitle: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzCloseIcon: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzForceRender: [{ type: Input }],
    nzSelect: [{ type: Output }],
    nzDeselect: [{ type: Output }],
    nzClick: [{ type: Output }],
    nzContextmenu: [{ type: Output }],
    nzTabLinkTemplateDirective: [{ type: ContentChild, args: [NzTabLinkTemplateDirective, { static: false },] }],
    template: [{ type: ContentChild, args: [NzTabDirective, { static: false, read: TemplateRef },] }],
    linkDirective: [{ type: ContentChild, args: [NzTabLinkDirective, { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: true },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabComponent.prototype, "nzClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabComponent.prototype, "nzForceRender", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabNavItemDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.active = false;
        this.el = elementRef.nativeElement;
        this.parentElement = this.el.parentElement;
    }
    focus() {
        this.el.focus();
    }
    get width() {
        return this.parentElement.offsetWidth;
    }
    get height() {
        return this.parentElement.offsetHeight;
    }
    get left() {
        return this.parentElement.offsetLeft;
    }
    get top() {
        return this.parentElement.offsetTop;
    }
}
NzTabNavItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzTabNavItem]'
            },] }
];
NzTabNavItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzTabNavItemDirective.propDecorators = {
    disabled: [{ type: Input }],
    tab: [{ type: Input }],
    active: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabNavOperationComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.items = [];
        this.addable = false;
        this.addIcon = 'plus';
        this.addClicked = new EventEmitter();
        this.selected = new EventEmitter();
        this.closeAnimationWaitTimeoutId = -1;
        this.menuOpened = false;
        this.element = this.elementRef.nativeElement;
    }
    onSelect(item) {
        if (!item.disabled) {
            // ignore nzCanDeactivate
            item.tab.nzClick.emit();
            this.selected.emit(item);
        }
    }
    onContextmenu(item, e) {
        if (!item.disabled) {
            item.tab.nzContextmenu.emit(e);
        }
    }
    showItems() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
        this.menuOpened = true;
        this.cdr.markForCheck();
    }
    menuVisChange(visible) {
        if (!visible) {
            this.closeAnimationWaitTimeoutId = setTimeout(() => {
                this.menuOpened = false;
                this.cdr.markForCheck();
            }, 150);
        }
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
    ngOnDestroy() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
    }
}
NzTabNavOperationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tab-nav-operation',
                exportAs: 'nzTabNavOperation',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <button
      nz-dropdown
      class="ant-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      nzOverlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="nzDropdown"
      [nzDropdownMenu]="menu"
      [nzOverlayStyle]="{ minWidth: '46px' }"
      [nzMatchWidthElement]="null"
      (nzVisibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <i nz-icon nzType="ellipsis"></i>
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu *ngIf="menuOpened">
        <li
          nz-menu-item
          *ngFor="let item of items"
          class="ant-tabs-dropdown-menu-item"
          [class.ant-tabs-dropdown-menu-item-disabled]="item.disabled"
          [nzSelected]="item.active"
          [nzDisabled]="item.disabled"
          (click)="onSelect(item)"
          (contextmenu)="onContextmenu(item, $event)"
        >
          <ng-container *nzStringTemplateOutlet="item.tab.label; context: { visible: false }">{{ item.tab.label }}</ng-container>
        </li>
      </ul>
    </nz-dropdown-menu>
    <button *ngIf="addable" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
  `,
                host: {
                    class: 'ant-tabs-nav-operations',
                    '[class.ant-tabs-nav-operations-hidden]': 'items.length === 0'
                }
            },] }
];
NzTabNavOperationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NzTabNavOperationComponent.propDecorators = {
    items: [{ type: Input }],
    addable: [{ type: Input }],
    addIcon: [{ type: Input }],
    addClicked: [{ type: Output }],
    selected: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
const CSS_TRANSFORM_TIME = 150;
class NzTabNavBarComponent {
    constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.viewportRuler = viewportRuler;
        this.nzResizeObserver = nzResizeObserver;
        this.dir = dir;
        this.indexFocused = new EventEmitter();
        this.selectFocusedIndex = new EventEmitter();
        this.addClicked = new EventEmitter();
        this.tabScroll = new EventEmitter();
        this.position = 'horizontal';
        this.addable = false;
        this.hideBar = false;
        this.addIcon = 'plus';
        this.inkBarAnimated = true;
        this.translate = null;
        this.transformX = 0;
        this.transformY = 0;
        this.pingLeft = false;
        this.pingRight = false;
        this.pingTop = false;
        this.pingBottom = false;
        this.hiddenItems = [];
        this.destroy$ = new Subject();
        this._selectedIndex = 0;
        this.wrapperWidth = 0;
        this.wrapperHeight = 0;
        this.scrollListWidth = 0;
        this.scrollListHeight = 0;
        this.operationWidth = 0;
        this.operationHeight = 0;
        this.addButtonWidth = 0;
        this.addButtonHeight = 0;
        this.selectedIndexChanged = false;
        this.lockAnimationTimeoutId = -1;
        this.cssTransformTimeWaitingId = -1;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        const newValue = coerceNumberProperty(value);
        if (this._selectedIndex !== newValue) {
            this._selectedIndex = value;
            this.selectedIndexChanged = true;
            if (this.keyManager) {
                this.keyManager.updateActiveItem(value);
            }
        }
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this.keyManager ? this.keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
            return;
        }
        this.keyManager.setActiveItem(value);
    }
    get showAddButton() {
        return this.hiddenItems.length === 0 && this.addable;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const dirChange = this.dir ? this.dir.change : of(null);
        const resize = this.viewportRuler.change(150);
        const realign = () => {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
        };
        this.keyManager = new FocusKeyManager(this.items)
            .withHorizontalOrientation(this.getLayoutDirection())
            .withWrap();
        this.keyManager.updateActiveItem(this.selectedIndex);
        reqAnimFrame(realign);
        merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
            .pipe(takeUntil(this.destroy$), auditTime(16, RESIZE_SCHEDULER))
            .subscribe(() => {
            realign();
        });
        merge(dirChange, resize, this.items.changes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            Promise.resolve().then(realign);
            this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
        });
        this.keyManager.change.pipe(takeUntil(this.destroy$)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this.setTabFocus(newFocusIndex);
            this.scrollToTab(this.keyManager.activeItem);
        });
    }
    ngAfterContentChecked() {
        if (this.selectedIndexChanged) {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.lockAnimationTimeoutId);
        clearTimeout(this.cssTransformTimeWaitingId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSelectedFromMenu(tab) {
        const tabIndex = this.items.toArray().findIndex(e => e === tab);
        if (tabIndex !== -1) {
            this.keyManager.updateActiveItem(tabIndex);
            if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);
                this.scrollToTab(tab);
            }
        }
    }
    onOffsetChange(e) {
        if (this.position === 'horizontal') {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformX >= 0 && e.x > 0) {
                    return;
                }
                if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformX = this.clampTransformX(this.transformX + e.x);
            this.setTransform(this.transformX, 0);
        }
        else {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformY >= 0 && e.y > 0) {
                    return;
                }
                if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformY = this.clampTransformY(this.transformY + e.y);
            this.setTransform(0, this.transformY);
        }
        this.lockAnimation();
        this.setVisibleRange();
        this.setPingStatus();
    }
    handleKeydown(event) {
        const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
        if (hasModifierKey(event) || !inNavigationList) {
            return;
        }
        switch (event.keyCode) {
            case LEFT_ARROW:
            case UP_ARROW:
            case RIGHT_ARROW:
            case DOWN_ARROW:
                this.lockAnimation();
                this.keyManager.onKeydown(event);
                break;
            case ENTER:
            case SPACE:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                }
                break;
            default:
                this.keyManager.onKeydown(event);
        }
    }
    isValidIndex(index) {
        if (!this.items) {
            return true;
        }
        const tab = this.items ? this.items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    scrollToTab(tab) {
        if (!this.items.find(e => e === tab)) {
            return;
        }
        const tabs = this.items.toArray();
        if (this.position === 'horizontal') {
            let newTransform = this.transformX;
            if (this.getLayoutDirection() === 'rtl') {
                const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
                if (right < this.transformX) {
                    newTransform = right;
                }
                else if (right + tab.width > this.transformX + this.wrapperWidth) {
                    newTransform = right + tab.width - this.wrapperWidth;
                }
            }
            else if (tab.left < -this.transformX) {
                newTransform = -tab.left;
            }
            else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                newTransform = -(tab.left + tab.width - this.wrapperWidth);
            }
            this.transformX = newTransform;
            this.transformY = 0;
            this.setTransform(newTransform, 0);
        }
        else {
            let newTransform = this.transformY;
            if (tab.top < -this.transformY) {
                newTransform = -tab.top;
            }
            else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                newTransform = -(tab.top + tab.height - this.wrapperHeight);
            }
            this.transformY = newTransform;
            this.transformX = 0;
            this.setTransform(0, newTransform);
        }
        clearTimeout(this.cssTransformTimeWaitingId);
        this.cssTransformTimeWaitingId = setTimeout(() => {
            this.setVisibleRange();
        }, CSS_TRANSFORM_TIME);
    }
    lockAnimation() {
        if (this.lockAnimationTimeoutId === -1) {
            this.ngZone.runOutsideAngular(() => {
                this.navListRef.nativeElement.style.transition = 'none';
                this.lockAnimationTimeoutId = setTimeout(() => {
                    this.navListRef.nativeElement.style.transition = '';
                    this.lockAnimationTimeoutId = -1;
                }, CSS_TRANSFORM_TIME);
            });
        }
    }
    setTransform(x, y) {
        this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    }
    clampTransformX(transform) {
        const scrollWidth = this.wrapperWidth - this.scrollListWidth;
        if (this.getLayoutDirection() === 'rtl') {
            return Math.max(Math.min(scrollWidth, transform), 0);
        }
        else {
            return Math.min(Math.max(scrollWidth, transform), 0);
        }
    }
    clampTransformY(transform) {
        return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
    }
    updateScrollListPosition() {
        this.resetSizes();
        this.transformX = this.clampTransformX(this.transformX);
        this.transformY = this.clampTransformY(this.transformY);
        this.setVisibleRange();
        this.setPingStatus();
        if (this.keyManager) {
            this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
            if (this.keyManager.activeItem) {
                this.scrollToTab(this.keyManager.activeItem);
            }
        }
    }
    resetSizes() {
        this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
        this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
        this.operationWidth = this.operationRef.getElementWidth();
        this.operationHeight = this.operationRef.getElementHeight();
        this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
        this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
        this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
        this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
    }
    alignInkBarToSelectedTab() {
        const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
        const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedItemElement) {
            /**
             * .ant-tabs-nav-list - Target offset parent element
             *   └──.ant-tabs-tab
             *        └──.ant-tabs-tab-btn - Currently focused element
             */
            this.inkBar.alignToElement(selectedItemElement.parentElement);
        }
    }
    setPingStatus() {
        const ping = {
            top: false,
            right: false,
            bottom: false,
            left: false
        };
        const navWarp = this.navWarpRef.nativeElement;
        if (this.position === 'horizontal') {
            if (this.getLayoutDirection() === 'rtl') {
                ping.right = this.transformX > 0;
                ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                ping.left = this.transformX < 0;
                ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
        }
        else {
            ping.top = this.transformY < 0;
            ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        Object.keys(ping).forEach(pos => {
            const className = `ant-tabs-nav-wrap-ping-${pos}`;
            if (ping[pos]) {
                navWarp.classList.add(className);
            }
            else {
                navWarp.classList.remove(className);
            }
        });
    }
    setVisibleRange() {
        let unit;
        let position;
        let transformSize;
        let basicSize;
        let tabContentSize;
        let addSize;
        const tabs = this.items.toArray();
        const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
        const getOffset = (index) => {
            let offset;
            const size = tabs[index] || DEFAULT_SIZE;
            if (position === 'right') {
                offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
            }
            else {
                offset = size[position];
            }
            return offset;
        };
        if (this.position === 'horizontal') {
            unit = 'width';
            basicSize = this.wrapperWidth;
            tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
            addSize = this.addButtonWidth;
            transformSize = Math.abs(this.transformX);
            if (this.getLayoutDirection() === 'rtl') {
                position = 'right';
                this.pingRight = this.transformX > 0;
                this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                this.pingLeft = this.transformX < 0;
                this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                position = 'left';
            }
        }
        else {
            unit = 'height';
            basicSize = this.wrapperHeight;
            tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
            addSize = this.addButtonHeight;
            position = 'top';
            transformSize = -this.transformY;
            this.pingTop = this.transformY < 0;
            this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        let mergedBasicSize = basicSize;
        if (tabContentSize + addSize > basicSize) {
            mergedBasicSize = basicSize - addSize;
        }
        if (!tabs.length) {
            this.hiddenItems = [];
            this.cdr.markForCheck();
            return;
        }
        const len = tabs.length;
        let endIndex = len;
        for (let i = 0; i < len; i += 1) {
            const offset = getOffset(i);
            const size = tabs[i] || DEFAULT_SIZE;
            if (offset + size[unit] > transformSize + mergedBasicSize) {
                endIndex = i - 1;
                break;
            }
        }
        let startIndex = 0;
        for (let i = len - 1; i >= 0; i -= 1) {
            const offset = getOffset(i);
            if (offset < transformSize) {
                startIndex = i + 1;
                break;
            }
        }
        const startHiddenTabs = tabs.slice(0, startIndex);
        const endHiddenTabs = tabs.slice(endIndex + 1);
        this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
        this.cdr.markForCheck();
    }
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    setTabFocus(_tabIndex) { }
    ngOnChanges(changes) {
        const { position } = changes;
        // The first will be aligning in ngAfterViewInit
        if (position && !position.isFirstChange()) {
            this.alignInkBarToSelectedTab();
            this.lockAnimation();
            this.updateScrollListPosition();
        }
    }
}
NzTabNavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tabs-nav',
                exportAs: 'nzTabsNav',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      class="ant-tabs-nav-wrap"
      [class.ant-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div class="ant-tabs-nav-list" #navList nzTabScrollList (offsetChange)="onOffsetChange($event)" (tabScroll)="tabScroll.emit($event)">
        <ng-content></ng-content>
        <button *ngIf="showAddButton" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
        <div nz-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <nz-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></nz-tab-nav-operation>
    <div class="ant-tabs-extra-content" *ngIf="extraTemplate">
      <ng-template [ngTemplateOutlet]="extraTemplate"></ng-template>
    </div>
  `,
                host: {
                    role: 'tablist',
                    class: 'ant-tabs-nav',
                    '(keydown)': 'handleKeydown($event)'
                }
            },] }
];
NzTabNavBarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ViewportRuler },
    { type: NzResizeObserver },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTabNavBarComponent.propDecorators = {
    indexFocused: [{ type: Output }],
    selectFocusedIndex: [{ type: Output }],
    addClicked: [{ type: Output }],
    tabScroll: [{ type: Output }],
    position: [{ type: Input }],
    addable: [{ type: Input }],
    hideBar: [{ type: Input }],
    addIcon: [{ type: Input }],
    inkBarAnimated: [{ type: Input }],
    extraTemplate: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    navWarpRef: [{ type: ViewChild, args: ['navWarp', { static: true },] }],
    navListRef: [{ type: ViewChild, args: ['navList', { static: true },] }],
    operationRef: [{ type: ViewChild, args: [NzTabNavOperationComponent, { static: true },] }],
    addBtnRef: [{ type: ViewChild, args: [NzTabAddButtonComponent, { static: false },] }],
    inkBar: [{ type: ViewChild, args: [NzTabsInkBarDirective, { static: true },] }],
    items: [{ type: ContentChildren, args: [NzTabNavItemDirective, { descendants: true },] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
    }
}
NzTabBodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tabpane',
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[attr.tabindex]': 'active ? 0 : -1',
                    '[attr.aria-hidden]': '!active',
                    '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
                    '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
                    '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
                    '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
                }
            },] }
];
NzTabBodyComponent.propDecorators = {
    content: [{ type: Input }],
    active: [{ type: Input }],
    tabPaneAnimated: [{ type: Input }],
    forceRender: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
class NzTabScrollListDirective {
    constructor(ngZone, elementRef) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.lastWheelDirection = null;
        this.lastWheelTimestamp = 0;
        this.lastTimestamp = 0;
        this.lastTimeDiff = 0;
        this.lastMixedWheel = 0;
        this.lastWheelPrevent = false;
        this.touchPosition = null;
        this.lastOffset = null;
        this.motion = -1;
        this.unsubscribe = () => void 0;
        this.offsetChange = new EventEmitter();
        this.tabScroll = new EventEmitter();
        this.onTouchEnd = (e) => {
            if (!this.touchPosition) {
                return;
            }
            const lastOffset = this.lastOffset;
            const lastTimeDiff = this.lastTimeDiff;
            this.lastOffset = this.touchPosition = null;
            if (lastOffset) {
                const distanceX = lastOffset.x / lastTimeDiff;
                const distanceY = lastOffset.y / lastTimeDiff;
                const absX = Math.abs(distanceX);
                const absY = Math.abs(distanceY);
                // Skip swipe if low distance
                if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
                    return;
                }
                let currentX = distanceX;
                let currentY = distanceY;
                this.motion = window.setInterval(() => {
                    if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
                        window.clearInterval(this.motion);
                        return;
                    }
                    currentX *= SPEED_OFF_MULTIPLE;
                    currentY *= SPEED_OFF_MULTIPLE;
                    this.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
                }, REFRESH_INTERVAL);
            }
        };
        this.onTouchMove = (e) => {
            if (!this.touchPosition) {
                return;
            }
            e.preventDefault();
            const { screenX, screenY } = e.touches[0];
            const offsetX = screenX - this.touchPosition.x;
            const offsetY = screenY - this.touchPosition.y;
            this.onOffset(offsetX, offsetY, e);
            const now = Date.now();
            this.lastTimeDiff = now - this.lastTimestamp;
            this.lastTimestamp = now;
            this.lastOffset = { x: offsetX, y: offsetY };
            this.touchPosition = { x: screenX, y: screenY };
        };
        this.onTouchStart = (e) => {
            const { screenX, screenY } = e.touches[0];
            this.touchPosition = { x: screenX, y: screenY };
            window.clearInterval(this.motion);
        };
        this.onWheel = (e) => {
            const { deltaX, deltaY } = e;
            let mixed;
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            if (absX === absY) {
                mixed = this.lastWheelDirection === 'x' ? deltaX : deltaY;
            }
            else if (absX > absY) {
                mixed = deltaX;
                this.lastWheelDirection = 'x';
            }
            else {
                mixed = deltaY;
                this.lastWheelDirection = 'y';
            }
            // Optimize mac touch scroll
            const now = Date.now();
            const absMixed = Math.abs(mixed);
            if (now - this.lastWheelTimestamp > 100 || absMixed - this.lastMixedWheel > 10) {
                this.lastWheelPrevent = false;
            }
            this.onOffset(-mixed, -mixed, e);
            if (e.defaultPrevented || this.lastWheelPrevent) {
                this.lastWheelPrevent = true;
            }
            this.lastWheelTimestamp = now;
            this.lastMixedWheel = absMixed;
        };
    }
    ngOnInit() {
        this.unsubscribe = this.ngZone.runOutsideAngular(() => {
            const el = this.elementRef.nativeElement;
            const wheel$ = fromEvent(el, 'wheel');
            const touchstart$ = fromEvent(el, 'touchstart');
            const touchmove$ = fromEvent(el, 'touchmove');
            const touchend$ = fromEvent(el, 'touchend');
            const subscription = new Subscription();
            subscription.add(this.subscribeWrap('wheel', wheel$, this.onWheel));
            subscription.add(this.subscribeWrap('touchstart', touchstart$, this.onTouchStart));
            subscription.add(this.subscribeWrap('touchmove', touchmove$, this.onTouchMove));
            subscription.add(this.subscribeWrap('touchend', touchend$, this.onTouchEnd));
            return () => {
                subscription.unsubscribe();
            };
        });
    }
    subscribeWrap(type, observable, handler) {
        return observable.subscribe(event => {
            this.tabScroll.emit({
                type,
                event
            });
            if (!event.defaultPrevented) {
                handler(event);
            }
        });
    }
    onOffset(x, y, event) {
        this.ngZone.run(() => {
            this.offsetChange.emit({
                x,
                y,
                event
            });
        });
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
NzTabScrollListDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzTabScrollList]'
            },] }
];
NzTabScrollListDirective.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef }
];
NzTabScrollListDirective.propDecorators = {
    offsetChange: [{ type: Output }],
    tabScroll: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabCloseButtonComponent {
    constructor() {
        this.closeIcon = 'close';
    }
}
NzTabCloseButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tab-close-button, button[nz-tab-close-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tab-remove',
                    'aria-label': 'Close tab',
                    type: 'button'
                }
            },] }
];
NzTabCloseButtonComponent.ctorParameters = () => [];
NzTabCloseButtonComponent.propDecorators = {
    closeIcon: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabChangeEvent {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'tabs';
let nextId = 0;
class NzTabSetComponent {
    constructor(nzConfigService, cdr, directionality, router) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.directionality = directionality;
        this.router = router;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzTabPosition = 'top';
        this.nzCanDeactivate = null;
        this.nzAddIcon = 'plus';
        this.nzTabBarStyle = null;
        this.nzType = 'line';
        this.nzSize = 'default';
        this.nzAnimated = true;
        this.nzTabBarGutter = undefined;
        this.nzHideAdd = false;
        this.nzCentered = false;
        this.nzHideAll = false;
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
        this.nzTabListScroll = new EventEmitter();
        this.nzClose = new EventEmitter();
        this.nzAdd = new EventEmitter();
        // Pick up only direct descendants under ivy rendering engine
        // We filter out only the tabs that belong to this tab set in `tabs`.
        this.allTabs = new QueryList();
        // All the direct tabs for this tab set
        this.tabs = new QueryList();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.indexToSelect = 0;
        this.selectedIndex = null;
        this.tabLabelSubscription = Subscription.EMPTY;
        this.tabsSubscription = Subscription.EMPTY;
        this.canDeactivateSubscription = Subscription.EMPTY;
        this.tabSetId = nextId++;
    }
    get nzSelectedIndex() {
        return this.selectedIndex;
    }
    set nzSelectedIndex(value) {
        this.indexToSelect = coerceNumberProperty(value, null);
    }
    get position() {
        return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
    }
    get addable() {
        return this.nzType === 'editable-card' && !this.nzHideAdd;
    }
    get closable() {
        return this.nzType === 'editable-card';
    }
    get line() {
        return this.nzType === 'line';
    }
    get inkBarAnimated() {
        return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
    }
    get tabPaneAnimated() {
        return (this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane));
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.tabs.destroy();
        this.tabLabelSubscription.unsubscribe();
        this.tabsSubscription.unsubscribe();
        this.canDeactivateSubscription.unsubscribe();
    }
    ngAfterContentInit() {
        Promise.resolve().then(() => {
            this.setUpRouter();
        });
        this.subscribeToTabLabels();
        this.subscribeToAllTabChanges();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.tabs.changes.subscribe(() => {
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this.selectedIndex) {
                const tabs = this.tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `nzSelectedIndexChange` event.
                        this.indexToSelect = this.selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this.selectedIndex !== indexToSelect) {
            const isFirstRun = this.selectedIndex == null;
            if (!isFirstRun) {
                this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this.tabs.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                if (!isFirstRun) {
                    this.nzSelectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this.selectedIndex;
            }
        });
        if (this.selectedIndex !== indexToSelect) {
            this.selectedIndex = indexToSelect;
            this.cdr.markForCheck();
        }
    }
    onClose(index, e) {
        e.preventDefault();
        e.stopPropagation();
        this.nzClose.emit({ index });
    }
    onAdd() {
        this.nzAdd.emit();
    }
    clampTabIndex(index) {
        return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
    }
    createChangeEvent(index) {
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.tabs && this.tabs.length) {
            event.tab = this.tabs.toArray()[index];
            this.tabs.forEach((tab, i) => {
                if (i !== index) {
                    tab.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    }
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
    }
    subscribeToAllTabChanges() {
        this.allTabs.changes.pipe(startWith(this.allTabs)).subscribe((tabs) => {
            this.tabs.reset(tabs.filter(tab => tab.closestTabSet === this));
            this.tabs.notifyOnChanges();
        });
    }
    canDeactivateFun(pre, next) {
        if (typeof this.nzCanDeactivate === 'function') {
            const observable = wrapIntoObservable(this.nzCanDeactivate(pre, next));
            return observable.pipe(first(), takeUntil(this.destroy$));
        }
        else {
            return of(true);
        }
    }
    clickNavItem(tab, index, e) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzClick.emit();
            if (!this.isRouterLinkClickEvent(index, e)) {
                this.setSelectedIndex(index);
            }
        }
    }
    isRouterLinkClickEvent(index, event) {
        var _a, _b;
        const target = event.target;
        if (this.nzLinkRouter) {
            return !!((_b = (_a = this.tabs.toArray()[index]) === null || _a === void 0 ? void 0 : _a.linkDirective) === null || _b === void 0 ? void 0 : _b.elementRef.nativeElement.contains(target));
        }
        else {
            return false;
        }
    }
    contextmenuNavItem(tab, e) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzContextmenu.emit(e);
        }
    }
    setSelectedIndex(index) {
        this.canDeactivateSubscription.unsubscribe();
        this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(can => {
            if (can) {
                this.nzSelectedIndex = index;
                this.tabNavBarRef.focusIndex = index;
                this.cdr.markForCheck();
            }
        });
    }
    getTabIndex(tab, index) {
        if (tab.nzDisabled) {
            return null;
        }
        return this.selectedIndex === index ? 0 : -1;
    }
    getTabContentId(i) {
        return `nz-tabs-${this.tabSetId}-tab-${i}`;
    }
    setUpRouter() {
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd), startWith(true), delay(0))
                .subscribe(() => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            });
        }
    }
    updateRouterActive() {
        if (this.router.navigated) {
            const index = this.findShouldActiveTabIndex();
            if (index !== this.selectedIndex) {
                this.setSelectedIndex(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    findShouldActiveTabIndex() {
        const tabs = this.tabs.toArray();
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex(tab => {
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        });
    }
    isLinkActive(router) {
        return (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false);
    }
    getTabContentMarginValue() {
        return -(this.nzSelectedIndex || 0) * 100;
    }
    getTabContentMarginLeft() {
        if (this.tabPaneAnimated) {
            if (this.dir !== 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
    getTabContentMarginRight() {
        if (this.tabPaneAnimated) {
            if (this.dir === 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
}
NzTabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.Default,
                providers: [
                    {
                        provide: NZ_TAB_SET,
                        useExisting: NzTabSetComponent
                    }
                ],
                template: `
    <nz-tabs-nav
      *ngIf="tabs.length"
      [ngStyle]="nzTabBarStyle"
      [selectedIndex]="nzSelectedIndex || 0"
      [inkBarAnimated]="inkBarAnimated"
      [addable]="addable"
      [addIcon]="nzAddIcon"
      [hideBar]="nzHideAll"
      [position]="position"
      [extraTemplate]="nzTabBarExtraContent"
      (tabScroll)="nzTabListScroll.emit($event)"
      (selectFocusedIndex)="setSelectedIndex($event)"
      (addClicked)="onAdd()"
    >
      <div
        class="ant-tabs-tab"
        [style.margin-right.px]="position === 'horizontal' ? nzTabBarGutter : null"
        [style.margin-bottom.px]="position === 'vertical' ? nzTabBarGutter : null"
        [class.ant-tabs-tab-active]="nzSelectedIndex === i"
        [class.ant-tabs-tab-disabled]="tab.nzDisabled"
        (click)="clickNavItem(tab, i, $event)"
        (contextmenu)="contextmenuNavItem(tab, $event)"
        *ngFor="let tab of tabs; let i = index"
      >
        <div
          role="tab"
          [attr.tabIndex]="getTabIndex(tab, i)"
          [attr.aria-disabled]="tab.nzDisabled"
          [attr.aria-selected]="nzSelectedIndex === i && !nzHideAll"
          [attr.aria-controls]="getTabContentId(i)"
          [disabled]="tab.nzDisabled"
          [tab]="tab"
          [active]="nzSelectedIndex === i"
          class="ant-tabs-tab-btn"
          nzTabNavItem
          cdkMonitorElementFocus
        >
          <ng-container *nzStringTemplateOutlet="tab.label; context: { visible: true }">{{ tab.label }}</ng-container>
          <button
            nz-tab-close-button
            *ngIf="tab.nzClosable && closable && !tab.nzDisabled"
            [closeIcon]="tab.nzCloseIcon"
            (click)="onClose(i, $event)"
          ></button>
        </div>
      </div>
    </nz-tabs-nav>
    <div class="ant-tabs-content-holder">
      <div
        class="ant-tabs-content"
        [class.ant-tabs-content-top]="nzTabPosition === 'top'"
        [class.ant-tabs-content-bottom]="nzTabPosition === 'bottom'"
        [class.ant-tabs-content-left]="nzTabPosition === 'left'"
        [class.ant-tabs-content-right]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
        [style.margin-left]="getTabContentMarginLeft()"
        [style.margin-right]="getTabContentMarginRight()"
      >
        <div
          nz-tab-body
          *ngFor="let tab of tabs; let i = index"
          [active]="nzSelectedIndex == i && !nzHideAll"
          [content]="tab.content"
          [forceRender]="tab.nzForceRender"
          [tabPaneAnimated]="tabPaneAnimated"
        ></div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-tabs',
                    '[class.ant-tabs-card]': `nzType === 'card' || nzType === 'editable-card'`,
                    '[class.ant-tabs-editable]': `nzType === 'editable-card'`,
                    '[class.ant-tabs-editable-card]': `nzType === 'editable-card'`,
                    '[class.ant-tabs-centered]': `nzCentered`,
                    '[class.ant-tabs-rtl]': `dir === 'rtl'`,
                    '[class.ant-tabs-top]': `nzTabPosition === 'top'`,
                    '[class.ant-tabs-bottom]': `nzTabPosition === 'bottom'`,
                    '[class.ant-tabs-left]': `nzTabPosition === 'left'`,
                    '[class.ant-tabs-right]': `nzTabPosition === 'right'`,
                    '[class.ant-tabs-default]': `nzSize === 'default'`,
                    '[class.ant-tabs-small]': `nzSize === 'small'`,
                    '[class.ant-tabs-large]': `nzSize === 'large'`
                }
            },] }
];
NzTabSetComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: Router, decorators: [{ type: Optional }] }
];
NzTabSetComponent.propDecorators = {
    nzSelectedIndex: [{ type: Input }],
    nzTabPosition: [{ type: Input }],
    nzTabBarExtraContent: [{ type: Input }],
    nzCanDeactivate: [{ type: Input }],
    nzAddIcon: [{ type: Input }],
    nzTabBarStyle: [{ type: Input }],
    nzType: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzAnimated: [{ type: Input }],
    nzTabBarGutter: [{ type: Input }],
    nzHideAdd: [{ type: Input }],
    nzCentered: [{ type: Input }],
    nzHideAll: [{ type: Input }],
    nzLinkRouter: [{ type: Input }],
    nzLinkExact: [{ type: Input }],
    nzSelectChange: [{ type: Output }],
    nzSelectedIndexChange: [{ type: Output }],
    nzTabListScroll: [{ type: Output }],
    nzClose: [{ type: Output }],
    nzAdd: [{ type: Output }],
    allTabs: [{ type: ContentChildren, args: [NzTabComponent, { descendants: true },] }],
    tabNavBarRef: [{ type: ViewChild, args: [NzTabNavBarComponent, { static: false },] }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTabSetComponent.prototype, "nzType", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTabSetComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzAnimated", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Number)
], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTabSetComponent.prototype, "nzHideAdd", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTabSetComponent.prototype, "nzCentered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzHideAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkExact", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DIRECTIVES = [
    NzTabSetComponent,
    NzTabComponent,
    NzTabNavBarComponent,
    NzTabNavItemDirective,
    NzTabsInkBarDirective,
    NzTabScrollListDirective,
    NzTabNavOperationComponent,
    NzTabAddButtonComponent,
    NzTabCloseButtonComponent,
    NzTabDirective,
    NzTabBodyComponent,
    NzTabLinkDirective,
    NzTabLinkTemplateDirective
];
class NzTabsModule {
}
NzTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DIRECTIVES],
                exports: [DIRECTIVES],
                imports: [
                    BidiModule,
                    CommonModule,
                    ObserversModule,
                    NzIconModule,
                    NzOutletModule,
                    PlatformModule,
                    A11yModule,
                    CdkScrollableModule,
                    NzDropDownModule
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

export { NZ_TAB_SET, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLinkDirective, NzTabLinkTemplateDirective, NzTabSetComponent, NzTabsModule, NzTabAddButtonComponent as ɵNzTabAddButtonComponent, NzTabBodyComponent as ɵNzTabBodyComponent, NzTabCloseButtonComponent as ɵNzTabCloseButtonComponent, NzTabNavBarComponent as ɵNzTabNavBarComponent, NzTabNavItemDirective as ɵNzTabNavItemDirective, NzTabNavOperationComponent as ɵNzTabNavOperationComponent, NzTabScrollListDirective as ɵNzTabScrollListDirective, NzTabsInkBarDirective as ɵNzTabsInkBarDirective };
//# sourceMappingURL=ng-zorro-antd-tabs.js.map
