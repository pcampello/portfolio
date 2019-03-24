import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
	      <Grid className="landing-grid">
	      	<Cell col={12}>
	      		<img 
	      			src="https://i.pinimg.com/originals/af/25/49/af25490494d3338afef00869c59fdd37.png"
	      			alt="avatar"
	      			className="avatar-img"
	      		/>
	      		<div className="banner-text">
		      		<h1>Full Stack Web Developer</h1>
		      		<hr/>
		      		<p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express | MongoDb</p>


  					{/* LinkedIn */}
		      		<div className="social-links">		      		
		      			<a href="http://google.com" rel="noopener noreferrer" target="_blank">
		      				<i className="fa fa-linkedin-square" aria-hidden="true" />
		      			</a>
	      			
	      				{/* Github */}		      		
		      			<a href="http://google.com" rel="noopener noreferrer" target="_blank">
		      				<i className="fa fa-github-square" aria-hidden="true" />
		      			</a>
	      			
	      				{/* Freecodecamp */}		      			
		      			<a href="http://google.com" rel="noopener noreferrer" target="_blank">
		      				<i className="fa fa-free-code-camp" aria-hidden="true" />
		      			</a>	      			
	      				{/* Youtube */}		      		
		      			<a href="http://google.com" rel="noopener noreferrer" target="_blank">
		      				<i className="fa fa-youtube-square" aria-hidden="true" />
		      			</a>
	      			</div>
      			</div>
	      	</Cell>
	      </Grid>
	  </div>
    )
  }
}

export default Landing;