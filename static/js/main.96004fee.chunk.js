(this.webpackJsonpwarships=this.webpackJsonpwarships||[]).push([[0],{57:function(e,n,t){},58:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),s=t(18),i=t.n(s),l=(t(57),t(58),t(5)),o=t(13),u=function(){return Object(o.b)()},c=o.c,d=t(52),f=t(6),h=t.n(f),p=t(10),v=t(3),b=t(30),m=t.n(b),j=Object(v.b)("/api/get/users",Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/get/users");case 2:return n=e.sent,e.abrupt("return",n.data.users);case 4:case"end":return e.stop()}}),e)})))),g=Object(v.b)("/api/post/users",function(){var e=Object(p.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/post/users",n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),y=Object(v.c)({name:"game",initialState:{inGame:"idle",turn:null,highScores:null,status:"idle",error:null},reducers:{toggleInGame:function(e,n){e.inGame=n.payload},setTurn:function(e){null===e.turn||"CPU"===e.turn?e.turn="Player":e.turn="CPU"}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.status="loading"})).addCase(j.fulfilled,(function(e,n){e.status="succeeded",e.highScores=n.payload})).addCase(j.rejected,(function(e,n){e.status="failed",e.error=n.error.message})).addCase(g.fulfilled,(function(e,n){e.highScores=[].concat(Object(d.a)(e.highScores),[n.payload.user]).sort((function(e,n){return e.moves-n.moves}))}))}}),O=y.actions,x=O.toggleInGame,S=O.setTurn,w=y.reducer,k=function(e){return Math.floor(Math.random()*e)},P=function(e,n){var t=n.slice();return 1===k(2)?q(e,t):A(e,t)},C=function(e,n,t){for(var r=e;r<=n;r+=10)if(null!==t[r].val)return!1;return!0},q=function(e,n){for(var t=k(100-10*e),r=0;r<50;)if(0===t){if(C(0,t+10*e,n)&&C(1,t+(10*e+1),n))break;t=k(100-10*e),r=1}else if(9===t){if(C(9,t+10*e,n)&&C(8,t+(10*e-1),n))break;t=k(100-10*e),r=1}else if(t+10*e-10===99){if(C(t-10,99,n)&&C(t-11,98,n))break;t=k(100-10*e),r=1}else if(t+10*e-10===90){if(C(t-10,90,n)&&C(t-9,91,n))break;t=k(100-10*e),r=1}else if(t+10*e>89){if(C(t-10,t+(10*e-10),n)&&C(t-11,t+(10*e-11),n)&&C(t-9,t+(10*e-9),n))break;t=k(100-10*e),r=1}else if(t-10<0){if(C(t,t+10*e,n)&&C(t-1,t+(10*e-1),n)&&C(t+1,t+(10*e+1),n))break;t=k(100-10*e),r=1}else if(t%10===9){if(C(t-10,t+10*e,n)&&C(t-11,t+10*e-1,n))break;t=k(100-10*e),r=1}else if(t%10===0){if(C(t-10,t+10*e,n)&&C(t-9,t+10*e+1,n))break;t=k(100-10*e),r=1}else{if(C(t-10,t+10*e,n)&&C(t-11,t+10*e-1,n)&&C(t-9,t+1+10*e,n))break;t=k(100-10*e),r=1}if(!(r>=10)){for(var a=[],s=t;s<t+10*e;s+=10)a.push(s);return a}},N=function(e,n,t){for(var r=e;r<=n;r++)if(null!==t[r].val)return!1;return!0},U=function(e){return Number(String(k(10))+String(k(10-e)))},A=function(e,n){for(var t=U(e),r=0;r<50;){if(0===t){if(N(t,t+e,n)&&N(t+10,t+e+10,n))break;t=U(e)}else if(t+e-1===9){if(N(t-1,t+e-1,n)&&N(t+9,t+e+9,n))break;t=U(e)}else if(t+e-1===99){if(N(t-1,t+e-1,n)&&N(t-11,t+e-11,n))break;t=U(e)}else if(90===t){if(N(t,t+e,n)&&N(t-10,t+e-10,n))break;t=U(e)}else if(t<9){if(N(t-1,t+e,n)&&N(t+9,t+e+10,n))break;t=U(e)}else if(t%10===0){if(N(t,t+e,n)&&N(t-10,t+e-10,n)&&N(t+10,t+e+10,n))break;t=U(e)}else if((t+e-1)%10===9){if(N(t-1,t+e-1,n)&&N(t-11,t+e-11,n)&&N(t+9,t+e+9,n))break;t=U(e)}else if(t>90){if(N(t-1,t+e,n)&&N(t-11,t+e-10,n))break;t=U(e)}else{if(N(t-1,t+e,n)&&N(t-11,t+e-10,n)&&N(t+9,t+e+10,n))break;t=U(e)}r++}for(var a=[],s=t;s<t+e;s++)a.push(s);return a},M={CPUSquares:new Array(100).fill(null).map((function(e){return{id:Object(v.d)(),val:null}})),boardSet:!1,numAttacks:0},B=Object(v.c)({name:"cpuShips",initialState:M,reducers:{updateSquares:function(e,n){if(5===n.payload.length)for(var t=0;t<n.payload.length;t++)e.CPUSquares[n.payload[t]].val="(5) Carrier";else if(4===n.payload.length)for(var r=0;r<n.payload.length;r++)e.CPUSquares[n.payload[r]].val="(4) Battleship";else if(3===n.payload.length){if(!0===function(){for(var n=0;n<e.CPUSquares.length;n++)if("(3) Submarine"===e.CPUSquares[n].val)return!0;return!1}())for(var a=0;a<n.payload.length;a++)e.CPUSquares[n.payload[a]].val="(3) Destroyer";else for(var s=0;s<n.payload.length;s++)e.CPUSquares[n.payload[s]].val="(3) Submarine"}else if(2===n.payload.length)for(var i=0;i<n.payload.length;i++)e.CPUSquares[n.payload[i]].val="(2) PatrolBoat"},handleAttack:function(e,n){var t=e.CPUSquares.find((function(e){return e.id===n.payload}));null===(null===t||void 0===t?void 0:t.val)?t.val="O":null!==(null===t||void 0===t?void 0:t.val)&&void 0!==t&&(t.val="X"),e.numAttacks+=1},resetCPUBoard:function(e){e.CPUSquares=new Array(100).fill(null).map((function(e){return{id:Object(v.d)(),val:null}}))}}}),X=function(e){return e.cpuShips.CPUSquares},I=B.actions,T=I.handleAttack,E=I.updateSquares,G=I.resetCPUBoard,R=B.reducer,L=t(0),D=function(e){var n=c((function(e){return e.game.inGame})),t=e.whoAmI,a=u();Object(r.useEffect)((function(){"playing"===n&&0===s(e.squares).length&&(alert("".concat(t," wins")),a(x("ended")))}));var s=function(e){for(var n=[],t=0;t<e.length;t++)null!==e[t].val&&e[t].val.length>1&&!n.includes(e[t].val)&&n.push(e[t].val);return n.sort(),n.map((function(e){return Object(L.jsx)("p",{children:e})}))};return Object(L.jsxs)("div",{children:[Object(L.jsxs)("p",{children:["Attack count: ",e.attackCount]}),Object(L.jsx)("div",{children:Object(L.jsxs)("div",{onClick:function(){return e.showShips()},children:[Object(L.jsxs)("div",{children:[Object(L.jsxs)("p",{children:["Ships Remaining: ",s(e.squares).length]}),e.showList?Object(L.jsx)("i",{className:"up-arrow"}):Object(L.jsx)("i",{className:"down-arrow"})]}),e.showList&&s(e.squares)]})})]})},J=function(){var e=Object(r.useState)(!0),n=Object(l.a)(e,2),t=n[0],a=n[1],s=c((function(e){return e.cpuShips.CPUSquares})),i=c((function(e){return e.cpuShips.numAttacks})),o=c((function(e){return e.game.turn})),d=c((function(e){return e.game.inGame})),f=u();Object(r.useEffect)((function(){"playing"===d&&0===p().length&&alert("Player wins")}),[]);var h=s.map((function(e){return Object(L.jsx)("div",{className:"X"===e.val?"square-hit":"O"===e.val?"square":"square hover:bg-blue-500",onClick:function(){return function(e){var n=s.find((function(n){return n.id===e}));"Player"===o&&"O"!==(null===n||void 0===n?void 0:n.val)&&"X"!==(null===n||void 0===n?void 0:n.val)&&"playing"===d&&(f(T(e)),f(S()))}(e.id)},children:null===e.val||e.val.length>1?null:e.val},e.id)})),p=function(){for(var e=[],n=0;n<s.length;n++)null!==s[n].val&&s[n].val.length>1&&!e.includes(s[n].val)&&e.push(s[n].val);return e.sort(),e.map((function(e){return Object(L.jsx)("p",{children:e})}))};return Object(L.jsxs)("div",{className:"outer-board pb-1",id:"cpu-ships",children:[Object(L.jsx)("h3",{children:"CPU Ships"}),Object(L.jsx)("div",{className:"inner-board",children:h}),null!==o&&Object(L.jsx)(D,{attackCount:i,showShipsRemaining:t,squares:s.slice(),showList:t,showShips:function(){return a(!t)},whoAmI:"Player"})]})};var F=function(e,n){return n.length>0?new Promise((function(t){return setTimeout((function(){return t({data:H(e,n)})}),500)})):new Promise((function(n){return setTimeout((function(){return n({data:W(e)})}),1e3)}))},W=function(e){for(var n=Math.floor(100*Math.random());"O"===e[n].val||"X"===e[n].val;)n=Math.floor(100*Math.random());return n},H=function(e,n){var t=0;if(1===n.length)for(var r=n[0],a=Math.floor(4*Math.random());t<10;){if(0===a){if("O"!==e[r-10].val&&"X"!==e[r-10].val&&r-10>=0)return r-10}else if(1===a){if("O"!==e[r+1].val&&"X"!==e[r+1].val&&r%10!==0)return r+1}else if(2===a){if("O"!==e[r+10].val&&"X"!==e[r+10].val&&r<=99)return r+10}else if(3===a&&"O"!==e[r-1].val&&"X"!==e[r-1].val&&r%10!==9)return r-1;a=Math.floor(4*Math.random()),t++}else for(;t<10;){if(t++,n[1]-n[0]===10){var s=n[n.length-1]+10;return"O"!==e[s].val&&"X"!==e[s].val&&s<=99?s:n[0]-10}var i=n[n.length-1]+1;return"O"!==e[i].val&&"X"!==e[i].val&&i%10!==10?i:n[0]-1}return 1},Y=function(e){for(var n=[],t=0;t<e.length;t++)null!==e[t].val&&e[t].val.length>1&&!n.includes(e[t].val)&&n.push(e[t].val);return n},z={PlayerSquares:new Array(100).fill(null).map((function(e){return{id:Object(v.d)(),val:null}})),boardSet:!1,numAttacks:0,currentAttack:[],CPUMove:"idle"},K=Object(v.b)("playerShips/fetchMove",function(){var e=Object(p.a)(h.a.mark((function e(n,t){var r,a,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getState(),a=r.playerShips.currentAttack,s=r.playerShips.PlayerSquares,e.next=5,F(s,a);case 5:return i=e.sent,e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),$=Object(v.c)({name:"playerShips",initialState:z,reducers:{updateSquares:function(e,n){if(5===n.payload.length)for(var t=0;t<n.payload.length;t++)e.PlayerSquares[n.payload[t]].val="(5) Carrier";else if(4===n.payload.length)for(var r=0;r<n.payload.length;r++)e.PlayerSquares[n.payload[r]].val="(4) BattleShip";else if(3===n.payload.length){if(!0===function(){for(var n=0;n<e.PlayerSquares.length;n++)if("(3) Submarine"===e.PlayerSquares[n].val)return!0;return!1}())for(var a=0;a<n.payload.length;a++)e.PlayerSquares[n.payload[a]].val="(3) Destroyer";else for(var s=0;s<n.payload.length;s++)e.PlayerSquares[n.payload[s]].val="(3) Submarine"}else if(2===n.payload.length)for(var i=0;i<n.payload.length;i++)e.PlayerSquares[n.payload[i]].val="(2) PatrolBoat"},setCPUMove:function(e,n){e.CPUMove=n.payload},resetPlayerBoard:function(e){e.PlayerSquares=new Array(100).fill(null).map((function(e){return{id:Object(v.d)(),val:null}}))}},extraReducers:function(e){e.addCase(K.pending,(function(e){e.CPUMove="thinking"})).addCase(K.fulfilled,(function(e,n){var t=Y(e.PlayerSquares),r=n.payload;null!==e.PlayerSquares[r].val?(e.PlayerSquares[r].val="X",Y(e.PlayerSquares).length===t.length?(e.currentAttack.push(r),e.currentAttack.sort()):e.currentAttack=[]):e.PlayerSquares[r].val="O",e.numAttacks+=1,e.CPUMove="complete"}))}}),Q=function(e){return e.playerShips.PlayerSquares},V=$.actions,Z=V.updateSquares,_=V.setCPUMove,ee=V.resetPlayerBoard,ne=$.reducer,te=function(){var e=c((function(e){return e.game.highScores}));return Object(L.jsx)("div",{className:"flex flex-col m-4",children:Object(L.jsxs)("table",{children:[Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:"Name"}),Object(L.jsx)("th",{children:"Moves"})]}),e&&e.map((function(e){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"p-2 border-r",children:e.name}),Object(L.jsx)("td",{className:"p-2",children:e.moves})]},e.id)}))]})})},re=["The aim of Battleships is to sink all of your opponents ships before they sink yours.","There are two 10 * 10 boards which represent a space of ocean. \n\n  One contains your ships, the other contains your opponent's.","Parts of a ship are represented with a \u2022 \n\n  There are small ships \u2022\u2022 \n\n  And large ships \u2022\u2022\u2022\u2022\u2022 \n \n  And ships in between.","Upon clicking Start, the boards are both rendered with following ships: \n\n  1 x Carrier (\u2022\u2022\u2022\u2022\u2022) \n\n  1 x Battleship (\u2022\u2022\u2022\u2022) \n\n  1 x Destroyer (\u2022\u2022\u2022) \n\n  1 x Submarine (\u2022\u2022\u2022) \n\n  1 x Patrol Boat (\u2022\u2022) \n","Players take turns attacking their opponents board, attempting to hit a ship. \n\n  A hit is represented by X, a miss is O. \n\n  Each player can only see their own ships.","If you hit, try the squares around that square to sink the entire ship. \n\n  The ships may be horizontal or vertical. They cannot be touching another ship (including a diagonal square). \n\n  You can see the ships remaining for both players, and will be notified when you sink one."],ae=function(e){var n=Object(r.useState)(1),t=Object(l.a)(n,2),a=t[0],s=t[1];return Object(L.jsxs)("div",{className:"flex flex-col border md:w-1/2 bg-white fixed text-left h-auto top-2 sm:top-12 sm:left-20 sm:right-20 left-4 right-4 shadow",children:[Object(L.jsxs)("div",{className:"flex flex-row items-end self-end w-full p-2",children:[Object(L.jsx)("h2",{className:"self-center w-3/4",children:"Instructions"}),Object(L.jsx)("p",{className:"w-1/4",children:"".concat(a,"/").concat(re.length)})]}),Object(L.jsx)("div",{className:"my-4",children:re[a-1].split("\n").map((function(e){return Object(L.jsx)("p",{className:"p-2",children:e})}))}),Object(L.jsx)("div",{className:"flex flex-row justify-end w-full",children:Object(L.jsx)("button",{onClick:function(){a<re.length?s(a+1):e.close()},className:"self-end text-blue-500 hover:text-blue-700",children:Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(L.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})})})]})},se=function(e){var n=Object(r.useState)(""),t=Object(l.a)(n,2),a=t[0],s=t[1],i=u(),o=c((function(e){return e.cpuShips.numAttacks}));return Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{children:"Your name:"}),Object(L.jsx)("input",{className:"border px-1",value:a,onChange:function(e){return s(e.target.value)}}),Object(L.jsx)("button",{className:"py-2 px-4 bg-gray-200 w-36 text-gray-600 font-semibold rounded-lg  shadow-md hover:bg-gray-300 focus:outline-none  focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 m-1",onClick:function(){return i(g({name:a,moves:o})),void e.hideForm()},children:"Submit"})]})},ie=function(){var e=Object(r.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1],s=Object(r.useState)(!1),i=Object(l.a)(s,2),o=i[0],d=i[1],f=Object(r.useState)(!1),h=Object(l.a)(f,2),p=h[0],v=h[1],b=Object(r.useState)("Start"),m=Object(l.a)(b,2),g=m[0],y=m[1],O=c((function(e){return e.game.turn})),w=c((function(e){return e.game.inGame})),k=u();Object(r.useEffect)((function(){"ended"===w?(d(!0),y("Reset"),v(!0)):"playing"===w?y("Reset"):"idle"===w&&y("Start")}),[w]);return Object(L.jsxs)("div",{className:"header m-3",id:"header",children:[Object(L.jsx)("h1",{id:"title",className:"p-4",children:"ended"===w||"idle"===w?"Battleships":"".concat(O," turn")}),Object(L.jsxs)("div",{className:"flex flex-col sm:flex-row items-center",children:[Object(L.jsx)("button",{id:"status-btn",className:"py-2 px-4 bg-green-500  w-36 text-white font-semibold rounded-lg  shadow-md hover:bg-green-600 focus:outline-none  focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 m-1",onClick:function(){"idle"===w?(k((function(e,n){var t=X(n());e(E(P(5,t))),t=X(n()),e(E(P(4,t))),t=X(n()),e(E(P(3,t))),t=X(n()),e(E(P(3,t))),t=X(n()),e(E(P(2,t)))})),k((function(e,n){var t=Q(n());e(Z(P(5,t))),t=Q(n()),e(Z(P(4,t))),t=Q(n()),e(Z(P(3,t))),t=Q(n()),e(Z(P(3,t))),t=Q(n()),e(Z(P(2,t)))})),k(S()),k(x("playing"))):"playing"===w?window.location.reload():"ended"===w&&(k(G()),k(ee()),k(x("idle")),d(!1))},children:g}),Object(L.jsx)("button",{onClick:function(){return a(!t)},className:"py-2 px-4 bg-blue-500  text-white font-semibold rounded-lg w-36 shadow-md hover:bg-blue-600 focus:outline-none  focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 m-1",children:"Instructions"}),Object(L.jsx)("button",{className:"py-2 px-4 bg-gray-200 w-36 text-gray-600 font-semibold rounded-lg  shadow-md hover:bg-gray-300 focus:outline-none  focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 m-1",onClick:function(){return d(!o),void k(j())},children:"High Scores"})]}),t&&Object(L.jsx)(ae,{close:function(){return a(!1)}}),o&&Object(L.jsx)(te,{}),p&&Object(L.jsx)(se,{hideForm:function(){return v(!1)}})]})},le=function(){var e=Object(r.useState)(!0),n=Object(l.a)(e,2),t=n[0],a=n[1],s=c((function(e){return e.playerShips.PlayerSquares})),i=c((function(e){return e.playerShips.numAttacks})),o=c((function(e){return e.game.turn})),d=c((function(e){return e.playerShips.CPUMove})),f=c((function(e){return e.game.inGame})),v=u();Object(r.useEffect)((function(){"CPU"===o&&"idle"===d&&"playing"===f?m():"complete"===d&&v(_("idle"))}));var b=s.map((function(e){return Object(L.jsx)("div",{className:"X"===e.val?"square-hit":"square",children:null===e.val?null:e.val.length>1?"\u2022":e.val},e.id)})),m=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("CPU"===o){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v(K());case 4:v(S());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)("div",{className:"outer-board pb-1",id:"player-ships",children:[Object(L.jsx)("h3",{children:"Player Ships"}),Object(L.jsx)("div",{className:"inner-board",children:b}),null!==o&&Object(L.jsx)(D,{attackCount:i,showShipsRemaining:t,squares:s.slice(),showList:t,showShips:function(){return a(!t)},whoAmI:"CPU"})]})};var oe=function(){return Object(L.jsxs)("div",{className:"flex flex-col justify-center items-center text-center",children:[Object(L.jsx)(ie,{}),Object(L.jsxs)("div",{className:"flex flex-col sm:flex-row items-start",children:[Object(L.jsx)(J,{}),Object(L.jsx)(le,{})]})]})},ue=Object(v.a)({reducer:{game:w,cpuShips:R,playerShips:ne}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=t(34);!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.environment,t=void 0===n?"test":n,r=Object(ce.b)({environment:t,models:{user:ce.a},routes:function(){this.namespace="api",this.get("/get/users",(function(){return{users:[{name:"Kelly",id:1,moves:38},{name:"Eoghan",id:2,moves:44},{name:"Fiona",id:3,moves:45},{name:"Ed",id:4,moves:48},{name:"Dan",id:5,moves:49},{name:"Jorge",id:6,moves:54}]}}),{timing:1e3});var e=7;this.post("/post/users",(function(n,t){var r=JSON.parse(t.requestBody);return r.id=e++,{user:r}}))}})}({environment:"development"}),i.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(o.a,{store:ue,children:Object(L.jsx)(oe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.96004fee.chunk.js.map