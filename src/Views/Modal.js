import React, { Component } from 'react';
import '../CSS/Style-main.css';

class Modal extends Component{
    constructor(props){
        super(props)
      this.modal_triger = this.modal_triger.bind(this);
    }

modal_triger(){
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal and trigger
    //var btn = document.getElementById("myBtn");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}
   render(){
       return(
        <>
        <button id="myBtn" onClick={this.modal_triger}>Open Modal</button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
                <span className="close">&times;</span>
                <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
            </div>
            <div className="modal-footer">
                <h3>Modal Footer</h3>
            </div>
         </div>
      </div>
      </>
       );
   }

}

export default Modal;