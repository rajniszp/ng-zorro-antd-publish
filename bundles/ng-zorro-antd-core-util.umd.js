(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/coercion'), require('ng-zorro-antd/core/logger'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/util', ['exports', '@angular/core', '@angular/cdk/coercion', 'ng-zorro-antd/core/logger', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core.util = {}), global.ng.core, global.ng.cdk.coercion, global['ng-zorro-antd'].core.logger, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, coercion, logger, rxjs, operators) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function toArray(value) {
        var ret;
        if (value == null) {
            ret = [];
        }
        else if (!Array.isArray(value)) {
            ret = [value];
        }
        else {
            ret = value;
        }
        return ret;
    }
    function arraysEqual(array1, array2) {
        if (!array1 || !array2 || array1.length !== array2.length) {
            return false;
        }
        var len = array1.length;
        for (var i = 0; i < len; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
    function shallowCopyArray(source) {
        return source.slice();
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function isNotNil(value) {
        return typeof value !== 'undefined' && value !== null;
    }
    function isNil(value) {
        return typeof value === 'undefined' || value === null;
    }
    /**
     * Examine if two objects are shallowly equaled.
     */
    function shallowEqual(objA, objB) {
        if (objA === objB) {
            return true;
        }
        if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
            return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
            return false;
        }
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
        // tslint:disable-next-line:prefer-for-of
        for (var idx = 0; idx < keysA.length; idx++) {
            var key = keysA[idx];
            if (!bHasOwnProperty(key)) {
                return false;
            }
            if (objA[key] !== objB[key]) {
                return false;
            }
        }
        return true;
    }
    function isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    function isTemplateRef(value) {
        return value instanceof core.TemplateRef;
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

    function toBoolean(value) {
        return coercion.coerceBooleanProperty(value);
    }
    function toNumber(value, fallbackValue) {
        if (fallbackValue === void 0) { fallbackValue = 0; }
        return coercion._isNumberValue(value) ? Number(value) : fallbackValue;
    }
    function toCssPixel(value) {
        return coercion.coerceCssPixelValue(value);
    }
    // tslint:disable no-invalid-this
    /**
     * Get the function-property type's value
     */
    function valueFunctionProp(prop) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return typeof prop === 'function' ? prop.apply(void 0, __spread(args)) : prop;
    }
    function propDecoratorFactory(name, fallback) {
        function propDecorator(target, propName, originalDescriptor) {
            var privatePropName = "$$__" + propName;
            if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
                logger.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
            }
            Object.defineProperty(target, privatePropName, {
                configurable: true,
                writable: true
            });
            return {
                get: function () {
                    return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                },
                set: function (value) {
                    if (originalDescriptor && originalDescriptor.set) {
                        originalDescriptor.set.bind(this)(fallback(value));
                    }
                    this[privatePropName] = fallback(value);
                }
            };
        }
        return propDecorator;
    }
    /**
     * Input decorator that handle a prop to do get/set automatically with toBoolean
     *
     * Why not using @InputBoolean alone without @Input? AOT needs @Input to be visible
     *
     * @howToUse
     * ```
     * @Input() @InputBoolean() visible: boolean = false;
     *
     * // Act as below:
     * // @Input()
     * // get visible() { return this.__visible; }
     * // set visible(value) { this.__visible = value; }
     * // __visible = false;
     * ```
     */
    function InputBoolean() {
        return propDecoratorFactory('InputBoolean', toBoolean);
    }
    function InputCssPixel() {
        return propDecoratorFactory('InputCssPixel', toCssPixel);
    }
    function InputNumber(fallbackValue) {
        return propDecoratorFactory('InputNumber', function (value) { return toNumber(value, fallbackValue); });
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * Silent an event by stopping and preventing it.
     */
    function silentEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    function getElementOffset(elem) {
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        var rect = elem.getBoundingClientRect();
        var win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    }
    /**
     * Investigate if an event is a `TouchEvent`.
     */
    function isTouchEvent(event) {
        return event.type.startsWith('touch');
    }
    function getEventPosition(event) {
        return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function getRegExp(prefix) {
        var prefixArray = Array.isArray(prefix) ? prefix : [prefix];
        var prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
        if (prefixArray.length > 1) {
            prefixToken = "[" + prefixToken + "]";
        }
        return new RegExp("(\\s|^)(" + prefixToken + ")[^\\s]*", 'g');
    }
    function getMentions(value, prefix) {
        if (prefix === void 0) { prefix = '@'; }
        if (typeof value !== 'string') {
            return [];
        }
        var regex = getRegExp(prefix);
        var mentions = value.match(regex);
        return mentions !== null ? mentions.map(function (e) { return e.trim(); }) : [];
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * Much like lodash.
     */
    function padStart(toPad, length, element) {
        if (toPad.length > length) {
            return toPad;
        }
        var joined = "" + getRepeatedElement(length, element) + toPad;
        return joined.slice(joined.length - length, joined.length);
    }
    function padEnd(toPad, length, element) {
        var joined = "" + toPad + getRepeatedElement(length, element);
        return joined.slice(0, length);
    }
    function getRepeatedElement(length, element) {
        return Array(length).fill(element).join('');
    }

    function isPromise(obj) {
        return !!obj && typeof obj.then === 'function' && typeof obj.catch === 'function';
    }

    function getPercent(min, max, value) {
        return ((value - min) / (max - min)) * 100;
    }
    function getPrecision(num) {
        var numStr = num.toString();
        var dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    }
    function ensureNumberInRange(num, min, max) {
        if (isNaN(num) || num < min) {
            return min;
        }
        else if (num > max) {
            return max;
        }
        else {
            return num;
        }
    }
    function isNumberFinite(value) {
        return typeof value === 'number' && isFinite(value);
    }
    function toDecimal(value, decimal) {
        return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
    }
    function sum(input, initial) {
        if (initial === void 0) { initial = 0; }
        return input.reduce(function (previous, current) { return previous + current; }, initial);
    }

    function scrollIntoView(node) {
        var nodeAsAny = node;
        if (nodeAsAny.scrollIntoViewIfNeeded) {
            /* tslint:disable-next-line:no-string-literal */
            nodeAsAny.scrollIntoViewIfNeeded(false);
            return;
        }
        if (node.scrollIntoView) {
            node.scrollIntoView(false);
            return;
        }
    }

    // from https://github.com/component/textarea-caret-position
    // We'll copy the properties below into the mirror div.
    // Note that some browsers, such as Firefox, do not concatenate properties
    // into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
    // so we have to list every single property explicitly.
    var properties = [
        'direction',
        'boxSizing',
        'width',
        'height',
        'overflowX',
        'overflowY',
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
        'borderStyle',
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
        // https://developer.mozilla.org/en-US/docs/Web/CSS/font
        'fontStyle',
        'fontVariant',
        'fontWeight',
        'fontStretch',
        'fontSize',
        'fontSizeAdjust',
        'lineHeight',
        'fontFamily',
        'textAlign',
        'textTransform',
        'textIndent',
        'textDecoration',
        'letterSpacing',
        'wordSpacing',
        'tabSize',
        'MozTabSize'
    ];
    var isBrowser = typeof window !== 'undefined';
    var isFirefox = isBrowser && window.mozInnerScreenX != null;
    var _parseInt = function (str) { return parseInt(str, 10); };
    var ɵ0 = _parseInt;
    function getCaretCoordinates(element, position, options) {
        if (!isBrowser) {
            throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
        }
        var debug = (options && options.debug) || false;
        if (debug) {
            var el = document.querySelector('#input-textarea-caret-position-mirror-div');
            if (el) {
                el.parentNode.removeChild(el);
            }
        }
        // The mirror div will replicate the textarea's style
        var div = document.createElement('div');
        div.id = 'input-textarea-caret-position-mirror-div';
        document.body.appendChild(div);
        var style = div.style;
        var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9
        var isInput = element.nodeName === 'INPUT';
        // Default textarea styles
        style.whiteSpace = 'pre-wrap';
        if (!isInput) {
            style.wordWrap = 'break-word'; // only for textarea-s
        }
        // Position off-screen
        style.position = 'absolute'; // required to return coordinates properly
        if (!debug) {
            style.visibility = 'hidden';
        } // not 'display: none' because we want rendering
        // Transfer the element's properties to the div
        properties.forEach(function (prop) {
            if (isInput && prop === 'lineHeight') {
                // Special case for <input>s because text is rendered centered and line height may be != height
                style.lineHeight = computed.height;
            }
            else {
                // @ts-ignore
                style[prop] = computed[prop];
            }
        });
        if (isFirefox) {
            // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
            if (element.scrollHeight > _parseInt(computed.height)) {
                style.overflowY = 'scroll';
            }
        }
        else {
            style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
        }
        div.textContent = element.value.substring(0, position);
        // The second special handling for input type="text" vs textarea:
        // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
        if (isInput) {
            div.textContent = div.textContent.replace(/\s/g, '\u00a0');
        }
        var span = document.createElement('span');
        // Wrapping must be replicated *exactly*, including when a long word gets
        // onto the next line, with whitespace at the end of the line before (#7).
        // The  *only* reliable way to do that is to copy the *entire* rest of the
        // textarea's content into the <span> created at the caret position.
        // For inputs, just '.' would be enough, but no need to bother.
        span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
        div.appendChild(span);
        var coordinates = {
            top: span.offsetTop + _parseInt(computed.borderTopWidth),
            left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
            height: _parseInt(computed.lineHeight)
        };
        if (debug) {
            span.style.backgroundColor = '#eee';
            createDebugEle(element, coordinates);
        }
        else {
            document.body.removeChild(div);
        }
        return coordinates;
    }
    function createDebugEle(element, coordinates) {
        var fontSize = getComputedStyle(element).getPropertyValue('font-size');
        var rect = document.querySelector('#DEBUG') || document.createElement('div');
        document.body.appendChild(rect);
        rect.id = 'DEBUG';
        rect.style.position = 'absolute';
        rect.style.backgroundColor = 'red';
        rect.style.height = fontSize;
        rect.style.width = '1px';
        rect.style.top = element.getBoundingClientRect().top - element.scrollTop + window.pageYOffset + coordinates.top + "px";
        rect.style.left = element.getBoundingClientRect().left - element.scrollLeft + window.pageXOffset + coordinates.left + "px";
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function isStyleSupport(styleName) {
        if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
            var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
            var documentElement_1 = window.document.documentElement;
            return styleNameList.some(function (name) { return name in documentElement_1.style; });
        }
        return false;
    }
    function getStyleAsText(styles) {
        if (!styles) {
            return '';
        }
        return Object.keys(styles)
            .map(function (key) {
            var val = styles[key];
            return key + ":" + (typeof val === 'string' ? val : val + 'px');
        })
            .join(';');
    }

    // We only handle element & text node.
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var ellipsisContainer;
    var wrapperStyle = {
        padding: '0',
        margin: '0',
        display: 'inline',
        lineHeight: 'inherit'
    };
    function pxToNumber(value) {
        if (!value) {
            return 0;
        }
        var match = value.match(/^\d*(\.\d*)?/);
        return match ? Number(match[0]) : 0;
    }
    function styleToString(style) {
        // There are some different behavior between Firefox & Chrome.
        // We have to handle this ourself.
        var styleNames = Array.prototype.slice.apply(style);
        return styleNames.map(function (name) { return name + ": " + style.getPropertyValue(name) + ";"; }).join('');
    }
    function mergeChildren(children) {
        var childList = [];
        children.forEach(function (child) {
            var prevChild = childList[childList.length - 1];
            if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
                prevChild.data += child.data;
            }
            else {
                childList.push(child);
            }
        });
        return childList;
    }
    function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr, suffixStr) {
        if (suffixStr === void 0) { suffixStr = ''; }
        if (!ellipsisContainer) {
            ellipsisContainer = document.createElement('div');
            ellipsisContainer.setAttribute('aria-hidden', 'true');
            document.body.appendChild(ellipsisContainer);
        }
        // Get origin style
        var originStyle = window.getComputedStyle(originEle);
        var originCSS = styleToString(originStyle);
        var lineHeight = pxToNumber(originStyle.lineHeight);
        var maxHeight = Math.round(lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
        // Set shadow
        ellipsisContainer.setAttribute('style', originCSS);
        ellipsisContainer.style.position = 'fixed';
        ellipsisContainer.style.left = '0';
        ellipsisContainer.style.height = 'auto';
        ellipsisContainer.style.minHeight = 'auto';
        ellipsisContainer.style.maxHeight = 'auto';
        ellipsisContainer.style.top = '-999999px';
        ellipsisContainer.style.zIndex = '-1000';
        // clean up css overflow
        ellipsisContainer.style.textOverflow = 'clip';
        ellipsisContainer.style.whiteSpace = 'normal';
        ellipsisContainer.style.webkitLineClamp = 'none';
        var contentList = mergeChildren(contentNodes);
        var container = document.createElement('div');
        var contentContainer = document.createElement('span');
        var suffixContainer = document.createTextNode(suffixStr);
        var fixedContainer = document.createElement('span');
        // Add styles in container
        Object.assign(container.style, wrapperStyle);
        Object.assign(contentContainer.style, wrapperStyle);
        Object.assign(fixedContainer.style, wrapperStyle);
        contentList.forEach(function (n) {
            contentContainer.appendChild(n);
        });
        contentContainer.appendChild(suffixContainer);
        fixedContent.forEach(function (node) {
            fixedContainer.appendChild(node.cloneNode(true));
        });
        container.appendChild(contentContainer);
        container.appendChild(fixedContainer);
        // Render in the fake container
        ellipsisContainer.appendChild(container);
        // Check if ellipsis in measure div is height enough for content
        function inRange() {
            return ellipsisContainer.offsetHeight < maxHeight;
        }
        if (inRange()) {
            var text = ellipsisContainer.innerHTML;
            ellipsisContainer.removeChild(container);
            return { contentNodes: contentNodes, text: text, ellipsis: false };
        }
        // We should clone the childNode since they're controlled by React and we can't reuse it without warning
        var childNodes = Array.prototype.slice
            .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
            .filter(function (_a) {
            var nodeType = _a.nodeType;
            return nodeType !== COMMENT_NODE;
        });
        var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
        ellipsisContainer.removeChild(container);
        // ========================= Find match ellipsis content =========================
        ellipsisContainer.innerHTML = '';
        // Create origin content holder
        var ellipsisContentHolder = document.createElement('span');
        ellipsisContainer.appendChild(ellipsisContentHolder);
        var ellipsisTextNode = document.createTextNode(ellipsisStr + suffixStr);
        ellipsisContentHolder.appendChild(ellipsisTextNode);
        fixedNodes.forEach(function (childNode) {
            ellipsisContainer.appendChild(childNode);
        });
        // Append before fixed nodes
        function appendChildNode(node) {
            ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
        }
        // Get maximum text
        function measureText(textNode, fullText, startLoc, endLoc, lastSuccessLoc) {
            if (startLoc === void 0) { startLoc = 0; }
            if (endLoc === void 0) { endLoc = fullText.length; }
            if (lastSuccessLoc === void 0) { lastSuccessLoc = 0; }
            var midLoc = Math.floor((startLoc + endLoc) / 2);
            textNode.textContent = fullText.slice(0, midLoc);
            if (startLoc >= endLoc - 1) {
                // Loop when step is small
                for (var step = endLoc; step >= startLoc; step -= 1) {
                    var currentStepText = fullText.slice(0, step);
                    textNode.textContent = currentStepText;
                    if (inRange() || !currentStepText) {
                        return step === fullText.length
                            ? {
                                finished: false,
                                node: document.createTextNode(fullText)
                            }
                            : {
                                finished: true,
                                node: document.createTextNode(currentStepText)
                            };
                    }
                }
            }
            if (inRange()) {
                return measureText(textNode, fullText, midLoc, endLoc, midLoc);
            }
            else {
                return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
            }
        }
        function measureNode(childNode, index) {
            var type = childNode.nodeType;
            if (type === ELEMENT_NODE) {
                // We don't split element, it will keep if whole element can be displayed.
                // appendChildNode(childNode);
                if (inRange()) {
                    return {
                        finished: false,
                        node: contentList[index]
                    };
                }
                // Clean up if can not pull in
                ellipsisContentHolder.removeChild(childNode);
                return {
                    finished: true,
                    node: null
                };
            }
            else if (type === TEXT_NODE) {
                var fullText = childNode.textContent || '';
                var textNode = document.createTextNode(fullText);
                appendChildNode(textNode);
                return measureText(textNode, fullText);
            }
            // Not handle other type of content
            // PS: This code should not be attached after react 16
            return {
                finished: false,
                node: null
            };
        }
        var ellipsisNodes = [];
        childNodes.some(function (childNode, index) {
            var _a = measureNode(childNode, index), finished = _a.finished, node = _a.node;
            if (node) {
                ellipsisNodes.push(node);
            }
            return finished;
        });
        var result = {
            contentNodes: ellipsisNodes,
            text: ellipsisContainer.innerHTML,
            ellipsis: true
        };
        while (ellipsisContainer.firstChild) {
            ellipsisContainer.removeChild(ellipsisContainer.firstChild);
        }
        return result;
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var scrollbarVerticalSize;
    var scrollbarHorizontalSize;
    // Measure scrollbar width for padding body during modal show/hide
    var scrollbarMeasure = {
        position: 'absolute',
        top: '-9999px',
        width: '50px',
        height: '50px'
    };
    function measureScrollbar(direction, prefix) {
        if (direction === void 0) { direction = 'vertical'; }
        if (prefix === void 0) { prefix = 'ant'; }
        if (typeof document === 'undefined' || typeof window === 'undefined') {
            return 0;
        }
        var isVertical = direction === 'vertical';
        if (isVertical && scrollbarVerticalSize) {
            return scrollbarVerticalSize;
        }
        else if (!isVertical && scrollbarHorizontalSize) {
            return scrollbarHorizontalSize;
        }
        var scrollDiv = document.createElement('div');
        Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
            // @ts-ignore
            scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
        });
        // apply hide scrollbar className ahead
        scrollDiv.className = prefix + "-hide-scrollbar scroll-div-append-to-body";
        // Append related overflow style
        if (isVertical) {
            scrollDiv.style.overflowY = 'scroll';
        }
        else {
            scrollDiv.style.overflowX = 'scroll';
        }
        document.body.appendChild(scrollDiv);
        var size = 0;
        if (isVertical) {
            size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            scrollbarVerticalSize = size;
        }
        else {
            size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
            scrollbarHorizontalSize = size;
        }
        document.body.removeChild(scrollDiv);
        return size;
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function ensureInBounds(value, boundValue) {
        return value ? (value < boundValue ? value : boundValue) : boundValue;
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function inNextTick() {
        var timer = new rxjs.Subject();
        Promise.resolve().then(function () { return timer.next(); });
        return timer.pipe(operators.take(1));
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function wrapIntoObservable(value) {
        if (rxjs.isObservable(value)) {
            return value;
        }
        if (isPromise(value)) {
            // Use `Promise.resolve()` to wrap promise-like instances.
            return rxjs.from(Promise.resolve(value));
        }
        return rxjs.of(value);
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputBoolean = InputBoolean;
    exports.InputCssPixel = InputCssPixel;
    exports.InputNumber = InputNumber;
    exports.arraysEqual = arraysEqual;
    exports.createDebugEle = createDebugEle;
    exports.ensureInBounds = ensureInBounds;
    exports.ensureNumberInRange = ensureNumberInRange;
    exports.getCaretCoordinates = getCaretCoordinates;
    exports.getElementOffset = getElementOffset;
    exports.getEventPosition = getEventPosition;
    exports.getMentions = getMentions;
    exports.getPercent = getPercent;
    exports.getPrecision = getPrecision;
    exports.getRegExp = getRegExp;
    exports.getRepeatedElement = getRepeatedElement;
    exports.getStyleAsText = getStyleAsText;
    exports.inNextTick = inNextTick;
    exports.isNil = isNil;
    exports.isNonEmptyString = isNonEmptyString;
    exports.isNotNil = isNotNil;
    exports.isNumberFinite = isNumberFinite;
    exports.isPromise = isPromise;
    exports.isStyleSupport = isStyleSupport;
    exports.isTemplateRef = isTemplateRef;
    exports.isTouchEvent = isTouchEvent;
    exports.measure = measure;
    exports.measureScrollbar = measureScrollbar;
    exports.padEnd = padEnd;
    exports.padStart = padStart;
    exports.properties = properties;
    exports.pxToNumber = pxToNumber;
    exports.scrollIntoView = scrollIntoView;
    exports.shallowCopyArray = shallowCopyArray;
    exports.shallowEqual = shallowEqual;
    exports.silentEvent = silentEvent;
    exports.sum = sum;
    exports.toArray = toArray;
    exports.toBoolean = toBoolean;
    exports.toCssPixel = toCssPixel;
    exports.toDecimal = toDecimal;
    exports.toNumber = toNumber;
    exports.valueFunctionProp = valueFunctionProp;
    exports.wrapIntoObservable = wrapIntoObservable;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-core-util.umd.js.map
