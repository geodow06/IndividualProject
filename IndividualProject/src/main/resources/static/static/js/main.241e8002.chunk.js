(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},58:function(e,t){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(25),l=a.n(r),c=(a(33),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),h=(a(8),a(63)),d=a(64),p=a(27),g=(n.Component,n.Component,a(7)),b=a.n(g),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){b.a.delete("/deleteUser/".concat(a.props.userID))},a.state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("a",null,s.a.createElement("button",{onClick:this.deleteRequest},"Delete User"))}}]),t}(n.Component),O=a(12),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).updateRequest=function(){b.a.put("/updateUser/".concat(a.state.newusername,"/").concat(a.state.newpassword,"/").concat(a.props.userID)),a.hideForm()},a.showForm=function(){a.setState({show:!0})},a.hideForm=function(){a.setState({show:!1})},a.setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A username was submitted: "+a.state.newusername),console.log("A password was submitted: "+a.state.newpassword),e.preventDefault()},a.state={show:!1,newusername:"",newpassword:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.show?s.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},s.a.createElement("label",{className:"required"},"* required "),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"newusername",target:"one",className:"form-control inputArea",onChange:this.setStates,newusername:this.state.newusername,id:"newusername",placeholder:"New Username *"}),s.a.createElement("input",{type:"text",name:"newpassword",target:"two",className:"form-control inputArea",onChange:this.setStates,newpassword:this.state.newpassword,id:"newpassword",placeholder:"New Password *"})),s.a.createElement("input",{type:"submit",value:"Submit",onClick:this.updateRequest})):s.a.createElement("button",{onClick:this.showForm},"Update User")}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("li",{key:"myKey".concat(this.props.userID)},s.a.createElement("a",null,this.props.userID," ",this.props.userName," ",this.props.userPassword," ",s.a.createElement(f,{userName:this.props.userName,userID:this.props.userID}),s.a.createElement(j,{userID:this.props.userID}))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){b.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.state={data:"",users:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.users.map(function(e){return s.a.createElement(E,{userID:e.userID,userName:e.userName,userPassword:e.userPassword})});return s.a.createElement("div",null,s.a.createElement("ul",{key:"myKey".concat(this.state.userID)},e),this.getRequest())}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){b.a.post("/addUser/".concat(a.state.username,"/").concat(a.state.password))},a.setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A username was submitted: "+a.state.username),console.log("A password was submitted: "+a.state.password),e.preventDefault()},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},s.a.createElement("label",{className:"required"},"* required "),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"username",target:"one",className:"form-control inputArea",onChange:this.setStates,username:this.state.username,id:"Username",placeholder:"Username *"}),s.a.createElement("input",{type:"text",name:"password",target:"two",className:"form-control inputArea",onChange:this.setStates,password:this.state.password,id:"Password",placeholder:"Password *"})),s.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Welcome"))}}]),t}(n.Component),w=(n.Component,n.Component,n.Component,a(53),a(16)),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addTime=function(){b.a.post("/addTimeLog/".concat(a.state.time,"/").concat(a.state.algID))},a.startTimer=function(){a.setState({isOn:!0,time:a.state.time,start:Date.now()-a.state.time}),a.timer=setInterval(function(){return a.setState({time:Date.now()-a.state.start})},1)},a.stopTimer=function(){a.setState({isOn:!1}),clearInterval(a.timer)},a.resetTimer=function(){a.setState({time:0,isOn:!1})},a.submitTime=function(){a.setState({currentTime:a.state.time}),console.log(a.state.currentTime),a.addTime()},a.state={time:0,isOn:!1,start:0,currentTime:null,algID:3},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0==this.state.time?s.a.createElement("button",{onClick:this.startTimer},"start"):null,t=0!=this.state.time&&this.state.isOn?s.a.createElement("button",{onClick:this.stopTimer},"stop"):null,a=0==this.state.time||this.state.isOn?null:s.a.createElement("button",{onClick:this.startTimer},"resume"),n=0==this.state.time||this.state.isOn?null:s.a.createElement("button",{onClick:this.resetTimer},"reset"),r=0==this.state.time||this.state.isOn?null:s.a.createElement("button",{onClick:this.submitTime},"submit time");return s.a.createElement("div",null,s.a.createElement("h3",null,"timer: ",w(this.state.time,{secDecimalDigits:4})),e,a,t,n,r)}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){b.a.delete("/deleteTimeLog/".concat(a.props.timeID))},a.state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("a",null,s.a.createElement("button",{onClick:this.deleteRequest},"Delete Time"))}}]),t}(n.Component),k=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},s.a.createElement("a",null,this.props.timeID," ",this.props.time," ",this.props.algFID," ",s.a.createElement(y,{timeID:this.props.timeID})))))}}]),t}(n.Component),C=a(16),A=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.time?s.a.createElement("div",null,s.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},s.a.createElement("a",null,C(parseInt(this.props.time),{secDecimalDigits:4})))):s.a.createElement("a",null,"try again")}}]),t}(n.Component),q=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){console.log("doing getuserAlgRequest"),console.log(a.props.userID+" User"),console.log(a.props.algID+" alg"),b.a.get("/getUserAlgTimes/".concat(a.props.userID,"/").concat(a.props.algID)).then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return s.a.createElement(A,{time:e.time})});return s.a.createElement("div",null,s.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component)),N=(n.Component,function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("li",{key:"aMyKey".concat(this.props.algID)},s.a.createElement("a",null," ",this.props.name," ",s.a.createElement(q,{userID:this.props.userID,name:this.props.name,algID:this.props.algID})))))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){b.a.get("/getUserAlgs/".concat(a.state.userID)).then(function(e){a.setState({algorithms:e.data})})},a.state={algorithms:[],userID:12},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.algorithms.map(function(e){return s.a.createElement(N,{name:e.name,algID:e.algID,userID:e.userID})});return s.a.createElement("div",null,e,this.getRequest())}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).startTraining=function(){a.setState({running:!0}),a.generateRandomScramble()},a.endTraining=function(){a.setState({running:!1})},a.generateRandomScramble=function(){b.a.get("/getRandomScramble/".concat(a.state.userID)).then(function(e){a.setState({scramble:e.data})})},a.state={userID:12,data:"",running:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.running?s.a.createElement("div",null,s.a.createElement("h1",null,this.state.scramble),s.a.createElement("button",{onClick:this.generateRandomScramble},"Next Scramble"),s.a.createElement(I,null),s.a.createElement(T,null),s.a.createElement("button",{onClick:this.endTraining},"Click to stop")):s.a.createElement("button",{onClick:this.startTraining},"Click to begin")}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={getid:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(U,null))}}]),t}(n.Component),L=(n.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){b.a.post("/addTimeLog/".concat(a.state.time,"/").concat(a.state.algFID))},a.setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A time was submitted: "+a.state.time),console.log("A alg ID was submitted: "+a.state.algFID),e.preventDefault()},a.state={time:"",algFID:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},s.a.createElement("label",{className:"required"},"* required "),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"time",target:"one",className:"form-control inputArea",onChange:this.setStates,time:this.state.time,id:"Time",placeholder:"Time *"}),s.a.createElement("input",{type:"text",name:"algFID",target:"two",className:"form-control inputArea",onChange:this.setStates,algFID:this.state.algFID,id:"AlgID",placeholder:"AlgID *"})),s.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component)),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){b.a.get("/getAllTimes").then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return s.a.createElement(k,{timeID:e.timeID,time:e.time,algFID:e.algID})});return s.a.createElement("div",null,s.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component),x=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(L,null),s.a.createElement(P,null))}}]),t}(n.Component),F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).pushRequest=function(){b.a.post("/addAlgorithm/".concat(e.state.algname,"/").concat(e.state.moves,"/").concat(e.state.scramble,"/").concat(e.state.userid))},e.setStates=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){console.log("A name was submitted: "+e.state.algname),console.log("A moves was submitted: "+e.state.moves),console.log("A scramble was submitted: "+e.state.scramble),console.log("A userID was submitted: "+e.state.userid),t.preventDefault()},e.state={algname:"",moves:"",scramble:"",userid:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},s.a.createElement("label",{className:"required"},"* required "),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"algname",target:"one",className:"form-control inputArea",onChange:this.setStates,algname:this.state.algname,id:"algname",placeholder:"algname *"}),s.a.createElement("input",{type:"text",name:"moves",target:"two",className:"form-control inputArea",onChange:this.setStates,moves:this.state.moves,id:"moves",placeholder:"Moves *"}),s.a.createElement("input",{type:"text",name:"scramble",target:"three",className:"form-control inputArea",onChange:this.setStates,scramble:this.state.scramble,id:"scramble",placeholder:"Scramble *"}),s.a.createElement("input",{type:"text",name:"userid",target:"four",className:"form-control inputArea",onChange:this.setStates,userid:this.state.userid,id:"userid",placeholder:"userid *"})),s.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){b.a.delete("/deleteAlgorithm/".concat(a.props.algID))},a.state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("a",null,s.a.createElement("button",{onClick:this.deleteRequest},"Delete Algorithm"))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).retractOffer=function(){a.setState({offerdefault:!1})},a.checkAlgs=function(){},a.pushDefault=function(){for(var e=0;e<a.state.defaultAlgorithms.length;e++)b.a.post("/addAlgorithm/".concat(a.state.defaultAlgorithms[e].name,"/").concat(a.state.defaultAlgorithms[e].moves,"/").concat(a.state.defaultAlgorithms[e].scramble,"/").concat(a.props.userID)),a.retractOffer()},a.state={offerdefault:!0,defaultAlgorithms:[{name:"J",moves:"U",scramble:"U'"},{name:"H",moves:"U",scramble:"U'"}],algorithms:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.offerdefault?s.a.createElement("div",null,s.a.createElement("button",{onClick:this.pushDefault},"Add Default Algorithms")):s.a.createElement("div",null,"You have the default Algorithms")}}]),t}(n.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("li",{key:"aMyKey"},s.a.createElement("a",null,this.props.algID," ",this.props.name," ",this.props.moves," ",this.props.scramble," ",this.props.userID,s.a.createElement(K,{algID:this.props.algID}),s.a.createElement(M,{userID:this.props.userID})))))}}]),t}(n.Component),J=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getRequest=function(){b.a.get("/getAllAlgorithms").then(function(t){e.setState({algorithms:t.data})})},e.state={algorithms:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.algorithms.map(function(e){return s.a.createElement(W,{algID:e.algID,name:e.name,moves:e.moves,scramble:e.scramble,userID:e.userID})});return s.a.createElement("div",null,s.a.createElement("ul",{key:"myKey".concat(this.state.algID)},e),this.getRequest())}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(F,null),s.a.createElement(J,null))}}]),t}(n.Component),H=(a(58),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).check=function(e){e.preventDefault(),a.getRequest();for(var t=0;t<a.state.users.length;t++)console.log("user name"+a.state.users[t].userName+" entered"+a.state.enteredusername),a.state.users[t].userName===a.state.enteredusername&&a.state.users[t].userPassword===a.state.enteredpassword?(a.setState({userid:a.state.users[t].userID}),a.setState({loginAccepted:!0}),a.props.setCurrentUser(a.state.userid,a.state.enteredusername,a.state.loginAccepted)):console.log("log in failed")},a.getRequest=function(){b.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.setStates=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.state={enteredusername:"",enteredpassword:"",users:[],userid:null,loginAccepted:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Welcome Please Sign In"),s.a.createElement("form",{onSubmit:this.check,className:"form-inline"},s.a.createElement("label",{className:"required"}),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"enteredusername",target:"one",className:"form-control inputArea",onChange:this.setStates,enteredusername:this.state.enteredusername,id:"enteredusername",placeholder:"enteredusername *"}),s.a.createElement("input",{type:"text",name:"enteredpassword",target:"two",className:"form-control inputArea",onChange:this.setStates,enteredpassword:this.state.enteredpassword,id:"enteredpassword",placeholder:"enteredpassword *"})),s.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component)),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).makeTrue=function(){a.setState({loggedin:!0})},a.makeFalse=function(){a.setState({loggedin:!1})},a.acceptLogin=function(e){a.setState({accepted:e})},a.getRequest=function(){b.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.makeLoggedIn=function(){a.setState({loggedin:!0})},a.setStatus=function(){a.props.setStatus(a.state.status)},a.check=function(e,t){a.getRequest();for(var n=0;n<a.state.users.length;n++)console.log("user name"+a.state.users[n].userName+" entered"+e),a.state.users[n].userName===e&&a.state.users[n].userPassword===t?(a.makeTrue(),console.log("log in passed"),a.acceptLogin(),a.makeLoggedIn(),a.setState({currentUser:e}),a.setState({status:"Logged in as ".concat(a.state.currentUser)})):console.log("log in failed")},a.state={loggedin:!1,currentUser:"",users:[],accepted:!1,status:"Log In",loginselected:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedin?this.state.loggedin?s.a.createElement("div",null,s.a.createElement("a",null,"Logged In as ",this.state.currentUser),s.a.createElement("button",{onClick:this.makeFalse},"Log Out"),s.a.createElement(Y,{status:this.state.status})):s.a.createElement("a",null,"not working"):s.a.createElement("div",null,s.a.createElement(H,{check:this.check}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setStatus=function(e){a.setState({loginStatus:e})},a.state={loggedin:!1,loginStatus:"Log in"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(!this.state.loggedin)return s.a.createElement("div",null,s.a.createElement(d.a,{to:"/LoginPage"},this.state.loginStatus),s.a.createElement(p.a,{path:"/LoginPage",component:G}))}}]),t}(n.Component);var $=function(e){return s.a.createElement(h.a,null,s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement(d.a,{className:"logo",to:"/"},"George's PLL Trainer: Welcome ",e.currentUsername),s.a.createElement("div",{className:"header-right"},s.a.createElement(d.a,{id:"home",to:"/"},"Home"),s.a.createElement(d.a,{to:"/Trainer"},"Trainer"),s.a.createElement(d.a,{to:"/TimeLogPage"},"Times"),s.a.createElement(d.a,{to:"/AlgorithmsPage"},"My Algorithms"))),s.a.createElement(p.a,{exact:!0,path:"/",component:S}),s.a.createElement(p.a,{path:"/Trainer",component:R}),s.a.createElement(p.a,{path:"/TimeLogPage",component:x}),s.a.createElement(p.a,{path:"/AlgorithmsPage",component:B})))},z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setCurrentUser=function(e,t,n){a.setState({currentUserID:e}),a.setState({loggedIn:n}),a.setState({currentUsername:t})},a.state={currentUserID:null,loggedIn:!1,currentUsername:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedIn?s.a.createElement("div",null,console.log("Tried to move to router"),s.a.createElement($,{currentUsername:this.state.currentUsername,currentUserID:this.state.currentUserID})):s.a.createElement(H,{setCurrentUser:this.setCurrentUser})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.241e8002.chunk.js.map