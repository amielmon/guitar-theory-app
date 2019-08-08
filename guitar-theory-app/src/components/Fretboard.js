import React, { Component } from "react";


const Fret = () => (
<div class="fl w-10 pa1">
    <div class="outline bg-white o-10 tc pv3"></div>
  </div>
);




class Fretboard extends Component {
    render() {
      return (
        <div class="center h-50 w-80 bg-blue">
        <div class="mw9 center ph3-ns">
        <div class="flex flex-wrap cf ph2-ns">
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
            <Fret/>
        </div>
      </div>
      
       </div>
      );
    }
  }
  
  export default Fretboard;
  