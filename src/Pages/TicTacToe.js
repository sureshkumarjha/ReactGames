import React from 'react';
import openSocket from 'socket.io-client';
import Grid from '../Components/Grid';
import server from '../Components/server';

class TicTacToe extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			matrix : [["","",""],["","",""],["","",""]],
			isNext:"X",
			count : 0,
			scoreX : 0,
			score0 : 0,
			error: ""
		};
		this.play = true;
		if(this.props.type === "multi"){
			this.socket = openSocket('http://192.168.0.106:4000');
		}
	}

	componentDidMount = () => {
		if(this.props.type === "multi"){

			this.socket.on('connect_error', () => {
			  console.log("Error");
			});
			
			this.socket.on("client",(message)=>{
				this.play = true;
				this.setState(message);
			});

		}
	}

	componentWillUnmount = () => {
		if(this.props.type === "multi"){
			this.socket.disconnect();
		}		
	}

	onCheck = (matrix) => {

		for (let i = 0; i < 3; i++) {
			if( matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && 
				matrix[i][0] !== "" && matrix[i][1] !== "" && matrix[i][2] !== ""){
				return true
			} 
			if( matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i] && 
				matrix[0][i] !== "" && matrix[1][i] !== "" && matrix[2][i] !== ""){
				return true
			} 
		}
		if( matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && 
			matrix[0][0] !== "" && matrix[1][1] !== "" && matrix[2][2] !== ""){
			return true
		} 
		if( matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && 
			matrix[0][2] !== "" && matrix[1][1] !== "" && matrix[2][0] !== ""){
			return true
		} 

		return false
	}

	onSquareClick = (row,col) =>{

		if(this.state.matrix[row][col] !== "" || !this.play){
			return
		}

		let tmatrix = this.state.matrix;
		tmatrix[row][col] = this.state.isNext
		
		let {matrix,isNext,count ,scoreX,score0} = this.state;
		
		if(this.onCheck(tmatrix)){

			window.alert(`${this.state.isNext} WON `)

				matrix = [["","",""],["","",""],["","",""]]
				isNext = this.state.isNext
				count = 0
				scoreX = (this.state.isNext === "X" )? this.state.scoreX + 1: this.state.scoreX
				score0 = (this.state.isNext === "0" )? this.state.score0 + 1: this.state.score0	

			this.play = true;
		}else{

			if(this.state.count === 8){ 
				window.alert("TIE")

					matrix = [["","",""],["","",""],["","",""]]
					isNext = "X"
					count = 0

				this.play = true;
			}else{

					matrix = tmatrix
					isNext = (this.state.isNext === "X" )? "0" : "X"
					count = this.state.count + 1 

				this.play = false;
			}
		}				
		this.setState({matrix,isNext,count ,scoreX,score0},
			()=>{ (this.props.type === "multi")?this.socket.emit("server",this.state):this.play = true;});
	}
	
	squareStyle = (value) =>{ 
		return(value === "X")?{
		boxShadow:"inset 0 0 5px 2px #da1414bf",
		backgroundColor: "#ffbfbf70"
		}:(value === "0")?{
		boxShadow:"rgb(20 218 108 / 75%) 0px 0px 5px 2px inset",
		backgroundColor: "rgb(189 255 177 / 44%)"
		}:{};
	}

	render(){
		return(
			<div className = "Align-Center" >
			<h1 className = "reactShadow">Tic Tac Toe</h1>
			<h3>{(this.props.type === "multi")?(this.play)?"Your ":"Opponent ":""}Turn : {this.state.isNext}</h3>

			<Grid 
			matrix = {this.state.matrix} 
			onSquareClick = {this.onSquareClick}
			squareStyle = {this.squareStyle}
			/>

			<div className = "Gridrow ScoreCard" >
				<div className = "score">
				Player with X : <b>{this.state.scoreX} </b>
				</div>
				<div className = "score">
				Player with 0 : <b>{this.state.score0} </b>
				</div>
			</div>
			</div>
		);
	}
}
export default TicTacToe;
