import React, {Component} from 'react';
import Header from './Header.js';
import '../CSS/Style-main.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }

    Value_has_changed = (e) =>{
      this.setState({[e.target.name]: e.target.value})
    }
   
    //Login submited
    Form_submited = (e) => {
      e.preventDefault();
      this.check_validation(this.state.email, this.state.password);
      const jsonState = JSON.stringify(this.state);
    }

    //check inputs validation
    check_validation = (em, pass)=>{
      const val_em = document.getElementById("validate_log_email");
      const val_ps = document.getElementById("validate_log_pass");
      //hide error validation if inputs fill
      val_em.style.display = "none";
      val_ps.style.display = "none";

      if(em === "" && pass === ""){
          val_em.style.display = "block";
          val_ps.style.display = "block";
          setTimeout(()=>{val_em.style.opacity = "1";
                          val_ps.style.opacity = "1";
                         },200);
          
      }else if(em === ""){
        val_em.style.display = "block";
        setTimeout(()=>{val_em.style.opacity = "1";},200);

      }else if(pass === ""){
          val_ps.style.display = "block";
          setTimeout(()=>{val_ps.style.opacity = "1";},200);
          
      }else{
        //post login to api
         console.log(JSON.stringify(this.state));
      }
    }

    render(){
      const {email, password } = this.state;
     return(
        <div className="home-container">
         <Header />
         <div id="reg-form" className="login-form">
          <form onSubmit={ this.Form_submited }>
            
            <input id="em" className="input-form" type="text" name="email"    onChange={this.Value_has_changed} value={ email }    placeholder="Enter your email" /><br/>
            <div id="validate_log_email"><span>* please enter your email</span></div>
            
            <input id="ps" className="input-form" type="password" name="password" onChange={this.Value_has_changed} value={ password } placeholder="Enter your Password" /><br/>
            <div id="validate_log_pass"><span>* please enter your password</span></div>
            <button className="btn-login" type="submit">Log In</button> <br/>     
          </form>
         </div>
        </div>  
        )
    }
}

export default Login;