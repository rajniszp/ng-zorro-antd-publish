import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Input, Output, NgZone, ViewChild, ViewContainerRef, Renderer2, Inject, Optional, NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutosizeDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { isStyleSupport, measure, InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTextCopyComponent {
    constructor(host, cdr, clipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.clipboard = clipboard;
        this.i18n = i18n;
        this.copied = false;
        this.copyId = -1;
        this.nativeElement = this.host.nativeElement;
        this.copyTooltip = null;
        this.copedTooltip = null;
        this.copyIcon = 'copy';
        this.copedIcon = 'check';
        this.destroy$ = new Subject();
        this.icons = ['copy', 'check'];
        this.textCopy = new EventEmitter();
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.updateTooltips();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { tooltips, icons } = changes;
        if (tooltips) {
            this.updateTooltips();
        }
        if (icons) {
            this.updateIcons();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        const text = this.text;
        this.textCopy.emit(text);
        this.clipboard.copy(text);
        this.onCopied();
    }
    onCopied() {
        clearTimeout(this.copyId);
        this.copyId = setTimeout(() => {
            this.copied = false;
            this.cdr.detectChanges();
        }, 3000);
    }
    updateTooltips() {
        var _a, _b, _c, _d;
        if (this.tooltips === null) {
            this.copedTooltip = null;
            this.copyTooltip = null;
        }
        else if (Array.isArray(this.tooltips)) {
            const [copyTooltip, copedTooltip] = this.tooltips;
            this.copyTooltip = copyTooltip || ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.copy);
            this.copedTooltip = copedTooltip || ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.copied);
        }
        else {
            this.copyTooltip = (_c = this.locale) === null || _c === void 0 ? void 0 : _c.copy;
            this.copedTooltip = (_d = this.locale) === null || _d === void 0 ? void 0 : _d.copied;
        }
        this.cdr.markForCheck();
    }
    updateIcons() {
        const [copyIcon, copedIcon] = this.icons;
        this.copyIcon = copyIcon;
        this.copedIcon = copedIcon;
        this.cdr.markForCheck();
    }
}
NzTextCopyComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-text-copy',
                exportAs: 'nzTextCopy',
                template: `
    <button
      type="button"
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? copedTooltip : copyTooltip"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="copied ? copedIcon : copyIcon; let icon">
        <i nz-icon [nzType]="icon"></i>
      </ng-container>
    </button>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            },] }
];
NzTextCopyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Clipboard },
    { type: NzI18nService }
];
NzTextCopyComponent.propDecorators = {
    text: [{ type: Input }],
    tooltips: [{ type: Input }],
    icons: [{ type: Input }],
    textCopy: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTextEditComponent {
    constructor(zone, host, cdr, i18n) {
        this.zone = zone;
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        this.destroy$ = new Subject();
        this.icon = 'edit';
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter(true);
        this.nativeElement = this.host.nativeElement;
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    }
    confirm() {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    }
    onInput(event) {
        const target = event.target;
        this.currentText = target.value;
    }
    onEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    }
    onCancel() {
        this.currentText = this.beforeText;
        this.confirm();
    }
    focusAndSetValue() {
        this.zone.onStable.pipe(take(1), takeUntil(this.destroy$)).subscribe(() => {
            var _a;
            if ((_a = this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.textarea.nativeElement.focus();
                this.textarea.nativeElement.value = this.currentText || '';
                this.autosizeDirective.resizeToFitContent();
                this.cdr.markForCheck();
            }
        });
    }
}
NzTextEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                template: `
    <button
      *ngIf="!editing"
      nz-tooltip
      nz-trans-button
      class="ant-typography-edit"
      [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="icon; let icon">
        <i nz-icon [nzType]="icon"></i>
      </ng-container>
    </button>
    <ng-container *ngIf="editing">
      <textarea
        #textarea
        nz-input
        nzAutosize
        (input)="onInput($event)"
        (blur)="confirm()"
        (keydown.esc)="onCancel()"
        (keydown.enter)="onEnter($event)"
      ></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <i nz-icon nzType="enter"></i>
      </button>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            },] }
];
NzTextEditComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzTextEditComponent.propDecorators = {
    text: [{ type: Input }],
    icon: [{ type: Input }],
    tooltip: [{ type: Input }],
    startEditing: [{ type: Output }],
    endEditing: [{ type: Output }],
    textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
    autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'typography';
const EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';
class NzTypographyComponent {
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService, directionality) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.resizeService = resizeService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzCopyTooltips = undefined;
        this.nzCopyIcons = ['copy', 'check'];
        this.nzEditTooltip = undefined;
        this.nzEditIcon = 'edit';
        this.nzEllipsisRows = 1;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // This is not a two-way binding output with {@link nzEllipsis}
        this.nzOnEllipsis = new EventEmitter();
        this.expandableBtnElementCache = null;
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = true;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.dir = 'ltr';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
        this.document = document;
    }
    get hasEllipsisObservers() {
        return this.nzOnEllipsis.observers.length > 0;
    }
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
    }
    get hasOperationsWithEllipsis() {
        return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
    }
    get copyText() {
        return (typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent);
    }
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    onStartEditing() {
        this.editing = true;
    }
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
        this.cdr.markForCheck();
    }
    onExpand() {
        this.isEllipsis = false;
        this.expanded = true;
        this.nzExpandChange.emit();
        this.nzOnEllipsis.emit(false);
    }
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
            return false;
        }
        // make sure {@link nzOnEllipsis} works, will force use JS to calculations
        if (this.hasEllipsisObservers) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    }
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame(() => {
            this.syncEllipsis();
        });
    }
    getOriginContentViewRef() {
        const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            }
        };
    }
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        const fixedNodes = [this.textCopyRef, this.textEditRef].filter(e => e && e.nativeElement).map(e => e.nativeElement);
        const expandableBtnElement = this.getExpandableBtnElement();
        if (expandableBtnElement) {
            fixedNodes.push(expandableBtnElement);
        }
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
        removeView();
        this.ellipsisText = text;
        if (ellipsis !== this.isEllipsis) {
            this.isEllipsis = ellipsis;
            this.nzOnEllipsis.emit(ellipsis);
        }
        const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach(n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        });
        this.cdr.markForCheck();
    }
    // Need to create the element for calculation size before view init
    getExpandableBtnElement() {
        if (this.nzExpandable) {
            const expandText = this.locale ? this.locale.expand : '';
            const cache = this.expandableBtnElementCache;
            if (!cache || cache.innerText === expandText) {
                const el = this.document.createElement('a');
                el.className = EXPAND_ELEMENT_CLASSNAME;
                el.innerText = expandText;
                this.expandableBtnElementCache = el;
            }
            return this.expandableBtnElementCache;
        }
        else {
            this.expandableBtnElementCache = null;
            return null;
        }
    }
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.renderOnNextFrame());
        }
    }
    ngOnInit() {
        var _a;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows, nzSuffix } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.expandableBtnElementCache = null;
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.decorators = [
    { type: Component, args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded ||
            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
            canCssEllipsis ||
            (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template [ngTemplateOutlet]="contentTemplate" [ngTemplateOutletContext]="{ content: nzContent }"></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">{{ locale?.expand }}</a>
      </ng-template>
    </ng-container>

    <nz-text-edit
      *ngIf="nzEditable"
      [text]="nzContent"
      [icon]="nzEditIcon"
      [tooltip]="nzEditTooltip"
      (endEditing)="onEndEditing($event)"
      (startEditing)="onStartEditing()"
    ></nz-text-edit>

    <nz-text-copy
      *ngIf="nzCopyable && !editing"
      [text]="copyText"
      [tooltips]="nzCopyTooltips"
      [icons]="nzCopyIcons"
      (textCopy)="onTextCopy($event)"
    ></nz-text-copy>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-rtl]': 'dir === "rtl"',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-success]': 'nzType === "success"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            },] }
];
NzTypographyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Platform },
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzResizeService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: Input }],
    nzEditable: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzExpandable: [{ type: Input }],
    nzEllipsis: [{ type: Input }],
    nzCopyTooltips: [{ type: Input }],
    nzCopyIcons: [{ type: Input }],
    nzEditTooltip: [{ type: Input }],
    nzEditIcon: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzEllipsisRows: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCopyText: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzContentChange: [{ type: Output }],
    nzCopy: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnEllipsis: [{ type: Output }],
    textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Array)
], NzTypographyComponent.prototype, "nzCopyIcons", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditTooltip", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditIcon", void 0);
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTypographyModule {
}
NzTypographyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BidiModule,
                    CommonModule,
                    NzIconModule,
                    NzToolTipModule,
                    NzInputModule,
                    NzI18nModule,
                    NzTransButtonModule,
                    ClipboardModule,
                    NzOutletModule
                ],
                exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzTextCopyComponent, NzTextEditComponent, NzTypographyComponent, NzTypographyModule };
//# sourceMappingURL=ng-zorro-antd-typography.js.map
