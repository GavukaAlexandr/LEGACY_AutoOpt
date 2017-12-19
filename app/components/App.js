import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './common/Header';
//import Footer from './common/Footer';

// This component handles the App template used on every page.
class App extends React.Component {
  render(){
    return (
      <MuiThemeProvider>    
      {/* <div> */}
        <Header/>
        <div className="">
          {this.props.children}
        </div>
        {/* <hr /> */}
        {/* <Footer/> */}
      {/* </div> */}
      </ MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
