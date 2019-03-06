(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},61:function(e,t){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),l=(a(33),a(11)),o=a(1),i=a(2),u=a(4),m=a(3),h=a(5),d=(a(8),a(63)),p=a(64),g=a(27),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome ",this.props.currentUsername," to my PLL Training companion."))}}]),t}(n.Component),f=a(7),O=a.n(f),E=(n.Component,n.Component,n.Component,a(53),a(17)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).addTime=function(){O.a.post("/addTimeLog/".concat(a.state.time,"/").concat(a.state.algID))},a.startTimer=function(){a.setState({isOn:!0,time:a.state.time,start:Date.now()-a.state.time}),a.timer=setInterval(function(){return a.setState({time:Date.now()-a.state.start})},1)},a.stopTimer=function(){a.setState({isOn:!1}),clearInterval(a.timer)},a.resetTimer=function(){a.setState({time:0,isOn:!1})},a.submitTime=function(){a.setState({currentTime:a.state.time}),console.log(a.state.currentTime),a.addTime()},a.state={time:0,isOn:!1,start:0,currentTime:null,algID:3},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0==this.state.time?r.a.createElement("button",{onClick:this.startTimer},"start"):null,t=0!=this.state.time&&this.state.isOn?r.a.createElement("button",{onClick:this.stopTimer},"stop"):null,a=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.startTimer},"resume"),n=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.resetTimer},"reset"),s=0==this.state.time||this.state.isOn?null:r.a.createElement("button",{onClick:this.submitTime},"submit time");return r.a.createElement("div",null,r.a.createElement("h3",null,"timer: ",E(this.state.time,{secDecimalDigits:4})),e,a,t,n,s)}}]),t}(n.Component),v=a(17),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.time?r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},r.a.createElement("a",null,v(parseInt(this.props.time),{secDecimalDigits:4})))):r.a.createElement("a",null,"try again")}}]),t}(n.Component),w=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getRequest=function(){console.log("doing getuserAlgRequest"),console.log(a.props.currentUserID+" User id succesfully passed"),console.log(a.props.algID+" alg"),O.a.get("/getUserAlgTimes/".concat(a.props.currentUserID,"/").concat(a.props.algID)).then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return r.a.createElement(S,{time:e.time})});return r.a.createElement("div",null,r.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component)),U=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.algID)},r.a.createElement("a",null," ",this.props.name," ",r.a.createElement(w,{currentUserID:this.props.currentUserID,name:this.props.name,algID:this.props.algID})))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getRequest=function(){O.a.get("/getUserAlgs/".concat(a.props.currentUserID)).then(function(e){a.setState({algorithms:e.data})})},a.state={algorithms:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.algorithms.map(function(t){return r.a.createElement(U,{name:t.name,algID:t.algID,currentUserID:e.props.currentUserID})});return r.a.createElement("div",null,r.a.createElement("div",null,t),r.a.createElement("button",{onClick:this.getRequest},"Click to Show Algorithms and Times"))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).startTraining=function(){a.setState({running:!0}),a.generateRandomScramble()},a.endTraining=function(){a.setState({running:!1})},a.generateRandomScramble=function(){O.a.get("/getRandomScramble/".concat(a.props.currentUserID)).then(function(e){a.setState({scramble:e.data})})},a.state={userID:"",data:"",running:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.running?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{id:"randomScramble"},this.state.scramble),r.a.createElement("button",{onClick:this.generateRandomScramble},"Next Scramble")),r.a.createElement("div",{id:"timer"},r.a.createElement(j,{currentUserID:this.props.currentUserID})),r.a.createElement("div",{id:"timeBox"},r.a.createElement(I,{currentUserID:this.props.currentUserID})),r.a.createElement("button",{onClick:this.endTraining},"Click to stop")):r.a.createElement("button",{onClick:this.startTraining},"Click to begin")}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={getid:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,{currentUserID:this.props.currentUserID}))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).pushRequest=function(){O.a.post("/addAlgorithm/".concat(e.state.algName,"/").concat(e.state.moves,"/").concat(e.state.scramble,"/").concat(e.props.currentUserID))},e.setStates=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e.state={algName:"",moves:"",scramble:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"algName",target:"one",className:"form-control inputArea",onChange:this.setStates,algName:this.state.algName,id:"algName",placeholder:"algName *"}),r.a.createElement("input",{type:"text",name:"moves",target:"two",className:"form-control inputArea",onChange:this.setStates,moves:this.state.moves,id:"moves",placeholder:"Moves *"}),r.a.createElement("input",{type:"text",name:"scramble",target:"three",className:"form-control inputArea",onChange:this.setStates,scramble:this.state.scramble,id:"scramble",placeholder:"Scramble *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).retractOffer=function(){a.setState({offerdefault:!1})},a.checkAlgs=function(){},a.pushDefault=function(){for(var e=0;e<a.state.defaultAlgorithms.length;e++)O.a.post("/addAlgorithm/".concat(a.state.defaultAlgorithms[e].name,"/").concat(a.state.defaultAlgorithms[e].moves,"/").concat(a.state.defaultAlgorithms[e].scramble,"/").concat(a.props.currentUserID));a.retractOffer()},a.state={offerdefault:!0,defaultAlgorithms:[{name:"J",moves:"U",scramble:"U'"},{name:"H",moves:"U",scramble:"U'"}],algorithms:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.offerdefault?r.a.createElement("div",null,r.a.createElement("button",{onClick:this.pushDefault},"Add Default Algorithms")):r.a.createElement("div",null,"You have the default Algorithms")}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).deleteRequest=function(){O.a.delete("/deleteAlgorithm/".concat(a.props.algID))},a.state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete"))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateRequest=function(){O.a.put("/updateAlgorithm/".concat(a.state.newName,"/").concat(a.state.newMoves,"/").concat(a.state.newScramble,"/").concat(a.props.algID)),a.hideForm()},a.showForm=function(){a.setState({show:!0})},a.hideForm=function(){a.setState({show:!1})},a.setStates=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault()},a.state={show:!1,newName:"",newMoves:"",newScramble:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.show?r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"newName",target:"one",className:"form-control inputArea",onChange:this.setStates,newName:this.state.newName,id:"newName",placeholder:"New Name *"}),r.a.createElement("input",{type:"text",name:"newMoves",target:"two",className:"form-control inputArea",onChange:this.setStates,newMoves:this.state.newMoves,id:"newMoves",placeholder:"New Moves *"}),r.a.createElement("input",{type:"text",name:"newScramble",target:"three",className:"form-control inputArea",onChange:this.setStates,newScramble:this.state.newScramble,id:"newScramble",placeholder:"New Scramble *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.updateRequest})):r.a.createElement("button",{onClick:this.showForm},"Update")}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey"},r.a.createElement("a",null,"Algorithm Name : ",this.props.name," Moves : ",this.props.moves," Scramble : ",this.props.scramble,r.a.createElement("a",null,r.a.createElement(N,{algID:this.props.algID})),r.a.createElement("a",null,r.a.createElement(A,{algID:this.props.algID}))))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getRequest=function(){O.a.get("/getUserAlgs/".concat(a.props.currentUserID)).then(function(e){a.setState({algorithms:e.data})})},a.state={algorithms:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.algorithms.map(function(t){return r.a.createElement(R,{algID:t.algID,name:t.name,moves:t.moves,scramble:t.scramble,currentUserID:e.props.currentUserID})});return r.a.createElement("div",null,r.a.createElement("div",null,t,r.a.createElement("button",{onClick:this.getRequest},"Press to display your algorithms")),r.a.createElement(k,{currentUserID:this.props.currentUserID}))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{currentUserID:this.props.currentUserID}),r.a.createElement(q,{currentUserID:this.props.currentUserID}))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).logOut=function(){a.props.logOut()},a.state={username:"",password:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(p.a,{className:"logo",to:"/"},"George's PLL Trainer: Welcome ",this.props.currentUsername),r.a.createElement("button",{onClick:this.logOut},"Logout"),r.a.createElement("div",{className:"header-right"},r.a.createElement(p.a,{id:"home",to:"/"},"Home"),r.a.createElement(p.a,{to:"/Trainer"},"Trainer"),r.a.createElement(p.a,{to:"/AlgorithmsPage"},"My Algorithms"))),r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(b,{currentUsername:e.props.currentUsername})}}),r.a.createElement(g.a,{exact:!0,path:"/Trainer",render:function(){return r.a.createElement(y,{currentUserID:e.props.currentUserID})}}),r.a.createElement(g.a,{exact:!0,path:"/AlgorithmsPage",render:function(){return r.a.createElement(T,{currentUserID:e.props.currentUserID})}})))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).pushRequest=function(){O.a.post("/addUser/".concat(a.state.username,"/").concat(a.state.password)).then(function(e){a.setState({requestResponse:e.data})}),a.props.signedUp(a.state.requestResponse,a.state.username)},a.setStates=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault()},a.state={username:"",password:"",requestResponse:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"username",target:"one",className:"form-control inputArea",onChange:this.setStates,username:this.state.username,id:"Username",placeholder:"Username *"}),r.a.createElement("input",{type:"text",name:"password",target:"two",className:"form-control inputArea",onChange:this.setStates,password:this.state.password,id:"Password",placeholder:"Password *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.pushRequest})))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setCurrentUser=function(e){e.preventDefault(),a.getRequest(),a.setState({loginAccepted:!0,usernameToSend:a.state.user.userName,userIDToSend:a.state.userID}),console.log(a.state.user.userName),console.log(a.state.usernameToSend),console.log(a.state.user.userID),console.log(a.state.userIDToSend),console.log("user id ".concat(a.state.userIDToSend," username ").concat(a.state.usernameToSend)),a.props.setCurrentUser(a.state.userIDToSend,a.state.usernameToSend,a.state.loginAccepted)},a.getRequest=function(){O.a.get("/logInUser/".concat(a.state.enteredUsername,"/").concat(a.state.enteredPassword)).then(function(e){a.setState({user:e.data})})},a.setStates=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.signUp=function(){a.setState({register:!0})},a.signedUp=function(e,t){e==="User "+t+" succesfully added."?a.setState({register:!1}):a.setState({displayedResponse:e})},a.state={enteredUsername:"",enteredPassword:"",users:[],userid:null,loginAccepted:!1,register:!1,user:[],displayedResponse:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.register?r.a.createElement("div",null,r.a.createElement(x,{signedUp:this.signedUp}),r.a.createElement("a",null,this.state.displayedResponse)):r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome Please Sign In"),r.a.createElement("form",{onSubmit:this.setCurrentUser,className:"form-inline"},r.a.createElement("label",{className:"required"}),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"enteredUsername",target:"one",className:"form-control inputArea",onChange:this.setStates,enteredUsername:this.state.enteredUsername,id:"enteredUsername",placeholder:"username *"}),r.a.createElement("input",{type:"text",name:"enteredPassword",target:"two",className:"form-control inputArea",onChange:this.setStates,enteredPassword:this.state.enteredPassword,id:"enteredPassword",placeholder:"password *"})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("button",{onClick:this.signUp},"Or Register An Account Here"))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).deleteRequest=function(){O.a.delete("/deleteUser/".concat(a.props.userID))},a.state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete User"))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateRequest=function(){O.a.put("/updateUser/".concat(a.state.newusername,"/").concat(a.state.newpassword,"/").concat(a.props.userID)),a.hideForm()},a.showForm=function(){a.setState({show:!0})},a.hideForm=function(){a.setState({show:!1})},a.setStates=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("A username was submitted: "+a.state.newusername),console.log("A password was submitted: "+a.state.newpassword),e.preventDefault()},a.state={show:!1,newusername:"",newpassword:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.show?r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline"},r.a.createElement("label",{className:"required"},"* required "),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"newusername",target:"one",className:"form-control inputArea",onChange:this.setStates,newusername:this.state.newusername,id:"newusername",placeholder:"New Username *"}),r.a.createElement("input",{type:"text",name:"newpassword",target:"two",className:"form-control inputArea",onChange:this.setStates,newpassword:this.state.newpassword,id:"newpassword",placeholder:"New Password *"})),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.updateRequest})):r.a.createElement("button",{onClick:this.showForm},"Update User")}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("li",{key:"myKey".concat(this.props.userID)},r.a.createElement("a",null,this.props.userName," ",r.a.createElement(M,{userName:this.props.userName,userID:this.props.userID}),r.a.createElement(F,{userID:this.props.userID}))))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getRequest=function(){O.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.state={data:"",users:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.users.map(function(e){return r.a.createElement(W,{userID:e.userID,userName:e.userName,userPassword:e.userPassword})});return r.a.createElement("div",null,r.a.createElement("ul",{key:"myKey".concat(this.state.userID)},e),this.getRequest())}}]),t}(n.Component),H=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(K,null))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).deleteRequest=function(){O.a.delete("/deleteTimeLog/".concat(a.props.timeID))},a.state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",null,r.a.createElement("button",{onClick:this.deleteRequest},"Delete Time"))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("li",{key:"aMyKey".concat(this.props.timeID)},r.a.createElement("a",null,"Time : ",this.props.time," ",this.props.algID," ",r.a.createElement(B,{timeID:this.props.timeID})))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getRequest=function(){O.a.get("/getAllTimes").then(function(e){a.setState({times:e.data})})},a.state={times:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.times.map(function(e){return r.a.createElement(J,{timeID:e.timeID,time:e.time,algID:e.algID})});return r.a.createElement("div",null,r.a.createElement("ul",null,e),this.getRequest())}}]),t}(n.Component),Y=(n.Component,a(61),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).makeTrue=function(){a.setState({loggedin:!0})},a.makeFalse=function(){a.setState({loggedin:!1})},a.acceptLogin=function(e){a.setState({accepted:e})},a.getRequest=function(){O.a.get("/getAllUsers").then(function(e){a.setState({users:e.data})})},a.logInUser=function(e,t){O.a.get("/logInUser/".concat(e,"/").concat(t)).then(function(e){a.setState({logInResponse:e.data})})},a.makeLoggedIn=function(){a.setState({loggedin:!0})},a.setStatus=function(){a.props.setStatus(a.state.status)},a.check=function(e,t){a.getRequest();for(var n=0;n<a.state.users.length;n++)console.log("user name"+a.state.users[n].userName+" entered"+e),a.state.users[n].userName===e&&a.state.users[n].userPassword===t?(a.makeTrue(),console.log("log in passed"),a.acceptLogin(),a.makeLoggedIn(),a.setState({currentUser:e}),a.setState({status:"Logged in as ".concat(a.state.currentUser)})):console.log("log in failed")},a.state={loggedin:!1,currentUser:"",users:[],accepted:!1,status:"Log In",loginselected:!1,logInResponse:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedin?this.state.loggedin?r.a.createElement("div",null,r.a.createElement("a",null,"Logged In as ",this.state.currentUser),r.a.createElement("button",{onClick:this.makeFalse},"Log Out"),r.a.createElement($,{status:this.state.status})):r.a.createElement("a",null,"not working"):r.a.createElement("div",null,r.a.createElement(L,{check:this.check}))}}]),t}(n.Component)),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setStatus=function(e){a.setState({loginStatus:e})},a.state={loggedin:!1,loginStatus:"Log in"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(!this.state.loggedin)return r.a.createElement("div",null,r.a.createElement(p.a,{to:"/LoginPage"},this.state.loginStatus),r.a.createElement(g.a,{path:"/LoginPage",component:Y}))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).logOut=function(){a.props.logOut()},a.state={username:"",password:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(p.a,{className:"logo",to:"/"},"George's PLL Trainer: Welcome ",this.props.currentUsername),r.a.createElement("button",{onClick:this.logOut},"Logout"),r.a.createElement("div",{className:"header-right"},r.a.createElement(p.a,{id:"home",to:"/"},"Home"),r.a.createElement(p.a,{to:"/UsersPage"},"Users"))),r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(b,{currentUsername:e.props.currentUsername})}}),r.a.createElement(g.a,{path:"/UsersPage",component:H})))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setCurrentUser=function(e){e.preventDefault(),a.getRequest(),a.setState({loggedIn:!0,currentUsername:a.state.user.userName,currentUserID:a.state.user.userID}),console.log(a.state.user.userName),console.log(a.state.currentUsername),console.log(a.state.user.userID),console.log(a.state.currentUserID),console.log("user id ".concat(a.state.currentUserID," username ").concat(a.state.currentUsername))},a.getRequest=function(){console.log("user id ".concat(a.state.enteredUsername," username ").concat(a.state.enteredPassword)),O.a.get("/logInUser/".concat(a.state.enteredUsername,"/").concat(a.state.enteredPassword)).then(function(e){a.setState({user:e.data})})},a.setStates=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.logOut=function(){a.setState({loggedIn:!1})},a.state={currentUserID:null,loggedIn:!1,currentUsername:null,enteredUsername:"",enteredPassword:"",users:[],userid:null,loginAccepted:!1,register:!1,user:[],displayedResponse:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loggedIn?"Admin"===this.state.currentUsername?r.a.createElement(z,{currentUsername:this.state.currentUsername,logOut:this.logOut}):r.a.createElement("div",null,r.a.createElement(P,{currentUsername:this.state.currentUsername,currentUserID:this.state.currentUserID,logOut:this.logOut})):r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome Please Sign In"),r.a.createElement("form",{onSubmit:this.setCurrentUser,className:"form-inline"},r.a.createElement("label",{className:"required"}),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"enteredUsername",target:"one",className:"form-control inputArea",onChange:this.setStates,enteredUsername:this.state.enteredUsername,id:"enteredUsername",placeholder:"username *"}),r.a.createElement("input",{type:"text",name:"enteredPassword",target:"two",className:"form-control inputArea",onChange:this.setStates,enteredPassword:this.state.enteredPassword,id:"enteredPassword",placeholder:"password *"})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("button",{onClick:this.signUp},"Or Register An Account Here"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.07402057.chunk.js.map