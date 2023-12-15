import{f as b,r as t,s as p,a as y,p as E,b as C,c as d}from"./assets/favorites-160748e4.js";/* empty css                      */import{P as L,i as c}from"./assets/vendor-c7a0172b.js";const x=(e,s,o)=>{const i=document.getElementById("tui-pagination-container"),a=s<5?s:5,r={totalItems:e*s,itemsPerPage:e,visiblePages:a,centerAlign:!0,page:o},n=new L(i,r);return a<=1?i.style.display="none":i.style.display="block",n};document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",w);function w(e){const s=e.target.value;(e.keyCode===13||e.code==="Enter")&&v(s)}function k(){return window.innerWidth<768?8:10}async function v(e="",s=1){const o=await JSON.parse(sessionStorage.getItem("category"));if(!o){console.log("not active category!!!");return}e&&(o.keyword=e);const i=k();try{const a=await b({page:s,perPage:i,filter:o});let r="";a.results.length?r=F(a.results):r=`<li><div class="categories-bad-requast">
          <svg class="bad-requast" width="335" height="300">
            <use href="./images/sprite.svg#BadRequast"></use>
          </svg>
        </div></li>`,t.divCategories.innerHTML=r,t.divCategories.classList.add("exercises-list")}catch{console.log("ooops!!!")}}function F(e){return e.map(({name:s,target:o,rating:i,burnedCalories:a,time:r,_id:n,bodyPart:l})=>`
        <li class="exercise-item" id="${n}">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${i}</p>
              <svg class="exercise-item-star" width="18" height="18">
                <use href="${p}#star"></use>
              </svg>
              <button type="button" class="exercise-item-button">
                Start&nbsp;&nbsp;
                <svg class="exercise-item-arrow" width="16" height="16">
                  <use href="${p}#arrow-right"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-item-second-wrapper">
              <div class="exercise-item-run-box">
                <svg class="exercise-item-run" width="16" height="16">
                  <use href="${p}#run"></use>
                </svg>
              </div>
              <h3 class="exercise-item-subtitle">${s}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text burned-calories">
                  Burned calories:<span class="information-text-span">${a} / ${r} min</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text body-part">
                  Body part:<span class="information-text-span">${l}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text target">
                  Target:<span class="information-text-span">${o}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function g(e,s){t.divCategories.innerHTML="",t.divCategories.classList.remove("exercises-list");try{const o=await y({page:s,perPage:12,filter:e});x(12,o.totalPages,s).on("afterMove",({page:a})=>{g(e,a)});const i=o.results.map(a=>{const r=T(a);return r.addEventListener("click",()=>{R(r)}),r});t.divCategories.append(...i)}catch(o){if(o.response&&o.response.status===409){const a={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return c.show(a)}const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return c.show(i)}}function T({name:e,filter:s,imgURL:o}){const i=document.createElement("li");i.className="category-item";const a=s==="Body parts"?"bodypart":s;i.setAttribute("data-"+a,e);const r=document.createElement("img");r.className="category-item-img",r.src=o,r.alt="Category",r.loading="lazy";const n=document.createElement("div");n.className="category-item-bg";const l=document.createElement("p");l.className="category-item-title",l.textContent=$(e);const m=document.createElement("p");return m.className="category-item-subtitle",m.textContent=s,n.appendChild(l),n.appendChild(m),i.appendChild(r),i.appendChild(n),i}function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}function R(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),t.divExSearch.classList.remove("is-hidden"),v()}const f=["Muscles","Body parts","Equipment"];g(f[0],1);const S=M(f);t.filtersRef.append(...S);function M(e){return e.map(s=>{const o=document.createElement("li");o.setAttribute("id",s),s==="Muscles"&&o.classList.add("filter-selected");const i=document.createElement("button");return i.innerHTML=s,i.addEventListener("click",()=>{A(s,o)}),o.appendChild(i),o})}function A(e,s){const o=document.getElementsByClassName("filter-selected");o[0]&&(o[0].classList.remove("filter-selected"),s.classList.add("filter-selected"),t.divCategories.innerHTML="",t.exSearch.value="",t.divCategories.classList.remove("exercises-list"),t.divExSearch.classList.add("is-hidden"),g(e,1))}const O=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),I=e=>{e.preventDefault();const{email:s}=e.currentTarget.elements;if(!O(s.value.trim())){const i={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return c.show(i)}const o=s.value.trim();E(o).then(i=>{if(i.message){const a={title:"Success",message:i.message,position:"topRight",color:"green"};return c.show(a)}}).catch(i=>{if(i.response&&i.response.status===409){const r={title:"Error",message:i.response.data.message,position:"topRight",color:"red"};return c.show(r)}const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return c.show(a)}).finally(()=>t.footerForm.forEach(i=>i.reset()))};t.footerForm.forEach(e=>e.addEventListener("submit",I));t.divCategories.addEventListener("click",N);t.favorites.addEventListener("click",handleFavoritesCardClick);function N(e,s){e.preventDefault();const o=e.target.closest(".exercise-item");if(!o)return;const i=o.id.slice(0,o.id.length-4);B(i)}function B(e){C(e).then(s=>{q(s)}),t.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),t.backdrop.classList.add("scroll"),P()}function P(){document.addEventListener("click",e=>{e.target===t.backdrop&&(t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll"))}),t.closeModalBtn.addEventListener("click",()=>{t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll")})}t.addFavorite.addEventListener("click",e=>{if(e.target.textContent=="Remove from favorites"){const s=d.load(t.FAVORITES_KEY);for(let o=0;o<s.length;o++)JSON.stringify(s[o])===JSON.stringify(data)&&(s.splice(o,1),console.log(s),d.save(t.FAVORITES_KEY,s),c.show({message:"Removed from favorites"}),t.addFavorite.textContent="Add to favorites",t.addFavorite.style.backgroundColor="#fff",t.addFavorite.style.color="#000")}else{if(!d.load(t.FAVORITES_KEY)||d.load(t.FAVORITES_KEY).length===0){d.save(t.FAVORITES_KEY,[data]),c.show({message:"Added to favorites"}),t.addFavorite.textContent="Remove from favorites",t.addFavorite.style.backgroundColor="#ff6b01",t.addFavorite.style.color="#fff";return}const s=d.load(t.FAVORITES_KEY);s.push(data),d.save(t.FAVORITES_KEY,s),c.show({message:"Added to favorites"}),t.addFavorite.textContent="Remove from favorites",t.addFavorite.style.backgroundColor="#ff6b01",t.addFavorite.style.color="#fff"}t.addFavorite.removeEventListener});function q(e){const s=e.gifUrl,o=e.name,i=Number(e.rating).toFixed(1),a=e.target,r=e.bodyPart,n=e.equipment,l=e.popularity,m=e.burnedCalories,h=e.description;return t.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${s}" alt="${o}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${o}</h3>
        <div class="rating-element">
          <p class="rating-count" id="vote">${i}</p>
          <svg class="modal-icon-star">
            <use href="${p}#star"></use>
          </svg>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${a}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${r}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${n}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${l}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${m}</p>
            </div>
          </div>
          <p class="about-info">${h}</p>
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
      </div>`}const u=document.getElementById("scroll-up-btn");window.onscroll=function(){K()};function K(){document.body.scrollTop>0||document.documentElement.scrollTop>0?u.style.display="block":u.style.display="none"}u.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
