(this["webpackJsonpdraggable-markers"]=this["webpackJsonpdraggable-markers"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/map.82481805.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbdJREFUeNq0V91tgzAQhiwAUgeA1z6FTlA6QegG7nul0glKJmgqdQCyAd2ATlDy1NdkgEplAvqd5AeE8J2N6UknJ/GdP9+/Ew7DELjQ1eN3jiXXXzNwpz83P+/Xne05oQ0wwGIsB3ABjhjRC7gmWVzi1wsYoEqDRg6OoQsUnAdYYIAS4FOwnB4AXjsBA7TE8hr4082c5bPAAKWk+QrWIXJ7No35xiB8CNajBFyKFltae6TyAZMVKZgS8JaR72FxLAFLCTWbMNCrsLwwevfQazhXZ4zy3pSl+J2APxjdXIox5zIp9jWzl9kk1xydpG40dqVELsCpRWtNfYB7g2ykBwRHitkT67jlYqwHhsnaktHtJGAuTlu62NSl2hOtMEgaqY7JorPFNDqNGkgiyH4i8fhy0plbWeTHVpdeYiFbuUynTh/uS0cYo1zKSa0A2psSbsM0A7J47wmsTE3H5umz1OVvAC19OtcSl1+kBLV9Zbo+g+5gbesNrMFbYXKNR6dYji7AqW57kTDBslWnEw48C/HuXfIhXPAXhnrubmbrGZc7/CdwrF2ecL14zYfAuJeriYsL13P+BBgALTvEvEuCOh4AAAAASUVORK5CYII="},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=a(3),l=a(4),c=a(8),g=a(5),u=a(9),m=(a(15),a(6)),d=a.n(m),A=a(7),p=a.n(A),h=function(e,t){var a,n=e,r=!0;return function(){var e=arguments,i=this;return r?(n.apply(i,e),r=!1):!a&&void(a=setTimeout((function(){clearTimeout(a),a=null,n.apply(i,e)}),t||500))}},f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(g.a)(t).call(this,e))).handleImgClick=function(e){var t=a.state.markers.slice();t.push({key:t.length.toString(),coordinate:[e.nativeEvent.offsetY-a.props.markerSize.height/2,e.nativeEvent.offsetX-a.props.markerSize.width/2]}),a.setState({markers:t,isDragging:!1})},a.handleDragStart=function(e){e.preventDefault(),a.setState({isDragging:!0,target:e.target.getAttribute("value"),clientpos:{x:e.clientX,y:e.clientY}})},a.handleDrag=function(e){if(a.state.isDragging){var t=a.state.markers.slice(),n=a.state.clientpos,r=a.state.target,i=t.findIndex((function(e){return e.key===r})),o=t[i].coordinate.slice();o[0]+=e.clientY-n.y,o[1]+=e.clientX-n.x,o[0]<=a.state.range.maxY&&o[0]>=0&&o[1]<=a.state.range.maxX&&o[1]>=0?(t[i].coordinate=o,a.setState({markers:t,clientpos:{y:e.clientY,x:e.clientX}})):a.setState({clientpos:{y:e.clientY,x:e.clientX},isDragging:!1})}},a._throttledMouseMove=h(a.handleDrag,20),a.onMouseMove=function(e){e.persist(),a._throttledMouseMove(e)},a.handleDragEnd=function(e){a.setState({isDragging:!1})},a.handleImgLoad=function(e){var t=e.target;a.setState({range:{maxY:t.offsetHeight-a.props.markerSize.height,minY:0,maxX:t.offsetWidth-a.props.markerSize.width,minX:0}})},a.state={markers:[],clientpos:{x:0,y:0},isDragging:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.markers.map((function(t,a){return r.a.createElement("div",{key:t.key,className:"map-marker",style:{top:t.coordinate[0],left:t.coordinate[1],cursor:e.state.isDragging?"move":"pointer"},onMouseDown:function(t){e.handleDragStart(t)},onMouseUp:function(t){e.handleDragEnd(t)}},r.a.createElement("img",{alt:"pin",value:t.key,src:p.a}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"title"},"React Draggable Component"),r.a.createElement("div",{className:"layout",onMouseMove:this.onMouseMove},r.a.createElement("img",{src:d.a,alt:"map",onClick:function(t){e.handleImgClick(t)},onLoad:function(t){e.handleImgLoad(t)}}),r.a.createElement("div",null,t)),r.a.createElement("b",null,"Description:"),r.a.createElement("div",null,"1. Click add marker"),r.a.createElement("div",null,"2. Drag marker"),r.a.createElement("a",{className:"home",href:"/"},"HOME"))}}]),t}(r.a.Component);a(16);o.a.render(r.a.createElement(f,{markerSize:{width:30,height:30}}),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.251be9c7.chunk.js.map