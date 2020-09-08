import React from 'react';
import Square from './Square';

function Grid(props){
	/*
	props:

	matrix : mapping matrix to grid
	squareStyle : Function( props value ) -> return(Object) styles for Square
	onSquareClick : Function( props row, props col ) -> onClick event
	
	*/

	let grid = props.matrix.map((row,roxidx) => {
		return <div className = "Gridrow">{
		row.map((val,colidx) => {
			return <Square 
					value = {val} 
					onSquareClick = {props.onSquareClick} 
					squareStyle = {props.squareStyle}
					row = {roxidx} 
					col = {colidx}
					/>
			 })}
		</div>
	});

	return(
		<div className = "Grid" >
			{grid}
		</div>
	);
}
export default Grid;
