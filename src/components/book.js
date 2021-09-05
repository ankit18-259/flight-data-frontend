import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './css/styles.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

const axios = require('axios')

/**
 * book call to the backend for registering the booking of the itenerary
 * @param {Object} data booking data using localstorage and data entered by user
 */ 
async function bookFlight(data) {
	axios.post('http://localhost:8080/book/book',{
		headers: {
         'Content-Type': 'application/json'
        },
        body: data
	})
	.then(console.log(data))
}

/**
 * @returns {HTML} HTML form for booking the flight
 */

function Book() {

	let history = useHistory()
	const [name, setName] = useState()
	const [age, setAge] = useState()
	const [dob, setDob] = useState()
	const [contact, setContact] = useState()
	const [email, setEmail] = useState()
	var username, source, destination, date

	const handleSubmit = async e => {
		e.preventDefault();
		//get data from localstorage to push with the POST request
		username = localStorage.getItem('username')
		source = localStorage.getItem('source')
		destination = localStorage.getItem('destination')
		date = localStorage.getItem('date')
		
		bookFlight({ 
			username,
			name, 
			age, 
			dob, 
			contact, 
			email,
			source,
			destination,
			date
		});
		console.log('submitted')

		history.push('/search')
	}

	return(
		<div className='center'>
			<form onSubmit={handleSubmit} className='margin-30' noValidate autoComplete="off">
  				<TextField className='margin-10' id="outlined-basic" label="FULL NAME" variant="outlined" onChange={e => setName(e.target.value)} />
  				<TextField className='margin-10' id="outlined-basic" label="AGE" variant="outlined" onChange={e => setAge(e.target.value)} />
  				<br />
  				<TextField className='margin-10' id="outlined-basic" label="D.O.B" variant="outlined" onChange={e => setDob(e.target.value)} />
  				<TextField className='margin-10' id="outlined-basic" label="CONTACT" variant="outlined" onChange={e => setContact(e.target.value)} />
  				<br />
  				<TextField className='margin-10' id="outlined-basic" label="EMAIL" variant="outlined" onChange={e => setEmail(e.target.value)} />
				<Button type='submit' className='left-40' variant="contained" color="primary">
					Submit
				</Button>
			</form>			
		</div>
		)
}

export default Book;