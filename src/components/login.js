import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './css/styles.css'
import { useHistory } from 'react-router-dom'

const axios = require('axios');

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
    history.push('/search')
    }

	
	return(
		<div {...username} className="center">
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