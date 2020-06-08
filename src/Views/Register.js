import React, {Component} from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Style-main.css';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            reg_fn:'',
            reg_ln:'',
            reg_email:'',
            reg_phone:'',
            register_mss:'',
        }
    }

    Value_has_changed = (e) =>{
      this.setState({[e.target.name]: e.target.value})
    }
   
    //Login submited
    Form_submited = (e) => {
      e.preventDefault();
      let val_return = this.check_validation(this.state.reg_fn, this.state.reg_ln, this.state.reg_email, this.state.reg_phone);
      const jsonState = JSON.stringify(this.state);
      //const register_url = "http://localhost:8080/April_2020/Omarketing/api/register/registration.php";
      const register_url = "https://tchounangproject.com//April_2020/Omarketing/api/register/registration.php";
      
      if(!val_return){
        console.log("cannot process registration");
        return
      }
      
      axios.post(register_url, jsonState)
      .then((res) => {
        console.log(res.data.message);
         let log_api_response = String(res.data.message);
         let trim_log_api_response = log_api_response.trim();
         //alert(trim_log_api_response);

         if(trim_log_api_response === "good"){
          this.setState({
              reg_fn:'',
              reg_ln:'',
              reg_email:'',
              reg_phone:'',
              register_mss: "Successful registration"
            });
          //display message only for 3 seconds
          const display_reg_mss = document.getElementById("p-mss-display");
          display_reg_mss.style.color = "green";
          display_reg_mss.style.transition = "1s ease";
          display_reg_mss.style.display = "block";
          setTimeout(()=>{
            display_reg_mss.style.display = "none";
          },3000);
          //window.location.assign("/clientslist"); //redirect to the clientslist component
         }else{
           this.setState({ register_mss: "Not registered" });
         }
      })
      .catch((error) => console.log(error))

    }

    //check inputs validation
    check_validation = (fn, ln, em, ph)=>{
      const val_fn = document.getElementById("validate_reg_fn");
      const val_ln = document.getElementById("validate_reg_ln");
      const val_em = document.getElementById("validate_reg_email");
      const val_ph = document.getElementById("validate_reg_phone");
      //hide error validation if inputs fill
      val_fn.style.display = "none";
      val_ln.style.display = "none";
      val_em.style.display = "none";
      val_ph.style.display = "none";

      let form_validity = false;

      //const ph_check = ph;

      if(fn === "" && ln === "" && em === "" && ph === ""){
          val_fn.style.display = "block";
          val_ln.style.display = "block";
          val_em.style.display = "block";
          val_ph.style.display = "block";
          setTimeout(()=>{val_fn.style.opacity = "1";
                          val_ln.style.opacity = "1";
                          val_em.style.opacity = "1";
                          val_ph.style.opacity = "1";
                         },200);
          
      }else if(fn === "" && ln === "" && em === ""){
        val_fn.style.display = "block";
        val_ln.style.display = "block";
        val_em.style.display = "block";
        setTimeout(()=>{val_fn.style.opacity = "1";
                        val_ln.style.opacity = "1";
                        val_em.style.opacity = "1";
                       },200);
      }else if(fn === "" && ln === "" && ph === ""){
        val_fn.style.display = "block";
        val_ln.style.display = "block";
        val_ph.style.display = "block";
        setTimeout(()=>{val_fn.style.opacity = "1";
                        val_ln.style.opacity = "1";
                        val_ph.style.opacity = "1";
                       },200);
      }else if(fn === "" && em === "" && ph === ""){
        val_fn.style.display = "block";
        val_ph.style.display = "block";
        val_em.style.display = "block";
        setTimeout(()=>{val_fn.style.opacity = "1";
                        val_ph.style.opacity = "1";
                        val_em.style.opacity = "1";
                       },200);
      }else if(fn === "" && ln === ""){
        val_fn.style.display = "block";
        val_ln.style.display = "block";
        setTimeout(()=>{val_fn.style.opacity = "1";
                        val_ln.style.opacity = "1";
                       },200);
      }else if(fn === "" && ph === ""){
        val_fn.style.display = "block";
        val_ph.style.display = "block";
        setTimeout(()=>{val_fn.style.opacity = "1";
                        val_ph.style.opacity = "1";
                       },200);
      }else if(fn === "" && em === ""){
        val_fn.style.display = "block";
        val_em.style.display = "block";
        setTimeout(()=>{val_fn.style.opacity = "1";
                        val_em.style.opacity = "1";
                       },200);
      }else if(ln === "" && em === "" && ph === ""){
        val_ln.style.display = "block";
        val_em.style.display = "block";
        val_ph.style.display = "block";
        setTimeout(()=>{
                        val_ln.style.opacity = "1";
                        val_em.style.opacity = "1";
                        val_ph.style.opacity = "1";
                       },200);
      }else if(ln === "" && em === ""){
        val_ln.style.display = "block";
        val_em.style.display = "block";
        setTimeout(()=>{
                        val_ln.style.opacity = "1";
                        val_em.style.opacity = "1";
                       },200);
      }else if(ln === "" && ph === ""){
        val_ln.style.display = "block";
        val_ph.style.display = "block";
        setTimeout(()=>{
                        val_ln.style.opacity = "1";
                        val_ph.style.opacity = "1";
                       },200);
      }else if(em === "" && ph === ""){
        val_em.style.display = "block";
        val_ph.style.display = "block";
        setTimeout(()=>{
                        val_em.style.opacity = "1";
                        val_ph.style.opacity = "1";
                       },200);
      }else if(fn === ""){
        val_em.style.display = "block";
        setTimeout(()=>{val_em.style.opacity = "1";},200);

      }else if(ln === ""){
          val_ln.style.display = "block";
          setTimeout(()=>{val_ln.style.opacity = "1";},200);
          
      }else if(em === ""){
        val_em.style.display = "block";
        setTimeout(()=>{val_em.style.opacity = "1";},200);

      }else if(ph === "" || isNaN(ph) || ph.toString().length < 10 || ph.toString().length > 10){
            val_ph.style.display = "block";
            setTimeout(()=>{val_ph.style.opacity = "1";},200);
          
      }else{
        //post login to api
         console.log(JSON.stringify(this.state));
         form_validity = true;
      }

      return form_validity;
    }

    render(){
      const {reg_fn, reg_ln, reg_email, reg_phone } = this.state;
     return(
      <div className="animate-bottom">
        <div className="home-container">
            <Header />
            <p id="p-mss-display" className="p-error-mss">{ this.state.register_mss }</p>
            <div id="reg-form" className="login-form">
            <form onSubmit={ this.Form_submited }>
                
                <input className="input-form" type="text" name="reg_fn"    onChange={this.Value_has_changed} value={ reg_fn }    placeholder="Enter your first name" /><br/>
                <div id="validate_reg_fn"><span>* please enter your first name</span></div>

                <input className="input-form" type="text" name="reg_ln"    onChange={this.Value_has_changed} value={ reg_ln }    placeholder="Enter your last name" /><br/>
                <div id="validate_reg_ln"><span>* please enter your last name</span></div>
                
                <input className="input-form" type="text" name="reg_email"    onChange={this.Value_has_changed} value={ reg_email }    placeholder="Enter your email" /><br/>
                <div id="validate_reg_email"><span>* please enter your email</span></div>
                
                <input className="input-form" type="text" name="reg_phone" onChange={this.Value_has_changed} value={ reg_phone } placeholder="Enter your phone number" /><br/>
                <div id="validate_reg_phone"><span>* please enter a valid phone number<br/>&nbsp; (e.g 1112223333)</span></div>

                <button className="btn-login" type="submit">Register</button> <br/>     
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

export default Register;