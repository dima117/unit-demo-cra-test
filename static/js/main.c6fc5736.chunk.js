(this["webpackJsonpunit-demo-cra"]=this["webpackJsonpunit-demo-cra"]||[]).push([[0],{32:function(t,e,c){},33:function(t,e,c){"use strict";c.r(e);var n=c(13),i=c.n(n),a=c(8),j=c(12),s=c(3),r=c(1),b=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{"data-testid":"page-title",children:"About"}),Object(r.jsx)("p",{children:"This is an example application."})]})},d=c(0),u=c(15),o=c(20),O=c(9),l=c(21),x={items:["\u041f\u043e\u0437\u0430\u0432\u0442\u0440\u0430\u043a\u0430\u0442\u044c","\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d","\u041f\u043e\u043a\u043e\u0440\u043c\u0438\u0442\u044c \u043a\u043e\u0442\u0430"],done:{},text:""},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM":return Object(O.a)(Object(O.a)({},t),{},{text:"",items:[].concat(Object(o.a)(t.items),[e.text])});case"SET_TEXT":return Object(O.a)(Object(O.a)({},t),{},{text:e.text});case"SET_DONE":return Object(O.a)(Object(O.a)({},t),{},{done:Object(O.a)(Object(O.a)({},t.done),{},Object(u.a)({},e.index,e.done))});default:return t}};var p=function(t){var e=t.index,c=Object(a.b)(),n=Object(a.c)((function(t){return t.items[e]})),i=Object(a.c)((function(t){return t.done[e]})),j=Object(d.useCallback)((function(){return c(function(t,e){return{type:"SET_DONE",index:t,done:e}}(e,!i))}),[e,i,c]);return Object(r.jsxs)("div",{"data-testid":"list-item",className:i?"done":"",children:[Object(r.jsx)("input",{type:"checkbox",checked:i,onChange:j}),n]})},f=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.items})),c=Object(a.c)((function(t){return t.text})),n=Object(d.useCallback)((function(e){var c=e.target;t(function(t){return{type:"SET_TEXT",text:t}}(c.value))}),[t]),i=Object(d.useCallback)((function(){t(function(t){return{type:"ADD_ITEM",text:t}}(c))}),[t,c]);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{"data-testid":"input-add",value:c,onChange:n}),Object(r.jsx)("button",{"data-testid":"button-add",onClick:i,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(r.jsx)("div",{"data-testid":"list",className:"list",children:e.map((function(t,e){return Object(r.jsx)(p,{index:e},e)}))})]})},m=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{"data-testid":"page-title",children:"Home"}),Object(r.jsx)("p",{children:"This is the list."}),Object(r.jsx)(f,{})]})},v=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("nav",{children:[Object(r.jsx)(j.b,{"data-testid":"link-home",to:"/",children:"Home"}),Object(r.jsx)(j.b,{to:"/about",children:"About"})]}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/about",children:Object(r.jsx)(b,{})}),Object(r.jsx)(s.a,{path:"/",children:Object(r.jsx)(m,{})})]})]})},T=(c(32),Object(l.a)(h));i.a.render(Object(r.jsx)(j.a,{children:Object(r.jsx)(a.a,{store:T,children:Object(r.jsx)(v,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c6fc5736.chunk.js.map