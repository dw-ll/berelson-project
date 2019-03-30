import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Pre from './pre';
//import {Print} from 'material-ui-icons/AccessAlarm';
class Line extends Component{
    state = {
        redirect: false

    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
  
        }
    }
render(){
    return (
        <Router>
    <div>
       <div className="card card-default post-body">
            <div className="card-body main-nav">
                
                The Berelson Project: An ancestral site documenting and displaying the Berelson lineage.
                
            </div>
        </div>
        <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
             
                    iconStyle={{ background: 'rgb(40,49,72)', color: '#fff' }}
                    //icon={<Print/>}
                    
                        
                >
                    <h3 className="vertical-timeline-element-title">Pre World War II</h3>
                        <h4 className="vertical-timeline-element-subtitle" onClick={this.renderRedirect}>1920-1940</h4>
                    <div>
                        <Link to='/pre'>Learn More</Link>
                        //<Route path="/pre" component={Pre} />

                      
                    </div>
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
             
                    iconStyle={{ background: 'rgb(187,187,187)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Post World War II</h3>
                        <h4 className="vertical-timeline-element-subtitle" onClick={this.renderRedirect}>1960-1970</h4>

                    
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