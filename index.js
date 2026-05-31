import{a as v,S,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w="56021293-60892665a75ee5bfc51222dea",P="https://pixabay.com/api/";async function f(t,r=1){return(await v.get(P,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function E(t){return t.map(({webformatURL:r,largeImageURL:s,tags:c,likes:e,views:o,comments:n,downloads:L})=>`
        <li class="gallery-item">
          <a href="${s}">
            <img
              src="${r}"
              alt="${c}"
              loading="lazy"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${e}</p>
            <p><b>Views</b> ${o}</p>
            <p><b>Comments</b> ${n}</p>
            <p><b>Downloads</b> ${L}</p>
          </div>
        </li>
      `).join("")}function m(t){y.insertAdjacentHTML("beforeend",E(t)),q.refresh()}function M(){y.innerHTML=""}function g(){h.classList.add("is-visible")}function p(){h.classList.remove("is-visible")}const b=document.querySelector(".form"),i=document.querySelector(".js-btn-load");let u="",a=1;const $=15;let d=0;b.addEventListener("submit",x);i.addEventListener("click",O);async function O(){a+=1,g();try{const t=await f(u,a);m(t.hits),a>=d&&(i.hidden=!0,l.info({message:"We're sorry, but you've reached the end of search results."})),A()}catch(t){console.log(t)}finally{p()}}async function x(t){if(t.preventDefault(),u=t.target.elements["search-text"].value.trim(),!!u){a=1,M(),i.hidden=!0,g();try{const r=await f(u,a);if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(r.hits),d=Math.ceil(r.totalHits/$),d>1&&(i.hidden=!1),a>=d&&(i.hidden=!0,l.info({message:"We're sorry, but you've reached the end of search results."}))}catch{l.error({message:"Something went wrong. Please try again."})}finally{p()}b.reset()}}function A(){const t=document.querySelector(".gallery-item");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
