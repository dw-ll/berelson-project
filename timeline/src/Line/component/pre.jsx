import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Abram26 from "../../Media/Pre-WWII/Abram.Baigelman026.jpeg";
import Lodz from "../../Media/Pre-WWII/Lodz.Theatre426.jpeg";
//import {Print} from 'material-ui-icons/AccessAlarm';


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
                
                Images and information from before World War II.
                
            </div>
        </div>
        <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Abram Baigelman was lorem ipsum."
                    iconStyle={{ background: 'rgb(40,49,72)', color: '#fff' }}
                    //icon={<Print/>}
                        
                >
                    <img src ={Abram26} height="300" width="350"/>
                     <h3 className="vertical-timeline-element-title">Abram Baigelman</h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                    
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(145,53,53)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">World War II</h3>
                  
                    <p>

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1960-1970"
                    iconStyle={{ background: 'rgb(187,187,187)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Post World War II</h3>
                    
                    <p>
                
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(233,238,201)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Present</h3>
                    <p>
                    </p>
                </VerticalTimelineElement>
                
</VerticalTimeline>
    </div>
    </Router>
    );
        
}
}
export default Line;