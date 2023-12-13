import"./assets/header-9edadf21.js";/* empty css                      */import{a as d,i as l,b as p,e as y}from"./assets/vendor-11491b9f.js";d.defaults.baseURL="https://your-energy.b.goit.study/api";const f="filters",h="quote",E="subscription",L=async({page:e=1,perPage:o=10,filter:n="Muscles"}={})=>await d.get(`/${f}?filter=${n}&page=${e}&limit=${o}`).then(t=>t.data),b=async()=>await d.get(`/${h}`).then(e=>e.data),v=async e=>await d.post(`/${E}`,{email:e}).then(o=>o.data),a={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form")};async function u(e){const o=document.getElementById("categories-loader"),n=document.getElementById("categories-wrapper");o.style.display="block",n.style.display="none";try{const s=(await L({page:1,perPage:10,filter:e})).results.map(r=>{const i=M(r);return i.addEventListener("click",function(){console.log("Li element clicked!")}),i});a.divCategories.append(...s)}catch(t){if(t.response&&t.response.status===409){const r={title:"Error",message:t.response.data.message,position:"topRight",color:"red"};return l.show(r)}const s={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(s)}finally{setTimeout(()=>{o.style.display="none",n.style.display="flex"},500)}}function M({name:e,filter:o,imgURL:n}){const t=document.createElement("li");t.className="category-item";const s=document.createElement("img");s.className="category-item-img",s.src=n,s.alt="Category",s.loading="lazy";const r=document.createElement("div");r.className="category-item-bg";const i=document.createElement("p");i.className="category-item-title",i.textContent=C(e);const c=document.createElement("p");return c.className="category-item-subtitle",c.textContent=o,r.appendChild(i),r.appendChild(c),t.appendChild(s),t.appendChild(r),t}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}const g=["Muscles","Body parts","Equipment"];u(g[0]);const B=k(g);a.filtersRef.append(...B);function k(e){return e.map(o=>{const n=document.createElement("li");n.setAttribute("id",o),o==="Muscles"&&n.classList.add("filter-selected");const t=document.createElement("button");return t.innerHTML=o,t.addEventListener("click",()=>{w(o,n)}),n.appendChild(t),n})}function w(e,o){const n=document.getElementsByClassName("filter-selected");n[0]&&(n[0].classList.remove("filter-selected"),o.classList.add("filter-selected"),a.divCategories.innerHTML="",u(e))}a.getQuoteButton.addEventListener("click",async()=>{const e=await b();a.divQuote.innerHTML=JSON.stringify(e)});const S=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),T=e=>{e.preventDefault();const{email:o}=e.currentTarget.elements;if(!S(o.value.trim())){const t={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return l.show(t)}const n=o.value.trim();v(n).then(t=>{if(t.message){const s={title:"Success",message:t.message,position:"topRight",color:"green"};return l.show(s)}}).catch(t=>{if(t.response&&t.response.status===409){const r={title:"Error",message:t.response.data.message,position:"topRight",color:"red"};return l.show(r)}const s={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(s)}).finally(()=>a.footerForm.forEach(t=>t.reset()))};a.footerForm.forEach(e=>e.addEventListener("submit",T));const m=document.getElementById("myBtn");window.onscroll=function(){R()};function R(){document.body.scrollTop>0||document.documentElement.scrollTop>0?m.style.display="block":m.style.display="none"}m.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});function I(){const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),t=document.querySelectorAll(".nav-burger-menu-link");function s(){const c=e.classList.contains("is-open");o.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),p[c?"enableBodyScroll":"disableBodyScroll"](document.body)}function r(){e.classList.contains("is-open")&&s()}function i(c){c.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),y(document.body))}o.addEventListener("click",s),n.addEventListener("click",s),t.forEach(function(c){c.addEventListener("click",r)}),matchMedia("(min-width: 768px)").addEventListener("change",i)}document.addEventListener("DOMContentLoaded",I);
//# sourceMappingURL=commonHelpers2.js.map
