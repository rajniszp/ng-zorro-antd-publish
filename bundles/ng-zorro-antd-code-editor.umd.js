(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core/logger'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/spin')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/code-editor', ['exports', '@angular/cdk/platform', '@angular/core', '@angular/forms', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/core/config', 'ng-zorro-antd/icon', 'ng-zorro-antd/spin'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['code-editor'] = {}), global.ng.cdk.platform, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core.logger, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].spin));
}(this, (function (exports, platform, i0, forms, logger, util, rxjs, operators, i2, i1, icon, spin) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    (function (NzCodeEditorLoadingStatus) {
        NzCodeEditorLoadingStatus["UNLOAD"] = "unload";
        NzCodeEditorLoadingStatus["LOADING"] = "loading";
        NzCodeEditorLoadingStatus["LOADED"] = "LOADED";
    })(exports.NzCodeEditorLoadingStatus || (exports.NzCodeEditorLoadingStatus = {}));

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

    var NZ_CONFIG_MODULE_NAME = 'codeEditor';
    function tryTriggerFunc(fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (fn) {
                fn.apply(void 0, __spread(args));
            }
        };
    }
    var NzCodeEditorService = /** @class */ (function () {
        function NzCodeEditorService(nzConfigService, _document) {
            var _this = this;
            this.nzConfigService = nzConfigService;
            this.firstEditorInitialized = false;
            this.loaded$ = new rxjs.Subject();
            this.loadingStatus = exports.NzCodeEditorLoadingStatus.UNLOAD;
            this.option = {};
            this.option$ = new rxjs.BehaviorSubject(this.option);
            var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
            this.document = _document;
            this.config = Object.assign({}, globalConfig);
            this.option = this.config.defaultEditorOption || {};
            this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).subscribe(function () {
                var newGlobalConfig = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
                if (newGlobalConfig) {
                    _this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
                }
            });
        }
        NzCodeEditorService.prototype._updateDefaultOption = function (option) {
            this.option = Object.assign(Object.assign({}, this.option), option);
            this.option$.next(this.option);
            if (option.theme) {
                monaco.editor.setTheme(option.theme);
            }
        };
        NzCodeEditorService.prototype.requestToInit = function () {
            var _this = this;
            if (this.loadingStatus === exports.NzCodeEditorLoadingStatus.LOADED) {
                this.onInit();
                return rxjs.of(this.getLatestOption());
            }
            if (this.loadingStatus === exports.NzCodeEditorLoadingStatus.UNLOAD) {
                if (this.config.useStaticLoading && typeof monaco === 'undefined') {
                    logger.warn('You choose to use static loading but it seems that you forget ' +
                        'to config webpack plugin correctly. Please refer to our official website' +
                        'for more details about static loading.');
                }
                else {
                    this.loadMonacoScript();
                }
            }
            return this.loaded$.asObservable().pipe(operators.tap(function () { return _this.onInit(); }), operators.map(function () { return _this.getLatestOption(); }));
        };
        NzCodeEditorService.prototype.loadMonacoScript = function () {
            var _this = this;
            if (this.config.useStaticLoading) {
                Promise.resolve().then(function () { return _this.onLoad(); });
                return;
            }
            if (this.loadingStatus === exports.NzCodeEditorLoadingStatus.LOADING) {
                return;
            }
            this.loadingStatus = exports.NzCodeEditorLoadingStatus.LOADING;
            var assetsRoot = this.config.assetsRoot;
            var vs = assetsRoot ? assetsRoot + "/vs" : 'assets/vs';
            var windowAsAny = window;
            var loadScript = this.document.createElement('script');
            loadScript.type = 'text/javascript';
            loadScript.src = vs + "/loader.js";
            loadScript.onload = function () {
                windowAsAny.require.config({
                    paths: { vs: vs }
                });
                windowAsAny.require(['vs/editor/editor.main'], function () {
                    _this.onLoad();
                });
            };
            loadScript.onerror = function () {
                throw new Error(logger.PREFIX + " cannot load assets of monaco editor from source \"" + vs + "\".");
            };
            this.document.documentElement.appendChild(loadScript);
        };
        NzCodeEditorService.prototype.onLoad = function () {
            this.loadingStatus = exports.NzCodeEditorLoadingStatus.LOADED;
            this.loaded$.next(true);
            this.loaded$.complete();
            tryTriggerFunc(this.config.onLoad)();
        };
        NzCodeEditorService.prototype.onInit = function () {
            if (!this.firstEditorInitialized) {
                this.firstEditorInitialized = true;
                tryTriggerFunc(this.config.onFirstEditorInit)();
            }
            tryTriggerFunc(this.config.onInit)();
        };
        NzCodeEditorService.prototype.getLatestOption = function () {
            return Object.assign({}, this.option);
        };
        return NzCodeEditorService;
    }());
    NzCodeEditorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzCodeEditorService_Factory() { return new NzCodeEditorService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.DOCUMENT)); }, token: NzCodeEditorService, providedIn: "root" });
    NzCodeEditorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NzCodeEditorService.ctorParameters = function () { return [
        { type: i1.NzConfigService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.DOCUMENT,] }] }
    ]; };

    var NzCodeEditorComponent = /** @class */ (function () {
        function NzCodeEditorComponent(nzCodeEditorService, ngZone, elementRef, platform) {
            this.nzCodeEditorService = nzCodeEditorService;
            this.ngZone = ngZone;
            this.platform = platform;
            this.nzEditorMode = 'normal';
            this.nzOriginalText = '';
            this.nzLoading = false;
            this.nzFullControl = false;
            this.nzEditorInitialized = new i0.EventEmitter();
            this.editorOptionCached = {};
            this.destroy$ = new rxjs.Subject();
            this.resize$ = new rxjs.Subject();
            this.editorOption$ = new rxjs.BehaviorSubject({});
            this.value = '';
            this.modelSet = false;
            this.onChange = function (_value) { };
            this.onTouch = function () { };
            this.el = elementRef.nativeElement;
            this.el.classList.add('ant-code-editor');
        }
        Object.defineProperty(NzCodeEditorComponent.prototype, "nzEditorOption", {
            set: function (value) {
                this.editorOption$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Initialize a monaco editor instance.
         */
        NzCodeEditorComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.nzCodeEditorService.requestToInit().subscribe(function (option) { return _this.setup(option); });
        };
        NzCodeEditorComponent.prototype.ngOnDestroy = function () {
            if (this.editorInstance) {
                this.editorInstance.dispose();
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzCodeEditorComponent.prototype.writeValue = function (value) {
            this.value = value;
            this.setValue();
        };
        NzCodeEditorComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzCodeEditorComponent.prototype.registerOnTouched = function (fn) {
            this.onTouch = fn;
        };
        NzCodeEditorComponent.prototype.layout = function () {
            this.resize$.next();
        };
        NzCodeEditorComponent.prototype.setup = function (option) {
            var _this = this;
            util.inNextTick().subscribe(function () {
                _this.editorOptionCached = option;
                _this.registerOptionChanges();
                _this.initMonacoEditorInstance();
                _this.registerResizeChange();
                _this.setValue();
                if (!_this.nzFullControl) {
                    _this.setValueEmitter();
                }
                _this.nzEditorInitialized.emit(_this.editorInstance);
            });
        };
        NzCodeEditorComponent.prototype.registerOptionChanges = function () {
            var _this = this;
            rxjs.combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (_a) {
                var _b = __read(_a, 2), selfOpt = _b[0], defaultOpt = _b[1];
                _this.editorOptionCached = Object.assign(Object.assign(Object.assign({}, _this.editorOptionCached), defaultOpt), selfOpt);
                _this.updateOptionToMonaco();
            });
        };
        NzCodeEditorComponent.prototype.initMonacoEditorInstance = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.editorInstance =
                    _this.nzEditorMode === 'normal'
                        ? monaco.editor.create(_this.el, Object.assign({}, _this.editorOptionCached))
                        : monaco.editor.createDiffEditor(_this.el, Object.assign({}, _this.editorOptionCached));
            });
        };
        NzCodeEditorComponent.prototype.registerResizeChange = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                rxjs.fromEvent(window, 'resize')
                    .pipe(operators.debounceTime(300), operators.takeUntil(_this.destroy$))
                    .subscribe(function () {
                    _this.layout();
                });
                _this.resize$
                    .pipe(operators.takeUntil(_this.destroy$), operators.filter(function () { return !!_this.editorInstance; }), operators.map(function () { return ({
                    width: _this.el.clientWidth,
                    height: _this.el.clientHeight
                }); }), operators.distinctUntilChanged(function (a, b) { return a.width === b.width && a.height === b.height; }), operators.debounceTime(50))
                    .subscribe(function () {
                    _this.editorInstance.layout();
                });
            });
        };
        NzCodeEditorComponent.prototype.setValue = function () {
            var _this = this;
            if (!this.editorInstance) {
                return;
            }
            if (this.nzFullControl && this.value) {
                logger.warn("should not set value when you are using full control mode! It would result in ambiguous data flow!");
                return;
            }
            if (this.nzEditorMode === 'normal') {
                if (this.modelSet) {
                    var model_1 = this.editorInstance.getModel();
                    this.preservePositionAndSelections(function () { return model_1.setValue(_this.value); });
                }
                else {
                    this.editorInstance.setModel(monaco.editor.createModel(this.value, this.editorOptionCached.language));
                    this.modelSet = true;
                }
            }
            else {
                if (this.modelSet) {
                    var model_2 = this.editorInstance.getModel();
                    this.preservePositionAndSelections(function () {
                        model_2.modified.setValue(_this.value);
                        model_2.original.setValue(_this.nzOriginalText);
                    });
                }
                else {
                    var language = this.editorOptionCached.language;
                    this.editorInstance.setModel({
                        original: monaco.editor.createModel(this.nzOriginalText, language),
                        modified: monaco.editor.createModel(this.value, language)
                    });
                    this.modelSet = true;
                }
            }
        };
        /**
         * {@link editor.ICodeEditor}#setValue resets the cursor position to the start of the document.
         * This helper memorizes the cursor position and selections and restores them after the given
         * function has been called.
         */
        NzCodeEditorComponent.prototype.preservePositionAndSelections = function (fn) {
            if (!this.editorInstance) {
                fn();
                return;
            }
            var position = this.editorInstance.getPosition();
            var selections = this.editorInstance.getSelections();
            fn();
            if (position) {
                this.editorInstance.setPosition(position);
            }
            if (selections) {
                this.editorInstance.setSelections(selections);
            }
        };
        NzCodeEditorComponent.prototype.setValueEmitter = function () {
            var _this = this;
            var model = (this.nzEditorMode === 'normal'
                ? this.editorInstance.getModel()
                : this.editorInstance.getModel().modified);
            model.onDidChangeContent(function () {
                _this.ngZone.run(function () {
                    _this.emitValue(model.getValue());
                });
            });
        };
        NzCodeEditorComponent.prototype.emitValue = function (value) {
            if (this.value === value) {
                // If the value didn't change there's no reason to send an update.
                // Specifically this may happen during an update from the model (writeValue) where sending an update to the model would actually be incorrect.
                return;
            }
            this.value = value;
            this.onChange(value);
        };
        NzCodeEditorComponent.prototype.updateOptionToMonaco = function () {
            if (this.editorInstance) {
                this.editorInstance.updateOptions(Object.assign({}, this.editorOptionCached));
            }
        };
        return NzCodeEditorComponent;
    }());
    NzCodeEditorComponent.decorators = [
        { type: i0.Component, args: [{
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    selector: 'nz-code-editor',
                    exportAs: 'nzCodeEditor',
                    template: "\n    <div class=\"ant-code-editor-loading\" *ngIf=\"nzLoading\">\n      <nz-spin></nz-spin>\n    </div>\n\n    <div class=\"ant-code-editor-toolkit\" *ngIf=\"nzToolkit\">\n      <ng-template [ngTemplateOutlet]=\"nzToolkit\"></ng-template>\n    </div>\n  ",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return NzCodeEditorComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    NzCodeEditorComponent.ctorParameters = function () { return [
        { type: NzCodeEditorService },
        { type: i0.NgZone },
        { type: i0.ElementRef },
        { type: platform.Platform }
    ]; };
    NzCodeEditorComponent.propDecorators = {
        nzEditorMode: [{ type: i0.Input }],
        nzOriginalText: [{ type: i0.Input }],
        nzLoading: [{ type: i0.Input }],
        nzFullControl: [{ type: i0.Input }],
        nzToolkit: [{ type: i0.Input }],
        nzEditorOption: [{ type: i0.Input }],
        nzEditorInitialized: [{ type: i0.Output }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzLoading", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzFullControl", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCodeEditorModule = /** @class */ (function () {
        function NzCodeEditorModule() {
        }
        return NzCodeEditorModule;
    }());
    NzCodeEditorModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NzCodeEditorComponent],
                    imports: [i2.CommonModule, icon.NzIconModule, spin.NzSpinModule],
                    exports: [NzCodeEditorComponent]
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzCodeEditorComponent = NzCodeEditorComponent;
    exports.NzCodeEditorModule = NzCodeEditorModule;
    exports.NzCodeEditorService = NzCodeEditorService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-code-editor.umd.js.map
