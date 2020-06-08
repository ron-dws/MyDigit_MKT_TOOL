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
               cust_data_fr_api:{ firstName:"", lastName:"", email:"",},
           }
    }

    /*Authenticate -> check if login, if not redirect to login
                   -> if yes continue*/
    componentDidMount = () => { this.getCustDetail() }

    //get cust detail info
    getCustDetail = () =>{
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
      //const x = document.getElementById("em").value;
      // this.setState({...this.state.cust_data_fr_api, firstName: e.target.value});
      this.setState(Object.assign(this.state.cust_data_fr_api, {firstName: e.currentTarget.value}));
      console.log(this.state.cust_data_fr_api.firstName);
    }

    //Update the customer info
    Update_cust = () => {
      const upd= document.getElementById("btnUpdate").value;
    }

    //delete the customer info
    Delete_cust = () => {
      var del = document.getElementById("btnDelete").value;
      console.log(del);
    }

    render(){
      //const { firstName } = this.state;
     // const fn = this.state.cust_data_fr_api.firstName;
     const { cust_data_fr_api:{ firstName } } = this.state;
     console.log(this.state.cust_data_fr_api.firstName);

     //<input id="em" className="li-cust-detail" type="text" name="cust_data_fr_api" onChange={ this.Value_has_changed } value={ firstName } />
    return(
      <div className="animate-bottom">
        <div className="home-container">
          <Header />
              <ul className="ul-cust-detail">
                 <li className="li-cust-detail">
                    First Name: <br/>
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.firstName}</span><br/>
                   <input id="em" className="li-cust-detail" type="text" name="firstName" onChange={ this.Value_has_changed } value={ this.state.cust_data_fr_api.firstName } />
                 </li> 
                 <li className="li-cust-detail">
                   Last Name: <br/> 
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.lastName}</span>
                 </li>
                 <li className="li-cust-detail">
                   Email: <br/>
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.email}</span>
                 </li>
                 <li className="li-cust-detail">
                   Phone: <br/>
                   <span className="span-cust-detail">{this.state.cust_data_fr_api.phoneNumber}</span>
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
