// ==UserScript==
// @name         冬灰条哔哩哔哩音乐播放器
// @namespace    monkey-plugin-starter
// @version      0.5.2
// @author       冬灰条
// @description  可以把b站变成音乐播放器。作者b站连接：https://space.bilibili.com/8212729
// @license      MIT
// @icon         https://api.iconify.design/carbon:notebook-reference.svg
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/list/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.4.3/dist/vue.global.prod.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      data:application/javascript,%3Bwindow.Vue%3DVue%3B
// @require      https://cdn.jsdelivr.net/npm/axios@1.6.3/dist/axios.min.js
// @require      https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js
// @require      https://cdn.jsdelivr.net/npm/localforage@1.10.0/dist/localforage.min.js
// @grant        GM_addStyle
// @grant        GM_info
// @grant        GM_openInTab
// @grant        unsafeWindow
// @downloadURL https://update.greasyfork.org/scripts/484240/%E5%86%AC%E7%81%B0%E6%9D%A1%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8.user.js
// @updateURL https://update.greasyfork.org/scripts/484240/%E5%86%AC%E7%81%B0%E6%9D%A1%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8.meta.js
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const r=document.createElement("style");r.textContent=t,document.head.append(r)})(` [type=range]+[type=range]{background:none}[type=range]{pointer-events:none;background:transparent;height:0}[type=range]::-webkit-slider-thumb{pointer-events:auto}[type=range]::-moz-range-thumb{pointer-events:auto}.glass-blur{filter:blur(11px);z-index:-100}.glass-blur:before{content:"";width:100%;height:100%;position:absolute;top:0;left:0;background:linear-gradient(to right bottom,#fff9,#ffffff4d,#fff3);background-color:#fff}@keyframes dht-music-cover-roll{to{transform:rotate(360deg)}}.dht-music-cover-roll{animation:dht-music-cover-roll 30s linear infinite}.drag-move{transition:transform .3s}.div-font-style{font-weight:700;-webkit-user-select:none;user-select:none;text-shadow:-2px -2px #000000,-2px -1px #000000,-2px 0 #000000,-2px 1px #000000,-2px 2px #000000,-1px -2px #000000,-1px -1px #000000,-1px 0 #000000,-1px 1px #000000,-1px 2px #000000,0 -2px #000000,0 -1px #000000,0 0 #000000,0 1px #000000,0 2px #000000,1px -2px #000000,1px -1px #000000,1px 0 #000000,1px 1px #000000,1px 2px #000000,2px -2px #000000,2px -1px #000000,2px 0 #000000,2px 1px #000000,2px 2px #000000}div::-webkit-scrollbar{width:6px;height:10px}div::-webkit-scrollbar-track{background:#efefef00;border-radius:2px}div::-webkit-scrollbar-thumb{background:#33333347;border-radius:10px}div::-webkit-scrollbar-thumb:hover{background:#bfbfbf}div::-webkit-scrollbar-corner{background:#179a16}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.i-carbon-add-filled{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2A14.173 14.173 0 0 0 2 16a14.173 14.173 0 0 0 14 14a14.173 14.173 0 0 0 14-14A14.173 14.173 0 0 0 16 2m8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z'/%3E%3Cpath fill='none' d='M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-list{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-overflow-menu-vertical{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Ccircle cx='16' cy='8' r='2' fill='currentColor'/%3E%3Ccircle cx='16' cy='16' r='2' fill='currentColor'/%3E%3Ccircle cx='16' cy='24' r='2' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-pause-outline{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M14 10h-2v12h2zm6 0h-2v12h2z'/%3E%3Cpath fill='currentColor' d='M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-play-outline{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23m1-11.382v8.764L20.764 16Z'/%3E%3Cpath fill='currentColor' d='M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-skip-back{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M27 28a1 1 0 0 1-.5-.13l-19-11a1 1 0 0 1 0-1.74l19-11a1 1 0 0 1 1 0A1 1 0 0 1 28 5v22a1 1 0 0 1-1 1M10 16l16 9.27V6.73zM2 4h2v24H2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-skip-forward{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5 28a1 1 0 0 1-1-1V5a1 1 0 0 1 .5-.87a1 1 0 0 1 1 0l19 11a1 1 0 0 1 0 1.74l-19 11A1 1 0 0 1 5 28M6 6.73v18.54L22 16zM28 4h2v24h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-volume-down{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M25.1 10.66L23.58 12a6 6 0 0 1-.18 7.94l1.47 1.36a8 8 0 0 0 .23-10.59zM20 30a1 1 0 0 1-.71-.3L11.67 22H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1M6 20h6a1.17 1.17 0 0 1 .79.3L19 26.57V5.43l-6.21 6.27a1.17 1.17 0 0 1-.79.3H6z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-carbon-volume-mute{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M31 12.41L29.59 11L26 14.59L22.41 11L21 12.41L24.59 16L21 19.59L22.41 21L26 17.41L29.59 21L31 19.59L27.41 16zM18 30a1 1 0 0 1-.71-.3L9.67 22H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0a1 1 0 0 1 .3.7v26a1 1 0 0 1-1 1M4 20h6a1.17 1.17 0 0 1 .79.3L17 26.57V5.43l-6.21 6.27a1.17 1.17 0 0 1-.79.3H4z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-cil-list-high-priority{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M256 416h240v32H256zm0-106.667h240v32H256zm0-106.666h240v32H256zM328 96h168v32H328z'/%3E%3Cpath fill='currentColor' d='M302 111L167.2 27.216V96h-5.965C121.783 96 84.91 114.755 57.4 148.81C30.7 181.866 16 225.616 16 272s14.7 90.134 41.4 123.19C84.91 429.245 121.783 448 161.231 448H216v-32h-54.769C98.8 416 48 351.4 48 272s50.8-144 113.231-144h5.969v69.228ZM199.2 84.784l42.8 26.607l-42.8 27.381Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-cil-loop-1{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M208 312v32h112v-32h-40V176h-32v24h-32v32h32v80z'/%3E%3Cpath fill='currentColor' d='M464 210.511V264a112.127 112.127 0 0 1-112 112H78.627l44.686-44.687l-22.626-22.626L56 353.373l-4.415 4.414l-33.566 33.567l74.022 83.276l23.918-21.26L75.63 408H352c79.4 0 144-64.6 144-144v-85.489Z'/%3E%3Cpath fill='currentColor' d='M48 256a112.127 112.127 0 0 1 112-112h273.373l-44.686 44.687l22.626 22.626L456 166.627l4.117-4.116l33.864-33.865l-74.022-83.276l-23.918 21.26L436.37 112H160c-79.4 0-144 64.6-144 144v85.787l32-32Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-lets-icons-sort-random{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cg fill='none'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M3 7h1.78c2.152 0 3.228 0 4.1.456a4 4 0 0 1 1.005.749c.688.703.997 1.734 1.615 3.795s.928 3.092 1.615 3.795c.294.301.633.554 1.006.749c.871.456 1.947.456 4.1.456H21m0 0l-3-3m3 3l-3 3'/%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m21.707 6.293l-3-3l-1.414 1.414L18.586 6h-.411c-1.038 0-1.881 0-2.573.06c-.717.064-1.349.198-1.945.51a5 5 0 0 0-1.21.888c.241.393.43.8.594 1.21c.113.283.223.593.332.923a2.5 2.5 0 0 1 .457-.688a3 3 0 0 1 .755-.56c.275-.145.617-.239 1.193-.29C16.371 8.001 17.127 8 18.22 8h.366l-1.293 1.293l1.414 1.414l3-3L22.414 7zm-11.154 10.25a7.91 7.91 0 0 1-.594-1.21a16.393 16.393 0 0 1-.332-.924a2.484 2.484 0 0 1-.457.688a3 3 0 0 1-.755.56c-.275.145-.617.24-1.193.29c-.593.052-1.349.053-2.442.053H3v2h1.825c1.038 0 1.881 0 2.572-.06c.718-.064 1.35-.198 1.946-.51a5 5 0 0 0 1.21-.888' clip-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-1x-mobiledata-badge-outline{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm0-2h18V5H3zm0 0V5zm4-2h2V7H5v2h2zm4.5 0h2l1.75-3.175L17 17h2l-2.75-5L19 7h-2l-1.75 3.175L13.5 7h-2l2.75 5z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-material-symbols-playlist-play{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 16v-2h8v2zm0-4v-2h12v2zm0-4V6h12v2zm13 13v-8l6 4z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.i-ph-thumbs-up-light{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 256 256' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M232.49 81.44A22 22 0 0 0 216 74h-58V56a38 38 0 0 0-38-38a6 6 0 0 0-5.37 3.32L76.29 98H32a14 14 0 0 0-14 14v88a14 14 0 0 0 14 14h172a22 22 0 0 0 21.83-19.27l12-96a22 22 0 0 0-5.34-17.29M30 200v-88a2 2 0 0 1 2-2h42v92H32a2 2 0 0 1-2-2M225.92 97.24l-12 96A10 10 0 0 1 204 202H86v-96.58l37.58-75.17A26 26 0 0 1 146 56v24a6 6 0 0 0 6 6h64a10 10 0 0 1 9.92 11.24'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em}.center{display:flex;align-items:center;justify-content:center}:root,[data-theme]{background-color:hsl(var(--b1) / var(--un-bg-opacity, 1));color:hsl(var(--bc) / var(--un-text-opacity, 1))}html{-webkit-tap-highlight-color:transparent}.badge{display:inline-flex;align-items:center;justify-content:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.2s;height:1.25rem;font-size:.875rem;line-height:1.25rem;width:-moz-fit-content;width:fit-content;padding-left:.563rem;padding-right:.563rem;border-width:1px;--un-border-opacity: 1;border-color:hsl(var(--b2) / var(--un-border-opacity));--un-bg-opacity: 1;background-color:hsl(var(--b1) / var(--un-bg-opacity));--un-text-opacity: 1;color:hsl(var(--bc) / var(--un-text-opacity));border-radius:var(--rounded-badge, 1.9rem)}.label a:hover{--un-text-opacity: 1;color:hsl(var(--bc) / var(--un-text-opacity))}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.tab:hover{--un-text-opacity: 1 }.tab[disabled],.tab[disabled]:hover{cursor:not-allowed;color:hsl(var(--bc) / var(--un-text-opacity));--un-text-opacity: .2 }.tab{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;text-align:center;height:2rem;font-size:.875rem;line-height:1.25rem;line-height:2;--tab-padding: 1rem;--un-text-opacity: .5;--tab-color: hsl(var(--bc) / var(--un-text-opacity, 1));--tab-bg: hsl(var(--b1) / var(--un-bg-opacity, 1));--tab-border-color: hsl(var(--b3) / var(--un-bg-opacity, 1));color:var(--tab-color);padding-left:var(--tab-padding, 1rem);padding-right:var(--tab-padding, 1rem)}.tab.tab-active:not(.tab-disabled):not([disabled]){border-color:hsl(var(--bc) / var(--un-border-opacity));--un-border-opacity: 1;--un-text-opacity: 1}.tab:focus{outline:2px solid transparent;outline-offset:2px}.tab:focus-visible{outline:2px solid currentColor;outline-offset:-3px}.tab:focus-visible.tab-lifted{border-bottom-right-radius:var(--tab-radius, .5rem);border-bottom-left-radius:var(--tab-radius, .5rem)}.tabs-boxed .tab-active:not(.tab-disabled):not([disabled]):hover{--un-text-opacity: 1;color:hsl(var(--pc) / var(--un-text-opacity))}.tabs-boxed{--un-bg-opacity: 1;background-color:hsl(var(--b2) / var(--un-bg-opacity));padding:.25rem;border-radius:var(--rounded-btn, .5rem)}.tabs-boxed .tab{border-radius:var(--rounded-btn, .5rem)}.tabs-boxed .tab-active:not(.tab-disabled):not([disabled]){--un-bg-opacity: 1;background-color:hsl(var(--p) / var(--un-bg-opacity));--un-text-opacity: 1;color:hsl(var(--pc) / var(--un-text-opacity))}.btn{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-color:transparent;border-color:hsl(var(--b2) / var(--un-border-opacity));text-align:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.2s;border-radius:var(--rounded-btn, .5rem);height:3rem;padding-left:1rem;padding-right:1rem;min-height:3rem;font-size:.875rem;line-height:1em;gap:.5rem;font-weight:600;text-decoration-line:none;border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;text-transform:var(--btn-text-case, uppercase);--un-border-opacity: 1;--un-bg-opacity: 1;background-color:hsl(var(--b2) / var(--un-bg-opacity));--un-text-opacity: 1;color:hsl(var(--bc) / var(--un-text-opacity));outline-color:hsl(var(--bc) / 1)}.btn:is(input[type=checkbox]),.btn:is(input[type=radio]){width:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox]):after,.btn:is(input[type=radio]):after{--un-content: attr(aria-label);content:var(--un-content)}.btn:hover{--un-border-opacity: 1;border-color:hsl(var(--b3) / var(--un-border-opacity));--un-bg-opacity: 1;background-color:hsl(var(--b3) / var(--un-bg-opacity))}.btn.glass:hover{--glass-opacity: 25%;--glass-border-opacity: 15% }.btn:is(input[type=checkbox]:checked):hover,.btn:is(input[type=radio]:checked):hover{--un-border-opacity: 1;border-color:hsl(var(--pf) / var(--un-border-opacity));--un-bg-opacity: 1;background-color:hsl(var(--pf) / var(--un-bg-opacity))}.btn:active:hover,.btn:active:focus{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale, .97))}.btn:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px}.btn.glass{--un-shadow: 0 0 #0000;--un-shadow-colored: 0 0 #0000;box-shadow:var(--un-ring-offset-shadow, 0 0 #0000),var(--un-ring-shadow, 0 0 #0000),var(--un-shadow);outline-color:currentColor}.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn.btn-disabled,.btn[disabled],.btn:disabled{--un-border-opacity: 0;background-color:hsl(var(--n) / var(--un-bg-opacity));--un-bg-opacity: .2;color:hsl(var(--bc) / var(--un-text-opacity));--un-text-opacity: .2}.btn:is(input[type=checkbox]:checked),.btn:is(input[type=radio]:checked){--un-border-opacity: 1;border-color:hsl(var(--p) / var(--un-border-opacity));--un-bg-opacity: 1;background-color:hsl(var(--p) / var(--un-bg-opacity));--un-text-opacity: 1;color:hsl(var(--pc) / var(--un-text-opacity))}.btn:is(input[type=checkbox]:checked):focus-visible,.btn:is(input[type=radio]:checked):focus-visible{outline-color:hsl(var(--p) / 1)}.checkbox{flex-shrink:0;--chkbg: var(--bc);--chkfg: var(--b1);height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-color:hsl(var(--bc) / var(--un-border-opacity));--un-border-opacity: .2;border-radius:var(--rounded-btn, .5rem)}.checkbox:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:hsl(var(--bc) / 1)}.checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]{--un-bg-opacity: 1;background-color:hsl(var(--bc) / var(--un-bg-opacity));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-image:linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.checkbox:indeterminate{--un-bg-opacity: 1;background-color:hsl(var(--bc) / var(--un-bg-opacity));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-image:linear-gradient(90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(-90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(0deg,hsl(var(--chkbg)) 43%,hsl(var(--chkfg)) 43%,hsl(var(--chkfg)) 57%,hsl(var(--chkbg)) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--un-bg-opacity: 1;background-color:hsl(var(--bc) / var(--un-bg-opacity));opacity:.2}[dir=rtl] .checkbox:checked,[dir=rtl] .checkbox[checked=true],[dir=rtl] .checkbox[aria-checked=true]{background-image:linear-gradient(45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(-45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.divider{display:flex;flex-direction:row;align-items:center;align-self:stretch;margin-top:1rem;margin-bottom:1rem;height:1rem;white-space:nowrap}.divider:before,.divider:after{content:"";flex-grow:1;height:.125rem;width:100%}.divider:before{background-color:hsl(var(--bc) / var(--un-bg-opacity));--un-bg-opacity: .1}.divider:after{background-color:hsl(var(--bc) / var(--un-bg-opacity));--un-bg-opacity: .1}.divider:not(:empty){gap:1rem}.input{flex-shrink:1;height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;font-size:1rem;line-height:1.25rem;line-height:2;line-height:1.5rem;border-width:1px;border-color:hsl(var(--bc) / var(--un-border-opacity));--un-border-opacity: 0;--un-bg-opacity: 1;background-color:hsl(var(--b1) / var(--un-bg-opacity));border-radius:var(--rounded-btn, .5rem)}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input:focus,.input:focus-within{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:hsl(var(--bc) / .2)}.range{height:1.5rem;width:100%;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;--range-shdw: var(--bc);overflow:hidden;background-color:transparent;border-radius:var(--rounded-box, 1rem)}.range:focus{outline:none}.range:focus-visible::-webkit-slider-thumb{--focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset}.range:focus-visible::-moz-range-thumb{--focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset}.range::-webkit-slider-runnable-track{height:.5rem;width:100%;background-color:hsl(var(--bc) / .1);border-radius:var(--rounded-box, 1rem)}.range::-moz-range-track{height:.5rem;width:100%;background-color:hsl(var(--bc) / .1);border-radius:var(--rounded-box, 1rem)}.range::-webkit-slider-thumb{position:relative;height:1.5rem;width:1.5rem;border-style:none;--un-bg-opacity: 1;background-color:hsl(var(--b1) / var(--un-bg-opacity));border-radius:var(--rounded-box, 1rem);-moz-appearance:none;appearance:none;-webkit-appearance:none;top:50%;color:hsl(var(--range-shdw));transform:translateY(-50%);--filler-size: 100rem;--filler-offset: .6rem;box-shadow:0 0 0 3px hsl(var(--range-shdw)) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}.range::-moz-range-thumb{position:relative;height:1.5rem;width:1.5rem;border-style:none;--un-bg-opacity: 1;background-color:hsl(var(--b1) / var(--un-bg-opacity));border-radius:var(--rounded-box, 1rem);top:50%;color:hsl(var(--range-shdw));--filler-size: 100rem;--filler-offset: .5rem;box-shadow:0 0 0 3px hsl(var(--range-shdw)) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}.select{display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:3rem;padding-left:1rem;padding-right:2.5rem;font-size:.875rem;line-height:1.25rem;line-height:2;min-height:3rem;border-width:1px;border-color:hsl(var(--bc) / var(--un-border-opacity));--un-border-opacity: 0;--un-bg-opacity: 1;background-color:hsl(var(--b1) / var(--un-bg-opacity));border-radius:var(--rounded-btn, .5rem);background-image:linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-size:4px 4px,4px 4px;background-repeat:no-repeat}.select[multiple]{height:auto}.select:focus{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:hsl(var(--bc) / .2)}[dir=rtl] .select{background-position:calc(0% + 12px) calc(1px + 50%),calc(0% + 16px) calc(1px + 50%)}.tabs{display:flex;flex-wrap:wrap;align-items:flex-end}.textarea{flex-shrink:1;min-height:3rem;padding:.5rem 1rem;font-size:.875rem;line-height:1.25rem;line-height:2;border-width:1px;border-color:hsl(var(--bc) / var(--un-border-opacity));--un-border-opacity: 0;--un-bg-opacity: 1;background-color:hsl(var(--b1) / var(--un-bg-opacity));border-radius:var(--rounded-btn, .5rem)}.textarea:focus{outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:hsl(var(--bc) / .2)}.toast{position:fixed;display:flex;min-width:-moz-fit-content;min-width:fit-content;flex-direction:column;white-space:nowrap;gap:.5rem;padding:1rem}.toast>*{animation:toast-pop .25s ease-out}:where(.toast){bottom:0;left:auto;right:0;top:auto;--un-translate-x: 0px;--un-translate-y: 0px;transform:translate(var(--un-translate-x),var(--un-translate-y)) rotate(var(--un-rotate)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))}.toast:where(.toast-start){left:0;right:auto;--un-translate-x: 0px;transform:translate(var(--un-translate-x),var(--un-translate-y)) rotate(var(--un-rotate)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))}.toast:where(.toast-center){left:50%;right:50%;--un-translate-x: -50%;transform:translate(var(--un-translate-x),var(--un-translate-y)) rotate(var(--un-rotate)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))}.toast:where(.toast-end){left:auto;right:0;--un-translate-x: 0px;transform:translate(var(--un-translate-x),var(--un-translate-y)) rotate(var(--un-rotate)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))}.toast:where(.toast-bottom){bottom:0;top:auto;--un-translate-y: 0px;transform:translate(var(--un-translate-x),var(--un-translate-y)) rotate(var(--un-rotate)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))}.toast:where(.toast-middle){bottom:auto;top:50%;--un-translate-y: -50%;transform:translate(var(--un-translate-x),var(--un-translate-y)) rotate(var(--un-rotate)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))}.toast:where(.toast-top){bottom:auto;top:0;--un-translate-y: 0px;transform:translate(var(--un-translate-x),var(--un-translate-y)) rotate(var(--un-rotate)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))}.badge-error{border-color:transparent;--un-bg-opacity: 1;background-color:hsl(var(--er) / var(--un-bg-opacity));--un-text-opacity: 1;color:hsl(var(--erc) / var(--un-text-opacity))}.input-bordered,.select-bordered{--un-border-opacity: .2}.btn-sm{height:2rem;padding-left:.75rem;padding-right:.75rem;min-height:2rem;font-size:.875rem}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}:root{color-scheme:light;--pf: 331 100% 41%;--sf: 334 37% 34%;--af: 139 16% 36%;--nf: 44 100% 1%;--b2: 0 4% 84%;--b3: 0 4% 77%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 346 100% 93%;--sc: 340 30% 88%;--ac: 136 12% 88%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 331 100% 48%;--s: 334 37% 41%;--a: 139 16% 43%;--n: 44 100% 8%;--nc: 0 4% 91%;--b1: 0 4% 91%;--bc: 0 3% 6%}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.right-100px{right:100px}.top-0,.top-0px{top:0}.top-100px{top:100px}.top-6px{top:6px}.z-9996{z-index:9996}.z-9999{z-index:9999}.m-10px{margin:10px}.m-5px{margin:5px}.mx-10px{margin-left:10px;margin-right:10px}.mb-60px{margin-bottom:60px}.box-border{box-sizing:border-box}.inline-block{display:inline-block}.h-10{height:2.5rem}.h-100px{height:100px}.h-10px{height:10px}.h-200px{height:200px}.h-600px{height:600px}.h-60px{height:60px}.h-full{height:100%}.max-w-30\\%{max-width:30%}.max-w-384px{max-width:384px}.max-w-xs{max-width:20rem}.min-h-0{min-height:0}.min-w-200px{min-width:200px}.w-100px{width:100px}.w-150px{width:150px}.w-200px{width:200px}.w-300px{width:300px}.w-30px{width:30px}.w-360px{width:360px}.w-384px{width:384px}.w-42px{width:42px}.w-600px{width:600px}.w-90px{width:90px}.w-full{width:100%}.flex{display:flex}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.flex-col{flex-direction:column}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.cursor-pointer{cursor:pointer}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-10px{gap:10px}.gap-12px{gap:12px}.gap-15px{gap:15px}.gap-16px{gap:16px}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-30px{gap:30px}.gap-3px{gap:3px}.gap-6px{gap:6px}.gap-9px{gap:9px}.overflow-hidden{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.border-12px{border-width:12px}.border-2px{border-width:2px}.border-3px{border-width:3px}.border-black{--un-border-opacity:1;border-color:rgb(0 0 0 / var(--un-border-opacity))}.rounded{border-radius:.25rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.border-dotted{border-style:dotted}.border-solid{border-style:solid}.bg-\\[\\#fc80a1\\]{--un-bg-opacity:1;background-color:rgb(252 128 161 / var(--un-bg-opacity))}.bg-\\[\\#fc80a1\\]\\!{--un-bg-opacity:1 !important;background-color:rgb(252 128 161 / var(--un-bg-opacity))!important}.bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.bg-blue{--un-bg-opacity:1;background-color:rgb(96 165 250 / var(--un-bg-opacity))}.bg-gray-100{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity))}.bg-gray-100\\/50{background-color:#f3f4f680}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-white\\/30{background-color:#ffffff4d}.bg-white\\/50{background-color:#ffffff80}.hover\\:bg-gray-100:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity))}.hover\\:bg-gray-300:hover{--un-bg-opacity:1;background-color:rgb(209 213 219 / var(--un-bg-opacity))}.hover\\:bg-white:hover{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.p-10px{padding:10px}.p-12px{padding:12px}.p-15px{padding:15px}.p-16px{padding:16px}.p-20px{padding:20px}.p-2px{padding:2px}.p-30px{padding:30px}.p-6px{padding:6px}.px{padding-left:1rem;padding-right:1rem}.px-10px{padding-left:10px;padding-right:10px}.px-16px{padding-left:16px;padding-right:16px}.px-18px{padding-left:18px;padding-right:18px}.px-20px{padding-left:20px;padding-right:20px}.px-30px{padding-left:30px;padding-right:30px}.py-16px{padding-top:16px;padding-bottom:16px}.pr-30px{padding-right:30px}.pt-10px{padding-top:10px}.pt-15px{padding-top:15px}.text-center{text-align:center}.text-12px{font-size:12px}.text-14px{font-size:14px}.text-18px{font-size:18px}.text-24px{font-size:24px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-30px{font-size:30px}.text-60px{font-size:60px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-\\[\\#fc80a1\\]{--un-text-opacity:1;color:rgb(252 128 161 / var(--un-text-opacity))}.text-blue{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity))}.text-gray,.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-blue:hover{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity))}.font-bold{font-weight:700}.text-shadow{--un-text-shadow:0 0 1px var(--un-text-shadow-color, rgb(0 0 0 / .2)),0 0 1px var(--un-text-shadow-color, rgb(1 0 5 / .1));text-shadow:var(--un-text-shadow)}.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.hover\\:shadow:hover{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.filter{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:root{--toastify-color-light:#fff;--toastify-color-dark:#121212;--toastify-color-info:#3498db;--toastify-color-success:#07bc0c;--toastify-color-warning:#f1c40f;--toastify-color-error:#e74c3c;--toastify-color-transparent:hsla(0,0%,100%,.7);--toastify-icon-color-info:var(--toastify-color-info);--toastify-icon-color-success:var(--toastify-color-success);--toastify-icon-color-warning:var(--toastify-color-warning);--toastify-icon-color-error:var(--toastify-color-error);--toastify-toast-width:320px;--toastify-toast-background:#fff;--toastify-toast-min-height:64px;--toastify-toast-max-height:800px;--toastify-font-family:sans-serif;--toastify-z-index:9999;--toastify-text-color-light:#757575;--toastify-text-color-dark:#fff;--toastify-text-color-info:#fff;--toastify-text-color-success:#fff;--toastify-text-color-warning:#fff;--toastify-text-color-error:#fff;--toastify-spinner-color:#616161;--toastify-spinner-color-empty-area:#e0e0e0;--toastify-color-progress-light:linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);--toastify-color-progress-dark:#bb86fc;--toastify-color-progress-info:var(--toastify-color-info);--toastify-color-progress-success:var(--toastify-color-success);--toastify-color-progress-warning:var(--toastify-color-warning);--toastify-color-progress-error:var(--toastify-color-error);--toastify-color-progress-colored:#ddd}.Toastify__toast-container{box-sizing:border-box;color:#fff;padding:4px;position:fixed;transform:translate3d(0,0,var(--toastify-z-index) px);width:var(--toastify-toast-width);z-index:var(--toastify-z-index)}.Toastify__toast-container--top-left{left:1em;top:1em}.Toastify__toast-container--top-center{left:50%;top:1em;transform:translate(-50%)}.Toastify__toast-container--top-right{right:1em;top:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translate(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width:480px){.Toastify__toast-container{left:0;margin:0;padding:0;width:100vw}.Toastify__toast-container--top-center,.Toastify__toast-container--top-left,.Toastify__toast-container--top-right{top:0;transform:translate(0)}.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-right{bottom:0;transform:translate(0)}.Toastify__toast-container--rtl{left:auto;right:0}}.Toastify__toast{border-radius:4px;box-shadow:0 1px 10px #0000001a,0 2px 15px #0000000d;box-sizing:border-box;cursor:pointer;direction:ltr;display:flex;font-family:var(--toastify-font-family);justify-content:space-between;margin-bottom:1rem;max-height:var(--toastify-toast-max-height);min-height:var(--toastify-toast-min-height);overflow:hidden;padding:8px;position:relative;z-index:0}.Toastify__toast--rtl{direction:rtl}.Toastify__toast-body{align-items:center;display:flex;flex:1 1 auto;margin:auto 0;padding:6px;white-space:pre-wrap}.Toastify__toast-body>div:last-child{flex:1}.Toastify__toast-icon{display:flex;flex-shrink:0;margin-inline-end:10px;width:20px}.Toastify--animate{animation-duration:.7s;animation-fill-mode:both}.Toastify--animate-icon{animation-duration:.3s;animation-fill-mode:both}@media only screen and (max-width:480px){.Toastify__toast{border-radius:0;margin-bottom:0}}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--colored.Toastify__toast--default,.Toastify__toast-theme--light{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{background:var(--toastify-color-info);color:var(--toastify-text-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{background:var(--toastify-color-success);color:var(--toastify-text-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{background:var(--toastify-color-warning);color:var(--toastify-text-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{background:var(--toastify-color-error);color:var(--toastify-text-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--default{background:var(--toastify-color-progress-colored)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning{background:var(--toastify-color-transparent)}.Toastify__close-button{align-self:flex-start;background:transparent;border:none;color:#fff;cursor:pointer;opacity:.7;outline:none;padding:0;transition:.3s ease}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentcolor;height:16px;width:14px}.Toastify__close-button:focus,.Toastify__close-button:hover{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{bottom:0;height:5px;left:0;opacity:.7;position:absolute;transform-origin:left;width:100%;z-index:var(--toastify-z-index)}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{left:auto;right:0;transform-origin:right}.Toastify__spinner{animation:Toastify__spin .65s linear infinite;border:2px solid;border-color:var(--toastify-spinner-color-empty-area);border-radius:100%;border-right-color:var(--toastify-spinner-color);box-sizing:border-box;height:20px;width:20px}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--bottom-left,.Toastify__bounce-enter--top-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--bottom-right,.Toastify__bounce-enter--top-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--bottom-left,.Toastify__bounce-exit--top-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--bottom-right,.Toastify__bounce-exit--top-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__none{0%,60%,75%,90%,to{animation-duration:0;animation-timing-function:none}0%{opacity:1;transform:translateZ(0)}to{transform:translateZ(0)}}.Toastify__none-enter--bottom-center,.Toastify__none-enter--bottom-left,.Toastify__none-enter--bottom-right,.Toastify__none-enter--top-center,.Toastify__none-enter--top-left,.Toastify__none-enter--top-right{animation-name:Toastify__none}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{animation-timing-function:ease-in;opacity:0;transform:perspective(400px) rotateX(90deg)}40%{animation-timing-function:ease-in;transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;transform:perspective(400px) rotateX(10deg)}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateX(-20deg)}to{opacity:0;transform:perspective(400px) rotateX(90deg)}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideOutRight{0%{transform:translateZ(0)}to{transform:translate3d(110%,0,0);visibility:hidden}}@keyframes Toastify__slideOutLeft{0%{transform:translateZ(0)}to{transform:translate3d(-110%,0,0);visibility:hidden}}@keyframes Toastify__slideOutDown{0%{transform:translateZ(0)}to{transform:translate3d(0,500px,0);visibility:hidden}}@keyframes Toastify__slideOutUp{0%{transform:translateZ(0)}to{transform:translate3d(0,-500px,0);visibility:hidden}}.Toastify__slide-enter--bottom-left,.Toastify__slide-enter--top-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--bottom-right,.Toastify__slide-enter--top-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--bottom-left,.Toastify__slide-exit--top-left{animation-name:Toastify__slideOutLeft}.Toastify__slide-exit--bottom-right,.Toastify__slide-exit--top-right{animation-name:Toastify__slideOutRight}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}} `);

