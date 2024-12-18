/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzListEmptyComponent, NzListFooterComponent, NzListGridDirective, NzListHeaderComponent, NzListLoadMoreDirective, NzListPaginationComponent } from './list-cell';
import { NzListItemActionComponent, NzListItemActionsComponent, NzListItemExtraComponent } from './list-item-cell';
import { NzListItemMetaAvatarComponent, NzListItemMetaDescriptionComponent, NzListItemMetaTitleComponent } from './list-item-meta-cell';
import { NzListItemMetaComponent } from './list-item-meta.component';
import { NzListItemComponent } from './list-item.component';
import { NzListComponent } from './list.component';
const DIRECTIVES = [
    NzListComponent,
    NzListHeaderComponent,
    NzListFooterComponent,
    NzListPaginationComponent,
    NzListEmptyComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzListItemMetaTitleComponent,
    NzListItemMetaDescriptionComponent,
    NzListItemMetaAvatarComponent,
    NzListItemActionsComponent,
    NzListItemActionComponent,
    NzListItemExtraComponent,
    NzListLoadMoreDirective,
    NzListGridDirective
];
export class NzListModule {
}
NzListModule.decorators = [
    { type: NgModule, args: [{
                imports: [BidiModule, CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzOutletModule, NzEmptyModule],
                declarations: [DIRECTIVES],
                exports: [DIRECTIVES]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2xpc3QvbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQix1QkFBdUIsRUFDdkIseUJBQXlCLEVBQzFCLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxNQUFNLFVBQVUsR0FBRztJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUNwQixDQUFDO0FBT0YsTUFBTSxPQUFPLFlBQVk7OztZQUx4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDO2dCQUM5RyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBdmF0YXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xuaW1wb3J0IHsgTnpHcmlkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XG5cbmltcG9ydCB7XG4gIE56TGlzdEVtcHR5Q29tcG9uZW50LFxuICBOekxpc3RGb290ZXJDb21wb25lbnQsXG4gIE56TGlzdEdyaWREaXJlY3RpdmUsXG4gIE56TGlzdEhlYWRlckNvbXBvbmVudCxcbiAgTnpMaXN0TG9hZE1vcmVEaXJlY3RpdmUsXG4gIE56TGlzdFBhZ2luYXRpb25Db21wb25lbnRcbn0gZnJvbSAnLi9saXN0LWNlbGwnO1xuaW1wb3J0IHsgTnpMaXN0SXRlbUFjdGlvbkNvbXBvbmVudCwgTnpMaXN0SXRlbUFjdGlvbnNDb21wb25lbnQsIE56TGlzdEl0ZW1FeHRyYUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtLWNlbGwnO1xuaW1wb3J0IHsgTnpMaXN0SXRlbU1ldGFBdmF0YXJDb21wb25lbnQsIE56TGlzdEl0ZW1NZXRhRGVzY3JpcHRpb25Db21wb25lbnQsIE56TGlzdEl0ZW1NZXRhVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2xpc3QtaXRlbS1tZXRhLWNlbGwnO1xuaW1wb3J0IHsgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL2xpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE56TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBOekxpc3RDb21wb25lbnQsXG4gIE56TGlzdEhlYWRlckNvbXBvbmVudCxcbiAgTnpMaXN0Rm9vdGVyQ29tcG9uZW50LFxuICBOekxpc3RQYWdpbmF0aW9uQ29tcG9uZW50LFxuICBOekxpc3RFbXB0eUNvbXBvbmVudCxcbiAgTnpMaXN0SXRlbUNvbXBvbmVudCxcbiAgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQsXG4gIE56TGlzdEl0ZW1NZXRhVGl0bGVDb21wb25lbnQsXG4gIE56TGlzdEl0ZW1NZXRhRGVzY3JpcHRpb25Db21wb25lbnQsXG4gIE56TGlzdEl0ZW1NZXRhQXZhdGFyQ29tcG9uZW50LFxuICBOekxpc3RJdGVtQWN0aW9uc0NvbXBvbmVudCxcbiAgTnpMaXN0SXRlbUFjdGlvbkNvbXBvbmVudCxcbiAgTnpMaXN0SXRlbUV4dHJhQ29tcG9uZW50LFxuICBOekxpc3RMb2FkTW9yZURpcmVjdGl2ZSxcbiAgTnpMaXN0R3JpZERpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgTnpTcGluTW9kdWxlLCBOekdyaWRNb2R1bGUsIE56QXZhdGFyTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpFbXB0eU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0TW9kdWxlIHt9XG4iXX0=