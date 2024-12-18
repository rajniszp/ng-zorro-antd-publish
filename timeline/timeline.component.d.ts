/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { NzTimelineItemComponent } from './timeline-item.component';
import { TimelineService } from './timeline.service';
import { NzTimelineMode } from './typings';
export declare class NzTimelineComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
    private cdr;
    private timelineService;
    private directionality;
    listOfItems: QueryList<NzTimelineItemComponent>;
    nzMode: NzTimelineMode;
    nzPending?: string | boolean | TemplateRef<void>;
    nzPendingDot?: string | TemplateRef<void>;
    nzReverse: boolean;
    isPendingBoolean: boolean;
    timelineItems: NzTimelineItemComponent[];
    dir: Direction;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, timelineService: TimelineService, directionality: Directionality);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private updateChildren;
}
