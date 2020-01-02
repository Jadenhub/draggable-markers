import React from 'react';
import './layout.css';
import map from './map.png';
import icon from './marker.png';

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
  }

  handleImgClick = (e) => {
    const markers = this.state.markers.slice();
    markers.push(
      {
        key : markers.length.toString(),
        coordinate : [e.nativeEvent.offsetY - this.props.markerSize.height/2, e.nativeEvent.offsetX - this.props.markerSize.width/2]
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

  handleDrag = (e) =>{
    if (this.state.isDragging) {
      const markers = this.state.markers.slice();
      const clientpos = this.state.clientpos;
      const targetKey = this.state.target;
      const idx = markers.findIndex((item)=>{
        return item.key=== targetKey;
      });
      const coordinate = markers[idx].coordinate.slice();
      coordinate[0] += e.clientY - clientpos.y;
      coordinate[1] += e.clientX - clientpos.x;
      if (coordinate[0] <= this.state.range.maxY && coordinate[0] >= 0
        && coordinate[1] <= this.state.range.maxX && coordinate[1] >= 0) {
        markers[idx].coordinate = coordinate;
        this.setState({
          markers: markers,
          clientpos: {
            y: e.clientY,
            x: e.clientX
          }
        });
      } else {
        this.setState({
          clientpos: {
            y: e.clientY,
            x: e.clientX,
          },
          isDragging: false,
        });
      }
    };
  }
  
  handleDragEnd = (e) => {
    this.setState({
      isDragging: false,
    });
  }

  handleImgLoad = ({target:img}) =>{
    this.setState({
      range:{
        maxY: img.offsetHeight - this.props.markerSize.height,
        minY: 0,
        maxX: img.offsetWidth - this.props.markerSize.width,
        minX: 0
      }
    });
  }

  render(){
    const markers = this.state.markers;
    const pins =  markers.map((marker, idx)=>{
      return (
       <div key={marker.key} className="map-marker"
          style={{
            top: marker.coordinate[0] ,
            left: marker.coordinate[1] ,
            cursor: (this.state.isDragging)?'move': 'pointer',
          }}
          onMouseDown={(e)=>{this.handleDragStart(e);}}
          onMouseUp={(e)=>{this.handleDragEnd(e);}}
        >
          <img alt='pin' value={marker.key} src={icon}/>
       </div>
      );
    })

    return (
      <>
        <h3 className='title'>React Draggable Component</h3>
        <div className='layout'
          onMouseMove={(e)=>{this.handleDrag(e);}} 
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