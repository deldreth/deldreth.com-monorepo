let e,t,n=0,s=!1;const o=window,l=document,r=(HTMLElement,{t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)}),c=(()=>!!l.documentElement.attachShadow)(),i=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),a=new WeakMap,f=e=>a.get(e),u=(e,t)=>a.set(t.o=e,t),$=(e,t)=>t in e,p=e=>console.error(e),m=new Map,h=new Map,d=[],y=[],w=[],b=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&r.t?v(g):r.raf(g))},_=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){p(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},g=()=>{n++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){p(e)}e.length=0})(d);const e=2==(6&r.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;_(y,e),_(w,e),y.length>0&&(w.push(...y),y.length=0),(s=d.length+y.length+w.length>0)?r.raf(g):n=0},v=e=>Promise.resolve().then(e),j=b(y,!0),S={},M=e=>null!=e,k=e=>e.toLowerCase(),L=e=>"object"==(e=typeof e)||"function"===e,O=()=>o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_components("./p-aea6ba87.js"),R=async()=>{const e=new RegExp("/components(\\.esm)?\\.js($|\\?|#)"),t=Array.from(l.querySelectorAll("script")).find(t=>e.test(t.src)||"components"===t.getAttribute("data-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,o.location.href));return U(e.href),window.customElements||await __sc_import_components("./p-020f8d73.js"),Object.assign(Object.assign({},n),{resourcesUrl:e.href})}},U=e=>{const t=(()=>`__sc_import_${"components".replace(/\s|-/g,"_")}`)();try{o[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const s=new Map;o[t]=n=>{const r=new URL(n,e).href;let c=s.get(r);if(!c){const e=l.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${t}.m = m;`],{type:"application/javascript"})),c=new Promise(n=>{e.onload=()=>{n(o[t].m),e.remove()}}),s.set(r,c),l.head.appendChild(e)}return c}}},x=new WeakMap,E=e=>"sc-"+e,C=(e,t,...n)=>{let s,o=null,l=!1,r=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((l="function"!=typeof e&&!L(o))&&(o=String(o)),l&&r?c[c.length-1].l+=o:c.push(l?{t:0,l:o}:o),r=l)};if(i(n),t){s=t.key||void 0;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,T);const a={t:0,i:e,u:c.length>0?c:null,$:void 0,p:t};return a.h=s,a},P={},T={forEach:(e,t)=>e.map(A).forEach(t),map:(e,t)=>e.map(A).map(t).map(W)},A=e=>({vattrs:e.p,vchildren:e.u,vkey:e.h,vname:e._,vtag:e.i,vtext:e.l}),W=e=>({t:0,p:e.vattrs,u:e.vchildren,h:e.vkey,_:e.vname,i:e.vtag,l:e.vtext}),F=(e,t,n,s,o,l)=>{if(n!==s)if("class"===t){const t=e.classList;H(n).forEach(e=>t.remove(e)),H(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!$(e,t))t=$(e,k(t))?k(t.substring(2)):k(t[2])+t.substring(3),n&&r.rel(e,t,n,!1),s&&r.ael(e,t,s,!1);else{const n=$(e,t),r=L(s);if((n||r&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{const n=null==s?"":s;e[t]!==n&&(e[t]=n)}}catch(e){}null==s||!1===s?e.removeAttribute(t):(!n||4&l||o)&&!r&&(s=!0===s?"":s.toString(),e.setAttribute(t,s))}},H=e=>e?e.split(/\s+/).filter(e=>e):[],q=(e,t,n,s)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,l=e&&e.p||S,r=t.p||S;for(s in l)s in r||F(o,s,l[s],void 0,n,t.t);for(s in r)F(o,s,l[s],r[s],n,t.t)},B=(t,n,s)=>{let o,r,c=n.u[s],i=0;if(M(c.l))c.$=l.createTextNode(c.l);else if(o=c.$=l.createElement(c.i),q(null,c,!1),M(e)&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.u)for(i=0;i<c.u.length;++i)(r=B(t,c,i))&&o.appendChild(r);return c.$},N=(e,n,s,o,l,r)=>{let c,i=e;for(i.shadowRoot&&k(i.tagName)===t&&(i=i.shadowRoot);l<=r;++l)o[l]&&(c=B(null,s,l))&&(o[l].$=c,i.insertBefore(c,n))},V=(e,t,n,s)=>{for(;t<=n;++t)M(e[t])&&(s=e[t].$,G(e[t],!0),s.remove())},z=(e,t)=>e.i===t.i&&e.h===t.h,D=(e,t)=>{const n=t.$=e.$,s=e.u,o=t.u;M(t.l)?e.l!==t.l&&(n.textContent=t.l):(q(e,t,!1),M(s)&&M(o)?((e,t,n,s)=>{let o,l,r=0,c=0,i=0,a=0,f=t.length-1,u=t[0],$=t[f],p=s.length-1,m=s[0],h=s[p];for(;r<=f&&c<=p;)if(null==u)u=t[++r];else if(null==$)$=t[--f];else if(null==m)m=s[++c];else if(null==h)h=s[--p];else if(z(u,m))D(u,m),u=t[++r],m=s[++c];else if(z($,h))D($,h),$=t[--f],h=s[--p];else if(z(u,h))D(u,h),e.insertBefore(u.$,$.$.nextSibling),u=t[++r],h=s[--p];else if(z($,m))D($,m),e.insertBefore($.$,u.$),$=t[--f],m=s[++c];else{for(i=-1,a=r;a<=f;++a)if(t[a]&&M(t[a].h)&&t[a].h===m.h){i=a;break}i>=0?((l=t[i]).i!==m.i?o=B(t&&t[c],n,i):(D(l,m),t[i]=void 0,o=l.$),m=s[++c]):(o=B(t&&t[c],n,c),m=s[++c]),o&&u.$.parentNode.insertBefore(o,u.$)}r>f?N(e,null==s[p+1]?null:s[p+1].$,n,s,c,p):c>p&&V(t,r,f)})(n,s,t,o):M(o)?(M(e.l)&&(n.textContent=""),N(n,null,t,o,0,o.length-1)):M(s)&&V(s,0,s.length-1))},G=(e,t)=>{e&&(e.p&&e.p.ref&&e.p.ref(t?null:e.$),e.u&&e.u.forEach(e=>{G(e,t)}))},I=(e,t,n,s)=>{t.t|=16;const o=t.o,l=()=>J(e,t,n,o,s);let r;return s&&(r=X(o,"componentWillLoad")),Y(r,()=>j(l))},J=(n,s,o,r,i)=>{s.t&=-17,n["s-lr"]=!1,i&&((e,t)=>{const n=((e,t)=>{let n=E(t.g),s=h.get(n);if(e=11===e.nodeType?e:l,s)if("string"==typeof s){let t,o=x.get(e=e.head||e);o||x.set(e,o=new Set),o.has(n)||((t=l.createElement("style")).innerHTML=s,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return n})(c&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(n,o),s.t|=4;try{((n,s,o,l)=>{t=k(n.tagName);const r=s.v||{t:0},c=(e=>e&&e.i===P)(l)?l:C(null,null,l);c.i=null,c.t|=4,s.v=c,c.$=r.$=n.shadowRoot||n,e=n["s-sc"],D(r,c)})(n,s,0,r.render())}catch(e){p(e)}s.t&=-5,n["s-lr"]=!0,s.t|=2,n["s-rc"].length>0&&(n["s-rc"].forEach(e=>e()),n["s-rc"].length=0),K(n,s)},K=(e,t,n)=>{if(!e["s-al"]){const s=t.j;64&t.t||(t.t|=64,e.classList.add("hydrated"),t.S(e),s||Q()),s&&((n=s["s-al"])&&(n.delete(e),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),t.j=void 0)}},Q=()=>{l.documentElement.classList.add("hydrated"),r.t|=2},X=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){p(e)}},Y=(e,t)=>e&&e.then?e.then(t):t(),Z=(e,t,n)=>{if(t.M){e.watchers&&(t.k=e.watchers);const s=Object.entries(t.M),o=e.prototype;if(s.forEach(([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>f(e).L.get(t))(this,e)},set(n){((e,t,n,s)=>{const o=f(this),l=o.O,r=o.L.get(t),c=o.t;if(!((n=((e,t)=>null==e||L(e)?e:1&t?String(e):e)(n,s.M[t][0]))===r||8&c&&void 0!==r)&&(o.L.set(t,n),o.o)){if(s.k&&128&c){const e=s.k[t];e&&e.forEach(e=>{try{o.o[e].call(o.o,n,r,t)}catch(e){p(e)}})}2==(22&c)&&I(l,o,s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,s){r.jmp(()=>{const n=t.get(e);this[n]=(null!==s||"boolean"!=typeof this[n])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,n])=>{const s=n[1]||e;return t.set(s,e),s})}}return e},ee=(e,t={})=>{const n=[],s=t.exclude||[],u=l.head,$=o.customElements,d=u.querySelector("meta[charset]"),y=l.createElement("style");let w;Object.assign(r,t),r.s=new URL(t.resourcesUrl||"./",l.baseURI).href,t.syncQueue&&(r.t|=4),e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],g:t[1],M:t[2],R:t[3],k:{}};!c&&1&o.t&&(o.t|=8);const l=o.g;o.U=e[0],s.includes(l)||$.get(l)||(n.push(l),$.define(l,Z(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,O:e,L:new Map};t.C=new Promise(e=>t.S=e),a.set(e,t)}})(e),1&o.t&&(c?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){w&&(clearTimeout(w),w=null),r.jmp(()=>((e,t)=>{if(0==(1&r.t)){const n=f(e);if(!(1&n.t)){n.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.j=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.M&&Object.entries(t.M).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),v(()=>(async(e,t,n,s,o)=>{if(0==(32&t.t)){t.t|=32,(o=(e=>{const t=e.g.replace(/-/g,"_"),n=e.U,s=m.get(n);return s?s[t]:__sc_import_components(`./${n}.entry.js`).then(e=>(m.set(n,e),e[t]),p)})(n)).then&&(o=await o),o.isProxied||(n.k=o.watchers,Z(o,n,2),o.isProxied=!0),t.t|=8;try{new o(t)}catch(e){p(e)}t.t&=-9,t.t|=128;const e=E(n.g);if(!h.has(e)&&o.style){let t=o.style;8&n.t&&(t=await __sc_import_components("./p-affe7c09.js").then(n=>n.scopeCss(t,e,!1))),((e,t,n)=>{let s=h.get(e);i&&n?(s=s||new CSSStyleSheet).replace(t):s=t,h.set(e,s)})(e,t,!!(1&n.t))}}const l=t.j,r=()=>I(e,t,n,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(r):r()})(e,n,t))}}})(this,o))}disconnectedCallback(){r.jmp(()=>void 0)}"s-init"(){const e=f(this);e.o&&K(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=f(e);2&n.t&&I(e,n,t,!1)}})(this,o)}componentOnReady(){return f(this).C}},o,1)))})),y.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),u.insertBefore(y,d?d.nextSibling:u.firstChild),r.jmp(()=>w=setTimeout(Q,30))};export{O as a,ee as b,C as h,R as p,u as r};