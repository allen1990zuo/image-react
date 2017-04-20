import React from 'react';


class App extends React.Component {
constructor(props) {
      super(props);
		
      this.state = {
         url: '',
rotatestyle:' ',
translatestyle:' ',
scalestyle:' ',
opacitystyle:' ',
rotate:false,
rotatebutton:{},
translate:false,
translatebutton:{},
scale:false,
scalebutton:{},
opacity:false,
opacitybutton:{},
reset:true
      }
this.imageChange=this.imageChange.bind(this)
this.rotateButton=this.rotateButton.bind(this)
this.translateButton=this.translateButton.bind(this)
this.scaleButton=this.scaleButton.bind(this)
this.opacityButton=this.opacityButton.bind(this)
this.resetButton=this.resetButton.bind(this)

   };
imageChange(event) {
    var reader = new FileReader()
    var file = event.target.files[0]

    var self=this;
    reader.onloadend =function(event){
      self.setState({
        url: reader.result
      })
    }
    reader.readAsDataURL(file)
  };
rotateButton(event){
this.setState({rotate:!this.state.rotate});
if(this.state.rotate===true){
this.setState({rotate:false,
rotatebutton:{ 'transform':''},
rotatestyle:''
})
}
if(this.state.rotate===false){
this.setState({rotate:true,
rotatebutton:{ 'transform':'translateX(150px)'},
rotatestyle:'rotate(90deg)'
})
}

};
translateButton(event){
this.setState({translate:!this.state.translate})
if(this.state.translate===true){
this.setState({translate:false,
translatebutton:{ 'transform':''},
translatestyle:''
})
}
if(this.state.translate===false){
this.setState({translate:true,
translatebutton:{ 'transform':'translateX(150px)'},
translatestyle:'translateX(-40px)'
})
}

};
scaleButton(event){
this.setState({scale:!this.state.scale});
if(this.state.scale===true){
this.setState({scale:false,
scalebutton:{ 'transform':''},
scalestyle:''
})
}
if(this.state.scale===false){
this.setState({scale:true,
scalebutton:{ 'transform':'translateX(150px)'},
scalestyle:'scale(0.5)'
})
}
};
opacityButton(event){
this.setState({opacity:!this.state.opacity});
if(this.state.opacity===true){
this.setState({opacity:false,
opacitybutton:{ 'transform':''},
opacitystyle:''
})
}
if(this.state.opacity===false){
this.setState({opacity:true,
opacitybutton:{ 'transform':'translateX(150px)'},
opacitystyle:'0.5'
})
}
};
resetButton(event){
this.setState({reset:!this.state.reset,
rotatebutton:{},
translatebutton:{},
scalebutton:{},
opacitybutton:{},
rotate:false,
translate:false,
scale:false,
opacity:false,
rotatestyle:'',
translatestyle:'',
scalestyle:'',
opacitystyle:''
});
};
  render() {
var divstyle={
weight:'300px',
height:'200px'
}
if(this.state.rotatestyle!==' '){
var transform=this.state.rotatestyle
}
if(this.state.rotatestyle!==' '&&this.state.scalestyle!==' '){
transform=this.state.rotatestyle+this.state.scalestyle
}
if(this.state.rotatestyle!==' '&&this.state.translatestyle!==' '){
transform=this.state.rotatestyle+this.state.translatestyle
}
if(this.state.scalestyle!==' '&&this.state.translatestyle!==' '){
transform=this.state.scalestyle+this.state.translatestyle
}
if(this.state.rotatestyle!==' '&&this.state.scalestyle!==' '&&this.state.translatestyle!==' '){
transform=this.state.rotatestyle+this.state.scalestyle+this.state.translatestyle
}
var imagestyle={
 'weight':'100%',
'height':'100%',
'transform':transform,
'opacity':this.state.opacitystyle
}
    return (
      <table className="table">
<tr>
 <td style={divstyle}><img src={this.state.url} style={imagestyle} /></td>
 <td>
	<table className="table">
 <tr style={{'height':'50px'}}>
  <td>Available Actions</td>
  <td>Applied Actions</td>
</tr>
  <tr style={{'height':'50px'}}>
  <button className="btn btn-primary btn-sm" onClick={this.rotateButton} style={this.state.rotatebutton}>rotate</button>
</tr>
 <tr style={{'height':'50px'}}>
  <button className="btn btn-primary btn-sm" onClick={this.translateButton} style={this.state.translatebutton}>translate</button>
</tr>
 <tr style={{'height':'50px'}}>
 <button className="btn btn-primary btn-sm" onClick={this.scaleButton} style={this.state.scalebutton}>scale</button>
</tr>
 <tr style={{'height':'50px'}}>
  <button className="btn btn-primary btn-sm" onClick={this.opacityButton} style={this.state.opacitybutton}>opacity</button>
</tr>
	</table>
</td>
</tr>
<tr>
  <td><input className="btn btn-primary btn-sm" type="file" onChange={this.imageChange} /></td>
 <td><button className="btn btn-primary btn-sm" onClick={this.resetButton}>reset</button></td>
</tr>


</table>
    );
  }
}

export default App;
