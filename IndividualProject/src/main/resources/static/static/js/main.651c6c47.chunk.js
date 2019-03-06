(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){},29:function(e,t,a){e.exports=a(62)},34:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),c=a.n(s),l=(a(34),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),h=(a(8),a(63)),p=a(64),d=a(28),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome ",this.props.currentUsername," to my PLL Training companion."))}}]),t}(n.Component),b=a(7),f=a.n(b),O=(n.Component,n.Component,n.Component,a(54),a(17)),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addTime=function(){f.a.post("/addTimeLog/".concat(a.state.time,"/").concat(a.state.algID))},a.startTimer=function(){a.setState({isOn:!0,time:a.state.time,start:Date.now()-a.state.time}),a.timer=setInterval(function(){return a.setState({time:Date.now()-a.state.start})},1)},a.stopTimer=function(){a.setState({isOn:!1}),clearInterval(a.timer)},a.resetTimer=function(){a.setState({time:0,isOn:!1})},a.submitTime=function(){a.setState({currentTime:a.state.time}),console.log(a.state.currentTime),a.addTime()},a.state={time:0,isOn:!1,start:0,currentTime:null,algID:3},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0==this.state.time?r.a.createElement("button",{onClick:this.startTimer},"start"):null,t=0!=this.state.time&&this.state.isOn?r.a.createElement("button",{onClick:this.stopTimer},"stop"):null,a=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.startTimer},"resume"),n=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.resetTimer},"reset"),s=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.submitTime},"submit time");return r.a.createElement("div",null,r.a.createElement("h3",null,"timer: ",O(this.state.time,{secDecimalDigits:4})),e,a,t,n,s)}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){f.a.delete("/deleteTimeLog/".concat(a.props.timeID))},a.state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete Time"))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},r.a.createElement("a",null,"Time : ",this.props.time," ",this.props.algID," ",r.a.createElement(j,{timeID:this.props.timeID})))))}}]),t}(n.Component),w=a(17),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.time?r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},r.a.createElement("a",null,w(parseInt(this.props.time),{secDecimalDigits:4})))):r.a.createElement("a",null,"try again")}}]),t}(n.Component),U=(a(17),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){console.log("doing getuserAlgRequest"),console.log(a.props.currentUserID+" User id succesfully passed"),console.log(a.props.algID+" alg"),f.a.get("/getUserAlgTimes/".concat(a.props.currentUserID,"/").concat(a.props.algID)).then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return r.a.createElement(S,{time:e.time})});return r.a.createElement("div",null,r.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component)),I=(n.Component,function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.algID)},r.a.createElement("a",null," ",this.props.name," ",r.a.createElement(U,{currentUserID:this.props.currentUserID,name:this.props.name,algID:this.props.algID})))))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){f.a.get("/getUserAlgs/".concat(a.props.currentUserID)).then(function(e){a.setState({algorithms:e.data})})},a.state={algorithms:[],userID:12},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.algorithms.map(function(t){return r.a.createElement(I,{name:t.name,algID:t.algID,currentUserID:e.props.currentUserID})});return r.a.createElement("div",null,r.a.createElement("div",null,t),r.a.createElement("button",{onClick:this.getRequest},"Click to Show Algorithms and Times"))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).startTraining=function(){a.setState({running:!0}),a.generateRandomScramble()},a.endTraining=function(){a.setState({running:!1})},a.generateRandomScramble=function(){f.a.get("/getRandomScramble/".concat(a.props.currentUserID)).then(function(e){a.setState({scramble:e.data})})},a.state={userID:12,data:"",running:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.running?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{id:"randomScramble"},this.state.scramble),r.a.createElement("button",{onClick:this.generateRandomScramble},"Next Scramble")),r.a.createElement("div",{id:"timer"},r.a.createElement(E,{currentUserID:this.props.currentUserID})),r.a.createElement("button",{onClick:this.endTraining},"Click to stop"),r.a.createElement("div",{id:"timeBox"},r.a.createElement(D,{currentUserID:this.props.currentUserID}))):r.a.createElement("button",{onClick:this.startTraining},"Click to begin")}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={getid:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{currentUserID:this.props.currentUserID}))}}]),t}(n.Component),k=a(12),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).pushRequest=function(){f.a.post("/addUser/".concat(a.state.username,"/").concat(a.state.password)),a.props.signedUp()},a.setStates=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault()},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"username",target:"one",className:"form-control inputArea",onChange:this.setStates,username:this.state.username,id:"Username",placeholder:"Username *"}),r.a.createElement("input",{type:"text",name:"password",target:"two",className:"form-control inputArea",onChange:this.setStates,password:this.state.password,id:"Password",placeholder:"Password *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){f.a.delete("/deleteUser/".concat(a.props.userID))},a.state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete User"))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).updateRequest=function(){f.a.put("/updateUser/".concat(a.state.newusername,"/").concat(a.state.newpassword,"/").concat(a.props.userID)),a.hideForm()},a.showForm=function(){a.setState({show:!0})},a.hideForm=function(){a.setState({show:!1})},a.setStates=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A username was submitted: "+a.state.newusername),console.log("A password was submitted: "+a.state.newpassword),e.preventDefault()},a.state={show:!1,newusername:"",newpassword:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.show?r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"newusername",target:"one",className:"form-control inputArea",onChange:this.setStates,newusername:this.state.newusername,id:"newusername",placeholder:"New Username *"}),r.a.createElement("input",{type:"text",name:"newpassword",target:"two",className:"form-control inputArea",onChange:this.setStates,newpassword:this.state.newpassword,id:"newpassword",placeholder:"New Password *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.updateRequest})):r.a.createElement("button",{onClick:this.showForm},"Update User")}}]),t}(n.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("li",{key:"myKey".concat(this.props.userID)},r.a.createElement("a",null,this.props.userName," ",r.a.createElement(A,{userName:this.props.userName,userID:this.props.userID}),r.a.createElement(q,{userID:this.props.userID}))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){f.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.state={data:"",users:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.users.map(function(e){return r.a.createElement(R,{userID:e.userID,userName:e.userName,userPassword:e.userPassword})});return r.a.createElement("div",null,r.a.createElement("ul",{key:"myKey".concat(this.state.userID)},e),this.getRequest())}}]),t}(n.Component),P=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(T,null))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){f.a.get("/getAllTimes").then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return r.a.createElement(v,{timeID:e.timeID,time:e.time,algID:e.algID})});return r.a.createElement("div",null,r.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component),x=(n.Component,function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).pushRequest=function(){f.a.post("/addAlgorithm/".concat(e.state.algName,"/").concat(e.state.moves,"/").concat(e.state.scramble,"/").concat(e.props.currentUserID))},e.setStates=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e.state={algName:"",moves:"",scramble:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"algName",target:"one",className:"form-control inputArea",onChange:this.setStates,algName:this.state.algName,id:"algName",placeholder:"algName *"}),r.a.createElement("input",{type:"text",name:"moves",target:"two",className:"form-control inputArea",onChange:this.setStates,moves:this.state.moves,id:"moves",placeholder:"Moves *"}),r.a.createElement("input",{type:"text",name:"scramble",target:"three",className:"form-control inputArea",onChange:this.setStates,scramble:this.state.scramble,id:"scramble",placeholder:"Scramble *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).deleteRequest=function(){f.a.delete("/deleteAlgorithm/".concat(a.props.algID))},a.state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete"))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).retractOffer=function(){a.setState({offerdefault:!1})},a.checkAlgs=function(){},a.pushDefault=function(){for(var e=0;e<a.state.defaultAlgorithms.length;e++)f.a.post("/addAlgorithm/".concat(a.state.defaultAlgorithms[e].name,"/").concat(a.state.defaultAlgorithms[e].moves,"/").concat(a.state.defaultAlgorithms[e].scramble,"/").concat(a.props.currentUserID));a.retractOffer()},a.state={offerdefault:!0,defaultAlgorithms:[{name:"J",moves:"U",scramble:"U'"},{name:"H",moves:"U",scramble:"U'"}],algorithms:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.offerdefault?r.a.createElement("div",null,r.a.createElement("button",{onClick:this.pushDefault},"Add Default Algorithms")):r.a.createElement("div",null,"You have the default Algorithms")}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).updateRequest=function(){f.a.put("/updateAlgorithm/".concat(a.state.newName,"/").concat(a.state.newMoves,"/").concat(a.state.newScramble,"/").concat(a.props.algID)),a.hideForm()},a.showForm=function(){a.setState({show:!0})},a.hideForm=function(){a.setState({show:!1})},a.setStates=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault()},a.state={show:!1,newName:"",newMoves:"",newScramble:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.show?r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"newName",target:"one",className:"form-control inputArea",onChange:this.setStates,newName:this.state.newName,id:"newName",placeholder:"New Name *"}),r.a.createElement("input",{type:"text",name:"newMoves",target:"two",className:"form-control inputArea",onChange:this.setStates,newMoves:this.state.newMoves,id:"newMoves",placeholder:"New Moves *"}),r.a.createElement("input",{type:"text",name:"newScramble",target:"three",className:"form-control inputArea",onChange:this.setStates,newScramble:this.state.newScramble,id:"newScramble",placeholder:"New Scramble *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.updateRequest})):r.a.createElement("button",{onClick:this.showForm},"Update")}}]),t}(n.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey"},r.a.createElement("a",null,"Algorithm Name : ",this.props.name," Moves : ",this.props.moves," Scramble : ",this.props.scramble,r.a.createElement("a",null,r.a.createElement(M,{algID:this.props.algID})),r.a.createElement("a",null,r.a.createElement(K,{algID:this.props.algID}))))))}}]),t}(n.Component),H=(n.Component,function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getRequest=function(){f.a.get("/getUserAlgs/".concat(a.props.currentUserID)).then(function(e){a.setState({algorithms:e.data})})},a.state={algorithms:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.algorithms.map(function(t){return r.a.createElement(W,{algID:t.algID,name:t.name,moves:t.moves,scramble:t.scramble,currentUserID:e.props.currentUserID})});return r.a.createElement("div",null,r.a.createElement("div",null,t,r.a.createElement("button",{onClick:this.getRequest},"Press to display your algorithms")),r.a.createElement(F,{currentUserID:this.props.currentUserID}))}}]),t}(n.Component)),B=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,{currentUserID:this.props.currentUserID}),r.a.createElement(H,{currentUserID:this.props.currentUserID}))}}]),t}(n.Component),J=(a(25),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setCurrentUser=function(e){e.preventDefault(),f.a.get("/logInUser/".concat(a.state.enteredUsername,"/").concat(a.state.enteredPassword)).then(function(e){a.setState({user:e.data})}),a.setState({loginAccepted:!0}),console.log(a.state.user.userName),a.setState({enteredUsername:a.state.user.userName}),console.log(a.state.user.userID),a.setState({userid:a.state.user.userID}),console.log("user id ".concat(a.state.userid," username ").concat(a.state.enteredUsername)),a.props.setCurrentUser(a.state.userid,a.state.enteredUsername,a.state.loginAccepted)},a.setStates=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.signUp=function(){a.setState({register:!0})},a.signedUp=function(){a.setState({register:!1})},a.state={enteredUsername:"",enteredPassword:"",users:[],userid:null,loginAccepted:!1,register:!1,user:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.register?r.a.createElement(N,{signedUp:this.signedUp}):r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome Please Sign In"),r.a.createElement("form",{onSubmit:this.setCurrentUser,className:"form-inline"},r.a.createElement("label",{className:"required"}),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"enteredUsername",target:"one",className:"form-control inputArea",onChange:this.setStates,enteredUsername:this.state.enteredUsername,id:"enteredUsername",placeholder:"username *"}),r.a.createElement("input",{type:"text",name:"enteredPassword",target:"two",className:"form-control inputArea",onChange:this.setStates,enteredPassword:this.state.enteredPassword,id:"enteredPassword",placeholder:"password *"})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("button",{onClick:this.signUp},"Or Register An Account Here"))}}]),t}(n.Component)),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).makeTrue=function(){a.setState({loggedin:!0})},a.makeFalse=function(){a.setState({loggedin:!1})},a.acceptLogin=function(e){a.setState({accepted:e})},a.getRequest=function(){f.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.logInUser=function(e,t){f.a.get("/logInUser/".concat(e,"/").concat(t)).then(function(e){a.setState({logInResponse:e.data})})},a.makeLoggedIn=function(){a.setState({loggedin:!0})},a.setStatus=function(){a.props.setStatus(a.state.status)},a.check=function(e,t){a.getRequest();for(var n=0;n<a.state.users.length;n++)console.log("user name"+a.state.users[n].userName+" entered"+e),a.state.users[n].userName===e&&a.state.users[n].userPassword===t?(a.makeTrue(),console.log("log in passed"),a.acceptLogin(),a.makeLoggedIn(),a.setState({currentUser:e}),a.setState({status:"Logged in as ".concat(a.state.currentUser)})):console.log("log in failed")},a.state={loggedin:!1,currentUser:"",users:[],accepted:!1,status:"Log In",loginselected:!1,logInResponse:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedin?this.state.loggedin?r.a.createElement("div",null,r.a.createElement("a",null,"Logged In as ",this.state.currentUser),r.a.createElement("button",{onClick:this.makeFalse},"Log Out"),r.a.createElement(Y,{status:this.state.status})):r.a.createElement("a",null,"not working"):r.a.createElement("div",null,r.a.createElement(J,{check:this.check}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setStatus=function(e){a.setState({loginStatus:e})},a.state={loggedin:!1,loginStatus:"Log in"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(!this.state.loggedin)return r.a.createElement("div",null,r.a.createElement(p.a,{to:"/LoginPage"},this.state.loginStatus),r.a.createElement(d.a,{path:"/LoginPage",component:G}))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logOut=function(){a.props.logOut()},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(p.a,{className:"logo",to:"/"},"George's PLL Trainer: Welcome ",this.props.currentUsername),r.a.createElement("button",{onClick:this.logOut},"Logout"),r.a.createElement("div",{className:"header-right"},r.a.createElement(p.a,{id:"home",to:"/"},"Home"),r.a.createElement(p.a,{to:"/Trainer"},"Trainer"),r.a.createElement(p.a,{to:"/AlgorithmsPage"},"My Algorithms"))),r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{currentUsername:e.props.currentUsername})}}),r.a.createElement(d.a,{exact:!0,path:"/Trainer",render:function(){return r.a.createElement(y,{currentUserID:e.props.currentUserID})}}),r.a.createElement(d.a,{exact:!0,path:"/AlgorithmsPage",render:function(){return r.a.createElement(B,{currentUserID:e.props.currentUserID})}})))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logOut=function(){a.props.logOut()},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(p.a,{className:"logo",to:"/"},"George's PLL Trainer: Welcome ",this.props.currentUsername),r.a.createElement("button",{onClick:this.logOut},"Logout"),r.a.createElement("div",{className:"header-right"},r.a.createElement(p.a,{id:"home",to:"/"},"Home"),r.a.createElement(p.a,{to:"/UsersPage"},"Users"))),r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{currentUsername:e.props.currentUsername})}}),r.a.createElement(d.a,{path:"/UsersPage",component:P})))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setCurrentUser=function(e,t,n){a.setState({currentUserID:e}),a.setState({loggedIn:n}),a.setState({currentUsername:t})},a.logOut=function(){a.setState({loggedIn:!1})},a.state={currentUserID:null,loggedIn:!1,currentUsername:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedIn?"Admin"===this.state.currentUsername?r.a.createElement(z,{currentUsername:this.state.currentUsername,logOut:this.logOut}):r.a.createElement("div",null,console.log("".concat(this.state.currentUsername)),r.a.createElement($,{currentUsername:this.state.currentUsername,currentUserID:this.state.currentUserID,logOut:this.logOut})):r.a.createElement(J,{setCurrentUser:this.setCurrentUser})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.651c6c47.chunk.js.map