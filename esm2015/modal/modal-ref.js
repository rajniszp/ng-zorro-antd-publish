import { __awaiter } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { EventEmitter } from '@angular/core';
import { isPromise } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
export class NzModalRef {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRztBQUNILE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBaUI5QyxNQUFNLE9BQU8sVUFBVTtJQVNyQixZQUFvQixVQUFzQixFQUFVLE1BQW9CLEVBQVMsaUJBQThDO1FBQTNHLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtRQVIvSCxzQkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsVUFBSyxnQkFBbUM7UUFDeEMsZUFBVSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBS3ZDLGlCQUFpQixDQUFDLHFCQUFxQjthQUNwQyxJQUFJLENBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsRUFDeEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FB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Q0FBQztxQkFDL0I7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDOUI7YUFDRjtRQUNILENBQUM7S0FBQTtJQUVPLGVBQWUsQ0FBQyxNQUFpQjtRQUN2QyxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssaUJBQXNCLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgRVNDQVBFLCBoYXNNb2RpZmllcktleSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCYXNlTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBOek1vZGFsTGVnYWN5QVBJIH0gZnJvbSAnLi9tb2RhbC1sZWdhY3ktYXBpJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZW51bSBOek1vZGFsU3RhdGUge1xuICBPUEVOLFxuICBDTE9TSU5HLFxuICBDTE9TRURcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gTnpUcmlnZ2VyQWN0aW9uIHtcbiAgQ0FOQ0VMID0gJ2NhbmNlbCcsXG4gIE9LID0gJ29rJ1xufVxuXG5leHBvcnQgY2xhc3MgTnpNb2RhbFJlZjxUID0gTnpTYWZlQW55LCBSID0gTnpTYWZlQW55PiBpbXBsZW1lbnRzIE56TW9kYWxMZWdhY3lBUEk8VCwgUj4ge1xuICBjb21wb25lbnRJbnN0YW5jZTogVCB8IG51bGwgPSBudWxsO1xuICByZXN1bHQ/OiBSO1xuICBzdGF0ZTogTnpNb2RhbFN0YXRlID0gTnpNb2RhbFN0YXRlLk9QRU47XG4gIGFmdGVyQ2xvc2U6IFN1YmplY3Q8Uj4gPSBuZXcgU3ViamVjdCgpO1xuICBhZnRlck9wZW46IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY2xvc2VUaW1lb3V0PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgcHJpdmF0ZSBjb25maWc6IE1vZGFsT3B0aW9ucywgcHVibGljIGNvbnRhaW5lckluc3RhbmNlOiBCYXNlTW9kYWxDb250YWluZXJDb21wb25lbnQpIHtcbiAgICBjb250YWluZXJJbnN0YW5jZS5hbmltYXRpb25TdGF0ZUNoYW5nZWRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQucGhhc2VOYW1lID09PSAnZG9uZScgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJyksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFmdGVyT3Blbi5uZXh0KCk7XG4gICAgICAgIHRoaXMuYWZ0ZXJPcGVuLmNvbXBsZXRlKCk7XG4gICAgICAgIGlmIChjb25maWcubnpBZnRlck9wZW4gaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgICAgICBjb25maWcubnpBZnRlck9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGNvbnRhaW5lckluc3RhbmNlLmFuaW1hdGlvblN0YXRlQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudC5waGFzZU5hbWUgPT09ICdkb25lJyAmJiBldmVudC50b1N0YXRlID09PSAnZXhpdCcpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5fZmluaXNoRGlhbG9nQ2xvc2UoKTtcbiAgICAgIH0pO1xuXG4gICAgY29udGFpbmVySW5zdGFuY2UuY29udGFpbmVyQ2xpY2sucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgY2FuY2VsYWJsZSA9ICF0aGlzLmNvbmZpZy5uekNhbmNlbExvYWRpbmcgJiYgIXRoaXMuY29uZmlnLm56T2tMb2FkaW5nO1xuICAgICAgaWYgKGNhbmNlbGFibGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5DQU5DRUwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb3ZlcmxheVJlZlxuICAgICAgLmtleWRvd25FdmVudHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5uektleWJvYXJkIGFzIGJvb2xlYW4pICYmXG4gICAgICAgICAgICAhdGhpcy5jb25maWcubnpDYW5jZWxMb2FkaW5nICYmXG4gICAgICAgICAgICAhdGhpcy5jb25maWcubnpPa0xvYWRpbmcgJiZcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJlxuICAgICAgICAgICAgIWhhc01vZGlmaWVyS2V5KGV2ZW50KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5DQU5DRUwpO1xuICAgICAgfSk7XG5cbiAgICBjb250YWluZXJJbnN0YW5jZS5jYW5jZWxUcmlnZ2VyZWQuc3Vic2NyaWJlKCgpID0+IHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uQ0FOQ0VMKSk7XG5cbiAgICBjb250YWluZXJJbnN0YW5jZS5va1RyaWdnZXJlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5PSykpO1xuXG4gICAgb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmFmdGVyQ2xvc2UubmV4dCh0aGlzLnJlc3VsdCk7XG4gICAgICB0aGlzLmFmdGVyQ2xvc2UuY29tcGxldGUoKTtcbiAgICAgIGlmIChjb25maWcubnpBZnRlckNsb3NlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICAgIGNvbmZpZy5uekFmdGVyQ2xvc2UuZW1pdCh0aGlzLnJlc3VsdCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gbnVsbDtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEluc3RhbmNlIGFzIFQ7XG4gIH1cblxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJJbnN0YW5jZS5nZXROYXRpdmVFbGVtZW50KCk7XG4gIH1cblxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XG4gIH1cblxuICB0cmlnZ2VyT2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uT0spO1xuICB9XG5cbiAgdHJpZ2dlckNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5DQU5DRUwpO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBOek1vZGFsU3RhdGUuT1BFTikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlLmFuaW1hdGlvblN0YXRlQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudC5waGFzZU5hbWUgPT09ICdzdGFydCcpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaEJhY2tkcm9wKCk7XG4gICAgICAgIHRoaXMuY2xvc2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZmluaXNoRGlhbG9nQ2xvc2UoKTtcbiAgICAgICAgfSwgZXZlbnQudG90YWxUaW1lICsgMTAwKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5jb250YWluZXJJbnN0YW5jZS5zdGFydEV4aXRBbmltYXRpb24oKTtcbiAgICB0aGlzLnN0YXRlID0gTnpNb2RhbFN0YXRlLkNMT1NJTkc7XG4gIH1cblxuICB1cGRhdGVDb25maWcoY29uZmlnOiBNb2RhbE9wdGlvbnMpOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuY29udGFpbmVySW5zdGFuY2UuYmluZEJhY2tkcm9wU3R5bGUoKTtcbiAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldFN0YXRlKCk6IE56TW9kYWxTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBnZXRDb25maWcoKTogTW9kYWxPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXRCYWNrZHJvcEVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdHJpZ2dlcihhY3Rpb246IE56VHJpZ2dlckFjdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRyaWdnZXIgPSB7IG9rOiB0aGlzLmNvbmZpZy5uek9uT2ssIGNhbmNlbDogdGhpcy5jb25maWcubnpPbkNhbmNlbCB9W2FjdGlvbl07XG4gICAgY29uc3QgbG9hZGluZ0tleSA9IHsgb2s6ICduek9rTG9hZGluZycsIGNhbmNlbDogJ256Q2FuY2VsTG9hZGluZycgfVthY3Rpb25dIGFzICduek9rTG9hZGluZycgfCAnbnpDYW5jZWxMb2FkaW5nJztcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5jb25maWdbbG9hZGluZ0tleV07XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgIHRyaWdnZXIuZW1pdCh0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdHJpZ2dlcih0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbbG9hZGluZ0tleV0gPSB0cnVlO1xuICAgICAgICBsZXQgZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvQ2xvc2UgPSBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhpcy5jb25maWdbbG9hZGluZ0tleV0gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsb3NlV2hpdFJlc3VsdChkb0Nsb3NlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZVdoaXRSZXN1bHQocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlV2hpdFJlc3VsdChyZXN1bHQ6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgX2ZpbmlzaERpYWxvZ0Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBOek1vZGFsU3RhdGUuQ0xPU0VEO1xuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==