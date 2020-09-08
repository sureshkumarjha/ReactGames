import React from 'react';

function Square(props){
		
		/*
		props:

		value : value of Square
		row : row value
		col : column value
		squareStyle : Function( props value ) -> return(Object) styles for Square
		onSquareClick : Function( props row, props col ) -> onClick event
		
		*/

		return(
			<div className = "Square" 
			style = {props.squareStyle(props.value)} 
			onClick = {()=>{props.onSquareClick(props.row,props.col)}}>
			<div className = "reactShadow">
			{props.value}
			</div>
			</div>
		);
}
export default Square;