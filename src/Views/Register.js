import React, {Component} from 'react';
import Header from './Header.js';
import '../CSS/Style-main.css';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            reg_fn:'',
            reg_ln:'',
            reg_email:'',
            reg_phone:'',
        }
    }

    Value_has_changed = (e) =>{
      this.setState({[e.target.name]: e.target.value})
    }
   
    //Login submited
    Form_submited = (e) => {
      e.preventDefault();
      this.check_validation(this.state.reg_fn, this.state.reg_ln, this.state.reg_email, this.state.reg_phone);
      const jsonState = JSON.stringify(this.state);
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

      const ph_check = ph;

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
          val_ph.style.display = "block";
          setTimeout(()=>{val_ph.style.opacity = "1";},200);
          
      }else if(em === ""){
        val_em.style.display = "block";
        setTimeout(()=>{val_em.style.opacity = "1";},200);

      }else if(ph === "" || isNaN(ph) || ph.toString().length < 9 || ph.toString().length > 9){
            val_ph.style.display = "block";
            setTimeout(()=>{val_ph.style.opacity = "1";},200);
          
      }else{
        //post login to api
         console.log(JSON.stringify(this.state));
      }
    }

    render(){
      const {reg_fn, reg_ln, reg_email, reg_phone } = this.state;
     return(
        <div className="home-container">
            <Header />
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
            </div> 
          </div> 
        )
    }
}

export default Register;