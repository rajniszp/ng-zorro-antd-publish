(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/tree', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core.tree = {}), global.ng.core, global.rxjs));
}(this, (function (exports, core, rxjs) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeNode = /** @class */ (function () {
        /**
         * Init nzTreeNode
         * @param option: user's input
         * @param parent
         * @param service: base nzTreeService
         */
        function NzTreeNode(option, parent, service) {
            var _this = this;
            if (parent === void 0) { parent = null; }
            if (service === void 0) { service = null; }
            this._title = '';
            this.level = 0;
            // Parent Node
            this.parentNode = null;
            this._icon = '';
            this._children = [];
            this._isLeaf = false;
            this._isChecked = false;
            this._isSelectable = false;
            this._isDisabled = false;
            this._isDisableCheckbox = false;
            this._isExpanded = false;
            this._isHalfChecked = false;
            this._isSelected = false;
            this._isLoading = false;
            this.canHide = false;
            this.isMatched = false;
            this.service = null;
            if (option instanceof NzTreeNode) {
                return option;
            }
            this.service = service || null;
            this.origin = option;
            this.key = option.key;
            this.parentNode = parent;
            this._title = option.title || '---';
            this._icon = option.icon || '';
            this._isLeaf = option.isLeaf || false;
            this._children = [];
            // option params
            this._isChecked = option.checked || false;
            this._isSelectable = option.disabled || option.selectable !== false;
            this._isDisabled = option.disabled || false;
            this._isDisableCheckbox = option.disableCheckbox || false;
            this._isExpanded = option.isLeaf ? false : option.expanded || false;
            this._isHalfChecked = false;
            this._isSelected = (!option.disabled && option.selected) || false;
            this._isLoading = false;
            this.isMatched = false;
            /**
             * parent's checked status will affect children while initializing
             */
            if (parent) {
                this.level = parent.level + 1;
            }
            else {
                this.level = 0;
            }
            if (typeof option.children !== 'undefined' && option.children !== null) {
                option.children.forEach(function (nodeOptions) {
                    var s = _this.treeService;
                    if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                        nodeOptions.checked = option.checked;
                    }
                    _this._children.push(new NzTreeNode(nodeOptions, _this));
                });
            }
        }
        Object.defineProperty(NzTreeNode.prototype, "treeService", {
            get: function () {
                return this.service || (this.parentNode && this.parentNode.treeService);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "title", {
            /**
             * auto generate
             * get
             * set
             */
            get: function () {
                return this._title;
            },
            set: function (value) {
                this._title = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                this._icon = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "children", {
            get: function () {
                return this._children;
            },
            set: function (value) {
                this._children = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isLeaf", {
            get: function () {
                return this._isLeaf;
            },
            set: function (value) {
                this._isLeaf = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isChecked", {
            get: function () {
                return this._isChecked;
            },
            set: function (value) {
                this._isChecked = value;
                this.origin.checked = value;
                this.afterValueChange('isChecked');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isHalfChecked", {
            get: function () {
                return this._isHalfChecked;
            },
            set: function (value) {
                this._isHalfChecked = value;
                this.afterValueChange('isHalfChecked');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isSelectable", {
            get: function () {
                return this._isSelectable;
            },
            set: function (value) {
                this._isSelectable = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isDisabled", {
            get: function () {
                return this._isDisabled;
            },
            set: function (value) {
                this._isDisabled = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isDisableCheckbox", {
            get: function () {
                return this._isDisableCheckbox;
            },
            set: function (value) {
                this._isDisableCheckbox = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isExpanded", {
            get: function () {
                return this._isExpanded;
            },
            set: function (value) {
                this._isExpanded = value;
                this.origin.expanded = value;
                this.afterValueChange('isExpanded');
                this.afterValueChange('reRender');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isSelected", {
            get: function () {
                return this._isSelected;
            },
            set: function (value) {
                this._isSelected = value;
                this.origin.selected = value;
                this.afterValueChange('isSelected');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNode.prototype, "isLoading", {
            get: function () {
                return this._isLoading;
            },
            set: function (value) {
                this._isLoading = value;
                this.update();
            },
            enumerable: false,
            configurable: true
        });
        NzTreeNode.prototype.setSyncChecked = function (checked, halfChecked) {
            if (checked === void 0) { checked = false; }
            if (halfChecked === void 0) { halfChecked = false; }
            this.setChecked(checked, halfChecked);
            if (this.treeService && !this.treeService.isCheckStrictly) {
                this.treeService.conduct(this);
            }
        };
        NzTreeNode.prototype.setChecked = function (checked, halfChecked) {
            if (checked === void 0) { checked = false; }
            if (halfChecked === void 0) { halfChecked = false; }
            this.origin.checked = checked;
            this.isChecked = checked;
            this.isHalfChecked = halfChecked;
        };
        NzTreeNode.prototype.setExpanded = function (value) {
            this._isExpanded = value;
            this.origin.expanded = value;
            this.afterValueChange('isExpanded');
        };
        NzTreeNode.prototype.getParentNode = function () {
            return this.parentNode;
        };
        NzTreeNode.prototype.getChildren = function () {
            return this.children;
        };
        /**
         * Support appending child nodes by position. Leaf node cannot be appended.
         */
        NzTreeNode.prototype.addChildren = function (children, childPos) {
            var _this = this;
            if (childPos === void 0) { childPos = -1; }
            if (!this.isLeaf) {
                children.forEach(function (node) {
                    var refreshLevel = function (n) {
                        n.getChildren().forEach(function (c) {
                            c.level = c.getParentNode().level + 1;
                            // flush origin
                            c.origin.level = c.level;
                            refreshLevel(c);
                        });
                    };
                    var child = node;
                    if (child instanceof NzTreeNode) {
                        child.parentNode = _this;
                    }
                    else {
                        child = new NzTreeNode(node, _this);
                    }
                    child.level = _this.level + 1;
                    child.origin.level = child.level;
                    refreshLevel(child);
                    try {
                        childPos === -1 ? _this.children.push(child) : _this.children.splice(childPos, 0, child);
                        // flush origin
                    }
                    catch (e) { }
                });
                this.origin.children = this.getChildren().map(function (v) { return v.origin; });
                // remove loading state
                this.isLoading = false;
            }
            this.afterValueChange('addChildren');
            this.afterValueChange('reRender');
        };
        NzTreeNode.prototype.clearChildren = function () {
            // refresh checked state
            this.afterValueChange('clearChildren');
            this.children = [];
            this.origin.children = [];
            this.afterValueChange('reRender');
        };
        NzTreeNode.prototype.remove = function () {
            var _this = this;
            var parentNode = this.getParentNode();
            if (parentNode) {
                parentNode.children = parentNode.getChildren().filter(function (v) { return v.key !== _this.key; });
                parentNode.origin.children = parentNode.origin.children.filter(function (v) { return v.key !== _this.key; });
                this.afterValueChange('remove');
                this.afterValueChange('reRender');
            }
        };
        NzTreeNode.prototype.afterValueChange = function (key) {
            if (this.treeService) {
                switch (key) {
                    case 'isChecked':
                        this.treeService.setCheckedNodeList(this);
                        break;
                    case 'isHalfChecked':
                        this.treeService.setHalfCheckedNodeList(this);
                        break;
                    case 'isExpanded':
                        this.treeService.setExpandedNodeList(this);
                        break;
                    case 'isSelected':
                        this.treeService.setNodeActive(this);
                        break;
                    case 'clearChildren':
                        this.treeService.afterRemove(this.getChildren());
                        break;
                    case 'remove':
                        this.treeService.afterRemove([this]);
                        break;
                    case 'reRender':
                        this.treeService.flattenTreeData(this.treeService.rootNodes, this.treeService.getExpandedNodeList().map(function (v) { return v.key; }));
                        break;
                }
            }
            this.update();
        };
        NzTreeNode.prototype.update = function () {
            if (this.component) {
                this.component.markForCheck();
            }
        };
        return NzTreeNode;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function isCheckDisabled(node) {
        var isDisabled = node.isDisabled, isDisableCheckbox = node.isDisableCheckbox;
        return !!(isDisabled || isDisableCheckbox);
    }
    function isInArray(needle, haystack) {
        return haystack.length > 0 && haystack.indexOf(needle) > -1;
    }
    function getPosition(level, index) {
        return level + "-" + index;
    }
    function getKey(key, pos) {
        if (key !== null && key !== undefined) {
            return key;
        }
        return pos;
    }
    /**
     * Flat nest tree data into flatten list. This is used for virtual list render.
     * @param treeNodeList Origin data node list
     * @param expandedKeys
     * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
     */
    function flattenTreeData(treeNodeList, expandedKeys) {
        if (treeNodeList === void 0) { treeNodeList = []; }
        if (expandedKeys === void 0) { expandedKeys = []; }
        var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
        var flattenList = [];
        function dig(list, parent) {
            if (parent === void 0) { parent = null; }
            return list.map(function (treeNode, index) {
                var pos = getPosition(parent ? parent.pos : '0', index);
                var mergedKey = getKey(treeNode.key, pos);
                treeNode.isStart = __spread((parent ? parent.isStart : []), [index === 0]);
                treeNode.isEnd = __spread((parent ? parent.isEnd : []), [index === list.length - 1]);
                // Add FlattenDataNode into list
                // TODO: only need data here.
                var flattenNode = {
                    parent: parent,
                    pos: pos,
                    children: [],
                    data: treeNode,
                    isStart: __spread((parent ? parent.isStart : []), [index === 0]),
                    isEnd: __spread((parent ? parent.isEnd : []), [index === list.length - 1])
                };
                flattenList.push(flattenNode);
                // Loop treeNode children
                if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
                    flattenNode.children = dig(treeNode.children || [], flattenNode);
                }
                else {
                    flattenNode.children = [];
                }
                return flattenNode;
            });
        }
        dig(treeNodeList);
        return flattenList;
    }

    var NzTreeBaseService = /** @class */ (function () {
        function NzTreeBaseService() {
            this.DRAG_SIDE_RANGE = 0.25;
            this.DRAG_MIN_GAP = 2;
            this.isCheckStrictly = false;
            this.isMultiple = false;
            this.rootNodes = [];
            this.flattenNodes$ = new rxjs.BehaviorSubject([]);
            this.selectedNodeList = [];
            this.expandedNodeList = [];
            this.checkedNodeList = [];
            this.halfCheckedNodeList = [];
            this.matchedNodeList = [];
        }
        /**
         * reset tree nodes will clear default node list
         */
        NzTreeBaseService.prototype.initTree = function (nzNodes) {
            this.rootNodes = nzNodes;
            this.expandedNodeList = nzNodes == null ? [] : nzNodes.filter(function (n) { return n.isExpanded; }); // this.expandedNodeList = [];
            this.selectedNodeList = nzNodes == null ? [] : nzNodes.filter(function (n) { return n.isSelected; }); // this.selectedNodeList = [];
            this.halfCheckedNodeList = nzNodes == null ? [] : nzNodes.filter(function (n) { return n.isHalfChecked; }); //this.halfCheckedNodeList = [];
            this.checkedNodeList = nzNodes == null ? [] : nzNodes.filter(function (n) { return n.isChecked; }); //this.checkedNodeList = [];
            this.matchedNodeList = nzNodes == null ? [] : nzNodes.filter(function (n) { return n.isMatched; }); //this.matchedNodeList = [];
        };
        NzTreeBaseService.prototype.flattenTreeData = function (nzNodes, expandedKeys) {
            if (expandedKeys === void 0) { expandedKeys = []; }
            this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map(function (item) { return item.data; }));
        };
        NzTreeBaseService.prototype.getSelectedNode = function () {
            return this.selectedNode;
        };
        /**
         * get some list
         */
        NzTreeBaseService.prototype.getSelectedNodeList = function () {
            return this.conductNodeState('select');
        };
        /**
         * return checked nodes
         */
        NzTreeBaseService.prototype.getCheckedNodeList = function () {
            return this.conductNodeState('check');
        };
        NzTreeBaseService.prototype.getHalfCheckedNodeList = function () {
            return this.conductNodeState('halfCheck');
        };
        /**
         * return expanded nodes
         */
        NzTreeBaseService.prototype.getExpandedNodeList = function () {
            return this.conductNodeState('expand');
        };
        /**
         * return search matched nodes
         */
        NzTreeBaseService.prototype.getMatchedNodeList = function () {
            return this.conductNodeState('match');
        };
        NzTreeBaseService.prototype.isArrayOfNzTreeNode = function (value) {
            return value.every(function (item) { return item instanceof NzTreeNode; });
        };
        /**
         * set drag node
         */
        NzTreeBaseService.prototype.setSelectedNode = function (node) {
            this.selectedNode = node;
        };
        /**
         * set node selected status
         */
        NzTreeBaseService.prototype.setNodeActive = function (node) {
            if (!this.isMultiple && node.isSelected) {
                this.selectedNodeList.forEach(function (n) {
                    if (node.key !== n.key) {
                        // reset other nodes
                        n.isSelected = false;
                    }
                });
                // single mode: remove pre node
                this.selectedNodeList = [];
            }
            this.setSelectedNodeList(node, this.isMultiple);
        };
        /**
         * add or remove node to selectedNodeList
         */
        NzTreeBaseService.prototype.setSelectedNodeList = function (node, isMultiple) {
            if (isMultiple === void 0) { isMultiple = false; }
            var index = this.getIndexOfArray(this.selectedNodeList, node.key);
            if (isMultiple) {
                if (node.isSelected && index === -1) {
                    this.selectedNodeList.push(node);
                }
            }
            else {
                if (node.isSelected && index === -1) {
                    this.selectedNodeList = [node];
                }
            }
            if (!node.isSelected) {
                this.selectedNodeList = this.selectedNodeList.filter(function (n) { return n.key !== node.key; });
            }
        };
        /**
         * merge checked nodes
         */
        NzTreeBaseService.prototype.setHalfCheckedNodeList = function (node) {
            var index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
            if (node.isHalfChecked && index === -1) {
                this.halfCheckedNodeList.push(node);
            }
            else if (!node.isHalfChecked && index > -1) {
                this.halfCheckedNodeList = this.halfCheckedNodeList.filter(function (n) { return node.key !== n.key; });
            }
        };
        NzTreeBaseService.prototype.setCheckedNodeList = function (node) {
            var index = this.getIndexOfArray(this.checkedNodeList, node.key);
            if (node.isChecked && index === -1) {
                this.checkedNodeList.push(node);
            }
            else if (!node.isChecked && index > -1) {
                this.checkedNodeList = this.checkedNodeList.filter(function (n) { return node.key !== n.key; });
            }
        };
        /**
         * conduct checked/selected/expanded keys
         */
        NzTreeBaseService.prototype.conductNodeState = function (type) {
            var _this = this;
            if (type === void 0) { type = 'check'; }
            var resultNodesList = [];
            switch (type) {
                case 'select':
                    resultNodesList = this.selectedNodeList;
                    break;
                case 'expand':
                    resultNodesList = this.expandedNodeList;
                    break;
                case 'match':
                    resultNodesList = this.matchedNodeList;
                    break;
                case 'check':
                    resultNodesList = this.checkedNodeList;
                    var isIgnore_1 = function (node) {
                        var parentNode = node.getParentNode();
                        if (parentNode) {
                            if (_this.checkedNodeList.findIndex(function (n) { return n.key === parentNode.key; }) > -1) {
                                return true;
                            }
                            else {
                                return isIgnore_1(parentNode);
                            }
                        }
                        return false;
                    };
                    // merge checked
                    if (!this.isCheckStrictly) {
                        resultNodesList = this.checkedNodeList.filter(function (n) { return !isIgnore_1(n); });
                    }
                    break;
                case 'halfCheck':
                    if (!this.isCheckStrictly) {
                        resultNodesList = this.halfCheckedNodeList;
                    }
                    break;
            }
            return resultNodesList;
        };
        /**
         * set expanded nodes
         */
        NzTreeBaseService.prototype.setExpandedNodeList = function (node) {
            if (node.isLeaf) {
                return;
            }
            var index = this.getIndexOfArray(this.expandedNodeList, node.key);
            if (node.isExpanded && index === -1) {
                this.expandedNodeList.push(node);
            }
            else if (!node.isExpanded && index > -1) {
                this.expandedNodeList.splice(index, 1);
            }
        };
        NzTreeBaseService.prototype.setMatchedNodeList = function (node) {
            var index = this.getIndexOfArray(this.matchedNodeList, node.key);
            if (node.isMatched && index === -1) {
                this.matchedNodeList.push(node);
            }
            else if (!node.isMatched && index > -1) {
                this.matchedNodeList.splice(index, 1);
            }
        };
        /**
         * check state
         * @param isCheckStrictly
         */
        NzTreeBaseService.prototype.refreshCheckState = function (isCheckStrictly) {
            var _this = this;
            if (isCheckStrictly === void 0) { isCheckStrictly = false; }
            if (isCheckStrictly) {
                return;
            }
            this.checkedNodeList.forEach(function (node) {
                _this.conduct(node, isCheckStrictly);
            });
        };
        // reset other node checked state based current node
        NzTreeBaseService.prototype.conduct = function (node, isCheckStrictly) {
            if (isCheckStrictly === void 0) { isCheckStrictly = false; }
            var isChecked = node.isChecked;
            if (node && !isCheckStrictly) {
                this.conductUp(node);
                this.conductDown(node, isChecked);
            }
        };
        /**
         * 1、children half checked
         * 2、children all checked, parent checked
         * 3、no children checked
         */
        NzTreeBaseService.prototype.conductUp = function (node) {
            var parentNode = node.getParentNode();
            if (parentNode) {
                if (!isCheckDisabled(parentNode)) {
                    if (parentNode.children.every(function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); })) {
                        parentNode.isChecked = true;
                        parentNode.isHalfChecked = false;
                    }
                    else if (parentNode.children.some(function (child) { return child.isHalfChecked || child.isChecked; })) {
                        parentNode.isChecked = false;
                        parentNode.isHalfChecked = true;
                    }
                    else {
                        parentNode.isChecked = false;
                        parentNode.isHalfChecked = false;
                    }
                }
                this.setCheckedNodeList(parentNode);
                this.setHalfCheckedNodeList(parentNode);
                this.conductUp(parentNode);
            }
        };
        /**
         * reset child check state
         */
        NzTreeBaseService.prototype.conductDown = function (node, value) {
            var _this = this;
            if (!isCheckDisabled(node)) {
                node.isChecked = value;
                node.isHalfChecked = false;
                this.setCheckedNodeList(node);
                this.setHalfCheckedNodeList(node);
                node.children.forEach(function (n) {
                    _this.conductDown(n, value);
                });
            }
        };
        /**
         * flush after delete node
         */
        NzTreeBaseService.prototype.afterRemove = function (nodes) {
            var _this = this;
            // to reset selectedNodeList & expandedNodeList
            var loopNode = function (node) {
                // remove selected node
                _this.selectedNodeList = _this.selectedNodeList.filter(function (n) { return n.key !== node.key; });
                // remove expanded node
                _this.expandedNodeList = _this.expandedNodeList.filter(function (n) { return n.key !== node.key; });
                // remove checked node
                _this.checkedNodeList = _this.checkedNodeList.filter(function (n) { return n.key !== node.key; });
                if (node.children) {
                    node.children.forEach(function (child) {
                        loopNode(child);
                    });
                }
            };
            nodes.forEach(function (n) {
                loopNode(n);
            });
            this.refreshCheckState(this.isCheckStrictly);
        };
        /**
         * drag event
         */
        NzTreeBaseService.prototype.refreshDragNode = function (node) {
            var _this = this;
            if (node.children.length === 0) {
                // until root
                this.conductUp(node);
            }
            else {
                node.children.forEach(function (child) {
                    _this.refreshDragNode(child);
                });
            }
        };
        // reset node level
        NzTreeBaseService.prototype.resetNodeLevel = function (node) {
            var e_1, _a;
            var parentNode = node.getParentNode();
            if (parentNode) {
                node.level = parentNode.level + 1;
            }
            else {
                node.level = 0;
            }
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    this.resetNodeLevel(child);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        NzTreeBaseService.prototype.calcDropPosition = function (event) {
            var clientY = event.clientY;
            // to fix firefox undefined
            var _a = event.target.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
            var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
            if (clientY <= top + des) {
                return -1;
            }
            else if (clientY >= bottom - des) {
                return 1;
            }
            return 0;
        };
        /**
         * drop
         * 0: inner -1: pre 1: next
         */
        NzTreeBaseService.prototype.dropAndApply = function (targetNode, dragPos) {
            var _this = this;
            if (dragPos === void 0) { dragPos = -1; }
            if (!targetNode || dragPos > 1) {
                return;
            }
            var treeService = targetNode.treeService;
            var targetParent = targetNode.getParentNode();
            var isSelectedRootNode = this.selectedNode.getParentNode();
            // remove the dragNode
            if (isSelectedRootNode) {
                isSelectedRootNode.children = isSelectedRootNode.children.filter(function (n) { return n.key !== _this.selectedNode.key; });
            }
            else {
                this.rootNodes = this.rootNodes.filter(function (n) { return n.key !== _this.selectedNode.key; });
            }
            switch (dragPos) {
                case 0:
                    targetNode.addChildren([this.selectedNode]);
                    this.resetNodeLevel(targetNode);
                    break;
                case -1:
                case 1:
                    var tIndex = dragPos === 1 ? 1 : 0;
                    if (targetParent) {
                        targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                        var parentNode = this.selectedNode.getParentNode();
                        if (parentNode) {
                            this.resetNodeLevel(parentNode);
                        }
                    }
                    else {
                        var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                        // Insert root node.
                        this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                        this.rootNodes[targetIndex].parentNode = null;
                        this.resetNodeLevel(this.rootNodes[targetIndex]);
                    }
                    break;
            }
            // flush all nodes
            this.rootNodes.forEach(function (child) {
                if (!child.treeService) {
                    child.service = treeService;
                }
                _this.refreshDragNode(child);
            });
        };
        /**
         * emit Structure
         * eventName
         * node
         * event: MouseEvent / DragEvent
         * dragNode
         */
        NzTreeBaseService.prototype.formatEvent = function (eventName, node, event) {
            var emitStructure = {
                eventName: eventName,
                node: node,
                event: event
            };
            switch (eventName) {
                case 'dragstart':
                case 'dragenter':
                case 'dragover':
                case 'dragleave':
                case 'drop':
                case 'dragend':
                    Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                    break;
                case 'click':
                case 'dblclick':
                    Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                    Object.assign(emitStructure, { nodes: this.selectedNodeList });
                    Object.assign(emitStructure, { keys: this.selectedNodeList.map(function (n) { return n.key; }) });
                    break;
                case 'check':
                    var checkedNodeList = this.getCheckedNodeList();
                    Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                    Object.assign(emitStructure, { nodes: checkedNodeList });
                    Object.assign(emitStructure, { keys: checkedNodeList.map(function (n) { return n.key; }) });
                    break;
                case 'search':
                    Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                    Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                    Object.assign(emitStructure, { keys: this.getMatchedNodeList().map(function (n) { return n.key; }) });
                    break;
                case 'expand':
                    Object.assign(emitStructure, { nodes: this.expandedNodeList });
                    Object.assign(emitStructure, { keys: this.expandedNodeList.map(function (n) { return n.key; }) });
                    break;
            }
            return emitStructure;
        };
        /**
         * New functions for flatten nodes
         */
        NzTreeBaseService.prototype.getIndexOfArray = function (list, key) {
            return list.findIndex(function (v) { return v.key === key; });
        };
        /**
         * Render by nzCheckedKeys
         * When keys equals null, just render with checkStrictly
         * @param keys
         * @param checkStrictly
         */
        NzTreeBaseService.prototype.conductCheck = function (keys, checkStrictly) {
            this.checkedNodeList = [];
            this.halfCheckedNodeList = [];
            var calc = function (nodes) {
                nodes.forEach(function (node) {
                    if (keys === null) {
                        // render tree if no default checked keys found
                        node.isChecked = !!node.origin.checked;
                    }
                    else {
                        if (isInArray(node.key, keys || [])) {
                            node.isChecked = true;
                            node.isHalfChecked = false;
                        }
                        else {
                            node.isChecked = false;
                            node.isHalfChecked = false;
                        }
                    }
                    if (node.children.length > 0) {
                        calc(node.children);
                    }
                });
            };
            calc(this.rootNodes);
            this.refreshCheckState(checkStrictly);
        };
        NzTreeBaseService.prototype.conductExpandedKeys = function (keys) {
            var _this = this;
            if (keys === void 0) { keys = []; }
            var expandedKeySet = new Set(keys === true ? [] : keys);
            this.expandedNodeList = [];
            var calc = function (nodes) {
                nodes.forEach(function (node) {
                    node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
                    if (node.isExpanded) {
                        _this.setExpandedNodeList(node);
                    }
                    if (node.children.length > 0) {
                        calc(node.children);
                    }
                });
            };
            calc(this.rootNodes);
        };
        NzTreeBaseService.prototype.conductSelectedKeys = function (keys, isMulti) {
            var _this = this;
            this.selectedNodeList.forEach(function (node) { return (node.isSelected = false); });
            this.selectedNodeList = [];
            var calc = function (nodes) {
                return nodes.every(function (node) {
                    if (isInArray(node.key, keys)) {
                        node.isSelected = true;
                        _this.setSelectedNodeList(node);
                        if (!isMulti) {
                            // if not support multi select
                            return false;
                        }
                    }
                    else {
                        node.isSelected = false;
                    }
                    if (node.children.length > 0) {
                        // Recursion
                        return calc(node.children);
                    }
                    return true;
                });
            };
            calc(this.rootNodes);
        };
        /**
         * Expand parent nodes by child node
         * @param node
         */
        NzTreeBaseService.prototype.expandNodeAllParentBySearch = function (node) {
            var _this = this;
            var calc = function (n) {
                if (n) {
                    n.canHide = false;
                    n.setExpanded(true);
                    _this.setExpandedNodeList(n);
                    if (n.getParentNode()) {
                        return calc(n.getParentNode());
                    }
                }
            };
            calc(node.getParentNode());
        };
        return NzTreeBaseService;
    }());
    NzTreeBaseService.decorators = [
        { type: core.Injectable }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeHigherOrderServiceToken = new core.InjectionToken('NzTreeHigherOrder');

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeBase = /** @class */ (function () {
        function NzTreeBase(nzTreeService) {
            this.nzTreeService = nzTreeService;
        }
        /**
         * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
         */
        NzTreeBase.prototype.coerceTreeNodes = function (value) {
            var _this = this;
            var nodes = [];
            if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
                // has not been new NzTreeNode
                nodes = value.map(function (item) { return new NzTreeNode(item, null, _this.nzTreeService); });
            }
            else {
                nodes = value.map(function (item) {
                    item.service = _this.nzTreeService;
                    return item;
                });
            }
            return nodes;
        };
        /**
         * Get all nodes({@link NzTreeNode})
         */
        NzTreeBase.prototype.getTreeNodes = function () {
            return this.nzTreeService.rootNodes;
        };
        /**
         * Get {@link NzTreeNode} with key
         */
        NzTreeBase.prototype.getTreeNodeByKey = function (key) {
            // flat tree nodes
            var nodes = [];
            var getNode = function (node) {
                nodes.push(node);
                node.getChildren().forEach(function (n) {
                    getNode(n);
                });
            };
            this.getTreeNodes().forEach(function (n) {
                getNode(n);
            });
            return nodes.find(function (n) { return n.key === key; }) || null;
        };
        /**
         * Get checked nodes(merged)
         */
        NzTreeBase.prototype.getCheckedNodeList = function () {
            return this.nzTreeService.getCheckedNodeList();
        };
        /**
         * Get selected nodes
         */
        NzTreeBase.prototype.getSelectedNodeList = function () {
            return this.nzTreeService.getSelectedNodeList();
        };
        /**
         * Get half checked nodes
         */
        NzTreeBase.prototype.getHalfCheckedNodeList = function () {
            return this.nzTreeService.getHalfCheckedNodeList();
        };
        /**
         * Get expanded nodes
         */
        NzTreeBase.prototype.getExpandedNodeList = function () {
            return this.nzTreeService.getExpandedNodeList();
        };
        /**
         * Get matched nodes(if nzSearchValue is not null)
         */
        NzTreeBase.prototype.getMatchedNodeList = function () {
            return this.nzTreeService.getMatchedNodeList();
        };
        return NzTreeBase;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzTreeBase = NzTreeBase;
    exports.NzTreeBaseService = NzTreeBaseService;
    exports.NzTreeHigherOrderServiceToken = NzTreeHigherOrderServiceToken;
    exports.NzTreeNode = NzTreeNode;
    exports.flattenTreeData = flattenTreeData;
    exports.getKey = getKey;
    exports.getPosition = getPosition;
    exports.isCheckDisabled = isCheckDisabled;
    exports.isInArray = isInArray;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-core-tree.umd.js.map
