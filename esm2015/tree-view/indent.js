/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, Input } from '@angular/core';
import { animationFrameScheduler, asapScheduler, merge } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { NzTreeNodeComponent } from './node';
import { NzTreeView } from './tree';
import { getNextSibling, getParent } from './utils';
/**
 * [true, false, false, true] => 1001
 */
function booleanArrayToString(arr) {
    return arr.map(i => (i ? 1 : 0)).join('');
}
const BUILD_INDENTS_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
export class NzTreeNodeIndentsComponent {
    constructor() {
        this.indents = [];
    }
}
NzTreeNodeIndentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-indents',
                template: `
    <span class="ant-tree-indent-unit" [class.ant-tree-indent-unit-end]="!isEnd" *ngFor="let isEnd of indents"></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-tree-indent'
                }
            },] }
];
NzTreeNodeIndentsComponent.propDecorators = {
    indents: [{ type: Input }]
};
export class NzTreeNodeIndentLineDirective {
    constructor(treeNode, tree, cdr) {
        this.treeNode = treeNode;
        this.tree = tree;
        this.cdr = cdr;
        this.isLast = 'unset';
        this.isLeaf = false;
        this.preNodeRef = null;
        this.nextNodeRef = null;
        this.currentIndents = '';
        this.buildIndents();
        this.checkLast();
        /**
         * The dependent data (TreeControl.dataNodes) can be set after node instantiation,
         * and setting the indents can cause frame rate loss if it is set too often.
         */
        this.changeSubscription = merge(this.treeNode._dataChanges, tree._dataSourceChanged)
            .pipe(auditTime(0, BUILD_INDENTS_SCHEDULER))
            .subscribe(() => {
            this.buildIndents();
            this.checkAdjacent();
            this.cdr.markForCheck();
        });
    }
    getIndents() {
        const indents = [];
        const nodes = this.tree.treeControl.dataNodes;
        const getLevel = this.tree.treeControl.getLevel;
        let parent = getParent(nodes, this.treeNode.data, getLevel);
        while (parent) {
            const parentNextSibling = getNextSibling(nodes, parent, getLevel);
            if (parentNextSibling) {
                indents.unshift(true);
            }
            else {
                indents.unshift(false);
            }
            parent = getParent(nodes, parent, getLevel);
        }
        return indents;
    }
    buildIndents() {
        if (this.treeNode.data) {
            const indents = this.getIndents();
            const diffString = booleanArrayToString(indents);
            if (diffString !== this.currentIndents) {
                this.treeNode.setIndents(this.getIndents());
                this.currentIndents = diffString;
            }
        }
    }
    /**
     * We need to add an class name for the last child node,
     * this result can also be affected when the adjacent nodes are changed.
     */
    checkAdjacent() {
        const nodes = this.tree.treeControl.dataNodes;
        const index = nodes.indexOf(this.treeNode.data);
        const preNode = nodes[index - 1] || null;
        const nextNode = nodes[index + 1] || null;
        if (this.nextNodeRef !== nextNode || this.preNodeRef !== preNode) {
            this.checkLast(index);
        }
        this.preNodeRef = preNode;
        this.nextNodeRef = nextNode;
    }
    checkLast(index) {
        const nodes = this.tree.treeControl.dataNodes;
        this.isLeaf = this.treeNode.isLeaf;
        this.isLast = !getNextSibling(nodes, this.treeNode.data, this.tree.treeControl.getLevel, index);
    }
    ngOnDestroy() {
        this.preNodeRef = null;
        this.nextNodeRef = null;
        this.changeSubscription.unsubscribe();
    }
}
NzTreeNodeIndentLineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-tree-node[nzTreeNodeIndentLine]',
                host: {
                    class: 'ant-tree-show-line',
                    '[class.ant-tree-treenode-leaf-last]': 'isLast && isLeaf'
                }
            },] }
];
NzTreeNodeIndentLineDirective.ctorParameters = () => [
    { type: NzTreeNodeComponent },
    { type: NzTreeView },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmVlLXZpZXcvaW5kZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBEOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBQyxHQUFjO0lBQzFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRCxNQUFNLHVCQUF1QixHQUFHLE9BQU8scUJBQXFCLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBWXZILE1BQU0sT0FBTywwQkFBMEI7SUFWdkM7UUFXVyxZQUFPLEdBQWMsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQVpBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFD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Y2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGFzYXBTY2hlZHVsZXIsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHsgTnpUcmVlVmlldyB9IGZyb20gJy4vdHJlZSc7XG5cbmltcG9ydCB7IGdldE5leHRTaWJsaW5nLCBnZXRQYXJlbnQgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBbdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0cnVlXSA9PiAxMDAxXG4gKi9cbmZ1bmN0aW9uIGJvb2xlYW5BcnJheVRvU3RyaW5nKGFycjogYm9vbGVhbltdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFyci5tYXAoaSA9PiAoaSA/IDEgOiAwKSkuam9pbignJyk7XG59XG5cbmNvbnN0IEJVSUxEX0lOREVOVFNfU0NIRURVTEVSID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBhbmltYXRpb25GcmFtZVNjaGVkdWxlciA6IGFzYXBTY2hlZHVsZXI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUtbm9kZS1pbmRlbnRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC10cmVlLWluZGVudC11bml0XCIgW2NsYXNzLmFudC10cmVlLWluZGVudC11bml0LWVuZF09XCIhaXNFbmRcIiAqbmdGb3I9XCJsZXQgaXNFbmQgb2YgaW5kZW50c1wiPjwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10cmVlLWluZGVudCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlSW5kZW50c0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGluZGVudHM6IGJvb2xlYW5bXSA9IFtdO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGVbbnpUcmVlTm9kZUluZGVudExpbmVdJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXRyZWUtc2hvdy1saW5lJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLWxlYWYtbGFzdF0nOiAnaXNMYXN0ICYmIGlzTGVhZidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlSW5kZW50TGluZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlzTGFzdDogYm9vbGVhbiB8ICd1bnNldCcgPSAndW5zZXQnO1xuICBpc0xlYWYgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwcmVOb2RlUmVmOiBUIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbmV4dE5vZGVSZWY6IFQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjdXJyZW50SW5kZW50czogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgY2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlTm9kZTogTnpUcmVlTm9kZUNvbXBvbmVudDxUPiwgcHJpdmF0ZSB0cmVlOiBOelRyZWVWaWV3PFQ+LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmJ1aWxkSW5kZW50cygpO1xuICAgIHRoaXMuY2hlY2tMYXN0KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVwZW5kZW50IGRhdGEgKFRyZWVDb250cm9sLmRhdGFOb2RlcykgY2FuIGJlIHNldCBhZnRlciBub2RlIGluc3RhbnRpYXRpb24sXG4gICAgICogYW5kIHNldHRpbmcgdGhlIGluZGVudHMgY2FuIGNhdXNlIGZyYW1lIHJhdGUgbG9zcyBpZiBpdCBpcyBzZXQgdG9vIG9mdGVuLlxuICAgICAqL1xuICAgIHRoaXMuY2hhbmdlU3Vic2NyaXB0aW9uID0gbWVyZ2UodGhpcy50cmVlTm9kZS5fZGF0YUNoYW5nZXMsIHRyZWUuX2RhdGFTb3VyY2VDaGFuZ2VkKVxuICAgICAgLnBpcGUoYXVkaXRUaW1lKDAsIEJVSUxEX0lOREVOVFNfU0NIRURVTEVSKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmJ1aWxkSW5kZW50cygpO1xuICAgICAgICB0aGlzLmNoZWNrQWRqYWNlbnQoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW5kZW50cygpOiBib29sZWFuW10ge1xuICAgIGNvbnN0IGluZGVudHMgPSBbXTtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMudHJlZS50cmVlQ29udHJvbC5kYXRhTm9kZXM7XG4gICAgY29uc3QgZ2V0TGV2ZWwgPSB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZ2V0TGV2ZWw7XG4gICAgbGV0IHBhcmVudCA9IGdldFBhcmVudChub2RlcywgdGhpcy50cmVlTm9kZS5kYXRhLCBnZXRMZXZlbCk7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgY29uc3QgcGFyZW50TmV4dFNpYmxpbmcgPSBnZXROZXh0U2libGluZyhub2RlcywgcGFyZW50LCBnZXRMZXZlbCk7XG4gICAgICBpZiAocGFyZW50TmV4dFNpYmxpbmcpIHtcbiAgICAgICAgaW5kZW50cy51bnNoaWZ0KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZW50cy51bnNoaWZ0KGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IGdldFBhcmVudChub2RlcywgcGFyZW50LCBnZXRMZXZlbCk7XG4gICAgfVxuICAgIHJldHVybiBpbmRlbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEluZGVudHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJlZU5vZGUuZGF0YSkge1xuICAgICAgY29uc3QgaW5kZW50cyA9IHRoaXMuZ2V0SW5kZW50cygpO1xuICAgICAgY29uc3QgZGlmZlN0cmluZyA9IGJvb2xlYW5BcnJheVRvU3RyaW5nKGluZGVudHMpO1xuICAgICAgaWYgKGRpZmZTdHJpbmcgIT09IHRoaXMuY3VycmVudEluZGVudHMpIHtcbiAgICAgICAgdGhpcy50cmVlTm9kZS5zZXRJbmRlbnRzKHRoaXMuZ2V0SW5kZW50cygpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZW50cyA9IGRpZmZTdHJpbmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdlIG5lZWQgdG8gYWRkIGFuIGNsYXNzIG5hbWUgZm9yIHRoZSBsYXN0IGNoaWxkIG5vZGUsXG4gICAqIHRoaXMgcmVzdWx0IGNhbiBhbHNvIGJlIGFmZmVjdGVkIHdoZW4gdGhlIGFkamFjZW50IG5vZGVzIGFyZSBjaGFuZ2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0FkamFjZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLnRyZWVDb250cm9sLmRhdGFOb2RlcztcbiAgICBjb25zdCBpbmRleCA9IG5vZGVzLmluZGV4T2YodGhpcy50cmVlTm9kZS5kYXRhKTtcbiAgICBjb25zdCBwcmVOb2RlID0gbm9kZXNbaW5kZXggLSAxXSB8fCBudWxsO1xuICAgIGNvbnN0IG5leHROb2RlID0gbm9kZXNbaW5kZXggKyAxXSB8fCBudWxsO1xuICAgIGlmICh0aGlzLm5leHROb2RlUmVmICE9PSBuZXh0Tm9kZSB8fCB0aGlzLnByZU5vZGVSZWYgIT09IHByZU5vZGUpIHtcbiAgICAgIHRoaXMuY2hlY2tMYXN0KGluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5wcmVOb2RlUmVmID0gcHJlTm9kZTtcbiAgICB0aGlzLm5leHROb2RlUmVmID0gbmV4dE5vZGU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGFzdChpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy50cmVlLnRyZWVDb250cm9sLmRhdGFOb2RlcztcbiAgICB0aGlzLmlzTGVhZiA9IHRoaXMudHJlZU5vZGUuaXNMZWFmO1xuICAgIHRoaXMuaXNMYXN0ID0gIWdldE5leHRTaWJsaW5nKG5vZGVzLCB0aGlzLnRyZWVOb2RlLmRhdGEsIHRoaXMudHJlZS50cmVlQ29udHJvbC5nZXRMZXZlbCwgaW5kZXgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wcmVOb2RlUmVmID0gbnVsbDtcbiAgICB0aGlzLm5leHROb2RlUmVmID0gbnVsbDtcbiAgICB0aGlzLmNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=