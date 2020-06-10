import React, { Component } from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Style-main.css';


class ClientDetail extends Component {
    constructor(props){
           super(props)
           this.state = {
               custId:"",
               err_mess:"",
               response_mss:"",
               cust_data_fr_api:{ firstName:"first name", lastName:"last name", email:"email", phoneNumber:"phone number"},
           }
    }

    /*Authenticate -> check if login, if not redirect to login
                   -> if yes continue*/
    componentDidMount = () => { this.getCustDetail() }

    //get cust detail info
    getCustDetail = () =>{
        //hide all inputs
        const new_fn = document.getElementById("fn");
        const new_ln = document.getElementById("ln");
        const new_phone = document.getElementById("ph");
        const new_email = document.getElementById("em");
        const ul_send = document.getElementById("ul_send_update");

        new_fn.style.display = "none";
        new_ln.style.display = "none";
        new_phone.style.display = "none";
        new_email.style.display = "none";
        ul_send.style.display = "none";

        //Point to api and retrieve the customer info
        const custId = this.props.match.params.value;
        //const cust_detail_url = "http://localhost:8080/April_2020/Omarketing/api/customers/readSingle.php";
        const cust_detail_url = "https://tchounangproject.com/April_2020/Omarketing/api/customers/readSingle.php";
        
        axios.get(cust_detail_url, {
            params: {
                id: custId
            }
        })
        .then((res)=>{
           const data_cust = res.data;
           console.log(data_cust);
           this.setState({ cust_data_fr_api: data_cust});
        })
        .catch(()=>{
          this.setState({ err_mess: "couldn't retrieve customers info"});
        });
    }

    Value_has_changed = (e) =>{
      const new_fn = document.getElementById("fn").value;
      const new_ln = document.getElementById("ln").value;
      const new_phone = document.getElementById("ph").value;
      const new_email = document.getElementById("em").value;
      this.setState(Object.assign(this.state.cust_data_fr_api, {firstName: new_fn, lastName: new_ln, email: new_email, phoneNumber: new_phone}));
     // console.log(this.state.cust_data_fr_api);
    }

    //Update the customer info
    Update_cust = () => {
        const new_fn = document.getElementById("fn");
        const new_ln = document.getElementById("ln");
        const new_phone = document.getElementById("ph");
        const new_email = document.getElementById("em");
        const ul_send = document.getElementById("ul_send_update");

        new_fn.style.display = "block";
        new_ln.style.display = "block";
        new_phone.style.display = "block";
        new_email.style.display = "block";
        ul_send.style.display = "flex";
    }

    Send_new_cust_info = () => {
      const jsonState = JSON.stringify(this.state.cust_data_fr_api);
      console.log(jsonState);

      //Send updated customer info to API
      const update_url = "https://tchounangproject.com//April_2020/Omarketing/api/customers/updateCustInfo.php";
      //const update_url = "http://localhost:8080/April_2020/Omarketing/api/customers/updateCustInfo.php";
      axios.put(update_url, jsonState)
      .then((res)=>{
        const response = res.data.message;
        console.log(response);

        if(response === "good"){
          this.setState({response_mss: "Customer Info Updated"});
          
          //display message only for 3 seconds
          const display_update_mss = document.getElementById("p-mss-display");
          display_update_mss.style.color = "green";
          display_update_mss.style.transition = "1s ease";
          display_update_mss.style.display = "block";
          setTimeout(()=>{
            display_update_mss.style.display = "none";
          },3000);

          //refresh the component
          setTimeout(()=>{
            window.location.reload(true);
          },3500)
         }else{
           this.setState({ response_mss: "Info not updated" });
         }

      })
      .catch((err)=>{
        console.log(err);
      })

    }

    Cancel_send_cust_info = () => {  
      this.getCustDetail();
    }

    //delete the customer info
    Delete_cust = () => {
      //const delete_url = "http://localhost:8080/April_2020/Omarketing/api/customers/deleteCust.php";
      const delete_url = "https://tchounangproject.com/April_2020/Omarketing/api/customers/deleteCust.php";
      const del = document.getElementById("btnDelete").value;
      console.log(del);
      const del_json = JSON.stringify({'id':del});
      console.log(del_json);

      axios.post(delete_url, del_json)
      .then((res)=>{
        const response = res.data.message;
        if(response === "good"){
          this.setState({response_mss: "Customer Info Deleted"});
          
          //display message only for 3 seconds
          const display_update_mss = document.getElementById("p-mss-display");
          display_update_mss.style.color = "green";
          display_update_mss.style.transition = "1s ease";
          display_update_mss.style.display = "block";
          setTimeout(()=>{
            display_update_mss.style.display = "none";
          },1500);

          //refresh the component
          setTimeout(()=>{
            this.props.history.push("/clientslist");
          },1700)
         }else{
           this.setState({ response_mss: "Info not updated" });
         }
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    render(){
     //const { cust_data_fr_api:{ firstName, lastName, email, phoneNumber } } = this.state;
     console.log(this.state.cust_data_fr_api.firstName);
    return(
      <div className="animate-bottom">
        <div className="home-container">
          <Header />
          <p id="p-mss-display" className="p-error-mss">{ this.state.response_mss }</p>
              <ul className="ul-cust-detail">
                 <li className="li-cust-detail">
                    First Name: <br/>
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.firstName}</span><br/>
                   <input id="fn" className="li-cust-detail" type="text" name="firstName" onChange={ this.Value_has_changed } value={ this.state.cust_data_fr_api.firstName } />
                 </li> 
                 <li className="li-cust-detail">
                   Last Name: <br/>
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.lastName}</span><br/>
                   <input id="ln" className="li-cust-detail" type="text" name="lastName" onChange={ this.Value_has_changed } value={ this.state.cust_data_fr_api.lastName } />
                 </li>
                 <li className="li-cust-detail">
                   Email: <br/>
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.email}</span><br/>
                   <input id="em" className="li-cust-detail" type="text" name="email" onChange={ this.Value_has_changed } value={ this.state.cust_data_fr_api.email } />
                 </li>
                 <li className="li-cust-detail">
                   Phone: <br/>
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.phoneNumber}</span><br/>
                   <input id="ph" className="li-cust-detail" type="text" name="phoneNumber" onChange={ this.Value_has_changed } value={ this.state.cust_data_fr_api.phoneNumber } />
                 </li>
              </ul>
              <ul id="ul_send_update">
                <li>
                  <button id="btnSend" className=" " type="button" onClick={ this.Send_new_cust_info } value={this.state.cust_data_fr_api.id}>Send</button>
                </li>
                <li>
                  <button id="btnCancel" className="" type="button" onClick={ this.Cancel_send_cust_info }>X</button>
                </li>
              </ul>
              <Link to="/clientslist">
                <button className="btn-login" type="button">Clients list</button>
              </Link>
                <button id="btnUpdate" className="btn-login btn-cust-detail" type="button" onClick={ this.Update_cust } value={this.state.cust_data_fr_api.id}>Update</button>
                <button id="btnDelete" className="btn-login btn-cust-detail" type="button" onClick={ this.Delete_cust } value={this.state.cust_data_fr_api.id}>Delete</button>
              <Link to="/">
                <button className="btn-login btn-logout" type="button">Log out</button>
              </Link>
         </div>
        </div> 
        
    );
  }
}

export default ClientDetail;
