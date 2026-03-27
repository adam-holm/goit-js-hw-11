import{a as d,S as p,i as a}from"./assets/vendor-D8kWkXeg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="55203157-9703e432d06ec35062b99b950",y="https://pixabay.com/api/";function h(s){return d.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const u=document.querySelector(".gallery");document.querySelector(".loader");let b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:m,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b>${t}</p>
          <p class="info-item"><b>Views</b>${i}</p>
          <p class="info-item"><b>Comments</b>${m}</p>
          <p class="info-item"><b>Downloads</b>${f}</p>
        </div>
      </li>`).join("");u.innerHTML=r,b.refresh()}function S(){u.innerHTML=""}const l=document.querySelector(".form"),c=document.querySelector(".loader");l.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter what you are looking for!"});return}S(),c.classList.remove("is-hidden"),h(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{console.error(o),a.error({message:"Something went wrong. Check console!"})}).finally(()=>{c.classList.add("is-hidden"),l.reset()})});
//# sourceMappingURL=index.js.map
