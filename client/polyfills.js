/* eslint no-extend-native: 0 */

// This file runs before React and Next.js core
// This file is loaded for all browsers
// Next.js includes a number of polyfills only for older browsers like IE11
// Make sure you don't duplicate these in this file
// https://github.com/vercel/next.js/blob/canary/packages/next-polyfill-nomodule/src/index.js
console.log("Load your polyfills");
/* eslint-disable import/no-extraneous-dependencies */
import "core-js/features/array/copy-within";
import "core-js/features/array/fill";
import "core-js/features/array/find";
import "core-js/features/array/find-index";
import "core-js/features/array/flat-map";
import "core-js/features/array/flat";
import "core-js/features/array/from";
import "core-js/features/array/includes";
import "core-js/features/array/iterator";
import "core-js/features/array/of";
import "core-js/features/function/has-instance";
import "core-js/features/function/name";
import "core-js/features/map";
import "core-js/features/number/constructor";
import "core-js/features/number/epsilon";
import "core-js/features/number/is-finite";
import "core-js/features/number/is-integer";
import "core-js/features/number/is-nan";
import "core-js/features/number/is-safe-integer";
import "core-js/features/number/max-safe-integer";
import "core-js/features/number/min-safe-integer";
import "core-js/features/number/parse-float";
import "core-js/features/number/parse-int";
import "core-js/features/object/entries";
import "core-js/features/object/get-own-property-descriptors";
import "core-js/features/object/keys";
import "core-js/features/object/is";
import "core-js/features/object/values";
import "core-js/features/reflect";
import "core-js/features/regexp";
import "core-js/features/set";
import "core-js/features/symbol";
import "core-js/features/symbol/async-iterator";
import "core-js/features/string/code-point-at";
import "core-js/features/string/ends-with";
import "core-js/features/string/from-code-point";
import "core-js/features/string/includes";
import "core-js/features/string/iterator";
import "core-js/features/string/pad-start";
import "core-js/features/string/pad-end";
import "core-js/features/string/raw";
import "core-js/features/string/repeat";
import "core-js/features/string/starts-with";
import "core-js/features/string/trim-left";
import "core-js/features/string/trim-right";
import "core-js/features/url";
import "core-js/features/url/to-json";
import "core-js/features/url-search-params";
import "core-js/features/weak-map";
import "core-js/features/weak-set";
import "core-js/features/promise";
import "core-js/features/promise/all-settled";
import "core-js/features/promise/finally";

// Specialized Packages:
import "whatwg-fetch";
import assign from "object-assign";
Object.assign = assign;
