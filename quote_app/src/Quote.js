import React from 'react';

class Quote extends React.Component{
	render()
	{
		return(
		<div className='random'>
    	    <blockquote>Sometimes its the people no one imagines
    	    who can do the things no one <b><em>can</em></b> imagine.</blockquote>
        	<cite>- The Imitation Game</cite>
        	<button className='br-pill shadow-5 grow pa3 ma4'>
        	Generate Random Quote
        	</button>
      	</div>
		);
	}
}

export default Quote;
