import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
	static propTypes = {
		showing: PropTypes.bool.isRequired,
		backgroundColor : PropTypes.string.isRequired,
		onClick : PropTypes.func.isRequired
	}
	render(){
		const {showing,backgroundColor,onClick,id} = this.props;
		let style = {};
		if(showing){
			style.backgroundColor = backgroundColor; 
		}
		return(
			<div>
				<div 
					onClick={() => onClick(id)}
					className='card' 
					style={style} 
				/> 
			</div>
		)
	}
}

export default Card;
