import React from 'react';
import Header from '../template/Header'
import Footer from '../template/Footer'
export default class SignUp extends React.Component {
 render () {
   return (
  <div> 
      <Header/>
	<div className="col-lg-5 col-md-8">
          <div className="form">
            <div id="sendmessage">Sign Up</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" className="contactForm">
              <div className="form-group">
                <input type="email" className="form-control" name="username" id="username" placeholder="Your Username" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation"></div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of password" />
                <div className="validation"></div>
              </div>
             
              <div className="text-center"><button type="submit">SignUp</button></div>
            </form>
          </div>
        </div>
        <Footer/>
 </div>
   )
 }
}