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
      				<h4 style={{color: 'grey'}}>Software Developer</h4>
      				<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      				<p>
      					Highly experienced software developer, over ten years of experience
                                    with Totvs ERP system, developing, testing and deployment. Making
                                    applications to increase process efficiency, presenting solutions to
                                    decrease expense, creating management reports and training users.
      				</p>
      				<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      				<h5>E-mail</h5>
      				<p>pcampello19@gmail.com</p>
      			</div>
      		</Cell>
      		<Cell className="resume-right-col" col={8}>
                        <h2>Experience</h2>
                        <Experience
                              startYear={2013}
                              endYear={2018}
                              companyName={"MOR, Santa Cruz do Sul / RS - Brazil - Software Developer"}
                              companyDescription={`Extract information from Totvs ERP system Create management reports, process & performance improvements 
                              Develop and implement new software programs Maintain and improve the performance of existing software Cleary and regularly communicate 
                              with management and technical support colleagues`}
                        />
                        <Experience
                              startYear={2010}
                              endYear={2013}
                              companyName={"Totvs, Porto Alegre / RS - Brazil - Software Developer"}
                              companyDescription={`Customize Totvs ERP System, users training, systems integration, performance improvements, develop, testing and deployment applications
                              Test and maintain software products to ensure strong functionality and optimization
                              Integrate software components and third-party programs
                              Working closely with analysts, database administrators and staff
                              `}                    
                        />
                        <Experience
                              startYear={2008}
                              endYear={2010}
                              companyName={"Datasul, Porto Alegre / RS - Brazil - Software Developer"}
                              companyDescription={`Develop application to improve ERP system, solve user concern, system testing and debugging, users training
                              Design and update software database
                              managing database integrity, access, backup procedures
                              Fixing and improving existing software
                              Migrating existing data from legacy platforms such as text files and spreadsheets
                              `}                    
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
      			<h2>Education</h2>
      			<Education 
      				startYear={2008}
      				endYear={2011}
      				schoolName={"Systems Analysis and Development Technology, Degree - FATEC, RS - Brazil"}
      				schoolDescription={""}
      			/>	
      			<Education 
      				startYear={2006}
      				endYear={2008}
      				schoolName={"Information Technology Technical Course, Diploma - Pallotti, RS - Brazil"}
      				schoolDescription={""}
      			/>
                        <Education 
                              startYear={2008}
                              endYear={2008}
                              schoolName={"Java SE Programming Course, Diploma - SENAC,  RS - Brazil"}
                              schoolDescription={""}
                        />
                        <Education 
                              startYear={20019}
                              endYear={2019}
                              schoolName={"Service Excellence for Business, Diploma - ILAC International College,  Toronto - Canada"}
                              schoolDescription={""}
                        />
      			<hr style={{borderTop: '3px solid #e22947'}} />      			
      			<h2>Skills</h2>
      			<Skills 
      				skill="Progress 4GL"
      				progress={98}
                              skill1="Php"
                              progress1={90}
      			/>      			
      			<Skills 
      				skill="Java"
      				progress={90}
                              skill1="Javascript"
                              progress1={80}
      			/>
      			
                        <Skills 
                              skill="PostgreSQL"
                              progress={80}
                              skill1="MYSQL"
                              progress1={80}
                        />                        
                        <Skills 
                              skill="MongoDB"
                              progress={80}
                              skill1="SQL Server"
                              progress1={80}
                        />
                        <Skills 
                              skill="NodeJs"
                              progress={80}
                              skill1="React"
                              progress1={40}
                        />
                        <Skills 
                              skill="Angular"
                              progress={30}
                              skill1="VueJs"
                              progress1={30}
                        />
                        <Skills 
                              skill="Windows"
                              progress={70}
                              skill1="Linux"
                              progress1={70}
                        />
                        
      			
      			
      		</Cell>

      	</Grid>


      </div>
    )
  }
}

export default Resume;