(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5,9],{54:function(t,e,n){"use strict";n.r(e);var c=n(1);e.default=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"404 Page not found \ud83d\udd0d"}),Object(c.jsx)("img",{src:"https://mtdata.ru/u8/photo39C2/20569542232-0/original.jpg",alt:"Page not found",width:"360"})]})}},86:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var c=n(55),i=n(87),s=n.n(i),a=n(2),o=n(0),r=n(53),l=n(15),d=n(54),j=n(1);function u(){var t=Object(a.h)().movieId,e=Object(o.useState)([]),n=Object(c.a)(e,2),i=n[0],u=n[1],h=Object(o.useState)("pending"),p=Object(c.a)(h,2),b=p[0],f=p[1];return Object(o.useEffect)((function(){f("loading"),r.a.getCast(t).then((function(t){console.log(t),u(t),f("pending")})).catch((function(t){return t&&f("rejected")}))}),[t]),Object(j.jsx)("ul",{className:s.a.list,children:"pending"===b&&(i.length>=1?i.map((function(t){var e=t.profile_path,n=t.character,c=t.id,i=t.name;return Object(j.jsxs)("li",{className:s.a.listItem,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200".concat(e):"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png",alt:i,width:"200"})}),Object(j.jsx)("h4",{children:i}),Object(j.jsx)("p",{children:n})]},c)})):Object(j.jsx)("h3",{children:"No information about cast."}))||"loading"===b&&Object(j.jsx)(l.a,{})||"rejected"===b&&Object(j.jsx)(d.default,{})})}},87:function(t,e,n){t.exports={list:"Cast_list__1RIQZ",listItem:"Cast_listItem__dkopY"}}}]);
//# sourceMappingURL=5.0ba9c4f6.chunk.js.map