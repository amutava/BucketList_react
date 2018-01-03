import React from 'react';
export default class Footer extends React.Component {
 render () {
   return (
     <div>
    <footer className="site-footer">
    <div className="bottom">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-xs-12 text-lg-left text-center">
            <p className="copyright-text">
              © angie
            </p>
            <div className="credits">
              <a href="#">BucketList App</a> by Angie Mutava
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
     </div>
   )
 }
}