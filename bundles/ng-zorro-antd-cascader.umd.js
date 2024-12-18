(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/i18n'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/core/highlight'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/cascader', ['exports', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/util', 'ng-zorro-antd/i18n', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/core/highlight', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon', 'ng-zorro-antd/input'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].cascader = {}), global.ng.cdk.bidi, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].i18n, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].core.highlight, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input));
}(this, (function (exports, bidi, keycodes, overlay$1, core, forms, animation, config, noAnimation, overlay, util, i18n, rxjs, operators, common, highlight, outlet, empty, icon, input) { 'use strict';

    function isShowSearchObject(options) {
        return typeof options !== 'boolean';
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function isChildOption(o) {
        return o.isLeaf || !o.children || !o.children.length;
    }
    function isParentOption(o) {
        return !!o.children && !!o.children.length && !o.isLeaf;
    }

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
    var NzCascaderOptionComponent = /** @class */ (function () {
        function NzCascaderOptionComponent(cdr, elementRef, renderer) {
            this.cdr = cdr;
            this.optionTemplate = null;
            this.activated = false;
            this.nzLabelProperty = 'label';
            this.expandIcon = '';
            this.dir = 'ltr';
            renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
            this.nativeElement = elementRef.nativeElement;
        }
        NzCascaderOptionComponent.prototype.ngOnInit = function () {
            if (this.expandIcon === '' && this.dir === 'rtl') {
                this.expandIcon = 'left';
            }
            else if (this.expandIcon === '') {
                this.expandIcon = 'right';
            }
        };
        Object.defineProperty(NzCascaderOptionComponent.prototype, "optionLabel", {
            get: function () {
                return this.option[this.nzLabelProperty];
            },
            enumerable: false,
            configurable: true
        });
        NzCascaderOptionComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        return NzCascaderOptionComponent;
    }());
    NzCascaderOptionComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    exportAs: 'nzCascaderOption',
                    template: "\n    <ng-container *ngIf=\"optionTemplate; else defaultOptionTemplate\">\n      <ng-template [ngTemplateOutlet]=\"optionTemplate\" [ngTemplateOutletContext]=\"{ $implicit: option, index: columnIndex }\"></ng-template>\n    </ng-container>\n    <ng-template #defaultOptionTemplate>\n      <span [innerHTML]=\"optionLabel | nzHighlight: highlightText:'g':'ant-cascader-menu-item-keyword'\"></span>\n    </ng-template>\n    <span *ngIf=\"!option.isLeaf || option.children?.length || option.loading\" class=\"ant-cascader-menu-item-expand-icon\">\n      <i *ngIf=\"option.loading; else icon\" nz-icon nzType=\"loading\"></i>\n      <ng-template #icon>\n        <ng-container *nzStringTemplateOutlet=\"expandIcon\">\n          <i nz-icon [nzType]=\"$any(expandIcon)\"></i>\n        </ng-container>\n      </ng-template>\n    </span>\n  ",
                    host: {
                        '[attr.title]': 'option.title || optionLabel',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                },] }
    ];
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        optionTemplate: [{ type: core.Input }],
        option: [{ type: core.Input }],
        activated: [{ type: core.Input }],
        highlightText: [{ type: core.Input }],
        nzLabelProperty: [{ type: core.Input }],
        columnIndex: [{ type: core.Input }],
        expandIcon: [{ type: core.Input }],
        dir: [{ type: core.Input }]
    };

    /**
     * All data is stored and parsed in NzCascaderService.
     */
    var NzCascaderService = /** @class */ (function () {
        function NzCascaderService() {
            /** Activated options in each column. */
            this.activatedOptions = [];
            /** An array to store cascader items arranged in different layers. */
            this.columns = [];
            /** If user has entered searching mode. */
            this.inSearchingMode = false;
            /** Selected options would be output to user. */
            this.selectedOptions = [];
            this.values = [];
            this.$loading = new rxjs.BehaviorSubject(false);
            /**
             * Emit an event to notify cascader it needs to redraw because activated or
             * selected options are changed.
             */
            this.$redraw = new rxjs.Subject();
            /**
             * Emit an event when an option gets selected.
             * Emit true if a leaf options is selected.
             */
            this.$optionSelected = new rxjs.Subject();
            /**
             * Emit an event to notify cascader it needs to quit searching mode.
             * Only emit when user do select a searching option.
             */
            this.$quitSearching = new rxjs.Subject();
            /** To hold columns before entering searching mode. */
            this.columnsSnapshot = [[]];
            /** To hold activated options before entering searching mode. */
            this.activatedOptionsSnapshot = [];
        }
        Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
            /** Return cascader options in the first layer. */
            get: function () {
                return this.columns[0];
            },
            enumerable: false,
            configurable: true
        });
        NzCascaderService.prototype.ngOnDestroy = function () {
            this.$redraw.complete();
            this.$quitSearching.complete();
            this.$optionSelected.complete();
            this.$loading.complete();
        };
        /**
         * Make sure that value matches what is displayed in the dropdown.
         */
        NzCascaderService.prototype.syncOptions = function (first) {
            var _this = this;
            if (first === void 0) { first = false; }
            var values = this.values;
            var hasValue = values && values.length;
            var lastColumnIndex = values.length - 1;
            var initColumnWithIndex = function (columnIndex) {
                var activatedOptionSetter = function () {
                    var _a;
                    var currentValue = values[columnIndex];
                    if (!util.isNotNil(currentValue)) {
                        _this.$redraw.next();
                        return;
                    }
                    var option = _this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                        (typeof currentValue === 'object'
                            ? currentValue
                            : (_a = {},
                                _a["" + _this.cascaderComponent.nzValueProperty] = currentValue,
                                _a["" + _this.cascaderComponent.nzLabelProperty] = currentValue,
                                _a));
                    _this.setOptionActivated(option, columnIndex, false, false);
                    if (columnIndex < lastColumnIndex) {
                        initColumnWithIndex(columnIndex + 1);
                    }
                    else {
                        _this.dropBehindColumns(columnIndex);
                        _this.selectedOptions = __spread(_this.activatedOptions);
                        _this.$redraw.next();
                    }
                };
                if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                    activatedOptionSetter();
                }
                else {
                    var option = _this.activatedOptions[columnIndex - 1] || {};
                    _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
                }
            };
            this.activatedOptions = [];
            this.selectedOptions = [];
            if (first && this.cascaderComponent.nzLoadData && !hasValue) {
                // Should also notify the component that value changes. Fix #3480.
                this.$redraw.next();
                return;
            }
            else {
                initColumnWithIndex(0);
            }
        };
        /**
         * Bind cascader component so this service could use inputs.
         */
        NzCascaderService.prototype.withComponent = function (cascaderComponent) {
            this.cascaderComponent = cascaderComponent;
        };
        /**
         * Reset all options. Rebuild searching options if in searching mode.
         */
        NzCascaderService.prototype.withOptions = function (options) {
            this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
            if (this.inSearchingMode) {
                this.prepareSearchOptions(this.cascaderComponent.inputValue);
            }
            else if (this.columns.length) {
                this.syncOptions();
            }
        };
        /**
         * Try to set a option as activated.
         * @param option Cascader option
         * @param columnIndex Of which column this option is in
         * @param performSelect Select
         * @param loadingChildren Try to load children asynchronously.
         */
        NzCascaderService.prototype.setOptionActivated = function (option, columnIndex, performSelect, loadingChildren) {
            if (performSelect === void 0) { performSelect = false; }
            if (loadingChildren === void 0) { loadingChildren = true; }
            if (option.disabled) {
                return;
            }
            this.activatedOptions[columnIndex] = option;
            this.trackAncestorActivatedOptions(columnIndex);
            this.dropBehindActivatedOptions(columnIndex);
            var isParent = isParentOption(option);
            if (isParent) {
                // Parent option that has children.
                this.setColumnData(option.children, columnIndex + 1, option);
            }
            else if (!option.isLeaf && loadingChildren) {
                // Parent option that should try to load children asynchronously.
                this.loadChildren(option, columnIndex);
            }
            else if (option.isLeaf) {
                // Leaf option.
                this.dropBehindColumns(columnIndex);
            }
            // Actually perform selection to make an options not only activated but also selected.
            if (performSelect) {
                this.setOptionSelected(option, columnIndex);
            }
            this.$redraw.next();
        };
        NzCascaderService.prototype.setOptionSelected = function (option, index) {
            var changeOn = this.cascaderComponent.nzChangeOn;
            var shouldPerformSelection = function (o, i) {
                return typeof changeOn === 'function' ? changeOn(o, i) : false;
            };
            if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
                this.selectedOptions = __spread(this.activatedOptions);
                this.prepareEmitValue();
                this.$redraw.next();
                this.$optionSelected.next({ option: option, index: index });
            }
        };
        NzCascaderService.prototype.setOptionDeactivatedSinceColumn = function (column) {
            this.dropBehindActivatedOptions(column - 1);
            this.dropBehindColumns(column);
            this.$redraw.next();
        };
        /**
         * Set a searching option as selected, finishing up things.
         * @param option
         */
        NzCascaderService.prototype.setSearchOptionSelected = function (option) {
            var _this = this;
            this.activatedOptions = [option];
            this.selectedOptions = __spread(option.path);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: 0 });
            setTimeout(function () {
                // Reset data and tell UI only to remove input and reset dropdown width style.
                _this.$quitSearching.next();
                _this.$redraw.next();
                _this.inSearchingMode = false;
                _this.columns = __spread(_this.columnsSnapshot);
                _this.activatedOptions = __spread(_this.selectedOptions);
            }, 200);
        };
        /**
         * Filter cascader options to reset `columns`.
         * @param searchValue The string user wants to search.
         */
        NzCascaderService.prototype.prepareSearchOptions = function (searchValue) {
            var _this = this;
            var results = []; // Search results only have one layer.
            var path = [];
            var defaultFilter = function (i, p) {
                return p.some(function (o) {
                    var label = _this.getOptionLabel(o);
                    return !!label && label.indexOf(i) !== -1;
                });
            };
            var showSearch = this.cascaderComponent.nzShowSearch;
            var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
            var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
            var loopChild = function (node, forceDisabled) {
                var _a;
                if (forceDisabled === void 0) { forceDisabled = false; }
                path.push(node);
                var cPath = Array.from(path);
                if (filter(searchValue, cPath)) {
                    var disabled = forceDisabled || node.disabled;
                    var option = (_a = {
                            disabled: disabled,
                            isLeaf: true,
                            path: cPath
                        },
                        _a[_this.cascaderComponent.nzLabelProperty] = cPath.map(function (p) { return _this.getOptionLabel(p); }).join(' / '),
                        _a);
                    results.push(option);
                }
                path.pop();
            };
            var loopParent = function (node, forceDisabled) {
                if (forceDisabled === void 0) { forceDisabled = false; }
                var disabled = forceDisabled || node.disabled;
                path.push(node);
                node.children.forEach(function (sNode) {
                    if (!sNode.parent) {
                        sNode.parent = node;
                    }
                    if (!sNode.isLeaf) {
                        loopParent(sNode, disabled);
                    }
                    if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                        loopChild(sNode, disabled);
                    }
                });
                path.pop();
            };
            if (!this.columnsSnapshot.length) {
                this.columns = [[]];
                return;
            }
            this.columnsSnapshot[0].forEach(function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); });
            if (sorter) {
                results.sort(function (a, b) { return sorter(a.path, b.path, searchValue); });
            }
            this.columns = [results];
            this.$redraw.next(); // Search results may be empty, so should redraw.
        };
        /**
         * Toggle searching mode by UI. It deals with things not directly related to UI.
         * @param toSearching If this cascader is entering searching mode
         */
        NzCascaderService.prototype.toggleSearchingMode = function (toSearching) {
            this.inSearchingMode = toSearching;
            if (toSearching) {
                this.activatedOptionsSnapshot = __spread(this.activatedOptions);
                this.activatedOptions = [];
                this.selectedOptions = [];
                this.$redraw.next();
            }
            else {
                // User quit searching mode without selecting an option.
                this.activatedOptions = __spread(this.activatedOptionsSnapshot);
                this.selectedOptions = __spread(this.activatedOptions);
                this.columns = __spread(this.columnsSnapshot);
                this.syncOptions();
                this.$redraw.next();
            }
        };
        /**
         * Clear selected options.
         */
        NzCascaderService.prototype.clear = function () {
            this.values = [];
            this.selectedOptions = [];
            this.activatedOptions = [];
            this.dropBehindColumns(0);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next(null);
        };
        NzCascaderService.prototype.getOptionLabel = function (o) {
            return o[this.cascaderComponent.nzLabelProperty || 'label'];
        };
        NzCascaderService.prototype.getOptionValue = function (o) {
            return o[this.cascaderComponent.nzValueProperty || 'value'];
        };
        /**
         * Try to insert options into a column.
         * @param options Options to insert
         * @param columnIndex Position
         */
        NzCascaderService.prototype.setColumnData = function (options, columnIndex, parent) {
            var existingOptions = this.columns[columnIndex];
            if (!util.arraysEqual(existingOptions, options)) {
                options.forEach(function (o) { return (o.parent = parent); });
                this.columns[columnIndex] = options;
                this.dropBehindColumns(columnIndex);
            }
        };
        /**
         * Set all ancestor options as activated.
         */
        NzCascaderService.prototype.trackAncestorActivatedOptions = function (startIndex) {
            for (var i = startIndex - 1; i >= 0; i--) {
                if (!this.activatedOptions[i]) {
                    this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
                }
            }
        };
        NzCascaderService.prototype.dropBehindActivatedOptions = function (lastReserveIndex) {
            this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
        };
        NzCascaderService.prototype.dropBehindColumns = function (lastReserveIndex) {
            if (lastReserveIndex < this.columns.length - 1) {
                this.columns = this.columns.slice(0, lastReserveIndex + 1);
            }
        };
        /**
         * Load children of an option asynchronously.
         */
        NzCascaderService.prototype.loadChildren = function (option, columnIndex, success, failure) {
            var _this = this;
            var loadFn = this.cascaderComponent.nzLoadData;
            if (loadFn) {
                // If there isn't any option in columns.
                this.$loading.next(columnIndex < 0);
                if (typeof option === 'object') {
                    option.loading = true;
                }
                loadFn(option, columnIndex).then(function () {
                    option.loading = false;
                    if (option.children) {
                        _this.setColumnData(option.children, columnIndex + 1, option);
                    }
                    if (success) {
                        success();
                    }
                    _this.$loading.next(false);
                    _this.$redraw.next();
                }, function () {
                    option.loading = false;
                    option.isLeaf = true;
                    if (failure) {
                        failure();
                    }
                    _this.$redraw.next();
                });
            }
        };
        NzCascaderService.prototype.isLoaded = function (index) {
            return this.columns[index] && this.columns[index].length > 0;
        };
        /**
         * Find a option that has a given value in a given column.
         */
        NzCascaderService.prototype.findOptionWithValue = function (columnIndex, value) {
            var _this = this;
            var targetColumn = this.columns[columnIndex];
            if (targetColumn) {
                var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
                return targetColumn.find(function (o) { return v_1 === _this.getOptionValue(o); });
            }
            return null;
        };
        NzCascaderService.prototype.prepareEmitValue = function () {
            var _this = this;
            this.values = this.selectedOptions.map(function (o) { return _this.getOptionValue(o); });
        };
        return NzCascaderService;
    }());
    NzCascaderService.decorators = [
        { type: core.Injectable }
    ];

    var NZ_CONFIG_MODULE_NAME = 'cascader';
    var defaultDisplayRender = function (labels) { return labels.join(' / '); };
    var ɵ0 = defaultDisplayRender;
    var NzCascaderComponent = /** @class */ (function () {
        function NzCascaderComponent(cascaderService, nzConfigService, cdr, i18nService, elementRef, renderer, directionality, noAnimation) {
            this.cascaderService = cascaderService;
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.i18nService = i18nService;
            this.directionality = directionality;
            this.noAnimation = noAnimation;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzOptionRender = null;
            this.nzShowInput = true;
            this.nzShowArrow = true;
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzChangeOnSelect = false;
            this.nzDisabled = false;
            this.nzExpandTrigger = 'click';
            this.nzValueProperty = 'value';
            this.nzLabelRender = null;
            this.nzLabelProperty = 'label';
            this.nzSize = 'default';
            this.nzBackdrop = false;
            this.nzShowSearch = false;
            this.nzPlaceHolder = '';
            this.nzMenuStyle = null;
            this.nzMouseEnterDelay = 150; // ms
            this.nzMouseLeaveDelay = 150; // ms
            this.nzTriggerAction = ['click'];
            // TODO: RTL
            this.nzSuffixIcon = 'down';
            this.nzExpandIcon = '';
            this.nzVisibleChange = new core.EventEmitter();
            this.nzSelectionChange = new core.EventEmitter();
            this.nzSelect = new core.EventEmitter();
            this.nzClear = new core.EventEmitter();
            /**
             * If the dropdown should show the empty content.
             * `true` if there's no options.
             */
            this.shouldShowEmpty = false;
            this.menuVisible = false;
            this.isLoading = false;
            this.labelRenderContext = {};
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.positions = __spread(overlay.DEFAULT_CASCADER_POSITIONS);
            this.dropdownHeightStyle = '';
            this.isFocused = false;
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            this.inputString = '';
            this.isOpening = false;
            this.delayMenuTimer = null;
            this.delaySelectTimer = null;
            this.el = elementRef.nativeElement;
            this.cascaderService.withComponent(this);
            renderer.addClass(elementRef.nativeElement, 'ant-cascader');
            renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
        }
        Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
            get: function () {
                return this.cascaderService.nzOptions;
            },
            set: function (options) {
                this.cascaderService.withOptions(options);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "inSearchingMode", {
            get: function () {
                return this.cascaderService.inSearchingMode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
            get: function () {
                return this.inputString;
            },
            set: function (inputValue) {
                this.inputString = inputValue;
                this.toggleSearchingMode(!!inputValue);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
            get: function () {
                var _b;
                return _b = {}, _b["" + this.nzMenuClassName] = !!this.nzMenuClassName, _b;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
            get: function () {
                var _b;
                return _b = {}, _b["" + this.nzColumnClassName] = !!this.nzColumnClassName, _b;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
            get: function () {
                return !!this.inputValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
            get: function () {
                return this.cascaderService.values && this.cascaderService.values.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
            get: function () {
                return !(this.hasInput || this.hasValue);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
            get: function () {
                return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
            get: function () {
                return !!this.nzLabelRender;
            },
            enumerable: false,
            configurable: true
        });
        NzCascaderComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            var srv = this.cascaderService;
            srv.$redraw.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                // These operations would not mutate data.
                _this.checkChildren();
                _this.setDisplayLabel();
                _this.reposition();
                _this.setDropdownStyles();
                _this.cdr.markForCheck();
            });
            srv.$loading.pipe(operators.takeUntil(this.destroy$)).subscribe(function (loading) {
                _this.isLoading = loading;
            });
            srv.$optionSelected.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                if (!data) {
                    _this.onChange([]);
                    _this.nzSelect.emit(null);
                    _this.nzSelectionChange.emit([]);
                }
                else {
                    var option = data.option, index = data.index;
                    var shouldClose = option.isLeaf || (_this.nzChangeOnSelect && _this.nzExpandTrigger === 'hover');
                    if (shouldClose) {
                        _this.delaySetMenuVisible(false);
                    }
                    _this.onChange(_this.cascaderService.values);
                    _this.nzSelectionChange.emit(_this.cascaderService.selectedOptions);
                    _this.nzSelect.emit({ option: option, index: index });
                    _this.cdr.markForCheck();
                }
            });
            srv.$quitSearching.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.inputString = '';
                _this.dropdownWidthStyle = '';
            });
            this.i18nService.localeChange.pipe(operators.startWith(), operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.setLocale();
            });
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.cdr.markForCheck();
            });
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.dir = _this.directionality.value;
                srv.$redraw.next();
            });
        };
        NzCascaderComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.clearDelayMenuTimer();
            this.clearDelaySelectTimer();
        };
        NzCascaderComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzCascaderComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NzCascaderComponent.prototype.writeValue = function (value) {
            this.cascaderService.values = util.toArray(value);
            this.cascaderService.syncOptions(true);
        };
        NzCascaderComponent.prototype.delaySetMenuVisible = function (visible, delay, setOpening) {
            var _this = this;
            if (delay === void 0) { delay = 100; }
            if (setOpening === void 0) { setOpening = false; }
            this.clearDelayMenuTimer();
            if (delay) {
                if (visible && setOpening) {
                    this.isOpening = true;
                }
                this.delayMenuTimer = setTimeout(function () {
                    _this.setMenuVisible(visible);
                    _this.cdr.detectChanges();
                    _this.clearDelayMenuTimer();
                    if (visible) {
                        setTimeout(function () {
                            _this.isOpening = false;
                        }, 100);
                    }
                }, delay);
            }
            else {
                this.setMenuVisible(visible);
            }
        };
        NzCascaderComponent.prototype.setMenuVisible = function (visible) {
            if (this.nzDisabled || this.menuVisible === visible) {
                return;
            }
            if (visible) {
                this.cascaderService.syncOptions();
                this.scrollToActivatedOptions();
            }
            if (!visible) {
                this.inputValue = '';
            }
            this.menuVisible = visible;
            this.nzVisibleChange.emit(visible);
            this.cdr.detectChanges();
        };
        NzCascaderComponent.prototype.clearDelayMenuTimer = function () {
            if (this.delayMenuTimer) {
                clearTimeout(this.delayMenuTimer);
                this.delayMenuTimer = null;
            }
        };
        NzCascaderComponent.prototype.clearSelection = function (event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            this.labelRenderText = '';
            this.labelRenderContext = {};
            this.inputValue = '';
            this.setMenuVisible(false);
            this.cascaderService.clear();
        };
        NzCascaderComponent.prototype.getSubmitValue = function () {
            var _this = this;
            return this.cascaderService.selectedOptions.map(function (o) { return _this.cascaderService.getOptionValue(o); });
        };
        NzCascaderComponent.prototype.focus = function () {
            if (!this.isFocused) {
                (this.input ? this.input.nativeElement : this.el).focus();
                this.isFocused = true;
            }
        };
        NzCascaderComponent.prototype.blur = function () {
            if (this.isFocused) {
                (this.input ? this.input.nativeElement : this.el).blur();
                this.isFocused = false;
            }
        };
        NzCascaderComponent.prototype.handleInputBlur = function () {
            this.menuVisible ? this.focus() : this.blur();
        };
        NzCascaderComponent.prototype.handleInputFocus = function () {
            this.focus();
        };
        NzCascaderComponent.prototype.onKeyDown = function (event) {
            var keyCode = event.keyCode;
            if (keyCode !== keycodes.DOWN_ARROW &&
                keyCode !== keycodes.UP_ARROW &&
                keyCode !== keycodes.LEFT_ARROW &&
                keyCode !== keycodes.RIGHT_ARROW &&
                keyCode !== keycodes.ENTER &&
                keyCode !== keycodes.BACKSPACE &&
                keyCode !== keycodes.ESCAPE) {
                return;
            }
            // Press any keys above to reopen menu.
            if (!this.menuVisible && keyCode !== keycodes.BACKSPACE && keyCode !== keycodes.ESCAPE) {
                return this.setMenuVisible(true);
            }
            // Make these keys work as default in searching mode.
            if (this.inSearchingMode && (keyCode === keycodes.BACKSPACE || keyCode === keycodes.LEFT_ARROW || keyCode === keycodes.RIGHT_ARROW)) {
                return;
            }
            // Interact with the component.
            if (this.menuVisible) {
                event.preventDefault();
                if (keyCode === keycodes.DOWN_ARROW) {
                    this.moveUpOrDown(false);
                }
                else if (keyCode === keycodes.UP_ARROW) {
                    this.moveUpOrDown(true);
                }
                else if (keyCode === keycodes.LEFT_ARROW) {
                    this.moveLeft();
                }
                else if (keyCode === keycodes.RIGHT_ARROW) {
                    this.moveRight();
                }
                else if (keyCode === keycodes.ENTER) {
                    this.onEnter();
                }
            }
        };
        NzCascaderComponent.prototype.onTriggerClick = function () {
            if (this.nzDisabled) {
                return;
            }
            if (this.nzShowSearch) {
                this.focus();
            }
            if (this.isActionTrigger('click')) {
                this.delaySetMenuVisible(!this.menuVisible, 100);
            }
            this.onTouched();
        };
        NzCascaderComponent.prototype.onTriggerMouseEnter = function () {
            if (this.nzDisabled || !this.isActionTrigger('hover')) {
                return;
            }
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        };
        NzCascaderComponent.prototype.onTriggerMouseLeave = function (event) {
            if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
                event.preventDefault();
                return;
            }
            var mouseTarget = event.relatedTarget;
            var hostEl = this.el;
            var menuEl = this.menu && this.menu.nativeElement;
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        };
        NzCascaderComponent.prototype.onOptionMouseEnter = function (option, columnIndex, event) {
            event.preventDefault();
            if (this.nzExpandTrigger === 'hover') {
                if (!option.isLeaf) {
                    this.delaySetOptionActivated(option, columnIndex, false);
                }
                else {
                    this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
                }
            }
        };
        NzCascaderComponent.prototype.onOptionMouseLeave = function (option, _columnIndex, event) {
            event.preventDefault();
            if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
                this.clearDelaySelectTimer();
            }
        };
        NzCascaderComponent.prototype.onOptionClick = function (option, columnIndex, event) {
            if (event) {
                event.preventDefault();
            }
            if (option && option.disabled) {
                return;
            }
            this.el.focus();
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected(option)
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        };
        NzCascaderComponent.prototype.onClickOutside = function (event) {
            if (!this.el.contains(event.target)) {
                this.closeMenu();
            }
        };
        NzCascaderComponent.prototype.isActionTrigger = function (action) {
            return typeof this.nzTriggerAction === 'string' ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
        };
        NzCascaderComponent.prototype.onEnter = function () {
            var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
            var option = this.cascaderService.activatedOptions[columnIndex];
            if (option && !option.disabled) {
                this.inSearchingMode
                    ? this.cascaderService.setSearchOptionSelected(option)
                    : this.cascaderService.setOptionActivated(option, columnIndex, true);
            }
        };
        NzCascaderComponent.prototype.moveUpOrDown = function (isUp) {
            var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
            var activeOption = this.cascaderService.activatedOptions[columnIndex];
            var options = this.cascaderService.columns[columnIndex] || [];
            var length = options.length;
            var nextIndex = -1;
            if (!activeOption) {
                // Not selected options in this column
                nextIndex = isUp ? length : -1;
            }
            else {
                nextIndex = options.indexOf(activeOption);
            }
            while (true) {
                nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
                if (nextIndex < 0 || nextIndex >= length) {
                    break;
                }
                var nextOption = options[nextIndex];
                if (!nextOption || nextOption.disabled) {
                    continue;
                }
                this.cascaderService.setOptionActivated(nextOption, columnIndex);
                break;
            }
        };
        NzCascaderComponent.prototype.moveLeft = function () {
            var options = this.cascaderService.activatedOptions;
            if (options.length) {
                options.pop(); // Remove the last one
            }
        };
        NzCascaderComponent.prototype.moveRight = function () {
            var length = this.cascaderService.activatedOptions.length;
            var options = this.cascaderService.columns[length];
            if (options && options.length) {
                var nextOpt = options.find(function (o) { return !o.disabled; });
                if (nextOpt) {
                    this.cascaderService.setOptionActivated(nextOpt, length);
                }
            }
        };
        NzCascaderComponent.prototype.clearDelaySelectTimer = function () {
            if (this.delaySelectTimer) {
                clearTimeout(this.delaySelectTimer);
                this.delaySelectTimer = null;
            }
        };
        NzCascaderComponent.prototype.delaySetOptionActivated = function (option, columnIndex, performSelect) {
            var _this = this;
            this.clearDelaySelectTimer();
            this.delaySelectTimer = setTimeout(function () {
                _this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
                _this.delaySelectTimer = null;
            }, 150);
        };
        NzCascaderComponent.prototype.toggleSearchingMode = function (toSearching) {
            if (this.inSearchingMode !== toSearching) {
                this.cascaderService.toggleSearchingMode(toSearching);
            }
            if (this.inSearchingMode) {
                this.cascaderService.prepareSearchOptions(this.inputValue);
            }
        };
        NzCascaderComponent.prototype.isOptionActivated = function (option, index) {
            var activeOpt = this.cascaderService.activatedOptions[index];
            return activeOpt === option;
        };
        NzCascaderComponent.prototype.setDisabledState = function (isDisabled) {
            if (isDisabled) {
                this.closeMenu();
            }
            this.nzDisabled = isDisabled;
        };
        NzCascaderComponent.prototype.closeMenu = function () {
            this.blur();
            this.clearDelayMenuTimer();
            this.setMenuVisible(false);
        };
        /**
         * Reposition the cascader panel. When a menu opens, the cascader expands
         * and may exceed the boundary of browser's window.
         */
        NzCascaderComponent.prototype.reposition = function () {
            var _this = this;
            if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
                Promise.resolve().then(function () {
                    _this.overlay.overlayRef.updatePosition();
                });
            }
        };
        /**
         * When a cascader options is changed, a child needs to know that it should re-render.
         */
        NzCascaderComponent.prototype.checkChildren = function () {
            if (this.cascaderItems) {
                this.cascaderItems.forEach(function (item) { return item.markForCheck(); });
            }
        };
        NzCascaderComponent.prototype.setDisplayLabel = function () {
            var _this = this;
            var selectedOptions = this.cascaderService.selectedOptions;
            var labels = selectedOptions.map(function (o) { return _this.cascaderService.getOptionLabel(o); });
            if (this.isLabelRenderTemplate) {
                this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
            }
            else {
                this.labelRenderText = defaultDisplayRender.call(this, labels);
            }
        };
        NzCascaderComponent.prototype.setDropdownStyles = function () {
            var firstColumn = this.cascaderService.columns[0];
            this.shouldShowEmpty =
                (this.inSearchingMode && (!firstColumn || !firstColumn.length)) || // Should show empty when there's no searching result
                    (!(this.nzOptions && this.nzOptions.length) && !this.nzLoadData); // Should show when there's no options and developer does not use nzLoadData
            this.dropdownHeightStyle = this.shouldShowEmpty ? 'auto' : '';
            if (this.input) {
                this.dropdownWidthStyle = this.inSearchingMode || this.shouldShowEmpty ? this.input.nativeElement.offsetWidth + "px" : '';
            }
        };
        NzCascaderComponent.prototype.setLocale = function () {
            this.locale = this.i18nService.getLocaleData('global');
            this.cdr.markForCheck();
        };
        NzCascaderComponent.prototype.scrollToActivatedOptions = function () {
            var _this = this;
            // scroll only until option menu view is ready
            Promise.resolve().then(function () {
                _this.cascaderItems
                    .toArray()
                    .filter(function (e) { return e.activated; })
                    .forEach(function (e) {
                    var _a;
                    (_a = e.nativeElement) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'start', inline: 'nearest' });
                });
            });
        };
        return NzCascaderComponent;
    }());
    NzCascaderComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-cascader, [nz-cascader]',
                    exportAs: 'nzCascader',
                    preserveWhitespaces: false,
                    template: "\n    <div cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" #trigger>\n      <div *ngIf=\"nzShowInput\">\n        <input\n          #input\n          nz-input\n          class=\"ant-cascader-input\"\n          [class.ant-cascader-input-disabled]=\"nzDisabled\"\n          [class.ant-cascader-input-lg]=\"nzSize === 'large'\"\n          [class.ant-cascader-input-sm]=\"nzSize === 'small'\"\n          [attr.autoComplete]=\"'off'\"\n          [attr.placeholder]=\"showPlaceholder ? nzPlaceHolder || locale?.placeholder : null\"\n          [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n          [readonly]=\"!nzShowSearch\"\n          [disabled]=\"nzDisabled\"\n          [nzSize]=\"nzSize\"\n          [(ngModel)]=\"inputValue\"\n          (blur)=\"handleInputBlur()\"\n          (focus)=\"handleInputFocus()\"\n          (change)=\"$event.stopPropagation()\"\n        />\n        <i\n          *ngIf=\"clearIconVisible\"\n          nz-icon\n          nzType=\"close-circle\"\n          nzTheme=\"fill\"\n          class=\"ant-cascader-picker-clear\"\n          (click)=\"clearSelection($event)\"\n        ></i>\n        <ng-container *nzStringTemplateOutlet=\"nzSuffixIcon\">\n          <i\n            *ngIf=\"nzShowArrow && !isLoading\"\n            nz-icon\n            [nzType]=\"$any(nzSuffixIcon)\"\n            class=\"ant-cascader-picker-arrow\"\n            [class.ant-cascader-picker-arrow-expand]=\"menuVisible\"\n          ></i>\n        </ng-container>\n        <i *ngIf=\"isLoading\" nz-icon nzType=\"loading\" class=\"ant-cascader-picker-arrow\"></i>\n        <span\n          class=\"ant-cascader-picker-label\"\n          [class.ant-cascader-picker-show-search]=\"!!nzShowSearch\"\n          [class.ant-cascader-picker-focused]=\"!!nzShowSearch && isFocused && !inputValue\"\n        >\n          <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\n          <ng-template #labelTemplate>\n            <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\n          </ng-template>\n        </span>\n      </div>\n      <ng-content></ng-content>\n    </div>\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayPositions]=\"positions\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-cascader-menus'\"\n      [cdkConnectedOverlayOpen]=\"menuVisible\"\n      (overlayOutsideClick)=\"onClickOutside($event)\"\n      (detach)=\"closeMenu()\"\n    >\n      <div\n        #menu\n        class=\"ant-cascader-menus\"\n        [class.ant-cascader-menu-rtl]=\"dir === 'rtl'\"\n        [class.ant-cascader-menus-hidden]=\"!menuVisible\"\n        [ngClass]=\"menuCls\"\n        [ngStyle]=\"nzMenuStyle\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [@slideMotion]=\"'enter'\"\n        (mouseleave)=\"onTriggerMouseLeave($event)\"\n      >\n        <ul\n          *ngIf=\"shouldShowEmpty; else hasOptionsTemplate\"\n          class=\"ant-cascader-menu\"\n          [style.width]=\"dropdownWidthStyle\"\n          [style.height]=\"dropdownHeightStyle\"\n        >\n          <li class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\n            <nz-embed-empty [nzComponentName]=\"'cascader'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n          </li>\n        </ul>\n        <ng-template #hasOptionsTemplate>\n          <ul\n            *ngFor=\"let options of cascaderService.columns; let i = index\"\n            class=\"ant-cascader-menu\"\n            [ngClass]=\"menuColumnCls\"\n            [style.height]=\"dropdownHeightStyle\"\n            [style.width]=\"dropdownWidthStyle\"\n          >\n            <li\n              nz-cascader-option\n              *ngFor=\"let option of options\"\n              [expandIcon]=\"nzExpandIcon\"\n              [columnIndex]=\"i\"\n              [nzLabelProperty]=\"nzLabelProperty\"\n              [optionTemplate]=\"nzOptionRender\"\n              [activated]=\"isOptionActivated(option, i)\"\n              [highlightText]=\"inSearchingMode ? inputValue : ''\"\n              [option]=\"option\"\n              [dir]=\"dir\"\n              (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\n              (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\n              (click)=\"onOptionClick(option, i, $event)\"\n            ></li>\n          </ul>\n        </ng-template>\n      </div>\n    </ng-template>\n  ",
                    animations: [animation.slideMotion],
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return NzCascaderComponent; }),
                            multi: true
                        },
                        NzCascaderService
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"',
                        '[class.ant-cascader-lg]': 'nzSize === "large"',
                        '[class.ant-cascader-sm]': 'nzSize === "small"',
                        '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                        '[class.ant-cascader-picker-open]': 'menuVisible',
                        '[class.ant-cascader-picker-with-value]': '!!inputValue',
                        '[class.ant-cascader-focused]': 'isFocused',
                        '[class.ant-cascader-picker-rtl]': "dir ==='rtl'"
                    }
                },] }
    ];
    NzCascaderComponent.ctorParameters = function () { return [
        { type: NzCascaderService },
        { type: config.NzConfigService },
        { type: core.ChangeDetectorRef },
        { type: i18n.NzI18nService },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
    ]; };
    NzCascaderComponent.propDecorators = {
        input: [{ type: core.ViewChild, args: ['input', { static: false },] }],
        menu: [{ type: core.ViewChild, args: ['menu', { static: false },] }],
        overlay: [{ type: core.ViewChild, args: [overlay$1.CdkConnectedOverlay, { static: false },] }],
        cascaderItems: [{ type: core.ViewChildren, args: [NzCascaderOptionComponent,] }],
        nzOptionRender: [{ type: core.Input }],
        nzShowInput: [{ type: core.Input }],
        nzShowArrow: [{ type: core.Input }],
        nzAllowClear: [{ type: core.Input }],
        nzAutoFocus: [{ type: core.Input }],
        nzChangeOnSelect: [{ type: core.Input }],
        nzDisabled: [{ type: core.Input }],
        nzColumnClassName: [{ type: core.Input }],
        nzExpandTrigger: [{ type: core.Input }],
        nzValueProperty: [{ type: core.Input }],
        nzLabelRender: [{ type: core.Input }],
        nzLabelProperty: [{ type: core.Input }],
        nzNotFoundContent: [{ type: core.Input }],
        nzSize: [{ type: core.Input }],
        nzBackdrop: [{ type: core.Input }],
        nzShowSearch: [{ type: core.Input }],
        nzPlaceHolder: [{ type: core.Input }],
        nzMenuClassName: [{ type: core.Input }],
        nzMenuStyle: [{ type: core.Input }],
        nzMouseEnterDelay: [{ type: core.Input }],
        nzMouseLeaveDelay: [{ type: core.Input }],
        nzTriggerAction: [{ type: core.Input }],
        nzChangeOn: [{ type: core.Input }],
        nzLoadData: [{ type: core.Input }],
        nzSuffixIcon: [{ type: core.Input }],
        nzExpandIcon: [{ type: core.Input }],
        nzOptions: [{ type: core.Input }],
        nzVisibleChange: [{ type: core.Output }],
        nzSelectionChange: [{ type: core.Output }],
        nzSelect: [{ type: core.Output }],
        nzClear: [{ type: core.Output }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
        onTriggerClick: [{ type: core.HostListener, args: ['click',] }],
        onTriggerMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
        onTriggerMouseLeave: [{ type: core.HostListener, args: ['mouseleave', ['$event'],] }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowInput", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowArrow", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzDisabled", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzCascaderComponent.prototype, "nzSize", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzBackdrop", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCascaderModule = /** @class */ (function () {
        function NzCascaderModule() {
        }
        return NzCascaderModule;
    }());
    NzCascaderModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        bidi.BidiModule,
                        common.CommonModule,
                        forms.FormsModule,
                        overlay$1.OverlayModule,
                        outlet.NzOutletModule,
                        empty.NzEmptyModule,
                        highlight.NzHighlightModule,
                        icon.NzIconModule,
                        input.NzInputModule,
                        noAnimation.NzNoAnimationModule,
                        overlay.NzOverlayModule
                    ],
                    declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                    exports: [NzCascaderComponent]
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzCascaderComponent = NzCascaderComponent;
    exports.NzCascaderModule = NzCascaderModule;
    exports.NzCascaderOptionComponent = NzCascaderOptionComponent;
    exports.NzCascaderService = NzCascaderService;
    exports.isChildOption = isChildOption;
    exports.isParentOption = isParentOption;
    exports.isShowSearchObject = isShowSearchObject;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-cascader.umd.js.map
