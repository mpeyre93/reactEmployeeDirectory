(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(16),s=n.n(r),o=(n(22),n(23),n(3)),i=n(4),l=n(6),u=n(5),p=(n(24),n(0));var j=function(){return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("div",{className:"title",children:"Employee Information"}),Object(p.jsx)("br",{})]})},d=(n(26),a.a.Component,n(17)),m=n.n(d),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={employees:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://randomuser.me/api/?results=20&nat=Aus").then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Employee",children:[Object(p.jsx)(j,{}),this.state.employees.length>0&&Object(p.jsx)("pageNavBar",{employees:this.state.employees})]})}}]),n}(a.a.Component);var b=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{className:"App-header",children:"Employee Directory"}),Object(p.jsx)(h,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.a3f23313.chunk.js.map