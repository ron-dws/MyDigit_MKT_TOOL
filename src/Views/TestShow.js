import React from 'react';

class TestShow  extends React.Component {
  
    displayParagraph = (e) => {
      e.preventDefault();
      let displayP = document.getElementById("show_p");
      
        if(displayP.style.display == 'none'){
           displayP.style.display = 'block';
        }else if(displayP.style.display == 'block'){
          displayP.style.display = 'none'; 
        } 
    }
    
    
    render() {
      return (<React.Fragment>
            <a href="#" onClick={ this.displayParagraph }>Want to buy a new car?</a>
           <div id="show_p" style={{display:"none"}}>
              <p>Call +11 22 33 44 now!</p>
           </div>
          </React.Fragment>);
    }
  }

  export default TestShow;