import"./assets/burger-menu-c432d785.js";/* empty css                      */import"./assets/vendor-ddeddc50.js";const o=JSON.parse(localStorage.getItem("savedExercises"))||[],a=document.querySelector(".favorites-list .js-list");function c(){if(a.innerHTML="",o.length===0){const t=document.querySelector(".favorites-list-notification");t.style.display="block"}else{const t=document.querySelector(".favorites-list-notification");t.style.display="none",o.forEach(e=>{const i=l(e);a.appendChild(i)})}}function l(t){const e=document.createElement("li");e.classList.add("favorites-list-item");const i=document.createElement("div");i.classList.add("favorites-list-item-nav");const s=document.createElement("h3");s.classList.add("favorites-list-item-title"),s.textContent=t.name;const n=document.createElement("div");return n.classList.add("favorites-list-item-other-details"),e.appendChild(i),e.appendChild(s),e.appendChild(n),e}window.addEventListener("load",c);
//# sourceMappingURL=commonHelpers.js.map
