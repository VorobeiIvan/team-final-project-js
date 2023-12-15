import{f as E,r as t,s as p,a as C,p as L,b as x,c as m}from"./assets/favorites-477248d4.js";/* empty css                      */import{P as w,d as k,e as F,i as l}from"./assets/vendor-0e2eef0b.js";const f=(e,s,a)=>{const o=document.getElementById("tui-pagination-container"),r=s<5?s:5,n={totalItems:e*s,itemsPerPage:e,visiblePages:r,centerAlign:!0,page:a},i=new w(o,n);return r<=1?o.style.display="none":o.style.display="block",i},h=({targetElement:e,width:s,height:a,disableScroll:o=!1}={})=>{const r=e||document.body,n=document.createElement("div");n.classList.add("loader-container");const i=document.createElement("div");return i.classList.add("loader"),i.style.width=s||"100px",i.style.height=a||"100px",{setLoader:()=>{o&&k(document.body),n.appendChild(i),r.appendChild(n)},deleteLoader:()=>{r.removeChild(n),o&&F(document.body)}}};document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",T);function T(e){const s=e.target.value;(e.keyCode===13||e.code==="Enter")&&g(s)}function S(){return window.innerWidth<768?8:10}async function g(e="",s=1){const a=await JSON.parse(sessionStorage.getItem("category"));if(!a){console.log("not active category!!!");return}e&&(a.keyword=e);const o=S(),{setLoader:r,deleteLoader:n}=h({disableScroll:!0});try{r();const i=await E({page:s,perPage:o,filter:a});f(o,i.totalPages,s).on("afterMove",({page:d})=>{g(e,d),t.divCategoriesContainer.scrollIntoView()});let c="";i.results.length?c=$(i.results):c=`<li><div class='categories-bad-requast'>
          <svg class='bad-requast' width='335' height='300'>
            <use href='./images/sprite.svg#BadRequast'></use>
          </svg>
        </div></li>`,t.divCategories.innerHTML=c,t.divCategories.classList.add("exercises-list")}catch{console.log("ooops!!!")}finally{setTimeout(()=>{n()},100)}}function $(e){return e.map(({name:s,target:a,rating:o,burnedCalories:r,time:n,_id:i,bodyPart:c})=>`
        <li class='exercise-item' id='${i}'>
          <div class='exercise-item-wrapper'>
            <div class='exercise-item-firth-wrapper'>
              <p class='exercise-item-workout'>WORKOUT</p>
              <p class='exercise-item-rating'>${o}</p>
              <svg class='exercise-item-star' width='18' height='18'>
                <use href='${p}#star'></use>
              </svg>
              <button type='button' class='exercise-item-button'>
                Start&nbsp;&nbsp;
                <svg class='exercise-item-arrow' width='16' height='16'>
                  <use href='${p}#arrow-right'></use>
                </svg>
              </button>
            </div>
            <div class='exercise-item-second-wrapper'>
              <div class='exercise-item-run-box'>
                <svg class='exercise-item-run' width='16' height='16'>
                  <use href='${p}#run'></use>
                </svg>
              </div>
              <h3 class='exercise-item-subtitle'>${s}</h3>
            </div>
            <ul class='exercise-item-list'>
              <li class='exercise-item-list-information'>
                <p class='information-text burned-calories'>
                  Burned calories:<span class='information-text-span'>${r} / ${n} min</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text body-part'>
                  Body part:<span class='information-text-span'>${c}</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text target'>
                  Target:<span class='information-text-span'>${a}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function v(e,s){t.divCategories.innerHTML="";const{setLoader:a,deleteLoader:o}=h({disableScroll:!0});try{a();const r=await C({page:s,perPage:12,filter:e});f(12,r.totalPages,s).on("afterMove",({page:i})=>{v(e,i),t.divCategoriesContainer.scrollIntoView()});const n=r.results.map(i=>{const c=R(i);return c.addEventListener("click",()=>{A(c)}),c});t.divCategories.append(...n)}catch(r){if(r.response&&r.response.status===409){const i={title:"Error",message:r.response.data.message,position:"topRight",color:"red"};return l.show(i)}const n={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(n)}finally{setTimeout(()=>{o()},100)}}function R({name:e,filter:s,imgURL:a}){const o=document.createElement("li");o.className="category-item";const r=s==="Body parts"?"bodypart":s;o.setAttribute("data-"+r,e);const n=document.createElement("img");n.className="category-item-img",n.src=a,n.alt="Category",n.loading="lazy";const i=document.createElement("div");i.className="category-item-bg";const c=document.createElement("p");c.className="category-item-title",c.textContent=M(e);const d=document.createElement("p");return d.className="category-item-subtitle",d.textContent=s,i.appendChild(c),i.appendChild(d),o.appendChild(n),o.appendChild(i),o}function M(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),t.divExSearch.classList.remove("is-hidden"),g()}const y=["Muscles","Body parts","Equipment"];v(y[0],1);const O=I(y);t.filtersRef.append(...O);function I(e){return e.map(s=>{const a=document.createElement("li");a.setAttribute("id",s),s==="Muscles"&&a.classList.add("filter-selected");const o=document.createElement("button");return o.innerHTML=s,o.addEventListener("click",()=>{B(s,a)}),a.appendChild(o),a})}function B(e,s){const a=document.getElementsByClassName("filter-selected");a[0]&&(a[0].classList.remove("filter-selected"),s.classList.add("filter-selected"),t.divCategories.innerHTML="",t.exSearch.value="",t.divCategories.classList.remove("exercises-list"),t.divExSearch.classList.add("is-hidden"),v(e,1))}const P=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),N=e=>{e.preventDefault();const{email:s}=e.currentTarget.elements;if(!P(s.value.trim())){const o={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return l.show(o)}const a=s.value.trim();L(a).then(o=>{if(o.message){const r={title:"Success",message:o.message,position:"topRight",color:"green"};return l.show(r)}}).catch(o=>{if(o.response&&o.response.status===409){const n={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return l.show(n)}const r={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(r)}).finally(()=>t.footerForm.forEach(o=>o.reset()))};t.footerForm.forEach(e=>e.addEventListener("submit",N));t.divCategories.addEventListener("click",V);t.favorites.addEventListener("click",handleFavoritesCardClick);function V(e,s){e.preventDefault();const a=e.target.closest(".exercise-item");a&&q(a.id)}function q(e){x(e).then(s=>{Y(s)}),t.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),t.backdrop.classList.add("scroll"),K()}function K(){document.addEventListener("click",e=>{e.target===t.backdrop&&(t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll"))}),t.closeModalBtn.addEventListener("click",()=>{t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll")})}t.addFavorite.addEventListener("click",e=>{if(e.target.textContent=="Remove from favorites"){const s=m.load(t.FAVORITES_KEY);for(let a=0;a<s.length;a++)JSON.stringify(s[a])===JSON.stringify(data)&&(s.splice(a,1),console.log(s),m.save(t.FAVORITES_KEY,s),l.show({message:"Removed from favorites"}),t.addFavorite.textContent="Add to favorites",t.addFavorite.style.backgroundColor="#fff",t.addFavorite.style.color="#000")}else{if(!m.load(t.FAVORITES_KEY)||m.load(t.FAVORITES_KEY).length===0){m.save(t.FAVORITES_KEY,[data]),l.show({message:"Added to favorites"}),t.addFavorite.textContent="Remove from favorites",t.addFavorite.style.backgroundColor="#ff6b01",t.addFavorite.style.color="#fff";return}const s=m.load(t.FAVORITES_KEY);s.push(data),m.save(t.FAVORITES_KEY,s),l.show({message:"Added to favorites"}),t.addFavorite.textContent="Remove from favorites",t.addFavorite.style.backgroundColor="#ff6b01",t.addFavorite.style.color="#fff"}t.addFavorite.removeEventListener});function Y(e){const s=e.gifUrl,a=e.name,o=Number(e.rating).toFixed(1),r=e.target,n=e.bodyPart,i=e.equipment,c=e.popularity,d=e.burnedCalories,b=e.description;return t.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${s}" alt="${a}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${a}</h3>
        <div class="rating-element">
          <p class="rating-count" id="vote">${o}</p>
          <svg class="modal-icon-star">
            <use href="${p}#star"></use>
          </svg>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${r}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${n}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${i}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${c}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${d}</p>
            </div>
          </div>
          <p class="about-info">${b}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
            <svg class="modal-icon-heart">
              <use href="${p}#heart"></use>
            </svg>
          </button>
          <button class="button give-a-rating" type="button">
            Give a rating
          </button>
        </div>
      </div>`}const u=document.getElementById("scroll-up-btn");window.onscroll=function(){_()};function _(){document.body.scrollTop>0||document.documentElement.scrollTop>0?u.style.display="block":u.style.display="none"}u.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
