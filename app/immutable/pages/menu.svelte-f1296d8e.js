import{S as K,i as Q,s as U,l as m,x as W,a as P,u as x,m as _,p as y,y as X,c as w,h as u,v as A,q as $,b as C,z as Y,J as l,f as Z,t as ee,C as te,M as ae,e as F}from"../chunks/index-345448e8.js";import{T as se}from"../chunks/TopBar-64c9d236.js";import"../chunks/paths-abcb058a.js";function H(d,e,t){const f=d.slice();return f[2]=e[t][0],f[3]=e[t][1],f[5]=t,f}function J(d){let e;return{c(){e=m("br")},l(t){e=_(t,"BR",{})},m(t,f){C(t,e,f)},d(t){t&&u(e)}}}function G(d){let e,t,f=d[2]+"",h,p,E=d[3]+"",g,i,v,n=d[5]!=d[0]&&J();return{c(){e=m("div"),t=m("span"),h=P(),p=m("span"),g=x(E),i=P(),n&&n.c(),v=F(),this.h()},l(s){e=_(s,"DIV",{class:!0});var o=y(e);t=_(o,"SPAN",{class:!0});var S=y(t);S.forEach(u),h=w(o),p=_(o,"SPAN",{class:!0});var N=y(p);g=A(N,E),N.forEach(u),o.forEach(u),i=w(s),n&&n.l(s),v=F(),this.h()},h(){$(t,"class","itemName svelte-1uiuy77"),$(p,"class","price svelte-1uiuy77"),$(e,"class","item svelte-1uiuy77")},m(s,o){C(s,e,o),l(e,t),t.innerHTML=f,l(e,h),l(e,p),l(p,g),C(s,i,o),n&&n.m(s,o),C(s,v,o)},p(s,o){s[5]!=s[0]?n||(n=J(),n.c(),n.m(v.parentNode,v)):n&&(n.d(1),n=null)},d(s){s&&u(e),s&&u(i),n&&n.d(s),s&&u(v)}}}function le(d){let e,t,f,h,p,E,g,i,v,n,s,o,S,N,V,j,B,M,D;t=new se({});let I=Object.entries(d[1]),c=[];for(let a=0;a<I.length;a+=1)c[a]=G(H(d,I,a));return{c(){e=m("main"),W(t.$$.fragment),f=P(),h=m("div"),p=m("div");for(let a=0;a<c.length;a+=1)c[a].c();E=P(),g=m("div"),i=m("div"),v=m("p"),n=x("Bring your own cup please"),s=P(),o=m("span"),S=x("Note"),N=x(": "),V=m("br"),j=P(),B=m("span"),M=x("The menu might change so this could be innaccurate. Please ask at the cafe if you want to check."),this.h()},l(a){e=_(a,"MAIN",{});var b=y(e);X(t.$$.fragment,b),f=w(b),h=_(b,"DIV",{class:!0});var r=y(h);p=_(r,"DIV",{class:!0});var T=y(p);for(let L=0;L<c.length;L+=1)c[L].l(T);T.forEach(u),r.forEach(u),E=w(b),g=_(b,"DIV",{class:!0});var O=y(g);i=_(O,"DIV",{});var k=y(i);v=_(k,"P",{});var q=y(v);n=A(q,"Bring your own cup please"),q.forEach(u),s=w(k),o=_(k,"SPAN",{class:!0});var R=y(o);S=A(R,"Note"),R.forEach(u),N=A(k,": "),V=_(k,"BR",{}),j=w(k),B=_(k,"SPAN",{});var z=y(B);M=A(z,"The menu might change so this could be innaccurate. Please ask at the cafe if you want to check."),z.forEach(u),k.forEach(u),O.forEach(u),b.forEach(u),this.h()},h(){$(p,"class","svelte-1uiuy77"),$(h,"class","menu svelte-1uiuy77"),$(o,"class","noteLabel svelte-1uiuy77"),$(g,"class","bottomContent svelte-1uiuy77")},m(a,b){C(a,e,b),Y(t,e,null),l(e,f),l(e,h),l(h,p);for(let r=0;r<c.length;r+=1)c[r].m(p,null);l(e,E),l(e,g),l(g,i),l(i,v),l(v,n),l(i,s),l(i,o),l(o,S),l(i,N),l(i,V),l(i,j),l(i,B),l(B,M),D=!0},p(a,[b]){if(b&3){I=Object.entries(a[1]);let r;for(r=0;r<I.length;r+=1){const T=H(a,I,r);c[r]?c[r].p(T,b):(c[r]=G(T),c[r].c(),c[r].m(p,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=I.length}},i(a){D||(Z(t.$$.fragment,a),D=!0)},o(a){ee(t.$$.fragment,a),D=!1},d(a){a&&u(e),te(t),ae(c,a)}}}function ne(d,e,t){let f;const h={Flapjack:"20p",Brownies:"50p",Scones:"40p",Lemonade:"20p","Tea <br> (normal, mint, fruit)":"\xA31","Coffee <br> (expresso, americano)":"\xA31","Peach cake":"50p",Cupcakes:"20p"};return t(0,f=Object.keys(h).length-1),[f,h]}class ce extends K{constructor(e){super(),Q(this,e,ne,le,U,{})}}export{ce as default};
