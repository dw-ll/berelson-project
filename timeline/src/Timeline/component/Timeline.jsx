import React, {Component} from 'react';
class Timeline extends Component{
    constructor(props){
        super(props);
        this.databaseRef = this.props.database().ref().child('post');
        this.addPost = this.addPost.bind(this);
        this.updateLocalState = this.updateLocalState.bind(this);
        this.state = {
          posts:[],
          newPostBody: ' ',
        }
       }


render(){
    return (
    <div>
      
    </div>
    );
        
}

}
export default Timeline;