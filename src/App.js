import React, { Component } from 'react';
import Draggable  from './components/draggable';
import Droptarget from './components/droptarget';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import './App.css';

class App extends Component {

  state = {
    rocks : [
      {
        id:1,
        name: "Ruby",
        description:"A pink to blood-red colored gemstone."
      },
      {
        id:2,
        name: "Emerald",
        description:"A gemstone and a variety of the mineral beryl (Be3Al2(SiO3)6) colored green by trace amounts of chromium and sometimes vanadium."
      },
      {
        id:3,
        name: "Diamond",
        description:"A solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic."
      },
    ]
  }

  render() {

    const { rocks } = this.state;
    
    return (
      <div className="App">
        <div className="draggable-section">
          {rocks.map((item,index) => {
            return (
                <Draggable key={item.id} item={item} />
            )
          })}
        </div>

        <Droptarget />

      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
