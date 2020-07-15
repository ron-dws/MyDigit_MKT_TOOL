import React, { Component } from 'react';
//import Modal from './Modal.js';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../CSS/Style-main.css';

class ClientsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            share_url: "",
            custom_mss: "",
            custs_data_fr_api:"",
            err_mess:"",
            mss_response:"",
        }
    }

    //Authenticate -> check if login, if not redirect to login
  

    //Retrieve customers info from the end points when the component load
    componentDidMount = () => { this.getCustInfo();}
    trackChange = ()=>{
        const url_send_or_not1 = document.querySelector(".cust_checkbox_mss");
        const inp_share_url = document.getElementById("inp_share_url");
        if(url_send_or_not1.checked){
            //make share_url input not usable
            inp_share_url.style.transition = "2s ease";
            inp_share_url.style.display = "none";
        }else{
            inp_share_url.style.transition = "2s ease";
            inp_share_url.style.display = "block";
        }    
    }
    getCustInfo = () =>{
        //use fetch to point to end point end get custs info
        //const custs_url = "http://localhost:8080/April_2020/Omarketing/api/customers/read.php";
        const custs_url = "https://tchounangproject.com/April_2020/Omarketing/api/customers/read.php";

        axios.get(custs_url)
        .then((res)=>{
           const data_custs = res.data;
           this.setState({ custs_data_fr_api: data_custs});
        })
        .catch(()=>{
          this.setState({ err_mess: "couldn't retrieve customers info"});
        });
        //convert response on javascript object

    }

    //display custs info
    displayCustsInfo = (custInfo) => {
        if(!custInfo.length) return null;

        const get_all_cust =  custInfo.map((val, index)=>(
                     <div key={index}>
                        <ul className="ul-cust-fn">
                            <Link to={ "/clientdetail/"+val.id }>
                               <li className="li-cust-fn-ln">{val.firstName} {val.lastName}</li>
                            </Link>
                            <li className="li-cust-send-mss">
                                <input type="checkbox" className="cust_checkbox" name="cust_checked" value={val.id +","+ val.phone}></input>
                            </li>
                        </ul>
                     </div>
        )); 
         
        return get_all_cust;
    }

    //Send Message
    sendMessage = (e)=>{
     e.preventDefault();
    
    const cust_list_api_url = "https://tchounangproject.com/April_2020/Omarketing/api/messages/message.php";
    const api_send_message =  "https://tchounangproject.com/April_2020/Omarketing/api/send-sms_update.php";
    //const cust_list_api_url = "http://localhost:8080/April_2020/Omarketing/api/messages/message.php";
    //const api_send_message =  "http://localhost:8080/April_2020/Omarketing/api/send-sms_update.php";

    //default url and message to share
    const default_business_url = "https://search.google.com/local/writereview?placeid=ChIJsZV77RxjOIgRPhM22X-3JWw";
    const default_message = "We appreciate your business with us. please click here to rate us";

    let jsm = {};
    let share_url_to_use ="";
    let custom_mss_to_use ="";
    
    //Get all values of all checkboxes checked
    let all_checkboxes = document.getElementsByName("cust_checked");
    let chck_checked = []; //array to hold values of all the checked ones
    for(let chk of all_checkboxes){
        if(chk.checked){
            //collect values (custs id) in an array
            chck_checked.push(chk.value);
        }
    } 

    //Check if at least one client was selected
    if(!(chck_checked.length > 0) || chck_checked.length > 1){ 
        alert ("Select only one customer -> "+ chck_checked.length + " selected "); 
        return;
     }

    //transform chk_checked array in a string
    let chck_checked_string = chck_checked.join("-"); // e.g "4,8998989-5,989898-1,89898989"
                                                      // chck_checked = []

    //pass the string values to a javascript object   
    const obj_chck_checked = {
        'allcusts_ids': chck_checked_string // e.g "allcusts_ids":"4,8998989-5,989898-1,89898989"
       }

        //Check inputs to decide what to send
        if(this.state.share_url === "" && this.state.custom_mss === ""){
            this.setState({ share_url: default_business_url  });
            this.setState({ custom_mss: default_message });

            share_url_to_use = default_business_url;
            custom_mss_to_use = default_message;
            
            jsm = {
                'share_url': share_url_to_use,
                'custom_mss': custom_mss_to_use,
            } 
        }else if(this.state.share_url === "" && this.state.custom_mss !== ""){
            this.setState({ share_url: default_business_url })

            share_url_to_use = default_business_url;
            jsm = {
                'share_url': share_url_to_use,
                'custom_mss': this.state.custom_mss,
            } 
        }else if(this.state.share_url !== "" && this.state.custom_mss === ""){ 
            this.setState({ custom_mss: default_message }); 

            custom_mss_to_use = default_message;
            jsm = {
                'share_url': this.state.share_url,
                'custom_mss': custom_mss_to_use,
            } 
        }else{
            jsm = {
                'share_url': this.state.share_url,
                'custom_mss': this.state.custom_mss
            } 
        }

        //post message
        let postMss = (js, ch) => {
            const merge_obj = Object.assign(js, ch);
            
            //to save the message
            axios.post(cust_list_api_url, JSON.stringify(merge_obj))
            .then((res) =>{
                   console.log(res.data.message);
            })
            .catch((er) => console.log(er))

            //to send the message
            /*
               ch
               this one should be run in a 1 periode interval, till the ch_arr array get empty

            */
            axios.post(api_send_message, JSON.stringify(merge_obj))
            .then((res) =>{
                console.log(res.data);
                let log_api_response = String(res.data.message);
                let trim_log_api_response = log_api_response.trim();
                //alert(trim_log_api_response);

                if(trim_log_api_response === "good"){
                this.setState({
                    mss_response: "Message sent successfuly"
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
                    this.setState({ mss_response: "Couldn't send the message" });
                    }
            })
            .catch((er) => console.log(er))
        }

        //Check if owner wants to send the url with the message
        const url_send_or_not = document.querySelector(".cust_checkbox_mss");
        let url_send_or_not_value = "";

        if(url_send_or_not.checked){
            url_send_or_not_value = "YES";
            this.setState({ share_url: "" })
            share_url_to_use = "";

            //Check if the owner entered a message
            if(this.state.custom_mss === ""){
             this.setState({ custom_mss: default_message }); 
             custom_mss_to_use = default_message;
              jsm = {
                'share_url': share_url_to_use,
                'custom_mss': custom_mss_to_use,
             }
            }else{
              jsm = {
                'share_url': share_url_to_use,
                'custom_mss': this.state.custom_mss,
                }
            }
            //Call function to send message (POST) to end point
            postMss(jsm, obj_chck_checked);

        }else{

            url_send_or_not_value = "NO";
            postMss(jsm, obj_chck_checked); //obj_chck_checked {}
        }
        
        console.log(url_send_or_not_value);   
    }

    //set new value(s) entered by the user
    mss_val_changed = (e)=> {
       this.setState({[e.target.name]:e.target.value});
    }
    
    render(){
        
        const {share_url, custom_mss} = this.state;
        return(
           <div className="animate-bottom"> 
            <div className="home-container">
              {/* <Modal /> */}
              <Header/>
              <p id="p-mss-display" className="p-error-mss">{ this.state.mss_response }</p>
              <p>
              <input type="checkbox" onChange={this.trackChange} className="cust_checkbox_mss" name="url_send_or_not_checked" value="nosend" /> 
              <span>&nbsp; &nbsp;Do not send Url</span>
              </p>           
              <input type="text" id="inp_share_url" name="share_url" className="input-form" onChange={ this.mss_val_changed } value={ share_url } placeholder="share url" />
              <textarea name="custom_mss" className="" onChange={ this.mss_val_changed } value={ custom_mss} placeholder="your message"/>
              <div id="style-3" className="cust-info-block" >
                  {this.displayCustsInfo(this.state.custs_data_fr_api)}
              </div>
              <button className="btn-login" type="button" onClick={this.sendMessage}>Send Message</button>
              <Link to="/">
                <button className="btn-login btn-logout" type="button">Log out</button>
              </Link>
            </div>
          </div>  
        );
    }
}

export default ClientsList;