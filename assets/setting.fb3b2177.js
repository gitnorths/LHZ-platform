import{_ as S,g as s}from"./index.e1436c82.js";import{d as B,P as I,b as p,e as g,m as $,S as v,r as d,f as n,h as e,q as m,g as a,F as w,i as y,w as k,p as P,k as V,o}from"./vendor.1b8eec5f.js";const j=B({name:"Header",components:{Pagination:I},setup(){const t=p(s("effect","f-7.png")),u=p("\u672C\u9879\u76EE\u914D\u5957\u5DE5\u7A0B\u4E3B\u8981\u5305\u62EC\u7530\u95F4\u9053\u8DEF\u53CA\u6865\u6DB5\u5DE5\u7A0B\u5EFA\u8BBE\u7B49\u3002\u5728\u793A\u8303\u533A\u8303\u56F4\u5185\u5171\u65B0\uFF08\u62C6\uFF09\u5EFA\u751F\u6001\u9053\u8DEF\uFF08\u673A\u8015\u9053\u3001\u7802\u77F3\u8DEF\uFF09\u517119200\u33A1\uFF0C2\u5EA7\u673A\u8015\u6865\uFF0C3\u5EA7\u6DB5\u6D1E\u3002"),f=p("\u914D\u5957\u5DE5\u7A0B"),h=g([{content:"\u673A\u8015\u9053",num:"1000m",parameter:"\u5BBD2.5m\uFF0C\u62C6\u5EFA",place:"\u5F20\u6865\u6751"},{content:"\u673A\u8015\u9053",num:"1800m",parameter:"\u5BBD2.5m\uFF0C\u62C6\u5EFA",place:"\u5F20\u6865\u6751"},{content:"\u673A\u8015\u9053",num:"1000m",parameter:"\u5BBD3m\uFF0C\u62C6\u5EFA",place:"\u5F20\u6865\u6751"},{content:"\u673A\u8015\u9053",num:"1500m",parameter:"\u5BBD3m",place:"\u5F20\u6865\u6751\u3001\u4F55\u6865\u6751"},{content:"\u673A\u8015\u9053",num:"600m",parameter:"\u5BBD6m",place:"\u5F20\u6865\u6751"},{content:"\u7802\u77F3\u8DEF",num:"1500m",parameter:"\u5BBD3.0m",place:"\u5F20\u6865\u6751"},{content:"\u673A\u8015\u9053",num:"2\u5EA7",parameter:"8*4",place:"\u5F20\u6865\u6751"},{content:"\u6DB5\u6D1E",num:"2\u5EA7",parameter:"6*5\uFF0C2m\u65B9\u6DB5\u7BA1",place:"\u5F20\u6865\u6751"},{content:"\u6DB5\u6D1E",num:"2\u5EA7",parameter:"4*4\uFF0C2m\u65B9\u6DB5\u7BA1",place:"\u5F20\u6865\u6751"}]),b=g([{name:"\u673A\u8015\u9053\u65AD\u9762\u56FE",url:s("effect/4","4-1.png")},{name:"\u7802\u77F3\u8DEF\u65AD\u9762\u56FE",url:s("effect/4","4-2.png")},{name:"\u673A\u8015\u6865\u65AD\u9762\u56FE",url:s("effect/4","4-3.png")},{name:"\u6DB5\u6D1E\u7ACB\u9762\u56FE",url:s("effect/4","4-4.png")},{name:"\u673A\u8015\u9053",url:s("effect/4","4-5.png")},{name:"\u673A\u8015\u6865",url:s("effect/4","4-6.png")},{name:"\u6DB5\u6D1E",url:s("effect/4","4-7.png")}]);return $(()=>{new v(".swiper-gallery",{spaceBetween:0,loop:!1,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:new v(".swiper-thumbs",{spaceBetween:5,slidesPerView:4,loop:!1,freeMode:!1,loopedSlides:7,watchSlidesVisibility:!0,watchSlidesProgress:!0})}})}),{url:t,text:u,title:f,bigImg:b,tableData:h}}}),_=t=>(P("data-v-8cb17abe"),t=t(),V(),t),C={class:"f-container"},D={class:"f-main"},E={class:"f-row"},F={class:"f-col f-left"},M={class:"f-card"},N={class:"f-card-header b-bot"},q={class:"f-card-body",style:{"justify-content":"space-around"}},H={class:"f-col f-center"},L={class:"f-card"},U=_(()=>e("div",{class:"f-card-header b-header"},[e("span",{class:"header-text"},"\u7167\u7247\u540D\u79F0")],-1)),z={class:"f-card-body"},A={class:"bannerBox"},G={class:"swiper-container swiper-gallery"},J={class:"swiper-wrapper"},K={class:"bannerBox-text"},O=_(()=>e("div",{class:"swiper-button-next"},null,-1)),Q=_(()=>e("div",{class:"swiper-button-prev"},null,-1)),R={class:"swiper-container swiper-thumbs"},T={class:"swiper-wrapper"},W={class:"f-col f-right f-table"};function X(t,u,f,h,b,Y){const l=d("el-image"),r=d("el-table-column"),x=d("el-table");return o(),n("div",C,[e("div",D,[e("div",E,[e("div",F,[e("div",M,[e("div",N,m(t.title),1),e("div",q,[e("p",null,m(t.text),1),a(l,{src:`${t.url}`},null,8,["src"])])])]),e("div",H,[e("div",L,[U,e("div",z,[e("div",A,[e("div",G,[e("div",J,[(o(!0),n(w,null,y(t.bigImg,(c,i)=>(o(),n("div",{class:"swiper-slide",key:i},[e("p",K,m(c.name),1),a(l,{class:"bannerBox-img",src:`${c.url}`},null,8,["src"])]))),128))]),O,Q]),e("div",R,[e("div",T,[(o(!0),n(w,null,y(t.bigImg,(c,i)=>(o(),n("div",{class:"swiper-slide swiper-bottom",key:i},[a(l,{class:"bannerBox-img",src:`${c.url}`},null,8,["src"])]))),128))])])])])])]),e("div",W,[a(x,{data:t.tableData,style:{width:"100%"},"max-height":"740"},{default:k(()=>[a(r,{prop:"content",label:"\u5EFA\u8BBE\u5185\u5BB9",width:"100",align:"center"}),a(r,{prop:"num",label:"\u6570\u91CF",align:"center"}),a(r,{prop:"parameter",label:"\u89C4\u683C\u578B\u53F7\u53C2\u6570",width:"120",align:"center"}),a(r,{prop:"place",label:"\u5EFA\u8BBE\u5730\u70B9",width:"100",align:"center"})]),_:1},8,["data"])])])])])}var te=S(j,[["render",X],["__scopeId","data-v-8cb17abe"]]);export{te as default};
