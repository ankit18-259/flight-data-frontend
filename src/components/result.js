
//essential imports
import React, { useState, Component } from 'react'
import { Redirect } from "react-router-dom";

//UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


//using axios for api calls
const axios = require('axios')

//class component used
class Result extends Component {

	//defined state for the app
	state={
		data: [],
		redirect: null
	}

	//constructor used to query data
	constructor() {
		super();
		//using localstorage for communication of search data from previous page
		axios.get(`http://localhost:8080/search?source=${localStorage.getItem('source')}&destination=${localStorage.getItem('destination')}&date=${localStorage.getItem('date')}`)
		.then(res => {
      		this.setState({data: res.data})
			})
	}


	render() {

	const handleSubmit = e => {
		localStorage.setItem('flightNumber', this.state.data.flightNumber)		//returns undefined. need to improve
		localStorage.setItem('flightCompany', this.state.data.flightCompany)	//returns undefined. need to improve
		this.setState({ redirect: "/book" });
	}

	//redirect logic based on state
	if (this.state.redirect) {
    	return <Redirect to={this.state.redirect} />
  	}	
	return(
		<div>
			<Container maxWidth="sm">		
				{ this.state.data.map(data =>  
					<Card variant="outlined">
				      <CardContent>
				        <Typography color="textSecondary" gutterBottom>
				          { data.flightNumber }
				        </Typography>
				        <Typography variant="h5" component="h2">
				          { data.flightCompany }
				        </Typography>
				        <Typography color="textSecondary">
				          { data.date }
				        </Typography>
				        <Typography variant="body2" component="p">
				          Source: { data.source }
				          <br />
				          Destination: { data.destination }
				        </Typography>
				      </CardContent>
				      <CardActions>
				        <Button onClick={handleSubmit} size="small">BOOK</Button>
				      </CardActions>
	    			</Card>
					)}
			</Container>
		</div> 
		)
	}
}

export default Result;