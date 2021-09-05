
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Result from './result.js'
const axios = require('axios')

/**
 * @returns {HTML} HTML form for searching Flight Data
 */

function FlightSearch() {

	const [source, setSource] = useState()
	const [destination, setDestination] = useState()
	const [date, setDate] = useState()
	let history = useHistory();

	const handleSubmit = () => {
      localStorage.setItem('source', source);
      localStorage.setItem('destination', destination);
      localStorage.setItem('date', date);
      history.push('/result')
   };
	return(
		<div>
			<form onSubmit={ handleSubmit } className='margin-30' noValidate autoComplete="off">
  				<TextField className='margin-10' id="outlined-basic" label="SOURCE" variant="outlined" onChange={e => setSource(e.target.value)}/>
  				<br />				
  				<TextField className='margin-10' id="outlined-basic" label="DESTINATION" variant="outlined" onChange={e => setDestination(e.target.value)}/>
  				<br />
  				<TextField id="date" label="TRAVEL DATE" type="date" variant="outlined" InputLabelProps={{ shrink: true, }} onChange={e => setDate(e.target.value)} />  				
  				<Button type='submit' className='left-40' variant="contained" color="primary">
					Submit
				</Button>
			</form>
		</div>
		)
}

export default FlightSearch;