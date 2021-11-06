import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

    // componentDidMount(){
    // }
    
  renderBands = () => {this.props.bands.map((band, id) => <Band key={id} name={band} /> )}
    
    
    
    render() {
        //  console.log(this.props.bands)
        //  console.log(this.renderBands())
        return(
            <div>
          <ul>
         {this.renderBands()} 
         </ul>
         
      </div>
    );
}
};

export default Bands;