import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import {Print} from 'material-ui-icons/AccessAlarm';


class Line extends Component{
render(){
    return (
    <div>
       <div className="card card-default post-body">
            <div className="card-body main-nav">
                
                The Berelson Project: An ancestral site documenting and displaying the Berelson lineage.
                
            </div>
        </div>
        <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1920-1940"
                    iconStyle={{ background: 'rgb(40,49,72)', color: '#fff' }}
                    //icon={<Print/>}
                        
                >
                    <h3 className="vertical-timeline-element-title">Pre World War II</h3>
                    <h4 className="vertical-timeline-element-subtitle">Text</h4>
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
    );
        
}
}
export default Line;