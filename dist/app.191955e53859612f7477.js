webpackJsonp([0],{

/***/ "./node_modules/babel-polyfill/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__("./node_modules/core-js/shim.js");

__webpack_require__("./node_modules/regenerator-runtime/runtime.js");

__webpack_require__("./node_modules/core-js/fn/regexp/escape.js");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/core.regexp.escape.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_core.js").RegExp.escape;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
module.exports = function(it, msg){
  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
  return +it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("./node_modules/core-js/modules/_wks.js")('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__("./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , toIndex  = __webpack_require__("./node_modules/core-js/modules/_to-index.js")
  , toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , toIndex  = __webpack_require__("./node_modules/core-js/modules/_to-index.js")
  , toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , toLength  = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , toIndex   = __webpack_require__("./node_modules/core-js/modules/_to-index.js");
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
  , IObject  = __webpack_require__("./node_modules/core-js/modules/_iobject.js")
  , toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , asc      = __webpack_require__("./node_modules/core-js/modules/_array-species-create.js");
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , toObject  = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , IObject   = __webpack_require__("./node_modules/core-js/modules/_iobject.js")
  , toLength  = __webpack_require__("./node_modules/core-js/modules/_to-length.js");

module.exports = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , isArray  = __webpack_require__("./node_modules/core-js/modules/_is-array.js")
  , SPECIES  = __webpack_require__("./node_modules/core-js/modules/_wks.js")('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction  = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , isObject   = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , invoke     = __webpack_require__("./node_modules/core-js/modules/_invoke.js")
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js")
  , TAG = __webpack_require__("./node_modules/core-js/modules/_wks.js")('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f
  , create      = __webpack_require__("./node_modules/core-js/modules/_object-create.js")
  , redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")
  , ctx         = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
  , anInstance  = __webpack_require__("./node_modules/core-js/modules/_an-instance.js")
  , defined     = __webpack_require__("./node_modules/core-js/modules/_defined.js")
  , forOf       = __webpack_require__("./node_modules/core-js/modules/_for-of.js")
  , $iterDefine = __webpack_require__("./node_modules/core-js/modules/_iter-define.js")
  , step        = __webpack_require__("./node_modules/core-js/modules/_iter-step.js")
  , setSpecies  = __webpack_require__("./node_modules/core-js/modules/_set-species.js")
  , DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js")
  , fastKey     = __webpack_require__("./node_modules/core-js/modules/_meta.js").fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js")
  , from    = __webpack_require__("./node_modules/core-js/modules/_array-from-iterable.js");
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll       = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")
  , getWeak           = __webpack_require__("./node_modules/core-js/modules/_meta.js").getWeak
  , anObject          = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , isObject          = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , anInstance        = __webpack_require__("./node_modules/core-js/modules/_an-instance.js")
  , forOf             = __webpack_require__("./node_modules/core-js/modules/_for-of.js")
  , createArrayMethod = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")
  , $has              = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , $export           = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , redefine          = __webpack_require__("./node_modules/core-js/modules/_redefine.js")
  , redefineAll       = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")
  , meta              = __webpack_require__("./node_modules/core-js/modules/_meta.js")
  , forOf             = __webpack_require__("./node_modules/core-js/modules/_for-of.js")
  , anInstance        = __webpack_require__("./node_modules/core-js/modules/_an-instance.js")
  , isObject          = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , fails             = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , $iterDetect       = __webpack_require__("./node_modules/core-js/modules/_iter-detect.js")
  , setToStringTag    = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js")
  , inheritIfRequired = __webpack_require__("./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
  , createDesc      = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject    = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
  , NUMBER      = 'number';

module.exports = function(hint){
  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , document = __webpack_require__("./node_modules/core-js/modules/_global.js").document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js")
  , gOPS    = __webpack_require__("./node_modules/core-js/modules/_object-gops.js")
  , pIE     = __webpack_require__("./node_modules/core-js/modules/_object-pie.js");
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , core      = __webpack_require__("./node_modules/core-js/modules/_core.js")
  , hide      = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , redefine  = __webpack_require__("./node_modules/core-js/modules/_redefine.js")
  , ctx       = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("./node_modules/core-js/modules/_wks.js")('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide     = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js")
  , fails    = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , defined  = __webpack_require__("./node_modules/core-js/modules/_defined.js")
  , wks      = __webpack_require__("./node_modules/core-js/modules/_wks.js");

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
  , call        = __webpack_require__("./node_modules/core-js/modules/_iter-call.js")
  , isArrayIter = __webpack_require__("./node_modules/core-js/modules/_is-array-iter.js")
  , anObject    = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , toLength    = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , getIterFn   = __webpack_require__("./node_modules/core-js/modules/core.get-iterator-method.js")
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
  , createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/modules/_global.js").document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject       = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , setPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__("./node_modules/core-js/modules/_iterators.js")
  , ITERATOR   = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , cof      = __webpack_require__("./node_modules/core-js/modules/_cof.js")
  , MATCH    = __webpack_require__("./node_modules/core-js/modules/_wks.js")('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__("./node_modules/core-js/modules/_object-create.js")
  , descriptor     = __webpack_require__("./node_modules/core-js/modules/_property-desc.js")
  , setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js")
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__("./node_modules/core-js/modules/_library.js")
  , $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , redefine       = __webpack_require__("./node_modules/core-js/modules/_redefine.js")
  , hide           = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , has            = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , Iterators      = __webpack_require__("./node_modules/core-js/modules/_iterators.js")
  , $iterCreate    = __webpack_require__("./node_modules/core-js/modules/_iter-create.js")
  , setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js")
  , getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , ITERATOR       = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_keyof.js":
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__("./node_modules/core-js/modules/_object-keys.js")
  , toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__("./node_modules/core-js/modules/_uid.js")('meta')
  , isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , has      = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , setDesc  = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var Map     = __webpack_require__("./node_modules/core-js/modules/es6.map.js")
  , $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , shared  = __webpack_require__("./node_modules/core-js/modules/_shared.js")('metadata')
  , store   = shared.store || (shared.store = new (__webpack_require__("./node_modules/core-js/modules/es6.weak-map.js")));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function(O){
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , macrotask = __webpack_require__("./node_modules/core-js/modules/_task.js").set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__("./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__("./node_modules/core-js/modules/_object-keys.js")
  , gOPS     = __webpack_require__("./node_modules/core-js/modules/_object-gops.js")
  , pIE      = __webpack_require__("./node_modules/core-js/modules/_object-pie.js")
  , toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , IObject  = __webpack_require__("./node_modules/core-js/modules/_iobject.js")
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , dPs         = __webpack_require__("./node_modules/core-js/modules/_object-dps.js")
  , enumBugKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js")
  , IE_PROTO    = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/modules/_dom-create.js")('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/modules/_ie8-dom-define.js")
  , toPrimitive    = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
  , dP             = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
  , anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , getKeys  = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/***/ (function(module, exports, __webpack_require__) {

// Forced replacement prototype accessors methods
module.exports = __webpack_require__("./node_modules/core-js/modules/_library.js")|| !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete __webpack_require__("./node_modules/core-js/modules/_global.js")[K];
});

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__("./node_modules/core-js/modules/_object-pie.js")
  , createDesc     = __webpack_require__("./node_modules/core-js/modules/_property-desc.js")
  , toIObject      = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , toPrimitive    = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
  , has            = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/modules/_ie8-dom-define.js")
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , gOPN      = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__("./node_modules/core-js/modules/_object-keys-internal.js")
  , hiddenKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , toObject    = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , IE_PROTO    = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , toIObject    = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , arrayIndexOf = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(false)
  , IE_PROTO     = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__("./node_modules/core-js/modules/_object-keys-internal.js")
  , enumBugKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , core    = __webpack_require__("./node_modules/core-js/modules/_core.js")
  , fails   = __webpack_require__("./node_modules/core-js/modules/_fails.js");
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__("./node_modules/core-js/modules/_object-keys.js")
  , toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , isEnum    = __webpack_require__("./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN     = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js")
  , gOPS     = __webpack_require__("./node_modules/core-js/modules/_object-gops.js")
  , anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , Reflect  = __webpack_require__("./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__("./node_modules/core-js/modules/_global.js").parseFloat
  , $trim       = __webpack_require__("./node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__("./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("./node_modules/core-js/modules/_global.js").parseInt
  , $trim     = __webpack_require__("./node_modules/core-js/modules/_string-trim.js").trim
  , ws        = __webpack_require__("./node_modules/core-js/modules/_string-ws.js")
  , hex       = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ "./node_modules/core-js/modules/_partial.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path      = __webpack_require__("./node_modules/core-js/modules/_path.js")
  , invoke    = __webpack_require__("./node_modules/core-js/modules/_invoke.js")
  , aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_path.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/modules/_global.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , hide      = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , has       = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , SRC       = __webpack_require__("./node_modules/core-js/modules/_uid.js")('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__("./node_modules/core-js/modules/_core.js").inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/***/ (function(module, exports) {

module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__("./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , dP          = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
  , DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js")
  , SPECIES     = __webpack_require__("./node_modules/core-js/modules/_wks.js")('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f
  , has = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , TAG = __webpack_require__("./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/modules/_shared.js")('keys')
  , uid    = __webpack_require__("./node_modules/core-js/modules/_uid.js");
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , SPECIES   = __webpack_require__("./node_modules/core-js/modules/_wks.js")('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");

module.exports = function(method, arg){
  return !!method && fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
  , defined   = __webpack_require__("./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js")
  , defined  = __webpack_require__("./node_modules/core-js/modules/_defined.js");

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , fails   = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , defined = __webpack_require__("./node_modules/core-js/modules/_defined.js")
  , quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , repeat   = __webpack_require__("./node_modules/core-js/modules/_string-repeat.js")
  , defined  = __webpack_require__("./node_modules/core-js/modules/_defined.js");

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
  , defined   = __webpack_require__("./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , defined = __webpack_require__("./node_modules/core-js/modules/_defined.js")
  , fails   = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , spaces  = __webpack_require__("./node_modules/core-js/modules/_string-ws.js")
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
  , invoke             = __webpack_require__("./node_modules/core-js/modules/_invoke.js")
  , html               = __webpack_require__("./node_modules/core-js/modules/_html.js")
  , cel                = __webpack_require__("./node_modules/core-js/modules/_dom-create.js")
  , global             = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__("./node_modules/core-js/modules/_cof.js")(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/modules/_iobject.js")
  , defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if(__webpack_require__("./node_modules/core-js/modules/_descriptors.js")){
  var LIBRARY             = __webpack_require__("./node_modules/core-js/modules/_library.js")
    , global              = __webpack_require__("./node_modules/core-js/modules/_global.js")
    , fails               = __webpack_require__("./node_modules/core-js/modules/_fails.js")
    , $export             = __webpack_require__("./node_modules/core-js/modules/_export.js")
    , $typed              = __webpack_require__("./node_modules/core-js/modules/_typed.js")
    , $buffer             = __webpack_require__("./node_modules/core-js/modules/_typed-buffer.js")
    , ctx                 = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
    , anInstance          = __webpack_require__("./node_modules/core-js/modules/_an-instance.js")
    , propertyDesc        = __webpack_require__("./node_modules/core-js/modules/_property-desc.js")
    , hide                = __webpack_require__("./node_modules/core-js/modules/_hide.js")
    , redefineAll         = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")
    , toInteger           = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
    , toLength            = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
    , toIndex             = __webpack_require__("./node_modules/core-js/modules/_to-index.js")
    , toPrimitive         = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
    , has                 = __webpack_require__("./node_modules/core-js/modules/_has.js")
    , same                = __webpack_require__("./node_modules/core-js/modules/_same-value.js")
    , classof             = __webpack_require__("./node_modules/core-js/modules/_classof.js")
    , isObject            = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
    , toObject            = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
    , isArrayIter         = __webpack_require__("./node_modules/core-js/modules/_is-array-iter.js")
    , create              = __webpack_require__("./node_modules/core-js/modules/_object-create.js")
    , getPrototypeOf      = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
    , gOPN                = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f
    , getIterFn           = __webpack_require__("./node_modules/core-js/modules/core.get-iterator-method.js")
    , uid                 = __webpack_require__("./node_modules/core-js/modules/_uid.js")
    , wks                 = __webpack_require__("./node_modules/core-js/modules/_wks.js")
    , createArrayMethod   = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")
    , createArrayIncludes = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")
    , speciesConstructor  = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js")
    , ArrayIterators      = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js")
    , Iterators           = __webpack_require__("./node_modules/core-js/modules/_iterators.js")
    , $iterDetect         = __webpack_require__("./node_modules/core-js/modules/_iter-detect.js")
    , setSpecies          = __webpack_require__("./node_modules/core-js/modules/_set-species.js")
    , arrayFill           = __webpack_require__("./node_modules/core-js/modules/_array-fill.js")
    , arrayCopyWithin     = __webpack_require__("./node_modules/core-js/modules/_array-copy-within.js")
    , $DP                 = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
    , $GOPD               = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js")
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , DESCRIPTORS    = __webpack_require__("./node_modules/core-js/modules/_descriptors.js")
  , LIBRARY        = __webpack_require__("./node_modules/core-js/modules/_library.js")
  , $typed         = __webpack_require__("./node_modules/core-js/modules/_typed.js")
  , hide           = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , redefineAll    = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")
  , fails          = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , anInstance     = __webpack_require__("./node_modules/core-js/modules/_an-instance.js")
  , toInteger      = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
  , toLength       = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , gOPN           = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f
  , dP             = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f
  , arrayFill      = __webpack_require__("./node_modules/core-js/modules/_array-fill.js")
  , setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js")
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , hide   = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , uid    = __webpack_require__("./node_modules/core-js/modules/_uid.js")
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , core           = __webpack_require__("./node_modules/core-js/modules/_core.js")
  , LIBRARY        = __webpack_require__("./node_modules/core-js/modules/_library.js")
  , wksExt         = __webpack_require__("./node_modules/core-js/modules/_wks-ext.js")
  , defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__("./node_modules/core-js/modules/_shared.js")('wks')
  , uid        = __webpack_require__("./node_modules/core-js/modules/_uid.js")
  , Symbol     = __webpack_require__("./node_modules/core-js/modules/_global.js").Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__("./node_modules/core-js/modules/_classof.js")
  , ITERATOR  = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator')
  , Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_core.js").getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $re     = __webpack_require__("./node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', {copyWithin: __webpack_require__("./node_modules/core-js/modules/_array-copy-within.js")});

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $every  = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', {fill: __webpack_require__("./node_modules/core-js/modules/_array-fill.js")});

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('fill');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $filter = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $find   = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $find   = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $forEach = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(0)
  , STRICT   = __webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
  , $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toObject       = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , call           = __webpack_require__("./node_modules/core-js/modules/_iter-call.js")
  , isArrayIter    = __webpack_require__("./node_modules/core-js/modules/_is-array-iter.js")
  , toLength       = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js")
  , getIterFn      = __webpack_require__("./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_iter-detect.js")(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export       = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $indexOf      = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(false)
  , $native       = [].indexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', {isArray: __webpack_require__("./node_modules/core-js/modules/_is-array.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")
  , step             = __webpack_require__("./node_modules/core-js/modules/_iter-step.js")
  , Iterators        = __webpack_require__("./node_modules/core-js/modules/_iterators.js")
  , toIObject        = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__("./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export       = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toIObject     = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , toInteger     = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
  , toLength      = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , $native       = [].lastIndexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $map    = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $reduce = __webpack_require__("./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $reduce = __webpack_require__("./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export    = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , html       = __webpack_require__("./node_modules/core-js/modules/_html.js")
  , cof        = __webpack_require__("./node_modules/core-js/modules/_cof.js")
  , toIndex    = __webpack_require__("./node_modules/core-js/modules/_to-index.js")
  , toLength   = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $some   = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , toObject  = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , fails     = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , $sort     = [].sort
  , test      = [1, 2, 3];

$export($export.P + $export.F * (fails(function(){
  // IE8-
  test.sort(undefined);
}) || !fails(function(){
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_set-species.js")('Array');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , fails   = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export     = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toObject    = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__("./node_modules/core-js/modules/_wks.js")('toPrimitive')
  , proto        = Date.prototype;

if(!(TO_PRIMITIVE in proto))__webpack_require__("./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__("./node_modules/core-js/modules/_date-to-primitive.js"));

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/***/ (function(module, exports, __webpack_require__) {

var DateProto    = Date.prototype
  , INVALID_DATE = 'Invalid Date'
  , TO_STRING    = 'toString'
  , $toString    = DateProto[TO_STRING]
  , getTime      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString(){
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', {bind: __webpack_require__("./node_modules/core-js/modules/_bind.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject       = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , HAS_INSTANCE   = __webpack_require__("./node_modules/core-js/modules/_wks.js")('hasInstance')
  , FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))__webpack_require__("./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f
  , createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js")
  , has        = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || __webpack_require__("./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/modules/_collection-strong.js");

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/modules/_collection.js")('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , log1p   = __webpack_require__("./node_modules/core-js/modules/_math-log1p.js")
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , sign    = __webpack_require__("./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $expm1  = __webpack_require__("./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , sign      = __webpack_require__("./node_modules/core-js/modules/_math-sign.js")
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {log1p: __webpack_require__("./node_modules/core-js/modules/_math-log1p.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {sign: __webpack_require__("./node_modules/core-js/modules/_math-sign.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , expm1   = __webpack_require__("./node_modules/core-js/modules/_math-expm1.js")
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , expm1   = __webpack_require__("./node_modules/core-js/modules/_math-expm1.js")
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , has               = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , cof               = __webpack_require__("./node_modules/core-js/modules/_cof.js")
  , inheritIfRequired = __webpack_require__("./node_modules/core-js/modules/_inherit-if-required.js")
  , toPrimitive       = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
  , fails             = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , gOPN              = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f
  , gOPD              = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f
  , dP                = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f
  , $trim             = __webpack_require__("./node_modules/core-js/modules/_string-trim.js").trim
  , NUMBER            = 'Number'
  , $Number           = global[NUMBER]
  , Base              = $Number
  , proto             = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF        = cof(__webpack_require__("./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER
  , TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , _isFinite = __webpack_require__("./node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {isInteger: __webpack_require__("./node_modules/core-js/modules/_is-integer.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , isInteger = __webpack_require__("./node_modules/core-js/modules/_is-integer.js")
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/***/ (function(module, exports, __webpack_require__) {

var $export     = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $parseFloat = __webpack_require__("./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $parseInt = __webpack_require__("./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toInteger    = __webpack_require__("./node_modules/core-js/modules/_to-integer.js")
  , aNumberValue = __webpack_require__("./node_modules/core-js/modules/_a-number-value.js")
  , repeat       = __webpack_require__("./node_modules/core-js/modules/_string-repeat.js")
  , $toFixed     = 1..toFixed
  , floor        = Math.floor
  , data         = [0, 0, 0, 0, 0, 0]
  , ERROR        = 'Number.toFixed: incorrect invocation!'
  , ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $fails       = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , aNumberValue = __webpack_require__("./node_modules/core-js/modules/_a-number-value.js")
  , $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', {assign: __webpack_require__("./node_modules/core-js/modules/_object-assign.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__("./node_modules/core-js/modules/_object-create.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_descriptors.js"), 'Object', {defineProperties: __webpack_require__("./node_modules/core-js/modules/_object-dps.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_descriptors.js"), 'Object', {defineProperty: __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , meta     = __webpack_require__("./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , $getOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function(){
  return __webpack_require__("./node_modules/core-js/modules/_object-gopn-ext.js").f;
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , $getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', {is: __webpack_require__("./node_modules/core-js/modules/_same-value.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , $keys    = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , meta     = __webpack_require__("./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , meta     = __webpack_require__("./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__("./node_modules/core-js/modules/_set-proto.js").set});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js")
  , test    = {};
test[__webpack_require__("./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/***/ (function(module, exports, __webpack_require__) {

var $export     = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $parseFloat = __webpack_require__("./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $parseInt = __webpack_require__("./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__("./node_modules/core-js/modules/_library.js")
  , global             = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , ctx                = __webpack_require__("./node_modules/core-js/modules/_ctx.js")
  , classof            = __webpack_require__("./node_modules/core-js/modules/_classof.js")
  , $export            = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , isObject           = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , aFunction          = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , anInstance         = __webpack_require__("./node_modules/core-js/modules/_an-instance.js")
  , forOf              = __webpack_require__("./node_modules/core-js/modules/_for-of.js")
  , speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js")
  , task               = __webpack_require__("./node_modules/core-js/modules/_task.js").set
  , microtask          = __webpack_require__("./node_modules/core-js/modules/_microtask.js")()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__("./node_modules/core-js/modules/_wks.js")('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("./node_modules/core-js/modules/_iter-detect.js")(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , anObject  = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , rApply    = (__webpack_require__("./node_modules/core-js/modules/_global.js").Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , create     = __webpack_require__("./node_modules/core-js/modules/_object-create.js")
  , aFunction  = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , anObject   = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , isObject   = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , fails      = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , bind       = __webpack_require__("./node_modules/core-js/modules/_bind.js")
  , rConstruct = (__webpack_require__("./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
  , $export     = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , anObject    = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , gOPD     = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f
  , anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
__webpack_require__("./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js")
  , $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , getProto = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js")
  , getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , has            = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , isObject       = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , anObject       = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export       = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , anObject      = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {ownKeys: __webpack_require__("./node_modules/core-js/modules/_own-keys.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export            = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , anObject           = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , setProto = __webpack_require__("./node_modules/core-js/modules/_set-proto.js");

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
  , gOPD           = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js")
  , getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , has            = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , createDesc     = __webpack_require__("./node_modules/core-js/modules/_property-desc.js")
  , anObject       = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , isObject       = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var global            = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , inheritIfRequired = __webpack_require__("./node_modules/core-js/modules/_inherit-if-required.js")
  , dP                = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f
  , gOPN              = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f
  , isRegExp          = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js")
  , $flags            = __webpack_require__("./node_modules/core-js/modules/_flags.js")
  , $RegExp           = global.RegExp
  , Base              = $RegExp
  , proto             = $RegExp.prototype
  , re1               = /a/g
  , re2               = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW       = new $RegExp(re1) !== re1;

if(__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  re2[__webpack_require__("./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  };
  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__("./node_modules/core-js/modules/_set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if(__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g')__webpack_require__("./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("./node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js")
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject    = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , $flags      = __webpack_require__("./node_modules/core-js/modules/_flags.js")
  , DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js")
  , TO_STRING   = 'toString'
  , $toString   = /./[TO_STRING];

var define = function(fn){
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(__webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString.name != TO_STRING){
  define(function toString(){
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/modules/_collection-strong.js");

// 23.2 Set Objects
module.exports = __webpack_require__("./node_modules/core-js/modules/_collection.js")('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $at     = __webpack_require__("./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toLength  = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , context   = __webpack_require__("./node_modules/core-js/modules/_string-context.js")
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/***/ (function(module, exports, __webpack_require__) {

var $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toIndex        = __webpack_require__("./node_modules/core-js/modules/_to-index.js")
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , context  = __webpack_require__("./node_modules/core-js/modules/_string-context.js")
  , INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__("./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/modules/_iter-define.js")(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , toLength  = __webpack_require__("./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__("./node_modules/core-js/modules/_string-repeat.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export     = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toLength    = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , context     = __webpack_require__("./node_modules/core-js/modules/_string-context.js")
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__("./node_modules/core-js/modules/_string-trim.js")('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , has            = __webpack_require__("./node_modules/core-js/modules/_has.js")
  , DESCRIPTORS    = __webpack_require__("./node_modules/core-js/modules/_descriptors.js")
  , $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , redefine       = __webpack_require__("./node_modules/core-js/modules/_redefine.js")
  , META           = __webpack_require__("./node_modules/core-js/modules/_meta.js").KEY
  , $fails         = __webpack_require__("./node_modules/core-js/modules/_fails.js")
  , shared         = __webpack_require__("./node_modules/core-js/modules/_shared.js")
  , setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js")
  , uid            = __webpack_require__("./node_modules/core-js/modules/_uid.js")
  , wks            = __webpack_require__("./node_modules/core-js/modules/_wks.js")
  , wksExt         = __webpack_require__("./node_modules/core-js/modules/_wks-ext.js")
  , wksDefine      = __webpack_require__("./node_modules/core-js/modules/_wks-define.js")
  , keyOf          = __webpack_require__("./node_modules/core-js/modules/_keyof.js")
  , enumKeys       = __webpack_require__("./node_modules/core-js/modules/_enum-keys.js")
  , isArray        = __webpack_require__("./node_modules/core-js/modules/_is-array.js")
  , anObject       = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , toIObject      = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , toPrimitive    = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
  , createDesc     = __webpack_require__("./node_modules/core-js/modules/_property-desc.js")
  , _create        = __webpack_require__("./node_modules/core-js/modules/_object-create.js")
  , gOPNExt        = __webpack_require__("./node_modules/core-js/modules/_object-gopn-ext.js")
  , $GOPD          = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js")
  , $DP            = __webpack_require__("./node_modules/core-js/modules/_object-dp.js")
  , $keys          = __webpack_require__("./node_modules/core-js/modules/_object-keys.js")
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/core-js/modules/_object-pie.js").f  = $propertyIsEnumerable;
  __webpack_require__("./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__("./node_modules/core-js/modules/_library.js")){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $typed       = __webpack_require__("./node_modules/core-js/modules/_typed.js")
  , buffer       = __webpack_require__("./node_modules/core-js/modules/_typed-buffer.js")
  , anObject     = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , toIndex      = __webpack_require__("./node_modules/core-js/modules/_to-index.js")
  , toLength     = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , isObject     = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , ArrayBuffer  = __webpack_require__("./node_modules/core-js/modules/_global.js").ArrayBuffer
  , speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js")
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__("./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__("./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__("./node_modules/core-js/modules/_typed-buffer.js").DataView
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each         = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(0)
  , redefine     = __webpack_require__("./node_modules/core-js/modules/_redefine.js")
  , meta         = __webpack_require__("./node_modules/core-js/modules/_meta.js")
  , assign       = __webpack_require__("./node_modules/core-js/modules/_object-assign.js")
  , weak         = __webpack_require__("./node_modules/core-js/modules/_collection-weak.js")
  , isObject     = __webpack_require__("./node_modules/core-js/modules/_is-object.js")
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__("./node_modules/core-js/modules/_collection.js")('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__("./node_modules/core-js/modules/_collection-weak.js");

// 23.4 WeakSet Objects
__webpack_require__("./node_modules/core-js/modules/_collection.js")('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $includes = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('includes');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export   = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , microtask = __webpack_require__("./node_modules/core-js/modules/_microtask.js")()
  , process   = __webpack_require__("./node_modules/core-js/modules/_global.js").process
  , isNode    = __webpack_require__("./node_modules/core-js/modules/_cof.js")(process) == 'process';

$export($export.G, {
  asap: function asap(fn){
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , cof     = __webpack_require__("./node_modules/core-js/modules/_cof.js");

$export($export.S, 'Error', {
  isError: function isError(it){
    return cof(it) === 'Error';
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__("./node_modules/core-js/modules/_collection-to-json.js")('Map')});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export         = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toObject        = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , aFunction       = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , $defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export         = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toObject        = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , aFunction       = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , $defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $entries = __webpack_require__("./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , ownKeys        = __webpack_require__("./node_modules/core-js/modules/_own-keys.js")
  , toIObject      = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js")
  , gOPD           = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js")
  , createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export                  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toObject                 = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , toPrimitive              = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
  , getPrototypeOf           = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , getOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export                  = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , toObject                 = __webpack_require__("./node_modules/core-js/modules/_to-object.js")
  , toPrimitive              = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js")
  , getPrototypeOf           = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , getOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $values = __webpack_require__("./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export     = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , global      = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , core        = __webpack_require__("./node_modules/core-js/modules/_core.js")
  , microtask   = __webpack_require__("./node_modules/core-js/modules/_microtask.js")()
  , OBSERVABLE  = __webpack_require__("./node_modules/core-js/modules/_wks.js")('observable')
  , aFunction   = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , anObject    = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , anInstance  = __webpack_require__("./node_modules/core-js/modules/_an-instance.js")
  , redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")
  , hide        = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , forOf       = __webpack_require__("./node_modules/core-js/modules/_for-of.js")
  , RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core.Promise || global.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export($export.G, {Observable: $Observable});

__webpack_require__("./node_modules/core-js/modules/_set-species.js")('Observable');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata                  = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject                  = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject               = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , toMetaKey              = metadata.key
  , getOrCreateMetadataMap = metadata.map
  , store                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/***/ (function(module, exports, __webpack_require__) {

var Set                     = __webpack_require__("./node_modules/core-js/modules/es6.set.js")
  , from                    = __webpack_require__("./node_modules/core-js/modules/_array-from-iterable.js")
  , metadata                = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject                = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , getPrototypeOf          = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject               = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , getPrototypeOf         = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , ordinaryHasOwnMetadata = metadata.has
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata                = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject                = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject               = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject               = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , getPrototypeOf         = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js")
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject               = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata                  = __webpack_require__("./node_modules/core-js/modules/_metadata.js")
  , anObject                  = __webpack_require__("./node_modules/core-js/modules/_an-object.js")
  , aFunction                 = __webpack_require__("./node_modules/core-js/modules/_a-function.js")
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__("./node_modules/core-js/modules/_collection-to-json.js")('Set')});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $at     = __webpack_require__("./node_modules/core-js/modules/_string-at.js")(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export     = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , defined     = __webpack_require__("./node_modules/core-js/modules/_defined.js")
  , toLength    = __webpack_require__("./node_modules/core-js/modules/_to-length.js")
  , isRegExp    = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js")
  , getFlags    = __webpack_require__("./node_modules/core-js/modules/_flags.js")
  , RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

__webpack_require__("./node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $pad    = __webpack_require__("./node_modules/core-js/modules/_string-pad.js");

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $pad    = __webpack_require__("./node_modules/core-js/modules/_string-pad.js");

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__("./node_modules/core-js/modules/_string-trim.js")('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__("./node_modules/core-js/modules/_string-trim.js")('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_wks-define.js")('observable');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-global
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'System', {global: __webpack_require__("./node_modules/core-js/modules/_global.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var $iterators    = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js")
  , redefine      = __webpack_require__("./node_modules/core-js/modules/_redefine.js")
  , global        = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , hide          = __webpack_require__("./node_modules/core-js/modules/_hide.js")
  , Iterators     = __webpack_require__("./node_modules/core-js/modules/_iterators.js")
  , wks           = __webpack_require__("./node_modules/core-js/modules/_wks.js")
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , $task   = __webpack_require__("./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global     = __webpack_require__("./node_modules/core-js/modules/_global.js")
  , $export    = __webpack_require__("./node_modules/core-js/modules/_export.js")
  , invoke     = __webpack_require__("./node_modules/core-js/modules/_invoke.js")
  , partial    = __webpack_require__("./node_modules/core-js/modules/_partial.js")
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),

/***/ "./node_modules/core-js/shim.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__("./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__("./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__("./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__("./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__("./node_modules/core-js/modules/es6.promise.js");
__webpack_require__("./node_modules/core-js/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/modules/es6.set.js");
__webpack_require__("./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__("./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.at.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.pad-start.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.pad-end.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.trim-left.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.trim-right.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.match-all.js");
__webpack_require__("./node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/core-js/modules/es7.symbol.observable.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.values.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.entries.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.define-getter.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.define-setter.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.lookup-getter.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.lookup-setter.js");
__webpack_require__("./node_modules/core-js/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/modules/es7.set.to-json.js");
__webpack_require__("./node_modules/core-js/modules/es7.system.global.js");
__webpack_require__("./node_modules/core-js/modules/es7.error.is-error.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.iaddh.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.isubh.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.imulh.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.umulh.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.asap.js");
__webpack_require__("./node_modules/core-js/modules/es7.observable.js");
__webpack_require__("./node_modules/core-js/modules/web.timers.js");
__webpack_require__("./node_modules/core-js/modules/web.immediate.js");
__webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/json-stringify-safe/stringify.js":
/***/ (function(module, exports) {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__("./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = Symbol;


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__("./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__("./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__("./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__("./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = getPrototype;


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__("./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = getRawTag;


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = objectToString;


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = overArg;


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__("./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = root;


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__("./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__("./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__("./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = isPlainObject;


/***/ }),

/***/ "./node_modules/preact-compat/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proptypes__ = __webpack_require__("./node_modules/proptypes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_proptypes___default.a; });
/* unused harmony export version */
/* unused harmony export DOM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Children; });
/* unused harmony export render */
/* unused harmony export createClass */
/* unused harmony export createFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export cloneElement */
/* unused harmony export isValidElement */
/* unused harmony export findDOMNode */
/* unused harmony export unmountComponentAtNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Component; });
/* unused harmony export PureComponent */
/* unused harmony export unstable_renderSubtreeIntoContainer */



const version = '15.1.0'; // trick libraries to think we are react

const ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

const REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

const COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
const AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


const CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;


const BYPASS_HOOK = {};

/*global process*/
const DEV = typeof process==='undefined' || !process.env || "production"!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
let VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get() { return this.nodeName; },
	set(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get() { return this.attributes; },
	set(v) { this.attributes = v; },
	configurable:true
});



let oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = e => {
	if (oldEventHook) e = oldEventHook(e);
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


let oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = vnode => {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		let tag = vnode.nodeName,
			attrs = vnode.attributes;

		if (!attrs) attrs = vnode.attributes = {};

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && !vnode.children.length) vnode.children = undefined;
				if (vnode.children) attrs.children = vnode.children;

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && !vnode.children.length) vnode.children = undefined;
			if (vnode.children) attrs.children = vnode.children;

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) oldVnodeHook(vnode);
};

function handleComponentVNode(vnode) {
	let tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) extend(vnode.attributes, tag.defaultProps);
	if (a) extend(vnode.attributes, a);
}

function handleElementVNode(vnode, a) {
	let shouldSanitize, attrs, i;
	if (a) {
		for (i in a) if ((shouldSanitize = CAMEL_PROPS.test(i))) break;
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render(vnode, parent, callback) {
	let prev = parent && parent._preactCompatRendered;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) prev = null;

	// default to first Element child
	if (!prev) prev = parent.children[0];

	// remove unaffected siblings
	for (let i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	let out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) parent._preactCompatRendered = out;
	if (typeof callback==='function') callback();
	return out && out._component || out.base;
}


class ContextProvider {
	getChildContext() {
		return this.props.context;
	}
	render(props) {
		return props.children[0];
	}
}

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	let wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	let c = render(wrap, container);
	if (callback) callback(c);
	return c;
}


function unmountComponentAtNode(container) {
	let existing = container._preactCompatRendered;
	if (existing && existing.parentNode===container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



const ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
let Children = {
	map(children, fn, ctx) {
		if (children == null) return null;
		children = Children.toArray(children);
		if (ctx && ctx!==children) fn = fn.bind(ctx);
		return children.map(fn);
	},
	forEach(children, fn, ctx) {
		if (children == null) return null;
		children = Children.toArray(children);
		if (ctx && ctx!==children) fn = fn.bind(ctx);
		children.forEach(fn);
	},
	count(children) {
		return children && children.length || 0;
	},
	only(children) {
		children = Children.toArray(children);
		if (children.length!==1) throw new Error('Children.only() expects only one child.');
		return children[0];
	},
	toArray(children) {
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
let currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


let DOM = {};
for (let i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (let i=offset || 0; i<arr.length; i++) {
		let obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	let Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) return Wrapped===true ? Ctor : Wrapped;

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement(...args) {
	upgradeToVNodes(args, 2);
	return normalizeVNode(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(...args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	let ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement(element, props, ...children) {
	if (!isValidElement(element)) return element;
	let elementProps = element.attributes || element.props;
	let node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
		element.nodeName || element.type,
		elementProps,
		element.children || elementProps && elementProps.children
	);
	return normalizeVNode(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"])(node, props, ...children));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = resolved => {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization({ nodeName, attributes }) {
	if (!attributes || typeof nodeName!=='string') return;
	let props = {};
	for (let i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		let normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName({ attributes }) {
	if (!attributes) return;
	let cl = attributes.className || attributes.class;
	if (cl) attributes.className = cl;
}


function extend(base, props) {
	for (let key in props) {
		if (props.hasOwnProperty(key)) {
			base[key] = props[key];
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (let i in a) if (!(i in b)) return true;
	for (let i in b) if (a[i]!==b[i]) return true;
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	let keyed = {};
	for (let i=0; i<mixins.length; i++) {
		let mixin = mixins[i];
		for (let key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (let key in mixins) if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	}
}


function bindAll(ctx) {
	for (let i in ctx) {
		let v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		let ret;
		for (let i=0; i<hooks.length; i++) {
			let r = callMethod(this, hooks[i], arguments);

			if (skipDuplicates && r!=null) {
				if (!ret) ret = {};
				for (let key in r) if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				}
			}
			else if (typeof r!=='undefined') ret = r;
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) return;

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	let c = props.children;
	if (c && Array.isArray(c) && c.length===1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		let ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		if (propTypes) {
			for (let prop in propTypes) {
				if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop]==='function') {
					const displayName = this.displayName || ctor.name;
					let err = propTypes[prop](props, prop, displayName, 'prop');
					if (err) console.error(new Error(err.message || err));
				}
			}
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component,

	isReactComponent: {},

	replaceState(state, callback) {
		this.setState(state, callback);
		for (let i in this.state) {
			if (!(i in state)) {
				delete this.state[i];
			}
		}
	},

	getDOMNode() {
		return this.base;
	},

	isMounted() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component.call(this, props, context);
}
F.prototype = Component.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};





/* unused harmony default export */ var _unused_webpack_default_export = {
	version,
	DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_proptypes___default.a,
	Children,
	render,
	createClass,
	createFactory,
	createElement,
	cloneElement,
	isValidElement,
	findDOMNode,
	unmountComponentAtNode,
	Component,
	PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/preact-router/dist/preact-router.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__("./node_modules/preact/dist/preact.js")) :
	typeof define === 'function' && define.amd ? define(['preact'], factory) :
	(global.preactRouter = factory(global.preact));
}(this, (function (preact) { 'use strict';

var EMPTY$1 = {};

function exec(url, route) {
	var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY$1;

	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret = void 0;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var _i = 0; _i < max; _i++) {
		if (route[_i] && route[_i].charAt(0) === ':') {
			var param = route[_i].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[_i].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[_i] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(_i).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[_i] !== url[_i]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) return false;
	return matches;
}

function pathRankSort(a, b) {
	var aAttr = a.attributes || EMPTY$1,
	    bAttr = b.attributes || EMPTY$1;
	if (aAttr.default) return 1;
	if (bAttr.default) return -1;
	var diff = rank(aAttr.path) - rank(bAttr.path);
	return diff || aAttr.path.length - bAttr.path.length;
}

function segmentize(url) {
	return strip(url).split('/');
}

function rank(url) {
	return (strip(url).match(/\/+/g) || '').length;
}

function strip(url) {
	return url.replace(/(^\/+|\/+$)/g, '');
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customHistory = null;

var ROUTERS = [];

var EMPTY = {};

// hangs off all elements created by preact
var ATTR_KEY = typeof Symbol !== 'undefined' ? Symbol.for('preactattr') : '__preactattr_';

function isPreactElement(node) {
	return ATTR_KEY in node;
}

function setUrl(url) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url = void 0;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return '' + (url.pathname || '') + (url.search || '');
}

function route(url) {
	var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) return true;
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) return;

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) return;

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button !== 0) return;
	routeFromLink(e.currentTarget || e.target || this);
	return prevent(e);
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) e.stopImmediatePropagation();
		if (e.stopPropagation) e.stopPropagation();
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (e.button !== 0) return;
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

if (typeof addEventListener === 'function') {
	addEventListener('popstate', function () {
		return routeTo(getCurrentUrl());
	});
	addEventListener('click', delegateLinkHandler);
}

var Link = function Link(props) {
	return preact.h('a', _extends({}, props, { onClick: handleLinkClick }));
};

var Router = function (_Component) {
	_inherits(Router, _Component);

	function Router(props) {
		_classCallCheck(this, Router);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		if (props.history) {
			customHistory = props.history;
		}

		_this.state = {
			url: _this.props.url || getCurrentUrl()
		};
		return _this;
	}

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) return true;
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */


	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */


	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) return this.canRoute(url);

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.slice().sort(pathRankSort).filter(function (_ref) {
			var attributes = _ref.attributes;

			var path = attributes.path,
			    matches = exec(url, path, attributes);
			if (matches) {
				if (invoke !== false) {
					attributes.url = url;
					attributes.matches = matches;
					// copy matches onto props
					for (var i in matches) {
						if (matches.hasOwnProperty(i)) {
							attributes[i] = matches[i];
						}
					}
				}
				return true;
			}
		});
	};

	Router.prototype.render = function render(_ref2, _ref3) {
		var children = _ref2.children,
		    onChange = _ref2.onChange;
		var url = _ref3.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact.Component);

var Route = function Route(_ref4) {
	var component = _ref4.component,
	    url = _ref4.url,
	    matches = _ref4.matches;

	return preact.h(component, { url: url, matches: matches });
};

Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

return Router;

})));
//# sourceMappingURL=preact-router.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/proptypes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.PropTypes = mod.exports;
  }
})(this, function (exports, module) {

  'use strict';

  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var ReactElement = {};

  ReactElement.isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  var ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };

  var emptyFunction = {
    thatReturns: function thatReturns(what) {
      return function () {
        return what;
      };
    }
  };

  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  var ANONYMOUS = '<<anonymous>>';

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];

        var preciseType = getPreciseType(propValue);

        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }

  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  module.exports = ReactPropTypes;
});

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/preact-compat/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Subscription__ = __webpack_require__("./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_storeShape__ = __webpack_require__("./node_modules/react-redux/es/utils/storeShape.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  Provider.prototype.getChildContext = function getChildContext() {
    return { store: this.store, storeSubscription: null };
  };

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  Provider.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["d" /* Children */].only(this.props.children);
  };

  return Provider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["c" /* Component */]);




if (false) {
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    var store = this.store;
    var nextStore = nextProps.store;


    if (store !== nextStore) {
      warnAboutReceivingStore();
    }
  };
}

Provider.propTypes = {
  store: __WEBPACK_IMPORTED_MODULE_2__utils_storeShape__["a" /* default */].isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["a" /* PropTypes */].element.isRequired
};
Provider.childContextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_2__utils_storeShape__["a" /* default */].isRequired,
  storeSubscription: __WEBPACK_IMPORTED_MODULE_0_react__["a" /* PropTypes */].instanceOf(__WEBPACK_IMPORTED_MODULE_1__utils_Subscription__["a" /* default */])
};
Provider.displayName = 'Provider';

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/preact-compat/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__("./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_storeShape__ = __webpack_require__("./node_modules/react-redux/es/utils/storeShape.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_storeShape__["a" /* default */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2_react__["a" /* PropTypes */].instanceOf(__WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */]), _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2_react__["a" /* PropTypes */].instanceOf(__WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */]), _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + WrappedComponent));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = _this.props[storeKey] || _this.context[storeKey];
        _this.parentSub = props[subscriptionKey] || context[subscriptionKey];

        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or ' + ('props of "' + displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        // make sure `getState` is properly bound in order to avoid breaking
        // custom store implementations that rely on the store's context
        _this.getState = _this.store.getState.bind(_this.store);

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        return _ref2 = {}, _ref2[subscriptionKey] = this.subscription || this.parentSub, _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        // these are just to guard against extra memory leakage if a parent element doesn't
        // dereference this instance properly, such as an async callback that never finishes
        this.subscription = null;
        this.store = null;
        this.parentSub = null;
        this.selector.run = function () {};
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var dispatch = this.store.dispatch;
        var getState = this.getState;

        var sourceSelector = selectorFactory(dispatch, selectorFactoryOptions);

        // wrap the selector in an object that tracks its results between runs
        var selector = this.selector = {
          shouldComponentUpdate: true,
          props: sourceSelector(getState(), this.props),
          run: function runComponentSelector(props) {
            try {
              var nextProps = sourceSelector(getState(), props);
              if (selector.error || nextProps !== selector.props) {
                selector.shouldComponentUpdate = true;
                selector.props = nextProps;
                selector.error = null;
              }
            } catch (error) {
              selector.shouldComponentUpdate = true;
              selector.error = error;
            }
          }
        };
      };

      Connect.prototype.initSubscription = function initSubscription() {
        var _this2 = this;

        if (shouldHandleStateChanges) {
          (function () {
            var subscription = _this2.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](_this2.store, _this2.parentSub);
            var dummyState = {};

            subscription.onStateChange = function onStateChange() {
              this.selector.run(this.props);

              if (!this.selector.shouldComponentUpdate) {
                subscription.notifyNestedSubs();
              } else {
                this.componentDidUpdate = function componentDidUpdate() {
                  this.componentDidUpdate = undefined;
                  subscription.notifyNestedSubs();
                };

                this.setState(dummyState);
              }
            }.bind(_this2);
          })();
        }
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["b" /* createElement */])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["c" /* Component */]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__("./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__("./node_modules/react-redux/es/connect/selectorFactory.js");
/* unused harmony export createConnect */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = createConnect();

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* bindActionCreators */])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__("./node_modules/react-redux/es/connect/verifySubselectors.js");
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");
/* unused harmony export default */


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsFunc;


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__("./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      // this.onStateChange is set by connectAdvanced.initSubscription()
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function shallowEqual(a, b) {
  if (a === b) return true;

  var countA = 0;
  var countB = 0;

  for (var key in a) {
    if (hasOwn.call(a, key) && a[key] !== b[key]) return false;
    countA++;
  }

  for (var _key in b) {
    if (hasOwn.call(b, _key)) countB++;
  }

  return countA === countB;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/storeShape.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/preact-compat/src/index.js");


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_react__["a" /* PropTypes */].shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["a" /* PropTypes */].func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["a" /* PropTypes */].func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_react__["a" /* PropTypes */].func.isRequired
});

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");
/* unused harmony export default */



function verifyPlainObject(value, displayName, methodName) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "./node_modules/redux-persist/es/autoRehydrate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./node_modules/redux-persist/es/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_isStatePlainEnough__ = __webpack_require__("./node_modules/redux-persist/es/utils/isStatePlainEnough.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = autoRehydrate;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function autoRehydrate() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var stateReconciler = config.stateReconciler || defaultStateReconciler;

  return function (next) {
    return function (reducer, initialState, enhancer) {
      var store = next(liftReducer(reducer), initialState, enhancer);
      return _extends({}, store, {
        replaceReducer: function replaceReducer(reducer) {
          return store.replaceReducer(liftReducer(reducer));
        }
      });
    };
  };

  function liftReducer(reducer) {
    var rehydrated = false;
    var preRehydrateActions = [];
    return function (state, action) {
      if (action.type !== __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REHYDRATE */]) {
        if (config.log && !rehydrated) preRehydrateActions.push(action); // store pre-rehydrate actions for debugging
        return reducer(state, action);
      } else {
        if (config.log && !rehydrated) logPreRehydrate(preRehydrateActions);
        rehydrated = true;

        var inboundState = action.payload;
        var reducedState = reducer(state, action);

        return stateReconciler(state, inboundState, reducedState, config.log);
      }
    };
  }
}

function logPreRehydrate(preRehydrateActions) {
  if (preRehydrateActions.length > 0) {
    console.log('\n      redux-persist/autoRehydrate: %d actions were fired before rehydration completed. This can be a symptom of a race\n      condition where the rehydrate action may overwrite the previously affected state. Consider running these actions\n      after rehydration:\n    ', preRehydrateActions.length);
  }
}

function defaultStateReconciler(state, inboundState, reducedState, log) {
  var newState = _extends({}, reducedState);

  Object.keys(inboundState).forEach(function (key) {
    // if initialState does not have key, skip auto rehydration
    if (!state.hasOwnProperty(key)) return;

    // if initial state is an object but inbound state is null/undefined, skip
    if (_typeof(state[key]) === 'object' && !inboundState[key]) {
      if (log) console.log('redux-persist/autoRehydrate: sub state for key `%s` is falsy but initial state is an object, skipping autoRehydrate.', key);
      return;
    }

    // if reducer modifies substate, skip auto rehydration
    if (state[key] !== reducedState[key]) {
      if (log) console.log('redux-persist/autoRehydrate: sub state for key `%s` modified, skipping autoRehydrate.', key);
      newState[key] = reducedState[key];
      return;
    }

    // otherwise take the inboundState
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_isStatePlainEnough__["a" /* default */])(inboundState[key]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_isStatePlainEnough__["a" /* default */])(state[key])) newState[key] = _extends({}, state[key], inboundState[key]); // shallow merge
    else newState[key] = inboundState[key]; // hard set

    if (log) console.log('redux-persist/autoRehydrate: key `%s`, rehydrated to ', key, newState[key]);
  });
  return newState;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KEY_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REHYDRATE; });
var KEY_PREFIX = 'reduxPersist:';
var REHYDRATE = 'persist/REHYDRATE';

/***/ }),

/***/ "./node_modules/redux-persist/es/createPersistor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./node_modules/redux-persist/es/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_asyncLocalStorage__ = __webpack_require__("./node_modules/redux-persist/es/defaults/asyncLocalStorage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purgeStoredState__ = __webpack_require__("./node_modules/redux-persist/es/purgeStoredState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json_stringify_safe__ = __webpack_require__("./node_modules/json-stringify-safe/stringify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json_stringify_safe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_json_stringify_safe__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createPersistor;





function createPersistor(store, config) {
  // defaults
  var serializer = config.serialize === false ? function (data) {
    return data;
  } : defaultSerializer;
  var deserializer = config.serialize === false ? function (data) {
    return data;
  } : defaultDeserializer;
  var blacklist = config.blacklist || [];
  var whitelist = config.whitelist || false;
  var transforms = config.transforms || [];
  var debounce = config.debounce || false;
  var keyPrefix = config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_PREFIX */];

  // pluggable state shape (e.g. immutablejs)
  var stateInit = config._stateInit || {};
  var stateIterator = config._stateIterator || defaultStateIterator;
  var stateGetter = config._stateGetter || defaultStateGetter;
  var stateSetter = config._stateSetter || defaultStateSetter;

  // storage with keys -> getAllKeys for localForage support
  var storage = config.storage || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__defaults_asyncLocalStorage__["a" /* default */])('local');
  if (storage.keys && !storage.getAllKeys) {
    storage.getAllKeys = storage.keys;
  }

  // initialize stateful values
  var lastState = stateInit;
  var paused = false;
  var storesToProcess = [];
  var timeIterator = null;

  store.subscribe(function () {
    if (paused) return;

    var state = store.getState();

    stateIterator(state, function (subState, key) {
      if (!passWhitelistBlacklist(key)) return;
      if (stateGetter(lastState, key) === stateGetter(state, key)) return;
      if (storesToProcess.indexOf(key) !== -1) return;
      storesToProcess.push(key);
    });

    // time iterator (read: debounce)
    if (timeIterator === null) {
      timeIterator = setInterval(function () {
        if (storesToProcess.length === 0) {
          clearInterval(timeIterator);
          timeIterator = null;
          return;
        }

        var key = storesToProcess[0];
        var storageKey = createStorageKey(key);
        var endState = transforms.reduce(function (subState, transformer) {
          return transformer.in(subState, key);
        }, stateGetter(store.getState(), key));
        if (typeof endState !== 'undefined') storage.setItem(storageKey, serializer(endState), warnIfSetError(key));
        storesToProcess.shift();
      }, debounce);
    }

    lastState = state;
  });

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return false;
    if (blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function adhocRehydrate(incoming) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var state = {};
    if (options.serial) {
      stateIterator(incoming, function (subState, key) {
        try {
          var data = deserializer(subState);
          var value = transforms.reduceRight(function (interState, transformer) {
            return transformer.out(interState, key);
          }, data);
          state = stateSetter(state, key, value);
        } catch (err) {
          if (false) console.warn('Error rehydrating data for key "' + key + '"', subState, err);
        }
      });
    } else state = incoming;

    store.dispatch(rehydrateAction(state));
    return state;
  }

  function createStorageKey(key) {
    return '' + keyPrefix + key;
  }

  // return `persistor`
  return {
    rehydrate: adhocRehydrate,
    pause: function pause() {
      paused = true;
    },
    resume: function resume() {
      paused = false;
    },
    purge: function purge(keys) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__purgeStoredState__["a" /* default */])({ storage: storage, keyPrefix: keyPrefix }, keys);
    }
  };
}

function warnIfSetError(key) {
  return function setError(err) {
    if (err && "production" !== 'production') {
      console.warn('Error storing data for key:', key, err);
    }
  };
}

function defaultSerializer(data) {
  return __WEBPACK_IMPORTED_MODULE_3_json_stringify_safe___default()(data, null, null, function (k, v) {
    if (false) return null;
    throw new Error('\n      redux-persist: cannot process cyclical state.\n      Consider changing your state structure to have no cycles.\n      Alternatively blacklist the corresponding reducer key.\n      Cycle encounted at key "' + k + '" with value "' + v + '".\n    ');
  });
}

function defaultDeserializer(serial) {
  return JSON.parse(serial);
}

function rehydrateAction(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REHYDRATE */],
    payload: data
  };
}

function defaultStateIterator(collection, callback) {
  return Object.keys(collection).forEach(function (key) {
    return callback(collection[key], key);
  });
}

function defaultStateGetter(state, key) {
  return state[key];
}

function defaultStateSetter(state, key, value) {
  state[key] = value;
  return state;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/createTransform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function createTransform(inbound, outbound) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var whitelist = config.whitelist || null;
  var blacklist = config.blacklist || null;

  function whitelistBlacklistCheck(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return true;
    if (blacklist && blacklist.indexOf(key) !== -1) return true;
    return false;
  }

  return {
    in: function _in(state, key) {
      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key) : state;
    },
    out: function out(state, key) {
      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key) : state;
    }
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = createTransform;

/***/ }),

/***/ "./node_modules/redux-persist/es/defaults/asyncLocalStorage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, global, process) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var genericSetImmediate = typeof setImmediate === 'undefined' ? global.setImmediate : setImmediate;
var nextTick = process && process.nextTick ? process.nextTick : genericSetImmediate;

var noStorage =  true ? function () {
  /* noop */return null;
} : function () {
  console.error('redux-persist asyncLocalStorage requires a global localStorage object. Either use a different storage backend or if this is a universal redux application you probably should conditionally persist like so: https://gist.github.com/rt2zz/ac9eb396793f95ff3c3b');
  return null;
};

function hasLocalStorage() {
  var storageExists = void 0;
  try {
    storageExists = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && !!window.localStorage;
    if (storageExists) {
      var testKey = 'redux-persist localStorage test';
      // @TODO should we also test set and remove?
      window.localStorage.getItem(testKey);
    }
  } catch (e) {
    if (false) console.warn('redux-persist localStorage getItem test failed, persistence will be disabled.');
    return false;
  }
  return storageExists;
}

function hasSessionStorage() {
  try {
    return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.sessionStorage !== 'undefined';
  } catch (e) {
    return false;
  }
}

function getStorage(type) {
  if (type === 'local') {
    return hasLocalStorage() ? window.localStorage : { getItem: noStorage, setItem: noStorage, removeItem: noStorage, getAllKeys: noStorage };
  }
  if (type === 'session') {
    return hasSessionStorage() ? window.sessionStorage : { getItem: noStorage, setItem: noStorage, removeItem: noStorage, getAllKeys: noStorage };
  }
}
/* harmony default export */ __webpack_exports__["a"] = function (type, config) {
  var deprecated = config && config.deprecated;
  var storage = getStorage(type);
  return {
    getAllKeys: function getAllKeys(cb) {
      // warn if deprecated
      if (deprecated) console.warn('redux-persist: ', deprecated);

      return new Promise(function (resolve, reject) {
        try {
          var keys = [];
          for (var i = 0; i < storage.length; i++) {
            keys.push(storage.key(i));
          }
          nextTick(function () {
            cb && cb(null, keys);
            resolve(keys);
          });
        } catch (e) {
          cb && cb(e);
          reject(e);
        }
      });
    },
    getItem: function getItem(key, cb) {
      return new Promise(function (resolve, reject) {
        try {
          var s = storage.getItem(key);
          nextTick(function () {
            cb && cb(null, s);
            resolve(s);
          });
        } catch (e) {
          cb && cb(e);
          reject(e);
        }
      });
    },
    setItem: function setItem(key, string, cb) {
      return new Promise(function (resolve, reject) {
        try {
          storage.setItem(key, string);
          nextTick(function () {
            cb && cb(null);
            resolve();
          });
        } catch (e) {
          cb && cb(e);
          reject(e);
        }
      });
    },
    removeItem: function removeItem(key, cb) {
      return new Promise(function (resolve, reject) {
        try {
          storage.removeItem(key);
          nextTick(function () {
            cb && cb(null);
            resolve();
          });
        } catch (e) {
          cb && cb(e);
          reject(e);
        }
      });
    }
  };
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/redux-persist/es/getStoredState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./node_modules/redux-persist/es/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_asyncLocalStorage__ = __webpack_require__("./node_modules/redux-persist/es/defaults/asyncLocalStorage.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = getStoredState;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function getStoredState(config, onComplete) {
  var storage = config.storage || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__defaults_asyncLocalStorage__["a" /* default */])('local');
  var deserialize = config.deserialize || defaultDeserialize;
  var blacklist = config.blacklist || [];
  var whitelist = config.whitelist || false;
  var transforms = config.transforms || [];
  var keyPrefix = config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_PREFIX */];

  // fallback getAllKeys to `keys` if present (LocalForage compatability)
  if (storage.keys && !storage.getAllKeys) storage = _extends({}, storage, { getAllKeys: storage.keys });

  var restoredState = {};
  var completionCount = 0;

  storage.getAllKeys(function (err, allKeys) {
    if (err) {
      if (false) console.warn('redux-persist/getStoredState: Error in storage.getAllKeys');
      complete(err);
    }

    var persistKeys = allKeys.filter(function (key) {
      return key.indexOf(keyPrefix) === 0;
    }).map(function (key) {
      return key.slice(keyPrefix.length);
    });
    var keysToRestore = persistKeys.filter(passWhitelistBlacklist);

    var restoreCount = keysToRestore.length;
    if (restoreCount === 0) complete(null, restoredState);
    keysToRestore.forEach(function (key) {
      storage.getItem(createStorageKey(key), function (err, serialized) {
        if (err && "production" !== 'production') console.warn('redux-persist/getStoredState: Error restoring data for key:', key, err);else restoredState[key] = rehydrate(key, serialized);
        completionCount += 1;
        if (completionCount === restoreCount) complete(null, restoredState);
      });
    });
  });

  function rehydrate(key, serialized) {
    var state = null;

    try {
      var data = deserialize(serialized);
      state = transforms.reduceRight(function (subState, transformer) {
        return transformer.out(subState, key);
      }, data);
    } catch (err) {
      if (false) console.warn('redux-persist/getStoredState: Error restoring data for key:', key, err);
    }

    return state;
  }

  function complete(err, restoredState) {
    onComplete(err, restoredState);
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return false;
    if (blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function createStorageKey(key) {
    return '' + keyPrefix + key;
  }

  if (typeof onComplete !== 'function' && !!Promise) {
    return new Promise(function (resolve, reject) {
      onComplete = function onComplete(err, restoredState) {
        if (err) reject(err);else resolve(restoredState);
      };
    });
  }
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

/***/ }),

/***/ "./node_modules/redux-persist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults_asyncLocalStorage__ = __webpack_require__("./node_modules/redux-persist/es/defaults/asyncLocalStorage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autoRehydrate__ = __webpack_require__("./node_modules/redux-persist/es/autoRehydrate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createPersistor__ = __webpack_require__("./node_modules/redux-persist/es/createPersistor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransform__ = __webpack_require__("./node_modules/redux-persist/es/createTransform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getStoredState__ = __webpack_require__("./node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__persistStore__ = __webpack_require__("./node_modules/redux-persist/es/persistStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__purgeStoredState__ = __webpack_require__("./node_modules/redux-persist/es/purgeStoredState.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__autoRehydrate__["a"]; });
/* unused harmony reexport createPersistor */
/* unused harmony reexport createTransform */
/* unused harmony reexport getStoredState */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__persistStore__["a"]; });
/* unused harmony reexport purgeStoredState */
/* unused harmony export storages */









var storageDeprecatedMessage = function storageDeprecatedMessage(type) {
  return '\n  To import async' + type + 'Storage please import from \'redux-persist/storages\'. For Example:\n  `import { async' + type + 'Storage } from \'redux-persist/storages\'`\n  or `var async' + type + 'Storage = require(\'redux-persist/storages\').async' + type + 'Storage`\n';
};

var storages = {
  asyncLocalStorage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defaults_asyncLocalStorage__["a" /* default */])('local', { deprecated: storageDeprecatedMessage('Local') }),
  asyncSessionStorage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defaults_asyncLocalStorage__["a" /* default */])('session', { deprecated: storageDeprecatedMessage('Session') })
};



/***/ }),

/***/ "./node_modules/redux-persist/es/persistStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./node_modules/redux-persist/es/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getStoredState__ = __webpack_require__("./node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createPersistor__ = __webpack_require__("./node_modules/redux-persist/es/createPersistor.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = persistStore;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





// try to source setImmediate as follows: setImmediate (global) -> global.setImmediate -> setTimeout(fn, 0)
var genericSetImmediate = typeof setImmediate === 'undefined' ? global.setImmediate || function (fn) {
  return setTimeout(fn, 0);
} : setImmediate;

function persistStore(store) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onComplete = arguments[2];

  // defaults
  // @TODO remove shouldRestore
  var shouldRestore = !config.skipRestore;
  if (false) console.warn('redux-persist: config.skipRestore has been deprecated. If you want to skip restoration use `createPersistor` instead');

  var purgeKeys = null;

  // create and pause persistor
  var persistor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__createPersistor__["a" /* default */])(store, config);
  persistor.pause();

  // restore
  if (shouldRestore) {
    genericSetImmediate(function () {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getStoredState__["a" /* default */])(config, function (err, restoredState) {
        // do not persist state for purgeKeys
        if (purgeKeys) {
          if (purgeKeys === '*') restoredState = {};else purgeKeys.forEach(function (key) {
            return Reflect.deleteProperty(restoredState, key);
          });
        }

        store.dispatch(rehydrateAction(restoredState, err));
        complete(err, restoredState);
      });
    });
  } else genericSetImmediate(complete);

  function complete(err, restoredState) {
    persistor.resume();
    onComplete && onComplete(err, restoredState);
  }

  return _extends({}, persistor, {
    purge: function purge(keys) {
      purgeKeys = keys || '*';
      return persistor.purge(keys);
    }
  });
}

function rehydrateAction(payload) {
  var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REHYDRATE */],
    payload: payload,
    error: error
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-persist/es/purgeStoredState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./node_modules/redux-persist/es/constants.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = purgeStoredState;


function purgeStoredState(config, keys) {
  var storage = config.storage;
  var keyPrefix = config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_PREFIX */];

  // basic validation
  if (Array.isArray(config)) throw new Error('redux-persist: purgeStoredState requires config as a first argument (found array). An array of keys is the optional second argument.');
  if (!storage) throw new Error('redux-persist: config.storage required in purgeStoredState');

  if (typeof keys === 'undefined') {
    // if keys is not defined, purge all keys
    return new Promise(function (resolve, reject) {
      storage.getAllKeys(function (err, allKeys) {
        if (err && "production" !== 'production') {
          console.warn('redux-persist: error during purgeStoredState in storage.getAllKeys');
          reject(err);
        } else {
          resolve(purgeStoredState(config, allKeys.filter(function (key) {
            return key.indexOf(keyPrefix) === 0;
          }).map(function (key) {
            return key.slice(keyPrefix.length);
          })));
        }
      });
    });
  } else {
    // otherwise purge specified keys
    return Promise.all(keys.map(function (key) {
      return storage.removeItem('' + keyPrefix + key, warnIfRemoveError(key));
    }));
  }
}

function warnIfRemoveError(key) {
  return function removeError(err) {
    if (err && "production" !== 'production') {
      console.warn('Error storing data for key:', key, err);
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/utils/isStatePlainEnough.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = isStatePlainEnough;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function isStatePlainEnough(a) {
  // isPlainObject + duck type not immutable
  if (!a) return false;
  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') return false;
  if (typeof a.asMutable === 'function') return false;
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(a)) return false;
  return true;
}

/***/ }),

/***/ "./node_modules/redux-saga/effects.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/redux-saga/lib/effects.js")

/***/ }),

/***/ "./node_modules/redux-saga/lib/effects.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _io = __webpack_require__("./node_modules/redux-saga/lib/internal/io.js");

Object.defineProperty(exports, 'take', {
  enumerable: true,
  get: function get() {
    return _io.take;
  }
});
Object.defineProperty(exports, 'takem', {
  enumerable: true,
  get: function get() {
    return _io.takem;
  }
});
Object.defineProperty(exports, 'put', {
  enumerable: true,
  get: function get() {
    return _io.put;
  }
});
Object.defineProperty(exports, 'race', {
  enumerable: true,
  get: function get() {
    return _io.race;
  }
});
Object.defineProperty(exports, 'call', {
  enumerable: true,
  get: function get() {
    return _io.call;
  }
});
Object.defineProperty(exports, 'apply', {
  enumerable: true,
  get: function get() {
    return _io.apply;
  }
});
Object.defineProperty(exports, 'cps', {
  enumerable: true,
  get: function get() {
    return _io.cps;
  }
});
Object.defineProperty(exports, 'fork', {
  enumerable: true,
  get: function get() {
    return _io.fork;
  }
});
Object.defineProperty(exports, 'spawn', {
  enumerable: true,
  get: function get() {
    return _io.spawn;
  }
});
Object.defineProperty(exports, 'join', {
  enumerable: true,
  get: function get() {
    return _io.join;
  }
});
Object.defineProperty(exports, 'cancel', {
  enumerable: true,
  get: function get() {
    return _io.cancel;
  }
});
Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function get() {
    return _io.select;
  }
});
Object.defineProperty(exports, 'actionChannel', {
  enumerable: true,
  get: function get() {
    return _io.actionChannel;
  }
});
Object.defineProperty(exports, 'cancelled', {
  enumerable: true,
  get: function get() {
    return _io.cancelled;
  }
});
Object.defineProperty(exports, 'flush', {
  enumerable: true,
  get: function get() {
    return _io.flush;
  }
});
Object.defineProperty(exports, 'takeEvery', {
  enumerable: true,
  get: function get() {
    return _io.takeEvery;
  }
});
Object.defineProperty(exports, 'takeLatest', {
  enumerable: true,
  get: function get() {
    return _io.takeLatest;
  }
});
Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function get() {
    return _io.throttle;
  }
});

/***/ }),

/***/ "./node_modules/redux-saga/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.effects = exports.CANCEL = exports.delay = exports.throttle = exports.takeLatest = exports.takeEvery = exports.buffers = exports.channel = exports.eventChannel = exports.END = exports.runSaga = undefined;

var _runSaga = __webpack_require__("./node_modules/redux-saga/lib/internal/runSaga.js");

Object.defineProperty(exports, 'runSaga', {
  enumerable: true,
  get: function get() {
    return _runSaga.runSaga;
  }
});

var _channel = __webpack_require__("./node_modules/redux-saga/lib/internal/channel.js");

Object.defineProperty(exports, 'END', {
  enumerable: true,
  get: function get() {
    return _channel.END;
  }
});
Object.defineProperty(exports, 'eventChannel', {
  enumerable: true,
  get: function get() {
    return _channel.eventChannel;
  }
});
Object.defineProperty(exports, 'channel', {
  enumerable: true,
  get: function get() {
    return _channel.channel;
  }
});

var _buffers = __webpack_require__("./node_modules/redux-saga/lib/internal/buffers.js");

Object.defineProperty(exports, 'buffers', {
  enumerable: true,
  get: function get() {
    return _buffers.buffers;
  }
});

var _sagaHelpers = __webpack_require__("./node_modules/redux-saga/lib/internal/sagaHelpers.js");

Object.defineProperty(exports, 'takeEvery', {
  enumerable: true,
  get: function get() {
    return _sagaHelpers.takeEvery;
  }
});
Object.defineProperty(exports, 'takeLatest', {
  enumerable: true,
  get: function get() {
    return _sagaHelpers.takeLatest;
  }
});
Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function get() {
    return _sagaHelpers.throttle;
  }
});

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

Object.defineProperty(exports, 'delay', {
  enumerable: true,
  get: function get() {
    return _utils.delay;
  }
});
Object.defineProperty(exports, 'CANCEL', {
  enumerable: true,
  get: function get() {
    return _utils.CANCEL;
  }
});

var _middleware = __webpack_require__("./node_modules/redux-saga/lib/internal/middleware.js");

var _middleware2 = _interopRequireDefault(_middleware);

var _effects = __webpack_require__("./node_modules/redux-saga/lib/effects.js");

var effects = _interopRequireWildcard(_effects);

var _utils2 = __webpack_require__("./node_modules/redux-saga/lib/utils.js");

var utils = _interopRequireWildcard(_utils2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _middleware2.default;
exports.effects = effects;
exports.utils = utils;

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/buffers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffers = exports.BUFFER_OVERFLOW = undefined;

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = 'Channel\'s Buffer overflow!';

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: _utils.kTrue, put: _utils.noop, take: _utils.noop };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take, flush: flush
  };
}

var buffers = exports.buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/channel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.emitter = emitter;
exports.channel = channel;
exports.eventChannel = eventChannel;
exports.stdChannel = stdChannel;

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

var _buffers = __webpack_require__("./node_modules/redux-saga/lib/internal/buffers.js");

var _scheduler = __webpack_require__("./node_modules/redux-saga/lib/internal/scheduler.js");

var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = exports.END = { type: CHANNEL_END_TYPE };
var isEnd = exports.isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return (0, _utils.remove)(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (false) {
  exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();

  var closed = false;
  var takers = [];

  (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    (0, _utils.check)(cb, _utils.is.func, 'channel.take\'s callback must be a function');

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return (0, _utils.remove)(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    (0, _utils.check)(cb, _utils.is.func, 'channel.flush\' callback must be a function');
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return { take: take, put: put, flush: flush, close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    (0, _utils.check)(matcher, _utils.is.func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      chan.close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });

  if (!_utils.is.func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: function close() {
      if (!chan.__closed__) {
        chan.close();
        unsubscribe();
      }
    }
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[_utils.SAGA_ACTION]) {
        cb(input);
        return;
      }
      (0, _scheduler.asap)(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        (0, _utils.check)(matcher, _utils.is.func, 'channel.take\'s matcher argument must be a function');
        cb[_utils.MATCH] = matcher;
      }
      chan.take(cb);
    }
  });
}

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/io.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asEffect = exports.takem = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.take = take;
exports.put = put;
exports.race = race;
exports.call = call;
exports.apply = apply;
exports.cps = cps;
exports.fork = fork;
exports.spawn = spawn;
exports.join = join;
exports.cancel = cancel;
exports.select = select;
exports.actionChannel = actionChannel;
exports.cancelled = cancelled;
exports.flush = flush;
exports.takeEvery = takeEvery;
exports.takeLatest = takeLatest;
exports.throttle = throttle;

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

var _sagaHelpers = __webpack_require__("./node_modules/redux-saga/lib/internal/sagaHelpers.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IO = (0, _utils.sym)('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';

var deprecationWarning = function deprecationWarning(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, IO, true), _defineProperty(_ref, type, payload), _ref;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (_utils.is.pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (_utils.is.channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = exports.takem = (0, _utils.deprecate)(take.maybe, deprecationWarning('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
    (0, _utils.check)(channel, _utils.is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
  } else {
    (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = (0, _utils.deprecate)(put.resolve, deprecationWarning('put.sync', 'put.resolve'));

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  (0, _utils.check)(fn, _utils.is.notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (_utils.is.array(fn)) {
    var _fn = fn;

    var _fn2 = _slicedToArray(_fn, 2);

    context = _fn2[0];
    fn = _fn2[1];
  } else if (fn.fn) {
    var _fn3 = fn;
    context = _fn3.context;
    fn = _fn3.fn;
  }
  (0, _utils.check)(fn, _utils.is.func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var eff = fork.apply(undefined, [fn].concat(args));
  eff[FORK].detached = true;
  return eff;
}

var isForkedTask = function isForkedTask(task) {
  return task[_utils.TASK];
};

function join(task) {
  if (_utils.is.array(task)) {
    return task.map(join);
  }
  (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
  if (!isForkedTask(task)) {
    throw new Error('join(task): argument ' + task + ' is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)');
  }

  return effect(JOIN, task);
}

function cancel(task) {
  (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
  if (!isForkedTask(task)) {
    throw new Error('cancel(task): argument ' + task + ' is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)');
  }

  return effect(CANCEL, task);
}

function select(selector) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if (arguments.length === 0) {
    selector = _utils.ident;
  } else {
    (0, _utils.check)(selector, _utils.is.notUndef, 'select(selector,[...]): argument selector is undefined');
    (0, _utils.check)(selector, _utils.is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    (0, _utils.check)(buffer, _utils.is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  (0, _utils.check)(channel, _utils.is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  return fork.apply(undefined, [_sagaHelpers.takeEveryHelper, patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len7 = arguments.length, args = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    args[_key7 - 2] = arguments[_key7];
  }

  return fork.apply(undefined, [_sagaHelpers.takeLatestHelper, patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
    args[_key8 - 3] = arguments[_key8];
  }

  return fork.apply(undefined, [_sagaHelpers.throttleHelper, ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = exports.asEffect = {
  take: createAsEffectType(TAKE),
  put: createAsEffectType(PUT),
  race: createAsEffectType(RACE),
  call: createAsEffectType(CALL),
  cps: createAsEffectType(CPS),
  fork: createAsEffectType(FORK),
  join: createAsEffectType(JOIN),
  cancel: createAsEffectType(CANCEL),
  select: createAsEffectType(SELECT),
  actionChannel: createAsEffectType(ACTION_CHANNEL),
  cancelled: createAsEffectType(CANCELLED),
  flush: createAsEffectType(FLUSH)
};

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/middleware.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sagaMiddlewareFactory;

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

var _proc = __webpack_require__("./node_modules/redux-saga/lib/internal/proc.js");

var _proc2 = _interopRequireDefault(_proc);

var _channel = __webpack_require__("./node_modules/redux-saga/lib/internal/channel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function sagaMiddlewareFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var runSagaDynamically = void 0;
  var sagaMonitor = options.sagaMonitor;

  // monitors are expected to have a certain interface, let's fill-in any missing ones

  if (sagaMonitor) {
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils.noop;
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils.noop;
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils.noop;
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils.noop;
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils.noop;
  }

  if (_utils.is.func(options)) {
    if (true) {
      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
    } else {
      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
    }
  }

  if (options.logger && !_utils.is.func(options.logger)) {
    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  }

  if (options.onerror) {
    if (_utils.isDev) (0, _utils.log)('warn', '`options.onerror` is deprecated. Use `options.onError` instead.');
    options.onError = options.onerror;
    delete options.onerror;
  }

  if (options.onError && !_utils.is.func(options.onError)) {
    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  }

  if (options.emitter && !_utils.is.func(options.emitter)) {
    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
  }

  function sagaMiddleware(_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;

    runSagaDynamically = runSaga;
    var sagaEmitter = (0, _channel.emitter)();
    sagaEmitter.emit = (options.emitter || _utils.ident)(sagaEmitter.emit);
    var sagaDispatch = (0, _utils.wrapSagaDispatch)(dispatch);

    function runSaga(saga, args, sagaId) {
      return (0, _proc2.default)(saga.apply(undefined, _toConsumableArray(args)), sagaEmitter.subscribe, sagaDispatch, getState, options, sagaId, saga.name);
    }

    return function (next) {
      return function (action) {
        if (sagaMonitor) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action); // hit reducers
        sagaEmitter.emit(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function (saga) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (0, _utils.check)(runSagaDynamically, _utils.is.notUndef, 'Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    (0, _utils.check)(saga, _utils.is.func, 'sagaMiddleware.run(saga, ...args): saga argument must be a Generator function!');

    var effectId = (0, _utils.uid)();
    if (sagaMonitor) {
      sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
    }
    var task = runSagaDynamically(saga, args, effectId);
    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }
    return task;
  };

  return sagaMiddleware;
}

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/proc.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TASK_CANCEL = exports.CHANNEL_END = exports.NOT_ITERATOR_ERROR = undefined;
exports.default = proc;

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

var _scheduler = __webpack_require__("./node_modules/redux-saga/lib/internal/scheduler.js");

var _io = __webpack_require__("./node_modules/redux-saga/lib/internal/io.js");

var _channel = __webpack_require__("./node_modules/redux-saga/lib/internal/channel.js");

var _buffers = __webpack_require__("./node_modules/redux-saga/lib/internal/buffers.js");

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NOT_ITERATOR_ERROR = exports.NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';

var CHANNEL_END = exports.CHANNEL_END = {
  toString: function toString() {
    return '@@redux-saga/CHANNEL_END';
  }
};
var TASK_CANCEL = exports.TASK_CANCEL = {
  toString: function toString() {
    return '@@redux-saga/TASK_CANCEL';
  }
};

var matchers = {
  wildcard: function wildcard() {
    return _utils.kTrue;
  },
  default: function _default(pattern) {
    return function (input) {
      return input.type === String(pattern);
    };
  },
  array: function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return matcher(p)(input);
      });
    };
  },
  predicate: function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  }
};

function matcher(pattern) {
  return (pattern === '*' ? matchers.wildcard : _utils.is.array(pattern) ? matchers.array : _utils.is.stringableFunc(pattern) ? matchers.default : _utils.is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
}

/**
  Used to track a parent task and its forks
  In the new fork model, forked tasks are attached by default to their parent
  We model this using the concept of Parent task && main Task
  main task is the main flow of the current Generator, the parent tasks is the
  aggregation of the main tasks + all its forked tasks.
  Thus the whole model represents an execution tree with multiple branches (vs the
  linear execution tree in sequential (non parallel) programming)

  A parent tasks has the following semantics
  - It completes if all its forks either complete or all cancelled
  - If it's cancelled, all forks are cancelled as well
  - It aborts if any uncaught error bubbles up from forks
  - If it completes, the return value is the one returned by the main task
**/
function forkQueue(name, mainTask, cb) {
  var tasks = [],
      result = void 0,
      completed = false;
  addTask(mainTask);

  function abort(err) {
    cancelAll();
    cb(err, true);
  }

  function addTask(task) {
    tasks.push(task);
    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      (0, _utils.remove)(tasks, task);
      task.cont = _utils.noop;
      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }
        if (!tasks.length) {
          completed = true;
          cb(result);
        }
      }
    };
    // task.cont.cancel = task.cancel
  }

  function cancelAll() {
    if (completed) {
      return;
    }
    completed = true;
    tasks.forEach(function (t) {
      t.cont = _utils.noop;
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: function getTasks() {
      return tasks;
    },
    taskNames: function taskNames() {
      return tasks.map(function (t) {
        return t.name;
      });
    }
  };
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  if (_utils.is.iterator(fn)) {
    return fn;
  }

  // catch synchronous failures; see #152 and #441
  var result = void 0,
      error = void 0;
  try {
    result = fn.apply(context, args);
  } catch (err) {
    error = err;
  }

  // i.e. a generator function returns an iterator
  if (_utils.is.iterator(result)) {
    return result;
  }

  // do not bubble up synchronous failures for detached forks
  // instead create a failed task. See #152 and #441
  return error ? (0, _utils.makeIterator)(function () {
    throw error;
  }) : (0, _utils.makeIterator)(function () {
    var pc = void 0;
    var eff = { done: false, value: result };
    var ret = function ret(value) {
      return { done: true, value: value };
    };
    return function (arg) {
      if (!pc) {
        pc = true;
        return eff;
      } else {
        return ret(arg);
      }
    };
  }());
}

var wrapHelper = function wrapHelper(helper) {
  return { fn: helper };
};

function proc(iterator) {
  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return _utils.noop;
  };
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.noop;
  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils.noop;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var parentEffectId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var name = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'anonymous';
  var cont = arguments[7];

  (0, _utils.check)(iterator, _utils.is.iterator, NOT_ITERATOR_ERROR);

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;

  var log = logger || _utils.log;
  var stdChannel = (0, _channel.stdChannel)(subscribe);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/
  next.cancel = _utils.noop;

  /**
    Creates a new task descriptor for this generator, We'll also create a main task
    to track the main flow (besides other forked tasks)
  **/
  var task = newTask(parentEffectId, name, iterator, cont);
  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
  var taskQueue = forkQueue(name, mainTask, end);

  /**
    cancellation of the main task. We'll simply resume the Generator with a Cancel
  **/
  function cancelMain() {
    if (mainTask.isRunning && !mainTask.isCancelled) {
      mainTask.isCancelled = true;
      next(TASK_CANCEL);
    }
  }

  /**
    This may be called by a parent generator to trigger/propagate cancellation
    cancel all pending tasks (including the main task), then end the current task.
     Cancellation propagates down to the whole execution tree holded by this Parent task
    It's also propagated to all joiners of this task and their execution tree/joiners
     Cancellation is noop for terminated/Cancelled tasks tasks
  **/
  function cancel() {
    /**
      We need to check both Running and Cancelled status
      Tasks can be Cancelled but still Running
    **/
    if (iterator._isRunning && !iterator._isCancelled) {
      iterator._isCancelled = true;
      taskQueue.cancelAll();
      /**
        Ending with a Never result will propagate the Cancellation to all joiners
      **/
      end(TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/
  cont && (cont.cancel = cancel);

  // tracks the running status
  iterator._isRunning = true;

  // kicks up the generator
  next();

  // then return the task descriptor to the caller
  return task;

  /**
    This is the generator driver
    It's a recursive async/continuation function which calls itself
    until the generator terminates or throws
  **/
  function next(arg, isErr) {
    // Preventive measure. If we end up here, then there is really something wrong
    if (!mainTask.isRunning) {
      throw new Error('Trying to resume an already finished generator');
    }

    try {
      var result = void 0;
      if (isErr) {
        result = iterator.throw(arg);
      } else if (arg === TASK_CANCEL) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.isCancelled = true;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/
        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          Thill will jump to the finally block
        **/
        result = _utils.is.func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
      } else if (arg === CHANNEL_END) {
        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = _utils.is.func(iterator.return) ? iterator.return() : { done: true };
      } else {
        result = iterator.next(arg);
      }

      if (!result.done) {
        runEffect(result.value, parentEffectId, '', next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        mainTask.isMainRunning = false;
        mainTask.cont && mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.isCancelled) {
        log('error', 'uncaught at ' + name, error.message);
      }
      mainTask.isMainRunning = false;
      mainTask.cont(error, true);
    }
  }

  function end(result, isErr) {
    iterator._isRunning = false;
    stdChannel.close();
    if (!isErr) {
      if (result === TASK_CANCEL && _utils.isDev) {
        log('info', name + ' has been cancelled', '');
      }
      iterator._result = result;
      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
    } else {
      if (result instanceof Error) {
        result.sagaStack = 'at ' + name + ' \n ' + (result.sagaStack || result.stack);
      }
      if (!task.cont) {
        log('error', 'uncaught', result.sagaStack || result.stack);
        if (result instanceof Error && onError) {
          onError(result);
        }
      }
      iterator._error = result;
      iterator._isAborted = true;
      iterator._deferredEnd && iterator._deferredEnd.reject(result);
    }
    task.cont && task.cont(result, isErr);
    task.joiners.forEach(function (j) {
      return j.cb(result, isErr);
    });
    task.joiners = null;
  }

  function runEffect(effect, parentEffectId) {
    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var cb = arguments[3];

    var effectId = (0, _utils.uid)();
    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });

    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/
    var effectSettled = void 0;

    // Completion callback passed to the appropriate effect runner
    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _utils.noop; // defensive measure
      if (sagaMonitor) {
        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
      }

      cb(res, isErr);
    }
    // tracks down the current cancel
    currCb.cancel = _utils.noop;

    // setup cancellation logic on the parent cb
    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      /**
        propagates cancel downward
        catch uncaught cancellations errors; since we can no longer call the completion
        callback, log errors raised during cancellations into the console
      **/
      try {
        currCb.cancel();
      } catch (err) {
        log('error', 'uncaught at ' + name, err.message);
      }
      currCb.cancel = _utils.noop; // defensive measure

      sagaMonitor && sagaMonitor.effectCancelled(effectId);
    };

    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    var data = void 0;
    return (
      // Non declarative effect
      _utils.is.promise(effect) ? resolvePromise(effect, currCb) : _utils.is.helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils.is.iterator(effect) ? resolveIterator(effect, effectId, name, currCb)

      // declarative effects
      : _utils.is.array(effect) ? runParallelEffect(effect, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.take(effect)) ? runTakeEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.put(effect)) ? runPutEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.cps(effect)) ? runCPSEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.join(effect)) ? runJoinEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.select(effect)) ? runSelectEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.flush(effect)) ? runFlushEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : /* anything else returned as is        */currCb(effect)
    );
  }

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[_utils.CANCEL];
    if (typeof cancelPromise === 'function') {
      cb.cancel = cancelPromise;
    }
    promise.then(cb, function (error) {
      return cb(error, true);
    });
  }

  function resolveIterator(iterator, effectId, name, cb) {
    proc(iterator, subscribe, dispatch, getState, options, effectId, name, cb);
  }

  function runTakeEffect(_ref2, cb) {
    var channel = _ref2.channel,
        pattern = _ref2.pattern,
        maybe = _ref2.maybe;

    channel = channel || stdChannel;
    var takeCb = function takeCb(inp) {
      return inp instanceof Error ? cb(inp, true) : (0, _channel.isEnd)(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
    };
    try {
      channel.take(takeCb, matcher(pattern));
    } catch (err) {
      return cb(err, true);
    }
    cb.cancel = takeCb.cancel;
  }

  function runPutEffect(_ref3, cb) {
    var channel = _ref3.channel,
        action = _ref3.action,
        resolve = _ref3.resolve;

    /**
      Schedule the put in case another saga is holding a lock.
      The put will be executed atomically. ie nested puts will execute after
      this put has terminated.
    **/
    (0, _scheduler.asap)(function () {
      var result = void 0;
      try {
        result = (channel ? channel.put : dispatch)(action);
      } catch (error) {
        // If we have a channel or `put.resolve` was used then bubble up the error.
        if (channel || resolve) return cb(error, true);
        log('error', 'uncaught at ' + name, error.stack || error.message || error);
      }

      if (resolve && _utils.is.promise(result)) {
        resolvePromise(result, cb);
      } else {
        return cb(result);
      }
    });
    // Put effects are non cancellables
  }

  function runCallEffect(_ref4, effectId, cb) {
    var context = _ref4.context,
        fn = _ref4.fn,
        args = _ref4.args;

    var result = void 0;
    // catch synchronous failures; see #152
    try {
      result = fn.apply(context, args);
    } catch (error) {
      return cb(error, true);
    }
    return _utils.is.promise(result) ? resolvePromise(result, cb) : _utils.is.iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
  }

  function runCPSEffect(_ref5, cb) {
    var context = _ref5.context,
        fn = _ref5.fn,
        args = _ref5.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb

    // catch synchronous failures; see #152
    try {
      (function () {
        var cpsCb = function cpsCb(err, res) {
          return _utils.is.undef(err) ? cb(res) : cb(err, true);
        };
        fn.apply(context, args.concat(cpsCb));
        if (cpsCb.cancel) {
          cb.cancel = function () {
            return cpsCb.cancel();
          };
        }
      })();
    } catch (error) {
      return cb(error, true);
    }
  }

  function runForkEffect(_ref6, effectId, cb) {
    var context = _ref6.context,
        fn = _ref6.fn,
        args = _ref6.args,
        detached = _ref6.detached;

    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });

    try {
      (0, _scheduler.suspend)();
      var _task = proc(taskIterator, subscribe, dispatch, getState, options, effectId, fn.name, detached ? null : _utils.noop);

      if (detached) {
        cb(_task);
      } else {
        if (taskIterator._isRunning) {
          taskQueue.addTask(_task);
          cb(_task);
        } else if (taskIterator._error) {
          taskQueue.abort(taskIterator._error);
        } else {
          cb(_task);
        }
      }
    } finally {
      (0, _scheduler.flush)();
    }
    // Fork effects are non cancellables
  }

  function runJoinEffect(t, cb) {
    if (t.isRunning()) {
      (function () {
        var joiner = { task: task, cb: cb };
        cb.cancel = function () {
          return (0, _utils.remove)(t.joiners, joiner);
        };
        t.joiners.push(joiner);
      })();
    } else {
      t.isAborted() ? cb(t.error(), true) : cb(t.result());
    }
  }

  function runCancelEffect(task, cb) {
    if (task.isRunning()) {
      task.cancel();
    }
    cb();
    // cancel effects are non cancellables
  }

  function runParallelEffect(effects, effectId, cb) {
    if (!effects.length) {
      return cb([]);
    }

    var completedCount = 0;
    var completed = void 0;
    var results = Array(effects.length);

    function checkEffectEnd() {
      if (completedCount === results.length) {
        completed = true;
        cb(results);
      }
    }

    var childCbs = effects.map(function (eff, idx) {
      var chCbAtIdx = function chCbAtIdx(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || (0, _channel.isEnd)(res) || res === CHANNEL_END || res === TASK_CANCEL) {
          cb.cancel();
          cb(res, isErr);
        } else {
          results[idx] = res;
          completedCount++;
          checkEffectEnd();
        }
      };
      chCbAtIdx.cancel = _utils.noop;
      return chCbAtIdx;
    });

    cb.cancel = function () {
      if (!completed) {
        completed = true;
        childCbs.forEach(function (chCb) {
          return chCb.cancel();
        });
      }
    };

    effects.forEach(function (eff, idx) {
      return runEffect(eff, effectId, idx, childCbs[idx]);
    });
  }

  function runRaceEffect(effects, effectId, cb) {
    var completed = void 0;
    var keys = Object.keys(effects);
    var childCbs = {};

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, true);
        } else if (!(0, _channel.isEnd)(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
          cb.cancel();
          completed = true;
          cb(_defineProperty({}, key, res));
        }
      };
      chCbAtKey.cancel = _utils.noop;
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };
    keys.forEach(function (key) {
      if (completed) {
        return;
      }
      runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runSelectEffect(_ref7, cb) {
    var selector = _ref7.selector,
        args = _ref7.args;

    try {
      var state = selector.apply(undefined, [getState()].concat(_toConsumableArray(args)));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(_ref8, cb) {
    var pattern = _ref8.pattern,
        buffer = _ref8.buffer;

    var match = matcher(pattern);
    match.pattern = pattern;
    cb((0, _channel.eventChannel)(subscribe, buffer || _buffers.buffers.fixed(), match));
  }

  function runCancelledEffect(data, cb) {
    cb(!!mainTask.isCancelled);
  }

  function runFlushEffect(channel, cb) {
    channel.flush(cb);
  }

  function newTask(id, name, iterator, cont) {
    var _done, _ref9, _mutatorMap;

    iterator._deferredEnd = null;
    return _ref9 = {}, _defineProperty(_ref9, _utils.TASK, true), _defineProperty(_ref9, 'id', id), _defineProperty(_ref9, 'name', name), _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
      if (iterator._deferredEnd) {
        return iterator._deferredEnd.promise;
      } else {
        var def = (0, _utils.deferred)();
        iterator._deferredEnd = def;
        if (!iterator._isRunning) {
          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
        }
        return def.promise;
      }
    }, _defineProperty(_ref9, 'cont', cont), _defineProperty(_ref9, 'joiners', []), _defineProperty(_ref9, 'cancel', cancel), _defineProperty(_ref9, 'isRunning', function isRunning() {
      return iterator._isRunning;
    }), _defineProperty(_ref9, 'isCancelled', function isCancelled() {
      return iterator._isCancelled;
    }), _defineProperty(_ref9, 'isAborted', function isAborted() {
      return iterator._isAborted;
    }), _defineProperty(_ref9, 'result', function result() {
      return iterator._result;
    }), _defineProperty(_ref9, 'error', function error() {
      return iterator._error;
    }), _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/runSaga.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSaga = runSaga;

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

var _proc = __webpack_require__("./node_modules/redux-saga/lib/internal/proc.js");

var _proc2 = _interopRequireDefault(_proc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function runSaga(iterator, _ref) {
  var subscribe = _ref.subscribe,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      sagaMonitor = _ref.sagaMonitor,
      logger = _ref.logger,
      onError = _ref.onError;


  (0, _utils.check)(iterator, _utils.is.iterator, "runSaga must be called on an iterator");

  var effectId = (0, _utils.uid)();
  if (sagaMonitor) {
    dispatch = (0, _utils.wrapSagaDispatch)(dispatch);
    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: iterator, args: [] } });
  }
  var task = (0, _proc2.default)(iterator, subscribe, dispatch, getState, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, iterator.name);

  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }

  return task;
}

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/sagaHelpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = exports.takeLatest = exports.takeEvery = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.takeEveryHelper = takeEveryHelper;
exports.takeLatestHelper = takeLatestHelper;
exports.throttleHelper = throttleHelper;

var _channel = __webpack_require__("./node_modules/redux-saga/lib/internal/channel.js");

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

var _io = __webpack_require__("./node_modules/redux-saga/lib/internal/io.js");

var _buffers = __webpack_require__("./node_modules/redux-saga/lib/internal/buffers.js");

var done = { done: true, value: undefined };
var qEnd = {};

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          _fsm$qNext2 = _slicedToArray(_fsm$qNext, 3),
          q = _fsm$qNext2[0],
          output = _fsm$qNext2[1],
          _updateState = _fsm$qNext2[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return (0, _utils.makeIterator)(next, function (error) {
    return next(null, error);
  }, name, true);
}

function safeName(patternOrChannel) {
  if (_utils.is.channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function takeEveryHelper(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [qEnd] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
}

function takeLatestHelper(patternOrChannel, worker) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: (0, _io.cancel)(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
}

function throttleHelper(delayLength, pattern, worker) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: (0, _io.take)(channel, pattern) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: (0, _io.call)(_utils.delay, delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel.END ? [qEnd] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + safeName(pattern) + ', ' + worker.name + ')');
}

var deprecationWarning = function deprecationWarning(helperName) {
  return 'import ' + helperName + ' from \'redux-saga\' has been deprecated in favor of import ' + helperName + ' from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};
var takeEvery = exports.takeEvery = (0, _utils.deprecate)(takeEveryHelper, deprecationWarning('takeEvery'));
var takeLatest = exports.takeLatest = (0, _utils.deprecate)(takeLatestHelper, deprecationWarning('takeLatest'));
var throttle = exports.throttle = (0, _utils.deprecate)(throttleHelper, deprecationWarning('throttle'));

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/scheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = asap;
exports.suspend = suspend;
exports.flush = flush;

var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    flush();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  if (!semaphore) {
    exec(task);
  } else {
    queue.push(task);
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  semaphore--;
  if (!semaphore && queue.length) {
    exec(queue.shift());
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/lib/internal/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.check = check;
exports.hasOwn = hasOwn;
exports.remove = remove;
exports.deferred = deferred;
exports.arrayOfDeffered = arrayOfDeffered;
exports.delay = delay;
exports.createMockTask = createMockTask;
exports.autoInc = autoInc;
exports.makeIterator = makeIterator;
exports.log = log;
exports.deprecate = deprecate;
exports.wrapSagaDispatch = wrapSagaDispatch;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sym = exports.sym = function sym(id) {
  return '@@redux-saga/' + id;
};
var TASK = exports.TASK = sym('TASK');
var HELPER = exports.HELPER = sym('HELPER');
var MATCH = exports.MATCH = sym('MATCH');
var CANCEL = exports.CANCEL = sym('cancelPromise');
var SAGA_ACTION = exports.SAGA_ACTION = sym('SAGA_ACTION');
var konst = exports.konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = exports.kTrue = konst(true);
var kFalse = exports.kFalse = konst(false);
var noop = exports.noop = function noop() {};
var ident = exports.ident = function ident(v) {
  return v;
};

var isDev = exports.isDev = "production" === 'development';

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = exports.is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  array: Array.isArray,
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (typeof pat === 'string' || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _defineProperty(_ref, TASK, true), _defineProperty(_ref, 'isRunning', function isRunning() {
    return running;
  }), _defineProperty(_ref, 'result', function result() {
    return _result;
  }), _defineProperty(_ref, 'error', function error() {
    return _error;
  }), _defineProperty(_ref, 'setRunning', function setRunning(b) {
    return running = b;
  }), _defineProperty(_ref, 'setResult', function setResult(r) {
    return _result = r;
  }), _defineProperty(_ref, 'setError', function setError(e) {
    return _error = e;
  }), _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = exports.uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (isDev) log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var internalErr = exports.internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

function wrapSagaDispatch(dispatch) {
  return function sagaDispatch(action) {
    var wrappedAction = Object.defineProperty(action, SAGA_ACTION, { value: true });
    return dispatch(wrappedAction);
  };
}

/***/ }),

/***/ "./node_modules/redux-saga/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__("./node_modules/redux-saga/lib/internal/utils.js");

Object.defineProperty(exports, 'TASK', {
  enumerable: true,
  get: function get() {
    return _utils.TASK;
  }
});
Object.defineProperty(exports, 'SAGA_ACTION', {
  enumerable: true,
  get: function get() {
    return _utils.SAGA_ACTION;
  }
});
Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function get() {
    return _utils.noop;
  }
});
Object.defineProperty(exports, 'is', {
  enumerable: true,
  get: function get() {
    return _utils.is;
  }
});
Object.defineProperty(exports, 'deferred', {
  enumerable: true,
  get: function get() {
    return _utils.deferred;
  }
});
Object.defineProperty(exports, 'arrayOfDeffered', {
  enumerable: true,
  get: function get() {
    return _utils.arrayOfDeffered;
  }
});
Object.defineProperty(exports, 'createMockTask', {
  enumerable: true,
  get: function get() {
    return _utils.createMockTask;
  }
});

var _io = __webpack_require__("./node_modules/redux-saga/lib/internal/io.js");

Object.defineProperty(exports, 'asEffect', {
  enumerable: true,
  get: function get() {
    return _io.asEffect;
  }
});

var _proc = __webpack_require__("./node_modules/redux-saga/lib/internal/proc.js");

Object.defineProperty(exports, 'CHANNEL_END', {
  enumerable: true,
  get: function get() {
    return _proc.CHANNEL_END;
  }
});

/***/ }),

/***/ "./node_modules/redux/es/applyMiddleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__("./node_modules/redux/es/compose.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux/es/bindActionCreators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/redux/es/combineReducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__("./node_modules/redux/es/createStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__("./node_modules/redux/es/utils/warning.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (false) {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ "./node_modules/redux/es/compose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),

/***/ "./node_modules/redux/es/createStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__("./node_modules/symbol-observable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__("./node_modules/redux/es/createStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__("./node_modules/redux/es/combineReducers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__("./node_modules/redux/es/bindActionCreators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__("./node_modules/redux/es/applyMiddleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__("./node_modules/redux/es/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__("./node_modules/redux/es/utils/warning.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ "./node_modules/redux/es/utils/warning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/symbol-observable/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/symbol-observable/lib/index.js");


/***/ }),

/***/ "./node_modules/symbol-observable/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__("./node_modules/symbol-observable/lib/ponyfill.js");

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/lib/ponyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/actions/sagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* unused harmony export helloSaga */
/* unused harmony export fetchSources */
/* unused harmony export fetchNews */
/* unused harmony export loadSources */
/* unused harmony export loadNews */
/* unused harmony export watchLoadNews */
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(c,d){function f(g,h){try{var i=b[g](h),j=i.value}catch(k){return void d(k)}return i.done?void c(j):Promise.resolve(j).then(function(k){f('next',k)},function(k){f('throw',k)})}return f('next')})}}var _marked=[helloSaga,loadSources,loadNews,watchLoadNews,rootSaga].map(regeneratorRuntime.mark);var articles=[],sources=[],userSources=[];function helloSaga(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:console.log('Hello Sagas!');case 1:case'end':return b.stop();}},_marked[0],this)}var fetchSources=function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function b(){var c;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return console.log('in fetch sources'),c=void 0,f.next=4,fetch('https://newsapi.org/v1/sources?language=en&country=us').then(function(g){return g.json()}).then(function(g){return c=g});case 4:return console.log(c),f.abrupt('return',c.sources);case 6:case'end':return f.stop();}},b,this)}));return function(){return a.apply(this,arguments)}}();var fetchNews=function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function b(c){var d;return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return console.log('in fetch'),d=void 0,g.next=4,fetch('https://newscraper-pwa.herokuapp.com/news?s='+c).then(function(h){return h.json()}).then(function(h){return d=h});case 4:return console.log(d),g.abrupt('return',d);case 6:case'end':return g.stop();}},b,this)}));return function(){return a.apply(this,arguments)}}();function loadSources(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return console.log('in the saga for loading news'),b.prev=1,b.next=4,fetchSources();case 4:return sources=b.sent,b.next=7,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])({type:'LOAD REMOTE SOURCES',remoteSources:sources});case 7:b.next=12;break;case 9:b.prev=9,b.t0=b['catch'](1),console.log(b.t0);case 12:case'end':return b.stop();}},_marked[1],this,[[1,9]])}function loadNews(a){return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return console.log('got it'),c.next=3,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])({type:'LOADING'});case 3:c.prev=3,articles=[],userSources=[].concat(a.sources);case 6:if(!(0<userSources.length)){c.next=14;break}return c.t0=articles,c.next=10,fetchNews(userSources.pop());case 10:c.t1=c.sent,articles=c.t0.concat.call(c.t0,c.t1),c.next=6;break;case 14:return c.next=16,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])({type:'LOADED',articles:articles});case 16:return c.next=18,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])({type:'NOT_LOADING'});case 18:c.next=25;break;case 20:return c.prev=20,c.t2=c['catch'](3),console.log(c.t2),c.next=25,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])({type:'NOT_LOADING'});case 25:case'end':return c.stop();}},_marked[2],this,[[3,20]])}function watchLoadNews(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["takeLatest"])('LOAD',loadNews);case 2:return b.next=4,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["takeLatest"])('LOAD SOURCES',loadSources);case 4:case'end':return b.stop();}},_marked[3],this)}function rootSaga(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,[helloSaga(),watchLoadNews()];case 2:case'end':return b.stop();}},_marked[4],this)}

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass__ = __webpack_require__("./src/index.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_sass__);
__webpack_require__("./node_modules/babel-polyfill/lib/index.js");var elem,App;function init(){App=__webpack_require__("./src/views/index.js").default,elem=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(App,document.getElementById('root'),elem)}init(), true?('serviceWorker'in navigator&&'https:'===location.protocol&&navigator.serviceWorker.register('/service-worker.js'),function(b,c,d,e,f,h,j){b.GoogleAnalyticsObject=f,b[f]=b[f]||function(){(b[f].q=b[f].q||[]).push(arguments)},b[f].l=1*new Date,h=c.createElement(d),j=c.getElementsByTagName(d)[0],h.async=1,h.src=e,j.parentNode.insertBefore(h,j)}(window,document,'script','https://www.google-analytics.com/analytics.js','ga'),ga('create','UA-XXXXXXXX-X','auto'),ga('send','pageview')):(require('preact/devtools'),module.hot&&module.hot.accept('./views',init));

/***/ }),

