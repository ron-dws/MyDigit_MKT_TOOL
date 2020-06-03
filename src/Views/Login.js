import React, {Component} from 'react';
import Header from './Header.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/Style-main.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            wrong_log:'',
            log_success:false,
        }
    }

    //Check if already login, if so redirect to clientlist

    Value_has_changed = (e) =>{
      this.setState({[e.target.name]: e.target.value})
    }
   
    //Login submited
    Form_submited = (e) => {
      e.preventDefault();
      let val_return = this.check_validation(this.state.email, this.state.password);
      const jsonState = JSON.stringify(this.state);
     // const login_url = "http://localhost:8080/April_2020/Omarketing/api/login/login.php";
      const login_url = "https://tchounangproject.com/April_2020/Omarketing/api/login/login.php"

      //Check if the form validation has passed
      if(!val_return){
        console.log("cannot process login");
        return
      }

      //send data to endpoint
      axios.post(login_url, jsonState)
      .then((res)=>{ 
         console.log(res.data.login);

         if(res.data.login === "good"){
          //success login
          this.setState({log_success: true});
             //Cookie to validate login status
          window.location.assign("#/clientslist"); //redirect to the clientslist component
         }else{
           this.setState({ wrong_log: '* Your credential did not match' });
         }
      })
      .catch((er) => console.log(er))

    }

    //check inputs validation
    check_validation = (em, pass)=>{
      const val_em = document.getElementById("validate_log_email");
      const val_ps = document.getElementById("validate_log_pass");
      //hide error validation if inputs fill
      val_em.style.display = "none";
      val_ps.style.display = "none";

      let form_validity = false;

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

         form_validity = true;
      }

      return form_validity;
    }

    render(){
      const {email, password } = this.state;

          let log_status = '';
          if(this.state.log_success){
            log_status = "yes";
        }else{
        log_status = "no";
        }
     return(
      <div className="animate-bottom">
        <div className="home-container">
          <Header />
          <p>Login Status: {log_status}</p>
          <p className="p-error-mss">{ this.state.wrong_log }</p>
          <div id="reg-form" className="login-form">
            
            <form onSubmit={ this.Form_submited }>
              
              <input id="em" className="input-form" type="text" name="email"    onChange={this.Value_has_changed} value={ email }    placeholder="Enter your email" /><br/>
              <div id="validate_log_email"><span>* please enter your email</span></div>
              
              <input id="ps" className="input-form" type="password" name="password" onChange={this.Value_has_changed} value={ password } placeholder="Enter your Password" /><br/>
              <div id="validate_log_pass"><span>* please enter your password</span></div>
              <button className="btn-login" type="submit">Log In</button>    
            </form>
            
            <Link to="/">
              <button className="btn-login btn-nav" type="button">Home</button>
            </Link>
              
           </div>
          </div>  
        </div>
        )
    }
}

export default Login;