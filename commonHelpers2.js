import{r as i,l as x,f as w,s as d,a as L,I as g,g as p,p as T,b as S,v as I}from"./assets/burger-menu-ff718f1d.js";/* empty css                      */import{P as M,i as m}from"./assets/vendor-a3df9737.js";const y=(e,t,r)=>{const s=document.getElementById("tui-pagination-container"),o=t<5?t:5,n={totalItems:e*t,itemsPerPage:e,visiblePages:o,centerAlign:!0,page:r},a=new M(s,n);return o<=1?s.style.display="none":s.style.display="block",a};i.exSearch.addEventListener("input",P);i.exSearch.addEventListener("keyup",E);i.btnSearch.addEventListener("click",E);let f=!1;function P(e){e.target.value,e.inputType===void 0&&f&&(f=!1,u())}function E(e){const t=i.exSearch.value.trim();e.target.name==="search-input"&&e.code!=="Enter"||!t||(f=!0,u(t))}function k(){return window.innerWidth<768?8:10}async function u(e="",t=1){const r=await JSON.parse(sessionStorage.getItem("category"));if(!r){const a={title:"Error",message:"Oops, not active category",position:"topRight",color:"red"};return m.show(a)}e&&(r.keyword=e);const s=k(),{setLoader:o,deleteLoader:n}=x({disableScroll:!0});try{o();const a=await w({page:t,perPage:s,filter:r});y(s,a.totalPages,t).on("afterMove",({page:c})=>{u(e,c),i.divCategoriesContainer.scrollIntoView()});let l="";a.results.length?(l=N(a.results),i.divCategories.classList.remove("exercises-list-bed-requast"),i.divCategories.classList.add("exercises-list")):(l=`<li><div class='categories-bad-requast'>
          <svg class='bad-requast' width='335' height='300'>
            <use href='${d}#BadRequast'></use>
          </svg>
        </div></li>`,i.divCategories.classList.add("exercises-list-bed-requast")),i.divCategories.innerHTML=l}catch{const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return m.show(a)}finally{setTimeout(()=>{n()},100)}}function N(e){return e.map(({name:t,target:r,rating:s,burnedCalories:o,time:n,_id:a,bodyPart:l})=>`
        <li class='exercise-item'>
          <div class='exercise-item-wrapper'>
            <div class='exercise-item-firth-wrapper'>
              <p class='exercise-item-workout'>WORKOUT</p>
              <p class='exercise-item-rating'>${s.toFixed(1)}</p>
              <svg class='exercise-item-star' width='18' height='18'>
                <use href='${d}#star'></use>
              </svg>
              <button type='button' class='exercise-item-button' id='${a}'>
                Start&nbsp;&nbsp;
                <svg class='exercise-item-arrow' width='16' height='16'>
                  <use href='${d}#arrow-right'></use>
                </svg>
              </button>
            </div>
            <div class='exercise-item-second-wrapper'>
              <div class='exercise-item-run-box'>
                <svg class='exercise-item-run' width='16' height='16'>
                  <use href='${d}#run'></use>
                </svg>
              </div>
              <h3 class='exercise-item-subtitle'>${t}</h3>
            </div>
            <ul class='exercise-item-list'>
              <li class='exercise-item-list-information'>
                <p class='information-text burned-calories'>
                  Burned calories:<span class='information-text-span'>${o} / ${n} min</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text body-part'>
                  Body part:<span class='information-text-span'>${l}</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text target'>
                  Target:<span class='information-text-span'>${r}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function v(e,t){i.divCategories.innerHTML="";const{setLoader:r,deleteLoader:s}=x({disableScroll:!0});try{r();const o=window.innerWidth<=768?9:12,n=await L({page:t,perPage:o,filter:e});y(o,n.totalPages,t).on("afterMove",({page:l})=>{v(e,l),i.divCategoriesContainer.scrollIntoView()});const a=n.results.map(l=>{const c=$(l);return c.addEventListener("click",()=>{F(c)}),c});i.divCategories.append(...a),b(),i.divExSearch.style.display="none"}catch(o){if(o.response&&o.response.status===409){const a={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return m.show(a)}const n={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return m.show(n)}finally{setTimeout(()=>{s()},100)}}function $({name:e,filter:t,imgURL:r}){const s=document.createElement("li");s.className="category-item";const o=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+o,e);const n=document.createElement("img");n.className="category-item-img",n.src=r,n.alt="Category",n.loading="lazy";const a=document.createElement("div");a.className="category-item-bg";const l=document.createElement("p");l.className="category-item-title",l.textContent=B(e);const c=document.createElement("p");return c.className="category-item-subtitle",c.textContent=t,a.appendChild(l),a.appendChild(c),s.appendChild(n),s.appendChild(a),s}function B(e){return e.charAt(0).toUpperCase()+e.slice(1)}function F(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),b(e.lastElementChild.children[0].innerText),i.divExSearch.style.display="flex",u()}function b(e=""){e?(i.exTitel.firstChild.textContent+=" / ",i.exTitel.lastElementChild.textContent=e):(i.exTitel.firstChild.textContent="Exercises",i.exTitel.lastElementChild.textContent=e)}const C=["Muscles","Body parts","Equipment"];v(C[0],1);const R=O(C);i.filtersRef.append(...R);function O(e){return e.map(t=>{const r=document.createElement("li");r.setAttribute("id",t),t==="Muscles"&&r.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{q(t,r)}),r.appendChild(s),r})}function q(e,t){const r=document.getElementsByClassName("filter-selected");r[0]&&(r[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),i.divCategories.innerHTML="",i.exSearch.value="",i.divCategories.classList.remove("exercises-list"),i.divCategories.classList.remove("exercises-list-bed-requast"),v(e,1))}const A=e=>I.email.test(e),H=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!A(t.value.trim()))return t.classList.add(g),p("The email must be in format test@gmail.com");const r=t.value.trim();T(r).then(s=>{if(s.message)return S(s.message)}).catch(s=>s.response&&s.response.status===409?(t.classList.remove(g),p(s.response.data.message)):p("Oops, something went wrong, try again later")).finally(()=>i.footerForm.forEach(s=>s.reset()))};i.footerForm.forEach(e=>e.addEventListener("submit",H));i.footerForm.forEach(e=>{const{email:t}=e.elements;t.addEventListener("input",()=>t.classList.remove(g))});const h=document.getElementById("scroll-up-btn");window.onscroll=function(){U()};function U(){document.body.scrollTop>window.innerHeight/2||document.documentElement.scrollTop>window.innerHeight/2?h.style.display="block":h.style.display="none"}h.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