/***/ "./src/index.sass":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news__ = __webpack_require__("./src/reducers/news.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui__ = __webpack_require__("./src/reducers/ui.js");
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({news:__WEBPACK_IMPORTED_MODULE_1__news__["a" /* default */],ui:__WEBPACK_IMPORTED_MODULE_2__ui__["a" /* default */]});

/***/ }),

/***/ "./src/reducers/news.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState={articles:[{title:'Hit Refresh for the latest headlines from TechCrunch',content:'Woah! Go back and hit refresh you doof.'}],sources:[],remoteSources:[]};/* harmony default export */ __webpack_exports__["a"] = function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,b=arguments[1],c=void 0;switch(b.type){case'LOADED':return console.log('LOADED NEWS'),Object.assign({},a,{articles:b.articles});case'CLEAR':return{articles:[]};case'ADD SOURCE':return c=a.sources.concat([b.source]),console.log('added source',c),Object.assign({},a,{sources:c});case'REMOVE SOURCE':return c=a.sources.filter(function(d){return d!==b.source}),console.log('removed source',c),Object.assign({},a,{sources:c});case'LOAD REMOTE SOURCES':return Object.assign({},a,{remoteSources:b.remoteSources});default:return console.log('DEFAULT NEWS'),a;}};

/***/ }),

