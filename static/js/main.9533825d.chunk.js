(this["webpackJsonpartist-project"]=this["webpackJsonpartist-project"]||[]).push([[1],{30:function(n,t,e){"use strict";e.r(t);var i,r,a,o,c,s,d,l,m,x,u,p,h,b,j,g,f,O,w,v,y,z,k,C,B,I,M,F,R,P,L,E,V,S,A,Y,N,X,W,H,D,T,U,J,q,G,K,Q,Z,$,_,nn,tn,en,rn,an,on,cn,sn,dn,ln,mn,xn,un,pn,hn,bn,jn,gn=e(1),fn=e.n(gn),On=e(18),wn=e.n(On),vn=e(2),yn={colors:{primary:"#0B0B0B",secondary:{main:"#FED941",dark:"#f2ca2c"},grey:"#BDBDBD",white:"#FFFFFF"},sizes:{xxxxl:{size:"40rem",line:"48.375rem"},xxxl:{size:"3.1875rem",line:"3.8575rem"},xxl:{size:"2.3125rem",line:"1.96875rem"},xl:{size:"1.75rem",line:"2.118125rem"},lg:{size:"1.5625rem",line:"1.89125rem"},md:{size:"1rem",line:"1.375rem"},sm:{size:"0.875rem",line:"1.375rem"},xs:{size:"0.75rem",line:"1.375rem"}}},zn=e(4),kn=e(6),Cn={mediaCurrent:{id:1,audio:"audio/growth.mp3",name:"Background Loop Medolic Techno",isPlaying:!1}},Bn=[{id:2,img:"images/card-2.jpg",title:"D fine us / Howling at the moon",audio:"audio/cali.mp3"},{id:3,img:"images/card-3.jpg",title:"Anton Vlaasov / Overdrive",audio:"audio/breeze.mp3"},{id:4,img:"images/card-4.jpg",title:"Ian Post / Close your eyes and",audio:"audio/surface.mp3"},{id:5,img:"images/card-6.jpg",title:"Rex Banner / Millenial Uplifting Bangers",audio:"audio/sun-back.mp3"},{id:6,img:"images/card-1.jpg",title:"Ofrin / Take it to the top",audio:"audio/loop-medolic.mp3"}],In=[{img:"images/card-4.jpg"},{img:"images/card-6.jpg"},{img:"images/card-3.jpg"},{img:"images/card-2.jpg"},{img:"images/card-1.jpg"}],Mn=[{img:"images/ablaze.jpg",audio:""},{img:"images/ablaze.jpg",audio:""},{img:"images/ablaze.jpg",audio:""},{img:"images/ablaze.jpg",audio:""},{img:"images/ablaze.jpg",audio:""}],Fn=function(){var n=Object(gn.useState)(Cn),t=Object(kn.a)(n,2),e=t[0],i=t[1],r=Object(gn.useState)(!1),a=Object(kn.a)(r,2),o=a[0],c=a[1],s=Object(gn.useState)(!0),d=Object(kn.a)(s,2),l=d[0],m=d[1],x=Object(gn.useState)(0),u=Object(kn.a)(x,2),p=u[0],h=u[1],b=Object(gn.useRef)(),j=e.mediaCurrent.audio,g=Object(gn.useRef)(new Audio(j)),f=Object(gn.useRef)(),O=(null===g||void 0===g?void 0:g.current).duration;Object(gn.useEffect)((function(){return o?(g.current=new Audio(j),g.current.play(),clearInterval(f.current),f.current=setInterval((function(){g.current.ended?c(!1):h(g.current.currentTime)}),[1e3])):(g.current.pause(),h(0)),function(){g.current.pause(),clearInterval(f.current)}}),[o,j]);return{duration:O,trackProgress:p,songsRef:b,state:e,playingAudio:function(n){c(!o),Object.keys(n).length&&(i((function(t){return Object(zn.a)(Object(zn.a)({},t),{},{mediaCurrent:{id:n.id,audio:n.audio,name:n.title}})})),n.audio!==j&&(c(!0),h(0)))},volumeAudio:function(){o&&(g.current.muted?(g.current.muted=!1,m(!0)):(g.current.muted=!0,m(!1)))},hasPlaying:o,hasVolume:l}},Rn=e(0),Pn=Object(gn.createContext)(),Ln=function(n){var t=n.children,e=Fn();return Object(Rn.jsx)(Pn.Provider,{value:e,children:t})},En=e(5),Vn=e(3),Sn=vn.d.button(i||(i=Object(Vn.a)(["\n  border-radius: ",";\n  border: none;\n  cursor: pointer;\n  font-size: ",";\n  font-weight: bold;\n  line-height: ",";\n  padding: 24px 56px;\n  @media (max-width: 560px) {\n    padding: 6px 24px;\n    font-size: ",";\n  }\n  ","\n  ","\n  ","\n    ","\n"])),(function(n){return n.theme.sizes.xxxl.size}),(function(n){return n.theme.sizes.xl.size}),(function(n){return n.theme.sizes.xl.line}),(function(n){return n.theme.sizes.sm.size}),(function(n){return n.primary&&Object(vn.c)(r||(r=Object(Vn.a)(["\n      background: ",";\n      color: black;\n      &:hover {\n        background: ",";\n        @media (max-width: 768px) {\n          background: ",";\n        }\n      }\n      &:focus {\n        outline: none;\n        box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.7);\n      }\n    "])),(function(n){return n.theme.colors.secondary.main}),(function(n){return n.theme.colors.secondary.dark}),(function(n){return n.theme.colors.secondary.main}))}),(function(n){var t=n.outline,e=n.primary;return t&&e&&Object(vn.c)(a||(a=Object(Vn.a)(["\n      border: 2px solid ",";\n      color: ",";\n    "])),(function(n){return n.theme.colors.secondary.main}),(function(n){return n.theme.colors.secondary}))}),(function(n){return n.secondary&&Object(vn.c)(o||(o=Object(Vn.a)(["\n      background: ",";\n      color: ",";\n    "])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.secondary.main}))}),(function(n){return n.outline&&Object(vn.c)(c||(c=Object(Vn.a)(["\n      border: 2px solid ",";\n      background: transparent;\n      color: ",";\n      &:hover {\n        background: ",";\n        color: ",";\n        @media (max-width: 768px) {\n          background: initial;\n          color: ",";\n        }\n      }\n      &:focus {\n        outline: none;\n      }\n    "])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.grey}))})),An=function(n){var t=n.text,e=Object(En.a)(n,["text"]);return Object(Rn.jsx)(Sn,Object(zn.a)(Object(zn.a)({},e),{},{children:t}))},Yn=vn.d.h2(s||(s=Object(Vn.a)(["\n  && {\n    margin-top: ",";\n    margin-bottom: ",";\n  }\n  margin: "," 0;\n  color: white;\n"])),(function(n){return n.mt?"".concat(n.mt,"rem"):null}),(function(n){return n.mb?"".concat(n.mb,"rem"):null}),(function(n){return n.theme.sizes.md.size})),Nn=vn.d.h2(d||(d=Object(Vn.a)(["\n  font-size: ",";\n  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: ",";\n"])),(function(n){return n.theme.sizes.xxxxl.size}),(function(n){return n.theme.colors.grey})),Xn=vn.d.h3(l||(l=Object(Vn.a)(["\n  font-size: ",";\n  @media (max-width: 560px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.sizes.xxxl.size}),(function(n){return n.theme.sizes.xl.size})),Wn=vn.d.h3(m||(m=Object(Vn.a)(["\n  font-size: ",";\n  color: ",";\n  @media (max-width: 560px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.sizes.xxl.size}),(function(n){var t=n.secondary,e=n.theme;return t&&e.colors.secondary.main}),(function(n){return n.theme.sizes.xl.size})),Hn=(vn.d.h4(x||(x=Object(Vn.a)(["\n  font-size: ",";\n"])),(function(n){return n.theme.sizes.xl.size})),vn.d.h5(u||(u=Object(Vn.a)(["\n  font-size: ",";\n"])),(function(n){return n.theme.sizes.lg.size})),vn.d.h3(p||(p=Object(Vn.a)(["\n  font-size: 9.375rem;\n  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: white;\n  text-transform: uppercase;\n  @media (max-width: 960px) {\n    font-size: 8rem;\n  }\n  @media (max-width: 560px) {\n    font-size: 3.8rem;\n  }\n  @media (max-width: 320px) {\n    font-size: 3rem;\n  }\n"])))),Dn=vn.d.h3(h||(h=Object(Vn.a)(["\n  font-size: ",";\n  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: white;\n  text-transform: uppercase;\n  @media (max-width: 1280px) {\n    font-size: ",";\n  }\n  @media (max-width: 960px) {\n    font-size: ",";\n    -webkit-text-fill-color: white;\n  }\n"])),(function(n){return n.theme.sizes.xxxl.size}),(function(n){return n.theme.sizes.xxl.size}),(function(n){return n.theme.sizes.xl.size})),Tn=function(n){var t=n.text,e=Object(En.a)(n,["text"]);return Object(Rn.jsx)(Nn,Object(zn.a)(Object(zn.a)({},e),{},{children:t}))},Un=function(n){var t=n.text,e=Object(En.a)(n,["text"]);return Object(Rn.jsx)(Xn,Object(zn.a)(Object(zn.a)({},e),{},{children:t}))},Jn=function(n){var t=n.text,e=Object(En.a)(n,["text"]);return Object(Rn.jsx)(Wn,Object(zn.a)(Object(zn.a)({},e),{},{children:t}))},qn=function(n){var t=n.text,e=Object(En.a)(n,["text"]);return Object(Rn.jsx)(Hn,Object(zn.a)(Object(zn.a)({},e),{},{children:t}))},Gn=function(n){var t=n.text,e=Object(En.a)(n,["text"]);return Object(Rn.jsx)(Dn,Object(zn.a)(Object(zn.a)({},e),{},{children:t}))},Kn=vn.d.section(b||(b=Object(Vn.a)(["\n  display: grid;\n  grid-template-columns: 60% 40%;\n  height: calc(100vh + 80px);\n  margin-top: -80px;\n  @media (min-width: 1920px) {\n    "," {\n      font-size: 56rem;\n      margin: 0;\n    }\n  }\n  @media (max-width: 1220px) {\n    "," {\n      font-size: 32rem;\n      margin: 0;\n    }\n  }\n  @media (max-width: 960px) {\n    grid-template-columns: 1fr;\n    margin-top: 0;\n    height: auto;\n  }\n  @media (max-width: 560px) {\n    grid-template-columns: 1fr;\n    margin-top: 0;\n    height: 100vh;\n    "," {\n      font-size: 18rem;\n      margin: 0;\n    }\n    "," {\n      font-size: ",";\n    }\n    "," {\n      font-size: ",";\n      margin-top: 0;\n    }\n  }\n  @media (max-width: 320px) {\n    height: calc(100vh + 80px);\n  }\n"])),Nn,Nn,Nn,Xn,(function(n){return n.theme.sizes.xxl.size}),Wn,(function(n){return n.theme.sizes.xl.size})),Qn=vn.d.article(j||(j=Object(Vn.a)(["\n  margin-left: -100px;\n  align-self: center;\n  @media (max-width: 560px) {\n    overflow: hidden;\n    margin-left: -80px;\n  }\n"]))),Zn=vn.d.article(g||(g=Object(Vn.a)(["\n  display: grid;\n  align-items: center;\n  @media (max-width: 960px) {\n    padding: 0 15px;\n    margin-top: -4rem;\n    align-items: flex-start;\n  }\n  @media (max-width: 560px) {\n    padding: 0 30px;\n    align-items: flex-start;\n  }\n"]))),$n=vn.d.div(f||(f=Object(Vn.a)([""]))),_n=function(){var n=Object(gn.useContext)(Pn).songsRef;return Object(Rn.jsxs)(Kn,{children:[Object(Rn.jsx)(Qn,{children:Object(Rn.jsx)(Yn,{as:Tn,text:"20"})}),Object(Rn.jsx)(Zn,{children:Object(Rn.jsxs)($n,{children:[Object(Rn.jsx)(Yn,{as:Jn,text:"2020",mt:0,secondary:!0}),Object(Rn.jsx)(Yn,{as:Un,text:"Your year as an Artlist Creator"}),Object(Rn.jsx)(An,{text:"PLAY",primary:!0,onClick:function(){return null===n||void 0===n?void 0:n.current.scrollIntoView({behavior:"smooth"})}})]})})]})},nt=vn.d.p(O||(O=Object(Vn.a)(["\n  && {\n    margin-top: ",";\n    margin-bottom: ",";\n  }\n  color: white;\n  margin: 1rem 0;\n"])),(function(n){return n.mt?"".concat(n.mt,"rem"):null}),(function(n){return n.mb?"".concat(n.mb,"rem"):null})),tt=vn.d.p(w||(w=Object(Vn.a)(["\n  font-size: ",";\n  line-height: ",";\n  @media (max-width: 560px) {\n    font-size: 18px;\n    line-height: 21.78px;\n  }\n"])),(function(n){return n.theme.sizes.lg.size}),(function(n){return n.theme.sizes.lg.line})),et=(vn.d.p(v||(v=Object(Vn.a)(["\n  color: white;\n  font-size: ",";\n  line-height: ",";\n"])),(function(n){return n.theme.sizes.md.size}),(function(n){return n.theme.sizes.md.line})),function(n){var t=n.text,e=Object(En.a)(n,["text"]);return Object(Rn.jsx)(tt,Object(zn.a)(Object(zn.a)({},e),{},{children:t}))}),it=vn.d.section(y||(y=Object(Vn.a)(["\n  "," {\n    transform: translateX(-240px);\n    position: absolute;\n    bottom: -40px;\n    @media (min-width: 1920px) {\n      font-size: 50rem;\n      transform: translateX(-240px);\n      top: 0;\n    }\n    @media (max-width: 1220px) {\n      font-size: 35rem;\n    }\n    @media (max-width: 960px) {\n      font-size: 20rem;\n      position: static;\n      transform: translateX(-40px);\n      margin-bottom: 0;\n    }\n    @media (max-width: 560px) {\n      font-size: 8.5rem;\n      position: static;\n      transform: translateX(-40px);\n      margin-bottom: 0;\n    }\n  }\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  align-content: center;\n  @media (max-width: 960px) {\n    height: auto;\n    "," {\n      margin-top: 0;\n    }\n  }\n  @media (max-width: 560px) {\n    height: auto;\n    "," {\n      margin-top: 0;\n    }\n  }\n"])),Yn,tt,tt),rt=vn.d.article(z||(z=Object(Vn.a)(["\n  text-align: center;\n  margin-top: 11rem;\n  position: relative;\n  @media (max-width: 960px) {\n    margin-top: 0;\n    margin-bottom: 4rem;\n  }\n  @media (max-width: 560px) {\n    margin-top: -1rem;\n    padding: 0 30px;\n  }\n"]))),at=function(){return Object(Rn.jsxs)(it,{children:[Object(Rn.jsx)(Yn,{as:Tn,text:"2021"}),Object(Rn.jsxs)(rt,{children:[Object(Rn.jsx)(nt,{as:et,text:"Check out the best of 2020 collections",mb:1.5}),Object(Rn.jsx)(An,{text:"Browse Collections",outline:!0})]})]})},ot={back:{width:8,height:14,viewBox:"0 0 8 14",paths:["M7,14c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L2.4,7l5.3,5.3c0.4,0.4,0.4,1,0,1.4C7.5,13.9,7.3,14,7,14z"]},next:{width:8,height:14,viewBox:"0 0 8 14",paths:["M1,14c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4L5.6,7L0.3,1.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C1.5,13.9,1.3,14,1,14z"]},playFill:{width:24,height:24,viewBox:"0 0 24 24",paths:["M19.5,11.2l-14-9C5.2,2,4.8,2,4.5,2.2C4.2,2.3,4,2.6,4,3v18c0,0.4,0.2,0.7,0.5,0.9C4.7,22,4.8,22,5,22s0.4-0.1,0.5-0.2l14-9c0.3-0.2,0.5-0.5,0.5-0.8S19.8,11.3,19.5,11.2z"]},playOutline:{width:24,height:24,viewBox:"0 0 24 24",paths:["M5,22c-0.2,0-0.3,0-0.5-0.1C4.2,21.7,4,21.4,4,21V3c0-0.4,0.2-0.7,0.5-0.9c0.3-0.2,0.7-0.2,1,0l14,9c0.3,0.2,0.5,0.5,0.5,0.8s-0.2,0.7-0.5,0.8l-14,9C5.4,21.9,5.2,22,5,22z M6,4.8v14.3L17.2,12L6,4.8z"]},pause:{width:24,height:24,viewBox:"0 0 24 24",paths:["M10,4H6v16h4V4z","M18,4h-4v16h4V4z"]},volume:{width:24,height:24,viewBox:"0 0 24 24",paths:["M11,20c-0.2,0-0.4-0.1-0.6-0.2L5.6,16H2c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h3.6l4.7-3.8c0.3-0.2,0.7-0.3,1.1-0.1C11.8,4.3,12,4.6,12,5v14c0,0.4-0.2,0.7-0.6,0.9C11.3,20,11.1,20,11,20z M3,14h3c0.2,0,0.4,0.1,0.6,0.2l3.4,2.7V7.1L6.6,9.8C6.4,9.9,6.2,10,6,10H3V14z","M19.1,20.1c-0.1,0-0.3,0-0.4-0.1c-0.4-0.2-0.6-0.5-0.6-0.9V4.9c0-0.4,0.2-0.8,0.6-0.9c0.4-0.2,0.8-0.1,1.1,0.2C21.9,6.3,23,9.1,23,12c0,2.9-1.1,5.7-3.2,7.8C19.6,20,19.3,20.1,19.1,20.1z M20.1,8v8c0.6-1.2,0.9-2.6,0.9-4C21,10.6,20.7,9.2,20.1,8z M15.5,16.5c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0.8-0.8,1.2-1.8,1.2-2.8s-0.4-2.1-1.2-2.8c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0C17.4,8.9,18,10.4,18,12c0,1.6-0.6,3.1-1.8,4.2C16.1,16.4,15.8,16.5,15.5,16.5z"]},mute:{width:24,height:24,viewBox:"0 0 24 24",paths:["M11,20c-0.2,0-0.4-0.1-0.6-0.2L5.6,16H2c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h3.6l4.7-3.8c0.3-0.2,0.7-0.3,1.1-0.1C11.8,4.3,12,4.6,12,5v14c0,0.4-0.2,0.7-0.6,0.9C11.3,20,11.1,20,11,20z M3,14h3c0.2,0,0.4,0.1,0.6,0.2l3.4,2.7V7.1L6.6,9.8C6.4,9.9,6.2,10,6,10H3V14z","M19.1,12l2-2c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-2,2l-2-2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l2,2l-2,2c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2-2l2,2c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L19.1,12z"]},frame:{width:40,height:20,viewBox:"0 0 40 20",paths:["M0.3,4.3 0.1,4.3 0.1,4.6 0.1,19.8 0.1,20 0.3,20 3.2,20 3.4,20 3.4,19.8 3.4,4.6 3.4,4.3 3.2,4.3","M6,13.8 5.8,13.8 5.8,14.1 5.8,19.8 5.8,20 6,20 8.9,20 9.1,20 9.1,19.8 9.1,14.1 9.1,13.8 8.9,13.8","M11.7,2.4 11.5,2.4 11.5,2.6 11.5,19.8 11.5,20 11.7,20 14.6,20 14.8,20 14.8,19.8 14.8,2.6 14.8,2.4 14.6,2.4","M17.4,6.2 17.2,6.2 17.2,6.5 17.2,19.8 17.2,20 17.4,20 20.3,20 20.6,20 20.6,19.8 20.6,6.5 20.6,6.2 20.3,6.2","M23.2,0.5 22.9,0.5 22.9,0.7 22.9,19.8 22.9,20 23.2,20 26,20 26.3,20 26.3,19.8 26.3,0.7 26.3,0.5 26,0.5","M31.7,5.3 28.9,5.3 28.6,5.3 28.6,5.5 28.6,19.8 28.6,20 28.9,20 31.7,20 32,20 32,19.8 32,5.5 32,5.3"]}},ct=function(n){var t,e=n.name,i=n.width,r=n.height,a=n.color,o=Object(En.a)(n,["name","width","height","color"]);return e&&Object(Rn.jsx)("svg",Object(zn.a)(Object(zn.a)({},o),{},{xmlns:"http://www.w3.org/2000/svg",width:i||ot[e].width,height:r||ot[e.height],viewBox:ot[e].viewBox,children:null===(t=ot[e].paths)||void 0===t?void 0:t.map((function(n){return Object(Rn.jsx)("path",{d:n,fill:a||"white",fillRule:"evenodd"},n)}))}))},st=Object(vn.e)(k||(k=Object(Vn.a)(["\n  0% {\n    opacity: .35;\n    transform: scaleY(0.3); \n    transform-origin: center bottom;\n  }\n  100% {\n    opacity: 1;       \n    transform: scaleY(1); \n    transform-origin: center bottom;    \n  }\n"]))),dt=Object(vn.e)(C||(C=Object(Vn.a)(["\n  0% {\n    transform: translateX(100px);\n    transform: translateY(50px);\n    background: radial-gradient(66.58% 66.58% at 108.17% 31.75%, #589AF2 0%, #7A4CDE 100%);\n    opacity: 0.5;\n    filter: blur(100px);\n  }\n  50% {\n    transform: translateX(-50px);\n    transform: translateY(-50px);\n    background: radial-gradient(66.58% 66.58% at 108.17% 31.75%, #E658F2 0%, #440FB9 100%);\n    opacity: 1;\n    filter: blur(50px);\n  }\n  100% {\n    transform: translateX(100px);\n    transform: translateY(50px);\n    background: radial-gradient(145.67% 145.67% at 108.17% 31.75%, #2BA8CF 0%, #FF39EB 100%);\n    opacity: 0.5;\n    filter: blur(100px);\n  }\n"]))),lt=Object(vn.e)(B||(B=Object(Vn.a)(["\n  from {\n    filter: blur(5px);\n    opacity: 0;\n  }\n  to {\n    filter: blur(0);\n    opacity: 1;\n  }\n"]))),mt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.time,e=void 0===t?"0.5s":t,i=n.type,r=void 0===i?"ease":i;return Object(vn.c)(I||(I=Object(Vn.a)(["\n    animation: "," "," ",";\n  "])),e,lt,r)},xt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.time,e=void 0===t?"3s":t,i=n.type,r=void 0===i?"linear":i,a=n.count,o=void 0===a?"infinite":a;return Object(vn.c)(M||(M=Object(Vn.a)(["\n    animation: "," "," "," ",";\n  "])),e,dt,r,o)},ut=vn.d.div(F||(F=Object(Vn.a)(["\n  position: fixed;\n  bottom: 14%;\n  right: 30px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  z-index: 1;\n  width: 38%;\n  justify-content: end;\n  .sound {\n    path {\n      transform: scaleY(1);\n      animation: "," 0ms -800ms linear infinite alternate;\n      &:nth-of-type(1) {\n        animation-duration: 474ms;\n      }\n      &:nth-of-type(2) {\n        animation-duration: 433ms;\n      }\n      &:nth-of-type(3) {\n        animation-duration: 407ms;\n      }\n      &:nth-of-type(4) {\n        animation-duration: 458ms;\n      }\n      &:nth-of-type(5) {\n        animation-duration: 400ms;\n      }\n      &:nth-of-type(6) {\n        animation-duration: 427ms;\n      }\n    }\n  }\n  p {\n    margin: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  @media (max-width: 560px) {\n    position: static;\n    padding: 40px 30px;\n    width: calc(100% - 60px);\n    justify-content: center;\n  }\n"])),st),pt=vn.d.button(R||(R=Object(Vn.a)(["\n  background: transparent;\n  border: none;\n  padding-right: 1rem;\n  cursor: pointer;\n  width: 40px;\n  margin-top: 3px;\n  &:focus {\n    outline: none;\n  }\n"]))),ht=vn.d.button(P||(P=Object(Vn.a)(["\n  background: transparent;\n  border: none;\n  padding-left: 1rem;\n  cursor: pointer;\n  align-self: flex-end;\n  &:focus {\n    outline: none;\n  }\n"]))),bt=function(){var n=Object(gn.useContext)(Pn),t=n.playingAudio,e=n.volumeAudio,i=n.hasPlaying,r=n.hasVolume,a=n.state.mediaCurrent,o=i?"Pause":"Play",c=i?"pause":"playFill",s=r?"volume":"mute",d=i?"sound":null;return Object(Rn.jsxs)(ut,{children:[Object(Rn.jsx)(ct,{name:"frame",className:d}),Object(Rn.jsx)(pt,{type:"button",title:o,onClick:function(){return t({})},children:Object(Rn.jsx)(ct,{name:c})}),Object(Rn.jsx)(nt,{as:et,text:a.name}),Object(Rn.jsx)(ht,{type:"button",title:"Volume",onClick:e,children:Object(Rn.jsx)(ct,{name:s})})]})},jt=vn.d.article(L||(L=Object(Vn.a)(["\n  display: grid;\n  @media (min-width: 961px) {\n    grid-template-columns: 7% 20% 3% 4% 20% 1% 17% 5% 22%;\n    grid-template-rows: 300px 30% 300px 25%;\n    > div:nth-of-type(2) {\n      grid-column: 6/7;\n      grid-row: 2/3;\n    }\n    > div:nth-of-type(3) {\n      grid-column-start: 2;\n      grid-row-start: 3;\n    }\n    > div:nth-of-type(4) {\n      grid-column: 6/10;\n      grid-row-start: 4;\n      justify-self: flex-end;\n    }\n    > div:nth-of-type(5) {\n      grid-column-start: 3;\n      grid-row-start: 5;\n    }\n  }\n  @media (max-width: 960px) {\n    grid-template-columns: minmax(355px, 1fr) minmax(355px, 1fr);\n    grid-template-rows: repeat(4, auto);\n    grid-gap: 14px 8px;\n    > div:nth-of-type(1),\n    > div:nth-of-type(2),\n    > div:nth-of-type(3),\n    > div:nth-of-type(4),\n    > div:nth-of-type(5) {\n      grid-column: auto;\n      justify-self: center;\n    }\n  }\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    grid-gap: 8px;\n    > div:nth-of-type(1),\n    > div:nth-of-type(2),\n    > div:nth-of-type(3),\n    > div:nth-of-type(4),\n    > div:nth-of-type(5) {\n      grid-column: 1/-1;\n      justify-self: center;\n    }\n  }\n"]))),gt=vn.d.img(E||(E=Object(Vn.a)(["\n  ",";\n  width: auto;\n  @media (max-width: 560px) {\n    width: 100%;\n  }\n"])),mt),ft=vn.d.div(V||(V=Object(Vn.a)(["\n  ",";\n  background: rgba(11, 11, 11, 0.65);\n  bottom: 0;\n  content: '';\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  height: 1px;\n  opacity: 0;\n  transition: opacity ease 0.5s;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 960px) {\n    height: auto;\n    visibility: visible;\n    opacity: 1;\n  }\n"])),mt),Ot=vn.d.div(S||(S=Object(Vn.a)(["\n  &:nth-child(odd) {\n    "," {\n      top: 35px;\n      left: 50%;\n      white-space: nowrap;\n      position: absolute;\n      @media (max-width: 960px) {\n        white-space: normal;\n        left: 0;\n        right: 0;\n        top: initial;\n        bottom: 25px;\n        padding: 0px 10px;\n        text-align: center;\n        margin: 0;\n        height: 70px;\n        overflow: hidden;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        line-clamp: 2;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n      }\n    }\n  }\n  &:nth-child(even) {\n    "," {\n      bottom: 35px;\n      right: 25px;\n      white-space: nowrap;\n      position: absolute;\n      @media (max-width: 960px) {\n        white-space: normal;\n        left: 0;\n        right: 0;\n        top: initial;\n        bottom: 25px;\n        padding: 0px 10px;\n        text-align: center;\n        margin: 0;\n        height: 70px;\n        overflow: hidden;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis;\n      }\n    }\n  }\n"])),Dn,Dn),wt=vn.d.div(A||(A=Object(Vn.a)(["\n  height: 355px;\n  position: relative;\n  width: 355px;\n  &:hover {\n    "," {\n      opacity: 1;\n      height: auto;\n      visibility: visible;\n    }\n  }\n\n  @media (max-width: 560px) {\n    width: 100%;\n    height: auto;\n    max-width: 355px;\n    max-height: 355px;\n  }\n"])),ft),vt=(vn.d.h3(Y||(Y=Object(Vn.a)([""]))),vn.d.section(N||(N=Object(Vn.a)(["\n  margin: 20rem 0 0;\n  padding: 0 1rem;\n  @media (max-width: 560px) {\n    margin: 15rem 0 0;\n    padding: 0 30px;\n  }\n"])))),yt=vn.d.article(X||(X=Object(Vn.a)(["\n  margin-bottom: 8rem;\n  width: 55%;\n  @media (max-width: 1024px) {\n    width: 80%;\n  }\n  @media (max-width: 960px) {\n    width: 90%;\n  }\n  @media (max-width: 560px) {\n    margin-bottom: 4rem;\n  }\n"]))),zt=vn.d.span(W||(W=Object(Vn.a)(["\n  background: -webkit-linear-gradient(312deg, #43cbff 0%, #9708cc 120%);\n  -webkit-background-clip: text;\n  color: transparent;\n"]))),kt=function(n){var t=n.text;return Object(Rn.jsx)(zt,{children:t})},Ct=function(){return Object(Rn.jsxs)(Rn.Fragment,{children:["You downloaded ",Object(Rn.jsx)("br",{}),Object(Rn.jsx)(kt,{text:"119"})," songs this year"]})},Bt=function(){return Object(Rn.jsxs)(Rn.Fragment,{children:["You downloaded ",Object(Rn.jsx)(kt,{text:"118"})," Uplifting songs"]})},It=function(){return Object(Rn.jsxs)(Rn.Fragment,{children:[Object(Rn.jsx)(kt,{text:"7,584"})," new songs and ",Object(Rn.jsx)(kt,{text:"13,463"})," SFX were added to the catalog to bring your vision to life"]})},Mt=function(){return Object(Rn.jsxs)(Rn.Fragment,{children:["You downloaded ",Object(Rn.jsx)(kt,{text:"10"})," of their songs. Jump back into Rex Banner\u2019s music"]})},Ft=function(){var n=Object(gn.useState)(!1),t=Object(kn.a)(n,2),i=t[0],r=t[1],a=Object(gn.useRef)(null);return Object(gn.useEffect)((function(){Promise.resolve("undefined"!==typeof window.IntersectionObserver?window.IntersectionObserver:e.e(0).then(e.t.bind(null,31,7))).then((function(){var n=new window.IntersectionObserver((function(t){t[0].isIntersecting&&(r(!0),n.disconnect())}));n.observe(a.current)}))}),[a]),[i,a]},Rt=vn.d.button(H||(H=Object(Vn.a)(["\n  width: 113px;\n  height: 113px;\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  border-radius: 100%;\n  background: rgba(102, 100, 95, 0.5);\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  &:focus {\n    outline: none;\n  }\n  &:active,\n  &:visited,\n  &:link {\n    background: rgba(102, 100, 95, 0.5);\n  }\n  @media (max-width: 560px) {\n    cursor: initial;\n  }\n"]))),Pt=e(7),Lt=Object(vn.d)(Pt.CircularInput)(D||(D=Object(Vn.a)(["\n  width: 113px;\n  height: 113px;\n  position: absolute;\n"]))),Et=function(n){var t=n.isPlaying,e=Object(gn.useContext)(Pn),i=e.duration,r=e.trackProgress,a=isNaN(i)?0:i,o=isNaN(i)?0:r/a;return Object(Rn.jsxs)(Lt,{value:t?o:0,children:[Object(Rn.jsx)(Pt.CircularTrack,{strokeWidth:2,stroke:"transparent"}),Object(Rn.jsx)(Pt.CircularProgress,{strokeWidth:5,stroke:"white",strokeLinecap:"butt"})]})},Vt=function(n){var t=n.isRing,e=void 0===t||t,i=Object(En.a)(n,["isRing"]),r=e?"pause":"playFill";return Object(Rn.jsxs)(Rt,Object(zn.a)(Object(zn.a)({},i),{},{children:[Object(Rn.jsx)(Et,{width:"113",isPlaying:e}),Object(Rn.jsx)(ct,{name:r,width:50})]}))},St=function(n){var t=n.img,e=n.title,i=n.onClick,r=n.hasPlaying,a=Ft(),o=Object(kn.a)(a,2),c=o[0],s=o[1];return Object(Rn.jsx)(wt,{ref:s,children:c&&Object(Rn.jsxs)(Rn.Fragment,{children:[Object(Rn.jsxs)(ft,{children:[Object(Rn.jsx)(Yn,{as:Gn,text:e}),Object(Rn.jsx)(Vt,{isRing:r,onClick:i})]}),Object(Rn.jsx)(gt,{src:t,alt:e})]})})},At=function(){var n=Object(gn.useContext)(Pn),t=n.playingAudio,e=n.hasPlaying,i=n.state.mediaCurrent,r=n.songsRef,a=function(n){return function(){return t(n)}},o=function(n){return(null===n||void 0===n?void 0:n.id)===i.id};return Object(Rn.jsxs)(vt,{ref:r,children:[Object(Rn.jsxs)(yt,{children:[Object(Rn.jsx)(Yn,{as:Un,text:Object(Rn.jsx)(Ct,{})}),Object(Rn.jsx)(nt,{as:et,text:"2020 was a challenging year but you kept creating. Here are some of your favorite songs this year"})]}),Object(Rn.jsx)(jt,{children:null===Bn||void 0===Bn?void 0:Bn.map((function(n){return Object(Rn.jsx)(Ot,{children:Object(Rn.jsx)(St,Object(zn.a)(Object(zn.a)({},n),{},{onClick:a(n),hasPlaying:o(n)&&e}))},n.id)}))})]})},Yt=vn.d.section(T||(T=Object(Vn.a)(["\n  text-align: center;\n  margin-bottom: 12.5rem;\n  @media (max-width: 560px) {\n    margin-bottom: 8.5rem;\n    padding: 0 30px;\n  }\n"]))),Nt=vn.d.div(U||(U=Object(Vn.a)(["\n  width: max-content;\n  margin: auto;\n  overflow: hidden;\n  margin-top: 2.8rem;\n  @media (max-width: 560px) {\n    width: 100%;\n  }\n"]))),Xt=vn.d.div(J||(J=Object(Vn.a)(["\n  display: flex;\n  width: ","px;\n  max-width: ","px;\n  transform: translateX(-","px);\n  transition: transform ease-out ","s;\n  @media (max-width: 560px) {\n    max-width: 100%;\n  }\n"])),(function(n){return n.width}),(function(n){return n.maxWidth}),(function(n){return n.translate}),(function(n){return n.transition})),Wt=vn.d.div(q||(q=Object(Vn.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(11, 11, 11, 0.5);\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 1px;\n  transition: opacity ease 0.5s;\n  visibility: hidden;\n  opacity: 0;\n  @media (max-width: 560px) {\n    display: none;\n  }\n"]))),Ht=vn.d.div(G||(G=Object(Vn.a)(["\n  width: ","px;\n  position: relative;\n  &:hover {\n    "," {\n      height: auto;\n      visibility: visible;\n      opacity: 1;\n    }\n  }\n  @media (max-width: 560px) {\n    width: 100%;\n  }\n"])),(function(n){return n.width}),Wt),Dt=vn.d.img(K||(K=Object(Vn.a)(["\n  width: 646px;\n  height: 646px;\n  @media (max-width: 740px) {\n    max-width: calc(100vw - 60px);\n    max-height: calc(100vw - 60px);\n    object-fit: contain;\n  }\n"]))),Tt=vn.d.div(Q||(Q=Object(Vn.a)(["\n  margin-top: 2.5rem;\n  width: 180px;\n  margin-left: auto;\n  margin-right: auto;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n"]))),Ut=vn.d.ul(Z||(Z=Object(Vn.a)(["\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 0 10px;\n"]))),Jt=vn.d.li($||($=Object(Vn.a)(["\n  background: ",";\n  border-radius: 100%;\n  height: 12px;\n  width: 12px;\n  list-style: none;\n  opacity: ",";\n  cursor: pointer;\n"])),(function(n){return n.active?"white":n.theme.colors.grey}),(function(n){return n.active?"1":.2})),qt=vn.d.div(_||(_=Object(Vn.a)(["\n  button {\n    background: none;\n    border: none;\n    padding: 0 12px;\n    cursor: pointer;\n    &:focus {\n      outline: none;\n    }\n  }\n"]))),Gt=vn.d.button(nn||(nn=Object(Vn.a)(["\n  &:disabled {\n    opacity: ",";\n  }\n"])),(function(n){return!n.active&&"0.2"})),Kt=function(n,t){var e=Object(gn.useState)(null),i=Object(kn.a)(e,2),r=i[0],a=i[1],o=Object(gn.useState)({activeIndex:0,translate:0,transition:.45}),c=Object(kn.a)(o,2),s=c[0],d=c[1],l=s.activeIndex,m=s.transition,x=l===n.length-1,u=0===l;Object(gn.useEffect)((function(){a(null===t||void 0===t?void 0:t.current.clientWidth)}),[r]);return Object(gn.useEffect)((function(){0===m&&d((function(n){return Object(zn.a)(Object(zn.a)({},n),{},{transition:.45})}))}),[m]),{state:s,nextSlide:function(){d((function(t){return Object(zn.a)(Object(zn.a)({},t),{},{activeIndex:l===n.length-1?0:l+1,translate:(l+1)*r})}))},backSlide:function(){d((function(t){return Object(zn.a)(Object(zn.a)({},t),{},{activeIndex:0===l?n.length-1:l-1,translate:(l-1)*r})}))},handleResize:function(){d((function(n){return Object(zn.a)(Object(zn.a)({},n),{},{translate:r,transition:0})}))},width:r,disabledNext:x,disabledBack:u,handleNav:function(n){d(Object(zn.a)(Object(zn.a)({},s),{},{activeIndex:n,translate:n*r}))}}},Qt=function(n){var t=Object(gn.useRef)();Object(gn.useEffect)((function(){t.current=n}),[n]),Object(gn.useEffect)((function(){var n=window.addEventListener("resize",(function(){return t.current()}));return function(){window.removeEventListener("resize",n)}}),[])},Zt=function(){var n=Object(gn.useRef)(),t=Kt(Mn,n),e=t.state,i=t.nextSlide,r=t.backSlide,a=t.handleResize,o=t.width,c=t.disabledBack,s=t.disabledNext,d=t.handleNav,l=e.activeIndex,m=e.transition,x=e.translate;return Qt(a),Object(Rn.jsxs)(Yt,{children:[Object(Rn.jsx)(Yn,{as:Jn,text:"Explore our new search filters"}),Object(Rn.jsxs)(Nt,{children:[Object(Rn.jsx)(Xt,{transition:m,translate:x,width:o*Mn.length,maxWidth:o,children:null===Mn||void 0===Mn?void 0:Mn.map((function(t,e){return Object(Rn.jsxs)(Ht,{width:o,children:[Object(Rn.jsx)(Wt,{children:Object(Rn.jsx)(Vt,{isRing:!1})}),Object(Rn.jsx)(Dt,{src:t.img,alt:"",ref:n})]},t.img+e)}))}),Object(Rn.jsxs)(Tt,{children:[Object(Rn.jsx)(Ut,{children:null===Mn||void 0===Mn?void 0:Mn.map((function(n,t){return Object(Rn.jsx)(Jt,{active:l===t,onClick:function(){return d(t)}},t)}))}),Object(Rn.jsxs)(qt,{children:[Object(Rn.jsx)(Gt,{onClick:r,disabled:c,ariaLabel:"back",children:Object(Rn.jsx)(ct,{name:"back"})}),Object(Rn.jsx)(Gt,{ariaLabel:"next",onClick:i,disabled:s,children:Object(Rn.jsx)(ct,{name:"next"})})]})]})]})]})},$t=vn.d.section(tn||(tn=Object(Vn.a)(["\n  padding: 0 15px;\n  text-align: center;\n  width: 70%;\n  margin: auto auto 19rem;\n  @media (max-width: 960px) {\n    width: calc(100% - 30px);\n  }\n  @media (max-width: 560px) {\n    padding: 0 30px;\n    width: calc(100% - 60px);\n    margin: auto auto 2rem;\n    "," {\n      text-align: left;\n    }\n  }\n"])),Xn),_t=function(){return Object(Rn.jsxs)($t,{children:[Object(Rn.jsx)(nt,{as:et,text:"You grew as a creator, we grew together with you"}),Object(Rn.jsx)(Yn,{as:Un,text:Object(Rn.jsx)(It,{}),mt:2.5})]})},ne=function(){var n=Object(gn.useState)(!1),t=Object(kn.a)(n,2),i=t[0],r=t[1],a=Object(gn.useRef)(null),o=function(n){var t=n[0].intersectionRatio>=.25;r(!!t)};return Object(gn.useEffect)((function(){Promise.resolve("undefined"!==typeof window.IntersectionObserver?window.IntersectionObserver:e.e(0).then(e.t.bind(null,31,7))).then((function(){new window.IntersectionObserver(o,{threshold:.25}).observe(null===a||void 0===a?void 0:a.current)}))}),[a]),[i,a]},te=vn.d.section(en||(en=Object(Vn.a)(["\n  display: grid;\n  grid-template-columns: 55% 40%;\n  align-items: center;\n  padding: 0 15px;\n  margin-top: 25rem;\n  @media (max-width: 960px) {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  @media (max-width: 560px) {\n    padding: 0 30px;\n    margin-top: 12.5rem;\n    text-align: center;\n  }\n"]))),ee=vn.d.article(rn||(rn=Object(Vn.a)(["\n  @media (max-width: 960px) {\n    grid-row: 2;\n    position: relative;\n  }\n"]))),ie=vn.d.article(an||(an=Object(Vn.a)(["\n  @media (max-width: 960px) {\n    grid-row: 1;\n  }\n"]))),re=vn.d.img(on||(on=Object(Vn.a)(["\n  height: auto;\n  width: auto;\n  object-fit: contain;\n  filter: blur(0);\n"]))),ae=vn.d.div(cn||(cn=Object(Vn.a)(["\n  position: relative;\n  text-align: center;\n  padding: 60px 60px;\n  width: fit-content;\n  margin: auto;\n  @media (max-width: 560px) {\n    padding: 30px 30px;\n    "," {\n      width: 100%;\n    }\n  }\n  &:before {\n    content: '';\n    border-radius: 50%;\n    background: radial-gradient(\n      194.17% 194.17% at 24.58% -33.33%,\n      #589af2 0%,\n      #7a4cde 100%\n    );\n    filter: blur(78px);\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    opacity: 0.5;\n    transition: opacity 1s ease-in-out;\n    ","\n  }\n"])),re,(function(n){return n.show&&Object(vn.c)(sn||(sn=Object(Vn.a)(["\n        ","\n      "])),xt)})),oe=vn.d.div(dn||(dn=Object(Vn.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 125px);\n  grid-gap: 0 1.5rem;\n  @media (max-width: 960px) {\n    justify-content: center;\n  }\n  @media (max-width: 560px) {\n    grid-template-columns: 1fr;\n    grid-gap: 8px 0;\n    margin-top: 2.5rem;\n  }\n"]))),ce=vn.d.picture(ln||(ln=Object(Vn.a)(["\n  "," {\n    width: 100%;\n    @media (max-width: 560px) {\n      max-width: 355px;\n    }\n  }\n"])),re),se=vn.d.source(mn||(mn=Object(Vn.a)([""]))),de=function(){var n=ne(),t=Object(kn.a)(n,2),e=t[0],i=t[1];return Object(Rn.jsxs)(te,{ref:i,children:[Object(Rn.jsxs)(ee,{children:[Object(Rn.jsx)(Yn,{as:Un,mb:5.5,text:"Rex Banner soundtracked most of your videos"}),Object(Rn.jsx)(nt,{as:et,text:Object(Rn.jsx)(Mt,{}),mb:1.5}),Object(Rn.jsxs)(oe,{children:[Object(Rn.jsxs)(ce,{children:[Object(Rn.jsx)(se,{srcset:"images/card-4.jpg (max-width: 560px)",alt:"Imagen 1"}),Object(Rn.jsx)(re,{src:"images/card-6.jpg",alt:"Imagen 1"})]}),Object(Rn.jsxs)(ce,{children:[Object(Rn.jsx)(se,{srcset:"images/card-6.jpg (max-width: 560px)",alt:"Imagen 2"}),Object(Rn.jsx)(re,{src:"images/card-5.jpg",alt:"Imagen 2"})]}),Object(Rn.jsx)(ce,{children:Object(Rn.jsx)(re,{src:"images/card-1.jpg",alt:"Imagen 3"})})]})]}),Object(Rn.jsx)(ie,{children:Object(Rn.jsx)(ae,{show:e,children:Object(Rn.jsx)(re,{src:"images/elipse-soundtrack.png",alt:"Imagen 4"})})})]})},le=vn.d.section(xn||(xn=Object(Vn.a)(["\n  padding: 0 15px;\n  margin-top: 25rem;\n  margin-bottom: 12.5rem;\n  @media (max-width: 560px) {\n    padding: 0 30px;\n    margin-top: 12.5rem;\n  }\n"]))),me=vn.d.article(un||(un=Object(Vn.a)(["\n  width: 75%;\n  margin-bottom: 8rem;\n  @media (max-width: 960px) {\n    width: 100%;\n  }\n  @media (max-width: 560px) {\n    width: 100%;\n    margin-bottom: 3.5rem;\n  }\n"]))),xe=vn.d.article(pn||(pn=Object(Vn.a)(["\n  text-align: center;\n  "," {\n    position: relative;\n    display: inline-grid;\n    &:before {\n      content: '';\n      width: 11px;\n      height: 59px;\n      background: #0b0b0b;\n      position: absolute;\n      left: 130px;\n      top: 54px;\n      @media (max-width: 1024px) {\n        display: none;\n      }\n    }\n    &:after {\n      content: '';\n      width: 18px;\n      height: 15px;\n      background: #0b0b0b;\n      position: absolute;\n      left: 130px;\n      top: 93px;\n      @media (max-width: 1024px) {\n        display: none;\n      }\n    }\n  }\n"])),Yn),ue=vn.d.div(hn||(hn=Object(Vn.a)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns:\n    minmax(150px, 328px) minmax(106px, 226px) minmax(140px, 239px)\n    minmax(145px, 275px) minmax(160px, 239px);\n  margin-top: -6.6rem;\n  position: relative;\n  @media (max-width: 960px) {\n    margin-top: -6rem;\n  }\n  @media (max-width: 560px) {\n    margin-top: -3.5rem;\n    grid-template-columns: minmax(110px, 134px) minmax(90px, 112px);\n    grid-gap: 0 20%;\n    img:last-child {\n      display: none;\n    }\n  }\n  @media (max-width: 320px) {\n    margin-top: -3rem;\n  }\n"]))),pe=vn.d.img(bn||(bn=Object(Vn.a)(["\n  width: 100%;\n  &:nth-of-type(2) {\n    margin-top: 1rem;\n    margin-left: -60px;\n    position: relative;\n    @media (max-width: 560px) {\n      width: 136px;\n      grid-column: 2;\n      margin-left: -110px;\n      margin-top: -2.5rem;\n      z-index: 2;\n    }\n  }\n  &:nth-of-type(3) {\n    margin-top: 66px;\n    margin-left: -135px;\n    @media (max-width: 560px) {\n      width: 136px;\n      grid-column: 2;\n      margin-left: -20px;\n      margin-top: -40px;\n    }\n  }\n  &:nth-of-type(4) {\n    margin-top: -10px;\n    margin-left: -155px;\n    position: relative;\n    @media (max-width: 560px) {\n      grid-row: 1;\n      grid-column: 2;\n      margin-left: -10px;\n      margin-top: 10px;\n    }\n  }\n  &:nth-of-type(5) {\n    margin-top: 66px;\n    margin-left: -175px;\n  }\n"]))),he=function(){return Object(Rn.jsxs)(le,{children:[Object(Rn.jsxs)(me,{children:[Object(Rn.jsx)(Yn,{as:Un,text:"You created a lot of Uplifting videos this year"}),Object(Rn.jsx)(nt,{as:et,text:Object(Rn.jsx)(Bt,{})})]}),Object(Rn.jsxs)(xe,{children:[Object(Rn.jsx)(Yn,{as:qn,text:"Uplifting"}),Object(Rn.jsx)(ue,{children:null===In||void 0===In?void 0:In.map((function(n,t){return Object(Rn.jsx)(pe,{src:n.img,alt:n.img},t)}))})]})]})},be=function(){var n=Object(gn.useRef)();return Object(gn.useEffect)((function(){null===n||void 0===n||n.current.scrollIntoView({behavior:"smooth"})}),[]),Object(Rn.jsxs)("div",{ref:n,children:[Object(Rn.jsx)(_n,{}),Object(Rn.jsx)(At,{}),Object(Rn.jsx)(de,{}),Object(Rn.jsx)(he,{}),Object(Rn.jsx)(Zt,{}),Object(Rn.jsx)(_t,{}),Object(Rn.jsx)(at,{}),Object(Rn.jsx)(bt,{})]})},je=Object(vn.b)(jn||(jn=Object(Vn.a)(["\n  html {  \n    overflow-x: hidden;\n  }\n  body {\n    background: ",";\n    font-family: 'Inter', sans-serif;\n    font-size: 16px;\n    overflow-x: hidden;\n    margin: 0;\n  }\n"])),yn.colors.primary),ge=function(){return Object(Rn.jsx)(Ln,{children:Object(Rn.jsxs)(vn.a,{theme:yn,children:[Object(Rn.jsx)(je,{}),Object(Rn.jsx)(be,{})]})})};wn.a.render(Object(Rn.jsx)(fn.a.StrictMode,{children:Object(Rn.jsx)(ge,{})}),document.getElementById("root"))}},[[30,2,3]]]);
//# sourceMappingURL=main.9533825d.chunk.js.map