(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},25:function(e,t,a){e.exports=a(54)},31:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),l=a.n(s),c=(a(31),a(2)),o=a(3),i=a(5),u=a(4),m=a(6),h=(a(10),n.Component,n.Component,a(8)),b=a.n(h),p=a(13),d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){b.a.post("/addUser/".concat(a.state.username,"/").concat(a.state.password))},a.setStates=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A username was submitted: "+a.state.username),console.log("A password was submitted: "+a.state.password),e.preventDefault()},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"username",target:"one",className:"form-control inputArea",onChange:this.setStates,username:this.state.username,id:"Username",placeholder:"Username *"}),r.a.createElement("input",{type:"text",name:"password",target:"two",className:"form-control inputArea",onChange:this.setStates,password:this.state.password,id:"Password",placeholder:"Password *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),g=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"myKey".concat(this.props.userID)},r.a.createElement("a",null,this.props.userID," ",this.props.userName," ",this.props.userPassword))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){b.a.get("/getAllUsers").then(function(e){a.setState({users:e.users})});a.state.users.map(function(e){return r.a.createElement(g,{userID:e.userID,userName:e.userName,userPassword:e.userPassword})})},a.state={data:"",users:[{userID:"null",userName:"null",userPassword:"null"},{userID:"second",userName:"bdb",userPassword:"be"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.users.map(function(e){return r.a.createElement(g,{userID:e.userID,userName:e.userName,userPassword:e.userPassword})});return r.a.createElement("div",null,r.a.createElement("ul",{key:"myKey".concat(this.state.userID)},e),r.a.createElement("button",{onClick:this.getRequest},"Click"))}}]),t}(n.Component),E=a(56),O=a(57),j=a(24),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HELLO"))}}]),t}(n.Component),y=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(f,null))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){b.a.post("/addTimeLog/".concat(a.state.time,"/").concat(a.state.algID))},a.setStates=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A time was submitted: "+a.state.time),console.log("A alg ID was submitted: "+a.state.algID),e.preventDefault()},a.state={time:"",algID:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"time",target:"one",className:"form-control inputArea",onChange:this.setStates,time:this.state.time,id:"Time",placeholder:"Time *"}),r.a.createElement("input",{type:"text",name:"algID",target:"two",className:"form-control inputArea",onChange:this.setStates,algID:this.state.algID,id:"AlgID",placeholder:"AlgID *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),w=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement("a",null,this.props.timeID," ",this.props.time," ",this.props.algID))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){b.a.get("/getAllTimes").then(function(e){e.times?a.setState({times:e.times}):console.log("times not defined")})},a.state={times:[{time:"1time",algID:"1alg"},{time:"2time",algID:"2alg"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return r.a.createElement(w,{timeID:e.timeID,time:e.time,algID:e.algID})});return r.a.createElement("div",null,r.a.createElement("ul",{key:"myKey".concat(this.state.userID)},e),r.a.createElement("button",{onClick:this.getRequest},"Click"))}}]),t}(n.Component),N=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(C,null))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){b.a.post("/addAlgorithm/".concat(a.state.algName,"/").concat(a.state.moves,"/").concat(a.state.scramble,"/").concat(a.state.userID))},a.setStates=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A algName was submitted: "+a.state.algName),console.log("A moves was submitted: "+a.state.moves),console.log("A scramble was submitted: "+a.state.scramble),console.log("A userID was submitted: "+a.state.userID),e.preventDefault()},a.state={algName:"",moves:"",scramble:"",userID:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"algName",target:"one",className:"form-control inputArea",onChange:this.setStates,algName:this.state.algName,id:"algName",placeholder:"AlgName *"}),r.a.createElement("input",{type:"text",name:"moves",target:"two",className:"form-control inputArea",onChange:this.setStates,password:this.state.moves,id:"moves",placeholder:"Moves *"}),r.a.createElement("input",{type:"text",name:"scramble",target:"three",className:"form-control inputArea",onChange:this.setStates,username:this.state.scramble,id:"scramble",placeholder:"Scramble *"}),r.a.createElement("input",{type:"text",name:"userID",target:"four",className:"form-control inputArea",onChange:this.setStates,password:this.state.userId,id:"userID",placeholder:"UserID *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){b.a.get("/getAllalgorithms").then(function(e){a.setState({algorithms:e.algorithms})})},a.state={algorithms:[{algID:"",name:"1time",moves:"1alg",scramble:"",userId:""},{algID:"",name:"1time",moves:"1alg",scramble:"",userId:""}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.algorithms.map(function(e){return r.a.createElement(w,{algID:e.algID,name:e.name,moves:e.moves,scramble:e.scramble,userID:e.userID})});return r.a.createElement("div",null,r.a.createElement("ul",{key:"myKey".concat(this.state.algID)},e),r.a.createElement("button",{onClick:this.getRequest},"Click"))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(S,null))}}]),t}(n.Component);var q=function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(O.a,{className:"logo",to:"/"},"George's PLL Trainer"),r.a.createElement("div",{className:"header-right"},r.a.createElement(O.a,{id:"home",to:"/"},"Home"),r.a.createElement(O.a,{to:"/UsersPage"},"Users"),r.a.createElement(O.a,{to:"/Trainer"},"Trainer"),r.a.createElement(O.a,{to:"/TimeLogPage"},"Times"),r.a.createElement(O.a,{to:"/AlgorithmsPage"},"Algorithms"),r.a.createElement(j.a,{exact:!0,path:"/",component:v}),r.a.createElement(j.a,{path:"/UsersPage",component:y}),r.a.createElement(j.a,{path:"/Trainer",component:I}),r.a.createElement(j.a,{path:"/TimeLogPage",component:N}),r.a.createElement(j.a,{path:"/AlgorithmsPage",component:A})))))},P=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("button",null," ",this.props.name," ",this.props.password,"`"),";")}}]),t}(n.Component),R=(n.Component,function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.b9b2beda.chunk.js.map