/***/ "./src/reducers/ui.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState={loading:!1};/* harmony default export */ __webpack_exports__["a"] = function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,b=arguments[1];switch(b.type){case'LOADING':return Object.assign({},a,{loading:!0});case'NOT_LOADING':return Object.assign({},a,{loading:!1});default:return a;}};

/***/ }),

/***/ "./src/views/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("./node_modules/preact-router/dist/preact-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home__ = __webpack_require__("./src/views/pages/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tags_layout__ = __webpack_require__("./src/views/tags/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_article__ = __webpack_require__("./src/views/pages/article.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings__ = __webpack_require__("./src/views/pages/settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_errors_404__ = __webpack_require__("./src/views/pages/errors/404.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_credit__ = __webpack_require__("./src/views/pages/credit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_blog__ = __webpack_require__("./src/views/pages/blog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_saga__ = __webpack_require__("./node_modules/redux-saga/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reducers_index__ = __webpack_require__("./src/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_sagas__ = __webpack_require__("./src/actions/sagas.js");
var sagaMiddleware=__WEBPACK_IMPORTED_MODULE_11_redux_saga___default()(),store=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_13__reducers_index__["a" /* default */],__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_redux__["b" /* compose */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_redux__["c" /* applyMiddleware */])(sagaMiddleware),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_redux_persist__["a" /* autoRehydrate */])()));sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_14__actions_sagas__["a" /* default */]),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_redux_persist__["b" /* persistStore */])(store,{whitelist:['news']});var onChange=function(a){return window.ga&&ga('send','pageview',a.url)};/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_9_react_redux__["a" /* Provider */],{store:store},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__tags_layout__["a" /* default */],null,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_router__["Router"],{onChange:onChange},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__pages_article__["a" /* default */],{path:'/article/:id'}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__pages_settings__["a" /* default */],{path:'/settings'}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__pages_home__["a" /* default */],{path:'/'}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__pages_errors_404__["a" /* default */],{'default':!0}))));

