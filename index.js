import{a as v,S as q,i as s}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const M="56021293-60892665a75ee5bfc51222dea",P="https://pixabay.com/api/";async function u(t,r=1){return(await v.get(P,{params:{key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".js-btn-load"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function E(t){return t.map(({webformatURL:r,largeImageURL:i,tags:c,likes:e,views:o,comments:a,downloads:S})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img
              src="${r}"
              alt="${c}"
              loading="lazy"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${e}</p>
            <p><b>Views</b> ${o}</p>
            <p><b>Comments</b> ${a}</p>
            <p><b>Downloads</b> ${S}</p>
          </div>
        </li>
      `).join("")}function h(t){f.insertAdjacentHTML("beforeend",E(t)),B.refresh()}function $(){f.innerHTML=""}function g(){m.classList.add("is-visible")}function p(){m.classList.remove("is-visible")}function b(){y.classList.remove("is-hidden")}function L(){y.classList.add("is-hidden")}const w=document.querySelector(".form"),O=document.querySelector(".js-btn-load");let l="",n=1;const x=15;let d=0;w.addEventListener("submit",_);O.addEventListener("click",A);async function A(){L(),g();try{n+=1;const t=await u(l,n);if(h(t.hits),n>=d){s.info({message:"We're sorry, but you've reached the end of search results."});return}j(),b()}catch{s.error({message:"Something went wrong while loading more images."})}finally{p()}}async function _(t){if(t.preventDefault(),l=t.target.elements["search-text"].value.trim(),!!l){n=1,$(),L(),g();try{const r=await u(l,n);if(!r.hits.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits),d=Math.ceil(r.totalHits/x),n<d?b():s.info({message:"We're sorry, but you've reached the end of search results."})}catch{s.error({message:"Something went wrong. Please try again."})}finally{p()}w.reset()}}function j(){const t=document.querySelector(".gallery-item");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
