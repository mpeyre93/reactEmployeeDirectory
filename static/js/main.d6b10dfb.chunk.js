(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{4:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),a=n(13),c=n.n(a),l=(n(24),n(14)),i=n(15),o=n(19),d=n(18),h=n(16),u=n.n(h),j=function(){return u.a.get("https://randomuser.me/api/?results=300&nat=us")},m=(n(4),n(0));var f=function(e){return Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("header",{className:"z-depth-3 col s12",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col s6",children:Object(m.jsx)("h3",{className:"right-align headerText",children:"Employee Information Directory"})}),Object(m.jsxs)("div",{className:"col s6 ",children:[Object(m.jsx)("div",{className:"col s6 inputAndButton right-align ",children:Object(m.jsx)("input",{onChange:e.handleInputChange,value:e.value,id:"employees",type:"text",name:"search",list:"employee",className:" inputBox  ",placeholder:"Search by name"})}),Object(m.jsx)("div",{className:"col m4",children:Object(m.jsx)("button",{type:"submit",value:"",className:" btn z-depth-2 waves-effect  searchBttn",onClick:e.handleSearch,children:"Search"})})]})]})})})},b=n(17),p=n.n(b);var O=function(e){return Object(m.jsxs)("table",{className:"tableEmployee ",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{}),Object(m.jsx)("th",{onClick:e.sortByName,children:"Name"}),Object(m.jsx)("th",{children:"Phone"}),Object(m.jsx)("th",{children:"E-mail"}),Object(m.jsx)("th",{children:"DOB"})]})}),Object(m.jsx)("tbody",{className:"",children:e.results.map((function(e){return Object(m.jsxs)("tr",{className:"table",children:[Object(m.jsxs)("td",{children:[" ",Object(m.jsx)("img",{className:"\r ",src:e.picture.medium,alt:""})]}),Object(m.jsxs)("td",{children:[e.name.first+" "+e.name.last,"  "]}),Object(m.jsx)("td",{children:e.cell}),Object(m.jsx)("td",{className:"email",children:Object(m.jsx)("a",{href:e.email,children:e.email})}),Object(m.jsx)("td",{children:Object(m.jsx)(p.a,{format:"MM/DD/YYYY",children:e.dob.date})})]},e.login.uuid)}))})]})},y=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filteredEmployees:[],order:""},e.sortByName=function(){var t=e.state.filteredEmployees;if("asc"===e.state.order){var n=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(n),e.setState({filteredEmployees:n,order:"desc"})}else{var s=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));console.log(s),e.setState({filteredEmployees:s,order:"asc"})}},e.handleInputChange=function(t){var n=e.state.employees,s=t.target.value,r=n.filter((function(e){return e.name.first.toLowerCase().indexOf(s.toLowerCase())>-1}));e.setState({filteredEmployees:r})},e.employeeSearch=function(){j().then((function(t){return e.setState({filteredEmployees:t.data.results,employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault(),e.state.search||alert("Enter a name");var n=e.state,s=n.employees,r=n.search,a=s.filter((function(e){return e.name.first.toLowerCase().includes(r.toLowerCase())}));e.setState({filteredEmployees:a})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{employee:this.state.employees,handleSearch:this.handleSearch,handleInputChange:this.handleInputChange}),Object(m.jsx)(O,{results:this.state.filteredEmployees,sortByName:this.sortByName})]})}}]),n}(s.Component);var x=function(){return Object(m.jsx)(y,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.d6b10dfb.chunk.js.map