/***/ }),

/***/ "./src/views/pages/article.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("./node_modules/preact-router/dist/preact-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_card__ = __webpack_require__("./src/views/tags/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var mapStateToProps=function(a){return{article:a.news.articles}},Article=function(_ref){var a=_ref.id,b=_ref.article;return b[a]||(location='/'),window.scrollTo(0,0),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'page page__article'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h1',null,b[a].title),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{dangerouslySetInnerHTML:{__html:b[a].content}}))};/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(Article);

/***/ }),

/***/ "./src/views/pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tags_card__ = __webpack_require__("./src/views/tags/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_card_link__ = __webpack_require__("./src/views/tags/card-link.js");
/* unused harmony default export */ var _unused_webpack_default_export = function(){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'page page__blog'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__tags_card__["a" /* default */],null,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h1',null,'Blog'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('p',null,'Please select an Article to read.')),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('nav',null,[1,2,3,4,5,6,7,8,9,10].map(function(b){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__tags_card_link__["a" /* default */],{href:'/blog/article'+b},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('strong',null,'Article #',b),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('em',null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore enim, natus. Beatae ducimus quasi doloremque ad quam qui dolor, architecto repellendus provident rem nostrum accusamus, magnam voluptate vel voluptas iste.'))})))};

/***/ }),

