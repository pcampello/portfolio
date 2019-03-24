import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
      	<Grid>
      		<Cell col={4}>
      			<div style={{textAlign: 'center'}}>
      				<img 
      					src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
      					alt="avatar"
      					style={{height: '200px'}}
      				/>
      				<h2 style={{paddingTop: '2em'}}>Paulo Campello</h2>
      				<h4 style={{color: 'grey'}}>Programmer</h4>
      				<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      				<p>
      					- Extract information from Totvs ERP system; 
						- Create management reports, process & performance improvements; 
						- Develop and implement new software programs; 
						- Maintain and improve the performance of existing software; 
						- Cleary and regularly communicate with management and technical support colleagues;      					
      				</p>
      				<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      				<h5>E-mail</h5>
      				<p>pcampello19@gmail.com</p>
      			</div>
      		</Cell>
      		<Cell className="resume-right-col" col={8}>
      			<h2>Education</h2>
      			<Education 
      				startYear={2018}
      				endYear={2019}
      				schoolName={"ILAC"}
      				schoolDescription={"ILAC Internation College"}
      			/>	
      			<Education 
      				startYear={2008}
      				endYear={2013}
      				schoolName={"SENAC"}
      				schoolDescription={"FATEC Faculdade SENAC de Tecnologia"}
      			/>
      			<hr style={{borderTop: '3px solid #e22947'}} />
      			<h2>Experience</h2>
      			<Experience
      				startYear={2013}
      				endYear={2017}
      				companyName={"MOR"}
      				companyDescription={"Metalúrgica MOR S/A"}
      			/>
      			<Experience
      				startYear={2008}
      				endYear={2013}
      				companyName={"TOTVS"}
      				companyDescription={"TOTVS"}      			
      			/>
      			<hr style={{borderTop: '3px solid #e22947'}} />
      			<h2>Skills</h2>
      			<Skills 
      				skill="Progress 4GL"
      				progress={98}
      			/>
      			<Skills 
      				skill="Php"
      				progress={90}
      			/>
      			<Skills 
      				skill="Java"
      				progress={90}
      			/>
      			<Skills 
      				skill="Javascript"
      				progress={80}
      			/>
      			
      			
      		</Cell>

      	</Grid>


      </div>
    )
  }
}

export default Resume;