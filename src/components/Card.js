import React from 'react';


const Card = ({name, email, id}) => {
	// const {name, email, id} = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 showdow-5'>
			<img alt='Robot' src={`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2 className = 'f6'>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;