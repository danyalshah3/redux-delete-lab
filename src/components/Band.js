import React, { Component } from 'react';

class Band extends Component {


  // handleOnClick = () => {
  //  return this.props.delete(this.props.band.id)
  // }

  render() {
    //  console.log(this.handleOnClick())
    return(
      <div>
          <li >
          {this.props.band.name}
          <button onClick= {() => this.props.delete(this.props.band.id)}>DELETE</button>
          </li>
          </div>
      
      // {() => this.props.delete(this.props.band.id)}
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