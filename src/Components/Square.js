import React,{Component} from 'react';

class Square extends React.Component{
	
	constructor(props){
		super(props);
	    this.state = {
	      value: "",
	    };
	}
	render(){

		const color = (this.props.value === "X")?{
		boxShadow:"inset 0 0 5px 2px #da1414bf",
		backgroundColor: "#ffbfbf70"
		}:(this.props.value === "0")?{
		boxShadow:"rgb(20 218 108 / 75%) 0px 0px 5px 2px inset",
		backgroundColor: "rgb(189 255 177 / 44%)"
		}:{};

		return(
			<div className = "Square" 
			style = {color} 
			onClick = {()=>{this.props.onHandleClick(this.props.row,this.props.col)}}>
			<div>
			{this.props.value}
			</div>
			</div>
		);
	}
}
export default Square;