!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector(".form");function a(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(u.delay.value),t=Number(u.step.value),i=Number(u.amount.value),l=o,c=1;c<=i;c+=1)a(c,l).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),l+=t}))}();
//# sourceMappingURL=03-promises.53bd0887.js.map