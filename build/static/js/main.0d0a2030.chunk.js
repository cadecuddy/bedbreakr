(this.webpackJsonpbedbreakr=this.webpackJsonpbedbreakr||[]).push([[0],{21:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),r=t(15),c=t.n(r),l=(t(21),t(13)),i=t.n(l),d=t(16),j=t(8),o=t(7),b=t.n(o),u=t(0);function p(e){var a=e.onSearch,t=Object(s.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1];return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"search-box",children:Object(u.jsx)("input",{type:"text",className:"search-bar",spellCheck:!1,placeholder:"Search player",onKeyPress:function(e){"Enter"===e.key&&(a(r),c(""))},onChange:function(e){return c(e.target.value)},value:r})})})}var h=t(2),x=t.n(h),O=t(40),m=t(41);t(37);function f(e){var a,t=e.player_data,n=Object(s.useState)(1),r=Object(j.a)(n,2),c=r[0],l=r[1],i=["eight_one_","eight_two_","four_three_","four_four_"],d=function(e){l(e.target.value)},b=function(){return null===t||"undefined"===typeof t||!1===t.hasOwnProperty("stats")},p=function(e){return b()||"undefined"===typeof t.stats||!1===t.stats.hasOwnProperty("Bedwars")||!1===t.stats.Bedwars.hasOwnProperty(e)?0:t.stats.Bedwars[e]},h=function(e,a){var t=parseFloat(p(e)/p(a));return Object.is(NaN,t)?0:t};return b()?Object(u.jsx)(o.Fade,{bottom:!0,distance:"45px",children:Object(u.jsx)("div",{className:"stat-panel-box",children:Object(u.jsxs)("div",{className:"username-header",children:[Object(u.jsx)("img",{alt:"",src:"default.png",className:"player-head",style:{marginRight:"30px",width:"85px",height:"85px"}}),Object(u.jsx)("div",{className:"not-found",children:"Player not found"})]})})}):Object(u.jsxs)(o.Fade,{bottom:!0,distance:"45px",children:[Object(u.jsxs)("div",{className:"stat-panel-box",children:[Object(u.jsxs)("div",{className:"username-header",children:[Object(u.jsx)("img",{alt:"",src:"https://crafatar.com/avatars/".concat(t.uuid,"?overlay=true&size=100"),className:"player-head",style:{marginRight:"30px",width:"85px",height:"85px"}}),Object(u.jsxs)("div",{className:null===t||b()?"no-rank":t.hasOwnProperty("newPackageRank")?t.newPackageRank:"no-rank",children:["[",(a="bedwars_level",b()||!1===t.hasOwnProperty("achievements")||!1===t.achievements.hasOwnProperty("bedwars_level")?0:t.achievements[a]),"]\u272b ",function(e){return b()||"undefined"===typeof t[e]?"null":t[e]}("displayname")]})]}),Object(u.jsx)(o.Fade,{delay:400,children:Object(u.jsxs)("div",{className:"overall-stats",children:[Object(u.jsx)(x.a,{start:0,end:p("wins_bedwars"),delay:0,duration:1.4,separator:",",children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Wins: ",Object(u.jsx)("span",{className:"number",ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:p("losses_bedwars"),delay:0,duration:1.4,decimals:0,separator:",",children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Losses: ",Object(u.jsx)("span",{className:"number",ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:100*h("wins_bedwars","games_played_bedwars"),delay:0,duration:1.5,decimals:1,children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Win Percentage: ",Object(u.jsx)("span",{className:"number",style:{color:"#D12A6F"},ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:p("final_kills_bedwars"),delay:0,duration:1.4,decimals:0,separator:",",children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Final Kills: ",Object(u.jsx)("span",{className:"number",ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:p("final_deaths_bedwars"),delay:0,duration:1.4,decimals:0,separator:",",children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Final Deaths: ",Object(u.jsx)("span",{className:"number",ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:h("final_kills_bedwars","final_deaths_bedwars"),delay:0,duration:1.4,decimals:2,children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Final K/D: ",Object(u.jsx)("span",{className:"number",style:{color:"#D12A6F"},ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:p("beds_broken_bedwars"),delay:0,duration:1.4,decimals:0,separator:",",children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Beds Broken: ",Object(u.jsx)("span",{className:"number",ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:p("beds_lost_bedwars"),delay:0,duration:1.4,separator:",",children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Beds Lost: ",Object(u.jsx)("span",{className:"number",ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:h("beds_broken_bedwars","beds_lost_bedwars"),delay:0,duration:1.4,decimals:2,children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Bed Ratio: ",Object(u.jsx)("span",{className:"number",style:{color:"#D12A6F"},ref:a})]})}}),Object(u.jsx)(x.a,{start:0,end:p("winstreak"),delay:0,duration:2.5,children:function(e){var a=e.countUpRef;return Object(u.jsxs)("div",{children:["Winstreak: ",Object(u.jsx)("span",{className:"number",style:{color:"gold"},ref:a})]})}})]})})]}),Object(u.jsxs)("div",{className:"stats-tabs",children:[Object(u.jsxs)(O.a,{size:"lg",children:[Object(u.jsx)(m.a,{onClick:d,active:1===c,variant:"outline-dark",value:"1",children:" Solos "}),Object(u.jsx)(m.a,{onClick:d,active:2===c,variant:"outline-dark",value:"2",children:" Duos "}),Object(u.jsx)(m.a,{onClick:d,active:3===c,variant:"outline-dark",value:"3",children:" 3v3v3v3 "}),Object(u.jsx)(m.a,{onClick:d,active:4===c,variant:"outline-dark",value:"4",children:" 4v4v4v4 "})]}),Object(u.jsx)("div",{children:Object(u.jsxs)(o.Fade,{delay:400,children:[Object(u.jsxs)("div",{className:"gamemode-stat",style:{paddingTop:"35px"},children:[Object(u.jsx)("p",{className:"alignleft",style:{fontSize:"50px"},children:Object(u.jsx)(x.a,{start:0,end:p(i[c-1]+"wins_bedwars"),delay:0,duration:.5,separator:","})}),Object(u.jsx)("p",{className:"aligncenter",style:{fontSize:"50px"},children:Object(u.jsx)(x.a,{start:0,end:p(i[c-1]+"final_kills_bedwars"),delay:0,duration:.5,separator:","})}),Object(u.jsx)("p",{className:"alignright",style:{fontSize:"50px"},children:Object(u.jsx)(x.a,{start:0,end:p(i[c-1]+"beds_broken_bedwars"),delay:0,duration:.5,separator:","})})]}),Object(u.jsxs)("div",{className:"gamemode-stat-labels",style:{marginTop:"-25px",backgroundColor:"transparent"},children:[Object(u.jsx)("p",{className:"alignleft",children:"Wins"}),Object(u.jsx)("p",{className:"aligncenter",children:"Final Kills"}),Object(u.jsx)("p",{className:"alignright",children:"Bed Breaks"})]}),Object(u.jsxs)("div",{className:"gamemode-stat",style:{paddingTop:"35px"},children:[Object(u.jsx)("p",{className:"alignleft",style:{fontSize:"50px"},children:Object(u.jsx)(x.a,{start:0,end:p(i[c-1]+"games_played_bedwars"),delay:0,duration:.5,separator:","})}),Object(u.jsx)("p",{className:"aligncenter",style:{fontSize:"50px"},children:Object(u.jsx)(x.a,{start:0,end:p(i[c-1]+"final_deaths_bedwars"),delay:0,duration:.5,separator:","})}),Object(u.jsx)("p",{className:"alignright",style:{fontSize:"50px"},children:Object(u.jsx)(x.a,{start:0,end:p(i[c-1]+"beds_lost_bedwars"),delay:0,duration:.5,separator:","})})]}),Object(u.jsxs)("div",{className:"gamemode-stat-labels",style:{marginTop:"-25px",backgroundColor:"transparent"},children:[Object(u.jsx)("p",{className:"alignleft",children:"Games"}),Object(u.jsx)("p",{className:"aligncenter",children:"Final Deaths"}),Object(u.jsx)("p",{className:"alignright",children:"Beds Lost"})]}),Object(u.jsxs)("div",{className:"gamemode-stat",style:{paddingTop:"35px",color:"#D12A6F"},children:[Object(u.jsxs)("p",{className:"alignleft",style:{fontSize:"50px"},children:[Object(u.jsx)(x.a,{start:0,end:100*h(i[c-1]+"wins_bedwars",i[c-1]+"games_played_bedwars"),delay:0,duration:.5,separator:","}),"%"]}),Object(u.jsx)("p",{className:"aligncenter",style:{fontSize:"50px",color:"#D12A6F"},children:Object(u.jsx)(x.a,{start:0,end:h(i[c-1]+"final_kills_bedwars",i[c-1]+"final_deaths_bedwars"),delay:0,decimals:2,duration:.5,separator:","})}),Object(u.jsx)("p",{className:"alignright",style:{fontSize:"50px",color:"#D12A6F"},children:Object(u.jsx)(x.a,{start:0,end:h(i[c-1]+"beds_broken_bedwars",i[c-1]+"beds_lost_bedwars"),delay:0,duration:.5,decimals:2,separator:","})})]}),Object(u.jsxs)("div",{className:"gamemode-stat-labels",style:{marginTop:"-25px",backgroundColor:"transparent",color:"black"},children:[Object(u.jsx)("p",{className:"alignleft",children:"Winrate"}),Object(u.jsx)("p",{className:"aligncenter",children:"Final K/D"}),Object(u.jsx)("p",{className:"alignright",children:"Bed Ratio"})]})]})})]})]})}function v(){var e=Object(s.useState)({}),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)(!0),c=Object(j.a)(r,2),l=c[0],o=c[1],h="https://api.hypixel.net/player?key=",x="aa38373d-36dd-4094-a8c6-e54d7912613f",O=function(){var e=Object(d.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return","");case 2:a=a.replace(/\s+/g,""),fetch("https://api.minetools.eu/uuid/".concat(a)).then((function(e){return e.json()})).then((function(e){"ERR"===e.status||""===e?(o(!0),n(null),o(!1)):fetch("".concat(h).concat(x,"&uuid=").concat(e.id)).then((function(e){return e.json()})).then((function(e){o(!0),n(e.player),o(!1)}))})).catch((function(e){n(null)}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(u.jsxs)("main",{children:[Object(u.jsx)(b.a,{bottom:!0,distance:"45px",children:Object(u.jsxs)("div",{className:"intro-header",children:["BEDBREAKR",Object(u.jsxs)("div",{className:"intro-subheader",children:["Quick Minecraft Bedwars Stats",Object(u.jsx)(p,{onSearch:O})]})]})}),!1===l&&Object(u.jsx)(f,{player_data:t}),Object(u.jsx)(b.a,{delay:600,children:Object(u.jsx)("div",{className:"github",children:"by vvalet"})})]})}c.a.render(Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0d0a2030.chunk.js.map