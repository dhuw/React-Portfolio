(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),r=Object(s.createContext)(),l=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),l=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://dhuw.github.io/react-portfolio",j="DH.",h="Dylan Hazlewood",d="Front End Engineer",u="I am an inspriring Web Developer, with the hopes of taking what I learn from UWs Coding Bootcamp to break into the gaming industry. ",b="https://docs.google.com/document/d/11IUuWJHCO0mxtgYPdGqnEpmQCq6kjlx_CfDskf1cpsk/edit",m={linkedin:"https://www.linkedin.com/in/dylan-hazlewood-5b6468226/",github:"https://github.com/dhuw"},p=[{name:"Code Quiz",description:"A timed quiz game to test the users JS knowledge!",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/dhuw/Homework-4",livePreview:"https://dhuw.github.io/Homework-4/"},{name:"Weather Dashboard",description:"This app utilizes openweathermapAPI in order to pull weather data from around the world and transform that information in an easily digestable way.",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/dhuw/weather-dashboard",livePreview:"https://dhuw.github.io/weather-dashboard/"},{name:"Text Editor",description:"An Example of A Progressive Web Application",stack:["Nodejs","Express","JavaScript"],sourceCode:"https://github.com/dhuw/texteditor",livePreview:"https://texteditor-dh.herokuapp.com/"},{name:"Password Generator",description:"It is a random password generator mostly using JavaScript with foundation of webpage using HTML & CSS",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/dhuw/Homework-3",livePreview:"https://dhuw.github.io/Homework-3/"},{name:"README Generator",description:"Uses Node.js along with inquirer to give the user specific question via terminal. Based off the answers given the application makes a specific and licensed README file for your GitHub repo.",stack:["Nodejs","Inquirer","JavaScript"],sourceCode:"https://github.com/dhuw/README-generator",livePreview:"https://youtu.be/Y-MED1PBK1M"}],O=["HTML","CSS","JavaScript","React","SASS","Git","Jest"],x="hazlewood.dyl@gmail.com",f=n(16),k=n.n(f),v=n(14),g=n.n(v),w=n(18),N=n.n(w),_=n(17),S=n.n(_),C=(n(28),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(s.useState)(!1),o=Object(i.a)(l,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(g.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(S.a,{}):Object(a.jsx)(N.a,{})})]})}),E=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(C,{})]})}),y=n(11),P=n.n(y),H=n(19),J=n.n(H),M=(n(33),function(){var e=h,t=d,n=u,c=b,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(J.a,{})})]})]})]})}),A=n(7),D=n.n(A),I=n(20),T=n.n(I),L=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},D()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(T.a,{})})]})}),z=(n(36),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(L,{project:e},D()())}))})]}):null}),q=(n(37),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))})]}):null}),R=n(21),W=n.n(R),G=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(W.a,{fontSize:"large"})})}):null}),B=(n(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/dhuw/React-Portfolio",className:"link footer__link",children:"Made w/ \ud83e\udd0d by DHUW"})})}),Y=(n(41),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(E,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(M,{}),Object(a.jsx)(z,{}),Object(a.jsx)(q,{}),Object(a.jsx)(B,{})]}),Object(a.jsx)(G,{}),Object(a.jsx)(U,{})]})});n(42);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.eb6c8ab5.chunk.js.map