(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=()=>{let r=localStorage.getItem("cartProducts");return r?(r=JSON.parse(r),r):[]},n=(r,o)=>{const s=document.createElement("div");s.className=`
    fixed top-5 right-5 z-50
    px-6 py-4 mb-4 rounded-lg shadow-lg
    text-white font-semibold
    animate-slide-in
    ${r==="add"?"bg-green-500":"bg-red-500"}
  `,s.innerHTML=`
    <div class="flex items-center">
      <svg class="w-6 h-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        ${r==="add"?`
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM10 17.2L5.8 13l1.4-1.4 2.8 2.8 6.8-6.8 1.4 1.4L10 17.2z"/>
        `:`
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        `}
      </svg>
      <span>
        ${r==="add"?`Item #${o} added successfully!`:`Item #${o} removed.`}
      </span>
    </div>
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("animate-slide-out"),setTimeout(()=>s.remove(),500)},3e3)};export{c as g,n as s};
