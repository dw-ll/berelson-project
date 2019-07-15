import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import Tree from "react-d3-tree";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
 
class MyComponent extends Component {
  render() {
    return (
  

        
      <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
 
        <Tree data={myTreeData} />
 
      </div>
    );
  }
}
export default MyComponent;