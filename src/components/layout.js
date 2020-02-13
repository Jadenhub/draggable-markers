import React from 'react';
import './layout.css';
import map from './map.png';
import icon from './marker.png';

const throttle = function(fn, interval){
  let _self = fn,
      timer,
      firstTime = true;

  return function(){
    let args = arguments,
        _me = this;

    if (firstTime) {
      _self.apply(_me, args);
      return firstTime = false;
    }

    if (timer) {
      return false;
    }

    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);

    }, interval || 500);

  }
};

export default class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markers:[],
      clientpos: {
        x: 0,
        y: 0
      },
      isDragging: false
    }
    this.markerSize = {
      height:30,
      width:30
    }
  }

  handleImgClick = ({nativeEvent:{offsetY, offsetX}}) => {
    const markers = this.state.markers.slice();
    const {height, width} = this.markerSize;
    markers.push(
      {
        key : markers.length.toString(),
        coordinate : [offsetY -height/2, offsetX -width/2]
      }
    );
    this.setState({
      markers: markers,
      isDragging: false,
    });
  }

  handleDragStart = (e)=> {
    e.preventDefault();
    this.setState({
      isDragging: true,
      target: e.target.getAttribute('value'),
      clientpos: {
        x: e.clientX,
        y: e.clientY
      }
    });
  }

  handleDrag = ({clientX, clientY}) =>{
    const {
      markers,
      clientpos:{x, y}, 
      target,
      maxY,
      maxX
    } = {
      markers: this.state.markers.slice(),
      ...this.state,
      ...this.range
    }

    const idx = markers.findIndex((item)=>{
      return item.key=== target;
    });
    const coordinate = markers[idx].coordinate.slice();
    
    coordinate[0] += clientY - y;
    coordinate[1] += clientX - x;
    
    if (coordinate[0] <= maxY && coordinate[0] >= 0
      && coordinate[1] <= maxX && coordinate[1] >= 0) {
      markers[idx].coordinate = coordinate;
      this.setState({
        markers: markers,
        clientpos: {
          y: clientY,
          x: clientX
        }
      });
    } else {
      this.setState({
        clientpos: {
          y: clientY,
          x: clientX,
        },
        isDragging: false,
      });
    }
  }

  _throttledMouseMove = throttle(this.handleDrag, 10);
  
  onMouseMove = (e) => {
    e.persist();
    this._throttledMouseMove(e);
  }
  handleDragEnd = () => {
    this.setState({
      isDragging: false,
    });
  }
  handleImgLoad = ({target:{offsetHeight, offsetWidth}}) =>{
    const {height, width} = this.markerSize
    this.range = {
      maxY: offsetHeight - height,
      minY: 0,
      maxX: offsetWidth - width,
      minX: 0
    }
  }
  
  render(){
    const {markers, isDragging} = this.state;
    const pins =  markers.map((marker, idx)=>{
      const {key, coordinate} = marker;
      return (
       <div key={key} className="map-marker"
          style={{
            top: coordinate[0] ,
            left: coordinate[1] ,
            cursor: (isDragging)?'move': 'pointer',
          }}
          onMouseDown={(e)=>{this.handleDragStart(e);}}
          onMouseUp={(isDragging)? this.handleDragEnd: null}
        >
          <img alt='pin' value={key} src={icon}/>
       </div>
      );
    })

    return (
      <>
        <h3 className='title'>React Draggable Component</h3>
        <div className='layout'
          onMouseMove={(isDragging)? this.onMouseMove: null} 
        >
          <img src={map} alt='map' onClick={(e)=>{this.handleImgClick(e);}} onLoad={(e)=>{this.handleImgLoad(e)}}/>
          <div>
            {pins}
          </div>
        </div>
        <b>Description:</b>
        <div>1. Click add marker</div>
        <div>2. Drag marker</div>
        <a className="home" href='/'>HOME</a>
      </>
    );
  };
}