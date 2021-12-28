(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={header:"MainNavigation_header__bSRdg",logo:"MainNavigation_logo__J87uU",nav:"MainNavigation_nav__wx1vO",active:"MainNavigation_active__3xice"}},,function(e,t,n){e.exports={form:"TodoForm_form__2VFi0",loading:"TodoForm_loading__KPGOz",control:"TodoForm_control__1KSvb",actions:"TodoForm_actions__RJP-6"}},,function(e,t,n){e.exports={form:"NewDescriptionForm_form__MsPhl",loading:"NewDescriptionForm_loading__pqByc",control:"NewDescriptionForm_control__2mtg8",actions:"NewDescriptionForm_actions__lca_o"}},,function(e,t,n){e.exports={list:"TodoList_list__38SRs",sorting:"TodoList_sorting__W_nQJ"}},,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__7hhft"}},function(e,t,n){e.exports={item:"TodoItem_item__2ua7V"}},function(e,t,n){e.exports={notodos:"NoTodosFound_notodos__2wWhi"}},function(e,t,n){e.exports={todo:"HighlightedTodo_todo__2GCbT"}},function(e,t,n){e.exports={card:"Card_card__11mO_"}},function(e,t,n){e.exports={main:"Layout_main__2iiu4"}},function(e,t,n){e.exports={descriptions:"Descriptions_descriptions__WdVvG"}},function(e,t,n){e.exports={item:"DescriptionItem_item__Y9xUL"}},function(e,t,n){e.exports={descriptions:"DescriptionsList_descriptions__3TPiR"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(15),r=n.n(c),s=n(3),o=(n(29),n(2)),a=n(1),i=n(16),d=n.n(i),j=n(0),u=function(){return Object(j.jsx)("div",{className:d.a.spinner})},l=n(9),b=n(4),p=n.n(b),x=n(7),h=n(6);function O(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(a.useReducer)(O,{status:t?"pending":null,data:null,error:null}),c=Object(h.a)(n,2),r=c[0],s=c[1],o=Object(a.useCallback)(function(){var t=Object(x.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,s({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(l.a)({sendRequest:o},r)},m="https://react-http-d1e1f-default-rtdb.firebaseio.com";function v(){return _.apply(this,arguments)}function _(){return(_=Object(x.a)(p.a.mark((function e(){var t,n,c,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/todo.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch toodos.");case 8:for(r in c=[],n)s=Object(l.a)({id:r},n[r]),c.push(s);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(p.a.mark((function e(t){var n,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/todo/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch todo.");case 8:return r=Object(l.a)({id:t},c),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(x.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/todo.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create todo.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/description/").concat(t.todoId,".json"),{method:"POST",body:JSON.stringify(t.descriptionData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add description.");case 8:return e.abrupt("return",{descriptionId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(p.a.mark((function e(t){var n,c,r,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/description/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get descriptions.");case 8:for(s in r=[],c)o=Object(l.a)({id:s},c[s]),r.push(o);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=n(17),C=n.n(T),E=function(e){return Object(j.jsxs)("li",{className:C.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blocktodo",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(s.b,{className:"btn",to:"/todo/".concat(e.id),children:"Pe\u0142ny ekran"})]})},F=n(14),I=n.n(F),L=function(e){var t=Object(o.h)(),n=Object(o.g)(),c="asc"===new URLSearchParams(n.search).get("sort");console.log(c);var r,s,i=(r=e.todos,s=c,r.sort((function(e,t){return s?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("div",{className:I.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){t(n.pathname,{search:"?sort=".concat(c?"desc":"asc")})},children:["Sortuj ",c?"malej\u0105co":"rosn\u0105co"]})}),Object(j.jsx)("ul",{className:I.a.list,children:i.map((function(e){return Object(j.jsx)(E,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},z=n(18),A=n.n(z),P=function(){return Object(j.jsxs)("div",{className:A.a.notodos,children:[Object(j.jsx)("p",{children:"Nie znaleziono \u017cadnego todo"}),Object(j.jsx)(s.b,{className:"btn",to:"/new-todo",children:"Dodaj todo"})]})},q=function(){var e=f(v,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(a.useEffect)((function(){t()}),[t]),"pending"===n?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(u,{})}):r?Object(j.jsx)("p",{className:"centered focused",children:r}):"completed"!==n||c&&0!==c.length?Object(j.jsx)(L,{todos:c}):Object(j.jsx)(P,{})},J=n(19),M=n.n(J),U=function(e){return Object(j.jsxs)("figure",{className:M.a.todo,children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("figcaption",{children:e.author})]})},W=function(){var e=Object(o.i)().todoId,t=f(g,!0),n=t.sendRequest,c=t.status,r=t.data,s=t.error;return Object(a.useEffect)((function(){n(e)}),[n,e]),"pending"===c?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(u,{})}):s?Object(j.jsx)("p",{className:"centered",children:s}):r.text?Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(U,{text:r.text,author:r.author}),Object(j.jsx)(o.b,{})]}):Object(j.jsx)("p",{children:"Nie znaleziono, \u017cadnego todo!"})},G=n(20),V=n.n(G),B=function(e){return Object(j.jsx)("div",{className:V.a.card,children:e.children})},K=n(10),Z=n.n(K),H=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(j.jsx)(a.Fragment,{children:Object(j.jsx)(B,{children:Object(j.jsxs)("form",{className:Z.a.form,onSubmit:function(c){c.preventDefault();var r=t.current.value,s=n.current.value;e.onAddTodo({author:r,text:s})},children:[e.isLoading&&Object(j.jsx)("div",{className:Z.a.loading,children:Object(j.jsx)(u,{})}),Object(j.jsxs)("div",{className:Z.a.control,children:[Object(j.jsx)("label",{htmlFor:"author",children:"Autor"}),Object(j.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(j.jsxs)("div",{className:Z.a.control,children:[Object(j.jsx)("label",{htmlFor:"text",children:"To do: "}),Object(j.jsx)("textarea",{id:"text",rows:"5",ref:n})]}),Object(j.jsx)("div",{className:Z.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Dodaj todo"})})]})})})},Q=function(){var e=f(w),t=e.sendRequest,n=e.status,c=Object(o.h)();Object(a.useEffect)((function(){"completed"===n&&c("/todo")}),[n,c]);return Object(j.jsx)(H,{isLoading:"pending"===n,onAddTodo:function(e){t(e)}})},Y=function(){return Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)("p",{children:"Nie znaleziono strony!"})})},X=n(21),$=n.n(X),ee=n(8),te=n.n(ee),ne=function(){return Object(j.jsxs)("header",{className:te.a.header,children:[Object(j.jsx)("div",{className:te.a.logo,children:"Todos"}),Object(j.jsx)("nav",{className:te.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/todo",className:function(e){return e.isActive?te.a.active:""},children:"Wszystkie todo"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/new-todo",className:function(e){return e.isActive?te.a.active:""},children:"Dodaj todo"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/login",className:function(e){return e.isActive?te.a.active:""},children:"Zaloguj si\u0119"})})]})})]})},ce=function(e){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(ne,{}),Object(j.jsx)("main",{className:$.a.main,children:e.children})]})},re=n(22),se=n.n(re),oe=n(12),ae=n.n(oe),ie=function(e){var t=Object(a.useRef)(),n=f(k),c=n.sendRequest,r=n.status,s=n.error,o=e.onAddedDescription;Object(a.useEffect)((function(){"completed"!==r||s||o()}),[r,s,o]);var i=function(n){n.preventDefault();var r=t.current.value;c({descriptionData:{text:r},todoId:e.todoId})};return Object(j.jsxs)("form",{className:ae.a.form,onSubmit:i,children:["pending"===r&&Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(u,{})}),Object(j.jsxs)("div",{className:ae.a.control,onSubmit:i,children:[Object(j.jsx)("label",{htmlFor:"description",children:"Tw\xf3j opis"}),Object(j.jsx)("textarea",{id:"description",rows:"5",ref:t})]}),Object(j.jsx)("div",{className:ae.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Dodaj opis"})})]})},de=n(23),je=n.n(de),ue=function(e){return Object(j.jsx)("li",{className:je.a.item,children:Object(j.jsx)("p",{children:e.text})})},le=n(24),be=n.n(le),pe=function(e){return Object(j.jsx)("ul",{className:be.a.descriptions,children:e.descriptions.map((function(e){return Object(j.jsx)(ue,{text:e.text},e.id)}))})},xe=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(o.i)().todoId,s=f(D),i=s.sendRequest,d=s.status,l=s.data;Object(a.useEffect)((function(){i(r)}),[r,i]);var b,p=Object(a.useCallback)((function(){i(r)}),[i,r]);return"pending"===d&&(b=Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(u,{})})),"completed"===d&&l&&l.length>0&&(b=Object(j.jsx)(pe,{descriptions:l})),"completed"!==d||l&&0!==l.length||(b=Object(j.jsx)("p",{className:"centered",children:"Nie dodano do tej pory \u017cadnego opisu!"})),Object(j.jsxs)("section",{className:se.a.descriptions,children:[Object(j.jsx)("h2",{children:"Opis todo"}),!n&&Object(j.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Dodaj opis"}),n&&Object(j.jsx)(ie,{todoId:r,onAddedDescription:p}),b]})};var he=function(){return Object(j.jsx)(ce,{children:Object(j.jsxs)(o.e,{children:[Object(j.jsx)(o.c,{path:"/",element:Object(j.jsx)(o.a,{replace:!0,to:"/todo"})}),Object(j.jsx)(o.c,{path:"/todo",element:Object(j.jsx)(q,{})}),Object(j.jsxs)(o.c,{path:"/todo/:todoId",element:Object(j.jsx)(W,{}),children:[Object(j.jsx)(o.c,{path:"",element:Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(s.b,{className:"btn--flat",to:"description",children:"Za\u0142aduj opisy"})})}),Object(j.jsx)(o.c,{path:"description",element:Object(j.jsx)(xe,{})})]}),Object(j.jsx)(o.c,{path:"/new-todo",element:Object(j.jsx)(Q,{})}),Object(j.jsx)(o.c,{path:"*",element:Object(j.jsx)(Y,{})})]})})};r.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(he,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.5e9ea065.chunk.js.map