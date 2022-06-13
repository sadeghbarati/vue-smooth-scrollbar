import { ref, onMounted, isRef, onUnmounted } from "vue-demi";
/*! *****************************************************************************
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
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (b2.hasOwnProperty(p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
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
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var fails$g = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$f = fails$g;
var functionBindNative = !fails$f(function() {
  var test2 = function() {
  }.bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var bind$5 = FunctionPrototype$1.bind;
var call$a = FunctionPrototype$1.call;
var uncurryThis$j = NATIVE_BIND$2 && bind$5.bind(call$a, call$a);
var functionUncurryThis = NATIVE_BIND$2 ? function(fn) {
  return fn && uncurryThis$j(fn);
} : function(fn) {
  return fn && function() {
    return call$a.apply(fn, arguments);
  };
};
var uncurryThis$i = functionUncurryThis;
var toString$5 = uncurryThis$i({}.toString);
var stringSlice$1 = uncurryThis$i("".slice);
var classofRaw$1 = function(it) {
  return stringSlice$1(toString$5(it), 8, -1);
};
var uncurryThis$h = functionUncurryThis;
var fails$e = fails$g;
var classof$8 = classofRaw$1;
var $Object$4 = Object;
var split = uncurryThis$h("".split);
var indexedObject = fails$e(function() {
  return !$Object$4("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$8(it) == "String" ? split(it, "") : $Object$4(it);
} : $Object$4;
var $TypeError$9 = TypeError;
var requireObjectCoercible$3 = function(it) {
  if (it == void 0)
    throw $TypeError$9("Can't call method on " + it);
  return it;
};
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;
var toIndexedObject$6 = function(it) {
  return IndexedObject$2(requireObjectCoercible$2(it));
};
var check = function(it) {
  return it && it.Math == Math && it;
};
var global$d = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
  return this;
}() || Function("return this")();
var shared$3 = { exports: {} };
var global$c = global$d;
var defineProperty$7 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$7(global$c, key, { value, configurable: true, writable: true });
  } catch (error) {
    global$c[key] = value;
  }
  return value;
};
var global$b = global$d;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = global$b[SHARED] || defineGlobalProperty$2(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$3.exports = function(key, value) {
  return store$2[key] || (store$2[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: "3.22.8",
  mode: "global",
  copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var requireObjectCoercible$1 = requireObjectCoercible$3;
var $Object$3 = Object;
var toObject$5 = function(argument) {
  return $Object$3(requireObjectCoercible$1(argument));
};
var uncurryThis$g = functionUncurryThis;
var toObject$4 = toObject$5;
var hasOwnProperty$1 = uncurryThis$g({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$4(it), key);
};
var uncurryThis$f = functionUncurryThis;
var id$2 = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$f(1 .toString);
var uid$3 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$4(++id$2 + postfix, 36);
};
var isCallable$i = function(argument) {
  return typeof argument == "function";
};
var global$a = global$d;
var isCallable$h = isCallable$i;
var aFunction = function(argument) {
  return isCallable$h(argument) ? argument : void 0;
};
var getBuiltIn$6 = function(namespace, method) {
  return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
};
var getBuiltIn$5 = getBuiltIn$6;
var engineUserAgent = getBuiltIn$5("navigator", "userAgent") || "";
var global$9 = global$d;
var userAgent = engineUserAgent;
var process = global$9.process;
var Deno = global$9.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match)
      version = +match[1];
  }
}
var engineV8Version = version;
var V8_VERSION = engineV8Version;
var fails$d = fails$g;
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$d(function() {
  var symbol = Symbol();
  return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var global$8 = global$d;
var shared$2 = shared$3.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2("wks");
var Symbol$3 = global$8.Symbol;
var symbolFor = Symbol$3 && Symbol$3["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$2;
var wellKnownSymbol$c = function(name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
    var description = "Symbol." + name;
    if (NATIVE_SYMBOL && hasOwn$a(Symbol$3, name)) {
      WellKnownSymbolsStore[name] = Symbol$3[name];
    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }
  return WellKnownSymbolsStore[name];
};
var isCallable$g = isCallable$i;
var isObject$d = function(it) {
  return typeof it == "object" ? it !== null : isCallable$g(it);
};
var isObject$c = isObject$d;
var $String$3 = String;
var $TypeError$8 = TypeError;
var anObject$a = function(argument) {
  if (isObject$c(argument))
    return argument;
  throw $TypeError$8($String$3(argument) + " is not an object");
};
var objectDefineProperties = {};
var fails$c = fails$g;
var descriptors = !fails$c(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var DESCRIPTORS$b = descriptors;
var fails$b = fails$g;
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$b(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype != 42;
});
var objectDefineProperty = {};
var global$7 = global$d;
var isObject$b = isObject$d;
var document$1 = global$7.document;
var EXISTS$1 = isObject$b(document$1) && isObject$b(document$1.createElement);
var documentCreateElement$1 = function(it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};
var DESCRIPTORS$a = descriptors;
var fails$a = fails$g;
var createElement = documentCreateElement$1;
var ie8DomDefine = !DESCRIPTORS$a && !fails$a(function() {
  return Object.defineProperty(createElement("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
});
var NATIVE_BIND$1 = functionBindNative;
var call$9 = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$9.bind(call$9) : function() {
  return call$9.apply(call$9, arguments);
};
var uncurryThis$e = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);
var getBuiltIn$4 = getBuiltIn$6;
var isCallable$f = isCallable$i;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var $Object$2 = Object;
var isSymbol$3 = USE_SYMBOL_AS_UID ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol = getBuiltIn$4("Symbol");
  return isCallable$f($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
};
var $String$2 = String;
var tryToString$3 = function(argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$e = isCallable$i;
var tryToString$2 = tryToString$3;
var $TypeError$7 = TypeError;
var aCallable$3 = function(argument) {
  if (isCallable$e(argument))
    return argument;
  throw $TypeError$7(tryToString$2(argument) + " is not a function");
};
var aCallable$2 = aCallable$3;
var getMethod$3 = function(V, P) {
  var func = V[P];
  return func == null ? void 0 : aCallable$2(func);
};
var call$8 = functionCall;
var isCallable$d = isCallable$i;
var isObject$a = isObject$d;
var $TypeError$6 = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$d(fn = input.toString) && !isObject$a(val = call$8(fn, input)))
    return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$a(val = call$8(fn, input)))
    return val;
  if (pref !== "string" && isCallable$d(fn = input.toString) && !isObject$a(val = call$8(fn, input)))
    return val;
  throw $TypeError$6("Can't convert object to primitive value");
};
var call$7 = functionCall;
var isObject$9 = isObject$d;
var isSymbol$2 = isSymbol$3;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$b = wellKnownSymbol$c;
var $TypeError$5 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$b("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$9(input) || isSymbol$2(input))
    return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0)
      pref = "default";
    result = call$7(exoticToPrim, input, pref);
    if (!isObject$9(result) || isSymbol$2(result))
      return result;
    throw $TypeError$5("Can't convert object to primitive value");
  }
  if (pref === void 0)
    pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol$1 = isSymbol$3;
var toPropertyKey$3 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol$1(key) ? key : key + "";
};
var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$9 = anObject$a;
var toPropertyKey$2 = toPropertyKey$3;
var $TypeError$4 = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$2(P);
  anObject$9(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty2(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$2(P);
  anObject$9(Attributes);
  if (IE8_DOM_DEFINE$1)
    try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw $TypeError$4("Accessors not supported");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var ceil = Math.ceil;
var floor = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$3 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max$1 = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$2 = function(index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};
var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min = Math.min;
var toLength$1 = function(argument) {
  return argument > 0 ? min(toIntegerOrInfinity$1(argument), 9007199254740991) : 0;
};
var toLength = toLength$1;
var lengthOfArrayLike$5 = function(obj) {
  return toLength(obj.length);
};
var toIndexedObject$5 = toIndexedObject$6;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;
var createMethod$2 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        if (value != value)
          return true;
      }
    else
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el)
          return IS_INCLUDES || index || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  includes: createMethod$2(true),
  indexOf: createMethod$2(false)
};
var hiddenKeys$5 = {};
var uncurryThis$d = functionUncurryThis;
var hasOwn$9 = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$6;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$4 = hiddenKeys$5;
var push$1 = uncurryThis$d([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    !hasOwn$9(hiddenKeys$4, key) && hasOwn$9(O, key) && push$1(result, key);
  while (names.length > i)
    if (hasOwn$9(O, key = names[i++])) {
      ~indexOf(result, key) || push$1(result, key);
    }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};
var DESCRIPTORS$8 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$4 = objectDefineProperty;
var anObject$8 = anObject$a;
var toIndexedObject$3 = toIndexedObject$6;
var objectKeys$1 = objectKeys$2;
objectDefineProperties.f = DESCRIPTORS$8 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$8(O);
  var props = toIndexedObject$3(Properties);
  var keys3 = objectKeys$1(Properties);
  var length = keys3.length;
  var index = 0;
  var key;
  while (length > index)
    definePropertyModule$4.f(O, key = keys3[index++], props[key]);
  return O;
};
var getBuiltIn$3 = getBuiltIn$6;
var html$1 = getBuiltIn$3("document", "documentElement");
var shared$1 = shared$3.exports;
var uid$1 = uid$3;
var keys2 = shared$1("keys");
var sharedKey$3 = function(key) {
  return keys2[key] || (keys2[key] = uid$1(key));
};
var anObject$7 = anObject$a;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$3 = hiddenKeys$5;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey$2 = sharedKey$3;
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$2("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys$1.length;
  while (length--)
    delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};
hiddenKeys$3[IE_PROTO$1] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$7(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO$1] = O;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
};
var wellKnownSymbol$a = wellKnownSymbol$c;
var create$2 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$a("unscopables");
var ArrayPrototype$1 = Array.prototype;
if (ArrayPrototype$1[UNSCOPABLES] == void 0) {
  defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}
var addToUnscopables$1 = function(key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};
var iterators = {};
var uncurryThis$c = functionUncurryThis;
var isCallable$c = isCallable$i;
var store$1 = sharedStore;
var functionToString = uncurryThis$c(Function.toString);
if (!isCallable$c(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString(it);
  };
}
var inspectSource$3 = store$1.inspectSource;
var global$6 = global$d;
var isCallable$b = isCallable$i;
var inspectSource$2 = inspectSource$3;
var WeakMap$2 = global$6.WeakMap;
var nativeWeakMap = isCallable$b(WeakMap$2) && /native code/.test(inspectSource$2(WeakMap$2));
var createPropertyDescriptor$4 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var DESCRIPTORS$7 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var createNonEnumerableProperty$4 = DESCRIPTORS$7 ? function(object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var NATIVE_WEAK_MAP$1 = nativeWeakMap;
var global$5 = global$d;
var uncurryThis$b = functionUncurryThis;
var isObject$8 = isObject$d;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$8 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$2 = hiddenKeys$5;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$1 = global$5.TypeError;
var WeakMap$1 = global$5.WeakMap;
var set, get, has;
var enforce = function(it) {
  return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$8(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP$1 || shared.state) {
  var store = shared.state || (shared.state = new WeakMap$1());
  var wmget = uncurryThis$b(store.get);
  var wmhas = uncurryThis$b(store.has);
  var wmset = uncurryThis$b(store.set);
  set = function(it, metadata) {
    if (wmhas(store, it))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function(it) {
    return wmget(store, it) || {};
  };
  has = function(it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1("state");
  hiddenKeys$2[STATE] = true;
  set = function(it, metadata) {
    if (hasOwn$8(it, STATE))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return hasOwn$8(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$8(it, STATE);
  };
}
var internalState = {
  set,
  get,
  has,
  enforce,
  getterFor
};
var objectGetOwnPropertyDescriptor = {};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var DESCRIPTORS$6 = descriptors;
var call$6 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;
var toIndexedObject$2 = toIndexedObject$6;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE)
    try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
  if (hasOwn$7(O, P))
    return createPropertyDescriptor$2(!call$6(propertyIsEnumerableModule$1.f, O, P), O[P]);
};
var makeBuiltIn$2 = { exports: {} };
var DESCRIPTORS$5 = descriptors;
var hasOwn$6 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype;
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$6(FunctionPrototype, "name");
var PROPER = EXISTS && function something() {
}.name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || DESCRIPTORS$5 && getDescriptor(FunctionPrototype, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var fails$9 = fails$g;
var isCallable$a = isCallable$i;
var hasOwn$5 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$3;
var InternalStateModule$4 = internalState;
var enforceInternalState$1 = InternalStateModule$4.enforce;
var getInternalState$2 = InternalStateModule$4.get;
var defineProperty$5 = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$9(function() {
  return defineProperty$5(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$1 = makeBuiltIn$2.exports = function(value, name, options) {
  if (String(name).slice(0, 7) === "Symbol(") {
    name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (options && options.getter)
    name = "get " + name;
  if (options && options.setter)
    name = "set " + name;
  if (!hasOwn$5(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    defineProperty$5(value, "name", { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, "arity") && value.length !== options.arity) {
    defineProperty$5(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$5(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$4)
        defineProperty$5(value, "prototype", { writable: false });
    } else if (value.prototype)
      value.prototype = void 0;
  } catch (error) {
  }
  var state = enforceInternalState$1(value);
  if (!hasOwn$5(state, "source")) {
    state.source = TEMPLATE.join(typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$a(this) && getInternalState$2(this).source || inspectSource$1(this);
}, "toString");
var isCallable$9 = isCallable$i;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$6 = function(O, key, value, options) {
  if (!options)
    options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$9(value))
    makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple)
      O[key] = value;
    else
      defineGlobalProperty$1(key, value);
  } else {
    if (!options.unsafe)
      delete O[key];
    else if (O[key])
      simple = true;
    if (simple)
      O[key] = value;
    else
      createNonEnumerableProperty$2(O, key, value);
  }
  return O;
};
var objectGetOwnPropertyNames = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$1);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$2 = getBuiltIn$6;
var uncurryThis$a = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$6 = anObject$a;
var concat$1 = uncurryThis$a([].concat);
var ownKeys$1 = getBuiltIn$2("Reflect", "ownKeys") || function ownKeys(it) {
  var keys3 = getOwnPropertyNamesModule$1.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys3, getOwnPropertySymbols(it)) : keys3;
};
var hasOwn$4 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys3 = ownKeys2(source);
  var defineProperty4 = definePropertyModule$2.f;
  var getOwnPropertyDescriptor3 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys3.length; i++) {
    var key = keys3[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty4(target, key, getOwnPropertyDescriptor3(source, key));
    }
  }
};
var fails$8 = fails$g;
var isCallable$8 = isCallable$i;
var replacement = /#|\.prototype\./;
var isForced$2 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$8(detection) ? fails$8(detection) : !!detection;
};
var normalize = isForced$2.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = "N";
var POLYFILL = isForced$2.POLYFILL = "P";
var isForced_1 = isForced$2;
var global$4 = global$d;
var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn$5 = defineBuiltIn$6;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$4;
  } else if (STATIC) {
    target = global$4[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$4[TARGET] || {}).prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else
        targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty)
          continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$1(sourceProperty, "sham", true);
      }
      defineBuiltIn$5(target, key, sourceProperty, options);
    }
};
var fails$7 = fails$g;
var correctPrototypeGetter = !fails$7(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$3 = hasOwnProperty_1;
var isCallable$7 = isCallable$i;
var toObject$3 = toObject$5;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function(O) {
  var object = toObject$3(O);
  if (hasOwn$3(object, IE_PROTO))
    return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$7(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object$1 ? ObjectPrototype : null;
};
var fails$6 = fails$g;
var isCallable$6 = isCallable$i;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$6;
var wellKnownSymbol$9 = wellKnownSymbol$c;
var ITERATOR$4 = wellKnownSymbol$9("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator))
    BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == void 0 || fails$6(function() {
  var test2 = {};
  return IteratorPrototype$2[ITERATOR$4].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE)
  IteratorPrototype$2 = {};
if (!isCallable$6(IteratorPrototype$2[ITERATOR$4])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$4, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var defineProperty$4 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$8 = wellKnownSymbol$c;
var TO_STRING_TAG$2 = wellKnownSymbol$8("toStringTag");
var setToStringTag$3 = function(target, TAG, STATIC) {
  if (target && !STATIC)
    target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$2)) {
    defineProperty$4(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;
var returnThis$1 = function() {
  return this;
};
var createIteratorConstructor$1 = function(IteratorConstructor, NAME, next2, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME + " Iterator";
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next2) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG2, false);
  Iterators$4[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var isCallable$5 = isCallable$i;
var $String$1 = String;
var $TypeError$3 = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (typeof argument == "object" || isCallable$5(argument))
    return argument;
  throw $TypeError$3("Can't set " + $String$1(argument) + " as a prototype");
};
var uncurryThis$9 = functionUncurryThis;
var anObject$5 = anObject$a;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThis$9(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    anObject$5(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER)
      setter(O, proto);
    else
      O.__proto__ = proto;
    return O;
  };
}() : void 0);
var $$4 = _export;
var call$5 = functionCall;
var FunctionName = functionName;
var isCallable$4 = isCallable$i;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var defineBuiltIn$3 = defineBuiltIn$6;
var wellKnownSymbol$7 = wellKnownSymbol$c;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol$7("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var defineIterator$3 = function(Iterable, NAME, IteratorConstructor, next2, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next2);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator)
      return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys3() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values2() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$3])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$3, returnThis);
        }
      }
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG2, true);
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, "name", VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values2() {
        return call$5(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED)
      for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      $$4({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;
  return methods;
};
var toIndexedObject$1 = toIndexedObject$6;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$3 = internalState;
var defineProperty$3 = objectDefineProperty.f;
var defineIterator$2 = defineIterator$3;
var DESCRIPTORS$3 = descriptors;
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$1 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);
defineIterator$2(Array, "Array", function(iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated),
    index: 0,
    kind
  });
}, function() {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = void 0;
    return { value: void 0, done: true };
  }
  if (kind == "keys")
    return { value: index, done: false };
  if (kind == "values")
    return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, "values");
var values = Iterators$2.Arguments = Iterators$2.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
if (DESCRIPTORS$3 && values.name !== "values")
  try {
    defineProperty$3(values, "name", { value: "values" });
  } catch (error) {
  }
var internalMetadata = { exports: {} };
var objectGetOwnPropertyNamesExternal = {};
var toPropertyKey = toPropertyKey$3;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$4;
var createProperty$2 = function(object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object)
    definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));
  else
    object[propertyKey] = value;
};
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var createProperty$1 = createProperty$2;
var $Array$2 = Array;
var max = Math.max;
var arraySliceSimple = function(O, start, end) {
  var length = lengthOfArrayLike$3(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
  var result = $Array$2(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++)
    createProperty$1(result, n, O[k]);
  result.length = n;
  return result;
};
var classof$7 = classofRaw$1;
var toIndexedObject = toIndexedObject$6;
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
var arraySlice = arraySliceSimple;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
  return windowNames && classof$7(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};
var fails$5 = fails$g;
var arrayBufferNonExtensible = fails$5(function() {
  if (typeof ArrayBuffer == "function") {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer))
      Object.defineProperty(buffer, "a", { value: 8 });
  }
});
var fails$4 = fails$g;
var isObject$7 = isObject$d;
var classof$6 = classofRaw$1;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails$4(function() {
  $isExtensible(1);
});
var objectIsExtensible = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
  if (!isObject$7(it))
    return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$6(it) == "ArrayBuffer")
    return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;
var fails$3 = fails$g;
var freezing = !fails$3(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var $$3 = _export;
var uncurryThis$8 = functionUncurryThis;
var hiddenKeys = hiddenKeys$5;
var isObject$6 = isObject$d;
var hasOwn$1 = hasOwnProperty_1;
var defineProperty$2 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible$1 = objectIsExtensible;
var uid = uid$3;
var FREEZING = freezing;
var REQUIRED = false;
var METADATA = uid("meta");
var id$1 = 0;
var setMetadata = function(it) {
  defineProperty$2(it, METADATA, { value: {
    objectID: "O" + id$1++,
    weakData: {}
  } });
};
var fastKey$1 = function(it, create3) {
  if (!isObject$6(it))
    return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!hasOwn$1(it, METADATA)) {
    if (!isExtensible$1(it))
      return "F";
    if (!create3)
      return "E";
    setMetadata(it);
  }
  return it[METADATA].objectID;
};
var getWeakData$1 = function(it, create3) {
  if (!hasOwn$1(it, METADATA)) {
    if (!isExtensible$1(it))
      return true;
    if (!create3)
      return false;
    setMetadata(it);
  }
  return it[METADATA].weakData;
};
var onFreeze = function(it) {
  if (FREEZING && REQUIRED && isExtensible$1(it) && !hasOwn$1(it, METADATA))
    setMetadata(it);
  return it;
};
var enable = function() {
  meta.enable = function() {
  };
  REQUIRED = true;
  var getOwnPropertyNames3 = getOwnPropertyNamesModule.f;
  var splice2 = uncurryThis$8([].splice);
  var test2 = {};
  test2[METADATA] = 1;
  if (getOwnPropertyNames3(test2).length) {
    getOwnPropertyNamesModule.f = function(it) {
      var result = getOwnPropertyNames3(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice2(result, i, 1);
          break;
        }
      }
      return result;
    };
    $$3({ target: "Object", stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta = internalMetadata.exports = {
  enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData$1,
  onFreeze
};
hiddenKeys[METADATA] = true;
var uncurryThis$7 = functionUncurryThis;
var aCallable$1 = aCallable$3;
var NATIVE_BIND = functionBindNative;
var bind$4 = uncurryThis$7(uncurryThis$7.bind);
var functionBindContext = function(fn, that) {
  aCallable$1(fn);
  return that === void 0 ? fn : NATIVE_BIND ? bind$4(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var wellKnownSymbol$6 = wellKnownSymbol$c;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$6("iterator");
var ArrayPrototype = Array.prototype;
var isArrayIteratorMethod$2 = function(it) {
  return it !== void 0 && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};
var wellKnownSymbol$5 = wellKnownSymbol$c;
var TO_STRING_TAG$1 = wellKnownSymbol$5("toStringTag");
var test = {};
test[TO_STRING_TAG$1] = "z";
var toStringTagSupport = String(test) === "[object z]";
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$3 = isCallable$i;
var classofRaw = classofRaw$1;
var wellKnownSymbol$4 = wellKnownSymbol$c;
var TO_STRING_TAG = wellKnownSymbol$4("toStringTag");
var $Object = Object;
var CORRECT_ARGUMENTS = classofRaw(function() {
  return arguments;
}()) == "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable$3(O.callee) ? "Arguments" : result;
};
var classof$4 = classof$5;
var getMethod$1 = getMethod$3;
var Iterators = iterators;
var wellKnownSymbol$3 = wellKnownSymbol$c;
var ITERATOR$1 = wellKnownSymbol$3("iterator");
var getIteratorMethod$3 = function(it) {
  if (it != void 0)
    return getMethod$1(it, ITERATOR$1) || getMethod$1(it, "@@iterator") || Iterators[classof$4(it)];
};
var call$4 = functionCall;
var aCallable = aCallable$3;
var anObject$4 = anObject$a;
var tryToString$1 = tryToString$3;
var getIteratorMethod$2 = getIteratorMethod$3;
var $TypeError$2 = TypeError;
var getIterator$2 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable(iteratorMethod))
    return anObject$4(call$4(iteratorMethod, argument));
  throw $TypeError$2(tryToString$1(argument) + " is not iterable");
};
var call$3 = functionCall;
var anObject$3 = anObject$a;
var getMethod = getMethod$3;
var iteratorClose$2 = function(iterator, kind, value) {
  var innerResult, innerError;
  anObject$3(iterator);
  try {
    innerResult = getMethod(iterator, "return");
    if (!innerResult) {
      if (kind === "throw")
        throw value;
      return value;
    }
    innerResult = call$3(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw")
    throw value;
  if (innerError)
    throw innerResult;
  anObject$3(innerResult);
  return value;
};
var bind$3 = functionBindContext;
var call$2 = functionCall;
var anObject$2 = anObject$a;
var tryToString = tryToString$3;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var iteratorClose$1 = iteratorClose$2;
var $TypeError$1 = TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$3 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index, length, result, next2, step;
  var stop = function(condition) {
    if (iterator)
      iteratorClose$1(iterator, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$2(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$1(iterable);
    if (!iterFn)
      throw $TypeError$1(tryToString(iterable) + " is not iterable");
    if (isArrayIteratorMethod$1(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    }
    iterator = getIterator$1(iterable, iterFn);
  }
  next2 = iterator.next;
  while (!(step = call$2(next2, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$1(iterator, "throw", error);
    }
    if (typeof result == "object" && result && isPrototypeOf$1(ResultPrototype, result))
      return result;
  }
  return new Result(false);
};
var isPrototypeOf = objectIsPrototypeOf;
var $TypeError = TypeError;
var anInstance$3 = function(it, Prototype) {
  if (isPrototypeOf(Prototype, it))
    return it;
  throw $TypeError("Incorrect invocation");
};
var wellKnownSymbol$2 = wellKnownSymbol$c;
var ITERATOR = wellKnownSymbol$2("iterator");
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var checkCorrectnessOfIteration$2 = function(exec2, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING)
    return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var isCallable$2 = isCallable$i;
var isObject$5 = isObject$d;
var setPrototypeOf = objectSetPrototypeOf;
var inheritIfRequired$1 = function($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (setPrototypeOf && isCallable$2(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$5(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
    setPrototypeOf($this, NewTargetPrototype);
  return $this;
};
var $$2 = _export;
var global$3 = global$d;
var uncurryThis$6 = functionUncurryThis;
var isForced = isForced_1;
var defineBuiltIn$2 = defineBuiltIn$6;
var InternalMetadataModule$1 = internalMetadata.exports;
var iterate$2 = iterate$3;
var anInstance$2 = anInstance$3;
var isCallable$1 = isCallable$i;
var isObject$4 = isObject$d;
var fails$2 = fails$g;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
var setToStringTag = setToStringTag$3;
var inheritIfRequired = inheritIfRequired$1;
var collection$3 = function(CONSTRUCTOR_NAME, wrapper2, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
  var ADDER = IS_MAP ? "set" : "add";
  var NativeConstructor = global$3[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};
  var fixMethod = function(KEY) {
    var uncurriedNativeMethod = uncurryThis$6(NativePrototype[KEY]);
    defineBuiltIn$2(NativePrototype, KEY, KEY == "add" ? function add(value) {
      uncurriedNativeMethod(this, value === 0 ? 0 : value);
      return this;
    } : KEY == "delete" ? function(key) {
      return IS_WEAK && !isObject$4(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
    } : KEY == "get" ? function get2(key) {
      return IS_WEAK && !isObject$4(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
    } : KEY == "has" ? function has2(key) {
      return IS_WEAK && !isObject$4(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
    } : function set2(key, value) {
      uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
      return this;
    });
  };
  var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable$1(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$2(function() {
    new NativeConstructor().entries().next();
  })));
  if (REPLACE) {
    Constructor = common.getConstructor(wrapper2, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule$1.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    var THROWS_ON_PRIMITIVES = fails$2(function() {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function(iterable) {
      new NativeConstructor(iterable);
    });
    var BUGGY_ZERO = !IS_WEAK && fails$2(function() {
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--)
        $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper2(function(dummy, iterable) {
        anInstance$2(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != void 0)
          iterate$2(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod("delete");
      fixMethod("has");
      IS_MAP && fixMethod("get");
    }
    if (BUGGY_ZERO || HASNT_CHAINING)
      fixMethod(ADDER);
    if (IS_WEAK && NativePrototype.clear)
      delete NativePrototype.clear;
  }
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$2({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);
  setToStringTag(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK)
    common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};
var defineBuiltIn$1 = defineBuiltIn$6;
var defineBuiltIns$3 = function(target, src, options) {
  for (var key in src)
    defineBuiltIn$1(target, key, src[key], options);
  return target;
};
var getBuiltIn$1 = getBuiltIn$6;
var definePropertyModule = objectDefineProperty;
var wellKnownSymbol$1 = wellKnownSymbol$c;
var DESCRIPTORS$2 = descriptors;
var SPECIES$1 = wellKnownSymbol$1("species");
var setSpecies$1 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$1(CONSTRUCTOR_NAME);
  var defineProperty4 = definePropertyModule.f;
  if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES$1]) {
    defineProperty4(Constructor, SPECIES$1, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var defineProperty$1 = objectDefineProperty.f;
var create2 = objectCreate;
var defineBuiltIns$2 = defineBuiltIns$3;
var bind$2 = functionBindContext;
var anInstance$1 = anInstance$3;
var iterate$1 = iterate$3;
var defineIterator$1 = defineIterator$3;
var setSpecies = setSpecies$1;
var DESCRIPTORS$1 = descriptors;
var fastKey = internalMetadata.exports.fastKey;
var InternalStateModule$2 = internalState;
var setInternalState$2 = InternalStateModule$2.set;
var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
var collectionStrong$2 = {
  getConstructor: function(wrapper2, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper2(function(that, iterable) {
      anInstance$1(that, Prototype);
      setInternalState$2(that, {
        type: CONSTRUCTOR_NAME,
        index: create2(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (!DESCRIPTORS$1)
        that.size = 0;
      if (iterable != void 0)
        iterate$1(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var entry = getEntry(that, key);
      var previous, index;
      if (entry) {
        entry.value = value;
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key,
          value,
          previous: previous = state.last,
          next: void 0,
          removed: false
        };
        if (!state.first)
          state.first = entry;
        if (previous)
          previous.next = entry;
        if (DESCRIPTORS$1)
          state.size++;
        else
          that.size++;
        if (index !== "F")
          state.index[index] = entry;
      }
      return that;
    };
    var getEntry = function(that, key) {
      var state = getInternalState2(that);
      var index = fastKey(key);
      var entry;
      if (index !== "F")
        return state.index[index];
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key)
          return entry;
      }
    };
    defineBuiltIns$2(Prototype, {
      clear: function clear() {
        var that = this;
        var state = getInternalState2(that);
        var data2 = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous)
            entry.previous = entry.previous.next = void 0;
          delete data2[entry.index];
          entry = entry.next;
        }
        state.first = state.last = void 0;
        if (DESCRIPTORS$1)
          state.size = 0;
        else
          that.size = 0;
      },
      "delete": function(key) {
        var that = this;
        var state = getInternalState2(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next2 = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev)
            prev.next = next2;
          if (next2)
            next2.previous = prev;
          if (state.first == entry)
            state.first = next2;
          if (state.last == entry)
            state.last = prev;
          if (DESCRIPTORS$1)
            state.size--;
          else
            that.size--;
        }
        return !!entry;
      },
      forEach: function forEach(callbackfn) {
        var state = getInternalState2(this);
        var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          while (entry && entry.removed)
            entry = entry.previous;
        }
      },
      has: function has2(key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns$2(Prototype, IS_MAP ? {
      get: function get2(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      set: function set2(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS$1)
      defineProperty$1(Prototype, "size", {
        get: function() {
          return getInternalState2(this).size;
        }
      });
    return Constructor;
  },
  setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
    defineIterator$1(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
      setInternalState$2(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind,
        last: void 0
      });
    }, function() {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      while (entry && entry.removed)
        entry = entry.previous;
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        state.target = void 0;
        return { value: void 0, done: true };
      }
      if (kind == "keys")
        return { value: entry.key, done: false };
      if (kind == "values")
        return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies(CONSTRUCTOR_NAME);
  }
};
var collection$2 = collection$3;
var collectionStrong$1 = collectionStrong$2;
collection$2("Map", function(init) {
  return function Map2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong$1);
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$3 = classof$5;
var objectToString$1 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString2() {
  return "[object " + classof$3(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn = defineBuiltIn$6;
var toString$3 = objectToString$1;
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, "toString", toString$3, { unsafe: true });
}
var classof$2 = classof$5;
var $String = String;
var toString$2 = function(argument) {
  if (classof$2(argument) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return $String(argument);
};
var uncurryThis$5 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$2;
var requireObjectCoercible = requireObjectCoercible$3;
var charAt$1 = uncurryThis$5("".charAt);
var charCodeAt = uncurryThis$5("".charCodeAt);
var stringSlice = uncurryThis$5("".slice);
var createMethod$1 = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size)
      return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt(S, position);
    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
  };
};
var stringMultibyte = {
  codeAt: createMethod$1(false),
  charAt: createMethod$1(true)
};
var charAt = stringMultibyte.charAt;
var toString3 = toString$2;
var InternalStateModule$1 = internalState;
var defineIterator = defineIterator$3;
var STRING_ITERATOR = "String Iterator";
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState = InternalStateModule$1.getterFor(STRING_ITERATOR);
defineIterator(String, "String", function(iterated) {
  setInternalState$1(this, {
    type: STRING_ITERATOR,
    string: toString3(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length)
    return { value: void 0, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});
var global$2 = global$d;
var path$5 = global$2;
var path$4 = path$5;
path$4.Map;
var collection$1 = collection$3;
var collectionStrong = collectionStrong$2;
collection$1("Set", function(init) {
  return function Set2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong);
var path$3 = path$5;
path$3.Set;
var classof$1 = classofRaw$1;
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$1(argument) == "Array";
};
var uncurryThis$4 = functionUncurryThis;
var fails$1 = fails$g;
var isCallable = isCallable$i;
var classof = classof$5;
var getBuiltIn = getBuiltIn$6;
var inspectSource = inspectSource$3;
var noop = function() {
};
var empty = [];
var construct = getBuiltIn("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$4(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument))
    return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable(argument))
    return false;
  switch (classof(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$2 = !construct || fails$1(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var isArray2 = isArray$1;
var isConstructor$1 = isConstructor$2;
var isObject$3 = isObject$d;
var wellKnownSymbol = wellKnownSymbol$c;
var SPECIES = wellKnownSymbol("species");
var $Array$1 = Array;
var arraySpeciesConstructor$1 = function(originalArray) {
  var C;
  if (isArray2(originalArray)) {
    C = originalArray.constructor;
    if (isConstructor$1(C) && (C === $Array$1 || isArray2(C.prototype)))
      C = void 0;
    else if (isObject$3(C)) {
      C = C[SPECIES];
      if (C === null)
        C = void 0;
    }
  }
  return C === void 0 ? $Array$1 : C;
};
var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$1 = function(originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};
var bind$1 = functionBindContext;
var uncurryThis$3 = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toObject$2 = toObject$5;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var arraySpeciesCreate = arraySpeciesCreate$1;
var push = uncurryThis$3([].push);
var createMethod = function(TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O = toObject$2($this);
    var self2 = IndexedObject$1(O);
    var boundFunction = bind$1(callbackfn, that);
    var length = lengthOfArrayLike$1(self2);
    var index = 0;
    var create3 = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create3($this, length) : IS_FILTER || IS_FILTER_REJECT ? create3($this, 0) : void 0;
    var value, result;
    for (; length > index; index++)
      if (NO_HOLES || index in self2) {
        value = self2[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP)
            target[index] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index;
              case 2:
                push(target, value);
            }
          else
            switch (TYPE) {
              case 4:
                return false;
              case 7:
                push(target, value);
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  forEach: createMethod(0),
  map: createMethod(1),
  filter: createMethod(2),
  some: createMethod(3),
  every: createMethod(4),
  find: createMethod(5),
  findIndex: createMethod(6),
  filterReject: createMethod(7)
};
var uncurryThis$2 = functionUncurryThis;
var defineBuiltIns$1 = defineBuiltIns$3;
var getWeakData = internalMetadata.exports.getWeakData;
var anObject$1 = anObject$a;
var isObject$2 = isObject$d;
var anInstance = anInstance$3;
var iterate = iterate$3;
var ArrayIterationModule = arrayIteration;
var hasOwn2 = hasOwnProperty_1;
var InternalStateModule = internalState;
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis$2([].splice);
var id = 0;
var uncaughtFrozenStore = function(store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
  this.entries = [];
};
var findUncaughtFrozen = function(store, key) {
  return find(store.entries, function(it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      return entry[1];
  },
  has: function(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      entry[1] = value;
    else
      this.entries.push([key, value]);
  },
  "delete": function(key) {
    var index = findIndex(this.entries, function(it) {
      return it[0] === key;
    });
    if (~index)
      splice(this.entries, index, 1);
    return !!~index;
  }
};
var collectionWeak$1 = {
  getConstructor: function(wrapper2, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper2(function(that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: void 0
      });
      if (iterable != void 0)
        iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var data2 = getWeakData(anObject$1(key), true);
      if (data2 === true)
        uncaughtFrozenStore(state).set(key, value);
      else
        data2[state.id] = value;
      return that;
    };
    defineBuiltIns$1(Prototype, {
      "delete": function(key) {
        var state = getInternalState2(this);
        if (!isObject$2(key))
          return false;
        var data2 = getWeakData(key);
        if (data2 === true)
          return uncaughtFrozenStore(state)["delete"](key);
        return data2 && hasOwn2(data2, state.id) && delete data2[state.id];
      },
      has: function has2(key) {
        var state = getInternalState2(this);
        if (!isObject$2(key))
          return false;
        var data2 = getWeakData(key);
        if (data2 === true)
          return uncaughtFrozenStore(state).has(key);
        return data2 && hasOwn2(data2, state.id);
      }
    });
    defineBuiltIns$1(Prototype, IS_MAP ? {
      get: function get2(key) {
        var state = getInternalState2(this);
        if (isObject$2(key)) {
          var data2 = getWeakData(key);
          if (data2 === true)
            return uncaughtFrozenStore(state).get(key);
          return data2 ? data2[state.id] : void 0;
        }
      },
      set: function set2(key, value) {
        return define(this, key, value);
      }
    } : {
      add: function add(value) {
        return define(this, value, true);
      }
    });
    return Constructor;
  }
};
var global$1 = global$d;
var uncurryThis$1 = functionUncurryThis;
var defineBuiltIns = defineBuiltIns$3;
var InternalMetadataModule = internalMetadata.exports;
var collection = collection$3;
var collectionWeak = collectionWeak$1;
var isObject$1 = isObject$d;
var isExtensible2 = objectIsExtensible;
var enforceInternalState = internalState.enforce;
var NATIVE_WEAK_MAP = nativeWeakMap;
var IS_IE11 = !global$1.ActiveXObject && "ActiveXObject" in global$1;
var InternalWeakMap;
var wrapper = function(init) {
  return function WeakMap2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
};
var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = uncurryThis$1(WeakMapPrototype["delete"]);
  var nativeHas = uncurryThis$1(WeakMapPrototype.has);
  var nativeGet = uncurryThis$1(WeakMapPrototype.get);
  var nativeSet = uncurryThis$1(WeakMapPrototype.set);
  defineBuiltIns(WeakMapPrototype, {
    "delete": function(key) {
      if (isObject$1(key) && !isExtensible2(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen)
          state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen["delete"](key);
      }
      return nativeDelete(this, key);
    },
    has: function has2(key) {
      if (isObject$1(key) && !isExtensible2(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen)
          state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      }
      return nativeHas(this, key);
    },
    get: function get2(key) {
      if (isObject$1(key) && !isExtensible2(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen)
          state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      }
      return nativeGet(this, key);
    },
    set: function set2(key, value) {
      if (isObject$1(key) && !isExtensible2(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen)
          state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else
        nativeSet(this, key, value);
      return this;
    }
  });
}
var path$2 = path$5;
path$2.WeakMap;
var anObject = anObject$a;
var iteratorClose = iteratorClose$2;
var callWithSafeIterationClosing$1 = function(iterator, fn, value, ENTRIES2) {
  try {
    return ENTRIES2 ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, "throw", error);
  }
};
var bind = functionBindContext;
var call$1 = functionCall;
var toObject$1 = toObject$5;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var isConstructor3 = isConstructor$2;
var lengthOfArrayLike = lengthOfArrayLike$5;
var createProperty = createProperty$2;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var $Array = Array;
var arrayFrom = function from(arrayLike) {
  var O = toObject$1(arrayLike);
  var IS_CONSTRUCTOR = isConstructor3(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
  var mapping = mapfn !== void 0;
  if (mapping)
    mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next2, value;
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next2 = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (; !(step = call$1(next2, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};
var $$1 = _export;
var from2 = arrayFrom;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
  Array.from(iterable);
});
$$1({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from: from2
});
var path$1 = path$5;
path$1.Array.from;
var DESCRIPTORS = descriptors;
var uncurryThis = functionUncurryThis;
var call = functionCall;
var fails = fails$g;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject = toObject$5;
var IndexedObject = indexedObject;
var $assign = Object.assign;
var defineProperty3 = Object.defineProperty;
var concat = uncurryThis([].concat);
var objectAssign = !$assign || fails(function() {
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty3({}, "a", {
    enumerable: true,
    get: function() {
      defineProperty3(this, "b", {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1)
    return true;
  var A = {};
  var B = {};
  var symbol = Symbol();
  var alphabet = "abcdefghijklmnopqrst";
  A[symbol] = 7;
  alphabet.split("").forEach(function(chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join("") != alphabet;
}) ? function assign(target, source) {
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable2 = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys3 = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys3.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys3[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable2, S, key))
        T[key] = S[key];
    }
  }
  return T;
} : $assign;
var $ = _export;
var assign2 = objectAssign;
$({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign2 }, {
  assign: assign2
});
var path = path$5;
path.Object.assign;
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}
function range(min2, max2) {
  if (min2 === void 0) {
    min2 = -Infinity;
  }
  if (max2 === void 0) {
    max2 = Infinity;
  }
  return function(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
      get: function() {
        return this[alias];
      },
      set: function(val) {
        Object.defineProperty(this, alias, {
          value: clamp(val, min2, max2),
          enumerable: false,
          writable: true,
          configurable: true
        });
      },
      enumerable: true,
      configurable: true
    });
  };
}
function boolean(proto, key) {
  var alias = "_" + key;
  Object.defineProperty(proto, key, {
    get: function() {
      return this[alias];
    },
    set: function(val) {
      Object.defineProperty(this, alias, {
        value: !!val,
        enumerable: false,
        writable: true,
        configurable: true
      });
    },
    enumerable: true,
    configurable: true
  });
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function debounce() {
  var options = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    options[_i] = arguments[_i];
  }
  return function(_proto, key, descriptor) {
    var fn = descriptor.value;
    return {
      get: function() {
        if (!this.hasOwnProperty(key)) {
          Object.defineProperty(this, key, {
            value: debounce$1.apply(void 0, __spreadArrays([fn], options))
          });
        }
        return this[key];
      }
    };
  };
}
var Options = function() {
  function Options2(config) {
    var _this = this;
    if (config === void 0) {
      config = {};
    }
    this.damping = 0.1;
    this.thumbMinSize = 20;
    this.renderByPixels = true;
    this.alwaysShowTracks = false;
    this.continuousScrolling = true;
    this.delegateTo = null;
    this.plugins = {};
    Object.keys(config).forEach(function(prop) {
      _this[prop] = config[prop];
    });
  }
  Object.defineProperty(Options2.prototype, "wheelEventTarget", {
    get: function() {
      return this.delegateTo;
    },
    set: function(el) {
      console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
      this.delegateTo = el;
    },
    enumerable: true,
    configurable: true
  });
  __decorate([
    range(0, 1)
  ], Options2.prototype, "damping", void 0);
  __decorate([
    range(0, Infinity)
  ], Options2.prototype, "thumbMinSize", void 0);
  __decorate([
    boolean
  ], Options2.prototype, "renderByPixels", void 0);
  __decorate([
    boolean
  ], Options2.prototype, "alwaysShowTracks", void 0);
  __decorate([
    boolean
  ], Options2.prototype, "continuousScrolling", void 0);
  return Options2;
}();
var eventListenerOptions;
var eventMap = /* @__PURE__ */ new WeakMap();
function getOptions() {
  if (eventListenerOptions !== void 0) {
    return eventListenerOptions;
  }
  var supportPassiveEvent = false;
  try {
    var noop2 = function() {
    };
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        supportPassiveEvent = true;
      }
    });
    window.addEventListener("testPassive", noop2, options);
    window.removeEventListener("testPassive", noop2, options);
  } catch (e) {
  }
  eventListenerOptions = supportPassiveEvent ? { passive: false } : false;
  return eventListenerOptions;
}
function eventScope(scrollbar) {
  var configs = eventMap.get(scrollbar) || [];
  eventMap.set(scrollbar, configs);
  return function addEvent(elem, events, fn) {
    function handler(event) {
      if (event.defaultPrevented) {
        return;
      }
      fn(event);
    }
    events.split(/\s+/g).forEach(function(eventName) {
      configs.push({ elem, eventName, handler });
      elem.addEventListener(eventName, handler, getOptions());
    });
  };
}
function clearEventsOn(scrollbar) {
  var configs = eventMap.get(scrollbar);
  if (!configs) {
    return;
  }
  configs.forEach(function(_a) {
    var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
    elem.removeEventListener(eventName, handler, getOptions());
  });
  eventMap.delete(scrollbar);
}
function getPointerData(evt) {
  return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}
