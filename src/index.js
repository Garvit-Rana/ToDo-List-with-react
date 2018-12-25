import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Bass extends React.Component{
render(){
return(
    <div className='row'>
    <div className='col-xs-12'>
    <div id="one"  ><h1 >Welcome to <span >RANA's</span> ToDo List!</h1></div> 
    </div>

    </div>
	)

}

};


class Board extends React.Component{
constructor(props){
    super(props);

}

render(){
if(this.props.change.length<1||this.props.again<1)
return <div></div>;    
let r=this.props.change.length;
let e=(this.props.change).map((string,i)=>{
   
if(i>0)
   return <li>{string}</li>; 
}
    );
let g;
return (
    <div>
    <h2 style={{marginTop:"40px"}}>Your Saved Lists are:</h2>
    <ul>
{e}
</ul>
</div>
);
}
}

class Table extends React.Component{
constructor(props){
super(props);
this.state={
    valy:" ",
	isNext:true,
    har:[" ", ],
    val:0,
    u:"",
    onehar:[""],
    check:0
    }

	
this.handleEvent=this.handleEvent.bind(this);
this.handleOur=this.handleOur.bind(this);
}


handleOur(){
//let c=document.getElementById('in');
let hoo=this.state.har;
let ho=this.state.onehar;
ho[ho.length]=hoo;

let p=this.state.check+=1;
this.setState({
  val:0,
isNext:true,
har:[""],
u:"",
valy:"",
onehar:ho,
check:p
});

}

handleEvent(){

let c=document.getElementById("in");

let hoo=this.state.har.slice();
if(c.value=="") return;

this.state.val+=1;

if(this.state.val>=2)
 this.setState({u:<button type="button" className="btn btn-danger" onClick={this.handleOur}>Confirm And Save your List</button>});
let r=<h2 style={{ fontFamily:"sans-serif",


boxShadow:"3px 3px 6px 3px lavender",
width:"49%",color:"white",
backgroundColor:"darkturquoise",
borderRadius:"1px 14px 14px 0px",
textAlign:"center" }}>
{c.value}
</h2>;
if(this.state.isNext){
hoo[hoo.length]=r;
this.setState(
{valy:c.value,
isNext:false,
har:hoo
});
}
else{
    hoo[hoo.length]=<h4 style={{boxShadow:"4px 3px 7px 1px",width:"50%",color:"deepskyblue" }}>{c.value}</h4>;
    this.setState(
{valy:c.value,
isNext:false,
har:hoo
});
}


c.value="";

}
render(){
let s;
if (this.state.isNext)
	{
        s="Add a branded title for your list!";
}
else
	s="Add Items To Your List";

let f=(this.state.har).map((string,i)=>
     {
if(i>0&&{string}!="")
      return <li>{string}</li>


}
);
let w;
 w=<ol start="0">{f}</ol>

return(
	
    <div className="row">
<Bass/>
<div className="w-100"></div>
<div className="col-xs-12 col-md-6">
<div id="two">
<h3>{s}</h3>

</div>
</div>
<div className="col-xs-12 col-md-6">
<div id="two">
<h3>Here Is Your Prepared List </h3>
</div></div>
<div className="w-100"></div>
<div className="col-xs-12 col-md-6 ">
<div id="three">

<input type="text" id="in" placeholder="Enter your item here!"/>
<button type="button" onClick={this.handleEvent} className="btn btn-success ">Add in List</button>

<div style={{marginTop:"21px",width:"80%",marginLeft:"auto",marginRight:"auto"}}>
{this.state.u}
</div>

</div>

</div>
<div className="col-xs-12 col-md-6">
<div id="four">
 
{w}
</div>

</div>

<div className="col-xs-12">

<div className="six">
    <Board change={this.state.onehar} again={this.state.check}/>
</div>
</div>
    </div>
    );

}

}

ReactDOM.render(<Table />,document.getElementById('root'));