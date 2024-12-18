(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/scrolling'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core/highlight'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/tree'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree', ['exports', '@angular/cdk/bidi', '@angular/cdk/scrolling', '@angular/common', '@angular/core', 'ng-zorro-antd/core/highlight', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/tree', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/forms', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tree = {}), global.ng.cdk.bidi, global.ng.cdk.scrolling, global.ng.common, global.ng.core, global['ng-zorro-antd'].core.highlight, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core.tree, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.forms, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config));
}(this, (function (exports, bidi, scrolling, common, core, highlight, noAnimation, outlet, icon, tree, util, rxjs, operators, forms, animation, config) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeDropIndicatorComponent = /** @class */ (function () {
        function NzTreeDropIndicatorComponent(cdr) {
            this.cdr = cdr;
            this.level = 1;
            this.direction = 'ltr';
            this.style = {};
        }
        NzTreeDropIndicatorComponent.prototype.ngOnChanges = function (_changes) {
            this.renderIndicator(this.dropPosition, this.direction);
        };
        NzTreeDropIndicatorComponent.prototype.renderIndicator = function (dropPosition, direction) {
            var _a;
            if (direction === void 0) { direction = 'ltr'; }
            var offset = 4;
            var startPosition = direction === 'ltr' ? 'left' : 'right';
            var endPosition = direction === 'ltr' ? 'right' : 'left';
            var style = (_a = {},
                _a[startPosition] = offset + "px",
                _a[endPosition] = '0px',
                _a);
            switch (dropPosition) {
                case -1:
                    style.top = -3 + "px";
                    break;
                case 1:
                    style.bottom = -3 + "px";
                    break;
                case 0:
                    // dropPosition === 0
                    style.bottom = -3 + "px";
                    style[startPosition] = offset + 24 + "px";
                    break;
                default:
                    style.display = 'none';
                    break;
            }
            this.style = style;
            this.cdr.markForCheck();
        };
        return NzTreeDropIndicatorComponent;
    }());
    NzTreeDropIndicatorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-tree-drop-indicator',
                    exportAs: 'NzTreeDropIndicator',
                    template: "",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-tree-drop-indicator]': 'true',
                        '[style]': 'style'
                    }
                },] }
    ];
    NzTreeDropIndicatorComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NzTreeDropIndicatorComponent.propDecorators = {
        dropPosition: [{ type: core.Input }],
        level: [{ type: core.Input }],
        direction: [{ type: core.Input }]
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

    var NzTreeIndentComponent = /** @class */ (function () {
        function NzTreeIndentComponent() {
            this.nzTreeLevel = 0;
            this.nzIsStart = [];
            this.nzIsEnd = [];
            this.nzSelectMode = false;
            this.listOfUnit = [];
        }
        NzTreeIndentComponent.prototype.ngOnInit = function () { };
        NzTreeIndentComponent.prototype.ngOnChanges = function (changes) {
            var nzTreeLevel = changes.nzTreeLevel;
            if (nzTreeLevel) {
                this.listOfUnit = __spread(new Array(nzTreeLevel.currentValue || 0));
            }
        };
        return NzTreeIndentComponent;
    }());
    NzTreeIndentComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-tree-indent',
                    exportAs: 'nzTreeIndent',
                    template: "\n    <span\n      [class.ant-tree-indent-unit]=\"!nzSelectMode\"\n      [class.ant-select-tree-indent-unit]=\"nzSelectMode\"\n      [class.ant-select-tree-indent-unit-start]=\"nzSelectMode && nzIsStart[i]\"\n      [class.ant-tree-indent-unit-start]=\"!nzSelectMode && nzIsStart[i]\"\n      [class.ant-select-tree-indent-unit-end]=\"nzSelectMode && nzIsEnd[i]\"\n      [class.ant-tree-indent-unit-end]=\"!nzSelectMode && nzIsEnd[i]\"\n      *ngFor=\"let _ of listOfUnit; let i = index\"\n    ></span>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[attr.aria-hidden]': 'true',
                        '[class.ant-tree-indent]': '!nzSelectMode',
                        '[class.ant-select-tree-indent]': 'nzSelectMode'
                    }
                },] }
    ];
    NzTreeIndentComponent.propDecorators = {
        nzTreeLevel: [{ type: core.Input }],
        nzIsStart: [{ type: core.Input }],
        nzIsEnd: [{ type: core.Input }],
        nzSelectMode: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeNodeBuiltinCheckboxComponent = /** @class */ (function () {
        function NzTreeNodeBuiltinCheckboxComponent() {
            this.nzSelectMode = false;
        }
        return NzTreeNodeBuiltinCheckboxComponent;
    }());
    NzTreeNodeBuiltinCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-tree-node-checkbox[builtin]',
                    template: "\n    <span [class.ant-tree-checkbox-inner]=\"!nzSelectMode\" [class.ant-select-tree-checkbox-inner]=\"nzSelectMode\"></span>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-select-tree-checkbox]': "nzSelectMode",
                        '[class.ant-select-tree-checkbox-checked]': "nzSelectMode && isChecked",
                        '[class.ant-select-tree-checkbox-indeterminate]': "nzSelectMode && isHalfChecked",
                        '[class.ant-select-tree-checkbox-disabled]': "nzSelectMode && (isDisabled || isDisableCheckbox)",
                        '[class.ant-tree-checkbox]': "!nzSelectMode",
                        '[class.ant-tree-checkbox-checked]': "!nzSelectMode && isChecked",
                        '[class.ant-tree-checkbox-indeterminate]': "!nzSelectMode && isHalfChecked",
                        '[class.ant-tree-checkbox-disabled]': "!nzSelectMode && (isDisabled || isDisableCheckbox)"
                    }
                },] }
    ];
    NzTreeNodeBuiltinCheckboxComponent.propDecorators = {
        nzSelectMode: [{ type: core.Input }],
        isChecked: [{ type: core.Input }],
        isHalfChecked: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        isDisableCheckbox: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeNodeSwitcherComponent = /** @class */ (function () {
        function NzTreeNodeSwitcherComponent() {
            this.nzSelectMode = false;
        }
        Object.defineProperty(NzTreeNodeSwitcherComponent.prototype, "isShowLineIcon", {
            get: function () {
                return !this.isLeaf && !!this.nzShowLine;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeSwitcherComponent.prototype, "isShowSwitchIcon", {
            get: function () {
                return !this.isLeaf && !this.nzShowLine;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeSwitcherComponent.prototype, "isSwitcherOpen", {
            get: function () {
                return !!this.isExpanded && !this.isLeaf;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeSwitcherComponent.prototype, "isSwitcherClose", {
            get: function () {
                return !this.isExpanded && !this.isLeaf;
            },
            enumerable: false,
            configurable: true
        });
        return NzTreeNodeSwitcherComponent;
    }());
    NzTreeNodeSwitcherComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-tree-node-switcher',
                    template: "\n    <ng-container *ngIf=\"isShowSwitchIcon\">\n      <ng-container *ngIf=\"!isLoading; else loadingTemplate\">\n        <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon; context: { $implicit: context, origin: context.origin }\">\n          <i\n            nz-icon\n            nzType=\"caret-down\"\n            [class.ant-select-tree-switcher-icon]=\"nzSelectMode\"\n            [class.ant-tree-switcher-icon]=\"!nzSelectMode\"\n          ></i>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"nzShowLine\">\n      <ng-container *ngIf=\"!isLoading; else loadingTemplate\">\n        <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon; context: { $implicit: context, origin: context.origin }\">\n          <i\n            *ngIf=\"isShowLineIcon\"\n            nz-icon\n            [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\"\n            class=\"ant-tree-switcher-line-icon\"\n          ></i>\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #loadingTemplate>\n      <i nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\n    </ng-template>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-select-tree-switcher]': 'nzSelectMode',
                        '[class.ant-select-tree-switcher-noop]': 'nzSelectMode && isLeaf',
                        '[class.ant-select-tree-switcher_open]': 'nzSelectMode && isSwitcherOpen',
                        '[class.ant-select-tree-switcher_close]': 'nzSelectMode && isSwitcherClose',
                        '[class.ant-tree-switcher]': '!nzSelectMode',
                        '[class.ant-tree-switcher-noop]': '!nzSelectMode && isLeaf',
                        '[class.ant-tree-switcher_open]': '!nzSelectMode && isSwitcherOpen',
                        '[class.ant-tree-switcher_close]': '!nzSelectMode && isSwitcherClose'
                    }
                },] }
    ];
    NzTreeNodeSwitcherComponent.propDecorators = {
        nzShowExpand: [{ type: core.Input }],
        nzShowLine: [{ type: core.Input }],
        nzExpandedIcon: [{ type: core.Input }],
        nzSelectMode: [{ type: core.Input }],
        context: [{ type: core.Input }],
        isLeaf: [{ type: core.Input }],
        isLoading: [{ type: core.Input }],
        isExpanded: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeNodeTitleComponent = /** @class */ (function () {
        function NzTreeNodeTitleComponent(cdr) {
            this.cdr = cdr;
            this.treeTemplate = null;
            this.selectMode = false;
            // Drag indicator
            this.showIndicator = true;
        }
        Object.defineProperty(NzTreeNodeTitleComponent.prototype, "canDraggable", {
            get: function () {
                return this.draggable && !this.isDisabled ? true : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeTitleComponent.prototype, "matchedValue", {
            get: function () {
                return this.isMatched ? this.searchValue : '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeTitleComponent.prototype, "isSwitcherOpen", {
            get: function () {
                return this.isExpanded && !this.isLeaf;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeTitleComponent.prototype, "isSwitcherClose", {
            get: function () {
                return !this.isExpanded && !this.isLeaf;
            },
            enumerable: false,
            configurable: true
        });
        NzTreeNodeTitleComponent.prototype.ngOnChanges = function (changes) {
            var showIndicator = changes.showIndicator, dragPosition = changes.dragPosition;
            if (showIndicator || dragPosition) {
                this.cdr.markForCheck();
            }
        };
        return NzTreeNodeTitleComponent;
    }());
    NzTreeNodeTitleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-tree-node-title',
                    template: "\n    <ng-template [ngTemplateOutlet]=\"treeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: context, origin: context.origin }\"></ng-template>\n    <ng-container *ngIf=\"!treeTemplate\">\n      <span\n        *ngIf=\"icon && showIcon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"isLoading\"\n        [class.ant-select-tree-iconEle]=\"selectMode\"\n        [class.ant-tree-iconEle]=\"!selectMode\"\n      >\n        <span\n          [class.ant-select-tree-iconEle]=\"selectMode\"\n          [class.ant-select-tree-icon__customize]=\"selectMode\"\n          [class.ant-tree-iconEle]=\"!selectMode\"\n          [class.ant-tree-icon__customize]=\"!selectMode\"\n        >\n          <i nz-icon *ngIf=\"icon\" [nzType]=\"icon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\" [innerHTML]=\"title | nzHighlight: matchedValue:'i':'font-highlight'\"></span>\n      <nz-tree-drop-indicator *ngIf=\"showIndicator\" [dropPosition]=\"dragPosition\" [level]=\"context.level\"></nz-tree-drop-indicator>\n    </ng-container>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[attr.title]': 'title',
                        '[attr.draggable]': 'canDraggable',
                        '[attr.aria-grabbed]': 'canDraggable',
                        '[class.draggable]': 'canDraggable',
                        '[class.ant-select-tree-node-content-wrapper]': "selectMode",
                        '[class.ant-select-tree-node-content-wrapper-open]': "selectMode && isSwitcherOpen",
                        '[class.ant-select-tree-node-content-wrapper-close]': "selectMode && isSwitcherClose",
                        '[class.ant-select-tree-node-selected]': "selectMode && isSelected",
                        '[class.ant-tree-node-content-wrapper]': "!selectMode",
                        '[class.ant-tree-node-content-wrapper-open]': "!selectMode && isSwitcherOpen",
                        '[class.ant-tree-node-content-wrapper-close]': "!selectMode && isSwitcherClose",
                        '[class.ant-tree-node-selected]': "!selectMode && isSelected"
                    }
                },] }
    ];
    NzTreeNodeTitleComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NzTreeNodeTitleComponent.propDecorators = {
        searchValue: [{ type: core.Input }],
        treeTemplate: [{ type: core.Input }],
        draggable: [{ type: core.Input }],
        showIcon: [{ type: core.Input }],
        selectMode: [{ type: core.Input }],
        context: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        title: [{ type: core.Input }],
        isLoading: [{ type: core.Input }],
        isSelected: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        isMatched: [{ type: core.Input }],
        isExpanded: [{ type: core.Input }],
        isLeaf: [{ type: core.Input }],
        showIndicator: [{ type: core.Input }],
        dragPosition: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeNodeBuiltinComponent = /** @class */ (function () {
        function NzTreeNodeBuiltinComponent(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
            this.nzTreeService = nzTreeService;
            this.ngZone = ngZone;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            /**
             * for global property
             */
            this.icon = '';
            this.title = '';
            this.isLoading = false;
            this.isSelected = false;
            this.isDisabled = false;
            this.isMatched = false;
            this.isStart = [];
            this.isEnd = [];
            this.nzHideUnMatched = false;
            this.nzNoAnimation = false;
            this.nzSelectMode = false;
            this.nzShowIcon = false;
            this.nzTreeTemplate = null;
            this.nzSearchValue = '';
            this.nzDraggable = false;
            this.nzClick = new core.EventEmitter();
            this.nzDblClick = new core.EventEmitter();
            this.nzContextMenu = new core.EventEmitter();
            this.nzCheckBoxChange = new core.EventEmitter();
            this.nzExpandChange = new core.EventEmitter();
            this.nzOnDragStart = new core.EventEmitter();
            this.nzOnDragEnter = new core.EventEmitter();
            this.nzOnDragOver = new core.EventEmitter();
            this.nzOnDragLeave = new core.EventEmitter();
            this.nzOnDrop = new core.EventEmitter();
            this.nzOnDragEnd = new core.EventEmitter();
            /**
             * drag var
             */
            this.destroy$ = new rxjs.Subject();
            this.dragPos = 2;
            this.dragPosClass = {
                '0': 'drag-over',
                '1': 'drag-over-gap-bottom',
                '-1': 'drag-over-gap-top'
            };
            this.showIndicator = false;
        }
        Object.defineProperty(NzTreeNodeBuiltinComponent.prototype, "displayStyle", {
            /**
             * default set
             */
            get: function () {
                // to hide unmatched nodes
                return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? 'none' : '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeBuiltinComponent.prototype, "isSwitcherOpen", {
            get: function () {
                return this.isExpanded && !this.isLeaf;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeBuiltinComponent.prototype, "isSwitcherClose", {
            get: function () {
                return !this.isExpanded && !this.isLeaf;
            },
            enumerable: false,
            configurable: true
        });
        NzTreeNodeBuiltinComponent.prototype.onMousedown = function (event) {
            if (this.nzSelectMode) {
                event.preventDefault();
            }
        };
        /**
         * collapse node
         * @param event
         */
        NzTreeNodeBuiltinComponent.prototype.clickExpand = function (event) {
            event.preventDefault();
            if (!this.isLoading && !this.isLeaf) {
                // set async state
                if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
                    this.nzTreeNode.isLoading = true;
                }
                this.nzTreeNode.setExpanded(!this.isExpanded);
            }
            this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            var eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
            this.nzExpandChange.emit(eventNext);
        };
        NzTreeNodeBuiltinComponent.prototype.clickSelect = function (event) {
            event.preventDefault();
            if (this.isSelectable && !this.isDisabled) {
                this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
            }
            this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
            var eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
            this.nzClick.emit(eventNext);
        };
        NzTreeNodeBuiltinComponent.prototype.dblClick = function (event) {
            event.preventDefault();
            var eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
            this.nzDblClick.emit(eventNext);
        };
        NzTreeNodeBuiltinComponent.prototype.contextMenu = function (event) {
            event.preventDefault();
            var eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
            this.nzContextMenu.emit(eventNext);
        };
        /**
         * check node
         * @param event
         */
        NzTreeNodeBuiltinComponent.prototype.clickCheckBox = function (event) {
            event.preventDefault();
            // return if node is disabled
            if (this.isDisabled || this.isDisableCheckbox) {
                return;
            }
            this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
            this.nzTreeNode.isHalfChecked = false;
            this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
            var eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
            this.nzCheckBoxChange.emit(eventNext);
        };
        NzTreeNodeBuiltinComponent.prototype.clearDragClass = function () {
            var _this = this;
            var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over', 'drop-target'];
            dragClass.forEach(function (e) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, e);
            });
        };
        /**
         * drag event
         * @param e
         */
        NzTreeNodeBuiltinComponent.prototype.handleDragStart = function (e) {
            try {
                // ie throw error
                // firefox-need-it
                e.dataTransfer.setData('text/plain', this.nzTreeNode.key);
            }
            catch (error) {
                // empty
            }
            this.nzTreeService.setSelectedNode(this.nzTreeNode);
            var eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
            this.nzOnDragStart.emit(eventNext);
        };
        NzTreeNodeBuiltinComponent.prototype.handleDragEnter = function (e) {
            var _this = this;
            var _a;
            e.preventDefault();
            // reset position
            this.showIndicator = this.nzTreeNode.key !== ((_a = this.nzTreeService.getSelectedNode()) === null || _a === void 0 ? void 0 : _a.key);
            this.renderIndicator(2);
            this.ngZone.run(function () {
                var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.nzTreeNode, e);
                _this.nzOnDragEnter.emit(eventNext);
            });
        };
        NzTreeNodeBuiltinComponent.prototype.handleDragOver = function (e) {
            e.preventDefault();
            var dropPosition = this.nzTreeService.calcDropPosition(e);
            if (this.dragPos !== dropPosition) {
                this.clearDragClass();
                this.renderIndicator(dropPosition);
                // leaf node will pass
                if (!(this.dragPos === 0 && this.isLeaf)) {
                    this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
                    this.renderer.addClass(this.elementRef.nativeElement, 'drop-target');
                }
            }
            var eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
            this.nzOnDragOver.emit(eventNext);
        };
        NzTreeNodeBuiltinComponent.prototype.handleDragLeave = function (e) {
            e.preventDefault();
            this.renderIndicator(2);
            this.clearDragClass();
            var eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
            this.nzOnDragLeave.emit(eventNext);
        };
        NzTreeNodeBuiltinComponent.prototype.handleDragDrop = function (e) {
            var _this = this;
            this.ngZone.run(function () {
                _this.showIndicator = false;
                _this.clearDragClass();
                var node = _this.nzTreeService.getSelectedNode();
                if (!node || (node && node.key === _this.nzTreeNode.key) || (_this.dragPos === 0 && _this.isLeaf)) {
                    return;
                }
                // pass if node is leafNo
                var dropEvent = _this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e);
                var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                if (_this.nzBeforeDrop) {
                    _this.nzBeforeDrop({
                        dragNode: _this.nzTreeService.getSelectedNode(),
                        node: _this.nzTreeNode,
                        pos: _this.dragPos
                    }).subscribe(function (canDrop) {
                        if (canDrop) {
                            _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                        }
                        _this.nzOnDrop.emit(dropEvent);
                        _this.nzOnDragEnd.emit(dragEndEvent);
                    });
                }
                else if (_this.nzTreeNode) {
                    _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                    _this.nzOnDrop.emit(dropEvent);
                }
            });
        };
        NzTreeNodeBuiltinComponent.prototype.handleDragEnd = function (e) {
            var _this = this;
            e.preventDefault();
            this.ngZone.run(function () {
                // if user do not custom beforeDrop
                if (!_this.nzBeforeDrop) {
                    var eventNext = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                    _this.nzOnDragEnd.emit(eventNext);
                }
            });
        };
        /**
         * Listening to dragging events.
         */
        NzTreeNodeBuiltinComponent.prototype.handDragEvent = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                if (_this.nzDraggable) {
                    var nativeElement = _this.elementRef.nativeElement;
                    _this.destroy$ = new rxjs.Subject();
                    rxjs.fromEvent(nativeElement, 'dragstart')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (e) { return _this.handleDragStart(e); });
                    rxjs.fromEvent(nativeElement, 'dragenter')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (e) { return _this.handleDragEnter(e); });
                    rxjs.fromEvent(nativeElement, 'dragover')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (e) { return _this.handleDragOver(e); });
                    rxjs.fromEvent(nativeElement, 'dragleave')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (e) { return _this.handleDragLeave(e); });
                    rxjs.fromEvent(nativeElement, 'drop')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (e) { return _this.handleDragDrop(e); });
                    rxjs.fromEvent(nativeElement, 'dragend')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (e) { return _this.handleDragEnd(e); });
                }
                else {
                    _this.destroy$.next();
                    _this.destroy$.complete();
                }
            });
        };
        NzTreeNodeBuiltinComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        NzTreeNodeBuiltinComponent.prototype.ngOnInit = function () {
            this.nzTreeNode.component = this;
        };
        NzTreeNodeBuiltinComponent.prototype.ngOnChanges = function (changes) {
            var nzDraggable = changes.nzDraggable;
            if (nzDraggable) {
                this.handDragEvent();
            }
        };
        NzTreeNodeBuiltinComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzTreeNodeBuiltinComponent.prototype.renderIndicator = function (dropPosition) {
            var _this = this;
            this.ngZone.run(function () {
                var _a;
                _this.showIndicator = dropPosition !== 2;
                if (_this.nzTreeNode.key === ((_a = _this.nzTreeService.getSelectedNode()) === null || _a === void 0 ? void 0 : _a.key) || (dropPosition === 0 && _this.isLeaf)) {
                    return;
                }
                _this.dragPos = dropPosition;
                _this.cdr.markForCheck();
            });
        };
        return NzTreeNodeBuiltinComponent;
    }());
    NzTreeNodeBuiltinComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-tree-node[builtin]',
                    exportAs: 'nzTreeBuiltinNode',
                    template: "\n    <nz-tree-indent [nzTreeLevel]=\"nzTreeNode.level\" [nzSelectMode]=\"nzSelectMode\" [nzIsStart]=\"isStart\" [nzIsEnd]=\"isEnd\"></nz-tree-indent>\n    <nz-tree-node-switcher\n      *ngIf=\"nzShowExpand\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [context]=\"nzTreeNode\"\n      [isLeaf]=\"isLeaf\"\n      [isExpanded]=\"isExpanded\"\n      [isLoading]=\"isLoading\"\n      (click)=\"clickExpand($event)\"\n    ></nz-tree-node-switcher>\n    <nz-tree-node-checkbox\n      builtin\n      *ngIf=\"nzCheckable\"\n      (click)=\"clickCheckBox($event)\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [isChecked]=\"isChecked\"\n      [isHalfChecked]=\"isHalfChecked\"\n      [isDisabled]=\"isDisabled\"\n      [isDisableCheckbox]=\"isDisableCheckbox\"\n    ></nz-tree-node-checkbox>\n    <nz-tree-node-title\n      [icon]=\"icon\"\n      [title]=\"title\"\n      [isLoading]=\"isLoading\"\n      [isSelected]=\"isSelected\"\n      [isDisabled]=\"isDisabled\"\n      [isMatched]=\"isMatched\"\n      [isExpanded]=\"isExpanded\"\n      [isLeaf]=\"isLeaf\"\n      [searchValue]=\"nzSearchValue\"\n      [treeTemplate]=\"nzTreeTemplate\"\n      [draggable]=\"nzDraggable\"\n      [showIcon]=\"nzShowIcon\"\n      [selectMode]=\"nzSelectMode\"\n      [context]=\"nzTreeNode\"\n      [showIndicator]=\"showIndicator\"\n      [dragPosition]=\"dragPos\"\n      (dblclick)=\"dblClick($event)\"\n      (click)=\"clickSelect($event)\"\n      (contextmenu)=\"contextMenu($event)\"\n    ></nz-tree-node-title>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-select-tree-treenode]': "nzSelectMode",
                        '[class.ant-select-tree-treenode-disabled]': "nzSelectMode && isDisabled",
                        '[class.ant-select-tree-treenode-switcher-open]': "nzSelectMode && isSwitcherOpen",
                        '[class.ant-select-tree-treenode-switcher-close]': "nzSelectMode && isSwitcherClose",
                        '[class.ant-select-tree-treenode-checkbox-checked]': "nzSelectMode && isChecked",
                        '[class.ant-select-tree-treenode-checkbox-indeterminate]': "nzSelectMode && isHalfChecked",
                        '[class.ant-select-tree-treenode-selected]': "nzSelectMode && isSelected",
                        '[class.ant-select-tree-treenode-loading]': "nzSelectMode && isLoading",
                        '[class.ant-tree-treenode]': "!nzSelectMode",
                        '[class.ant-tree-treenode-disabled]': "!nzSelectMode && isDisabled",
                        '[class.ant-tree-treenode-switcher-open]': "!nzSelectMode && isSwitcherOpen",
                        '[class.ant-tree-treenode-switcher-close]': "!nzSelectMode && isSwitcherClose",
                        '[class.ant-tree-treenode-checkbox-checked]': "!nzSelectMode && isChecked",
                        '[class.ant-tree-treenode-checkbox-indeterminate]': "!nzSelectMode && isHalfChecked",
                        '[class.ant-tree-treenode-selected]': "!nzSelectMode && isSelected",
                        '[class.ant-tree-treenode-loading]': "!nzSelectMode && isLoading",
                        '[style.display]': 'displayStyle',
                        '(mousedown)': 'onMousedown($event)'
                    }
                },] }
    ];
    NzTreeNodeBuiltinComponent.ctorParameters = function () { return [
        { type: tree.NzTreeBaseService },
        { type: core.NgZone },
        { type: core.Renderer2 },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
    ]; };
    NzTreeNodeBuiltinComponent.propDecorators = {
        icon: [{ type: core.Input }],
        title: [{ type: core.Input }],
        isLoading: [{ type: core.Input }],
        isSelected: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        isMatched: [{ type: core.Input }],
        isExpanded: [{ type: core.Input }],
        isLeaf: [{ type: core.Input }],
        isChecked: [{ type: core.Input }],
        isHalfChecked: [{ type: core.Input }],
        isDisableCheckbox: [{ type: core.Input }],
        isSelectable: [{ type: core.Input }],
        canHide: [{ type: core.Input }],
        isStart: [{ type: core.Input }],
        isEnd: [{ type: core.Input }],
        nzTreeNode: [{ type: core.Input }],
        nzShowLine: [{ type: core.Input }],
        nzShowExpand: [{ type: core.Input }],
        nzCheckable: [{ type: core.Input }],
        nzAsyncData: [{ type: core.Input }],
        nzHideUnMatched: [{ type: core.Input }],
        nzNoAnimation: [{ type: core.Input }],
        nzSelectMode: [{ type: core.Input }],
        nzShowIcon: [{ type: core.Input }],
        nzExpandedIcon: [{ type: core.Input }],
        nzTreeTemplate: [{ type: core.Input }],
        nzBeforeDrop: [{ type: core.Input }],
        nzSearchValue: [{ type: core.Input }],
        nzDraggable: [{ type: core.Input }],
        nzClick: [{ type: core.Output }],
        nzDblClick: [{ type: core.Output }],
        nzContextMenu: [{ type: core.Output }],
        nzCheckBoxChange: [{ type: core.Output }],
        nzExpandChange: [{ type: core.Output }],
        nzOnDragStart: [{ type: core.Output }],
        nzOnDragEnter: [{ type: core.Output }],
        nzOnDragOver: [{ type: core.Output }],
        nzOnDragLeave: [{ type: core.Output }],
        nzOnDrop: [{ type: core.Output }],
        nzOnDragEnd: [{ type: core.Output }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeBuiltinComponent.prototype, "nzShowLine", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeBuiltinComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeBuiltinComponent.prototype, "nzCheckable", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeBuiltinComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeBuiltinComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeBuiltinComponent.prototype, "nzNoAnimation", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeBuiltinComponent.prototype, "nzSelectMode", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeBuiltinComponent.prototype, "nzShowIcon", void 0);

    var NzTreeService = /** @class */ (function (_super) {
        __extends(NzTreeService, _super);
        function NzTreeService() {
            return _super.call(this) || this;
        }
        return NzTreeService;
    }(tree.NzTreeBaseService));
    NzTreeService.decorators = [
        { type: core.Injectable }
    ];
    NzTreeService.ctorParameters = function () { return []; };

    function NzTreeServiceFactory(higherOrderService, treeService) {
        return higherOrderService ? higherOrderService : treeService;
    }
    var NZ_CONFIG_MODULE_NAME = 'tree';
    var NzTreeComponent = /** @class */ (function (_super) {
        __extends(NzTreeComponent, _super);
        // Handle emit event end
        function NzTreeComponent(nzTreeService, nzConfigService, cdr, directionality, noAnimation) {
            var _this = _super.call(this, nzTreeService) || this;
            _this.nzConfigService = nzConfigService;
            _this.cdr = cdr;
            _this.directionality = directionality;
            _this.noAnimation = noAnimation;
            _this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            _this.nzShowIcon = false;
            _this.nzHideUnMatched = false;
            _this.nzBlockNode = false;
            _this.nzExpandAll = false;
            _this.nzSelectMode = false;
            _this.nzCheckStrictly = false;
            _this.nzShowExpand = true;
            _this.nzShowLine = false;
            _this.nzCheckable = false;
            _this.nzAsyncData = false;
            _this.nzDraggable = false;
            _this.nzMultiple = false;
            _this.nzVirtualItemSize = 28;
            _this.nzVirtualMaxBufferPx = 500;
            _this.nzVirtualMinBufferPx = 28;
            _this.nzVirtualHeight = null;
            _this.nzData = [];
            _this.nzExpandedKeys = [];
            _this.nzSelectedKeys = [];
            _this.nzCheckedKeys = [];
            _this.nzSearchValue = '';
            _this.nzFlattenNodes = [];
            _this.beforeInit = true;
            _this.dir = 'ltr';
            _this.nzExpandedKeysChange = new core.EventEmitter();
            _this.nzSelectedKeysChange = new core.EventEmitter();
            _this.nzCheckedKeysChange = new core.EventEmitter();
            _this.nzSearchValueChange = new core.EventEmitter();
            _this.nzClick = new core.EventEmitter();
            _this.nzDblClick = new core.EventEmitter();
            _this.nzContextMenu = new core.EventEmitter();
            _this.nzCheckBoxChange = new core.EventEmitter();
            _this.nzExpandChange = new core.EventEmitter();
            _this.nzOnDragStart = new core.EventEmitter();
            _this.nzOnDragEnter = new core.EventEmitter();
            _this.nzOnDragOver = new core.EventEmitter();
            _this.nzOnDragLeave = new core.EventEmitter();
            _this.nzOnDrop = new core.EventEmitter();
            _this.nzOnDragEnd = new core.EventEmitter();
            _this.HIDDEN_STYLE = {
                width: 0,
                height: 0,
                display: 'flex',
                overflow: 'hidden',
                opacity: 0,
                border: 0,
                padding: 0,
                margin: 0
            };
            _this.destroy$ = new rxjs.Subject();
            _this.onChange = function () { return null; };
            _this.onTouched = function () { return null; };
            return _this;
        }
        NzTreeComponent.prototype.writeValue = function (value) {
            this.handleNzData(value);
        };
        NzTreeComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzTreeComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * Render all properties of nzTree
         * @param changes: all changes from @Input
         */
        NzTreeComponent.prototype.renderTreeProperties = function (changes) {
            var useDefaultExpandedKeys = false;
            var expandAll = false;
            var nzData = changes.nzData, nzExpandedKeys = changes.nzExpandedKeys, nzSelectedKeys = changes.nzSelectedKeys, nzCheckedKeys = changes.nzCheckedKeys, nzCheckStrictly = changes.nzCheckStrictly, nzExpandAll = changes.nzExpandAll, nzMultiple = changes.nzMultiple, nzSearchValue = changes.nzSearchValue;
            if (nzExpandAll) {
                useDefaultExpandedKeys = true;
                expandAll = this.nzExpandAll;
            }
            if (nzMultiple) {
                this.nzTreeService.isMultiple = this.nzMultiple;
            }
            if (nzCheckStrictly) {
                this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            }
            if (nzData) {
                this.handleNzData(this.nzData);
            }
            if (nzCheckedKeys) {
                this.handleCheckedKeys(this.nzCheckedKeys);
            }
            if (nzCheckStrictly) {
                this.handleCheckedKeys(null);
            }
            if (nzExpandedKeys || nzExpandAll) {
                useDefaultExpandedKeys = true;
                this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
            }
            if (nzSelectedKeys) {
                this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
            }
            if (nzSearchValue) {
                if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
                    useDefaultExpandedKeys = false;
                    this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
                    this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                }
            }
            // flatten data
            var currentExpandedKeys = this.getExpandedNodeList().map(function (v) { return v.key; });
            var newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
            this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
        };
        NzTreeComponent.prototype.trackByFlattenNode = function (_, node) {
            return node.key;
        };
        // Deal with properties
        /**
         * nzData
         * @param value
         */
        NzTreeComponent.prototype.handleNzData = function (value) {
            if (Array.isArray(value)) {
                var data = this.coerceTreeNodes(value);
                this.nzTreeService.initTree(data);
            }
        };
        NzTreeComponent.prototype.handleFlattenNodes = function (data, expandKeys) {
            if (expandKeys === void 0) { expandKeys = []; }
            this.nzTreeService.flattenTreeData(data, expandKeys);
        };
        NzTreeComponent.prototype.handleCheckedKeys = function (keys) {
            this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
        };
        NzTreeComponent.prototype.handleExpandedKeys = function (keys) {
            if (keys === void 0) { keys = []; }
            this.nzTreeService.conductExpandedKeys(keys);
        };
        NzTreeComponent.prototype.handleSelectedKeys = function (keys, isMulti) {
            this.nzTreeService.conductSelectedKeys(keys, isMulti);
        };
        NzTreeComponent.prototype.handleSearchValue = function (value, searchFunc) {
            var _this = this;
            var dataList = tree.flattenTreeData(this.nzTreeService.rootNodes, true).map(function (v) { return v.data; });
            var checkIfMatched = function (node) {
                if (searchFunc) {
                    return searchFunc(node.origin);
                }
                return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
            };
            dataList.forEach(function (v) {
                v.isMatched = checkIfMatched(v);
                v.canHide = !v.isMatched;
                if (!v.isMatched) {
                    v.setExpanded(false);
                    _this.nzTreeService.setExpandedNodeList(v);
                }
                else {
                    // expand
                    _this.nzTreeService.expandNodeAllParentBySearch(v);
                }
                _this.nzTreeService.setMatchedNodeList(v);
            });
        };
        /**
         * Handle emit event
         * @param event
         * handle each event
         */
        NzTreeComponent.prototype.eventTriggerChanged = function (event) {
            var node = event.node;
            switch (event.eventName) {
                case 'expand':
                    this.renderTree();
                    this.nzExpandChange.emit(event);
                    break;
                case 'click':
                    this.nzClick.emit(event);
                    break;
                case 'dblclick':
                    this.nzDblClick.emit(event);
                    break;
                case 'contextmenu':
                    this.nzContextMenu.emit(event);
                    break;
                case 'check':
                    // Render checked state with nodes' property `isChecked`
                    this.nzTreeService.setCheckedNodeList(node);
                    if (!this.nzCheckStrictly) {
                        this.nzTreeService.conduct(node);
                    }
                    // Cause check method will rerender list, so we need recover it and next the new event to user
                    var eventNext = this.nzTreeService.formatEvent('check', node, event.event);
                    this.nzCheckBoxChange.emit(eventNext);
                    break;
                case 'dragstart':
                    // if node is expanded
                    if (node.isExpanded) {
                        node.setExpanded(!node.isExpanded);
                        this.renderTree();
                    }
                    this.nzOnDragStart.emit(event);
                    break;
                case 'dragenter':
                    var selectedNode = this.nzTreeService.getSelectedNode();
                    if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
                        node.setExpanded(true);
                        this.renderTree();
                    }
                    this.nzOnDragEnter.emit(event);
                    break;
                case 'dragover':
                    this.nzOnDragOver.emit(event);
                    break;
                case 'dragleave':
                    this.nzOnDragLeave.emit(event);
                    break;
                case 'dragend':
                    this.nzOnDragEnd.emit(event);
                    break;
                case 'drop':
                    this.renderTree();
                    this.nzOnDrop.emit(event);
                    break;
            }
        };
        /**
         * Click expand icon
         */
        NzTreeComponent.prototype.renderTree = function () {
            this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map(function (v) { return v.key; }));
            this.cdr.markForCheck();
        };
        NzTreeComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.nzTreeService.flattenNodes$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                _this.nzFlattenNodes = data;
                _this.cdr.markForCheck();
            });
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
        };
        NzTreeComponent.prototype.ngOnChanges = function (changes) {
            this.renderTreeProperties(changes);
        };
        NzTreeComponent.prototype.ngAfterViewInit = function () {
            this.beforeInit = false;
        };
        NzTreeComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return NzTreeComponent;
    }(tree.NzTreeBase));
    NzTreeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-tree',
                    exportAs: 'nzTree',
                    animations: [animation.treeCollapseMotion],
                    template: "\n    <div role=\"tree\">\n      <input [ngStyle]=\"HIDDEN_STYLE\" />\n    </div>\n    <div class=\"ant-tree-list\" [class.ant-select-tree-list]=\"nzSelectMode\">\n      <div>\n        <cdk-virtual-scroll-viewport\n          *ngIf=\"nzVirtualHeight\"\n          [class.ant-select-tree-list-holder-inner]=\"nzSelectMode\"\n          [class.ant-tree-list-holder-inner]=\"!nzSelectMode\"\n          [itemSize]=\"nzVirtualItemSize\"\n          [minBufferPx]=\"nzVirtualMinBufferPx\"\n          [maxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [style.height]=\"nzVirtualHeight\"\n        >\n          <ng-container *cdkVirtualFor=\"let node of nzFlattenNodes; trackBy: trackByFlattenNode\">\n            <ng-template [ngTemplateOutlet]=\"nodeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: node }\"></ng-template>\n          </ng-container>\n        </cdk-virtual-scroll-viewport>\n\n        <div\n          *ngIf=\"!nzVirtualHeight\"\n          [class.ant-select-tree-list-holder-inner]=\"nzSelectMode\"\n          [class.ant-tree-list-holder-inner]=\"!nzSelectMode\"\n          [@.disabled]=\"beforeInit || noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [@treeCollapseMotion]=\"nzFlattenNodes.length\"\n        >\n          <ng-container *ngFor=\"let node of nzFlattenNodes; trackBy: trackByFlattenNode\">\n            <ng-template [ngTemplateOutlet]=\"nodeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: node }\"></ng-template>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <ng-template #nodeTemplate let-treeNode>\n      <nz-tree-node\n        builtin\n        [icon]=\"treeNode.icon\"\n        [title]=\"treeNode.title\"\n        [isLoading]=\"treeNode.isLoading\"\n        [isSelected]=\"treeNode.isSelected\"\n        [isDisabled]=\"treeNode.isDisabled\"\n        [isMatched]=\"treeNode.isMatched\"\n        [isExpanded]=\"treeNode.isExpanded\"\n        [isLeaf]=\"treeNode.isLeaf\"\n        [isStart]=\"treeNode.isStart\"\n        [isEnd]=\"treeNode.isEnd\"\n        [isChecked]=\"treeNode.isChecked\"\n        [isHalfChecked]=\"treeNode.isHalfChecked\"\n        [isDisableCheckbox]=\"treeNode.isDisableCheckbox\"\n        [isSelectable]=\"treeNode.isSelectable\"\n        [canHide]=\"treeNode.canHide\"\n        [nzTreeNode]=\"treeNode\"\n        [nzSelectMode]=\"nzSelectMode\"\n        [nzShowLine]=\"nzShowLine\"\n        [nzExpandedIcon]=\"nzExpandedIcon\"\n        [nzDraggable]=\"nzDraggable\"\n        [nzCheckable]=\"nzCheckable\"\n        [nzShowExpand]=\"nzShowExpand\"\n        [nzAsyncData]=\"nzAsyncData\"\n        [nzSearchValue]=\"nzSearchValue\"\n        [nzHideUnMatched]=\"nzHideUnMatched\"\n        [nzBeforeDrop]=\"nzBeforeDrop\"\n        [nzShowIcon]=\"nzShowIcon\"\n        [nzTreeTemplate]=\"nzTreeTemplate || nzTreeTemplateChild\"\n        (nzExpandChange)=\"eventTriggerChanged($event)\"\n        (nzClick)=\"eventTriggerChanged($event)\"\n        (nzDblClick)=\"eventTriggerChanged($event)\"\n        (nzContextMenu)=\"eventTriggerChanged($event)\"\n        (nzCheckBoxChange)=\"eventTriggerChanged($event)\"\n        (nzOnDragStart)=\"eventTriggerChanged($event)\"\n        (nzOnDragEnter)=\"eventTriggerChanged($event)\"\n        (nzOnDragOver)=\"eventTriggerChanged($event)\"\n        (nzOnDragLeave)=\"eventTriggerChanged($event)\"\n        (nzOnDragEnd)=\"eventTriggerChanged($event)\"\n        (nzOnDrop)=\"eventTriggerChanged($event)\"\n      ></nz-tree-node>\n    </ng-template>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [
                        NzTreeService,
                        {
                            provide: tree.NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new core.SkipSelf(), new core.Optional(), tree.NzTreeHigherOrderServiceToken], NzTreeService]
                        },
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return NzTreeComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-select-tree]': "nzSelectMode",
                        '[class.ant-select-tree-show-line]': "nzSelectMode && nzShowLine",
                        '[class.ant-select-tree-icon-hide]': "nzSelectMode && !nzShowIcon",
                        '[class.ant-select-tree-block-node]': "nzSelectMode && nzBlockNode",
                        '[class.ant-tree]': "!nzSelectMode",
                        '[class.ant-tree-rtl]': "dir === 'rtl'",
                        '[class.ant-tree-show-line]': "!nzSelectMode && nzShowLine",
                        '[class.ant-tree-icon-hide]': "!nzSelectMode && !nzShowIcon",
                        '[class.ant-tree-block-node]': "!nzSelectMode && nzBlockNode",
                        '[class.draggable-tree]': "nzDraggable"
                    }
                },] }
    ];
    NzTreeComponent.ctorParameters = function () { return [
        { type: tree.NzTreeBaseService },
        { type: config.NzConfigService },
        { type: core.ChangeDetectorRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
    ]; };
    NzTreeComponent.propDecorators = {
        nzShowIcon: [{ type: core.Input }],
        nzHideUnMatched: [{ type: core.Input }],
        nzBlockNode: [{ type: core.Input }],
        nzExpandAll: [{ type: core.Input }],
        nzSelectMode: [{ type: core.Input }],
        nzCheckStrictly: [{ type: core.Input }],
        nzShowExpand: [{ type: core.Input }],
        nzShowLine: [{ type: core.Input }],
        nzCheckable: [{ type: core.Input }],
        nzAsyncData: [{ type: core.Input }],
        nzDraggable: [{ type: core.Input }],
        nzMultiple: [{ type: core.Input }],
        nzExpandedIcon: [{ type: core.Input }],
        nzVirtualItemSize: [{ type: core.Input }],
        nzVirtualMaxBufferPx: [{ type: core.Input }],
        nzVirtualMinBufferPx: [{ type: core.Input }],
        nzVirtualHeight: [{ type: core.Input }],
        nzTreeTemplate: [{ type: core.Input }],
        nzBeforeDrop: [{ type: core.Input }],
        nzData: [{ type: core.Input }],
        nzExpandedKeys: [{ type: core.Input }],
        nzSelectedKeys: [{ type: core.Input }],
        nzCheckedKeys: [{ type: core.Input }],
        nzSearchValue: [{ type: core.Input }],
        nzSearchFunc: [{ type: core.Input }],
        nzTreeTemplateChild: [{ type: core.ContentChild, args: ['nzTreeTemplate', { static: true },] }],
        cdkVirtualScrollViewport: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { read: scrolling.CdkVirtualScrollViewport },] }],
        nzExpandedKeysChange: [{ type: core.Output }],
        nzSelectedKeysChange: [{ type: core.Output }],
        nzCheckedKeysChange: [{ type: core.Output }],
        nzSearchValueChange: [{ type: core.Output }],
        nzClick: [{ type: core.Output }],
        nzDblClick: [{ type: core.Output }],
        nzContextMenu: [{ type: core.Output }],
        nzCheckBoxChange: [{ type: core.Output }],
        nzExpandChange: [{ type: core.Output }],
        nzOnDragStart: [{ type: core.Output }],
        nzOnDragEnter: [{ type: core.Output }],
        nzOnDragOver: [{ type: core.Output }],
        nzOnDragLeave: [{ type: core.Output }],
        nzOnDrop: [{ type: core.Output }],
        nzOnDragEnd: [{ type: core.Output }]
    };
    __decorate([
        util.InputBoolean(),
        config.WithConfig(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        util.InputBoolean(),
        config.WithConfig(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        util.InputBoolean(),
        config.WithConfig(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzBlockNode", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzExpandAll", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzSelectMode", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzShowLine", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckable", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzDraggable", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzMultiple", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeModule = /** @class */ (function () {
        function NzTreeModule() {
        }
        return NzTreeModule;
    }());
    NzTreeModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [bidi.BidiModule, common.CommonModule, outlet.NzOutletModule, icon.NzIconModule, noAnimation.NzNoAnimationModule, highlight.NzHighlightModule, scrolling.ScrollingModule],
                    declarations: [
                        NzTreeComponent,
                        NzTreeNodeBuiltinComponent,
                        NzTreeIndentComponent,
                        NzTreeNodeSwitcherComponent,
                        NzTreeNodeBuiltinCheckboxComponent,
                        NzTreeNodeTitleComponent,
                        NzTreeDropIndicatorComponent
                    ],
                    exports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent]
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'NzTreeNode', {
        enumerable: true,
        get: function () {
            return tree.NzTreeNode;
        }
    });
    exports.NzTreeComponent = NzTreeComponent;
    exports.NzTreeIndentComponent = NzTreeIndentComponent;
    exports.NzTreeModule = NzTreeModule;
    exports.NzTreeNodeBuiltinCheckboxComponent = NzTreeNodeBuiltinCheckboxComponent;
    exports.NzTreeNodeBuiltinComponent = NzTreeNodeBuiltinComponent;
    exports.NzTreeNodeSwitcherComponent = NzTreeNodeSwitcherComponent;
    exports.NzTreeNodeTitleComponent = NzTreeNodeTitleComponent;
    exports.NzTreeService = NzTreeService;
    exports.NzTreeServiceFactory = NzTreeServiceFactory;
    exports.ɵa = NzTreeDropIndicatorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tree.umd.js.map
