"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{621:function(n,t,e){e.d(t,{k:function(){return i}});var r=e(178),c=e(184),i=function(n){var t=n.title,e=n.imgSrc;return(0,c.jsxs)(r.ck,{children:[(0,c.jsx)("img",{src:e&&"https://image.tmdb.org/t/p/w300"+e,alt:t,width:"300",height:"450"}),(0,c.jsx)(r.Dx,{children:t})]})}},178:function(n,t,e){e.d(t,{Dx:function(){return x},ck:function(){return f},nf:function(){return p}});var r,c,i,o=e(168),a=e(444),u=e(731),f=a.ZP.li(r||(r=(0,o.Z)(["\n  width: 300px;\n  height: 550px;\n  border: 1px solid gray;\n\n  :hover,\n  :focus {\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  }\n"]))),p=(0,a.ZP)(u.rU)(c||(c=(0,o.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),x=a.ZP.h2(i||(i=(0,o.Z)(["\n  text-align: center;\n"])))},544:function(n,t,e){e.r(t);var r=e(885),c=e(791),i=e(689),o=e(234),a=e(398),u=e(621),f=e(178),p=e(184);t.default=function(){var n=(0,i.TH)(),t=(0,c.useState)([]),e=(0,r.Z)(t,2),x=e[0],h=e[1];return(0,c.useEffect)((function(){(0,o.SU)().then((function(n){return n.json()})).then((function(n){return h(n.results)})).catch(console.error)}),[]),(0,p.jsxs)(a.x,{children:[(0,p.jsx)("h1",{children:"Top 20 movies of the day"}),(0,p.jsx)(a.O,{children:x.map((function(t){var e=t.id,r=t.title,c=t.poster_path;return(0,p.jsx)(f.nf,{to:"/movies/".concat(e),state:{home:n},children:(0,p.jsx)(u.k,{title:r,imgSrc:c,id:e})},e)}))})]})}},398:function(n,t,e){e.d(t,{O:function(){return u},x:function(){return a}});var r,c,i=e(168),o=e(444),a=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  h1 {\n    text-align: center;\n  }\n"]))),u=o.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 1270px;\n  margin-left: auto;\n  margin-right: auto;\n"])))},234:function(n,t,e){e.d(t,{BG:function(){return o},Hx:function(){return u},SU:function(){return i},uV:function(){return a},xj:function(){return f}});var r="fc76c86b365a6387a5436d26b34344ea",c="https://api.themoviedb.org/3",i=function(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(r))},o=function(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(r))},a=function(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r))},u=function(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r))},f=function(n){return fetch("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n))}}}]);
//# sourceMappingURL=544.9d463755.chunk.js.map