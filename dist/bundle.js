!function(t){var a={};function n(r){if(a[r])return a[r].exports;var e=a[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,a,r){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(r,e,function(a){return t[a]}.bind(null,e));return r},n.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="",n(n.s=3)}([function(t,a){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function e(t,a){for(var n=0;n<a.length;n++){var r=a[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,a){return!a||"object"!==n(a)&&"function"!=typeof a?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):a}function o(t){var a="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(t))return a.get(t);a.set(t,r)}function r(){return u(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function u(t,a,n){return(u=c()?Reflect.construct:function(t,a,n){var r=[null];r.push.apply(r,a);var e=new(Function.bind.apply(t,r));return n&&s(e,n.prototype),e}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,a){return(s=Object.setPrototypeOf||function(t,a){return t.__proto__=a,t})(t,a)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),a&&s(t,a)}(h,t);var a,n,o,u,d,p=(a=h,n=c(),function(){var t,r=l(a);if(n){var e=l(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return i(this,t)});function h(){return r(this,h),p.apply(this,arguments)}return o=h,(u=[{key:"connectedCallback",value:function(){this.attachShadow({mode:"open"}).innerHTML='\n    <head>\n      <link\n        rel="stylesheet"\n        href="../node_modules/bootstrap/dist/css/bootstrap.min.css"\n      />\n      <link rel="stylesheet" href="../src/asset/Style/index.css" />\n    </head>\n    <div class="appbar bg-dark d-flex justify-content-center align-items-center">\n      <div class="list-surah m-auto">  \n        <a href="/publik/surah.html" class="d-flex pl-4 text-center text-light header-hover">\n          <img src="../src/asset/icon/reading-book.svg" class="w-50 pt-4 pb-4 " ></img>\n        </a>\n      </div>\n      <div class="list-surah m-auto">  \n        <a href="/publik/juz.html" class="d-flex pl-4 text-center text-light header-hover">\n          <img src="../src/asset/icon/open-book.svg" class="w-50 pt-4 pb-4 "></img>\n        </a>\n      </div>\n      <div class="list-surah m-auto">  \n        <a href="/publik/keterangan.html" class="d-flex pl-4 text-center text-light header-hover">\n          <img src="../src/asset/icon/ques.svg" class="w-50 pt-4 pb-4"></img>\n        </a>\n      </div>\n    </div>\n    '}}])&&e(o.prototype,u),d&&e(o,d),h}(o(HTMLElement));customElements.define("app-bar",d)},function(t,a){fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty").then((function(t){return t.json()})).then((function(t){var a=t.map((function(t){return'\n            <tr>\n              <th scope="row">'.concat(t.nomor,'</th>\n              <td><div style="font-size:1.75rem;">').concat(t.asma,'</div><p class=" m-0">').concat(t.nama,"</p></td>\n              <td>").concat(t.ayat,"</td>\n              <td>").concat(t.type,'</td>\n              <td colspan="3">').concat(t.rukuk,'</td>\n            </tr>\n            <tr>\n              <td colspan="5" class="text-center">\n                <p class=" pt-3">').concat(t.keterangan,'</p>\n                <button type="button" class="btn btn-primary mb-4 " id="').concat(t.nomor,'" value="').concat(t.nomor,'" onclick="\n                  fetchIdBtn(').concat(t.nomor,');\n                ">Baca Surah ').concat(t.nama,"</button>\n              </td>\n            </tr>\n          ")})).join("");document.getElementById("isisurah").insertAdjacentHTML("afterbegin",a)})).catch((function(t){console.log(t)}))},function(t,a){!function(t){var a=document.getElementById(t).getAttribute("value");console.log(a);var n=document.getElementById("tabel-surah"),r=document.getElementById("".concat(a)),e=document.getElementById("bacaSurah"),i=document.getElementById("keSurah");r.click?(n.classList.add("d-none"),e.classList.remove("d-none")):i.click&&(n.classList.remove("d-none"),e.classList.add("d-none")),fetch("https://al-quran-8d642.firebaseio.com/surat/".concat(a,".json?print=pretty")).then((function(t){return t.json()})).then((function(t){console.log(t);var n=t.map((function(t){return'\n            <div id="'.concat(a,'"> \n                <div class="d-flex text-left w-100 mt-5">\n                    <p class="ml-auto">').concat(t.nomor,'</p>\n                    <p class="ml-2 text-right" style="font-size:2rem;">').concat(t.ar,'</p>\n                </div>\n                <div >\n                    <p class="text-right">').concat(t.tr,'</p>\n                    <p class="text-left">').concat(t.id,"</p>\n                </div>\n            </div>\n            ")})).join("");document.getElementById("bacaSurah").insertAdjacentHTML("beforeend",n)})).catch((function(t){console.log(t)}))}()},function(t,a,n){"use strict";n.r(a);var r;n(0),n(1);r=[{id:"1",dari:"Surah Al-Fatihah Ayat 1",sampai:"Surah Al-Baqarah Ayat 141"},{id:"2",dari:"Surah Al-Baqarah Ayat 142",sampai:"Surah Al-Baqarah Ayat 252"},{id:"3",dari:"Surah Al-Baqarah Ayat 253",sampai:"Surah Ali Imran Ayat 92"},{id:"4",dari:"Surah Ali Imran Ayat 93",sampai:"Surah An-Nisa’ Ayat 23"},{id:"5",dari:"Surah An-Nisa’ Ayat 24",sampai:"Surah An-Nisa’ Ayat 147"},{id:"6",dari:"Surah An-Nisa’ Ayat 148",sampai:"Surah Al-Ma’idah Ayat 82"},{id:"7",dari:"Surah Al-Ma’idah Ayat 83",sampai:"Surah Al-An’am Ayat 110"},{id:"8",dari:"Surah Al-An’am Ayat 111",sampai:"Surah Al A’raf Ayat 87"},{id:"9",dari:"Surah Al A’raf Ayat 88",sampai:"Surah Al-Anfal Ayat 40"},{id:"10",dari:"Surah Al-Anfal Ayat 41",sampai:"Surah At-Taubah Ayat 92"},{id:"11",dari:"Surah At-Taubah Ayat 93",sampai:"Surah Hud Ayat 5"},{id:"12",dari:"Surah Hud Ayat 6",sampai:"Surah Yusuf Ayat 52"},{id:"13",dari:"Surah Yusuf Ayat 53",sampai:"Surah Ibrahim Ayat 52"},{id:"14",dari:"Surah Al-Hijr Ayat 1",sampai:"Surah An-Nahl Ayat 128"},{id:"15",dari:"Surah Al-Isra Ayat 1",sampai:"Surah Al-Kahf Ayat 74"},{id:"16",dari:"Surah Al-Kahf Ayat 75",sampai:"Surah Ta-Ha Ayat 135"},{id:"17",dari:"Surah Al-Anbiya Ayat 1",sampai:"Surah Al Hajj Ayat 78"},{id:"18",dari:"Surah Al-Mu’minun Ayat 1",sampai:"Surah Al-Furqan Ayat 20"},{id:"19",dari:"Surah Al-Furqan Ayat 21",sampai:"Surah An-Naml Ayat 55"},{id:"20",dari:"Surah An-Naml Ayat 56",sampai:"Surah Al-Ankabut Ayat 45"},{id:"21",dari:"Surah Al-Ankabut Ayat 46",sampai:"Surah Al-Azhab Ayat 30"},{id:"22",dari:"Surah Al-Azhab Ayat 31",sampai:"Surah Yasin Ayat 27"},{id:"23",dari:"Surah Yasin Ayat 28",sampai:"Surah Az-Zumar Ayat 31"},{id:"24",dari:"Surah Az-Zumar Ayat 32",sampai:"Surah Fussilat Ayat 46"},{id:"25",dari:"Surah Fussilat Ayat 47",sampai:"Surah Al-Jatsiyah Ayat 37"},{id:"26",dari:"Surah Al-Ahqaf Ayat 1",sampai:"Surah Adz Dzariyat Ayat 30"},{id:"27",dari:"Surah Adz Dzariyat Ayat 31",sampai:"Surah Al-Hadid Ayat 29"},{id:"28",dari:"Surah Al-Mujadilah Ayat 1",sampai:"Surah At-Tahrim Ayat 12"},{id:"29",dari:"Surah Al-Mulk Ayat 1",sampai:"Surah Al-Mursalat Ayat 50"},{id:"30",dari:"Surah An-Naba’ Ayat 1",sampai:"Surah An-Nas Ayat 6"}].map((function(t){return'\n        <tr class="mb-3">\n            <th scope="row">'.concat(t.id,'</th>\n            <td class="text-left pr-3">').concat(t.dari,'</td>\n            <td class="text-left pr-3">').concat(t.sampai,"</td>\n        </tr>\n        ")})).join(""),document.getElementById("isijuz").insertAdjacentHTML("afterbegin",r);n(2)}]);