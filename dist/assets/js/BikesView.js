import{B as h}from"./BikesFv.js";import{_ as u,r as k,o as c,c as l,a as s,F as r,b as m,n as g,t as w,d as o,w as f,e as v,p as S,f as x,g as n,h as y,i as B,j as C,k as I}from"./index.js";const $=e=>(S("data-v-39cb1f61"),e=e(),x(),e),z={class:"lcl-bikes-cat"},E=$(()=>s("h2",{class:"lcl-bikes-cat__ttl"},[n(" CHOOSE "),s("br",{class:"dn-w"}),n(" YOUR "),s("br",{class:"dn-w"}),n(" STYLE ")],-1)),V={class:"lcl-bikes-cat__list"},F={class:"lcl-bikes-cat-loop"},N={class:"lcl-bikes-cat-loop__in"},O=["src"],P={class:"lcl-bikes-cat-item__img"},L=["srcset"],M=["src"],R={class:"lcl-bikes-cat__cnt"},T={class:"lcl-bikes-cat__name"},U={__name:"Category",setup(e){const _=["road","time_trial","off-road","e-bike"];return(d,t)=>{const p=k("router-link");return c(),l("section",z,[E,s("ul",V,[(c(),l(r,null,m(_,(a,i)=>s("li",{key:i,class:g(["lcl-bikes-cat-item",{"lcl-bikes-cat-item--reverse":i===1||i===3}])},[s("div",F,[s("div",N,[(c(),l(r,null,m(2,b=>s("img",{key:b,class:"lcl-bike-cat-loop__txt",src:`/assets/img/bikes/txt_${a.replace("_","-")}.svg`,alt:"",width:"2751",height:"108",loading:"lazy"},null,8,O)),64))])]),s("picture",P,[s("source",{srcset:`/assets/img/bikes/SP/img_${a.replace("_","-")}.png`,media:"(max-width: 767px)"},null,8,L),s("img",{src:`/assets/img/bikes/img_${a.replace("_","-")}.png`,alt:"",width:"1420",height:"600",loading:"lazy"},null,8,M)]),s("div",R,[s("h3",T,w(a.replace("_"," ").toUpperCase()),1),o(p,{to:{name:a.replace("_","-")}},{default:f(()=>[o(v,{color:["white","white","red"],btnStyle:"border"})]),_:2},1032,["to"])])],2)),64))])])}}},Y=u(U,[["__scopeId","data-v-39cb1f61"]]),H={__name:"BikesView",emits:["childMounted"],setup(e,{emit:_}){y(()=>{const t=B();t&&t.parent&&t.parent.emit("child-mounted")});const d={ttl:"BIKES",ttlBig:!1,description:'1995年以来、サーヴェロは革新的なロードバイクと<br class="dn-w">トライアスロン／タイムトライアルバイクを<br class="dn-w">開発してきました。<br class="dn-w">ツール・ド・フランスで活躍するプロライダーも、<br class="dn-w">初めてフルディスタンスのトライアスロンに挑戦する<br class="dn-w">ライダーも、単に週末にライドを楽しむライダーも、<br class="dn-w">サーヴェロはエンジニアリング、野心、そして<br class="dn-w">情熱を注ぎ込み、<br class="dn-w">あなたにとってより良いバイクを作ります。'};return(t,p)=>(c(),l(r,null,[o(h,C(I(d)),null,16),o(Y)],64))}};export{H as default};