/***/ "./src/views/pages/credit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tags_card__ = __webpack_require__("./src/views/tags/card.js");
var links=[{name:'lukeed/preact-starter',desc:'A Webpack2 starter for building SPA / PWA / offline front-end apps with Preact',href:'https://github.com/lukeed/preact-starter'},{name:'developit/preact',desc:'Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.',href:'https://www.npmjs.com/package/preact'},{name:'developit/preact-router',desc:'URL router for Preact.',href:'https://www.npmjs.com/package/preact-router'},{name:'webpack/webpack',desc:'A bundler for javascript and friends. Allows for code splitting & asynchronous lazy-loading.',href:'https://github.com/webpack/webpack'},{name:'FormidableLabs/webpack-dashboard',desc:'A CLI dashboard for webpack-dev-server',href:'https://github.com/FormidableLabs/webpack-dashboard'},{name:'zeit/now',desc:'Free (OSS) realtime global deployments',href:'https://zeit.co/now'},{name:'zeit/serve',desc:'Single-command HTTP directory listing and file serving',href:'https://github.com/zeit/serve'}];/* unused harmony default export */ var _unused_webpack_default_export = function(){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'page page__credit'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__tags_card__["a" /* default */],null,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h1',null,'Credits:'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('p',null,'Resources used within boilerplate:')),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('nav',null,links.map(function(b){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a',{className:'card',href:b.href,target:'_blank',rel:'noopener'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('strong',null,b.name),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('em',null,b.desc))})))};

