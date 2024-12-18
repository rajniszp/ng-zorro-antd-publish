(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/collections'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/spin'), require('d3-shape'), require('d3-drag'), require('d3-selection'), require('d3-zoom'), require('@angular/animations'), require('ng-zorro-antd/core/util'), require('d3-transition'), require('dagre-compound'), require('ng-zorro-antd/core/polyfill')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/graph', ['exports', '@angular/cdk/collections', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/core', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/icon', 'ng-zorro-antd/spin', 'd3-shape', 'd3-drag', 'd3-selection', 'd3-zoom', '@angular/animations', 'ng-zorro-antd/core/util', 'd3-transition', 'dagre-compound', 'ng-zorro-antd/core/polyfill'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].graph = {}), global.ng.cdk.collections, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.core, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].icon, global['ng-zorro-antd'].spin, global.d3Shape, global.d3Drag, global.d3Selection, global.d3Zoom, global.ng.animations, global['ng-zorro-antd'].core.util, global.d3Transition, global.dagreCompound, global['ng-zorro-antd'].core.polyfill));
}(this, (function (exports, collections, rxjs, operators, common, core, noAnimation, icon, spin, d3Shape, d3Drag, d3Selection, d3Zoom, animations, util, d3Transition, dagreCompound, polyfill) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    (function (NzGraphEdgeType) {
        NzGraphEdgeType["LINE"] = "line";
        NzGraphEdgeType["CURVE"] = "curve";
    })(exports.NzGraphEdgeType || (exports.NzGraphEdgeType = {}));
    function nzTypeDefinition() {
        return function (item) { return item; };
    }
    var NZ_GRAPH_LAYOUT_SETTING = {
        graph: {
            meta: {
                nodeSep: 50,
                rankSep: 50,
                edgeSep: 5
            }
        },
        subScene: {
            meta: {
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                labelHeight: 20
            }
        },
        nodeSize: {
            meta: {
                width: 50,
                maxLabelWidth: 0,
                height: 50
            },
            node: {
                width: 50,
                height: 50,
                labelOffset: 10,
                maxLabelWidth: 40
            },
            bridge: {
                width: 5,
                height: 5,
                radius: 2,
                labelOffset: 0
            }
        }
    };

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

    var NzGraphData = /** @class */ (function () {
        function NzGraphData(source) {
            var _a;
            this._data = new rxjs.BehaviorSubject({});
            /** A selection model with multi-selection to track expansion status. */
            this.expansionModel = new collections.SelectionModel(true);
            if (source) {
                (_a = this.expansionModel) === null || _a === void 0 ? void 0 : _a.clear();
                this.dataSource = source;
                this._data.next(source);
            }
        }
        /** Toggles one single data node's expanded/collapsed state. */
        NzGraphData.prototype.toggle = function (nodeName) {
            this.expansionModel.toggle(nodeName);
        };
        /** Expands one single data node. */
        NzGraphData.prototype.expand = function (nodeName) {
            var _b;
            var compound = this.dataSource.compound || {};
            var toBeSelected = this.findParents(compound, nodeName, [nodeName]);
            (_b = this.expansionModel).select.apply(_b, __spread(toBeSelected));
        };
        /** Collapses one single data node. */
        NzGraphData.prototype.collapse = function (nodeName) {
            var _b;
            var compound = this.dataSource.compound || {};
            var toBeDeselected = this.findChildren(compound, nodeName, [nodeName]);
            (_b = this.expansionModel).deselect.apply(_b, __spread(toBeDeselected));
        };
        /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
        NzGraphData.prototype.isExpanded = function (nodeName) {
            return this.expansionModel.isSelected(nodeName);
        };
        /** Collapse all dataNodes in the tree. */
        NzGraphData.prototype.collapseAll = function () {
            this.expansionModel.clear();
        };
        NzGraphData.prototype.expandAll = function () {
            var _b;
            (_b = this.expansionModel).select.apply(_b, __spread(Object.keys(this._data.value.compound || {})));
        };
        NzGraphData.prototype.setData = function (data) {
            var _a;
            (_a = this.expansionModel) === null || _a === void 0 ? void 0 : _a.clear();
            this.dataSource = data;
            this._data.next(data);
        };
        NzGraphData.prototype.connect = function () {
            var _this = this;
            var changes = [this._data, this.expansionModel.changed];
            return rxjs.merge.apply(void 0, __spread(changes)).pipe(operators.map(function () { return _this._data.value; }));
        };
        NzGraphData.prototype.disconnect = function () {
            // do nothing for now
        };
        NzGraphData.prototype.findParents = function (data, key, parents) {
            if (parents === void 0) { parents = []; }
            var parent = Object.keys(data)
                .filter(function (d) { return d !== key; })
                .find(function (d) { return data[d].includes(key); });
            if (!parent) {
                return parents;
            }
            else {
                return this.findParents(data, parent, __spread([parent], parents));
            }
        };
        NzGraphData.prototype.findChildren = function (data, key, children) {
            var _this = this;
            if (children === void 0) { children = []; }
            var groupIds = Object.keys(data);
            var child = (data[key] || []).filter(function (c) { return groupIds.includes(c); });
            if (child && child.length > 0) {
                return child.reduce(function (pre, cur) {
                    return Array.from(new Set(__spread(pre, _this.findChildren(data, cur, __spread(children, [cur])))));
                }, children);
            }
            return children;
        };
        return NzGraphData;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGraphDefsComponent = /** @class */ (function () {
        function NzGraphDefsComponent() {
        }
        return NzGraphDefsComponent;
    }());
    NzGraphDefsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'svg:defs[nz-graph-defs]',
                    template: "\n    <svg:marker\n      class=\"nz-graph-edge-marker\"\n      id=\"edge-end-arrow\"\n      viewBox=\"1 0 20 20\"\n      refX=\"8\"\n      refY=\"3.5\"\n      markerWidth=\"10\"\n      markerHeight=\"10\"\n      orient=\"auto\"\n    >\n      <svg:polygon points=\"0 0, 10 3.5, 0 7\"></svg:polygon>\n    </svg:marker>\n  "
                },] }
    ];
    NzGraphDefsComponent.ctorParameters = function () { return []; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGraphEdgeComponent = /** @class */ (function () {
        function NzGraphEdgeComponent(elementRef, ngZone, cdr) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.line = d3Shape.line()
                .x(function (d) { return d.x; })
                .y(function (d) { return d.y; })
                .curve(d3Shape.curveLinear);
            this.el = this.elementRef.nativeElement;
        }
        Object.defineProperty(NzGraphEdgeComponent.prototype, "id", {
            get: function () {
                var _a;
                return ((_a = this.edge) === null || _a === void 0 ? void 0 : _a.id) || this.edge.v + "--" + this.edge.w;
            },
            enumerable: false,
            configurable: true
        });
        NzGraphEdgeComponent.prototype.ngOnInit = function () {
            this.initElementStyle();
        };
        NzGraphEdgeComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            var edge = changes.edge, customTemplate = changes.customTemplate, edgeType = changes.edgeType;
            if (edge) {
                this.ngZone.onStable.pipe(operators.take(1)).subscribe(function () {
                    // Update path element if customTemplate set
                    if (customTemplate) {
                        _this.initElementStyle();
                    }
                    _this.setLine();
                    _this.cdr.markForCheck();
                });
            }
            if (edgeType) {
                var type = this.edgeType === exports.NzGraphEdgeType.LINE ? d3Shape.curveLinear : d3Shape.curveBasis;
                this.line = d3Shape.line()
                    .x(function (d) { return d.x; })
                    .y(function (d) { return d.y; })
                    .curve(type);
            }
        };
        NzGraphEdgeComponent.prototype.initElementStyle = function () {
            this.path = this.el.querySelector('path');
            this.setElementData();
        };
        NzGraphEdgeComponent.prototype.setLine = function () {
            this.setPath(this.line(this.edge.points));
        };
        NzGraphEdgeComponent.prototype.setPath = function (d) {
            this.path.setAttribute('d', d);
        };
        NzGraphEdgeComponent.prototype.setElementData = function () {
            if (!this.path) {
                return;
            }
            this.path.setAttribute('id', this.id);
            this.path.setAttribute('data-edge', this.id);
            this.path.setAttribute('data-v', "" + this.edge.v);
            this.path.setAttribute('data-w', "" + this.edge.w);
        };
        return NzGraphEdgeComponent;
    }());
    NzGraphEdgeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[nz-graph-edge]',
                    template: "\n    <ng-container *ngIf=\"customTemplate\" [ngTemplateOutlet]=\"customTemplate\" [ngTemplateOutletContext]=\"{ $implicit: edge }\"></ng-container>\n    <svg:g *ngIf=\"!customTemplate\">\n      <path class=\"nz-graph-edge-line\" [attr.marker-end]=\"'url(#edge-end-arrow)'\"></path>\n      <svg:text class=\"nz-graph-edge-text\" text-anchor=\"middle\" dy=\"10\" *ngIf=\"edge.label\">\n        <textPath [attr.href]=\"'#' + id\" startOffset=\"50%\">{{ edge.label }}</textPath>\n      </svg:text>\n    </svg:g>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NzGraphEdgeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef }
    ]; };
    NzGraphEdgeComponent.propDecorators = {
        edge: [{ type: core.Input }],
        edgeType: [{ type: core.Input }],
        customTemplate: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGraphEdgeDirective = /** @class */ (function () {
        function NzGraphEdgeDirective() {
        }
        return NzGraphEdgeDirective;
    }());
    NzGraphEdgeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nzGraphEdge]',
                    exportAs: 'nzGraphEdge'
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGraphGroupNodeDirective = /** @class */ (function () {
        function NzGraphGroupNodeDirective() {
        }
        return NzGraphGroupNodeDirective;
    }());
    NzGraphGroupNodeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nzGraphGroupNode]',
                    exportAs: 'nzGraphGroupNode'
                },] }
    ];

    var FRAC_VIEWPOINT_AREA = 0.8;
    var Minimap = /** @class */ (function () {
        function Minimap(svg, zoomG, mainZoom, minimap, maxWidth, labelPadding) {
            var _this = this;
            this.svg = svg;
            this.labelPadding = labelPadding;
            this.zoomG = zoomG;
            this.mainZoom = mainZoom;
            this.maxWidth = maxWidth;
            var minimapElement = d3Selection.select(minimap);
            var minimapSvgElement = minimapElement.select('svg');
            var viewpointElement = minimapSvgElement.select('rect');
            this.canvas = minimapElement.select('canvas.viewport').node();
            this.canvasRect = this.canvas.getBoundingClientRect();
            var handleEvent = function (event) {
                var minimapOffset = _this.minimapOffset();
                var width = Number(viewpointElement.attr('width'));
                var height = Number(viewpointElement.attr('height'));
                var clickCoords = d3Selection.pointer(event, minimapSvgElement.node());
                _this.viewpointCoord.x = clickCoords[0] - width / 2 - minimapOffset.x;
                _this.viewpointCoord.y = clickCoords[1] - height / 2 - minimapOffset.y;
                _this.updateViewpoint();
            };
            this.viewpointCoord = { x: 0, y: 0 };
            var dragEvent = d3Drag.drag().subject(Object).on('drag', handleEvent);
            viewpointElement.datum(this.viewpointCoord).call(dragEvent);
            // Make the minimap clickable.
            minimapSvgElement.on('click', function (event) {
                if (event.defaultPrevented) {
                    // This click was part of a drag event, so suppress it.
                    return;
                }
                handleEvent(event);
            });
            this.viewpoint = viewpointElement.node();
            this.minimapSvg = minimapSvgElement.node();
            this.minimap = minimap;
            this.canvasBuffer = minimapElement.select('canvas.buffer').node();
            this.update();
        }
        Minimap.prototype.minimapOffset = function () {
            return {
                x: (this.canvasRect.width - this.minimapSize.width) / 2,
                y: (this.canvasRect.height - this.minimapSize.height) / 2
            };
        };
        Minimap.prototype.updateViewpoint = function () {
            // Update the coordinates of the viewpoint rectangle.
            d3Selection.select(this.viewpoint).attr('x', this.viewpointCoord.x).attr('y', this.viewpointCoord.y);
            // Update the translation vector of the main svg to reflect the
            // new viewpoint.
            var mainX = (-this.viewpointCoord.x * this.scaleMain) / this.scaleMinimap;
            var mainY = (-this.viewpointCoord.y * this.scaleMain) / this.scaleMinimap;
            d3Selection.select(this.svg).call(this.mainZoom.transform, d3Zoom.zoomIdentity.translate(mainX, mainY).scale(this.scaleMain));
        };
        Minimap.prototype.update = function () {
            var e_1, _a, e_2, _b;
            var _this = this;
            var sceneSize = null;
            try {
                // Get the size of the entire scene.
                sceneSize = this.zoomG.getBBox();
                if (sceneSize.width === 0) {
                    // There is no scene anymore. We have been detached from the dom.
                    return;
                }
            }
            catch (e) {
                // Firefox produced NS_ERROR_FAILURE if we have been
                // detached from the dom.
                return;
            }
            var svgSelection = d3Selection.select(this.svg);
            // Read all the style rules in the document and embed them into the svg.
            // The svg needs to be self contained, i.e. all the style rules need to be
            // embedded so the canvas output matches the origin.
            var stylesText = '';
            try {
                for (var _c = __values(new Array(document.styleSheets.length).keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var k = _d.value;
                    try {
                        var cssRules = document.styleSheets[k].cssRules || document.styleSheets[k].rules;
                        if (cssRules == null) {
                            continue;
                        }
                        try {
                            for (var _e = (e_2 = void 0, __values(new Array(cssRules.length).keys())), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var i = _f.value;
                                // Remove tf-* selectors from the styles.
                                stylesText += cssRules[i].cssText.replace(/ ?tf-[\w-]+ ?/g, '') + '\n';
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                    catch (e) {
                        if (e.name !== 'SecurityError') {
                            throw e;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Temporarily add the css rules to the main svg.
            var svgStyle = svgSelection.append('style');
            svgStyle.text(stylesText);
            // Temporarily remove the zoom/pan transform from the main svg since we
            // want the minimap to show a zoomed-out and centered view.
            var zoomGSelection = d3Selection.select(this.zoomG);
            var zoomTransform = zoomGSelection.attr('transform');
            zoomGSelection.attr('transform', null);
            // Since we add padding, account for that here.
            sceneSize.height += this.labelPadding * 2;
            sceneSize.width += this.labelPadding * 2;
            // Temporarily assign an explicit width/height to the main svg, since
            // it doesn't have one (uses flex-box), but we need it for the canvas
            // to work.
            svgSelection.attr('width', sceneSize.width).attr('height', sceneSize.height);
            // Since the content inside the svg changed (e.g. a node was expanded),
            // the aspect ratio have also changed. Thus, we need to update the scale
            // factor of the minimap. The scale factor is determined such that both
            // the width and height of the minimap are <= maximum specified w/h.
            this.scaleMinimap = this.maxWidth / Math.max(sceneSize.width, sceneSize.height);
            this.minimapSize = {
                width: sceneSize.width * this.scaleMinimap,
                height: sceneSize.height * this.scaleMinimap
            };
            var minimapOffset = this.minimapOffset();
            // Update the size of the minimap's svg, the buffer canvas and the
            // viewpoint rect.
            d3Selection.select(this.minimapSvg).attr(this.minimapSize);
            d3Selection.select(this.canvasBuffer).attr(this.minimapSize);
            if (this.translate != null && this.zoom != null) {
                // Update the viewpoint rectangle shape since the aspect ratio of the
                // map has changed.
                requestAnimationFrame(function () { return _this.zoom(); });
            }
            // Serialize the main svg to a string which will be used as the rendering
            // content for the canvas.
            var svgXml = new XMLSerializer().serializeToString(this.svg);
            // Now that the svg is serialized for rendering, remove the temporarily
            // assigned styles, explicit width and height and bring back the pan/zoom
            // transform.
            svgStyle.remove();
            svgSelection.attr('width', '100%').attr('height', '100%');
            zoomGSelection.attr('transform', zoomTransform);
            var image = document.createElement('img');
            image.onload = function () {
                // Draw the svg content onto the buffer canvas.
                var context = _this.canvasBuffer.getContext('2d');
                context.clearRect(0, 0, _this.canvasBuffer.width, _this.canvasBuffer.height);
                context.drawImage(image, minimapOffset.x, minimapOffset.y, _this.minimapSize.width, _this.minimapSize.height);
                requestAnimationFrame(function () {
                    var _a;
                    // Hide the old canvas and show the new buffer canvas.
                    d3Selection.select(_this.canvasBuffer).style('display', 'block');
                    d3Selection.select(_this.canvas).style('display', 'none');
                    // Swap the two canvases.
                    _a = __read([_this.canvasBuffer, _this.canvas], 2), _this.canvas = _a[0], _this.canvasBuffer = _a[1];
                });
            };
            image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgXml);
        };
        /**
         * Handles changes in zooming/panning. Should be called from the main svg
         * to notify that a zoom/pan was performed and this minimap will update it's
         * viewpoint rectangle.
         * @param transform
         */
        Minimap.prototype.zoom = function (transform) {
            if (this.scaleMinimap == null) {
                // Scene is not ready yet.
                return;
            }
            // Update the new translate and scale params, only if specified.
            if (transform) {
                this.translate = [transform.x, transform.y];
                this.scaleMain = transform.k;
            }
            // Update the location of the viewpoint rectangle.
            var svgRect = this.svg.getBoundingClientRect();
            var minimapOffset = this.minimapOffset();
            var viewpointSelection = d3Selection.select(this.viewpoint);
            this.viewpointCoord.x = (-this.translate[0] * this.scaleMinimap) / this.scaleMain;
            this.viewpointCoord.y = (-this.translate[1] * this.scaleMinimap) / this.scaleMain;
            var viewpointWidth = (svgRect.width * this.scaleMinimap) / this.scaleMain;
            var viewpointHeight = (svgRect.height * this.scaleMinimap) / this.scaleMain;
            viewpointSelection
                .attr('x', this.viewpointCoord.x + minimapOffset.x)
                .attr('y', this.viewpointCoord.y + minimapOffset.y)
                .attr('width', viewpointWidth)
                .attr('height', viewpointHeight);
            // Show/hide the minimap depending on the viewpoint area as fraction of the
            // whole minimap.
            var mapWidth = this.minimapSize.width;
            var mapHeight = this.minimapSize.height;
            var x = this.viewpointCoord.x;
            var y = this.viewpointCoord.y;
            var w = Math.min(Math.max(0, x + viewpointWidth), mapWidth) - Math.min(Math.max(0, x), mapWidth);
            var h = Math.min(Math.max(0, y + viewpointHeight), mapHeight) - Math.min(Math.max(0, y), mapHeight);
            var fracIntersect = (w * h) / (mapWidth * mapHeight);
            if (fracIntersect < FRAC_VIEWPOINT_AREA) {
                this.minimap.classList.remove('hidden');
            }
            else {
                this.minimap.classList.add('hidden');
            }
        };
        return Minimap;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGraphMinimapComponent = /** @class */ (function () {
        function NzGraphMinimapComponent(elementRef) {
            this.elementRef = elementRef;
        }
        NzGraphMinimapComponent.prototype.ngOnInit = function () { };
        NzGraphMinimapComponent.prototype.init = function (containerEle, zoomBehavior) {
            var svgEle = containerEle.nativeElement.querySelector('svg');
            var zoomEle = containerEle.nativeElement.querySelector('svg > g');
            this.minimap = new Minimap(svgEle, zoomEle, zoomBehavior, this.elementRef.nativeElement, 150, 0);
        };
        NzGraphMinimapComponent.prototype.zoom = function (transform) {
            if (this.minimap) {
                this.minimap.zoom(transform);
            }
        };
        NzGraphMinimapComponent.prototype.update = function () {
            if (this.minimap) {
                this.minimap.update();
            }
        };
        return NzGraphMinimapComponent;
    }());
    NzGraphMinimapComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-graph-minimap',
                    template: "\n    <svg>\n      <defs>\n        <filter id=\"minimapDropShadow\" x=\"-20%\" y=\"-20%\" width=\"150%\" height=\"150%\">\n          <feOffset result=\"offOut\" in=\"SourceGraphic\" dx=\"1\" dy=\"1\"></feOffset>\n          <feColorMatrix\n            result=\"matrixOut\"\n            in=\"offOut\"\n            type=\"matrix\"\n            values=\"0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.5 0\"\n          ></feColorMatrix>\n          <feGaussianBlur result=\"blurOut\" in=\"matrixOut\" stdDeviation=\"2\"></feGaussianBlur>\n          <feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\"></feBlend>\n        </filter>\n      </defs>\n      <rect></rect>\n    </svg>\n    <canvas class=\"viewport\"></canvas>\n    <!-- Additional canvas to use as buffer to avoid flickering between updates -->\n    <canvas class=\"buffer\"></canvas>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.nz-graph-minimap]': 'true'
                    }
                },] }
    ];
    NzGraphMinimapComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGraphNodeComponent = /** @class */ (function () {
        function NzGraphNodeComponent(el, builder, renderer2) {
            this.el = el;
            this.builder = builder;
            this.renderer2 = renderer2;
            this.nodeClick = new core.EventEmitter();
            this.animationInfo = null;
            this.initialState = true;
            this.animationPlayer = null;
        }
        NzGraphNodeComponent.prototype.triggerClick = function (event) {
            event.preventDefault();
            this.nodeClick.emit(this.node);
        };
        NzGraphNodeComponent.prototype.makeAnimation = function () {
            var _this = this;
            var cur = this.getAnimationInfo();
            if (this.animationPlayer) {
                this.animationPlayer.destroy();
            }
            var animationFactory;
            var pre = Object.assign({}, this.animationInfo);
            if (this.initialState) {
                animationFactory = this.builder.build([
                    animations.style({ transform: "translate(" + cur.x + "px, " + cur.y + "px)" }),
                    animations.query('g', [
                        animations.style({
                            width: cur.width + "px",
                            height: cur.height + "px"
                        })
                    ])
                ]);
                this.initialState = false;
            }
            else {
                animationFactory = this.builder.build([
                    animations.style({ transform: "translate(" + pre.x + "px, " + pre.y + "px)" }),
                    animations.query('g', [
                        animations.style({
                            width: pre.width + "px",
                            height: pre.height + "px"
                        })
                    ]),
                    animations.group([
                        animations.query('g', [
                            animations.animate('150ms ease-out', animations.style({
                                width: cur.width + "px",
                                height: cur.height + "px"
                            }))
                        ]),
                        animations.animate('150ms ease-out', animations.style({ transform: "translate(" + cur.x + "px, " + cur.y + "px)" }))
                    ])
                ]);
            }
            this.animationInfo = cur;
            this.animationPlayer = animationFactory.create(this.el.nativeElement);
            this.animationPlayer.play();
            var done$ = new rxjs.Subject();
            this.animationPlayer.onDone(function () {
                // Need this for canvas for now.
                _this.renderer2.setAttribute(_this.el.nativeElement, 'transform', "translate(" + cur.x + ", " + cur.y + ")");
                done$.next();
                done$.complete();
            });
            return done$.asObservable();
        };
        NzGraphNodeComponent.prototype.makeNoAnimation = function () {
            var cur = this.getAnimationInfo();
            // Need this for canvas for now.
            this.renderer2.setAttribute(this.el.nativeElement, 'transform', "translate(" + cur.x + ", " + cur.y + ")");
        };
        NzGraphNodeComponent.prototype.getAnimationInfo = function () {
            var _a = this.nodeTransform(), x = _a.x, y = _a.y;
            return {
                width: this.node.width,
                height: this.node.height,
                x: x,
                y: y
            };
        };
        NzGraphNodeComponent.prototype.nodeTransform = function () {
            var x = this.computeCXPositionOfNodeShape() - this.node.width / 2;
            var y = this.node.y - this.node.height / 2;
            return { x: x, y: y };
        };
        NzGraphNodeComponent.prototype.computeCXPositionOfNodeShape = function () {
            if (this.node.expanded) {
                return this.node.x;
            }
            return this.node.x - this.node.width / 2 + this.node.coreBox.width / 2;
        };
        return NzGraphNodeComponent;
    }());
    NzGraphNodeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[nz-graph-node]',
                    template: "\n    <svg:g>\n      <ng-container\n        *ngIf=\"customTemplate\"\n        [ngTemplateOutlet]=\"customTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: node }\"\n      ></ng-container>\n      <ng-container *ngIf=\"!customTemplate\">\n        <svg:rect class=\"nz-graph-node-rect\" [attr.width]=\"node.width\" [attr.height]=\"node.height\"></svg:rect>\n        <svg:text x=\"10\" y=\"20\">{{ node.id || node.name }}</svg:text>\n      </ng-container>\n    </svg:g>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[id]': 'node.id || node.name',
                        '[class.nz-graph-node-expanded]': 'node.expanded',
                        '[class.nz-graph-group-node]': 'node.type===0',
                        '[class.nz-graph-base-node]': 'node.type===1',
                        '(click)': 'triggerClick($event)'
                    }
                },] }
    ];
    NzGraphNodeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: animations.AnimationBuilder },
        { type: core.Renderer2 }
    ]; };
    NzGraphNodeComponent.propDecorators = {
        node: [{ type: core.Input }],
        noAnimation: [{ type: core.Input }],
        customTemplate: [{ type: core.Input }],
        nodeClick: [{ type: core.Output }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzGraphNodeComponent.prototype, "noAnimation", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGraphNodeDirective = /** @class */ (function () {
        function NzGraphNodeDirective() {
        }
        return NzGraphNodeDirective;
    }());
    NzGraphNodeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nzGraphNode]',
                    exportAs: 'nzGraphNode'
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * Calculate position and scale
     * @param containerEle
     * @param targetEle
     * @param scale: if scale is set, skip calculate scale value
     */
    var calculateTransform = function (containerEle, targetEle, scale) {
        var containerEleSize = containerEle.getBoundingClientRect();
        var targetEleSize = targetEle.getBBox();
        if (!targetEleSize.width) {
            // There is no g element anymore.
            return null;
        }
        // TODO
        // leave some place when re-scale
        var scaleUnit = (containerEleSize.width - 48) / containerEleSize.width;
        var k = scale || Math.min(containerEleSize.width / targetEleSize.width, containerEleSize.height / targetEleSize.height, 1) * scaleUnit;
        var x = (containerEleSize.width - targetEleSize.width * k) / 2;
        var y = (containerEleSize.height - targetEleSize.height * k) / 2;
        return {
            x: x,
            y: y,
            k: k
        };
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    Selection.bind('transition', d3Transition.transition);
    var NzGraphZoomDirective = /** @class */ (function () {
        function NzGraphZoomDirective(element, cdr) {
            this.element = element;
            this.cdr = cdr;
            this.nzMinZoom = 0.1;
            this.nzMaxZoom = 10;
            this.nzTransformEvent = new core.EventEmitter();
            this.nzZoomChange = new core.EventEmitter();
            this.destroy$ = new rxjs.Subject();
        }
        NzGraphZoomDirective.prototype.ngAfterViewInit = function () {
            this.bind();
        };
        NzGraphZoomDirective.prototype.ngOnDestroy = function () {
            this.unbind();
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzGraphZoomDirective.prototype.bind = function () {
            var _this = this;
            this.svgElement = this.element.nativeElement.querySelector('svg');
            this.gZoomElement = this.element.nativeElement.querySelector('svg > g');
            var _b = this.element.nativeElement.getBoundingClientRect(), width = _b.width, height = _b.height;
            this.svgSelection = d3Selection.select(this.svgElement);
            this.zoomBehavior = d3Zoom.zoom()
                .extent([
                [0, 0],
                [width, height]
            ])
                .scaleExtent([this.nzMinZoom, this.nzMaxZoom])
                .on('zoom', function (e) {
                _this.zoomed(e);
            });
            this.svgSelection.call(this.zoomBehavior, d3Zoom.zoomIdentity.translate(0, 0).scale(this.nzZoom || 1));
            // Init with nzZoom
            this.reScale(0, this.nzZoom);
        };
        NzGraphZoomDirective.prototype.unbind = function () {
            var _a;
            // Destroy listener
            (_a = this.svgSelection) === null || _a === void 0 ? void 0 : _a.interrupt().selectAll('*').interrupt();
            if (this.zoomBehavior) {
                this.zoomBehavior.on('end', null).on('zoom', null);
            }
        };
        // Methods
        NzGraphZoomDirective.prototype.fitCenter = function (duration) {
            if (duration === void 0) { duration = 0; }
            this.reScale(duration);
        };
        NzGraphZoomDirective.prototype.focus = function (id, duration) {
            if (duration === void 0) { duration = 0; }
            // Make sure this node is under SVG container
            if (!this.svgElement.getElementById("" + id)) {
                return;
            }
            var node = this.svgElement.getElementById("" + id);
            var svgRect = this.svgElement.getBoundingClientRect();
            var position = this.getRelativePositionInfo(node);
            var svgTransform = d3Zoom.zoomTransform(this.svgElement);
            var centerX = (position.topLeft.x + position.bottomRight.x) / 2;
            var centerY = (position.topLeft.y + position.bottomRight.y) / 2;
            var dx = svgRect.left + svgRect.width / 2 - centerX;
            var dy = svgRect.top + svgRect.height / 2 - centerY;
            this.svgSelection
                .transition()
                .duration(duration)
                .call(this.zoomBehavior.translateBy, dx / svgTransform.k, dy / svgTransform.k);
        };
        /**
         * Handle zoom event
         * @param transform
         */
        NzGraphZoomDirective.prototype.zoomed = function (_b) {
            var transform = _b.transform;
            var x = transform.x, y = transform.y, k = transform.k;
            // Update g element transform
            this.gZoomElement.setAttribute('transform', "translate(" + x + ", " + y + ")scale(" + k + ")");
            this.nzZoom = k;
            this.nzZoomChange.emit(this.nzZoom);
            this.nzTransformEvent.emit(transform);
            this.cdr.markForCheck();
        };
        /**
         * Scale with zoom and duration
         * @param duration
         * @param scale
         * @private
         */
        NzGraphZoomDirective.prototype.reScale = function (duration, scale) {
            var _this = this;
            var transform = calculateTransform(this.svgElement, this.gZoomElement, scale);
            if (!transform) {
                return;
            }
            var x = transform.x, y = transform.y, k = transform.k;
            var zTransform = d3Zoom.zoomIdentity.translate(x, y).scale(Math.max(k, this.nzMinZoom));
            this.svgSelection
                .transition()
                .duration(duration)
                .call(this.zoomBehavior.transform, zTransform)
                .on('end.fitted', function () {
                _this.zoomBehavior.on('end.fitted', null);
            });
        };
        NzGraphZoomDirective.prototype.getRelativePositionInfo = function (node) {
            var nodeBox = node.getBBox();
            var nodeCtm = node.getScreenCTM();
            var pointTL = this.svgElement.createSVGPoint();
            var pointBR = this.svgElement.createSVGPoint();
            pointTL.x = nodeBox.x;
            pointTL.y = nodeBox.y;
            pointBR.x = nodeBox.x + nodeBox.width;
            pointBR.y = nodeBox.y + nodeBox.height;
            pointTL = pointTL.matrixTransform(nodeCtm);
            pointBR = pointBR.matrixTransform(nodeCtm);
            return {
                topLeft: pointTL,
                bottomRight: pointBR
            };
        };
        return NzGraphZoomDirective;
    }());
    NzGraphZoomDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nz-graph-zoom]',
                    exportAs: 'nzGraphZoom'
                },] }
    ];
    NzGraphZoomDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    NzGraphZoomDirective.propDecorators = {
        nzZoom: [{ type: core.Input }],
        nzMinZoom: [{ type: core.Input }],
        nzMaxZoom: [{ type: core.Input }],
        nzTransformEvent: [{ type: core.Output }],
        nzZoomChange: [{ type: core.Output }]
    };

    /** Checks whether an object is a data source. */
    function isDataSource(value) {
        // Check if the value is a DataSource by observing if it has a connect function. Cannot
        // be checked as an `instanceof DataSource` since people could create their own sources
        // that match the interface, but don't extend DataSource.
        return value && typeof value.connect === 'function';
    }
    var NzGraphComponent = /** @class */ (function () {
        function NzGraphComponent(cdr, elementRef, noAnimation, nzGraphZoom) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.noAnimation = noAnimation;
            this.nzGraphZoom = nzGraphZoom;
            this.nzRankDirection = 'LR';
            this.nzAutoSize = false;
            this.nzGraphInitialized = new core.EventEmitter();
            this.nzGraphRendered = new core.EventEmitter();
            this.nzNodeClick = new core.EventEmitter();
            this.requestId = -1;
            this.transformStyle = '';
            this.graphRenderedSubject$ = new rxjs.ReplaySubject(1);
            this.renderInfo = { labelHeight: 0 };
            this.mapOfNodeAttr = {};
            this.mapOfEdgeAttr = {};
            this.zoom = 1;
            this.typedNodes = nzTypeDefinition();
            this.layoutSetting = NZ_GRAPH_LAYOUT_SETTING;
            this.destroy$ = new rxjs.Subject();
            this.nodeTrackByFun = function (_, node) { return node.name; };
            this.edgeTrackByFun = function (_, edge) { return edge.v + "-" + edge.w; };
            this.subGraphTransform = function (node) {
                var x = node.x - node.coreBox.width / 2.0;
                var y = node.y - node.height / 2.0 + node.paddingTop;
                return "translate(" + x + ", " + y + ")";
            };
            this.coreTransform = function (node) {
                return "translate(0, " + (node.parentNodeName ? node.labelHeight : 0) + ")";
            };
        }
        NzGraphComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.graphRenderedSubject$.pipe(operators.take(1), operators.takeUntil(this.destroy$)).subscribe(function () {
                // Only zooming is not set, move graph to center
                if (!_this.nzGraphZoom) {
                    _this.fitCenter();
                }
                _this.nzGraphInitialized.emit(_this);
            });
        };
        NzGraphComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            var nzAutoFit = changes.nzAutoFit, nzRankDirection = changes.nzRankDirection, nzGraphData = changes.nzGraphData, nzGraphLayoutConfig = changes.nzGraphLayoutConfig;
            if (nzGraphLayoutConfig) {
                this.layoutSetting = this.mergeConfig(nzGraphLayoutConfig.currentValue);
            }
            if (nzGraphData) {
                if (this.dataSource !== this.nzGraphData) {
                    this._switchDataSource(this.nzGraphData);
                }
            }
            if ((nzAutoFit && !nzAutoFit.firstChange) || (nzRankDirection && !nzRankDirection.firstChange)) {
                // Render graph
                if (this.dataSource.dataSource) {
                    this.drawGraph(this.dataSource.dataSource, {
                        rankDirection: this.nzRankDirection,
                        expanded: this.dataSource.expansionModel.selected || []
                    }).then(function () {
                        _this.cdr.markForCheck();
                    });
                }
            }
            this.cdr.markForCheck();
        };
        NzGraphComponent.prototype.ngAfterViewInit = function () { };
        NzGraphComponent.prototype.ngAfterContentChecked = function () {
            if (this.dataSource && !this._dataSubscription) {
                this.observeRenderChanges();
            }
        };
        NzGraphComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.dataSource && typeof this.dataSource.disconnect === 'function') {
                this.dataSource.disconnect();
            }
            if (this._dataSubscription) {
                this._dataSubscription.unsubscribe();
                this._dataSubscription = null;
            }
            polyfill.cancelRequestAnimationFrame(this.requestId);
        };
        /**
         * Emit event
         */
        NzGraphComponent.prototype.clickNode = function (node) {
            this.nzNodeClick.emit(node);
        };
        /**
         * Move graph to center and scale automatically
         */
        NzGraphComponent.prototype.fitCenter = function () {
            var _b = calculateTransform(this.elementRef.nativeElement.querySelector('svg'), this.elementRef.nativeElement.querySelector('svg > g')), x = _b.x, y = _b.y, k = _b.k;
            if (k) {
                this.zoom = k;
                this.transformStyle = "translate(" + x + ", " + y + ")scale(" + k + ")";
            }
            this.cdr.markForCheck();
        };
        /**
         * re-Draw graph
         * @param data
         * @param options
         * @param needResize
         */
        NzGraphComponent.prototype.drawGraph = function (data, options, needResize) {
            var _this = this;
            if (needResize === void 0) { needResize = false; }
            return new Promise(function (resolve) {
                _this.requestId = requestAnimationFrame(function () {
                    var renderInfo = _this.buildGraphInfo(data, options);
                    // TODO
                    // Need better performance
                    _this.renderInfo = renderInfo;
                    _this.cdr.markForCheck();
                    _this.requestId = requestAnimationFrame(function () {
                        var _a;
                        _this.drawNodes(!((_a = _this.noAnimation) === null || _a === void 0 ? void 0 : _a.nzNoAnimation)).then(function () {
                            // Update element
                            _this.cdr.markForCheck();
                            if (needResize) {
                                _this.resizeNodeSize().then(function () {
                                    var dataSource = _this.dataSource.dataSource;
                                    _this.drawGraph(dataSource, options, false).then(function () { return resolve(); });
                                });
                            }
                            else {
                                _this.graphRenderedSubject$.next();
                                _this.nzGraphRendered.emit(_this);
                                resolve();
                            }
                        });
                    });
                });
                _this.cdr.markForCheck();
            });
        };
        /**
         * Redraw all nodes
         * @param animate
         */
        NzGraphComponent.prototype.drawNodes = function (animate) {
            var _this = this;
            if (animate === void 0) { animate = true; }
            return new Promise(function (resolve) {
                if (animate) {
                    _this.makeNodesAnimation().subscribe(function () {
                        resolve();
                    });
                }
                else {
                    _this.listOfNodeComponent.map(function (node) {
                        node.makeNoAnimation();
                    });
                    resolve();
                }
            });
        };
        NzGraphComponent.prototype.resizeNodeSize = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var _a;
                var dataSource = _this.dataSource.dataSource;
                var scale = ((_a = _this.nzGraphZoom) === null || _a === void 0 ? void 0 : _a.nzZoom) || _this.zoom || 1;
                _this.listOfNodeElement.forEach(function (nodeEle) {
                    var _a;
                    var contentEle = nodeEle.nativeElement;
                    if (contentEle) {
                        var width = void 0;
                        var height = void 0;
                        // Check if foreignObject is set
                        var clientRect = (_a = contentEle.querySelector('foreignObject > :first-child')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                        if (clientRect) {
                            width = clientRect.width;
                            height = clientRect.height;
                        }
                        else {
                            var bBoxRect = contentEle.getBBox();
                            width = bBoxRect.width;
                            height = bBoxRect.height;
                            // getBBox will return actual value
                            scale = 1;
                        }
                        // Element id type is string
                        var node = dataSource.nodes.find(function (n) { return "" + n.id === nodeEle.nativeElement.id; });
                        if (node && width && height) {
                            node.height = height / scale;
                            node.width = width / scale;
                        }
                    }
                });
                resolve();
            });
        };
        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the node outlet. Otherwise start listening for new data.
         */
        NzGraphComponent.prototype._switchDataSource = function (dataSource) {
            if (this.dataSource && typeof this.dataSource.disconnect === 'function') {
                this.nzGraphData.disconnect();
            }
            if (this._dataSubscription) {
                this._dataSubscription.unsubscribe();
                this._dataSubscription = null;
            }
            this.dataSource = dataSource;
            this.observeRenderChanges();
        };
        /** Set up a subscription for the data provided by the data source. */
        NzGraphComponent.prototype.observeRenderChanges = function () {
            var _this = this;
            var dataStream;
            var graphOptions = {
                rankDirection: this.nzRankDirection
            };
            if (isDataSource(this.dataSource)) {
                dataStream = this.dataSource.connect();
            }
            if (dataStream) {
                this._dataSubscription = dataStream.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                    graphOptions = {
                        rankDirection: _this.nzRankDirection,
                        expanded: _this.nzGraphData.expansionModel.selected
                    };
                    _this.drawGraph(data, graphOptions, _this.nzAutoSize).then(function () {
                        _this.cdr.detectChanges();
                    });
                });
            }
            else {
                throw Error("A valid data source must be provided.");
            }
        };
        /**
         * Get renderInfo and prepare some data
         * @param data
         * @param options
         * @private
         */
        NzGraphComponent.prototype.buildGraphInfo = function (data, options) {
            var _this = this;
            this.parseInfo(data);
            var renderInfo = dagreCompound.buildGraph(data, options, this.layoutSetting);
            var dig = function (nodes) {
                nodes.forEach(function (node) {
                    var x = node.x, y = node.y;
                    node.xOffset = x;
                    node.yOffset = y;
                    if (node.type === 1 && _this.mapOfNodeAttr.hasOwnProperty(node.name)) {
                        Object.assign(node, _this.mapOfNodeAttr[node.name]);
                    }
                    else if (node.type === 0) {
                        node.edges.forEach(function (edge) {
                            if (_this.mapOfEdgeAttr.hasOwnProperty(edge.v + "-" + edge.w)) {
                                Object.assign(edge, _this.mapOfEdgeAttr[edge.v + "-" + edge.w]);
                            }
                        });
                        dig(node.nodes);
                    }
                });
            };
            dig(renderInfo.nodes);
            // Assign data to edges of root graph
            renderInfo.edges.forEach(function (edge) {
                if (_this.mapOfEdgeAttr.hasOwnProperty(edge.v + "-" + edge.w)) {
                    Object.assign(edge, _this.mapOfEdgeAttr[edge.v + "-" + edge.w]);
                }
            });
            return renderInfo;
        };
        /**
         * Play with animation
         * @private
         */
        NzGraphComponent.prototype.makeNodesAnimation = function () {
            var _this = this;
            return rxjs.forkJoin.apply(void 0, __spread(this.listOfNodeComponent.map(function (node) { return node.makeAnimation(); }))).pipe(operators.finalize(function () {
                _this.cdr.detectChanges();
            }));
        };
        NzGraphComponent.prototype.parseInfo = function (data) {
            var _this = this;
            data.nodes.forEach(function (n) {
                _this.mapOfNodeAttr[n.id] = n;
            });
            data.edges.forEach(function (e) {
                _this.mapOfEdgeAttr[e.v + "-" + e.w] = e;
            });
        };
        /**
         * Merge config with user inputs
         * @param config
         * @private
         */
        NzGraphComponent.prototype.mergeConfig = function (config) {
            var graphMeta = (config === null || config === void 0 ? void 0 : config.layout) || {};
            var subSceneMeta = (config === null || config === void 0 ? void 0 : config.subScene) || {};
            var defaultNodeMeta = (config === null || config === void 0 ? void 0 : config.defaultNode) || {};
            var defaultCompoundNodeMeta = (config === null || config === void 0 ? void 0 : config.defaultCompoundNode) || {};
            var bridge = NZ_GRAPH_LAYOUT_SETTING.nodeSize.bridge;
            var graph = { meta: Object.assign(Object.assign({}, NZ_GRAPH_LAYOUT_SETTING.graph.meta), graphMeta) };
            var subScene = {
                meta: Object.assign(Object.assign({}, NZ_GRAPH_LAYOUT_SETTING.subScene.meta), subSceneMeta)
            };
            var nodeSize = {
                meta: Object.assign(Object.assign({}, NZ_GRAPH_LAYOUT_SETTING.nodeSize.meta), defaultCompoundNodeMeta),
                node: Object.assign(Object.assign({}, NZ_GRAPH_LAYOUT_SETTING.nodeSize.node), defaultNodeMeta),
                bridge: bridge
            };
            return { graph: graph, subScene: subScene, nodeSize: nodeSize };
        };
        return NzGraphComponent;
    }());
    NzGraphComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-graph',
                    exportAs: 'nzGraph',
                    template: "\n    <ng-content></ng-content>\n    <svg width=\"100%\" height=\"100%\">\n      <svg:defs nz-graph-defs></svg:defs>\n      <svg:g [attr.transform]=\"transformStyle\">\n        <ng-container\n          [ngTemplateOutlet]=\"groupTemplate\"\n          [ngTemplateOutletContext]=\"{ renderNode: renderInfo, type: 'root' }\"\n        ></ng-container>\n      </svg:g>\n    </svg>\n\n    <ng-template #groupTemplate let-renderNode=\"renderNode\" let-type=\"type\">\n      <svg:g [attr.transform]=\"type === 'sub' ? subGraphTransform(renderNode) : null\">\n        <svg:g class=\"core\" [attr.transform]=\"coreTransform(renderNode)\">\n          <svg:g class=\"nz-graph-edges\">\n            <ng-container *ngFor=\"let edge of renderNode.edges; trackBy: edgeTrackByFun\">\n              <g\n                class=\"nz-graph-edge\"\n                nz-graph-edge\n                [edge]=\"edge\"\n                [edgeType]=\"nzGraphLayoutConfig?.defaultEdge?.type\"\n                [customTemplate]=\"customGraphEdgeTemplate\"\n              ></g>\n            </ng-container>\n          </svg:g>\n\n          <svg:g class=\"nz-graph-nodes\">\n            <ng-container *ngFor=\"let node of typedNodes(renderNode.nodes); trackBy: nodeTrackByFun\">\n              <g\n                *ngIf=\"node.type === 1\"\n                class=\"nz-graph-node\"\n                nz-graph-node\n                [node]=\"node\"\n                [customTemplate]=\"nodeTemplate\"\n                (nodeClick)=\"clickNode($event)\"\n              ></g>\n              <g\n                *ngIf=\"node.type === 0\"\n                class=\"nz-graph-node\"\n                nz-graph-node\n                [node]=\"node\"\n                [customTemplate]=\"groupNodeTemplate\"\n                (nodeClick)=\"clickNode($event)\"\n              ></g>\n              <ng-container\n                *ngIf=\"node.expanded\"\n                [ngTemplateOutlet]=\"groupTemplate\"\n                [ngTemplateOutletContext]=\"{ renderNode: node, type: 'sub' }\"\n              ></ng-container>\n            </ng-container>\n          </svg:g>\n        </svg:g>\n      </svg:g>\n    </ng-template>\n  ",
                    host: {
                        '[class.nz-graph]': 'true',
                        '[class.nz-graph-auto-size]': 'nzAutoSize'
                    }
                },] }
    ];
    NzGraphComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] },
        { type: NzGraphZoomDirective, decorators: [{ type: core.Optional }] }
    ]; };
    NzGraphComponent.propDecorators = {
        listOfNodeElement: [{ type: core.ViewChildren, args: [NzGraphNodeComponent, { read: core.ElementRef },] }],
        listOfNodeComponent: [{ type: core.ViewChildren, args: [NzGraphNodeComponent,] }],
        nodeTemplate: [{ type: core.ContentChild, args: [NzGraphNodeDirective, { static: true, read: core.TemplateRef },] }],
        groupNodeTemplate: [{ type: core.ContentChild, args: [NzGraphGroupNodeDirective, { static: true, read: core.TemplateRef },] }],
        customGraphEdgeTemplate: [{ type: core.ContentChild, args: [NzGraphEdgeDirective, { static: true, read: core.TemplateRef },] }],
        nzGraphData: [{ type: core.Input }],
        nzRankDirection: [{ type: core.Input }],
        nzGraphLayoutConfig: [{ type: core.Input }],
        nzAutoSize: [{ type: core.Input }],
        nzGraphInitialized: [{ type: core.Output }],
        nzGraphRendered: [{ type: core.Output }],
        nzNodeClick: [{ type: core.Output }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzGraphComponent.prototype, "nzAutoSize", void 0);

    var COMPONENTS = [
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
    var NzGraphModule = /** @class */ (function () {
        function NzGraphModule() {
        }
        return NzGraphModule;
    }());
    NzGraphModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: __spread(COMPONENTS),
                    imports: [common.CommonModule, icon.NzIconModule, spin.NzSpinModule, noAnimation.NzNoAnimationModule],
                    exports: __spread(COMPONENTS)
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NZ_GRAPH_LAYOUT_SETTING = NZ_GRAPH_LAYOUT_SETTING;
    exports.NzGraphComponent = NzGraphComponent;
    exports.NzGraphData = NzGraphData;
    exports.NzGraphEdgeComponent = NzGraphEdgeComponent;
    exports.NzGraphEdgeDirective = NzGraphEdgeDirective;
    exports.NzGraphGroupNodeDirective = NzGraphGroupNodeDirective;
    exports.NzGraphMinimapComponent = NzGraphMinimapComponent;
    exports.NzGraphModule = NzGraphModule;
    exports.NzGraphNodeComponent = NzGraphNodeComponent;
    exports.NzGraphNodeDirective = NzGraphNodeDirective;
    exports.NzGraphZoomDirective = NzGraphZoomDirective;
    exports.isDataSource = isDataSource;
    exports.nzTypeDefinition = nzTypeDefinition;
    exports.ɵa = NzGraphDefsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-graph.umd.js.map
