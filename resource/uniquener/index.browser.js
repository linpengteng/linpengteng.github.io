!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("crypto")):"function"==typeof define&&define.amd?define(["crypto"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Uniquener=t(e.crypto)}(this,(function(e){"use strict";const t=new Set([""]),r=(n={})=>{const i=n.algorithm,s=n.onlyUpdate,o=n.usedUniques,a=!1!==n.reduplicateExit,l=n.throwErrorHandler||(e=>{}),c=n.reduplicateHandler||(e=>e),d=n.listenCacherHandler||(e=>{}),g=!0===a||"function"!=typeof n.reduplicateHandler;let u=n.radix||16,f=n.random||"?",p=n.format||null,m="number"==typeof n.tryCount?n.tryCount:10;if(!0===s)try{return o instanceof Array&&o.forEach((e=>"string"==typeof e&&t.add(e.trim()))),o instanceof Set&&o.forEach((e=>"string"==typeof e&&t.add(e.trim()))),d(new Set(t)),""}catch{throw l(new Set(t)),new Error("[Options.listenCacherHandler] is Call Error")}if([10,16,26,36].includes(u)||(u=16),["?","*","#"].includes(f)||(f="?"),String(p)!==p&&(p="????????-????-[1-5]???-[8-b]???-????????????",p=p.replace(/\?/g,f)),o instanceof Array)try{o.forEach((e=>"string"==typeof e&&t.add(e.trim()))),d(new Set(t))}catch{throw l(new Set(t)),new Error("[Options.listenCacherHandler] is Call Error")}if(o instanceof Set)try{o.forEach((e=>"string"==typeof e&&t.add(e.trim()))),d(new Set(t))}catch{throw l(new Set(t)),new Error("[Options.listenCacherHandler] is Call Error")}let h="",y=!0,w=!1;const E=26===u?10:0,S=Array.from({length:36},((e,t)=>t.toString(36))),$=t.add.bind(t),M=t=>{const r=t.min,n=t.max,i=t.bytes;return"crypto.getRandomValues"===t.algorithm?i[e.getRandomValues(new Uint8Array(1))[0]%(n-r+1)+r|0]:i[Math.random()*(n-r+1)+r|0]};for(;y&&m-- >0;){const e=p.replace(/\[([^\]]+?)\]/g,((e,t)=>{if("string"==typeof t){const e=new Set,r=e.add.bind(e),n=t.toLowerCase().split(/\s*,\s*/g).filter((e=>/^[a-zA-Z0-9\s/|\-*?#=:;]+$/iu.test(e))),s=e=>/^\s*[a-zA-Z0-9]\s*-\s*[a-zA-Z0-9]\s*$/.test(e);if((e=>/^\s*time\s*:\s*(YYYY|MM|DD|HH|mm|ss|iii|stamp|:|-|\||\/|\s)+\s*$/.test(e))(t.trim())){const e=new Date,r=`${e.getTime()}`,n=`${e.getFullYear()}`,i=e.getMonth()+1>9?`${e.getMonth()+1}`:`0${e.getMonth()+1}`,s=e.getMinutes()>9?`${e.getMinutes()}`:`0${e.getMinutes()}`,o=e.getSeconds()>9?`${e.getSeconds()}`:`0${e.getSeconds()}`,a=e.getMilliseconds()>99?`${e.getMilliseconds()}`:e.getMilliseconds()>9?`0${e.getMilliseconds()}`:`00${e.getMilliseconds()}`,l=e.getHours()>9?`${e.getHours()}`:`0${e.getHours()}`,c=e.getDate()>9?`${e.getDate()}`:`0${e.getDate()}`;return t.trim().replace(/^\s*time\s*:\s*/,"").replace(/stamp/g,r).replace(/YYYY/g,n).replace(/MM/g,i).replace(/DD/g,c).replace(/HH/g,l).replace(/mm/g,s).replace(/ss/g,o).replace(/iii/g,a).replace(/\s+/g," ")}const o=n.reduce(((e,t)=>{if(s(t.trim())){const e=t.trim().split(/\s*-\s*/)[0],n=t.trim().split(/\s*-\s*/)[1],i=S.indexOf(e.trim()),s=S.indexOf(n.trim()),o=Math.min(i,s),a=Math.max(i,s)+1;S.slice(o,a).forEach(r)}return s(t.trim())||r(t.trim()),e}),e),a=Array.from(o).filter((e=>!!e));return M({bytes:a,algorithm:i,max:a.length-1,min:0})}return e})),r=0,n=u-1,s=S.slice(E);if(h=[...e.toLowerCase()].filter((e=>/^[a-zA-Z0-9\s/|\-*?#=:;]+$/iu.test(e))).map((e=>e===f?M({bytes:s,algorithm:i,max:n,min:r}):e)).join("").trim(),!t.has(h))try{y=!1,$(h),d(new Set(t))}catch{throw l(new Set(t)),new Error("[Options.listenCacherHandler] is Call Error")}}if(y&&g)throw l(new Set(t)),new Error("[Uniquener generate unique] is Reduplicated");if(y&&!g)try{const e=c(n),t={reduplicateExit:!0};return w=!0,r({...n,...e,...t})}catch{throw!w&&l(new Set(t)),new Error(w?"[Uniquener generate unique] is Reduplicated":"[Options.reduplicateHandler] is Call Error")}return h};return r}));
