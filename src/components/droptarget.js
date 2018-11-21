import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import classnames from 'classnames';
import './droptarget.css';

const objTarget = {
  drop(props, monitor, component) {
    if (!component) return
    else {
      const item = monitor.getItem();
      component.setState({item});
      return item;
    }
  }
}

function collect(connect, monitor) {
  return {
      connectDropTarget: connect.dropTarget(),
  }
}

class Droptarget extends Component {
  state = {
    item:{},
  }
  render() {
    const { connectDropTarget } = this.props;
    const { item } = this.state;

    let objectDropped = (
        <div>
          <h4>You dropped a {item.name} </h4>
          <p>{item.description}</p>
        </div>
    )
    

    return connectDropTarget(
      <div className={classnames({
        target:true,
        'ruby': item.name === "Ruby",
        'diamond': item.name === "Diamond",
        'emerald': item.name === "Emerald",
      })}>
          <b>DROP ZONE</b>
          <div className="droped-item">
            {item.name ? objectDropped : (<div></div>)}
          </div>
      </div>
    )
  }
}

export default DropTarget('obj', objTarget , collect)(Droptarget);