function getPosition(evt) {
  var data2 = getPointerData(evt);
  return {
    x: data2.clientX,
    y: data2.clientY
  };
}
function isOneOf(a, b) {
  if (b === void 0) {
    b = [];
  }
  return b.some(function(v) {
    return a === v;
  });
}
var VENDOR_PREFIX = [
  "webkit",
  "moz",
  "ms",
  "o"
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join("|") + ")-)");
function autoPrefix(styles) {
  var res = {};
  Object.keys(styles).forEach(function(prop) {
    if (!RE.test(prop)) {
      res[prop] = styles[prop];
      return;
    }
    var val = styles[prop];
    prop = prop.replace(/^-/, "");
    res[prop] = val;
    VENDOR_PREFIX.forEach(function(prefix) {
      res["-" + prefix + "-" + prop] = val;
    });
  });
  return res;
}
function setStyle(elem, styles) {
  styles = autoPrefix(styles);
  Object.keys(styles).forEach(function(prop) {
    var cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, function(_, $1) {
      return $1.toUpperCase();
    });
    elem.style[cssProp] = styles[prop];
  });
}
var Tracker = function() {
  function Tracker2(touch) {
    this.velocityMultiplier = /Android/.test(navigator.userAgent) ? window.devicePixelRatio : 1;
    this.updateTime = Date.now();
    this.delta = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.lastPosition = { x: 0, y: 0 };
    this.lastPosition = getPosition(touch);
  }
  Tracker2.prototype.update = function(touch) {
    var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
    var now2 = Date.now();
    var position = getPosition(touch);
    var delta = {
      x: -(position.x - lastPosition.x),
      y: -(position.y - lastPosition.y)
    };
    var duration = now2 - updateTime || 16.7;
    var vx = delta.x / duration * 16.7;
    var vy = delta.y / duration * 16.7;
    velocity.x = vx * this.velocityMultiplier;
    velocity.y = vy * this.velocityMultiplier;
    this.delta = delta;
    this.updateTime = now2;
    this.lastPosition = position;
  };
  return Tracker2;
}();
var TouchRecord = function() {
  function TouchRecord2() {
    this._touchList = {};
  }
  Object.defineProperty(TouchRecord2.prototype, "_primitiveValue", {
    get: function() {
      return { x: 0, y: 0 };
    },
    enumerable: true,
    configurable: true
  });
  TouchRecord2.prototype.isActive = function() {
    return this._activeTouchID !== void 0;
  };
  TouchRecord2.prototype.getDelta = function() {
    var tracker = this._getActiveTracker();
    if (!tracker) {
      return this._primitiveValue;
    }
    return __assign({}, tracker.delta);
  };
  TouchRecord2.prototype.getVelocity = function() {
    var tracker = this._getActiveTracker();
    if (!tracker) {
      return this._primitiveValue;
    }
    return __assign({}, tracker.velocity);
  };
  TouchRecord2.prototype.getEasingDistance = function(damping) {
    var deAcceleration = 1 - damping;
    var distance = {
      x: 0,
      y: 0
    };
    var vel = this.getVelocity();
    Object.keys(vel).forEach(function(dir) {
      var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
      while (v !== 0) {
        distance[dir] += v;
        v = v * deAcceleration | 0;
      }
    });
    return distance;
  };
  TouchRecord2.prototype.track = function(evt) {
    var _this = this;
    var targetTouches = evt.targetTouches;
    Array.from(targetTouches).forEach(function(touch) {
      _this._add(touch);
    });
    return this._touchList;
  };
  TouchRecord2.prototype.update = function(evt) {
    var _this = this;
    var touches = evt.touches, changedTouches = evt.changedTouches;
    Array.from(touches).forEach(function(touch) {
      _this._renew(touch);
    });
    this._setActiveID(changedTouches);
    return this._touchList;
  };
  TouchRecord2.prototype.release = function(evt) {
    var _this = this;
    delete this._activeTouchID;
    Array.from(evt.changedTouches).forEach(function(touch) {
      _this._delete(touch);
    });
  };
  TouchRecord2.prototype._add = function(touch) {
    if (this._has(touch)) {
      this._delete(touch);
    }
    var tracker = new Tracker(touch);
    this._touchList[touch.identifier] = tracker;
  };
  TouchRecord2.prototype._renew = function(touch) {
    if (!this._has(touch)) {
      return;
    }
    var tracker = this._touchList[touch.identifier];
    tracker.update(touch);
  };
  TouchRecord2.prototype._delete = function(touch) {
    delete this._touchList[touch.identifier];
  };
  TouchRecord2.prototype._has = function(touch) {
    return this._touchList.hasOwnProperty(touch.identifier);
  };
  TouchRecord2.prototype._setActiveID = function(touches) {
    this._activeTouchID = touches[touches.length - 1].identifier;
  };
  TouchRecord2.prototype._getActiveTracker = function() {
    var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
    return _touchList[_activeTouchID];
  };
  return TouchRecord2;
}();
var TrackDirection;
(function(TrackDirection2) {
  TrackDirection2["X"] = "x";
  TrackDirection2["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));
var ScrollbarThumb = function() {
  function ScrollbarThumb2(_direction, _minSize) {
    if (_minSize === void 0) {
      _minSize = 0;
    }
    this._direction = _direction;
    this._minSize = _minSize;
    this.element = document.createElement("div");
    this.displaySize = 0;
    this.realSize = 0;
    this.offset = 0;
    this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
  }
  ScrollbarThumb2.prototype.attachTo = function(trackEl) {
    trackEl.appendChild(this.element);
  };
  ScrollbarThumb2.prototype.update = function(scrollOffset, containerSize, pageSize) {
    this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
    this.displaySize = Math.max(this.realSize, this._minSize);
    this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
    setStyle(this.element, this._getStyle());
  };
  ScrollbarThumb2.prototype._getStyle = function() {
    switch (this._direction) {
      case TrackDirection.X:
        return {
          width: this.displaySize + "px",
          "-transform": "translate3d(" + this.offset + "px, 0, 0)"
        };
      case TrackDirection.Y:
        return {
          height: this.displaySize + "px",
          "-transform": "translate3d(0, " + this.offset + "px, 0)"
        };
      default:
        return null;
    }
  };
  return ScrollbarThumb2;
}();
var ScrollbarTrack = function() {
  function ScrollbarTrack2(direction, thumbMinSize) {
    if (thumbMinSize === void 0) {
      thumbMinSize = 0;
    }
    this.element = document.createElement("div");
    this._isShown = false;
    this.element.className = "scrollbar-track scrollbar-track-" + direction;
    this.thumb = new ScrollbarThumb(direction, thumbMinSize);
    this.thumb.attachTo(this.element);
  }
  ScrollbarTrack2.prototype.attachTo = function(scrollbarContainer) {
    scrollbarContainer.appendChild(this.element);
  };
  ScrollbarTrack2.prototype.show = function() {
    if (this._isShown) {
      return;
    }
    this._isShown = true;
    this.element.classList.add("show");
  };
  ScrollbarTrack2.prototype.hide = function() {
    if (!this._isShown) {
      return;
    }
    this._isShown = false;
    this.element.classList.remove("show");
  };
  ScrollbarTrack2.prototype.update = function(scrollOffset, containerSize, pageSize) {
    setStyle(this.element, {
      display: pageSize <= containerSize ? "none" : "block"
    });
    this.thumb.update(scrollOffset, containerSize, pageSize);
  };
  return ScrollbarTrack2;
}();
var TrackController = function() {
  function TrackController2(_scrollbar) {
    this._scrollbar = _scrollbar;
    var thumbMinSize = _scrollbar.options.thumbMinSize;
    this.xAxis = new ScrollbarTrack(TrackDirection.X, thumbMinSize);
    this.yAxis = new ScrollbarTrack(TrackDirection.Y, thumbMinSize);
    this.xAxis.attachTo(_scrollbar.containerEl);
    this.yAxis.attachTo(_scrollbar.containerEl);
    if (_scrollbar.options.alwaysShowTracks) {
      this.xAxis.show();
      this.yAxis.show();
    }
  }
  TrackController2.prototype.update = function() {
    var _a = this._scrollbar, size = _a.size, offset = _a.offset;
    this.xAxis.update(offset.x, size.container.width, size.content.width);
    this.yAxis.update(offset.y, size.container.height, size.content.height);
  };
  TrackController2.prototype.autoHideOnIdle = function() {
    if (this._scrollbar.options.alwaysShowTracks) {
      return;
    }
    this.xAxis.hide();
    this.yAxis.hide();
  };
  __decorate([
    debounce(300)
  ], TrackController2.prototype, "autoHideOnIdle", null);
  return TrackController2;
}();
function getSize(scrollbar) {
  var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
  var containerStyles = getComputedStyle(containerEl);
  var paddings = [
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight"
  ].map(function(prop) {
    return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
  });
  var verticalPadding = paddings[0] + paddings[1];
  var horizontalPadding = paddings[2] + paddings[3];
  return {
    container: {
      width: containerEl.clientWidth,
      height: containerEl.clientHeight
    },
    content: {
      width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
      height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
    }
  };
}
function isVisible(scrollbar, elem) {
  var bounding = scrollbar.bounding;
  var targetBounding = elem.getBoundingClientRect();
  var top = Math.max(bounding.top, targetBounding.top);
  var left = Math.max(bounding.left, targetBounding.left);
  var right = Math.min(bounding.right, targetBounding.right);
  var bottom = Math.min(bounding.bottom, targetBounding.bottom);
  return top < bottom && left < right;
}
function update(scrollbar) {
  var newSize = scrollbar.getSize();
  var limit = {
    x: Math.max(newSize.content.width - newSize.container.width, 0),
    y: Math.max(newSize.content.height - newSize.container.height, 0)
  };
  var containerBounding = scrollbar.containerEl.getBoundingClientRect();
  var bounding = {
    top: Math.max(containerBounding.top, 0),
    right: Math.min(containerBounding.right, window.innerWidth),
    bottom: Math.min(containerBounding.bottom, window.innerHeight),
    left: Math.max(containerBounding.left, 0)
  };
  scrollbar.size = newSize;
  scrollbar.limit = limit;
  scrollbar.bounding = bounding;
  scrollbar.track.update();
  scrollbar.setPosition();
}
function setPosition(scrollbar, x, y) {
  var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
  if (options.renderByPixels) {
    x = Math.round(x);
    y = Math.round(y);
  }
  x = clamp(x, 0, limit.x);
  y = clamp(y, 0, limit.y);
  if (x !== offset.x)
    track.xAxis.show();
  if (y !== offset.y)
    track.yAxis.show();
  if (!options.alwaysShowTracks) {
    track.autoHideOnIdle();
  }
  if (x === offset.x && y === offset.y) {
    return null;
  }
  offset.x = x;
  offset.y = y;
  setStyle(contentEl, {
    "-transform": "translate3d(" + -x + "px, " + -y + "px, 0)"
  });
  track.update();
  return {
    offset: __assign({}, offset),
    limit: __assign({}, limit)
  };
}
var animationIDStorage = /* @__PURE__ */ new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
  if (duration === void 0) {
    duration = 0;
  }
  var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
  var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
  if (options.renderByPixels) {
    x = Math.round(x);
    y = Math.round(y);
  }
  var startX = offset.x;
  var startY = offset.y;
  var disX = clamp(x, 0, limit.x) - startX;
  var disY = clamp(y, 0, limit.y) - startY;
  var start = Date.now();
  function scroll() {
    var elapse = Date.now() - start;
    var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
    scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
    if (elapse >= duration) {
      if (typeof callback === "function") {
        callback.call(scrollbar);
      }
    } else {
      var animationID = requestAnimationFrame(scroll);
      animationIDStorage.set(scrollbar, animationID);
    }
  }
  cancelAnimationFrame(animationIDStorage.get(scrollbar));
  scroll();
}
function defaultEasing(t) {
  return Math.pow(t - 1, 3) + 1;
}
function scrollIntoView(scrollbar, elem, _a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
  var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
  if (!elem || !containerEl.contains(elem))
    return;
  var targetBounding = elem.getBoundingClientRect();
  if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
    return;
  var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
  scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, clamp(delta, -offset.y, limit.y - offset.y));
}
var ScrollbarPlugin = function() {
  function ScrollbarPlugin2(scrollbar, options) {
    var _newTarget = this.constructor;
    this.scrollbar = scrollbar;
    this.name = _newTarget.pluginName;
    this.options = __assign(__assign({}, _newTarget.defaultOptions), options);
  }
  ScrollbarPlugin2.prototype.onInit = function() {
  };
  ScrollbarPlugin2.prototype.onDestroy = function() {
  };
  ScrollbarPlugin2.prototype.onUpdate = function() {
  };
  ScrollbarPlugin2.prototype.onRender = function(_remainMomentum) {
  };
  ScrollbarPlugin2.prototype.transformDelta = function(delta, _evt) {
    return __assign({}, delta);
  };
  ScrollbarPlugin2.pluginName = "";
  ScrollbarPlugin2.defaultOptions = {};
  return ScrollbarPlugin2;
}();
var globalPlugins = {
  order: /* @__PURE__ */ new Set(),
  constructors: {}
};
function addPlugins() {
  var Plugins = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    Plugins[_i] = arguments[_i];
  }
  Plugins.forEach(function(P) {
    var pluginName = P.pluginName;
    if (!pluginName) {
      throw new TypeError("plugin name is required");
    }
    globalPlugins.order.add(pluginName);
    globalPlugins.constructors[pluginName] = P;
  });
}
function initPlugins(scrollbar, options) {
  return Array.from(globalPlugins.order).filter(function(pluginName) {
    return options[pluginName] !== false;
  }).map(function(pluginName) {
    var Plugin = globalPlugins.constructors[pluginName];
    var instance = new Plugin(scrollbar, options[pluginName]);
    options[pluginName] = instance.options;
    return instance;
  });
}
var KEY_CODE;
(function(KEY_CODE2) {
  KEY_CODE2[KEY_CODE2["TAB"] = 9] = "TAB";
  KEY_CODE2[KEY_CODE2["SPACE"] = 32] = "SPACE";
  KEY_CODE2[KEY_CODE2["PAGE_UP"] = 33] = "PAGE_UP";
  KEY_CODE2[KEY_CODE2["PAGE_DOWN"] = 34] = "PAGE_DOWN";
  KEY_CODE2[KEY_CODE2["END"] = 35] = "END";
  KEY_CODE2[KEY_CODE2["HOME"] = 36] = "HOME";
  KEY_CODE2[KEY_CODE2["LEFT"] = 37] = "LEFT";
  KEY_CODE2[KEY_CODE2["UP"] = 38] = "UP";
  KEY_CODE2[KEY_CODE2["RIGHT"] = 39] = "RIGHT";
  KEY_CODE2[KEY_CODE2["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var container = scrollbar.containerEl;
  addEvent(container, "keydown", function(evt) {
    var activeElement = document.activeElement;
    if (activeElement !== container && !container.contains(activeElement)) {
      return;
    }
    if (isEditable(activeElement)) {
      return;
    }
    var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
    if (!delta) {
      return;
    }
    var x = delta[0], y = delta[1];
    scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
      if (willScroll) {
        evt.preventDefault();
      } else {
        scrollbar.containerEl.blur();
        if (scrollbar.parent) {
          scrollbar.parent.containerEl.focus();
        }
      }
    });
  });
}
function getKeyDelta(scrollbar, keyCode) {
  var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
  switch (keyCode) {
    case KEY_CODE.TAB:
      return handleTabKey(scrollbar);
    case KEY_CODE.SPACE:
      return [0, 200];
    case KEY_CODE.PAGE_UP:
      return [0, -size.container.height + 40];
    case KEY_CODE.PAGE_DOWN:
      return [0, size.container.height - 40];
    case KEY_CODE.END:
      return [0, limit.y - offset.y];
    case KEY_CODE.HOME:
      return [0, -offset.y];
    case KEY_CODE.LEFT:
      return [-40, 0];
    case KEY_CODE.UP:
      return [0, -40];
    case KEY_CODE.RIGHT:
      return [40, 0];
    case KEY_CODE.DOWN:
      return [0, 40];
    default:
      return null;
  }
}
function handleTabKey(scrollbar) {
  requestAnimationFrame(function() {
    scrollbar.scrollIntoView(document.activeElement, {
      offsetTop: scrollbar.size.container.height / 2,
      onlyScrollIfNeeded: true
    });
  });
}
function isEditable(elem) {
  if (elem.tagName === "INPUT" || elem.tagName === "SELECT" || elem.tagName === "TEXTAREA" || elem.isContentEditable) {
    return !elem.disabled;
  }
  return false;
}
var Direction;
(function(Direction2) {
  Direction2[Direction2["X"] = 0] = "X";
  Direction2[Direction2["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var container = scrollbar.containerEl;
  var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
  function calcMomentum2(direction, clickPosition) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    if (direction === Direction.X) {
      var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
      return clamp(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
    }
    if (direction === Direction.Y) {
      var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
      return clamp(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
    }
    return 0;
  }
  function getTrackDirection(elem) {
    if (isOneOf(elem, [xAxis.element, xAxis.thumb.element])) {
      return Direction.X;
    }
    if (isOneOf(elem, [yAxis.element, yAxis.thumb.element])) {
      return Direction.Y;
    }
    return void 0;
  }
  var isMouseDown;
  var isMouseMoving;
  var startOffsetToThumb;
  var trackDirection;
  var containerRect;
  addEvent(container, "click", function(evt) {
    if (isMouseMoving || !isOneOf(evt.target, [xAxis.element, yAxis.element])) {
      return;
    }
    var track = evt.target;
    var direction = getTrackDirection(track);
    var rect = track.getBoundingClientRect();
    var clickPos = getPosition(evt);
    if (direction === Direction.X) {
      var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
      scrollbar.setMomentum(calcMomentum2(direction, offsetOnTrack), 0);
    }
    if (direction === Direction.Y) {
      var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
      scrollbar.setMomentum(0, calcMomentum2(direction, offsetOnTrack));
    }
  });
  addEvent(container, "mousedown", function(evt) {
    if (!isOneOf(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
      return;
    }
    isMouseDown = true;
    var thumb = evt.target;
    var cursorPos = getPosition(evt);
    var thumbRect = thumb.getBoundingClientRect();
    trackDirection = getTrackDirection(thumb);
    startOffsetToThumb = {
      x: cursorPos.x - thumbRect.left,
      y: cursorPos.y - thumbRect.top
    };
    containerRect = container.getBoundingClientRect();
    setStyle(scrollbar.containerEl, {
      "-user-select": "none"
    });
  });
  addEvent(window, "mousemove", function(evt) {
    if (!isMouseDown)
      return;
    isMouseMoving = true;
    var cursorPos = getPosition(evt);
    if (trackDirection === Direction.X) {
      var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
      scrollbar.setMomentum(calcMomentum2(trackDirection, offsetOnTrack), 0);
    }
    if (trackDirection === Direction.Y) {
      var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
      scrollbar.setMomentum(0, calcMomentum2(trackDirection, offsetOnTrack));
    }
  });
  addEvent(window, "mouseup blur", function() {
    isMouseDown = isMouseMoving = false;
    setStyle(scrollbar.containerEl, {
      "-user-select": ""
    });
  });
}
function resizeHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  addEvent(window, "resize", debounce$1(scrollbar.update.bind(scrollbar), 300));
}
function selectHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
  var isSelected = false;
  var animationID;
  function scroll(_a) {
    var x = _a.x, y = _a.y;
    if (!x && !y)
      return;
    var offset = scrollbar.offset, limit = scrollbar.limit;
    scrollbar.setMomentum(clamp(offset.x + x, 0, limit.x) - offset.x, clamp(offset.y + y, 0, limit.y) - offset.y);
    animationID = requestAnimationFrame(function() {
      scroll({ x, y });
    });
  }
  addEvent(window, "mousemove", function(evt) {
    if (!isSelected)
      return;
    cancelAnimationFrame(animationID);
    var dir = calcMomentum(scrollbar, evt);
    scroll(dir);
  });
  addEvent(contentEl, "selectstart", function(evt) {
    evt.stopPropagation();
    cancelAnimationFrame(animationID);
    isSelected = true;
  });
  addEvent(window, "mouseup blur", function() {
    cancelAnimationFrame(animationID);
    isSelected = false;
  });
  addEvent(containerEl, "scroll", function(evt) {
    evt.preventDefault();
    containerEl.scrollTop = containerEl.scrollLeft = 0;
  });
}
function calcMomentum(scrollbar, evt) {
  var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
  var _b = getPosition(evt), x = _b.x, y = _b.y;
  var res = {
    x: 0,
    y: 0
  };
  var padding = 20;
  if (x === 0 && y === 0)
    return res;
  if (x > right - padding) {
    res.x = x - right + padding;
  } else if (x < left + padding) {
    res.x = x - left - padding;
  }
  if (y > bottom - padding) {
    res.y = y - bottom + padding;
  } else if (y < top + padding) {
    res.y = y - top - padding;
  }
  res.x *= 2;
  res.y *= 2;
  return res;
}
var activeScrollbar;
function touchHandler(scrollbar) {
  var target = scrollbar.options.delegateTo || scrollbar.containerEl;
  var touchRecord = new TouchRecord();
  var addEvent = eventScope(scrollbar);
  var damping;
  var pointerCount = 0;
  addEvent(target, "touchstart", function(evt) {
    touchRecord.track(evt);
    scrollbar.setMomentum(0, 0);
    if (pointerCount === 0) {
      damping = scrollbar.options.damping;
      scrollbar.options.damping = Math.max(damping, 0.5);
    }
    pointerCount++;
  });
  addEvent(target, "touchmove", function(evt) {
    if (activeScrollbar && activeScrollbar !== scrollbar)
      return;
    touchRecord.update(evt);
    var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
    scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
      if (willScroll && evt.cancelable) {
        evt.preventDefault();
        activeScrollbar = scrollbar;
      }
    });
  });
  addEvent(target, "touchcancel touchend", function(evt) {
    var delta = touchRecord.getEasingDistance(damping);
    scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
    pointerCount--;
    if (pointerCount === 0) {
      scrollbar.options.damping = damping;
    }
    touchRecord.release(evt);
    activeScrollbar = null;
  });
}
function wheelHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var target = scrollbar.options.delegateTo || scrollbar.containerEl;
  var eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
  addEvent(target, eventName, function(evt) {
    var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
    scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
      if (willScroll) {
        evt.preventDefault();
      }
    });
  });
}
var DELTA_SCALE = {
  STANDARD: 1,
  OTHERS: -3
};
var DELTA_MODE = [1, 28, 500];
var getDeltaMode = function(mode) {
  return DELTA_MODE[mode] || DELTA_MODE[0];
};
function normalizeDelta(evt) {
  if ("deltaX" in evt) {
    var mode = getDeltaMode(evt.deltaMode);
    return {
      x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
      y: evt.deltaY / DELTA_SCALE.STANDARD * mode
    };
  }
  if ("wheelDeltaX" in evt) {
    return {
      x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
      y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
    };
  }
  return {
    x: 0,
    y: evt.wheelDelta / DELTA_SCALE.OTHERS
  };
}
var eventHandlers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  keyboardHandler,
  mouseHandler,
  resizeHandler,
  selectHandler,
  touchHandler,
  wheelHandler
}, Symbol.toStringTag, { value: "Module" }));
var scrollbarMap = /* @__PURE__ */ new Map();
var Scrollbar = function() {
  function Scrollbar2(containerEl, options) {
    var _this = this;
    this.offset = {
      x: 0,
      y: 0
    };
    this.limit = {
      x: Infinity,
      y: Infinity
    };
    this.bounding = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    this._plugins = [];
    this._momentum = { x: 0, y: 0 };
    this._listeners = /* @__PURE__ */ new Set();
    this.containerEl = containerEl;
    var contentEl = this.contentEl = document.createElement("div");
    this.options = new Options(options);
    containerEl.setAttribute("data-scrollbar", "true");
    containerEl.setAttribute("tabindex", "-1");
    setStyle(containerEl, {
      overflow: "hidden",
      outline: "none"
    });
    if (window.navigator.msPointerEnabled) {
      containerEl.style.msTouchAction = "none";
    }
    contentEl.className = "scroll-content";
    Array.from(containerEl.childNodes).forEach(function(node) {
      contentEl.appendChild(node);
    });
    containerEl.appendChild(contentEl);
    this.track = new TrackController(this);
    this.size = this.getSize();
    this._plugins = initPlugins(this, this.options.plugins);
    var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
    containerEl.scrollLeft = containerEl.scrollTop = 0;
    this.setPosition(scrollLeft, scrollTop, {
      withoutCallbacks: true
    });
    var ResizeObserver = window.ResizeObserver;
    if (typeof ResizeObserver === "function") {
      this._observer = new ResizeObserver(function() {
        _this.update();
      });
      this._observer.observe(contentEl);
    }
    scrollbarMap.set(containerEl, this);
    requestAnimationFrame(function() {
      _this._init();
    });
  }
  Object.defineProperty(Scrollbar2.prototype, "parent", {
    get: function() {
      var elem = this.containerEl.parentElement;
      while (elem) {
        var parentScrollbar = scrollbarMap.get(elem);
        if (parentScrollbar) {
          return parentScrollbar;
        }
        elem = elem.parentElement;
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Scrollbar2.prototype, "scrollTop", {
    get: function() {
      return this.offset.y;
    },
    set: function(y) {
      this.setPosition(this.scrollLeft, y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Scrollbar2.prototype, "scrollLeft", {
    get: function() {
      return this.offset.x;
    },
    set: function(x) {
      this.setPosition(x, this.scrollTop);
    },
    enumerable: true,
    configurable: true
  });
  Scrollbar2.prototype.getSize = function() {
    return getSize(this);
  };
  Scrollbar2.prototype.update = function() {
    update(this);
    this._plugins.forEach(function(plugin) {
      plugin.onUpdate();
    });
  };
  Scrollbar2.prototype.isVisible = function(elem) {
    return isVisible(this, elem);
  };
  Scrollbar2.prototype.setPosition = function(x, y, options) {
    var _this = this;
    if (x === void 0) {
      x = this.offset.x;
    }
    if (y === void 0) {
      y = this.offset.y;
    }
    if (options === void 0) {
      options = {};
    }
    var status = setPosition(this, x, y);
    if (!status || options.withoutCallbacks) {
      return;
    }
    this._listeners.forEach(function(fn) {
      fn.call(_this, status);
    });
  };
  Scrollbar2.prototype.scrollTo = function(x, y, duration, options) {
    if (x === void 0) {
      x = this.offset.x;
    }
    if (y === void 0) {
      y = this.offset.y;
    }
    if (duration === void 0) {
      duration = 0;
    }
    if (options === void 0) {
      options = {};
    }
    scrollTo(this, x, y, duration, options);
  };
  Scrollbar2.prototype.scrollIntoView = function(elem, options) {
    if (options === void 0) {
      options = {};
    }
    scrollIntoView(this, elem, options);
  };
  Scrollbar2.prototype.addListener = function(fn) {
    if (typeof fn !== "function") {
      throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
    }
    this._listeners.add(fn);
  };
  Scrollbar2.prototype.removeListener = function(fn) {
    this._listeners.delete(fn);
  };
  Scrollbar2.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
    this._updateDebounced();
    var finalDelta = this._plugins.reduce(function(delta, plugin) {
      return plugin.transformDelta(delta, fromEvent) || delta;
    }, { x, y });
    var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
    if (willScroll) {
      this.addMomentum(finalDelta.x, finalDelta.y);
    }
    if (callback) {
      callback.call(this, willScroll);
    }
  };
  Scrollbar2.prototype.addMomentum = function(x, y) {
    this.setMomentum(this._momentum.x + x, this._momentum.y + y);
  };
  Scrollbar2.prototype.setMomentum = function(x, y) {
    if (this.limit.x === 0) {
      x = 0;
    }
    if (this.limit.y === 0) {
      y = 0;
    }
    if (this.options.renderByPixels) {
      x = Math.round(x);
      y = Math.round(y);
    }
    this._momentum.x = x;
    this._momentum.y = y;
  };
  Scrollbar2.prototype.updatePluginOptions = function(pluginName, options) {
    this._plugins.forEach(function(plugin) {
      if (plugin.name === pluginName) {
        Object.assign(plugin.options, options);
      }
    });
  };
  Scrollbar2.prototype.destroy = function() {
    var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
    clearEventsOn(this);
    this._listeners.clear();
    this.setMomentum(0, 0);
    cancelAnimationFrame(this._renderID);
    if (this._observer) {
      this._observer.disconnect();
    }
    scrollbarMap.delete(this.containerEl);
    var childNodes = Array.from(contentEl.childNodes);
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }
    childNodes.forEach(function(el) {
      containerEl.appendChild(el);
    });
    setStyle(containerEl, {
      overflow: ""
    });
    containerEl.scrollTop = this.scrollTop;
    containerEl.scrollLeft = this.scrollLeft;
    this._plugins.forEach(function(plugin) {
      plugin.onDestroy();
    });
    this._plugins.length = 0;
  };
  Scrollbar2.prototype._init = function() {
    var _this = this;
    this.update();
    Object.keys(eventHandlers).forEach(function(prop) {
      eventHandlers[prop](_this);
    });
    this._plugins.forEach(function(plugin) {
      plugin.onInit();
    });
    this._render();
  };
  Scrollbar2.prototype._updateDebounced = function() {
    this.update();
  };
  Scrollbar2.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
    if (deltaX === void 0) {
      deltaX = 0;
    }
    if (deltaY === void 0) {
      deltaY = 0;
    }
    var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
    if (!options.continuousScrolling)
      return false;
    if (limit.x === 0 && limit.y === 0) {
      this._updateDebounced();
    }
    var destX = clamp(deltaX + offset.x, 0, limit.x);
    var destY = clamp(deltaY + offset.y, 0, limit.y);
    var res = true;
    res = res && destX === offset.x;
    res = res && destY === offset.y;
    res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
    return res;
  };
  Scrollbar2.prototype._render = function() {
    var _momentum = this._momentum;
    if (_momentum.x || _momentum.y) {
      var nextX = this._nextTick("x");
      var nextY = this._nextTick("y");
      _momentum.x = nextX.momentum;
      _momentum.y = nextY.momentum;
      this.setPosition(nextX.position, nextY.position);
    }
    var remain = __assign({}, this._momentum);
    this._plugins.forEach(function(plugin) {
      plugin.onRender(remain);
    });
    this._renderID = requestAnimationFrame(this._render.bind(this));
  };
  Scrollbar2.prototype._nextTick = function(direction) {
    var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
    var current = offset[direction];
    var remain = _momentum[direction];
    if (Math.abs(remain) <= 0.1) {
      return {
        momentum: 0,
        position: current + remain
      };
    }
    var nextMomentum = remain * (1 - options.damping);
    if (options.renderByPixels) {
      nextMomentum |= 0;
    }
    return {
      momentum: nextMomentum,
      position: current + remain - nextMomentum
    };
  };
  __decorate([
    debounce(100, { leading: true })
  ], Scrollbar2.prototype, "_updateDebounced", null);
  return Scrollbar2;
}();
var TRACK_BG = "rgba(222, 222, 222, .75)";
var THUMB_BG = "rgba(0, 0, 0, .5)";
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = "smooth-scrollbar-style";
var isStyleAttached = false;
function attachStyle() {
  if (isStyleAttached || typeof window === "undefined") {
    return;
  }
  var styleEl = document.createElement("style");
  styleEl.id = STYLE_ID;
  styleEl.textContent = SCROLLBAR_STYLE;
  if (document.head) {
    document.head.appendChild(styleEl);
  }
  isStyleAttached = true;
}
function detachStyle() {
  if (!isStyleAttached || typeof window === "undefined") {
    return;
  }
  var styleEl = document.getElementById(STYLE_ID);
  if (!styleEl || !styleEl.parentNode) {
    return;
  }
  styleEl.parentNode.removeChild(styleEl);
  isStyleAttached = false;
}
var SmoothScrollbar = function(_super) {
  __extends(SmoothScrollbar2, _super);
  function SmoothScrollbar2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SmoothScrollbar2.init = function(elem, options) {
    if (!elem || elem.nodeType !== 1) {
      throw new TypeError("expect element to be DOM Element, but got " + elem);
    }
    attachStyle();
    if (scrollbarMap.has(elem)) {
      return scrollbarMap.get(elem);
    }
    return new Scrollbar(elem, options);
  };
  SmoothScrollbar2.initAll = function(options) {
    return Array.from(document.querySelectorAll("[data-scrollbar]"), function(elem) {
      return SmoothScrollbar2.init(elem, options);
    });
  };
  SmoothScrollbar2.has = function(elem) {
    return scrollbarMap.has(elem);
  };
  SmoothScrollbar2.get = function(elem) {
    return scrollbarMap.get(elem);
  };
  SmoothScrollbar2.getAll = function() {
    return Array.from(scrollbarMap.values());
  };
  SmoothScrollbar2.destroy = function(elem) {
    var scrollbar = scrollbarMap.get(elem);
    if (scrollbar) {
      scrollbar.destroy();
    }
  };
  SmoothScrollbar2.destroyAll = function() {
    scrollbarMap.forEach(function(scrollbar) {
      scrollbar.destroy();
    });
  };
  SmoothScrollbar2.use = function() {
    var Plugins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      Plugins[_i] = arguments[_i];
    }
    return addPlugins.apply(void 0, Plugins);
  };
  SmoothScrollbar2.attachStyle = function() {
    return attachStyle();
  };
  SmoothScrollbar2.detachStyle = function() {
    return detachStyle();
  };
  SmoothScrollbar2.version = "8.7.4";
  SmoothScrollbar2.ScrollbarPlugin = ScrollbarPlugin;
  return SmoothScrollbar2;
}(Scrollbar);
function useSmoothScrollbar(options, plugins) {
  const container = ref();
  const scrollbar = ref();
  if ((plugins == null ? void 0 : plugins.length) !== 0)
    plugins == null ? void 0 : plugins.map((plugin) => SmoothScrollbar.use(plugin));
  onMounted(() => {
    if (container.value)
      scrollbar.value = SmoothScrollbar.init(container.value, isRef(options) ? options.value : options);
  });
  onUnmounted(() => {
    if (scrollbar.value)
      scrollbar.value.destroy();
  });
  return [container, scrollbar];
}
export { useSmoothScrollbar };
