import React, { Component } from 'react';

class Band extends Component {

  render() {
    // console.log(this.props.name)
    return(
     
          <li >
          {this.props.name}

          </li>
      
    
    );
  }
};

export default Band;



// import React from "react";

// const Band = (props) => {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <button>DELETE</button>
//     </li>
//   );
// };

// export default Band;