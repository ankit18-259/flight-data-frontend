 
//essential imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

//UI imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './css/styles.css'

//using axios for api requests
const axios = require('axios');


/**
 * Function for logging in the user using a post request
 * initiated by the axios library
 * @param {Object} credentials login details of the user to log the user in
 */

async function loginUser(credentials) {
	axios.post('http://localhost:8080/users/login', {
	 	method: 'POST',
	   	headers: {
	    	'Content-Type': 'application/json'
	   	},
	   	body: credentials
	 })
		.then((response) => {
			console.log(response.data);
		})
}




/**
 * functional component for displaying form for login and 
 * handling various other state related tasks and api calls
 * @returns {HTML} HTML form for searching Flight Data
 */

function Login() {

	const [username, setUserName] = useState();
  	const [password, setPassword] = useState();
  	let history = useHistory();
  	const handleSubmit = async e => {
    	e.preventDefault();
    	loginUser({
      		username,
      		password
    	});
    	localStorage.setItem('username', username)  //using localstorage for temporary storage of data 
    	history.push('/search')
    }

	
	return(
		<div className="center">
      		<form onSubmit={handleSubmit} className='margin-30' noValidate autoComplete="off">
  				<TextField className='margin-10' id="outlined-basic" label="USERNAME" variant="outlined" onChange={e => setUserName(e.target.value)} />
  				<TextField className='margin-10' id="outlined-basic" type="password" label="PASSWORD" variant="outlined" onChange={e => setPassword(e.target.value)} />
  				<Button type='submit' className='left-40' variant="contained" color="primary">
					Submit
				</Button>
			</form>

    	</div>
		)
}



export default Login;