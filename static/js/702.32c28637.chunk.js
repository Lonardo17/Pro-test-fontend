"use strict";(self.webpackChunkpro_test=self.webpackChunkpro_test||[]).push([[702],{5508:function(e,t,n){n.d(t,{k:function(){return c}});var c=function(e){return e.answers}},9861:function(e,t,n){n.d(t,{O:function(){return c}});var c=function(e){return e.testType}},2702:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var c=n(885),a="ResultViews_container__dyK1J",r="Graphic_graphic__+OdWt",s="Graphic_labelNumber__OeyKF",i=n(6337),l=n(5390),o=n(8634),u=n(3329),d=["#FF6B01","#D7D7D7"],h=Math.PI/180,x=function(e){var t=e.cx,n=e.cy,c=e.midAngle,a=e.innerRadius,r=e.outerRadius,i=e.value,l=e.fill,o=e.name,d=Math.sin(-h*c),x=Math.cos(-h*c),p=t+(r-20)*x,m=n+(a+70)*d,f=t+(r+10)*x,_=n+(r-10)*d,j=f+22*(x>=0?3:-3),v=_,b=x>=0?"start":"end";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{d:"M".concat(p,",").concat(m,"L").concat(f,",").concat(_,"L").concat(j,",").concat(v),stroke:"#00000081",fill:"none"}),(0,u.jsx)("circle",{cx:p,cy:m,r:3,fill:"#FFFFFF",stroke:"none"}),(0,u.jsx)("text",{x:j+15*(x>=0?3:-3),y:v+6,textAnchor:b,fill:"#333",className:s,children:"".concat(i,"% ").concat(o)}),(0,u.jsx)("rect",{fill:l,width:"25",height:"25",x:j+12*(x>=0?1:-3),y:v+-12})]})};function p(e){e.percentCorrect,e.percentIncorrect;var t=[{name:"Correct",value:40},{name:"Incorrect",value:60}];return(0,u.jsx)(i.u,{width:768,height:286,className:r,children:(0,u.jsx)(l.b,{data:t,cx:384,cy:138,labelLine:!1,label:x,outerRadius:142.5,fill:"#8884d8",stroke:"none",dataKey:"value",children:t.map((function(e,t){return(0,u.jsx)(o.b,{fill:d[t%d.length]},"cell-".concat(t))}))})})}var m="GraphicMobile_graphic__3YX4J",f="GraphicMobile_label__Qakcm",_=["#FF6B01","#D7D7D7"],j=Math.PI/180,v=function(e){var t=e.cx,n=e.cy,c=e.midAngle,a=e.innerRadius,r=e.outerRadius,s=(e.fill,e.value),i=e.name,l=a+.5*(r-a),o=t+l*Math.cos(-c*j),d=n+l*Math.sin(-c*j);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("text",{x:o,y:d,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central",className:f,children:"".concat(s,"%")}),(0,u.jsx)("text",{x:o,y:d+8,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central",className:f,children:"".concat(i)})]})};function b(e){var t=e.percentCorrect,n=e.percentIncorrect,c=[{name:"Correct",value:Number(t)},{name:"Incorrect",value:Number(n)}];return(0,u.jsx)(i.u,{width:320,height:160,className:m,children:(0,u.jsx)(l.b,{data:c,cx:160,cy:75,labelLine:!1,label:v,outerRadius:78,fill:"#8884d8",stroke:"none",dataKey:"value",children:c.map((function(e,t){return(0,u.jsx)(o.b,{fill:_[t%_.length]},"cell-".concat(t))}))})})}var g=n(5048),N=n(9861),y="ResultGraphic_title__swo-3",w="ResultGraphic_typeTest__WUUYz",R="ResultGraphic_line__TGcVr",F="ResultGraphic_containerResult__KS5qH",M="ResultGraphic_result__ZfZo4",k="ResultGraphic_horizonLine__eWLum";function C(e){var t=e.result,n=window.innerWidth,c=(0,g.v9)(N.O);var a=Math.floor(100*t/12),r=Math.floor(100-a);return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:y,children:"Results"}),(0,u.jsxs)("p",{className:w,children:["[ ",c.split("").map((function(e,t){return 0===t?e.toUpperCase():"_"===e?" ":e})).join(""),"_ ]"]}),(0,u.jsx)("hr",{className:R}),n>767?(0,u.jsx)(p,{percentCorrect:a,percentIncorrect:r}):(0,u.jsx)(b,{percentCorrect:a,percentIncorrect:r}),(0,u.jsxs)("div",{className:F,children:[(0,u.jsxs)("p",{className:M,children:["Correct answers-",(0,u.jsx)("b",{children:t})]}),(0,u.jsx)("hr",{className:k}),(0,u.jsxs)("p",{className:M,children:["Total questions-",(0,u.jsx)("b",{children:"12"})]})]})]})}var I="ResultMotivation_container__Wo+yY",G="ResultMotivation_resultText__wt3iy",S="ResultMotivation_motivationText__KWBD2",T="ResultMotivation_button__3VvdV",D="ResultMotivation_image__AvhKD",A=n(1087),K=n(9131),O=n(672),B=n(7397),L=n(6665),W=n(9474),Z=n(4784),V=n(4429),Y=function(e){var t=e.testType,n=e.result,c=(0,g.I0)();var a=n<=4?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{srcSet:("".concat(L," 1x"),"".concat(W," 2x")),src:L,alt:"sad cat",className:D}),(0,u.jsx)("p",{className:G,children:"Oops!"}),(0,u.jsx)("p",{className:S,children:"You should prepare better for the test."})]}):12===n?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{srcSet:("".concat(Z," 1x"),"".concat(V," 2x")),src:Z,alt:"winner cat",className:D}),(0,u.jsx)("p",{className:G,children:"Excellent!"}),(0,u.jsx)("p",{className:S,children:"You know the material 100%."})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{srcSet:"".concat(O," 1x, ").concat(B," 2x"),src:O,alt:"cat",className:D}),(0,u.jsx)("p",{className:G,children:"Not bad!"}),(0,u.jsx)("p",{className:S,children:"But you still need to learn some materials."})]});return(0,u.jsxs)("div",{className:I,children:[a,(0,u.jsx)(A.rU,{to:"/test/".concat(t),className:T,onClick:function(){c((0,K.N3)()),localStorage.setItem("questions",null),localStorage.setItem("currentQIndex",0),localStorage.setItem("chosenAnswer",null)},children:"Try again"})]})},U=n(5508),q=n(2791),J=n(5861),z=n(7757),E=n.n(z),P=n(4569),Q=n.n(P),H=function(){var e=(0,J.Z)(E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q().post("".concat("https://app-protest.herokuapp.com/test","/result"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=n(5446),$=n(9645),ee=function(){var e=(0,g.v9)(U.k),t=(0,g.v9)(N.O),n=(0,q.useState)(0),r=(0,c.Z)(n,2),s=r[0],i=r[1],l=(0,q.useState)(!1),o=(0,c.Z)(l,2),d=o[0],h=o[1];return(0,g.I0)()((0,X.jV)()),(0,q.useEffect)((function(){return h(!0),H({answers:JSON.stringify(e),testType:t}).then((function(e){return i(e.data.result)})).finally((function(){return h(!1)})),function(){}}),[e,t]),(0,u.jsx)("div",{className:a,children:d?(0,u.jsx)($.Z,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(C,{result:s}),(0,u.jsx)(Y,{testType:t,result:s})]})})}},672:function(e,t,n){e.exports=n.p+"static/media/cat.76cccb45be02139a4be6.png"},7397:function(e,t,n){e.exports=n.p+"static/media/cat2x.2eb5dbea10e2cca445bc.png"},6665:function(e,t,n){e.exports=n.p+"static/media/sadCat.313d8987bcc1d6066995.png"},9474:function(e,t,n){e.exports=n.p+"static/media/sadCat2x.91e99087580f7453e058.png"},4784:function(e,t,n){e.exports=n.p+"static/media/winnerCat.22eff7d92cc24bf709b1.png"},4429:function(e,t,n){e.exports=n.p+"static/media/winnerCat2x.65dfc0306f362c44e0cf.png"}}]);
//# sourceMappingURL=702.32c28637.chunk.js.map