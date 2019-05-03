import React from 'react';

const SearchBox = ({searchChange}) => {

	return (

		<div className='tc ma2'>
			<input 
				className='pa2 bg-light-blue'
				type='search' 
				placeholder='Search Robots'
				onChange={searchChange}
			/>
		</div>
		);
};

export default SearchBox