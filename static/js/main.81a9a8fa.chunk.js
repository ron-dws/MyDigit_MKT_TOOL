(this["webpackJsonpmkt-front"]=this["webpackJsonpmkt-front"]||[]).push([[0],{13:function(e,t,a){},34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(31),o=a.n(s),c=(a(39),a(3)),r=a(4),i=a(6),m=a(5),u=a(7),p=a(1);a(40),a(13);var d=function(e){return l.a.createElement("div",{className:"header-main"},l.a.createElement("img",{src:"./imgs/es_logo.png",alt:"east star wireless"}),l.a.createElement("h1",null,"East Start Wireless"))},y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={regiter_view:!1,letitre:"East Star Wireless"},n}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement(d,null),l.a.createElement(u.b,{to:"/register"},l.a.createElement("button",{className:"btn-register",name:"ordre"},"Resgister")),l.a.createElement(u.b,{to:"/login"},l.a.createElement("button",{className:"btn-login"},"Log In")))}}]),a}(n.Component),g=a(15),h=a(12),b=a.n(h),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).Value_has_changed=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.Form_submited=function(e){e.preventDefault();var t=n.check_validation(n.state.email,n.state.password),a=JSON.stringify(n.state);t?b.a.post("http://localhost:8080/April_2020/Omarketing/api/login/login.php",a).then((function(e){console.log(e.data.login),"good"===e.data.login?(n.setState({log_success:!0}),window.location.assign("/clientslist")):n.setState({wrong_log:"* Your credential did not match"})})).catch((function(e){return console.log(e)})):console.log("cannot process login")},n.check_validation=function(e,t){var a=document.getElementById("validate_log_email"),l=document.getElementById("validate_log_pass");a.style.display="none",l.style.display="none";var s=!1;return""===e&&""===t?(a.style.display="block",l.style.display="block",setTimeout((function(){a.style.opacity="1",l.style.opacity="1"}),200)):""===e?(a.style.display="block",setTimeout((function(){a.style.opacity="1"}),200)):""===t?(l.style.display="block",setTimeout((function(){l.style.opacity="1"}),200)):(console.log(JSON.stringify(n.state)),s=!0),s},n.state={email:"",password:"",wrong_log:"",log_success:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n="";return n=this.state.log_success?"yes":"no",l.a.createElement("div",{className:"home-container"},l.a.createElement(d,null),l.a.createElement("p",null,"Login Status: ",n),l.a.createElement("p",{className:"p-error-mss"},this.state.wrong_log),l.a.createElement("div",{id:"reg-form",className:"login-form"},l.a.createElement("form",{onSubmit:this.Form_submited},l.a.createElement("input",{id:"em",className:"input-form",type:"text",name:"email",onChange:this.Value_has_changed,value:t,placeholder:"Enter your email"}),l.a.createElement("br",null),l.a.createElement("div",{id:"validate_log_email"},l.a.createElement("span",null,"* please enter your email")),l.a.createElement("input",{id:"ps",className:"input-form",type:"password",name:"password",onChange:this.Value_has_changed,value:a,placeholder:"Enter your Password"}),l.a.createElement("br",null),l.a.createElement("div",{id:"validate_log_pass"},l.a.createElement("span",null,"* please enter your password")),l.a.createElement("button",{className:"btn-login",type:"submit"},"Log In")),l.a.createElement(u.b,{to:"/"},l.a.createElement("button",{className:"btn-login btn-nav",type:"button"},"Home"))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).Value_has_changed=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.Form_submited=function(e){e.preventDefault();var t=n.check_validation(n.state.reg_fn,n.state.reg_ln,n.state.reg_email,n.state.reg_phone),a=JSON.stringify(n.state);t?b.a.post("http://localhost:8080/April_2020/Omarketing/api/register/registration.php",a).then((function(e){console.log(e.data.message),"good"===e.data.message?n.setState({reg_fn:"",reg_ln:"",reg_email:"",reg_phone:"",register_mss:"successful registration"}):n.setState({register_mss:"not registered"})})).catch((function(e){return console.log(e)})):console.log("cannot process registration")},n.check_validation=function(e,t,a,l){var s=document.getElementById("validate_reg_fn"),o=document.getElementById("validate_reg_ln"),c=document.getElementById("validate_reg_email"),r=document.getElementById("validate_reg_phone");s.style.display="none",o.style.display="none",c.style.display="none",r.style.display="none";var i=!1;return""===e&&""===t&&""===a&&""===l?(s.style.display="block",o.style.display="block",c.style.display="block",r.style.display="block",setTimeout((function(){s.style.opacity="1",o.style.opacity="1",c.style.opacity="1",r.style.opacity="1"}),200)):""===e&&""===t&&""===a?(s.style.display="block",o.style.display="block",c.style.display="block",setTimeout((function(){s.style.opacity="1",o.style.opacity="1",c.style.opacity="1"}),200)):""===e&&""===t&&""===l?(s.style.display="block",o.style.display="block",r.style.display="block",setTimeout((function(){s.style.opacity="1",o.style.opacity="1",r.style.opacity="1"}),200)):""===e&&""===a&&""===l?(s.style.display="block",r.style.display="block",c.style.display="block",setTimeout((function(){s.style.opacity="1",r.style.opacity="1",c.style.opacity="1"}),200)):""===e&&""===t?(s.style.display="block",o.style.display="block",setTimeout((function(){s.style.opacity="1",o.style.opacity="1"}),200)):""===e&&""===l?(s.style.display="block",r.style.display="block",setTimeout((function(){s.style.opacity="1",r.style.opacity="1"}),200)):""===e&&""===a?(s.style.display="block",c.style.display="block",setTimeout((function(){s.style.opacity="1",c.style.opacity="1"}),200)):""===t&&""===a&&""===l?(o.style.display="block",c.style.display="block",r.style.display="block",setTimeout((function(){o.style.opacity="1",c.style.opacity="1",r.style.opacity="1"}),200)):""===t&&""===a?(o.style.display="block",c.style.display="block",setTimeout((function(){o.style.opacity="1",c.style.opacity="1"}),200)):""===t&&""===l?(o.style.display="block",r.style.display="block",setTimeout((function(){o.style.opacity="1",r.style.opacity="1"}),200)):""===a&&""===l?(c.style.display="block",r.style.display="block",setTimeout((function(){c.style.opacity="1",r.style.opacity="1"}),200)):""===e?(c.style.display="block",setTimeout((function(){c.style.opacity="1"}),200)):""===t?(o.style.display="block",setTimeout((function(){o.style.opacity="1"}),200)):""===a?(c.style.display="block",setTimeout((function(){c.style.opacity="1"}),200)):""===l||isNaN(l)||l.toString().length<10||l.toString().length>10?(r.style.display="block",setTimeout((function(){r.style.opacity="1"}),200)):(console.log(JSON.stringify(n.state)),i=!0),i},n.state={reg_fn:"",reg_ln:"",reg_email:"",reg_phone:"",register_mss:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.reg_fn,a=e.reg_ln,n=e.reg_email,s=e.reg_phone;return l.a.createElement("div",{className:"home-container"},l.a.createElement(d,null),l.a.createElement("p",{className:"p-error-mss"},this.state.register_mss),l.a.createElement("div",{id:"reg-form",className:"login-form"},l.a.createElement("form",{onSubmit:this.Form_submited},l.a.createElement("input",{className:"input-form",type:"text",name:"reg_fn",onChange:this.Value_has_changed,value:t,placeholder:"Enter your first name"}),l.a.createElement("br",null),l.a.createElement("div",{id:"validate_reg_fn"},l.a.createElement("span",null,"* please enter your first name")),l.a.createElement("input",{className:"input-form",type:"text",name:"reg_ln",onChange:this.Value_has_changed,value:a,placeholder:"Enter your last name"}),l.a.createElement("br",null),l.a.createElement("div",{id:"validate_reg_ln"},l.a.createElement("span",null,"* please enter your last name")),l.a.createElement("input",{className:"input-form",type:"text",name:"reg_email",onChange:this.Value_has_changed,value:n,placeholder:"Enter your email"}),l.a.createElement("br",null),l.a.createElement("div",{id:"validate_reg_email"},l.a.createElement("span",null,"* please enter your email")),l.a.createElement("input",{className:"input-form",type:"text",name:"reg_phone",onChange:this.Value_has_changed,value:s,placeholder:"Enter your phone number"}),l.a.createElement("br",null),l.a.createElement("div",{id:"validate_reg_phone"},l.a.createElement("span",null,"* please enter a valid phone number",l.a.createElement("br",null),"\xa0 (e.g 1112223333)")),l.a.createElement("button",{className:"btn-login",type:"submit"},"Register")," ",l.a.createElement("br",null)),l.a.createElement(u.b,{to:"/"},l.a.createElement("button",{className:"btn-login btn-nav",type:"button"},"Home"))))}}]),a}(n.Component),E=a(17),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).modal_triger=n.modal_triger.bind(Object(E.a)(n)),n}return Object(r.a)(a,[{key:"modal_triger",value:function(){var e=document.getElementById("myModal");e.style.display="block",document.getElementsByClassName("close")[0].onclick=function(){e.style.display="none"},window.onclick=function(t){t.target===e&&(e.style.display="none")}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{id:"myBtn",onClick:this.modal_triger},"Open Modal"),l.a.createElement("div",{id:"myModal",className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("span",{className:"close"},"\xd7"),l.a.createElement("h2",null,"Modal Header")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"Some text in the Modal Body"),l.a.createElement("p",null,"Some other text...")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("h3",null,"Modal Footer")))))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getCustDetail()},n.getCustDetail=function(){var e=n.props.match.params.value;b.a.get("http://localhost:8080/April_2020/Omarketing/api/customers/readSingle.php",{params:{id:e}}).then((function(e){var t=e.data;console.log(t),n.setState({cust_data_fr_api:t})})).catch((function(){n.setState({err_mess:"couldn't retrieve customers info"})}))},n.displayCustInfo=function(e){return e.length?e.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("ul",{className:"ul-cust-fn"},l.a.createElement(u.b,{to:"/"},l.a.createElement("li",{className:"li-cust-fn-ln"},e.firstName," ",e.lastName))))})):null},n.state={custId:"",err_mess:"",cust_data_fr_api:""},n}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement(d,null),l.a.createElement("ul",{className:"ul-cust-detail"},l.a.createElement("li",{className:"li-cust-detail"},"First Name: ",this.state.cust_data_fr_api.firstName),l.a.createElement("li",{className:"li-cust-detail"},"Last Name: ",this.state.cust_data_fr_api.lastName),l.a.createElement("li",{className:"li-cust-detail"},"Email: ",this.state.cust_data_fr_api.email),l.a.createElement("li",{className:"li-cust-detail"},"Phone: ",this.state.cust_data_fr_api.phoneNumber)),l.a.createElement(u.b,{to:"/clientslist"},l.a.createElement("button",{className:"btn-login",type:"button"},"Clients list")),l.a.createElement("button",{className:"btn-login btn-cust-detail",type:"button"},"Update"),l.a.createElement("button",{className:"btn-login btn-cust-detail",type:"button"},"Delete"),l.a.createElement(u.b,{to:"/"},l.a.createElement("button",{className:"btn-login btn-logout",type:"button"},"Log out")))}}]),a}(n.Component),N=a(33),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getCustInfo()},n.getCustInfo=function(){b.a.get("http://localhost:8080/April_2020/Omarketing/api/customers/read.php").then((function(e){var t=e.data;n.setState({custs_data_fr_api:t})})).catch((function(){n.setState({err_mess:"couldn't retrieve customers info"})}))},n.displayCustsInfo=function(e){return e.length?e.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("ul",{className:"ul-cust-fn"},l.a.createElement(u.b,{to:"/clientdetail/"+e.id},l.a.createElement("li",{className:"li-cust-fn-ln"},e.firstName," ",e.lastName)),l.a.createElement("li",{className:"li-cust-send-mss"},l.a.createElement("input",{type:"checkbox",className:"cust_checkbox",name:"cust_checked",value:e.id+","+e.phone}))))})):null},n.sendMessage=function(e){e.preventDefault();var t,a={},l="",s=document.getElementsByName("cust_checked"),o=[],c=Object(N.a)(s);try{for(c.s();!(t=c.n()).done;){var r=t.value;r.checked&&o.push(r.value)}}catch(m){c.e(m)}finally{c.f()}if(o.length>0&&!(o.length>1)){var i={allcusts_ids:o.join(",")};""===n.state.share_url&&""===n.state.custom_mss?(n.setState({share_url:"www.myBu.com"}),n.setState({custom_mss:"We appreciate your business with us. please click here to rate us"}),a={share_url:"www.myBu.com",custom_mss:l="We appreciate your business with us. Please click here to rate us"}):""===n.state.share_url&&""!==n.state.custom_mss?(n.setState({share_url:"www.myBu.com"}),a={share_url:"www.myBu.com",custom_mss:n.state.custom_mss}):""!==n.state.share_url&&""===n.state.custom_mss?(n.setState({custom_mss:"We appreciate your business with us. please click here to rate us"}),l="We appreciate your business with us. please click here to rate us",a={share_url:n.state.share_url,custom_mss:l}):a={share_url:n.state.share_url,custom_mss:n.state.custom_mss};!function(e,t){var a=Object.assign(e,t);b.a.post("http://localhost:8080/April_2020/Omarketing/api/messages/message.php",JSON.stringify(a)).then((function(e){console.log(e.data.message)})).catch((function(e){return console.log(e)})),b.a.post("http://localhost:8080/April_2020/Omarketing/api/send-sms_update.php",JSON.stringify(a)).then((function(e){console.log(e.data);var t=e.data.message;n.setState({mss_response:t}),console.log(n.state.mss_response)})).catch((function(e){return console.log(e)}))}(a,i)}else alert("Select only one customer "+o.length)},n.mss_val_changed=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.state={share_url:"",custom_mss:"",custs_data_fr_api:"",err_mess:"",mss_response:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.share_url,a=e.custom_mss;return l.a.createElement("div",{className:"home-container"},l.a.createElement(v,null),l.a.createElement(d,null),l.a.createElement("p",null,this.state.mss_response),l.a.createElement("input",{type:"text",name:"share_url",className:"input-form",onChange:this.mss_val_changed,value:t,placeholder:"share url"}),l.a.createElement("textarea",{name:"custom_mss",className:"",onChange:this.mss_val_changed,value:a,placeholder:"your message"}),l.a.createElement("div",{id:"style-3",className:"cust-info-block"},this.displayCustsInfo(this.state.custs_data_fr_api)),l.a.createElement("button",{className:"btn-login",type:"button",onClick:this.sendMessage},"Send Message"),l.a.createElement(u.b,{to:"/"},l.a.createElement("button",{className:"btn-login btn-logout",type:"button"},"Log out")))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement(d,null),l.a.createElement("div",null,this.props.match.params.value),l.a.createElement("button",{className:"btn-login",type:"button",onClick:this.sendMessage},"Send Message"),l.a.createElement(u.b,{to:"/"},l.a.createElement("button",{className:"btn-login btn-logout",type:"button"},"Log out")))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:y}),l.a.createElement(p.a,{path:"/login",component:_}),l.a.createElement(p.a,{path:"/register",component:f}),l.a.createElement(p.a,{path:"/modal",component:v}),l.a.createElement(p.a,{path:"/clientslist",component:O}),l.a.createElement(p.a,{path:"/clientdetail/:value",component:k}),l.a.createElement(p.a,{path:"/test/:value",component:w}),l.a.createElement(p.a,{path:"/logout",component:j}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.81a9a8fa.chunk.js.map