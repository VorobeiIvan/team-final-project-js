import{a as v,i as I,d as T,e as k}from"./vendor-a3df9737.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();v.defaults.baseURL="https://your-energy.b.goit.study/api";const z="filters",w="exercises",K="subscription",be=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>v.get(`/${z}?filter=${s}&page=${e}&limit=${t}`).then(o=>o.data),Ee=({page:e=1,perPage:t=12,filter:s={}}={})=>v.get(`/${w}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(o=>o.data),Q=e=>v.get(`/${w}/${e}`).then(t=>t.data),G=async()=>{try{const{data:e}=await v.get("/quote");return e}catch{console.log('Error request "/quote"')}},Se=e=>v.post(`/${K}`,{email:e}).then(t=>t.data),J=(e,t)=>v.patch(`/${w}/${e}/rating`,t,{headers:{"content-type":"application/json"}}).then(s=>s.data),Y=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function F(e){return e.toString().padStart(2,"0")}function V(e){return[e.getFullYear(),F(e.getMonth()+1),F(e.getDate())].join("-")}const C=e=>I.show({title:"Error",message:e,position:"topRight",color:"red"}),W=e=>I.show({title:"Success",message:e,position:"topRight",color:"green"}),Z={email:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,review:/^.+$/},D="quoteData",N=V(new Date),X=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(D));(!e||e.date!==N)&&(e=await G(),localStorage.setItem(D,JSON.stringify({date:N,...e}))),X.insertAdjacentHTML("beforeend",Y(e))})();const i={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exTitel:document.querySelector(".exercises-title"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),btnSearch:document.querySelector(".exercises-search-button"),exSearchImg:document.getElementById("search-img"),closeModalBtn:document.querySelector(".modal-close-btn"),modalMainRef:document.querySelector(".modal-main"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body"),sun:document.querySelectorAll(".sun"),moon:document.querySelectorAll(".moon")},M={LIGHT:"light-theme",DARK:"dark-theme"};i.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",ee)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?(R(M.LIGHT),i.sun.forEach(s=>s.classList.remove("visible")),i.moon.forEach(s=>s.classList.add("visible")),i.body.classList.remove("dark-theme"),i.buttonTheme.forEach(s=>s.checked=!1)):t==="dark-theme"&&(i.sun.forEach(s=>s.classList.add("visible")),i.moon.forEach(s=>s.classList.remove("visible")),i.buttonTheme.forEach(s=>s.checked=!0),i.body.classList.add("dark-theme"))})();function ee(){return localStorage.getItem("theme")==="dark-theme"?(i.buttonTheme.forEach(t=>t.checked=!1),R(M.LIGHT),i.sun.forEach(t=>t.classList.remove("visible")),i.moon.forEach(t=>t.classList.add("visible")),i.body.classList.remove("dark-theme")):(i.buttonTheme.forEach(t=>t.checked=!0),i.sun.forEach(t=>t.classList.add("visible")),i.moon.forEach(t=>t.classList.remove("visible")),R(M.DARK),i.body.classList.add("dark-theme"))}function R(e){localStorage.setItem("theme",e)}const te=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},se=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},m={save:te,load:se},f="favorites-list",oe=({targetElement:e,width:t,height:s,disableScroll:o=!1}={})=>{const n=e||document.body,a=document.createElement("div");a.classList.add("loader-container");const r=document.createElement("div");return r.classList.add("loader"),r.style.width=t||"100px",r.style.height=s||"100px",{setLoader:()=>{o&&T(document.body),a.appendChild(r),n.appendChild(a)},deleteLoader:()=>{n.removeChild(a),o&&k(document.body)}}},h="invalid-input-form",d=document.querySelector(".rating-feedback-form"),{allStars:x,number:q,ratingStarsRef:E,closeButtonRef:ne}={ratingStarsRef:d.querySelector(".rating-stars"),number:d.querySelector(".rating-number"),allStars:d.querySelectorAll(".star-icon-rating"),closeButtonRef:d.querySelector(".close-rating-btn-icon")},ie=e=>{document.querySelector(".give-a-rating").addEventListener("click",s=>{s.preventDefault(),d.classList.remove("is-hidden"),d.setAttribute("id",e),document.querySelector(".modal-main").classList.add("is-hidden")})},B=()=>{d.reset(),d.classList.add("is-hidden"),q.textContent="0.0",x.forEach(e=>e.classList.remove("star-active")),x.forEach(e=>e.classList.remove("star-checked")),document.querySelector(".modal-main").classList.remove("is-hidden")},P=(e,t)=>{q.textContent=Number(e).toFixed(1),x.forEach((s,o)=>{o<=Number(e)-1?s.classList.add(t):s.classList.remove(t)})},_=()=>x.forEach(e=>e.classList.remove("star-active"));E.addEventListener("click",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;t&&(P(t,"star-checked"),_())});E.addEventListener("mouseover",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;d.classList.remove(h),t&&(q.textContent=Number(t).toFixed(1),P(t,"star-active"))});const A=e=>{e.target.classList.remove(h),e.target.removeEventListener("input",A)};d.addEventListener("submit",async e=>{var L;e.preventDefault();const t=((L=E.querySelector(":checked"))==null?void 0:L.value)||0,s=Object.entries(Z),o={};let n=!1;s.forEach(([l,y])=>{const b=d.elements[l];y.test(b.value.trim())?(o[l]=b.value,b.classList.remove(h)):(n=!0,b.classList.add(h),b.addEventListener("input",A),C(`Please enter a valid ${l}`))});const a=Number(t);if(a<=0)return C("Please enter a start rating"),d.classList.add(h);if(n)return;const{setLoader:r,deleteLoader:c}=oe({targetElement:d});o.rate=a;try{r();const l=d.getAttribute("id");await J(l,o),W("Rating submitted successfully"),B()}catch(l){l&&([...d.elements].forEach(y=>{l.response.data.message.includes(y.name)&&(y.classList.add(h),y.addEventListener("input",A))}),C(l.response.data.message))}finally{c()}});ne.addEventListener("click",()=>B());E.addEventListener("mouseout",e=>{var s,o;const t=((s=E.querySelector(":checked"))==null?void 0:s.value)||0;q.textContent=(o=Number(t))==null?void 0:o.toFixed(1),_()});const g="/team-final-project-js/assets/sprite-59e25010.svg",S=document.querySelector(".favorites-list-notification"),ae=e=>{const t=e.target.getAttribute("data-exercise-id"),s=m.load(f);m.save(f,s.filter(o=>o._id!==t))};async function $(){const e=m.load(f)||[],t=i.favorites,s=document.querySelector(".favorites-list-notification");s&&(e.length===0&&s?(s.classList.contains("is-hidden")&&s.classList.remove("is-hidden"),t.innerHTML=""):(re(e),document.querySelectorAll(".exercise-item-button-delete").forEach(o=>{o.addEventListener("click",ae)})))}$();function re(e){const t=document.querySelector(".favorites-exercise-list");t&&(t.innerHTML="",e.forEach(s=>{const o=ce(s);t.appendChild(o)}),S.classList.add("is-hidden"))}function ce(e){const{_id:t,name:s,burnedCalories:o,time:n,bodyPart:a,target:r}=e,c=document.createElement("li");return c.className="exercise-item",c.id=`${t}`,c.innerHTML=`
    <div class='exercise-item-wrapper'>
      <div class='exercise-item-firth-wrapper'>
        <p class='exercise-item-workout'>WORKOUT</p>

        <button type='button' class='exercise-item-button-delete' data-exercise-id='${t}'>
          <svg class='exercise-item-trash-icon' width='16' height='16'>
            <use href='${g}#trash'></use>
          </svg>
        </button>

        <button id='${t}' type='button' class='exercise-item-button'>
          Start&nbsp;&nbsp;
          <svg class='exercise-item-arrow' width='16' height='16'>
            <use href='${g}#arrow-right'></use>
          </svg>
        </button>
      </div>
      <div class='exercise-item-second-wrapper'>
        <div class='exercise-item-run-box'>
          <svg class='exercise-item-run' width='16' height='16'>
            <use href='${g}#run'></use>
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
            Body part:<span class='information-text-span'>${a}</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Target:<span class='information-text-span'>${r}</span>
          </p>
        </li>
      </ul>
    </div>
  `,c}document.addEventListener("DOMContentLoaded",$);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const s=e.target.getAttribute("data-exercise-id");de(s)}(m.load(f)||[]).length===0&&S&&S.classList.contains("is-hidden")&&S.classList.remove("is-hidden")});function de(e){const s=(m.load(f)||[]).filter(o=>o!==e);m.save(f,s),$()}i.divCategories.addEventListener("click",me);let u;const le=`Remove from favorites
        <svg class='modal-icon-favorites'>
          <use href='${g}#trash'></use>
        </svg>`,ue=`Add to favorites
        <svg class='modal-icon-favorites'>
          <use href='${g}#heart'></use>
        </svg>`,H=(e,t)=>e.find(s=>(s==null?void 0:s._id)===t),U=()=>{const e=m.load(f)||[];if(!!H(e,u==null?void 0:u._id)){document.querySelector(".add-to-favorites").innerHTML=le;return}document.querySelector(".add-to-favorites").innerHTML=ue};function me(e){e.preventDefault();const t=e.target.closest(".exercise-item-button");t&&fe(t.id)}function fe(e){Q(e).then(t=>{u=t,ge(t),ie(e),U()}),i.backdrop.classList.remove("is-hidden"),T(document.body),he()}const ve=document.querySelector(".modal-close-btn"),p=e=>{(e.target===i.backdrop||e.key==="Escape"||e.target===ve)&&(B(),i.backdrop.classList.add("is-hidden"),k(document.body),document.removeEventListener("click",p),document.removeEventListener("keydown",p),i.closeModalBtn.removeEventListener("click",p),i.addFavorite.removeEventListener("click",j))};function he(){i.backdrop.addEventListener("click",p),document.addEventListener("keydown",p),i.closeModalBtn.addEventListener("click",p),i.addFavorite.addEventListener("click",j)}function j(){const e=m.load(f)||[],t=!!H(e,u==null?void 0:u._id);m.save(f,t?e.filter(s=>s._id!==(u==null?void 0:u._id)):[...e,u]),U(),$(),I.show({message:t?"Removed from favorites":"Added to favorites"})}function ge(e){const t=e.gifUrl,s=e.name,o=Number(e.rating).toFixed(1),n=e.target,a=e.bodyPart,r=e.equipment,c=e.popularity,L=e.burnedCalories,l=e.description;i.modalContainer.innerHTML=`
      <div class='modal-img'>
        <img src='${t}' alt='${s}' class='image' />
      </div>
      <div class='modal-rest'>
        <h3 class='modal-title'>${s}</h3>
        <div class='rating-element'>
          <p class='rating-count' id='vote'>${o}</p>
          <svg class='modal-icon-star'>
            <use href='${g}#star'></use>
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
              <p class='count'>${a}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Equipment</p>
              <p class='count'>${r}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Popular</p>
              <p class='count'>${c}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Burned Calories</p>
              <p class='count'>${L}</p>
            </div>
          </div>
          <p class='about-info'>${l}</p>
        </div>`}document.addEventListener("DOMContentLoaded",pe);const O=e=>"/"+e.split("/").pop();function pe(){const e=O(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const o=O(new URL(s.href).pathname);o===e||e==="/"&&o==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function Le(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".nav-burger-menu-link");function n(){const c=e.classList.contains("is-open");t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),(c?k:T)(document.body)}function a(){e.classList.contains("is-open")&&n()}function r(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),k(document.body))}t.addEventListener("click",n),s.addEventListener("click",n),o.forEach(function(c){c.addEventListener("click",a)}),matchMedia("(min-width: 768px)").addEventListener("change",r)}document.addEventListener("DOMContentLoaded",Le);export{h as I,be as a,W as b,Ee as f,C as g,oe as l,Se as p,i as r,g as s,Z as v};
//# sourceMappingURL=burger-menu-1841c75f.js.map
