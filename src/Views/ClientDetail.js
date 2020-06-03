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
               cust_data_fr_api:"",
           }
    }

    /*Authenticate -> check if login, if not redirect to login
                   -> if yes continue*/
    componentDidMount = () => { this.getCustDetail() }

    //get cust detail info
    getCustDetail = () =>{
        //use fetch to point to end point end get custs info
        const custId = this.props.match.params.value;
        //let tosend = JSON.stringify({"custid":custId});
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
        //convert response on javascript object

    }

    //display cust detail info
    displayCustInfo = (custInfo) => {
        if(!custInfo.length) return null;

        const get_cust =  custInfo.map((val, index)=>(
            <div key={index}>
            <ul className="ul-cust-fn">
                <Link to={ "/" }>
                    <li className="li-cust-fn-ln">{val.firstName} {val.lastName}</li>
                </Link>
            </ul>
            </div>
        )); 
        
        return get_cust;
    }

    render(){
    return(
      <div className="animate-bottom">
        <div className="home-container">
          <Header />
              <ul className="ul-cust-detail">
                 <li className="li-cust-detail">First Name: {this.state.cust_data_fr_api.firstName}</li> 
                 <li className="li-cust-detail">Last Name: {this.state.cust_data_fr_api.lastName}</li>
                 <li className="li-cust-detail">Email: {this.state.cust_data_fr_api.email}</li>
                 <li className="li-cust-detail">Phone: {this.state.cust_data_fr_api.phoneNumber}</li>
              </ul>

              <Link to="/clientslist">
                <button className="btn-login" type="button">Clients list</button>
              </Link>
                <button className="btn-login btn-cust-detail" type="button">Update</button>
                <button className="btn-login btn-cust-detail" type="button">Delete</button>
              <Link to="/">
                <button className="btn-login btn-logout" type="button">Log out</button>
              </Link>
         </div>
        </div> 
        
    );
  }
}

export default ClientDetail;
