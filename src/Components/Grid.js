import React,{Component} from 'react';
import Square from './Square';
class Grid extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			matrix : [["","",""],["","",""],["","",""]],
			isNext:"X",
			count : 0,
			scoreX : 0,
			score0 : 0
		};
	}

	onCheck = (matrix) => {

		for (let i = 0; i < 3; i++) {
			if( matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && 
				matrix[i][0] !== "" && matrix[i][1] !== "" && matrix[i][2] !== ""){
				return true
			} 
			if( matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i] && 
				matrix[0][i] !== "" && matrix[1][i] !== "" && matrix[2][i] !== ""){
				return true
			} 
		}
		if( matrix[0][0] ===matrix[1][1] && matrix[1][1] === matrix[2][2] && 
			matrix[0][0] !== "" && matrix[1][1] !== "" && matrix[2][2] !== ""){
			return true
		} 
		if( matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && 
			matrix[0][2] !== "" && matrix[1][1] !== "" && matrix[2][0] !== ""){
			return true
		} 

		return false
	}

	onHandleClick = (row,col) =>{
		if(this.state.matrix[row][col] != ""){
			return
		}
		let tmatrix = this.state.matrix;
		tmatrix[row][col] = this.state.isNext
		
		if(this.onCheck(tmatrix)){

			window.alert(`${this.state.isNext} WON `)

			this.setState({
				matrix:[["","",""],["","",""],["","",""]],
				isNext:"X",
				count: 0
			});

		}
		else{

			if(this.state.count == 8){ 
				window.alert("Tie")

				this.setState({
					matrix:[["","",""],["","",""],["","",""]],
					isNext:"X",
					count: 0
				});

			}else{

				this.setState({
					matrix:tmatrix,
					isNext:(this.state.isNext === "X" )? "0" : "X",
					count: this.state.count + 1 
				});
			}
		}
	}

	render(){

		let grid = this.state.matrix.map((row,roxidx) => {
			return row.map((val,colidx) => {
			return <Square 
			value = {val} 
			onHandleClick = {this.onHandleClick} 
			row = {roxidx} 
			col = {colidx}/>
			 })
		});

		return(
			<div className = "Grid" >
			<h1>Tic Tac Toe</h1>
			<h3>Turn : {this.state.isNext}</h3>
			<div className = "Gridrow">
			{grid[0]}
			</div>
			<div className = "Gridrow">
			{grid[1]}
			</div>
			<div className = "Gridrow">
			{grid[2]}
			</div>
			</div>
		);
	}
}
export default Grid;
