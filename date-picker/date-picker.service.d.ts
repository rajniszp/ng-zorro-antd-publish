/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { CompatibleValue, NormalizedMode } from 'ng-zorro-antd/core/time';
import { ReplaySubject, Subject } from 'rxjs';
import { CompatibleDate, RangePartType } from './standard-types';
export declare class DatePickerService implements OnDestroy {
    initialValue: CompatibleValue;
    value: CompatibleValue;
    activeDate?: CompatibleValue;
    activeInput: RangePartType;
    arrowLeft: number;
    isRange: boolean;
    valueChange$: ReplaySubject<CompatibleValue>;
    emitValue$: Subject<void>;
    inputPartChange$: Subject<RangePartType>;
    initValue(reset?: boolean): void;
    hasValue(value?: CompatibleValue): boolean;
    makeValue(value?: CompatibleDate): CompatibleValue;
    setActiveDate(value: CompatibleValue, hasTimePicker?: boolean, mode?: NormalizedMode): void;
    setValue(value: CompatibleValue): void;
    getActiveIndex(part?: RangePartType): number;
    ngOnDestroy(): void;
}
