(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f={avif:"/for-test-vite/assets/carrot-8T8wBvh8.avif 282w",webp:"/for-test-vite/assets/carrot-BtExMa64.webp 282w"},u={src:"/for-test-vite/assets/carrot-BC9MBiaI.png",w:282,h:243},b={sources:f,img:u},w={avif:"/for-test-vite/assets/carrot_2x-BUm5-SAE.avif 564w",webp:"/for-test-vite/assets/carrot_2x-DEey7EbA.webp 564w"},h={src:"/for-test-vite/assets/carrot_2x-DnrWBT-Q.png",w:564,h:486},x={sources:w,img:h},$={avif:"/for-test-vite/assets/corn-Cnt0Cd8r.avif 282w",webp:"/for-test-vite/assets/corn-D4xxVvyT.webp 282w"},d={src:"/for-test-vite/assets/corn-B4_pKDMX.png",w:282,h:243},y={sources:$,img:d},B={avif:"/for-test-vite/assets/corn_2x-bc3vzUsG.avif 564w",webp:"/for-test-vite/assets/corn_2x-DTFgLOpU.webp 564w"},C={src:"/for-test-vite/assets/corn_2x-DotfDdbc.png",w:564,h:486},D={sources:B,img:C},U={avif:"/for-test-vite/assets/eggplant-ictoiqKz.avif 282w",webp:"/for-test-vite/assets/eggplant-CBd5pmmA.webp 282w"},L={src:"/for-test-vite/assets/eggplant-BcMdtMpI.png",w:282,h:243},M={sources:U,img:L},O={avif:"/for-test-vite/assets/eggplant_2x-C-QSxbS8.avif 564w",webp:"/for-test-vite/assets/eggplant_2x-CF8zaM9G.webp 564w"},k={src:"/for-test-vite/assets/eggplant_2x-ChZL0qpN.png",w:564,h:486},T={sources:O,img:k},q={avif:"/for-test-vite/assets/leek-BMVbvupt.avif 282w",webp:"/for-test-vite/assets/leek-BYte9oy8.webp 282w"},A={src:"/for-test-vite/assets/leek-XQ2YMUTK.png",w:282,h:243},H={sources:q,img:A},N={avif:"/for-test-vite/assets/leek_2x-DXaH4DTX.avif 564w",webp:"/for-test-vite/assets/leek_2x-idvC2s76.webp 564w"},Q={src:"/for-test-vite/assets/leek_2x-DxtgT575.png",w:564,h:486},S={sources:N,img:Q},E={avif:"/for-test-vite/assets/mushrooms-BZYJZ3gj.avif 282w",webp:"/for-test-vite/assets/mushrooms-C0dYLZ5s.webp 282w"},P={src:"/for-test-vite/assets/mushrooms-BPqtN6Cc.png",w:282,h:243},V={sources:E,img:P},X={avif:"/for-test-vite/assets/mushrooms_2x-BkmNBOpQ.avif 564w",webp:"/for-test-vite/assets/mushrooms_2x-CbTegUsp.webp 564w"},Y={src:"/for-test-vite/assets/mushrooms_2x-DVyGDWhk.png",w:564,h:486},Z={sources:X,img:Y},F={avif:"/for-test-vite/assets/sweet_potatoes-mnubb25y.avif 282w",webp:"/for-test-vite/assets/sweet_potatoes-BCddWZpC.webp 282w"},K={src:"/for-test-vite/assets/sweet_potatoes-Bcr2gXs3.png",w:282,h:243},W={sources:F,img:K},j={avif:"/for-test-vite/assets/sweet_potatoes_2x-C9rsY4pS.avif 564w",webp:"/for-test-vite/assets/sweet_potatoes_2x-CtQcpcxH.webp 564w"},z={src:"/for-test-vite/assets/sweet_potatoes_2x-DAmx42hQ.png",w:564,h:486},G={sources:j,img:z},I=[{name:"eggplant",price:60,image_url:"/images/vegetables_img/eggplant.png",retina_url:"/images/vegetables_img/eggplant_2x.png"},{name:"leek",price:50,image_url:"/images/vegetables_img/leek.png",retina_url:"/images/vegetables_img/leek_2x.png"},{name:"mushrooms",price:70,image_url:"/images/vegetables_img/mushrooms.png",retina_url:"/images/vegetables_img/mushrooms_2x.png"},{name:"corn",price:45,image_url:"/images/vegetables_img/corn.png",retina_url:"/images/vegetables_img/corn_2x.png"},{name:"sweet potatoes",price:30,image_url:"/images/vegetables_img/sweet_potatoes.png",retina_url:"/images/vegetables_img/sweet_potatoes_2x.png"},{name:"carrot",price:10,image_url:"/images/vegetables_img/carrot.png",retina_url:"/images/vegetables_img/carrot_2x.png"}],p=Object.assign({"/images/vegetables_img/carrot.png":b,"/images/vegetables_img/carrot_2x.png":x,"/images/vegetables_img/corn.png":y,"/images/vegetables_img/corn_2x.png":D,"/images/vegetables_img/eggplant.png":M,"/images/vegetables_img/eggplant_2x.png":T,"/images/vegetables_img/leek.png":H,"/images/vegetables_img/leek_2x.png":S,"/images/vegetables_img/mushrooms.png":V,"/images/vegetables_img/mushrooms_2x.png":Z,"/images/vegetables_img/sweet_potatoes.png":W,"/images/vegetables_img/sweet_potatoes_2x.png":G});console.log(p);J(I);function R(a,t,r,i){let e="",s="",g="",c="",n="",m,_;for(const[l,o]of Object.entries(p))l===r&&(e=o.sources.avif.split(" ")[0],s=o.sources.webp.split(" ")[0],n=o.img.src,m=o.img.w,_=o.img.h),l===i&&(g=o.sources.avif.split(" ")[0],c=o.sources.webp.split(" ")[0]);const v=`<picture>
	    <source srcset="${e} 1x,  ${g} 2x" type="image/avif"/>
	    <source srcset="${s} 1x, ${c} 2x" type="image/webp"/>
	    <img 
	      src="${n}"
	        width="${m}" 
	       height="${_}"
	        alt="${a}"/>
	  </picture>`;return`<li class="veg-item"> 
		<h3 class="veg-item-title headline3">${a}</h3>
		<pclass="veg-item-text">${t} UAH / kg</pclass=>
		${v} </li>`}function J(a){const t=a;let r="";for(var i=0;i<t.length;i++)r+=R(t[i].name,t[i].price,t[i].image_url,t[i].retina_url);document.querySelector("#vegetablelist").innerHTML=`${r}`}
//# sourceMappingURL=commonHelpers.js.map
