(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(16),a(8)),d=a(2),l=a(3),u=a(5),s=a(4),k=a(6),I=a(1),b=(a(18),function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showing,a=e.backgroundColor,n=e.onClick,o=e.id,c={};return t&&(c.backgroundColor=a),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return n(o)},className:"card",style:c}))}}]),t}(n.Component)),h=(a(20),function(e){return r.a.createElement("header",null,r.a.createElement("h2",null,"Memory Game"),r.a.createElement("nav",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return e.onNewGame()}},"New Game"))))}),C=(a(22),a(7)),g=a.n(C),m={HIDING:0,SHOWING:1,MATCHING:2},N=function(e){function t(e){var a;Object(d.a)(this,t),a=Object(u.a)(this,Object(s.a)(t).call(this,e));var n=[{id:0,cardState:m.HIDING,backgroundColor:"red"},{id:1,cardState:m.HIDING,backgroundColor:"red"},{id:2,cardState:m.HIDING,backgroundColor:"navy"},{id:3,cardState:m.HIDING,backgroundColor:"navy"},{id:4,cardState:m.HIDING,backgroundColor:"green"},{id:5,cardState:m.HIDING,backgroundColor:"green"},{id:6,cardState:m.HIDING,backgroundColor:"yellow"},{id:7,cardState:m.HIDING,backgroundColor:"yellow"},{id:8,cardState:m.HIDING,backgroundColor:"black"},{id:9,cardState:m.HIDING,backgroundColor:"black"},{id:10,cardState:m.HIDING,backgroundColor:"purple"},{id:11,cardState:m.HIDING,backgroundColor:"purple"},{id:12,cardState:m.HIDING,backgroundColor:"pink"},{id:13,cardState:m.HIDING,backgroundColor:"pink"},{id:14,cardState:m.HIDING,backgroundColor:"lightgreen"},{id:15,cardState:m.HIDING,backgroundColor:"lightgreen"}];return n=g()(n),a.handleClick=a.handleClick.bind(Object(I.a)(Object(I.a)(a))),a.handleNewGame=a.handleNewGame.bind(Object(I.a)(Object(I.a)(a))),a.state={cards:n,noClick:!1},a}return Object(k.a)(t,e),Object(l.a)(t,[{key:"handleNewGame",value:function(e){var t=this.state.cards.map(function(e){return Object(i.a)({},e,{cardState:m.HIDING})});t=g()(t),this.setState({cards:t})}},{key:"handleClick",value:function(e){var t=this,a=function(e,t,a){return e.map(function(e){return t.includes(e.id)?Object(i.a)({},e,{cardState:a}):e})},n=this.state.cards.find(function(t){return t.id===e});if(!this.state.noClick&&n.cardState===m.HIDING){var r=!1,o=a(this.state.cards,[e],m.SHOWING),c=o.filter(function(e){return e.cardState===m.SHOWING}),d=c.map(function(e){return e.id});if(2===c.length&&c[0].backgroundColor===c[1].backgroundColor)o=a(o,d,m.MATCHING);else if(2===c.length){r=!0;var l=a(o,d,m.HIDING);return void this.setState({cards:o,noClick:r},function(){setTimeout(function(){t.setState({cards:l,noClick:!1})},1300)})}this.setState({cards:o,noClick:r})}}},{key:"render",value:function(){var e=this,t=this.state.cards.map(function(t){return r.a.createElement(b,{key:t.id,showing:t.cardState!==m.HIDING,backgroundColor:t.backgroundColor,id:t.id,onClick:e.handleClick})});return r.a.createElement("div",{className:"App"},r.a.createElement(h,{onNewGame:this.handleNewGame}),t)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.d0bc45d0.chunk.js.map