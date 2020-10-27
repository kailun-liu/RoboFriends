import React from 'react';
import Card from './Card'

// const Cardlist = ({ robots }) => {
// 	const cardArray = robots.map((user, i)=>{
// 		return (<Card 
// 		key= {i} 
// 		id = {robots[i].id} 
// 		name={robots[i].name} 
// 		email={robots[i].email}/>
// 		)
// 	})
// 	return (
// 	  <div>
// 		  {cardArray}
// 	  </div>
// 		);
// }

const Cardlist = ({ robots }) => {
	// if (true) {
	// 	throw new Error("NOoooooo")
	// }
	return (
	  <div>
		{robots.map((user, i)=>{
			return (
				<Card 
				key= {i} 
				id = {robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}/>
			)
		})
		}
	  </div>
		);
}


export default Cardlist;