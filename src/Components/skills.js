import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
	render() {
		return (
			<Grid>
				<Cell col={3}>
					<div style={{display: 'flex'}}>
						{this.props.skill} 
					</div>
				</Cell>
				<Cell col={3}>
					<ProgressBar style={{margin: '10px', width: '75%'}} progress={this.props.progress} />
				</Cell>
				<Cell col={3}>
					<div style={{display: 'flex'}}>
						{this.props.skill1} 
					</div>
				</Cell>
				<Cell col={3}>
					<ProgressBar style={{margin: '10px', width: '75%'}} progress={this.props.progress1} />
				</Cell>
			</Grid>
		)	
	}
}

export default Skills;