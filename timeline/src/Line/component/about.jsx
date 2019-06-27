import React, {Component} from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import 'react-vertical-timeline-component/style.min.css';

import Pre from './pre';
import Post from './post';
import WWII from './ww2';

class Line extends Component{
  
render(){
    return (
      <Router>
        <Route
          path="/pre"
          exact
          render={() => {
            return <Pre />;
          }}
        />
        <Route
          path="/ww2"
          exact
          render={() => {
            return <WWII />;
          }}
        />

        <Route
          path="/post"
          exact
          render={() => {
            return <Post />;
          }}
        />
        <div>
          <div className="card card-default post-body">
            <div className="card-body main-nav">
              An ancestral site documenting and displaying the Berelson
              lineage.
            </div>
           
            <div>
              <test />
            </div>
          </div>
        </div>
      </Router>
    );
        
}
}
export default Line;