(this["webpackJsonpcorona-clone"]=this["webpackJsonpcorona-clone"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(19),r=n.n(c),s=(n(26),n(27),n(0)),l=function(){return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"COVID-19"}),Object(s.jsxs)("select",{children:[Object(s.jsx)("option",{children:"\uad6d\ub0b4"}),Object(s.jsx)("option",{children:"\uc138\uacc4"})]})]})},i=n(10),d=n.n(i),b=n(20),f=n(3),u=n(21),j=n.n(u),h=n(8),p=function(){var e=Object(a.useState)({labels:["1\uc6d4","2\uc6d4","3\uc6d4"],datasets:[{label:"\uad6d\ub0b4 \ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:!0,data:[10,5,3]}]}),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({labels:["1\uc6d4","2\uc6d4","3\uc6d4"],datasets:[{label:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",borderColor:"salmon",fill:!1,data:[10,5,3]}]}),r=Object(f.a)(c,2),l=r[0],i=r[1],u=Object(a.useState)({labels:["1\uc6d4","2\uc6d4","3\uc6d4"],datasets:[{label:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",borderColor:"salmon",fill:!1,data:[10,5,3]}]}),p=Object(f.a)(u,2),O=p[0],m=p[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.covid19api.com/total/dayone/country/kr");case 2:n=e.sent,console.log(n),t(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e){var t=e.reduce((function(e,t){var n=new Date(t.Date),a=n.getFullYear(),o=n.getMonth(),c=n.getDate(),r=t.Confirmed,s=t.Active,l=t.Deaths,i=t.Recovered,d=e.find((function(e){return e.year===a&&e.month===o}));return d||e.push({year:a,month:o,date:c,confirmed:r,active:s,death:l,recovered:i}),d&&d.date<c&&(d.active=s,d.death=l,d.date=c,d.year=a,d.month=o,d.recovered=i,d.confirmed=r),e}),[]),n=t.map((function(e){return"".concat(e.month+1,"\uc6d4")}));o({labels:n,datasets:[{label:"\uad6d\ub0b4 \ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:!0,data:t.map((function(e){return e.confirmed}))}]}),i({labels:n,datasets:[{label:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",borderColor:"salmon",fill:!1,data:t.map((function(e){return e.active}))}]});var a=t[t.length-1];m({labels:["\ud655\uc9c4\uc790","\uaca9\ub9ac\ud574\uc81c","\uc0ac\ub9dd"],datasets:[{label:"\ub204\uc801 \ud655\uc9c4,\ud574\uc81c,\uc0ac\ub9dd \ube44\uc728",backgroundColor:["#ff3d67","#059bff","#ffc233"],borderColor:["#ff3d67","#059bff","#ffc233"],fill:!1,data:[a.confirmed,a.recovered,a.death]}]})};e()}),[]),Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{children:"\uad6d\ub0b4 \ucf54\ub85c\ub098 \ud604\ud669"}),Object(s.jsxs)("div",{className:"contents",children:[Object(s.jsx)("div",{children:Object(s.jsx)(h.a,{data:n,options:{title:{},legend:{display:!0,position:"bottom"}}})}),Object(s.jsx)("div",{children:Object(s.jsx)(h.c,{data:l,options:{title:{display:!0,text:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",fontsize:16},legend:{display:!0,position:"bottom"}}})}),Object(s.jsx)("div",{children:Object(s.jsx)(h.b,{data:O,options:{title:{display:!0,text:"\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd (".concat((new Date).getMonth+1,"\uc6d4)"),fontsize:16},legend:{display:!0,position:"bottom"}}})})]})]})};var O=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)(p,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.172f3397.chunk.js.map