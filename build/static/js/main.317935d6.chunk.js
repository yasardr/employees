(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(56)},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(17),c=n.n(o),i=n(3),l=n(5),s=n(0),u=Object(r.createContext)(),m="[auth] login",d="[auth] logout",f=function(){var e=Object(r.useContext)(u),t=e.user.name,n=e.dispatch,o=Object(s.f)();return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement(l.b,{to:"/",className:"navbar-brand"},"Logo"),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},a.a.createElement("div",{className:"navbar-nav me-auto mb-2 mb-lg-0"},a.a.createElement(l.c,{activeclassname:"active",to:"/",className:"nav-link"},"Home"),a.a.createElement(l.c,{activeclassname:"active",to:"/employees",className:"nav-link"},"Employees"),a.a.createElement(l.c,{activeclassname:"active",to:"/upload",className:"nav-link"},"Upload"),a.a.createElement(l.c,{activeclassname:"active",to:"/login",className:"nav-link"},"Login")),a.a.createElement("ul",{className:"navbar-nav ml-auto"},a.a.createElement("li",{className:"nav-item nav-link text-info"},a.a.createElement("span",null,t)),a.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){n({type:d}),o("/")}},"Logout")))))},h=n(9),p=n(18),v=n.n(p),y=n(6);function g(){g=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(k){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function m(){}function d(){}function f(){}var h={};i(h,a,function(){return this});var p=Object.getPrototypeOf,v=p&&p(p(L([])));v&&v!==t&&n.call(v,a)&&(h=v);var y=f.prototype=m.prototype=Object.create(h);function b(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=f,i(y,"constructor",f),i(f,"constructor",d),d.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),i(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(y),i(y,c,"Generator"),i(y,a,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var b="https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/yasar_altamirano",E=function(){var e=Object(y.a)(g().mark(function e(){var t,n;return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(y.a)(g().mark(function e(t){var n,r;return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=n(8),x=n.n(N),j=[{id:1,name:"Name",selector:function(e){return e.name},sortable:!0,reorder:!0},{id:2,name:"Lastname",selector:function(e){return e.last_name},sortable:!0,reorder:!0},{id:3,name:"Birthday",selector:function(e){return e.birthday},sortable:!0,right:!0,reorder:!0}],L=function(e){var t=e.filterText,n=e.onFilter,r=e.onClear;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-auto"},a.a.createElement("input",{id:"search",type:"text",placeholder:"Name or Lastname","aria-label":"Search Input",value:t,onChange:n,className:"form-control"})),a.a.createElement("div",{className:"col-auto"},a.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:r},"X")))},O=function(e){var t=e.isAuthenticate,n=Object(s.f)(),o=Object(r.useState)([]),c=Object(i.a)(o,2),l=c[0],u=c[1],m=Object(r.useState)(""),d=Object(i.a)(m,2),f=d[0],p=d[1],y=a.a.useState(!0),g=Object(i.a)(y,2),b=g[0],N=g[1],O=a.a.useState(!1),k=Object(i.a)(O,2),S=k[0],I=k[1],_=Object(r.useState)(!1),C=Object(i.a)(_,2),A=C[0],B=C[1],P=l.filter(function(e){return e.name&&e.name.toLowerCase().includes(f.toLowerCase())||e.last_name&&e.last_name.toLowerCase().includes(f.toLowerCase())}),G=Object(r.useMemo)(function(){return a.a.createElement(L,{onFilter:function(e){return p(e.target.value)},onClear:function(){f&&(B(!A),p(""))},filterText:f})},[f,A]);Object(r.useEffect)(function(){t?E().then(function(e){var t=e.data.employees.map(function(e){var t=new Date(e.birthday),n=""+(t.getMonth()+1),r=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0".concat(n)),r.length<2&&(r="0".concat(r)),Object(h.a)({},e,{birthday:"".concat(a,"-").concat(n,"-").concat(r)})});u(t),N(!1)}).catch(function(e){console.log(e),x.a.fire("Error!","Something went wrong","error")}):n("/")},[S]);var F=function(e,t,n){e.value="",t.value="",n.value="0000-00-00"},T=function(e){var t=document.getElementById("section-form"),n=document.getElementById("btn-add"),r=document.getElementById("btn-cancel");if(e){var a=document.getElementById("name"),o=document.getElementById("lastname"),c=document.getElementById("birthday");t.style.display="none",n.style.display="block",r.style.display="none",F(a,o,c)}else t.style.display="block",n.style.display="none",r.style.display="block"};return a.a.createElement("div",{className:"row mt-3 mb-3 justify-content-center"},a.a.createElement("div",{className:"col-12 d-flex justify-content-end"},a.a.createElement("button",{id:"btn-add",onClick:function(){return T(!1)},className:"btn btn-primary m-3"},"Add"),a.a.createElement("button",{id:"btn-cancel",onClick:function(){return T(!0)},className:"btn btn-danger m-3",style:{display:"none"}},"Cancel")),a.a.createElement("div",{id:"section-form",className:"col-sm-12 col-md-11 mt-3 mb-3",style:{display:"none"}},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-body"},a.a.createElement("form",{onSubmit:function(){x.a.fire({title:"Saving...",icon:"info",timer:6e4});var e=document.getElementById("name"),t=document.getElementById("lastname"),n=document.getElementById("birthday");w({name:e.value.toUpperCase(),last_name:t.value.toUpperCase(),birthday:n.value}).then(function(r){var a=r.data;F(e,t,n),I(!0),x.a.fire("Successful!",a,"success")}).catch(function(e){console.log(e),x.a.fire("Error!","Something went wrong","error")})},className:"row"},a.a.createElement("div",{className:"col-sm-12 col-md-6 mb-3"},a.a.createElement("label",{className:"form-label"},"Name"),a.a.createElement("input",{type:"text",className:"form-control ",id:"name",maxLength:30,required:!0})),a.a.createElement("div",{className:"col-sm-12 col-md-6 mb-3"},a.a.createElement("label",{className:"form-label"},"Lastname"),a.a.createElement("input",{type:"text",className:"form-control",id:"lastname",maxLength:30,required:!0})),a.a.createElement("div",{className:"col-sm-12 col-md-6 mb-3"},a.a.createElement("label",{className:"form-label"},"Birthday"),a.a.createElement("input",{type:"date",className:"form-control",id:"birthday",max:"2000-01-01",min:"1970-01-01",required:!0})),a.a.createElement("div",{className:"d-flex justify-content-end"},a.a.createElement("button",{id:"btn-save-employee",type:"submit",className:"btn btn-success"},"Registrar")))))),a.a.createElement("div",{className:"col-sm-12 col-md-11"},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-body"},a.a.createElement(v.a,{title:"Employees",columns:j,data:P,defaultSortFieldId:1,pagination:!0,paginationResetDefaultPage:A,progressPending:b,subHeader:!0,subHeaderComponent:G,persistTableHead:!0})))))},k=[{username:"Juan",password:"juan2026"}],S=function(){var e=Object(s.f)(),t=Object(r.useContext)(u).dispatch,n=Object(r.useState)(null),o=Object(i.a)(n,2),c=o[0],l=o[1],d=function(e){e.preventDefault()};return a.a.createElement("div",{className:"container mt-3"},a.a.createElement("div",{className:"row d-flex justify-content-center"},a.a.createElement("div",{className:"card col-sm-12 col-md-6"},a.a.createElement("div",{className:"card-body"},a.a.createElement("h1",null,"Login"),a.a.createElement("hr",null),null==c||c?a.a.createElement(a.a.Fragment,null):a.a.createElement("div",{className:"alert alert-danger",role:"alert"},"User or password invalid!"),a.a.createElement("form",{onSubmit:function(){var n=document.getElementById("username").value,r=document.getElementById("password").value;k.filter(function(e){return e.username===n&&e.password===r}).length>0?(t({type:m,payload:{name:n}}),e("/employees")):l(!1)}},a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{className:"form-label"},"User"),a.a.createElement("input",{type:"text",onPaste:d,onCopy:d,className:"form-control",id:"username",required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{className:"form-label"},"Password"),a.a.createElement("input",{type:"password",onPaste:d,onCopy:d,className:"form-control",id:"password",required:!0})),a.a.createElement("div",{className:"d-flex justify-content-end"},a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))))))},I=function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 d-flex justify-content-center mt-5"},a.a.createElement("h1",null,"Home"))))},_=n(22);function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(O){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=E(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var u={};function m(){}function d(){}function f(){}var h={};i(h,a,function(){return this});var p=Object.getPrototypeOf,v=p&&p(p(j([])));v&&v!==t&&n.call(v,a)&&(h=v);var y=f.prototype=m.prototype=Object.create(h);function g(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=f,i(y,"constructor",f),i(f,"constructor",d),d.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),i(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},g(y),i(y,c,"Generator"),i(y,a,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}function A(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=["JPG","JPEG","PNG"],G=function(e){var t=e.isAuthenticate,n=Object(s.f)(),o=Object(r.useState)(null),c=Object(i.a)(o,2),l=c[0],u=c[1],m=Object(r.useState)(null),d=Object(i.a)(m,2),f=d[0],h=d[1];Object(r.useEffect)(function(){t||n("/")},[]);var p=function(e){for(var t=document.getElementById(e),n=t.firstChild;n;)t.removeChild(n),n=t.firstChild},v=function(){var e=Object(y.a)(C().mark(function e(t){var n,r,a,o;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p("carousel-imgs"),p("container-imgs"),document.getElementById("carousel").style.display="none",n=A(t),e.prev=4,n.s();case 6:if((r=n.n()).done){e.next=15;break}return a=r.value,o=new FileReader,e.next=11,g;case 11:o.onload=e.sent,o.readAsDataURL(a);case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:u(t),document.getElementById("btn-save").style.display="block";case 25:case"end":return e.stop()}},e,null,[[4,17,20,23]])}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(y.a)(C().mark(function e(t){var n,r,a,o;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementById("container-imgs"),r=document.getElementById("img-preview"),a=t.target.result,(o=r.cloneNode()).style.display="block",o.setAttribute("src",a),n.appendChild(o);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(y.a)(C().mark(function e(t){var n,r,a,o,c;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementById("carousel"),r=document.getElementById("carousel-imgs"),(a=document.createElement("div")).className="carousel-item",o=document.createElement("img"),c=t.target.result,o.setAttribute("src",c),o.className="d-block w-100",o.alt="...",a.appendChild(o),r.appendChild(a),r.firstChild.className="carousel-item active",n.style.display="block";case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 d-flex justify-content-center mt-5"},a.a.createElement("button",{id:"btn-storage",type:"button",style:{display:"none"},className:"btn btn-success mb-3",onClick:function(){document.getElementById("btn-storage").style.display="none",p("container-imgs"),f.forEach(function(){var e=Object(y.a)(C().mark(function e(t){var n;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FileReader,e.next=3,b;case 3:n.onload=e.sent,n.readAsDataURL(t);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},"Storage")),a.a.createElement("div",{className:"col-12 d-flex justify-content-center mt-5"},a.a.createElement(_.a,{handleChange:v,name:"file",types:P,multiple:!0})),a.a.createElement("div",{className:"col-12 mt-5 d-flex align-items-center flex-column",style:{textAlign:"center"}},a.a.createElement("h1",null,"Preview"),a.a.createElement("button",{id:"btn-save",type:"button",style:{display:"none"},className:"btn btn-success mb-3",onClick:function(){document.getElementById("btn-save").style.display="none";var e=[];if(f){var t,n=A(f);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.push(r)}}catch(i){n.e(i)}finally{n.f()}}var a,o=A(l);try{for(o.s();!(a=o.n()).done;){var c=a.value;e.push(c)}}catch(i){o.e(i)}finally{o.f()}h(e),document.getElementById("btn-storage").style.display="block"}},"Save"),a.a.createElement("div",{id:"container-imgs"}),a.a.createElement("img",{style:{display:"none"},id:"img-preview",className:"mb-2",width:"300px",height:"400px",alt:"img"})),a.a.createElement("div",null,a.a.createElement("div",{id:"carousel",className:"carousel slide","data-bs-ride":"carousel",style:{display:"none"}},a.a.createElement("div",{id:"carousel-imgs",className:"carousel-inner"}),a.a.createElement("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carousel","data-bs-slide":"prev"},a.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),a.a.createElement("span",{className:"visually-hidden"},"Previous")),a.a.createElement("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carousel","data-bs-slide":"next"},a.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),a.a.createElement("span",{className:"visually-hidden"},"Next"))))))},F=function(){var e=Object(r.useContext)(u).user;return a.a.createElement(l.a,null,a.a.createElement(f,null),a.a.createElement("div",{className:"container"},a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",element:a.a.createElement(I,null)}),a.a.createElement(s.a,{path:"/employees",element:a.a.createElement(O,{isAuthenticate:e.logged})}),a.a.createElement(s.a,{path:"/upload",element:a.a.createElement(G,{isAuthenticate:e.logged})}),a.a.createElement(s.a,{path:"/login",element:a.a.createElement(S,null)}),a.a.createElement(s.a,{path:"*",element:a.a.createElement(O,{isAuthenticate:e.logged})}))))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(h.a)({},t.payload,{logged:!0});case d:return{logged:!1};default:return e}},J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},R=function(){var e=Object(r.useReducer)(T,{},J),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)(function(){localStorage.setItem("user",JSON.stringify(n))},[n]),a.a.createElement(u.Provider,{value:{user:n,dispatch:o}},a.a.createElement(F,null))};n(54);c.a.createRoot(document.getElementById("root")).render(a.a.createElement(R,null))}},[[23,2,1]]]);
//# sourceMappingURL=main.317935d6.chunk.js.map