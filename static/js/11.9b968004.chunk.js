"use strict";(self.webpackChunkpro_test=self.webpackChunkpro_test||[]).push([[11],{5011:function(e,r,t){t.r(r),t.d(r,{default:function(){return F}});var n="Login_Login__VdlKH",s="Login_title__vcg8P",a="Login_text__J+uOD",i="Login_txtBold__l+MbX",o=t(3329);function l(){return(0,o.jsxs)("div",{className:n,children:[(0,o.jsx)("h1",{className:s,children:"Pro Test"}),(0,o.jsxs)("p",{className:a,children:[(0,o.jsx)("span",{className:i,children:"["})," We will help you find weak points in knowlrdge so that you can strengrhen it. We will show you what is relevant to know for ",(0,o.jsx)("span",{className:i,children:"QA Engineer"})," ","and will try to make the learning process more diverse_"," ",(0,o.jsx)("span",{className:i,children:"]"})]})]})}var u=t(5861),c=t(4942),d=t(1413),m=t(885),h=t(7757),p=t.n(h),g={Form:"AuthForm_Form__KUM+E",firstText:"AuthForm_firstText__yRLxm",btnGoogle:"AuthForm_btnGoogle__5jjGJ",btnIcon:"AuthForm_btnIcon__hp8BK",secondText:"AuthForm_secondText__5G5Pg",inputMail:"AuthForm_inputMail__xqpBA",inputPassword:"AuthForm_inputPassword__iGfjL",message:"AuthForm_message__+c-qA",buttonWraper:"AuthForm_buttonWraper__PUvog",buttonSignIn:"AuthForm_buttonSignIn__lTt2U",buttonSignInDisabled:"AuthForm_buttonSignInDisabled__52SWb AuthForm_buttonSignIn__lTt2U",buttonSignUp:"AuthForm_buttonSignUp__8YISi",buttonSignUpDisabled:"AuthForm_buttonSignUpDisabled__mzyId AuthForm_buttonSignUp__8YISi"},_=t(2791),f=t(5048),w=t(2398),b=t(5985),x=t(6561),v=t(5872),j=t(9645);function Z(){var e=(0,_.useState)(!1),r=(0,m.Z)(e,2),t=r[0],n=r[1],s=(0,_.useState)({email:"",password:""}),a=(0,m.Z)(s,2),i=a[0],l=a[1],h=(0,_.useState)({emailError:"This is a required field",passwordError:"This is a required field"}),Z=(0,m.Z)(h,2),A=Z[0],S=Z[1],N=(0,_.useState)({emailDirty:!1,passwordDirty:!1}),F=(0,m.Z)(N,2),k=F[0],y=F[1],I=(0,_.useState)("true"),T=(0,m.Z)(I,2),E=T[0],P=T[1],D=i.email,U=i.password,q=A.emailError,G=A.passwordError,C=k.emailDirty,L=k.passwordDirty,W=(0,f.I0)(),M=(0,w.Vx)(),V=(0,m.Z)(M,1)[0],B=(0,w.XQ)(),O=(0,m.Z)(B,1)[0],K=(0,w.cQ)(),Q=(0,m.Z)(K,1)[0],Y=function(e){if(l((function(r){return(0,d.Z)((0,d.Z)({},r),{},(0,c.Z)({},e.target.id,e.target.value.trim()))})),"password"===e.target.id&&(0!==e.target.value.length&&e.target.value.length<8?S((function(e){return(0,d.Z)((0,d.Z)({},e),{},{passwordError:"Password must be not less than 8 symbols"})})):e.target.value?S((function(e){return(0,d.Z)((0,d.Z)({},e),{},{passwordError:""})})):S((function(e){return(0,d.Z)((0,d.Z)({},e),{},{passwordError:"This is a required field"})}))),"email"===e.target.id){e.target.value?/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(e.target.value).toLowerCase())?S((function(e){return(0,d.Z)((0,d.Z)({},e),{},{emailError:""})})):S((function(e){return(0,d.Z)((0,d.Z)({},e),{},{emailError:"Incorrect email format"})})):S((function(e){return(0,d.Z)((0,d.Z)({},e),{},{emailError:"This is a required field"})}))}},z=function(e){switch(e.target.id){case"email":y((function(e){return(0,d.Z)((0,d.Z)({},e),{},{emailDirty:!0})}));break;case"password":y((function(e){return(0,d.Z)((0,d.Z)({},e),{},{passwordDirty:!0})}));break;default:return}};(0,_.useEffect)((function(){P(!q&&!G)}),[q,G]);var H=(0,v.Nq)({onSuccess:function(){var e=(0,u.Z)(p().mark((function e(r){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.code,Q({code:t}).unwrap().then((function(e){W((0,x.av)({avatar:e.user.avatar,email:e.user.email,token:e.user.token}))})).catch((function(e){b.Am.error(e.message,{position:b.Am.POSITION.TOP_RIGHT})}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),flow:"auth-code"});return(0,o.jsx)(o.Fragment,{children:t?(0,o.jsx)(j.Z,{}):(0,o.jsxs)("div",{className:g.Form,children:[(0,o.jsx)("p",{className:g.firstText,children:"You can use Google Account to authorize:"}),(0,o.jsxs)("button",{className:g.btnGoogle,onClick:H,children:[(0,o.jsx)("svg",{className:g.btnIcon,width:"18",height:"18",children:(0,o.jsx)("use",{href:"../../img/symbol-defs.svg#icon-google"})}),"Google"]}),(0,o.jsx)("p",{className:g.secondText,children:"Or login to our app using e-mail and password:"}),(0,o.jsxs)("form",{children:[(0,o.jsxs)("label",{className:g.label,children:[(0,o.jsx)("input",{className:g.inputMail,type:"email",placeholder:"E-mail",required:!0,id:"email",value:D,onChange:Y,onBlur:z,name:"email"}),C&&q&&(0,o.jsx)("p",{className:g.message,children:q})]}),(0,o.jsxs)("label",{className:g.label,children:[(0,o.jsx)("input",{className:g.inputPassword,type:"password",placeholder:"Password",required:!0,id:"password",value:U,onChange:Y,onBlur:z,name:"password"}),L&&G&&(0,o.jsx)("p",{className:g.message,children:G})]}),(0,o.jsxs)("div",{className:g.buttonWraper,children:[(0,o.jsx)("button",{className:E?g.buttonSignIn:g.buttonSignInDisabled,type:"button",onClick:function(){null!==i&&void 0!==i&&i.email||null!==i&&void 0!==i&&i.password?(n(!0),O(i).unwrap().then((function(e){W((0,x.av)({avatar:e.user.avatar,email:e.user.email,token:e.user.token})),l({email:"",password:""}),n(!1),b.Am.success("Welcome to Pro-Test")})).catch((function(e){b.Am.error(e.data.message),n(!1)}))):b.Am.warn("Please enter your email and password")},disabled:!E,children:"Sign in"}),(0,o.jsx)("button",{className:E?g.buttonSignUp:g.buttonSignUpDisabled,type:"button",onClick:function(){null!==i&&void 0!==i&&i.email||null!==i&&void 0!==i&&i.password?V(i).unwrap().then((function(){return O(i).unwrap().then((function(e){W((0,x.av)({avatar:e.user.avatar,email:e.user.email,token:e.user.token})),l({email:"",password:""}),n(!1)}))})).catch((function(e){b.Am.error(e.data.message),n(!1)})):b.Am.warn("Please enter email and password for registration")},disabled:!E,children:"Sign up"})]})]})]})})}var A="AuthView_AuthView__rgZME",S="AuthView_container__Frqen",N=t(5446);function F(){return(0,f.I0)()((0,N.jV)()),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:S,children:(0,o.jsxs)("div",{className:A,children:[(0,o.jsx)(l,{}),(0,o.jsx)(Z,{})]})})})}}}]);
//# sourceMappingURL=11.9b968004.chunk.js.map