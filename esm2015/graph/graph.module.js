/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzGraphDefsComponent } from './graph-defs.component';
import { NzGraphEdgeComponent } from './graph-edge.component';
import { NzGraphEdgeDirective } from './graph-edge.directive';
import { NzGraphGroupNodeDirective } from './graph-group-node.directive';
import { NzGraphMinimapComponent } from './graph-minimap.component';
import { NzGraphNodeComponent } from './graph-node.component';
import { NzGraphNodeDirective } from './graph-node.directive';
import { NzGraphZoomDirective } from './graph-zoom.directive';
import { NzGraphComponent } from './graph.component';
const COMPONENTS = [
    NzGraphComponent,
    NzGraphMinimapComponent,
    NzGraphDefsComponent,
    NzGraphNodeDirective,
    NzGraphGroupNodeDirective,
    NzGraphZoomDirective,
    NzGraphNodeComponent,
    NzGraphEdgeComponent,
    NzGraphEdgeDirective
];
export class NzGraphModule {
}
NzGraphModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...COMPONENTS],
                imports: [CommonModule, NzIconModule, NzSpinModule, NzNoAnimationModule],
                exports: [...COMPONENTS]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9ncmFwaC9ncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRCxNQUFNLFVBQVUsR0FBRztJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNyQixDQUFDO0FBT0YsTUFBTSxPQUFPLGFBQWE7OztZQUx6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFDO2dCQUN4RSxPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XG5cbmltcG9ydCB7IE56R3JhcGhEZWZzQ29tcG9uZW50IH0gZnJvbSAnLi9ncmFwaC1kZWZzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekdyYXBoRWRnZUNvbXBvbmVudCB9IGZyb20gJy4vZ3JhcGgtZWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpHcmFwaEVkZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2dyYXBoLWVkZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56R3JhcGhHcm91cE5vZGVEaXJlY3RpdmUgfSBmcm9tICcuL2dyYXBoLWdyb3VwLW5vZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56R3JhcGhNaW5pbWFwQ29tcG9uZW50IH0gZnJvbSAnLi9ncmFwaC1taW5pbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekdyYXBoTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vZ3JhcGgtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpHcmFwaE5vZGVEaXJlY3RpdmUgfSBmcm9tICcuL2dyYXBoLW5vZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56R3JhcGhab29tRGlyZWN0aXZlIH0gZnJvbSAnLi9ncmFwaC16b29tLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekdyYXBoQ29tcG9uZW50IH0gZnJvbSAnLi9ncmFwaC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBOekdyYXBoQ29tcG9uZW50LFxuICBOekdyYXBoTWluaW1hcENvbXBvbmVudCxcbiAgTnpHcmFwaERlZnNDb21wb25lbnQsXG4gIE56R3JhcGhOb2RlRGlyZWN0aXZlLFxuICBOekdyYXBoR3JvdXBOb2RlRGlyZWN0aXZlLFxuICBOekdyYXBoWm9vbURpcmVjdGl2ZSxcbiAgTnpHcmFwaE5vZGVDb21wb25lbnQsXG4gIE56R3JhcGhFZGdlQ29tcG9uZW50LFxuICBOekdyYXBoRWRnZURpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpTcGluTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdXG59KVxuZXhwb3J0IGNsYXNzIE56R3JhcGhNb2R1bGUge31cbiJdfQ==