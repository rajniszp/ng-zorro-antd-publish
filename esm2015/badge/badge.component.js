/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { zoomBadgeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { badgePresetColors } from './preset-colors';
const NZ_CONFIG_MODULE_NAME = 'badge';
export class NzBadgeComponent {
    constructor(nzConfigService, renderer, cdr, elementRef, directionality, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.showSup = false;
        this.presetColor = null;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzStandalone = false;
        this.nzDot = false;
        this.nzOverflowCount = 99;
        this.nzColor = undefined;
        this.nzStyle = null;
        this.nzText = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-badge');
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.prepareBadgeForRtl();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.prepareBadgeForRtl();
    }
    ngOnChanges(changes) {
        const { nzColor, nzShowDot, nzDot, nzCount, nzShowZero } = changes;
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
        if (nzShowDot || nzDot || nzCount || nzShowZero) {
            this.showSup = (this.nzShowDot && this.nzDot) || this.nzCount > 0 || (this.nzCount <= 0 && this.nzShowZero);
        }
    }
    prepareBadgeForRtl() {
        if (this.isRtlLayout) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-rtl');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-rtl');
        }
    }
    get isRtlLayout() {
        return this.dir === 'rtl';
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                template: `
    <ng-container *ngIf="nzStatus || nzColor">
      <span
        class="ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}"
        [style.background]="!presetColor && nzColor"
        [ngStyle]="nzStyle"
      ></span>
      <span class="ant-badge-status-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    </ng-container>
    <ng-content></ng-content>
    <ng-container *nzStringTemplateOutlet="nzCount">
      <nz-badge-sup
        *ngIf="showSup"
        [nzOffset]="nzOffset"
        [nzTitle]="nzTitle"
        [nzStyle]="nzStyle"
        [nzDot]="nzDot"
        [nzOverflowCount]="nzOverflowCount"
        [disableAnimation]="!!(nzStandalone || nzStatus || nzColor || noAnimation?.nzNoAnimation)"
        [nzCount]="nzCount"
        [noAnimation]="!!noAnimation?.nzNoAnimation"
      ></nz-badge-sup>
    </ng-container>
  `,
                host: {
                    '[class.ant-badge-status]': 'nzStatus',
                    '[class.ant-badge-not-a-wrapper]': '!!(nzStandalone || nzStatus || nzColor)'
                }
            },] }
];
NzBadgeComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzBadgeComponent.propDecorators = {
    nzShowZero: [{ type: Input }],
    nzShowDot: [{ type: Input }],
    nzStandalone: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzText: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCount: [{ type: Input }],
    nzOffset: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzBadgeComponent.prototype, "nzShowZero", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzShowDot", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzStandalone", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzDot", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Number)
], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzBadgeComponent.prototype, "nzColor", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFHVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELE1BQU0scUJBQXFCLEdBQWdCLE9BQU8sQ0FBQztBQXdDbkQsTUFBTSxPQUFPLGdCQUFnQjtJQXVCM0IsWUFDUyxlQUFnQyxFQUMvQixRQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUFzQixFQUNWLGNBQThCLEVBQ3ZCLFdBQW9DO1FBTHhELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixtQkFBYyxHQUFkLGNBQWMs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QixRQUFRLEVBQUUsU0FBUztnQkFDbkIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsVUFBVTtvQkFDdEMsaUNBQWlDLEVBQUUseUNBQXlDO2lCQUM3RTthQUNGOzs7WUFoRHFCLGVBQWU7WUFObkMsU0FBUztZQVRULGlCQUFpQjtZQUVqQixVQUFVO1lBTFEsY0FBYyx1QkErRjdCLFFBQVE7WUE1RUosc0JBQXNCLHVCQTZFMUIsSUFBSSxZQUFJLFFBQVE7Ozt5QkFuQmxCLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO29CQUNMLEtBQUs7OEJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOztBQVhtQjtJQUFmLFlBQVksRUFBRTs7b0RBQTZCO0FBQzVCO0lBQWYsWUFBWSxFQUFFOzttREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7O3NEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7K0NBQWU7QUFDaEI7SUFBYixVQUFVLEVBQUU7O3lEQUE4QjtBQUM3QjtJQUFiLFVBQVUsRUFBRTs7aURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgem9vbUJhZGdlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBiYWRnZVByZXNldENvbG9ycyB9IGZyb20gJy4vcHJlc2V0LWNvbG9ycyc7XG5pbXBvcnQgeyBOekJhZGdlU3RhdHVzVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2JhZGdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYmFkZ2UnLFxuICBleHBvcnRBczogJ256QmFkZ2UnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmFkZ2VNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelN0YXR1cyB8fCBuekNvbG9yXCI+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImFudC1iYWRnZS1zdGF0dXMtZG90IGFudC1iYWRnZS1zdGF0dXMte3sgbnpTdGF0dXMgfHwgcHJlc2V0Q29sb3IgfX1cIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCIhcHJlc2V0Q29sb3IgJiYgbnpDb2xvclwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIm56U3R5bGVcIlxuICAgICAgPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWJhZGdlLXN0YXR1cy10ZXh0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRleHRcIj57eyBuelRleHQgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q291bnRcIj5cbiAgICAgIDxuei1iYWRnZS1zdXBcbiAgICAgICAgKm5nSWY9XCJzaG93U3VwXCJcbiAgICAgICAgW256T2Zmc2V0XT1cIm56T2Zmc2V0XCJcbiAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXG4gICAgICAgIFtuelN0eWxlXT1cIm56U3R5bGVcIlxuICAgICAgICBbbnpEb3RdPVwibnpEb3RcIlxuICAgICAgICBbbnpPdmVyZmxvd0NvdW50XT1cIm56T3ZlcmZsb3dDb3VudFwiXG4gICAgICAgIFtkaXNhYmxlQW5pbWF0aW9uXT1cIiEhKG56U3RhbmRhbG9uZSB8fCBuelN0YXR1cyB8fCBuekNvbG9yIHx8IG5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uKVwiXG4gICAgICAgIFtuekNvdW50XT1cIm56Q291bnRcIlxuICAgICAgICBbbm9BbmltYXRpb25dPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICA+PC9uei1iYWRnZS1zdXA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1iYWRnZS1zdGF0dXNdJzogJ256U3RhdHVzJyxcbiAgICAnW2NsYXNzLmFudC1iYWRnZS1ub3QtYS13cmFwcGVyXSc6ICchIShuelN0YW5kYWxvbmUgfHwgbnpTdGF0dXMgfHwgbnpDb2xvciknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1plcm86IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0RvdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEb3Q6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U3RhbmRhbG9uZTogQm9vbGVhbklucHV0O1xuICBzaG93U3VwID0gZmFsc2U7XG4gIHByZXNldENvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3daZXJvOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dEb3QgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTdGFuZGFsb25lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdCA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56T3ZlcmZsb3dDb3VudDogbnVtYmVyID0gOTk7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpDb2xvcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRleHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRpdGxlPzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpTdGF0dXM/OiBOekJhZGdlU3RhdHVzVHlwZSB8IHN0cmluZztcbiAgQElucHV0KCkgbnpDb3VudD86IG51bWJlciB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIEBJbnB1dCgpIG56T2Zmc2V0PzogW251bWJlciwgbnVtYmVyXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1iYWRnZScpO1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLnByZXBhcmVCYWRnZUZvclJ0bCgpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLnByZXBhcmVCYWRnZUZvclJ0bCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpDb2xvciwgbnpTaG93RG90LCBuekRvdCwgbnpDb3VudCwgbnpTaG93WmVybyB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpDb2xvcikge1xuICAgICAgdGhpcy5wcmVzZXRDb2xvciA9IHRoaXMubnpDb2xvciAmJiBiYWRnZVByZXNldENvbG9ycy5pbmRleE9mKHRoaXMubnpDb2xvcikgIT09IC0xID8gdGhpcy5uekNvbG9yIDogbnVsbDtcbiAgICB9XG4gICAgaWYgKG56U2hvd0RvdCB8fCBuekRvdCB8fCBuekNvdW50IHx8IG56U2hvd1plcm8pIHtcbiAgICAgIHRoaXMuc2hvd1N1cCA9ICh0aGlzLm56U2hvd0RvdCAmJiB0aGlzLm56RG90KSB8fCB0aGlzLm56Q291bnQhID4gMCB8fCAodGhpcy5uekNvdW50ISA8PSAwICYmIHRoaXMubnpTaG93WmVybyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlQmFkZ2VGb3JSdGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSdGxMYXlvdXQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2UtcnRsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2UtcnRsJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzUnRsTGF5b3V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpciA9PT0gJ3J0bCc7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==