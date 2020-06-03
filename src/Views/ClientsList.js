import React, { Component } from 'react';
import Modal from './Modal.js';
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
    componentDidMount = () => { this.getCustInfo(); }
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
    
    //const cust_list_api_url = "http://localhost:8080/April_2020/Omarketing/api/messages/message.php";
    //const api_send_message =  "http://localhost:8080/April_2020/Omarketing/api/send-sms_update.php";

    const cust_list_api_url = "https://tchounangproject.com//April_2020/Omarketing/api/messages/message.php";
    const api_send_message =  "https://tchounangproject.com//April_2020/Omarketing/api/send-sms_update.php";

    //const original_url = ""; //own url so customer can rate
    //const from_share_url = ""; //if own entered an url
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
        alert ("Select only one customer "+ chck_checked.length); 
        return;
     }

    //transform chk_checked array in a string
    let chck_checked_string = chck_checked.join(",");

    //pass the string values to a javascript object   
    const obj_chck_checked = {
        'allcusts_ids': chck_checked_string
       }
        
        //post message
        // postMss = (js, ch) => {
        //     //let merge_obj = {...js, ...ch}
        //     const merge_obj = Object.assign(js, ch);
        //     axios.post(cust_list_api_url, JSON.stringify(merge_obj))
        //     .then((res) =>{
        //         //console.log(res.data.message)
        //         const mssResponse = res.data.message;
        //         this.setState({ mss_response: mssResponse });
        //         console.log(this.state.mss_response);
        //     })
        //     .catch((er) => console.log(er))
        // }

        

        //Check inputs to decide what to send
        if(this.state.share_url === "" && this.state.custom_mss === ""){
            this.setState({ share_url: "www.myBu.com" });
            this.setState({ custom_mss: "We appreciate your business with us. please click here to rate us" });

            share_url_to_use = "www.myBu.com";
            custom_mss_to_use = "We appreciate your business with us. Please click here to rate us";
            
            jsm = {
                'share_url': share_url_to_use,
                'custom_mss': custom_mss_to_use,
            } 
        }else if(this.state.share_url === "" && this.state.custom_mss !== ""){
            this.setState({ share_url: "www.myBu.com" })

            share_url_to_use = "www.myBu.com";
            jsm = {
                'share_url': share_url_to_use,
                'custom_mss': this.state.custom_mss,
            } 
        }else if(this.state.share_url !== "" && this.state.custom_mss === ""){ 
            this.setState({ custom_mss: "We appreciate your business with us. please click here to rate us" }); 

            custom_mss_to_use = "We appreciate your business with us. please click here to rate us";
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

        

        //Call function to send message (POST) to end point
        //postMss(jsm, obj_chck_checked);

        //post message
        let postMss = (js, ch) => {
            //let merge_obj = {...js, ...ch}
            const merge_obj = Object.assign(js, ch);
            //to save the message
            axios.post(cust_list_api_url, JSON.stringify(merge_obj))
            .then((res) =>{
                   console.log(res.data.message);
                // const mssResponse = res.data.message;
                // this.setState({ mss_response: mssResponse });
                // console.log(this.state.mss_response);
            })
            .catch((er) => console.log(er))

            //to send the message
            axios.post(api_send_message, JSON.stringify(merge_obj))
            .then((res) =>{
                    console.log(res.data);
                    let mssResponse = res.data.message;
                    this.setState({ mss_response: mssResponse });
                    console.log(this.state.mss_response);
            })
            .catch((er) => console.log(er))
        }

        //Call function to send message (POST) to end point
        postMss(jsm, obj_chck_checked);
        
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
              <p>{this.state.mss_response}</p>
              <input type="text" name="share_url" className="input-form" onChange={ this.mss_val_changed } value={ share_url } placeholder="share url" />
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