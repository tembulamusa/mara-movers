"use strict";(self.webpackChunkbethipo_web=self.webpackChunkbethipo_web||[]).push([[879],{79879:function(e,s,n){n.r(s);var a=n(1413),t=n(29439),i=n(72791),r=n(89743),l=n(2677),o=n(47022),c=n(92506),d=n(95557),u=n(30577),p=(n(5462),n(85915)),m=n(80184),h=function(e){var s=(0,i.useState)(null),n=(0,t.Z)(s,2),h=(n[0],n[1]),x=(0,i.useState)(null),g=(0,t.Z)(x,2),f=g[0],j=g[1],v=(0,i.useState)((0,p.fp)("user")),b=(0,t.Z)(v,1)[0],w=e.setUser,N={msisdn:"",password:""},y=function(e){var s={position:u.Am.POSITION.TOP_RIGHT,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:673738};200===e.status?u.Am.success("".concat(e.message),s):u.Am.error("".concat(e.message),s)},Z=(0,i.useCallback)((function(){null!==f&&(y(f),200==f.status&&((0,p.qQ)("user",f.user),w(f.user)))}),[f]);(0,i.useEffect)((function(){Z()}),[Z]);var k=function(e){h(!0),(0,d.Z)({url:"/v1/login",method:"POST",data:e}).then((function(e){var s=(0,t.Z)(e,2),n=s[0],a=s[1];if(h(!1),200===n||201==n||204==n)j(a);else{var i={status:n,message:(null===a||void 0===a?void 0:a.message)||"Error attempting to login"};y(i)}}))},O=function(e){var s={};return e.msisdn&&e.msisdn.match(/(\+?255|0|)?\d{9}/g)||(s.msisdn="Invalid phone number"),(!e.password||e.password.length<4)&&(s.password="Invalid password"),s},I=function(e){e.isValid;var s=e.errors,n=e.values,a=(e.submitForm,e.setFieldValue),t=function(e){var s=e.target.name,n=e.target.value;a(s,n)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.l0,{className:"ow i web-element",style:{marginTop:"10px"},children:(0,m.jsxs)(r.Z,{children:[(0,m.jsxs)("div",{className:"col-5",children:[(0,m.jsx)("input",{type:"text",name:"msisdn",className:"top-login-input-field ".concat(s.msisdn&&"text-danger"),style:{width:"100%"},"data-action":"grow",placeholder:s.msisdn||"+255.........",onChange:function(e){return t(e)},value:n.msisdn}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{className:"sticky-hidden",children:(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"remember",value:"1"}),"Remember Me"]})})]}),(0,m.jsxs)("div",{className:"col-5",children:[(0,m.jsx)("input",{type:"password",name:"password",className:"top-login-input-field ".concat(s.password&&"text-danger"," "),"data-action":"grow",style:{width:"100%"},placeholder:s.password||"Password",onChange:function(e){return t(e)},value:n.password}),(0,m.jsx)("br",{}),(0,m.jsx)("input",{type:"hidden",name:"ref",value:"{props.refURL}"}),(0,m.jsx)("a",{href:"/reset-password",title:"Reset password",children:(0,m.jsx)("span",{className:"sticky-hidden",children:"Forgot Password?"})})]}),(0,m.jsx)("div",{className:"col-sm-2",children:(0,m.jsx)("button",{className:"cg login-button btn",type:"submit",children:(0,m.jsx)("span",{children:"LOGIN"})})})]})})})},S=function(e){return(0,m.jsx)(c.J9,{initialValues:N,onSubmit:k,validateOnChange:!1,validateOnBlur:!1,validate:O,children:function(e){return(0,m.jsx)(I,(0,a.Z)({},e))}})};return(0,m.jsx)(o.Z,{className:"top-login-section",children:(0,m.jsxs)(r.Z,{style:{marginBottom:"10px"},children:[(0,m.jsxs)(l.Z,{xs:3,className:"d-inline-flex justify-content-center",style:{margin:"auto"},children:[(0,m.jsx)(u.Ix,{}),b&&(0,m.jsx)("a",{className:"filter-icon",href:"/deposit",title:"Deposit",style:{fontSize:"16px",fontWeight:"bold",background:"#39b54a",padding:"5px 20px"},children:(0,m.jsx)("span",{className:"register-label",children:"DEPOSIT"})}),(0,m.jsx)("a",{className:"filter-icon",href:"/signup",title:"Join Now",style:{fontSize:"16px"},children:(0,m.jsx)("span",{className:"register-label",children:"Register Now!"})})]}),(0,m.jsx)(l.Z,{xs:6,children:(0,m.jsx)(S,{})})]})})};s.default=i.memo(h)}}]);
//# sourceMappingURL=879.cec8fe47.chunk.js.map