!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=t.parcelRequire7dbb;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequire7dbb=o),o("i8Q71");var r=o("dIxxU"),i=o("kvC6y"),a=o("47HLs");o("47HLs"),a=o("47HLs");const c=/[0-9]/g,l=(new Date).toISOString().slice(0,10).match(c).join(""),d=function(){const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate()-7).toISOString().slice(0,10)}().match(c).join("");let u=0,p=0,b=0,f=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&begin_date=${d}&end_date=${l}&fq=Movies&sort=relevance&api-key=7V2Mdku3K6jAwbEoNcKctzHC7q7RRQcQ`;const m="https://static01.nyt.com/",w=document.querySelector(".newsfeed");async function h(t,n){const s=`${t}&page=${n}`;try{return(await e(r).get(s)).data.response}catch(e){console.error(e)}}function g(e){const t=e.map((e=>function(e){const{byline:{original:t="Anonymous"},pub_date:n,headline:{main:s},source:o,snippet:r,web_url:i,multimedia:a,lead_paragraph:c}=e,l=a.find((e=>/blog/.test(e.subtype)));let d="";d=l?m+l.url:"https://picsum.photos/400/300";return`<li class="news-item-card">\n            <img class="news-item-image" src="${d}" alt="${r}" loading="lazy">            \n            <div class="news-item-content-wrapper">\n                <h2 class="news-item-title">${s}</h2>\n                <p class="news-item-description"><b>Overview: </b>${r}</p>\n                <p class="news-item-content">${c}</p>\n                <a class="news-item-btn" href="${i}" target="_blank"><button type="button" class="news-btn">Read more</button></a>\n                <p class="news-item-source"><b>Source: </b>${o}</p>\n                <p class="news-item-author"><b>Author: </b>${t}</p>\n                <p class="news-item-date"><b>Published At: </b>${n}</p>\n            </div>\n          </li>`}(e))).join("");w.insertAdjacentHTML("beforeend",t)}(0,i.startLoader)(),h(f,u).then((e=>{g(e.docs),(0,i.stopLoader)(),y(e)}));const v=new IntersectionObserver((function(e){e.forEach((e=>{p<=b||e.isIntersecting&&(u+=1,(0,i.startLoader)(),h(f,u).then((e=>{g(e.docs),(0,i.stopLoader)(),y(e),(0,a.slowScrollOnAddCards)(w),p<=b&&document.querySelector(".end-scroll-text").classList.remove("is-hidden")})))}))}),a.options);function y(e){p=e.meta.hits,b=e.meta.offset+10}setTimeout((()=>{v.observe(a.scrollGuardRef)}),1e3),o("ghnK3"),o("23Ajj"),o("2NTPx"),o("c01wF")}();
//# sourceMappingURL=newsfeed.bf481c33.js.map
