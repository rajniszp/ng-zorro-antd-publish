/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput, CompareWith, NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { NzAutocompleteOptionComponent, NzOptionSelectionChange } from './autocomplete-option.component';
export interface AutocompleteDataSourceItem {
    value: string;
    label: string;
}
export declare type AutocompleteDataSource = Array<AutocompleteDataSourceItem | string | number>;
export declare class NzAutocompleteComponent implements AfterContentInit, AfterViewInit, OnDestroy, OnInit {
    private changeDetectorRef;
    private ngZone;
    private directionality;
    noAnimation?: NzNoAnimationDirective | undefined;
    static ngAcceptInputType_nzDefaultActiveFirstOption: BooleanInput;
    static ngAcceptInputType_nzBackfill: BooleanInput;
    nzWidth?: number;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzDefaultActiveFirstOption: boolean;
    nzBackfill: boolean;
    compareWith: CompareWith;
    nzDataSource?: AutocompleteDataSource;
    readonly selectionChange: EventEmitter<NzAutocompleteOptionComponent>;
    showPanel: boolean;
    isOpen: boolean;
    activeItem: NzAutocompleteOptionComponent | null;
    dir: Direction;
    private destroy$;
    animationStateChange: EventEmitter<AnimationEvent>;
    /**
     * Options accessor, its source may be content or dataSource
     */
    get options(): QueryList<NzAutocompleteOptionComponent>;
    /** Provided by content */
    fromContentOptions: QueryList<NzAutocompleteOptionComponent>;
    /** Provided by dataSource */
    fromDataSourceOptions: QueryList<NzAutocompleteOptionComponent>;
    /** cdk-overlay */
    template?: TemplateRef<{}>;
    panel?: ElementRef;
    content?: ElementRef;
    private activeItemIndex;
    private selectionChangeSubscription;
    private optionMouseEnterSubscription;
    private dataSourceChangeSubscription;
    /** Options changes listener */
    readonly optionSelectionChanges: Observable<NzOptionSelectionChange>;
    readonly optionMouseEnter: Observable<NzAutocompleteOptionComponent>;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, directionality: Directionality, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    onAnimationEvent(event: AnimationEvent): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setVisibility(): void;
    setActiveItem(index: number): void;
    setNextItemActive(): void;
    setPreviousItemActive(): void;
    getOptionIndex(value: NzSafeAny): number;
    getOption(value: NzSafeAny): NzAutocompleteOptionComponent | null;
    private optionsInit;
    /**
     * Clear the status of options
     */
    clearSelectedOptions(skip?: NzAutocompleteOptionComponent | null, deselect?: boolean): void;
    private subscribeOptionChanges;
}
