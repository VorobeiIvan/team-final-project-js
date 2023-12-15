import{b as y,r as n,a as m,c as x,p as E}from"./assets/favorites-dfdb45be.js";/* empty css                      */import{P as b,d as w,e as C,i as l}from"./assets/vendor-5fe488fb.js";const h=(e,s,i)=>{const t=document.getElementById("tui-pagination-container"),o=s<5?s:5,a={totalItems:e*s,itemsPerPage:e,visiblePages:o,centerAlign:!0,page:i},r=new b(t,a);return o<=1?t.style.display="none":t.style.display="block",r},f=({targetElement:e,width:s,height:i,disableScroll:t=!1}={})=>{const o=e||document.body,a=document.createElement("div");a.classList.add("loader-container");const r=document.createElement("div");return r.classList.add("loader"),r.style.width=s||"100px",r.style.height=i||"100px",{setLoader:()=>{t&&w(document.body),a.appendChild(r),o.appendChild(a)},deleteLoader:()=>{o.removeChild(a),t&&C(document.body)}}};document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",L);function L(e){const s=e.target.value;(e.keyCode===13||e.code==="Enter")&&u(s)}function T(){return window.innerWidth<768?8:10}async function u(e="",s=1){const i=await JSON.parse(sessionStorage.getItem("category"));if(!i){const r={title:"Error",message:"Oops, not active category",position:"topRight",color:"red"};return l.show(r)}e&&(i.keyword=e);const t=T(),{setLoader:o,deleteLoader:a}=f({disableScroll:!0});try{o();const r=await y({page:s,perPage:t,filter:i});h(t,r.totalPages,s).on("afterMove",({page:d})=>{u(e,d),n.divCategoriesContainer.scrollIntoView()});let c="";r.results.length?(c=M(r.results),n.divCategories.classList.remove("exercises-list-bed-requast"),n.divCategories.classList.add("exercises-list")):(c=`<li><div class='categories-bad-requast'>
          <svg class='bad-requast' width='335' height='300'>
            <use href='${m}#BadRequast'></use>
          </svg>
        </div></li>`,n.divCategories.classList.add("exercises-list-bed-requast")),n.divCategories.innerHTML=c}catch{const r={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(r)}finally{setTimeout(()=>{a()},100)}}function M(e){return e.map(({name:s,target:i,rating:t,burnedCalories:o,time:a,_id:r,bodyPart:c})=>`
        <li class='exercise-item'>
          <div class='exercise-item-wrapper'>
            <div class='exercise-item-firth-wrapper'>
              <p class='exercise-item-workout'>WORKOUT</p>
              <p class='exercise-item-rating'>${t.toFixed(1)}</p>
              <svg class='exercise-item-star' width='18' height='18'>
                <use href='${m}#star'></use>
              </svg>
              <button type='button' class='exercise-item-button' id='${r}'>
                Start&nbsp;&nbsp;
                <svg class='exercise-item-arrow' width='16' height='16'>
                  <use href='${m}#arrow-right'></use>
                </svg>
              </button>
            </div>
            <div class='exercise-item-second-wrapper'>
              <div class='exercise-item-run-box'>
                <svg class='exercise-item-run' width='16' height='16'>
                  <use href='${m}#run'></use>
                </svg>
              </div>
              <h3 class='exercise-item-subtitle'>${s}</h3>
            </div>
            <ul class='exercise-item-list'>
              <li class='exercise-item-list-information'>
                <p class='information-text burned-calories'>
                  Burned calories:<span class='information-text-span'>${o} / ${a} min</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text body-part'>
                  Body part:<span class='information-text-span'>${c}</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text target'>
                  Target:<span class='information-text-span'>${i}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function g(e,s){n.divCategories.innerHTML="";const{setLoader:i,deleteLoader:t}=f({disableScroll:!0});try{i();const o=await x({page:s,perPage:12,filter:e});h(12,o.totalPages,s).on("afterMove",({page:r})=>{g(e,r),n.divCategoriesContainer.scrollIntoView()});const a=o.results.map(r=>{const c=S(r);return c.addEventListener("click",()=>{$(c)}),c});n.divCategories.append(...a)}catch(o){if(o.response&&o.response.status===409){const r={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return l.show(r)}const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(a)}finally{setTimeout(()=>{t()},100)}}function S({name:e,filter:s,imgURL:i}){const t=document.createElement("li");t.className="category-item";const o=s==="Body parts"?"bodypart":s;t.setAttribute("data-"+o,e);const a=document.createElement("img");a.className="category-item-img",a.src=i,a.alt="Category",a.loading="lazy";const r=document.createElement("div");r.className="category-item-bg";const c=document.createElement("p");c.className="category-item-title",c.textContent=R(e);const d=document.createElement("p");return d.className="category-item-subtitle",d.textContent=s,r.appendChild(c),r.appendChild(d),t.appendChild(a),t.appendChild(r),t}function R(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),n.divExSearch.classList.remove("is-hidden"),u()}const v=["Muscles","Body parts","Equipment"];g(v[0],1);const k=B(v);n.filtersRef.append(...k);function B(e){return e.map(s=>{const i=document.createElement("li");i.setAttribute("id",s),s==="Muscles"&&i.classList.add("filter-selected");const t=document.createElement("button");return t.innerHTML=s,t.addEventListener("click",()=>{P(s,i)}),i.appendChild(t),i})}function P(e,s){const i=document.getElementsByClassName("filter-selected");i[0]&&(i[0].classList.remove("filter-selected"),s.classList.add("filter-selected"),n.divCategories.innerHTML="",n.exSearch.value="",n.divCategories.classList.remove("exercises-list"),n.divCategories.classList.remove("exercises-list-bed-requast"),n.divExSearch.classList.add("is-hidden"),g(e,1))}const N=e=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e),q=e=>{e.preventDefault();const{email:s}=e.currentTarget.elements;if(!N(s.value.trim())){const t={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return l.show(t)}const i=s.value.trim();E(i).then(t=>{if(t.message){const o={title:"Success",message:t.message,position:"topRight",color:"green"};return l.show(o)}}).catch(t=>{if(t.response&&t.response.status===409){const a={title:"Error",message:t.response.data.message,position:"topRight",color:"red"};return l.show(a)}const o={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(o)}).finally(()=>n.footerForm.forEach(t=>t.reset()))};n.footerForm.forEach(e=>e.addEventListener("submit",q));const p=document.getElementById("scroll-up-btn");window.onscroll=function(){F()};function F(){document.body.scrollTop>0||document.documentElement.scrollTop>0?p.style.display="block":p.style.display="none"}p.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