/***/ }),

/***/ "./src/views/pages/errors/404.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tags_card__ = __webpack_require__("./src/views/tags/card.js");
/* harmony default export */ __webpack_exports__["a"] = function(a){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'page page__404'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__tags_card__["a" /* default */],null,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h1',null,'404 Page'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('p',null,'Looks like you were given a bad link ;-)'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('pre',null,a.url)))};

/***/ }),

/***/ "./src/views/pages/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("./node_modules/preact-router/dist/preact-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_card__ = __webpack_require__("./src/views/tags/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tags_button__ = __webpack_require__("./src/views/tags/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tags_card_link__ = __webpack_require__("./src/views/tags/card-link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var mapStateToProps=function(a){return{news:a.news.articles,sources:a.news.sources,ui:a.ui}},mapDispatchToProps=function(a){return{load:function load(b){console.log('map state'),a({type:'LOAD',sources:b})}}},Home=function(_ref){var a=_ref.ui,b=_ref.news,c=_ref.sources,d=_ref.load;return a.loading?__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'page page__home'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__tags_card__["a" /* default */],null,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br',null),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('center',null,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h3',null,'This takes a bit, hold onto your socks ',__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br',null),'( \u0361\xB0 \u035C\u0296 \u0361\xB0)')),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img',{className:'loader',src:'/img/loader.gif',alt:'loading'}))):__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'page page__home'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h2',null,'Latest News'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br',null),b.map(function(e,f){return 1e3>e.content.length?null:__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__tags_card_link__["a" /* default */],{href:'/article/'+f},e.urlToImage?__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img',{src:'https://api.rethumb.com/v1/square/200/'+e.urlToImage}):__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img',{src:'/img/na.jpg'}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h3',null,e.title),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br',null),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('p',null,e.description))}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br',null),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{'class':'refresh-background'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('i',{'class':'refresh material-icons nav-icon md-36'},'refresh')),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br',null))};/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps,mapDispatchToProps)(Home);

/***/ }),

