import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { OverlayRef, OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { EventEmitter, Directive, ElementRef, ChangeDetectorRef, Renderer2, Component, ChangeDetectionStrategy, Optional, Inject, ViewChild, Output, Injector, TemplateRef, Injectable, SkipSelf, ViewContainerRef, Input, ContentChild, NgModule } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warn, warnDeprecation } from 'ng-zorro-antd/core/logger';
import { getElementOffset, isNotNil, isPromise, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, defer } from 'rxjs';
import { takeUntil, filter, take, startWith } from 'rxjs/operators';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { DOCUMENT, CommonModule } from '@angular/common';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { __awaiter, __rest, __decorate, __metadata } from 'tslib';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPipesModule } from 'ng-zorro-antd/pipes';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const noopFun = () => void 0;
const ɵ0 = noopFun;
class ModalOptions {
    constructor() {
        this.nzCentered = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzNoAnimation = false;
        this.nzAutofocus = 'auto';
        this.nzKeyboard = true;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzOkDanger = false;
        this.nzModalType = 'default';
        this.nzOnCancel = noopFun;
        this.nzOnOk = noopFun;
        // Confirm
        this.nzIconType = 'question-circle';
    }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const ZOOM_CLASS_NAME_MAP = {
    enter: 'ant-zoom-enter',
    enterActive: 'ant-zoom-enter-active',
    leave: 'ant-zoom-leave',
    leaveActive: 'ant-zoom-leave-active'
};
const FADE_CLASS_NAME_MAP = {
    enter: 'ant-fade-enter',
    enterActive: 'ant-fade-enter-active',
    leave: 'ant-fade-leave',
    leaveActive: 'ant-fade-leave-active'
};
const MODAL_MASK_CLASS_NAME = 'ant-modal-mask';
const NZ_CONFIG_MODULE_NAME = 'modal';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const nzModalAnimations = {
    modalContainer: trigger('modalContainer', [
        state('void, exit', style({})),
        state('enter', style({})),
        transition('* => enter', animate('.24s', style({}))),
        transition('* => void, * => exit', animate('.2s', style({})))
    ])
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}
function getValueWithConfig(userValue, configValue, defaultValue) {
    return typeof userValue === 'undefined' ? (typeof configValue === 'undefined' ? defaultValue : configValue) : userValue;
}
/**
 * Assign the params into the content component instance.
 * @deprecated Should use dependency injection to get the params for user
 * @breaking-change 12.0.0
 */
function setContentInstanceParams(instance, params) {
    Object.assign(instance, params);
}
function getConfigFromComponent(component) {
    const { nzCentered, nzMask, nzMaskClosable, nzClosable, nzOkLoading, nzOkDisabled, nzCancelDisabled, nzCancelLoading, nzKeyboard, nzNoAnimation, nzContent, nzComponentParams, nzFooter, nzZIndex, nzWidth, nzWrapClassName, nzClassName, nzStyle, nzTitle, nzCloseIcon, nzMaskStyle, nzBodyStyle, nzOkText, nzCancelText, nzOkType, nzOkDanger, nzIconType, nzModalType, nzOnOk, nzOnCancel, nzAfterOpen, nzAfterClose, nzCloseOnNavigation, nzAutofocus } = component;
    return {
        nzCentered,
        nzMask,
        nzMaskClosable,
        nzClosable,
        nzOkLoading,
        nzOkDisabled,
        nzCancelDisabled,
        nzCancelLoading,
        nzKeyboard,
        nzNoAnimation,
        nzContent,
        nzComponentParams,
        nzFooter,
        nzZIndex,
        nzWidth,
        nzWrapClassName,
        nzClassName,
        nzStyle,
        nzTitle,
        nzCloseIcon,
        nzMaskStyle,
        nzBodyStyle,
        nzOkText,
        nzCancelText,
        nzOkType,
        nzOkDanger,
        nzIconType,
        nzModalType,
        nzOnOk,
        nzOnCancel,
        nzAfterOpen,
        nzAfterClose,
        nzCloseOnNavigation,
        nzAutofocus
    };
}

function throwNzModalContentAlreadyAttachedError() {
    throw Error('Attempting to attach modal content after content is already attached');
}
class BaseModalContainerComponent extends BasePortalOutlet {
    constructor(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super();
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.render = render;
        this.overlayRef = overlayRef;
        this.nzConfigService = nzConfigService;
        this.config = config;
        this.animationType = animationType;
        this.animationStateChanged = new EventEmitter();
        this.containerClick = new EventEmitter();
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.state = 'enter';
        this.isStringContent = false;
        this.dir = 'ltr';
        this.elementFocusedBeforeModalWasOpened = null;
        this.mouseDown = false;
        this.oldMaskStyle = null;
        this.destroy$ = new Subject();
        this.document = document;
        this.dir = overlayRef.getDirection();
        this.isStringContent = typeof config.nzContent === 'string';
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateMaskClassname();
        });
    }
    get showMask() {
        const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
    }
    get maskClosable() {
        const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
    }
    onContainerClick(e) {
        if (e.target === e.currentTarget && !this.mouseDown && this.showMask && this.maskClosable) {
            this.containerClick.emit();
        }
    }
    onMousedown() {
        this.mouseDown = true;
    }
    onMouseup() {
        if (this.mouseDown) {
            setTimeout(() => {
                this.mouseDown = false;
            });
        }
    }
    onCloseClick() {
        this.cancelTriggered.emit();
    }
    onOkClick() {
        this.okTriggered.emit();
    }
    attachComponentPortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        this.setZIndexForBackdrop();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        this.setZIndexForBackdrop();
        return this.portalOutlet.attachTemplatePortal(portal);
    }
    attachStringContent() {
        this.savePreviouslyFocusedElement();
        this.setZIndexForBackdrop();
    }
    getNativeElement() {
        return this.elementRef.nativeElement;
    }
    animationDisabled() {
        return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
    }
    setModalTransformOrigin() {
        const modalElement = this.modalElementRef.nativeElement;
        if (this.elementFocusedBeforeModalWasOpened) {
            const previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
            const lastPosition = getElementOffset(this.elementFocusedBeforeModalWasOpened);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            const transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
        }
    }
    savePreviouslyFocusedElement() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this.document) {
            this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
            if (this.elementRef.nativeElement.focus) {
                Promise.resolve().then(() => this.elementRef.nativeElement.focus());
            }
        }
    }
    trapFocus() {
        const element = this.elementRef.nativeElement;
        if (this.config.nzAutofocus) {
            this.focusTrap.focusInitialElementWhenReady().then();
        }
        else {
            const activeElement = this.document.activeElement;
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    }
    restoreFocus() {
        const toFocus = this.elementFocusedBeforeModalWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            const activeElement = this.document.activeElement;
            const element = this.elementRef.nativeElement;
            if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
    setEnterAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        // Make sure to set the `TransformOrigin` style before set the modelElement's class names
        this.setModalTransformOrigin();
        const modalElement = this.modalElementRef.nativeElement;
        const backdropElement = this.overlayRef.backdropElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enterActive);
        if (backdropElement) {
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
        }
    }
    setExitAnimationClass() {
        const modalElement = this.modalElementRef.nativeElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leaveActive);
        this.setMaskExitAnimationClass();
    }
    setMaskExitAnimationClass(force = false) {
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.animationDisabled() || force) {
                // https://github.com/angular/components/issues/18645
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                return;
            }
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
        }
    }
    cleanAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        const backdropElement = this.overlayRef.backdropElement;
        const modalElement = this.modalElementRef.nativeElement;
        if (backdropElement) {
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enterActive);
        }
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enterActive);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leaveActive);
    }
    setZIndexForBackdrop() {
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (isNotNil(this.config.nzZIndex)) {
                this.render.setStyle(backdropElement, 'z-index', this.config.nzZIndex);
            }
        }
    }
    bindBackdropStyle() {
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.oldMaskStyle) {
                const styles = this.oldMaskStyle;
                Object.keys(styles).forEach(key => {
                    this.render.removeStyle(backdropElement, key);
                });
                this.oldMaskStyle = null;
            }
            this.setZIndexForBackdrop();
            if (typeof this.config.nzMaskStyle === 'object' && Object.keys(this.config.nzMaskStyle).length) {
                const styles = Object.assign({}, this.config.nzMaskStyle);
                Object.keys(styles).forEach(key => {
                    this.render.setStyle(backdropElement, key, styles[key]);
                });
                this.oldMaskStyle = styles;
            }
        }
    }
    updateMaskClassname() {
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.showMask) {
                backdropElement.classList.add(MODAL_MASK_CLASS_NAME);
            }
            else {
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
            }
        }
    }
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.cleanAnimationClass();
        this.animationStateChanged.emit(event);
    }
    onAnimationStart(event) {
        if (event.toState === 'enter') {
            this.setEnterAnimationClass();
            this.bindBackdropStyle();
        }
        else if (event.toState === 'exit') {
            this.setExitAnimationClass();
        }
        this.animationStateChanged.emit(event);
    }
    startExitAnimation() {
        this.state = 'exit';
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.setMaskExitAnimationClass(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
BaseModalContainerComponent.decorators = [
    { type: Directive }
];
BaseModalContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusTrapFactory },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: OverlayRef },
    { type: NzConfigService },
    { type: ModalOptions },
    { type: undefined },
    { type: String }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalConfirmContainerComponent extends BaseModalContainerComponent {
    constructor(i18n, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
        this.i18n = i18n;
        this.config = config;
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
    }
}
NzModalConfirmContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal-confirm-container',
                exportAs: 'nzModalConfirmContainer',
                template: `
    <div
      #modalElement
      role="document"
      class="ant-modal"
      (mousedown)="onMousedown()"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i nz-icon [nzType]="config.nzIconType!"></i>
              <span class="ant-modal-confirm-title">
                <ng-container *nzStringTemplateOutlet="config.nzTitle">
                  <span [innerHTML]="config.nzTitle"></span>
                </ng-container>
              </span>
              <div class="ant-modal-confirm-content">
                <ng-template cdkPortalOutlet></ng-template>
                <div *ngIf="isStringContent" [innerHTML]="config.nzContent"></div>
              </div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                *ngIf="config.nzCancelText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
                nz-button
                (click)="onCancel()"
                [nzLoading]="!!config.nzCancelLoading"
                [disabled]="config.nzCancelDisabled"
              >
                {{ config.nzCancelText || locale.cancelText }}
              </button>
              <button
                *ngIf="config.nzOkText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
                nz-button
                [nzType]="config.nzOkType!"
                (click)="onOk()"
                [nzLoading]="!!config.nzOkLoading"
                [disabled]="config.nzOkDisabled"
                [nzDanger]="config.nzOkDanger"
              >
                {{ config.nzOkText || locale.okText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
                animations: [nzModalAnimations.modalContainer],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: ChangeDetectionStrategy.Default,
                host: {
                    tabindex: '-1',
                    role: 'dialog',
                    '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                    '[class.ant-modal-wrap-rtl]': `dir === 'rtl'`,
                    '[class.ant-modal-centered]': 'config.nzCentered',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@modalContainer]': 'state',
                    '(@modalContainer.start)': 'onAnimationStart($event)',
                    '(@modalContainer.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    '(mouseup)': 'onMouseup()'
                }
            },] }
];
NzModalConfirmContainerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ElementRef },
    { type: FocusTrapFactory },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: OverlayRef },
    { type: NzConfigService },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzModalConfirmContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
    modalElementRef: [{ type: ViewChild, args: ['modalElement', { static: true },] }],
    cancelTriggered: [{ type: Output }],
    okTriggered: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalContainerComponent extends BaseModalContainerComponent {
    constructor(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
        this.config = config;
    }
}
NzModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal-container',
                exportAs: 'nzModalContainer',
                template: `
    <div
      #modalElement
      role="document"
      class="ant-modal"
      (mousedown)="onMousedown()"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div *ngIf="config.nzTitle" nz-modal-title></div>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <ng-template cdkPortalOutlet></ng-template>
          <div *ngIf="isStringContent" [innerHTML]="config.nzContent"></div>
        </div>
        <div
          *ngIf="config.nzFooter !== null"
          nz-modal-footer
          [modalRef]="modalRef"
          (cancelTriggered)="onCloseClick()"
          (okTriggered)="onOkClick()"
        ></div>
      </div>
    </div>
  `,
                animations: [nzModalAnimations.modalContainer],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: ChangeDetectionStrategy.Default,
                host: {
                    tabindex: '-1',
                    role: 'dialog',
                    '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                    '[class.ant-modal-wrap-rtl]': `dir === 'rtl'`,
                    '[class.ant-modal-centered]': 'config.nzCentered',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@modalContainer]': 'state',
                    '(@modalContainer.start)': 'onAnimationStart($event)',
                    '(@modalContainer.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    '(mouseup)': 'onMouseup()'
                }
            },] }
];
NzModalContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusTrapFactory },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: OverlayRef },
    { type: NzConfigService },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzModalContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
    modalElementRef: [{ type: ViewChild, args: ['modalElement', { static: true },] }]
};

class NzModalRef {
    constructor(overlayRef, config, containerInstance) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.containerInstance = containerInstance;
        this.componentInstance = null;
        this.state = 0 /* OPEN */;
        this.afterClose = new Subject();
        this.afterOpen = new Subject();
        containerInstance.animationStateChanged
            .pipe(filter(event => event.phaseName === 'done' && event.toState === 'enter'), take(1))
            .subscribe(() => {
            this.afterOpen.next();
            this.afterOpen.complete();
            if (config.nzAfterOpen instanceof EventEmitter) {
                config.nzAfterOpen.emit();
            }
        });
        containerInstance.animationStateChanged
            .pipe(filter(event => event.phaseName === 'done' && event.toState === 'exit'), take(1))
            .subscribe(() => {
            clearTimeout(this.closeTimeout);
            this._finishDialogClose();
        });
        containerInstance.containerClick.pipe(take(1)).subscribe(() => {
            const cancelable = !this.config.nzCancelLoading && !this.config.nzOkLoading;
            if (cancelable) {
                this.trigger("cancel" /* CANCEL */);
            }
        });
        overlayRef
            .keydownEvents()
            .pipe(filter(event => {
            return (this.config.nzKeyboard &&
                !this.config.nzCancelLoading &&
                !this.config.nzOkLoading &&
                event.keyCode === ESCAPE &&
                !hasModifierKey(event));
        }))
            .subscribe(event => {
            event.preventDefault();
            this.trigger("cancel" /* CANCEL */);
        });
        containerInstance.cancelTriggered.subscribe(() => this.trigger("cancel" /* CANCEL */));
        containerInstance.okTriggered.subscribe(() => this.trigger("ok" /* OK */));
        overlayRef.detachments().subscribe(() => {
            this.afterClose.next(this.result);
            this.afterClose.complete();
            if (config.nzAfterClose instanceof EventEmitter) {
                config.nzAfterClose.emit(this.result);
            }
            this.componentInstance = null;
            this.overlayRef.dispose();
        });
    }
    getContentComponent() {
        return this.componentInstance;
    }
    getElement() {
        return this.containerInstance.getNativeElement();
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        return this.trigger("ok" /* OK */);
    }
    triggerCancel() {
        return this.trigger("cancel" /* CANCEL */);
    }
    close(result) {
        if (this.state !== 0 /* OPEN */) {
            return;
        }
        this.result = result;
        this.containerInstance.animationStateChanged
            .pipe(filter(event => event.phaseName === 'start'), take(1))
            .subscribe(event => {
            this.overlayRef.detachBackdrop();
            this.closeTimeout = setTimeout(() => {
                this._finishDialogClose();
            }, event.totalTime + 100);
        });
        this.containerInstance.startExitAnimation();
        this.state = 1 /* CLOSING */;
    }
    updateConfig(config) {
        Object.assign(this.config, config);
        this.containerInstance.bindBackdropStyle();
        this.containerInstance.cdr.markForCheck();
    }
    getState() {
        return this.state;
    }
    getConfig() {
        return this.config;
    }
    getBackdropElement() {
        return this.overlayRef.backdropElement;
    }
    trigger(action) {
        return __awaiter(this, void 0, void 0, function* () {
            const trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
            const loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action];
            const loading = this.config[loadingKey];
            if (loading) {
                return;
            }
            if (trigger instanceof EventEmitter) {
                trigger.emit(this.getContentComponent());
            }
            else if (typeof trigger === 'function') {
                const result = trigger(this.getContentComponent());
                if (isPromise(result)) {
                    this.config[loadingKey] = true;
                    let doClose = false;
                    try {
                        doClose = yield result;
                    }
                    finally {
                        this.config[loadingKey] = false;
                        this.closeWhitResult(doClose);
                    }
                }
                else {
                    this.closeWhitResult(result);
                }
            }
        });
    }
    closeWhitResult(result) {
        if (result !== false) {
            this.close(result);
        }
    }
    _finishDialogClose() {
        this.state = 2 /* CLOSED */;
        this.overlayRef.dispose();
    }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalService {
    constructor(overlay, injector, nzConfigService, parentModal, directionality) {
        this.overlay = overlay;
        this.injector = injector;
        this.nzConfigService = nzConfigService;
        this.parentModal = parentModal;
        this.directionality = directionality;
        this.openModalsAtThisLevel = [];
        this.afterAllClosedAtThisLevel = new Subject();
        this.afterAllClose = defer(() => this.openModals.length ? this._afterAllClosed : this._afterAllClosed.pipe(startWith(undefined)));
    }
    get openModals() {
        return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
    }
    get _afterAllClosed() {
        const parent = this.parentModal;
        return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
    }
    create(config) {
        return this.open(config.nzContent, config);
    }
    closeAll() {
        this.closeModals(this.openModals);
    }
    confirm(options = {}, confirmType = 'confirm') {
        if ('nzFooter' in options) {
            warn(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        options.nzModalType = 'confirm';
        options.nzClassName = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.nzClassName || ''}`;
        return this.create(options);
    }
    info(options = {}) {
        return this.confirmFactory(options, 'info');
    }
    success(options = {}) {
        return this.confirmFactory(options, 'success');
    }
    error(options = {}) {
        return this.confirmFactory(options, 'error');
    }
    warning(options = {}) {
        return this.confirmFactory(options, 'warning');
    }
    open(componentOrTemplateRef, config) {
        const configMerged = applyConfigDefaults(config || {}, new ModalOptions());
        const overlayRef = this.createOverlay(configMerged);
        const modalContainer = this.attachModalContainer(overlayRef, configMerged);
        const modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
        modalContainer.modalRef = modalRef;
        this.openModals.push(modalRef);
        modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
        return modalRef;
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    closeModals(dialogs) {
        let i = dialogs.length;
        while (i--) {
            dialogs[i].close();
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    createOverlay(config) {
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        const overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global(),
            disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true),
            direction: getValueWithConfig(config.nzDirection, globalConfig.nzDirection, this.directionality.value)
        });
        if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
            overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
        }
        return this.overlay.create(overlayConfig);
    }
    attachModalContainer(overlayRef, config) {
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        const injector = Injector.create({
            parent: userInjector || this.injector,
            providers: [
                { provide: OverlayRef, useValue: overlayRef },
                { provide: ModalOptions, useValue: config }
            ]
        });
        const ContainerComponent = config.nzModalType === 'confirm'
            ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
                NzModalConfirmContainerComponent
            : // If the mode is not `confirm`, use `NzModalContainerComponent`
                NzModalContainerComponent;
        const containerPortal = new ComponentPortal(ContainerComponent, config.nzViewContainerRef, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, config) {
        const modalRef = new NzModalRef(overlayRef, config, modalContainer);
        if (componentOrTemplateRef instanceof TemplateRef) {
            modalContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, { $implicit: config.nzComponentParams, modalRef }));
        }
        else if (isNotNil(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
            const injector = this.createInjector(modalRef, config);
            const contentRef = modalContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.nzViewContainerRef, injector));
            setContentInstanceParams(contentRef.instance, config.nzComponentParams);
            modalRef.componentInstance = contentRef.instance;
        }
        else {
            modalContainer.attachStringContent();
        }
        return modalRef;
    }
    createInjector(modalRef, config) {
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        return Injector.create({
            parent: userInjector || this.injector,
            providers: [{ provide: NzModalRef, useValue: modalRef }]
        });
    }
    confirmFactory(options = {}, confirmType) {
        const iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
        }
        if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    }
    ngOnDestroy() {
        this.closeModals(this.openModalsAtThisLevel);
        this.afterAllClosedAtThisLevel.complete();
    }
}
NzModalService.decorators = [
    { type: Injectable }
];
NzModalService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: NzConfigService },
    { type: NzModalService, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzModalContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzModalContent]',
                exportAs: 'nzModalContent'
            },] }
];
NzModalContentDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalFooterDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.updateConfig({
                nzFooter: this.templateRef
            });
        }
    }
}
NzModalFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            },] }
];
NzModalFooterDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: Optional }] },
    { type: TemplateRef }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalTitleDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.updateConfig({
                nzTitle: this.templateRef
            });
        }
    }
}
NzModalTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzModalTitle]',
                exportAs: 'nzModalTitle'
            },] }
];
NzModalTitleDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: Optional }] },
    { type: TemplateRef }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalComponent {
    constructor(cdr, modal, viewContainerRef) {
        this.cdr = cdr;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.nzVisible = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzKeyboard = true;
        this.nzNoAnimation = false;
        this.nzCentered = false;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzOkDanger = false;
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        this.nzModalType = 'default';
        this.nzAutofocus = 'auto';
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnOk = new EventEmitter();
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnCancel = new EventEmitter();
        this.nzAfterOpen = new EventEmitter();
        this.nzAfterClose = new EventEmitter();
        this.nzVisibleChange = new EventEmitter();
        this.modalRef = null;
        this.destroy$ = new Subject();
    }
    set modalTitle(value) {
        if (value) {
            this.setTitleWithTemplate(value);
        }
    }
    set modalFooter(value) {
        if (value) {
            this.setFooterWithTemplate(value);
        }
    }
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    open() {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            const config = this.getConfig();
            this.modalRef = this.modal.create(config);
            // When the modal is implicitly closed (e.g. closeAll) the nzVisible needs to be set to the correct value and emit.
            this.modalRef.afterClose
                .asObservable()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.close();
            });
        }
    }
    close(result) {
        if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    }
    triggerCancel() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    }
    getContentComponent() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    }
    getElement() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    }
    getModalRef() {
        return this.modalRef;
    }
    setTitleWithTemplate(templateRef) {
        this.nzTitle = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the title in next tick
            Promise.resolve().then(() => {
                this.modalRef.updateConfig({
                    nzTitle: this.nzTitle
                });
            });
        }
    }
    setFooterWithTemplate(templateRef) {
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then(() => {
                this.modalRef.updateConfig({
                    nzFooter: this.nzFooter
                });
            });
        }
        this.cdr.markForCheck();
    }
    getConfig() {
        const componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent && !this.contentFromContentChild) {
            componentConfig.nzContent = this.contentTemplateRef;
            warnDeprecation('Usage `<ng-content></ng-content>` is deprecated, which will be removed in 12.0.0. Please instead use `<ng-template nzModalContent></ng-template>` to declare the content of the modal.');
        }
        else {
            componentConfig.nzContent = this.nzContent || this.contentFromContentChild;
        }
        return componentConfig;
    }
    ngOnChanges(changes) {
        const { nzVisible } = changes, otherChanges = __rest(changes, ["nzVisible"]);
        if (Object.keys(otherChanges).length && this.modalRef) {
            this.modalRef.updateConfig(getConfigFromComponent(this));
        }
        if (nzVisible) {
            if (this.nzVisible) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NzModalComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzModalService },
    { type: ViewContainerRef }
];
NzModalComponent.propDecorators = {
    nzMask: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzCloseOnNavigation: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzOkLoading: [{ type: Input }],
    nzOkDisabled: [{ type: Input }],
    nzCancelDisabled: [{ type: Input }],
    nzCancelLoading: [{ type: Input }],
    nzKeyboard: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzCentered: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzComponentParams: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzZIndex: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzCloseIcon: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzOkText: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzOkDanger: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzModalType: [{ type: Input }],
    nzAutofocus: [{ type: Input }],
    nzOnOk: [{ type: Input }, { type: Output }],
    nzOnCancel: [{ type: Input }, { type: Output }],
    nzAfterOpen: [{ type: Output }],
    nzAfterClose: [{ type: Output }],
    nzVisibleChange: [{ type: Output }],
    contentTemplateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    modalTitle: [{ type: ContentChild, args: [NzModalTitleDirective, { static: true, read: TemplateRef },] }],
    contentFromContentChild: [{ type: ContentChild, args: [NzModalContentDirective, { static: true, read: TemplateRef },] }],
    modalFooter: [{ type: ContentChild, args: [NzModalFooterDirective, { static: true, read: TemplateRef },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzKeyboard", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzModalComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzModalComponent.prototype, "nzCentered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDanger", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalCloseComponent {
    constructor(config) {
        this.config = config;
    }
}
NzModalCloseComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[nz-modal-close]',
                exportAs: 'NzModalCloseBuiltin',
                template: `
    <span class="ant-modal-close-x">
      <ng-container *nzStringTemplateOutlet="config.nzCloseIcon; let closeIcon">
        <i nz-icon [nzType]="closeIcon" class="ant-modal-close-icon"></i>
      </ng-container>
    </span>
  `,
                host: {
                    class: 'ant-modal-close',
                    'aria-label': 'Close'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NzModalCloseComponent.ctorParameters = () => [
    { type: ModalOptions }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalFooterComponent {
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.destroy$ = new Subject();
        if (Array.isArray(config.nzFooter)) {
            this.buttonsFooter = true;
            this.buttons = config.nzFooter.map(mergeDefaultOption);
        }
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
    }
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     */
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    }
    /**
     * Run function based on the type and set its `loading` prop if needed.
     */
    onButtonClick(options) {
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then(() => (options.loading = false)).catch(() => (options.loading = false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[nz-modal-footer]',
                exportAs: 'NzModalFooterBuiltin',
                template: `
    <ng-container *ngIf="config.nzFooter; else defaultFooterButtons">
      <ng-container *nzStringTemplateOutlet="config.nzFooter; context: { $implicit: config.nzComponentParams, modalRef: modalRef }">
        <div *ngIf="!buttonsFooter" [innerHTML]="config.nzFooter"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [nzLoading]="getButtonCallableProp(button, 'loading')"
            [disabled]="getButtonCallableProp(button, 'disabled')"
            [nzType]="button.type!"
            [nzDanger]="button.danger"
            [nzShape]="button.shape!"
            [nzSize]="button.size!"
            [nzGhost]="button.ghost!"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
      <button
        *ngIf="config.nzCancelText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
        nz-button
        (click)="onCancel()"
        [nzLoading]="!!config.nzCancelLoading"
        [disabled]="config.nzCancelDisabled"
      >
        {{ config.nzCancelText || locale.cancelText }}
      </button>
      <button
        *ngIf="config.nzOkText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
        nz-button
        [nzType]="config.nzOkType!"
        [nzDanger]="config.nzOkDanger"
        (click)="onOk()"
        [nzLoading]="!!config.nzOkLoading"
        [disabled]="config.nzOkDisabled"
      >
        {{ config.nzOkText || locale.okText }}
      </button>
    </ng-template>
  `,
                host: {
                    class: 'ant-modal-footer'
                },
                changeDetection: ChangeDetectionStrategy.Default
            },] }
];
NzModalFooterComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ModalOptions }
];
NzModalFooterComponent.propDecorators = {
    cancelTriggered: [{ type: Output }],
    okTriggered: [{ type: Output }],
    modalRef: [{ type: Input }]
};
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalTitleComponent {
    constructor(config) {
        this.config = config;
    }
}
NzModalTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[nz-modal-title]',
                exportAs: 'NzModalTitleBuiltin',
                template: `
    <div class="ant-modal-title">
      <ng-container *nzStringTemplateOutlet="config.nzTitle">
        <div [innerHTML]="config.nzTitle"></div>
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-modal-header'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NzModalTitleComponent.ctorParameters = () => [
    { type: ModalOptions }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalModule {
}
NzModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BidiModule,
                    OverlayModule,
                    NzOutletModule,
                    PortalModule,
                    NzI18nModule,
                    NzButtonModule,
                    NzIconModule,
                    NzPipesModule,
                    NzNoAnimationModule,
                    NzPipesModule
                ],
                exports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalTitleDirective],
                providers: [NzModalService],
                entryComponents: [NzModalContainerComponent, NzModalConfirmContainerComponent],
                declarations: [
                    NzModalComponent,
                    NzModalFooterDirective,
                    NzModalContentDirective,
                    NzModalCloseComponent,
                    NzModalFooterComponent,
                    NzModalTitleComponent,
                    NzModalTitleDirective,
                    NzModalContainerComponent,
                    NzModalConfirmContainerComponent,
                    NzModalComponent
                ]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalLegacyAPI {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseModalContainerComponent, FADE_CLASS_NAME_MAP, MODAL_MASK_CLASS_NAME, ModalOptions, NZ_CONFIG_MODULE_NAME, NzModalCloseComponent, NzModalComponent, NzModalConfirmContainerComponent, NzModalContainerComponent, NzModalContentDirective, NzModalFooterComponent, NzModalFooterDirective, NzModalLegacyAPI, NzModalModule, NzModalRef, NzModalService, NzModalTitleComponent, NzModalTitleDirective, ZOOM_CLASS_NAME_MAP, applyConfigDefaults, getConfigFromComponent, getValueWithConfig, nzModalAnimations, setContentInstanceParams, throwNzModalContentAlreadyAttachedError, ɵ0 };
//# sourceMappingURL=ng-zorro-antd-modal.js.map
