(this["webpackJsonpsort-employee"]=this["webpackJsonpsort-employee"]||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),c=n.n(r),u=n(12),s=n(13),o=n(14),m=n(17),i=n(16);n(23);var h=function(e){return l.a.createElement("div",{className:"wrapper"},e.children)};n(24);var p=function(e){return l.a.createElement("h1",{className:"title"},e.children)};var E=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.first),l.a.createElement("td",null,e.last),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email))};var f=function(e){return l.a.createElement("div",{className:"search-box"},l.a.createElement("form",null,l.a.createElement("input",{type:"search",placeholder:"name",onChange:e.handleInputChange,value:e.search,name:"search"})))},d=n(15),v=n.n(d),g=function(){return v.a.get("https://randomuser.me/api/?results=25&nat=us")},y=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],filterUsers:[{}],search:""},e.handleInputChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(u.a)({},n,a),(function(){return console.log(e.state)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){return e.setState({employees:t.data.results},(function(){return console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(h,null,l.a.createElement(p,null,"Employees"),l.a.createElement("div",{className:"table"},l.a.createElement(f,{handleInputChange:this.handleInputChange,search:this.state.search}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"First name")),l.a.createElement("th",null,l.a.createElement("strong",null,"Last name")),l.a.createElement("th",null,l.a.createElement("strong",null,"Phone")),l.a.createElement("th",null,l.a.createElement("strong",null,"Email")))),l.a.createElement("tbody",null,this.state.employees.filter((function(t){return t.email.toLowerCase().includes(e.state.search.toLowerCase())})).map((function(e,t){return l.a.createElement(E,{key:t,first:e.name.first,last:e.name.last,phone:e.phone,email:e.email})}))))))}}]),n}(a.Component);n(42);c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f74696a7.chunk.js.map