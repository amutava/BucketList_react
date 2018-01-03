import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import Header from '../client/template/Header'
import Footer from '../client/template/Footer'
import Body from '../client/template/Body'
import SignUp from '../client/forms/SignUp'
class App extends Component {
 render () {
  // const {message} = this.props.messageReducer;
  return (
  
//   <Body/>
<SignUp/>
  )
 }
}
export default connect(state => state)(App);