(function (vue, localforage, dayjs, axios) {
  'use strict';

  const k = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center"
  }, M = {
    LIGHT: "light",
    DARK: "dark",
    COLORED: "colored",
    AUTO: "auto"
  }, g = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default"
  }, Ie = {
    BOUNCE: "bounce",
    SLIDE: "slide",
    FLIP: "flip",
    ZOOM: "zoom",
    NONE: "none"
  }, fe = {
    dangerouslyHTMLString: false,
    multiple: true,
    position: k.TOP_RIGHT,
    autoClose: 5e3,
    transition: "bounce",
    hideProgressBar: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    closeOnClick: true,
    className: "",
    bodyClassName: "",
    style: {},
    progressClassName: "",
    progressStyle: {},
    role: "alert",
    theme: "light"
  }, pe = {
    rtl: false,
    newestOnTop: false,
    toastClassName: ""
  }, me = {
    ...fe,
    ...pe
  };
  ({
    ...fe,
    type: g.DEFAULT
  });
  var r = /* @__PURE__ */ ((e) => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(r || {}), J = /* @__PURE__ */ ((e) => (e.ENTRANCE_ANIMATION_END = "d", e))(J || {});
  const he = {
    enter: "Toastify--animate Toastify__bounce-enter",
    exit: "Toastify--animate Toastify__bounce-exit",
    appendPosition: true
  }, Oe = {
    enter: "Toastify--animate Toastify__slide-enter",
    exit: "Toastify--animate Toastify__slide-exit",
    appendPosition: true
  }, be = {
    enter: "Toastify--animate Toastify__zoom-enter",
    exit: "Toastify--animate Toastify__zoom-exit"
  }, Pe = {
    enter: "Toastify--animate Toastify__flip-enter",
    exit: "Toastify--animate Toastify__flip-exit"
  }, re = "Toastify--animate Toastify__none-enter";
  function ge(e, t = false) {
    var a;
    let n = he;
    if (!e || typeof e == "string")
      switch (e) {
        case "flip":
          n = Pe;
          break;
        case "zoom":
          n = be;
          break;
        case "slide":
          n = Oe;
          break;
      }
    else
      n = e;
    if (t)
      n.enter = re;
    else if (n.enter === re) {
      const o = (a = n.exit.split("__")[1]) == null ? void 0 : a.split("-")[0];
      n.enter = "Toastify--animate Toastify__".concat(o, "-enter");
    }
    return n;
  }
  function Le(e) {
    return e.containerId || String(e.position);
  }
  const K = "will-unmount";
  function $e(e = k.TOP_RIGHT) {
    return !!document.querySelector(".".concat(r.CSS_NAMESPACE, "__toast-container--").concat(e));
  }
  function Be(e = k.TOP_RIGHT) {
    return "".concat(r.CSS_NAMESPACE, "__toast-container--").concat(e);
  }
  function qe(e, t, n = false) {
    const a = [
      "".concat(r.CSS_NAMESPACE, "__toast-container"),
      "".concat(r.CSS_NAMESPACE, "__toast-container--").concat(e),
      n ? "".concat(r.CSS_NAMESPACE, "__toast-container--rtl") : null
    ].filter(Boolean).join(" ");
    return q(t) ? t({
      position: e,
      rtl: n,
      defaultClassName: a
    }) : "".concat(a, " ").concat(t || "");
  }
  function Me(e) {
    var E;
    const { position: t, containerClassName: n, rtl: a = false, style: o = {} } = e, s = r.CSS_NAMESPACE, d = Be(t), T = document.querySelector(".".concat(s)), u = document.querySelector(".".concat(d)), N = !!u && !((E = u.className) != null && E.includes(K)), m = T || document.createElement("div"), S = document.createElement("div");
    S.className = qe(
      t,
      n,
      a
    ), S.dataset.testid = "".concat(r.CSS_NAMESPACE, "__toast-container--").concat(t), S.id = Le(e);
    for (const v in o)
      if (Object.prototype.hasOwnProperty.call(o, v)) {
        const I = o[v];
        S.style[v] = I;
      }
    return T || (m.className = r.CSS_NAMESPACE, document.body.appendChild(m)), N || m.appendChild(S), S;
  }
  function ee(e) {
    var a, o, s;
    const t = typeof e == "string" ? e : ((a = e.currentTarget) == null ? void 0 : a.id) || ((o = e.target) == null ? void 0 : o.id), n = document.getElementById(t);
    n && n.removeEventListener("animationend", ee, false);
    try {
      D[t].unmount(), (s = document.getElementById(t)) == null || s.remove(), delete D[t], delete c[t];
    } catch {
    }
  }
  const D = vue.reactive({});
  function we(e, t) {
    const n = document.getElementById(String(t));
    n && (D[n.id] = e);
  }
  function te(e, t = true) {
    const n = String(e);
    if (!D[n])
      return;
    const a = document.getElementById(n);
    a && a.classList.add(K), t ? (Re(e), a && a.addEventListener("animationend", ee, false)) : ee(n), _.items = _.items.filter((o) => o.containerId !== e);
  }
  function Fe(e) {
    for (const t in D)
      te(t, e);
    _.items = [];
  }
  function Ce(e, t) {
    const n = document.getElementById(e.toastId);
    if (n) {
      let a = e;
      a = {
        ...a,
        ...ge(a.transition)
      };
      const o = a.appendPosition ? "".concat(a.exit, "--").concat(a.position) : a.exit;
      n.className += " ".concat(o), t && t(n);
    }
  }
  function Re(e) {
    for (const t in c)
      if (t === e)
        for (const n of c[t] || [])
          Ce(n);
  }
  function Ue(e) {
    const n = w().find((a) => a.toastId === e);
    return n == null ? void 0 : n.containerId;
  }
  function se(e) {
    return document.getElementById(e);
  }
  function xe(e) {
    const t = se(e.containerId);
    return t && t.classList.contains(K);
  }
  function ie(e) {
    var n;
    const t = vue.isVNode(e.content) ? vue.toRaw(e.content.props) : null;
    return t != null ? t : vue.toRaw((n = e.data) != null ? n : {});
  }
  function De(e) {
    return e ? _.items.filter((n) => n.containerId === e).length > 0 : _.items.length > 0;
  }
  function ke() {
    if (_.items.length > 0) {
      const e = _.items.shift();
      j(e == null ? void 0 : e.toastContent, e == null ? void 0 : e.toastProps);
    }
  }
  const c = vue.reactive({}), _ = vue.reactive({
    items: []
  });
  function w() {
    const e = vue.toRaw(c);
    return Object.values(e).reduce((t, n) => [...t, ...n], []);
  }
  function He(e) {
    return w().find((n) => n.toastId === e);
  }
  function j(e, t = {}) {
    if (xe(t)) {
      const n = se(t.containerId);
      n && n.addEventListener("animationend", ne.bind(null, e, t), false);
    } else
      ne(e, t);
  }
  function ne(e, t = {}) {
    const n = se(t.containerId);
    n && n.removeEventListener("animationend", ne.bind(null, e, t), false);
    const a = c[t.containerId] || [], o = a.length > 0;
    if (!o && !$e(t.position)) {
      const s = Me(t), d = vue.createApp(it, t);
      d.mount(s), we(d, s.id);
    }
    o && !t.updateId && (t.position = a[0].position), vue.nextTick(() => {
      t.updateId ? C.update(t) : C.add(e, t);
    });
  }
  const C = {
    /**
     * add a toast
     * @param _ ..
     * @param opts toast props
     */
    add(e, t) {
      const { containerId: n = "" } = t;
      n && (c[n] = c[n] || [], c[n].find((a) => a.toastId === t.toastId) || setTimeout(() => {
        var a, o;
        t.newestOnTop ? (a = c[n]) == null || a.unshift(t) : (o = c[n]) == null || o.push(t), t.onOpen && t.onOpen(ie(t));
      }, t.delay || 0));
    },
    /**
     * remove a toast
     * @param id toastId
     */
    remove(e) {
      if (e) {
        const t = Ue(e);
        if (t) {
          const n = c[t];
          let a = n.find((o) => o.toastId === e);
          c[t] = n.filter((o) => o.toastId !== e), !c[t].length && !De(t) && te(t, false), ke(), vue.nextTick(() => {
            a != null && a.onClose && (a.onClose(ie(a)), a = void 0);
          });
        }
      }
    },
    /**
     * update the toast
     * @param opts toast props
     */
    update(e = {}) {
      const { containerId: t = "" } = e;
      if (t && e.updateId) {
        c[t] = c[t] || [];
        const n = c[t].find((s) => s.toastId === e.toastId), a = (n == null ? void 0 : n.position) !== e.position || (n == null ? void 0 : n.transition) !== e.transition, o = { ...e, disabledEnterTransition: !a, updateId: void 0 };
        C.dismissForce(e == null ? void 0 : e.toastId), setTimeout(() => {
          i(o.content, o);
        }, e.delay || 0);
      }
    },
    /**
     * clear all toasts in container.
     * @param containerId container id
     */
    clear(e, t = true) {
      e ? te(e, t) : Fe(t);
    },
    dismissCallback(e) {
      var a;
      const t = (a = e.currentTarget) == null ? void 0 : a.id, n = document.getElementById(t);
      n && (n.removeEventListener("animationend", C.dismissCallback, false), setTimeout(() => {
        C.remove(t);
      }));
    },
    dismiss(e) {
      if (e) {
        const t = w();
        for (const n of t)
          if (n.toastId === e) {
            Ce(n, (a) => {
              a.addEventListener("animationend", C.dismissCallback, false);
            });
            break;
          }
      }
    },
    dismissForce(e) {
      if (e) {
        const t = w();
        for (const n of t)
          if (n.toastId === e) {
            const a = document.getElementById(e);
            a && (a.remove(), a.removeEventListener("animationend", C.dismissCallback, false), C.remove(e));
            break;
          }
      }
    }
  }, Ee = vue.reactive({}), Q = vue.reactive({});
  function ye() {
    return Math.random().toString(36).substring(2, 9);
  }
  function ze(e) {
    return typeof e == "number" && !isNaN(e);
  }
  function ae(e) {
    return typeof e == "string";
  }
  function q(e) {
    return typeof e == "function";
  }
  function Y(...e) {
    return vue.mergeProps(...e);
  }
  function G(e) {
    return typeof e == "object" && (!!(e != null && e.render) || !!(e != null && e.setup) || typeof (e == null ? void 0 : e.type) == "object");
  }
  function je(e = {}) {
    Ee["".concat(r.CSS_NAMESPACE, "-default-options")] = e;
  }
  function Ge() {
    return Ee["".concat(r.CSS_NAMESPACE, "-default-options")] || me;
  }
  function Ve() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
  var V = /* @__PURE__ */ ((e) => (e[e.Enter = 0] = "Enter", e[e.Exit = 1] = "Exit", e))(V || {});
  const Te = {
    containerId: {
      type: [String, Number],
      required: false,
      default: ""
    },
    clearOnUrlChange: {
      type: Boolean,
      required: false,
      default: true
    },
    disabledEnterTransition: {
      type: Boolean,
      required: false,
      default: false
    },
    dangerouslyHTMLString: {
      type: Boolean,
      required: false,
      default: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: true
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    position: {
      type: String,
      required: false,
      default: k.TOP_LEFT
    },
    bodyClassName: {
      type: String,
      required: false,
      default: ""
    },
    autoClose: {
      type: [Number, Boolean],
      required: false,
      default: false
    },
    closeButton: {
      type: [Boolean, Function, Object],
      required: false,
      default: void 0
    },
    transition: {
      type: [String, Object],
      required: false,
      default: "bounce"
    },
    hideProgressBar: {
      type: Boolean,
      required: false,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      required: false,
      default: true
    },
    pauseOnFocusLoss: {
      type: Boolean,
      required: false,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      required: false,
      default: true
    },
    progress: {
      type: Number,
      required: false,
      default: void 0
    },
    progressClassName: {
      type: String,
      required: false,
      default: ""
    },
    toastStyle: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
    progressStyle: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
    role: {
      type: String,
      required: false,
      default: "alert"
    },
    theme: {
      type: String,
      required: false,
      default: M.AUTO
    },
    content: {
      type: [String, Object, Function],
      required: false,
      default: ""
    },
    toastId: {
      type: [String, Number],
      required: false,
      default: ""
    },
    data: {
      type: [Object, String],
      required: false,
      default() {
        return {};
      }
    },
    type: {
      type: String,
      required: false,
      default: g.DEFAULT
    },
    icon: {
      type: [Boolean, String, Number, Object, Function],
      required: false,
      default: void 0
    },
    delay: {
      type: Number,
      required: false,
      default: void 0
    },
    onOpen: {
      type: Function,
      required: false,
      default: void 0
    },
    onClose: {
      type: Function,
      required: false,
      default: void 0
    },
    onClick: {
      type: Function,
      required: false,
      default: void 0
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: void 0
    },
    rtl: {
      type: Boolean,
      required: false,
      default: false
    },
    toastClassName: {
      type: String,
      required: false,
      default: ""
    },
    updateId: {
      type: [String, Number],
      required: false,
      default: ""
    }
  }, Qe = {
    autoClose: {
      type: [Number, Boolean],
      required: true
    },
    isRunning: {
      type: Boolean,
      required: false,
      default: void 0
    },
    type: {
      type: String,
      required: false,
      default: g.DEFAULT
    },
    theme: {
      type: String,
      required: false,
      default: M.AUTO
    },
    hide: {
      type: Boolean,
      required: false,
      default: void 0
    },
    className: {
      type: [String, Function],
      required: false,
      default: ""
    },
    controlledProgress: {
      type: Boolean,
      required: false,
      default: void 0
    },
    rtl: {
      type: Boolean,
      required: false,
      default: void 0
    },
    isIn: {
      type: Boolean,
      required: false,
      default: void 0
    },
    progress: {
      type: Number,
      required: false,
      default: void 0
    },
    closeToast: {
      type: Function,
      required: false,
      default: void 0
    }
  }, We = /* @__PURE__ */ vue.defineComponent({
    name: "ProgressBar",
    props: Qe,
    // @ts-ignore
    setup(e, {
      attrs: t
    }) {
      const n = vue.ref(), a = vue.computed(() => e.hide ? "true" : "false"), o = vue.computed(() => ({
        ...t.style || {},
        animationDuration: "".concat(e.autoClose === true ? 5e3 : e.autoClose, "ms"),
        animationPlayState: e.isRunning ? "running" : "paused",
        opacity: e.hide || e.autoClose === false ? 0 : 1,
        transform: e.controlledProgress ? "scaleX(".concat(e.progress, ")") : "none"
      })), s = vue.computed(() => ["".concat(r.CSS_NAMESPACE, "__progress-bar"), e.controlledProgress ? "".concat(r.CSS_NAMESPACE, "__progress-bar--controlled") : "".concat(r.CSS_NAMESPACE, "__progress-bar--animated"), "".concat(r.CSS_NAMESPACE, "__progress-bar-theme--").concat(e.theme), "".concat(r.CSS_NAMESPACE, "__progress-bar--").concat(e.type), e.rtl ? "".concat(r.CSS_NAMESPACE, "__progress-bar--rtl") : null].filter(Boolean).join(" ")), d = vue.computed(() => "".concat(s.value, " ").concat((t == null ? void 0 : t.class) || "")), T = () => {
        n.value && (n.value.onanimationend = null, n.value.ontransitionend = null);
      }, u = () => {
        e.isIn && e.closeToast && e.autoClose !== false && (e.closeToast(), T());
      }, N = vue.computed(() => e.controlledProgress ? null : u), m = vue.computed(() => e.controlledProgress ? u : null);
      return vue.watchEffect(() => {
        n.value && (T(), n.value.onanimationend = N.value, n.value.ontransitionend = m.value);
      }), () => vue.createVNode("div", {
        ref: n,
        role: "progressbar",
        "aria-hidden": a.value,
        "aria-label": "notification timer",
        class: d.value,
        style: o.value
      }, null);
    }
  }), Ke = /* @__PURE__ */ vue.defineComponent({
    name: "CloseButton",
    inheritAttrs: false,
    props: {
      theme: {
        type: String,
        required: false,
        default: M.AUTO
      },
      type: {
        type: String,
        required: false,
        default: M.LIGHT
      },
      ariaLabel: {
        type: String,
        required: false,
        default: "close"
      },
      closeToast: {
        type: Function,
        required: false,
        default: void 0
      }
    },
    setup(e) {
      return () => vue.createVNode("button", {
        class: "".concat(r.CSS_NAMESPACE, "__close-button ").concat(r.CSS_NAMESPACE, "__close-button--").concat(e.theme),
        type: "button",
        onClick: (t) => {
          t.stopPropagation(), e.closeToast && e.closeToast(t);
        },
        "aria-label": e.ariaLabel
      }, [vue.createVNode("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
      }, [vue.createVNode("path", {
        "fill-rule": "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
      }, null)])]);
    }
  }), Z = ({
    theme: e,
    type: t,
    path: n,
    ...a
  }) => vue.createVNode("svg", vue.mergeProps({
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: e === "colored" ? "currentColor" : "var(--toastify-icon-color-".concat(t, ")")
  }, a), [vue.createVNode("path", {
    d: n
  }, null)]);
  function Ye(e) {
    return vue.createVNode(Z, vue.mergeProps(e, {
      path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }), null);
  }
  function Ze(e) {
    return vue.createVNode(Z, vue.mergeProps(e, {
      path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }), null);
  }
  function Xe(e) {
    return vue.createVNode(Z, vue.mergeProps(e, {
      path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }), null);
  }
  function Je(e) {
    return vue.createVNode(Z, vue.mergeProps(e, {
      path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }), null);
  }
  function et() {
    return vue.createVNode("div", {
      class: "".concat(r.CSS_NAMESPACE, "__spinner")
    }, null);
  }
  const oe = {
    info: Ze,
    warning: Ye,
    success: Xe,
    error: Je,
    spinner: et
  }, tt = (e) => e in oe;
  function nt({
    theme: e,
    type: t,
    isLoading: n,
    icon: a
  }) {
    let o;
    const s = {
      theme: e,
      type: t
    };
    return n ? o = oe.spinner() : a === false ? o = void 0 : G(a) ? o = vue.toRaw(a) : q(a) ? o = a(s) : vue.isVNode(a) ? o = vue.cloneVNode(a, s) : ae(a) || ze(a) ? o = a : tt(t) && (o = oe[t](s)), o;
  }
  const at = () => {
  };
  function ot(e, t, n = r.COLLAPSE_DURATION) {
    const { scrollHeight: a, style: o } = e, s = n;
    requestAnimationFrame(() => {
      o.minHeight = "initial", o.height = a + "px", o.transition = "all ".concat(s, "ms"), requestAnimationFrame(() => {
        o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, s);
      });
    });
  }
  function st(e) {
    const t = vue.ref(false), n = vue.ref(false), a = vue.ref(false), o = vue.ref(V.Enter), s = vue.reactive({
      ...e,
      appendPosition: e.appendPosition || false,
      collapse: typeof e.collapse > "u" ? true : e.collapse,
      collapseDuration: e.collapseDuration || r.COLLAPSE_DURATION
    }), d = s.done || at, T = vue.computed(() => s.appendPosition ? "".concat(s.enter, "--").concat(s.position) : s.enter), u = vue.computed(() => s.appendPosition ? "".concat(s.exit, "--").concat(s.position) : s.exit), N = vue.computed(() => e.pauseOnHover ? {
      onMouseenter: h2,
      onMouseleave: p
    } : {});
    function m() {
      const y = T.value.split(" ");
      E().addEventListener(
        J.ENTRANCE_ANIMATION_END,
        p,
        { once: true }
      );
      const O = ($) => {
        const U = E();
        $.target === U && (U.dispatchEvent(new Event(J.ENTRANCE_ANIMATION_END)), U.removeEventListener("animationend", O), U.removeEventListener("animationcancel", O), o.value === V.Enter && $.type !== "animationcancel" && U.classList.remove(...y));
      }, b = () => {
        const $ = E();
        $.classList.add(...y), $.addEventListener("animationend", O), $.addEventListener("animationcancel", O);
      };
      e.pauseOnFocusLoss && v(), b();
    }
    function S() {
      if (!E())
        return;
      const y = () => {
        const b = E();
        b.removeEventListener("animationend", y), s.collapse ? ot(b, d, s.collapseDuration) : d();
      }, O = () => {
        const b = E();
        o.value = V.Exit, b && (b.className += " ".concat(u.value), b.addEventListener("animationend", y));
      };
      n.value || (a.value ? y() : setTimeout(O));
    }
    function E() {
      return e.toastRef.value;
    }
    function v() {
      document.hasFocus() || h2(), window.addEventListener("focus", p), window.addEventListener("blur", h2);
    }
    function I() {
      window.removeEventListener("focus", p), window.removeEventListener("blur", h2);
    }
    function p() {
      (!e.loading.value || e.isLoading === void 0) && (t.value = true);
    }
    function h2() {
      t.value = false;
    }
    function R(y) {
      y && (y.stopPropagation(), y.preventDefault()), n.value = false;
    }
    return vue.watchEffect(S), vue.watchEffect(() => {
      const y = w();
      n.value = y.findIndex((O) => O.toastId === s.toastId) > -1;
    }), vue.watchEffect(() => {
      e.isLoading !== void 0 && (e.loading.value ? h2() : p());
    }), vue.onMounted(m), vue.onUnmounted(() => {
      e.pauseOnFocusLoss && I();
    }), {
      isIn: n,
      isRunning: t,
      hideToast: R,
      eventHandlers: N
    };
  }
  const rt = /* @__PURE__ */ vue.defineComponent({
    name: "ToastItem",
    inheritAttrs: false,
    props: Te,
    // @ts-ignore
    setup(e) {
      const t = vue.ref(), n = vue.computed(() => !!e.isLoading), a = vue.computed(() => e.progress !== void 0 && e.progress !== null), o = vue.computed(() => nt(e)), s = vue.computed(() => ["".concat(r.CSS_NAMESPACE, "__toast"), "".concat(r.CSS_NAMESPACE, "__toast-theme--").concat(e.theme), "".concat(r.CSS_NAMESPACE, "__toast--").concat(e.type), e.rtl ? "".concat(r.CSS_NAMESPACE, "__toast--rtl") : void 0, e.toastClassName || ""].filter(Boolean).join(" ")), {
        isRunning: d,
        isIn: T,
        hideToast: u,
        eventHandlers: N
      } = st({
        toastRef: t,
        loading: n,
        done: () => {
          C.remove(e.toastId);
        },
        ...ge(e.transition, e.disabledEnterTransition),
        ...e
      });
      return () => vue.createVNode("div", vue.mergeProps({
        id: e.toastId,
        class: s.value,
        style: e.toastStyle || {},
        ref: t,
        "data-testid": "toast-item-".concat(e.toastId),
        onClick: (m) => {
          e.closeOnClick && u(), e.onClick && e.onClick(m);
        }
      }, N.value), [vue.createVNode("div", {
        role: e.role,
        "data-testid": "toast-body",
        class: "".concat(r.CSS_NAMESPACE, "__toast-body ").concat(e.bodyClassName || "")
      }, [o.value != null && vue.createVNode("div", {
        "data-testid": "toast-icon-".concat(e.type),
        class: ["".concat(r.CSS_NAMESPACE, "__toast-icon"), e.isLoading ? "" : "".concat(r.CSS_NAMESPACE, "--animate-icon ").concat(r.CSS_NAMESPACE, "__zoom-enter")].join(" ")
      }, [G(o.value) ? vue.h(vue.toRaw(o.value), {
        theme: e.theme,
        type: e.type
      }) : q(o.value) ? o.value({
        theme: e.theme,
        type: e.type
      }) : o.value]), vue.createVNode("div", {
        "data-testid": "toast-content"
      }, [G(e.content) ? vue.h(vue.toRaw(e.content), {
        toastProps: vue.toRaw(e),
        closeToast: u,
        data: e.data
      }) : q(e.content) ? e.content({
        toastProps: vue.toRaw(e),
        closeToast: u,
        data: e.data
      }) : e.dangerouslyHTMLString ? vue.h("div", {
        innerHTML: e.content
      }) : e.content])]), (e.closeButton === void 0 || e.closeButton === true) && vue.createVNode(Ke, {
        theme: e.theme,
        closeToast: (m) => {
          m.stopPropagation(), m.preventDefault(), u();
        }
      }, null), G(e.closeButton) ? vue.h(vue.toRaw(e.closeButton), {
        closeToast: u,
        type: e.type,
        theme: e.theme
      }) : q(e.closeButton) ? e.closeButton({
        closeToast: u,
        type: e.type,
        theme: e.theme
      }) : null, vue.createVNode(We, {
        className: e.progressClassName,
        style: e.progressStyle,
        rtl: e.rtl,
        theme: e.theme,
        isIn: T.value,
        type: e.type,
        hide: e.hideProgressBar,
        isRunning: d.value,
        autoClose: e.autoClose,
        controlledProgress: a.value,
        progress: e.progress,
        closeToast: e.isLoading ? void 0 : u
      }, null)]);
    }
  });
  let x = 0;
  function Se() {
    typeof window > "u" || (x && window.cancelAnimationFrame(x), x = window.requestAnimationFrame(Se), Q.lastUrl !== window.location.href && (Q.lastUrl = window.location.href, C.clear()));
  }
  const it = /* @__PURE__ */ vue.defineComponent({
    name: "ToastifyContainer",
    inheritAttrs: false,
    props: Te,
    // @ts-ignore
    setup(e) {
      const t = vue.computed(() => e.containerId), n = vue.computed(() => c[t.value] || []), a = vue.computed(() => n.value.filter((o) => o.position === e.position));
      return vue.onMounted(() => {
        typeof window < "u" && e.clearOnUrlChange && window.requestAnimationFrame(Se);
      }), vue.onUnmounted(() => {
        typeof window < "u" && x && (window.cancelAnimationFrame(x), Q.lastUrl = "");
      }), () => vue.createVNode(vue.Fragment, null, [a.value.map((o) => {
        const {
          toastId: s = ""
        } = o;
        return vue.createVNode(rt, vue.mergeProps({
          key: s
        }, o), null);
      })]);
    }
  });
  let X = false;
  function ve() {
    const e = [];
    return w().forEach((n) => {
      const a = document.getElementById(n.containerId);
      a && !a.classList.contains(K) && e.push(n);
    }), e;
  }
  function lt(e) {
    const t = ve().length, n = e != null ? e : 0;
    return n > 0 && t + _.items.length >= n;
  }
  function dt(e) {
    lt(e.limit) && !e.updateId && _.items.push({
      toastId: e.toastId,
      containerId: e.containerId,
      toastContent: e.content,
      toastProps: e
    });
  }
  function L(e, t, n = {}) {
    if (X)
      return;
    n = Y(Ge(), {
      type: t
    }, vue.toRaw(n)), (!n.toastId || typeof n.toastId != "string" && typeof n.toastId != "number") && (n.toastId = ye()), n = {
      ...n,
      content: e,
      containerId: n.containerId || String(n.position)
    };
    const a = Number(n == null ? void 0 : n.progress);
    return a < 0 && (n.progress = 0), a > 1 && (n.progress = 1), n.theme === "auto" && (n.theme = Ve()), dt(n), Q.lastUrl = window.location.href, n.multiple ? _.items.length ? n.updateId && j(e, n) : j(e, n) : (X = true, i.clearAll(void 0, false), setTimeout(() => {
      j(e, n);
    }, 0), setTimeout(() => {
      X = false;
    }, 390)), n.toastId;
  }
  const i = (e, t) => L(e, g.DEFAULT, t);
  i.info = (e, t) => L(e, g.DEFAULT, {
    ...t,
    type: g.INFO
  });
  i.error = (e, t) => L(e, g.DEFAULT, {
    ...t,
    type: g.ERROR
  });
  i.warning = (e, t) => L(e, g.DEFAULT, {
    ...t,
    type: g.WARNING
  });
  i.warn = i.warning;
  i.success = (e, t) => L(e, g.DEFAULT, {
    ...t,
    type: g.SUCCESS
  });
  i.loading = (e, t) => L(e, g.DEFAULT, Y(t, {
    isLoading: true,
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    draggable: false
  }));
  i.dark = (e, t) => L(e, g.DEFAULT, Y(t, {
    theme: M.DARK
  }));
  i.remove = (e) => {
    e ? C.dismiss(e) : C.clear();
  };
  i.clearAll = (e, t) => {
    C.clear(e, t);
  };
  i.isActive = (e) => {
    let t = false;
    return t = ve().findIndex((a) => a.toastId === e) > -1, t;
  };
  i.update = (e, t = {}) => {
    setTimeout(() => {
      const n = He(e);
      if (n) {
        const a = vue.toRaw(n), {
          content: o
        } = a, s = {
          ...a,
          ...t,
          toastId: t.toastId || e,
          updateId: ye()
        }, d = s.render || o;
        delete s.render, L(d, s.type, s);
      }
    }, 0);
  };
  i.done = (e) => {
    i.update(e, {
      isLoading: false,
      progress: 1
    });
  };
  i.promise = ut;
  function ut(e, {
    pending: t,
    error: n,
    success: a
  }, o) {
    var m, S, E;
    let s;
    const d = {
      ...o || {},
      autoClose: false
    };
    t && (s = ae(t) ? i.loading(t, d) : i.loading(t.render, {
      ...d,
      ...t
    }));
    const T = {
      autoClose: (m = o == null ? void 0 : o.autoClose) != null ? m : true,
      closeOnClick: (S = o == null ? void 0 : o.closeOnClick) != null ? S : true,
      closeButton: (E = o == null ? void 0 : o.autoClose) != null ? E : null,
      isLoading: void 0,
      draggable: null,
      delay: 100
    }, u = (v, I, p) => {
      if (I == null) {
        i.remove(s);
        return;
      }
      const h2 = {
        type: v,
        ...T,
        ...o,
        data: p
      }, R = ae(I) ? {
        render: I
      } : I;
      return s ? i.update(s, {
        ...h2,
        ...R,
        isLoading: false
      }) : i(R.render, {
        ...h2,
        ...R,
        isLoading: false
      }), p;
    }, N = q(e) ? e() : e;
    return N.then((v) => {
      u("success", a, v);
    }).catch((v) => {
      u("error", n, v);
    }), N;
  }
  i.POSITION = k;
  i.THEME = M;
  i.TYPE = g;
  i.TRANSITIONS = Ie;
  const ct = {
    install(e, t = {}) {
      ft(t);
    }
  };
  typeof window < "u" && (window.Vue3Toastify = ct);
  function ft(e = {}) {
    const t = Y(me, e);
    je(t);
  }
  let nanoid$1 = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte > 62) {
      id += "-";
    } else {
      id += "_";
    }
    return id;
  }, "");
  const selectingCollectionId = vue.ref("");
  function selectCollection(collectionId) {
    selectingCollectionId.value = collectionId;
  }
  let musicCollectionLocalData = vue.reactive({
    defaultCollectionId: "",
    collectionInfos: [],
    collections: {},
    playMode: 0
  });
  vue.watch(musicCollectionLocalData, async (value) => {
    await localforage.setItem("bilibili-music-player", mapMusicCollectionInfoToLocalData(value));
  });
  function mapMusicCollectionInfoToLocalData(data) {
    const localData = {
      defaultCollectionId: "",
      collectionInfos: [],
      collections: {},
      playMode: 0
    };
    Object.assign(localData, {
      collectionInfos: data.collectionInfos.map((collectionInfo) => {
        const { name, id, createAt } = collectionInfo;
        return { name, id, createAt };
      }),
      collections: Object.entries(data.collections).reduce((pre, cur) => {
        const [key, musics] = cur;
        pre[key] = musics.map((music) => {
          const { bvid, title, start, end, createdAt, up, pic, p, id } = music;
          return {
            id,
            bvid,
            title,
            start,
            end,
            createdAt,
            up: {
              face: up.face,
              name: up.name,
              mid: up.mid
            },
            pic,
            p
          };
        });
        return pre;
      }, {}),
      playMode: data.playMode,
      defaultCollectionId: data.defaultCollectionId
    });
    return localData;
  }
  const collectionInfos = vue.toRef(musicCollectionLocalData, "collectionInfos");
  const collections = vue.toRef(musicCollectionLocalData, "collections");
  const playMode = vue.toRef(musicCollectionLocalData, "playMode");
  const defaultCollectionId = vue.toRef(musicCollectionLocalData, "defaultCollectionId");
  async function initLoacalData() {
    let localData = await localforage.getItem("bilibili-music-player");
    if (!localData) {
      const defaultCollectionId2 = nanoid$1();
      const newCollection = {
        name: "默认歌单",
        id: defaultCollectionId2,
        createAt: (/* @__PURE__ */ new Date()).getTime()
      };
      musicCollectionLocalData.defaultCollectionId = defaultCollectionId2;
      musicCollectionLocalData.collections[defaultCollectionId2] = [];
      musicCollectionLocalData.collectionInfos.push(newCollection);
      await localforage.setItem("bilibili-music-player", mapMusicCollectionInfoToLocalData(musicCollectionLocalData));
      localData = musicCollectionLocalData;
    }
    collectionInfos.value = localData.collectionInfos;
    collections.value = localData.collections;
    playMode.value = localData.playMode;
    defaultCollectionId.value = localData.defaultCollectionId;
    musicCollectionLocalData = localData;
    if (collectionInfos.value.length)
      selectCollection(collectionInfos.value[0].id);
  }
  const curShowCollectionMusics = vue.computed(() => {
    if (!selectingCollectionId.value)
      return [];
    if (!collections.value[selectingCollectionId.value])
      return [];
    return collections.value[selectingCollectionId.value];
  });
  const curCollectionInfo = vue.computed(() => {
    if (!selectingCollectionId.value)
      return null;
    return collectionInfos.value.find((item) => item.id === selectingCollectionId.value);
  });
  function selectCollectionById(collectionId) {
    const collection = collectionInfos.value.find((collectionInfo) => collectionInfo.id === collectionId);
    if (!collection) {
      i("未找到对应歌单，选择失败");
      return;
    }
    selectingCollectionId.value = collectionId;
  }
  const isShowExportDialog = vue.ref(false);
  const collectionList$1 = vue.ref([]);
  function openExportDialogHandle() {
    collectionList$1.value = collectionInfos.value.map((item) => {
      return {
        ...item,
        isChecked: false
      };
    });
    isShowExportDialog.value = true;
  }
  function confirmExportHandle() {
    const isCheckedCollection = collectionList$1.value.filter((item) => item.isChecked).length;
    if (!isCheckedCollection) {
      i("未选择导出的歌单，导出失败");
      return;
    }
    const data = getExportData();
    downloadJSON(data);
  }
  function downloadJSON(data) {
    const jsonString = JSON.stringify(data, null, 2);
    const link = document.createElement("a");
    link.href = `data:application/json;charset=utf-8,${encodeURIComponent(jsonString)}`;
    link.download = "dht-bilibili-music-backup.json";
    link.click();
  }
  function getExportData() {
    return collectionList$1.value.reduce((pre, cur) => {
      if (!cur.isChecked)
        return pre;
      const { name, createAt, id } = cur;
      pre.collectionInfos.push({
        id,
        createAt,
        name
      });
      pre.collections[id] = collections.value[id];
      return pre;
    }, {
      collectionInfos: [],
      collections: {}
    });
  }
  (function() {
    var e, aa = document.createElement("style");
    aa.innerHTML = "@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";
    var h2 = document.getElementsByTagName("head")[0];
    h2.firstChild ? h2.insertBefore(aa, h2.firstChild) : h2.appendChild(aa);
    var ba = document.createElement("div");
    ba.innerHTML = "<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
    function k2(a, b, c2, f) {
      a && a.addEventListener(b, c2, f || false);
    }
    function l(a, b) {
      var c2 = window, f = m;
      c2 && c2.removeEventListener(a, b, f || false);
    }
    function t(a, b) {
      a.stopPropagation();
      b && a.preventDefault();
    }
    function u(a, b, c2) {
      c2 = "" + c2;
      a["_s_" + b] !== c2 && (a.style.setProperty(b, c2), a["_s_" + b] = c2);
    }
    var x2 = [], A = [], ca = { capture: true, passive: false }, m = { capture: true, passive: true }, B, da = 0, E = 10, F, J2, ha, K2, P, ia;
    function U(a, b) {
      if (!(this instanceof U))
        return new U(a);
      B || ja();
      if (a) {
        if (b) {
          var c2 = a;
          a = b;
        }
        if ("string" === typeof a)
          c2 = a;
        else {
          var f = a.id;
          var d = a.index;
          var n = a.root;
          var p = a.template;
          c2 = c2 || a.title;
          var v = a.icon;
          var L2 = a.mount;
          var Q2 = a.html;
          var g2 = a.url;
          var q2 = a.width;
          var r2 = a.height;
          var w2 = a.minwidth;
          var C2 = a.minheight;
          var y = a.maxwidth;
          var z = a.maxheight;
          var ea = a.autosize;
          var D2 = a.overflow;
          var G2 = a.min;
          var H = a.max;
          var I = a.hidden;
          var fa = a.modal;
          var X2 = a.x || (fa ? "center" : 0);
          var Y2 = a.y || (fa ? "center" : 0);
          var M2 = a.top;
          var N = a.left;
          var R = a.bottom;
          var S = a.right;
          var la = a.background;
          var O = a.border;
          var T = a.header;
          var Z2 = a["class"];
          var ma = a.oncreate;
          var ra = a.onclose;
          var sa = a.onfocus;
          var ta = a.onblur;
          var ua = a.onmove;
          var va = a.onresize;
          var wa = a.onfullscreen;
          var xa = a.onmaximize;
          var ya = a.onminimize;
          var za = a.onrestore;
          var Aa = a.onhide;
          var Ba = a.onshow;
          var Ca = a.onload;
        }
      }
      this.g = (p || ba).cloneNode(true);
      this.g.id = this.id = f || "winbox-" + ++da;
      this.g.className = "winbox" + (Z2 ? " " + ("string" === typeof Z2 ? Z2 : Z2.join(" ")) : "") + (fa ? " modal" : "");
      this.g.winbox = this;
      this.window = this.g;
      this.body = this.g.getElementsByClassName("wb-body")[0];
      this.h = T || 35;
      A.push(this);
      la && this.setBackground(la);
      O ? u(this.body, "margin", O + (isNaN(O) ? "" : "px")) : O = 0;
      T && (b = this.g.getElementsByClassName("wb-header")[0], u(b, "height", T + "px"), u(b, "line-height", T + "px"), u(this.body, "top", T + "px"));
      c2 && this.setTitle(c2);
      v && this.setIcon(v);
      L2 ? this.mount(L2) : Q2 ? this.body.innerHTML = Q2 : g2 && this.setUrl(g2, Ca);
      M2 = M2 ? V2(M2, P) : 0;
      R = R ? V2(R, P) : 0;
      N = N ? V2(N, K2) : 0;
      S = S ? V2(S, K2) : 0;
      c2 = K2 - N - S;
      v = P - M2 - R;
      y = y ? V2(y, c2) : c2;
      z = z ? V2(z, v) : v;
      w2 = w2 ? V2(
        w2,
        y
      ) : 150;
      C2 = C2 ? V2(C2, z) : this.h;
      ea ? ((n || B).appendChild(this.body), q2 = Math.max(Math.min(this.body.clientWidth + 2 * O + 1, y), w2), r2 = Math.max(Math.min(this.body.clientHeight + this.h + O + 1, z), C2), this.g.appendChild(this.body)) : (q2 = q2 ? V2(q2, y) : Math.max(y / 2, w2) | 0, r2 = r2 ? V2(r2, z) : Math.max(z / 2, C2) | 0);
      X2 = X2 ? V2(X2, c2, q2) : N;
      Y2 = Y2 ? V2(Y2, v, r2) : M2;
      this.x = X2;
      this.y = Y2;
      this.width = q2;
      this.height = r2;
      this.s = w2;
      this.o = C2;
      this.m = y;
      this.l = z;
      this.top = M2;
      this.right = S;
      this.bottom = R;
      this.left = N;
      this.index = d;
      this.j = D2;
      this.focused = this.hidden = this.full = this.max = this.min = false;
      this.onclose = ra;
      this.onfocus = sa;
      this.onblur = ta;
      this.onmove = ua;
      this.onresize = va;
      this.onfullscreen = wa;
      this.onmaximize = xa;
      this.onminimize = ya;
      this.onrestore = za;
      this.onhide = Aa;
      this.onshow = Ba;
      I ? this.hide() : this.focus();
      if (d || 0 === d)
        this.index = d, u(this.g, "z-index", d), d > E && (E = d);
      H ? this.maximize() : G2 ? this.minimize() : this.resize().move();
      ka(this);
      (n || B).appendChild(this.g);
      ma && ma.call(this, a);
    }
    U["new"] = function(a) {
      return new U(a);
    };
    U.stack = function() {
      return A;
    };
    function V2(a, b, c2) {
      "string" === typeof a && ("center" === a ? a = (b - c2) / 2 + 0.5 | 0 : "right" === a || "bottom" === a ? a = b - c2 : (c2 = parseFloat(a), a = "%" === ("" + c2 !== a && a.substring(("" + c2).length)) ? b / 100 * c2 + 0.5 | 0 : c2));
      return a;
    }
    function ja() {
      B = document.body;
      B[J2 = "requestFullscreen"] || B[J2 = "msRequestFullscreen"] || B[J2 = "webkitRequestFullscreen"] || B[J2 = "mozRequestFullscreen"] || (J2 = "");
      ha = J2 && J2.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
      k2(window, "resize", function() {
        na();
        oa();
      });
      k2(B, "mousedown", function() {
        ia = false;
      }, true);
      k2(B, "mousedown", function() {
        if (!ia) {
          var a = A.length;
          if (a)
            for (--a; 0 <= a; a--) {
              var b = A[a];
              if (b.focused) {
                b.blur();
                break;
              }
            }
        }
      });
      na();
    }
    function ka(a) {
      W(a, "drag");
      W(a, "n");
      W(a, "s");
      W(a, "w");
      W(a, "e");
      W(a, "nw");
      W(a, "ne");
      W(a, "se");
      W(a, "sw");
      k2(a.g.getElementsByClassName("wb-min")[0], "click", function(b) {
        t(b);
        a.min ? a.restore().focus() : a.minimize();
      });
      k2(a.g.getElementsByClassName("wb-max")[0], "click", function(b) {
        t(b);
        a.max ? a.restore().focus() : a.maximize().focus();
      });
      J2 ? k2(a.g.getElementsByClassName("wb-full")[0], "click", function(b) {
        t(b);
        a.fullscreen().focus();
      }) : a.addClass("no-full");
      k2(a.g.getElementsByClassName("wb-close")[0], "click", function(b) {
        t(b);
        a.close() || (a = null);
      });
      k2(a.g, "mousedown", function() {
        ia = true;
      }, true);
      k2(a.body, "mousedown", function() {
        a.focus();
      }, true);
    }
    function pa(a) {
      x2.splice(x2.indexOf(a), 1);
      oa();
      a.removeClass("min");
      a.min = false;
      a.g.title = "";
    }
    function oa() {
      for (var a = x2.length, b = {}, c2 = {}, f = 0, d; f < a; f++)
        d = x2[f], d = d.left + ":" + d.top, c2[d] ? c2[d]++ : (b[d] = 0, c2[d] = 1);
      f = 0;
      for (var n, p; f < a; f++)
        d = x2[f], n = d.left + ":" + d.top, p = Math.min((K2 - d.left - d.right) / c2[n], 250), d.resize(p + 1 | 0, d.h, true).move(d.left + b[n] * p | 0, P - d.bottom - d.h, true), b[n]++;
    }
    function W(a, b) {
      function c2(g2) {
        t(g2, true);
        a.focus();
        if ("drag" === b) {
          if (a.min) {
            a.restore();
            return;
          }
          if (!a.g.classList.contains("no-max")) {
            var q2 = Date.now(), r2 = q2 - Q2;
            Q2 = q2;
            if (300 > r2) {
              a.max ? a.restore() : a.maximize();
              return;
            }
          }
        }
        a.min || (B.classList.add("wb-lock"), (p = g2.touches) && (p = p[0]) ? (g2 = p, k2(window, "touchmove", f, m), k2(window, "touchend", d, m)) : (k2(window, "mousemove", f, m), k2(window, "mouseup", d, m)), v = g2.pageX, L2 = g2.pageY);
      }
      function f(g2) {
        t(g2);
        p && (g2 = g2.touches[0]);
        var q2 = g2.pageX;
        g2 = g2.pageY;
        var r2 = q2 - v, w2 = g2 - L2, C2 = a.width, y = a.height, z = a.x, ea = a.y, D2;
        if ("drag" === b) {
          if (a.g.classList.contains("no-move"))
            return;
          a.x += r2;
          a.y += w2;
          var G2 = D2 = 1;
        } else {
          if ("e" === b || "se" === b || "ne" === b) {
            a.width += r2;
            var H = 1;
          } else if ("w" === b || "sw" === b || "nw" === b)
            a.x += r2, a.width -= r2, G2 = H = 1;
          if ("s" === b || "se" === b || "sw" === b) {
            a.height += w2;
            var I = 1;
          } else if ("n" === b || "ne" === b || "nw" === b)
            a.y += w2, a.height -= w2, D2 = I = 1;
        }
        H && (a.width = Math.max(Math.min(a.width, a.m, K2 - a.x - a.right), a.s), H = a.width !== C2);
        I && (a.height = Math.max(Math.min(a.height, a.l, P - a.y - a.bottom), a.o), I = a.height !== y);
        (H || I) && a.resize();
        G2 && (a.max && (a.x = (q2 < K2 / 3 ? a.left : q2 > K2 / 3 * 2 ? K2 - a.width - a.right : K2 / 2 - a.width / 2) + r2), a.x = Math.max(Math.min(a.x, a.j ? K2 - 30 : K2 - a.width - a.right), a.j ? 30 - a.width : a.left), G2 = a.x !== z);
        D2 && (a.max && (a.y = a.top + w2), a.y = Math.max(Math.min(a.y, a.j ? P - a.h : P - a.height - a.bottom), a.top), D2 = a.y !== ea);
        if (G2 || D2)
          a.max && a.restore(), a.move();
        if (H || G2)
          v = q2;
        if (I || D2)
          L2 = g2;
      }
      function d(g2) {
        t(g2);
        B.classList.remove("wb-lock");
        p ? (l("touchmove", f), l("touchend", d)) : (l("mousemove", f), l("mouseup", d));
      }
      var n = a.g.getElementsByClassName("wb-" + b)[0];
      if (n) {
        var p, v, L2, Q2 = 0;
        k2(n, "mousedown", c2, ca);
        k2(n, "touchstart", c2, ca);
      }
    }
    function na() {
      var a = document.documentElement;
      K2 = a.clientWidth;
      P = a.clientHeight;
    }
    e = U.prototype;
    e.mount = function(a) {
      this.unmount();
      a.i || (a.i = a.parentNode);
      this.body.textContent = "";
      this.body.appendChild(a);
      return this;
    };
    e.unmount = function(a) {
      var b = this.body.firstChild;
      if (b) {
        var c2 = a || b.i;
        c2 && c2.appendChild(b);
        b.i = a;
      }
      return this;
    };
    e.setTitle = function(a) {
      var b = this.g.getElementsByClassName("wb-title")[0];
      a = this.title = a;
      var c2 = b.firstChild;
      c2 ? c2.nodeValue = a : b.textContent = a;
      return this;
    };
    e.setIcon = function(a) {
      var b = this.g.getElementsByClassName("wb-icon")[0];
      u(b, "background-image", "url(" + a + ")");
      u(b, "display", "inline-block");
      return this;
    };
    e.setBackground = function(a) {
      u(this.g, "background", a);
      return this;
    };
    e.setUrl = function(a, b) {
      var c2 = this.body.firstChild;
      c2 && "iframe" === c2.tagName.toLowerCase() ? c2.src = a : (this.body.innerHTML = '<iframe src="' + a + '"></iframe>', b && (this.body.firstChild.onload = b));
      return this;
    };
    e.focus = function(a) {
      if (false === a)
        return this.blur();
      if (!this.focused) {
        a = A.length;
        if (1 < a)
          for (var b = 1; b <= a; b++) {
            var c2 = A[a - b];
            if (c2.focused) {
              c2.blur();
              A.push(A.splice(A.indexOf(this), 1)[0]);
              break;
            }
          }
        u(this.g, "z-index", ++E);
        this.index = E;
        this.addClass("focus");
        this.focused = true;
        this.onfocus && this.onfocus();
      }
      return this;
    };
    e.blur = function(a) {
      if (false === a)
        return this.focus();
      this.focused && (this.removeClass("focus"), this.focused = false, this.onblur && this.onblur());
      return this;
    };
    e.hide = function(a) {
      if (false === a)
        return this.show();
      if (!this.hidden)
        return this.onhide && this.onhide(), this.hidden = true, this.addClass("hide");
    };
    e.show = function(a) {
      if (false === a)
        return this.hide();
      if (this.hidden)
        return this.onshow && this.onshow(), this.hidden = false, this.removeClass("hide");
    };
    e.minimize = function(a) {
      if (false === a)
        return this.restore();
      F && qa();
      this.max && (this.removeClass("max"), this.max = false);
      this.min || (x2.push(this), oa(), this.g.title = this.title, this.addClass("min"), this.min = true, this.focused && (this.blur(), Da()), this.onminimize && this.onminimize());
      return this;
    };
    function Da() {
      var a = A.length;
      if (a)
        for (--a; 0 <= a; a--) {
          var b = A[a];
          if (!b.min) {
            b.focus();
            break;
          }
        }
    }
    e.restore = function() {
      F && qa();
      this.min && (pa(this), this.resize().move(), this.onrestore && this.onrestore());
      this.max && (this.max = false, this.removeClass("max").resize().move(), this.onrestore && this.onrestore());
      return this;
    };
    e.maximize = function(a) {
      if (false === a)
        return this.restore();
      F && qa();
      this.min && pa(this);
      this.max || (this.addClass("max").resize(K2 - this.left - this.right, P - this.top - this.bottom, true).move(this.left, this.top, true), this.max = true, this.onmaximize && this.onmaximize());
      return this;
    };
    e.fullscreen = function(a) {
      this.min && (pa(this), this.resize().move());
      if (!F || !qa())
        this.body[J2](), F = this, this.full = true, this.onfullscreen && this.onfullscreen();
      else if (false === a)
        return this.restore();
      return this;
    };
    function qa() {
      F.full = false;
      if (document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        return document[ha](), true;
    }
    e.close = function(a) {
      if (this.onclose && this.onclose(a))
        return true;
      this.min && pa(this);
      A.splice(A.indexOf(this), 1);
      this.unmount();
      this.g.remove();
      this.g.textContent = "";
      this.g = this.body = this.g.winbox = null;
      this.focused && Da();
    };
    e.move = function(a, b, c2) {
      a || 0 === a ? c2 || (this.x = a ? a = V2(a, K2 - this.left - this.right, this.width) : 0, this.y = b ? b = V2(b, P - this.top - this.bottom, this.height) : 0) : (a = this.x, b = this.y);
      u(this.g, "left", a + "px");
      u(this.g, "top", b + "px");
      this.onmove && this.onmove(a, b);
      return this;
    };
    e.resize = function(a, b, c2) {
      a || 0 === a ? c2 || (this.width = a ? a = V2(a, this.m) : 0, this.height = b ? b = V2(b, this.l) : 0, a = Math.max(a, this.s), b = Math.max(b, this.o)) : (a = this.width, b = this.height);
      u(this.g, "width", a + "px");
      u(this.g, "height", b + "px");
      this.onresize && this.onresize(a, b);
      return this;
    };
    e.addControl = function(a) {
      var b = a["class"], c2 = a.image, f = a.click;
      a = a.index;
      var d = document.createElement("span"), n = this.g.getElementsByClassName("wb-control")[0], p = this;
      b && (d.className = b);
      c2 && u(d, "background-image", "url(" + c2 + ")");
      f && (d.onclick = function(v) {
        f.call(this, v, p);
      });
      n.insertBefore(d, n.childNodes[a || 0]);
      return this;
    };
    e.removeControl = function(a) {
      (a = this.g.getElementsByClassName(a)[0]) && a.remove();
      return this;
    };
    e.addClass = function(a) {
      this.g.classList.add(a);
      return this;
    };
    e.removeClass = function(a) {
      this.g.classList.remove(a);
      return this;
    };
    e.toggleClass = function(a) {
      return this.g.classList.contains(a) ? this.removeClass(a) : this.addClass(a);
    };
    window.WinBox = U;
  }).call(void 0);
  let nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte > 62) {
      id += "-";
    } else {
      id += "_";
    }
    return id;
  }, "");
  var VueWinBox = vue.defineComponent({
    props: {
      options: {
        type: Object,
        required: true
      },
      openOnMount: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "move",
      "resize",
      "close",
      "focus",
      "blur"
    ],
    setup(props, { slots, emit, expose }) {
      const selector = `vuewinbox-${nanoid()}`;
      const winbox = vue.ref(null);
      const initialized = vue.ref(false);
      expose({
        selector,
        winbox,
        initialized,
        initialize
      });
      function initialize() {
        if (initialized.value) {
          console.error("Please close the window first before reinitializing.");
          return;
        }
        winbox.value = new WinBox({
          onresize: (width, height) => {
            var _a;
            emit("resize", {
              id: (_a = winbox.value) == null ? void 0 : _a.id,
              width,
              height
            });
          },
          onclose: () => {
            var _a;
            emit("close", { id: (_a = winbox.value) == null ? void 0 : _a.id });
            initialized.value = false;
            winbox.value = null;
            return false;
          },
          onfocus: () => {
            var _a;
            emit("focus", { id: (_a = winbox.value) == null ? void 0 : _a.id });
          },
          onblur: () => {
            var _a;
            emit("blur", { id: (_a = winbox.value) == null ? void 0 : _a.id });
          },
          onmove: (x2, y) => {
            var _a;
            emit("move", {
              id: (_a = winbox.value) == null ? void 0 : _a.id,
              x: x2,
              y
            });
          },
          ...props.options,
          id: selector
        });
        initialized.value = true;
      }
      vue.onMounted(() => {
        if (!props.openOnMount)
          return;
        initialize();
      });
      vue.onScopeDispose(() => {
        var _a;
        (_a = vue.toRaw(winbox.value)) == null ? void 0 : _a.close();
      });
      return () => {
        var _a;
        return initialized.value ? vue.h(vue.Teleport, {
          to: `#${selector} .wb-body`
        }, (_a = slots.default) == null ? void 0 : _a.call(slots)) : null;
      };
    }
  });
  const paneDomId = vue.ref("");
  const _hoisted_1$x = { class: "p-10px flex gap-12px sticky top-0px bg-white z-9999 justify-between" };
  const _hoisted_2$n = { class: "flex items-center gap-9px" };
  const _hoisted_3$g = { class: "flex flex-col gap-9px p-2px" };
  const _hoisted_4$e = ["onClick"];
  const _hoisted_5$a = ["checked"];
  const _sfc_main$F = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function selectAll() {
        collectionList$1.value.forEach((item) => {
          item.isChecked = true;
        });
      }
      function cancelAll() {
        collectionList$1.value.forEach((item) => {
          item.isChecked = false;
        });
      }
      function updateIsChecked(music) {
        music.isChecked = !music.isChecked;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", _hoisted_1$x, [
            vue.createElementVNode("div", { class: "flex gap-12px" }, [
              vue.createElementVNode("div", {
                class: "btn",
                onClick: selectAll
              }, " 全选 "),
              vue.createElementVNode("div", {
                class: "btn",
                onClick: cancelAll
              }, " 全部取消 ")
            ]),
            vue.createElementVNode("div", _hoisted_2$n, [
              vue.createElementVNode("div", null, "列表中共有 " + vue.toDisplayString(vue.unref(collectionList$1).length) + " 个收藏夹，", 1),
              vue.createElementVNode("div", null, "当前选择了 " + vue.toDisplayString(vue.unref(collectionList$1).filter((item) => item.isChecked).length) + " 个视频", 1),
              vue.createElementVNode("div", {
                class: "btn",
                onClick: _cache[0] || (_cache[0] = //@ts-ignore
                (...args) => vue.unref(confirmExportHandle) && vue.unref(confirmExportHandle)(...args))
              }, " 导出到电脑 ")
            ])
          ]),
          vue.createElementVNode("div", _hoisted_3$g, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(collectionList$1), (collection) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: collection.id,
                class: vue.normalizeClass(["flex gap-9px cursor-pointer hover:bg-gray-100 p-12px", [collection.isChecked ? "bg-[#fc80a1]" : ""]]),
                onClick: ($event) => updateIsChecked(collection)
              }, [
                vue.createElementVNode("input", {
                  type: "checkbox",
                  checked: collection.isChecked
                }, null, 8, _hoisted_5$a),
                vue.createElementVNode("div", null, vue.toDisplayString(collection.name), 1)
              ], 10, _hoisted_4$e);
            }), 128))
          ])
        ], 64);
      };
    }
  });
  const _sfc_main$E = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const wbRef = vue.ref();
      function getOptions() {
        const options = {
          id: "export-dialog",
          title: "选择要导出的歌单",
          x: "right",
          y: "center",
          height: "50%",
          class: "modern no-full",
          background: "rgba(0, 0, 0, 0.81)",
          index: 9999,
          onclose
        };
        if (!paneDomId.value)
          return options;
        const parentPaneDom = document.getElementById(paneDomId.value);
        let zindex = 9999;
        if (parentPaneDom)
          zindex = Number.parseInt(parentPaneDom.style.zIndex) + 1;
        options.index = zindex;
        return options;
      }
      async function onclose() {
        if (!wbRef.value)
          return;
        wbRef.value.winbox.window.remove();
        isShowExportDialog.value = false;
      }
      vue.onBeforeUnmount(() => {
        onclose();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(VueWinBox), {
          ref_key: "wbRef",
          ref: wbRef,
          options: getOptions()
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_sfc_main$F)
          ]),
          _: 1
        }, 8, ["options"]);
      };
    }
  });
  const isShowImportDialog = vue.ref(false);
  const collectionList = vue.ref([]);
  const tempCollections = vue.ref({});
  function openImportDialogHandle() {
    isShowImportDialog.value = true;
  }
  function confirmImportHandle() {
    const filterList = collectionList.value.filter((item) => item.isChecked);
    const isCheckedCollection = filterList.length;
    if (!isCheckedCollection) {
      i("未选择导入的歌单，导入失败");
      return;
    }
    for (const collectionInfo of filterList) {
      const { id, name, createAt } = collectionInfo;
      const newId = nanoid$1();
      collectionInfos.value.push({
        id: newId,
        name,
        createAt
      });
      collections.value[newId] = tempCollections.value[id];
    }
    isShowImportDialog.value = false;
    tempCollections.value = {};
    collectionList.value = [];
    i("歌单导入成功");
  }
  function fileHandle(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      if (!e.target)
        return;
      const fileContent = e.target.result;
      onFileLoad(fileContent);
    };
    reader.readAsText(file);
  }
  function onFileLoad(content) {
    const newCollectionsData = paresContent(content);
    if (!newCollectionsData)
      return;
    collectionList.value = newCollectionsData.collectionInfos.map((item) => {
      return {
        ...item,
        isChecked: false
      };
    });
    tempCollections.value = newCollectionsData.collections;
  }
  function paresContent(content) {
    if (typeof content !== "string") {
      i("文件内容不对，导入失败");
      return;
    }
    try {
      const data = JSON.parse(content);
      const newCollectionsData = {
        collectionInfos: [],
        collections: {}
      };
      for (const collectionInfo of data.collectionInfos) {
        const { id, name, createAt } = collectionInfo;
        const isSameName = geiIsSameName(name);
        const newName = isSameName ? `${name}(1)` : name;
        const newId = nanoid$1();
        const newCollectionInfo = {
          id: newId,
          createAt,
          name: newName
        };
        newCollectionsData.collectionInfos.push(newCollectionInfo);
        newCollectionsData.collections[newId] = data.collections[id];
      }
      return newCollectionsData;
    } catch (error) {
      i("导入的数据不正确，导入失败");
    }
  }
  function geiIsSameName(name) {
    return collectionInfos.value.find((collectionInfo) => {
      return name === collectionInfo.name;
    });
  }
  const _sfc_main$D = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function onDrop(e) {
        const files = e.dataTransfer.files;
        const file = files[0];
        fileHandle(file);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "h-200px m-10px p-10px box-border border-3px border-dotted border-black rounded flex justify-center items-center text-lg",
          onDragover: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["prevent"])),
          onDrop: vue.withModifiers(onDrop, ["prevent"])
        }, " 拖拽 json 文件到这里 ", 32);
      };
    }
  });
  const _hoisted_1$w = { class: "p-10px" };
  const _sfc_main$C = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const fileInput = vue.ref(null);
      function onFileChange(event) {
        const file = event.target.files[0];
        fileHandle(file);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$w, [
          vue.createElementVNode("input", {
            ref_key: "fileInput",
            ref: fileInput,
            type: "file",
            accept: ".json",
            onChange: onFileChange
          }, null, 544)
        ]);
      };
    }
  });
  const _hoisted_1$v = { class: "p-10px flex gap-12px sticky top-0px bg-white z-9999 justify-between" };
  const _hoisted_2$m = { class: "flex items-center gap-9px" };
  const _hoisted_3$f = { class: "flex flex-col gap-9px p-2px" };
  const _hoisted_4$d = ["onClick"];
  const _hoisted_5$9 = ["checked"];
  const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function selectAll() {
        collectionList.value.forEach((item) => {
          item.isChecked = true;
        });
      }
      function cancelAll() {
        collectionList.value.forEach((item) => {
          item.isChecked = false;
        });
      }
      function updateIsChecked(music) {
        music.isChecked = !music.isChecked;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", _hoisted_1$v, [
            vue.createElementVNode("div", { class: "flex gap-12px" }, [
              vue.createElementVNode("div", {
                class: "btn",
                onClick: selectAll
              }, " 全选 "),
              vue.createElementVNode("div", {
                class: "btn",
                onClick: cancelAll
              }, " 全部取消 ")
            ]),
            vue.createElementVNode("div", _hoisted_2$m, [
              vue.createElementVNode("div", null, "列表中共有 " + vue.toDisplayString(vue.unref(collectionList).length) + " 个收藏夹，", 1),
              vue.createElementVNode("div", null, "当前选择了 " + vue.toDisplayString(vue.unref(collectionList).filter((item) => item.isChecked).length) + " 个视频", 1),
              vue.createElementVNode("div", {
                class: "btn",
                onClick: _cache[0] || (_cache[0] = //@ts-ignore
                (...args) => vue.unref(confirmImportHandle) && vue.unref(confirmImportHandle)(...args))
              }, " 导入已选歌单 ")
            ])
          ]),
          vue.createElementVNode("div", _hoisted_3$f, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(collectionList), (collection) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: collection.id,
                class: vue.normalizeClass(["flex gap-9px cursor-pointer hover:bg-gray-100 p-12px", [collection.isChecked ? "bg-[#fc80a1]" : ""]]),
                onClick: ($event) => updateIsChecked(collection)
              }, [
                vue.createElementVNode("input", {
                  type: "checkbox",
                  checked: collection.isChecked
                }, null, 8, _hoisted_5$9),
                vue.createElementVNode("div", null, vue.toDisplayString(collection.name), 1)
              ], 10, _hoisted_4$d);
            }), 128))
          ])
        ], 64);
      };
    }
  });
  const _hoisted_1$u = {
    key: 1,
    class: "mb-60px"
  };
  const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const wbRef = vue.ref();
      function getOptions() {
        const options = {
          id: "export-dialog",
          title: "拽入想要导入的json文件",
          x: "right",
          y: "center",
          height: "50%",
          class: "modern no-full",
          background: "rgba(0, 0, 0, 0.81)",
          index: 9999,
          onclose
        };
        if (!paneDomId.value)
          return options;
        const parentPaneDom = document.getElementById(paneDomId.value);
        let zindex = 9999;
        if (parentPaneDom)
          zindex = Number.parseInt(parentPaneDom.style.zIndex) + 1;
        options.index = zindex;
        return options;
      }
      async function onclose() {
        if (!wbRef.value)
          return;
        wbRef.value.winbox.window.remove();
        isShowImportDialog.value = false;
      }
      vue.onBeforeUnmount(() => {
        onclose();
      });
      function reset() {
        collectionList.value = [];
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(VueWinBox), {
          ref_key: "wbRef",
          ref: wbRef,
          options: getOptions()
        }, {
          default: vue.withCtx(() => [
            !vue.unref(collectionList).length ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.createVNode(_sfc_main$C),
              vue.createVNode(_sfc_main$D)
            ], 64)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$u, [
              vue.createVNode(_sfc_main$B),
              vue.createElementVNode("div", { class: "h-60px box-border bg-[#fc80a1] fixed bottom-0 w-full flex items-center justify-center" }, [
                vue.createElementVNode("div", {
                  class: "btn",
                  onClick: reset
                }, " 重新导入 ")
              ])
            ]))
          ]),
          _: 1
        }, 8, ["options"]);
      };
    }
  });
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const isShowAddPage$1 = vue.ref(false);
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_openInTab = /* @__PURE__ */ (() => typeof GM_openInTab != "undefined" ? GM_openInTab : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  function secondFormatToLength(seconds) {
    if (Number.isNaN(seconds))
      return "00:00:00";
    if (seconds < 0)
      return "00:00:00";
    return new Date(seconds * 1e3).toISOString().substr(11, 8);
  }
  function dateFormatToString(time) {
    return dayjs(time).format("YYYY-MM-DD");
  }
  const videoDom = vue.ref(_unsafeWindow.document.getElementsByTagName("video")[0]);
  const bilibiliPlayer = _unsafeWindow.player;
  const bilibiliInitState = _unsafeWindow.__INITIAL_STATE__;
  const isVideoPaused = vue.ref(false);
  const curListenEnd = vue.ref(-1);
  const curListenStart = vue.ref(-1);
  const videoCurTime = vue.ref(0);
  const musicCurTime = vue.ref(0);
  const pageType = vue.ref("");
  async function registerVideoListener() {
    await vue.nextTick();
    await sleep(1e3);
    bilibiliPlayer.value = _unsafeWindow.player;
    videoDom.value = _unsafeWindow.player.mediaElement();
    videoDom.value.addEventListener("pause", onVideoPause);
    videoDom.value.addEventListener("play", onVideoPlay);
    videoDom.value.addEventListener("timeupdate", onVideoTimeUpdate);
    videoDom.value.addEventListener("ended", onVideoEnded);
  }
  function removeVideoListener() {
    videoDom.value.removeEventListener("pause", onVideoPause);
    videoDom.value.removeEventListener("play", onVideoPlay);
    videoDom.value.removeEventListener("timeupdate", onVideoTimeUpdate);
    videoDom.value.removeEventListener("ended", onVideoEnded);
    videoDom.value.removeEventListener("loadedmetadata", onLoadedmetadata);
  }
  function onVideoPause() {
    isVideoPaused.value = true;
  }
  function onVideoPlay() {
    isVideoPaused.value = false;
  }
  function onVideoTimeUpdate() {
    videoCurTime.value = videoDom.value.currentTime;
    musicCurTime.value = videoCurTime.value - curListenStart.value;
    if (tempMusicId.value)
      onLoadedmetadata();
    if (!isShowPane.value)
      return;
    if (curListenEnd.value === -1)
      return;
    if (isShowAddPage$1.value)
      return;
    if (editingMusicId.value)
      return;
    if (videoDom.value.currentTime >= curListenEnd.value)
      onPlayEnd();
  }
  function onVideoEnded() {
    onPlayEnd();
  }
  function onLoadedmetadata() {
    curPlayingMusicId.value = tempMusicId.value;
    tempMusicId.value = "";
    refreshPageType();
    if (!editingMusicId.value)
      return;
    onMusicToggleDoneUpdateEditPane();
  }
  function getDuration() {
    return videoDom.value.duration;
  }
  function getBvid() {
    const { bvid } = _unsafeWindow.__INITIAL_STATE__.videoData;
    return bvid;
  }
  function clickPlayBtn() {
    if (videoDom.value.paused) {
      videoDom.value.play();
      return;
    }
    videoDom.value.pause();
  }
  function getCurUpInfo() {
    let up = null;
    if (pageType.value === "collection")
      up = _unsafeWindow.__INITIAL_STATE__.upInfo;
    else
      up = _unsafeWindow.__INITIAL_STATE__.upData;
    const { mid, name, face } = up;
    return { mid, name, face };
  }
  function getCurVideoPic() {
    return _unsafeWindow.__INITIAL_STATE__.videoData.pic;
  }
  function getCurP() {
    return _unsafeWindow.__INITIAL_STATE__.p;
  }
  function getCurPName() {
    if (_unsafeWindow.__INITIAL_STATE__.videoData.pages.length === 1)
      return "";
    return _unsafeWindow.__INITIAL_STATE__.videoData.pages[getCurP() - 1].part;
  }
  function getCurTitle() {
    return ` ${_unsafeWindow.__INITIAL_STATE__.videoData.title}`;
  }
  function refreshPageType() {
    if (_unsafeWindow.__INITIAL_STATE__.resourceList) {
      pageType.value = "collection";
      return;
    }
    if (_unsafeWindow.__INITIAL_STATE__.videoData.pages.length > 1) {
      pageType.value = "pages";
      return;
    }
    if (_unsafeWindow.__INITIAL_STATE__.sections.length > 0) {
      pageType.value = "section";
      return;
    }
    pageType.value = "video";
  }
  const editingMusicId = vue.ref("");
  const editingMusicDuration = vue.ref(0);
  const EDITING_MUSIC_INFO_TEMP = {
    id: "",
    bvid: "",
    title: "",
    start: 0,
    end: 0,
    createdAt: 0,
    pic: "",
    p: 0,
    up: {
      mid: 0,
      name: "",
      face: void 0
    }
  };
  const editingMusicInfo = vue.ref(JSON.parse(JSON.stringify(EDITING_MUSIC_INFO_TEMP)));
  const slider1 = vue.ref(editingMusicInfo.value.start);
  const slider2 = vue.ref(editingMusicInfo.value.end);
  const isMusicToggleInEditPaneLoading = vue.ref(false);
  async function onMusicToggleDoneUpdateEditPane() {
    editingMusicDuration.value = getDuration();
    isMusicToggleInEditPaneLoading.value = false;
    await vue.nextTick();
    slider1.value = editingMusicInfo.value.start;
    slider2.value = editingMusicInfo.value.end;
  }
  function confirmEdit() {
    const music = curShowCollectionMusics.value.find((music2) => music2.id === editingMusicId.value);
    if (!music) {
      i("没有找到对应音乐，修改失败");
      return;
    }
    Object.assign(music, editingMusicInfo.value);
    i("修改成功");
    editingMusicId.value = "";
    Object.assign(editingMusicInfo, JSON.parse(JSON.stringify(EDITING_MUSIC_INFO_TEMP)));
  }
  const randomMusicConfig = vue.ref({
    musics: [],
    curIndex: -1
  });
  vue.watch(playMode, (value, oldValue) => {
    if (value === EPlayMode.随机播放) {
      randomHandle();
      return;
    }
    if (oldValue === EPlayMode.随机播放)
      removeRandomHandle();
  });
  function randomHandle() {
    if (playMode.value !== EPlayMode.随机播放)
      return;
    const list = [...playList.value].sort(() => Math.random() - 0.5);
    if (curPlayingMusicId.value) {
      const index = list.findIndex((item) => item.id === curPlayingMusicId.value);
      list.splice(index, 1);
    } else if (tempMusicId.value) {
      const index = list.findIndex((item) => item.id === tempMusicId.value);
      list.splice(index, 1);
    }
    randomMusicConfig.value.musics = list;
    Object.assign(randomMusicConfig.value, {
      musics: [...playList.value].sort(() => Math.random() - 0.5),
      curIndex: -1
    });
  }
  function removeRandomHandle() {
    Object.assign(randomMusicConfig.value, {
      musics: [],
      curIndex: -1
    });
  }
  function playRandomMusic(playMethod = "next") {
    if (playMode.value !== EPlayMode.随机播放)
      return;
    if (playMethod === "next")
      randomMusicConfig.value.curIndex++;
    else if (playMethod === "pre")
      randomMusicConfig.value.curIndex--;
    if (randomMusicConfig.value.curIndex < 0) {
      randomHandle();
      randomMusicConfig.value.curIndex = 0;
    }
    playMusic(randomMusicConfig.value.musics[randomMusicConfig.value.curIndex]);
    if (randomMusicConfig.value.curIndex === randomMusicConfig.value.musics.length - 1)
      randomHandle();
  }
  var EPlayMode = /* @__PURE__ */ ((EPlayMode2) => {
    EPlayMode2[EPlayMode2["列表循环"] = 0] = "列表循环";
    EPlayMode2[EPlayMode2["单曲循环"] = 1] = "单曲循环";
    EPlayMode2[EPlayMode2["随机播放"] = 2] = "随机播放";
    EPlayMode2[EPlayMode2["播完暂停"] = 3] = "播完暂停";
    return EPlayMode2;
  })(EPlayMode || {});
  const modeMap = {
    [
      0
      /* 列表循环 */
    ]: "列表循环",
    [
      1
      /* 单曲循环 */
    ]: "单曲循环",
    [
      2
      /* 随机播放 */
    ]: "随机播放",
    [
      3
      /* 播完暂停 */
    ]: "播完暂停"
  };
  const playList = vue.ref([]);
  function changePlayMode() {
    if (playMode.value === Object.values(modeMap).length - 1) {
      playMode.value = 0;
      return;
    }
    playMode.value++;
  }
  function playPre() {
    if (playMode.value === 2) {
      playRandomMusic("pre");
      return;
    }
    const index = curMusicIndex();
    if (index === -1) {
      i("没有找到当前播放音乐，无法跳转");
      return;
    }
    if (index === 0) {
      i("没有上一首啦");
      return;
    }
    switch (playMode.value) {
      case 0:
        playMusic(playList.value[index - 1]);
        break;
      case 1:
        if (index === 0)
          return i("没有上一首啦");
        playMusic(playList.value[index - 1]);
        break;
      case 3:
        if (index === 0)
          return i("没有上一首啦");
        playMusic(playList.value[index - 1]);
    }
  }
  function playNext() {
    const index = curMusicIndex();
    if (index === -1) {
      i("没有找到当前播放音乐，无法跳转");
      return;
    }
    switch (playMode.value) {
      case 0:
        if (index === playList.value.length - 1)
          return playMusic(playList.value[0]);
        playMusic(playList.value[index + 1]);
        break;
      case 1:
        if (index === playList.value.length - 1)
          return i("没有下一首啦");
        playMusic(playList.value[index + 1]);
        break;
      case 2:
        playRandomMusic();
        break;
      case 3:
        if (index === playList.value.length - 1)
          return i("没有下一首啦");
        playMusic(playList.value[index + 1]);
    }
  }
  function onPlayEnd() {
    if (isShowAddPage$1.value) {
      videoDom.value.pause();
      return;
    }
    if (editingMusicId.value) {
      videoDom.value.pause();
      return;
    }
    if (playMode.value === 3) {
      videoDom.value.pause();
      return;
    }
    if (playMode.value === 1) {
      const index = curMusicIndex();
      if (index === -1) {
        i("没有找到当前播放音乐，无法跳转");
        return;
      }
      playMusic(playList.value[index]);
      return;
    }
    playNext();
  }
  function curMusicIndex() {
    const index = playList.value.findIndex((music) => {
      return music.id === curPlayingMusicId.value;
    });
    return index;
  }
  const curPlayingBvid = vue.ref("");
  const curPlayingP = vue.ref(0);
  const curPlayingMusicId = vue.ref("");
  const tempMusicId = vue.ref("");
  const curMusic = vue.computed(() => {
    if (tempMusicId.value) {
      const music2 = playList.value.find((item) => item.id === tempMusicId.value);
      if (music2)
        return music2;
    }
    if (!curPlayingMusicId.value)
      return;
    const music = playList.value.find((item) => item.id === curPlayingMusicId.value);
    if (!music)
      return;
    return music;
  });
  const titleWidthPercentJson = {
    title: 40,
    up: 15,
    duration: 15
  };
  const sumPercent = Object.values(titleWidthPercentJson).reduce((per, cur) => per + cur, 0);
  function getWidthStyle(field) {
    return { width: `${titleWidthPercentJson[field] / sumPercent * 100}%` };
  }
  async function playMusic(music) {
    const { start, bvid, end, p, id } = music;
    if (tempMusicId.value === id)
      return;
    bilibiliPlayer.pause();
    removeVideoListener();
    tempMusicId.value = id;
    bilibiliPlayer.reload({ bvid, t: start, p });
    setTimeout(() => {
      registerVideoListener();
    });
    curPlayingBvid.value = bvid;
    curListenStart.value = start;
    curListenEnd.value = end;
    curPlayingP.value = p;
    curPlayingMusicId.value = "";
  }
  const isShowPane = vue.ref(false);
  let originIscontinuousPlay = false;
  const isLoading = vue.ref(false);
  async function openPaneHandle() {
    isLoading.value = true;
    originIscontinuousPlay = getIsContinuePlay();
    bilibiliInitState.continuousPlay = false;
    registerVideoListener();
    isShowPane.value = true;
    await initLoacalData();
    isLoading.value = false;
  }
  function closePaneHandle() {
    isShowPane.value = false;
    removeVideoListener();
    bilibiliInitState.continuousPlay = originIscontinuousPlay;
    curPlayingMusicId.value = "";
  }
  function getIsContinuePlay() {
    return bilibiliInitState.continuousPlay;
  }
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass([[vue.unref(isVideoPaused) ? "i-carbon-play-outline" : "i-carbon-pause-outline"], "text-60px"]),
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => vue.unref(clickPlayBtn) && vue.unref(clickPlayBtn)(...args))
        }, null, 2);
      };
    }
  });
  const _hoisted_1$t = { class: "flex items-center gap-3" };
  const _hoisted_2$l = ["max"];
  const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function seekingHandle() {
        videoDom.value.currentTime = Number(videoCurTime.value);
      }
      function mouseDownHandle(event) {
        const parentDom = event.target;
        if (!parentDom)
          return;
        if (!parentDom.children.length)
          return;
        const inputDom = parentDom.children[0];
        const clickX = event.clientX;
        const rangeWidth = inputDom.offsetWidth;
        const rangeMin = Number(inputDom.min);
        const rangeMax = Number(inputDom.max);
        const value = (clickX - inputDom.getBoundingClientRect().left) / rangeWidth * (rangeMax - rangeMin) + rangeMin;
        const roundedValue = Math.round(value);
        videoDom.value.currentTime = roundedValue;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$t, [
          vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(videoCurTime))), 1),
          vue.createElementVNode("div", {
            class: "cursor-pointer flex items-center w-full",
            onMousedown: mouseDownHandle
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(videoCurTime) ? videoCurTime.value = $event : null),
              class: "w-full h-10 bg-blue cursor-pointer",
              step: "any",
              type: "range",
              max: vue.unref(getDuration)(),
              min: "0",
              onInput: seekingHandle
            }, null, 40, _hoisted_2$l), [
              [vue.vModelText, vue.unref(videoCurTime)]
            ])
          ], 32),
          vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(getDuration)())), 1)
        ]);
      };
    }
  });
  const _hoisted_1$s = { class: "text-lg" };
  const _hoisted_2$k = { class: "px-10px pt-10px flex justify-between" };
  const _hoisted_3$e = /* @__PURE__ */ vue.createElementVNode("div", { class: "divider" }, null, -1);
  const _hoisted_4$c = { class: "p-20px flex flex-col gap-30px" };
  const _hoisted_5$8 = { class: "flex items-center gap-10px" };
  const _hoisted_6$7 = /* @__PURE__ */ vue.createElementVNode("div", null, " 添加到哪个歌单 ", -1);
  const _hoisted_7$5 = ["label", "value"];
  const _hoisted_8$4 = { class: "flex items-center gap-10px" };
  const _hoisted_9$3 = /* @__PURE__ */ vue.createElementVNode("div", null, " bv 号 ", -1);
  const _hoisted_10$3 = { class: "text-gray" };
  const _hoisted_11$2 = { class: "flex items-center gap-10px" };
  const _hoisted_12$1 = /* @__PURE__ */ vue.createElementVNode("div", null, " UP 主 ", -1);
  const _hoisted_13$1 = { class: "text-gray" };
  const _hoisted_14$1 = { class: "flex items-center gap-10px w-full" };
  const _hoisted_15$1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "shrink-0" }, " 标题 ", -1);
  const _hoisted_16$1 = { class: "w-full" };
  const _hoisted_17$1 = { class: "flex items-center gap-10px" };
  const _hoisted_18$1 = /* @__PURE__ */ vue.createElementVNode("div", null, " 起始时间 ", -1);
  const _hoisted_19$1 = { class: "flex items-center gap-10px" };
  const _hoisted_20$1 = /* @__PURE__ */ vue.createElementVNode("div", null, " 结束时间 ", -1);
  const _hoisted_21$1 = { class: "flex items-center gap-3" };
  const _hoisted_22$1 = { class: "w-full relative h-10px" };
  const _hoisted_23$1 = { class: "w-full absolute bg-gray-100 h-full flex rounded overflow-hidden" };
  const _hoisted_24$1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "flex-grow h-full" }, null, -1);
  const _hoisted_25$1 = ["max"];
  const _hoisted_26$1 = ["max"];
  const _hoisted_27 = { class: "w-full relative h-10px" };
  const _hoisted_28 = { class: "flex justify-center" };
  const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const videoDom2 = _unsafeWindow.player.mediaElement();
      const start = vue.ref(0);
      const end = vue.ref(videoDom2.duration);
      const slider12 = vue.ref(0);
      const slider22 = vue.ref(getDuration());
      const title = vue.ref(`${getCurTitle()}${getCurPName()}`);
      const curSelectingCollectionId2 = vue.ref("");
      function getCurrentTime() {
        const { currentTime } = videoDom2;
        return currentTime;
      }
      function insertCurrentTimeToStart() {
        const curTime = getCurrentTime();
        if (curTime >= end.value) {
          i("当前的时间比结束时间还晚，无法插入起始时间");
          return;
        }
        start.value = curTime;
        if (Number(slider12.value) <= Number(slider22.value))
          slider12.value = curTime;
        else
          slider22.value = curTime;
      }
      function insertCurrentTimeToEnd() {
        const curTime = getCurrentTime();
        if (curTime <= start.value) {
          i("当前时间比起始时间还早，插入结束时间失败");
          return;
        }
        end.value = curTime;
        if (Number(slider12.value) > Number(slider22.value))
          slider12.value = curTime;
        else
          slider22.value = curTime;
      }
      vue.onMounted(() => {
        if (!collectionInfos.value.length)
          return;
        curSelectingCollectionId2.value = selectingCollectionId.value;
      });
      function confirmAddMusic() {
        const musicInfo = {
          id: nanoid$1(),
          bvid: getBvid(),
          title: title.value,
          start: start.value,
          end: end.value,
          createdAt: (/* @__PURE__ */ new Date()).getTime(),
          up: getCurUpInfo(),
          pic: getCurVideoPic(),
          p: getCurP()
        };
        const musics = collections.value[curSelectingCollectionId2.value];
        musics.push(musicInfo);
        i("添加成功！", {
          type: "success"
        });
        isShowAddPage$1.value = false;
      }
      vue.watch([slider12, slider22], (values) => {
        const [string1, string2] = values;
        const number1 = Number(string1);
        const number2 = Number(string2);
        if (number1 <= number2) {
          start.value = number1;
          end.value = number2;
        } else {
          start.value = number2;
          end.value = number1;
        }
      });
      function getWidthRateStyle(num) {
        return {
          width: `${Number(num.toFixed(2)) / getDuration() * 100}%`,
          height: "100%"
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$s, [
          vue.createElementVNode("div", _hoisted_2$k, [
            vue.createElementVNode("button", {
              class: "btn bg-[#fc80a1]",
              onClick: _cache[0] || (_cache[0] = ($event) => isShowAddPage$1.value = false)
            }, " ← "),
            vue.createElementVNode("button", {
              class: "btn bg-[#fc80a1]",
              onClick: confirmAddMusic
            }, " 确认添加 ")
          ]),
          _hoisted_3$e,
          vue.createElementVNode("div", _hoisted_4$c, [
            vue.createElementVNode("div", _hoisted_5$8, [
              _hoisted_6$7,
              vue.withDirectives(vue.createElementVNode("select", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(curSelectingCollectionId2) ? curSelectingCollectionId2.value = $event : null),
                class: "select select-bordered w-full max-w-xs"
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(collectionInfos), (collection) => {
                  return vue.openBlock(), vue.createElementBlock("option", {
                    key: collection.id,
                    label: collection.name,
                    value: collection.id
                  }, null, 8, _hoisted_7$5);
                }), 128))
              ], 512), [
                [vue.vModelSelect, vue.unref(curSelectingCollectionId2)]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_8$4, [
              _hoisted_9$3,
              vue.createElementVNode("div", _hoisted_10$3, vue.toDisplayString(vue.unref(getBvid)()), 1)
            ]),
            vue.createElementVNode("div", _hoisted_11$2, [
              _hoisted_12$1,
              vue.createElementVNode("div", _hoisted_13$1, vue.toDisplayString(vue.unref(getCurUpInfo)().name), 1)
            ]),
            vue.createElementVNode("div", _hoisted_14$1, [
              _hoisted_15$1,
              vue.createElementVNode("div", _hoisted_16$1, [
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(title) ? title.value = $event : null),
                  type: "textarea",
                  placeholder: "请输入标题",
                  class: "input input-bordered w-full box-border inline-block"
                }, null, 512), [
                  [vue.vModelText, vue.unref(title)]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_17$1, [
              _hoisted_18$1,
              vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(start))), 1),
              vue.createElementVNode("button", {
                class: "btn bg-[#fc80a1]",
                onClick: insertCurrentTimeToStart
              }, " 插入当前 "),
              vue.createElementVNode("button", {
                class: "btn bg-[#fc80a1]",
                onClick: _cache[3] || (_cache[3] = ($event) => {
                  vue.unref(videoDom2).currentTime = vue.unref(start);
                  vue.unref(videoDom2).play();
                })
              }, " 播放 ")
            ]),
            vue.createElementVNode("div", _hoisted_19$1, [
              _hoisted_20$1,
              vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(end))), 1),
              vue.createElementVNode("button", {
                class: "btn bg-[#fc80a1]",
                onClick: insertCurrentTimeToEnd
              }, " 插入当前 "),
              vue.createElementVNode("button", {
                class: "btn bg-[#fc80a1]",
                onClick: _cache[4] || (_cache[4] = ($event) => {
                  vue.unref(videoDom2).currentTime = vue.unref(end) - 5;
                  vue.unref(videoDom2).play();
                })
              }, " 播放前 5 秒 ")
            ]),
            vue.createElementVNode("div", _hoisted_21$1, [
              vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(start))), 1),
              vue.createElementVNode("div", _hoisted_22$1, [
                vue.createElementVNode("div", _hoisted_23$1, [
                  vue.createElementVNode("div", {
                    style: vue.normalizeStyle(getWidthRateStyle(vue.unref(start)))
                  }, null, 4),
                  vue.createElementVNode("div", {
                    style: vue.normalizeStyle(getWidthRateStyle(vue.unref(end) - vue.unref(start))),
                    class: "bg-[#fc80a1]"
                  }, null, 4),
                  _hoisted_24$1
                ]),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(slider12) ? slider12.value = $event : null),
                  class: "w-full absolute top-6px",
                  step: "any",
                  type: "range",
                  max: vue.unref(getDuration)(),
                  min: "0"
                }, null, 8, _hoisted_25$1), [
                  [vue.vModelText, vue.unref(slider12)]
                ]),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.isRef(slider22) ? slider22.value = $event : null),
                  class: "w-full absolute top-6px",
                  step: "any",
                  type: "range",
                  max: vue.unref(getDuration)(),
                  min: "0"
                }, null, 8, _hoisted_26$1), [
                  [vue.vModelText, vue.unref(slider22)]
                ])
              ]),
              vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(end))), 1)
            ]),
            vue.createElementVNode("div", _hoisted_27, [
              vue.createVNode(_sfc_main$y)
            ]),
            vue.createElementVNode("div", _hoisted_28, [
              vue.createElementVNode("div", null, [
                vue.createVNode(_sfc_main$z)
              ])
            ])
          ])
        ]);
      };
    }
  });
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const curCollectionFirstMusic = vue.computed(() => {
        if (!curShowCollectionMusics.value.length)
          return;
        const index = curShowCollectionMusics.value.findIndex((music) => {
          if (music.id === curPlayingMusicId.value)
            return true;
          if (music.id === tempMusicId.value)
            return true;
          return false;
        });
        if (index !== -1)
          return curShowCollectionMusics.value[index];
        return curShowCollectionMusics.value[0];
      });
      return (_ctx, _cache) => {
        return vue.unref(curCollectionFirstMusic) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "absolute top-0 left-0 w-full h-full",
          style: vue.normalizeStyle({
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,.2), rgba(255,255,255,.3), rgba(255,255,255)), url(${vue.unref(curCollectionFirstMusic).pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(30px)",
            zIndex: -100
          })
        }, null, 4)) : vue.createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode("button", {
            class: "btn bg-black text-white",
            onClick: _cache[0] || (_cache[0] = ($event) => isShowAddPage$1.value = true)
          }, " + 将当前视频添加到歌单 ")
        ]);
      };
    }
  });
  const contextMenuTop$2 = vue.ref(0);
  const contextMenuLeft$2 = vue.ref(0);
  const isShowContextMenu$1 = vue.ref(false);
  const curContextMenuMusicId = vue.ref("");
  function blurHandle$2() {
    curContextMenuMusicId.value = "";
    isShowContextMenu$1.value = false;
  }
  function deleteHandle() {
    const musicIndex = collections.value[selectingCollectionId.value].findIndex(
      (music) => music.id === curContextMenuMusicId.value
    );
    if (musicIndex === -1) {
      i("没有找到对应的歌曲，删除失败");
      return;
    }
    collections.value[selectingCollectionId.value].splice(musicIndex, 1);
    i("删除成功");
    isShowContextMenu$1.value = false;
  }
  function editMusicHandle() {
    const curMusic2 = curShowCollectionMusics.value.find((music) => music.id === curContextMenuMusicId.value);
    if (!curMusic2) {
      i("没有找到要编辑的歌");
      return;
    }
    Object.assign(editingMusicInfo.value, curMusic2);
    editingMusicId.value = curContextMenuMusicId.value;
    isShowContextMenu$1.value = false;
  }
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.unref(isShowContextMenu$1) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          id: "music-context-menu",
          class: "w-150px bg-white shadow-lg rounded fixed",
          style: vue.normalizeStyle({
            top: `${vue.unref(contextMenuTop$2)}px`,
            left: `${vue.unref(contextMenuLeft$2)}px`
          }),
          tabindex: "0",
          onBlur: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => vue.unref(blurHandle$2) && vue.unref(blurHandle$2)(...args))
        }, [
          vue.createElementVNode("div", {
            class: "p-10px hover:bg-gray-100 cursor-pointer",
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => vue.unref(editMusicHandle) && vue.unref(editMusicHandle)(...args))
          }, " 编辑 "),
          vue.createElementVNode("div", {
            class: "p-10px hover:bg-gray-100 cursor-pointer text-red",
            onClick: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => vue.unref(deleteHandle) && vue.unref(deleteHandle)(...args))
          }, " 删除 ")
        ], 36)) : vue.createCommentVNode("", true);
      };
    }
  });
  function miniImg(data) {
    const { url } = data;
    let { height, width } = data;
    height = height || 120;
    width = width || 160;
    return `${url}@${width}w_${height}h_1c_!web-search-common-cover.avif`;
  }
  const _hoisted_1$r = ["data-bvid"];
  const _hoisted_2$j = { class: "flex w-150px shrink-0" };
  const _hoisted_3$d = { class: "w-42px shrink-0" };
  const _hoisted_4$b = ["src"];
  const _hoisted_5$7 = { class: "flex gap-6px" };
  const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      index: {},
      music: {}
    },
    setup(__props) {
      const props = __props;
      async function showContextMenu2(event, curMusic2) {
        const musicPane = document.getElementById("music-pane");
        if (!musicPane)
          return;
        const musicListContent = document.getElementById("music-list-content");
        if (!musicListContent)
          return;
        const { offsetLeft, offsetTop } = musicPane;
        const { offsetLeft: offsetLeft1, offsetTop: offsetTop1 } = musicListContent;
        const { layerX, layerY } = event;
        contextMenuLeft$2.value = layerX + offsetLeft + offsetLeft1;
        contextMenuTop$2.value = layerY + offsetTop + offsetTop1;
        isShowContextMenu$1.value = true;
        await vue.nextTick();
        const contextMenuDom = document.getElementById("music-context-menu");
        if (!contextMenuDom)
          return;
        contextMenuDom.focus();
        curContextMenuMusicId.value = curMusic2.id;
      }
      function openUpSpace(mid) {
        window.open(`https://space.bilibili.com/${mid}`);
      }
      function isCurPlaying() {
        const { music } = props;
        const { id } = music;
        if (curPlayingMusicId.value === id)
          return true;
        if (tempMusicId.value === id)
          return true;
        return false;
      }
      function getMusicClass() {
        if (isCurPlaying())
          return "bg-black text-white";
        if (props.music.id === curContextMenuMusicId.value)
          return "bg-gray-100";
        return "hover:bg-gray-100";
      }
      function clickMusicHandle() {
        playList.value = curShowCollectionMusics.value;
        playMusic(props.music);
        if (playMode.value === EPlayMode.随机播放)
          randomHandle();
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["flex w-full items-start p-10px cursor-pointer rounded-lg font-bold", getMusicClass()]),
          "data-bvid": _ctx.music.bvid,
          onClick: clickMusicHandle,
          onContextmenu: _cache[1] || (_cache[1] = vue.withModifiers(($event) => showContextMenu2($event, _ctx.music), ["prevent"]))
        }, [
          vue.createElementVNode("div", _hoisted_2$j, [
            vue.createElementVNode("div", _hoisted_3$d, vue.toDisplayString(_ctx.index + 1), 1),
            vue.createElementVNode("div", null, [
              vue.createElementVNode("img", {
                src: vue.unref(miniImg)({ url: _ctx.music.pic, width: 80, height: 60 }),
                class: "rounded",
                alt: ""
              }, null, 8, _hoisted_4$b)
            ])
          ]),
          vue.createElementVNode("div", {
            style: vue.normalizeStyle(vue.unref(getWidthStyle)("title"))
          }, [
            vue.createElementVNode("div", _hoisted_5$7, [
              vue.createElementVNode("div", null, vue.toDisplayString(_ctx.music.title), 1)
            ])
          ], 4),
          vue.createElementVNode("div", {
            style: vue.normalizeStyle(vue.unref(getWidthStyle)("up")),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => openUpSpace(_ctx.music.up.mid), ["stop"]))
          }, vue.toDisplayString(_ctx.music.up.name), 5),
          vue.createElementVNode("div", {
            style: vue.normalizeStyle(vue.unref(getWidthStyle)("duration"))
          }, vue.toDisplayString(vue.unref(secondFormatToLength)(_ctx.music.end - _ctx.music.start)), 5)
        ], 42, _hoisted_1$r);
      };
    }
  });
  let globalDragHookId = "";
  function useDrag(list, dragable = false) {
    const isSorting = vue.ref(dragable);
    const dragIndex = vue.ref(-1);
    const dragId = vue.ref(-1);
    const curHookId = nanoid$1();
    function dragstart(index, id) {
      if (!isSorting.value)
        return;
      globalDragHookId = curHookId;
      dragIndex.value = index;
      dragId.value = id;
    }
    function dragenter(e, index, hookId = "") {
      if (hookId && hookId !== globalDragHookId)
        return;
      if (!isSorting.value || dragIndex.value === index)
        return;
      e.preventDefault();
      const dragingChapter = list.value[dragIndex.value];
      list.value.splice(dragIndex.value, 1);
      list.value.splice(index, 0, dragingChapter);
      dragIndex.value = index;
    }
    function dragover(e) {
      e.preventDefault();
    }
    return {
      isSorting,
      dragIndex,
      dragId,
      dragstart,
      dragenter,
      dragover,
      hookId: curHookId
    };
  }
  const _hoisted_1$q = {
    key: 0,
    class: "w-full h-full flex flex-col"
  };
  const _hoisted_2$i = { class: "flex p-16px text-lg shrink-0" };
  const _hoisted_3$c = /* @__PURE__ */ vue.createElementVNode("div", { class: "w-150px shrink-0" }, " # ", -1);
  const _hoisted_4$a = ["draggable", "onDragstart", "onDragenter"];
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const {
        isSorting,
        dragstart,
        dragenter,
        dragover
      } = useDrag(curShowCollectionMusics, true);
      return (_ctx, _cache) => {
        return vue.unref(curShowCollectionMusics).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$q, [
          vue.createElementVNode("div", _hoisted_2$i, [
            _hoisted_3$c,
            vue.createElementVNode("div", {
              style: vue.normalizeStyle(vue.unref(getWidthStyle)("title"))
            }, " 标题 ", 4),
            vue.createElementVNode("div", {
              style: vue.normalizeStyle(vue.unref(getWidthStyle)("up"))
            }, " UP ", 4),
            vue.createElementVNode("div", {
              style: vue.normalizeStyle(vue.unref(getWidthStyle)("duration"))
            }, " 时长 ", 4)
          ]),
          vue.createVNode(vue.TransitionGroup, {
            id: "music-list-content",
            name: "drag",
            class: "text-lg p-6px flex flex-col gap-15px overflow-y-scroll h-full relative div-font-style text-white",
            tag: "div"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(curShowCollectionMusics), (music, musicIndex) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: music.id,
                  class: "flex w-full",
                  draggable: vue.unref(isSorting),
                  onDragstart: ($event) => vue.unref(dragstart)(musicIndex, music.id),
                  onDragenter: ($event) => vue.unref(dragenter)($event, musicIndex),
                  onDragover: _cache[0] || (_cache[0] = ($event) => vue.unref(dragover)($event))
                }, [
                  vue.createVNode(_sfc_main$t, {
                    music,
                    index: musicIndex
                  }, null, 8, ["music", "index"])
                ], 40, _hoisted_4$a);
              }), 128))
            ]),
            _: 1
          }),
          vue.createVNode(_sfc_main$u)
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$p = {
    key: 0,
    class: "flex px-16px gap-16px h-full min-h-0"
  };
  const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.unref(curShowCollectionMusics).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$p, [
          vue.createVNode(_sfc_main$s)
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$o = {
    id: "music-info",
    class: "box-border flex flex-col gap-30px p-15px rounded-lg bg-white/30 text-lg"
  };
  const _hoisted_2$h = {
    key: 0,
    class: "w-full flex flex-col gap-30px font-bold"
  };
  const _hoisted_3$b = ["src"];
  const _hoisted_4$9 = { class: "flex flex-col gap-6px" };
  const _hoisted_5$6 = /* @__PURE__ */ vue.createElementVNode("span", null, "正在播放：", -1);
  const _hoisted_6$6 = { class: "text-blue" };
  const _hoisted_7$4 = { class: "text-blue" };
  const _hoisted_8$3 = {
    key: 1,
    class: "w-360px"
  };
  const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$o, [
          vue.unref(curMusic) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$h, [
            vue.createElementVNode("img", {
              class: "rounded-lg",
              src: vue.unref(curMusic).pic,
              alt: ""
            }, null, 8, _hoisted_3$b),
            vue.createElementVNode("div", _hoisted_4$9, [
              vue.createElementVNode("div", null, [
                _hoisted_5$6,
                vue.createElementVNode("span", _hoisted_6$6, vue.toDisplayString(vue.unref(curMusic).title), 1)
              ]),
              vue.createElementVNode("div", null, [
                vue.createTextVNode(" UP: "),
                vue.createElementVNode("span", _hoisted_7$4, vue.toDisplayString(vue.unref(curMusic).up.name), 1)
              ]),
              vue.createElementVNode("div", null, " 收藏于: " + vue.toDisplayString(vue.unref(dateFormatToString)(vue.unref(curMusic).createdAt)), 1),
              vue.createElementVNode("div", null, " 时长: " + vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(curMusic).end - vue.unref(curMusic).start)), 1)
            ])
          ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$3, " 当前未播放音乐 "))
        ]);
      };
    }
  });
  const _hoisted_1$n = {
    key: 0,
    id: "collection-title",
    class: "py-16px px-20px flex gap-10px shrink-0"
  };
  const _hoisted_2$g = { class: "text-24px flex font-bold items-center div-font-style text-white gap-6px" };
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function playAll() {
        playList.value = curShowCollectionMusics.value;
        if (playMode.value === EPlayMode.随机播放) {
          randomHandle();
          playRandomMusic();
          return;
        }
        playMusic(playList.value[0]);
      }
      return (_ctx, _cache) => {
        return vue.unref(curCollectionInfo) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [
          vue.createElementVNode("div", _hoisted_2$g, [
            vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(curCollectionInfo).name), 1),
            vue.createElementVNode("div", null, " (" + vue.toDisplayString(vue.unref(curShowCollectionMusics).length) + ") ", 1)
          ]),
          vue.unref(curShowCollectionMusics).length ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "btn",
            onClick: playAll
          }, " 播放全部 ")) : vue.createCommentVNode("", true)
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$m = {
    id: "music-pane",
    class: "flex flex-col h-full w-full min-h-0"
  };
  const _hoisted_2$f = { class: "flex px-16px gap-16px h-full min-h-0 relative" };
  const _hoisted_3$a = { class: "max-w-30% min-w-200px" };
  const _hoisted_4$8 = { class: "pt-15px max-w-384px" };
  const _hoisted_5$5 = { class: "w-full h-full flex flex-col min-h-0" };
  const _hoisted_6$5 = {
    key: 0,
    class: "p-10px text-lg font-bold"
  };
  const _hoisted_7$3 = {
    key: 1,
    class: "h-full flex justify-center items-center text-lg text-gray"
  };
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$m, [
          vue.createElementVNode("div", _hoisted_2$f, [
            vue.createElementVNode("div", _hoisted_3$a, [
              vue.createElementVNode("div", _hoisted_4$8, [
                vue.createVNode(_sfc_main$q)
              ])
            ]),
            vue.createElementVNode("div", _hoisted_5$5, [
              !vue.unref(curCollectionInfo) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$5, " 当前未选中歌单 ")) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createVNode(_sfc_main$p),
                vue.unref(curShowCollectionMusics).length ? (vue.openBlock(), vue.createBlock(_sfc_main$r, { key: 0 })) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_7$3, [
                  vue.createTextVNode(" 该歌单暂无歌曲，可以进入一个视频页面，添加一首试试。"),
                  vue.createVNode(_sfc_main$v)
                ]))
              ], 64))
            ])
          ])
        ]);
      };
    }
  });
  const isShowAddCollectionInput = vue.ref(false);
  const editName = vue.ref("");
  async function showAddCollectionInput() {
    isShowAddCollectionInput.value = true;
    await vue.nextTick();
    const addDom = document.getElementById("add-collection-input");
    if (!addDom)
      return;
    addDom.focus();
  }
  function blurHandle$1() {
    confirmAddCollection();
    isShowAddCollectionInput.value = false;
    editName.value = "";
  }
  function dispatchBlur() {
    const addDom = document.getElementById("add-collection-input");
    if (!addDom)
      return;
    addDom.blur();
  }
  function enterHandle() {
    dispatchBlur();
  }
  async function confirmAddCollection() {
    if (!editName.value) {
      i("请输入歌单名称！");
      return;
    }
    const id = nanoid$1();
    const newCollection = {
      name: editName.value,
      id,
      createAt: (/* @__PURE__ */ new Date()).getTime()
    };
    collectionInfos.value.push(newCollection);
    collections.value[id] = [];
    await vue.nextTick();
    selectCollectionById(id);
  }
  const _hoisted_1$l = {
    key: 0,
    class: "p-10px box-border"
  };
  const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.unref(isShowAddCollectionInput) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$l, [
          vue.withDirectives(vue.createElementVNode("input", {
            id: "add-collection-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(editName) ? editName.value = $event : null),
            placeholder: "请输入歌单名称",
            class: "w-full p-10px box-border",
            onBlur: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => vue.unref(blurHandle$1) && vue.unref(blurHandle$1)(...args)),
            onKeydown: _cache[2] || (_cache[2] = vue.withKeys(
              //@ts-ignore
              (...args) => vue.unref(enterHandle) && vue.unref(enterHandle)(...args),
              ["enter"]
            ))
          }, null, 544), [
            [vue.vModelText, vue.unref(editName)]
          ])
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const curEditingCollectionId = vue.ref("");
  const contextMenuTop$1 = vue.ref(0);
  const contextMenuLeft$1 = vue.ref(0);
  const isShowContextMenu = vue.ref(false);
  const curContextMenuCollectionId = vue.ref("");
  function blurHandle() {
    curContextMenuCollectionId.value = "";
    isShowContextMenu.value = false;
  }
  async function showContextMenu(event, collectionId) {
    if (collectionId === defaultCollectionId.value) {
      i.error("默认歌单不能操作");
      return;
    }
    const { layerX, layerY } = event;
    contextMenuLeft$1.value = layerX;
    contextMenuTop$1.value = layerY;
    isShowContextMenu.value = true;
    await vue.nextTick();
    const contextMenuDom = document.getElementById("collection-context-menu");
    if (!contextMenuDom)
      return;
    contextMenuDom.focus();
    curContextMenuCollectionId.value = collectionId;
  }
  async function editCollectionHandle() {
    curEditingCollectionId.value = curContextMenuCollectionId.value;
    await vue.nextTick();
    const collectionDom = document.getElementById(`input-collection-id-${curContextMenuCollectionId.value}`);
    if (!collectionDom)
      return;
    collectionDom.focus();
  }
  function deleteCollectionHandle() {
    const curCollectionIndex = collectionInfos.value.findIndex((item) => item.id === curContextMenuCollectionId.value);
    if (curCollectionIndex === -1) {
      i("未找到要删除的歌单，删除失败！");
      return;
    }
    collectionInfos.value.splice(curCollectionIndex, 1);
    isShowContextMenu.value = false;
    delete collections.value[curContextMenuCollectionId.value];
    curContextMenuCollectionId.value = "";
  }
  const _hoisted_1$k = { key: 1 };
  const _hoisted_2$e = ["id", "value"];
  const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      collectionInfo: {}
    },
    setup(__props) {
      const props = __props;
      const collectionInfoRef = vue.toRef(props, "collectionInfo");
      const editName2 = vue.ref(props.collectionInfo.name);
      function blurHandle2() {
        curEditingCollectionId.value = "";
        collectionInfoRef.value.name = editName2.value;
      }
      function getCollectionClass() {
        if (props.collectionInfo.id === selectingCollectionId.value)
          return "bg-black text-white";
        return "hover:bg-gray-300";
      }
      return (_ctx, _cache) => {
        return vue.unref(curEditingCollectionId) !== _ctx.collectionInfo.id ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(["p-10px m-5px rounded-lg box-border font-bold", getCollectionClass()]),
          onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(selectCollection)(_ctx.collectionInfo.id)),
          onContextmenu: _cache[1] || (_cache[1] = vue.withModifiers(($event) => vue.unref(showContextMenu)($event, _ctx.collectionInfo.id), ["prevent"]))
        }, vue.toDisplayString(_ctx.collectionInfo.name), 35)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$k, [
          vue.withDirectives(vue.createElementVNode("input", {
            id: `input-collection-id-${_ctx.collectionInfo.id}`,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(editName2) ? editName2.value = $event : null),
            value: vue.unref(editName2),
            class: "w-full p-10px box-border",
            onBlur: blurHandle2,
            onKeydown: _cache[3] || (_cache[3] = vue.withKeys(($event) => curEditingCollectionId.value = "", ["enter"]))
          }, null, 40, _hoisted_2$e), [
            [vue.vModelText, vue.unref(editName2)]
          ])
        ]));
      };
    }
  });
  const _hoisted_1$j = { class: "relative" };
  const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$j, [
          vue.unref(isShowContextMenu) ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            id: "collection-context-menu",
            class: "w-150px bg-white shadow-lg rounded fixed z-9999",
            style: vue.normalizeStyle({
              top: `${vue.unref(contextMenuTop$1)}px`,
              left: `${vue.unref(contextMenuLeft$1)}px`
            }),
            tabindex: "0",
            onBlur: _cache[2] || (_cache[2] = //@ts-ignore
            (...args) => vue.unref(blurHandle) && vue.unref(blurHandle)(...args))
          }, [
            vue.createElementVNode("div", {
              class: "p-10px hover:bg-gray-100 cursor-pointer",
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => vue.unref(editCollectionHandle) && vue.unref(editCollectionHandle)(...args))
            }, " 编辑 "),
            vue.createElementVNode("div", {
              class: "p-10px hover:bg-gray-100 cursor-pointer text-red",
              onClick: _cache[1] || (_cache[1] = //@ts-ignore
              (...args) => vue.unref(deleteCollectionHandle) && vue.unref(deleteCollectionHandle)(...args))
            }, " 删除 ")
          ], 36)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const isShowMoreContextMenu = vue.ref(false);
  const contextMenuTop = vue.ref(0);
  const contextMenuLeft = vue.ref(0);
  function blurCollectionMoreMenuHandle() {
    isShowMoreContextMenu.value = false;
  }
  async function showMoreContextMenu(event) {
    const { offsetTop, offsetLeft, offsetHeight } = event.target;
    console.dir(event.target);
    contextMenuLeft.value = offsetLeft;
    contextMenuTop.value = offsetTop + offsetHeight;
    isShowMoreContextMenu.value = true;
    await vue.nextTick();
    const collectionMreMenuDom = document.getElementById("collection-more-menu");
    if (!collectionMreMenuDom)
      return;
    collectionMreMenuDom.focus();
  }
  const _hoisted_1$i = { class: "relative" };
  const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function onClickImportItem() {
        openImportDialogHandle();
        blurCollectionMoreMenuHandle();
      }
      function onClickExportItem() {
        openExportDialogHandle();
        blurCollectionMoreMenuHandle();
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, [
          vue.unref(isShowMoreContextMenu) ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            id: "collection-more-menu",
            class: "w-150px bg-white shadow-lg rounded fixed z-9999",
            style: vue.normalizeStyle({
              top: `${vue.unref(contextMenuTop)}px`,
              left: `${vue.unref(contextMenuLeft)}px`
            }),
            tabindex: "0",
            onBlur: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => vue.unref(blurCollectionMoreMenuHandle) && vue.unref(blurCollectionMoreMenuHandle)(...args))
          }, [
            vue.createElementVNode("div", {
              class: "p-10px hover:bg-gray-100 cursor-pointer",
              onClick: onClickImportItem
            }, " 导入 "),
            vue.createElementVNode("div", {
              class: "p-10px hover:bg-gray-100 cursor-pointer text-red",
              onClick: onClickExportItem
            }, " 导出 ")
          ], 36)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const _hoisted_1$h = { class: "w-300px shrink-0 bg-gray-100/50 h-full flex flex-col" };
  const _hoisted_2$d = { class: "flex justify-between items-center p-10px shrink-0" };
  const _hoisted_3$9 = { class: "text-14px flex items-center gap-3px" };
  const _hoisted_4$7 = /* @__PURE__ */ vue.createElementVNode("div", { class: "i-carbon-list" }, null, -1);
  const _hoisted_5$4 = { class: "flex gap-6px text-18px" };
  const _hoisted_6$4 = { class: "text-lg overflow-y-scroll h-full" };
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const {
        isSorting,
        dragstart,
        dragenter,
        dragover
      } = useDrag(collectionInfos, true);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$h, [
          vue.createElementVNode("div", _hoisted_2$d, [
            vue.createElementVNode("div", _hoisted_3$9, [
              _hoisted_4$7,
              vue.createElementVNode("div", null, "歌单里列表（" + vue.toDisplayString(vue.unref(collectionInfos).length) + "）", 1)
            ]),
            vue.createElementVNode("div", _hoisted_5$4, [
              vue.createElementVNode("div", {
                class: "i-carbon-add-filled cursor-pointer",
                onClick: _cache[0] || (_cache[0] = //@ts-ignore
                (...args) => vue.unref(showAddCollectionInput) && vue.unref(showAddCollectionInput)(...args))
              }),
              vue.createElementVNode("div", {
                id: "collection-more-menu-btn",
                class: "i-carbon-overflow-menu-vertical cursor-pointer",
                onClick: _cache[1] || (_cache[1] = //@ts-ignore
                (...args) => vue.unref(showMoreContextMenu) && vue.unref(showMoreContextMenu)(...args))
              })
            ])
          ]),
          vue.createElementVNode("div", _hoisted_6$4, [
            vue.createVNode(vue.TransitionGroup, {
              name: "drag",
              class: "flex flex-col gap-3px",
              tag: "div"
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(collectionInfos), (collectionInfo, index) => {
                  return vue.openBlock(), vue.createBlock(_sfc_main$m, {
                    key: collectionInfo.id,
                    "collection-info": collectionInfo,
                    draggable: vue.unref(isSorting),
                    onDragstart: ($event) => vue.unref(dragstart)(index, collectionInfo.id),
                    onDragenter: ($event) => vue.unref(dragenter)($event, index),
                    onDragover: _cache[2] || (_cache[2] = ($event) => vue.unref(dragover)($event))
                  }, null, 8, ["collection-info", "draggable", "onDragstart", "onDragenter"]);
                }), 128))
              ]),
              _: 1
            }),
            vue.createVNode(_sfc_main$n),
            vue.createVNode(_sfc_main$l),
            vue.createVNode(_sfc_main$k)
          ])
        ]);
      };
    }
  });
  const _hoisted_1$g = { class: "flex h-full min-h-0" };
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
          vue.createVNode(_sfc_main$j),
          vue.createVNode(_sfc_main$o)
        ]);
      };
    }
  });
  const _hoisted_1$f = { class: "text-lg" };
  const _hoisted_2$c = { class: "px-10px pt-10px flex justify-between" };
  const _hoisted_3$8 = /* @__PURE__ */ vue.createElementVNode("div", { class: "divider" }, null, -1);
  const _hoisted_4$6 = { class: "p-20px flex flex-col gap-30px" };
  const _hoisted_5$3 = { class: "flex items-center gap-10px" };
  const _hoisted_6$3 = /* @__PURE__ */ vue.createElementVNode("div", null, " bv 号 ", -1);
  const _hoisted_7$2 = { class: "text-gray" };
  const _hoisted_8$2 = { class: "flex items-center gap-10px" };
  const _hoisted_9$2 = /* @__PURE__ */ vue.createElementVNode("div", null, " 分P ", -1);
  const _hoisted_10$2 = { class: "text-gray" };
  const _hoisted_11$1 = { class: "flex items-center gap-10px w-full" };
  const _hoisted_12 = /* @__PURE__ */ vue.createElementVNode("div", { class: "shrink-0" }, " 标题 ", -1);
  const _hoisted_13 = { class: "w-full" };
  const _hoisted_14 = { key: 0 };
  const _hoisted_15 = { class: "flex items-center gap-10px" };
  const _hoisted_16 = /* @__PURE__ */ vue.createElementVNode("div", null, " 起始时间 ", -1);
  const _hoisted_17 = { class: "flex items-center gap-10px" };
  const _hoisted_18 = /* @__PURE__ */ vue.createElementVNode("div", null, " 结束时间 ", -1);
  const _hoisted_19 = { class: "flex items-center gap-3" };
  const _hoisted_20 = { class: "w-full relative h-10px" };
  const _hoisted_21 = { class: "w-full absolute bg-gray-100 h-full flex rounded overflow-hidden" };
  const _hoisted_22 = /* @__PURE__ */ vue.createElementVNode("div", { class: "flex-grow h-full" }, null, -1);
  const _hoisted_23 = ["max"];
  const _hoisted_24 = ["max"];
  const _hoisted_25 = { class: "w-full relative h-10px" };
  const _hoisted_26 = { class: "flex justify-center" };
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const isShowRegionPane = vue.computed(() => {
        return editingMusicInfo.value.bvid === curPlayingBvid.value;
      });
      function showRegionPaneHandle() {
        if (isMusicToggleInEditPaneLoading.value)
          return;
        isMusicToggleInEditPaneLoading.value = true;
        playMusic(editingMusicInfo.value);
      }
      function getWidthRateStyle(num) {
        return {
          width: `${Number(num.toFixed(2)) / editingMusicDuration.value * 100}%`,
          height: "100%"
        };
      }
      function getCurrentTime() {
        const { currentTime } = videoDom.value;
        return currentTime;
      }
      function insertCurrentTimeToStart() {
        const curTime = getCurrentTime();
        if (curTime >= editingMusicInfo.value.end) {
          i("当前的时间比结束时间还晚，无法插入起始时间");
          return;
        }
        editingMusicInfo.value.end = curTime;
        if (Number(slider1.value) <= Number(slider2.value))
          slider1.value = curTime;
        else
          slider2.value = curTime;
      }
      function insertCurrentTimeToEnd() {
        const curTime = getCurrentTime();
        if (curTime <= editingMusicInfo.value.start) {
          i("当前时间比起始时间还早，插入结束时间失败");
          return;
        }
        editingMusicInfo.value.end = curTime;
        if (Number(slider1.value) > Number(slider2.value))
          slider1.value = curTime;
        else
          slider2.value = curTime;
      }
      vue.watch([slider1, slider2], (values) => {
        const [string1, string2] = values;
        const number1 = Number(string1);
        const number2 = Number(string2);
        if (number1 <= number2) {
          editingMusicInfo.value.start = number1;
          editingMusicInfo.value.end = number2;
        } else {
          editingMusicInfo.value.start = number2;
          editingMusicInfo.value.end = number1;
        }
      });
      function playStart() {
        videoDom.value.currentTime = editingMusicInfo.value.start;
        videoDom.value.play();
      }
      function playEnd() {
        videoDom.value.currentTime = editingMusicInfo.value.end - 5;
        videoDom.value.play();
      }
      vue.onMounted(() => {
        const curBvid = getBvid();
        if (curBvid !== editingMusicInfo.value.bvid)
          return;
        onMusicToggleDoneUpdateEditPane();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$f, [
          vue.createElementVNode("div", _hoisted_2$c, [
            vue.createElementVNode("button", {
              class: "btn bg-[#fc80a1]",
              onClick: _cache[0] || (_cache[0] = ($event) => editingMusicId.value = "")
            }, " ← "),
            vue.createElementVNode("button", {
              class: "btn bg-[#fc80a1]",
              onClick: _cache[1] || (_cache[1] = //@ts-ignore
              (...args) => vue.unref(confirmEdit) && vue.unref(confirmEdit)(...args))
            }, " 确认修改 ")
          ]),
          _hoisted_3$8,
          vue.createElementVNode("div", _hoisted_4$6, [
            vue.createElementVNode("div", _hoisted_5$3, [
              _hoisted_6$3,
              vue.createElementVNode("div", _hoisted_7$2, vue.toDisplayString(vue.unref(editingMusicInfo).bvid), 1)
            ]),
            vue.createElementVNode("div", _hoisted_8$2, [
              _hoisted_9$2,
              vue.createElementVNode("div", _hoisted_10$2, vue.toDisplayString(vue.unref(editingMusicInfo).p), 1)
            ]),
            vue.createElementVNode("div", _hoisted_11$1, [
              _hoisted_12,
              vue.createElementVNode("div", _hoisted_13, [
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(editingMusicInfo).title = $event),
                  type: "textarea",
                  placeholder: "请输入标题",
                  class: "input input-bordered w-full box-border inline-block"
                }, null, 512), [
                  [vue.vModelText, vue.unref(editingMusicInfo).title]
                ])
              ])
            ]),
            vue.unref(isMusicToggleInEditPaneLoading) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_14, " 正在切换歌曲中，请稍候... ")) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.unref(isShowRegionPane) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createElementVNode("div", _hoisted_15, [
                  _hoisted_16,
                  vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(editingMusicInfo).start)), 1),
                  vue.createElementVNode("button", {
                    class: "btn bg-[#fc80a1]",
                    onClick: insertCurrentTimeToStart
                  }, " 插入当前 "),
                  vue.createElementVNode("button", {
                    class: "btn bg-[#fc80a1]",
                    onClick: playStart
                  }, " 播放 ")
                ]),
                vue.createElementVNode("div", _hoisted_17, [
                  _hoisted_18,
                  vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(editingMusicInfo).end)), 1),
                  vue.createElementVNode("button", {
                    class: "btn bg-[#fc80a1]",
                    onClick: insertCurrentTimeToEnd
                  }, " 插入当前 "),
                  vue.createElementVNode("button", {
                    class: "btn bg-[#fc80a1]",
                    onClick: playEnd
                  }, " 播放前 5 秒 ")
                ]),
                vue.createElementVNode("div", _hoisted_19, [
                  vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(editingMusicInfo).start)), 1),
                  vue.createElementVNode("div", _hoisted_20, [
                    vue.createElementVNode("div", _hoisted_21, [
                      vue.createElementVNode("div", {
                        style: vue.normalizeStyle(getWidthRateStyle(vue.unref(editingMusicInfo).start))
                      }, null, 4),
                      vue.createElementVNode("div", {
                        style: vue.normalizeStyle(getWidthRateStyle(vue.unref(editingMusicInfo).end - vue.unref(editingMusicInfo).start)),
                        class: "bg-[#fc80a1]"
                      }, null, 4),
                      _hoisted_22
                    ]),
                    vue.withDirectives(vue.createElementVNode("input", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(slider1) ? slider1.value = $event : null),
                      class: "w-full absolute top-6px",
                      step: "any",
                      type: "range",
                      max: vue.unref(editingMusicDuration),
                      min: "0"
                    }, null, 8, _hoisted_23), [
                      [vue.vModelText, vue.unref(slider1)]
                    ]),
                    vue.withDirectives(vue.createElementVNode("input", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(slider2) ? slider2.value = $event : null),
                      class: "w-full absolute top-6px",
                      step: "any",
                      type: "range",
                      max: vue.unref(editingMusicDuration),
                      min: "0"
                    }, null, 8, _hoisted_24), [
                      [vue.vModelText, vue.unref(slider2)]
                    ])
                  ]),
                  vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(editingMusicInfo).end)), 1)
                ]),
                vue.createElementVNode("div", _hoisted_25, [
                  vue.createVNode(_sfc_main$y)
                ]),
                vue.createElementVNode("div", _hoisted_26, [
                  vue.createElementVNode("div", null, [
                    vue.createVNode(_sfc_main$z)
                  ])
                ])
              ], 64)) : (vue.openBlock(), vue.createElementBlock("button", {
                key: 1,
                class: "bg-[#fc80a1] text-white btn",
                onClick: showRegionPaneHandle
              }, " 跳转至本音乐的视频页，调整播放区间 "))
            ], 64))
          ])
        ]);
      };
    }
  });
  const _hoisted_1$e = { class: "flex items-center text-30px gap-30px justify-between w-full box-border px-18px" };
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const MODE_ICON = {
        [EPlayMode.列表循环]: "i-cil-list-high-priority",
        [EPlayMode.单曲循环]: "i-cil-loop-1",
        [EPlayMode.随机播放]: "i-lets-icons-sort-random",
        [EPlayMode.播完暂停]: "i-material-symbols-1x-mobiledata-badge-outline"
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass([MODE_ICON[vue.unref(playMode)]]),
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => vue.unref(changePlayMode) && vue.unref(changePlayMode)(...args))
          }, null, 2),
          vue.createElementVNode("div", {
            class: "i-carbon-skip-back",
            onClick: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => vue.unref(playPre) && vue.unref(playPre)(...args))
          }),
          vue.createVNode(_sfc_main$z),
          vue.createElementVNode("div", {
            class: "i-carbon-skip-forward",
            onClick: _cache[2] || (_cache[2] = //@ts-ignore
            (...args) => vue.unref(playNext) && vue.unref(playNext)(...args))
          })
        ]);
      };
    }
  });
  const isShowPlayListPane = vue.ref(false);
  async function blurPlayListHandle() {
    isShowPlayListPane.value = false;
  }
  async function focusPlayList() {
    await vue.nextTick();
    const playListPaneDom = document.getElementById("play-list-pane");
    if (!playListPaneDom)
      return;
    playListPaneDom.focus();
  }
  async function clickPlayListBtnHandle() {
    isShowPlayListPane.value = !isShowPlayListPane.value;
    if (isShowPlayListPane.value)
      focusPlayList();
  }
  const _hoisted_1$d = { class: "w-30px shrink-0" };
  const _hoisted_2$b = ["src"];
  const _hoisted_3$7 = { class: "w-full" };
  const _hoisted_4$5 = { class: "w-90px shrink-0" };
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      music: {},
      index: {}
    },
    setup(__props) {
      const props = __props;
      function isCurPlaying() {
        const { music } = props;
        const { id } = music;
        if (curPlayingMusicId.value === id)
          return true;
        if (tempMusicId.value === id)
          return true;
        return false;
      }
      function getMusicClass() {
        if (isCurPlaying())
          return "bg-black text-white";
        return "hover:bg-white hover:shadow";
      }
      function clickMusicHandle() {
        playMusic(props.music);
        if (playMode.value === EPlayMode.随机播放)
          randomHandle();
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["mx-10px p-10px flex items-center gap-10px cursor-pointer rounded-lg", getMusicClass()]),
          onClick: clickMusicHandle
        }, [
          vue.createElementVNode("div", _hoisted_1$d, vue.toDisplayString(_ctx.index + 1), 1),
          vue.createElementVNode("img", {
            src: vue.unref(miniImg)({ url: _ctx.music.pic, width: 80, height: 60 }),
            class: "shrink-0",
            alt: ""
          }, null, 8, _hoisted_2$b),
          vue.createElementVNode("div", _hoisted_3$7, vue.toDisplayString(_ctx.music.title), 1),
          vue.createElementVNode("div", _hoisted_4$5, vue.toDisplayString(vue.unref(secondFormatToLength)(_ctx.music.end - _ctx.music.start)), 1)
        ], 2);
      };
    }
  });
  const _hoisted_1$c = /* @__PURE__ */ vue.createElementVNode("div", { class: "flex justify-between p-10px shrink-0" }, [
    /* @__PURE__ */ vue.createElementVNode("div", { class: "font-bold text-18px" }, " 播放列表 ")
  ], -1);
  const _hoisted_2$a = { class: "h-full min-h-0 overflow-y-scroll" };
  const _hoisted_3$6 = {
    key: 0,
    class: "h-full text-12px text-gray-400 text-24px flex justify-center items-center"
  };
  const _hoisted_4$4 = {
    key: 1,
    class: "flex flex-col"
  };
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.unref(isShowPlayListPane) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          id: "play-list-pane",
          class: "w-600px h-600px shadow-lg rounded absolute top-0 left-0 flex flex-col bg-gray-100",
          style: { "transform": "translateY(-100%) translateX(-100%)" },
          tabindex: "0",
          onBlur: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => vue.unref(blurPlayListHandle) && vue.unref(blurPlayListHandle)(...args))
        }, [
          _hoisted_1$c,
          vue.createElementVNode("div", _hoisted_2$a, [
            !vue.unref(playList).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$6, " 暂无歌曲 ")) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$4, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(playList), (music, index) => {
                return vue.openBlock(), vue.createBlock(_sfc_main$f, {
                  key: index,
                  music,
                  index
                }, null, 8, ["music", "index"]);
              }), 128))
            ]))
          ])
        ], 32)) : vue.createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$b = { class: "relative" };
  const _hoisted_2$9 = {
    key: 0,
    class: "i-material-symbols-playlist-play text-30px shrink-0"
  };
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
          vue.unref(isShowPlayListPane) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$9)) : (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: "i-material-symbols-playlist-play text-30px shrink-0",
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => vue.unref(clickPlayListBtnHandle) && vue.unref(clickPlayListBtnHandle)(...args))
          })),
          vue.createVNode(_sfc_main$e)
        ]);
      };
    }
  });
  const _hoisted_1$a = { class: "w-300px h-full shrink-0 box-border flex px-10px items-center gap-10px" };
  const _hoisted_2$8 = ["src"];
  const _hoisted_3$5 = { class: "text-18px flex flex-col gap-10px" };
  const _hoisted_4$3 = { class: "truncate w-200px" };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
          vue.unref(curMusic) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createElementVNode("img", {
              class: vue.normalizeClass(["rounded-full border-12px border-black border-solid", { "dht-music-cover-roll": !vue.unref(isVideoPaused) }]),
              src: vue.unref(miniImg)({
                url: vue.unref(curMusic).pic,
                height: 42,
                width: 42
              }),
              alt: ""
            }, null, 10, _hoisted_2$8),
            vue.createElementVNode("div", _hoisted_3$5, [
              vue.createElementVNode("div", _hoisted_4$3, vue.toDisplayString(vue.unref(curMusic).title), 1)
            ])
          ], 64)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const _hoisted_1$9 = { class: "flex items-center gap-3 w-full px-30px text-18px" };
  const _hoisted_2$7 = ["max"];
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function seekingHandle() {
        videoDom.value.currentTime = Number(musicCurTime.value) + curListenStart.value;
      }
      function mouseDownHandle(event) {
        const parentDom = event.target;
        if (!parentDom)
          return;
        if (!parentDom.children.length)
          return;
        const inputDom = parentDom.children[0];
        const roundedValue = getRoundedValue(event, inputDom);
        videoDom.value.currentTime = roundedValue + curListenStart.value;
      }
      function getRoundedValue(event, inputDom) {
        const clickX = event.clientX;
        const rangeWidth = inputDom.offsetWidth;
        const rangeMin = Number(inputDom.min);
        const rangeMax = Number(inputDom.max);
        const value = (clickX - inputDom.getBoundingClientRect().left) / rangeWidth * (rangeMax - rangeMin) + rangeMin;
        const roundedValue = Math.round(value);
        return roundedValue;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
          vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(videoCurTime) - vue.unref(curListenStart))), 1),
          vue.createElementVNode("div", {
            class: "cursor-pointer flex items-center w-full",
            onMousedown: mouseDownHandle
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(musicCurTime) ? musicCurTime.value = $event : null),
              class: "w-full h-10 bg-blue cursor-pointer",
              step: "any",
              type: "range",
              max: vue.unref(curListenEnd) - vue.unref(curListenStart),
              min: "0",
              onInput: seekingHandle
            }, null, 40, _hoisted_2$7), [
              [vue.vModelText, vue.unref(musicCurTime)]
            ])
          ], 32),
          vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(secondFormatToLength)(vue.unref(curListenEnd) - vue.unref(curListenStart))), 1)
        ]);
      };
    }
  });
  const _hoisted_1$8 = { class: "flex items-center pr-30px gap-6px" };
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const playerVolume = vue.ref(_unsafeWindow.player.getVolume());
      function seekingHandle() {
        _unsafeWindow.player.setVolume(playerVolume.value);
      }
      const isMuted = vue.ref(_unsafeWindow.player.getMuted());
      function clickMutedBtnHandle() {
        if (isMuted.value)
          playerVolume.value = _unsafeWindow.player.getVolume();
        else
          playerVolume.value = 0;
        isMuted.value = !isMuted.value;
        _unsafeWindow.player.setMuted(isMuted.value);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass([[vue.unref(playerVolume) ? "i-carbon-volume-down" : "i-carbon-volume-mute"], "text-30px cursor-pointer hover:text-blue shrink-0"]),
            onClick: clickMutedBtnHandle
          }, null, 2),
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(playerVolume) ? playerVolume.value = $event : null),
            class: "w-100px h-10 bg-blue cursor-pointer",
            step: "any",
            type: "range",
            max: 1,
            min: "0",
            onInput: seekingHandle
          }, null, 544), [
            [vue.vModelText, vue.unref(playerVolume)]
          ])
        ]);
      };
    }
  });
  const _hoisted_1$7 = { class: "w-full h-100px bg-white shrink-0" };
  const _hoisted_2$6 = { class: "flex w-full h-100px" };
  const _hoisted_3$4 = { class: "flex w-full" };
  const _hoisted_4$2 = { class: "box-border w-384px shrink-0 p-10px flex gap-10px text-lg items-center" };
  const _hoisted_5$2 = { class: "px-10px w-full flex justify-center items-center" };
  const _hoisted_6$2 = {
    key: 1,
    class: "w-full flex justify-center items-center box-border"
  };
  const _hoisted_7$1 = { class: "text-center" };
  const _hoisted_8$1 = { key: 0 };
  const _hoisted_9$1 = { key: 1 };
  const _hoisted_10$1 = { class: "flex items-center gap-30px w-300px" };
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
          vue.createElementVNode("div", _hoisted_2$6, [
            vue.createElementVNode("div", _hoisted_3$4, [
              vue.createVNode(_sfc_main$c),
              vue.createElementVNode("div", _hoisted_4$2, [
                vue.createVNode(_sfc_main$g)
              ]),
              vue.createElementVNode("div", _hoisted_5$2, [
                vue.unref(curPlayingMusicId) ? (vue.openBlock(), vue.createBlock(_sfc_main$b, { key: 0 })) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$2, [
                  vue.createElementVNode("p", _hoisted_7$1, [
                    vue.unref(tempMusicId) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_8$1, " 正在加载掐头去尾后的进度条 ")) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_9$1, " 未点击歌曲 "))
                  ])
                ]))
              ]),
              vue.createElementVNode("div", _hoisted_10$1, [
                vue.createVNode(_sfc_main$d),
                vue.createVNode(_sfc_main$a)
              ])
            ])
          ])
        ]);
      };
    }
  });
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function toAuthorPage() {
        window.open("https://space.bilibili.com/8212729");
      }
      function askAuthor() {
        window.open(`https://www.bilibili.com/video/BV1xQ4y157Qi/#reply203984900752`);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("button", {
            class: "btn btn-sm bg-black text-white",
            onClick: toAuthorPage
          }, " 查看作者其他作品 "),
          vue.createElementVNode("button", {
            class: "btn btn-sm bg-blue text-white",
            onClick: askAuthor
          }, " 反馈问题给作者 ")
        ], 64);
      };
    }
  });
  const _hoisted_1$6 = {
    key: 0,
    class: "absolute badge badge-error gap-2 right-0 top-0",
    style: { "transform": "translateX(10%) translateY(-50%)" }
  };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const curVersion = vue.ref(getCurVersion());
      const isNeedUpdate = vue.ref(false);
      async function checkIsNeedUpdate() {
        const latestVersion = await getLatestVersion();
        isNeedUpdate.value = curVersion.value !== latestVersion;
      }
      checkIsNeedUpdate();
      async function getLatestVersion() {
        const res = await axios.get(`https://update.greasyfork.org/scripts/484240/code.meta.js?timestamp=${Date.now()}`);
        return getVersionByText(res.data);
      }
      function getCurVersion() {
        const curVersion2 = _GM_info.script.version;
        return curVersion2;
      }
      function getVersionByText(responseText) {
        const pattern = /@version\s+(\d+\.\d+\.\d+)/;
        const match = pattern.exec(responseText);
        if (match && match.length >= 2)
          return match[1];
        else
          return null;
      }
      async function clickHandle() {
        await checkIsNeedUpdate();
        if (isNeedUpdate.value) {
          _GM_openInTab("https://greasyfork.org/scripts/484240/code/484240.user.js");
          i("更新脚本后，刷新页面即可完成更新", { autoClose: false });
          return;
        }
        i("当前为最新版本，不需要更新");
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: "btn btn-sm relative",
          onClick: clickHandle
        }, [
          vue.createTextVNode(" 版本号：" + vue.toDisplayString(vue.unref(curVersion)) + " ", 1),
          vue.unref(isNeedUpdate) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, " 有更新 ")) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const _hoisted_1$5 = { class: "bg-white/50 p-15px flex justify-between shrink-0 shadow" };
  const _hoisted_2$5 = { class: "flex gap-12px" };
  const _hoisted_3$3 = { class: "flex gap-12px items-center" };
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createElementVNode("div", _hoisted_2$5, [
            vue.createVNode(_sfc_main$v)
          ]),
          vue.createElementVNode("div", _hoisted_3$3, [
            vue.createVNode(_sfc_main$8),
            vue.createVNode(_sfc_main$7)
          ])
        ]);
      };
    }
  });
  const _hoisted_1$4 = {
    key: 0,
    class: "flex flex-col justify-between h-full"
  };
  const _hoisted_2$4 = { class: "relative h-full flex flex-col min-h-0" };
  const _hoisted_3$2 = {
    key: 1,
    class: "h-full text-2xl flex justify-center items-center text-[#fc80a1]"
  };
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const wbRef = vue.ref();
      const options = {
        id: "music-pane",
        title: "哔哩哔哩音乐播放器（冬灰条制）",
        x: "right",
        y: "center",
        height: "80%",
        width: "80%",
        class: "no-full rounded-3xl overflow-hidden border-2px border-solid border-black box-border",
        background: "rgba(0, 0, 0, 0.81)",
        index: 9999,
        onclose
      };
      async function onclose() {
        if (!wbRef.value)
          return;
        closePaneHandle();
        wbRef.value.winbox.window.remove();
      }
      vue.onBeforeUnmount(() => {
        onclose();
      });
      vue.onMounted(() => {
        paneDomId.value = wbRef.value.selector;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(VueWinBox), {
          ref_key: "wbRef",
          ref: wbRef,
          options
        }, {
          default: vue.withCtx(() => [
            !vue.unref(isLoading) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              !vue.unref(isShowAddPage$1) && !vue.unref(editingMusicId) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
                vue.createElementVNode("div", _hoisted_2$4, [
                  vue.createVNode(_sfc_main$w),
                  vue.createVNode(_sfc_main$6),
                  vue.createVNode(_sfc_main$i)
                ]),
                vue.createVNode(_sfc_main$9)
              ])) : vue.unref(isShowAddPage$1) ? (vue.openBlock(), vue.createBlock(_sfc_main$x, { key: 1 })) : vue.unref(editingMusicId) ? (vue.openBlock(), vue.createBlock(_sfc_main$h, { key: 2 })) : vue.createCommentVNode("", true)
            ], 64)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$2, " 冬灰条哔哩哔哩音乐播放器，正在加载中... "))
          ]),
          _: 1
        }, 512);
      };
    }
  });
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", {
            class: "btn text-lg text-white bg-[#fc80a1]! px-10px",
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => vue.unref(openPaneHandle) && vue.unref(openPaneHandle)(...args))
          }, " 播放器面板 "),
          vue.unref(isShowPane) ? (vue.openBlock(), vue.createBlock(_sfc_main$5, { key: 0 })) : vue.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const isShowMusicListPicker = vue.ref(false);
  const musicList = vue.ref([]);
  const total = vue.ref(0);
  const curCount = vue.ref(0);
  const isLoadingList = vue.ref(false);
  async function showMusicListPicker(type) {
    isLoadingList.value = true;
    isShowMusicListPicker.value = true;
    if (type === "collection") {
      total.value = _unsafeWindow.__INITIAL_STATE__.mediaListInfo.media_count;
      musicList.value = await getCollectionList();
    } else if (type === "pages") {
      total.value = _unsafeWindow.__INITIAL_STATE__.videoData.pages.length;
      musicList.value = getPageList();
    } else if (type === "section") {
      const { sections } = _unsafeWindow.__INITIAL_STATE__;
      total.value = sections.reduce((pre, cur) => {
        return pre + cur.length;
      }, 0);
      musicList.value = getSectionList();
    } else if (type === "bangumi") {
      const json = _unsafeWindow.__NEXT_DATA__.props.pageProps.dehydratedState.queries[0].state.data.seasonInfo.sectionsMap;
      let sum = 0;
      for (const key in json) {
        const listInfo = json[key];
        sum += listInfo.epList.length;
      }
      total.value = sum;
      musicList.value = getBangumiList();
    }
    isLoadingList.value = false;
  }
  async function getCollectionList() {
    await refreshCollectionContent();
    const originList = _unsafeWindow.__INITIAL_STATE__.resourceList;
    return originList.map((item) => {
      const { bv_id, page, cover, title, upper: { mid, name, face }, duration } = item;
      return {
        id: nanoid$1(),
        bvid: bv_id,
        title,
        start: 0,
        end: duration,
        createdAt: Date.now(),
        pic: cover,
        p: page,
        up: { mid, name, face },
        isChecked: false
      };
    });
  }
  let isTouchCollectionBottom = false;
  async function refreshCollectionContent() {
    const dom = document.getElementById("playlist-video-action-list");
    if (!dom)
      return;
    const originList = _unsafeWindow.__INITIAL_STATE__.resourceList;
    curCount.value = originList.length;
    dom.scrollTo({
      top: isTouchCollectionBottom ? 0 : dom.scrollHeight,
      behavior: "smooth"
    });
    await sleep(1e3);
    if (originList.length === total.value) {
      isTouchCollectionBottom = false;
      return;
    }
    if (!isShowMusicListPicker.value)
      return;
    if (dom.scrollTop + dom.clientHeight >= dom.scrollHeight) {
      isTouchCollectionBottom = true;
    }
    if (originList.length < total.value)
      return refreshCollectionContent();
  }
  function getPageList() {
    const originList = _unsafeWindow.__INITIAL_STATE__.videoData.pages;
    const { bvid, pic, title, owner } = _unsafeWindow.__INITIAL_STATE__.videoData;
    const { mid, name, face } = owner;
    return originList.map((item) => {
      const { page, part, duration } = item;
      return {
        id: nanoid$1(),
        bvid,
        title: `${title} ${part}`,
        start: 0,
        end: duration,
        createdAt: Date.now(),
        pic,
        p: page,
        up: { mid, name, face },
        isChecked: false
      };
    });
  }
  function getSectionList() {
    const { sections, upData } = _unsafeWindow.__INITIAL_STATE__;
    const { mid, name, face } = upData;
    const list = [];
    for (const section of sections) {
      const { title, episodes } = section;
      for (const episode of episodes) {
        const id = nanoid$1();
        const { bvid, arc, page } = episode;
        const { pic, title: episodeTitle, duration } = arc;
        const item = {
          id,
          bvid,
          title: `${title} ${episodeTitle}`,
          start: 0,
          end: duration,
          createdAt: Date.now(),
          pic,
          p: page.page,
          up: { mid, name, face },
          isChecked: false
        };
        list.push(item);
      }
    }
    return list;
  }
  function getBangumiList() {
    const json = _unsafeWindow.__NEXT_DATA__.props.pageProps.dehydratedState.queries[0].state.data.seasonInfo.sectionsMap;
    const list = [];
    for (const key in json) {
      const listInfo = json[key];
      const {
        epList,
        title
      } = listInfo;
      for (const video of epList) {
        const { bvid, cover, playerEpTitle, duration } = video;
        const item = {
          id: nanoid$1(),
          bvid,
          title: `${title} ${playerEpTitle}`,
          start: 0,
          end: duration,
          createdAt: Date.now(),
          pic: cover,
          p: 1,
          up: { mid: 0, name: "", face: "" },
          isChecked: false
        };
        list.push(item);
      }
    }
    return list;
  }
  const isShowAddPage = vue.ref(false);
  const newCollectionName = vue.ref("");
  const curSelectingCollectionId = vue.ref("");
  const curPickTab = vue.ref("exist");
  async function showAddPage() {
    const checkedNum = musicList.value.filter((music) => music.isChecked);
    if (!checkedNum.length)
      return i("当前未选中音乐，选择音乐后才可以添加歌单");
    await initLoacalData();
    isShowAddPage.value = true;
  }
  function quitAddPage() {
    isShowAddPage.value = false;
  }
  function confirmAddHandle() {
    const curCheckedMusicList = musicList.value.reduce((pre, cur) => {
      if (cur.isChecked) {
        const { id, bvid, title, start, end, createdAt, pic, p, up } = cur;
        pre.push({ id, bvid, title, start, end, createdAt, pic, p, up });
      }
      return pre;
    }, []);
    if (curPickTab.value === "new") {
      if (!newCollectionName.value) {
        i("新的收藏夹名字不能为空");
        return;
      }
      const id = nanoid$1();
      const newCollection = {
        name: newCollectionName.value,
        id,
        createAt: (/* @__PURE__ */ new Date()).getTime()
      };
      collectionInfos.value.push(newCollection);
      collections.value[id] = curCheckedMusicList;
      i("批量添加成功！");
      isShowMusicListPicker.value = false;
      return;
    }
    if (!curSelectingCollectionId.value) {
      i("当前未选中歌单，批量添加失败");
      return;
    }
    const musics = collections.value[curSelectingCollectionId.value];
    if (!musics) {
      i("未找到对应歌单，批量添加失败");
      return;
    }
    musics.push(...curCheckedMusicList);
    i("批量添加成功！");
    isShowAddPage.value = false;
    isShowMusicListPicker.value = false;
  }
  const _hoisted_1$3 = { class: "flex flex-col gap-12px" };
  const _hoisted_2$3 = { class: "flex justify-between p-12px shadow" };
  const _hoisted_3$1 = {
    role: "tablist",
    class: "mx-10px tabs tabs-boxed tabs-lg"
  };
  const _hoisted_4$1 = { class: "p-30px" };
  const _hoisted_5$1 = {
    key: 0,
    class: "flex items-center gap-10px"
  };
  const _hoisted_6$1 = /* @__PURE__ */ vue.createElementVNode("div", null, " 添加到哪个歌单 ", -1);
  const _hoisted_7 = ["label", "value"];
  const _hoisted_8 = { key: 1 };
  const _hoisted_9 = { class: "flex items-center gap-10px w-full" };
  const _hoisted_10 = /* @__PURE__ */ vue.createElementVNode("div", { class: "shrink-0" }, " 标题 ", -1);
  const _hoisted_11 = { class: "w-full" };
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
          vue.createElementVNode("div", _hoisted_2$3, [
            vue.createElementVNode("div", {
              class: "btn",
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => vue.unref(quitAddPage) && vue.unref(quitAddPage)(...args))
            }, " 返回 "),
            vue.createElementVNode("div", {
              class: "btn",
              onClick: _cache[1] || (_cache[1] = //@ts-ignore
              (...args) => vue.unref(confirmAddHandle) && vue.unref(confirmAddHandle)(...args))
            }, " 确认添加 ")
          ]),
          vue.createElementVNode("div", null, [
            vue.createElementVNode("div", _hoisted_3$1, [
              vue.createElementVNode("a", {
                role: "tab",
                class: vue.normalizeClass(["tab", { "tab-active": vue.unref(curPickTab) === "exist" }]),
                onClick: _cache[2] || (_cache[2] = ($event) => curPickTab.value = "exist")
              }, "添加到已有歌单", 2),
              vue.createElementVNode("a", {
                role: "tab",
                class: vue.normalizeClass(["tab", { "tab-active": vue.unref(curPickTab) === "new" }]),
                onClick: _cache[3] || (_cache[3] = ($event) => curPickTab.value = "new")
              }, "新建一个歌单并添加", 2)
            ]),
            vue.createElementVNode("div", _hoisted_4$1, [
              vue.unref(curPickTab) === "exist" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$1, [
                _hoisted_6$1,
                vue.withDirectives(vue.createElementVNode("select", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(curSelectingCollectionId) ? curSelectingCollectionId.value = $event : null),
                  class: "select select-bordered w-full max-w-xs"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(collectionInfos), (collection) => {
                    return vue.openBlock(), vue.createElementBlock("option", {
                      key: collection.id,
                      label: collection.name,
                      value: collection.id
                    }, null, 8, _hoisted_7);
                  }), 128))
                ], 512), [
                  [vue.vModelSelect, vue.unref(curSelectingCollectionId)]
                ])
              ])) : vue.createCommentVNode("", true),
              vue.unref(curPickTab) === "new" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
                vue.createElementVNode("div", _hoisted_9, [
                  _hoisted_10,
                  vue.createElementVNode("div", _hoisted_11, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(newCollectionName) ? newCollectionName.value = $event : null),
                      type: "textarea",
                      placeholder: "请输入标题",
                      class: "input input-bordered w-full box-border inline-block"
                    }, null, 512), [
                      [vue.vModelText, vue.unref(newCollectionName)]
                    ])
                  ])
                ])
              ])) : vue.createCommentVNode("", true)
            ])
          ])
        ]);
      };
    }
  });
  const _hoisted_1$2 = { class: "p-10px flex gap-12px sticky top-0px bg-white z-9999 justify-between" };
  const _hoisted_2$2 = { class: "flex items-center gap-9px" };
  const _hoisted_3 = { class: "flex flex-col gap-9px p-2px" };
  const _hoisted_4 = ["onClick"];
  const _hoisted_5 = ["checked"];
  const _hoisted_6 = ["src"];
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      function selectAll() {
        musicList.value.forEach((item) => {
          item.isChecked = true;
        });
      }
      function cancelAll() {
        musicList.value.forEach((item) => {
          item.isChecked = false;
        });
      }
      function updateIsChecked(music) {
        music.isChecked = !music.isChecked;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", _hoisted_1$2, [
            vue.createElementVNode("div", { class: "flex gap-12px" }, [
              vue.createElementVNode("div", {
                class: "btn",
                onClick: selectAll
              }, " 全选 "),
              vue.createElementVNode("div", {
                class: "btn",
                onClick: cancelAll
              }, " 全部取消 ")
            ]),
            vue.createElementVNode("div", _hoisted_2$2, [
              vue.createElementVNode("div", null, "列表中共有 " + vue.toDisplayString(vue.unref(musicList).length) + " 个视频，", 1),
              vue.createElementVNode("div", null, "当前选择了 " + vue.toDisplayString(vue.unref(musicList).filter((item) => item.isChecked).length) + " 个视频", 1),
              vue.createElementVNode("div", {
                class: "btn",
                onClick: _cache[0] || (_cache[0] = //@ts-ignore
                (...args) => vue.unref(showAddPage) && vue.unref(showAddPage)(...args))
              }, " 添加到歌单 ")
            ])
          ]),
          vue.createElementVNode("div", _hoisted_3, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(musicList), (music) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: music.id,
                class: vue.normalizeClass(["flex gap-9px cursor-pointer hover:bg-gray-100 p-12px", [music.isChecked ? "bg-[#fc80a1]" : ""]]),
                onClick: ($event) => updateIsChecked(music)
              }, [
                vue.createElementVNode("input", {
                  type: "checkbox",
                  checked: music.isChecked
                }, null, 8, _hoisted_5),
                vue.createElementVNode("div", null, [
                  vue.createElementVNode("img", {
                    src: music.pic,
                    class: "w-100px",
                    alt: ""
                  }, null, 8, _hoisted_6)
                ]),
                vue.createElementVNode("div", null, vue.toDisplayString(music.up.name), 1),
                vue.createElementVNode("div", null, vue.toDisplayString(music.title), 1)
              ], 10, _hoisted_4);
            }), 128))
          ])
        ], 64);
      };
    }
  });
  const _hoisted_1$1 = {
    key: 1,
    class: "w-full h-full flex flex-col gap-12px justify-center items-center text-[#fc80a1] text-lg"
  };
  const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("div", null, "请不要关闭网页哈", -1);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const wbRef = vue.ref();
      function getOptions() {
        const options = {
          id: "music-list-picker",
          title: "从以下列表中选择要添加到歌单的歌曲",
          x: "right",
          y: "center",
          height: "50%",
          class: "modern no-full",
          background: "rgba(0, 0, 0, 0.81)",
          index: 9999,
          onclose
        };
        if (!paneDomId.value)
          return options;
        const parentPaneDom = document.getElementById(paneDomId.value);
        let zindex = 9999;
        if (parentPaneDom)
          zindex = Number.parseInt(parentPaneDom.style.zIndex) + 1;
        options.index = zindex;
        return options;
      }
      async function onclose() {
        if (!wbRef.value)
          return;
        wbRef.value.winbox.window.remove();
        isShowMusicListPicker.value = false;
      }
      vue.onBeforeUnmount(() => {
        onclose();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(VueWinBox), {
          ref_key: "wbRef",
          ref: wbRef,
          options: getOptions()
        }, {
          default: vue.withCtx(() => [
            !vue.unref(isLoadingList) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              !vue.unref(isShowAddPage) ? (vue.openBlock(), vue.createBlock(_sfc_main$2, { key: 0 })) : (vue.openBlock(), vue.createBlock(_sfc_main$3, { key: 1 }))
            ], 64)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
              vue.createElementVNode("div", null, "正在滚动列表以获取列表中的视频信息...请稍候（" + vue.toDisplayString(vue.unref(curCount)) + " / " + vue.toDisplayString(vue.unref(total)) + "）", 1),
              _hoisted_2$1
            ]))
          ]),
          _: 1
        }, 8, ["options"]);
      };
    }
  });
  const _hoisted_1 = { class: "fixed top-100px right-100px z-9996" };
  const _hoisted_2 = {
    key: 0,
    class: "flex flex-col gap-3"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      refreshPageType();
      const isOpenMenu = vue.ref(false);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.unref(isOpenMenu) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.createVNode(_sfc_main$4),
            vue.unref(pageType) === "collection" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "btn text-lg text-white bg-[#fc80a1]!",
              onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(showMusicListPicker)("collection"))
            }, " 从收藏夹选择视频加入歌单 ")) : vue.createCommentVNode("", true),
            vue.unref(pageType) === "pages" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "btn text-lg text-white bg-[#fc80a1]!",
              onClick: _cache[1] || (_cache[1] = ($event) => vue.unref(showMusicListPicker)("pages"))
            }, " 从分p列表选择视频加入歌单 ")) : vue.createCommentVNode("", true),
            vue.unref(pageType) === "section" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 2,
              class: "btn text-lg text-white bg-[#fc80a1]!",
              onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(showMusicListPicker)("section"))
            }, " 从合集选择视频加入歌单 ")) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", {
              class: "btn text-lg text-white",
              onClick: _cache[3] || (_cache[3] = ($event) => isOpenMenu.value = false)
            }, " 退出 "),
            vue.unref(isShowMusicListPicker) ? (vue.openBlock(), vue.createBlock(_sfc_main$1, { key: 3 })) : vue.createCommentVNode("", true),
            vue.unref(isShowExportDialog) ? (vue.openBlock(), vue.createBlock(_sfc_main$E, { key: 4 })) : vue.createCommentVNode("", true),
            vue.unref(isShowImportDialog) ? (vue.openBlock(), vue.createBlock(_sfc_main$A, { key: 5 })) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true),
          !vue.unref(isOpenMenu) ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: "btn text-lg text-white bg-[#fc80a1]! px-10px",
            onClick: _cache[4] || (_cache[4] = ($event) => isOpenMenu.value = true)
          }, " 音乐 ")) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  var isVue2 = false;
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  const piniaSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    return pinia;
  }
  vue.createApp(_sfc_main).use(createPinia()).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );

})(Vue, localforage, dayjs, axios);