import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import classnames from 'classnames';
import './draggable.css';

const objSource = {
  beginDrag(props) {
      return props.item;
  },
  endDrag(props, monitor, component) {
      return;
  }
}

function collect(connect, monitor) {
  return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
  }
}

class Draggable extends Component {
  
  render () {
    const { connectDragSource, item } = this.props;

    return connectDragSource(
      <div className={classnames({
        draggable:true,
        'ruby': item.name === "Ruby",
        'diamond': item.name === "Diamond",
        'emerald': item.name === "Emerald",

      })}>
        <h4>{item.name}</h4>
      </div>
    )
  }
}

export default DragSource( 'obj', objSource, collect )(Draggable);