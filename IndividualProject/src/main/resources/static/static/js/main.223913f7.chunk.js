(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},58:function(e,t){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),i=(a(33),a(1)),l=a(2),o=a(4),u=a(3),m=a(5),h=(a(8),a(63)),d=a(64),p=a(27),b=(n.Component,n.Component,a(7)),g=a.n(b),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){g.a.delete("/deleteUser/".concat(a.props.userID))},a.state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete User"))}}]),t}(n.Component),O=a(12),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).updateRequest=function(){g.a.put("/updateUser/".concat(a.state.newusername,"/").concat(a.state.newpassword,"/").concat(a.props.userID)),a.hideForm()},a.showForm=function(){a.setState({show:!0})},a.hideForm=function(){a.setState({show:!1})},a.setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A username was submitted: "+a.state.newusername),console.log("A password was submitted: "+a.state.newpassword),e.preventDefault()},a.state={show:!1,newusername:"",newpassword:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.show?r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"newusername",target:"one",className:"form-control inputArea",onChange:this.setStates,newusername:this.state.newusername,id:"newusername",placeholder:"New Username *"}),r.a.createElement("input",{type:"text",name:"newpassword",target:"two",className:"form-control inputArea",onChange:this.setStates,newpassword:this.state.newpassword,id:"newpassword",placeholder:"New Password *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.updateRequest})):r.a.createElement("button",{onClick:this.showForm},"Update User")}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("li",{key:"myKey".concat(this.props.userID)},r.a.createElement("a",null,this.props.userID," ",this.props.userName," ",this.props.userPassword," ",r.a.createElement(f,{userName:this.props.userName,userID:this.props.userID}),r.a.createElement(j,{userID:this.props.userID}))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){g.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.state={data:"",users:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.users.map(function(e){return r.a.createElement(E,{userID:e.userID,userName:e.userName,userPassword:e.userPassword})});return r.a.createElement("div",null,r.a.createElement("ul",{key:"myKey".concat(this.state.userID)},e),this.getRequest())}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){g.a.post("/addUser/".concat(a.state.username,"/").concat(a.state.password))},a.setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A username was submitted: "+a.state.username),console.log("A password was submitted: "+a.state.password),e.preventDefault()},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"username",target:"one",className:"form-control inputArea",onChange:this.setStates,username:this.state.username,id:"Username",placeholder:"Username *"}),r.a.createElement("input",{type:"text",name:"password",target:"two",className:"form-control inputArea",onChange:this.setStates,password:this.state.password,id:"Password",placeholder:"Password *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome"))}}]),t}(n.Component),S=(n.Component,n.Component,n.Component,a(53),a(16)),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addTime=function(){g.a.post("/addTimeLog/".concat(a.state.time,"/").concat(a.state.algID))},a.startTimer=function(){a.setState({isOn:!0,time:a.state.time,start:Date.now()-a.state.time}),a.timer=setInterval(function(){return a.setState({time:Date.now()-a.state.start})},1)},a.stopTimer=function(){a.setState({isOn:!1}),clearInterval(a.timer)},a.resetTimer=function(){a.setState({time:0,isOn:!1})},a.submitTime=function(){a.setState({currentTime:a.state.time}),console.log(a.state.currentTime),a.addTime()},a.state={time:0,isOn:!1,start:0,currentTime:null,algID:3},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=0==this.state.time?r.a.createElement("button",{onClick:this.startTimer},"start"):null,t=0!=this.state.time&&this.state.isOn?r.a.createElement("button",{onClick:this.stopTimer},"stop"):null,a=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.startTimer},"resume"),n=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.resetTimer},"reset"),s=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.submitTime},"submit time");return r.a.createElement("div",null,r.a.createElement("h3",null,"timer: ",S(this.state.time,{secDecimalDigits:4})),e,a,t,n,s)}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){g.a.delete("/deleteTimeLog/".concat(a.props.timeID))},a.state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete Time"))}}]),t}(n.Component),C=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},r.a.createElement("a",null,this.props.timeID," ",this.props.time," ",this.props.algFID," ",r.a.createElement(D,{timeID:this.props.timeID})))))}}]),t}(n.Component),I=a(16),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addString=function(){},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.time?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},r.a.createElement("a",null,I(parseInt(this.props.time),{secDecimalDigits:4}))))):r.a.createElement("a",null,"try again")}}]),t}(n.Component),q=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){g.a.get("/getUserAlgTimes/".concat(a.props.userID,"/").concat(a.props.algID)).then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return r.a.createElement(A,{time:e.time})});return r.a.createElement("div",null,r.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component)),N=(n.Component,function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.algid)},r.a.createElement("a",null," ",this.props.name," ",this.props.time," ",this.props.algid," ",this.props.userid," ",r.a.createElement(q,{userid:this.props.algid,name:this.props.name,algid:this.props.algid})))))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){g.a.get("/getUserAlgs/".concat(a.state.userid)).then(function(e){a.setState({algorithms:e.data})})},a.state={algorithms:[],userid:12},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.algorithms.map(function(e){return r.a.createElement(N,{name:e.name,algid:e.algid,userid:e.userid})});return r.a.createElement("div",null,e,this.getRequest())}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).startTraining=function(){a.setState({running:!0}),a.generateRandomScramble()},a.endTraining=function(){a.setState({running:!1})},a.generateRandomScramble=function(){g.a.get("/getRandomScramble/".concat(a.state.userID)).then(function(e){a.setState({scramble:e.data})})},a.state={userID:12,data:"",running:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.running?r.a.createElement("div",null,r.a.createElement("h1",null,this.state.scramble),r.a.createElement("button",{onClick:this.generateRandomScramble},"Next Scramble"),r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement("button",{onClick:this.endTraining},"Click to stop")):r.a.createElement("button",{onClick:this.startTraining},"Click to begin")}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={getid:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null))}}]),t}(n.Component),L=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(v,null))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){g.a.post("/addTimeLog/".concat(a.state.time,"/").concat(a.state.algFID))},a.setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A time was submitted: "+a.state.time),console.log("A alg ID was submitted: "+a.state.algFID),e.preventDefault()},a.state={time:"",algFID:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"time",target:"one",className:"form-control inputArea",onChange:this.setStates,time:this.state.time,id:"Time",placeholder:"Time *"}),r.a.createElement("input",{type:"text",name:"algFID",target:"two",className:"form-control inputArea",onChange:this.setStates,algFID:this.state.algFID,id:"AlgID",placeholder:"AlgID *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){g.a.get("/getAllTimes").then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return r.a.createElement(C,{timeID:e.timeID,time:e.time,algFID:e.algID})});return r.a.createElement("div",null,r.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component),F=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(x,null))}}]),t}(n.Component),K=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).pushRequest=function(){g.a.post("/addAlgorithm/".concat(e.state.algname,"/").concat(e.state.moves,"/").concat(e.state.scramble,"/").concat(e.state.userid))},e.setStates=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){console.log("A name was submitted: "+e.state.algname),console.log("A moves was submitted: "+e.state.moves),console.log("A scramble was submitted: "+e.state.scramble),console.log("A userID was submitted: "+e.state.userid),t.preventDefault()},e.state={algname:"",moves:"",scramble:"",userid:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"algname",target:"one",className:"form-control inputArea",onChange:this.setStates,algname:this.state.algname,id:"algname",placeholder:"algname *"}),r.a.createElement("input",{type:"text",name:"moves",target:"two",className:"form-control inputArea",onChange:this.setStates,moves:this.state.moves,id:"moves",placeholder:"Moves *"}),r.a.createElement("input",{type:"text",name:"scramble",target:"three",className:"form-control inputArea",onChange:this.setStates,scramble:this.state.scramble,id:"scramble",placeholder:"Scramble *"}),r.a.createElement("input",{type:"text",name:"userid",target:"four",className:"form-control inputArea",onChange:this.setStates,userid:this.state.userid,id:"userid",placeholder:"userid *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){g.a.delete("/deleteAlgorithm/".concat(a.props.algID))},a.state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete Algorithm"))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).retractOffer=function(){a.setState({offerdefault:!1})},a.checkAlgs=function(){},a.pushDefault=function(){for(var e=0;e<a.state.defaultAlgorithms.length;e++)g.a.post("/addAlgorithm/".concat(a.state.defaultAlgorithms[e].name,"/").concat(a.state.defaultAlgorithms[e].moves,"/").concat(a.state.defaultAlgorithms[e].scramble,"/").concat(a.props.userID)),a.retractOffer()},a.state={offerdefault:!0,defaultAlgorithms:[{name:"J",moves:"U",scramble:"U'"},{name:"H",moves:"U",scramble:"U'"}],algorithms:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.offerdefault?r.a.createElement("div",null,r.a.createElement("button",{onClick:this.pushDefault},"Add Default Algorithms")):r.a.createElement("div",null,"You have the default Algorithms")}}]),t}(n.Component),J=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey"},r.a.createElement("a",null,this.props.algID," ",this.props.name," ",this.props.moves," ",this.props.scramble," ",this.props.userID,r.a.createElement(M,{algID:this.props.algID}),r.a.createElement(H,{userID:this.props.userID})))))}}]),t}(n.Component),W=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getRequest=function(){g.a.get("/getAllAlgorithms").then(function(t){e.setState({algorithms:t.data})})},e.state={algorithms:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.algorithms.map(function(e){return r.a.createElement(J,{algID:e.algID,name:e.name,moves:e.moves,scramble:e.scramble,userID:e.userID})});return r.a.createElement("div",null,r.a.createElement("ul",{key:"myKey".concat(this.state.algID)},e),this.getRequest())}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(W,null))}}]),t}(n.Component),G=(a(58),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.check=function(e){e.preventDefault(),a.props.check(a.state.enteredusername,a.state.enteredpassword),console.log("Hey reached check")},a.state={enteredusername:"",enteredpassword:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.check,className:"form-inline"},r.a.createElement("label",{className:"required"}),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"enteredusername",target:"one",className:"form-control inputArea",onChange:this.setStates,enteredusername:this.state.enteredusername,id:"enteredusername",placeholder:"enteredusername *"}),r.a.createElement("input",{type:"text",name:"enteredpassword",target:"two",className:"form-control inputArea",onChange:this.setStates,enteredpassword:this.state.enteredpassword,id:"enteredpassword",placeholder:"enteredpassword *"})),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component)),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).makeTrue=function(){a.setState({loggedin:!0})},a.makeFalse=function(){a.setState({loggedin:!1})},a.acceptLogin=function(e){a.setState({accepted:e})},a.getRequest=function(){g.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.makeLoggedIn=function(){a.setState({loggedin:!0})},a.setStatus=function(){a.props.setStatus(a.state.status)},a.check=function(e,t){a.getRequest();for(var n=0;n<a.state.users.length;n++)console.log("user name"+a.state.users[n].userName+" entered"+e),a.state.users[n].userName===e&&a.state.users[n].userPassword===t?(a.makeTrue(),console.log("log in passed"),a.acceptLogin(),a.makeLoggedIn(),a.setState({currentUser:e}),a.setState({status:"Logged in as ".concat(a.state.currentUser)})):console.log("log in failed")},a.state={loggedin:!1,currentUser:"",users:[],accepted:!1,status:"Log In",loginselected:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.loggedin?this.state.loggedin?r.a.createElement("div",null,r.a.createElement("a",null,"Logged In as ",this.state.currentUser),r.a.createElement("button",{onClick:this.makeFalse},"Log Out"),r.a.createElement($,{status:this.state.status})):r.a.createElement("a",null,"not working"):r.a.createElement("div",null,r.a.createElement(G,{check:this.check}))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setStatus=function(e){a.setState({loginStatus:e})},a.state={loggedin:!1,loginStatus:"Log in"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(!this.state.loggedin)return r.a.createElement("div",null,r.a.createElement(d.a,{to:"/LoginPage"},this.state.loginStatus),r.a.createElement(p.a,{path:"/LoginPage",component:Y}))}}]),t}(n.Component);var z=function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{className:"logo",to:"/"},"George's PLL Trainer"),r.a.createElement("div",{className:"header-right"},r.a.createElement(d.a,{id:"home",to:"/"},"Home"),r.a.createElement(d.a,{to:"/UsersPage"},"Users"),r.a.createElement(d.a,{to:"/Trainer"},"Trainer"),r.a.createElement(d.a,{to:"/TimeLogPage"},"Times"),r.a.createElement(d.a,{to:"/AlgorithmsPage"},"Algorithms"),r.a.createElement($,null))),r.a.createElement(p.a,{exact:!0,path:"/",component:y}),r.a.createElement(p.a,{path:"/UsersPage",component:L}),r.a.createElement(p.a,{path:"/Trainer",component:U}),r.a.createElement(p.a,{path:"/TimeLogPage",component:F}),r.a.createElement(p.a,{path:"/AlgorithmsPage",component:B})))},Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={currentuserid:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.223913f7.chunk.js.map