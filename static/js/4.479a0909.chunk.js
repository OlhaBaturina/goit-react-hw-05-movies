(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4,9],{53:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(56),r=n.n(c),a="https://api.themoviedb.org/3/",o="2b2a12748231526069949d7d6477582b",i={getFilmBySearch:function(e){return r.a.get("".concat(a,"search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data.results}))},getCast:function(e){return r.a.get("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(o)).then((function(e){return e.data.cast}))},getDaysTrends:function(){return r.a.get("".concat(a,"trending/all/week?api_key=").concat(o)).then((function(e){return e.data.results}))},getMoviesInfo:function(e){return r.a.get("".concat(a,"movie/").concat(e,"?api_key=").concat(o)).then((function(e){return e.data}))},getReviews:function(e){return r.a.get("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(o)).then((function(e){return e.data.results}))}}},54:function(e,t,n){"use strict";n.r(t);var c=n(1);t.default=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"404 Page not found \ud83d\udd0d"}),Object(c.jsx)("img",{src:"https://mtdata.ru/u8/photo39C2/20569542232-0/original.jpg",alt:"Page not found",width:"360"})]})}},84:function(e,t,n){e.exports={SearchMovie:"MoviesPage_SearchMovie__2_thx",SearchForm:"MoviesPage_SearchForm__1l5qe",SearchForm_button:"MoviesPage_SearchForm_button__1Yrhc",SearchForm_button_label:"MoviesPage_SearchForm_button_label__3obiu",SearchForm_input:"MoviesPage_SearchForm_input__3s11B",listItem:"MoviesPage_listItem__33rPH"}},92:function(e,t,n){"use strict";n.r(t);var c=n(0);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n(55),u=n(84),s=n.n(u),l=n(53),b=n(2),h=n(10),j=n(15),f=n(54),d=n(1);var p=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),u=Object(i.a)(a,2),p=u[0],m=u[1],g=Object(c.useState)([]),O=Object(i.a)(g,2),v=O[0],_=O[1],S=Object(b.g)(),y=Object(b.f)(),x=new URLSearchParams(S.search).get("search"),P=Object(c.useState)("pending"),w=Object(i.a)(P,2),F=w[0],M=w[1];return Object(c.useEffect)((function(){M("loading"),p&&l.a.getFilmBySearch(p).then((function(e){console.log(e),_(e),M("pending")})).catch((function(e){return e&&M("rejected")}))}),[p]),Object(c.useEffect)((function(){null===p&&m(x)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("header",{className:s.a.SearchMovie,children:Object(d.jsxs)("form",{className:s.a.SearchForm,onSubmit:function(e){e.preventDefault(),m(n),y.push(o(o({},S),{},{search:"search=".concat(n)})),r("")},children:[Object(d.jsx)("button",{type:"submit",className:s.a.SearchForm_button,children:Object(d.jsx)("span",{className:s.a.SearchForm_button_label,children:"Search"})}),Object(d.jsx)("input",{className:s.a.SearchForm_input,value:n,onChange:function(e){r(e.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]})}),"pending"===F&&(v.length>=1?Object(d.jsx)("ul",{children:v.map((function(e){return Object(d.jsx)("li",{className:s.a.listItem,children:Object(d.jsx)(h.b,{to:{pathname:"/movies/".concat(e.id),state:{from:S}},children:e.title||e.name})},e.id)}))}):Object(d.jsx)(f.default,{}))||"loading"===F&&Object(d.jsx)(j.a,{})||"rejected"===F&&Object(d.jsx)(f.default,{})]})};t.default=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p,{})})}}}]);
//# sourceMappingURL=4.479a0909.chunk.js.map