/***/ "./src/views/pages/settings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("./node_modules/preact-router/dist/preact-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_card__ = __webpack_require__("./src/views/tags/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var mapStateToProps=function(a){return{sources:a.news.sources,remoteSources:a.news.remoteSources}},mapDispatchToProps=function(a){return{addSource:function addSource(b){a({type:'ADD SOURCE',source:b})},removeSource:function removeSource(b){a({type:'REMOVE SOURCE',source:b})},loadSources:function loadSources(){return a({type:'LOAD SOURCES'})}}},Settings=function(_ref){var a=_ref.addSource,b=_ref.removeSource,c=_ref.loadSources,d=_ref.sources,e=_ref.remoteSources,f=void 0;return 0==e.length?c():f=!0,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'page page__settings'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{'class':'logo-container'},e.map(function(g){return 0<=d.indexOf(g.id)?__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img',{onClick:function onClick(){return b(g.id)},'class':'logo glow',src:g.urlsToLogos.small}):__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img',{onClick:function onClick(){return a(g.id)},'class':'logo',src:g.urlsToLogos.small})})))};/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps,mapDispatchToProps)(Settings);

/***/ }),

/***/ "./src/views/tags/button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("./node_modules/preact-router/dist/preact-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router__);
/* unused harmony default export */ var _unused_webpack_default_export = function(a){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{className:'btn'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a',{onClick:a.callback},a.name))};

/***/ }),

/***/ "./src/views/tags/card-link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("./node_modules/preact-router/dist/preact-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router__);
/* harmony default export */ __webpack_exports__["a"] = function(a){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_router__["Link"],{href:a.href,className:'card'},a.children)};

/***/ }),

/***/ "./src/views/tags/card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony default export */ __webpack_exports__["a"] = function(a){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div",{className:"card"},a.children)};

/***/ }),

/***/ "./src/views/tags/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("./node_modules/preact-router/dist/preact-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router__);
/* harmony default export */ __webpack_exports__["a"] = function(){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('header',{className:'header'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h1',null,'NewScraper 2.0'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('nav',null,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_router__["Link"],{href:'/'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('i',{'class':'material-icons nav-icon md-36'},'home')),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_router__["Link"],{href:'/settings'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('i',{'class':'material-icons nav-icon md-36'},'settings'))))};

/***/ }),

/***/ "./src/views/tags/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("./node_modules/preact/dist/preact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__("./src/views/tags/header.js");
/* harmony default export */ __webpack_exports__["a"] = function(a){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div',{id:'app'},__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */],null),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('main',{id:'content'},a.children))};

/***/ })

},["./src/index.js"]);