import React, { Component } from 'react';
import Band from './Band'
import {connect} from 'react-redux'

class Bands extends Component {

    // componentDidMount(){
    // }
    
//   renderBands = () => {this.props.bands.map((band, id) => <Band key={id} name={band} /> )}
renderBands = () => {
    // console.log(this.props.bands)
      return this.props.bands.map((band, id) => <Band delete={this.props.delete} key={id} band={band} />)
    //   console.log(this.renderBands)
    }
    
    
    render() {
        //   console.log(this.renderBands())
        return(
            <div>
      
          <ul>
         {this.renderBands()} 
         </ul>
         </div>
        );
    }
};

// const mapStateToProps = (state) => {
//     //  console.log(state.bands)
//     return {bands: state.bands}
//   }

const mapDispatchToProps = (dispatch) => {
    return {
      delete: id  => dispatch({ type: "DELETE_BAND", id: id}),
    };
  };

export default connect(null, mapDispatchToProps)(Bands)