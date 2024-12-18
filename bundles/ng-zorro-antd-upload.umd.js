(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/common/http'), require('@angular/core'), require('ng-zorro-antd/core/logger'), require('rxjs'), require('rxjs/operators'), require('@angular/animations'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/cdk/bidi'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/i18n'), require('@angular/forms'), require('ng-zorro-antd/button'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/tooltip')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/upload', ['exports', '@angular/cdk/keycodes', '@angular/common/http', '@angular/core', 'ng-zorro-antd/core/logger', 'rxjs', 'rxjs/operators', '@angular/animations', '@angular/cdk/platform', '@angular/common', '@angular/cdk/bidi', 'ng-zorro-antd/core/util', 'ng-zorro-antd/i18n', '@angular/forms', 'ng-zorro-antd/button', 'ng-zorro-antd/icon', 'ng-zorro-antd/progress', 'ng-zorro-antd/tooltip'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].upload = {}), global.ng.cdk.keycodes, global.ng.common.http, global.ng.core, global['ng-zorro-antd'].core.logger, global.rxjs, global.rxjs.operators, global.ng.animations, global.ng.cdk.platform, global.ng.common, global.ng.cdk.bidi, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].i18n, global.ng.forms, global['ng-zorro-antd'].button, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].progress, global['ng-zorro-antd'].tooltip));
}(this, (function (exports, keycodes, http, core, logger, rxjs, operators, animations, platform, common, bidi, util, i18n, forms, button, icon, progress, tooltip) { 'use strict';

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

  var NzUploadBtnComponent = /** @class */ (function () {
      function NzUploadBtnComponent(http, elementRef) {
          this.http = http;
          this.elementRef = elementRef;
          this.reqs = {};
          this.destroy = false;
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-upload');
          if (!http) {
              throw new Error("Not found 'HttpClient', You can import 'HttpClientModule' in your root module.");
          }
      }
      NzUploadBtnComponent.prototype.onClick = function () {
          if (this.options.disabled || !this.options.openFileDialogOnClick) {
              return;
          }
          this.file.nativeElement.click();
      };
      NzUploadBtnComponent.prototype.onKeyDown = function (e) {
          if (this.options.disabled) {
              return;
          }
          if (e.key === 'Enter' || e.keyCode === keycodes.ENTER) {
              this.onClick();
          }
      };
      // skip safari bug
      NzUploadBtnComponent.prototype.onFileDrop = function (e) {
          var _this = this;
          if (this.options.disabled || e.type === 'dragover') {
              e.preventDefault();
              return;
          }
          if (this.options.directory) {
              this.traverseFileTree(e.dataTransfer.items);
          }
          else {
              var files = Array.prototype.slice
                  .call(e.dataTransfer.files)
                  .filter(function (file) { return _this.attrAccept(file, _this.options.accept); });
              if (files.length) {
                  this.uploadFiles(files);
              }
          }
          e.preventDefault();
      };
      NzUploadBtnComponent.prototype.onChange = function (e) {
          if (this.options.disabled) {
              return;
          }
          var hie = e.target;
          this.uploadFiles(hie.files);
          hie.value = '';
      };
      NzUploadBtnComponent.prototype.traverseFileTree = function (files) {
          var e_1, _a;
          var _this = this;
          var _traverseFileTree = function (item, path) {
              if (item.isFile) {
                  item.file(function (file) {
                      if (_this.attrAccept(file, _this.options.accept)) {
                          _this.uploadFiles([file]);
                      }
                  });
              }
              else if (item.isDirectory) {
                  var dirReader = item.createReader();
                  dirReader.readEntries(function (entries) {
                      var e_2, _a;
                      try {
                          for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                              var entrieItem = entries_1_1.value;
                              _traverseFileTree(entrieItem, "" + path + item.name + "/");
                          }
                      }
                      catch (e_2_1) { e_2 = { error: e_2_1 }; }
                      finally {
                          try {
                              if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                          }
                          finally { if (e_2) throw e_2.error; }
                      }
                  });
              }
          };
          try {
              for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                  var file = files_1_1.value;
                  _traverseFileTree(file.webkitGetAsEntry(), '');
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
      };
      NzUploadBtnComponent.prototype.attrAccept = function (file, acceptedFiles) {
          if (file && acceptedFiles) {
              var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
              var fileName_1 = '' + file.name;
              var mimeType_1 = '' + file.type;
              var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
              return acceptedFilesArray.some(function (type) {
                  var validType = type.trim();
                  if (validType.charAt(0) === '.') {
                      return (fileName_1.toLowerCase().indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1);
                  }
                  else if (/\/\*$/.test(validType)) {
                      // This is something like a image/* mime type
                      return baseMimeType_1 === validType.replace(/\/.*$/, '');
                  }
                  return mimeType_1 === validType;
              });
          }
          return true;
      };
      NzUploadBtnComponent.prototype.attachUid = function (file) {
          if (!file.uid) {
              file.uid = Math.random().toString(36).substring(2);
          }
          return file;
      };
      NzUploadBtnComponent.prototype.uploadFiles = function (fileList) {
          var _this = this;
          var filters$ = rxjs.of(Array.prototype.slice.call(fileList));
          if (this.options.filters) {
              this.options.filters.forEach(function (f) {
                  filters$ = filters$.pipe(operators.switchMap(function (list) {
                      var fnRes = f.fn(list);
                      return fnRes instanceof rxjs.Observable ? fnRes : rxjs.of(fnRes);
                  }));
              });
          }
          filters$.subscribe(function (list) {
              list.forEach(function (file) {
                  _this.attachUid(file);
                  _this.upload(file, list);
              });
          }, function (e) {
              logger.warn("Unhandled upload filter error", e);
          });
      };
      NzUploadBtnComponent.prototype.upload = function (file, fileList) {
          var _this = this;
          if (!this.options.beforeUpload) {
              return this.post(file);
          }
          var before = this.options.beforeUpload(file, fileList);
          if (before instanceof rxjs.Observable) {
              before.subscribe(function (processedFile) {
                  var processedFileType = Object.prototype.toString.call(processedFile);
                  if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                      _this.attachUid(processedFile);
                      _this.post(processedFile);
                  }
                  else if (typeof processedFile === 'boolean' && processedFile !== false) {
                      _this.post(file);
                  }
              }, function (e) {
                  logger.warn("Unhandled upload beforeUpload error", e);
              });
          }
          else if (before !== false) {
              return this.post(file);
          }
      };
      NzUploadBtnComponent.prototype.post = function (file) {
          var _this = this;
          if (this.destroy) {
              return;
          }
          var process$ = rxjs.of(file);
          var opt = this.options;
          var uid = file.uid;
          var action = opt.action, data = opt.data, headers = opt.headers, transformFile = opt.transformFile;
          var args = {
              action: typeof action === 'string' ? action : '',
              name: opt.name,
              headers: headers,
              file: file,
              postFile: file,
              data: data,
              withCredentials: opt.withCredentials,
              onProgress: opt.onProgress
                  ? function (e) {
                      opt.onProgress(e, file);
                  }
                  : undefined,
              onSuccess: function (ret, xhr) {
                  _this.clean(uid);
                  opt.onSuccess(ret, file, xhr);
              },
              onError: function (xhr) {
                  _this.clean(uid);
                  opt.onError(xhr, file);
              }
          };
          if (typeof action === 'function') {
              var actionResult_1 = action(file);
              if (actionResult_1 instanceof rxjs.Observable) {
                  process$ = process$.pipe(operators.switchMap(function () { return actionResult_1; }), operators.map(function (res) {
                      args.action = res;
                      return file;
                  }));
              }
              else {
                  args.action = actionResult_1;
              }
          }
          if (typeof transformFile === 'function') {
              var transformResult_1 = transformFile(file);
              process$ = process$.pipe(operators.switchMap(function () { return (transformResult_1 instanceof rxjs.Observable ? transformResult_1 : rxjs.of(transformResult_1)); }));
          }
          if (typeof data === 'function') {
              var dataResult_1 = data(file);
              if (dataResult_1 instanceof rxjs.Observable) {
                  process$ = process$.pipe(operators.switchMap(function () { return dataResult_1; }), operators.map(function (res) {
                      args.data = res;
                      return file;
                  }));
              }
              else {
                  args.data = dataResult_1;
              }
          }
          if (typeof headers === 'function') {
              var headersResult_1 = headers(file);
              if (headersResult_1 instanceof rxjs.Observable) {
                  process$ = process$.pipe(operators.switchMap(function () { return headersResult_1; }), operators.map(function (res) {
                      args.headers = res;
                      return file;
                  }));
              }
              else {
                  args.headers = headersResult_1;
              }
          }
          process$.subscribe(function (newFile) {
              args.postFile = newFile;
              var req$ = (opt.customRequest || _this.xhr).call(_this, args);
              if (!(req$ instanceof rxjs.Subscription)) {
                  logger.warn("Must return Subscription type in '[nzCustomRequest]' property");
              }
              _this.reqs[uid] = req$;
              opt.onStart(file);
          });
      };
      NzUploadBtnComponent.prototype.xhr = function (args) {
          var _this = this;
          var formData = new FormData();
          if (args.data) {
              Object.keys(args.data).map(function (key) {
                  formData.append(key, args.data[key]);
              });
          }
          formData.append(args.name, args.postFile);
          if (!args.headers) {
              args.headers = {};
          }
          if (args.headers['X-Requested-With'] !== null) {
              args.headers['X-Requested-With'] = "XMLHttpRequest";
          }
          else {
              delete args.headers['X-Requested-With'];
          }
          var req = new http.HttpRequest('POST', args.action, formData, {
              reportProgress: true,
              withCredentials: args.withCredentials,
              headers: new http.HttpHeaders(args.headers)
          });
          return this.http.request(req).subscribe(function (event) {
              if (event.type === http.HttpEventType.UploadProgress) {
                  if (event.total > 0) {
                      event.percent = (event.loaded / event.total) * 100;
                  }
                  args.onProgress(event, args.file);
              }
              else if (event instanceof http.HttpResponse) {
                  args.onSuccess(event.body, args.file, event);
              }
          }, function (err) {
              _this.abort(args.file);
              args.onError(err, args.file);
          });
      };
      NzUploadBtnComponent.prototype.clean = function (uid) {
          var req$ = this.reqs[uid];
          if (req$ instanceof rxjs.Subscription) {
              req$.unsubscribe();
          }
          delete this.reqs[uid];
      };
      NzUploadBtnComponent.prototype.abort = function (file) {
          var _this = this;
          if (file) {
              this.clean(file && file.uid);
          }
          else {
              Object.keys(this.reqs).forEach(function (uid) { return _this.clean(uid); });
          }
      };
      NzUploadBtnComponent.prototype.ngOnDestroy = function () {
          this.destroy = true;
          this.abort();
      };
      return NzUploadBtnComponent;
  }());
  NzUploadBtnComponent.decorators = [
      { type: core.Component, args: [{
                  selector: '[nz-upload-btn]',
                  exportAs: 'nzUploadBtn',
                  template: "<input\n  type=\"file\"\n  #file\n  (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory' : null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory' : null\"\n  [multiple]=\"options.multiple\"\n  style=\"display: none;\"\n/>\n<ng-content></ng-content>\n",
                  host: {
                      '[attr.tabindex]': '"0"',
                      '[attr.role]': '"button"',
                      '[class.ant-upload-disabled]': 'options.disabled',
                      '(click)': 'onClick()',
                      '(keydown)': 'onKeyDown($event)',
                      '(drop)': 'onFileDrop($event)',
                      '(dragover)': 'onFileDrop($event)'
                  },
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None
              },] }
  ];
  NzUploadBtnComponent.ctorParameters = function () { return [
      { type: http.HttpClient, decorators: [{ type: core.Optional }] },
      { type: core.ElementRef }
  ]; };
  NzUploadBtnComponent.propDecorators = {
      file: [{ type: core.ViewChild, args: ['file', { static: false },] }],
      options: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var isImageFileType = function (type) { return !!type && type.indexOf('image/') === 0; };
  var ɵ0 = isImageFileType;
  var MEASURE_SIZE = 200;
  var NzUploadListComponent = /** @class */ (function () {
      // #endregion
      function NzUploadListComponent(cdr, doc, ngZone, platform, elementRef) {
          this.cdr = cdr;
          this.doc = doc;
          this.ngZone = ngZone;
          this.platform = platform;
          this.elementRef = elementRef;
          this.list = [];
          this.locale = {};
          this.iconRender = null;
          this.dir = 'ltr';
          // TODO: move to host after View Engine deprecation
          this.elementRef.nativeElement.classList.add('ant-upload-list');
      }
      Object.defineProperty(NzUploadListComponent.prototype, "showPic", {
          get: function () {
              return this.listType === 'picture' || this.listType === 'picture-card';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NzUploadListComponent.prototype, "items", {
          set: function (list) {
              this.list = list;
          },
          enumerable: false,
          configurable: true
      });
      NzUploadListComponent.prototype.genErr = function (file) {
          if (file.response && typeof file.response === 'string') {
              return file.response;
          }
          return (file.error && file.error.statusText) || this.locale.uploadError;
      };
      NzUploadListComponent.prototype.extname = function (url) {
          var temp = url.split('/');
          var filename = temp[temp.length - 1];
          var filenameWithoutSuffix = filename.split(/#|\?/)[0];
          return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
      };
      NzUploadListComponent.prototype.isImageUrl = function (file) {
          if (isImageFileType(file.type)) {
              return true;
          }
          var url = (file.thumbUrl || file.url || '');
          if (!url) {
              return false;
          }
          var extension = this.extname(url);
          if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
              return true;
          }
          else if (/^data:/.test(url)) {
              // other file types of base64
              return false;
          }
          else if (extension) {
              // other file types which have extension
              return false;
          }
          return true;
      };
      NzUploadListComponent.prototype.getIconType = function (file) {
          if (!this.showPic) {
              return '';
          }
          if (file.isUploading || (!file.thumbUrl && !file.url)) {
              return 'uploading';
          }
          else {
              return 'thumbnail';
          }
      };
      NzUploadListComponent.prototype.previewImage = function (file) {
          var _this = this;
          return new Promise(function (resolve) {
              if (!isImageFileType(file.type) || !_this.platform.isBrowser) {
                  resolve('');
                  return;
              }
              _this.ngZone.runOutsideAngular(function () {
                  var canvas = _this.doc.createElement('canvas');
                  canvas.width = MEASURE_SIZE;
                  canvas.height = MEASURE_SIZE;
                  canvas.style.cssText = "position: fixed; left: 0; top: 0; width: " + MEASURE_SIZE + "px; height: " + MEASURE_SIZE + "px; z-index: 9999; display: none;";
                  _this.doc.body.appendChild(canvas);
                  var ctx = canvas.getContext('2d');
                  var img = new Image();
                  img.onload = function () {
                      var width = img.width, height = img.height;
                      var drawWidth = MEASURE_SIZE;
                      var drawHeight = MEASURE_SIZE;
                      var offsetX = 0;
                      var offsetY = 0;
                      if (width < height) {
                          drawHeight = height * (MEASURE_SIZE / width);
                          offsetY = -(drawHeight - drawWidth) / 2;
                      }
                      else {
                          drawWidth = width * (MEASURE_SIZE / height);
                          offsetX = -(drawWidth - drawHeight) / 2;
                      }
                      try {
                          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                      }
                      catch (_a) { }
                      var dataURL = canvas.toDataURL();
                      _this.doc.body.removeChild(canvas);
                      resolve(dataURL);
                  };
                  img.src = window.URL.createObjectURL(file);
              });
          });
      };
      NzUploadListComponent.prototype.genThumb = function () {
          var _this = this;
          if (!this.platform.isBrowser) {
              return;
          }
          var win = window;
          if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
              return;
          }
          this.list
              .filter(function (file) { return file.originFileObj instanceof File && file.thumbUrl === undefined; })
              .forEach(function (file) {
              file.thumbUrl = '';
              (_this.previewFile ? _this.previewFile(file).toPromise() : _this.previewImage(file.originFileObj)).then(function (dataUrl) {
                  file.thumbUrl = dataUrl;
                  _this.detectChanges();
              });
          });
      };
      NzUploadListComponent.prototype.showDownload = function (file) {
          return !!(this.icons.showDownloadIcon && file.status === 'done');
      };
      NzUploadListComponent.prototype.fixData = function () {
          var _this = this;
          this.list.forEach(function (file) {
              file.isUploading = file.status === 'uploading';
              file.message = _this.genErr(file);
              file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
              file.isImageUrl = _this.previewIsImage ? _this.previewIsImage(file) : _this.isImageUrl(file);
              file.iconType = _this.getIconType(file);
              file.showDownload = _this.showDownload(file);
          });
      };
      NzUploadListComponent.prototype.handlePreview = function (file, e) {
          if (!this.onPreview) {
              return;
          }
          e.preventDefault();
          return this.onPreview(file);
      };
      NzUploadListComponent.prototype.handleRemove = function (file, e) {
          e.preventDefault();
          if (this.onRemove) {
              this.onRemove(file);
          }
          return;
      };
      NzUploadListComponent.prototype.handleDownload = function (file) {
          if (typeof this.onDownload === 'function') {
              this.onDownload(file);
          }
          else if (file.url) {
              window.open(file.url);
          }
      };
      NzUploadListComponent.prototype.detectChanges = function () {
          this.fixData();
          this.cdr.detectChanges();
      };
      NzUploadListComponent.prototype.ngOnChanges = function () {
          this.fixData();
          this.genThumb();
      };
      return NzUploadListComponent;
  }());
  NzUploadListComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-upload-list',
                  exportAs: 'nzUploadList',
                  template: "<div *ngFor=\"let file of list\" class=\"ant-upload-list-{{ listType }}-container\">\n  <div\n    class=\"ant-upload-list-item ant-upload-list-item-{{\n      file.status\n    }} ant-upload-list-item-list-type-{{ listType }}\"\n    [attr.data-key]=\"file.key\"\n    @itemState\n    nz-tooltip\n    [nzTooltipTitle]=\"file.status === 'error' ? file.message : null\"\n  >\n    <ng-template #icon>\n      <ng-container [ngSwitch]=\"file.iconType\">\n        <div\n          *ngSwitchCase=\"'uploading'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isUploading\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </div>\n        <a\n          *ngSwitchCase=\"'thumbnail'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isImageUrl\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          [href]=\"file.url || file.thumbUrl\"\n          (click)=\"handlePreview(file, $event)\"\n        >\n          <img\n            *ngIf=\"file.isImageUrl; else noImageThumbTpl\"\n            class=\"ant-upload-list-item-image\"\n            [src]=\"file.thumbUrl || file.url\"\n            [attr.alt]=\"file.name\"\n          />\n        </a>\n        <div *ngSwitchDefault class=\"ant-upload-text-icon\">\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </div>\n      </ng-container>\n      <ng-template #noImageThumbTpl>\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </ng-template>\n    </ng-template>\n    <ng-template #iconNode let-file>\n      <ng-container *ngIf=\"!iconRender; else customIconRender\">\n        <ng-container [ngSwitch]=\"listType\">\n          <ng-container *ngSwitchCase=\"'picture'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              <i nz-icon nzType=\"loading\"></i>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'picture-card'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              {{ locale.uploading }}\n            </ng-container>\n          </ng-container>\n          <i *ngSwitchDefault nz-icon [nzType]=\"file.isUploading ? 'loading' : 'paper-clip'\"></i>\n        </ng-container>\n      </ng-container>\n      <ng-template\n        #customIconRender\n        [ngTemplateOutlet]=\"iconRender\"\n        [ngTemplateOutletContext]=\"{ $implicit: file }\"\n      ></ng-template>\n      <ng-template #iconNodeFileIcon>\n        <i nz-icon [nzType]=\"file.isImageUrl ? 'picture' : 'file'\" nzTheme=\"twotone\"></i>\n      </ng-template>\n    </ng-template>\n    <ng-template #removeIcon>\n      <button\n        *ngIf=\"icons.showRemoveIcon\"\n        type=\"button\"\n        nz-button\n        nzType=\"text\"\n        nzSize=\"small\"\n        (click)=\"handleRemove(file, $event)\"\n        [attr.title]=\"locale.removeFile\"\n        class=\"ant-upload-list-item-card-actions-btn\"\n      >\n        <i nz-icon nzType=\"delete\"></i>\n      </button>\n    </ng-template>\n    <ng-template #downloadIcon>\n      <button\n        *ngIf=\"file.showDownload\"\n        type=\"button\"\n        nz-button\n        nzType=\"text\"\n        nzSize=\"small\"\n        (click)=\"handleDownload(file)\"\n        [attr.title]=\"locale.downloadFile\"\n        class=\"ant-upload-list-item-card-actions-btn\"\n      >\n        <i nz-icon nzType=\"download\"></i>\n      </button>\n    </ng-template>\n    <ng-template #downloadOrDelete>\n      <span\n        *ngIf=\"listType !== 'picture-card'\"\n        class=\"ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}\"\n      >\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n      </span>\n    </ng-template>\n    <ng-template #preview>\n      <a\n        *ngIf=\"file.url\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        class=\"ant-upload-list-item-name\"\n        [attr.title]=\"file.name\"\n        [href]=\"file.url\"\n        [attr.download]=\"file.linkProps && file.linkProps.download\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </a>\n      <span\n        *ngIf=\"!file.url\"\n        class=\"ant-upload-list-item-name\"\n        [attr.title]=\"file.name\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </span>\n      <ng-template [ngTemplateOutlet]=\"downloadOrDelete\"></ng-template>\n    </ng-template>\n    <div class=\"ant-upload-list-item-info\">\n      <span class=\"ant-upload-span\">\n        <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n      </span>\n    </div>\n    <span\n      *ngIf=\"listType === 'picture-card' && !file.isUploading\"\n      class=\"ant-upload-list-item-actions\"\n    >\n      <a\n        *ngIf=\"icons.showPreviewIcon\"\n        [href]=\"file.url || file.thumbUrl\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        [attr.title]=\"locale.previewFile\"\n        [ngStyle]=\"!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        <i nz-icon nzType=\"eye\"></i>\n      </a>\n      <ng-container *ngIf=\"file.status === 'done'\">\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n      </ng-container>\n      <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n    </span>\n    <div *ngIf=\"file.isUploading\" class=\"ant-upload-list-item-progress\">\n      <nz-progress\n        [nzPercent]=\"file.percent!\"\n        nzType=\"line\"\n        [nzShowInfo]=\"false\"\n        [nzStrokeWidth]=\"2\"\n      ></nz-progress>\n    </div>\n  </div>\n</div>\n",
                  animations: [
                      animations.trigger('itemState', [
                          animations.transition(':enter', [animations.style({ height: '0', width: '0', opacity: 0 }), animations.animate(150, animations.style({ height: '*', width: '*', opacity: 1 }))]),
                          animations.transition(':leave', [animations.animate(150, animations.style({ height: '0', width: '0', opacity: 0 }))])
                      ])
                  ],
                  host: {
                      '[class.ant-upload-list-rtl]': "dir === 'rtl'",
                      '[class.ant-upload-list-text]': "listType === 'text'",
                      '[class.ant-upload-list-picture]': "listType === 'picture'",
                      '[class.ant-upload-list-picture-card]': "listType === 'picture-card'"
                  },
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NzUploadListComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
      { type: core.NgZone },
      { type: platform.Platform },
      { type: core.ElementRef }
  ]; };
  NzUploadListComponent.propDecorators = {
      locale: [{ type: core.Input }],
      listType: [{ type: core.Input }],
      items: [{ type: core.Input }],
      icons: [{ type: core.Input }],
      onPreview: [{ type: core.Input }],
      onRemove: [{ type: core.Input }],
      onDownload: [{ type: core.Input }],
      previewFile: [{ type: core.Input }],
      previewIsImage: [{ type: core.Input }],
      iconRender: [{ type: core.Input }],
      dir: [{ type: core.Input }]
  };

  var NzUploadComponent = /** @class */ (function () {
      // #endregion
      function NzUploadComponent(cdr, i18n, directionality) {
          var _this = this;
          this.cdr = cdr;
          this.i18n = i18n;
          this.directionality = directionality;
          this.destroy$ = new rxjs.Subject();
          this.dir = 'ltr';
          // #region fields
          this.nzType = 'select';
          this.nzLimit = 0;
          this.nzSize = 0;
          this.nzDirectory = false;
          this.nzOpenFileDialogOnClick = true;
          this.nzFilter = [];
          this.nzFileList = [];
          this.nzDisabled = false;
          this.nzListType = 'text';
          this.nzMultiple = false;
          this.nzName = 'file';
          this._showUploadList = true;
          this.nzShowButton = true;
          this.nzWithCredentials = false;
          this.nzIconRender = null;
          this.nzFileListRender = null;
          this.nzChange = new core.EventEmitter();
          this.nzFileListChange = new core.EventEmitter();
          this.onStart = function (file) {
              if (!_this.nzFileList) {
                  _this.nzFileList = [];
              }
              var targetItem = _this.fileToObject(file);
              targetItem.status = 'uploading';
              _this.nzFileList = _this.nzFileList.concat(targetItem);
              _this.nzFileListChange.emit(_this.nzFileList);
              _this.nzChange.emit({ file: targetItem, fileList: _this.nzFileList, type: 'start' });
              _this.detectChangesList();
          };
          this.onProgress = function (e, file) {
              var fileList = _this.nzFileList;
              var targetItem = _this.getFileItem(file, fileList);
              targetItem.percent = e.percent;
              _this.nzChange.emit({
                  event: e,
                  file: Object.assign({}, targetItem),
                  fileList: _this.nzFileList,
                  type: 'progress'
              });
              _this.detectChangesList();
          };
          this.onSuccess = function (res, file) {
              var fileList = _this.nzFileList;
              var targetItem = _this.getFileItem(file, fileList);
              targetItem.status = 'done';
              targetItem.response = res;
              _this.nzChange.emit({
                  file: Object.assign({}, targetItem),
                  fileList: fileList,
                  type: 'success'
              });
              _this.detectChangesList();
          };
          this.onError = function (err, file) {
              var fileList = _this.nzFileList;
              var targetItem = _this.getFileItem(file, fileList);
              targetItem.error = err;
              targetItem.status = 'error';
              _this.nzChange.emit({
                  file: Object.assign({}, targetItem),
                  fileList: fileList,
                  type: 'error'
              });
              _this.detectChangesList();
          };
          this.onRemove = function (file) {
              _this.uploadComp.abort(file);
              file.status = 'removed';
              var fnRes = typeof _this.nzRemove === 'function' ? _this.nzRemove(file) : _this.nzRemove == null ? true : _this.nzRemove;
              (fnRes instanceof rxjs.Observable ? fnRes : rxjs.of(fnRes)).pipe(operators.filter(function (res) { return res; })).subscribe(function () {
                  _this.nzFileList = _this.removeFileItem(file, _this.nzFileList);
                  _this.nzChange.emit({
                      file: file,
                      fileList: _this.nzFileList,
                      type: 'removed'
                  });
                  _this.nzFileListChange.emit(_this.nzFileList);
                  _this.cdr.detectChanges();
              });
          };
          // #endregion
          // #region styles
          this.prefixCls = 'ant-upload';
          this.classList = [];
      }
      Object.defineProperty(NzUploadComponent.prototype, "nzShowUploadList", {
          get: function () {
              return this._showUploadList;
          },
          set: function (value) {
              this._showUploadList = typeof value === 'boolean' ? util.toBoolean(value) : value;
          },
          enumerable: false,
          configurable: true
      });
      NzUploadComponent.prototype.zipOptions = function () {
          var _this = this;
          if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
              this.nzShowUploadList = {
                  showPreviewIcon: true,
                  showRemoveIcon: true,
                  showDownloadIcon: true
              };
          }
          // filters
          var filters = this.nzFilter.slice();
          if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
              filters.push({
                  name: 'limit',
                  fn: function (fileList) { return fileList.slice(-_this.nzLimit); }
              });
          }
          if (this.nzSize > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
              filters.push({
                  name: 'size',
                  fn: function (fileList) { return fileList.filter(function (w) { return w.size / 1024 <= _this.nzSize; }); }
              });
          }
          if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
              var types_1 = this.nzFileType.split(',');
              filters.push({
                  name: 'type',
                  fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
              });
          }
          this._btnOptions = {
              disabled: this.nzDisabled,
              accept: this.nzAccept,
              action: this.nzAction,
              directory: this.nzDirectory,
              openFileDialogOnClick: this.nzOpenFileDialogOnClick,
              beforeUpload: this.nzBeforeUpload,
              customRequest: this.nzCustomRequest,
              data: this.nzData,
              headers: this.nzHeaders,
              name: this.nzName,
              multiple: this.nzMultiple,
              withCredentials: this.nzWithCredentials,
              filters: filters,
              transformFile: this.nzTransformFile,
              onStart: this.onStart,
              onProgress: this.onProgress,
              onSuccess: this.onSuccess,
              onError: this.onError
          };
          return this;
      };
      // #region upload
      NzUploadComponent.prototype.fileToObject = function (file) {
          return {
              lastModified: file.lastModified,
              lastModifiedDate: file.lastModifiedDate,
              name: file.filename || file.name,
              size: file.size,
              type: file.type,
              uid: file.uid,
              response: file.response,
              error: file.error,
              percent: 0,
              originFileObj: file
          };
      };
      NzUploadComponent.prototype.getFileItem = function (file, fileList) {
          return fileList.filter(function (item) { return item.uid === file.uid; })[0];
      };
      NzUploadComponent.prototype.removeFileItem = function (file, fileList) {
          return fileList.filter(function (item) { return item.uid !== file.uid; });
      };
      // skip safari bug
      NzUploadComponent.prototype.fileDrop = function (e) {
          if (e.type === this.dragState) {
              return;
          }
          this.dragState = e.type;
          this.setClassMap();
      };
      // #endregion
      // #region list
      NzUploadComponent.prototype.detectChangesList = function () {
          var _a;
          this.cdr.detectChanges();
          (_a = this.listComp) === null || _a === void 0 ? void 0 : _a.detectChanges();
      };
      NzUploadComponent.prototype.setClassMap = function () {
          var subCls = [];
          if (this.nzType === 'drag') {
              if (this.nzFileList.some(function (file) { return file.status === 'uploading'; })) {
                  subCls.push(this.prefixCls + "-drag-uploading");
              }
              if (this.dragState === 'dragover') {
                  subCls.push(this.prefixCls + "-drag-hover");
              }
          }
          else {
              subCls = [this.prefixCls + "-select-" + this.nzListType];
          }
          this.classList = __spread([
              this.prefixCls,
              this.prefixCls + "-" + this.nzType
          ], subCls, [
              (this.nzDisabled && this.prefixCls + "-disabled") || '',
              (this.dir === 'rtl' && this.prefixCls + "-rtl") || ''
          ]).filter(function (item) { return !!item; });
          this.cdr.detectChanges();
      };
      // #endregion
      NzUploadComponent.prototype.ngOnInit = function () {
          var _this = this;
          var _a;
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;
              _this.setClassMap();
              _this.cdr.detectChanges();
          });
          this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
              _this.locale = _this.i18n.getLocaleData('Upload');
              _this.detectChangesList();
          });
      };
      NzUploadComponent.prototype.ngOnChanges = function () {
          this.zipOptions().setClassMap();
      };
      NzUploadComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      return NzUploadComponent;
  }());
  NzUploadComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'nz-upload',
                  exportAs: 'nzUpload',
                  template: "<ng-template #list>\n  <nz-upload-list\n    *ngIf=\"locale && !nzFileListRender\"\n    #listComp\n    [style.display]=\"nzShowUploadList ? '' : 'none'\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList || []\"\n    [icons]=\"$any(nzShowUploadList)\"\n    [iconRender]=\"nzIconRender\"\n    [previewFile]=\"nzPreviewFile\"\n    [previewIsImage]=\"nzPreviewIsImage\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"\n    [onDownload]=\"nzDownload\"\n    [dir]=\"dir\"\n  ></nz-upload-list>\n  <ng-container *ngIf=\"nzFileListRender\">\n    <ng-container\n      *ngTemplateOutlet=\"nzFileListRender; context: { $implicit: nzFileList }\"\n    ></ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div\n    [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\"\n  >\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\" class=\"ant-upload-btn\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>\n",
                  preserveWhitespaces: false,
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  host: {
                      '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
                  }
              },] }
  ];
  NzUploadComponent.ctorParameters = function () { return [
      { type: core.ChangeDetectorRef },
      { type: i18n.NzI18nService },
      { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
  ]; };
  NzUploadComponent.propDecorators = {
      uploadComp: [{ type: core.ViewChild, args: ['uploadComp', { static: false },] }],
      listComp: [{ type: core.ViewChild, args: ['listComp', { static: false },] }],
      nzType: [{ type: core.Input }],
      nzLimit: [{ type: core.Input }],
      nzSize: [{ type: core.Input }],
      nzFileType: [{ type: core.Input }],
      nzAccept: [{ type: core.Input }],
      nzAction: [{ type: core.Input }],
      nzDirectory: [{ type: core.Input }],
      nzOpenFileDialogOnClick: [{ type: core.Input }],
      nzBeforeUpload: [{ type: core.Input }],
      nzCustomRequest: [{ type: core.Input }],
      nzData: [{ type: core.Input }],
      nzFilter: [{ type: core.Input }],
      nzFileList: [{ type: core.Input }],
      nzDisabled: [{ type: core.Input }],
      nzHeaders: [{ type: core.Input }],
      nzListType: [{ type: core.Input }],
      nzMultiple: [{ type: core.Input }],
      nzName: [{ type: core.Input }],
      nzShowUploadList: [{ type: core.Input }],
      nzShowButton: [{ type: core.Input }],
      nzWithCredentials: [{ type: core.Input }],
      nzRemove: [{ type: core.Input }],
      nzPreview: [{ type: core.Input }],
      nzPreviewFile: [{ type: core.Input }],
      nzPreviewIsImage: [{ type: core.Input }],
      nzTransformFile: [{ type: core.Input }],
      nzDownload: [{ type: core.Input }],
      nzIconRender: [{ type: core.Input }],
      nzFileListRender: [{ type: core.Input }],
      nzChange: [{ type: core.Output }],
      nzFileListChange: [{ type: core.Output }]
  };
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzLimit", void 0);
  __decorate([
      util.InputNumber(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzSize", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzDirectory", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzDisabled", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzMultiple", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzShowButton", void 0);
  __decorate([
      util.InputBoolean(),
      __metadata("design:type", Object)
  ], NzUploadComponent.prototype, "nzWithCredentials", void 0);

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzUploadModule = /** @class */ (function () {
      function NzUploadModule() {
      }
      return NzUploadModule;
  }());
  NzUploadModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      bidi.BidiModule,
                      common.CommonModule,
                      forms.FormsModule,
                      platform.PlatformModule,
                      tooltip.NzToolTipModule,
                      progress.NzProgressModule,
                      i18n.NzI18nModule,
                      icon.NzIconModule,
                      button.NzButtonModule
                  ],
                  declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                  exports: [NzUploadComponent]
              },] }
  ];

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NzUploadBtnComponent = NzUploadBtnComponent;
  exports.NzUploadComponent = NzUploadComponent;
  exports.NzUploadListComponent = NzUploadListComponent;
  exports.NzUploadModule = NzUploadModule;
  exports.ɵ0 = ɵ0;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-upload.umd.js.map
