"use strict";(self.webpackChunkmoonegypt=self.webpackChunkmoonegypt||[]).push([[978],{978:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(165),o=n(861),s=n(885),r=n(791),c=n(388),i=n(470),l=n(184);function u(e){var t=e.lang,n=i.s0,u=(0,r.useState)(""),p=(0,s.Z)(u,2),d=p[0],h=p[1],m=(0,r.useState)(""),g=(0,s.Z)(m,2),v=g[0],x=g[1],f=(0,r.useState)(""),j=(0,s.Z)(f,2),y=j[0],w=j[1],Z=(0,r.useState)(""),C=(0,s.Z)(Z,2),b=C[0],N=C[1],S=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(o=new FormData).append("Email",v),o.append("Name",d),o.append("Type",y),o.append("Message",b),s="moonegypt"!==window.location.hostname?"http://127.0.0.1:8000/api/message":"https://api1.moonegypt.com/api/message",console.log(window.location.hostname),console.log("moonegypt"!==window.location.hostname),e.next=11,c.Z.post(s,o).then((function(e){var t=e.data;console.log(t.message),n("/")})).catch((function(e){var t=e.response;t&&(422==t.data.status?console.log(t.data.errors):console.log(t.data.message))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsx)("div",{className:"contactus",children:(0,l.jsxs)("section",{id:"contactUs",className:"section",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h1",{children:t.ContactUs})}),(0,l.jsxs)("form",{onSubmit:S,children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",placeholder:t.YourName,value:d,onChange:function(e){h(e.target.value)}})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",placeholder:t.YourEmail,value:v,onChange:function(e){x(e.target.value)}})}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"text",placeholder:t.TypeOfService,value:y,onChange:function(e){w(e.target.value)}})}),(0,l.jsx)("div",{children:(0,l.jsx)("textarea",{placeholder:t.YourMessage,value:b,onChange:function(e){N(e.target.value)}})}),(0,l.jsx)("button",{type:"submit",children:t.submit})]}),(0,l.jsxs)("div",{className:"other",children:[(0,l.jsx)("h1",{children:t.or}),(0,l.jsx)("h1",{children:t.Email})]})]})})}}}]);
//# sourceMappingURL=978.89058c30.chunk.js.map