(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/core'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/logger'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/common'), require('@angular/platform-browser/animations'), require('ng-zorro-antd/i18n'), require('@angular/animations'), require('@angular/cdk/keycodes'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/pipes')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/modal', ['exports', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/core', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/a11y', '@angular/common', '@angular/platform-browser/animations', 'ng-zorro-antd/i18n', '@angular/animations', '@angular/cdk/keycodes', 'ng-zorro-antd/button', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/pipes'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].modal = {}), global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.core, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.logger, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.a11y, global.ng.common, global.ng.platformBrowser.animations, global['ng-zorro-antd'].i18n, global.ng.animations, global.ng.cdk.keycodes, global['ng-zorro-antd'].button, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].pipes));
}(this, (function (exports, bidi, overlay, portal, core, config, logger, util, rxjs, operators, a11y, common, animations$1, i18n, animations, keycodes, button, noAnimation, outlet, icon, pipes) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var noopFun = function () { return void 0; };
    var ɵ0 = noopFun;
    var ModalOptions = /** @class */ (function () {
        function ModalOptions() {
            this.nzCentered = false;
            this.nzClosable = true;
            this.nzOkLoading = false;
            this.nzOkDisabled = false;
            this.nzCancelDisabled = false;
            this.nzCancelLoading = false;
            this.nzNoAnimation = false;
            this.nzAutofocus = 'auto';
            this.nzKeyboard = true;
            this.nzZIndex = 1000;
            this.nzWidth = 520;
            this.nzCloseIcon = 'close';
            this.nzOkType = 'primary';
            this.nzOkDanger = false;
            this.nzModalType = 'default';
            this.nzOnCancel = noopFun;
            this.nzOnOk = noopFun;
            // Confirm
            this.nzIconType = 'question-circle';
        }
        return ModalOptions;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var ZOOM_CLASS_NAME_MAP = {
        enter: 'ant-zoom-enter',
        enterActive: 'ant-zoom-enter-active',
        leave: 'ant-zoom-leave',
        leaveActive: 'ant-zoom-leave-active'
    };
    var FADE_CLASS_NAME_MAP = {
        enter: 'ant-fade-enter',
        enterActive: 'ant-fade-enter-active',
        leave: 'ant-fade-leave',
        leaveActive: 'ant-fade-leave-active'
    };
    var MODAL_MASK_CLASS_NAME = 'ant-modal-mask';
    var NZ_CONFIG_MODULE_NAME = 'modal';

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
    var nzModalAnimations = {
        modalContainer: animations.trigger('modalContainer', [
            animations.state('void, exit', animations.style({})),
            animations.state('enter', animations.style({})),
            animations.transition('* => enter', animations.animate('.24s', animations.style({}))),
            animations.transition('* => void, * => exit', animations.animate('.2s', animations.style({})))
        ])
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function applyConfigDefaults(config, defaultOptions) {
        return Object.assign(Object.assign({}, defaultOptions), config);
    }
    function getValueWithConfig(userValue, configValue, defaultValue) {
        return typeof userValue === 'undefined' ? (typeof configValue === 'undefined' ? defaultValue : configValue) : userValue;
    }
    /**
     * Assign the params into the content component instance.
     * @deprecated Should use dependency injection to get the params for user
     * @breaking-change 12.0.0
     */
    function setContentInstanceParams(instance, params) {
        Object.assign(instance, params);
    }
    function getConfigFromComponent(component) {
        var nzCentered = component.nzCentered, nzMask = component.nzMask, nzMaskClosable = component.nzMaskClosable, nzClosable = component.nzClosable, nzOkLoading = component.nzOkLoading, nzOkDisabled = component.nzOkDisabled, nzCancelDisabled = component.nzCancelDisabled, nzCancelLoading = component.nzCancelLoading, nzKeyboard = component.nzKeyboard, nzNoAnimation = component.nzNoAnimation, nzContent = component.nzContent, nzComponentParams = component.nzComponentParams, nzFooter = component.nzFooter, nzZIndex = component.nzZIndex, nzWidth = component.nzWidth, nzWrapClassName = component.nzWrapClassName, nzClassName = component.nzClassName, nzStyle = component.nzStyle, nzTitle = component.nzTitle, nzCloseIcon = component.nzCloseIcon, nzMaskStyle = component.nzMaskStyle, nzBodyStyle = component.nzBodyStyle, nzOkText = component.nzOkText, nzCancelText = component.nzCancelText, nzOkType = component.nzOkType, nzOkDanger = component.nzOkDanger, nzIconType = component.nzIconType, nzModalType = component.nzModalType, nzOnOk = component.nzOnOk, nzOnCancel = component.nzOnCancel, nzAfterOpen = component.nzAfterOpen, nzAfterClose = component.nzAfterClose, nzCloseOnNavigation = component.nzCloseOnNavigation, nzAutofocus = component.nzAutofocus;
        return {
            nzCentered: nzCentered,
            nzMask: nzMask,
            nzMaskClosable: nzMaskClosable,
            nzClosable: nzClosable,
            nzOkLoading: nzOkLoading,
            nzOkDisabled: nzOkDisabled,
            nzCancelDisabled: nzCancelDisabled,
            nzCancelLoading: nzCancelLoading,
            nzKeyboard: nzKeyboard,
            nzNoAnimation: nzNoAnimation,
            nzContent: nzContent,
            nzComponentParams: nzComponentParams,
            nzFooter: nzFooter,
            nzZIndex: nzZIndex,
            nzWidth: nzWidth,
            nzWrapClassName: nzWrapClassName,
            nzClassName: nzClassName,
            nzStyle: nzStyle,
            nzTitle: nzTitle,
            nzCloseIcon: nzCloseIcon,
            nzMaskStyle: nzMaskStyle,
            nzBodyStyle: nzBodyStyle,
            nzOkText: nzOkText,
            nzCancelText: nzCancelText,
            nzOkType: nzOkType,
            nzOkDanger: nzOkDanger,
            nzIconType: nzIconType,
            nzModalType: nzModalType,
            nzOnOk: nzOnOk,
            nzOnCancel: nzOnCancel,
            nzAfterOpen: nzAfterOpen,
            nzAfterClose: nzAfterClose,
            nzCloseOnNavigation: nzCloseOnNavigation,
            nzAutofocus: nzAutofocus
        };
    }

    function throwNzModalContentAlreadyAttachedError() {
        throw Error('Attempting to attach modal content after content is already attached');
    }
    var BaseModalContainerComponent = /** @class */ (function (_super) {
        __extends(BaseModalContainerComponent, _super);
        function BaseModalContainerComponent(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.focusTrapFactory = focusTrapFactory;
            _this.cdr = cdr;
            _this.render = render;
            _this.overlayRef = overlayRef;
            _this.nzConfigService = nzConfigService;
            _this.config = config;
            _this.animationType = animationType;
            _this.animationStateChanged = new core.EventEmitter();
            _this.containerClick = new core.EventEmitter();
            _this.cancelTriggered = new core.EventEmitter();
            _this.okTriggered = new core.EventEmitter();
            _this.state = 'enter';
            _this.isStringContent = false;
            _this.dir = 'ltr';
            _this.elementFocusedBeforeModalWasOpened = null;
            _this.mouseDown = false;
            _this.oldMaskStyle = null;
            _this.destroy$ = new rxjs.Subject();
            _this.document = document;
            _this.dir = overlayRef.getDirection();
            _this.isStringContent = typeof config.nzContent === 'string';
            _this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(operators.takeUntil(_this.destroy$))
                .subscribe(function () {
                _this.updateMaskClassname();
            });
            return _this;
        }
        Object.defineProperty(BaseModalContainerComponent.prototype, "showMask", {
            get: function () {
                var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
                return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseModalContainerComponent.prototype, "maskClosable", {
            get: function () {
                var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
                return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
            },
            enumerable: false,
            configurable: true
        });
        BaseModalContainerComponent.prototype.onContainerClick = function (e) {
            if (e.target === e.currentTarget && !this.mouseDown && this.showMask && this.maskClosable) {
                this.containerClick.emit();
            }
        };
        BaseModalContainerComponent.prototype.onMousedown = function () {
            this.mouseDown = true;
        };
        BaseModalContainerComponent.prototype.onMouseup = function () {
            var _this = this;
            if (this.mouseDown) {
                setTimeout(function () {
                    _this.mouseDown = false;
                });
            }
        };
        BaseModalContainerComponent.prototype.onCloseClick = function () {
            this.cancelTriggered.emit();
        };
        BaseModalContainerComponent.prototype.onOkClick = function () {
            this.okTriggered.emit();
        };
        BaseModalContainerComponent.prototype.attachComponentPortal = function (portal) {
            if (this.portalOutlet.hasAttached()) {
                throwNzModalContentAlreadyAttachedError();
            }
            this.savePreviouslyFocusedElement();
            this.setZIndexForBackdrop();
            return this.portalOutlet.attachComponentPortal(portal);
        };
        BaseModalContainerComponent.prototype.attachTemplatePortal = function (portal) {
            if (this.portalOutlet.hasAttached()) {
                throwNzModalContentAlreadyAttachedError();
            }
            this.savePreviouslyFocusedElement();
            this.setZIndexForBackdrop();
            return this.portalOutlet.attachTemplatePortal(portal);
        };
        BaseModalContainerComponent.prototype.attachStringContent = function () {
            this.savePreviouslyFocusedElement();
            this.setZIndexForBackdrop();
        };
        BaseModalContainerComponent.prototype.getNativeElement = function () {
            return this.elementRef.nativeElement;
        };
        BaseModalContainerComponent.prototype.animationDisabled = function () {
            return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
        };
        BaseModalContainerComponent.prototype.setModalTransformOrigin = function () {
            var modalElement = this.modalElementRef.nativeElement;
            if (this.elementFocusedBeforeModalWasOpened) {
                var previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
                var lastPosition = util.getElementOffset(this.elementFocusedBeforeModalWasOpened);
                var x = lastPosition.left + previouslyDOMRect.width / 2;
                var y = lastPosition.top + previouslyDOMRect.height / 2;
                var transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
                this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
            }
        };
        BaseModalContainerComponent.prototype.savePreviouslyFocusedElement = function () {
            var _this = this;
            if (!this.focusTrap) {
                this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            }
            if (this.document) {
                this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
                if (this.elementRef.nativeElement.focus) {
                    Promise.resolve().then(function () { return _this.elementRef.nativeElement.focus(); });
                }
            }
        };
        BaseModalContainerComponent.prototype.trapFocus = function () {
            var element = this.elementRef.nativeElement;
            if (this.config.nzAutofocus) {
                this.focusTrap.focusInitialElementWhenReady().then();
            }
            else {
                var activeElement = this.document.activeElement;
                if (activeElement !== element && !element.contains(activeElement)) {
                    element.focus();
                }
            }
        };
        BaseModalContainerComponent.prototype.restoreFocus = function () {
            var toFocus = this.elementFocusedBeforeModalWasOpened;
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (toFocus && typeof toFocus.focus === 'function') {
                var activeElement = this.document.activeElement;
                var element = this.elementRef.nativeElement;
                if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
                    toFocus.focus();
                }
            }
            if (this.focusTrap) {
                this.focusTrap.destroy();
            }
        };
        BaseModalContainerComponent.prototype.setEnterAnimationClass = function () {
            if (this.animationDisabled()) {
                return;
            }
            // Make sure to set the `TransformOrigin` style before set the modelElement's class names
            this.setModalTransformOrigin();
            var modalElement = this.modalElementRef.nativeElement;
            var backdropElement = this.overlayRef.backdropElement;
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enter);
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enterActive);
            if (backdropElement) {
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
            }
        };
        BaseModalContainerComponent.prototype.setExitAnimationClass = function () {
            var modalElement = this.modalElementRef.nativeElement;
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leave);
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leaveActive);
            this.setMaskExitAnimationClass();
        };
        BaseModalContainerComponent.prototype.setMaskExitAnimationClass = function (force) {
            if (force === void 0) { force = false; }
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (this.animationDisabled() || force) {
                    // https://github.com/angular/components/issues/18645
                    backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                    return;
                }
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
            }
        };
        BaseModalContainerComponent.prototype.cleanAnimationClass = function () {
            if (this.animationDisabled()) {
                return;
            }
            var backdropElement = this.overlayRef.backdropElement;
            var modalElement = this.modalElementRef.nativeElement;
            if (backdropElement) {
                backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enter);
                backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enterActive);
            }
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enter);
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enterActive);
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leave);
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leaveActive);
        };
        BaseModalContainerComponent.prototype.setZIndexForBackdrop = function () {
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (util.isNotNil(this.config.nzZIndex)) {
                    this.render.setStyle(backdropElement, 'z-index', this.config.nzZIndex);
                }
            }
        };
        BaseModalContainerComponent.prototype.bindBackdropStyle = function () {
            var _this = this;
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (this.oldMaskStyle) {
                    var styles = this.oldMaskStyle;
                    Object.keys(styles).forEach(function (key) {
                        _this.render.removeStyle(backdropElement, key);
                    });
                    this.oldMaskStyle = null;
                }
                this.setZIndexForBackdrop();
                if (typeof this.config.nzMaskStyle === 'object' && Object.keys(this.config.nzMaskStyle).length) {
                    var styles_1 = Object.assign({}, this.config.nzMaskStyle);
                    Object.keys(styles_1).forEach(function (key) {
                        _this.render.setStyle(backdropElement, key, styles_1[key]);
                    });
                    this.oldMaskStyle = styles_1;
                }
            }
        };
        BaseModalContainerComponent.prototype.updateMaskClassname = function () {
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (this.showMask) {
                    backdropElement.classList.add(MODAL_MASK_CLASS_NAME);
                }
                else {
                    backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                }
            }
        };
        BaseModalContainerComponent.prototype.onAnimationDone = function (event) {
            if (event.toState === 'enter') {
                this.trapFocus();
            }
            else if (event.toState === 'exit') {
                this.restoreFocus();
            }
            this.cleanAnimationClass();
            this.animationStateChanged.emit(event);
        };
        BaseModalContainerComponent.prototype.onAnimationStart = function (event) {
            if (event.toState === 'enter') {
                this.setEnterAnimationClass();
                this.bindBackdropStyle();
            }
            else if (event.toState === 'exit') {
                this.setExitAnimationClass();
            }
            this.animationStateChanged.emit(event);
        };
        BaseModalContainerComponent.prototype.startExitAnimation = function () {
            this.state = 'exit';
            this.cdr.markForCheck();
        };
        BaseModalContainerComponent.prototype.ngOnDestroy = function () {
            this.setMaskExitAnimationClass(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        return BaseModalContainerComponent;
    }(portal.BasePortalOutlet));
    BaseModalContainerComponent.decorators = [
        { type: core.Directive }
    ];
    BaseModalContainerComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: overlay.OverlayRef },
        { type: config.NzConfigService },
        { type: ModalOptions },
        { type: undefined },
        { type: String }
    ]; };

    var NzModalConfirmContainerComponent = /** @class */ (function (_super) {
        __extends(NzModalConfirmContainerComponent, _super);
        function NzModalConfirmContainerComponent(i18n, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
            var _this = _super.call(this, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) || this;
            _this.i18n = i18n;
            _this.config = config;
            _this.cancelTriggered = new core.EventEmitter();
            _this.okTriggered = new core.EventEmitter();
            _this.i18n.localeChange.pipe(operators.takeUntil(_this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Modal');
            });
            return _this;
        }
        NzModalConfirmContainerComponent.prototype.onCancel = function () {
            this.cancelTriggered.emit();
        };
        NzModalConfirmContainerComponent.prototype.onOk = function () {
            this.okTriggered.emit();
        };
        return NzModalConfirmContainerComponent;
    }(BaseModalContainerComponent));
    NzModalConfirmContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-modal-confirm-container',
                    exportAs: 'nzModalConfirmContainer',
                    template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      (mousedown)=\"onMousedown()\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <div class=\"ant-modal-confirm-body-wrapper\">\n            <div class=\"ant-modal-confirm-body\">\n              <i nz-icon [nzType]=\"config.nzIconType!\"></i>\n              <span class=\"ant-modal-confirm-title\">\n                <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n                  <span [innerHTML]=\"config.nzTitle\"></span>\n                </ng-container>\n              </span>\n              <div class=\"ant-modal-confirm-content\">\n                <ng-template cdkPortalOutlet></ng-template>\n                <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n              </div>\n            </div>\n            <div class=\"ant-modal-confirm-btns\">\n              <button\n                *ngIf=\"config.nzCancelText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel' || null\"\n                nz-button\n                (click)=\"onCancel()\"\n                [nzLoading]=\"!!config.nzCancelLoading\"\n                [disabled]=\"config.nzCancelDisabled\"\n              >\n                {{ config.nzCancelText || locale.cancelText }}\n              </button>\n              <button\n                *ngIf=\"config.nzOkText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok' || null\"\n                nz-button\n                [nzType]=\"config.nzOkType!\"\n                (click)=\"onOk()\"\n                [nzLoading]=\"!!config.nzOkLoading\"\n                [disabled]=\"config.nzOkDisabled\"\n                [nzDanger]=\"config.nzOkDanger\"\n              >\n                {{ config.nzOkText || locale.okText }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    animations: [nzModalAnimations.modalContainer],
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: core.ChangeDetectionStrategy.Default,
                    host: {
                        tabindex: '-1',
                        role: 'dialog',
                        '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                        '[class.ant-modal-wrap-rtl]': "dir === 'rtl'",
                        '[class.ant-modal-centered]': 'config.nzCentered',
                        '[style.zIndex]': 'config.nzZIndex',
                        '[@.disabled]': 'config.nzNoAnimation',
                        '[@modalContainer]': 'state',
                        '(@modalContainer.start)': 'onAnimationStart($event)',
                        '(@modalContainer.done)': 'onAnimationDone($event)',
                        '(click)': 'onContainerClick($event)',
                        '(mouseup)': 'onMouseup()'
                    }
                },] }
    ];
    NzModalConfirmContainerComponent.ctorParameters = function () { return [
        { type: i18n.NzI18nService },
        { type: core.ElementRef },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: overlay.OverlayRef },
        { type: config.NzConfigService },
        { type: ModalOptions },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations$1.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzModalConfirmContainerComponent.propDecorators = {
        portalOutlet: [{ type: core.ViewChild, args: [portal.CdkPortalOutlet, { static: true },] }],
        modalElementRef: [{ type: core.ViewChild, args: ['modalElement', { static: true },] }],
        cancelTriggered: [{ type: core.Output }],
        okTriggered: [{ type: core.Output }]
    };

    var NzModalContainerComponent = /** @class */ (function (_super) {
        __extends(NzModalContainerComponent, _super);
        function NzModalContainerComponent(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
            var _this = _super.call(this, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) || this;
            _this.config = config;
            return _this;
        }
        return NzModalContainerComponent;
    }(BaseModalContainerComponent));
    NzModalContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-modal-container',
                    exportAs: 'nzModalContainer',
                    template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      (mousedown)=\"onMousedown()\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div *ngIf=\"config.nzTitle\" nz-modal-title></div>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <ng-template cdkPortalOutlet></ng-template>\n          <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n        </div>\n        <div\n          *ngIf=\"config.nzFooter !== null\"\n          nz-modal-footer\n          [modalRef]=\"modalRef\"\n          (cancelTriggered)=\"onCloseClick()\"\n          (okTriggered)=\"onOkClick()\"\n        ></div>\n      </div>\n    </div>\n  ",
                    animations: [nzModalAnimations.modalContainer],
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: core.ChangeDetectionStrategy.Default,
                    host: {
                        tabindex: '-1',
                        role: 'dialog',
                        '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                        '[class.ant-modal-wrap-rtl]': "dir === 'rtl'",
                        '[class.ant-modal-centered]': 'config.nzCentered',
                        '[style.zIndex]': 'config.nzZIndex',
                        '[@.disabled]': 'config.nzNoAnimation',
                        '[@modalContainer]': 'state',
                        '(@modalContainer.start)': 'onAnimationStart($event)',
                        '(@modalContainer.done)': 'onAnimationDone($event)',
                        '(click)': 'onContainerClick($event)',
                        '(mouseup)': 'onMouseup()'
                    }
                },] }
    ];
    NzModalContainerComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: overlay.OverlayRef },
        { type: config.NzConfigService },
        { type: ModalOptions },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations$1.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzModalContainerComponent.propDecorators = {
        portalOutlet: [{ type: core.ViewChild, args: [portal.CdkPortalOutlet, { static: true },] }],
        modalElementRef: [{ type: core.ViewChild, args: ['modalElement', { static: true },] }]
    };

    var NzModalRef = /** @class */ (function () {
        function NzModalRef(overlayRef, config, containerInstance) {
            var _this = this;
            this.overlayRef = overlayRef;
            this.config = config;
            this.containerInstance = containerInstance;
            this.componentInstance = null;
            this.state = 0 /* OPEN */;
            this.afterClose = new rxjs.Subject();
            this.afterOpen = new rxjs.Subject();
            containerInstance.animationStateChanged
                .pipe(operators.filter(function (event) { return event.phaseName === 'done' && event.toState === 'enter'; }), operators.take(1))
                .subscribe(function () {
                _this.afterOpen.next();
                _this.afterOpen.complete();
                if (config.nzAfterOpen instanceof core.EventEmitter) {
                    config.nzAfterOpen.emit();
                }
            });
            containerInstance.animationStateChanged
                .pipe(operators.filter(function (event) { return event.phaseName === 'done' && event.toState === 'exit'; }), operators.take(1))
                .subscribe(function () {
                clearTimeout(_this.closeTimeout);
                _this._finishDialogClose();
            });
            containerInstance.containerClick.pipe(operators.take(1)).subscribe(function () {
                var cancelable = !_this.config.nzCancelLoading && !_this.config.nzOkLoading;
                if (cancelable) {
                    _this.trigger("cancel" /* CANCEL */);
                }
            });
            overlayRef
                .keydownEvents()
                .pipe(operators.filter(function (event) {
                return (_this.config.nzKeyboard &&
                    !_this.config.nzCancelLoading &&
                    !_this.config.nzOkLoading &&
                    event.keyCode === keycodes.ESCAPE &&
                    !keycodes.hasModifierKey(event));
            }))
                .subscribe(function (event) {
                event.preventDefault();
                _this.trigger("cancel" /* CANCEL */);
            });
            containerInstance.cancelTriggered.subscribe(function () { return _this.trigger("cancel" /* CANCEL */); });
            containerInstance.okTriggered.subscribe(function () { return _this.trigger("ok" /* OK */); });
            overlayRef.detachments().subscribe(function () {
                _this.afterClose.next(_this.result);
                _this.afterClose.complete();
                if (config.nzAfterClose instanceof core.EventEmitter) {
                    config.nzAfterClose.emit(_this.result);
                }
                _this.componentInstance = null;
                _this.overlayRef.dispose();
            });
        }
        NzModalRef.prototype.getContentComponent = function () {
            return this.componentInstance;
        };
        NzModalRef.prototype.getElement = function () {
            return this.containerInstance.getNativeElement();
        };
        NzModalRef.prototype.destroy = function (result) {
            this.close(result);
        };
        NzModalRef.prototype.triggerOk = function () {
            return this.trigger("ok" /* OK */);
        };
        NzModalRef.prototype.triggerCancel = function () {
            return this.trigger("cancel" /* CANCEL */);
        };
        NzModalRef.prototype.close = function (result) {
            var _this = this;
            if (this.state !== 0 /* OPEN */) {
                return;
            }
            this.result = result;
            this.containerInstance.animationStateChanged
                .pipe(operators.filter(function (event) { return event.phaseName === 'start'; }), operators.take(1))
                .subscribe(function (event) {
                _this.overlayRef.detachBackdrop();
                _this.closeTimeout = setTimeout(function () {
                    _this._finishDialogClose();
                }, event.totalTime + 100);
            });
            this.containerInstance.startExitAnimation();
            this.state = 1 /* CLOSING */;
        };
        NzModalRef.prototype.updateConfig = function (config) {
            Object.assign(this.config, config);
            this.containerInstance.bindBackdropStyle();
            this.containerInstance.cdr.markForCheck();
        };
        NzModalRef.prototype.getState = function () {
            return this.state;
        };
        NzModalRef.prototype.getConfig = function () {
            return this.config;
        };
        NzModalRef.prototype.getBackdropElement = function () {
            return this.overlayRef.backdropElement;
        };
        NzModalRef.prototype.trigger = function (action) {
            return __awaiter(this, void 0, void 0, function () {
                var trigger, loadingKey, loading, result, doClose;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
                            loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action];
                            loading = this.config[loadingKey];
                            if (loading) {
                                return [2 /*return*/];
                            }
                            if (!(trigger instanceof core.EventEmitter)) return [3 /*break*/, 1];
                            trigger.emit(this.getContentComponent());
                            return [3 /*break*/, 7];
                        case 1:
                            if (!(typeof trigger === 'function')) return [3 /*break*/, 7];
                            result = trigger(this.getContentComponent());
                            if (!util.isPromise(result)) return [3 /*break*/, 6];
                            this.config[loadingKey] = true;
                            doClose = false;
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, , 4, 5]);
                            return [4 /*yield*/, result];
                        case 3:
                            doClose = _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            this.config[loadingKey] = false;
                            this.closeWhitResult(doClose);
                            return [7 /*endfinally*/];
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            this.closeWhitResult(result);
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        NzModalRef.prototype.closeWhitResult = function (result) {
            if (result !== false) {
                this.close(result);
            }
        };
        NzModalRef.prototype._finishDialogClose = function () {
            this.state = 2 /* CLOSED */;
            this.overlayRef.dispose();
        };
        return NzModalRef;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalService = /** @class */ (function () {
        function NzModalService(overlay, injector, nzConfigService, parentModal, directionality) {
            var _this = this;
            this.overlay = overlay;
            this.injector = injector;
            this.nzConfigService = nzConfigService;
            this.parentModal = parentModal;
            this.directionality = directionality;
            this.openModalsAtThisLevel = [];
            this.afterAllClosedAtThisLevel = new rxjs.Subject();
            this.afterAllClose = rxjs.defer(function () { return _this.openModals.length ? _this._afterAllClosed : _this._afterAllClosed.pipe(operators.startWith(undefined)); });
        }
        Object.defineProperty(NzModalService.prototype, "openModals", {
            get: function () {
                return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalService.prototype, "_afterAllClosed", {
            get: function () {
                var parent = this.parentModal;
                return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
            },
            enumerable: false,
            configurable: true
        });
        NzModalService.prototype.create = function (config) {
            return this.open(config.nzContent, config);
        };
        NzModalService.prototype.closeAll = function () {
            this.closeModals(this.openModals);
        };
        NzModalService.prototype.confirm = function (options, confirmType) {
            if (options === void 0) { options = {}; }
            if (confirmType === void 0) { confirmType = 'confirm'; }
            if ('nzFooter' in options) {
                logger.warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
            }
            if (!('nzWidth' in options)) {
                options.nzWidth = 416;
            }
            if (!('nzMaskClosable' in options)) {
                options.nzMaskClosable = false;
            }
            options.nzModalType = 'confirm';
            options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
            return this.create(options);
        };
        NzModalService.prototype.info = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'info');
        };
        NzModalService.prototype.success = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'success');
        };
        NzModalService.prototype.error = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'error');
        };
        NzModalService.prototype.warning = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'warning');
        };
        NzModalService.prototype.open = function (componentOrTemplateRef, config) {
            var _this = this;
            var configMerged = applyConfigDefaults(config || {}, new ModalOptions());
            var overlayRef = this.createOverlay(configMerged);
            var modalContainer = this.attachModalContainer(overlayRef, configMerged);
            var modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
            modalContainer.modalRef = modalRef;
            this.openModals.push(modalRef);
            modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
            return modalRef;
        };
        NzModalService.prototype.removeOpenModal = function (modalRef) {
            var index = this.openModals.indexOf(modalRef);
            if (index > -1) {
                this.openModals.splice(index, 1);
                if (!this.openModals.length) {
                    this._afterAllClosed.next();
                }
            }
        };
        NzModalService.prototype.closeModals = function (dialogs) {
            var i = dialogs.length;
            while (i--) {
                dialogs[i].close();
                if (!this.openModals.length) {
                    this._afterAllClosed.next();
                }
            }
        };
        NzModalService.prototype.createOverlay = function (config) {
            var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
            var overlayConfig = new overlay.OverlayConfig({
                hasBackdrop: true,
                scrollStrategy: this.overlay.scrollStrategies.block(),
                positionStrategy: this.overlay.position().global(),
                disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true),
                direction: getValueWithConfig(config.nzDirection, globalConfig.nzDirection, this.directionality.value)
            });
            if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
                overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
            }
            return this.overlay.create(overlayConfig);
        };
        NzModalService.prototype.attachModalContainer = function (overlayRef, config) {
            var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
            var injector = core.Injector.create({
                parent: userInjector || this.injector,
                providers: [
                    { provide: overlay.OverlayRef, useValue: overlayRef },
                    { provide: ModalOptions, useValue: config }
                ]
            });
            var ContainerComponent = config.nzModalType === 'confirm'
                ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
                    NzModalConfirmContainerComponent
                : // If the mode is not `confirm`, use `NzModalContainerComponent`
                    NzModalContainerComponent;
            var containerPortal = new portal.ComponentPortal(ContainerComponent, config.nzViewContainerRef, injector);
            var containerRef = overlayRef.attach(containerPortal);
            return containerRef.instance;
        };
        NzModalService.prototype.attachModalContent = function (componentOrTemplateRef, modalContainer, overlayRef, config) {
            var modalRef = new NzModalRef(overlayRef, config, modalContainer);
            if (componentOrTemplateRef instanceof core.TemplateRef) {
                modalContainer.attachTemplatePortal(new portal.TemplatePortal(componentOrTemplateRef, null, { $implicit: config.nzComponentParams, modalRef: modalRef }));
            }
            else if (util.isNotNil(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
                var injector = this.createInjector(modalRef, config);
                var contentRef = modalContainer.attachComponentPortal(new portal.ComponentPortal(componentOrTemplateRef, config.nzViewContainerRef, injector));
                setContentInstanceParams(contentRef.instance, config.nzComponentParams);
                modalRef.componentInstance = contentRef.instance;
            }
            else {
                modalContainer.attachStringContent();
            }
            return modalRef;
        };
        NzModalService.prototype.createInjector = function (modalRef, config) {
            var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
            return core.Injector.create({
                parent: userInjector || this.injector,
                providers: [{ provide: NzModalRef, useValue: modalRef }]
            });
        };
        NzModalService.prototype.confirmFactory = function (options, confirmType) {
            if (options === void 0) { options = {}; }
            var iconMap = {
                info: 'info-circle',
                success: 'check-circle',
                error: 'close-circle',
                warning: 'exclamation-circle'
            };
            if (!('nzIconType' in options)) {
                options.nzIconType = iconMap[confirmType];
            }
            if (!('nzCancelText' in options)) {
                // Remove the Cancel button if the user not specify a Cancel button
                options.nzCancelText = null;
            }
            return this.confirm(options, confirmType);
        };
        NzModalService.prototype.ngOnDestroy = function () {
            this.closeModals(this.openModalsAtThisLevel);
            this.afterAllClosedAtThisLevel.complete();
        };
        return NzModalService;
    }());
    NzModalService.decorators = [
        { type: core.Injectable }
    ];
    NzModalService.ctorParameters = function () { return [
        { type: overlay.Overlay },
        { type: core.Injector },
        { type: config.NzConfigService },
        { type: NzModalService, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalContentDirective = /** @class */ (function () {
        function NzModalContentDirective(templateRef) {
            this.templateRef = templateRef;
        }
        return NzModalContentDirective;
    }());
    NzModalContentDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nzModalContent]',
                    exportAs: 'nzModalContent'
                },] }
    ];
    NzModalContentDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalFooterDirective = /** @class */ (function () {
        function NzModalFooterDirective(nzModalRef, templateRef) {
            this.nzModalRef = nzModalRef;
            this.templateRef = templateRef;
            if (this.nzModalRef) {
                this.nzModalRef.updateConfig({
                    nzFooter: this.templateRef
                });
            }
        }
        return NzModalFooterDirective;
    }());
    NzModalFooterDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nzModalFooter]',
                    exportAs: 'nzModalFooter'
                },] }
    ];
    NzModalFooterDirective.ctorParameters = function () { return [
        { type: NzModalRef, decorators: [{ type: core.Optional }] },
        { type: core.TemplateRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalTitleDirective = /** @class */ (function () {
        function NzModalTitleDirective(nzModalRef, templateRef) {
            this.nzModalRef = nzModalRef;
            this.templateRef = templateRef;
            if (this.nzModalRef) {
                this.nzModalRef.updateConfig({
                    nzTitle: this.templateRef
                });
            }
        }
        return NzModalTitleDirective;
    }());
    NzModalTitleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nzModalTitle]',
                    exportAs: 'nzModalTitle'
                },] }
    ];
    NzModalTitleDirective.ctorParameters = function () { return [
        { type: NzModalRef, decorators: [{ type: core.Optional }] },
        { type: core.TemplateRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalComponent = /** @class */ (function () {
        function NzModalComponent(cdr, modal, viewContainerRef) {
            this.cdr = cdr;
            this.modal = modal;
            this.viewContainerRef = viewContainerRef;
            this.nzVisible = false;
            this.nzClosable = true;
            this.nzOkLoading = false;
            this.nzOkDisabled = false;
            this.nzCancelDisabled = false;
            this.nzCancelLoading = false;
            this.nzKeyboard = true;
            this.nzNoAnimation = false;
            this.nzCentered = false;
            this.nzZIndex = 1000;
            this.nzWidth = 520;
            this.nzCloseIcon = 'close';
            this.nzOkType = 'primary';
            this.nzOkDanger = false;
            this.nzIconType = 'question-circle'; // Confirm Modal ONLY
            this.nzModalType = 'default';
            this.nzAutofocus = 'auto';
            // TODO(@hsuanxyz) Input will not be supported
            this.nzOnOk = new core.EventEmitter();
            // TODO(@hsuanxyz) Input will not be supported
            this.nzOnCancel = new core.EventEmitter();
            this.nzAfterOpen = new core.EventEmitter();
            this.nzAfterClose = new core.EventEmitter();
            this.nzVisibleChange = new core.EventEmitter();
            this.modalRef = null;
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(NzModalComponent.prototype, "modalTitle", {
            set: function (value) {
                if (value) {
                    this.setTitleWithTemplate(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
            set: function (value) {
                if (value) {
                    this.setFooterWithTemplate(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
            get: function () {
                // Observable alias for nzAfterOpen
                return this.nzAfterOpen.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterClose", {
            get: function () {
                // Observable alias for nzAfterClose
                return this.nzAfterClose.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        NzModalComponent.prototype.open = function () {
            var _this = this;
            if (!this.nzVisible) {
                this.nzVisible = true;
                this.nzVisibleChange.emit(true);
            }
            if (!this.modalRef) {
                var config = this.getConfig();
                this.modalRef = this.modal.create(config);
                // When the modal is implicitly closed (e.g. closeAll) the nzVisible needs to be set to the correct value and emit.
                this.modalRef.afterClose
                    .asObservable()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.close();
                });
            }
        };
        NzModalComponent.prototype.close = function (result) {
            if (this.nzVisible) {
                this.nzVisible = false;
                this.nzVisibleChange.emit(false);
            }
            if (this.modalRef) {
                this.modalRef.close(result);
                this.modalRef = null;
            }
        };
        NzModalComponent.prototype.destroy = function (result) {
            this.close(result);
        };
        NzModalComponent.prototype.triggerOk = function () {
            var _a;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
        };
        NzModalComponent.prototype.triggerCancel = function () {
            var _a;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
        };
        NzModalComponent.prototype.getContentComponent = function () {
            var _a;
            return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
        };
        NzModalComponent.prototype.getElement = function () {
            var _a;
            return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
        };
        NzModalComponent.prototype.getModalRef = function () {
            return this.modalRef;
        };
        NzModalComponent.prototype.setTitleWithTemplate = function (templateRef) {
            var _this = this;
            this.nzTitle = templateRef;
            if (this.modalRef) {
                // If modalRef already created, set the title in next tick
                Promise.resolve().then(function () {
                    _this.modalRef.updateConfig({
                        nzTitle: _this.nzTitle
                    });
                });
            }
        };
        NzModalComponent.prototype.setFooterWithTemplate = function (templateRef) {
            var _this = this;
            this.nzFooter = templateRef;
            if (this.modalRef) {
                // If modalRef already created, set the footer in next tick
                Promise.resolve().then(function () {
                    _this.modalRef.updateConfig({
                        nzFooter: _this.nzFooter
                    });
                });
            }
            this.cdr.markForCheck();
        };
        NzModalComponent.prototype.getConfig = function () {
            var componentConfig = getConfigFromComponent(this);
            componentConfig.nzViewContainerRef = this.viewContainerRef;
            if (!this.nzContent && !this.contentFromContentChild) {
                componentConfig.nzContent = this.contentTemplateRef;
                logger.warnDeprecation('Usage `<ng-content></ng-content>` is deprecated, which will be removed in 12.0.0. Please instead use `<ng-template nzModalContent></ng-template>` to declare the content of the modal.');
            }
            else {
                componentConfig.nzContent = this.nzContent || this.contentFromContentChild;
            }
            return componentConfig;
        };
        NzModalComponent.prototype.ngOnChanges = function (changes) {
            var nzVisible = changes.nzVisible, otherChanges = __rest(changes, ["nzVisible"]);
            if (Object.keys(otherChanges).length && this.modalRef) {
                this.modalRef.updateConfig(getConfigFromComponent(this));
            }
            if (nzVisible) {
                if (this.nzVisible) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
        };
        NzModalComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
            this.destroy$.next();
            this.destroy$.complete();
        };
        return NzModalComponent;
    }());
    NzModalComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nz-modal',
                    exportAs: 'nzModal',
                    template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NzModalComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: NzModalService },
        { type: core.ViewContainerRef }
    ]; };
    NzModalComponent.propDecorators = {
        nzMask: [{ type: core.Input }],
        nzMaskClosable: [{ type: core.Input }],
        nzCloseOnNavigation: [{ type: core.Input }],
        nzVisible: [{ type: core.Input }],
        nzClosable: [{ type: core.Input }],
        nzOkLoading: [{ type: core.Input }],
        nzOkDisabled: [{ type: core.Input }],
        nzCancelDisabled: [{ type: core.Input }],
        nzCancelLoading: [{ type: core.Input }],
        nzKeyboard: [{ type: core.Input }],
        nzNoAnimation: [{ type: core.Input }],
        nzCentered: [{ type: core.Input }],
        nzContent: [{ type: core.Input }],
        nzComponentParams: [{ type: core.Input }],
        nzFooter: [{ type: core.Input }],
        nzZIndex: [{ type: core.Input }],
        nzWidth: [{ type: core.Input }],
        nzWrapClassName: [{ type: core.Input }],
        nzClassName: [{ type: core.Input }],
        nzStyle: [{ type: core.Input }],
        nzTitle: [{ type: core.Input }],
        nzCloseIcon: [{ type: core.Input }],
        nzMaskStyle: [{ type: core.Input }],
        nzBodyStyle: [{ type: core.Input }],
        nzOkText: [{ type: core.Input }],
        nzCancelText: [{ type: core.Input }],
        nzOkType: [{ type: core.Input }],
        nzOkDanger: [{ type: core.Input }],
        nzIconType: [{ type: core.Input }],
        nzModalType: [{ type: core.Input }],
        nzAutofocus: [{ type: core.Input }],
        nzOnOk: [{ type: core.Input }, { type: core.Output }],
        nzOnCancel: [{ type: core.Input }, { type: core.Output }],
        nzAfterOpen: [{ type: core.Output }],
        nzAfterClose: [{ type: core.Output }],
        nzVisibleChange: [{ type: core.Output }],
        contentTemplateRef: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
        modalTitle: [{ type: core.ContentChild, args: [NzModalTitleDirective, { static: true, read: core.TemplateRef },] }],
        contentFromContentChild: [{ type: core.ContentChild, args: [NzModalContentDirective, { static: true, read: core.TemplateRef },] }],
        modalFooter: [{ type: core.ContentChild, args: [NzModalFooterDirective, { static: true, read: core.TemplateRef },] }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMask", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMaskClosable", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzVisible", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzClosable", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkLoading", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkDisabled", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelDisabled", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelLoading", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzKeyboard", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzModalComponent.prototype, "nzNoAnimation", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzModalComponent.prototype, "nzCentered", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkDanger", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalCloseComponent = /** @class */ (function () {
        function NzModalCloseComponent(config) {
            this.config = config;
        }
        return NzModalCloseComponent;
    }());
    NzModalCloseComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'button[nz-modal-close]',
                    exportAs: 'NzModalCloseBuiltin',
                    template: "\n    <span class=\"ant-modal-close-x\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzCloseIcon; let closeIcon\">\n        <i nz-icon [nzType]=\"closeIcon\" class=\"ant-modal-close-icon\"></i>\n      </ng-container>\n    </span>\n  ",
                    host: {
                        class: 'ant-modal-close',
                        'aria-label': 'Close'
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NzModalCloseComponent.ctorParameters = function () { return [
        { type: ModalOptions }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalFooterComponent = /** @class */ (function () {
        function NzModalFooterComponent(i18n, config) {
            var _this = this;
            this.i18n = i18n;
            this.config = config;
            this.buttonsFooter = false;
            this.buttons = [];
            this.cancelTriggered = new core.EventEmitter();
            this.okTriggered = new core.EventEmitter();
            this.destroy$ = new rxjs.Subject();
            if (Array.isArray(config.nzFooter)) {
                this.buttonsFooter = true;
                this.buttons = config.nzFooter.map(mergeDefaultOption);
            }
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Modal');
            });
        }
        NzModalFooterComponent.prototype.onCancel = function () {
            this.cancelTriggered.emit();
        };
        NzModalFooterComponent.prototype.onOk = function () {
            this.okTriggered.emit();
        };
        /**
         * Returns the value of the specified key.
         * If it is a function, run and return the return value of the function.
         */
        NzModalFooterComponent.prototype.getButtonCallableProp = function (options, prop) {
            var value = options[prop];
            var componentInstance = this.modalRef.getContentComponent();
            return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
        };
        /**
         * Run function based on the type and set its `loading` prop if needed.
         */
        NzModalFooterComponent.prototype.onButtonClick = function (options) {
            var loading = this.getButtonCallableProp(options, 'loading');
            if (!loading) {
                var result = this.getButtonCallableProp(options, 'onClick');
                if (options.autoLoading && util.isPromise(result)) {
                    options.loading = true;
                    result.then(function () { return (options.loading = false); }).catch(function () { return (options.loading = false); });
                }
            }
        };
        NzModalFooterComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return NzModalFooterComponent;
    }());
    NzModalFooterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'div[nz-modal-footer]',
                    exportAs: 'NzModalFooterBuiltin',
                    template: "\n    <ng-container *ngIf=\"config.nzFooter; else defaultFooterButtons\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzFooter; context: { $implicit: config.nzComponentParams, modalRef: modalRef }\">\n        <div *ngIf=\"!buttonsFooter\" [innerHTML]=\"config.nzFooter\"></div>\n        <ng-container *ngIf=\"buttonsFooter\">\n          <button\n            *ngFor=\"let button of buttons\"\n            nz-button\n            (click)=\"onButtonClick(button)\"\n            [hidden]=\"!getButtonCallableProp(button, 'show')\"\n            [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n            [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n            [nzType]=\"button.type!\"\n            [nzDanger]=\"button.danger\"\n            [nzShape]=\"button.shape!\"\n            [nzSize]=\"button.size!\"\n            [nzGhost]=\"button.ghost!\"\n          >\n            {{ button.label }}\n          </button>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #defaultFooterButtons>\n      <button\n        *ngIf=\"config.nzCancelText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel' || null\"\n        nz-button\n        (click)=\"onCancel()\"\n        [nzLoading]=\"!!config.nzCancelLoading\"\n        [disabled]=\"config.nzCancelDisabled\"\n      >\n        {{ config.nzCancelText || locale.cancelText }}\n      </button>\n      <button\n        *ngIf=\"config.nzOkText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok' || null\"\n        nz-button\n        [nzType]=\"config.nzOkType!\"\n        [nzDanger]=\"config.nzOkDanger\"\n        (click)=\"onOk()\"\n        [nzLoading]=\"!!config.nzOkLoading\"\n        [disabled]=\"config.nzOkDisabled\"\n      >\n        {{ config.nzOkText || locale.okText }}\n      </button>\n    </ng-template>\n  ",
                    host: {
                        class: 'ant-modal-footer'
                    },
                    changeDetection: core.ChangeDetectionStrategy.Default
                },] }
    ];
    NzModalFooterComponent.ctorParameters = function () { return [
        { type: i18n.NzI18nService },
        { type: ModalOptions }
    ]; };
    NzModalFooterComponent.propDecorators = {
        cancelTriggered: [{ type: core.Output }],
        okTriggered: [{ type: core.Output }],
        modalRef: [{ type: core.Input }]
    };
    function mergeDefaultOption(options) {
        return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalTitleComponent = /** @class */ (function () {
        function NzModalTitleComponent(config) {
            this.config = config;
        }
        return NzModalTitleComponent;
    }());
    NzModalTitleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'div[nz-modal-title]',
                    exportAs: 'NzModalTitleBuiltin',
                    template: "\n    <div class=\"ant-modal-title\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n        <div [innerHTML]=\"config.nzTitle\"></div>\n      </ng-container>\n    </div>\n  ",
                    host: {
                        class: 'ant-modal-header'
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NzModalTitleComponent.ctorParameters = function () { return [
        { type: ModalOptions }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalModule = /** @class */ (function () {
        function NzModalModule() {
        }
        return NzModalModule;
    }());
    NzModalModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        bidi.BidiModule,
                        overlay.OverlayModule,
                        outlet.NzOutletModule,
                        portal.PortalModule,
                        i18n.NzI18nModule,
                        button.NzButtonModule,
                        icon.NzIconModule,
                        pipes.NzPipesModule,
                        noAnimation.NzNoAnimationModule,
                        pipes.NzPipesModule
                    ],
                    exports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalTitleDirective],
                    providers: [NzModalService],
                    entryComponents: [NzModalContainerComponent, NzModalConfirmContainerComponent],
                    declarations: [
                        NzModalComponent,
                        NzModalFooterDirective,
                        NzModalContentDirective,
                        NzModalCloseComponent,
                        NzModalFooterComponent,
                        NzModalTitleComponent,
                        NzModalTitleDirective,
                        NzModalContainerComponent,
                        NzModalConfirmContainerComponent,
                        NzModalComponent
                    ]
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalLegacyAPI = /** @class */ (function () {
        function NzModalLegacyAPI() {
        }
        return NzModalLegacyAPI;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BaseModalContainerComponent = BaseModalContainerComponent;
    exports.FADE_CLASS_NAME_MAP = FADE_CLASS_NAME_MAP;
    exports.MODAL_MASK_CLASS_NAME = MODAL_MASK_CLASS_NAME;
    exports.ModalOptions = ModalOptions;
    exports.NZ_CONFIG_MODULE_NAME = NZ_CONFIG_MODULE_NAME;
    exports.NzModalCloseComponent = NzModalCloseComponent;
    exports.NzModalComponent = NzModalComponent;
    exports.NzModalConfirmContainerComponent = NzModalConfirmContainerComponent;
    exports.NzModalContainerComponent = NzModalContainerComponent;
    exports.NzModalContentDirective = NzModalContentDirective;
    exports.NzModalFooterComponent = NzModalFooterComponent;
    exports.NzModalFooterDirective = NzModalFooterDirective;
    exports.NzModalLegacyAPI = NzModalLegacyAPI;
    exports.NzModalModule = NzModalModule;
    exports.NzModalRef = NzModalRef;
    exports.NzModalService = NzModalService;
    exports.NzModalTitleComponent = NzModalTitleComponent;
    exports.NzModalTitleDirective = NzModalTitleDirective;
    exports.ZOOM_CLASS_NAME_MAP = ZOOM_CLASS_NAME_MAP;
    exports.applyConfigDefaults = applyConfigDefaults;
    exports.getConfigFromComponent = getConfigFromComponent;
    exports.getValueWithConfig = getValueWithConfig;
    exports.nzModalAnimations = nzModalAnimations;
    exports.setContentInstanceParams = setContentInstanceParams;
    exports.throwNzModalContentAlreadyAttachedError = throwNzModalContentAlreadyAttachedError;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-modal.umd.js.map
