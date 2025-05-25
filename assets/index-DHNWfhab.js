(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();async function g(){g=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).menu.map((t,e)=>`
        <li>
          <img src="${["./imags/img2.svg","./imags/flogop.jpg","/imags/icons8-search-32.png"][e]}" alt="" />
          <a href="${t.href}">${t.title}</a>
        </li>
      `),document.querySelector("#menu>nav>.right>ul").insertAdjacentHTML("afterbegin",g.join(""))}async function St(){let a=await(await fetch("https://negar1919.github.io/json-server/db.json")).json(),t=`
      <img src="${a.logo.src}" alt="${a.logo.alt}" id="logo-img" />
    `;document.querySelector("#logo").insertAdjacentHTML("afterbegin",t)}async function p(){p=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).menuboton.map(t=>`
           <div class="sub">
              <button id = "sub-btn">
             <img src="./imags/aparatimg.svg" alt="">
 <p>   ${t.title}   </p>
               
              </button>
            </div>
      `),document.querySelector("#menu>nav>.left>.sub").insertAdjacentHTML("afterbegin",p.join(""))}async function h(){h=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).menuboton1.map(t=>`
          <button>${t.title}</button>
      `),document.querySelector("#menu>nav>.left>.login").insertAdjacentHTML("afterbegin",h.join(""))}async function f(){f=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).slaider.map(t=>`
             <div class="swiper-slide">
                <img src=${t.src} alt=${t.alt}>
              </div>

      `),document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",f.join(""))}async function w(){w=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).parent.map(e=>`

      
             <div class="${e.class}">
                   ${e.title}</div>
                     

      `);let t=document.querySelector(".parent");t.innerHTML="",t.insertAdjacentHTML("afterbegin",w.join(""))}async function v(){v=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).divch3.map(e=>`
      <div class="${e.class}">
           <img src="${e.img}" alt="">
           <div class="mtn">    
              ${e.title}</div>
            </div>
      `);let t=document.querySelector(".divch3");t.innerHTML="",t.insertAdjacentHTML("afterbegin",v.join(""))}async function b(){b=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).parent2.map(e=>`
      <div class="${e.class}">
           <img src="${e.img}" alt="">
           <div class="mtn">    
              ${e.title}</div>
            </div>
      `);let t=document.querySelector(".parent2");t.innerHTML="",t.insertAdjacentHTML("afterbegin",b.join(""))}async function m(){m=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mahboob.map(e=>`
   <div class="${e.class}">
      ${e.title}

        </div>
      `);let t=document.querySelector(".mahboob");t.innerHTML="",t.insertAdjacentHTML("afterbegin",m.join(""))}async function y(){y=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).docme.map(e=>`
        <button class="${e.class}" data-target="${e.data}" >
          ${e.title} </button> 
      `);let t=document.querySelector(".docme");t.innerHTML="",t.insertAdjacentHTML("afterbegin",y.join(""))}async function L(){L=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tasvir.map((e,r)=>{if(r<=5)return`
      <img src=${e.src} id=${r} onclick="helper(this)" class="tasvirimg"  alt="">
      `});let t=document.querySelector(".tasvir");t.innerHTML="",t.insertAdjacentHTML("afterbegin",L.join(""))}function qt(){const n=document.querySelectorAll(".docme button");n.forEach(a=>a.classList.remove("active")),n[0].classList.add("active"),n.forEach(a=>{a.addEventListener("click",async()=>{a.getAttribute("data-target")=="filims"?(a.classList.add("active"),n[0].classList.remove("active")):(a.classList.add("active"),n[1].classList.remove("active"));const t=a.dataset.target,s=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tasvir.filter(c=>c.type===t).map((c,d)=>`<img src="${c.src}" class="tasvirimg"  id=${c.id-1} onclick="helper(this)"  alt="">`).join(""),o=document.querySelector(".tasvir");o.innerHTML=s})})}async function $(){$=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).forimg.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".divt");t.innerHTML="",t.insertAdjacentHTML("afterbegin",$.join(""))}async function M(){M=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mtnfilm.map(e=>`
        <div class="${e.class}">${e.title}</div>

      `);let t=document.querySelector(".fort");t.innerHTML="",t.insertAdjacentHTML("afterbegin",M.join(""))}async function H(){H=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).hp.map(e=>`
          <div class="${e.class}">${e.title}</div>

      `);let t=document.querySelector(".hp");t.innerHTML="",t.insertAdjacentHTML("afterbegin",H.join(""))}async function T(){T=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).stori.map(e=>`
               ${e.title}
      `);let t=document.querySelector(".stori");t.innerHTML="",t.insertAdjacentHTML("afterbegin",T.join(""))}async function S(){S=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).logofilim.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".logofilim");t.innerHTML="",t.insertAdjacentHTML("afterbegin",S.join(""))}async function q(){q=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v1.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v1");t.innerHTML="",t.insertAdjacentHTML("afterbegin",q.join(""))}async function A(){A=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover2.map(e=>`
      <div class="${e.class}">${e.title}</div>
                    <div class="${e.class}">${e.title}</div>
      `);let t=document.querySelector(".cover2");t.innerHTML="",t.insertAdjacentHTML("afterbegin",A.join(""))}async function E(){E=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part1.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part1");t.innerHTML="",t.insertAdjacentHTML("afterbegin",E.join(""))}async function C(){C=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v");t.innerHTML="",t.insertAdjacentHTML("afterbegin",C.join(""))}async function x(){x=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover3.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".cover3");t.innerHTML="",t.insertAdjacentHTML("afterbegin",x.join(""))}async function k(){k=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part");t.innerHTML="",t.insertAdjacentHTML("afterbegin",k.join(""))}async function z(){z=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v2.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v2");t.innerHTML="",t.insertAdjacentHTML("afterbegin",z.join(""))}async function O(){O=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover4.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".cover4");t.innerHTML="",t.insertAdjacentHTML("afterbegin",O.join(""))}async function P(){P=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part4.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part4");t.innerHTML="",t.insertAdjacentHTML("afterbegin",P.join(""))}async function N(){N=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover5.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v5");t.innerHTML="",t.insertAdjacentHTML("afterbegin",N.join(""))}async function D(){D=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover5.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".cover5");t.innerHTML="",t.insertAdjacentHTML("afterbegin",D.join(""))}async function I(){I=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part5.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part5");t.innerHTML="",t.insertAdjacentHTML("afterbegin",I.join(""))}async function V(){V=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v6.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v6");t.innerHTML="",t.insertAdjacentHTML("afterbegin",V.join(""))}async function W(){W=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover6.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".cover6");t.innerHTML="",t.insertAdjacentHTML("afterbegin",W.join(""))}async function B(){B=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part6.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part6");t.innerHTML="",t.insertAdjacentHTML("afterbegin",B.join(""))}async function F(){F=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v7.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v7");t.innerHTML="",t.insertAdjacentHTML("afterbegin",F.join(""))}async function K(){K=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover7.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".cover7");t.innerHTML="",t.insertAdjacentHTML("afterbegin",K.join(""))}async function Q(){Q=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part7.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part7");t.innerHTML="",t.insertAdjacentHTML("afterbegin",Q.join(""))}async function G(){G=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v8.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v8");t.innerHTML="",t.insertAdjacentHTML("afterbegin",G.join(""))}async function J(){J=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover8.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".cover8");t.innerHTML="",t.insertAdjacentHTML("afterbegin",J.join(""))}async function R(){R=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part8.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part8");t.innerHTML="",t.insertAdjacentHTML("afterbegin",R.join(""))}async function U(){U=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v9.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".v9");t.innerHTML="",t.insertAdjacentHTML("afterbegin",U.join("")),document.querySelector(".hv3").innerHTML='<img src="./imags/tasianp4.webp" alt="">'}async function X(){X=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover9.map(e=>`
        <img src="${e.src}" alt="">

      `);let t=document.querySelector(".cover9");t.innerHTML="",t.insertAdjacentHTML("afterbegin",X.join(""))}async function Y(){Y=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part9.map(e=>`
                    ${e.title}

      `);let t=document.querySelector(".part9");t.innerHTML="",t.insertAdjacentHTML("afterbegin",Y.join(""))}async function Z(){Z=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).one.map(e=>`
                   <div class="${e.class}"> 
            ${e.title}
              
            </div>
      `);let t=document.querySelector(".one");t.innerHTML="",t.insertAdjacentHTML("afterbegin",Z.join(""))}async function _(){_=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).photo.map(e=>`
                            <img src=${e.src} alt="">

      `);let t=document.querySelector(".photo");t.innerHTML="",t.insertAdjacentHTML("afterbegin",_.join(""))}async function tt(){tt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).laptop.map(e=>`
                <img src=${e.src} alt="">

                <p>
            ${e.title}
                
                </p> 
              
            </div>
      `);let t=document.querySelector(".laptop");t.innerHTML="",t.insertAdjacentHTML("afterbegin",tt.join(""))}async function et(){et=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ti.map(e=>`
               ${e.title}
      `);let t=document.querySelector(".ti");t.innerHTML="",t.insertAdjacentHTML("afterbegin",et.join(""))}async function at(){at=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mobile.map(e=>`
                <img src=${e.src} alt="">

                <p>
            ${e.title}
                
                </p> 
              
            </div>
      `);let t=document.querySelector(".mobile");t.innerHTML="",t.insertAdjacentHTML("afterbegin",at.join(""))}async function nt(){nt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ti1.map(e=>`
               ${e.title}
      `);let t=document.querySelector(".ti1");t.innerHTML="",t.insertAdjacentHTML("afterbegin",nt.join(""))}async function rt(){rt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).consol.map(e=>`
                <img src=${e.src} alt="">

                <p>
            ${e.title}
                
                </p> 
              
            </div>
      `);let t=document.querySelector(".consol");t.innerHTML="",t.insertAdjacentHTML("afterbegin",rt.join(""))}async function it(){it=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ti3.map(e=>`
               ${e.title}
      `);let t=document.querySelector(".ti3");t.innerHTML="",t.insertAdjacentHTML("afterbegin",it.join(""))}async function st(){st=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).buy1.map(e=>`
                   <img src=${e.src} alt="">
                <div class="${e.class}">    
                  ${e.title}
                </div>
      `);let t=document.querySelector(".buy1");t.innerHTML="",t.insertAdjacentHTML("afterbegin",st.join(""))}async function ot(){ot=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tamasha2.map(e=>`
               ${e.title}
      `);let t=document.querySelector(".tamasha2");t.innerHTML="",t.insertAdjacentHTML("afterbegin",ot.join(""))}async function ct(){ct=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).theree.map(e=>`
               ${e.title}
      `);let t=document.querySelector(".theree");t.innerHTML="",t.insertAdjacentHTML("afterbegin",ct.join(""))}async function dt(){dt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).laptopp.map(e=>`
              <img src=${e.src} alt="">
                <p>
                 ${e.title}
                </p>
      `);let t=document.querySelector(".laptopp");t.innerHTML="",t.insertAdjacentHTML("afterbegin",dt.join(""))}async function lt(){lt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tii.map(e=>`
                 ${e.title}
      `);let t=document.querySelector(".tii");t.innerHTML="",t.insertAdjacentHTML("afterbegin",lt.join(""))}async function ut(){ut=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mobilee.map(e=>`
              <img src=${e.src} alt="">
                <p>
                 ${e.title}
                </p>
      `);let t=document.querySelector(".mobilee");t.innerHTML="",t.insertAdjacentHTML("afterbegin",ut.join(""))}async function jt(){jt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).buuy1.map(e=>`
                      <div class=${e.class}>    
                   ${e.title}
                </div>
      `);let t=document.querySelector(".buuy1");t.innerHTML="",t.insertAdjacentHTML("afterbegin",jt.join(""))}async function gt(){gt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tii1.map(e=>`
                 ${e.title}
      `);let t=document.querySelector(".tii1");t.innerHTML="",t.insertAdjacentHTML("afterbegin",gt.join(""))}async function pt(){pt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tasvirtamasha.map(e=>`
                 <img src=${e.src} alt="">
      `);let t=document.querySelector(".tasvirtamasha");t.innerHTML="",t.insertAdjacentHTML("afterbegin",pt.join(""))}async function ht(){ht=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).frees22.map(e=>`
               ${e.title}
      `);let t=document.querySelector(".frees22");t.innerHTML="",t.insertAdjacentHTML("afterbegin",ht.join(""))}async function ft(){ft=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).wra.map(e=>`
                 <div class="${e.class}">
                  <img src=${e.src} alt="">
                  <div class="namefree">${e.title}</div>
                </div>
      `);let t=document.querySelector(".wra");t.innerHTML="",t.insertAdjacentHTML("afterbegin",ft.join(""))}async function wt(){let a=await(await fetch("https://negar1919.github.io/json-server/db.json")).json();console.log(a.girl),wt=a.girl.map(e=>`
                      <img src=${e.src} alt="">

      `);let t=document.querySelector(".girl");t.innerHTML="",t.insertAdjacentHTML("afterbegin",wt.join(""))}async function vt(){vt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).donia.map(e=>`
                    <div class="${e.class}"> 
                    ${e.title}
           </div>

      `);let t=document.querySelector(".donia");t.innerHTML="",t.insertAdjacentHTML("afterbegin",vt.join(""))}async function bt(){bt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).koodak.map(e=>`
                    <div class="${e.class}">
              <div class="mtnn2"> 
                ${e.title}
              </div>
              </div>

      `);let t=document.querySelector(".koodak");t.innerHTML="",t.insertAdjacentHTML("afterbegin",bt.join(""))}async function mt(){mt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).red.map(e=>`
                          <img src= ${e.src} alt="" >


      `);let t=document.querySelector(".red");t.innerHTML="",t.insertAdjacentHTML("afterbegin",mt.join(""))}async function yt(){yt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cinama.map(e=>`
                           <div class="cinama">
            ${e.title}
          </div>


      `);let t=document.querySelector(".cinama");t.innerHTML="",t.insertAdjacentHTML("afterbegin",yt.join(""))}async function Lt(){Lt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ekran.map(e=>`  
       <div class="${e.class}">
              <img src=${e.src} alt="">
              <div class="mtnekran">
                ${e.title}
              </div>
            </div>

      `);let t=document.querySelector(".ekran");t.innerHTML="",t.insertAdjacentHTML("afterbegin",Lt.join(""))}async function $t(){$t=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).twos.map(e=>`  
      <div class="${e.class}">
              <div class="${e.newclass1}">

              <img src=${e.src} alt="">
              <div class="${e.newclass2}">
              <div class="${e.newclass3}"> ${e.title}</div>
              <div class=${e.newclass3}> 
                <div class="${e.newclass4}">
                  ${e.newtitle1}
                </div>
             <div class="${e.newclass5}">
          <p>${e.p1}</p>
              <p>${e.p2}</p>
             </div>
             <div class="${e.newclass6}">
               ${e.newtitle2}
             </div>
              </div>
         
            </div>
            <div class="${e.newclass7}">
              <div class="${e.newclass8}">
                 ${e.newtitle3}
              </div>
            </div>
          </div>
            </div>

      `);let t=document.querySelector(".twos");t.innerHTML="",t.insertAdjacentHTML("afterbegin",$t.join(""))}async function Mt(){Mt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).zood.map(e=>`    <div class="${e.newclass1}">

              <img src=${e.src} alt="">
              <div class="${e.newclass2}">
              <div class=${e.newclass3}>${e.title}</div>
              <div class="${e.newclass3}"> 
                <div class="${e.newclass4}">${e.newtitle1}</div>
             <div class="${e.newclass5}">
            <p>${e.p1}</p>
              <p>${e.p2}</p>
             </div>
             <div class="${e.newclass6}">${e.newtitle2} </div>
              </div>
         
            </div>
            <div class="${e.newclass7}">
              <div class="${e.newclass8}"> ${e.newtitle3} </div>
            </div>
          </div>

      `);let t=document.querySelector(".zood");t.innerHTML="",t.insertAdjacentHTML("afterbegin",Mt.join(""))}async function Ht(){Ht=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).member.map(e=>`  
            <div class="member">
            ${e.title}
          </div>

      `);let t=document.querySelector(".member");t.innerHTML="",t.insertAdjacentHTML("afterbegin",Ht.join(""))}async function Tt(){Tt=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).all.map(e=>`  
         <div class=${e.class}>
                <div class=${e.class1}>
                  <div class=${e.class3}>
                    <img src=${e.src} alt="">
                  <div class=${e.class4}>             
                  ${e.title}

                  </div>
                    </div>
                  <div class=${e.class5}>
                    <img src=${e.src1} alt="">
                  </div>
               
                </div>
                <div class=${e.class6}>
                  عالیه خیلی فیلم و سریال های قشنگی داره 
                  ${e.title1}
                </div>
              </div>

      `);let t=document.querySelector(".all");t.innerHTML="",t.insertAdjacentHTML("afterbegin",Tt.join(""))}async function At(n){try{const t=await(await fetch("https://negar1919.github.io/json-server/db.json")).json(),e=document.getElementById(n);e.innerHTML="";let r=null;t.accordionItems.forEach(i=>{const s=document.createElement("div");s.className="accordion-question",s.textContent=i.question;const o=document.createElement("div");o.className="accordion-answer";const c=document.createElement("article");o.className="accordion-answer",c.textContent=i.answer,o.appendChild(c),s.addEventListener("click",()=>{const d=s.classList.contains("active");s.classList.toggle("active"),r=s.classList.contains("active")?s:null}),e.appendChild(s),e.appendChild(o)})}catch(a){console.error("خطا در دریافت آکاردئون:",a)}}async function Et(){try{const t=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).footerMenu[0],e=document.createElement("ul");e.classList.add("footer-menu"),t.items.forEach(r=>{const i=document.createElement("li"),s=document.createElement("a");if(s.href="#",s.textContent=r.title,i.appendChild(s),r.submenu){const o=document.createElement("div");o.classList.add("submenu");const c=document.createElement("ul");r.submenu.forEach(d=>{const u=document.createElement("li");if(typeof d=="string"){const l=document.createElement("a");l.href="#",l.textContent=d,u.appendChild(l)}else{const l=document.createElement("img");l.src="./imags/"+d.icon,l.alt=d.label;const j=document.createElement("a");j.href="#",j.textContent=d.label,u.appendChild(l),u.appendChild(j)}c.appendChild(u)}),o.appendChild(c),i.appendChild(o)}e.appendChild(i)}),document.querySelector(".menufooter .rfooter nav").appendChild(e)}catch(n){console.error("Error loading footer menu:",n)}}At("accordion-container");function Ct(){xt()}Ct();async function xt(){await g(),await St(),await p(),await h(),await f(),await w(),await v(),await b(),await m(),await y(),await qt(),await L(),await $(),await M(),await H(),await T(),await S(),await q(),await A(),await E(),await C(),await x(),await k(),await z(),await O(),await P(),await N(),await D(),await I(),await V(),await W(),await B(),await F(),await K(),await Q(),await G(),await J(),await R(),await U(),await X(),await Y(),await Z(),await _(),await tt(),await et(),await at(),await nt(),await rt(),await it(),await st(),await ot(),await ct(),await dt(),await lt(),await ut(),await gt(),await jt(),await pt(),await ht(),await ft(),await wt(),await vt(),await bt(),await mt(),await yt(),await Lt(),await $t(),await Mt(),await Ht(),await Tt(),await Et();var n=new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".sinfo",{slidesPerView:4,navigation:{nextEl:".sinfo-next",prevEl:".sinfo-prev"},direction:"horizontal"}),new Swiper(".smohtava",{slidesPerView:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},direction:"horizontal"}),new Swiper(".commentswiper",{slidesPerView:3,direction:a(),navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{resize:function(){n.changeDirection(a())}}});function a(){var t=window.innerWidth<=760?"vertical":"horizontal";return t}}
