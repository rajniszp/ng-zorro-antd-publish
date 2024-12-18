import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, IterableDiffers, ChangeDetectorRef, Host, Optional, ElementRef, Renderer2, Directive, ViewContainerRef, Inject, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, animationFrameScheduler, asapScheduler, merge, BehaviorSubject } from 'rxjs';
import { takeUntil, auditTime, take, map } from 'rxjs/operators';
import { CdkTree, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTreeNodeOutletContext } from '@angular/cdk/tree';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { treeCollapseMotion } from 'ng-zorro-antd/core/animation';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { DataSource } from '@angular/cdk/collections';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeCheckboxComponent {
    constructor() {
        this.nzClick = new EventEmitter();
    }
    onClick(e) {
        if (!this.nzDisabled) {
            this.nzClick.emit(e);
        }
    }
}
NzTreeNodeCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-checkbox:not([builtin])',
                template: `
    <span class="ant-tree-checkbox-inner"></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    class: 'ant-tree-checkbox',
                    '[class.ant-tree-checkbox-checked]': `nzChecked`,
                    '[class.ant-tree-checkbox-indeterminate]': `nzIndeterminate`,
                    '[class.ant-tree-checkbox-disabled]': `nzDisabled`,
                    '(click)': 'onClick($event)'
                }
            },] }
];
NzTreeNodeCheckboxComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeCheckboxComponent.prototype, "nzDisabled", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line: component-class-suffix
class NzTreeView extends CdkTree {
    constructor(differs, changeDetectorRef, noAnimation, directionality) {
        super(differs, changeDetectorRef);
        this.differs = differs;
        this.changeDetectorRef = changeDetectorRef;
        this.noAnimation = noAnimation;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this._dataSourceChanged = new Subject();
        this.nzDirectoryTree = false;
        this.nzBlockNode = false;
    }
    get dataSource() {
        return super.dataSource;
    }
    set dataSource(dataSource) {
        super.dataSource = dataSource;
    }
    ngOnInit() {
        var _a;
        super.ngOnInit();
        if (this.directionality) {
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.changeDetectorRef.detectChanges();
            });
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    renderNodeChanges(data, dataDiffer, viewContainer, parentData) {
        super.renderNodeChanges(data, dataDiffer, viewContainer, parentData);
        this._dataSourceChanged.next();
    }
}
NzTreeView.decorators = [
    { type: Component, args: [{ template: '' },] }
];
NzTreeView.ctorParameters = () => [
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTreeView.propDecorators = {
    treeControl: [{ type: Input, args: ['nzTreeControl',] }],
    dataSource: [{ type: Input, args: ['nzDataSource',] }],
    nzDirectoryTree: [{ type: Input }],
    nzBlockNode: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeView.prototype, "nzDirectoryTree", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeView.prototype, "nzBlockNode", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeComponent extends CdkTreeNode {
    constructor(elementRef, tree, renderer, cdr) {
        super(elementRef, tree);
        this.elementRef = elementRef;
        this.tree = tree;
        this.renderer = renderer;
        this.cdr = cdr;
        this.indents = [];
        this.disabled = false;
        this.selected = false;
        this.isLeaf = false;
        this._elementRef.nativeElement.classList.add('ant-tree-treenode');
    }
    ngOnInit() {
        this.isLeaf = !this.tree.treeControl.isExpandable(this.data);
    }
    disable() {
        this.disabled = true;
        this.updateDisabledClass();
    }
    enable() {
        this.disabled = false;
        this.updateDisabledClass();
    }
    select() {
        this.selected = true;
        this.updateSelectedClass();
    }
    deselect() {
        this.selected = false;
        this.updateSelectedClass();
    }
    setIndents(indents) {
        this.indents = indents;
        this.cdr.markForCheck();
    }
    updateSelectedClass() {
        if (this.selected) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
        }
    }
    updateDisabledClass() {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
        }
    }
}
NzTreeNodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node:not([builtin])',
                exportAs: 'nzTreeNode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: CdkTreeNode, useExisting: NzTreeNodeComponent }],
                template: `
    <nz-tree-node-indents [indents]="indents" *ngIf="indents.length"></nz-tree-node-indents>
    <ng-content select="nz-tree-node-toggle, [nz-tree-node-toggle]"></ng-content>
    <nz-tree-node-toggle class="nz-tree-leaf-line-icon" *ngIf="indents.length && isLeaf" nzTreeNodeNoopToggle>
      <span class="ant-tree-switcher-leaf-line"></span>
    </nz-tree-node-toggle>
    <ng-content select="nz-tree-node-checkbox"></ng-content>
    <ng-content select="nz-tree-node-option"></ng-content>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-tree-treenode-switcher-open]': 'isExpanded',
                    '[class.ant-tree-treenode-switcher-close]': '!isExpanded'
                }
            },] }
];
NzTreeNodeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzTreeView },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
class NzTreeNodeDefDirective extends CdkTreeNodeDef {
}
NzTreeNodeDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzTreeNodeDef]',
                providers: [{ provide: CdkTreeNodeDef, useExisting: NzTreeNodeDefDirective }]
            },] }
];
NzTreeNodeDefDirective.propDecorators = {
    when: [{ type: Input, args: ['nzTreeNodeDefWhen',] }]
};
class NzTreeVirtualScrollNodeOutletDirective {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._viewRef = null;
    }
    ngOnChanges(changes) {
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            const viewContainerRef = this._viewContainerRef;
            if (this._viewRef) {
                viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
            }
            this._viewRef = this.data ? viewContainerRef.createEmbeddedView(this.data.nodeDef.template, this.data.context) : null;
            if (CdkTreeNode.mostRecentTreeNode && this._viewRef) {
                CdkTreeNode.mostRecentTreeNode.data = this.data.data;
            }
        }
        else if (this._viewRef && this.data.context) {
            this.updateExistingContext(this.data.context);
        }
    }
    shouldRecreateView(changes) {
        const ctxChange = changes.data;
        return !!changes.data || (ctxChange && this.hasContextShapeChanged(ctxChange));
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            this._viewRef.context[propName] = this.data.context[propName];
        }
    }
}
NzTreeVirtualScrollNodeOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzTreeVirtualScrollNodeOutlet]'
            },] }
];
NzTreeVirtualScrollNodeOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NzTreeVirtualScrollNodeOutletDirective.propDecorators = {
    data: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getParent(nodes, node, getLevel) {
    let index = nodes.indexOf(node);
    if (index < 0) {
        return null;
    }
    const level = getLevel(node);
    for (index--; index >= 0; index--) {
        const preLevel = getLevel(nodes[index]);
        if (preLevel + 1 === level) {
            return nodes[index];
        }
        if (preLevel + 1 < level) {
            return null;
        }
    }
    return null;
}
function getNextSibling(nodes, node, getLevel, _index) {
    let index = typeof _index !== 'undefined' ? _index : nodes.indexOf(node);
    if (index < 0) {
        return null;
    }
    const level = getLevel(node);
    for (index++; index < nodes.length; index++) {
        const nextLevel = getLevel(nodes[index]);
        if (nextLevel < level) {
            return null;
        }
        if (nextLevel === level) {
            return nodes[index];
        }
    }
    return null;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * [true, false, false, true] => 1001
 */
function booleanArrayToString(arr) {
    return arr.map(i => (i ? 1 : 0)).join('');
}
const BUILD_INDENTS_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
class NzTreeNodeIndentsComponent {
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
class NzTreeNodeIndentLineDirective {
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

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeOptionComponent {
    constructor(treeNode) {
        this.treeNode = treeNode;
        this.nzSelected = false;
        this.nzDisabled = false;
        this.nzClick = new EventEmitter();
    }
    get isExpanded() {
        return this.treeNode.isExpanded;
    }
    onClick(e) {
        if (!this.nzDisabled) {
            this.nzClick.emit(e);
        }
    }
    ngOnChanges(changes) {
        const { nzDisabled, nzSelected } = changes;
        if (nzDisabled) {
            if (nzDisabled.currentValue) {
                this.treeNode.disable();
            }
            else {
                this.treeNode.enable();
            }
        }
        if (nzSelected) {
            if (nzSelected.currentValue) {
                this.treeNode.select();
            }
            else {
                this.treeNode.deselect();
            }
        }
    }
}
NzTreeNodeOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-option',
                template: `
    <span class="ant-tree-title"><ng-content></ng-content></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-tree-node-content-wrapper',
                    '[class.ant-tree-node-content-wrapper-open]': 'isExpanded',
                    '[class.ant-tree-node-selected]': 'nzSelected',
                    '(click)': 'onClick($event)'
                }
            },] }
];
NzTreeNodeOptionComponent.ctorParameters = () => [
    { type: NzTreeNodeComponent }
];
NzTreeNodeOptionComponent.propDecorators = {
    nzSelected: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeOptionComponent.prototype, "nzSelected", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeOptionComponent.prototype, "nzDisabled", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeOutletDirective {
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
NzTreeNodeOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzTreeNodeOutlet]',
                providers: [
                    {
                        provide: CdkTreeNodeOutlet,
                        useExisting: NzTreeNodeOutletDirective
                    }
                ]
            },] }
];
NzTreeNodeOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodePaddingDirective extends CdkTreeNodePadding {
    constructor() {
        super(...arguments);
        this._indent = 24;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._setLevelInput(value);
    }
    get indent() {
        return this._indent;
    }
    set indent(indent) {
        this._setIndentInput(indent);
    }
}
NzTreeNodePaddingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzTreeNodePadding]',
                providers: [{ provide: CdkTreeNodePadding, useExisting: NzTreeNodePaddingDirective }]
            },] }
];
NzTreeNodePaddingDirective.propDecorators = {
    level: [{ type: Input, args: ['nzTreeNodePadding',] }],
    indent: [{ type: Input, args: ['nzTreeNodePaddingIndent',] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeNoopToggleDirective {
}
NzTreeNodeNoopToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-tree-node-toggle[nzTreeNodeNoopToggle], [nzTreeNodeNoopToggle]',
                host: {
                    class: 'ant-tree-switcher ant-tree-switcher-noop'
                }
            },] }
];
class NzTreeNodeToggleDirective extends CdkTreeNodeToggle {
    get recursive() {
        return this._recursive;
    }
    set recursive(value) {
        this._recursive = coerceBooleanProperty(value);
    }
    get isExpanded() {
        return this._treeNode.isExpanded;
    }
}
NzTreeNodeToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-tree-node-toggle:not([nzTreeNodeNoopToggle]), [nzTreeNodeToggle]',
                providers: [{ provide: CdkTreeNodeToggle, useExisting: NzTreeNodeToggleDirective }],
                host: {
                    class: 'ant-tree-switcher',
                    '[class.ant-tree-switcher_open]': 'isExpanded',
                    '[class.ant-tree-switcher_close]': '!isExpanded'
                }
            },] }
];
NzTreeNodeToggleDirective.propDecorators = {
    recursive: [{ type: Input, args: ['nzTreeNodeToggleRecursive',] }]
};
class NzTreeNodeToggleRotateIconDirective {
}
NzTreeNodeToggleRotateIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-icon][nzTreeNodeToggleRotateIcon]',
                host: {
                    class: 'ant-tree-switcher-icon'
                }
            },] }
];
class NzTreeNodeToggleActiveIconDirective {
}
NzTreeNodeToggleActiveIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-icon][nzTreeNodeToggleActiveIcon]',
                host: {
                    class: 'ant-tree-switcher-loading-icon'
                }
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeViewComponent extends NzTreeView {
    constructor() {
        super(...arguments);
        this._afterViewInit = false;
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            this._afterViewInit = true;
            this.changeDetectorRef.markForCheck();
        });
    }
}
NzTreeViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-view',
                exportAs: 'nzTreeView',
                template: `
    <div class="ant-tree-list-holder">
      <div
        [@.disabled]="!_afterViewInit || noAnimation?.nzNoAnimation"
        [@treeCollapseMotion]="_nodeOutlet.viewContainer.length"
        class="ant-tree-list-holder-inner"
      >
        <ng-container nzTreeNodeOutlet></ng-container>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: CdkTree, useExisting: NzTreeViewComponent },
                    { provide: NzTreeView, useExisting: NzTreeViewComponent }
                ],
                host: {
                    class: 'ant-tree',
                    '[class.ant-tree-block-node]': 'nzDirectoryTree || nzBlockNode',
                    '[class.ant-tree-directory]': 'nzDirectoryTree',
                    '[class.ant-tree-rtl]': `dir === 'rtl'`
                },
                animations: [treeCollapseMotion]
            },] }
];
NzTreeViewComponent.propDecorators = {
    nodeOutlet: [{ type: ViewChild, args: [NzTreeNodeOutletDirective, { static: true },] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DEFAULT_SIZE = 28;
class NzTreeVirtualScrollViewComponent extends NzTreeView {
    constructor() {
        super(...arguments);
        this.itemSize = DEFAULT_SIZE;
        /**
         * @deprecated use `nzItemSize` instead
         * @breaking-change 12.0.0
         */
        this.nzNodeWidth = DEFAULT_SIZE;
        this.nzItemSize = DEFAULT_SIZE;
        this.nzMinBufferPx = DEFAULT_SIZE * 5;
        this.nzMaxBufferPx = DEFAULT_SIZE * 10;
        this.nodes = [];
    }
    renderNodeChanges(data) {
        this.nodes = new Array(...data).map((n, i) => this.createNode(n, i));
    }
    createNode(nodeData, index) {
        const node = this._getNodeDef(nodeData, index);
        const context = new CdkTreeNodeOutletContext(nodeData);
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else {
            context.level = 0;
        }
        return {
            data: nodeData,
            context,
            nodeDef: node
        };
    }
    ngOnChanges(changes) {
        const { nzNodeWidth, nzItemSize } = changes;
        if (nzNodeWidth) {
            warnDeprecation('`nzNodeWidth` in nz-tree-virtual-scroll-view will be removed in 12.0.0, please use `nzItemSize` instead.');
            this.itemSize = nzNodeWidth.currentValue;
        }
        if (nzItemSize) {
            this.itemSize = nzItemSize.currentValue;
        }
    }
}
NzTreeVirtualScrollViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-virtual-scroll-view',
                exportAs: 'nzTreeVirtualScrollView',
                template: `
    <div class="ant-tree-list">
      <cdk-virtual-scroll-viewport
        class="ant-tree-list-holder"
        [itemSize]="itemSize"
        [minBufferPx]="nzMinBufferPx"
        [maxBufferPx]="nzMaxBufferPx"
      >
        <ng-container *cdkVirtualFor="let item of nodes; let i = index">
          <ng-template nzTreeVirtualScrollNodeOutlet [data]="item"></ng-template>
        </ng-container>
      </cdk-virtual-scroll-viewport>
    </div>
    <ng-container nzTreeNodeOutlet></ng-container>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: NzTreeView, useExisting: NzTreeVirtualScrollViewComponent },
                    { provide: CdkTree, useExisting: NzTreeVirtualScrollViewComponent }
                ],
                host: {
                    class: 'ant-tree',
                    '[class.ant-tree-block-node]': 'nzDirectoryTree || nzBlockNode',
                    '[class.ant-tree-directory]': 'nzDirectoryTree',
                    '[class.ant-tree-rtl]': `dir === 'rtl'`
                }
            },] }
];
NzTreeVirtualScrollViewComponent.propDecorators = {
    nodeOutlet: [{ type: ViewChild, args: [NzTreeNodeOutletDirective, { static: true },] }],
    virtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: true },] }],
    nzNodeWidth: [{ type: Input }],
    nzItemSize: [{ type: Input }],
    nzMinBufferPx: [{ type: Input }],
    nzMaxBufferPx: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const treeWithControlComponents = [
    NzTreeView,
    NzTreeNodeOutletDirective,
    NzTreeViewComponent,
    NzTreeNodeDefDirective,
    NzTreeNodeComponent,
    NzTreeNodeToggleDirective,
    NzTreeNodePaddingDirective,
    NzTreeNodeToggleRotateIconDirective,
    NzTreeNodeToggleActiveIconDirective,
    NzTreeNodeOptionComponent,
    NzTreeNodeNoopToggleDirective,
    NzTreeNodeCheckboxComponent,
    NzTreeNodeIndentsComponent,
    NzTreeVirtualScrollViewComponent,
    NzTreeVirtualScrollNodeOutletDirective,
    NzTreeNodeIndentLineDirective
];
class NzTreeViewModule {
}
NzTreeViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [BidiModule, CommonModule, NzNoAnimationModule, ScrollingModule],
                declarations: [treeWithControlComponents],
                exports: [treeWithControlComponents]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeFlattener {
    constructor(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    flattenNode(node, level, resultNodes, parentMap) {
        const flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            const childrenNodes = this.getChildren(node);
            if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                    this.flattenChildren(childrenNodes, level, resultNodes, parentMap);
                }
                else {
                    childrenNodes.pipe(take(1)).subscribe(children => {
                        this.flattenChildren(children, level, resultNodes, parentMap);
                    });
                }
            }
        }
        return resultNodes;
    }
    flattenChildren(children, level, resultNodes, parentMap) {
        children.forEach((child, index) => {
            const childParentMap = parentMap.slice();
            childParentMap.push(index !== children.length - 1);
            this.flattenNode(child, level + 1, resultNodes, childParentMap);
        });
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     */
    flattenNodes(structuredData) {
        const resultNodes = [];
        structuredData.forEach(node => this.flattenNode(node, 0, resultNodes, []));
        return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     */
    expandFlattenedNodes(nodes, treeControl) {
        const results = [];
        const currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach(node => {
            let expand = true;
            for (let i = 0; i <= this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (this.isExpandable(node)) {
                currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        });
        return results;
    }
}
class NzTreeFlatDataSource extends DataSource {
    constructor(_treeControl, _treeFlattener, initialData = []) {
        super();
        this._treeControl = _treeControl;
        this._treeFlattener = _treeFlattener;
        this._flattenedData = new BehaviorSubject([]);
        this._expandedData = new BehaviorSubject([]);
        this._data = new BehaviorSubject(initialData);
        this.flatNodes();
    }
    setData(value) {
        this._data.next(value);
        this.flatNodes();
    }
    getData() {
        return this._data.getValue();
    }
    connect(collectionViewer) {
        const changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
        return merge(...changes).pipe(map(() => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
            return this._expandedData.value;
        }));
    }
    disconnect() {
        // no op
    }
    flatNodes() {
        this._flattenedData.next(this._treeFlattener.flattenNodes(this.getData()));
        this._treeControl.dataNodes = this._flattenedData.value;
    }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzTreeFlatDataSource, NzTreeFlattener, NzTreeNodeCheckboxComponent, NzTreeNodeComponent, NzTreeNodeDefDirective, NzTreeNodeIndentLineDirective, NzTreeNodeIndentsComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeOptionComponent, NzTreeNodeOutletDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeToggleDirective, NzTreeNodeToggleRotateIconDirective, NzTreeViewComponent, NzTreeViewModule, NzTreeVirtualScrollNodeOutletDirective, NzTreeVirtualScrollViewComponent, getNextSibling, getParent, NzTreeView as ɵa };
//# sourceMappingURL=ng-zorro-antd-tree-view.js.map
