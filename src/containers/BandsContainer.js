import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    //  console.log(this.props)
    // console.log(this.props.bands)
    return(
     <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>

        </div>
    )
  }
}
const mapStateToProps = (state) => {
  //  console.log(state.bands)
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name.name})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
