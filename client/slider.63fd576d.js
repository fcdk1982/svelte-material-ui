import{S as a,i as t,s as e,a as s,e as n,t as r,m as l,q as o,d as c,c as i,b as u,f,g as m,o as $,j as p,k as d,l as h,p as v,H as g,u as x,v as E,w,h as V,z as b,A as S,B as k}from"./client.a39e05ea.js";import"./prefixFilter.73eb3417.js";import{F as D}from"./bare.238148fe.js";import{S as y}from"./bare.b63c2563.js";function j(a){let t,e;return{c(){t=n("span"),e=r("Amount of Wonder"),this.h()},l(a){t=u(a,"SPAN",{slot:!0,style:!0});var s=f(t);e=m(s,"Amount of Wonder"),s.forEach(c),this.h()},h(){p(t,"slot","label"),V(t,"padding-right","12px"),V(t,"width","max-content"),V(t,"display","block")},m(a,s){d(a,t,s),h(t,e)},d(a){a&&c(t)}}}function I(a){let t,e,n;function r(t){a[3].call(null,t)}let o={};void 0!==a[0]&&(o.value=a[0]);const u=new y({props:o});return b.push(()=>S(u,"value",r)),{c(){l(u.$$.fragment),e=s()},l(a){$(u.$$.fragment,a),e=i(a)},m(a,t){v(u,a,t),d(a,e,t),n=!0},p(a,e){const s={};!t&&1&e&&(t=!0,s.value=a[0],k(()=>t=!1)),u.$set(s)},i(a){n||(x(u.$$.fragment,a),n=!0)},o(a){E(u.$$.fragment,a),n=!1},d(a){w(u,a),a&&c(e)}}}function A(a){let t,e,V,A,P,R,F,H,M,N,W,q,z,B,C,O,T,U,G,J,K,L,Q,X,Y,Z,_;const aa=new D({props:{align:"end",style:"display: flex;",$$slots:{default:[I],label:[j]},$$scope:{ctx:a}}});function ta(t){a[4].call(null,t)}let ea={min:-10,max:10,step:2,discrete:!0};void 0!==a[1]&&(ea.value=a[1]);const sa=new y({props:ea});function na(t){a[5].call(null,t)}b.push(()=>S(sa,"value",ta));let ra={min:-10,max:10,step:2,discrete:!0,displayMarkers:!0};void 0!==a[2]&&(ra.value=a[2]);const la=new y({props:ra});return b.push(()=>S(la,"value",na)),{c(){t=s(),e=n("section"),V=n("h2"),A=r("Slider"),P=s(),R=n("div"),l(aa.$$.fragment),F=s(),H=n("pre"),M=r("Value: "),N=r(a[0]),W=s(),q=n("div"),z=r("Discrete with min/max/step:\n\n    "),l(sa.$$.fragment),C=s(),O=n("pre"),T=r("Value: "),U=r(a[1]),G=s(),J=n("div"),K=r("Discrete with min/max/step and tick marks:\n\n    "),l(la.$$.fragment),Q=s(),X=n("pre"),Y=r("Value: "),Z=r(a[2]),this.h()},l(s){o('[data-svelte="svelte-1onfh7p"]',document.head).forEach(c),t=i(s),e=u(s,"SECTION",{});var n=f(e);V=u(n,"H2",{});var r=f(V);A=m(r,"Slider"),r.forEach(c),P=i(n),R=u(n,"DIV",{});var l=f(R);$(aa.$$.fragment,l),l.forEach(c),F=i(n),H=u(n,"PRE",{class:!0});var p=f(H);M=m(p,"Value: "),N=m(p,a[0]),p.forEach(c),W=i(n),q=u(n,"DIV",{});var d=f(q);z=m(d,"Discrete with min/max/step:\n\n    "),$(sa.$$.fragment,d),d.forEach(c),C=i(n),O=u(n,"PRE",{class:!0});var h=f(O);T=m(h,"Value: "),U=m(h,a[1]),h.forEach(c),G=i(n),J=u(n,"DIV",{});var v=f(J);K=m(v,"Discrete with min/max/step and tick marks:\n\n    "),$(la.$$.fragment,v),v.forEach(c),Q=i(n),X=u(n,"PRE",{class:!0});var g=f(X);Y=m(g,"Value: "),Z=m(g,a[2]),g.forEach(c),n.forEach(c),this.h()},h(){document.title="Slider - SMUI",p(H,"class","status"),p(O,"class","status"),p(X,"class","status")},m(a,s){d(a,t,s),d(a,e,s),h(e,V),h(V,A),h(e,P),h(e,R),v(aa,R,null),h(e,F),h(e,H),h(H,M),h(H,N),h(e,W),h(e,q),h(q,z),v(sa,q,null),h(e,C),h(e,O),h(O,T),h(O,U),h(e,G),h(e,J),h(J,K),v(la,J,null),h(e,Q),h(e,X),h(X,Y),h(X,Z),_=!0},p(a,[t]){const e={};65&t&&(e.$$scope={dirty:t,ctx:a}),aa.$set(e),(!_||1&t)&&g(N,a[0]);const s={};!B&&2&t&&(B=!0,s.value=a[1],k(()=>B=!1)),sa.$set(s),(!_||2&t)&&g(U,a[1]);const n={};!L&&4&t&&(L=!0,n.value=a[2],k(()=>L=!1)),la.$set(n),(!_||4&t)&&g(Z,a[2])},i(a){_||(x(aa.$$.fragment,a),x(sa.$$.fragment,a),x(la.$$.fragment,a),_=!0)},o(a){E(aa.$$.fragment,a),E(sa.$$.fragment,a),E(la.$$.fragment,a),_=!1},d(a){a&&c(t),a&&c(e),w(aa),w(sa),w(la)}}}function P(a,t,e){let s=50,n=0,r=0;return[s,n,r,function(a){s=a,e(0,s)},function(a){n=a,e(1,n)},function(a){r=a,e(2,r)}]}export default class extends a{constructor(a){super(),t(this,a,P,A,e,{})}}