import React from 'react';
export default class Header extends React.Component {
 render () {
   return (
	
  <div>
  <header id="header">
    <div className="container">
      <div id="logo" className="pull-left">
        <a href="index.html"><img src="img/logo-nav.png" alt="" title="" ></img></a>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li><a href="#about">BucketList Application</a></li>
          <li><a href="#about">sign up</a></li>
					<li><a href="#about">sign in</a></li>
        </ul>
      </nav>
      <nav className="nav social-nav pull-right d-none d-lg-inline">
        <a href="#"><i className="fa fa-twitter"></i></a> 
				<a href="#"><i className="fa fa-facebook"></i></a> 
      </nav>
    </div>
  </header>
	</div>
   )
 }
}