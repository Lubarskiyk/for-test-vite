function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="modulepreload",E=function(c){return"/for-test-vite/"+c},d={},l=function(i,n,m){let e=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),f=r?.nonce||r?.getAttribute("nonce");e=Promise.all(n.map(o=>{if(o=E(o),o in d)return;d[o]=!0;const a=o.endsWith(".css"),v=a?'[rel="stylesheet"]':"";if(!!m)for(let u=t.length-1;u>=0;u--){const g=t[u];if(g.href===o&&(!a||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${v}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":h,a||(s.as="script",s.crossOrigin=""),s.href=o,f&&s.setAttribute("nonce",f),document.head.appendChild(s),a)return new Promise((u,g)=>{s.addEventListener("load",u),s.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},p=Object.assign({"/images/vegetables_img/carrot.png":()=>l(()=>import("./assets/carrot-DEHFoXB7.js"),__vite__mapDeps([])),"/images/vegetables_img/corn.png":()=>l(()=>import("./assets/corn-DIqMQA4X.js"),__vite__mapDeps([])),"/images/vegetables_img/eggplant.png":()=>l(()=>import("./assets/eggplant-C6ewE3CB.js"),__vite__mapDeps([])),"/images/vegetables_img/leek.png":()=>l(()=>import("./assets/leek-Ckhxt9t_.js"),__vite__mapDeps([])),"/images/vegetables_img/mushrooms.png":()=>l(()=>import("./assets/mushrooms-BgAjdJ-M.js"),__vite__mapDeps([])),"/images/vegetables_img/sweet_potatoes.png":()=>l(()=>import("./assets/sweet_potatoes-DQvNYE7O.js"),__vite__mapDeps([]))});console.log(p);let _="";for(let c of Object.values(p)){const n=(await c()).default;_+=`<li> <img src="${n}" /> </li>`}document.querySelector("#app").innerHTML=`
  <h1>Hello Imagetools!</h1>
   <p>Here are a few vegetables of Vite:</p>
   <ul style="width:300px; margin: 50px auto">
       ${_} 
     </ul>
`;
//# sourceMappingURL=commonHelpers.js.map