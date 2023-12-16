import{a as v,i as M,d as N,e as R,b as z}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();v.defaults.baseURL="https://your-energy.b.goit.study/api";const K="filters",I="exercises",Q="subscription",Ee=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>v.get(`/${K}?filter=${s}&page=${e}&limit=${t}`).then(o=>o.data),Se=({page:e=1,perPage:t=12,filter:s={}}={})=>v.get(`/${I}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(o=>o.data),G=e=>v.get(`/${I}/${e}`).then(t=>t.data),J=async()=>{try{const{data:e}=await v.get("/quote");return e}catch{console.log('Error request "/quote"')}},ke=e=>v.post(`/${Q}`,{email:e}).then(t=>t.data),Y=(e,t)=>v.patch(`/${I}/${e}/rating`,t,{headers:{"content-type":"application/json"}}).then(s=>s.data),V=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function w(e){return e.toString().padStart(2,"0")}function W(e){return[e.getFullYear(),w(e.getMonth()+1),w(e.getDate())].join("-")}const x=e=>M.show({title:"Error",message:e,position:"topRight",color:"red"}),Z=e=>M.show({title:"Success",message:e,position:"topRight",color:"green"}),X={email:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,review:/^.+$/},B="quoteData",F=W(new Date),ee=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(B));(!e||e.date!==F)&&(e=await J(),localStorage.setItem(B,JSON.stringify({date:F,...e}))),ee.insertAdjacentHTML("beforeend",V(e))})();const a={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),exSearchImg:document.getElementById("search-img"),closeModalBtn:document.querySelector(".modal-close-btn"),modalMainRef:document.querySelector(".modal-main"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body"),modalIconHeart:document.querySelector(".modal-icon-heart"),sun:document.querySelectorAll(".sun"),moon:document.querySelectorAll(".moon")},q={LIGHT:"light-theme",DARK:"dark-theme"};a.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",te)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?($(q.LIGHT),a.sun.forEach(s=>s.classList.remove("visible")),a.moon.forEach(s=>s.classList.add("visible")),a.body.classList.remove("dark-theme"),a.buttonTheme.forEach(s=>s.checked=!1)):t==="dark-theme"&&(a.sun.forEach(s=>s.classList.add("visible")),a.moon.forEach(s=>s.classList.remove("visible")),a.buttonTheme.forEach(s=>s.checked=!0),a.body.classList.add("dark-theme"))})();function te(){return localStorage.getItem("theme")==="dark-theme"?(a.buttonTheme.forEach(t=>t.checked=!1),$(q.LIGHT),a.sun.forEach(t=>t.classList.remove("visible")),a.moon.forEach(t=>t.classList.add("visible")),a.body.classList.remove("dark-theme")):(a.buttonTheme.forEach(t=>t.checked=!0),a.sun.forEach(t=>t.classList.add("visible")),a.moon.forEach(t=>t.classList.remove("visible")),$(q.DARK),a.body.classList.add("dark-theme"))}function $(e){localStorage.setItem("theme",e)}const se=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},oe=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},m={save:se,load:oe},f="favorites-list",ne=({targetElement:e,width:t,height:s,disableScroll:o=!1}={})=>{const n=e||document.body,r=document.createElement("div");r.classList.add("loader-container");const i=document.createElement("div");return i.classList.add("loader"),i.style.width=t||"100px",i.style.height=s||"100px",{setLoader:()=>{o&&N(document.body),r.appendChild(i),n.appendChild(r)},deleteLoader:()=>{n.removeChild(r),o&&R(document.body)}}},g="invalid-input-form",d=document.querySelector(".rating-feedback-form"),{allStars:S,number:k,ratingStarsRef:b,closeButtonRef:ae}={ratingStarsRef:d.querySelector(".rating-stars"),number:d.querySelector(".rating-number"),allStars:d.querySelectorAll(".star-icon-rating"),closeButtonRef:d.querySelector(".close-rating-btn-icon")},re=e=>{document.querySelector(".give-a-rating").addEventListener("click",s=>{s.preventDefault(),d.classList.remove("is-hidden"),d.setAttribute("id",e),document.querySelector(".modal-main").classList.add("is-hidden")})},A=()=>{d.reset(),d.classList.add("is-hidden"),k.textContent="0.0",S.forEach(e=>e.classList.remove("star-active")),S.forEach(e=>e.classList.remove("star-checked")),document.querySelector(".modal-main").classList.remove("is-hidden")},O=(e,t)=>{k.textContent=Number(e).toFixed(1),S.forEach((s,o)=>{o<=Number(e)-1?s.classList.add(t):s.classList.remove(t)})},P=()=>S.forEach(e=>e.classList.remove("star-active"));b.addEventListener("click",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;t&&(O(t,"star-checked"),P())});b.addEventListener("mouseover",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;d.classList.remove(g),t&&(k.textContent=Number(t).toFixed(1),O(t,"star-active"))});const C=e=>{e.target.classList.remove(g),e.target.removeEventListener("input",C)};d.addEventListener("submit",async e=>{var p;e.preventDefault();const t=((p=b.querySelector(":checked"))==null?void 0:p.value)||0,s=Object.entries(X),o={};let n=!1;s.forEach(([l,L])=>{const y=d.elements[l];L.test(y.value.trim())?(o[l]=y.value,y.classList.remove(g)):(n=!0,y.classList.add(g),y.addEventListener("input",C),x(`Please enter a valid ${l}`))});const r=Number(t);if(r<=0)return x("Please enter a start rating"),d.classList.add(g);if(n)return;const{setLoader:i,deleteLoader:c}=ne({targetElement:d});o.rate=r;try{i();const l=d.getAttribute("id");await Y(l,o),Z("Rating submitted successfully"),A()}catch(l){l&&([...d.elements].forEach(L=>{l.response.data.message.includes(L.name)&&(L.classList.add(g),L.addEventListener("input",C))}),x(l.response.data.message))}finally{c()}});ae.addEventListener("click",()=>A());b.addEventListener("mouseout",e=>{var s,o;const t=((s=b.querySelector(":checked"))==null?void 0:s.value)||0;k.textContent=(o=Number(t))==null?void 0:o.toFixed(1),P()});const E="/team-final-project-js/assets/sprite-59e25010.svg";a.divCategories.addEventListener("click",de);let u;const ie=`Remove from favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#trash'></use>
        </svg>`,ce=`Add to favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#heart'></use>
        </svg>`,_=(e,t)=>e.find(s=>(s==null?void 0:s._id)===t),H=()=>{const e=m.load(f)||[];if(!!_(e,u==null?void 0:u._id)){document.querySelector(".add-to-favorites").innerHTML=ie;return}document.querySelector(".add-to-favorites").innerHTML=ce};function de(e){e.preventDefault();const t=e.target.closest(".exercise-item-button");t&&le(t.id)}function le(e){G(e).then(t=>{u=t,fe(t),re(e),H()}),a.backdrop.classList.remove("is-hidden"),N(document.body),me()}const ue=document.querySelector(".modal-close-btn"),h=e=>{(e.target===a.backdrop||e.key==="Escape"||e.target===ue)&&(A(),a.backdrop.classList.add("is-hidden"),R(document.body),document.removeEventListener("click",h),document.removeEventListener("keydown",h),a.closeModalBtn.removeEventListener("click",h),a.addFavorite.removeEventListener("click",U),renderFavorites())};function me(){a.backdrop.addEventListener("click",h),document.addEventListener("keydown",h),a.closeModalBtn.addEventListener("click",h),a.addFavorite.addEventListener("click",U)}function U(){const e=m.load(f)||[],t=!!_(e,u==null?void 0:u._id);m.save(f,t?e.filter(s=>s._id!==(u==null?void 0:u._id)):[...e,u]),H(),M.show({message:t?"Removed from favorites":"Added to favorites"})}function fe(e){const t=e.gifUrl,s=e.name,o=Number(e.rating).toFixed(1),n=e.target,r=e.bodyPart,i=e.equipment,c=e.popularity,p=e.burnedCalories,l=e.description;a.modalContainer.innerHTML=`
      <div class='modal-img'>
        <img src='${t}' alt='${s}' class='image' />
      </div>
      <div class='modal-rest'>
        <h3 class='modal-title'>${s}</h3>
        <div class='rating-element'>
          <p class='rating-count' id='vote'>${o}</p>
          <svg class='modal-icon-star'>
            <use href='${E}#star'></use>
          </svg>
        </div>
        <div class='modal-info'>
          <div class='modal-table'>
            <div class='info-element'>
              <p class='info-item'>Target</p>
              <p class='count'>${n}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Body part</p>
              <p class='count'>${r}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Equipment</p>
              <p class='count'>${i}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Popular</p>
              <p class='count'>${c}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Burned Calories</p>
              <p class='count'>${p}</p>
            </div>
          </div>
          <p class='about-info'>${l}</p>
        </div>`}document.addEventListener("DOMContentLoaded",ve);const D=e=>"/"+e.split("/").pop();function ve(){const e=D(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const o=D(new URL(s.href).pathname);o===e||e==="/"&&o==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function ge(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".nav-burger-menu-link");function n(){const c=e.classList.contains("is-open");t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),z[c?"enableBodyScroll":"disableBodyScroll"](document.body)}function r(){e.classList.contains("is-open")&&n()}function i(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),R(document.body))}t.addEventListener("click",n),s.addEventListener("click",n),o.forEach(function(c){c.addEventListener("click",r)}),matchMedia("(min-width: 768px)").addEventListener("change",i)}document.addEventListener("DOMContentLoaded",ge);const j=document.querySelector(".favorites-list-notification"),he=e=>{const t=e.target.getAttribute("data-exercise-id"),s=m.load(f);m.save(f,s.filter(o=>o._id!==t))};async function T(){const e=m.load(f)||[],t=a.favorites,s=document.querySelector(".favorites-list-notification");e.length===0?(s.classList.remove("is-hidden"),t.innerHTML=""):(pe(),document.querySelectorAll(".exercise-item-button-delete").forEach(o=>{o.addEventListener("click",he)}))}T();function pe(e,t){const s=document.querySelector(".favorites-exercise-list");s.innerHTML="",favoriteExercises.forEach(o=>{const n=Le(o);s.appendChild(n)}),j.classList.add("is-hidden")}function Le(e){const{_id:t,name:s,burnedCalories:o,time:n,bodyPart:r,target:i}=e,c=document.createElement("li");return c.className="exercise-item",c.id=`${t}`,c.innerHTML=`
    <div class='exercise-item-wrapper'>
      <div class='exercise-item-firth-wrapper'>
        <p class='exercise-item-workout'>WORKOUT</p>

        <button type='button' class='exercise-item-button-delete' data-exercise-id='${t}'>
          <svg class='exercise-item-trash-icon' width='16' height='16'>
            <use href='${E}#trash'></use>
          </svg>
        </button>

        <button id='${t}' type='button' class='exercise-item-button'>
          Start&nbsp;&nbsp;
          <svg class='exercise-item-arrow' width='16' height='16'>
            <use href='${E}#arrow-right'></use>
          </svg>
        </button>
      </div>
      <div class='exercise-item-second-wrapper'>
        <div class='exercise-item-run-box'>
          <svg class='exercise-item-run' width='16' height='16'>
            <use href='${E}#run'></use>
          </svg>
        </div>
        <h3 class='exercise-item-subtitle'>${s}</h3>
      </div>
      <ul class='exercise-item-list'>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Burned calories:<span class='information-text-span'>${o} / ${n} min</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Body part:<span class='information-text-span'>${r}</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Target:<span class='information-text-span'>${i}</span>
          </p>
        </li>
      </ul>
    </div>
  `,c}document.addEventListener("DOMContentLoaded",T);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");ye(t)}updatedFavorites.length===0&&j.classList.remove("is-hidden")});function ye(e){const s=(m.load(f)||[]).filter(o=>o!==e);m.save(f,s),T()}export{g as I,Ee as a,Z as b,Se as f,x as g,ne as l,ke as p,a as r,E as s,X as v};
//# sourceMappingURL=favorites-45b43e46.js.map
