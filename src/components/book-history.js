
//Importing various components
import { Component } from 'react'

//UI components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//Using axios for api requests
const axios = require('axios')

/**
 * class component used for ease of state data handling
 * Uses States and localstorage to present data
 * returns booked history data
 * @class
 */

class BookHistory extends Component {

	//defined a state 
	state ={
		data: []
	}

	//constructor queries data from server and stores the state 
	constructor() {
		super();
		axios.get(`http://localhost:8080/book/gethistory?username=${localStorage.getItem('username')}`)
			.then(res => {
      		this.setState({data: res.data})
      		console.log(res.data)	//for debugging
		})	
	}

	//render function for showing data. Used `.map` method for rendering data
	render() {
		return(
			<div>
				{this.state.data.map(data =>

					<Card variant="outlined">
				      <CardContent>
				        <Typography color="textSecondary" gutterBottom>
				          { data.flightNumber }
				        </Typography>
				        <Typography variant="h5" component="h2">
				          { data.flightCompany }
				        </Typography>
				        <Typography color="textSecondary">
				          Travel Date: { data.date }
				          <br /> 
				          Traveller Name: { data.name }
				          <br />
				          Contact: { data.contact }
				        </Typography>
				        <Typography variant="body2" component="p">
				          Source: { data.source }
				          <br />
				          Destination: { data.destination }
				        </Typography>
				      </CardContent>
	    			</Card>
					)}
			</div>
			)
	}
}


export default BookHistory;