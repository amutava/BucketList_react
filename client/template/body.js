import React from 'react';
import Header from '../template/Header'
import Footer from '../template/Footer'
export default class Body extends React.Component {
 render () {
   return (
  <div> 
		<Header/>
  <section class="hero">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
          <a className="hero-brand" href="index.html" title="Home"><img alt="Bell Logo" src="../public/img/logo.png"/></a>
        </div>
      </div>

      <div className="col-md-12">
        <h1>
				A goal without a plan is a wish. Selah!
          </h1>

        <p className="tagline">
          Life is not a matter of chance...it is a matter of choice.
        </p>
        <a className="btn btn-full" href="#about">Get Started Now</a>
      </div>
    </div>

  </section>
	<Footer/>
     </div>
   )
 }
}