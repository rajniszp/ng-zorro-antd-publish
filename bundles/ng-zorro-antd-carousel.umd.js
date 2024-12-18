(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('@angular/cdk/keycodes'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/services'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/carousel', ['exports', '@angular/cdk/bidi', '@angular/cdk/platform', '@angular/common', '@angular/core', '@angular/cdk/keycodes', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/services', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].carousel = {}), global.ng.cdk.bidi, global.ng.cdk.platform, global.ng.common, global.ng.core, global.ng.cdk.keycodes, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.services, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators));
}(this, (function (exports, bidi, platform, common, core, keycodes, config, services, util, rxjs, operators) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCarouselContentDirective = /** @class */ (function () {
        function NzCarouselContentDirective(elementRef, renderer) {
            this.renderer = renderer;
            this._active = false;
            this.el = elementRef.nativeElement;
            this.renderer.addClass(elementRef.nativeElement, 'slick-slide');
        }
        Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
            get: function () {
                return this._active;
            },
            set: function (value) {
                this._active = value;
                if (this.isActive) {
                    this.renderer.addClass(this.el, 'slick-active');
                }
                else {
                    this.renderer.removeClass(this.el, 'slick-active');
                }
            },
            enumerable: false,
            configurable: true
        });
        return NzCarouselContentDirective;
    }());
    NzCarouselContentDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nz-carousel-content]',
                    exportAs: 'nzCarouselContent'
                },] }
    ];
    NzCarouselContentDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };

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
    var NzCarouselBaseStrategy = /** @class */ (function () {
        function NzCarouselBaseStrategy(carouselComponent, cdr, renderer, platform, options) {
            this.cdr = cdr;
            this.renderer = renderer;
            this.platform = platform;
            this.options = options;
            this.carouselComponent = carouselComponent;
        }
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
            get: function () {
                return this.length - 1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
            get: function () {
                return this.contents[0].el;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
            get: function () {
                return this.contents[this.maxIndex].el;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Initialize dragging sequences.
         * @param contents
         */
        NzCarouselBaseStrategy.prototype.withCarouselContents = function (contents) {
            var _this = this;
            var carousel = this.carouselComponent;
            this.slickListEl = carousel.slickListEl;
            this.slickTrackEl = carousel.slickTrackEl;
            this.contents = (contents === null || contents === void 0 ? void 0 : contents.toArray()) || [];
            this.length = this.contents.length;
            if (this.platform.isBrowser) {
                var rect = carousel.el.getBoundingClientRect();
                this.unitWidth = rect.width;
                this.unitHeight = rect.height;
            }
            else {
                // Since we cannot call getBoundingClientRect in server, we just hide all items except for the first one.
                contents === null || contents === void 0 ? void 0 : contents.forEach(function (content, index) {
                    if (index === 0) {
                        _this.renderer.setStyle(content.el, 'width', '100%');
                    }
                    else {
                        _this.renderer.setStyle(content.el, 'display', 'none');
                    }
                });
            }
        };
        /**
         * When user drag the carousel component.
         * @optional
         */
        NzCarouselBaseStrategy.prototype.dragging = function (_vector) { };
        /**
         * Destroy a scroll strategy.
         */
        NzCarouselBaseStrategy.prototype.dispose = function () { };
        NzCarouselBaseStrategy.prototype.getFromToInBoundary = function (f, t) {
            var length = this.maxIndex + 1;
            return { from: (f + length) % length, to: (t + length) % length };
        };
        return NzCarouselBaseStrategy;
    }());

    var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
        __extends(NzCarouselOpacityStrategy, _super);
        function NzCarouselOpacityStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NzCarouselOpacityStrategy.prototype.withCarouselContents = function (contents) {
            var _this = this;
            _super.prototype.withCarouselContents.call(this, contents);
            if (this.contents) {
                this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
                this.contents.forEach(function (content, i) {
                    _this.renderer.setStyle(content.el, 'opacity', _this.carouselComponent.activeIndex === i ? '1' : '0');
                    _this.renderer.setStyle(content.el, 'position', 'relative');
                    _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                    _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                    _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
                });
            }
        };
        NzCarouselOpacityStrategy.prototype.switch = function (_f, _t) {
            var _this = this;
            var t = this.getFromToInBoundary(_f, _t).to;
            var complete$ = new rxjs.Subject();
            this.contents.forEach(function (content, i) {
                _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
            });
            setTimeout(function () {
                complete$.next();
                complete$.complete();
            }, this.carouselComponent.nzTransitionSpeed);
            return complete$;
        };
        NzCarouselOpacityStrategy.prototype.dispose = function () {
            var _this = this;
            this.contents.forEach(function (content) {
                _this.renderer.setStyle(content.el, 'transition', null);
            });
            _super.prototype.dispose.call(this);
        };
        return NzCarouselOpacityStrategy;
    }(NzCarouselBaseStrategy));

    var NzCarouselTransformStrategy = /** @class */ (function (_super) {
        __extends(NzCarouselTransformStrategy, _super);
        function NzCarouselTransformStrategy(carouselComponent, cdr, renderer, platform, options) {
            var _this = _super.call(this, carouselComponent, cdr, renderer, platform, options) || this;
            _this.isDragging = false;
            _this.isTransitioning = false;
            return _this;
        }
        Object.defineProperty(NzCarouselTransformStrategy.prototype, "vertical", {
            get: function () {
                return this.carouselComponent.vertical;
            },
            enumerable: false,
            configurable: true
        });
        NzCarouselTransformStrategy.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.renderer.setStyle(this.slickTrackEl, 'transform', null);
        };
        NzCarouselTransformStrategy.prototype.withCarouselContents = function (contents) {
            var _this = this;
            _super.prototype.withCarouselContents.call(this, contents);
            var carousel = this.carouselComponent;
            var activeIndex = carousel.activeIndex;
            // We only do when we are in browser.
            if (this.platform.isBrowser && this.contents.length) {
                this.renderer.setStyle(this.slickListEl, 'height', this.unitHeight + "px");
                if (this.vertical) {
                    this.renderer.setStyle(this.slickTrackEl, 'width', this.unitWidth + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'height', this.length * this.unitHeight + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -activeIndex * this.unitHeight + "px, 0)");
                }
                else {
                    this.renderer.setStyle(this.slickTrackEl, 'height', this.unitHeight + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'width', this.length * this.unitWidth + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -activeIndex * this.unitWidth + "px, 0, 0)");
                }
                this.contents.forEach(function (content) {
                    _this.renderer.setStyle(content.el, 'position', 'relative');
                    _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                    _this.renderer.setStyle(content.el, 'height', _this.unitHeight + "px");
                });
            }
        };
        NzCarouselTransformStrategy.prototype.switch = function (_f, _t) {
            var _this = this;
            var t = this.getFromToInBoundary(_f, _t).to;
            var complete$ = new rxjs.Subject();
            this.renderer.setStyle(this.slickTrackEl, 'transition', "transform " + this.carouselComponent.nzTransitionSpeed + "ms ease");
            if (this.vertical) {
                this.verticalTransform(_f, _t);
            }
            else {
                this.horizontalTransform(_f, _t);
            }
            this.isTransitioning = true;
            this.isDragging = false;
            setTimeout(function () {
                _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
                _this.contents.forEach(function (content) {
                    _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
                });
                if (_this.vertical) {
                    _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
                }
                else {
                    _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
                }
                _this.isTransitioning = false;
                complete$.next();
                complete$.complete();
            }, this.carouselComponent.nzTransitionSpeed);
            return complete$.asObservable();
        };
        NzCarouselTransformStrategy.prototype.dragging = function (_vector) {
            if (this.isTransitioning) {
                return;
            }
            var activeIndex = this.carouselComponent.activeIndex;
            if (this.carouselComponent.vertical) {
                if (!this.isDragging && this.length > 2) {
                    if (activeIndex === this.maxIndex) {
                        this.prepareVerticalContext(true);
                    }
                    else if (activeIndex === 0) {
                        this.prepareVerticalContext(false);
                    }
                }
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + (-activeIndex * this.unitHeight + _vector.x) + "px, 0)");
            }
            else {
                if (!this.isDragging && this.length > 2) {
                    if (activeIndex === this.maxIndex) {
                        this.prepareHorizontalContext(true);
                    }
                    else if (activeIndex === 0) {
                        this.prepareHorizontalContext(false);
                    }
                }
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + (-activeIndex * this.unitWidth + _vector.x) + "px, 0, 0)");
            }
            this.isDragging = true;
        };
        NzCarouselTransformStrategy.prototype.verticalTransform = function (_f, _t) {
            var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
            var needToAdjust = this.length > 2 && _t !== t;
            if (needToAdjust) {
                this.prepareVerticalContext(t < f);
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
            }
        };
        NzCarouselTransformStrategy.prototype.horizontalTransform = function (_f, _t) {
            var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
            var needToAdjust = this.length > 2 && _t !== t;
            if (needToAdjust) {
                this.prepareHorizontalContext(t < f);
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
            }
        };
        NzCarouselTransformStrategy.prototype.prepareVerticalContext = function (lastToFirst) {
            if (lastToFirst) {
                this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
                this.renderer.setStyle(this.lastEl, 'top', null);
            }
            else {
                this.renderer.setStyle(this.firstEl, 'top', null);
                this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
            }
        };
        NzCarouselTransformStrategy.prototype.prepareHorizontalContext = function (lastToFirst) {
            if (lastToFirst) {
                this.renderer.setStyle(this.firstEl, 'left', this.length * this.unitWidth + "px");
                this.renderer.setStyle(this.lastEl, 'left', null);
            }
            else {
                this.renderer.setStyle(this.firstEl, 'left', null);
                this.renderer.setStyle(this.lastEl, 'left', -this.unitWidth * this.length + "px");
            }
        };
        return NzCarouselTransformStrategy;
    }(NzCarouselBaseStrategy));

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NZ_CAROUSEL_CUSTOM_STRATEGIES = new core.InjectionToken('nz-carousel-custom-strategies');

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NZ_CONFIG_MODULE_NAME = 'carousel';
    var NzCarouselComponent = /** @class */ (function () {
        function NzCarouselComponent(elementRef, nzConfigService, renderer, cdr, platform, resizeService, nzDragService, directionality, customStrategies) {
            var _this = this;
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.cdr = cdr;
            this.platform = platform;
            this.resizeService = resizeService;
            this.nzDragService = nzDragService;
            this.directionality = directionality;
            this.customStrategies = customStrategies;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzEffect = 'scrollx';
            this.nzEnableSwipe = true;
            this.nzDots = true;
            this.nzAutoPlay = false;
            this.nzAutoPlaySpeed = 3000;
            this.nzTransitionSpeed = 500;
            /**
             * this property is passed directly to an NzCarouselBaseStrategy
             */
            this.nzStrategyOptions = undefined;
            this._dotPosition = 'bottom';
            this.nzBeforeChange = new core.EventEmitter();
            this.nzAfterChange = new core.EventEmitter();
            this.activeIndex = 0;
            this.vertical = false;
            this.transitionInProgress = null;
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            this.gestureRect = null;
            this.pointerDelta = null;
            this.isTransiting = false;
            this.isDragging = false;
            this.onLiClick = function (index) {
                if (_this.dir === 'rtl') {
                    _this.goTo(_this.carouselContents.length - 1 - index);
                }
                else {
                    _this.goTo(index);
                }
            };
            /**
             * Drag carousel.
             */
            this.pointerDown = function (event) {
                if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                    _this.clearScheduledTransition();
                    _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                    _this.nzDragService.requestDraggingSequence(event).subscribe(function (delta) {
                        var _a;
                        _this.pointerDelta = delta;
                        _this.isDragging = true;
                        (_a = _this.strategy) === null || _a === void 0 ? void 0 : _a.dragging(_this.pointerDelta);
                    }, function () { }, function () {
                        if (_this.nzEnableSwipe && _this.isDragging) {
                            var xDelta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                            // Switch to another slide if delta is bigger than third of the width.
                            if (Math.abs(xDelta) > _this.gestureRect.width / 3) {
                                _this.goTo(xDelta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                            }
                            else {
                                _this.goTo(_this.activeIndex);
                            }
                            _this.gestureRect = null;
                            _this.pointerDelta = null;
                        }
                        _this.isDragging = false;
                    });
                }
            };
            this.nzDotPosition = 'bottom';
            this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
            this.el = elementRef.nativeElement;
        }
        Object.defineProperty(NzCarouselComponent.prototype, "nzDotPosition", {
            get: function () {
                return this._dotPosition;
            },
            set: function (value) {
                this._dotPosition = value;
                if (value === 'left' || value === 'right') {
                    this.vertical = true;
                }
                else {
                    this.vertical = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        NzCarouselComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.markContentActive(_this.activeIndex);
                _this.cdr.detectChanges();
            });
        };
        NzCarouselComponent.prototype.ngAfterContentInit = function () {
            this.markContentActive(0);
        };
        NzCarouselComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.slickListEl = this.slickList.nativeElement;
            this.slickTrackEl = this.slickTrack.nativeElement;
            this.carouselContents.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.markContentActive(0);
                _this.layout();
            });
            this.resizeService
                .subscribe()
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.layout();
            });
            this.switchStrategy();
            this.markContentActive(0);
            this.layout();
            // If embedded in an entry component, it may do initial render at an inappropriate time.
            // ngZone.onStable won't do this trick
            // TODO: need to change this.
            Promise.resolve().then(function () {
                _this.layout();
            });
        };
        NzCarouselComponent.prototype.ngOnChanges = function (changes) {
            var nzEffect = changes.nzEffect, nzDotPosition = changes.nzDotPosition;
            if (nzEffect && !nzEffect.isFirstChange()) {
                this.switchStrategy();
                this.markContentActive(0);
                this.layout();
            }
            if (nzDotPosition && !nzDotPosition.isFirstChange()) {
                this.switchStrategy();
                this.markContentActive(0);
                this.layout();
            }
            if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
                this.clearScheduledTransition();
            }
            else {
                this.scheduleNextTransition();
            }
        };
        NzCarouselComponent.prototype.ngOnDestroy = function () {
            this.clearScheduledTransition();
            if (this.strategy) {
                this.strategy.dispose();
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzCarouselComponent.prototype.onKeyDown = function (e) {
            if (e.keyCode === keycodes.LEFT_ARROW) {
                e.preventDefault();
                this.pre();
            }
            else if (e.keyCode === keycodes.RIGHT_ARROW) {
                this.next();
                e.preventDefault();
            }
        };
        NzCarouselComponent.prototype.next = function () {
            this.goTo(this.activeIndex + 1);
        };
        NzCarouselComponent.prototype.pre = function () {
            this.goTo(this.activeIndex - 1);
        };
        NzCarouselComponent.prototype.goTo = function (index) {
            var _this = this;
            if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
                var length = this.carouselContents.length;
                var from = this.activeIndex;
                var to = (index + length) % length;
                this.isTransiting = true;
                this.nzBeforeChange.emit({ from: from, to: to });
                this.strategy.switch(this.activeIndex, index).subscribe(function () {
                    _this.scheduleNextTransition();
                    _this.nzAfterChange.emit(index);
                    _this.isTransiting = false;
                });
                this.markContentActive(to);
                this.cdr.markForCheck();
            }
        };
        NzCarouselComponent.prototype.switchStrategy = function () {
            var _this = this;
            if (this.strategy) {
                this.strategy.dispose();
            }
            // Load custom strategies first.
            var customStrategy = this.customStrategies ? this.customStrategies.find(function (s) { return s.name === _this.nzEffect; }) : null;
            if (customStrategy) {
                this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer, this.platform);
                return;
            }
            this.strategy =
                this.nzEffect === 'scrollx'
                    ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer, this.platform)
                    : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer, this.platform);
        };
        NzCarouselComponent.prototype.scheduleNextTransition = function () {
            var _this = this;
            this.clearScheduledTransition();
            if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
                this.transitionInProgress = setTimeout(function () {
                    _this.goTo(_this.activeIndex + 1);
                }, this.nzAutoPlaySpeed);
            }
        };
        NzCarouselComponent.prototype.clearScheduledTransition = function () {
            if (this.transitionInProgress) {
                clearTimeout(this.transitionInProgress);
                this.transitionInProgress = null;
            }
        };
        NzCarouselComponent.prototype.markContentActive = function (index) {
            var _this = this;
            this.activeIndex = index;
            if (this.carouselContents) {
                this.carouselContents.forEach(function (slide, i) {
                    if (_this.dir === 'rtl') {
                        slide.isActive = index === _this.carouselContents.length - 1 - i;
                    }
                    else {
                        slide.isActive = index === i;
                    }
                });
            }
            this.cdr.markForCheck();
        };
        NzCarouselComponent.prototype.layout = function () {
            if (this.strategy) {
                this.strategy.withCarouselContents(this.carouselContents);
            }
        };
        return NzCarouselComponent;
    }());
    NzCarouselComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-carousel',
                    exportAs: 'nzCarousel',
                    preserveWhitespaces: false,
                    template: "\n    <div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzDotPosition === 'left' || nzDotPosition === 'right'\">\n      <div\n        #slickList\n        class=\"slick-list\"\n        tabindex=\"-1\"\n        (keydown)=\"onKeyDown($event)\"\n        (mousedown)=\"pointerDown($event)\"\n        (touchstart)=\"pointerDown($event)\"\n      >\n        <!-- Render carousel items. -->\n        <div class=\"slick-track\" #slickTrack>\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <!-- Render dots. -->\n      <ul\n        class=\"slick-dots\"\n        *ngIf=\"nzDots\"\n        [class.slick-dots-top]=\"nzDotPosition === 'top'\"\n        [class.slick-dots-bottom]=\"nzDotPosition === 'bottom'\"\n        [class.slick-dots-left]=\"nzDotPosition === 'left'\"\n        [class.slick-dots-right]=\"nzDotPosition === 'right'\"\n      >\n        <li *ngFor=\"let content of carouselContents; let i = index\" [class.slick-active]=\"content.isActive\" (click)=\"onLiClick(i)\">\n          <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n        </li>\n      </ul>\n    </div>\n\n    <ng-template #renderDotTemplate let-index>\n      <button>{{ index + 1 }}</button>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-carousel-vertical]': 'vertical',
                        '[class.ant-carousel-rtl]': "dir ==='rtl'"
                    }
                },] }
    ];
    NzCarouselComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: config.NzConfigService },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: platform.Platform },
        { type: services.NzResizeService },
        { type: services.NzDragService },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
    ]; };
    NzCarouselComponent.propDecorators = {
        carouselContents: [{ type: core.ContentChildren, args: [NzCarouselContentDirective,] }],
        slickList: [{ type: core.ViewChild, args: ['slickList', { static: false },] }],
        slickTrack: [{ type: core.ViewChild, args: ['slickTrack', { static: false },] }],
        nzDotRender: [{ type: core.Input }],
        nzEffect: [{ type: core.Input }],
        nzEnableSwipe: [{ type: core.Input }],
        nzDots: [{ type: core.Input }],
        nzAutoPlay: [{ type: core.Input }],
        nzAutoPlaySpeed: [{ type: core.Input }],
        nzTransitionSpeed: [{ type: core.Input }],
        nzStrategyOptions: [{ type: core.Input }],
        nzDotPosition: [{ type: core.Input }],
        nzBeforeChange: [{ type: core.Output }],
        nzAfterChange: [{ type: core.Output }]
    };
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzCarouselComponent.prototype, "nzEffect", void 0);
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzDots", void 0);
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
    __decorate([
        config.WithConfig(),
        util.InputNumber(),
        __metadata("design:type", Number)
    ], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NzCarouselComponent.prototype, "nzDotPosition", null);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCarouselModule = /** @class */ (function () {
        function NzCarouselModule() {
        }
        return NzCarouselModule;
    }());
    NzCarouselModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NzCarouselComponent, NzCarouselContentDirective],
                    exports: [NzCarouselComponent, NzCarouselContentDirective],
                    imports: [bidi.BidiModule, common.CommonModule, platform.PlatformModule]
                },] }
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NZ_CAROUSEL_CUSTOM_STRATEGIES = NZ_CAROUSEL_CUSTOM_STRATEGIES;
    exports.NzCarouselBaseStrategy = NzCarouselBaseStrategy;
    exports.NzCarouselComponent = NzCarouselComponent;
    exports.NzCarouselContentDirective = NzCarouselContentDirective;
    exports.NzCarouselModule = NzCarouselModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-carousel.umd.js.map
