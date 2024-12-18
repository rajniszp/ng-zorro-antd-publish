/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { NzButtonType } from 'ng-zorro-antd/button';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { NzModalLegacyAPI } from './modal-legacy-api';
import { NzModalRef } from './modal-ref';
import { ModalButtonOptions, ModalTypes, OnClickCallback, StyleObjectLike } from './modal-types';
import { NzModalService } from './modal.service';
export declare class NzModalComponent<T = NzSafeAny, R = NzSafeAny> implements OnChanges, NzModalLegacyAPI<T, R>, OnDestroy {
    private cdr;
    private modal;
    private viewContainerRef;
    static ngAcceptInputType_nzMask: BooleanInput;
    static ngAcceptInputType_nzMaskClosable: BooleanInput;
    static ngAcceptInputType_nzCloseOnNavigation: BooleanInput;
    static ngAcceptInputType_nzVisible: BooleanInput;
    static ngAcceptInputType_nzClosable: BooleanInput;
    static ngAcceptInputType_nzOkLoading: BooleanInput;
    static ngAcceptInputType_nzOkDisabled: BooleanInput;
    static ngAcceptInputType_nzCancelDisabled: BooleanInput;
    static ngAcceptInputType_nzCancelLoading: BooleanInput;
    static ngAcceptInputType_nzKeyboard: BooleanInput;
    static ngAcceptInputType_nzNoAnimation: BooleanInput;
    static ngAcceptInputType_nzOkDanger: BooleanInput;
    static ngAcceptInputType_nzCentered: BooleanInput;
    nzMask?: boolean;
    nzMaskClosable?: boolean;
    nzCloseOnNavigation?: boolean;
    nzVisible: boolean;
    nzClosable: boolean;
    nzOkLoading: boolean;
    nzOkDisabled: boolean;
    nzCancelDisabled: boolean;
    nzCancelLoading: boolean;
    nzKeyboard: boolean;
    nzNoAnimation: boolean;
    nzCentered: boolean;
    nzContent?: string | TemplateRef<{}> | Type<T>;
    nzComponentParams?: T;
    nzFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    nzZIndex: number;
    nzWidth: number | string;
    nzWrapClassName?: string;
    nzClassName?: string;
    nzStyle?: object;
    nzTitle?: string | TemplateRef<{}>;
    nzCloseIcon: string | TemplateRef<void>;
    nzMaskStyle?: StyleObjectLike;
    nzBodyStyle?: StyleObjectLike;
    nzOkText?: string | null;
    nzCancelText?: string | null;
    nzOkType: NzButtonType;
    nzOkDanger: boolean;
    nzIconType: string;
    nzModalType: ModalTypes;
    nzAutofocus: 'ok' | 'cancel' | 'auto' | null;
    readonly nzOnOk: EventEmitter<T> | OnClickCallback<T> | NzSafeAny;
    readonly nzOnCancel: EventEmitter<T> | OnClickCallback<T> | NzSafeAny;
    readonly nzAfterOpen: EventEmitter<void>;
    readonly nzAfterClose: EventEmitter<R>;
    readonly nzVisibleChange: EventEmitter<boolean>;
    contentTemplateRef: TemplateRef<{}>;
    set modalTitle(value: TemplateRef<NzSafeAny>);
    contentFromContentChild: TemplateRef<NzSafeAny>;
    set modalFooter(value: TemplateRef<NzSafeAny>);
    private modalRef;
    private destroy$;
    get afterOpen(): Observable<void>;
    get afterClose(): Observable<R>;
    constructor(cdr: ChangeDetectorRef, modal: NzModalService, viewContainerRef: ViewContainerRef);
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getContentComponent(): T | void;
    getElement(): HTMLElement | void;
    getModalRef(): NzModalRef | null;
    private setTitleWithTemplate;
    private setFooterWithTemplate;
    private getConfig;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
