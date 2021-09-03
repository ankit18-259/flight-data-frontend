
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Result from './result.js'
const axios = require('axios')

async function searchFlight(request) {
	axios.get('http://localhost:8080/search', request).then(res => {
      		console.log(res.data)
		})
}

function FlightSearch() {

	const [source, setSource] = useState()
	const [destination, setDestination] = useState()
	const [date, setDate] = useState()
	let history = useHistory();



	// const handleSubmit = async e => {

	//     	history.push('/result')
	//     }	

	return(
		<div>
			<form className='margin-30' noValidate autoComplete="off">
  				<TextField className='margin-10' id="outlined-basic" label="SOURCE" variant="outlined" onChange={e => setSource(e.target.value)}/>
  				<br />				
  				<TextField className='margin-10' id="outlined-basic" label="DESTINATION" variant="outlined" onChange={e => setDestination(e.target.value)}/>
  				<br />
  				<TextField className='margin-10' id="outlined-basic" label="DATE" variant="outlined" onChange={e => setDate(e.target.value)}/>
  				
  				<Button type='submit' className='left-40' variant="contained" color="primary">
					Submit
				</Button>
			</form>
			<Result source={ source } destination={ destination } date={ date } />
		</div>
		)
}

export default FlightSearch;