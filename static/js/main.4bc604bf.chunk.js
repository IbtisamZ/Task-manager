(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(25),o=n.n(r),i=n(148),s=n(57),l=n(153),d=n(155),j=n(10),x=n(159),b=n(157),u=n(65),m=n(17),h=n(149),f=n(156),p=n(151),O=n(158),g=n(79),y=n.n(g),v=n(82),w=n.n(v),k=n(80),C=n.n(k),S=n(81),I=n.n(S),D=n(1),W=function(e){var t=e.setTodoCount,n=void 0===t?function(){}:t,a=Object(c.useState)(""),r=Object(j.a)(a,2),o=r[0],i=r[1],s=Object(c.useState)([]),l=Object(j.a)(s,2),x=l[0],g=l[1],v=function(e){e.preventDefault(),o&&(g((function(e){return[].concat(Object(m.a)(e),[{id:Date.now(),title:o,completed:!1}])})),n((function(e){return e+1}))),i("")},k=Object(D.jsx)("form",{onSubmit:v,children:Object(D.jsxs)(d.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(D.jsx)(h.a,{sx:{width:"60%"},variant:"standard",placeholder:"Add a task here..",value:o,onChange:function(e){i(e.target.value)}}),Object(D.jsx)(f.a,{disableRipple:!0,type:"submit",size:"small",sx:{ml:4,color:"text.main",boxShadow:"none",backgroundColor:"primary.main","&:hover":{backgroundColor:"common.argent"}},"aria-label":"add",onClick:v,children:Object(D.jsx)(y.a,{})})]})}),S=x.map((function(e){return Object(D.jsx)(c.Fragment,{children:Object(D.jsxs)(d.a,{sx:{mt:2,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(D.jsxs)(d.a,{sx:{display:"flex",flexDirection:"row",alignItems:"center",textDecoration:e.completed?"line-through":null,color:e.completed?"common.silverSand":"common.gray"},children:[Object(D.jsx)(p.a,{disableRipple:!0,checked:e.completed,onChange:function(){return function(e){var t=x.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}));g(t)}(e.id)},icon:Object(D.jsx)(C.a,{}),checkedIcon:Object(D.jsx)(I.a,{})}),Object(D.jsx)(d.a,{sx:{overflowWrap:"break-word"},children:Object(D.jsx)(b.a,{children:e.title})})]}),Object(D.jsx)(d.a,{children:Object(D.jsx)(O.a,{disableRipple:!0,"aria-label":"delete",onClick:function(){return t=e.id,g(x.filter((function(e){return e.id!==t}))),void n((function(e){return e-1}));var t},children:Object(D.jsx)(w.a,{sx:{color:"common.gray2"}})})})]})},e.id)}));return Object(D.jsxs)(d.a,{children:[k,Object(D.jsx)(d.a,{mt:6,px:2,children:S})]})},B=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],r=(new Date).toLocaleString("en-us",{month:"short",year:"numeric",day:"numeric"}),o=new Date(r).toLocaleString("en-us",{weekday:"long"});return Object(D.jsx)(d.a,{sx:{width:1,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(D.jsxs)(x.a,{sx:{px:4,py:6,m:1,width:1,height:560,maxWidth:530,borderRadius:3,overflowY:"scroll",boxShadow:"0 10px 20px rgba(0, 0, 0, .05), \n                    0 6px 6px rgba(0, 0, 0, .05)"},children:[Object(D.jsxs)(d.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mb:5},children:[Object(D.jsx)(b.a,{variant:"h4",color:"common.gray3",sx:{fontWeight:600},children:o}),Object(D.jsx)(b.a,{color:"common.gray3",children:r}),Object(D.jsx)(d.a,{mt:2,children:Object(D.jsx)(b.a,{color:"common.gray2",sx:{fontWeight:400,fontSize:13},children:"".concat(n," tasks")})})]}),Object(D.jsx)(W,{setTodoCount:a})]})})},R=function(){return Object(D.jsxs)(d.a,{sx:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(D.jsx)(d.a,{sx:{display:"flex",flex:5,width:1},children:Object(D.jsx)(B,{})}),Object(D.jsx)(d.a,{sx:{width:1,flex:1,display:"flex",justifyContent:"center",alignItems:"end",textAlign:"center",color:"common.gray",fontSize:13,mb:1},children:"\u2014 IbtisamZ \u2014"})]})},z=function(){var e=Object(s.a)({palette:{background:{default:"#efeeea"},primary:{main:"#bab6b6"},text:{main:"#fff"},common:{gray:"#808080",gray2:"rgba(0, 0, 0, 0.2)",gray3:"gray",water:"rgba(193, 217, 220)",antiFlashWhite:"#eff1f2",silverSand:"#b8c3c6",argent:"#c4c2c2"}},components:{MuiButtonBase:{styleOverrides:{root:{"&:focus":{outline:"none"}}}},MuiInputBase:{styleOverrides:{root:{color:"#808080"},input:{"&:-webkit-autofill":{WebkitTextFillColor:"#808080",transition:"1000000s ease-in-out"}}}}}});return Object(D.jsxs)(l.a,{theme:e,children:[Object(D.jsx)(i.a,{}),Object(D.jsx)(R,{})]})};o.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(z,{})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.4bc604bf.chunk.js.map